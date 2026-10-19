#!/usr/bin/env node
// Imprime el estado de la memoria para un hook de inicio de sesión (Claude Code SessionStart
// u otro agente con hooks). Nunca falla: si no hay memoria, no imprime nada.
// Uso: node resumen-inicio.mjs [raíz-del-proyecto]
import path from "node:path";
import { leer, buscarMemoria, seccion } from "./lib.mjs";

const MAX_CURRENT = 4000;
const raiz = path.resolve(process.argv[2] ?? process.env.CLAUDE_PROJECT_DIR ?? process.cwd());
const memoria = buscarMemoria(raiz);
if (!memoria) process.exit(0);

const dir = path.join(raiz, memoria.ruta);
const current = (leer(path.join(dir, "CURRENT.md")) ?? "(falta CURRENT.md)").trim();
const tareas = leer(path.join(dir, "TAREAS.md")) ?? "";
const enCurso = seccion(tareas, "En curso");
const alta = seccion(tareas, "Alta");

const partes = [
  `Memoria del proyecto en «${memoria.ruta}». Sigue ${memoria.ruta}/STARTUP.md (orden de lectura, frases del usuario y reglas para escribir).`,
  "",
  "### CURRENT.md",
  current.length > MAX_CURRENT ? current.slice(0, MAX_CURRENT) + "\n…(recortado)" : current,
];
if (enCurso) partes.push("", "### Tareas en curso", enCurso);
if (alta) partes.push("", "### Pendientes de prioridad alta", alta);

console.log(partes.join("\n"));
