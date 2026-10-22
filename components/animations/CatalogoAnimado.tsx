"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { m, useInView, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Aparecer, EASE } from "@/components/animations/Entrada";

/*
 * Catálogo de ejemplo del Hero con un recorrido en bucle: un cursor elige "Más vendidos", pulsa
 * "Pedir por WhatsApp" en el primer producto y llega el aviso de pedido nuevo. Se pausa fuera de
 * pantalla y, con "reducir movimiento", queda quieto en su estado inicial. Se anima dentro de
 * <Coreografia> (comparte su LazyMotion).
 */
const PRODUCTOS = [
  { nombre: "Zapatillas de running", precio: "$49", imagen: "/catalogo/zapatillas.webp", ancho: 640, alto: 540, ajuste: "object-cover", fondo: "bg-[#e8e8e8]" },
  { nombre: "Mochila clásica", precio: "$35", imagen: "/catalogo/mochila.webp", ancho: 353, alto: 484, ajuste: "object-contain p-2", fondo: "bg-white" },
  { nombre: "Reloj clásico", precio: "$89", imagen: "/catalogo/reloj.webp", ancho: 335, alto: 552, ajuste: "object-contain p-2", fondo: "bg-white" },
];
const CATEGORIAS = ["Todos los productos", "Novedades", "Más vendidos", "Ofertas"];
const MAS_VENDIDOS = 2;

// Pasos del recorrido y lo que dura cada uno (ms)
const REPOSO = 0;
const HACIA_CATEGORIA = 1;
const ELIGE = 2;
const HACIA_BOTON = 3;
const PULSA = 4;
const AVISO = 5;
const SALE = 6;
const DURACIONES = [1400, 1000, 1400, 1000, 700, 2800, 900];
const ESPERA_INICIAL = 3200; // deja terminar la entrada de las tarjetas antes del primer recorrido

type Estado = { paso: number; ciclo: number; x: number; y: number; menu: boolean };

/** Punto dentro de la ventana (en px) a una fracción del elemento. */
function punto(el: HTMLElement | null, ventana: HTMLElement, fx: number, fy: number) {
  if (!el) return null;
  const a = el.getBoundingClientRect();
  const b = ventana.getBoundingClientRect();
  return { x: a.left - b.left + a.width * fx, y: a.top - b.top + a.height * fy };
}

/** Donde "descansa" el cursor: es también su posición CSS, así que el desplazamiento parte de 0. */
const reposo = (ventana: HTMLElement) => ({ x: ventana.clientWidth * 0.72, y: ventana.clientHeight * 0.9 });

