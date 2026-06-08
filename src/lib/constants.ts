// Constantes seguras para client components (sin fs, sin Node APIs)

export type Categoria =
  | 'contenidos'
  | 'problemas-resueltos'
  | 'metodos'
  | 'demostraciones'
  | 'problemas-sugeridos';

export const CATEGORIAS: { id: Categoria; label: string; descripcion: string }[] = [
  { id: 'contenidos', label: 'Contenidos', descripcion: 'Teoría, teoremas y definiciones' },
  { id: 'metodos', label: 'Métodos', descripcion: 'Técnicas y estrategias de aplicación' },
  { id: 'problemas-resueltos', label: 'Problemas resueltos', descripcion: 'Soluciones detalladas con teoría aplicada' },
  { id: 'demostraciones', label: 'Demostraciones', descripcion: 'Pruebas formales y rigurosas' },
  { id: 'problemas-sugeridos', label: 'Problemas sugeridos', descripcion: 'Ejercicios para practicar' },
];

export type Subseccion = 'geometria' | 'teoria-numeros' | 'algebra' | 'combinatoria';

export const SUBSECCIONES: { id: Subseccion; label: string; descripcion: string; simbolo: string }[] = [
  { id: 'teoria-numeros', label: 'Teoría de Números', descripcion: 'Aritmética modular, primos, ecuaciones diofánticas', simbolo: 'ℕ' },
  { id: 'geometria', label: 'Geometría', descripcion: 'Sintética, proyectiva, transformaciones, inversión', simbolo: '△' },
  { id: 'algebra', label: 'Álgebra', descripcion: 'Desigualdades, ecuaciones funcionales, polinomios sobre ℝ', simbolo: '∑' },
  { id: 'combinatoria', label: 'Combinatoria', descripcion: 'Conteo, grafos, extremal, juegos y probabilidad combinatoria', simbolo: '⬡' },
];

export type Seccion = 'olimpiada';

// ============================================================
//  ESCALA DE DIFICULTAD CALIBRADA POR COMPETENCIA
// ============================================================
//
//   iniciacion    — ESO, fase local / canguro / pre-olímpico.
//                   Técnicas básicas, manipulación algebraica.
//
//   regional      — Olimpíada Matemática Galega y otras fases
//                   autonómicas de la OME. Bachillerato, requiere
//                   una idea no trivial pero ejecutable en 60-90 min.
//
//   nacional      — Fase Nacional OME, Cono Sur, Iberoamericana
//                   juvenil. Demanda combinación de técnicas.
//
//   internacional — IMO, Iberoamericana senior, RMM, EGMO.
//                   Problema con varias capas de profundidad.
//
//   elite         — TST, IMO Shortlist (G7+, N6+, C7+), Putnam B6,
//                   USAMO 6. Frontera de la olimpiada moderna.
//
// ============================================================

export type Dificultad =
  | 'iniciacion'
  | 'regional'
  | 'nacional'
  | 'internacional'
  | 'elite';

export const DIFICULTADES: {
  id: Dificultad;
  label: string;
  short: string;
  descripcion: string;
  ejemplo: string;
  orden: number;
}[] = [
  {
    id: 'iniciacion',
    label: 'Iniciación',
    short: 'Inic.',
    descripcion: 'Pre-olímpico. Técnicas básicas y manipulación cuidadosa.',
    ejemplo: 'ESO, fase local, Canguro',
    orden: 1,
  },
  {
    id: 'regional',
    label: 'Regional',
    short: 'Reg.',
    descripcion: 'Fase autonómica. Requiere idea no trivial pero técnicamente abordable.',
    ejemplo: 'Olimpíada Matemática Galega, fases autonómicas OME',
    orden: 2,
  },
  {
    id: 'nacional',
    label: 'Nacional',
    short: 'Nac.',
    descripcion: 'Fase nacional. Combinación de técnicas, demostraciones completas.',
    ejemplo: 'Fase Nacional OME, Cono Sur, Ibero juvenil',
    orden: 3,
  },
  {
    id: 'internacional',
    label: 'Internacional',
    short: 'Int.',
    descripcion: 'Competición internacional. Varias capas, ideas sutiles.',
    ejemplo: 'IMO, Iberoamericana, EGMO, RMM',
    orden: 4,
  },
  {
    id: 'elite',
    label: 'Élite',
    short: 'Élite',
    descripcion: 'Frontera de la olimpiada moderna. Problemas de selección y shortlist alta.',
    ejemplo: 'IMO Shortlist G7+/N6+, USAMO 6, Putnam B6, TST',
    orden: 5,
  },
];

export interface ContentMeta {
  slug: string;
  title: string;
  titleHtml: string;       // título con LaTeX inline ya renderizado por KaTeX
  preview: string;
  previewHtml: string;     // preview con LaTeX inline ya renderizado por KaTeX
  dificultad: Dificultad;
  competencia?: string;     // ej. "OMG 2018, P3" o "IMO 2008, P1"
  tags?: string[];
  prerequisites?: string[];
  author?: string;
  updated?: string;
  seccion: Seccion;
  subseccion: Subseccion;
  categoria: Categoria;
  href: string;
}

export interface ContentDoc extends ContentMeta {
  html: string;
  raw: string;
}
