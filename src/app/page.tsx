import Link from 'next/link';
import type { Metadata } from 'next';
import { buildIndex, SUBSECCIONES, CATEGORIAS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Olimpiada Matemática — Material de élite',
  description:
    'Apuntes de olimpiada matemática: teoría bien explicada, demostraciones completas y problemas con contexto real de Geometría y Teoría de Números. Calibrado desde OMG hasta IMO.',
  alternates: {
    canonical: 'https://olimpiada-mat.vercel.app',
  },
  openGraph: {
    title: 'Olimpiada Matemática — Material de élite',
    description:
      'Apuntes de olimpiada matemática: teoría bien explicada, demostraciones completas y problemas con contexto real de Geometría y Teoría de Números. Calibrado desde OMG hasta IMO.',
    url: 'https://olimpiada-mat.vercel.app',
    type: 'website',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Olimpiada Matemática',
  url: 'https://olimpiada-mat.vercel.app',
  description:
    'Material de élite para preparación de olimpiadas matemáticas: Geometría y Teoría de Números, calibrado por competencia (OMG → OME → IMO).',
  inLanguage: 'es',
  author: {
    '@type': 'Person',
    name: 'Adrián García Bouzas',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://olimpiada-mat.vercel.app/olimpiada/geometria/contenidos',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  const index = buildIndex();

  const stats = SUBSECCIONES.map((s) => {
    const total = CATEGORIAS.reduce((acc, c) => acc + (index[s.id]?.[c.id]?.length || 0), 0);
    return { ...s, total };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="hero">
        <div className="hero-deco">∫</div>
        <div className="hero-eyebrow">Vol. I · Edición 2026</div>
        <h1>
          Material <em>olímpico</em><br />
          de élite.
        </h1>
        <p className="hero-lede">
          Mis apuntes de olimpiada. Lo que me hubiera gustado tener cuando empecé: teoría bien explicada,
          demostraciones completas, problemas con contexto real — todo en el mismo sitio.
        </p>
      </section>

      <div className="section-rule">
        <span className="section-rule-num">01</span>
        <h2>Disciplinas</h2>
      </div>

      <div className="disc-grid">
        {stats.map((s) => (
          <Link key={s.id} href={`/olimpiada/${s.id}/contenidos`} className="disc-card">
            <div className="disc-symbol">{s.simbolo}</div>
            <h3>{s.label}</h3>
            <p>{s.descripcion}</p>
            <div className="disc-meta">
              <span><strong>{s.total}</strong> entradas</span>
              <span>5 categorías</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-rule">
        <span className="section-rule-num">02</span>
        <h2>Calibrado por competencia</h2>
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 760, margin: '24px 0 40px' }}>
        <p style={{ margin: '0 0 16px' }}>
          Cada entrada lleva una etiqueta de dificultad anclada a competencias reales. El anclaje
          inferior es la <strong>Olimpíada Matemática Galega</strong> (fase autonómica de la OME,
          bachillerato): todo lo marcado como <em>regional</em> es accesible al nivel de la OMG. Por
          encima, los niveles <em>nacional</em>, <em>internacional</em> y <em>élite</em> cubren OME
          nacional, IMO, y material de selección olímpica.
        </p>
        <Link href="/competencias" style={{
          display: 'inline-block',
          fontFamily: 'var(--sans)',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--vermillion)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--vermillion)',
          paddingBottom: 2,
        }}>
          Ver la escala completa →
        </Link>
      </div>

      <div className="section-rule">
        <span className="section-rule-num">03</span>
        <h2>Cómo está organizado</h2>
      </div>

      <div className="disc-grid">
        {CATEGORIAS.map((c, i) => (
          <div key={c.id} className="disc-card" style={{ cursor: 'default' }}>
            <div className="disc-symbol" style={{ fontSize: 22, fontFamily: 'var(--mono)', fontStyle: 'normal', letterSpacing: '0.1em', opacity: 0.7 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontSize: 20 }}>{c.label}</h3>
            <p>{c.descripcion}</p>
          </div>
        ))}
      </div>

      <footer style={{
        marginTop: '80px',
        paddingTop: '24px',
        borderTop: '1px solid var(--rule-soft)',
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)',
        opacity: 0.6,
      }}>
        Desarrollado por Adrián García Bouzas
      </footer>
    </>
  );
}
