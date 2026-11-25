# Capacidades del proyecto

Herramientas que los agentes pueden usar en este proyecto. **Nunca** guardes aquí tokens, claves, contraseñas ni códigos OAuth: solo nombres, propósito y dónde se configura.

«Configurado» no significa «conectado». Una integración personal (de un solo usuario) no está disponible para el resto del equipo.

| Tipo | Nombre | Para qué | Alcance | Dónde se configura | Estado | Última comprobación |
|---|---|---|---|---|---|---|
| Skill | memoria-de-proyecto | Crear y mantener esta memoria | proyecto (`.claude/skills/`) | Copia en `.claude/skills/` (también en `~/.claude/skills/`) | disponible | 2026-10-19 |
| MCP | Supabase | Consultar y migrar la base del proyecto | usuario | Configuración MCP del usuario | sin verificar en este proyecto | 2026-10-19 |
| MCP | n8n | Flujos de automatización | usuario | Configuración MCP del usuario | no configurado (solo hay MCP de Supabase); se usa el CLI de n8n por SSH (`docker exec n8n n8n list:workflow`) | 2026-11-24 |
| MCP | Meta Social Technologies (`meta-social`) | Gestionar la app de Meta: casos de uso, webhooks, App Review, salud de la Graph API, docs | usuario | Configuración MCP del usuario (sesión iniciada con su cuenta de Meta) | funciona: ve la app `cauralis` (ID 2971439496521621, rol admin, permisos read+manage) en el portafolio `cauralis`, con el caso de uso WhatsApp configurado | 2026-11-24 |
| Config | WhatsApp en n8n (revisado 2026-11-25, solo lectura por SSH) | Cauralis: el flujo activo es «Cauralis - WhatsApp Chatwoot Integration» (envía por Chatwoot; credencial «Chatwoot Bot Token»); el flujo directo «Cauralis - WhatsApp Cloud API Agent» está **inactivo**, usa el número `1327373367126678` (Graph v21.0) y tiene el token escrito dentro del nodo HTTP, sin credencial. Ectyre S.A.: flujo activo «Ectyre S.A. - WhatsApp Chatwoot Integration», que también envía por Graph v25.0 con la credencial «WhatsApp Cloud Ectyre» (número `1268323273035574`); su flujo directo está inactivo | usuario | n8n en el servidor | no se pudo saber a qué app de Meta pertenecen esos tokens (n8n no lo guarda) | 2026-11-25 |
| Acceso | Servidor (SSH) | Administración del servidor; n8n corre ahí en Docker (contenedor `n8n`, túnel `n8n-tunnel`) | usuario | Llave pública SSH del usuario | funciona | 2026-11-24 |
