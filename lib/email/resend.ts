import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Falta la variable de entorno RESEND_API_KEY");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = "Cauralis <hola@cauralis.com>";
export const EMAIL_TO = "hola@cauralis.com";
