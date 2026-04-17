# Snippets de Diseño - Cauralis

## CSS/Tailwind - Gradiente para Texto
```css
.hero-gradient-text {
  background: linear-gradient(90deg, #06BFAD 0%, #59D979 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Botón CTA (className)
```jsx
className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold"
```

## Card Base
```jsx
className="bg-accent-blue/60 rounded-2xl p-8 border border-slate-800 card-hover"
```

## Glass Header
```jsx
className="glass-header shadow-lg shadow-black/25"
```

## Badge/Tag
```jsx
className="bg-primary/10 border border-primary/25 text-primary px-4 py-2 rounded-full text-xs font-bold"
```

## Background Glow
```jsx
className="bg-primary/10 blur-[130px] rounded-full"
```

## Grid Overlay
```jsx
style={{
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,191,173,0.6) 40px)",
}}
className="opacity-[0.07]"
```

## JSX: Botón Primary
```jsx
<Link href="#" className="cta-gradient glow-hover text-background-dark px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
  <span>Texto</span>
  <ArrowRight size={18} />
</Link>
```

## JSX: Botón Secondary
```jsx
<Link href="#" className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 font-bold transition-all">
  Contactar
</Link>
```

## JSX: Card de Servicio
```jsx
<div className="group relative bg-accent-blue/60 rounded-2xl p-8 border border-slate-800 card-hover hover:shadow-primary/10 backdrop-blur-sm">
  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
    <Icon size={26} />
  </div>
  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white">Título</h3>
  <p className="text-slate-400 text-sm">Descripción</p>
</div>
```

## Animación GSAP (Servicios)
```jsx
useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(elementsContainer.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 80%", once: true } }
    );
    gsap.fromTo(".service-card", 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4,
        scrollTrigger: { trigger: container.current, start: "top 80%", once: true } }
    );
  });
  return () => ctx.revert();
}, { scope: container });
```