import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protege todas las rutas de /aurora excepto la página de login y las API de auth
  const isAuthAPI = pathname.startsWith("/api/auth");
  const isLoginPage = pathname === "/aurora";
  const isProtected = pathname.startsWith("/aurora") && !isLoginPage;

  if (isAuthAPI || !isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;
  const session = token ? await verifyToken(token) : null;

  if (!session) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/aurora";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/aurora/:path*"],
};
