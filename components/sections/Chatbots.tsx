import Link from "next/link";
import Image from "next/image";
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
import { comoFunciona, conChatbot, conversacion, diferenciales, sinChatbot } from "@/lib/data/chatbot";
import { whatsappBotLink, whatsappLink } from "@/lib/site";
import PromoChatbot from "@/components/sections/PromoChatbot";

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

/* Celular con una conversación de ejemplo, a medianoche */
function CelularChat() {
  return (
    <div
      role="img"
      aria-label="Ejemplo: un cliente compra unas zapatillas por WhatsApp a las 23:51 y el chatbot cierra la venta"
      className="relative mx-auto h-[690px] w-full max-w-[460px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgb(61_212_122/0.14),transparent)]"
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-0 h-[630px] w-[300px] -translate-x-1/2 rounded-[44px] border border-white/10 bg-[#141a22] p-3 shadow-[0_40px_100px_rgb(0_0_0/0.6)]">
        <div className="flex h-full flex-col overflow-hidden rounded-[34px] bg-[#0b1015]">
          {/* Cabecera del chat */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#11171e] px-4 pb-3 pt-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Image src="/logo-mark.png" alt="Cauralis" width={22} height={22} className="h-[22px] w-[22px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-semibold">Tu negocio</p>
              <p className="flex items-center gap-1.5 text-[11px] text-brand-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> Asistente en línea 24/7
              </p>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden px-3 py-3 text-[12.5px] leading-snug">
            {conversacion.map((m, i) => (
              <div
                key={i}
                className={`max-w-[82%] rounded-2xl px-3 py-2 ${
                  m.de === "cliente"
                    ? "self-end rounded-br-md bg-[#144d38] text-[#e6fbef]"
                    : "self-start rounded-bl-md bg-secondary text-foreground"
                }`}
              >
                {m.texto}
                {"enlace" in m && (
                  <span className="mt-1.5 block rounded-lg bg-white/[0.06] px-2 py-1.5 font-mono text-[11px] text-brand">
                    {m.enlace}
                  </span>
                )}
                <span className="mt-1 block text-right text-[10px] opacity-60">{m.hora}</span>
              </div>
            ))}
          </div>

          {/* Caja de texto */}
          <div className="flex items-center gap-2 border-t border-white/[0.06] px-3 py-3">
            <span className="flex h-9 flex-1 items-center rounded-full bg-white/[0.06] px-3.5 text-[12px] text-subtle">Escribe un mensaje</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-2 text-background">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* Venta cerrada */}
      <div className="absolute bottom-0 right-0 w-[218px] rounded-2xl border border-border bg-card p-4 shadow-[0_20px_50px_rgb(0_0_0/0.5)]">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-brand-2">
          <CheckCircle2 size={15} /> Venta cerrada
        </p>
        <p className="mt-2 font-semibold">Pedido #1024 · $49</p>
        <p className="mt-0.5 text-[13px] text-muted-foreground">23:51 · mientras dormías</p>
      </div>
    </div>
  );
}

export default function Chatbots() {
  return (
    <section id="chatbots" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-32 sm:px-6 lg:pt-40" aria-labelledby="chatbots-titulo">
      <PromoChatbot />

      {/* Intro + celular */}
      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="eyebrow">Chatbots con IA · 24/7</p>
          <h2 id="chatbots-titulo" className="mt-3.5 text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
            No pierdas más ventas. Deja que nuestros chatbots trabajen por ti 24/7.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tus clientes escriben a cualquier hora, y el que responde primero suele quedarse con la venta. Nuestro
            asistente contesta al instante, resuelve dudas, toma pedidos y agenda citas, aunque tú estés ocupado o
            durmiendo.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Canales disponibles">
            {canales.map((c) => (
              <li key={c.nombre} className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium">
                {c.icono}
                {c.nombre}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

        <CelularChat />
      </div>

      {/* Por qué tener un chatbot: con vs sin */}
      <div className="mt-28">
        <h3 className="max-w-2xl text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
          ¿Por qué tu negocio necesita un chatbot?
        </h3>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">Sin chatbot</p>
            <ul className="mt-6 space-y-4">
              {sinChatbot.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <X size={18} className="mt-0.5 shrink-0 text-destructive" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-2/30 bg-card p-8 shadow-[0_0_80px_rgb(61_212_122/0.06)]">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand-2">Con un chatbot de Cauralis</p>
            <ul className="mt-6 space-y-4">
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
      <div className="mt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h3 className="max-w-2xl text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
            Cómo está construido
          </h3>
          <p className="font-mono text-[13px] text-subtle">n8n · Supabase · IA conversacional · WhatsApp Business</p>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comoFunciona.map((paso, i) => {
            const Icono = iconos[paso.icono];
            return (
              <li key={paso.titulo} className="relative rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icono size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[13px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="mt-6 text-lg font-semibold">{paso.titulo}</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">{paso.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Por qué el nuestro es mejor */}
      <div className="mt-28 grid gap-12 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:p-16">
        <div>
          <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
            Por qué nuestro chatbot es diferente
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un bot genérico responde con menús y se queda ahí. El nuestro conversa, entiende tu negocio y hace el trabajo
            completo.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {diferenciales.map((d) => (
            <li key={d.titulo}>
              <p className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 size={18} className="shrink-0 text-brand" aria-hidden="true" />
                {d.titulo}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
