import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import katex from 'katex';

/**
 * ESTRUCTURA DE CONTENIDO
 * ------------------------
 * /content/<seccion>/<subseccion>/<categoria>/<slug>.md
 *
 * Ejemplo:
 *   /content/olimpiada/teoria-numeros/contenidos/lifting-the-exponent.md
 *
 * Cada archivo .md tiene FRONTMATTER YAML al inicio:
 *
 *   ---
 *   title: "Lema del Levantamiento del Exponente (LTE)"
 *   preview: "Una herramienta poderosa para evaluar v_p(a^n - b^n)."
 *   difficulty: 4            # 1-5 estrellas
 *   tags: [valuacion, primos, exponentes]
 *   prerequisites: [valuacion-p-adica]
 *   author: "Anónimo"
 *   updated: "2025-01-15"
 *   ---
 *
 * Y luego el cuerpo en Markdown con SECCIONES SEMÁNTICAS reconocidas:
 *
 *   ## Enunciado          → recuadro tipo "teorema"
 *   ## Demostración       → recuadro tipo "prueba", colapsable
 *   ## Ejemplo            → recuadro tipo "ejemplo"
 *   ## Observación        → recuadro tipo "nota"
 *   ## Aplicaciones
 *   ## Problemas relacionados
 *
 * LaTeX inline:   $a^2 + b^2 = c^2$
 * LaTeX display:  $$ \sum_{k=1}^n k = \frac{n(n+1)}{2} $$
 */

// Re-exportamos constantes y tipos desde un módulo neutro (sin dependencias de Node)
// para que client components puedan importarlos sin que webpack arrastre `fs` al bundle.
import {
  CATEGORIAS,
  SUBSECCIONES,
  DIFICULTADES,
} from './constants';
import type { Categoria, Subseccion, Seccion, ContentMeta, ContentDoc, Dificultad } from './constants';

