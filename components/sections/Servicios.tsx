"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Globe,
  CreditCard,
  BookOpen,
  Zap,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const servicios = [
  {
    slug: "landing-pages",
    nombre: "Landing Page",
    descripcion: "Conversión optimizada",
    descripcionLarga:
      "Páginas de aterrizaje de alta conversión, diseñadas para captar clientes y generar resultados desde el primer momento.",
    icon: Globe,
    emoji: "🚀",
    acento: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hoverGlow: "hover:shadow-primary/10",
  },
  {
    slug: "tarjetas-digitales",
    nombre: "Tarjeta Digital",
    descripcion: "Networking moderno",
    descripcionLarga:
      "Tarjetas de presentación digitales interactivas que dejan una impresión duradera y facilitan el networking moderno.",
    icon: CreditCard,
    emoji: "💳",
    acento: "text-lima",
    bg: "bg-lima/10",
    border: "border-lima/20",
    hoverGlow: "hover:shadow-lima/10",
  },
  {
    slug: "catalogos-digitales",
    nombre: "Catálogo Digital",
    descripcion: "Muestra tu negocio",
    descripcionLarga:
      "Catálogos interactivos para mostrar tus productos o servicios de forma profesional y atractiva.",
    icon: BookOpen,
    emoji: "📦",
    acento: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    hoverGlow: "hover:shadow-secondary/10",
  },
  {
    slug: "automatizaciones",
    nombre: "Automatizaciones",
    descripcion: "Ahorra tiempo",
    descripcionLarga:
      "Flujos de trabajo automatizados que ahorran tiempo, reducen errores y potencian la productividad de tu equipo.",
    icon: Zap,
    emoji: "⚡",
    acento: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hoverGlow: "hover:shadow-primary/10",
  },
  {
    slug: "ecommerce",
    nombre: "Ecommerce",
    descripcion: "Vende en línea",
    descripcionLarga:
      "Tiendas online optimizadas para vender más, con experiencia de usuario premium y gestión simplificada.",
    icon: ShoppingCart,
    emoji: "🛒",
    acento: "text-lima",
    bg: "bg-lima/10",
    border: "border-lima/20",
    hoverGlow: "hover:shadow-lima/10",
  },
];

export default function Servicios() {
  const container = useRef<HTMLElement>(null);
  const elementsContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Both animations share the same scroll trigger so they sync nicely
    const ctx = gsap.context(() => {
      // 1. Container Drop Down Animation
      gsap.fromTo(elementsContainer.current, 
        { y: -50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%", // Animates when top of section hits 80% of window height
            once: true, // Only play once
          }
        }
      );
  
      // 2. Cards Staggered Slide In Animation from Right
      gsap.fromTo(".service-card", 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1, // 0.1s delay between each card
          ease: "power2.out",
          delay: 0.4, // Wait bit for the container drop to start
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            once: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, { scope: container });

  return (
    <section
      id="servicios"
      ref={container}
      className="relative py-20 lg:py-24 overflow-hidden scroll-mt-0"
      aria-label="Nuestros Servicios"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-slate-900/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div ref={elementsContainer} className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Header ───────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Nuestros Servicios
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 leading-tight">
              Soluciones Digitales<br className="hidden lg:block" /> para tu Negocio
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs leading-relaxed text-sm md:text-right">
            Estrategias y productos digitales diseñados para escalar tu
            presencia online.
          </p>
        </div>

        {/* ── Cards grid ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <div
                key={servicio.slug}
                className={`service-card group relative bg-accent-blue/60 rounded-2xl p-8 border border-slate-800 card-hover hover:shadow-xl ${servicio.hoverGlow} backdrop-blur-sm`}
              >
                {/* Top color accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent ${servicio.acento} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                {/* Icon + Emoji */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${servicio.bg} border ${servicio.border} flex items-center justify-center ${servicio.acento} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl">{servicio.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-white transition-colors">
                  {servicio.nombre}
                </h3>
                <p className="text-primary font-bold text-sm mb-3">
                  {servicio.descripcion}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  {servicio.descripcionLarga}
                </p>

                <Link
                  href={`/servicios/${servicio.slug}`}
                  className={`${servicio.acento} font-bold text-sm inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200 group/link`}
                >
                  Ver más
                  <ChevronRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="service-card cta-gradient rounded-2xl p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-background-dark">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-background-dark/75 text-sm leading-relaxed">
                Cuéntanos tu idea y juntos la hacemos realidad con tecnología de punta.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-background-dark/20 hover:bg-background-dark/30 text-background-dark font-bold px-6 py-3 rounded-xl transition-colors mt-6"
              >
                Comenzar ahora
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
