'use client';

import { useMemo, useRef } from 'react';
import { DIFICULTADES, type ContentMeta, type Dificultad, type Subseccion } from '@/lib/constants';

// ─── Layout constants ────────────────────────────────────────────────────────
const NW = 180;       // node width
const NH = 68;        // node height
const COL_GAP = 88;   // horizontal gap between columns
const ROW_GAP = 28;   // vertical gap between nodes in same column
const PAD_X = 44;     // left/right padding
const PAD_TOP = 60;   // room for column labels
const PAD_BOT = 44;

const DIFFS: Dificultad[] = ['iniciacion', 'regional', 'nacional', 'internacional', 'elite'];

const DIFF_COLORS: Record<Dificultad, string> = {
  iniciacion:    '#5a6b3a',
  regional:      '#2a3a5e',
  nacional:      '#b8893a',
  internacional: '#c63d2f',
  elite:         '#4a1a1a',
};

const DIFF_BG: Record<Dificultad, string> = {
  iniciacion:    '#f0f4ea',
  regional:      '#eaeef5',
  nacional:      '#f7f1e5',
  internacional: '#faeaea',
  elite:         '#f0e8e8',
};

// ─── Types ───────────────────────────────────────────────────────────────────
interface LayoutNode {
  meta: ContentMeta;
  x: number;
  y: number;
  col: number;
  row: number;
}

