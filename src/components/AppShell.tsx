'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MathBackdrop } from './MathBackdrop';
import type { ContentMeta } from '@/lib/constants';

interface Props {
  children: React.ReactNode;
  index: Record<string, Record<string, ContentMeta[]>>;
  allDocs: ContentMeta[];
}

export function AppShell({ children, index, allDocs }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
    else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const classes = ['app'];
  if (collapsed) classes.push('collapsed');
  if (mobileOpen) classes.push('mobile-open');

  return (
    <>
      {/* Canvas fuera del .app — nunca afecta el layout del grid/block */}
      <MathBackdrop />
      <div className={classes.join(' ')}>
        <Sidebar index={index} pathname={pathname} />
        <div className="sidebar-scrim" onClick={() => setMobileOpen(false)} />
        <div className="main">
          <Topbar
            onToggleSidebar={() => {
              if (window.innerWidth <= 900) setMobileOpen((v) => !v);
              else setCollapsed((v) => !v);
            }}
            theme={theme}
            onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
            pathname={pathname}
            allDocs={allDocs}
          />
          <main className="content">{children}</main>
        </div>
      </div>
    </>
  );
}
