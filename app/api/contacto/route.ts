import { NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { transporter, EMAIL_FROM, EMAIL_TO } from "@/lib/email/gmail";

// ─── Schema de validación ────────────────────────────────────────────────────
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().min(10, "El mensaje es demasiado corto"),
});

// ─── Rate Limiting básico (in-memory) ────────────────────────────────────────
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;        // máximo 3 envíos
const RATE_LIMIT_WINDOW = 60_000; // por minuto

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;

  record.count++;
  return true;
}

// ─── Handler POST ─────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Espera un minuto antes de intentarlo de nuevo." },
        { status: 429 }
      );
    }

    // 2. Validar el body
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // 3. Guardar en Supabase
    const supabase = createServerSupabaseClient();
    const { error: dbError } = await supabase.from("mensajes").insert([
      {
        nombre: validatedData.nombre,
        email: validatedData.email,
        telefono: validatedData.telefono ?? null,
        servicio: validatedData.servicio,
        mensaje: validatedData.mensaje,
        leido: false,
      },
    ]);

    if (dbError) {
      console.error("Error al guardar en Supabase:", dbError);
      return NextResponse.json(
        { error: "No se pudo guardar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    // 4. Enviar email de notificación al admin (Gmail SMTP)
    try {
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `📬 Nuevo mensaje de ${validatedData.nombre} — Cauralis`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#0A1426;color:#e2e8f0;border-radius:12px;">
            <h2 style="color:#06BFAD;margin-bottom:4px;">Nuevo mensaje de contacto</h2>
            <p style="color:#94a3b8;margin-bottom:24px;font-size:14px;">Recibido desde el formulario de cauralis.com</p>
            
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:120px;">Nombre</td>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-weight:600;">${validatedData.nombre}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;"><a href="mailto:${validatedData.email}" style="color:#06BFAD;">${validatedData.email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Teléfono</td>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;">${validatedData.telefono ?? "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Servicio</td>
                <td style="padding:10px 0;border-bottom:1px solid #1e293b;">${validatedData.servicio}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#94a3b8;font-size:13px;vertical-align:top;">Mensaje</td>
                <td style="padding:10px 0;line-height:1.6;">${validatedData.mensaje}</td>
              </tr>
            </table>

            <p style="margin-top:24px;font-size:12px;color:#475569;">Cauralis — Sistema de notificaciones automáticas</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Error al enviar email de notificación:", emailError);
    }

    // 5. Enviar email de bienvenida al cliente
    try {
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: validatedData.email,
        subject: `¡Gracias por contactarnos, ${validatedData.nombre}! — Cauralis`,
        html: `
          <div style="font-family:'Segoe UI',Roboto,sans-serif;max-width:600px;margin:auto;background:#0A1426;border-radius:16px;overflow:hidden;">
            
            <!-- Header con gradiente -->
            <div style="background:linear-gradient(135deg,#06BFAD 0%,#0A1426 100%);padding:40px 32px 32px;">
              <div style="margin-bottom:16px;">
                <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Cauralis</span>
              </div>
              <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0 0 8px;">
                ¡Hola ${validatedData.nombre}! 👋
              </h1>
              <p style="color:rgba(255,255,255,0.8);font-size:15px;margin:0;line-height:1.5;">
                Hemos recibido tu mensaje correctamente.
              </p>
            </div>

            <!-- Cuerpo -->
            <div style="padding:32px;">
              <p style="color:#e2e8f0;font-size:15px;line-height:1.7;margin:0 0 20px;">
                Gracias por interesarte en nuestros servicios. Tu solicitud sobre 
                <strong style="color:#06BFAD;">${validatedData.servicio}</strong> 
                ya está en nuestro sistema y un miembro de nuestro equipo la revisará muy pronto.
              </p>

              <p style="color:#e2e8f0;font-size:15px;line-height:1.7;margin:0 0 24px;">
                Nos pondremos en contacto contigo en las próximas <strong style="color:#06BFAD;">24 horas</strong> 
                para conversarlo en detalle y encontrar la mejor solución para ti.
              </p>

              <!-- Resumen del mensaje -->
              <div style="background:#111B2E;border:1px solid #1e293b;border-radius:12px;padding:20px;margin-bottom:24px;">
                <p style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;font-weight:600;">
                  Resumen de tu mensaje
                </p>
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px 0;color:#94a3b8;font-size:13px;width:90px;vertical-align:top;">Servicio</td>
                    <td style="padding:8px 0;color:#e2e8f0;font-size:13px;">${validatedData.servicio}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#94a3b8;font-size:13px;vertical-align:top;">Mensaje</td>
                    <td style="padding:8px 0;color:#e2e8f0;font-size:13px;line-height:1.5;">${validatedData.mensaje}</td>
                  </tr>
                </table>
              </div>

              <!-- CTA WhatsApp -->
              <div style="text-align:center;margin-bottom:24px;">
                <p style="color:#94a3b8;font-size:13px;margin:0 0 12px;">¿Necesitas una respuesta más rápida?</p>
                <a href="https://wa.me/593990099265?text=Hola%20Cauralis%2C%20acabo%20de%20enviar%20un%20formulario%20y%20quisiera%20más%20información" 
                   style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">
                  💬 Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background:#060D1A;padding:20px 32px;text-align:center;border-top:1px solid #1e293b;">
              <p style="color:#475569;font-size:12px;margin:0;line-height:1.6;">
                © ${new Date().getFullYear()} Cauralis — Productos Digitales<br/>
                Este correo fue enviado porque completaste nuestro formulario de contacto.
              </p>
            </div>
          </div>
        `,
      });
    } catch (welcomeError) {
      console.error("Error al enviar email de bienvenida:", welcomeError);
    }

    // 6. Respuesta de éxito
    return NextResponse.json(
      { message: "¡Mensaje recibido! Te contactaremos pronto." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues.map((i) => i.message).join(", ") },
        { status: 400 }
      );
    }

    console.error("Error inesperado en API contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