interface LayoutEdge {
  from: LayoutNode;
  to: LayoutNode;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function wrapTitle(raw: string): [string, string] {
  // Strip simple LaTeX $ ... $ for display
  const title = raw.replace(/\$([^$]+)\$/g, (_, m) => m.replace(/[\\{}^_]/g, ''));
  const MAX = 24;
  if (title.length <= MAX) return [title, ''];
  const cut = title.lastIndexOf(' ', MAX);
  const line1 = cut > 0 ? title.slice(0, cut) : title.slice(0, MAX);
  let line2 = (cut > 0 ? title.slice(cut + 1) : title.slice(MAX)).trim();
  if (line2.length > MAX) line2 = line2.slice(0, MAX - 1) + '…';
  return [line1, line2];
}

function catLabel(c: string): string {
  if (c === 'contenidos') return 'T';
  if (c === 'metodos') return 'M';
  if (c === 'demostraciones') return 'D';
  return '?';
}

// ─── Component ───────────────────────────────────────────────────────────────
interface Props {
  subseccion: Subseccion;
  allDocs: ContentMeta[];
  onClose: () => void;
}

export function RoadmapModal({ subseccion, allDocs, onClose }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  const { nodes, edges, activeDiffs, svgW, svgH } = useMemo(() => {
    // Filter to this subsection, only contenidos + metodos + demostraciones
    const relevant = allDocs.filter(
      d => d.subseccion === subseccion &&
        (d.categoria === 'contenidos' || d.categoria === 'metodos' || d.categoria === 'demostraciones'),
    );

    // Group by difficulty, sort within group (contenidos first, then alpha)
    const groups = Object.fromEntries(DIFFS.map(d => [d, [] as ContentMeta[]])) as Record<Dificultad, ContentMeta[]>;
    relevant.forEach(m => { if (groups[m.dificultad]) groups[m.dificultad].push(m); });
    DIFFS.forEach(d => {
      groups[d].sort((a, b) => {
        const ca = a.categoria === 'contenidos' ? 0 : a.categoria === 'metodos' ? 1 : 2;
        const cb = b.categoria === 'contenidos' ? 0 : b.categoria === 'metodos' ? 1 : 2;
        return ca !== cb ? ca - cb : a.title.localeCompare(b.title, 'es');
      });
    });

    // Solo mostrar columnas que tienen nodos
    const activeDiffs = DIFFS.filter(d => groups[d].length > 0);

    // Compute layout positions (solo columnas activas)
    const nodeMap = new Map<string, LayoutNode>();
    activeDiffs.forEach((diff, colIdx) => {
      const x = PAD_X + colIdx * (NW + COL_GAP);
      groups[diff].forEach((meta, rowIdx) => {
        const y = PAD_TOP + rowIdx * (NH + ROW_GAP);
        nodeMap.set(meta.slug, { meta, x, y, col: colIdx, row: rowIdx });
      });
    });

    // Build edges
    const edges: LayoutEdge[] = [];
    nodeMap.forEach(node => {
      (node.meta.prerequisites || []).forEach(prereqSlug => {
        const from = nodeMap.get(prereqSlug);
        if (from) edges.push({ from, to: node });
      });
    });

    // Dimensions
    let maxX = 0, maxY = 0;
    nodeMap.forEach(n => {
      maxX = Math.max(maxX, n.x + NW);
      maxY = Math.max(maxY, n.y + NH);
    });

    return {
      nodes: Array.from(nodeMap.values()),
      edges,
      activeDiffs,
      svgW: maxX + PAD_X,
      svgH: maxY + PAD_BOT,
    };
  }, [allDocs, subseccion]);

  const subsecLabel = subseccion === 'teoria-numeros' ? 'Teoría de Números' : 'Geometría';

  return (
    <div className="rm-overlay" onClick={onClose}>
      <div className="rm-panel" onClick={e => e.stopPropagation()}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="rm-header">
          <div className="rm-header-left">
            <span className="rm-title-icon">◈</span>
            <span className="rm-title-text">Hoja de Ruta · {subsecLabel}</span>
            <span className="rm-subtitle">Los nodos muestran qué estudiar antes de avanzar</span>
          </div>
          <div className="rm-legend">
            {DIFFS.map(d => {
              const info = DIFICULTADES.find(x => x.id === d)!;
              return (
                <span key={d} className="rm-legend-chip" style={{ borderColor: DIFF_COLORS[d], color: DIFF_COLORS[d] }}>
                  {info.label}
                </span>
              );
            })}
            <span className="rm-legend-sep" />
            <span className="rm-legend-chip" style={{ borderColor: 'var(--ink-muted)', color: 'var(--ink-muted)' }}>T = Teoría</span>
            <span className="rm-legend-chip" style={{ borderColor: 'var(--ink-muted)', color: 'var(--ink-muted)' }}>M = Método</span>
          </div>
          <button className="rm-close icon-btn" onClick={onClose} aria-label="Cerrar roadmap">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Canvas ─────────────────────────────────────────────────────── */}
        <div className="rm-canvas">
          <svg
            ref={svgRef}
            width={svgW}
            height={svgH}
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="rm-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="rm-arr" viewBox="0 0 8 8" refX="7" refY="4"
                markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0,1 L7,4 L0,7" fill="none" stroke="var(--rule)" strokeWidth="1" strokeLinejoin="round" />
              </marker>
              <marker id="rm-arr-cross" viewBox="0 0 8 8" refX="7" refY="4"
                markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0,1 L7,4 L0,7" fill="none" stroke="#b8a888" strokeWidth="1" strokeLinejoin="round" />
              </marker>
            </defs>

            {/* Column background bands — solo columnas activas */}
            {activeDiffs.map((diff, i) => {
              const x = PAD_X + i * (NW + COL_GAP) - 10;
              return (
                <rect key={diff} x={x} y={0} width={NW + 20} height={svgH}
                  fill={DIFF_COLORS[diff]} fillOpacity={0.04} rx={6} />
              );
            })}

            {/* Column labels */}
            {activeDiffs.map((diff, i) => {
              const cx = PAD_X + i * (NW + COL_GAP) + NW / 2;
              const info = DIFICULTADES.find(d => d.id === diff)!;
              return (
                <text key={`cl-${diff}`} x={cx} y={34} textAnchor="middle"
                  className="rm-col-label" fill={DIFF_COLORS[diff]}>
                  {info.label}
                </text>
              );
            })}

            {/* Edges */}
            {edges.map((edge, idx) => {
              const fx = edge.from.x + NW;
              const fy = edge.from.y + NH / 2;
              const tx = edge.to.x;
              const ty = edge.to.y + NH / 2;
              const sameCol = edge.from.col === edge.to.col;

              let d: string;
              const markerId = sameCol ? 'rm-arr-cross' : 'rm-arr';

              if (!sameCol && tx > fx) {
                // Normal left-to-right: cubic bezier
                const mx = (fx + tx) / 2;
                d = `M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`;
              } else if (!sameCol && tx <= fx) {
                // Backward edge: route around (below both nodes)
                const by = Math.max(edge.from.y, edge.to.y) + NH + 28;
                d = `M${fx},${fy} Q${fx + 20},${by} ${(fx + tx) / 2},${by} Q${tx - 20},${by} ${tx},${ty}`;
              } else {
                // Same column: route on the left side
                const lx = edge.from.x - 18;
                d = `M${edge.from.x},${fy} Q${lx},${fy} ${lx},${(fy + ty) / 2} Q${lx},${ty} ${edge.to.x},${ty}`;
              }

              return (
                <path
                  key={idx}
                  d={d}
                  fill="none"
                  stroke={sameCol ? '#b8a888' : 'var(--rule)'}
                  strokeWidth={sameCol ? 1 : 1.2}
                  strokeDasharray={sameCol ? '4 3' : undefined}
                  opacity={0.7}
                  markerEnd={`url(#${markerId})`}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map(node => {
              const { meta, x, y } = node;
              const [line1, line2] = wrapTitle(meta.title);
              const col = DIFF_COLORS[meta.dificultad];
              const bg = DIFF_BG[meta.dificultad];
              const href = meta.href;
              const cat = catLabel(meta.categoria);
              const hasLine2 = line2.length > 0;

              return (
                <a key={meta.slug} href={href} onClick={onClose} className="rm-node-link">
                  {/* Node background */}
                  <rect x={x} y={y} width={NW} height={NH}
                    fill={bg} stroke={col} strokeWidth={1.4} rx={5}
                    className="rm-node-rect" />

                  {/* Left accent bar */}
                  <rect x={x} y={y + 2} width={4} height={NH - 4}
                    fill={col} rx={2} />

                  {/* Category badge */}
                  <rect x={x + NW - 22} y={y + 4} width={18} height={16}
                    fill={col} fillOpacity={0.15} rx={3} />
                  <text x={x + NW - 13} y={y + 15} textAnchor="middle"
                    fontSize={9} fontFamily="var(--mono)" fill={col} fontWeight={700}>
                    {cat}
                  </text>

                  {/* Title text */}
                  <text
                    x={x + 12}
                    y={hasLine2 ? y + 22 : y + 33}
                    fontSize={10.5}
                    fontFamily="var(--sans)"
                    fill="var(--ink)"
                    fontWeight={500}
                  >
                    {line1}
                  </text>
                  {hasLine2 && (
                    <text x={x + 12} y={y + 36}
                      fontSize={10.5} fontFamily="var(--sans)" fill="var(--ink-2)" fontWeight={400}>
                      {line2}
                    </text>
                  )}

                  {/* Hover overlay */}
                  <rect x={x} y={y} width={NW} height={NH}
                    fill="transparent" rx={5} className="rm-node-hover" />
                </a>
              );
            })}
          </svg>
        </div>

        {/* ── Footer hint ────────────────────────────────────────────────── */}
        <div className="rm-footer">
          <span>Las flechas indican prerequisitos recomendados · Haz clic en cualquier nodo para abrir el contenido</span>
        </div>
      </div>
    </div>
  );
}
