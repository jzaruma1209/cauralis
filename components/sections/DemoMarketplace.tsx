"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Eye, X } from "lucide-react";

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

const tieneDemo = (demo: DemoItem) => demo.demoUrl !== "#";

/* ═══════════════════════════════════
   DEMO CARD
═══════════════════════════════════ */
export function DemoCard({ demo, onPreview }: { demo: DemoItem; onPreview: () => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/10">
      <button
        type="button"
        onClick={onPreview}
        className="relative block aspect-[16/10] overflow-hidden bg-muted text-left"
        aria-label={`Vista previa de ${demo.titulo}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={demo.imagen}
          alt=""
          loading="lazy"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 flex gap-2">
          {demo.destacado && (
            <span className="rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
              Destacado
            </span>
          )}
          {demo.nuevo && (
            <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-background">
              Nuevo
            </span>
          )}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
          {demo.categoria}
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-sans text-lg font-semibold leading-snug">{demo.titulo}</h3>
          <p className="mt-1 text-sm text-subtle">{demo.subtitulo}</p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{demo.descripcion}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Características">
          {demo.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-sm text-muted-foreground">
            desde <strong className="font-semibold text-foreground">${demo.precioDesde}</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPreview}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Eye size={15} aria-hidden="true" /> Ver
            </button>
            <Link
              href="/contacto"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              La quiero <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════
   PREVIEW MODAL
═══════════════════════════════════ */
export function PreviewModal({ demo, onClose }: { demo: DemoItem; onClose: () => void }) {
  const tituloId = useId();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = overflowPrevio;
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={tituloId}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="truncate rounded-md bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              {tieneDemo(demo) ? demo.demoUrl : "demo.cauralis.com"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar vista previa"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative aspect-video overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={demo.imagen} alt={`Vista previa de ${demo.titulo}`} className="h-full w-full object-cover" />
          {!tieneDemo(demo) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/55 p-6 text-center">
              <div>
                <p className="text-lg font-semibold text-white">Demo en vivo próximamente</p>
                <p className="mt-1 text-sm text-white/75">Escríbenos y te lo mostramos en una llamada.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p id={tituloId} className="font-semibold">{demo.titulo}</p>
            <p className="text-sm text-muted-foreground">{demo.descripcion}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {tieneDemo(demo) && (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                <ExternalLink size={15} aria-hidden="true" /> Abrir demo
              </a>
            )}
            <Link
              href="/contacto"
              onClick={onClose}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              La quiero <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
