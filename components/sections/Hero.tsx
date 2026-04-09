"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const floatingCards = [
  {
    icon: "🚀",
    title: "Landing Page",
    desc: "Conversión optimizada",
    color: "text-primary",
    delay: "0ms",
  },
  {
    icon: "💳",
    title: "Tarjeta Digital",
    desc: "Networking moderno",
    color: "text-lima",
    delay: "120ms",
  },
  {
    icon: "📦",
    title: "Catálogo Digital",
    desc: "Muestra tu negocio",
    color: "text-secondary",
    delay: "240ms",
  },
  {
    icon: "⚡",
    title: "Automatizaciones",
    desc: "Ahorra tiempo",
    color: "text-primary",
    delay: "360ms",
  },
  {
    icon: "🛒",
    title: "Ecommerce",
    desc: "Vende en línea",
    color: "text-lima",
    delay: "480ms",
  },
];

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    [left, right].forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${i === 0 ? "28px" : "20px"})`;
    });

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        left.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
        left.style.opacity = "1";
        left.style.transform = "translateY(0)";
        setTimeout(() => {
          right.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
          right.style.opacity = "1";
          right.style.transform = "translateY(0)";
        }, 200);
      });
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-32 lg:py-0 overflow-hidden">
      {/* ── Background glows ─────────────────────── */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-lima/6 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        {/* ── LEFT CONTENT ──────────────────────── */}
        <div ref={leftRef} className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-8 backdrop-blur-sm">
            <Zap size={13} className="text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Productos Digitales Premium
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-6 tracking-tight">
            Innovando{" "}
            <span className="hero-gradient-text">
              Fronteras Digitales
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Potenciamos negocios con landing pages, tarjetas digitales,
            catálogos, automatizaciones y ecommerce de alto impacto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#servicios"
              className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2"
            >
              <span>Ver Servicios</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 font-bold text-base transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Contactar
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-10 border-t border-slate-800/80">
            {[
              { value: "50+", label: "Proyectos" },
              { value: "100%", label: "Satisfacción" },
              { value: "5★", label: "Calificación" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-slate-100">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL ──────────────────────── */}
        <div ref={rightRef} className="relative z-10">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-lima/15 rounded-3xl blur-3xl scale-90 opacity-60 pointer-events-none" />

          {/* Card container */}
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/12 via-accent-blue to-lima/8 border border-slate-700/70 overflow-hidden p-6">
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px)",
              }}
            />
            {/* Top glow stripe */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative z-10 flex flex-col gap-3">
              {/* Header label */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-widest uppercase text-primary/80">
                  Servicios Disponibles
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-slate-500">En línea</span>
                </span>
              </div>

              {/* Service cards */}
              {floatingCards.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900/75 backdrop-blur-sm border border-slate-700/60 rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:bg-slate-900/90 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(6,191,173,0.15)] hover:z-20 transition-all duration-300 group cursor-default relative z-10"
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${item.color} group-hover:text-primary transition-colors`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {item.desc}
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-slate-700 group-hover:text-primary transition-colors"
                  />
                </div>
              ))}

              {/* Bottom indicator */}
              <div className="mt-2 flex items-center gap-2 pt-3 border-t border-slate-800">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-slate-500">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
