import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  listMeta,
  CATEGORIAS,
  SUBSECCIONES,
  type Subseccion,
  type Categoria,
} from '@/lib/content';
import CategoryClient from './CategoryClient';

const BASE = 'https://olimpiadamatematica.com';

interface Params {
  params: { subseccion: string; categoria: string };
}

export function generateStaticParams() {
  const out: { subseccion: string; categoria: string }[] = [];
  SUBSECCIONES.forEach((s) => CATEGORIAS.forEach((c) => out.push({ subseccion: s.id, categoria: c.id })));
  return out;
}

export function generateMetadata({ params }: Params): Metadata {
  const sub = SUBSECCIONES.find((s) => s.id === params.subseccion);
  const cat = CATEGORIAS.find((c) => c.id === params.categoria);
  if (!sub || !cat) return {};

  const title = `${cat.label} de ${sub.label}`;
  const description = `${cat.label} de ${sub.label} para olimpiada matemática: ${cat.descripcion.toLowerCase()}, con dificultad calibrada por competencia desde la Olimpíada Matemática Galega (OMG) hasta la OME y la IMO. Material gratuito.`;
  const url = `${BASE}/olimpiada/${sub.id}/${cat.id}`;

  return {
    title,
    description,
    keywords: [
      `${cat.label.toLowerCase()} de ${sub.label.toLowerCase()}`,
      `${sub.label.toLowerCase()} olimpiada`,
      `${sub.label.toLowerCase()} olimpiada matemática`,
      'olimpiada matemática',
      'OMG', 'OME', 'IMO',
    ],
    alternates: { canonical: url },
    openGraph: { type: 'website', title: `${title} · Olimpiada Matemática`, description, url },
  };
}

export default function CategoryPage({ params }: Params) {
  const sub = SUBSECCIONES.find((s) => s.id === params.subseccion);
  const cat = CATEGORIAS.find((c) => c.id === params.categoria);
  if (!sub || !cat) notFound();

  const entries = listMeta('olimpiada', sub.id as Subseccion, cat.id as Categoria);
  const url = `${BASE}/olimpiada/${sub.id}/${cat.id}`;
  const title = `${cat.label} de ${sub.label}`;
  const description = `${cat.label} de ${sub.label} para olimpiada matemática: ${cat.descripcion.toLowerCase()}, calibrado por competencia (OMG, OME, IMO).`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      { '@type': 'ListItem', position: 2, name: sub.label, item: `${BASE}/olimpiada/${sub.id}/contenidos` },
      { '@type': 'ListItem', position: 3, name: cat.label, item: url },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'es',
    isPartOf: { '@id': `${BASE}/#website` },
    about: { '@type': 'Thing', name: sub.label },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: entries.length,
      itemListElement: entries.map((e, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${e.href}`,
        name: e.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <CategoryClient
        sub={{ id: sub.id, label: sub.label, descripcion: sub.descripcion, simbolo: sub.simbolo }}
        cat={{ id: cat.id, label: cat.label, descripcion: cat.descripcion }}
        entries={entries}
      />
    </>
  );
}
