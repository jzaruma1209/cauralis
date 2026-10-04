import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import IconoServicio from "@/components/servicios/IconoServicio";
import { servicios } from "@/lib/data/servicios";

export default function Servicios() {
  const [destacado, ...resto] = servicios;

  return (
    <section id="servicios" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-20 sm:px-6 sm:pt-32 lg:pt-40" aria-labelledby="servicios-titulo">
      <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2 id="servicios-titulo" className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] sm:mt-3.5">
            Cinco productos. Un mismo estándar de calidad.
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Precios de referencia. Cada proyecto se cotiza según su alcance, sin costos ocultos.
        </p>
      </div>

      {/* En celular es un carrusel que se desliza de lado; desde tablet, una cuadrícula */}
      <div className="carrusel-movil mt-8 sm:mt-12 sm:grid sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href={`/servicios/${destacado.slug}`}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:grid sm:grid-cols-2 sm:items-center sm:gap-8 sm:p-8 md:col-span-2"
        >
          <div className="flex flex-1 flex-col">
            <IconoServicio slug={destacado.slug} size={22} strokeWidth={1.8} className="text-brand" />
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] sm:mt-5 sm:text-[22px]">{destacado.nombre}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{destacado.descripcion}</p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[13px]">
              Desde ${destacado.precioDesde}
              <ArrowUpRight size={15} className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
            </p>
          </div>
          <div className="hidden flex-col gap-2.5 rounded-xl border border-border bg-background p-5 sm:flex" aria-hidden="true">
            <div className="h-2.5 w-2/5 rounded bg-secondary" />
            <div className="h-5 w-[85%] rounded-md bg-muted-foreground/20" />
            <div className="h-5 w-3/5 rounded-md bg-muted-foreground/20" />
            <div className="mt-1.5 h-2.5 w-3/4 rounded bg-secondary" />
            <div className="mt-2.5 flex gap-2">
              <div className="h-8 w-28 rounded-lg bg-primary" />
              <div className="h-8 w-24 rounded-lg border border-input" />
            </div>
          </div>
        </Link>

        {resto.map((s, i) => (
          <Link
            key={s.slug}
            href={`/servicios/${s.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:p-8"
          >
            <IconoServicio slug={s.slug} size={22} strokeWidth={1.8} className={i % 2 === 0 ? "text-brand-2" : "text-brand"} />
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] sm:mt-5 sm:text-[22px]">{s.nombre}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{s.resumen}</p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[13px]">
              Desde ${s.precioDesde}
              <ArrowUpRight size={15} className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/contacto"
        className="group mt-4 flex flex-col justify-between gap-4 rounded-2xl bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:gap-6 sm:p-8"
      >
        <span className="text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-[22px]">
          ¿No sabes cuál necesitas? Te ayudamos a elegir.
        </span>
        <span className="inline-flex items-center gap-2 font-semibold">
          Hablemos <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
