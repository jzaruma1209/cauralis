<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:3178C6,100:48CAE4&height=160&section=header&text=Cauralis&fontSize=50&fontColor=ffffff&fontAlignY=45&desc=Full%20Stack%20App%20·%20Next.js%20·%20TypeScript&descAlignY=68&descSize=16&animation=fadeIn" alt="header"/>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS%204-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

# 🌐 Cauralis — Aplicación Web y Plataforma Oficial

> Plataforma digital premium de productos y servicios tecnológicos.  
> Desarrollado con el ecosistema de **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

---

## 🚀 Stack Tecnológico y Dependencias

El proyecto se sustenta en un stack robusto para asegurar accesibilidad, escalabilidad y un diseño de vanguardia.

### 🎨 Frontend & UI
- **Next.js 16.1.6 (App Router)** - Framework de React para SSR y enrutamiento avanzado.
- **React 19 & React DOM 19** - Biblioteca principal para la construcción de interfaces.
- **TypeScript 5** - Tipado estático estricto para mayor seguridad.
- **Tailwind CSS v4 (@tailwindcss/postcss)** - Estilizado mediante utilidades modernas de CSS.
- **Shadcn UI** - Componentes de interfaz accesibles, personalizables y propios del ecosistema de Next.
- **Base UI (@base-ui/react)** - Componentes primitivos headless accesibles.
- **Lucide React** - Set de íconos ligeros y consistentes.
- **clsx / tailwind-merge / CVA** - Gestión eficiente y condicional de clases en componentes reutilizables.

### ✨ Animaciones & Experiencia Visual
- **Framer Motion** - Animaciones fluidas basadas en componentes de React.
- **GSAP & @gsap/react** - Animaciones potentes basadas en líneas de tiempo y eventos de scroll.
- **tw-animate-css** - Soporte nativo para animaciones keyframes adicionales integradas con Tailwind.

### ⚙️ Backend, Autenticación y Seguridad
- **Supabase (@supabase/supabase-js)** - Base de datos PostgreSQL alojada y Storage para archivos.
- **JWT (jose)** - Autenticación personalizada mediante JSON Web Tokens para sesiones seguras.
- **Bcrypt (bcryptjs)** - Encriptación de contraseñas de administrador.
- **Next.js Route Handlers** - Endpoints de API internos (`/api/auth`, `/api/contacto`, etc.).
- **Middleware de Next.js** - Interceptor general de peticiones para proteger rutas administrativas (`/aurora/*`).

### 📝 Formularios & Validaciones
- **React Hook Form** - Gestión eficiente del estado de los formularios.
- **Zod & @hookform/resolvers** - Definición de esquemas de validación de datos seguros.

### 📧 Correos & Notificaciones
- **Resend** - API principal para correos transaccionales ultrarrápidos.
- **Nodemailer** - Soporte estándar y fallback para envío de correos.

---

## 🏗️ Arquitectura y Estructura del Proyecto

El sistema está organizado para separar la lógica pública (presentación de servicios) de la lógica administrativa (gestión interna del Dashboard).

