"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Eye,
  Zap,
  Tag,
  Star,
  Sparkles,
  X,
  Globe,
} from "lucide-react";
import { demosLP, categorias, type DemoLP } from "@/lib/data/demos-landing";

/* ─────────────────────────────────────────────────────────────
   BENEFICIOS
   ───────────────────────────────────────────────────────────── */
const beneficios = [
  "Optimización de conversión (CRO)",
  "Diseño responsive y ultrarrápido",
  "Copywriting persuasivo incluido",
  "Integración CRM / Email / WhatsApp",
];

/* ═══════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ═══════════════════════════════════════════════════════════════ */
export default function LandingPagesPage() {
  const [filtro, setFiltro] = useState("Todas");
  const [preview, setPreview] = useState<DemoLP | null>(null);

  const visibles =
    filtro === "Todas" ? demosLP : demosLP.filter((d) => d.categoria === filtro);

  return (
    <>
      {/* ── MODAL DE PREVIEW ── */}
      {preview && (
        <PreviewModal demo={preview} onClose={() => setPreview(null)} />
      )}

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* ── Volver ── */}
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group text-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </Link>

          {/* ══════════════════════════
              HERO DEL SERVICIO
          ══════════════════════════ */}
          <div className="mb-16 relative">
            {/* Glow decorativo */}
            <div className="absolute -top-24 -right-10 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -top-10 left-1/3 w-[300px] h-[300px] bg-[#26BF87]/6 blur-[100px] rounded-full pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-xs uppercase tracking-widest text-primary">
              <Zap size={11} className="fill-primary" /> Servicio Especializado
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-100 leading-tight">
              Landing Pages que{" "}
              <span className="hero-gradient-text">Convierten</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-10">
              Explora nuestra galería de demos. Elige la que más se ajuste a tu
              negocio y la personalizamos 100% con tu marca, contenido y dominio.
            </p>

            {/* Beneficios */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beneficios.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent-blue/30 border border-slate-800"
                >
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════
              FILTROS
          ══════════════════════════ */}
          <div className="mb-10 flex flex-wrap gap-3 items-center">
            <span className="text-slate-500 text-sm font-medium mr-1">Filtrar:</span>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filtro === cat
                    ? "bg-primary border-primary text-background-dark shadow-lg shadow-primary/20"
                    : "bg-slate-900/60 border-slate-700 text-slate-400 hover:border-primary/50 hover:text-slate-200"
                }`}
              >
                {cat}
                {cat !== "Todas" && (
                  <span className="ml-2 text-xs opacity-60">
                    ({demosLP.filter((d) => d.categoria === cat).length})
                  </span>
                )}
              </button>
            ))}
            <span className="ml-auto text-slate-500 text-sm">
              {visibles.length} demo{visibles.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* ══════════════════════════
              GRID DE DEMOS — MARKETPLACE
          ══════════════════════════ */}
          <div id="demos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
            {visibles.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                onPreview={() => setPreview(demo)}
              />
            ))}
          </div>

          {/* ══════════════════════════
              CTA FINAL
          ══════════════════════════ */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-[2rem] bg-gradient-to-br from-slate-900 via-accent-blue/40 to-slate-900 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div>
              <div className="text-slate-400 text-sm mb-1">Precio aproximado desde</div>
              <div className="text-5xl font-bold text-slate-100">
                $299
                <span className="text-xl text-slate-500 font-normal ml-2">USD</span>
              </div>
              <p className="text-slate-400 text-sm mt-2 max-w-sm">
                Diseño personalizado, desarrollo, hosting inicial y optimización de velocidad incluidos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                href="/contacto"
                className="cta-gradient glow-hover text-background-dark px-10 py-5 rounded-xl font-bold text-lg text-center inline-flex items-center justify-center gap-2"
              >
                Solicitar Presupuesto
                <ArrowRight size={20} />
              </Link>
              <a
                href="#demos"
                className="px-10 py-5 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 font-bold text-base text-center inline-flex items-center justify-center gap-2 transition-all"
              >
                <Eye size={18} />
                Ver Demos
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TARJETA DE DEMO — MARKETPLACE STYLE
   ═══════════════════════════════════════════════════════════════ */
function DemoCard({
  demo,
  onPreview,
}: {
  demo: DemoLP;
  onPreview: () => void;
}) {
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-1.5">

      {/* ── IMAGEN / PREVIEW ── */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-800 flex-shrink-0">
        <img
          src={demo.imagen}
          alt={`Demo: ${demo.titulo}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-background-dark font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            <Eye size={15} />
            Vista Previa
          </button>
          <a
            href={demo.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-600 text-slate-200 font-bold text-sm hover:scale-105 active:scale-95 transition-transform backdrop-blur-sm"
          >
            <Globe size={15} />
            Abrir Demo
          </a>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {demo.destacado && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/95 text-background-dark text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
              <Star size={9} className="fill-background-dark" /> Top Pick
            </span>
          )}
          {demo.nuevo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#26BF87]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles size={9} /> Nuevo
            </span>
          )}
        </div>

        {/* Categoría */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/85 text-slate-300 text-[10px] font-semibold backdrop-blur-sm border border-slate-700/60">
          {demo.categoria}
        </div>

        {/* Precio pill */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/90 border border-primary/30 backdrop-blur-sm">
          <span className="text-primary font-bold text-sm">desde ${demo.precioDesde}</span>
          <span className="text-slate-500 text-xs ml-1">USD</span>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors leading-snug">
            {demo.titulo}
          </h3>
          <p className="text-primary/70 text-xs font-semibold mt-0.5 uppercase tracking-wide">
            {demo.subtitulo}
          </p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {demo.descripcion}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {demo.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-blue/50 border border-slate-700/50 text-[11px] text-slate-400"
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800">
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all"
          >
            <Eye size={14} /> Vista previa
          </button>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary text-sm font-semibold transition-all"
          >
            Quiero esta <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODAL DE PREVIEW
   ═══════════════════════════════════════════════════════════════ */
function PreviewModal({
  demo,
  onClose,
}: {
  demo: DemoLP;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            {/* Browser dots */}
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
              aria-label="Cerrar preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Preview area */}
        <div className="relative aspect-video bg-slate-800 overflow-hidden">
          <img
            src={demo.imagen}
            alt={`Preview: ${demo.titulo}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay si la URL no es real */}
          {demo.demoUrl === "#" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px]">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Eye size={26} className="text-primary" />
                </div>
                <p className="text-slate-200 font-bold text-lg mb-1">Demo próximamente</p>
                <p className="text-slate-400 text-sm max-w-xs">
                  Este demo está siendo preparado. ¡Contáctanos para verlo en exclusiva!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer del modal */}
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