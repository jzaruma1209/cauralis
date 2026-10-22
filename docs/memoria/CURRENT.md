# Estado actual

_Última actualización: 2026-10-22 · por: Claude_

## Tarea activa
- Catálogo del Hero animado en bucle (cursor elige «Más vendidos», pulsa «Pedir por WhatsApp», llega el aviso de pedido). Hecho y verificado, **sin commit**: `components/animations/CatalogoAnimado.tsx` (nuevo), `components/sections/Hero.tsx` y `Entrada.tsx` (exporta `EASE`).
- Rama: `main` · Estado Git: cambios sin commit. Lo anterior (icono de WhatsApp) ya está con push a `origin/main`.

## Avance comprobado
- El resto de los iconos de WhatsApp se publicó en `8393aab` y está visible en `cauralis.com`.
- La burbuja flotante usa el icono blanco de WhatsApp sobre verde en `components/chat/ChatWidget.tsx` (`d79ea60`).
- Se hizo un commit vacío (`52c0815`) para reintentar el disparador de despliegue.
- Vercel desplegó `52c0815` a producción y `https://www.cauralis.com/` muestra el nuevo icono.

## Validación
- `npm run lint`: 0 errores, 3 advertencias preexistentes en `DashboardClient.tsx`.
- `npm run build`: correcto.
- Animación del catálogo probada en escritorio y móvil (375 px) en el navegador del preview; no probada con «reducir movimiento» activado.

## Bloqueos
- Ninguno.

## Próxima acción
Revisar la tarea T-01 de `TAREAS.md`: describe cambios sin commit que ya fueron integrados. Después, confirmar las preferencias pendientes de T-02.

## Contexto que no está en el código
- `TAREAS.md` aún describe cambios sin commit de 2026-10-19, aunque el árbol Git estaba limpio antes de este trabajo; revisar esa tarea por separado.
