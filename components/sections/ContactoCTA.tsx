import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactoCTA() {
  return (
    <section id="contacto" className="relative py-28 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative bg-accent-blue/70 rounded-[2rem] p-12 lg:p-20 border border-slate-800 overflow-hidden backdrop-blur-sm">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/12 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lima/8 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          {/* Top accent line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.04] rounded-[2rem]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,191,173,0.8) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,191,173,0.8) 40px)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Disponibles para proyectos
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 text-slate-100 leading-tight">
                ¿Listo para construir{" "}
                <span className="hero-gradient-text">algo increíble?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Cuéntanos sobre tu proyecto. Trabajamos contigo para crear la
                solución digital perfecta para tu negocio.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0">
              <Link
                href="/contacto"
                className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Iniciar Proyecto</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hola%20Cauralis%2C%20me%20interesa%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-slate-600/80 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-500 font-bold text-base transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap backdrop-blur-sm"
              >
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
