#!/usr/bin/env node
// Audita la memoria de un proyecto: punteros, archivos, fecha de CURRENT.md frente a Git,
// números de tarea repetidos y posibles secretos.
// Uso: node verificar-memoria.mjs [raíz-del-proyecto]
// Sale con código 1 si hay errores.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { leer, buscarMemoria } from "./lib.mjs";

const raiz = path.resolve(process.argv[2] ?? process.cwd());
const errores = [];
const avisos = [];
const bien = [];

// 1. Punteros
const memoria = buscarMemoria(raiz);
if (!memoria) {
  errores.push("No hay puntero a la memoria en AGENTS.md, CLAUDE.md ni GEMINI.md (falta el marcador «memoria-de-proyecto:inicio»).");
  imprimir();
}
const dirMemoria = path.join(raiz, memoria.ruta);
bien.push(`Memoria en «${memoria.ruta}» (puntero en ${memoria.archivo}).`);

const agents = leer(path.join(raiz, "AGENTS.md"));
if (!agents) avisos.push("No existe AGENTS.md: Codex, OpenCode, Cursor, Copilot y otros no encontrarán la memoria.");
else if (memoria.archivo !== "AGENTS.md") avisos.push("El puntero no está en AGENTS.md; muévelo ahí para que lo lean todos los agentes.");

const importaAgents = (texto) => !!texto && (/^@\.?\/?AGENTS\.md\s*$/m.test(texto) || texto.includes("memoria-de-proyecto:inicio"));

const claude = leer(path.join(raiz, "CLAUDE.md"));
if (!claude) avisos.push("No existe CLAUDE.md: Claude Code no lee AGENTS.md por sí solo. Crea CLAUDE.md con la línea «@AGENTS.md».");
else if (!importaAgents(claude)) errores.push("CLAUDE.md no importa AGENTS.md: agrega la línea «@AGENTS.md».");
else bien.push("Claude Code: CLAUDE.md importa AGENTS.md.");

const gemini = leer(path.join(raiz, "GEMINI.md"));
const geminiSettings = leer(path.join(raiz, ".gemini", "settings.json")) ?? "";
if (importaAgents(gemini) || /"fileName"[^\]]*AGENTS\.md/s.test(geminiSettings)) bien.push("Gemini CLI: carga AGENTS.md.");
else avisos.push("Gemini CLI no cargará AGENTS.md: crea GEMINI.md con «@./AGENTS.md» o configura .gemini/settings.json (ignóralo si no usas Gemini).");

// 2. Archivos de la memoria
if (!fs.existsSync(dirMemoria)) {
  errores.push(`La carpeta «${memoria.ruta}» no existe.`);
  imprimir();
}
for (const f of ["STARTUP.md", "CURRENT.md", "TAREAS.md"]) {
  if (!fs.existsSync(path.join(dirMemoria, f))) errores.push(`Falta ${memoria.ruta}/${f}.`);
}
for (const f of ["PREFERENCIAS.md", "PROYECTO.md", "ARQUITECTURA.md", "CAPACIDADES.md", "GIT.md"]) {
  if (!fs.existsSync(path.join(dirMemoria, f))) avisos.push(`Falta ${memoria.ruta}/${f} (opcional, recomendado).`);
}

const startup = leer(path.join(dirMemoria, "STARTUP.md")) ?? "";
const version = startup.match(/memoria-de-proyecto v(\d+\.\d+\.\d+)/);
if (startup) {
  if (version) bien.push(`STARTUP.md usa la plantilla v${version[1]}.`);
  else avisos.push("STARTUP.md no tiene la marca de versión de la plantilla.");
}

