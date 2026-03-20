import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para uso exclusivo en Server-side (API Routes, Server Components).
 * Usa la SERVICE_ROLE key para tener permisos de escritura sin restricciones de RLS.
 */
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
