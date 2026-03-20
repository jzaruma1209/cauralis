import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/jwt";
import DashboardClient from "./DashboardClient";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Dashboard — Aurora | Cauralis",
  robots: "noindex, nofollow",
};

export default async function DashboardPage() {
  // Protección doble: verifica la sesión desde el Server Component
  const session = await getSession();
  if (!session) redirect("/aurora");

  // Obtener mensajes de la base de datos
  const supabase = createServerSupabaseClient();
  const { data: mensajes, error } = await supabase
    .from("mensajes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <DashboardClient
      mensajes={mensajes ?? []}
      fetchError={error?.message ?? null}
    />
  );
}
