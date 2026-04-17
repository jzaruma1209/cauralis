# Cauralis Design System Skill

Este skill proporciona la guía completa de diseño visual de Cauralis para cualquier agente que necesite crear contenido visual, publicaciones, o assets gráficos.

## Identidad de Marca

**Nombre:** Cauralis  
**Tagline:** "Innovando Fronteras Digitales"  
**Descripción:** Productos digitales profesionales (landing pages, tarjetas digitales, catálogos, automatizaciones, ecommerce)

---

## Paleta de Colores

### Colores Principales

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Primary (Cyan) | `#06BFAD` | rgb(6,191,173) | CTAs, acentos, highlights, gradientes |
| Lima | `#59D979` | rgb(89,217,121) | Gradientes secundarios, énfasis |
| Secondary | `#26BF87` | rgb(38,191,135) | Colores de soporte |

### Colores de Fondo

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Background Dark | `#0A1426` | rgb(10,20,38) | Fondo principal (dark mode) |
| Accent Blue | `#192E59` | rgb(25,46,89) | Tarjetas, elementos de soporte |
| Slate 900 | | | Bordes, separadores |

### Colores de Texto

- **Texto principal:** `#f1f5f9` (slate-100)
- **Texto secundario:** `#94a3b8` (slate-400)
- **Texto muted:** `#64748b` (slate-500)

---

## Gradientes

### Hero Gradient Text
```css
background: linear-gradient(90deg, #06BFAD 0%, #59D979 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### CTA Gradient
```css
background: linear-gradient(135deg, #06BFAD 0%, #59D979 100%);
```

### Card Background
```css
bg-gradient-to-br from-primary/12 via-accent-blue to-lima/8
```

---

## Tipografía

**Familia principal:** DM Sans (Google Fonts)

### Jerarquía de Tamaños

- **Display/H1:** 5xl-7xl (48px-72px), font-bold, leading-tight
- **H2:** 4xl-5xl (36px-48px), font-bold
- **H3:** xl-2xl (20-24px), font-bold
- **Body:** lg-xl (18-20px), text-slate-400
- **Small:** text-sm (14px)
- **Caption:** text-xs (12px), tracking-widest, uppercase

### Pesos
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Espaciado (Tailwind)

- **Contenedor:** max-w-7xl, mx-auto, px-6 lg:px-10
- **Secciones:** py-20 lg:py-24
- **Cards:** p-6-8, gap-6
- **Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Efectos Visuales

### Glow Effects
```css
/* Background glow (section) */
bg-primary/10 blur-[130px] rounded-full

/* Card glow on hover */
hover:shadow-[0_4px_20px_rgba(6,191,173,0.15)]

/* Button glow on hover */
box-shadow: 0 0 40px rgba(6, 191, 173, 0.35), 0 8px 32px rgba(6, 191, 173, 0.12);
```

### Glass Effect (Header)
```css
background: rgba(10, 20, 38, 0.85);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(6, 191, 173, 0.15);
```

### Grid Pattern Overlay
```css
/* Grid lines subtle */
background-image:
  repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px),
  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px);
opacity: 0.07;
```

---

## Componentes UI

### Buttons

**Primary CTA (cta-gradient):**
- Fondo: gradiente cyan→lima
- Padding: px-8 py-4
- Border-radius: rounded-xl
- Font: font-bold
- Hover: glow effect + translateY(-2px)

**Secondary:**
- Fondo: bg-slate-800/40
- Border: border-slate-700
- Hover: bg-slate-800, border-slate-600

### Cards

- Fondo: bg-accent-blue/60 o bg-slate-900/75
- Border: border-slate-800
- Border-radius: rounded-2xl
- Hover: border-primary/40, scale-[1.03], -translate-y-1

### Badges/Tags

- Background: bg-primary/10-20
- Border: border-primary/20-40
- Text: text-primary
- Border-radius: rounded-full
- Padding: px-3 py-1.5

---

## Animaciones

### GSAP ScrollTrigger (Servicios)
- Container: fade in from top (y: -50 → 0)
- Cards: staggered slide from right (x: 50 → 0)
- Trigger: top 80% of viewport
- Duration: 0.6-0.8s

### Hero Entrance
- Left content: fade in + translate up
- Right content: delay 200ms, then fade in
- Duration: 0.9s ease-out

### Hover Effects
- Cards: translateY(-6px), shadow increase
- Buttons: scale + glow
- Links: underline slide from left

---

## Iconos

**Librería:** Lucide React

Iconos principales:
- Globe (Landing Pages)
- CreditCard (Tarjetas Digitales)
- BookOpen (Catálogos)
- Zap (Automatizaciones)
- ShoppingCart (Ecommerce)
- ArrowRight (CTAs)
- MessageCircle (WhatsApp)

---

## Assets

- Logo: `/cauralis-logo.png` (120x40px)
- Favicon: `/favicon.ico`

---

## Ejemplo de Uso para Posts/Contenido

Para crear un post en redes sociales o gráficos:

1. **Usar colores de la marca** - Primary (#06BFAD), Lima (#59D979), Background Dark (#0A1426)
2. **Tipografía DM Sans** -清晰 legible
3. **Incluir gradiente** en textos destacados o botones
4. **Efecto glow** para énfasis visual
5. **Minimalista y moderno** - evitan saturación
6. **Incluir emojis relevantes** para el servicio: 🚀💳📦⚡🛒

---

## Notas para AI

- Siempre usar el gradiente cyan→lima para CTAs o highlights
- El fondo siempre es dark (#0A1426)
- Mantener consistencia con los componentes existentes
- Usar animations sutiles, no invasivas
- Priorizar accesibilidad y contraste