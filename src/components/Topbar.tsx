'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CATEGORIAS, SUBSECCIONES, type ContentMeta } from '@/lib/constants';

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
  parts.forEach((p, i) => {
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

export function Topbar({ onToggleSidebar, theme, onToggleTheme, pathname, allDocs }: Props) {
  const [q, setQ] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    return allDocs
      .filter(
        (d) =>
          d.title.toLowerCase().includes(needle) ||
          d.preview.toLowerCase().includes(needle) ||
          (d.tags || []).some((t) => t.toLowerCase().includes(needle))
      )
      .slice(0, 8);
  }, [q, allDocs]);

  return (
    <header className="topbar">
      <button className="icon-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <Crumbs pathname={pathname} />
      <div className="topbar-spacer" />
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
  );
}
