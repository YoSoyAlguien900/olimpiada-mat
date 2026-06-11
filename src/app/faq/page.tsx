import type { Metadata } from 'next';

const BASE = 'https://olimpiadamatematica.com';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description:
    'Qué es la Olimpiada Matemática, cómo empezar a prepararla desde cero, diferencias entre OMG, OME e IMO, temario por disciplina y niveles de dificultad.',
  alternates: {
    canonical: `${BASE}/faq`,
  },
  openGraph: {
    title: 'Preguntas frecuentes · Olimpiada Matemática',
    description:
      'Qué es la Olimpiada Matemática, cómo empezar a prepararla desde cero, diferencias entre OMG, OME e IMO, temario por disciplina y niveles de dificultad.',
    url: `${BASE}/faq`,
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: '¿Qué es la Olimpiada Matemática?',
    a: 'Es una competición de resolución de problemas para estudiantes de secundaria y bachillerato, centrada en razonamiento y demostración más que en cálculo. En España la ruta habitual es: fase autonómica (por ejemplo, la Olimpíada Matemática Galega) → fase nacional de la Olimpiada Matemática Española (OME) → selección para competiciones internacionales como la IMO.',
  },
  {
    q: '¿Cómo empiezo a prepararme para la Olimpiada Matemática desde cero?',
    a: 'Lo más eficiente es trabajar las cuatro disciplinas clásicas —Teoría de Números, Geometría, Álgebra y Combinatoria— empezando por los contenidos de nivel iniciación y regional, y avanzando dentro de cada una por el camino Contenidos → Métodos → Problemas resueltos → Problemas sugeridos.',
  },
  {
    q: '¿Qué diferencia hay entre la OMG, la OME y la IMO?',
    a: 'La Olimpíada Matemática Galega (OMG) es la fase autonómica de Galicia; la Olimpiada Matemática Española (OME) es la fase nacional, a la que se accede tras clasificarse en la fase autonómica; y la Olimpiada Internacional de Matemáticas (IMO) es la competición mundial a la que España envía un equipo seleccionado entre los mejores de la OME.',
  },
  {
    q: '¿Qué temario hay que dominar para las olimpiadas de matemáticas?',
    a: 'Cuatro grandes bloques: Teoría de Números (congruencias, aritmética modular, ecuaciones diofánticas), Geometría (sintética, transformaciones, inversión), Álgebra (desigualdades, ecuaciones funcionales, polinomios) y Combinatoria (conteo, grafos, extremal, Ramsey, juegos).',
  },
  {
    q: '¿Necesito saber cálculo o matemáticas universitarias?',
    a: 'No. Las olimpiadas matemáticas no evalúan cálculo ni álgebra lineal universitaria: usan un conjunto de herramientas propio —aritmética, geometría sintética, combinatoria y álgebra elemental— combinado de forma creativa. Es perfectamente posible empezar en ESO.',
  },
  {
    q: '¿Cómo sé qué nivel de dificultad me corresponde?',
    a: 'Cada entrada está etiquetada en una escala de cinco niveles (Iniciación, Regional, Nacional, Internacional, Élite) anclada a competencias reales: el nivel Regional equivale a la Olimpíada Matemática Galega, y el nivel Élite al material de selección para la IMO.',
  },
  {
    q: '¿Es gratuito este material?',
    a: 'Sí. Todo el contenido —teoría, demostraciones, métodos y problemas resueltos— es de acceso libre y gratuito.',
  },
  {
    q: '¿Quién escribe estos apuntes?',
    a: 'Adrián García Bouzas. Son los apuntes que le hubiera gustado tener al empezar: teoría bien explicada, demostraciones completas y problemas con contexto real, organizados por competencia.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 24 }}>
        <div className="hero-deco">?</div>
        <div className="hero-eyebrow">Acerca</div>
        <h1>
          Preguntas <em>frecuentes</em>
        </h1>
        <p className="hero-lede">
          Qué son las olimpiadas matemáticas, cómo empezar a prepararlas y cómo está organizado
          este material.
        </p>
      </section>

      <div className="section-rule">
        <span className="section-rule-num">01</span>
        <h2>Preguntas</h2>
      </div>

      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-a">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
