import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactoCTA() {
  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-accent-blue rounded-[2rem] p-12 lg:p-20 relative overflow-hidden border border-slate-800">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lima/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-100 leading-tight">
              ¿Listo para construir{" "}
              <span className="hero-gradient-text">algo increíble?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              Cuéntanos sobre tu proyecto. Trabajamos contigo para crear la
              solución digital perfecta para tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                Iniciar Proyecto
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hola%20Cauralis%2C%20me%20interesa%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-slate-600 bg-slate-800/50 hover:bg-slate-800 font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-green-400" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
