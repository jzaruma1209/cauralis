import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function ContactoCTA() {
  return (
    <section id="contacto" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pb-8 pt-32 sm:px-6 lg:pt-40">
      <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14 lg:flex-row lg:items-center lg:p-20">
        <div
          className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[520px] bg-[radial-gradient(closest-side,rgb(34_195_230/0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
            Cuéntanos tu idea.
            <br />
            Te respondemos en 24 horas.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Sin compromiso. Recibes una propuesta con alcance, tiempos y precio cerrado.
          </p>
        </div>
        <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contacto"
            className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Escribir mensaje <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-input px-6 font-medium transition-colors hover:bg-muted"
          >
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
