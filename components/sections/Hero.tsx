import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { tecnologias } from "@/lib/data/contenido";

const productos = [
  { nombre: "Zapatillas urbanas", precio: "$49", tono: "from-[#123040] to-[#0e1a24]" },
  { nombre: "Mochila clásica", precio: "$35", tono: "from-[#13302a] to-[#0d1a17]" },
  { nombre: "Reloj minimal", precio: "$89", tono: "from-[#1a2236] to-[#0f141f]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[960px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(34_195_230/0.16),rgb(61_212_122/0.06)_60%,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center sm:px-6">
        <p className="animate-aparecer inline-flex items-center gap-2.5 rounded-full border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          Estudio de software · Ecuador
        </p>

        <h1 className="animate-aparecer mt-7 max-w-4xl text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] [animation-delay:80ms]">
          Software que trabaja
          <br className="hidden sm:block" /> para tu negocio.
        </h1>

        <p className="animate-aparecer mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-xl">
          Landing pages, catálogos, tiendas online y automatizaciones hechas a medida. Diseño cuidado, código
          propio y soporte directo con quien lo construye.
        </p>

        <div className="animate-aparecer mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
          <Link
            href="/contacto"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Cotiza tu proyecto <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-input px-6 font-medium transition-colors hover:bg-muted"
          >
            <MessageCircle size={18} aria-hidden="true" /> Escríbenos por WhatsApp
          </a>
        </div>

        {/* Ejemplo de producto: un catálogo digital */}
        <div
          role="img"
          aria-label="Ejemplo de un catálogo digital con pedido por WhatsApp"
          className="animate-aparecer mt-20 w-full max-w-[1080px] overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_40px_120px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)] [animation-delay:320ms]"
        >
          <div className="flex h-11 items-center gap-2 border-b border-border px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="ml-4 flex h-6 w-full max-w-sm items-center rounded-md bg-secondary px-3 font-mono text-xs text-subtle">
              tunegocio.com/catalogo
            </span>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="hidden w-56 shrink-0 flex-col gap-1 border-r border-border p-5 text-sm text-muted-foreground sm:flex">
              <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">Categorías</span>
              <span className="rounded-lg bg-secondary px-3 py-2.5 text-foreground">Todos los productos</span>
              <span className="px-3 py-2.5">Novedades</span>
              <span className="px-3 py-2.5">Más vendidos</span>
              <span className="px-3 py-2.5">Ofertas</span>
            </div>
            <div className="grid flex-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
              {productos.map((p, i) => (
                <div
                  key={p.nombre}
                  className={`overflow-hidden rounded-xl border border-border ${i === 1 ? "hidden sm:block" : ""} ${i === 2 ? "hidden lg:block" : ""}`}
                >
                  <div className={`h-32 bg-gradient-to-br ${p.tono}`} />
                  <div className="p-4">
                    <p className="text-sm font-medium">{p.nombre}</p>
                    <p className="mt-1 text-sm text-subtle">{p.precio}</p>
                    <p className="mt-3 flex h-9 items-center justify-center rounded-lg bg-brand-2/12 text-[13px] font-medium text-brand-2">
                      Pedir por WhatsApp
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-[13px] text-subtle">
          <span>Construido con</span>
          {tecnologias.map((t) => (
            <span key={t} className="text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
