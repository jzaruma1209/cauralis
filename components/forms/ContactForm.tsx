"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().min(10, "El mensaje debe ser más detallado"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "w-full bg-background-dark/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

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
      <div className="bg-primary/8 border border-primary/20 rounded-2xl p-12 text-center flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mb-2">
          <CheckCircle className="text-primary" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-100">¡Mensaje enviado!</h3>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          Gracias por contactarnos. Te responderemos en menos de 24 horas.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-bold hover:underline mt-2 text-sm transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-6 bg-accent-blue/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-10"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-slate-300">
            Nombre completo <span className="text-primary">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            {...register("nombre")}
            className={inputClass}
            placeholder="Juan Pérez"
          />
          {errors.nombre && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.nombre.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass}
            placeholder="juan@empresa.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Teléfono */}
        <div className="space-y-2">
          <label htmlFor="telefono" className="text-sm font-medium text-slate-300">
            Teléfono <span className="text-slate-600 font-normal">(opcional)</span>
          </label>
          <input
            id="telefono"
            type="tel"
            autoComplete="tel"
            {...register("telefono")}
            className={inputClass}
            placeholder="+51 987 654 321"
          />
        </div>

        {/* Servicio */}
        <div className="space-y-2">
          <label htmlFor="servicio" className="text-sm font-medium text-slate-300">
            Servicio de interés <span className="text-primary">*</span>
          </label>
          <select
            id="servicio"
            {...register("servicio")}
            className={`${inputClass} appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="landing-pages">Landing Pages</option>
            <option value="tarjetas-digitales">Tarjetas Digitales</option>
            <option value="catalogos-digitales">Catálogos Digitales</option>
            <option value="automatizaciones">Automatizaciones</option>
            <option value="ecommerce">Ecommerce</option>
          </select>
          {errors.servicio && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.servicio.message}
            </p>
          )}
        </div>
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-slate-300">
          ¿Cómo podemos ayudarte? <span className="text-primary">*</span>
        </label>
        <textarea
          id="mensaje"
          {...register("mensaje")}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos un poco sobre tu proyecto..."
        />
        {errors.mensaje && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.mensaje.message}
          </p>
        )}
      </div>

      {/* Error global */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/8 p-4 rounded-xl border border-red-400/20">
          <AlertCircle size={18} className="shrink-0" />
          Hubo un error al enviar. Por favor intenta de nuevo.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cta-gradient text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 hover:opacity-95 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar Mensaje
          </>
        )}
      </button>

      <p className="text-center text-slate-600 text-xs">
        Al enviar aceptas que nos pongamos en contacto contigo.
      </p>
    </form>
  );
}
