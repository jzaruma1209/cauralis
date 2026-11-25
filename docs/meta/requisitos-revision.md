# Requisitos de la revisión de la app de Meta (Tech Provider de WhatsApp)

_Comprobado el 2026-11-25 con la documentación oficial de Meta (leída con el MCP `meta-social`). Meta cambia estas páginas: si pasa tiempo, vuelve a comprobarlas._

Fuentes:
- Convertirse en Tech Provider: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers
- Revisión de la app de WhatsApp: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/app-review/
- Registro insertado alojado por Meta (Hosted Embedded Signup): https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/hosted-es

## ¿Hace falta la revisión?
- Si usas la API solo para tu propio negocio (desarrollador directo), **no** necesitas acceso avanzado ni revisión: el acceso estándar basta.
- Si otros negocios van a usar tu app (clientes de Cauralis), **sí**: hay que pedir acceso avanzado.

## Antes de enviar
- Verificación del negocio aprobada (ya está).
- Ajustes básicos de la app: ícono, URL de política de privacidad y categoría.
- Pedir solo los permisos que la app necesita; pedir de más es motivo común de rechazo.

## Qué hay que entregar por permiso
Cada permiso lleva **su texto y su video**, por separado. Un video no debe mezclar permisos.

| Permiso | Texto | Video |
|---|---|---|
| `whatsapp_business_messaging` | Qué funciones de mensajería ofrece la app a los clientes registrados y cómo las usan | Grabación de pantalla de la app enviando un mensaje a un número de WhatsApp y del WhatsApp (web o móvil) recibiéndolo |
| `whatsapp_business_management` | Cómo se usará el permiso para acceder a los recursos de los clientes registrados | Grabación de la app, o del WhatsApp Manager, creando una plantilla de mensaje |

- Alternativa permitida: en vez de usar la app, grabar el script cURL de **API Setup** enviando un mensaje a un número de prueba agregado como destinatario, y grabar el **WhatsApp Manager** creando una plantilla.
- No se aceptan capturas de pantalla: tiene que ser grabación.
- Sin texto, el envío se rechaza aunque tenga video. Un envío en borrador no se revisa: hay que pulsar enviar.
- `whatsapp_business_manage_events` no hace falta (solo para Marketing Messages API con Conversions API).

## Plazos
- La documentación indica que la revisión tarda unas 24 horas de media.
- No hace falta tener terminado el registro insertado para empezar la revisión.

## Después de aprobar (para T-15)
- Para el registro insertado alojado por Meta: la app debe poder enviar mensajes y manejar plantillas, tener un webhook de producción bien configurado y estar suscrita al webhook `account_update`.
- Los clientes registrados deben agregar una tarjeta de crédito a tu cuenta de WhatsApp Business Platform.

## Lo que NO dice la documentación consultada
- No fija un plazo de 30 días para la llamada de prueba de la API (eso lo muestra el panel de Meta).
- No exige que los textos estén en inglés.
