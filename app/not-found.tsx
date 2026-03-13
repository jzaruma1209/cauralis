import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="text-9xl font-bold hero-gradient-text mb-4 opacity-20">404</div>
      <h1 className="text-4xl font-bold text-slate-100 mb-6">Página no encontrada</h1>
      <p className="text-slate-400 max-w-md mb-10 leading-relaxed">
        Lo sentimos, la página que buscas no existe o ha sido movida. 
        Regresa al inicio para seguir explorando nuestros servicios.
      </p>
      <Link
        href="/"
        className="cta-gradient text-background-dark px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 glow-hover"
      >
        <MoveLeft size={20} />
        Volver al Inicio
      </Link>
    </div>
  );
}