export { CATEGORIAS, SUBSECCIONES, DIFICULTADES };
export type { Categoria, Subseccion, Seccion, ContentMeta, ContentDoc, Dificultad };

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function safeRead(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

export function listSlugs(
  seccion: Seccion,
  subseccion: Subseccion,
  categoria: Categoria
): string[] {
  const dir = path.join(CONTENT_ROOT, seccion, subseccion, categoria);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function normalizeDificultad(data: any): Dificultad {
  // Soporta el campo nuevo `dificultad` con valores de la escala calibrada
  const d = data.dificultad;
  if (typeof d === 'string') {
    const norm = d.toLowerCase().trim();
    const valid: Dificultad[] = ['iniciacion', 'regional', 'nacional', 'internacional', 'elite'];
    if ((valid as string[]).includes(norm)) return norm as Dificultad;
  }
  // Compatibilidad legacy: si solo hay `difficulty: 1..5` numérico, mapeamos.
  const n = data.difficulty;
  if (typeof n === 'number') {
    if (n <= 1) return 'iniciacion';
    if (n === 2) return 'regional';
    if (n === 3) return 'nacional';
    if (n === 4) return 'internacional';
    return 'elite';
  }
  return 'regional';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Procesa LaTeX inline ($…$) en una cadena de texto plano,
 * devolviendo HTML con los segmentos matemáticos renderizados por KaTeX.
 * Los segmentos no matemáticos se escapan como HTML.
 */
function renderInlineLatex(text: string): string {
  if (!text) return '';
  // $…$ no escapado (el $ doble \\$ NO se trata como delimitador)
  const re = /\$([^$\n]+?)\$/g;
  let out = '';
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    out += escapeHtml(text.slice(last, m.index));
    try {
      out += katex.renderToString(m[1], { throwOnError: false, displayMode: false, output: 'html' });
    } catch {
      out += escapeHtml(m[0]);
    }
    last = m.index + m[0].length;
  }
  out += escapeHtml(text.slice(last));
  return out;
}

export function getMeta(
  seccion: Seccion,
  subseccion: Subseccion,
  categoria: Categoria,
  slug: string
): ContentMeta | null {
  const file = path.join(CONTENT_ROOT, seccion, subseccion, categoria, `${slug}.md`);
  const raw = safeRead(file);
  if (!raw) return null;
  const { data } = matter(raw);
  const title = (data.title as string) || slug;
  const preview = (data.preview as string) || '';
  return {
    slug,
    title,
    titleHtml: renderInlineLatex(title),
    preview,
    previewHtml: renderInlineLatex(preview),
    dificultad: normalizeDificultad(data),
    competencia: data.competencia as string | undefined,
    tags: (data.tags as string[]) || [],
    prerequisites: (data.prerequisites as string[]) || [],
    author: data.author as string | undefined,
    updated: data.updated as string | undefined,
    seccion,
    subseccion,
    categoria,
    href: `/${seccion}/${subseccion}/${categoria}/${slug}`,
  };
}

export function listMeta(
  seccion: Seccion,
  subseccion: Subseccion,
  categoria: Categoria
): ContentMeta[] {
  return listSlugs(seccion, subseccion, categoria)
    .map((s) => getMeta(seccion, subseccion, categoria, s))
    .filter((m): m is ContentMeta => m !== null);
}

// ============================================================
//  GEOFIG — motor de figuras geométricas SVG
// ============================================================
//
//  Uso en markdown:
//
//  ```geofig
//  // comentario
//  size 6 6              — viewport ±3 en cada eje (default)
//  circle 0 0 2.5 ω      — círculo centro (0,0) radio 2.5, etiq. ω
//  point  1.8  1.6  A    — punto con etiqueta
//  point  1.8  1.6  A 0.15 -0.2   — con offset de etiqueta (dx dy)
//  segment A B           — segmento entre puntos nombrados
//  dash    A B           — segmento discontinuo
//  arc  0 0 2.5  30 150  — arco de ángulo 30° a 150°
//  rightangle H A B      — marca de ángulo recto en H hacia A y B
//  label  0.5 -2.8 "PA·PB = cte"  — texto libre (puede tener espacios)
//  ```
//
// ============================================================

type GeoCmd =
  | { type: 'size'; W: number; H: number }
  | { type: 'circle'; cx: number; cy: number; r: number; lbl: string }
  | { type: 'point';  x: number;  y: number; lbl: string; dx: number; dy: number }
  | { type: 'segment'; p1: string; p2: string; dashed: boolean }
  | { type: 'arc'; cx: number; cy: number; r: number; a1: number; a2: number }
  | { type: 'rightangle'; v: string; p1: string; p2: string }
  | { type: 'label'; x: number; y: number; text: string };

function parseGeofig(src: string): string {
  const lines = src.trim().split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('//'));
  const cmds: GeoCmd[] = [];
  for (const line of lines) {
    // Split respecting quoted strings
    const parts: string[] = [];
    let cur = '';
    let inQ = false;
    for (const ch of line) {
      if (ch === '"') { inQ = !inQ; if (!inQ) { parts.push(cur); cur = ''; } }
      else if (ch === ' ' && !inQ) { if (cur) { parts.push(cur); cur = ''; } }
      else cur += ch;
    }
    if (cur) parts.push(cur);
    if (!parts.length) continue;
    const cmd = parts[0].toLowerCase();
    const n = (i: number) => parseFloat(parts[i] ?? '0');
    if (cmd === 'size')  cmds.push({ type: 'size',  W: n(1), H: n(2) || n(1) });
    else if (cmd === 'circle') cmds.push({ type: 'circle', cx: n(1), cy: n(2), r: n(3), lbl: parts[4] ?? '' });
    else if (cmd === 'point')  cmds.push({ type: 'point',  x: n(1),  y: n(2), lbl: parts[3] ?? '', dx: n(4) || 0.18, dy: n(5) || -0.18 });
    else if (cmd === 'segment' || cmd === 'seg') cmds.push({ type: 'segment', p1: parts[1], p2: parts[2], dashed: false });
    else if (cmd === 'dash')   cmds.push({ type: 'segment', p1: parts[1], p2: parts[2], dashed: true });
    else if (cmd === 'arc')    cmds.push({ type: 'arc', cx: n(1), cy: n(2), r: n(3), a1: n(4), a2: n(5) });
    else if (cmd === 'rightangle') cmds.push({ type: 'rightangle', v: parts[1], p1: parts[2], p2: parts[3] });
    else if (cmd === 'label')  cmds.push({ type: 'label', x: n(1), y: n(2), text: parts[3] ?? '' });
  }

  // Viewport
  const sizeCmd = cmds.find(c => c.type === 'size') as { type: 'size'; W: number; H: number } | undefined;
  const W = sizeCmd?.W ?? 6;
  const H = sizeCmd?.H ?? 6;
  const SCALE = 260 / W;   // px per user unit — target ~260px SVG width
  const PAD = 24;           // padding in SVG px

  // Coordinate transforms: data→SVG (flip y)
  const sx = (x: number) => +(x * SCALE).toFixed(2);
  const sy = (y: number) => +(-y * SCALE).toFixed(2);

  // Named points
  const pts = new Map<string, [number, number]>();
  cmds.forEach(c => { if (c.type === 'point' && c.lbl) pts.set(c.lbl, [c.x, c.y]); });

  const geo: string[] = [];  // geometric elements (circles, lines)
  const lbls: string[] = []; // text labels (rendered last, on top)

  for (const c of cmds) {
    if (c.type === 'circle') {
      geo.push(`<circle class="gf-c" cx="${sx(c.cx)}" cy="${sy(c.cy)}" r="${+(c.r * SCALE).toFixed(2)}"/>`);
      if (c.lbl) {
        const angle = Math.PI / 4;
        lbls.push(`<text class="gf-lbl" x="${sx(c.cx + c.r * Math.cos(angle))}" y="${sy(c.cy + c.r * Math.sin(angle))}" dx="6" dy="-4">${c.lbl}</text>`);
      }
    } else if (c.type === 'point') {
      geo.push(`<circle class="gf-pt" cx="${sx(c.x)}" cy="${sy(c.y)}" r="3.5"/>`);
      if (c.lbl) {
        lbls.push(`<text class="gf-lbl" x="${sx(c.x + c.dx)}" y="${sy(c.y + c.dy)}">${c.lbl}</text>`);
      }
    } else if (c.type === 'segment') {
      const p1 = pts.get(c.p1); const p2 = pts.get(c.p2);
      if (p1 && p2) {
        const cls = c.dashed ? 'gf-seg gf-dash' : 'gf-seg';
        geo.push(`<line class="${cls}" x1="${sx(p1[0])}" y1="${sy(p1[1])}" x2="${sx(p2[0])}" y2="${sy(p2[1])}"/>`);
      }
    } else if (c.type === 'arc') {
      const a1r = c.a1 * Math.PI / 180, a2r = c.a2 * Math.PI / 180;
      const R = c.r * SCALE;
      const x1 = sx(c.cx + c.r * Math.cos(a1r)), y1 = sy(c.cy + c.r * Math.sin(a1r));
      const x2 = sx(c.cx + c.r * Math.cos(a2r)), y2 = sy(c.cy + c.r * Math.sin(a2r));
      const diff = ((a2r - a1r) + 2 * Math.PI) % (2 * Math.PI);
      const large = diff > Math.PI ? 1 : 0;
      // In SVG (y flipped): CCW in data = CW in SVG → sweep=0
      geo.push(`<path class="gf-seg" d="M${x1},${y1} A${R.toFixed(2)},${R.toFixed(2)} 0 ${large},0 ${x2},${y2}"/>`);
    } else if (c.type === 'rightangle') {
      const vp = pts.get(c.v); const p1 = pts.get(c.p1); const p2 = pts.get(c.p2);
      if (vp && p1 && p2) {
        const S = 0.22;
        const norm = (dx: number, dy: number) => { const l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
        const [u1x, u1y] = norm(p1[0] - vp[0], p1[1] - vp[1]);
        const [u2x, u2y] = norm(p2[0] - vp[0], p2[1] - vp[1]);
        const qx1 = sx(vp[0] + S * u1x), qy1 = sy(vp[1] + S * u1y);
        const qcx = sx(vp[0] + S * u1x + S * u2x), qcy = sy(vp[1] + S * u1y + S * u2y);
        const qx2 = sx(vp[0] + S * u2x), qy2 = sy(vp[1] + S * u2y);
        geo.push(`<path class="gf-rightangle" d="M${qx1},${qy1} L${qcx},${qcy} L${qx2},${qy2}"/>`);
      }
    } else if (c.type === 'label') {
      lbls.push(`<text class="gf-lbl gf-lbl-sm" x="${sx(c.x)}" y="${sy(c.y)}" text-anchor="middle">${c.text}</text>`);
    }
  }

  // ViewBox: half extents in SVG px + padding
  const hx = W / 2 * SCALE + PAD;
  const hy = H / 2 * SCALE + PAD;
  const vbW = 2 * hx, vbH = 2 * hy;

  const style = `<style>
.gf-c{fill:none;stroke:var(--ink,#1a1612);stroke-width:1.8px}
.gf-pt{fill:var(--ink,#1a1612)}
.gf-seg{fill:none;stroke:var(--ink,#1a1612);stroke-width:1.6px;stroke-linecap:round}
.gf-dash{stroke-dasharray:5 3;stroke:var(--ink-muted,#7a6a56);stroke-width:1.3px}
.gf-rightangle{fill:none;stroke:var(--ink,#1a1612);stroke-width:1.4px}
.gf-lbl{font-family:var(--serif,'EB Garamond',Georgia,serif);font-style:italic;font-size:15px;fill:var(--ink,#1a1612);dominant-baseline:middle}
.gf-lbl-sm{font-family:var(--mono,'IBM Plex Mono',monospace);font-style:normal;font-size:12px;fill:var(--ink-muted,#7a6a56)}
</style>`;

  const inner = [...geo, ...lbls].join('\n');
  return `<figure class="geo-fig">
<svg viewBox="${-hx} ${-hy} ${vbW} ${vbH}" xmlns="http://www.w3.org/2000/svg" class="geo-svg" aria-hidden="true">
${style}
${inner}
</svg>
</figure>`;
}

function rehypeGeofig() {
  return (tree: any) => {
    function walk(node: any, parent: any, idx: number) {
      if (Array.isArray(node.children)) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          walk(node.children[i], node, i);
        }
      }
      if (
        node.tagName === 'pre' &&
        node.children?.[0]?.tagName === 'code' &&
        (node.children[0].properties?.className ?? []).includes('language-geofig')
      ) {
        const codeNode = node.children[0];
        const text = (codeNode.children ?? [])
          .filter((c: any) => c.type === 'text')
          .map((c: any) => c.value as string)
          .join('');
        parent.children[idx] = { type: 'raw', value: parseGeofig(text) };
      }
    }
    walk(tree, null, -1);
  };
}

