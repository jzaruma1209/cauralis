import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().optional(),
  servicio: z.string().min(1),
  mensaje: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Phase 5b — integrar Supabase y Resend
    console.log("Datos recibidos:", validatedData);

    return NextResponse.json(
      { message: "Mensaje recibido correctamente" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues ?? error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
