# Estado actual

_Última actualización: 2026-10-21 · por: Codex_

## Tarea activa
- Publicar el icono oficial de WhatsApp en la burbuja flotante del chat.
- Rama: `main` · Estado Git: commits `d79ea60` y `52c0815` con push a `origin/main`.

## Avance comprobado
- El resto de los iconos de WhatsApp se publicó en `8393aab` y está visible en `cauralis.com`.
- La burbuja flotante usa el icono blanco de WhatsApp sobre verde en `components/chat/ChatWidget.tsx` (`d79ea60`).
- Se hizo un commit vacío (`52c0815`) para reintentar el disparador de despliegue.

## Validación
- `npm run lint`: 0 errores, 3 advertencias preexistentes en `DashboardClient.tsx`.
- `npm run build`: correcto.
- Producción todavía muestra la burbuja anterior; el último despliegue registrado por Vercel corresponde a `8393aab`.

## Bloqueos
- Vercel no ha iniciado un despliegue para `d79ea60` ni para `52c0815` tras los respectivos pushes.
- La conexión de Vercel no está disponible para este agente. Se sugirió conectarla para diagnosticar o desplegar.

## Próxima acción
Cuando haya acceso a Vercel, revisar la integración con GitHub y desplegar `origin/main` (`52c0815`). Confirmar en `https://www.cauralis.com/` que la burbuja flotante contiene un SVG con `viewBox="0 0 720 720"`.

## Contexto que no está en el código
- `TAREAS.md` aún describe cambios sin commit de 2026-10-19, aunque el árbol Git estaba limpio antes de este trabajo; revisar esa tarea por separado.
