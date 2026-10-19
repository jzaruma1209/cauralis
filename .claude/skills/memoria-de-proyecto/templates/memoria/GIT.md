# Flujo Git del proyecto

_Modo: **ligero** · Estado: propuesta / aprobado por [persona] el AAAA-MM-DD_

## Datos del repositorio
- Rama base: [detectar con `git symbolic-ref refs/remotes/origin/HEAD`; no asumir `main`]
- Remoto: [nombre y URL, nunca credenciales]
- Validaciones antes de commit: [comandos que existen de verdad, p. ej. typecheck o tests]
- El agente puede, sin preguntar: [nada / commit / commit y push]

## Modo ligero (por defecto, una persona o equipo pequeño)
- Se trabaja en la rama base con commits pequeños y mensajes claros (`feat:`, `fix:`, `docs:`, `chore:`).
- Se abre una rama `feat/T-NN-descripcion` solo para cambios grandes o riesgosos, o cuando otra persona trabaja en paralelo. Al terminar se integra y se borra.
- Los cambios de memoria van en el mismo commit que el trabajo que describen.
- El agente no hace commit ni push si el usuario no lo pidió o este archivo no lo autoriza.

## Modo completo (equipo, revisión obligatoria)
_Activar cambiando «Modo» arriba._
- Una rama por tarea: `feat/T-NN-…`, `fix/T-NN-…`, `docs/T-NN-…`. Retomar una tarea es volver a su rama, no crear otra.
- Las subtareas van en la rama de la tarea padre, salvo que se revisen o integren por separado.
- Integración por pull request con las revisiones y CI que exija el repositorio.
- La rama se borra solo después de confirmar que quedó integrada.

## Siempre
- Antes de cambiar de rama, revisar `git status`. No mover, guardar en stash ni descartar cambios ajenos sin permiso.
- Nunca `push --force`, `reset --hard` ni borrar ramas con trabajo sin integrar.
- Commit, push, pull request, integración y borrado de rama son estados distintos; registra en `CURRENT.md` el que corresponda.