/**
 * Transforma encabezados ## en bloques semánticos:
 * ## Enunciado  →  <section class="block block-statement"><header>Enunciado</header>...
 * Funciona post-render insertando wrappers sobre el HTML resultante.
 */
function wrapSemanticBlocks(html: string): string {
  const semantic: Record<string, string> = {
    enunciado: 'statement',
    teorema: 'theorem',
    lema: 'lemma',
    proposición: 'proposition',
    proposicion: 'proposition',
    corolario: 'corollary',
    definición: 'definition',
    definicion: 'definition',
    demostración: 'proof',
    demostracion: 'proof',
    prueba: 'proof',
    ejemplo: 'example',
    observación: 'remark',
    observacion: 'remark',
    nota: 'remark',
    aplicaciones: 'applications',
    'problemas relacionados': 'related',
  };

  // Divide por <h2> y reagrupa
  const parts = html.split(/(<h2[^>]*>.*?<\/h2>)/g);
  let out = '';
  let buffer = '';
  let currentKind: string | null = null;
  let currentTitle: string | null = null;

  const flush = () => {
    if (currentKind && currentTitle) {
      out += `<section class="cblock cblock-${currentKind}" data-kind="${currentKind}"><header class="cblock-header"><span class="cblock-label">${currentTitle}</span></header><div class="cblock-body">${buffer}</div></section>`;
    } else {
      out += buffer;
    }
    buffer = '';
    currentKind = null;
    currentTitle = null;
  };

  for (const part of parts) {
    const m = part.match(/^<h2[^>]*>(.*?)<\/h2>$/);
    if (m) {
      flush();
      const titleText = m[1].replace(/<[^>]+>/g, '').trim();
      const key = titleText.toLowerCase();
      currentKind = semantic[key] || 'section';
      currentTitle = titleText;
    } else {
      buffer += part;
    }
  }
  flush();
  return out;
}