// 3. CURRENT.md frente a Git
const current = leer(path.join(dirMemoria, "CURRENT.md"));
if (current) {
  const fecha = current.match(/[ÚU]ltima actualizaci[óo]n:?\**\s*:?\s*(\d{4}-\d{2}-\d{2})/i)?.[1];
  if (!fecha) avisos.push("CURRENT.md no tiene una fecha de «Última actualización» válida (AAAA-MM-DD).");
  const codigo = git(["log", "-1", "--format=%cs", "--", ".", `:(exclude)${memoria.ruta}`]);
  if (fecha && codigo && codigo > fecha) {
    avisos.push(`Hay commits de código del ${codigo}, posteriores a CURRENT.md (${fecha}). Revisa si está desactualizado.`);
  } else if (fecha) bien.push(`CURRENT.md actualizado el ${fecha}.`);
  const lineas = current.split(/\r?\n/).length;
  if (lineas > 60) avisos.push(`CURRENT.md tiene ${lineas} líneas; debería ser un estado corto (~40), no un diario.`);
}

// 4. Números de tarea repetidos
const tareas = leer(path.join(dirMemoria, "TAREAS.md"));
if (tareas) {
  const vistos = new Map();
  const definiciones = [
    /^\s*[-*]\s+\*\*([A-Z]{1,3})-(\d+)\*\*/, // - **T-12** …
    /^\s*[-*]\s+\*\*\d{4}-\d{2}-\d{2}\*\*\W{0,6}([A-Z]{1,3})-(\d+)/, // - **2026-10-11** · T-12 …
    /^\|\s*([A-Z]{1,3})-(\d+)\s*\|/, // | T-12 | … (tablas)
  ];
  tareas.split(/\r?\n/).forEach((linea, i) => {
    for (const re of definiciones) {
      const m = linea.match(re);
      if (!m) continue;
      const id = `${m[1]}-${Number(m[2])}`;
      vistos.set(id, [...(vistos.get(id) ?? []), i + 1]);
      break;
    }
  });
  const repetidos = [...vistos].filter(([, l]) => l.length > 1);
  for (const [id, l] of repetidos) errores.push(`${id} aparece ${l.length} veces en TAREAS.md (líneas ${l.join(", ")}).`);
  if (!repetidos.length) bien.push(`TAREAS.md: ${vistos.size} entradas sin números repetidos.`);
}

// 5. Posibles secretos
const PATRONES = [
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, "clave privada"],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, "token JWT"],
  [/\b(?:sk|rk)_(?:live|test)_[A-Za-z0-9]{10,}/, "clave de Stripe"],
  [/\bsk-[A-Za-z0-9_-]{20,}/, "clave de API (sk-…)"],
  [/\bgh[pousr]_[A-Za-z0-9]{30,}/, "token de GitHub"],
  [/\bAKIA[0-9A-Z]{16}\b/, "clave de AWS"],
  [/\bAIza[0-9A-Za-z_-]{35}\b/, "clave de Google"],
  [/\bxox[abprs]-[A-Za-z0-9-]{10,}/, "token de Slack"],
  [/(?:password|contraseña|passwd|secret|api[_-]?key)\s*[:=]\s*["']?[^\s"'`<>]{8,}/i, "posible credencial"],
];
const revisar = [...listarMd(dirMemoria), ...["AGENTS.md", "CLAUDE.md", "GEMINI.md"].map((f) => path.join(raiz, f))];
let secretos = 0;
for (const archivo of revisar) {
  const texto = leer(archivo);
  if (!texto) continue;
  texto.split(/\r?\n/).forEach((linea, i) => {
    for (const [re, tipo] of PATRONES) {
      if (re.test(linea)) {
        secretos++;
        errores.push(`Posible secreto (${tipo}) en ${path.relative(raiz, archivo)}:${i + 1}. Quítalo y rota la clave si es real.`);
        break;
      }
    }
  });
}
if (!secretos) bien.push("Sin secretos detectados en la memoria.");

imprimir();

function git(args) {
  try {
    return execFileSync("git", ["-C", raiz, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

function listarMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return listarMd(p);
    return e.name.endsWith(".md") ? [p] : [];
  });
}

function imprimir() {
  console.log(`Verificación de memoria — ${raiz}\n`);
  for (const b of bien) console.log(`  ✓ ${b}`);
  for (const a of avisos) console.log(`  ! ${a}`);
  for (const e of errores) console.log(`  ✗ ${e}`);
  console.log(`\n${errores.length} error(es), ${avisos.length} aviso(s).`);
  process.exit(errores.length ? 1 : 0);
}
