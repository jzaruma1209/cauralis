import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { tecnologias } from "@/lib/data/contenido";
import { Aparecer, Coreografia, TituloPorLineas } from "@/components/animations/Entrada";

const productos = [
  { nombre: "Zapatillas de running", precio: "$49", imagen: "/catalogo/zapatillas.webp", ancho: 640, alto: 540, ajuste: "object-cover", fondo: "bg-[#e8e8e8]" },
  { nombre: "Mochila clásica", precio: "$35", imagen: "/catalogo/mochila.webp", ancho: 353, alto: 484, ajuste: "object-contain p-2", fondo: "bg-white" },
  { nombre: "Reloj clásico", precio: "$89", imagen: "/catalogo/reloj.webp", ancho: 335, alto: 552, ajuste: "object-contain p-2", fondo: "bg-white" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-44">
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
                <MessageCircle size={18} aria-hidden="true" /> Escríbenos por WhatsApp
              </a>
            </Aparecer>
          </div>

          {/* Ejemplo de producto: un catálogo digital */}
          <Aparecer retraso={0.95} y={48} duracion={1.1} desenfoque={false} className="mt-12 w-full max-w-[1080px] sm:mt-20">
            <div
              role="img"
              aria-label="Ejemplo de un catálogo digital con pedido por WhatsApp"
              className="w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_40px_120px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]"
            >
              <div className="flex h-9 items-center gap-1.5 border-b border-border px-3 sm:h-11 sm:gap-2 sm:px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="ml-2 flex h-5 w-full max-w-sm items-center rounded-md bg-secondary px-2.5 font-mono text-[11px] text-subtle sm:ml-4 sm:h-6 sm:px-3 sm:text-xs">
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
                <div className="grid flex-1 grid-cols-2 gap-2.5 p-2.5 sm:gap-4 sm:p-5 lg:grid-cols-3">
                  {productos.map((p, i) => (
                    <Aparecer
                      key={p.nombre}
                      retraso={1.25 + i * 0.1}
                      y={14}
                      className={`overflow-hidden rounded-xl border border-border ${i === 2 ? "hidden lg:block" : ""}`}
                    >
                      <div className={`h-28 sm:h-40 ${p.fondo}`}>
                        <Image
                          src={p.imagen}
                          alt=""
                          width={p.ancho}
                          height={p.alto}
                          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                        loading="eager"
                          className={`h-full w-full ${p.ajuste}`}
                        />
                      </div>
                      <div className="p-2.5 sm:p-4">
                        <p className="truncate text-[12px] font-medium sm:text-sm">{p.nombre}</p>
                        <p className="mt-0.5 text-[12px] text-subtle sm:mt-1 sm:text-sm">{p.precio}</p>
                        <p className="mt-2 flex h-7 items-center justify-center rounded-md bg-brand-2/12 text-[11px] font-medium text-brand-2 sm:mt-3 sm:h-9 sm:rounded-lg sm:text-[13px]">
                          Pedir por WhatsApp
                        </p>
                      </div>
                  </Aparecer>
                ))}
              </div>
            </div>
          </div>
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
