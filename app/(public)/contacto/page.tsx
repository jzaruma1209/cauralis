import type { Metadata } from "next";
import { Bot, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { site, whatsappBotLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntanos tu proyecto y recibe una propuesta con alcance, tiempos y precio cerrado.",
  alternates: { canonical: "/contacto" },
};

const canales = [
  {
    titulo: "Hablar con un asesor",
    detalle: `WhatsApp ${site.whatsappAsesorVisible}`,
    href: whatsappLink(),
    icono: MessageCircle,
    externo: true,
  },
  {
    titulo: "Asistente virtual 24/7",
    detalle: `WhatsApp ${site.whatsappBotVisible}`,
    href: whatsappBotLink(),
    icono: Bot,
    externo: true,
  },
  {
    titulo: "Correo",
    detalle: site.email,
    href: `mailto:${site.email}`,
    icono: Mail,
    externo: false,
  },
];

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-32 sm:px-6 lg:pt-40">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Cuéntanos tu idea. Te respondemos en menos de 24 horas.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sin compromiso. Recibes una propuesta con alcance, tiempos y precio cerrado.
          </p>

          <ul className="mt-12 space-y-4">
            {canales.map((c) => (
              <li key={c.titulo}>
                <a
                  href={c.href}
                  {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <c.icono size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{c.titulo}</span>
                    <span className="block truncate text-sm text-muted-foreground">{c.detalle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
