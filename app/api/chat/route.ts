import { NextResponse } from "next/server";
import * as z from "zod";

/*
 * Punto de conexión del chat de la página (burbuja abajo a la derecha).
 *
 * Todavía NO está conectado a ningún bot. Para conectarlo, define la variable de entorno
 * CHATBOT_WEBHOOK_URL (por ejemplo, la URL de un Webhook de n8n) en Vercel y en .env.local.
 *
 * Este endpoint le envía al webhook un POST con JSON:
 *   { "mensaje": "texto del cliente", "sesionId": "id único de la conversación",
 *     "historial": [{ "rol": "usuario" | "asistente", "texto": "..." }] }
 *
 * y espera de vuelta un JSON con la respuesta del bot en cualquiera de estos campos:
 *   { "respuesta": "..." }  ó  { "output": "..." }  (salida por defecto del AI Agent de n8n)
 */

const chatSchema = z.object({
  mensaje: z.string().trim().min(1).max(2000),
  sesionId: z.string().min(1).max(100),
  historial: z
    .array(z.object({ rol: z.enum(["usuario", "asistente"]), texto: z.string().max(4000) }))
    .max(30)
    .default([]),
});

export async function POST(request: Request) {
  const webhook = process.env.CHATBOT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ conectado: false }, { status: 503 });
  }

  let datos: z.infer<typeof chatSchema>;
  try {
    datos = chatSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Mensaje inválido" }, { status: 400 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) throw new Error(`El webhook respondió ${res.status}`);

    const cuerpo = await res.json();
    const respuesta = cuerpo?.respuesta ?? cuerpo?.output ?? cuerpo?.text;
    if (typeof respuesta !== "string" || !respuesta.trim()) throw new Error("Respuesta vacía del webhook");

    return NextResponse.json({ respuesta });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    return NextResponse.json({ error: "El asistente no está disponible" }, { status: 502 });
  }
}
