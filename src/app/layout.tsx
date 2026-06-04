import '@/styles/globals.css';
import 'katex/dist/katex.min.css';
import { AppShell } from '@/components/AppShell';
import { buildIndex, CATEGORIAS, SUBSECCIONES, type ContentMeta } from '@/lib/content';

export const metadata = {
  title: 'Olimpiada Matemática — Adrián García Bouzas',
  description: 'Material de teoría, problemas y demostraciones de Geometría y Teoría de Números. Autoría: Adrián García Bouzas.',
  authors: [{ name: 'Adrián García Bouzas' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const index = buildIndex();
  const allDocs: ContentMeta[] = [];
  SUBSECCIONES.forEach((s) => {
    CATEGORIAS.forEach((c) => {
      allDocs.push(...(index[s.id]?.[c.id] || []));
    });
  });

  return (
    <html lang="es" data-theme="light">
      <body>
        <AppShell index={index as any} allDocs={allDocs}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
