import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

console.log('Verificando conexión con Gmail SMTP (IPv4/IPv6 explícito)...');

transporter.verify()
  .then(() => {
    console.log('✅ CONEXIÓN EXITOSA: Las credenciales de Gmail son válidas y el servidor está listo para enviar correos.');
  })
  .catch((error) => {
    console.error('❌ ERROR DE CONEXIÓN GMAIL:', error.message);
  });
