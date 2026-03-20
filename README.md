<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:3178C6,100:48CAE4&height=160&section=header&text=Cauralis&fontSize=50&fontColor=ffffff&fontAlignY=45&desc=Full%20Stack%20App%20·%20Next.js%20·%20TypeScript&descAlignY=68&descSize=16&animation=fadeIn" alt="header"/>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

# 🌐 Cauralis — Sitio Web Oficial

> Plataforma digital de productos y servicios tecnológicos.  
> Desarrollado con **Next.js 16 + TypeScript + Tailwind CSS v4**.

---

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework principal (App Router) |
| **TypeScript** | Tipado estático |
| **Tailwind CSS v4** | Estilos con `@theme` y `@source` |
| **Framer Motion** | Animaciones UI |
| **Supabase** | Base de datos + Storage |
| **Resend** | Envío de emails transaccionales |
| **Vercel** | Hosting y despliegue |
| **JWT + Bcrypt** | Autenticación del panel admin |
| **Zod + React Hook Form** | Validación de formularios |

---

## 📁 Estructura del Proyecto

```
cauralis/
├── app/
│   ├── (public)/               # Páginas públicas
│   │   ├── page.tsx            # Home (Hero + Servicios + Portfolio + CTA)
│   │   ├── layout.tsx          # Layout con Header y Footer
│   │   ├── contacto/           # Página de contacto
│   │   └── servicios/[slug]/   # Detalle dinámico de servicio
│   ├── (admin)/
│   │   └── aurora/             # Panel de administración (ruta oculta)
│   │       ├── page.tsx        # Login del admin
│   │       └── dashboard/      # Dashboard con gestión de mensajes
│   ├── api/
│   │   ├── contacto/route.ts   # API: guardar mensaje + enviar email
│   │   └── auth/
│   │       ├── login/route.ts  # API: autenticación admin
│   │       └── logout/route.ts # API: cierre de sesión
│   ├── globals.css             # Estilos globales + tokens de diseño
│   ├── sitemap.ts              # Sitemap dinámico
│   └── not-found.tsx           # Página 404 personalizada
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar responsive con glassmorphism
│   │   └── Footer.tsx          # Footer con enlaces y redes
│   ├── sections/
│   │   ├── Hero.tsx            # Sección principal del Home
│   │   ├── Servicios.tsx       # Grilla de servicios
│   │   ├── Portfolio.tsx       # Portfolio de proyectos
│   │   └── ContactoCTA.tsx     # CTA de contacto
│   └── forms/
│       └── ContactForm.tsx     # Formulario de contacto validado
├── lib/
│   ├── auth/jwt.ts             # Utilidades JWT (sign, verify, getSession)
│   ├── supabase/
│   │   ├── client.ts           # Cliente público de Supabase
│   │   └── server.ts           # Cliente server-side (SERVICE_ROLE)
│   ├── email/resend.ts         # Cliente de Resend configurado
│   └── data/servicios.ts       # Datos hardcodeados de servicios
├── public/
│   └── cauralis-logo.png       # Logo oficial
├── middleware.ts               # Protección de rutas /aurora/*
├── .env.local                  # Variables de entorno (NO subir a git)
├── .env.example                # Plantilla de variables requeridas
├── cauralis-flujo.md           # Documento maestro del proyecto
└── cauralis-estado.md          # Estado y progreso del proyecto
```

---

## 🎨 Tokens de Diseño

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0A1426` | Fondo principal |
| `--color-secondary` | `#192E59` | Fondo secundario |
| `--color-accent` | `#06BFAD` | Color de acento (cyan) |
| `--color-green` | `#26BF87` | Gradiente verde |
| `--color-lime` | `#59D979` | Lima/verde claro |
| Fuente | **DM Sans** | Tipografía principal |

---

## ⚙️ Levantar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# → Llena .env.local con tus claves reales

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🔑 Variables de Entorno Requeridas

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend (emails)
RESEND_API_KEY=

# Admin Auth (JWT)
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
```

> ⚠️ Ver `.env.example` para descripción detallada de cada variable.

---

## 📄 Páginas del Sitio

| Ruta | Descripción |
|---|---|
| `/` | Home público (Hero + Servicios + Portfolio + CTA) |
| `/servicios/[slug]` | Detalle de cada servicio |
| `/contacto` | Formulario de contacto con validación |
| `/aurora` | Login del panel de administración (ruta oculta) |
| `/aurora/dashboard` | Panel admin — gestión de mensajes |

---

## 🗂️ Estado del Proyecto

| Fase | Descripción | Estado |
|---|---|---|
| ✅ | Setup y cimientos | Completado |
| ✅ | Frontend público (Home + Servicios) | Completado |
| ✅ | SEO, sitemap y 404 | Completado |
| ✅ | Backend: Supabase + Resend + Rate Limiting | Completado |
| ✅ | Panel Admin Aurora (Login + Dashboard) | Completado |
| ⏳ | Deploy en Vercel + dominio cauralis.com | Pendiente (manual) |

---

## 🚢 Deploy en Vercel

1. Sube el repositorio a **GitHub**
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Configura las **variables de entorno** en el dashboard de Vercel
4. Apunta el dominio **`cauralis.com`** a Vercel

---

## 📚 Documentación Interna

- [`cauralis-flujo.md`](./cauralis-flujo.md) — Prompt maestro, arquitectura y flujo de construcción
- [`cauralis-estado.md`](./cauralis-estado.md) — Estado actual detallado y checklist de progreso
- [`.env.example`](./.env.example) — Plantilla de variables de entorno

---

## 👤 Autor

**Jefferson Paul Zaruma Lopez** — [GitHub](https://github.com/jzaruma1209) · [Portafolio](https://portafoliopz.vercel.app)

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:48CAE4,100:3178C6&height=80&section=footer" alt="footer"/>

*Cauralis © 2025 — Productos digitales que generan resultados.*
