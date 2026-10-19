# Inicio — memoria del proyecto

<!-- memoria-de-proyecto v2.0.0 · puedes editar este archivo, pero conserva esta línea -->

Este archivo es para **cualquier agente** (Claude Code, Codex, Gemini CLI, OpenCode, Cursor, Copilot…) y para cualquier persona que se una al proyecto. Si llegaste desde `AGENTS.md`, `CLAUDE.md` o `GEMINI.md`, sigue estos pasos antes de trabajar. No necesitas ninguna skill instalada.

## 1. Al empezar una sesión

1. Lee `CURRENT.md`: dónde quedamos y cuál es la próxima acción.
2. Revisa `git status` y la rama actual. Si hay cambios sin commit que no reconoces, pregunta antes de tocarlos.
3. Lee `PREFERENCIAS.md`: idioma, zona horaria y forma de trabajar.
4. Abre solo lo que la tarea necesite: `TAREAS.md`, `PROYECTO.md`, `ARQUITECTURA.md`, `decisiones/`. **No leas `sesiones/`** salvo que `CURRENT.md` no alcance o el usuario lo pida.
5. Si `PREFERENCIAS.md` lo indica, empieza tu primera respuesta con un resumen breve: dónde quedamos, próxima acción y pendientes de prioridad alta.

## 2. Frases del usuario

| El usuario dice | Qué haces |
|---|---|
| «agrega tarea: …» | Añádela en `TAREAS.md` → Pendientes, con el siguiente número `T-NN`, la prioridad que corresponda y un criterio de finalización. Pregunta la prioridad solo si no se puede deducir. |
| «agrega mejora: …» | Añádela en `TAREAS.md` → Mejoras con el siguiente `M-NN`. Es una idea, no una tarea aprobada. |
| «empecemos T-NN» | Pásala a «En curso» y actualiza `CURRENT.md`. Sigue `GIT.md` (rama o no). |
| «marca T-NN como hecha» | Comprueba el criterio con evidencia. Pásala a «Hechas» con la fecha y una línea de qué cambió. Si no hay evidencia, dilo. |
| «descarta T-NN» / «descarta M-NN» | Pásala a «Descartadas» con fecha y motivo. No la borres. |
| «recuerda que …» | Si es una convención del proyecto → `PREFERENCIAS.md`. Si es una decisión técnica → `decisiones/`. Si es personal del usuario → no va en el repo. |
| «cerramos sesión» | Reescribe `CURRENT.md`, actualiza `TAREAS.md` (incluida la fecha de «Última actualización»), crea `sesiones/AAAA-MM-DD.md` (o `_2`, `_3`…) con la plantilla de `sesiones/` y responde con un resumen corto. |
| «revisa la memoria» | Comprueba punteros, archivos, fechas frente a Git, números repetidos y secretos. Si existe la skill `memoria-de-proyecto`, usa su script `verificar-memoria.mjs`. |

## 3. Reglas para escribir en la memoria

- **El código y Git son la fuente de verdad.** La memoria resume. Si un documento contradice al código, corrige el documento.
- **Numeración:** relee `TAREAS.md` justo antes de asignar un número; otra sesión pudo agregar uno. Nunca reutilices números. Si Git muestra un conflicto en `TAREAS.md`, conserva las dos entradas y renumera la más nueva.
- **`CURRENT.md` es un estado, no un diario.** Reescríbelo, no le agregues historia. Máximo unas 40 líneas. Actualízalo cuando cambie la próxima acción y siempre al cerrar sesión.
- **Fechas** en formato `AAAA-MM-DD`, en la zona horaria de `PREFERENCIAS.md`.
- **Estados de Git distintos:** sin commit, con commit, con push e integrado no son lo mismo. Escribe el que corresponda.
- **No se borra historial:** las tareas hechas y descartadas se conservan.
- **Nunca guardes secretos** (tokens, claves, contraseñas, cadenas de conexión) ni datos personales de clientes.
- **Commits:** los cambios de memoria van en el mismo commit que el trabajo que describen. No hagas commit ni push si el usuario no lo pidió o `GIT.md` no lo autoriza.

## 4. Índice

| Archivo | Qué contiene | Cuándo leerlo |
|---|---|---|
| `CURRENT.md` | Tarea activa, avance, próxima acción | Siempre al empezar |
| `PREFERENCIAS.md` | Idioma, zona horaria, convenciones | Siempre al empezar |
| `TAREAS.md` | Tareas `T-NN`, mejoras `M-NN`, hechas | Al registrar o elegir tarea |
| `PROYECTO.md` | Propósito, stack, mapa del repo, comandos | Si no conoces el proyecto |
| `ARQUITECTURA.md` | Componentes, flujos, datos | Antes de cambios de diseño |
| `decisiones/` | Decisiones técnicas duraderas | Si la tarea toca una decisión |
| `CAPACIDADES.md` | Skills, MCP, hooks, accesos (sin secretos) | Al usar herramientas externas |
| `GIT.md` | Cómo se trabaja con ramas y commits | Antes de commit, push o rama |
| `sesiones/` | Historial de sesiones | Solo si hace falta |
