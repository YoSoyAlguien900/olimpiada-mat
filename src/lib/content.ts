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
