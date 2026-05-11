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
  Home,
  MessageSquare,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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

const navMain = [
  {
    id: "Panel",
    title: "Panel",
    icon: Home,
  },
  {
    id: "Mensajes",
    title: "Mensajes",
    icon: MessageSquare,
    badge: "nuevo",
  },
  {
    id: "Estadisticas",
    title: "Estadísticas",
    icon: BarChart3,
  },
  {
    id: "Contactos",
    title: "Contactos",
    icon: Users,
  },
  {
    id: "Configuracion",
    title: "Configuración",
    icon: Settings,
  },
];

export default function DashboardClient({ mensajes, fetchError }: DashboardClientProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Mensaje | null>(null);
  const [currentView, setCurrentView] = useState("Mensajes");
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/aurora");
    router.refresh();
  }

  const noLeidos = mensajes.filter((m) => !m.leido).length;

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-[#0A1426]">
        <Sidebar 
          collapsible="icon" 
          className="border-r border-slate-800 bg-slate-900/60"
          side="left"
        >
          <SidebarHeader className="border-b border-slate-800 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06BFAD]/20 to-[#06BFAD]/5 border border-[#06BFAD]/25 flex items-center justify-center">
                <span className="text-[#06BFAD] font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-slate-100 group-data-[collapsible=icon]:hidden">Panel Aurora</span>
            </div>
          </SidebarHeader>

          <SidebarContent className="bg-slate-900/40">
            <SidebarGroup>
              <SidebarGroupLabel className="text-slate-500 text-xs uppercase tracking-wider">
                Navegación
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navMain.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setCurrentView(item.id)}
                        className={`text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 cursor-pointer ${
                          currentView === item.id ? "bg-slate-800/60 text-slate-100" : ""
                        }`}
                        tooltip={item.title}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                          {item.badge && item.id === "Mensajes" && (
                            <span className="ml-auto bg-[#06BFAD] text-[#0A1426] text-xs font-bold px-2 py-0.5 rounded-full group-data-[collapsible=icon]:hidden">
                              {noLeidos}
                            </span>
                          )}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {currentView === "Mensajes" && (
              <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                <SidebarGroupLabel className="text-slate-500 text-xs uppercase tracking-wider">
                  Mensajes Recientes
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {mensajes.slice(0, 10).map((msg) => (
                      <SidebarMenuItem key={msg.id}>
                        <SidebarMenuButton
                          onClick={() => {
                            setCurrentView("Mensajes");
                            setSelected(msg);
                          }}
                          className={`text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 ${
                            selected?.id === msg.id ? "bg-slate-800/60 text-slate-100" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${!msg.leido ? "bg-[#06BFAD]" : "bg-slate-600"}`} />
                            <span className="truncate flex-1 text-sm">{msg.nombre}</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-800">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="text-slate-500 hover:text-red-400"
                  tooltip="Cerrar sesión"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Cerrar sesión</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-slate-400 hover:text-slate-200" />
              <span className="font-semibold text-slate-200">
                {navMain.find((n) => n.id === currentView)?.title || "Dashboard"}
              </span>
              {currentView === "Mensajes" && noLeidos > 0 && (
                <span className="bg-[#06BFAD] text-[#0A1426] text-xs font-bold px-2 py-0.5 rounded-full">
                  {noLeidos} nuevos
                </span>
              )}
            </div>
          </header>

          <main className="flex-1 overflow-hidden flex">
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {currentView === "Mensajes" && (
                <>
                  {!selected ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-700">
                      <Mail className="w-12 h-12 mb-4 opacity-30" />
                      <p className="text-sm">Selecciona un mensaje en la barra lateral para leerlo</p>
                      {noLeidos > 0 && (
                        <p className="text-xs text-slate-500 mt-2">
                          Tienes {noLeidos} mensajes sin leer
                        </p>
                      )}
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

                        <div className="border-t border-slate-800 pt-5">
                          <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-medium">Mensaje</p>
                          <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{selected.mensaje}</p>
                        </div>

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
                </>
              )}

              {currentView === "Contactos" && (
                <div className="max-w-4xl mx-auto">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-slate-800">
                      <h3 className="text-xl font-bold text-slate-100">Lista de Contactos</h3>
                      <p className="text-slate-400 text-sm mt-1">Personas que se han registrado o contactado a través de la web.</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-800/40 text-slate-400 text-xs uppercase tracking-wider">
                            <th className="p-4 font-medium border-b border-slate-800">Nombre</th>
                            <th className="p-4 font-medium border-b border-slate-800">Email</th>
                            <th className="p-4 font-medium border-b border-slate-800">Teléfono</th>
                            <th className="p-4 font-medium border-b border-slate-800">Servicio de interés</th>
                            <th className="p-4 font-medium border-b border-slate-800">Fecha</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {mensajes.length > 0 ? (
                            mensajes.map((msg) => (
                              <tr key={msg.id} className="hover:bg-slate-800/20 transition">
                                <td className="p-4 text-slate-200 text-sm font-medium">{msg.nombre}</td>
                                <td className="p-4 text-slate-400 text-sm">{msg.email}</td>
                                <td className="p-4 text-slate-400 text-sm">{msg.telefono || "-"}</td>
                                <td className="p-4 text-[#06BFAD] text-sm">{msg.servicio}</td>
                                <td className="p-4 text-slate-500 text-sm">{formatDate(msg.created_at)}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="p-8 text-center text-slate-500">No hay contactos registrados aún.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {currentView === "Estadisticas" && (
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#06BFAD]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-slate-400 text-sm font-medium mb-1">Total Registros</p>
                      <h3 className="text-3xl font-bold text-slate-100">{mensajes.length}</h3>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-slate-400 text-sm font-medium mb-1">Mensajes Nuevos</p>
                      <h3 className="text-3xl font-bold text-[#06BFAD]">{noLeidos}</h3>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-slate-400 text-sm font-medium mb-1">Servicios Consultados</p>
                      <h3 className="text-3xl font-bold text-slate-100">
                        {new Set(mensajes.map(m => m.servicio)).size}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-slate-100 mb-6">Registros Recientes</h3>
                    <div className="flex gap-4 items-end">
                      {/* Simulación visual de gráfico de barras simple basado en los últimos registros por servicio */}
                      {Array.from(new Set(mensajes.map(m => m.servicio))).map((servicio, index) => {
                        const count = mensajes.filter(m => m.servicio === servicio).length;
                        const height = Math.max((count / mensajes.length) * 200, 20); // Min 20px
                        return (
                          <div key={index} className="flex flex-col items-center flex-1 gap-3">
                            <div className="w-full relative group flex items-end justify-center h-[200px] bg-slate-800/30 rounded-lg overflow-hidden">
                              <div 
                                className="w-full bg-gradient-to-t from-[#06BFAD]/80 to-[#06BFAD] rounded-t-lg transition-all"
                                style={{ height: `${height}px` }}
                              />
                              <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-xs px-2 py-1 rounded text-white font-bold">
                                {count}
                              </div>
                            </div>
                            <span className="text-xs text-slate-400 text-center max-w-[80px] truncate" title={servicio}>{servicio}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentView !== "Mensajes" && currentView !== "Contactos" && currentView !== "Estadisticas" && (
                <div className="h-full flex flex-col items-center justify-center text-slate-700">
                  <Settings className="w-12 h-12 mb-4 opacity-30" />
                  <p className="text-sm">Módulo de {navMain.find(n => n.id === currentView)?.title} en construcción</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}