# Cauralis — Prompt Maestro + Flujo de Construcción

---

## 🧠 PROMPT MAESTRO
> Copia esto al inicio de cada chat nuevo con Claude para que tenga todo el contexto.

```
Eres mi asistente de desarrollo para el proyecto Cauralis.

Cauralis es una empresa de productos digitales (no freelancer) que ofrece:
landing pages, tarjetas digitales, catálogos digitales, automatizaciones y ecommerce.

STACK:
- Next.js 14 + TypeScript + App Router
- Tailwind CSS + Shadcn/ui + Framer Motion
- Supabase (base de datos + storage)
- Resend (emails)
- Vercel (hosting)
- JWT + Bcrypt (autenticación admin)
- Zod (validación)

DESIGN TOKENS:
- Colores: #0A1426 (fondo), #192E59 (secundario), #06BFAD (acento), #26BF87 (gradiente), #59D979 (lima)
- Fuente: DM Sans
- Tono: tecnológico, moderno, profesional

ESTRUCTURA DE CARPETAS:
app/(public)/ → páginas públicas
app/(admin)/aurora/ → panel admin (ruta oculta)
app/api/ → API Routes (backend)
components/ → ui/, layout/, sections/, forms/
lib/ → supabase/, email/, auth/, validators/
middleware.ts → protección rutas admin

MODELO DE DATOS (Supabase):
- Usuario: id, email, password, created_at
- Categoría: id, nombre, descripción, created_at
- Producto: id, nombre, descripción, precio, categoria_id, activo, created_at, updated_at
- Plantilla: id, producto_id, nombre, descripción, activo, created_at
- Imagen: id, url, alt, producto_id, plantilla_id, orden, created_at
- Cliente: id, nombre, email, telefono, empresa, created_at
- Orden: id, cliente_id, producto_id, plantilla_id, precio, notas, created_at
- Mensaje: id, nombre, email, telefono, mensaje, leido, created_at

PÁGINAS:
- / → Home (Hero + Servicios + Portfolio + Contacto + Footer)
- /servicios/[slug] → Detalle de servicio
- /contacto → Formulario + WhatsApp + Agendar cita
- /aurora → Login admin (V2)
- /aurora/dashboard → Panel admin (V2)

MVP actual: solo frontend público + formulario de contacto funcional.
Panel admin es V2.

Cuando te pida trabajar en algo, enfócate SOLO en esa parte.
No generes código de otras secciones a menos que lo pida explícitamente.
Sigue el principio de separation of concerns.
```

---

## 🗺️ FLUJO DE CONSTRUCCIÓN (Dividido en 5 Bloques)

---

### BLOQUE 1: Cimientos y Estructura Base (COMPLETADO ✅)
- Setup con Next.js 14, TypeScript y Tailwind CSS v4.
- Componentes globales: Header (con logo real `cauralis-logo.png`) y Footer.
- Layout Público definido.

---

### BLOQUE 2: Experiencia de Usuario - Home y Servicios (COMPLETADO ✅)
- Secciones del Home: Hero, Servicios, Portfolio, ContactoCTA.
- Rutas dinámicas `/servicios/[slug]` con datos hardcodeados en `lib/data/servicios.ts`.
- Diseño responsive y optimizado.

---

### BLOQUE 3: Conversión y SEO (COMPLETADO ✅)
- Página `/contacto` con formulario, validación Zod y estados de carga/éxito/error.
- Metadata global, sitemap dinámico y página 404 personalizada.
- Logo optimizado con `priority` y `Image` de Next.js.

---

### BLOQUE 4: Backend e Integraciones Reales (COMPLETADO ✅)

#### Subparte 4.1: Persistencia y Base de Datos (COMPLETADO ✅)
- [x] `lib/supabase/client.ts` — Cliente público de Supabase.
- [x] `lib/supabase/server.ts` — Cliente server-side con SERVICE_ROLE.
- [x] `app/api/contacto/route.ts` — Guarda mensajes en la tabla `mensajes`.
- **ACCIÓN REQUERIDA:** Llenar el `.env.local` con las claves de Supabase y crear la tabla `mensajes`.

#### Subparte 4.2: Notificaciones y Seguridad (COMPLETADO ✅)
- [x] `lib/email/resend.ts` — Cliente de Resend configurado.
- [x] Email HTML de notificación integrado en la API de contacto.
- [x] Rate limiting básico in-memory (3 intentos por minuto por IP).
- **ACCIÓN REQUERIDA:** Llenar el `.env.local` con la clave `RESEND_API_KEY`.

---

### BLOQUE 5: Lanzamiento y Administración (COMPLETADO ✅)

#### Subparte 5.1: Despliegue y Producción (LISTO PARA DEPLOY ✅)
- [x] `.env.example` creado con todas las variables necesarias e instrucciones.
- [ ] **PENDIENTE (acción manual): Subir a GitHub y conectar con Vercel.**
- [ ] **PENDIENTE (acción manual): Configurar las variables de entorno en Vercel.**
- [ ] **PENDIENTE (acción manual): Apuntar el dominio `cauralis.com` a Vercel.**

#### Subparte 5.2: Panel de Gestión "Aurora" (COMPLETADO ✅)
- [x] `lib/auth/jwt.ts` — Utilidades de JWT (sign, verify, getSession).
- [x] `app/api/auth/login/route.ts` — Login con bcrypt + cookie HttpOnly.
- [x] `app/api/auth/logout/route.ts` — Cierre de sesión.
- [x] `middleware.ts` — Protección de rutas `/aurora/*`.
- [x] `app/(admin)/aurora/page.tsx` — Página de Login estilizada.
- [x] `app/(admin)/aurora/dashboard/page.tsx` — Dashboard (Server Component).
- [x] `app/(admin)/aurora/dashboard/DashboardClient.tsx` — UI de mensajes con detalle.

---

## ✅ Checklist de Progreso General

- [x] **BLOQUE 1: Cimientos**
- [x] **BLOQUE 2: Frontend Público**
- [x] **BLOQUE 3: SEO y Conversión**
- [x] **BLOQUE 4: Backend e Integración**
    - [x] 4.1: Supabase — Base de Datos
    - [x] 4.2: Resend — Notificaciones + Seguridad
- [x] **BLOQUE 5: Lanzamiento y Admin**
    - [~] 5.1: Deploy (código listo, falta configuración manual en Vercel)
    - [x] 5.2: Panel Aurora (Login + Dashboard)

---

## 🔑 PRÓXIMOS PASOS MANUALES (Lo que debes hacer tú)

1.  **Llenar `.env.local`** con las claves reales (ver `.env.example` como guía).
2.  **Crear la tabla `mensajes` en Supabase** con las columnas: `id, nombre, email, telefono, servicio, mensaje, leido, created_at`.
3.  **Generar el hash de tu contraseña** admin con: `node -e "const b=require('bcryptjs'); b.hash('TU_CONTRASEÑA',12).then(console.log)"`
4.  **Subir a GitHub** y conectar el repositorio con Vercel.
5.  **Configurar las variables de entorno** en Vercel (copiar las del `.env.local`).
6.  **Conectar el dominio** `cauralis.com` en el panel de Vercel.
