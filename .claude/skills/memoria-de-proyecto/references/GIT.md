# Elegir el flujo Git

La plantilla `templates/memoria/GIT.md` trae los dos modos. Elige al inicializar:

| Situación | Modo |
|---|---|
| Una persona, o dos sin revisión formal | **Ligero** (por defecto) |
| Varias personas en paralelo, pull requests obligatorios, CI o ramas protegidas | **Completo** |
| No hay Git | Propón `git init` y explica qué aporta; no lo hagas sin permiso. La memoria funciona igual, pero sin historial. |
| Hay Git pero no hay remoto | Ligero. No crees remotos ni publiques el repositorio por tu cuenta. |

Reglas comunes a los dos modos:

- Detecta la rama base; no supongas `main`.
- Deja `GIT.md` en estado «propuesta» hasta que el usuario lo apruebe. Mientras tanto, pregunta antes de cada commit o push.
- Si las reglas del repositorio (protección de ramas, CI, CONTRIBUTING) contradicen `GIT.md`, mandan las del repositorio: corrige `GIT.md`.
