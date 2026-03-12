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

## 🗺️ FLUJO DE CONSTRUCCIÓN

Sigue este orden. Cada fase tiene su propio chat o sesión con Claude.
Pega el prompt maestro al inicio + el prompt específico de cada fase.

---

### FASE 1 — Setup del proyecto
**Objetivo:** Proyecto creado, configurado y listo para escribir código.

**Prompt específico:**
```
Estamos en la FASE 1 — Setup.
Necesito los comandos exactos para:
1. Crear el proyecto Next.js con TypeScript, Tailwind y App Router
2. Instalar todas las dependencias (shadcn/ui, framer-motion, zod, supabase, resend, bcryptjs, jose)
3. Crear la estructura de carpetas completa del proyecto
4. Configurar los design tokens de Cauralis en tailwind.config.ts (colores + DM Sans)
5. Crear el archivo .env.local con todas las variables necesarias (vacías)

Dame los comandos y el código de configuración listos para copiar y pegar.
```

---

### FASE 2 — Layout base
**Objetivo:** Header, Footer y layout principal funcionando con los colores correctos.

**Prompt específico:**
```
Estamos en la FASE 2 — Layout base.
Crea los siguientes componentes:
1. components/layout/Header.tsx → logo "Cauralis" + nav links (Servicios, Portfolio, Contacto)
2. components/layout/Footer.tsx → simple con nombre, redes y copyright
3. app/(public)/layout.tsx → que incluya Header y Footer

Usa los design tokens de Tailwind, DM Sans, y que sea responsive.
No uses imágenes aún, el logo es texto por ahora.
```

---

### FASE 3 — Página principal (secciones)
**Objetivo:** Home completo con todas las secciones visualmente terminadas.

Construye cada sección en su propio prompt para mantener el foco:

**3a — Hero:**
```
Estamos en la FASE 3a — Hero section.
Crea components/sections/Hero.tsx
Debe transmitir: empresa de productos digitales, moderna, confiable.
Incluye: headline, subtítulo, CTA principal (Ver servicios) y CTA secundario (Contactar).
Usa Framer Motion para animación de entrada suave.
Fondo con gradiente usando los colores del proyecto.
```

**3b — Servicios:**
```
Estamos en la FASE 3b — Sección Servicios.
Crea components/sections/Servicios.tsx
Servicios a mostrar: landing pages, tarjetas digitales, catálogos digitales, automatizaciones, ecommerce.
Diseño en grid de cards. Cada card tiene: ícono, nombre, descripción corta y link a /servicios/[slug].
Los slugs son: landing-pages, tarjetas-digitales, catalogos-digitales, automatizaciones, ecommerce.
Usa datos hardcodeados por ahora (los pasaremos a Supabase en V2).
```

**3c — Portfolio:**
```
Estamos en la FASE 3c — Sección Portfolio.
Crea components/sections/Portfolio.tsx
Muestra ejemplos/plantillas de trabajos anteriores.
Usa placeholders visuales (divs con gradiente) donde irían las imágenes reales.
Grid de 3 columnas en desktop, 1 en mobile.
```

**3d — Sección Contacto home:**
```
Estamos en la FASE 3d — Sección Contacto en el Home.
Crea components/sections/ContactoCTA.tsx
Es solo un bloque visual con: título, subtítulo, botón que lleva a /contacto y botón de WhatsApp.
No incluye el formulario completo (ese va en /contacto).
```

---

### FASE 4 — Página de detalle de servicio
**Objetivo:** `/servicios/[slug]` funcionando con datos hardcodeados.

**Prompt específico:**
```
Estamos en la FASE 4 — Página detalle de servicio.
Crea app/(public)/servicios/[slug]/page.tsx
Los datos vienen de un archivo lib/data/servicios.ts con datos hardcodeados.
Cada servicio tiene: slug, nombre, descripción larga, beneficios (array), precio desde (número).
Incluye: generateStaticParams para los 5 slugs y generateMetadata para SEO.
Si el slug no existe, redirige a /404.
```

---

### FASE 5 — Página de contacto + API
**Objetivo:** Formulario funcional que guarda en Supabase y envía email con Resend.

**5a — Formulario:**
```
Estamos en la FASE 5a — Página de contacto.
Crea app/(public)/contacto/page.tsx y components/forms/ContactForm.tsx
El formulario tiene: nombre, email, teléfono (opcional), servicio de interés (select), mensaje.
Valida con Zod en el cliente antes de enviar.
Al enviar hace POST a /api/contacto.
Muestra estado: cargando, éxito, error.
Incluye también: botón de WhatsApp y texto para agendar cita (link a Calendly o similar, placeholder por ahora).
```

**5b — API Route:**
```
Estamos en la FASE 5b — API Route de contacto.
Crea app/api/contacto/route.ts
Debe:
1. Validar el body con Zod (mismo schema del formulario)
2. Guardar el mensaje en la tabla "mensajes" de Supabase
3. Enviar email de notificación con Resend
4. Aplicar rate limiting básico
5. Retornar respuestas claras de éxito y error

Usa las variables de entorno del .env.local.
```

---

### FASE 6 — SEO y detalles finales del MVP
**Objetivo:** Metadata, Open Graph, sitemap y página 404.

**Prompt específico:**
```
Estamos en la FASE 6 — SEO y detalles finales.
Necesito:
1. Metadata global en app/layout.tsx (title, description, Open Graph para Cauralis)
2. Metadata específica en / y /contacto
3. app/sitemap.ts con las rutas públicas
4. app/not-found.tsx → página 404 con diseño consistente y link al home
5. Revisar que todas las imágenes tengan alt text correcto
```

---

### FASE 7 — Deploy
**Objetivo:** Proyecto en producción en Vercel conectado a Supabase.

**Prompt específico:**
```
Estamos en la FASE 7 — Deploy.
Guíame paso a paso para:
1. Conectar el repo de GitHub a Vercel
2. Configurar las variables de entorno en Vercel
3. Configurar el dominio personalizado
4. Verificar que Supabase tenga las políticas de seguridad (RLS) correctas para las tablas
5. Checklist final antes de lanzar
```

---

### FASE 8 (V2) — Panel de administración
**Objetivo:** Login seguro y CRUD de productos y mensajes.

> Empieza esta fase solo cuando el MVP esté desplegado y funcionando.

**Prompt específico:**
```
Estamos en la FASE 8 — Panel Admin (V2).
Construye el sistema de autenticación para el admin:
1. app/api/auth/login/route.ts → valida email+password con bcrypt, genera JWT, setea cookie HttpOnly
2. app/api/auth/logout/route.ts → limpia la cookie
3. middleware.ts → protege todas las rutas /aurora/* excepto /aurora (login)
4. app/(admin)/aurora/page.tsx → formulario de login simple
5. app/(admin)/aurora/dashboard/page.tsx → página protegida con resumen básico

La ruta oculta es "aurora". JWT_SECRET viene del .env.local.
```

---

## ✅ Checklist de progreso

- [ ] FASE 1 — Setup del proyecto
- [ ] FASE 2 — Layout base (Header + Footer)
- [ ] FASE 3a — Hero
- [ ] FASE 3b — Sección Servicios
- [ ] FASE 3c — Portfolio
- [ ] FASE 3d — CTA Contacto en home
- [ ] FASE 4 — Detalle de servicio /servicios/[slug]
- [ ] FASE 5a — Página /contacto + formulario
- [ ] FASE 5b — API Route /api/contacto
- [ ] FASE 6 — SEO + 404
- [ ] FASE 7 — Deploy en Vercel
- [ ] FASE 8 — Panel admin (V2)
