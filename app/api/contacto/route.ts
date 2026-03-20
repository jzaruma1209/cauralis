import { NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { resend, EMAIL_FROM, EMAIL_TO } from "@/lib/email/resend";

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

    // 4. Enviar email de notificación con Resend
    const { error: emailError } = await resend.emails.send({
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

    if (emailError) {
      // El mensaje ya se guardó en DB; el email es no-bloqueante
      console.error("Error al enviar email con Resend:", emailError);
    }

    // 5. Respuesta de éxito
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
