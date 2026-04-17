"use client";

import Link from "next/link";
import { Eye, Globe, ExternalLink, ArrowRight, Tag, Star, Sparkles, X } from "lucide-react";

export type DemoItem = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  categoria: string;
  tags: string[];
  imagen: string;
  demoUrl: string;
  precioDesde: number;
  destacado?: boolean;
  nuevo?: boolean;
};

type AccentColor = "primary" | "lima" | "secondary";

/* ═══════════════════════════════════
   DEMO CARD
═══════════════════════════════════ */
export function DemoCard({
  demo,
  onPreview,
  accent = "primary",
}: {
  demo: DemoItem;
  onPreview: () => void;
  accent?: AccentColor;
}) {
  const colorMap: Record<AccentColor, { border: string; text: string; btn: string; price: string; glow: string }> = {
    primary: {
      border: "hover:border-primary/40",
      text: "group-hover:text-primary",
      btn: "bg-primary text-background-dark",
      price: "text-primary border-primary/30",
      glow: "hover:shadow-primary/8",
    },
    lima: {
      border: "hover:border-lima/40",
      text: "group-hover:text-lima",
      btn: "bg-lima text-background-dark",
      price: "text-lima border-lima/30",
      glow: "hover:shadow-lima/8",
    },
    secondary: {
      border: "hover:border-secondary/40",
      text: "group-hover:text-secondary",
      btn: "bg-secondary text-white",
      price: "text-secondary border-secondary/30",
      glow: "hover:shadow-secondary/8",
    },
  };

  const c = colorMap[accent];

  return (
    <article
      className={`group flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 ${c.border} transition-all duration-300 hover:shadow-2xl ${c.glow} hover:-translate-y-1.5`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-800 flex-shrink-0">
        <img
          src={demo.imagen}
          alt={`Demo: ${demo.titulo}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={onPreview}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${c.btn} font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-transform`}
          >
            <Eye size={15} /> Vista Previa
          </button>
          <a
            href={demo.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-600 text-slate-200 font-bold text-sm hover:scale-105 active:scale-95 transition-transform backdrop-blur-sm"
          >
            <Globe size={15} /> Abrir Demo
          </a>
        </div>

        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex gap-2">
          {demo.destacado && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/95 text-background-dark text-[10px] font-bold uppercase tracking-wider">
              <Star size={9} className="fill-background-dark" /> Top Pick
            </span>
          )}
          {demo.nuevo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#26BF87]/90 text-white text-[10px] font-bold uppercase tracking-wider">
              <Sparkles size={9} /> Nuevo
            </span>
          )}
        </div>

        {/* Category badge top-right */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/85 text-slate-300 text-[10px] font-semibold backdrop-blur-sm border border-slate-700/60">
          {demo.categoria}
        </div>

        {/* Price pill bottom-right */}
        <div className={`absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/90 border ${c.price} backdrop-blur-sm`}>
          <span className={`font-bold text-sm ${c.price.split(" ")[0]}`}>desde ${demo.precioDesde}</span>
          <span className="text-slate-500 text-xs ml-1">USD</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className={`text-lg font-bold text-slate-100 ${c.text} transition-colors leading-snug`}>
            {demo.titulo}
          </h3>
          <p className={`${c.price.split(" ")[0]} opacity-70 text-xs font-semibold mt-0.5 uppercase tracking-wide`}>
            {demo.subtitulo}
          </p>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{demo.descripcion}</p>
        <div className="flex flex-wrap gap-1.5">
          {demo.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-blue/50 border border-slate-700/50 text-[11px] text-slate-400"
            >
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800">
          <button
            onClick={onPreview}
            className={`inline-flex items-center gap-1.5 ${c.price.split(" ")[0]} font-bold text-sm hover:gap-2.5 transition-all`}
          >
            <Eye size={14} /> Vista previa
          </button>
          <Link
            href="/contacto"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
              accent === "lima"
                ? "bg-lima/10 hover:bg-lima/20 border-lima/20 hover:border-lima/40 text-lima"
                : accent === "secondary"
                ? "bg-secondary/10 hover:bg-secondary/20 border-secondary/20 hover:border-secondary/40 text-secondary"
                : "bg-primary/10 hover:bg-primary/20 border-primary/20 hover:border-primary/40 text-primary"
            }`}
          >
            Quiero esta <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════
   PREVIEW MODAL
═══════════════════════════════════ */
export function PreviewModal({
  demo,
  onClose,
  accent = "primary",
}: {
  demo: DemoItem;
  onClose: () => void;
  accent?: AccentColor;
}) {
  const iconColor =
    accent === "lima" ? "text-lima bg-lima/15 border-lima/30"
    : accent === "secondary" ? "text-secondary bg-secondary/15 border-secondary/30"
    : "text-primary bg-primary/15 border-primary/30";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono flex items-center gap-2 min-w-[200px]">
              <Globe size={11} />
              {demo.demoUrl === "#" ? "demo.cauralis.com" : demo.demoUrl}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-slate-200 font-bold text-sm">{demo.titulo}</p>
              <p className="text-slate-500 text-xs">{demo.categoria}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="relative aspect-video bg-slate-800 overflow-hidden">
          <img src={demo.imagen} alt={`Preview: ${demo.titulo}`} className="w-full h-full object-cover" />
          {demo.demoUrl === "#" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px]">
              <div className="text-center">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto mb-4 ${iconColor}`}>
                  <Eye size={26} />
                </div>
                <p className="text-slate-200 font-bold text-lg mb-1">Demo próximamente</p>
                <p className="text-slate-400 text-sm max-w-xs">¡Contáctanos para verlo en exclusiva!</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 bg-slate-900/95 border-t border-slate-800">
          <div>
            <p className="text-slate-100 font-bold">{demo.titulo}</p>
            <p className="text-slate-400 text-sm">{demo.descripcion}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {demo.demoUrl !== "#" && (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <ExternalLink size={15} /> Abrir demo
              </a>
            )}
            <Link
              href="/contacto"
              onClick={onClose}
              className="cta-gradient glow-hover text-background-dark px-6 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2"
            >
              Quiero esta <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
