import Link from 'next/link';
import { buildIndex, SUBSECCIONES, CATEGORIAS } from '@/lib/content';

export default function HomePage() {
  const index = buildIndex();

  const stats = SUBSECCIONES.map((s) => {
    const total = CATEGORIAS.reduce((acc, c) => acc + (index[s.id]?.[c.id]?.length || 0), 0);
    return { ...s, total };
  });

  return (
    <>
      <section className="hero">
        <div className="hero-deco">∫</div>
        <div className="hero-eyebrow">Vol. I · Edición 2026</div>
        <h1>
          Material <em>olímpico</em><br />
          de élite.
        </h1>
        <p className="hero-lede">
          Un cuaderno digital de referencia para quienes preparan olimpiadas matemáticas. Teoremas, métodos,
          demostraciones rigurosas y problemas seleccionados — organizado como un libro, navegado como una app.
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
            <div className="disc-symbol" style={{ fontSize: 28 }}>
              §{String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontSize: 20 }}>{c.label}</h3>
            <p>{c.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="section-rule">
        <span className="section-rule-num">04</span>
        <h2>Sobre el formato</h2>
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 720 }}>
        <p>
          Cada entrada vive en un archivo Markdown con un encabezado YAML que declara título, dificultad,
          prerrequisitos y etiquetas. El cuerpo se divide en secciones semánticas reconocidas por el
          renderizador — <code>## Enunciado</code>, <code>## Demostración</code>, <code>## Ejemplo</code> — que se
          transforman en bloques tipográficos diferenciados.
        </p>
        <p>
          Todas las expresiones matemáticas se escriben en LaTeX, entre <code>$…$</code> para inline y{' '}
          <code>$$…$$</code> para display, renderizadas con KaTeX. Añadir contenido nuevo es crear un{' '}
          <code>.md</code> en la carpeta correspondiente — la página lo indexa automáticamente.
        </p>
      </div>
    </>
  );
}
