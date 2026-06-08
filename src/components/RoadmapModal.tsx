'use client';

import { useMemo, useRef, useState } from 'react';
import { DIFICULTADES, SUBSECCIONES, type ContentMeta, type Dificultad, type Subseccion } from '@/lib/constants';

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
  x: number;   // zone-relative x (sublane * (NW + SUBLANE_GAP))
  y: number;
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

/** Asigna sub-lanes topológicas dentro de un grupo del mismo nivel. */
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
  const [hiddenDiffs, setHiddenDiffs] = useState<Set<Dificultad>>(new Set());

  const { nodesByDiff, allEdges, allActiveDiffs, zoneLayout, zoneWidths, svgW, svgH } = useMemo(() => {
    const relevant = allDocs.filter(
      d => d.subseccion === subseccion &&
        (d.categoria === 'contenidos' || d.categoria === 'metodos' || d.categoria === 'demostraciones'),
    );

    const groups = Object.fromEntries(DIFFS.map(d => [d, [] as ContentMeta[]])) as Record<Dificultad, ContentMeta[]>;
    relevant.forEach(m => { if (groups[m.dificultad]) groups[m.dificultad].push(m); });
    DIFFS.forEach(d => {
      groups[d].sort((a, b) => {
        const ca = a.categoria === 'contenidos' ? 0 : a.categoria === 'metodos' ? 1 : 2;
        const cb = b.categoria === 'contenidos' ? 0 : b.categoria === 'metodos' ? 1 : 2;
        return ca !== cb ? ca - cb : a.title.localeCompare(b.title, 'es');
      });
    });

    // All diffs that have content
    const allActiveDiffs = DIFFS.filter(d => groups[d].length > 0);
    // Visible diffs determine screen layout positions
    const visibleDiffs = allActiveDiffs.filter(d => !hiddenDiffs.has(d));

    // Compute sub-lanes for ALL active diffs (positions are stable regardless of hidden state)
    const subLanesPerDiff = Object.fromEntries(
      allActiveDiffs.map(d => [d, computeSubLanes(groups[d])])
    ) as Record<Dificultad, Map<string, number>>;

    const maxSubLanePerDiff = Object.fromEntries(
      allActiveDiffs.map(d => {
        const lanes = subLanesPerDiff[d];
        const max = lanes.size ? Math.max(...Array.from(lanes.values())) : 0;
        return [d, max];
      })
    ) as Record<Dificultad, number>;

    const zoneWidthOf = (d: Dificultad) =>
      (maxSubLanePerDiff[d] + 1) * NW + maxSubLanePerDiff[d] * SUBLANE_GAP;

    // Fixed zone widths per diff (never change when toggling)
    const zoneWidths = Object.fromEntries(
      allActiveDiffs.map(d => [d, zoneWidthOf(d)])
    ) as Record<Dificultad, number>;

    // Zone start positions only for VISIBLE diffs
    const zoneLayout: Record<string, { startX: number; width: number }> = {};
    let curX = PAD_X;
    visibleDiffs.forEach((d, i) => {
      const w = zoneWidthOf(d);
      zoneLayout[d] = { startX: curX, width: w };
      curX += w + (i < visibleDiffs.length - 1 ? ZONE_GAP : 0);
    });

    // Assign zone-RELATIVE positions for ALL active diffs
    const nodeMap = new Map<string, LayoutNode>();
    allActiveDiffs.forEach(diff => {
      const sublanes = subLanesPerDiff[diff];
      const counters = new Array(maxSubLanePerDiff[diff] + 1).fill(0) as number[];

      groups[diff].forEach(meta => {
        const sublane = sublanes.get(meta.slug) ?? 0;
        const row = counters[sublane]++;
        const x = sublane * (NW + SUBLANE_GAP); // zone-relative
        const y = PAD_TOP + row * (NH + ROW_GAP);
        nodeMap.set(meta.slug, { meta, x, y, sublane });
      });
    });

    // All edges (filtered during render)
    const allEdges: LayoutEdge[] = [];
    nodeMap.forEach(node => {
      (node.meta.prerequisites || []).forEach(prereqSlug => {
        const from = nodeMap.get(prereqSlug);
        if (from) allEdges.push({ from, to: node });
      });
    });

    // Group nodes by diff
    const nodesByDiff = Object.fromEntries(
      allActiveDiffs.map(d => [d, [] as LayoutNode[]])
    ) as Record<Dificultad, LayoutNode[]>;
    nodeMap.forEach(node => { nodesByDiff[node.meta.dificultad]?.push(node); });

    // SVG dimensions based on visible layout
    let maxY = 0;
    nodeMap.forEach(n => { maxY = Math.max(maxY, n.y + NH); });
    const lastVisible = visibleDiffs[visibleDiffs.length - 1];
    const svgW = lastVisible
      ? zoneLayout[lastVisible].startX + zoneWidthOf(lastVisible) + PAD_X
      : 2 * PAD_X;

    return { nodesByDiff, allEdges, allActiveDiffs, zoneLayout, zoneWidths, svgW, svgH: maxY + PAD_BOT };
  }, [allDocs, subseccion, hiddenDiffs]);

  const toggleDiff = (d: Dificultad) => {
    setHiddenDiffs(prev => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  };

  const subsecLabel = SUBSECCIONES.find(s => s.id === subseccion)?.label ?? subseccion;

  // Cross-zone edges where both endpoints are visible
  const crossZoneEdges = allEdges.filter(e => {
    const fd = e.from.meta.dificultad;
    const td = e.to.meta.dificultad;
    return fd !== td && zoneLayout[fd] && zoneLayout[td];
  });

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
            {allActiveDiffs.map(d => {
              const isHidden = hiddenDiffs.has(d);
              const info = DIFICULTADES.find(x => x.id === d)!;
              return (
                <button
                  key={d}
                  className={`rm-legend-chip rm-level-toggle${isHidden ? ' rm-level-toggle--off' : ''}`}
                  style={{
                    borderColor: isHidden ? 'var(--rule)' : DIFF_COLORS[d],
                    color: isHidden ? 'var(--ink-muted)' : DIFF_COLORS[d],
                  }}
                  onClick={() => toggleDiff(d)}
                  title={isHidden ? `Mostrar ${info.label}` : `Ocultar ${info.label}`}
                >
                  {info.label}
                </button>
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

            {/* Cross-zone edges (absolute coords, both endpoints must be visible) */}
            {crossZoneEdges.map((edge, idx) => {
              const fz = zoneLayout[edge.from.meta.dificultad];
              const tz = zoneLayout[edge.to.meta.dificultad];
              const fx = fz.startX + edge.from.x + NW;
              const fy = edge.from.y + NH / 2;
              const tx = tz.startX + edge.to.x;
              const ty = edge.to.y + NH / 2;
              const goingRight = tx > fx;
              let d: string;
              if (goingRight) {
                const mx = (fx + tx) / 2;
                d = `M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`;
              } else {
                const ay = Math.min(fy, ty) - 40;
                d = `M${fx},${fy} Q${fx + 20},${ay} ${(fx + tx) / 2},${ay} Q${tx - 20},${ay} ${tx},${ty}`;
              }
              return (
                <path key={`ce-${idx}`} d={d} fill="none"
                  stroke="var(--rule)" strokeWidth={1.4} opacity={0.75}
                  markerEnd="url(#rm-arr)"
                />
              );
            })}

            {/* Zone groups — all active diffs always in DOM for exit animations */}
            {allActiveDiffs.map(diff => {
              const isHidden = hiddenDiffs.has(diff);
              const zoneWidth = zoneWidths[diff];
              // Hidden zones slide off to the left; visible zones use computed positions
              const targetX = isHidden
                ? -(zoneWidth + 200)
                : zoneLayout[diff].startX;
              const zoneNodes = nodesByDiff[diff] ?? [];
              const info = DIFICULTADES.find(d => d.id === diff)!;

              // Within-zone edges (zone-relative coords)
              const withinEdges = allEdges.filter(
                e => e.from.meta.dificultad === diff && e.to.meta.dificultad === diff
              );

              return (
                <g
                  key={diff}
                  style={{
                    transform: `translate(${targetX}px, 0)`,
                    opacity: isHidden ? 0 : 1,
                    transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                    pointerEvents: isHidden ? 'none' : 'auto',
                  }}
                >
                  {/* Zone background */}
                  <rect
                    x={-8} y={0}
                    width={zoneWidth + 16} height={svgH}
                    fill={DIFF_COLORS[diff]} fillOpacity={0.04} rx={8}
                  />
                  {/* Zone label */}
                  <text
                    x={zoneWidth / 2} y={36}
                    textAnchor="middle"
                    className="rm-col-label"
                    fill={DIFF_COLORS[diff]}
                  >
                    {info.label}
                  </text>

                  {/* Within-zone edges (zone-relative coordinates) */}
                  {withinEdges.map((edge, idx) => {
                    const fx = edge.from.x + NW;
                    const fy = edge.from.y + NH / 2;
                    const tx = edge.to.x;
                    const ty = edge.to.y + NH / 2;
                    const goingRight = tx > fx;
                    let d: string;
                    if (goingRight) {
                      const mx = (fx + tx) / 2;
                      d = `M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`;
                    } else {
                      const mx2 = edge.from.x - 20;
                      d = `M${edge.from.x},${fy} Q${mx2},${fy} ${mx2},${(fy + ty) / 2} Q${mx2},${ty} ${edge.to.x},${ty}`;
                    }
                    return (
                      <path key={`we-${idx}`} d={d} fill="none"
                        stroke="#b8a888" strokeWidth={1.2} strokeDasharray="5 3"
                        opacity={0.75} markerEnd="url(#rm-arr-same)"
                      />
                    );
                  })}

                  {/* Nodes */}
                  {zoneNodes.map(node => {
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
                          fontSize={10.5} fontFamily="var(--sans)" fill="#1a1612" fontWeight={500}>
                          {line1}
                        </text>
                        {hasLine2 && (
                          <text x={x + 12} y={y + 40}
                            fontSize={10.5} fontFamily="var(--sans)" fill="#2d2620" fontWeight={400}>
                            {line2}
                          </text>
                        )}
                        <rect x={x} y={y} width={NW} height={NH} fill="transparent" rx={5} className="rm-node-hover" />
                      </a>
                    );
                  })}
                </g>
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
