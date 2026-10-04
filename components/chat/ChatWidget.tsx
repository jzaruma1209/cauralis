"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { whatsappBotLink, whatsappLink } from "@/lib/site";

type Mensaje =
  | { rol: "usuario" | "asistente"; texto: string }
  | { rol: "derivar"; texto: string };

const BIENVENIDA: Mensaje = {
  rol: "asistente",
  texto: "¡Hola! Soy el asistente de Cauralis. ¿En qué te puedo ayudar hoy?",
};

const SUGERENCIAS = ["Quiero una página web", "Quiero un chatbot", "¿Cuánto cuesta?"];

const SIN_CONEXION =
  "Nuestro asistente en línea estará disponible muy pronto. Mientras tanto, escríbenos por WhatsApp y te respondemos al instante:";

function obtenerSesionId() {
  const nuevo = () =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  try {
    const guardado = sessionStorage.getItem("cauralis-chat-sesion");
    if (guardado) return guardado;
    const id = nuevo();
    sessionStorage.setItem("cauralis-chat-sesion", id);
    return id;
  } catch {
    return nuevo();
  }
}

export default function ChatWidget() {
  const [abierto, setAbierto] = useState(false);
  const [yaAbierto, setYaAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([BIENVENIDA]);
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const listaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sesionRef = useRef<string | null>(null);
  const panelId = useId();

  useEffect(() => {
    listaRef.current?.scrollTo({ top: listaRef.current.scrollHeight, behavior: "smooth" });
  }, [mensajes, escribiendo]);

  useEffect(() => {
    if (!abierto) return;
    const enfocar = setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(enfocar);
      document.removeEventListener("keydown", onKey);
    };
  }, [abierto]);

  function alternar() {
    setAbierto((v) => !v);
    setYaAbierto(true);
  }

  async function enviar(contenido: string) {
    const mensaje = contenido.trim();
    if (!mensaje || escribiendo) return;

    const historial = mensajes
      .filter((m): m is Extract<Mensaje, { rol: "usuario" | "asistente" }> => m.rol !== "derivar")
      .slice(-20);
    setMensajes((prev) => [...prev, { rol: "usuario", texto: mensaje }]);
    setTexto("");
    setEscribiendo(true);
    sesionRef.current ??= obtenerSesionId();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje, sesionId: sesionRef.current, historial }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const { respuesta } = (await res.json()) as { respuesta: string };
      setMensajes((prev) => [...prev, { rol: "asistente", texto: respuesta }]);
    } catch {
      setMensajes((prev) => [...prev, { rol: "derivar", texto: SIN_CONEXION }]);
    } finally {
      setEscribiendo(false);
    }
  }

  const soloBienvenida = mensajes.length === 1;

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {/* Ventana de chat */}
      <div
        id={panelId}
        role="dialog"
        aria-label="Chat con Cauralis"
        aria-hidden={!abierto}
        inert={!abierto}
        className={`absolute bottom-[4.5rem] right-0 flex h-[min(580px,calc(100svh-7rem))] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-[0_30px_80px_rgb(0_0_0/0.55)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          abierto ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-90 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
            <Image src="/logo-mark-64.png" alt="" width={24} height={24} unoptimized className="h-6 w-6" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card bg-brand-2" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-semibold">Asistente Cauralis</p>
            <p className="text-xs text-muted-foreground">Responde al instante · 24/7</p>
          </div>
          <button
            type="button"
            onClick={() => setAbierto(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar chat"
          >
            <X size={18} />
          </button>
        </div>

        <div ref={listaRef} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 text-[14px] leading-relaxed" aria-live="polite">
          {mensajes.map((m, i) =>
            m.rol === "usuario" ? (
              <p key={i} className="max-w-[85%] self-end whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-primary-foreground">
                {m.texto}
              </p>
            ) : (
              <div key={i} className="max-w-[88%] self-start rounded-2xl rounded-bl-md bg-secondary px-3.5 py-2.5">
                <p className="whitespace-pre-wrap">{m.texto}</p>
                {m.rol === "derivar" && (
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href={whatsappBotLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-3 text-[13px] font-semibold text-[#06281a]"
                    >
                      <MessageCircle size={16} aria-hidden="true" /> Asistente 24/7 en WhatsApp
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-input px-3 text-[13px] font-medium transition-colors hover:bg-muted"
                    >
                      Hablar con un asesor
                    </a>
                  </div>
                )}
              </div>
            ),
          )}

          {soloBienvenida && (
            <div className="mt-1 flex flex-wrap gap-2">
              {SUGERENCIAS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => enviar(s)}
                  className="h-9 rounded-full border border-input px-3.5 text-[13px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {escribiendo && (
            <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-md bg-secondary px-4 py-3.5" aria-label="El asistente está escribiendo">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
            </div>
          )}
        </div>

        <form
          className="flex items-end gap-2 border-t border-border p-3"
          onSubmit={(e) => {
            e.preventDefault();
            enviar(texto);
          }}
        >
          <label htmlFor={`${panelId}-texto`} className="sr-only">
            Escribe tu mensaje
          </label>
          <textarea
            id={`${panelId}-texto`}
            ref={inputRef}
            rows={1}
            value={texto}
            maxLength={2000}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                enviar(texto);
              }
            }}
            placeholder="Escribe tu mensaje…"
            className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-input bg-background px-4 py-2.5 text-[14px] placeholder:text-subtle focus:border-ring focus:outline-none"
          />
          <button
            type="submit"
            disabled={!texto.trim() || escribiendo}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            aria-label="Enviar mensaje"
          >
            <ArrowUp size={18} />
          </button>
        </form>
      </div>

      {/* Burbuja */}
      <button
        type="button"
        onClick={alternar}
        aria-expanded={abierto}
        aria-controls={panelId}
        aria-label={abierto ? "Cerrar chat" : "Abrir chat con Cauralis"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22c3e6] to-[#3dd47a] text-[#04121a] shadow-[0_12px_32px_rgb(34_195_230/0.35)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {!yaAbierto && <span className="animate-llamar absolute inset-0 rounded-full bg-[#22c3e6]" aria-hidden="true" />}
        <MessageCircle
          size={24}
          strokeWidth={2.2}
          className={`absolute transition-all duration-300 ${abierto ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        />
        <X
          size={24}
          strokeWidth={2.2}
          className={`absolute transition-all duration-300 ${abierto ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
        />
      </button>
    </div>
  );
}
