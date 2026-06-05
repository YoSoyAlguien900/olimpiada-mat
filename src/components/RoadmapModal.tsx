'use client';

import { useMemo, useRef } from 'react';
import { DIFICULTADES, type ContentMeta, type Dificultad, type Subseccion } from '@/lib/constants';

// ─── Layout constants ────────────────────────────────────────────────────────
const NW = 176;         // node width
const NH = 68;          // node height
const SUBLANE_GAP = 36; // gap entre sub-columnas dentro de un nivel
const ZONE_GAP = 56;    // gap entre zonas de distinto nivel
const ROW_GAP = 28;     // gap vertical entre nodos de la misma sub-columna
const PAD_X = 40;       // padding horizontal exterior
const PAD_TOP = 60;     // espacio para etiquetas de columna
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
  sublane: number;
}

interface LayoutEdge {
  from: LayoutNode;
  to: LayoutNode;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function wrapTitle(raw: string): [string, string] {
  const title = raw.replace(/\$([^$]+)\$/g, (_, m) => m.replace(/[\\{}^_]/g, ''));
  const MAX = 22;
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

/** Asigna sub-lanes topológicas dentro de un grupo del mismo nivel.
 *  Lane 0 = sin prerequisitos del mismo nivel.
 *  Lane k = todos sus prerequisitos del mismo nivel están en lane < k. */
function computeSubLanes(nodes: ContentMeta[]): Map<string, number> {
  const slugSet = new Set(nodes.map(n => n.slug));
  const lanes = new Map<string, number>(nodes.map(n => [n.slug, 0]));

  let changed = true;
  let guard = 0;
  while (changed && guard++ < 20) {
    changed = false;
    for (const node of nodes) {
      const sameLevel = (node.prerequisites || []).filter(p => slugSet.has(p));
      if (!sameLevel.length) continue;
      const maxLane = Math.max(...sameLevel.map(p => lanes.get(p) ?? 0));
      const wanted = maxLane + 1;
      if ((lanes.get(node.slug) ?? 0) < wanted) {
        lanes.set(node.slug, wanted);
        changed = true;
      }
    }
  }
  return lanes;
}

// ─── Component ───────────────────────────────────────────────────────────────
interface Props {
  subseccion: Subseccion;
  allDocs: ContentMeta[];
  onClose: () => void;
}

export function RoadmapModal({ subseccion, allDocs, onClose }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  const { nodes, edges, activeDiffs, zoneLayout, svgW, svgH } = useMemo(() => {
    const relevant = allDocs.filter(
      d => d.subseccion === subseccion &&
        (d.categoria === 'contenidos' || d.categoria === 'metodos' || d.categoria === 'demostraciones'),
    );

    // Agrupar por dificultad y ordenar
    const groups = Object.fromEntries(DIFFS.map(d => [d, [] as ContentMeta[]])) as Record<Dificultad, ContentMeta[]>;
    relevant.forEach(m => { if (groups[m.dificultad]) groups[m.dificultad].push(m); });
    DIFFS.forEach(d => {
      groups[d].sort((a, b) => {
        const ca = a.categoria === 'contenidos' ? 0 : a.categoria === 'metodos' ? 1 : 2;
        const cb = b.categoria === 'contenidos' ? 0 : b.categoria === 'metodos' ? 1 : 2;
        return ca !== cb ? ca - cb : a.title.localeCompare(b.title, 'es');
      });
    });

    const activeDiffs = DIFFS.filter(d => groups[d].length > 0);

    // Computar sublanes por nivel
    const subLanesPerDiff = Object.fromEntries(
      activeDiffs.map(d => [d, computeSubLanes(groups[d])])
    ) as Record<Dificultad, Map<string, number>>;

    // Ancho de cada zona = max_sublanes * NW + (max_sublanes-1) * SUBLANE_GAP
    const maxSubLanePerDiff = Object.fromEntries(
      activeDiffs.map(d => {
        const lanes = subLanesPerDiff[d];
        const max = lanes.size ? Math.max(...Array.from(lanes.values())) : 0;
        return [d, max];
      })
    ) as Record<Dificultad, number>;

    const zoneWidthOf = (d: Dificultad) =>
      (maxSubLanePerDiff[d] + 1) * NW + maxSubLanePerDiff[d] * SUBLANE_GAP;

    // Posición X de inicio de cada zona
    const zoneLayout: Record<Dificultad, { startX: number; width: number; labelCx: number }> = {} as any;
    let curX = PAD_X;
    activeDiffs.forEach((d, i) => {
      const w = zoneWidthOf(d);
      zoneLayout[d] = { startX: curX, width: w, labelCx: curX + w / 2 };
      curX += w + (i < activeDiffs.length - 1 ? ZONE_GAP : 0);
    });

    // Contar filas por sub-lane dentro de cada nivel
    const rowCounters = Object.fromEntries(
      activeDiffs.map(d => {
        const maxSublane = maxSubLanePerDiff[d];
        return [d, new Array(maxSublane + 1).fill(0) as number[]];
      })
    ) as Record<Dificultad, number[]>;

    // Asignar posiciones
    const nodeMap = new Map<string, LayoutNode>();
    activeDiffs.forEach((diff, colIdx) => {
      const sublanes = subLanesPerDiff[diff];
      const { startX } = zoneLayout[diff];
      const counters = rowCounters[diff];

      groups[diff].forEach(meta => {
        const sublane = sublanes.get(meta.slug) ?? 0;
        const row = counters[sublane]++;
        const x = startX + sublane * (NW + SUBLANE_GAP);
        const y = PAD_TOP + row * (NH + ROW_GAP);
        nodeMap.set(meta.slug, { meta, x, y, col: colIdx, row, sublane });
      });
    });

    // Aristas
    const edges: LayoutEdge[] = [];
    nodeMap.forEach(node => {
      (node.meta.prerequisites || []).forEach(prereqSlug => {
        const from = nodeMap.get(prereqSlug);
        if (from) edges.push({ from, to: node });
      });
    });

    // Dimensiones del SVG
    let maxX = 0, maxY = 0;
    nodeMap.forEach(n => {
      maxX = Math.max(maxX, n.x + NW);
      maxY = Math.max(maxY, n.y + NH);
    });

    return {
      nodes: Array.from(nodeMap.values()),
      edges,
      activeDiffs,
      zoneLayout,
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
            {DIFFS.filter(d => zoneLayout[d]).map(d => {
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
              <marker id="rm-arr-same" viewBox="0 0 8 8" refX="7" refY="4"
                markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L7,4 L0,7" fill="none" stroke="#b8a888" strokeWidth="1" strokeLinejoin="round" />
              </marker>
            </defs>

            {/* Fondos de zona por nivel */}
            {activeDiffs.map(diff => {
              const { startX, width } = zoneLayout[diff];
              return (
                <rect key={diff}
                  x={startX - 8} y={0}
                  width={width + 16} height={svgH}
                  fill={DIFF_COLORS[diff]} fillOpacity={0.04} rx={8}
                />
              );
            })}

            {/* Etiquetas de nivel — centradas en la zona */}
            {activeDiffs.map(diff => {
              const { labelCx } = zoneLayout[diff];
              const info = DIFICULTADES.find(d => d.id === diff)!;
              return (
                <text key={`lbl-${diff}`} x={labelCx} y={36} textAnchor="middle"
                  className="rm-col-label" fill={DIFF_COLORS[diff]}>
                  {info.label}
                </text>
              );
            })}

            {/* Aristas */}
            {edges.map((edge, idx) => {
              const fx = edge.from.x + NW;
              const fy = edge.from.y + NH / 2;
              const tx = edge.to.x;
              const ty = edge.to.y + NH / 2;

              const sameZone = edge.from.col === edge.to.col;
              const goingRight = tx > fx;
              const markerId = sameZone ? 'rm-arr-same' : 'rm-arr';

              let d: string;
              if (goingRight) {
                // Izquierda → derecha (cross-zone o sublane)
                const mx = (fx + tx) / 2;
                d = `M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`;
              } else if (!sameZone) {
                // Arista hacia atrás (rara) — curva por arriba
                const ay = Math.min(fy, ty) - 40;
                d = `M${fx},${fy} Q${fx + 20},${ay} ${(fx + tx) / 2},${ay} Q${tx - 20},${ay} ${tx},${ty}`;
              } else {
                // Misma zona, misma sublane → flecha vertical corta
                const mx2 = edge.from.x - 20;
                d = `M${edge.from.x},${fy} Q${mx2},${fy} ${mx2},${(fy + ty) / 2} Q${mx2},${ty} ${edge.to.x},${ty}`;
              }

              return (
                <path key={idx} d={d} fill="none"
                  stroke={sameZone ? '#b8a888' : 'var(--rule)'}
                  strokeWidth={sameZone ? 1.2 : 1.4}
                  strokeDasharray={sameZone ? '5 3' : undefined}
                  opacity={0.75}
                  markerEnd={`url(#${markerId})`}
                />
              );
            })}

            {/* Nodos */}
            {nodes.map(node => {
              const { meta, x, y } = node;
              const [line1, line2] = wrapTitle(meta.title);
              const col = DIFF_COLORS[meta.dificultad];
              const bg = DIFF_BG[meta.dificultad];
              const cat = catLabel(meta.categoria);
              const hasLine2 = line2.length > 0;

              return (
                <a key={meta.slug} href={meta.href} onClick={onClose} className="rm-node-link">
                  <rect x={x} y={y} width={NW} height={NH}
                    fill={bg} stroke={col} strokeWidth={1.4} rx={5}
                    className="rm-node-rect" />
                  <rect x={x} y={y + 2} width={4} height={NH - 4} fill={col} rx={2} />
                  <rect x={x + NW - 22} y={y + 4} width={18} height={16}
                    fill={col} fillOpacity={0.15} rx={3} />
                  <text x={x + NW - 13} y={y + 15} textAnchor="middle"
                    fontSize={9} fontFamily="var(--mono)" fill={col} fontWeight={700}>
                    {cat}
                  </text>
                  <text x={x + 12} y={hasLine2 ? y + 24 : y + 37}
                    fontSize={10.5} fontFamily="var(--sans)" fill="var(--ink)" fontWeight={500}>
                    {line1}
                  </text>
                  {hasLine2 && (
                    <text x={x + 12} y={y + 40}
                      fontSize={10.5} fontFamily="var(--sans)" fill="var(--ink-2)" fontWeight={400}>
                      {line2}
                    </text>
                  )}
                  <rect x={x} y={y} width={NW} height={NH} fill="transparent" rx={5} className="rm-node-hover" />
                </a>
              );
            })}
          </svg>
        </div>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <div className="rm-footer">
          <span>Las flechas indican prerequisitos recomendados · Haz clic en cualquier nodo para abrir el contenido</span>
        </div>
      </div>
    </div>
  );
}