export default function CatalogoAnimado() {
  const ventanaRef = useRef<HTMLDivElement>(null);
  const categoriaRef = useRef<HTMLSpanElement>(null);
  const botonRef = useRef<HTMLParagraphElement>(null);
  const [estado, setEstado] = useState<Estado>({ paso: REPOSO, ciclo: 0, x: 0, y: 0, menu: false });
  const { paso, ciclo, x, y, menu } = estado;

  const enVista = useInView(ventanaRef, { amount: 0.4 });
  const reducido = useReducedMotion();
  const activo = enVista && !reducido;

  useEffect(() => {
    if (!activo) return;
    const espera = paso === REPOSO && ciclo === 0 ? ESPERA_INICIAL : DURACIONES[paso];
    const id = window.setTimeout(() => {
      const ventana = ventanaRef.current;
      if (!ventana) return;
      // En celular la lista de categorías está oculta: el recorrido salta directo al botón
      const hayMenu = !!categoriaRef.current && categoriaRef.current.offsetParent !== null;
      let siguiente = paso + 1;
      let vuelta = ciclo;
      if (siguiente === HACIA_CATEGORIA && !hayMenu) siguiente = HACIA_BOTON;
      if (siguiente >= DURACIONES.length) {
        siguiente = REPOSO;
        vuelta += 1;
      }
      const destino =
        siguiente === HACIA_CATEGORIA || siguiente === ELIGE
          ? punto(categoriaRef.current, ventana, 0.55, 0.5)
          : siguiente >= HACIA_BOTON && siguiente <= AVISO
            ? punto(botonRef.current, ventana, 0.82, 0.62) // hacia el borde: no tapa el texto del botón
            : null;
      const origen = reposo(ventana);
      const meta = destino ?? origen;
      setEstado({ paso: siguiente, ciclo: vuelta, x: meta.x - origen.x, y: meta.y - origen.y, menu: hayMenu });
    }, espera);
    return () => window.clearTimeout(id);
  }, [activo, paso, ciclo]);

  const seleccion = paso >= ELIGE && paso <= AVISO ? MAS_VENDIDOS : 0;
  const refrescar = paso === ELIGE || (paso === SALE && menu);
  const enviado = paso >= PULSA && paso <= AVISO;
  const cursorVisible = paso >= HACIA_CATEGORIA && paso <= AVISO;
  const clic = paso === ELIGE || paso === PULSA;

  return (
    <div
      ref={ventanaRef}
      role="img"
      aria-label="Ejemplo de un catálogo digital con pedido por WhatsApp"
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_40px_120px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]"
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-border px-3 sm:h-11 sm:gap-2 sm:px-4">
        {/* Tres puntos que flotan en onda, como un indicador de carga */}
        {[0, 1, 2].map((i) => (
          <m.span
            key={i}
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-subtle"
            initial={false}
            animate={activo ? { y: [0, -4, 0], opacity: [0.3, 1, 0.3] } : { y: 0, opacity: 0.3 }}
            transition={activo ? { duration: 1.2, ease: "easeInOut", repeat: Infinity, delay: i * 0.18 } : { duration: 0.3 }}
          />
        ))}
        <span className="ml-2 flex h-5 w-full max-w-sm items-center rounded-md bg-secondary px-2.5 font-mono text-[11px] text-subtle sm:ml-4 sm:h-6 sm:px-3 sm:text-xs">
          tunegocio.com/catalogo
        </span>
        {/* Insignia del negocio atendido por Cauralis, en la esquina de la barra */}
        <span className="ml-auto flex shrink-0 items-center gap-1.5 pl-2 sm:gap-2 sm:pl-4" aria-hidden="true">
          <Image src="/logo-mark-64.png" alt="" width={64} height={64} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
          <span className="hidden text-[13px] font-semibold sm:inline">Cauralis</span>
          <span className="rounded-md bg-brand-2/20 px-1.5 py-0.5 font-mono text-[10px] font-medium leading-none text-brand-2 sm:text-[11px]">
            24/7
          </span>
        </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="hidden w-56 shrink-0 flex-col border-r border-border p-5 text-sm text-muted-foreground sm:flex">
          <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">Categorías</span>
          {/* Cada fila mide h-10 y deja gap-1: la selección se desliza 110 % de su alto por fila */}
          <div className="relative flex flex-col gap-1">
            <m.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-10 rounded-lg bg-secondary"
              initial={false}
              animate={{ y: `${seleccion * 110}%` }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            />
            {CATEGORIAS.map((nombre, i) => (
              <span
                key={nombre}
                ref={i === MAS_VENDIDOS ? categoriaRef : undefined}
                className={`relative flex h-10 items-center px-3 transition-colors duration-300 ${i === seleccion ? "text-foreground" : ""}`}
              >
                {nombre}
              </span>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2.5 p-2.5 sm:gap-4 sm:p-5 lg:grid-cols-3">
          {PRODUCTOS.map((p, i) => (
            <Aparecer
              key={p.nombre}
              retraso={1.25 + i * 0.1}
              y={14}
              className={`overflow-hidden rounded-xl border border-border ${i === 2 ? "hidden lg:block" : ""}`}
            >
              {/* Al cambiar de categoría la tarjeta se "recarga": baja de opacidad y vuelve en cascada */}
              <m.div
                animate={refrescar ? { opacity: [0.3, 1], y: [10, 0] } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: refrescar ? i * 0.08 : 0 }}
              >
                <div className={`relative h-28 sm:h-40 ${p.fondo}`}>
                  <Image
                    src={p.imagen}
                    alt=""
                    width={p.ancho}
                    height={p.alto}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                    loading="eager"
                    className={`h-full w-full ${p.ajuste}`}
                  />
                  {i === 0 && (
                    <m.span
                      aria-hidden="true"
                      className="absolute left-2 top-2 rounded-full bg-brand-2 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-background sm:left-3 sm:top-3 sm:text-[10px]"
                      initial={false}
                      animate={seleccion === MAS_VENDIDOS ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: -4 }}
                      transition={{ duration: 0.4, ease: EASE, delay: seleccion === MAS_VENDIDOS ? 0.35 : 0 }}
                    >
                      Más vendido
                    </m.span>
                  )}
                </div>
                <div className="p-2.5 sm:p-4">
                  <p className="truncate text-[12px] font-medium sm:text-sm">{p.nombre}</p>
                  <p className="mt-0.5 text-[12px] text-subtle sm:mt-1 sm:text-sm">{p.precio}</p>
                  <m.p
                    ref={i === 0 ? botonRef : undefined}
                    className={`mt-2 grid h-7 place-items-center rounded-md text-[11px] font-medium transition-colors duration-300 sm:mt-3 sm:h-9 sm:rounded-lg sm:text-[13px] ${
                      i === 0 && enviado ? "bg-brand-2 text-background" : "bg-brand-2/12 text-brand-2"
                    }`}
                    animate={{ scale: i === 0 && paso === PULSA ? [1, 0.94, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className={`col-start-1 row-start-1 transition-all duration-300 ${i === 0 && enviado ? "translate-y-1 opacity-0" : ""}`}
                    >
                      Pedir por WhatsApp
                    </span>
                    <span
                      className={`col-start-1 row-start-1 flex items-center gap-1 transition-all duration-300 ${i === 0 && enviado ? "" : "-translate-y-1 opacity-0"}`}
                    >
                      <Check size={14} aria-hidden="true" /> Pedido enviado
                    </span>
                  </m.p>
                </div>
              </m.div>
            </Aparecer>
          ))}
        </div>
      </div>

      {/* Aviso de pedido nuevo, como una notificación que baja desde arriba */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-11 z-20 flex items-center gap-2.5 rounded-xl border border-border bg-secondary/95 py-2 pl-2 pr-3.5 shadow-[0_16px_48px_rgb(0_0_0/0.55)] backdrop-blur sm:right-5 sm:top-14 sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-4"
        initial={false}
        animate={paso === AVISO ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -14, scale: 0.96 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25d366] sm:h-8 sm:w-8">
          <WhatsAppIcon size={16} className="text-white" />
        </span>
        <span className="leading-tight">
          <span className="block font-mono text-[9px] uppercase tracking-[0.08em] text-subtle sm:text-[10px]">Nuevo pedido</span>
          <span className="block text-[11px] font-medium sm:text-[13px]">Zapatillas de running · $49</span>
        </span>
      </m.div>

      {/* Cursor: parte de su punto de reposo (posición CSS) y se desplaza con x/y */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[72%] top-[90%] z-30"
        initial={false}
        animate={{ x, y, opacity: cursorVisible ? 1 : 0 }}
        transition={{
          x: { duration: paso === REPOSO ? 0 : 0.9, ease: [0.45, 0, 0.2, 1] },
          y: { duration: paso === REPOSO ? 0 : 0.9, ease: [0.45, 0, 0.2, 1] },
          opacity: { duration: 0.3 },
        }}
      >
        {clic && (
          <span className="absolute left-0 top-0">
            <m.span
              key={paso}
              className="-ml-3 -mt-3 block h-6 w-6 rounded-full border border-brand/80 bg-brand/20"
              initial={{ scale: 0.3, opacity: 0.9 }}
              animate={{ scale: 1.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </span>
        )}
        <m.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="-ml-[5px] -mt-[3px] drop-shadow-[0_2px_4px_rgb(0_0_0/0.5)]"
          style={{ transformOrigin: "5px 3px" }}
          animate={{ scale: clic ? [1, 0.8, 1] : 1 }}
          transition={{ duration: 0.35 }}
        >
          <path d="M5 3l14 8-6.2 1.6L9.6 19 5 3z" fill="#fff" stroke="#0b0f14" strokeWidth="1.5" strokeLinejoin="round" />
        </m.svg>
      </m.div>
    </div>
  );
}
