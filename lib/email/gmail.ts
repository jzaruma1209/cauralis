import nodemailer from "nodemailer";

// ─── Configuración Gmail SMTP ─────────────────────────────────────────────────
// Usa las variables de entorno GMAIL_USER y GMAIL_APP_PASSWORD
// Para obtener la contraseña de aplicación:
// 1. Ve a https://myaccount.google.com/apppasswords
// 2. Genera una contraseña para "Correo"
// 3. Copia el código de 16 letras en GMAIL_APP_PASSWORD en .env.local

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser || !gmailAppPassword) {
  console.warn("[EMAIL] GMAIL_USER o GMAIL_APP_PASSWORD no están definidos en .env.local");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

export const EMAIL_FROM = `Cauralis <${gmailUser}>`;
export const EMAIL_TO = "zpaul3981@gmail.com";
