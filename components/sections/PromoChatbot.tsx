"use client";

import { useState, useSyncExternalStore } from "react";
import { MessageCircle, Timer } from "lucide-react";
import { promoChatbot } from "@/lib/data/chatbot";
import { whatsappLink } from "@/lib/site";

const FIN = Date.parse(promoChatbot.termina);

// Reloj que avanza cada segundo. En el servidor no hay hora del visitante, así que devuelve null.
function suscribirReloj(avisar: () => void) {
  const id = setInterval(avisar, 1000);
  return () => clearInterval(id);
}
const segundoActual = () => Math.floor(Date.now() / 1000) * 1000;
const sinReloj = () => null;

// Dirección y color de cada chispa al abrir el regalo
const CHISPAS = [
  { x: "-70px", y: "-60px", c: "bg-amber-300" },
  { x: "70px", y: "-55px", c: "bg-red-400" },
  { x: "-85px", y: "5px", c: "bg-white" },
  { x: "85px", y: "0px", c: "bg-amber-300" },
  { x: "-40px", y: "-90px", c: "bg-red-300" },
  { x: "45px", y: "-95px", c: "bg-white" },
  { x: "0px", y: "-105px", c: "bg-amber-200" },
  { x: "-60px", y: "50px", c: "bg-red-400" },
  { x: "60px", y: "55px", c: "bg-amber-300" },
];

function partes(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return [
    { valor: Math.floor(s / 86400), etiqueta: "Días" },
    { valor: Math.floor((s % 86400) / 3600), etiqueta: "Horas" },
    { valor: Math.floor((s % 3600) / 60), etiqueta: "Min" },
    { valor: s % 60, etiqueta: "Seg" },
  ];
}

function CajaRegalo({ abierta, onAbrir }: { abierta: boolean; onAbrir: () => void }) {
  return (
    <button
      type="button"
      onClick={onAbrir}
      disabled={abierta}
      aria-label={abierta ? "Regalo abierto" : "Abrir el regalo para ver tu descuento"}
      className={`relative h-32 w-32 shrink-0 cursor-pointer disabled:cursor-default ${abierta ? "" : "animate-regalo"}`}
    >
      {/* Luz que sale de la caja */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 top-6 h-20 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(252_211_77/0.9),transparent)] blur-md transition-opacity duration-700 ${
          abierta ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Chispas */}
      {abierta &&
        CHISPAS.map((ch, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{ "--x": ch.x, "--y": ch.y, animationDelay: `${i * 30}ms` } as React.CSSProperties}
            className={`animate-chispa absolute left-1/2 top-12 h-2.5 w-2.5 rounded-full ${ch.c}`}
          />
        ))}

      {/* Cuerpo */}
      <span aria-hidden="true" className="absolute bottom-2 left-1/2 h-[66px] w-[88px] -translate-x-1/2 overflow-hidden rounded-b-xl bg-gradient-to-b from-red-500 to-red-700 shadow-[0_14px_30px_rgb(220_38_38/0.45)]">
        <span className="absolute inset-y-0 left-1/2 w-3.5 -translate-x-1/2 bg-amber-300" />
      </span>

      {/* Tapa con moño */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 top-[38px] h-6 w-[100px] rounded-lg bg-gradient-to-b from-red-400 to-red-600 transition-[translate,rotate] duration-700 ease-[cubic-bezier(0.3,1.4,0.5,1)] ${
          abierta ? "-translate-x-[85%] -translate-y-12 -rotate-[28deg]" : "-translate-x-1/2"
        }`}
      >
        <span className="absolute inset-y-0 left-1/2 w-3.5 -translate-x-1/2 bg-amber-300" />
        <svg viewBox="0 0 60 30" className="absolute -top-[22px] left-1/2 h-7 w-14 -translate-x-1/2" fill="none">
          <path d="M30 26C22 10 6 4 6 16s16 10 24 10Z" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
          <path d="M30 26c8-16 24-22 24-10s-16 10-24 10Z" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
          <circle cx="30" cy="25" r="4.5" fill="#f59e0b" />
        </svg>
      </span>
    </button>
  );
}

export default function PromoChatbot() {
  const ahora = useSyncExternalStore(suscribirReloj, segundoActual, sinReloj);
  const [abierta, setAbierta] = useState(false);

  // Se muestra solo en el navegador (para calcular el tiempo real) y mientras la promoción siga vigente.
  if (!promoChatbot.activa || ahora === null || FIN - ahora <= 0) return null;

  const tiempo = partes(FIN - ahora);
  const textoDescuento = promoChatbot.descuento ? `un ${promoChatbot.descuento} de descuento` : "un descuento especial";

  return (
    <div className="relative mb-20 overflow-hidden rounded-3xl border border-red-500/40 bg-[linear-gradient(120deg,rgb(127_29_29/0.35),rgb(12_16_22/0.9)_55%,rgb(127_29_29/0.25))] p-6 shadow-[0_0_80px_rgb(239_68_68/0.12)] sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgb(239_68_68/0.28),transparent)]"
      />

      <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-10 lg:text-left">
        <CajaRegalo abierta={abierta} onAbrir={() => setAbierta(true)} />

        <div className="min-w-0 flex-1" aria-live="polite">
          {!abierta ? (
            <>
              <p className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-red-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> Oferta por tiempo limitado
              </p>
              <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
                Obtén un descuento en tu <span className="text-red-400">chatbot</span>
              </h3>
              <p className="mt-2 text-muted-foreground">Solo por tiempo limitado. Toca el regalo y descubre tu descuento.</p>
            </>
          ) : (
            <>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-2/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-2">
                ¡Regalo desbloqueado!
              </p>
              <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
                Tienes {textoDescuento} en tu chatbot
              </h3>
              <a
                href={whatsappLink(promoChatbot.mensajeWhatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-[#25d366] px-6 font-semibold text-[#06281a] shadow-[0_10px_30px_rgb(37_211_102/0.3)] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle size={19} aria-hidden="true" /> Reclamar mi descuento en WhatsApp
              </a>
            </>
          )}
        </div>

        <div className="shrink-0">
          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-red-300 lg:justify-start">
            <Timer size={15} aria-hidden="true" /> Termina en
          </p>
          <div className="flex gap-2 sm:gap-3" role="timer" aria-label={`Quedan ${tiempo.map((t) => `${t.valor} ${t.etiqueta}`).join(", ")}`}>
            {tiempo.map((t) => (
              <div key={t.etiqueta} className="flex min-w-[62px] flex-col items-center rounded-xl border border-red-500/40 bg-red-500/10 px-2 py-2.5 sm:min-w-[70px]">
                <span className="font-mono text-[28px] font-bold leading-none tabular-nums text-red-400 sm:text-[32px]">
                  {String(t.valor).padStart(2, "0")}
                </span>
                <span className="mt-1.5 text-[11px] uppercase tracking-[0.06em] text-red-300/80">{t.etiqueta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
