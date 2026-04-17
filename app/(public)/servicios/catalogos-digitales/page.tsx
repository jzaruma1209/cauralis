"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, Zap } from "lucide-react";
import { demosCatalogos, categoriasCatalogos } from "@/lib/data/demos-catalogos";
import { DemoCard, PreviewModal } from "@/components/sections/DemoMarketplace";
import type { DemoItem } from "@/components/sections/DemoMarketplace";

const beneficios = [
  "Galería de productos HD",
  "Filtros por categorías",
  "Pedido vía WhatsApp / Email",
  "Fácil navegación en móvil",
];

export default function CatalogosDigitalesPage() {
  const [filtro, setFiltro] = useState("Todas");
  const [preview, setPreview] = useState<DemoItem | null>(null);

  const visibles =
    filtro === "Todas" ? demosCatalogos : demosCatalogos.filter((d) => d.categoria === filtro);

  return (
    <>
      {preview && <PreviewModal demo={preview} onClose={() => setPreview(null)} accent="secondary" />}

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <Link href="/#servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors mb-12 group text-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </Link>

          {/* HERO */}
          <div className="mb-16 relative">
            <div className="absolute -top-24 -right-10 w-[500px] h-[500px] bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-xs uppercase tracking-widest text-secondary">
              <Zap size={11} className="fill-secondary" /> Servicio Especializado
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-100 leading-tight">
              Catálogos Digitales que <span className="hero-gradient-text">Venden</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-10">
              Muestra tus productos de forma profesional e interactiva. Tus clientes podrán
              explorar, filtrar y pedir directamente desde su celular.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beneficios.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-accent-blue/30 border border-slate-800">
                  <CheckCircle2 size={17} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FILTROS */}
          <div className="mb-10 flex flex-wrap gap-3 items-center">
            <span className="text-slate-500 text-sm font-medium mr-1">Filtrar:</span>
            {categoriasCatalogos.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filtro === cat
                    ? "bg-secondary border-secondary text-white shadow-lg shadow-secondary/20"
                    : "bg-slate-900/60 border-slate-700 text-slate-400 hover:border-secondary/50 hover:text-slate-200"
                }`}
              >
                {cat}
                {cat !== "Todas" && (
                  <span className="ml-2 text-xs opacity-60">
                    ({demosCatalogos.filter((d) => d.categoria === cat).length})
                  </span>
                )}
              </button>
            ))}
            <span className="ml-auto text-slate-500 text-sm">
              {visibles.length} demo{visibles.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* GRID */}
          <div id="demos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
            {visibles.map((demo) => (
              <DemoCard key={demo.id} demo={demo} onPreview={() => setPreview(demo)} accent="secondary" />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-[2rem] bg-gradient-to-br from-slate-900 via-accent-blue/40 to-slate-900 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div>
              <div className="text-slate-400 text-sm mb-1">Precio aproximado desde</div>
              <div className="text-5xl font-bold text-slate-100">
                $199<span className="text-xl text-slate-500 font-normal ml-2">USD</span>
              </div>
              <p className="text-slate-400 text-sm mt-2 max-w-sm">
                Diseño personalizado, carga de productos, hosting y dominio inicial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/contacto" className="cta-gradient glow-hover text-background-dark px-10 py-5 rounded-xl font-bold text-lg text-center inline-flex items-center justify-center gap-2">
                Solicitar Presupuesto <ArrowRight size={20} />
              </Link>
              <a href="#demos" className="px-10 py-5 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 font-bold text-base text-center inline-flex items-center justify-center gap-2 transition-all">
                <Eye size={18} /> Ver Demos
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}