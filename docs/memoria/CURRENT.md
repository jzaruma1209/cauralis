# Estado actual

_Última actualización: 2026-10-22 · por: Claude_

## Tarea activa
- Ninguna. El catálogo animado del Hero está terminado y publicado.
- Rama: `main` · Estado Git: memoria actualizada sin commit (`CURRENT.md`, `TAREAS.md`); el resto del trabajo ya tiene push a `origin/main`.

## Avance comprobado
- Catálogo del Hero animado en bucle (el cursor elige «Más vendidos», pulsa «Pedir por WhatsApp» y llega el aviso de pedido): `a4bcb2a`, en `components/animations/CatalogoAnimado.tsx`.
- Puntos flotantes e insignia «Cauralis 24/7» en el catálogo: `3f947a6`.
- Animaciones al cargar, brillo en Landing pages (`Servicios.tsx`, `globals.css`) y menos espacio en el Hero: `f5f4747`.
- Iconos de WhatsApp publicados y visibles en `cauralis.com` (`8393aab`, `d79ea60`, `52c0815`).
- T-01 cerrada: todo lo que nombraba entró en `535b94d`.

## Validación
- `npm run lint`: 0 errores, 3 advertencias preexistentes en `DashboardClient.tsx` (última comprobación con `a4bcb2a`).
- `npm run build`: correcto (misma comprobación).
- Animación del catálogo probada en escritorio y móvil (375 px); no probada con «reducir movimiento» activado.
- No consta en la memoria si se volvió a correr lint y build después de `3f947a6` y `f5f4747`.

## Bloqueos
- Ninguno.

## Próxima acción
Confirmar las preferencias pendientes de T-02: zona horaria, registro de sesiones y modo Git.

## Contexto que no está en el código
- Falta probar el catálogo animado con «reducir movimiento» activado.
