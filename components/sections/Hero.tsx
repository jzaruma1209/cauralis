"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[700px] h-[700px] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-lima/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div ref={containerRef} className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap size={12} className="text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Productos Digitales Premium
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            Innovando{" "}
            <span className="hero-gradient-text block">
              Fronteras Digitales
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Potenciamos negocios con landing pages, tarjetas digitales,
            catálogos, automatizaciones y ecommerce de alto impacto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#servicios"
              className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2"
            >
              Ver Servicios
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Contactar
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-10 border-t border-slate-800">
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

        {/* Right: visual card */}
        <div className="relative lg:h-[560px] flex items-center justify-center">
          {/* Floating glow ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-lima/10 rounded-3xl blur-2xl scale-95 opacity-60" />

          <div className="relative w-full h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary/15 via-accent-blue/80 to-lima/10 border border-slate-700 overflow-hidden p-1">
            {/* Inner decorative grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,191,173,0.4) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,191,173,0.4) 40px)",
              }}
            />

            {/* Floating cards */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "🚀",
                    title: "Landing Page",
                    desc: "Conversión optimizada",
                    color: "text-primary",
                  },
                  {
                    icon: "💳",
                    title: "Tarjeta Digital",
                    desc: "Networking inteligente",
                    color: "text-lima",
                  },
                  {
                    icon: "📦",
                    title: "Catálogo Digital",
                    desc: "Muestra tu negocio",
                    color: "text-secondary",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-900/70 backdrop-blur border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div
                        className={`font-bold text-sm ${item.color} group-hover:text-primary transition-colors`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-slate-600 group-hover:text-primary transition-colors"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom indicator */}
              <div className="mt-4 flex items-center gap-2">
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
