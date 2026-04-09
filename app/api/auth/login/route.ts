import { NextResponse } from "next/server";
import { signToken, COOKIE_NAME } from "@/lib/auth/jwt";

export async function POST(req: Request) {
  try {
    let { email, password } = await req.json();
    email = email?.trim();
    password = password?.trim();

    const adminEmail = process.env.ADMIN_EMAIL?.trim();
    const adminPassword = process.env.ADMIN_PASSWORD?.trim();

    if (!adminEmail || !adminPassword) {
      console.error("[LOGIN] Variables de entorno faltantes:", {
        hasEmail: !!adminEmail,
        hasPassword: !!adminPassword,
      });
      return NextResponse.json(
        { error: "Configuración de admin incompleta en el servidor." },
        { status: 500 }
      );
    }

    // Verificar credenciales directamente
    const emailMatch = email === adminEmail;
    const passwordMatch = password === adminPassword;

    if (!emailMatch || !passwordMatch) {
      // Espera artificial para evitar timing attacks
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json(
        { error: "Credenciales incorrectas." },
        { status: 401 }
      );
    }

    // Generar JWT
    const token = await signToken({ email });

    // Setear cookie HttpOnly
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 horas
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}
