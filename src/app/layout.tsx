import '@/styles/globals.css';
import 'katex/dist/katex.min.css';
import { AppShell } from '@/components/AppShell';
import { buildIndex, CATEGORIAS, SUBSECCIONES, type ContentMeta } from '@/lib/content';
import type { Metadata } from 'next';

const BASE = 'https://olimpiadamatematica.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Olimpiada Matemática — Material de élite',
    template: '%s · Olimpiada Matemática',
  },
  description:
    'Apuntes de olimpiada matemática: teoría, demostraciones y problemas resueltos de Álgebra, Combinatoria, Geometría y Teoría de Números, calibrados por competencia (OMG, OME, IMO). Autoría: Adrián García Bouzas.',
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
      'Apuntes de olimpiada matemática: teoría, demostraciones y problemas resueltos de Álgebra, Combinatoria, Geometría y Teoría de Números, calibrados por competencia (OMG, OME, IMO).',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olimpiada Matemática — Material de élite',
    description:
      'Apuntes de olimpiada matemática: teoría, demostraciones y problemas resueltos de Álgebra, Combinatoria, Geometría y Teoría de Números, calibrados por competencia (OMG, OME, IMO).',
  },
  category: 'education',
  verification: {
    google: '19dc8e839402a14c',
  },
};

// Grafo de entidad sitewide: identifica la marca y la autoría de forma
// consistente en todas las páginas, con @id enlazables desde otras entidades.
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Olimpiada Matemática',
      alternateName: ['Olimpiada Matemática — Material de élite', 'olimpiadamatematica.com'],
      description:
        'Material de élite para preparación de olimpiadas matemáticas: teoría, demostraciones, métodos y problemas resueltos de Álgebra, Combinatoria, Geometría y Teoría de Números, calibrados por competencia (OMG, OME, IMO).',
      inLanguage: 'es',
      publisher: { '@id': `${BASE}/#org` },
    },
    {
      '@type': 'Person',
      '@id': `${BASE}/#person`,
      name: 'Adrián García Bouzas',
      url: BASE,
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${BASE}/#org`,
      name: 'Olimpiada Matemática',
      url: BASE,
      description:
        'Apuntes y problemas de olimpiada matemática para preparar la OMG, la OME y la IMO. Teoría de Números, Geometría, Álgebra y Combinatoria.',
      founder: { '@id': `${BASE}/#person` },
      knowsAbout: [
        'Olimpiada matemática',
        'Teoría de números',
        'Geometría olímpica',
        'Combinatoria',
        'Desigualdades',
        'Ecuaciones funcionales',
        'Olimpíada Matemática Galega',
        'Olimpiada Matemática Española',
        'International Mathematical Olympiad',
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <AppShell index={index as any} allDocs={allDocs}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
