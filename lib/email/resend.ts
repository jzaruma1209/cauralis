// ─── RESEND (INACTIVO) ────────────────────────────────────────────────────────
// Este módulo está DESACTIVADO temporalmente.
// Para reactivarlo:
// 1. Verifica el dominio cauralis.com en https://resend.com/domains
// 2. Cambia el import en app/api/contacto/route.ts de "@/lib/email/gmail" a "@/lib/email/resend"
// 3. Descomenta el código abajo y cambia EMAIL_FROM a "Cauralis <hola@cauralis.com>"

/*
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Falta la variable de entorno RESEND_API_KEY");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = "Cauralis <hola@cauralis.com>";
export const EMAIL_TO = "zpaul3981@gmail.com";
*/
