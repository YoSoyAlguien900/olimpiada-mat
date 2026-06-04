'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  DIFICULTADES,
  type ContentMeta,
  type Dificultad,
  type Subseccion,
  type Categoria,
} from '@/lib/constants';

interface Props {
  sub: { id: Subseccion; label: string; descripcion: string; simbolo: string };
  cat: { id: Categoria; label: string; descripcion: string };
  entries: ContentMeta[];
}

type Sort = 'orden' | 'dificultad-asc' | 'dificultad-desc' | 'alpha';

const dOrden = (d: Dificultad) => DIFICULTADES.find((x) => x.id === d)?.orden ?? 99;

export default function CategoryClient({ sub, cat, entries }: Props) {
  const [filter, setFilter] = useState<Dificultad | 'todas'>('todas');
  const [sort, setSort] = useState<Sort>('dificultad-asc');
  const [q, setQ] = useState('');

  // Conteos por dificultad (sobre todas las entradas, ignorando texto)
  const counts = useMemo(() => {
    const c: Record<string, number> = { todas: entries.length };
    for (const d of DIFICULTADES) c[d.id] = 0;
    entries.forEach((e) => {
      c[e.dificultad] = (c[e.dificultad] || 0) + 1;
    });
    return c;
  }, [entries]);

  const visible = useMemo(() => {
    let arr = entries.slice();
    if (filter !== 'todas') arr = arr.filter((e) => e.dificultad === filter);
    if (q.trim()) {
      const needle = q.toLowerCase();
      arr = arr.filter(
        (e) =>
          e.title.toLowerCase().includes(needle) ||
          e.preview.toLowerCase().includes(needle) ||
          (e.competencia && e.competencia.toLowerCase().includes(needle)) ||
          (e.tags || []).some((t) => t.toLowerCase().includes(needle))
      );
    }
    switch (sort) {
      case 'alpha':
        arr.sort((a, b) => a.title.localeCompare(b.title, 'es'));
        break;
      case 'dificultad-asc':
        arr.sort((a, b) => dOrden(a.dificultad) - dOrden(b.dificultad) || a.title.localeCompare(b.title, 'es'));
        break;
      case 'dificultad-desc':
        arr.sort((a, b) => dOrden(b.dificultad) - dOrden(a.dificultad) || a.title.localeCompare(b.title, 'es'));
        break;
      case 'orden':
      default:
        // orden original (sistema de archivos)
        break;
    }
    return arr;
  }, [entries, filter, q, sort]);

  return (
    <>
      <div className="index-head">
        <div className="index-eyebrow">
          {sub.label} · {cat.label}
        </div>
        <h1>{cat.label}</h1>
        <p>
          {cat.descripcion} en el área de {sub.label.toLowerCase()}.
        </p>
      </div>

      <div className="filter-bar">
        <div className="filter-row filter-tiers">
          <button
            className={'tier-chip ' + (filter === 'todas' ? 'active' : '')}
            onClick={() => setFilter('todas')}
          >
            Todas <span className="tier-count">{counts.todas}</span>
          </button>
          {DIFICULTADES.map((d) => (
            <button
              key={d.id}
              className={`tier-chip tier-${d.id} ` + (filter === d.id ? 'active' : '')}
              onClick={() => setFilter(d.id)}
              title={d.descripcion}
              disabled={counts[d.id] === 0}
            >
              {d.label}
              <span className="tier-count">{counts[d.id] || 0}</span>
            </button>
          ))}
        </div>

        <div className="filter-row filter-controls">
          <input
            type="text"
            className="filter-search"
            placeholder="Buscar título, tag, competencia…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select className="filter-sort" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="dificultad-asc">Dificultad ↑</option>
            <option value="dificultad-desc">Dificultad ↓</option>
            <option value="alpha">Alfabético</option>
            <option value="orden">Por archivo</option>
          </select>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="empty">
          {entries.length === 0 ? (
            <>
              Aún no hay entradas en esta categoría.
              <span className="empty-hint">
                Crea <code>{'content/olimpiada/' + sub.id + '/' + cat.id + '/'}</code> + un .md
              </span>
            </>
          ) : (
            <>
              Ninguna entrada coincide con los filtros.
              <span className="empty-hint">Prueba a quitar el texto de búsqueda o cambiar la dificultad.</span>
            </>
          )}
        </div>
      ) : (
        <div className="entry-list">
          {visible.map((e, i) => {
            const d = DIFICULTADES.find((x) => x.id === e.dificultad);
            return (
              <Link key={e.slug} href={e.href} className="entry">
                <div className="entry-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="entry-title" dangerouslySetInnerHTML={{ __html: e.titleHtml }} />
                  {e.preview && (
                    <p
                      className="entry-preview"
                      dangerouslySetInnerHTML={{ __html: e.previewHtml }}
                    />
                  )}
                  <div className="entry-meta">
                    <span className={`tier-badge tier-${e.dificultad}`} title={d?.descripcion}>
                      {d?.label}
                    </span>
                    {e.competencia && <span className="comp">{e.competencia}</span>}
                    {(e.tags || []).slice(0, 4).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                    {e.updated && <span className="upd">{e.updated}</span>}
                  </div>
                </div>
                <div className="entry-arrow">→</div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
