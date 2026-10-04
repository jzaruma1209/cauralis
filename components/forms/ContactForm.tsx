"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { servicios } from "@/lib/data/servicios";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-subtle transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/25 aria-[invalid=true]:border-destructive";

function MensajeError({ id, mensaje }: { id: string; mensaje?: string }) {
  if (!mensaje) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle size={13} aria-hidden="true" /> {mensaje}
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-12 text-center" role="status">
        <CheckCircle2 className="text-brand-2" size={44} aria-hidden="true" />
        <h2 className="text-2xl font-semibold">¡Mensaje enviado!</h2>
        <p className="max-w-sm leading-relaxed text-muted-foreground">
          Gracias por escribirnos. Te responderemos en menos de 24 horas.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 h-11 rounded-lg px-4 text-sm font-semibold text-brand hover:bg-muted"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-6 rounded-3xl border border-border bg-card p-6 sm:p-10"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            {...register("nombre")}
            className={inputClass}
            placeholder="Juan Pérez"
          />
          <MensajeError id="nombre-error" mensaje={errors.nombre?.message} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className={inputClass}
            placeholder="juan@empresa.com"
          />
          <MensajeError id="email-error" mensaje={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
            Teléfono <span className="font-normal text-subtle">(opcional)</span>
          </label>
          <input
            id="telefono"
            type="tel"
            autoComplete="tel"
            {...register("telefono")}
            className={inputClass}
            placeholder="+593 99 999 9999"
          />
        </div>
        <div>
          <label htmlFor="servicio" className="mb-2 block text-sm font-medium">
            Servicio de interés
          </label>
          <select
            id="servicio"
            aria-invalid={!!errors.servicio}
            aria-describedby={errors.servicio ? "servicio-error" : undefined}
            {...register("servicio")}
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {servicios.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.nombre}
              </option>
            ))}
            <option value="asesoria">Aún no lo sé, quiero asesoría</option>
          </select>
          <MensajeError id="servicio-error" mensaje={errors.servicio?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
          ¿Cómo podemos ayudarte?
        </label>
        <textarea
          id="mensaje"
          rows={5}
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
          {...register("mensaje")}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos sobre tu negocio y lo que necesitas…"
        />
        <MensajeError id="mensaje-error" mensaje={errors.mensaje?.message} />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/30 p-4 text-sm text-destructive" role="alert">
          <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
          No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-13 w-full items-center justify-center gap-2.5 rounded-[var(--radio-boton,0.75rem)] bg-primary py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={19} aria-hidden="true" /> Enviando…
          </>
        ) : (
          <>
            <Send size={17} aria-hidden="true" /> Enviar mensaje
          </>
        )}
      </button>

      <p className="text-center text-xs text-subtle">
        Al enviar aceptas que te contactemos para responder tu solicitud.
      </p>
    </form>
  );
}
