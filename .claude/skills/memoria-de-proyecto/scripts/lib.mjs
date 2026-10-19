// Funciones comunes de los scripts de memoria-de-proyecto. Sin dependencias (Node 18+).
import fs from "node:fs";
import path from "node:path";

export const MARCADOR = /<!--\s*memoria-de-proyecto:inicio\s+ruta=([^\s>]+)\s*-->/;
export const ARCHIVOS_ENTRADA = ["AGENTS.md", "CLAUDE.md", "GEMINI.md"];

export function leer(ruta) {
  try {
    return fs.readFileSync(ruta, "utf8");
  } catch {
    return null;
  }
}

// Busca el marcador del puntero; devuelve { ruta, archivo } o null.
export function buscarMemoria(raiz) {
  for (const nombre of ARCHIVOS_ENTRADA) {
    const texto = leer(path.join(raiz, nombre));
    const m = texto && texto.match(MARCADOR);
    if (m) return { ruta: m[1].replace(/[\\/]+$/, ""), archivo: nombre };
  }
  return null;
}

// Devuelve el cuerpo de la sección cuyo título empieza con `titulo` (cualquier nivel de #).
export function seccion(texto, titulo) {
  const lineas = texto.split(/\r?\n/);
  const inicio = lineas.findIndex((l) => {
    const m = l.match(/^(#{1,6})\s+(.*)$/);
    return m && m[2].trim().toLowerCase().includes(titulo.toLowerCase());
  });
  if (inicio === -1) return "";
  const nivel = lineas[inicio].match(/^#+/)[0].length;
  const fin = lineas.findIndex((l, i) => {
    if (i <= inicio) return false;
    const m = l.match(/^(#{1,6})\s/);
    return m && m[1].length <= nivel;
  });
  return lineas.slice(inicio + 1, fin === -1 ? undefined : fin).join("\n").trim();
}
