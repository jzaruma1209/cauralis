"use client";

import { useEffect, useRef } from "react";

/*
 * Celular con WhatsApp animado (origen: animaciones/cauralis-whatsapp-animado.html).
 * Dos imágenes (chat vacío y chat lleno): cada mensaje aparece recortando su zona de la imagen llena.
 * Fondo transparente fuera del teléfono. Ciclo de 12,4 s. Se pausa fuera de pantalla y respeta "reducir movimiento".
 */
const VACIO = "/animaciones/chat/vacio.webp";
const LLENO = "/animaciones/chat/lleno.webp";
const DURACION = 12400;
const MOSTRAR_COMPLETO = 8800; // aparece la imagen final con la venta cerrada
const DESVANECER = 11600; // empieza a desvanecerse para reiniciar
const ANCHO_ORIGEN = 941;
const ALTO_ORIGEN = 1672;

// [x, y, ancho, alto, radio, inicio en ms] de cada globo dentro de la imagen original
const GLOBOS = [
  [319, 402, 436, 114, 22, 900],
  [197, 523, 413, 145, 22, 2200],
  [424, 675, 332, 108, 22, 3600],
  [198, 787, 421, 205, 22, 4800],
  [452, 1001, 304, 98, 22, 6400],
  [198, 1097, 428, 117, 22, 7500],
  [460, 1212, 408, 184, 38, 8400],
] as const;

const suave = (x: number) => {
  const v = Math.min(1, Math.max(0, x));
  return v * v * (3 - 2 * v);
};

export default function ChatAnimado({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const vacio = new Image();
    const lleno = new Image();
    vacio.src = VACIO;
    lleno.src = LLENO;

    const dibujar = (ms: number) => {
      const t = ms % DURACION;
      const desvanecer = 1 - suave((t - DESVANECER) / 650);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // el fondo queda transparente
      ctx.setTransform(canvas.width / ANCHO_ORIGEN, 0, 0, canvas.height / ALTO_ORIGEN, 0, 0);
      ctx.imageSmoothingQuality = "high";
      ctx.globalAlpha = 1;
      ctx.drawImage(vacio, 0, 0, ANCHO_ORIGEN, ALTO_ORIGEN);
      for (const [x, y, w, h, r, inicio] of GLOBOS) {
        const alfa = suave((t - inicio) / 220) * desvanecer;
        if (alfa <= 0) continue;
        ctx.save();
        ctx.globalAlpha = alfa;
        ctx.beginPath();
        // Recorte con la forma redondeada del globo (sin rectángulo alrededor)
        if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
        else ctx.rect(x, y, w, h);
        ctx.clip();
        ctx.drawImage(lleno, 0, 0, ANCHO_ORIGEN, ALTO_ORIGEN);
        ctx.restore();
      }
      if (t >= MOSTRAR_COMPLETO) {
        ctx.globalAlpha = suave((t - MOSTRAR_COMPLETO) / 220) * desvanecer;
        ctx.drawImage(lleno, 0, 0, ANCHO_ORIGEN, ALTO_ORIGEN);
        ctx.globalAlpha = 1;
      }
    };

    let transcurrido = 0;
    let anterior = 0;
    let visible = true;
    let frame = 0;
    let cancelado = false;
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ciclo = (ahora: number) => {
      if (!anterior) anterior = ahora;
      if (visible) transcurrido += ahora - anterior;
      anterior = ahora;
      if (visible) dibujar(transcurrido);
      frame = requestAnimationFrame(ciclo);
    };

    // Solo anima mientras el celular está en pantalla
    const observador = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      anterior = 0;
    });
    observador.observe(canvas);

    Promise.all([vacio.decode(), lleno.decode()])
      .then(() => {
        if (cancelado) return;
        if (reducido) {
          dibujar(MOSTRAR_COMPLETO + 1000); // conversación completa, sin movimiento
          return;
        }
        dibujar(0);
        frame = requestAnimationFrame(ciclo);
      })
      .catch(() => {});

    return () => {
      cancelado = true;
      cancelAnimationFrame(frame);
      observador.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={ANCHO_ORIGEN}
      height={ALTO_ORIGEN}
      role="img"
      aria-label="Demostración de Cauralis: una conversación de WhatsApp a las 23:47 donde el chatbot responde, envía el enlace de pago y confirma una venta de 49 dólares."
      className={className}
    />
  );
}
