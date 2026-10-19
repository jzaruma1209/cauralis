# Compatibilidad entre agentes

_Revisado: 2026-10-11. Las rutas cambian con las versiones; confirma en la documentación de cada agente._

Hay dos cosas distintas que instalar:

1. **La skill** (este procedimiento): cada agente la busca en su carpeta de skills.
2. **El puntero a la memoria**: un bloque en el archivo de instrucciones que el agente lee siempre al empezar. Esto es lo que hace que «vaya primero» a la memoria; la skill sola no se carga al iniciar.

## 1. Archivo de entrada que lee cada agente

`AGENTS.md` es el estándar abierto de instrucciones para agentes (agents.md). Por eso el puntero va en `AGENTS.md` y los agentes que no lo leen lo importan.

| Agente | Lee `AGENTS.md` | Qué hacer |
|---|---|---|
| Codex (OpenAI) | Sí | Nada más |
| OpenCode | Sí | Nada más |
| Cursor | Sí | Nada más |
| GitHub Copilot (agente) | Sí | Nada más |
| Windsurf, Zed, Warp, Amp, Junie, Roo Code, Kilo Code, Devin, goose, Augment, Jules, Factory | Sí (según agents.md) | Nada más |
| **Claude Code** | **No** | `CLAUDE.md` con la línea `@AGENTS.md` |
| **Gemini CLI** | Solo si se configura | `GEMINI.md` con `@./AGENTS.md`, o `.gemini/settings.json` → `{"context":{"fileName":["AGENTS.md","GEMINI.md"]}}` |
| Aider | Solo si se configura | En `.aider.conf.yml`: `read: AGENTS.md` |
| Cline, Kiro, otros con reglas propias | Verificar | Si no lo leen, crear su archivo de reglas con una línea que remita a `AGENTS.md` |

### Cómo comprobar que el agente leyó el puntero

- **Claude Code:** comando `/memory` (lista los archivos cargados).
- **Gemini CLI:** `/memory show`.
- **Cualquiera:** abre una sesión nueva y pregunta «¿cuál es la próxima acción del proyecto?». Si responde con lo de `CURRENT.md`, funciona.

## 2. Dónde se instala la skill

### Opción recomendada: instalador universal

El CLI `skills` (vercel-labs/skills) conoce las rutas de más de 60 agentes:

```bash
# Desde este repositorio local, a varios agentes a la vez, en el proyecto actual
npx skills add <ruta-o-repo> --skill memoria-de-proyecto -a claude-code -a codex -a gemini-cli -a opencode

# Global (para todos tus proyectos)
npx skills add <ruta-o-repo> --skill memoria-de-proyecto -g -a claude-code -a codex -a gemini-cli -a opencode

# Ver la lista completa de agentes soportados
npx skills add --help
```

`<ruta-o-repo>` puede ser una carpeta local o un repositorio de GitHub (`usuario/repo`).

### Opción manual: copiar la carpeta

| Agente | Proyecto | Global (usuario) |
|---|---|---|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex, Cline, Warp, Zed, Pi, Amp | `.agents/skills/` | `~/.agents/skills/` (Amp: `~/.config/agents/skills/`) |
| Gemini CLI | `.agents/skills/` | `~/.gemini/skills/` |
| Antigravity | `.agents/skills/` | `~/.gemini/antigravity/skills/` |
| OpenCode | `.agents/skills/` | `~/.config/opencode/skills/` |
| Cursor | `.agents/skills/` | `~/.cursor/skills/` |
| GitHub Copilot | `.agents/skills/` | `~/.copilot/skills/` |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |
| Kiro CLI | `.kiro/skills/` | `~/.kiro/skills/` |
| Roo Code | `.roo/skills/` | `~/.roo/skills/` |
| Qwen Code | `.qwen/skills/` | `~/.qwen/skills/` |

Observa que `.agents/skills/` en el proyecto cubre a casi todos; Claude Code es la excepción principal (`.claude/skills/`).

### ¿Proyecto o global?

- **Global**: tú la tienes en todos tus proyectos. Otras personas no la reciben.
- **Proyecto** (dentro del repo): cualquiera que clone el repo la tiene. Recomendado si trabaja más gente.
- En ambos casos la memoria funciona sin la skill gracias a `STARTUP.md`; la skill solo ayuda a mantenerla.

## 3. Memoria personal frente a memoria del proyecto

Cada agente tiene además su memoria personal (por ejemplo, la memoria automática de Claude Code o `save_memory` de Gemini). Esa memoria no se comparte entre agentes ni personas. Lo que deba saber cualquiera que trabaje en el proyecto va en la carpeta de memoria del repo.
