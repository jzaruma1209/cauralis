---
name: memoria-de-proyecto
description: 'Crea y mantiene una memoria compartida del proyecto dentro del repositorio para que cualquier agente (Claude Code, Codex, Gemini CLI, OpenCode, Cursor, Copilot…) o persona retome el trabajo donde quedó. Úsala para inicializar o adoptar la memoria en un proyecto, retomar una sesión, registrar tareas, mejoras, preferencias o decisiones, cerrar sesión, terminar una tarea o auditar la memoria. Frases típicas: "inicializa la memoria", "agrega tarea", "cerramos sesión", "revisa la memoria".'
compatibility: Cualquier agente compatible con Agent Skills. Los scripts opcionales requieren Node.js 18+ y Git.
metadata:
  version: "2.0.1"
  idioma: es
---

# Memoria de proyecto

## Idea central

La continuidad no depende de esta skill, sino de tres piezas que viven en el repositorio:

1. **Puntero**: un bloque corto en el archivo que cada agente lee siempre al empezar (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`). Dice dónde está la memoria.
2. **`STARTUP.md`**: la puerta de entrada. Contiene el orden de lectura, las frases del usuario y las reglas para escribir. **Se basta solo**: un agente que no tiene esta skill instalada igual puede leer y mantener la memoria.
3. **La memoria**: archivos Markdown pequeños versionados con Git (`CURRENT.md`, `TAREAS.md`, etc.). Llegan a cualquier persona con `git clone`.

Esta skill es el procedimiento para crear esas piezas y mantenerlas consistentes. No sincroniza chats ni instala software.

## Cómo saber si el proyecto ya tiene memoria

Busca el marcador `<!-- memoria-de-proyecto:inicio ruta=... -->` en `AGENTS.md`, `CLAUDE.md` o `GEMINI.md` de la raíz. El atributo `ruta` es la carpeta de la memoria (por defecto `docs/memoria`).

- **Hay marcador** → la memoria existe: sigue su `STARTUP.md`.
- **No hay marcador** → ve a «Inicializar».

## Modos

Identifica el modo por la petición del usuario. Pregunta solo si una acción irreversible o externa depende de la respuesta.

### 1. Inicializar o adoptar

Disparadores: «inicializa la memoria», «prepara este proyecto», o el usuario pide memoria y no hay marcador.

1. **Inspecciona antes de escribir**: raíz del repo, `AGENTS.md`/`CLAUDE.md`/`GEMINI.md`/otras reglas existentes, carpetas de documentación o de seguimiento, estado de Git (rama, remoto, cambios sin commit).
2. **Adopta lo que ya exista.** Si el proyecto ya tiene una carpeta de seguimiento (tareas, sesiones, arquitectura), úsala como `ruta` y completa solo los archivos que falten. No crees un segundo sistema de tareas. Si hay que reorganizar o mover archivos, propónlo y espera aprobación.
3. Si no hay nada, crea la carpeta `docs/memoria/` (u otra que pida el usuario) copiando `templates/memoria/`. Rellena `PROYECTO.md`, `ARQUITECTURA.md` y `CAPACIDADES.md` **solo con lo que puedas comprobar** en el repo; marca lo demás como «por confirmar».
4. Instala los punteros siguiendo `references/COMPATIBILIDAD.md`:
   - `AGENTS.md`: añade el bloque de `templates/punteros/AGENTS.bloque.md` (arriba del todo). Si el archivo no existe, créalo.
   - `CLAUDE.md`: debe contener la línea `@AGENTS.md`. Si no existe, créalo desde `templates/punteros/CLAUDE.md`.
   - `GEMINI.md`: igual, desde `templates/punteros/GEMINI.md`.
   - Otros agentes solo si el usuario los usa y no leen `AGENTS.md`.
   - **Nunca reemplaces** instrucciones existentes: añade el bloque y conserva el resto. Si hay reglas de seguimiento duplicadas en `CLAUDE.md` u otro archivo, propón moverlas a `STARTUP.md`.
5. Deja `GIT.md` en modo **ligero** salvo que el usuario elija otro (ver `references/GIT.md`). Marca su estado como «propuesta» hasta que el usuario lo confirme.
6. Pregunta o deduce idioma, zona horaria y si quiere resumen al iniciar, y anótalo en `PREFERENCIAS.md`.
7. Si hay Node.js, ejecuta `node <skill>/scripts/verificar-memoria.mjs` y corrige lo que reporte.
8. Informa qué creaste, qué adoptaste, qué queda «por confirmar» y cómo comprobar que cada agente lee su puntero (ver `references/COMPATIBILIDAD.md`).

### 2. Retomar sesión

1. Sigue `STARTUP.md` del proyecto: lee `CURRENT.md`, revisa `git status` y la rama, y lee `PREFERENCIAS.md`.
2. Contrasta `CURRENT.md` con Git: si hay commits o cambios más nuevos que su fecha, dilo y actualízalo con lo que compruebes.
3. Abre solo los documentos que la tarea necesite. No cargues `sesiones/` completas.
4. Resume en pocas líneas: dónde quedamos, próxima acción, pendientes de prioridad alta y bloqueos.

### 3. Registrar durante el trabajo

Aplica la tabla de frases de `STARTUP.md`. En resumen:

| Petición | Destino | Regla |
|---|---|---|
| Tarea nueva | `TAREAS.md` → Pendientes, con siguiente `T-NN` y criterio de finalización | Relee el archivo justo antes de numerar |
| Idea o recomendación | `TAREAS.md` → Mejoras, con siguiente `M-NN` | No es una tarea aprobada |
| Empezar tarea | Moverla a «En curso» y actualizar `CURRENT.md` | En Git completo, crear o retomar su rama |
| Preferencia estable del proyecto | `PREFERENCIAS.md` | Las personales del usuario no van al repo |
| Decisión técnica duradera | `decisiones/NNNN-titulo.md` | Contexto, opciones, decisión, consecuencias |
| Herramienta, MCP o skill nueva | `CAPACIDADES.md` | Sin secretos; «configurado» ≠ «conectado» |

### 4. Cerrar sesión

1. Revisa el diff y los resultados reales de las validaciones ejecutadas.
2. Reescribe `CURRENT.md`: tarea activa, avance comprobado, validación, estado Git (sin commit / commit / push / integrado), bloqueos y **una** próxima acción concreta.
3. Actualiza `TAREAS.md` y la fecha de «Última actualización».
4. Crea `sesiones/AAAA-MM-DD.md` (o `_2`, `_3` si ya existe) desde `templates/memoria/sesiones/PLANTILLA.md`, salvo que `PREFERENCIAS.md` diga que no se usan sesiones.
5. Responde con un resumen corto.

### 5. Terminar una tarea

1. Comprueba el criterio de finalización con evidencia (comando ejecutado, archivo, commit). Si no se pudo validar, dilo; no la marques hecha.
2. Muévela a «Hechas» con fecha y una línea de qué cambió y la evidencia.
3. Aplica `GIT.md` del proyecto. Commit, push, merge y borrado de rama son pasos distintos; haz solo los que el usuario pidió o la política aprobada permite. Nunca `push --force`, `reset --hard` ni descartar cambios ajenos.
4. Actualiza `CURRENT.md`.

### 6. Auditar

Disparadores: «revisa la memoria», cuando algo parece desactualizado o tras una actualización de esta skill.

1. Ejecuta `node <skill>/scripts/verificar-memoria.mjs [raíz]` si hay Node; si no, revisa a mano lo mismo: punteros, archivos obligatorios, fecha de `CURRENT.md` frente a Git, IDs repetidos y posibles secretos.
2. Corrige solo lo que tenga evidencia. Elimina reglas duplicadas o contradictorias.
3. Si los archivos del proyecto vienen de una versión anterior de la plantilla (ver la marca `memoria-de-proyecto vX` en `STARTUP.md`), propone las diferencias sin pisar el contenido del proyecto.

### 7. Conectar la memoria al agente (diagnóstico)

Disparadores: «revisa la memoria», «no reconoces la memoria», «¿dónde quedamos?» cuando no tienes cargado `STARTUP.md` o `CURRENT.md`, o cualquier momento en que sospeches que este agente no está leyendo la memoria.

1. **Localiza la memoria.** Busca `seguimiento/STARTUP.md` (o la carpeta de `ruta` del marcador) en la carpeta actual, en la raíz de Git (`git rev-parse --show-toplevel`) y en sus subcarpetas inmediatas. Si no existe, ve a «1. Inicializar o adoptar».
2. **Localiza la skill por contenido, no por carpeta.** Busca cualquier `SKILL.md` cuyo campo `name:` sea `memoria-de-proyecto` dentro de cualquier carpeta `skills/` del proyecto o del usuario. No dependas de los nombres de carpeta de ningún agente, porque pueden aparecer agentes nuevos.
   - Si la encuentras en cualquier lugar, **no la vuelvas a instalar**. Pasa al paso 3.
   - Si no la encuentras, pide permiso al usuario y muestra el comando de instalación. No la instales sin permiso.
3. **Verifica que el agente lea el archivo de entrada compartido.** El archivo compartido es `AGENTS.md` (estándar abierto). Pregunta al agente qué archivos de instrucciones cargó al iniciar, o usa su comando de listado si lo conoces. Si `AGENTS.md` aparece, el puntero funciona: no hace falta nada más.
4. **Si el agente no lee `AGENTS.md`,** agrega una línea en el archivo de instrucciones que sí lea, que apunte a `AGENTS.md`. Hazlo solo para agentes que el usuario usa, nunca para todos los posibles. Sin permiso, no crees archivos nuevos de agentes que no estén en uso.
5. **Si el puntero ya estaba y el agente igual no lo leyó,** el problema es la sesión: los archivos de entrada se leen solo al iniciar. Pide al usuario abrir una sesión nueva en esa carpeta. Mientras tanto, lee `STARTUP.md` y `CURRENT.md` tú mismo y responde con el resumen.
6. **Revisa instrucciones globales.** Busca archivos de instrucciones globales de cualquier agente en la carpeta del usuario (por ejemplo `GEMINI.md`, `AGENTS.md`, `CLAUDE.md`). Si alguno contiene reglas de otro proyecto, avisa al usuario. No lo modifiques ni lo muevas sin permiso.
7. Ejecuta `verificar-memoria.mjs` y reporta: qué encontraste, qué modificaste (con la ruta exacta), y si hace falta una sesión nueva.

Nunca borres ni reemplaces un archivo de entrada sin permiso del usuario. Nunca crees copias de la skill por agente: una sola copia por proyecto basta.

## Recursos de la skill

- `templates/memoria/`: plantillas de la carpeta de memoria.
- `templates/punteros/`: bloques para `AGENTS.md`, `CLAUDE.md` y `GEMINI.md`.
- `references/COMPATIBILIDAD.md`: qué archivo lee cada agente, rutas de skills y cómo verificar.
- `references/GIT.md`: flujos Git ligero y completo.
- `scripts/verificar-memoria.mjs`: auditoría automática (sin dependencias).
- `scripts/resumen-inicio.mjs`: imprime el estado para usarlo en un hook de inicio de sesión (opcional).

## Límites

- No guardes tokens, claves, contraseñas ni datos personales de clientes en la memoria.
- No afirmes que un agente, MCP o skill está activo si no lo comprobaste.
- La instrucción explícita más reciente del usuario y las reglas propias del repositorio mandan sobre esta skill.
- Esta skill solo se ejecuta en agentes que la tienen en su catálogo. Si un agente no la ve, el arreglo es el puntero en `AGENTS.md` (que el usuario pide instalar una vez) o, si el agente no lee `AGENTS.md`, la línea de su archivo de instrucciones (modo 7, paso 4).
