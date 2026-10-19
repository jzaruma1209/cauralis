# Proyecto

_Última revisión: 2026-10-19_

## Propósito
Sitio web oficial y plataforma de Cauralis: presenta productos y servicios tecnológicos, recibe contactos de clientes y tiene un panel administrativo interno («Aurora»).

## Objetivo actual
Sitio en desarrollo activo. Trabajo reciente en animaciones de portada y de la sección de chatbots (ver `git log`).

## Stack
- Next.js 16.1.6 (App Router), React 19.2, TypeScript 5, Tailwind CSS v4
- Animaciones: Framer Motion, GSAP
- Formularios: React Hook Form + Zod
- Datos: Supabase (PostgreSQL + Storage); esquema en `supabase-schema.sql`
- Autenticación admin: JWT (jose) + bcryptjs, protegida por `middleware.ts`
- Correo: Nodemailer con Gmail SMTP

## Mapa del repositorio
| Ruta | Qué hay |
|---|---|
| `app/(public)/` | Sitio público (portada, contacto, servicios/[slug]) |
| `app/(admin)/aurora/` | Login y dashboard administrativo |
| `app/api/` | Route Handlers: auth y contacto |
| `components/` | UI: animations, chat, forms, layout, sections, servicios, ui (shadcn) |
| `lib/` | auth, data, email, supabase, site.ts, utils.ts |
| `hooks/` | Hooks propios (use-mobile) |
| `public/` | Estáticos (incluye `public/img/`, sin versionar todavía) |
| `animaciones/` | HTML de animaciones de prueba (sin versionar todavía) |
| `middleware.ts` | Protege las rutas `/aurora/*` |
| `supabase-schema.sql` | Esquema de base de datos |
| `verify-gmail.mjs` | Script suelto para verificar el correo |

## Comandos
| Acción | Comando |
|---|---|
| Instalar | `npm install` |
| Desarrollo | `npm run dev` |
| Lint | `npm run lint` |
| Build / producción | `npm run build` y `npm run start` |
| Pruebas / typecheck | No hay script de pruebas. Typecheck por confirmar (`npx tsc --noEmit`). |

## Trampas conocidas
- Las variables de entorno están en `.env.local` (ignorado por Git por `.env*`). Nunca copiar sus valores a la memoria ni al chat.
- Next.js 16 y Tailwind v4 cambian respecto a versiones anteriores: revisar la documentación de la versión instalada antes de asumir APIs.

## Por confirmar
- Si existe script o procedimiento de despliegue.
- Si el typecheck (`tsc`) se usa como validación oficial.
- Zona horaria y responsables del proyecto (ver `PREFERENCIAS.md`).
