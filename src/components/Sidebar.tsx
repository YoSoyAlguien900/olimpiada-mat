'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIAS, SUBSECCIONES, type ContentMeta } from '@/lib/constants';

interface Props {
  index: Record<string, Record<string, ContentMeta[]>>;
  pathname: string;
}

export function Sidebar({ index, pathname }: Props) {
  // Abrir por defecto la subsección actual
  const initialOpen: Record<string, boolean> = {};
  SUBSECCIONES.forEach((s) => {
    initialOpen[s.id] = pathname.includes(`/${s.id}/`) || pathname === '/';
  });
  const [open, setOpen] = useState<Record<string, boolean>>(initialOpen);

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <aside className="sidebar">
      <Link href="/" className="brand">
        <span className="brand-mark">Σ</span>
        <span className="brand-text">Olimpiada<br />Matemática</span>
      </Link>

      <Link href="/" className={`sb-home ${pathname === '/' ? 'active' : ''}`}>
        <span className="sb-home-icon">⌂</span>
        <span>Inicio</span>
      </Link>

      <div className="sb-section">
        <div className="sb-section-title">Disciplinas</div>
        <ul className="sb-tree">
          {SUBSECCIONES.map((sub) => {
            const isOpen = open[sub.id];
            return (
              <li key={sub.id} className={`sb-node ${isOpen ? 'open' : ''}`}>
                <button className="sb-sub-toggle" onClick={() => toggle(sub.id)}>
                  <span className="sb-sub-symbol">{sub.simbolo}</span>
                  <span>{sub.label}</span>
                  <svg className="sb-caret" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className="sb-cats">
                  {CATEGORIAS.map((cat) => {
                    const count = index[sub.id]?.[cat.id]?.length ?? 0;
                    const href = `/olimpiada/${sub.id}/${cat.id}`;
                    const active = pathname.startsWith(href);
                    return (
                      <li key={cat.id}>
                        <Link href={href} className={`sb-cat ${active ? 'active' : ''}`}>
                          {cat.label}
                          <span className="sb-cat-count">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sb-section">
        <div className="sb-section-title">Acerca</div>
        <Link
          href="/competencias"
          className={`sb-cat ${pathname.startsWith('/competencias') ? 'active' : ''}`}
          style={{ display: 'block' }}
        >
          Niveles y competencias
        </Link>
      </div>
    </aside>
  );
}
