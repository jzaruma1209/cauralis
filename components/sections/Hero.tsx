import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { tecnologias } from "@/lib/data/contenido";
import { Aparecer, Coreografia, TituloPorLineas } from "@/components/animations/Entrada";
import CatalogoAnimado from "@/components/animations/CatalogoAnimado";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-[clamp(6.5rem,15svh,9rem)]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[960px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(34_195_230/0.16),rgb(61_212_122/0.06)_60%,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center sm:px-6">
        <Coreografia>
          <Aparecer retraso={0} y={10}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Estudio de software · Ecuador
            </p>
          </Aparecer>

          {/* Título editorial: cada línea sube desde detrás de una máscara, en cascada */}
          <TituloPorLineas
            lineas={["Software que trabaja", "para tu negocio."]}
            retraso={0.15}
            className="mt-6 max-w-4xl text-[clamp(2.15rem,7vw,5.25rem)] sm:mt-7 font-semibold leading-[1.02] tracking-[-0.045em]"
          />

          <Aparecer retraso={0.55}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Landing pages, catálogos, tiendas online y automatizaciones hechas a medida. Diseño cuidado, código
              propio y soporte directo con quien lo construye.
            </p>
          </Aparecer>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
            <Aparecer retraso={0.7} className="flex flex-col">
              <Link
                href="/contacto"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Cotiza tu proyecto <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Aparecer>
            <Aparecer retraso={0.8} className="flex flex-col">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-input px-6 font-medium transition-colors hover:bg-muted"
              >
                <WhatsAppIcon size={18} /> Escríbenos por WhatsApp
              </a>
            </Aparecer>
          </div>

          {/* Ejemplo de producto: un catálogo digital */}
          <Aparecer retraso={0.95} y={48} duracion={1.1} desenfoque={false} className="mt-12 w-full max-w-[1080px] sm:mt-20">
            <CatalogoAnimado />
          </Aparecer>

          <Aparecer retraso={1.5} y={8} className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] text-subtle sm:mt-16 sm:gap-x-10 sm:gap-y-3 sm:text-[13px]">
            <span className="w-full sm:w-auto">Construido con</span>
            {tecnologias.map((t) => (
              <span key={t} className="text-muted-foreground">
                {t}
              </span>
            ))}
          </Aparecer>
        </Coreografia>
      </div>
    </section>
  );
}
