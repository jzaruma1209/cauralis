import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  Database,
  MessageCircle,
  MessagesSquare,
  Workflow,
  X,
} from "lucide-react";
import { comoFunciona, conChatbot, diferenciales, sinChatbot } from "@/lib/data/chatbot";
import { whatsappBotLink, whatsappLink } from "@/lib/site";
import PromoChatbot from "@/components/sections/PromoChatbot";
import ChatAnimado from "@/components/animations/ChatAnimado";

const iconos = {
  canales: MessagesSquare,
  conocimiento: Database,
  ia: BrainCircuit,
  automatizacion: Workflow,
};

function IconoInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconoMessenger({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="m7.5 13.5 3-3 2.5 2 3.5-3.5" />
    </svg>
  );
}

const canales = [
  { nombre: "WhatsApp", icono: <MessageCircle size={17} aria-hidden="true" className="text-[#25d366]" /> },
  { nombre: "Instagram", icono: <IconoInstagram className="h-[17px] w-[17px] text-[#f0588d]" /> },
  { nombre: "Messenger", icono: <IconoMessenger className="h-[17px] w-[17px] text-[#3fa2ff]" /> },
];

export default function Chatbots() {
  return (
    <section id="chatbots" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-20 sm:px-6 sm:pt-32 lg:pt-40" aria-labelledby="chatbots-titulo">
      <PromoChatbot />

      {/* Intro + celular */}
      <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="eyebrow">Chatbots con IA · 24/7</p>
          <h2 id="chatbots-titulo" className="mt-3 text-[clamp(1.75rem,3.8vw,3rem)] sm:mt-3.5 font-semibold leading-[1.06] tracking-[-0.035em]">
            No pierdas más ventas. Deja que nuestros chatbots trabajen por ti 24/7.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Tus clientes escriben a cualquier hora, y el que responde primero suele quedarse con la venta. Nuestro
            asistente contesta al instante, resuelve dudas, toma pedidos y agenda citas, aunque tú estés ocupado o
            durmiendo.
          </p>

          <ul className="mt-6 grid grid-cols-3 gap-1.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-2.5" aria-label="Canales disponibles">
            {canales.map((c) => (
              <li key={c.nombre} className="inline-flex h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-2 text-[12px] font-medium sm:h-10 sm:gap-2 sm:px-4 sm:text-sm">
                {c.icono}
                {c.nombre}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href={whatsappLink("Hola Cauralis, quiero un chatbot para mi negocio")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quiero mi chatbot <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={whatsappBotLink("Hola, quiero probar el chatbot")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border border-input px-6 font-medium transition-colors hover:bg-muted"
            >
              <MessageCircle size={18} className="text-[#25d366]" aria-hidden="true" /> Pruébalo en WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-subtle">
            Escríbele a nuestro propio asistente y mira cómo responde.{" "}
            <Link href="/servicios/automatizaciones" className="text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Ver automatizaciones
            </Link>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[400px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgb(61_212_122/0.12),transparent)]"
          />
          {/* Celular con WhatsApp animado: los mensajes aparecen uno por uno y termina en una venta */}
          <ChatAnimado className="relative aspect-[9/16] h-auto w-full [mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,black_70%,transparent)]" />
        </div>
      </div>

      {/* Por qué tener un chatbot: con vs sin */}
      <div className="mt-16 sm:mt-28">
        <h3 className="max-w-2xl text-[clamp(1.4rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
          ¿Por qué tu negocio necesita un chatbot?
        </h3>
        <div className="carrusel-movil mt-6 sm:mt-10 sm:grid sm:gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">Sin chatbot</p>
            <ul className="mt-4 space-y-3 text-[15px] sm:mt-6 sm:space-y-4 sm:text-base">
              {sinChatbot.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <X size={18} className="mt-0.5 shrink-0 text-destructive" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-2/30 bg-card p-5 sm:p-8 shadow-[0_0_80px_rgb(61_212_122/0.06)]">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand-2">Con un chatbot de Cauralis</p>
            <ul className="mt-4 space-y-3 text-[15px] sm:mt-6 sm:space-y-4 sm:text-base">
              {conChatbot.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand-2" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Cómo está construido */}
      <div className="mt-16 sm:mt-28">
        <div className="flex flex-wrap items-end justify-between gap-2 sm:gap-6">
          <h3 className="max-w-2xl text-[clamp(1.4rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
            Cómo está construido
          </h3>
          <p className="font-mono text-[11px] text-subtle sm:text-[13px]">n8n · Supabase · IA conversacional · WhatsApp Business</p>
        </div>
        <ol className="carrusel-movil mt-6 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {comoFunciona.map((paso, i) => {
            const Icono = iconos[paso.icono];
            return (
              <li key={paso.titulo} className="relative rounded-2xl border border-border bg-card p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icono size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[13px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="mt-4 text-base font-semibold sm:mt-6 sm:text-lg">{paso.titulo}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{paso.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Por qué el nuestro es mejor */}
      <div className="mt-16 grid gap-8 rounded-3xl border border-border bg-card p-6 sm:mt-28 sm:gap-12 sm:p-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:p-16">
        <div>
          <h3 className="text-[clamp(1.4rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
            Por qué nuestro chatbot es diferente
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un bot genérico responde con menús y se queda ahí. El nuestro conversa, entiende tu negocio y hace el trabajo
            completo.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 sm:gap-y-8">
          {diferenciales.map((d) => (
            <li key={d.titulo}>
              <p className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 size={18} className="shrink-0 text-brand" aria-hidden="true" />
                {d.titulo}
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
