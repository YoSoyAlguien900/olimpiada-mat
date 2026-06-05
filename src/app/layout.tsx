import '@/styles/globals.css';
import 'katex/dist/katex.min.css';
import { AppShell } from '@/components/AppShell';
import { buildIndex, CATEGORIAS, SUBSECCIONES, type ContentMeta } from '@/lib/content';
import type { Metadata } from 'next';

const BASE = 'https://olimpiada-mat.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Olimpiada Matemática — Material de élite',
    template: '%s · Olimpiada Matemática',
  },
  description:
    'Apuntes de olimpiada matemática: teoría, demostraciones y problemas de Geometría y Teoría de Números calibrados por competencia (OMG, OME, IMO). Autoría: Adrián García Bouzas.',
  keywords: [
    'olimpiada matemática',
    'matemáticas olimpiada',
    'preparación olimpiada',
    'geometría olimpiada',
    'teoría de números olimpiada',
    'IMO',
    'OME',
    'OMG',
    'olimpíada matemática galega',
    'problemas matemáticas',
    'demostraciones matemáticas',
    'aritmética modular',
    'congruencias',
    'geometría sintética',
    'inversión geométrica',
    'ecuaciones diofánticas',
    'apuntes matemáticas bachillerato',
  ],
  authors: [{ name: 'Adrián García Bouzas' }],
  creator: 'Adrián García Bouzas',
  publisher: 'Adrián García Bouzas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE,
    siteName: 'Olimpiada Matemática',
    title: 'Olimpiada Matemática — Material de élite',
    description:
      'Apuntes de olimpiada matemática: teoría, demostraciones y problemas de Geometría y Teoría de Números calibrados por competencia (OMG, OME, IMO).',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olimpiada Matemática — Material de élite',
    description:
      'Apuntes de olimpiada matemática: teoría, demostraciones y problemas de Geometría y Teoría de Números calibrados por competencia (OMG, OME, IMO).',
    creator: '@adriangb',
  },
  category: 'education',
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
