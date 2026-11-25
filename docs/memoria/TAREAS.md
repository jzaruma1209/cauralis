# Tareas del proyecto

_Última actualización: 2026-11-25_

Formato: `T-NN` para tareas, `M-NN` para mejoras. Relee este archivo antes de asignar un número; nunca reutilices uno. Las hechas y descartadas no se borran.

## En curso
- **T-08** · Paso 5 · Crear la página `/terminos` en cauralis.com, publicarla y poner su URL en «Términos del servicio» de la app (hoy `facebook.com`) · quién: agente (página) y usuario (URL en Meta) · dificultad: media · empezada: 2026-11-25 · avance: página `app/(public)/terminos/page.tsx` creada, enlazada en el pie y probada en local (lint y build correctos); publicada con push a `origin/main` (falta comprobar en producción y poner la URL en Meta) — criterio: `https://www.cauralis.com/terminos` carga en producción y el MCP muestra esa URL.

## Pendientes

### 🔴 Alta

**Registro como proveedor de tecnología de WhatsApp** (app de Meta `cauralis`, ID 2971439496521621). En orden, de lo más fácil a lo más complejo; los videos y el envío de la revisión van al final. Estado de partida comprobado con el MCP de Meta el 2026-11-25: verificación del negocio aprobada, política de privacidad válida, cumplimiento sin infracciones, revisión nunca enviada.

- **T-09** · Paso 6 · Hacer la llamada de prueba de `whatsapp_business_messaging`: enviar un mensaje con un token de la app `cauralis` · quién: usuario · dificultad: media — criterio: el MCP muestra 1 de 1 llamadas para ese permiso.
- **T-10** · Paso 7 · Hacer la llamada de prueba de `whatsapp_business_management`: consultar o crear una plantilla (hoy aparece con error) · quién: usuario · dificultad: media — criterio: el MCP muestra 1 de 1 llamadas y sin error.
- **T-11** · Paso 8 · Redactar en inglés el texto de la revisión de cada permiso (para qué se usa y cómo) · quién: agente · dificultad: media — criterio: un texto por permiso, listo para pegar, en `docs/meta/revision-app.md`.
- **T-12** · Paso 9 · Grabar el video de `whatsapp_business_messaging`: la app o n8n enviando un mensaje y WhatsApp (web o móvil) recibiéndolo · quién: usuario · dificultad: compleja — criterio: video listo donde se ven los dos lados.
- **T-13** · Paso 10 · Grabar el video de `whatsapp_business_management`: creación de una plantilla con la API y la plantilla apareciendo en el WhatsApp Manager · quién: usuario · dificultad: compleja — criterio: video listo.
- **T-14** · Paso 11 · Enviar la revisión de la app pidiendo acceso avanzado a los dos permisos, con sus textos y videos · quién: usuario · dificultad: compleja — criterio: el MCP muestra la revisión enviada (pendiente o aprobada).

### 🟡 Media
- **T-02** · Confirmar zona horaria, uso de sesiones y modo Git — criterio: `PREFERENCIAS.md` y `GIT.md` sin «por confirmar».

### 🟢 Baja
- **T-03** · Completar `ARQUITECTURA.md` (despliegue, rendimiento) — criterio: sin «por confirmar» en esas secciones.

## Bloqueadas
- **T-15** · Generar el enlace de registro insertado de Meta y conectar con él el WhatsApp de un cliente — bloqueada por: aprobación de la revisión (T-14) — criterio: un cliente conectó su número con el enlace.

## Mejoras (ideas, no aprobadas)
- **M-01** · Pasar a socio tecnológico de Meta (Tech Partner) cuando se cumplan los requisitos: 2.500 mensajes de WhatsApp al día o más (promedio de 7 días), 10 clientes activos al mes o más y calidad del 90 % o más.

## Hechas
- **2026-11-25** · T-07 · Revisados los flujos de WhatsApp de n8n y anotados en `CAPACIDADES.md` (sin tokens) · evidencia: lectura por SSH. Resultado: lo activo pasa por Chatwoot; los flujos directos de Cauralis y Ectyre están inactivos; el flujo directo de Cauralis tiene el token escrito dentro del nodo. **Parte no cumplida:** no se pudo saber a qué app de Meta pertenecen los tokens; no bloquea, porque T-09 usa un token nuevo de la app `cauralis`.
- **2026-11-25** · T-06 · Requisitos de la revisión de Meta confirmados con la documentación oficial y anotados con sus enlaces en `docs/meta/requisitos-revision.md` · evidencia: archivo creado; páginas leídas con `devtools_docs`. Hallazgos: la documentación dice que la revisión tarda ~24 horas, no exige textos en inglés ni fija plazo de 30 días para la llamada de prueba, y que quien usa la API solo para su propio negocio no necesita revisión.
- **2026-11-25** · T-05 · URL de eliminación de datos de la app cambiada a `https://www.cauralis.com/privacidad#eliminacion` · evidencia: `devtools_app` → `basic_settings` devuelve esa URL en `data_deletion_url`.
- **2026-10-22** · T-01 · Decidir qué se versiona de los cambios sin commit (`ChatAnimado.tsx`, `animaciones/`, `public/img/`, `.claude/`, `docs/memoria/`, `AGENTS.md`, `CLAUDE.md`) — todo se versionó en `535b94d` (2026-10-19), que ya está en `origin/main` · evidencia: `git ls-files` incluye todas esas rutas y `git status` estaba limpio el 2026-10-22.
- **2026-10-19** · Inicialización de la memoria del proyecto — archivos en `docs/memoria/`, punteros en `AGENTS.md` y `CLAUDE.md` · evidencia: archivos creados (sin commit).

## Descartadas
- **2026-11-25** · T-04 · Verificar el correo de contacto de la app en Meta — motivo: la pantalla de Meta no ofrece botón de verificación y no bloquea la revisión (el MCP indica `can_submit: true` y ajustes válidos). Si Meta lo exige al enviar la revisión, se retoma. El correo de contacto actual es `cauralisinfo@gmail.com` (sin verificar).