export async function getDoc(
  seccion: Seccion,
  subseccion: Subseccion,
  categoria: Categoria,
  slug: string
): Promise<ContentDoc | null> {
  const file = path.join(CONTENT_ROOT, seccion, subseccion, categoria, `${slug}.md`);
  const raw = safeRead(file);
  if (!raw) return null;
  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeGeofig)           // convierte ```geofig blocks → SVG inline
    .use(rehypeRaw)
    .use(rehypeKatex, { strict: false, throwOnError: false })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const html = wrapSemanticBlocks(String(processed));
  const title = (data.title as string) || slug;
  const preview = (data.preview as string) || '';

  return {
    slug,
    title,
    titleHtml: renderInlineLatex(title),
    preview,
    previewHtml: renderInlineLatex(preview),
    dificultad: normalizeDificultad(data),
    competencia: data.competencia as string | undefined,
    tags: (data.tags as string[]) || [],
    prerequisites: (data.prerequisites as string[]) || [],
    author: data.author as string | undefined,
    updated: data.updated as string | undefined,
    seccion,
    subseccion,
    categoria,
    href: `/${seccion}/${subseccion}/${categoria}/${slug}`,
    html,
    raw: content,
  };
}

export function buildIndex() {
  const tree: Record<Subseccion, Record<Categoria, ContentMeta[]>> = {
    geometria: {} as any,
    'teoria-numeros': {} as any,
  };
  for (const sub of SUBSECCIONES) {
    for (const cat of CATEGORIAS) {
      tree[sub.id][cat.id] = listMeta('olimpiada', sub.id, cat.id);
    }
  }
  return tree;
}
