"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

// Curva "expo out": arranca rápido y frena suave, como una revista que se acomoda.
const EASE = [0.16, 1, 0.3, 1] as const;

/** Envuelve una zona animada. Carga solo lo necesario de Motion y respeta "reducir movimiento". */
export function Coreografia({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

/** Título que se revela línea por línea, cada línea sube desde detrás de una máscara. */
export function TituloPorLineas({
  lineas,
  className,
  retraso = 0.1,
  escalon = 0.11,
}: {
  lineas: string[];
  className?: string;
  retraso?: number;
  escalon?: number;
}) {
  return (
    <h1 className={className} aria-label={lineas.join(" ")}>
      {lineas.map((linea, i) => (
        // pb/-mb evitan que la máscara corte las letras con cola (p, g, j, q)
        <span key={linea} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]" aria-hidden="true">
          <m.span
            className="anim-entrada block will-change-transform"
            initial={{ y: "115%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1.05, ease: EASE, delay: retraso + i * escalon }}
          >
            {linea}
          </m.span>
        </span>
      ))}
    </h1>
  );
}

/** Aparece subiendo y desenfocado → nítido. Se usa en cascada con distintos retrasos. */
export function Aparecer({
  children,
  className,
  retraso = 0,
  y = 18,
  desenfoque = true,
  duracion = 0.85,
}: {
  children: React.ReactNode;
  className?: string;
  retraso?: number;
  y?: number;
  desenfoque?: boolean;
  duracion?: number;
}) {
  return (
    <m.div
      className={`anim-entrada ${className ?? ""}`}
      initial={{ opacity: 0, y, filter: desenfoque ? "blur(8px)" : "blur(0px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: duracion, ease: EASE, delay: retraso }}
    >
      {children}
    </m.div>
  );
}
