import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getDoc,
  listMeta,
  CATEGORIAS,
  SUBSECCIONES,
  DIFICULTADES,
  type Subseccion,
  type Categoria,
} from '@/lib/content';
import { PdfExportButton } from '@/components/PdfExportButton';

const BASE = 'https://olimpiada-mat.vercel.app';

interface Params {
  params: { subseccion: string; categoria: string; slug: string };
}

export function generateStaticParams() {
  const out: { subseccion: string; categoria: string; slug: string }[] = [];
  SUBSECCIONES.forEach((s) =>
    CATEGORIAS.forEach((c) => {
      listMeta('olimpiada', s.id, c.id).forEach((m) =>
        out.push({ subseccion: s.id, categoria: c.id, slug: m.slug })
      );
    })
  );
  return out;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const sub = SUBSECCIONES.find((s) => s.id === params.subseccion);
  const cat = CATEGORIAS.find((c) => c.id === params.categoria);
  if (!sub || !cat) return {};

  const doc = await getDoc('olimpiada', sub.id as Subseccion, cat.id as Categoria, params.slug);
  if (!doc) return {};

  const url = `${BASE}${doc.href}`;
  const description = doc.preview
    ? `${doc.preview} — ${cat.label} de ${sub.label}. Olimpiada matemática.`
    : `${doc.title} — ${cat.label} de ${sub.label}. Material de olimpiada matemática calibrado por competencia.`;

  const keywords: string[] = [
    doc.title,
    sub.label,
    cat.label,
    'olimpiada matemática',
    ...(doc.tags || []),
    ...(doc.competencia ? [doc.competencia] : []),
  ];

  return {
    title: doc.title,
    description,
    keywords,
    authors: doc.author ? [{ name: doc.author }] : [{ name: 'Adrián García Bouzas' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${doc.title} · Olimpiada Matemática`,
      description,
      url,
      publishedTime: doc.updated ? new Date(doc.updated).toISOString() : undefined,
      authors: doc.author ? [doc.author] : ['Adrián García Bouzas'],
      tags: doc.tags,
      section: `${sub.label} — ${cat.label}`,
    },
  };
}

export default async function DocPage({ params }: Params) {
  const sub = SUBSECCIONES.find((s) => s.id === params.subseccion);
  const cat = CATEGORIAS.find((c) => c.id === params.categoria);
  if (!sub || !cat) notFound();

  const doc = await getDoc('olimpiada', sub.id as Subseccion, cat.id as Categoria, params.slug);
  if (!doc) notFound();

  const siblings = listMeta('olimpiada', sub.id as Subseccion, cat.id as Categoria);
  const idx = siblings.findIndex((s) => s.slug === doc.slug);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: doc.title,
    description: doc.preview || `${doc.title} — ${cat.label} de ${sub.label}`,
    url: `${BASE}${doc.href}`,
    inLanguage: 'es',
    author: {
      '@type': 'Person',
      name: doc.author || 'Adrián García Bouzas',
    },
    educationalLevel: doc.dificultad,
    learningResourceType: cat.label,
    about: {
      '@type': 'Thing',
      name: sub.label,
    },
    keywords: (doc.tags || []).join(', '),
    dateModified: doc.updated || undefined,
    isPartOf: {
      '@type': 'Course',
      name: 'Olimpiada Matemática — Material de élite',
      url: BASE,
      provider: {
        '@type': 'Person',
        name: 'Adrián García Bouzas',
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
        { '@type': 'ListItem', position: 2, name: sub.label, item: `${BASE}/olimpiada/${sub.id}/contenidos` },
        { '@type': 'ListItem', position: 3, name: cat.label, item: `${BASE}/olimpiada/${sub.id}/${cat.id}` },
        { '@type': 'ListItem', position: 4, name: doc.title, item: `${BASE}${doc.href}` },
      ],
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="doc-head">
        <div className="doc-actions">
          <PdfExportButton />
        </div>
        <div className="doc-eyebrow">
          {sub.label} — {cat.label}
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: doc.titleHtml }} />
        {doc.preview && (
          <p
            className="doc-preview"
            dangerouslySetInnerHTML={{ __html: doc.previewHtml }}
          />
        )}
        <div className="doc-meta">
          {(() => {
            const d = DIFICULTADES.find((x) => x.id === doc.dificultad);
            return d ? (
              <div className="doc-meta-item">
                <span>Dificultad</span>
                <span className={`tier-badge tier-${doc.dificultad}`} title={d.descripcion}>
                  {d.label}
                </span>
              </div>
            ) : null;
          })()}
          {doc.competencia && (
            <div className="doc-meta-item">
              <span>Competencia</span>
              <strong>{doc.competencia}</strong>
            </div>
          )}
          {(doc.tags || []).length > 0 && (
            <div className="doc-meta-item">
              <span>Etiquetas</span>
              {doc.tags!.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
          {(doc.prerequisites || []).length > 0 && (
            <div className="doc-meta-item">
              <span>Requisitos</span>
              {doc.prerequisites!.map((p) => <span key={p} className="tag">{p}</span>)}
            </div>
          )}
          {doc.author && (
            <div className="doc-meta-item">
              <span>Autor</span>
              <strong>{doc.author}</strong>
            </div>
          )}
          {doc.updated && (
            <div className="doc-meta-item">
              <span>Actualizado</span>
              <strong>{doc.updated}</strong>
            </div>
          )}
        </div>
      </header>

      <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />

      <nav className="doc-nav">
        {prev ? (
          <Link href={prev.href}>
            <div className="doc-nav-label">← Anterior</div>
            <div className="doc-nav-title" dangerouslySetInnerHTML={{ __html: prev.titleHtml }} />
          </Link>
        ) : (
          <div className="placeholder" />
        )}
        {next ? (
          <Link href={next.href} className="next">
            <div className="doc-nav-label">Siguiente →</div>
            <div className="doc-nav-title" dangerouslySetInnerHTML={{ __html: next.titleHtml }} />
          </Link>
        ) : (
          <div className="placeholder" />
        )}
      </nav>
    </article>
  );
}
