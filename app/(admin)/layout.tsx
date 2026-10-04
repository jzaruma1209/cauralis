// El panel de administración siempre usa el tema oscuro, sin importar el tema del sitio público.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="dark">{children}</div>;
}
