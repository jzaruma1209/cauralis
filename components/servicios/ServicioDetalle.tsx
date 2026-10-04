"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { DemoCard, PreviewModal, type DemoItem } from "@/components/sections/DemoMarketplace";
import IconoServicio from "@/components/servicios/IconoServicio";
import type { Servicio } from "@/lib/data/servicios";
import { whatsappLink } from "@/lib/site";

const TODAS = "Todas";

export default function ServicioDetalle({ servicio }: { servicio: Servicio }) {
  const [filtro, setFiltro] = useState(TODAS);
  const [preview, setPreview] = useState<DemoItem | null>(null);

  const visibles =
    filtro === TODAS ? servicio.demos : servicio.demos.filter((d) => d.categoria === filtro);

  return (
    <>
      {preview && <PreviewModal demo={preview} onClose={() => setPreview(null)} />}

      <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-32 sm:px-6 lg:pt-36">
        <Link
          href="/#servicios"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Todos los servicios
        </Link>

        {/* Encabezado */}
        <header className="mt-10 max-w-3xl">
          <div className="flex items-center gap-3 text-brand">
            <IconoServicio slug={servicio.slug} size={20} strokeWidth={1.8} />
            <span className="text-sm font-medium">{servicio.nombre}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {servicio.titulo.antes} <span className="text-brand">{servicio.titulo.destacado}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{servicio.intro}</p>
        </header>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {servicio.beneficios.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
              <Check size={17} className="mt-0.5 shrink-0 text-brand-2" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        {/* Filtros */}
        <div id="demos" className="mt-20 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Elige un demo para empezar</h2>
            <span className="text-sm text-muted-foreground">
              {visibles.length} demo{visibles.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar demos por categoría">
            {servicio.categorias.map((cat) => {
              const activo = filtro === cat;
              const total =
                cat === TODAS ? servicio.demos.length : servicio.demos.filter((d) => d.categoria === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltro(cat)}
                  aria-pressed={activo}
                  className={`h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
                    activo
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat} <span className="ml-1 opacity-60">{total}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibles.map((demo) => (
            <DemoCard key={demo.id} demo={demo} onPreview={() => setPreview(demo)} />
          ))}
        </div>

        {/* Precio y llamada a la acción */}
        <section className="mt-24 flex flex-col gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Precio de referencia desde</p>
            <p className="mt-1 font-display text-5xl font-semibold tracking-tight">
              ${servicio.precioDesde}
              <span className="ml-2 font-sans text-lg font-normal text-muted-foreground">USD</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Incluye: {servicio.incluye}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radio-boton,0.75rem)] bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar cotización <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink(`Hola Cauralis, me interesa el servicio de ${servicio.nombre.toLowerCase()}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radio-boton,0.75rem)] border border-border px-6 font-medium transition-colors hover:bg-muted"
            >
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
