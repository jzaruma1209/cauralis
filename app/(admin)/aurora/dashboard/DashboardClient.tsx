"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  Tag,
  Clock,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Inbox,
} from "lucide-react";

type Mensaje = {
  id: number;
  nombre: string;
  email: string;
  telefono: string | null;
  servicio: string;
  mensaje: string;
  leido: boolean;
  created_at: string;
};

interface DashboardClientProps {
  mensajes: Mensaje[];
  fetchError: string | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString("es-EC", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function DashboardClient({ mensajes, fetchError }: DashboardClientProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Mensaje | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/aurora");
    router.refresh();
  }

  const noLeidos = mensajes.filter((m) => !m.leido).length;

  return (
    <div className="min-h-screen bg-[#0A1426] text-slate-200 flex flex-col">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06BFAD]/20 to-[#06BFAD]/5 border border-[#06BFAD]/25 flex items-center justify-center">
            <span className="text-[#06BFAD] font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-slate-100">Panel Aurora</span>
        </div>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-2 text-slate-500 hover:text-red-400 text-sm transition disabled:opacity-50"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Lista de mensajes */}
        <aside className="w-full max-w-sm border-r border-slate-800 overflow-y-auto flex-shrink-0">
          <div className="px-4 py-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-[#06BFAD]" />
              <h2 className="font-semibold text-sm">
                Mensajes
                {noLeidos > 0 && (
                  <span className="ml-2 bg-[#06BFAD] text-[#0A1426] text-xs font-bold px-2 py-0.5 rounded-full">
                    {noLeidos} nuevos
                  </span>
                )}
              </h2>
            </div>
          </div>

          {fetchError && (
            <div className="m-4 p-3 bg-red-400/10 border border-red-400/20 rounded-lg text-red-400 text-sm flex gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Error al cargar: {fetchError}</span>
            </div>
          )}

          {mensajes.length === 0 && !fetchError && (
            <div className="p-8 text-center text-slate-600">
              <Inbox className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Aún no hay mensajes</p>
            </div>
          )}

          <ul>
            {mensajes.map((msg) => (
              <li key={msg.id}>
                <button
                  onClick={() => setSelected(msg)}
                  className={`w-full text-left px-4 py-4 border-b border-slate-800/60 hover:bg-slate-800/40 transition ${
                    selected?.id === msg.id ? "bg-slate-800/60" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`font-medium text-sm truncate ${!msg.leido ? "text-slate-100" : "text-slate-400"}`}>
                      {msg.nombre}
                    </span>
                    {!msg.leido && (
                      <span className="w-2 h-2 bg-[#06BFAD] rounded-full flex-shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{msg.servicio}</p>
                  <p className="text-xs text-slate-600 mt-1 truncate">{msg.mensaje}</p>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Panel de detalle */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {!selected ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-700">
              <Mail className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm">Selecciona un mensaje para leerlo</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{selected.nombre}</h3>
                    <p className="text-[#06BFAD] text-sm font-medium mt-0.5">{selected.servicio}</p>
                  </div>
                  {selected.leido ? (
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Leído
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-[#06BFAD] bg-[#06BFAD]/10 border border-[#06BFAD]/20 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-[#06BFAD] rounded-full" /> Nuevo
                    </span>
                  )}
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Email</p>
                      <a href={`mailto:${selected.email}`} className="text-slate-200 hover:text-[#06BFAD] transition">
                        {selected.email}
                      </a>
                    </div>
                  </div>
                  {selected.telefono && (
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs">Teléfono</p>
                        <a href={`tel:${selected.telefono}`} className="text-slate-200 hover:text-[#06BFAD] transition">
                          {selected.telefono}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Tag className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Servicio</p>
                      <p className="text-slate-200">{selected.servicio}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Fecha</p>
                      <p className="text-slate-200">{formatDate(selected.created_at)}</p>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-medium">Mensaje</p>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{selected.mensaje}</p>
                </div>

                {/* Acciones */}
                <div className="flex gap-3 mt-6 pt-5 border-t border-slate-800">
                  <a
                    href={`mailto:${selected.email}?subject=Re: Tu consulta sobre ${selected.servicio} — Cauralis`}
                    className="flex-1 text-center bg-[#06BFAD]/10 border border-[#06BFAD]/30 text-[#06BFAD] hover:bg-[#06BFAD]/20 transition text-sm font-semibold py-2.5 rounded-xl"
                  >
                    Responder por email
                  </a>
                  {selected.telefono && (
                    <a
                      href={`https://wa.me/${selected.telefono.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition text-sm font-semibold py-2.5 rounded-xl"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
