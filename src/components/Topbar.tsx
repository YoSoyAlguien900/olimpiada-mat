'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CATEGORIAS, SUBSECCIONES, type ContentMeta, type Subseccion } from '@/lib/constants';
import { RoadmapModal } from './RoadmapModal';

interface Props {
  onToggleSidebar: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  pathname: string;
  allDocs: ContentMeta[];
}

function Crumbs({ pathname }: { pathname: string }) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) {
    return (
      <nav className="crumb">
        <span className="current">Inicio</span>
      </nav>
    );
  }
  const labels: Record<string, string> = {
    olimpiada: 'Olimpiada Matemática',
  };
  SUBSECCIONES.forEach((s) => (labels[s.id] = s.label));
  CATEGORIAS.forEach((c) => (labels[c.id] = c.label));

  const crumbs: { label: string; href: string }[] = [];
  let path = '';
  parts.forEach((p) => {
    path += '/' + p;
    crumbs.push({ label: labels[p] || decodeURIComponent(p), href: path });
  });

  return (
    <nav className="crumb">
      <Link href="/">Inicio</Link>
      {crumbs.map((c, i) => (
        <span key={c.href} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
          <span className="sep">/</span>
          {i === crumbs.length - 1 ? (
            <span className="current">{c.label}</span>
          ) : (
            <Link href={c.href}>{c.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Detect which subsección is active from the pathname. */
function getActiveSubseccion(pathname: string): Subseccion | null {
  const parts = pathname.split('/').filter(Boolean);
  // Expect paths like /olimpiada/teoria-numeros/...
  if (parts[0] === 'olimpiada' && parts[1]) {
    const sub = SUBSECCIONES.find((s) => s.id === parts[1]);
    return sub ? (sub.id as Subseccion) : null;
  }
  return null;
}

export function Topbar({ onToggleSidebar, theme, onToggleTheme, pathname, allDocs }: Props) {
  const [q, setQ] = useState('');
  const [focused, setFocused] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  const activeSubseccion = getActiveSubseccion(pathname);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    return allDocs
      .filter(
        (d) =>
          d.title.toLowerCase().includes(needle) ||
          d.preview.toLowerCase().includes(needle) ||
          (d.tags || []).some((t) => t.toLowerCase().includes(needle)),
      )
      .slice(0, 8);
  }, [q, allDocs]);

  return (
    <>
      <header className="topbar">
        <button className="icon-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <Crumbs pathname={pathname} />
        <div className="topbar-spacer" />

        {/* Search */}
        <div className="search">
          <svg className="search-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            placeholder="Buscar teoremas, problemas…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
          />
          {focused && results.length > 0 && (
            <div className="search-results">
              {results.map((r) => (
                <Link key={r.href} href={r.href} className="search-result">
                  <div className="search-result-title">{r.title}</div>
                  <div className="search-result-path">
                    {SUBSECCIONES.find((s) => s.id === r.subseccion)?.label} ·{' '}
                    {CATEGORIAS.find((c) => c.id === r.categoria)?.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Roadmap button — solo visible dentro de una sección */}
        {activeSubseccion && (
          <button
            className="icon-btn roadmap-btn"
            onClick={() => setRoadmapOpen(true)}
            aria-label="Abrir hoja de ruta"
            title="Hoja de ruta"
          >
            <svg viewBox="0 0 16 16" fill="none">
              {/* map/route icon */}
              <path
                d="M2 3l4 1.5v8L2 11V3zM6 4.5l4-1.5v8l-4 1.5V4.5zM10 3l4 1.5v8l-4-1.5V3z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Theme toggle */}
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M13 9.5A5 5 0 016.5 3a.5.5 0 00-.7-.5A6 6 0 1013.5 10.2a.5.5 0 00-.5-.7z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="currentColor" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </header>

      {/* Roadmap modal — renderizado fuera del topbar para evitar z-index issues */}
      {roadmapOpen && activeSubseccion && (
        <RoadmapModal
          subseccion={activeSubseccion}
          allDocs={allDocs}
          onClose={() => setRoadmapOpen(false)}
        />
      )}
    </>
  );
}
