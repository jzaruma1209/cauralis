import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Esta página no existe</h1>
      <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center gap-2 rounded-[var(--radio-boton,0.75rem)] bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <ArrowLeft size={18} aria-hidden="true" /> Volver al inicio
      </Link>
    </div>
  );
}
