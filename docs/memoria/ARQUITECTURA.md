# Arquitectura

_Estado: parcial · Última revisión: 2026-10-19_

## Contexto
Aplicación Next.js que sirve el sitio público y un panel admin. Habla con Supabase (datos y storage) y Gmail SMTP (correos de contacto).

## Componentes
| Componente | Responsabilidad | Archivos clave | Depende de |
|---|---|---|---|
| Sitio público | Portada, servicios, contacto | `app/(public)/`, `components/sections/` | `lib/data`, `lib/site.ts` |
| Animaciones | Efectos de portada y chat animado | `components/animations/` | Framer Motion, GSAP |
| Contacto | Recibe el formulario, guarda lead y envía correo | `app/api/contacto/`, `components/forms/` | Supabase, `lib/email` |
| Admin Aurora | Login y panel | `app/(admin)/aurora/`, `app/api/auth/`, `middleware.ts` | `lib/auth`, jose, bcryptjs |
| Datos | Acceso a Supabase | `lib/supabase/`, `supabase-schema.sql` | Supabase |

## Flujos importantes
1. Formulario de contacto → validación (Zod) → `app/api/contacto` → Supabase + correo (Nodemailer).
2. Login admin → `app/api/auth` → JWT → `middleware.ts` protege `/aurora/*`.

## Datos
- Fuente de verdad: Supabase (PostgreSQL). Esquema en `supabase-schema.sql`.
- Cómo viajan los datos: Route Handlers de Next.js hacia Supabase.
- Datos sensibles y dónde se guardan: contraseña de admin (hash bcrypt), secretos en `.env.local`.

## Restricciones
- Seguridad: rutas admin protegidas por middleware; no exponer claves de servicio al cliente.
- Rendimiento / sin conexión: por confirmar.
- Despliegue: por confirmar.

## Diferencias entre lo implementado y lo deseado
- Pendiente de revisar en detalle. Esta versión es un resumen inicial a partir de `README.md` y la estructura de carpetas.

## Decisiones relacionadas
- Ninguna registrada todavía.