```text
cauralis/
├── app/                        # Entorno App Router de Next.js
│   ├── (public)/               # 🟢 RUTAS PÚBLICAS (Sitio Web)
│   │   ├── page.tsx            # Landing Page (Hero, Servicios, Portfolio, etc.)
│   │   ├── contacto/           # Página de Formulario de Contacto
│   │   └── servicios/[slug]/   # Páginas dinámicas detalladas de servicios
│   │
│   ├── (admin)/                # 🔴 RUTAS PROTEGIDAS (Panel Admin "Aurora")
│   │   └── aurora/             
│   │       ├── page.tsx        # Interfaz de Login Seguro del Administrador
│   │       └── dashboard/      # Panel de Control interno (Estadísticas, Mensajes)
│   │
│   ├── api/                    # ⚙️ BACKEND - Next.js Route Handlers
│   │   ├── auth/               # Endpoints para generar/verificar JWT (login/logout)
│   │   └── contacto/           # Procesamiento de leads y envío a DB + Email
│   │
│   ├── globals.css             # Estilos globales y tokens CSS de Tailwind v4
│   ├── layout.tsx              # Root Layout (Configuración Base HTML/Body)
│   ├── not-found.tsx           # Página 404 personalizada
│   └── sitemap.ts              # Generación automática de Sitemap para SEO
│
├── components/                 # 🧱 COMPONENTES DE REACT
│   ├── animations/             # Wrappers para interactividad (GSAP, Framer Motion)
│   ├── forms/                  # UI de Formularios funcionales y validados
│   ├── layout/                 # Layouts UI (Header, Footer, Sidebar de Aurora)
│   ├── sections/               # Secciones de ensamblaje de la Landing Page
│   └── ui/                     # Componentes atómicos (Botones, Inputs - Shadcn)
│
├── lib/                        # 🧠 NÚCLEO DE LÓGICA Y SERVICIOS
│   ├── auth/                   # Utilidades de tokens JWT y encriptación
│   ├── data/                   # JSON y Datos Estáticos del portafolio/servicios
│   ├── email/                  # Clientes de envío de correos (Resend config)
│   └── supabase/               # Instancias de conexión con la BD
│
├── hooks/                      # 🪝 Custom Hooks genéricos de React
├── public/                     # 🖼️ Recursos estáticos (Logos, imágenes)
├── middleware.ts               # 🛡️ Seguridad global de las rutas de administrador
├── next.config.ts              # ⚙️ Configuración base de Next.js
└── tailwind.config.ts          # 🎨 Configuración de diseño de Tailwind CSS
```

---

## 🔑 Variables de Entorno (Claves de Configuración)

El sistema requiere las siguientes credenciales para funcionar. Crea el archivo `.env.local` en la raíz (nunca lo subas a un repositorio público) basándote en `.env.example`.

```env
# ---------------------------------------------
# SUPABASE (Base de Datos y Almacenamiento)
# ---------------------------------------------
# URL pública de conexión de tu proyecto
NEXT_PUBLIC_SUPABASE_URL="https://[ID_DEL_PROYECTO].supabase.co"

# Clave pública anónima (Segura para exponer en el cliente)
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu_clave_anonima_publica"

# Clave privada de administrador (Solo para servidor - NUNCA enviar al front)
SUPABASE_SERVICE_ROLE_KEY="tu_clave_de_servicio_privada"


# ---------------------------------------------
# CORREOS ELECTRÓNICOS (Resend)
# ---------------------------------------------
# API Key generada en el dashboard de Resend
RESEND_API_KEY="re_tu_api_key_secreta"


# ---------------------------------------------
# AUTENTICACIÓN ADMIN AURORA (Sistema Interno)
# ---------------------------------------------
# Frase secreta larga y aleatoria para firmar los JSON Web Tokens
JWT_SECRET="clave_super_secreta_para_las_sesiones_generala_tu_mismo"

# Credenciales de acceso al dashboard de Aurora
ADMIN_EMAIL="admin@cauralis.com"

# La contraseña encriptada usando Bcrypt ($2a$...)
ADMIN_PASSWORD_HASH="$2a$12$EjemploDeHashGenerado"
```

---

## 🛠️ Instalación y Uso Local

1. **Clonar e instalar dependencias:**
   ```bash
   git clone <repo-url>
   cd cauralis
   npm install
   ```

2. **Configurar el entorno:**
   Clona la plantilla de variables ambientales y complétala con tus claves.
   ```bash
   cp .env.example .env.local
   ```

3. **Iniciar servidor en entorno de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Acceso al aplicativo:**
   - **Portal Público:** [http://localhost:3000](http://localhost:3000)
   - **Administración Aurora:** [http://localhost:3000/aurora](http://localhost:3000/aurora)

---

## 👤 Autor

**Jefferson Paul Zaruma Lopez** — [GitHub](https://github.com/jzaruma1209) · [Portafolio](https://portafoliopz.vercel.app)

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:48CAE4,100:3178C6&height=80&section=footer" alt="footer"/>

*Cauralis © 2026 — Desarrollando experiencias digitales excepcionales.*
