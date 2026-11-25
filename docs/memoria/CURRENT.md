# Estado actual

_Última actualización: 2026-11-25 · por: Claude_

## Tarea activa
- **T-08** (paso 5): la página `/terminos` ya está creada, enlazada en el pie y publicada con push a `origin/main`. Falta comprobar que carga en `cauralis.com` y que el usuario ponga la URL en «URL de Condiciones del servicio» en Meta.
- Hechas: T-05 (URL de eliminación de datos), T-06 (requisitos en `docs/meta/requisitos-revision.md`) y T-07 (flujos de n8n revisados). Descartada: T-04 (verificar correo; no bloquea).
- Plan completo: registro como proveedor de tecnología de WhatsApp, T-04 a T-14 en `TAREAS.md` (en orden, de lo más fácil a lo más complejo), T-15 bloqueada y la mejora M-01.
- Modo de trabajo acordado: el agente orquesta y va paso a paso; el usuario avisa cuando termina cada paso, el agente lo comprueba con el MCP de Meta, lo marca hecho y da el siguiente.
- Rama: `main` · Estado Git: página de términos y memoria con commit y push a `origin/main` (2026-11-25).

## Avance comprobado
- MCP de Meta (`meta-social`) conectado y registrado en `CAPACIDADES.md` (2026-11-24).
- Estado de la app de Meta `cauralis` según el MCP (2026-11-25): en modo en vivo; verificación del negocio aprobada; política de privacidad `https://www.cauralis.com/privacidad` válida; ícono y categoría Mensajería puestos; cumplimiento sin infracciones; uso de la API 0 % (0 llamadas en 30 días); sin versiones obsoletas (última: v27.0); revisión de la app nunca enviada.
- Permisos de WhatsApp: acceso estándar sí, avanzado no. Llamada de prueba en 0 de 1 (`whatsapp_business_messaging` sin empezar, `whatsapp_business_management` con error).
- Faltan: correo de contacto sin verificar; URLs de eliminación de datos y de términos apuntan a `facebook.com`; el sitio no tiene página de términos.

## Validación
- `npm run lint` y `npm run build`: última comprobación con `a4bcb2a`; no constan después de `3f947a6` y `f5f4747`.
- Catálogo animado sin probar con «reducir movimiento».

## Bloqueos
- Ninguno.

## Próxima acción
Comprobar `https://www.cauralis.com/terminos` en producción; después el usuario pone `https://www.cauralis.com/terminos` en Meta y el agente lo comprueba con `devtools_app` → `terms_of_service_url`.

## Contexto que no está en el código
- Cauralis hace chatbots de WhatsApp y Messenger para otros negocios; por eso se busca ser proveedor de tecnología.
- La app `cauralis` no registra llamadas: es probable que n8n use otra app u otro token (por comprobar en T-07).
- T-02 (preferencias) sigue pendiente.
