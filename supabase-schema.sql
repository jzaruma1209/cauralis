-- ==========================================
-- Esquema de Base de Datos para Cauralis
-- ==========================================

-- Crear tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS public.mensajes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  servicio TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  leido BOOLEAN DEFAULT false NOT NULL
);

-- ==========================================
-- Seguridad (Row Level Security)
-- ==========================================
-- Habilitar RLS en la tabla
ALTER TABLE public.mensajes ENABLE ROW LEVEL SECURITY;

-- Política 1: Solo el Admin (vía SERVICE_ROLE_KEY) puede leer, insertar, actualizar y borrar.
-- Al usar el SERVICE_ROLE en el servidor de Next.js, esta política se ignora (bypass),
-- pero al activar RLS evitamos que clientes anónimos con la ANON_KEY pública hagan peticiones directas.
CREATE POLICY "Bloquear acceso público a los mensajes"
ON public.mensajes
FOR ALL
TO public
USING (false);
