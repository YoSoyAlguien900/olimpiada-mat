import Link from 'next/link';
import { DIFICULTADES } from '@/lib/content';

export const metadata = {
  title: 'Competencias y calibrado · Olimpiada Matemática',
};

export default function CompetenciasPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 24 }}>
        <div className="hero-deco">⊕</div>
        <div className="hero-eyebrow">Calibrado de dificultad</div>
        <h1>
          Cinco niveles, <em>una</em> escala.
        </h1>
        <p className="hero-lede">
          La dificultad de cada entrada está anclada a competencias reales y públicas, no a estrellitas
          arbitrarias. La referencia inferior es la <strong>Olimpíada Matemática Galega</strong>; la
          superior, el material de selección IMO.
        </p>
      </section>

      <div className="section-rule">
        <span className="section-rule-num">01</span>
        <h2>La escala</h2>
      </div>

      <div className="diff-scale">
        {DIFICULTADES.map((d) => (
          <div key={d.id} className={`diff-row diff-${d.id}`}>
            <div className="diff-tag-col">
              <span className={`diff-pill diff-pill-${d.id}`}>{d.label}</span>
              <span className="diff-orden">Nivel {d.orden}</span>
            </div>
            <div className="diff-body">
              <p className="diff-desc">{d.descripcion}</p>
              <p className="diff-example">
                <span className="diff-example-label">Anclaje:</span> {d.ejemplo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-rule">
        <span className="section-rule-num">02</span>
        <h2>La referencia regional: Olimpíada Matemática Galega</h2>
      </div>

      <div className="prose">
        <p>
          La <strong>Olimpíada Matemática Galega</strong> (OMG) es la fase autonómica de la Olimpiada
          Matemática Española en Galicia. La organiza la Asociación Eduardo García-Rodeja Fernández, junto
          con el Clube Olímpico de Mates, y se celebra cada enero en la Facultade de Matemáticas de la
          Universidade de Santiago de Compostela. Los enunciados son públicos y se conservan en{' '}
          <a href="https://olympia.usc.gal" target="_blank" rel="noopener noreferrer">olympia.usc.gal</a>.
        </p>

        <p>
          Está dirigida a estudiantes de bachillerato y consta de dos sesiones de tres problemas cada una,
          con cuatro horas por sesión. Selecciona hasta tres representantes para la fase nacional. El nivel
          se caracteriza por:
        </p>

        <ul>
          <li>
            <strong>Tres problemas técnicamente abordables</strong> que evalúan dominio de las técnicas
            estándar (potencia de un punto, congruencias básicas, paridad, principio del palomar,
            inducción) sin requerir ideas creativas extraordinarias.
          </li>
          <li>
            <strong>Dos problemas de selección</strong> que añaden una idea no trivial — un truco
            algebraico, una construcción auxiliar geométrica, un invariante combinatorio sutil — pero
            siempre dentro del bagaje de un alumno bien preparado.
          </li>
          <li>
            <strong>Un problema duro</strong> que separa a los medallistas: típicamente requiere
            combinar dos técnicas o detectar una simetría escondida. Equivalente a un P2/P5 de fase
            nacional fácil.
          </li>
        </ul>

        <p>
          Por eso fijamos la OMG como anclaje de la dificultad <em>regional</em>: representa el techo
          razonable de lo que un estudiante puede resolver con preparación seria pero sin años de
          entrenamiento olímpico. Todo lo que en esta web aparece como <strong>regional</strong> debería
          ser accesible a quien apunta a clasificarse en la OMG.
        </p>
      </div>

      <div className="section-rule">
        <span className="section-rule-num">03</span>
        <h2>Cómo leer el calibrado</h2>
      </div>

      <div className="prose">
        <p>
          Cada problema y cada entrada teórica lleva una etiqueta de dificultad y, cuando procede, un
          campo <code>competencia</code> con la prueba exacta de la que procede (por ejemplo,{' '}
          <em>OMG 2018, P3</em> o <em>IMO 2008, P1</em>). Esto permite verificar el calibrado contra
          fuentes públicas.
        </p>
        <p>
          La dificultad de las <em>entradas teóricas</em> (un teorema, un método) indica el nivel mínimo
          de competencia donde esa herramienta empieza a ser útil. Wilson, por ejemplo, es{' '}
          <em>nacional</em>: rara vez aparece en una fase autonómica, pero es estándar en la OME y en
          olimpiadas iberoamericanas juveniles.
        </p>
        <p>
          Los listados de cada categoría permiten filtrar por nivel. Si estás preparando la OMG, basta
          con dejar marcados <em>iniciación</em> y <em>regional</em>; si apuntas a IMO, los niveles{' '}
          <em>internacional</em> y <em>élite</em> son el material relevante.
        </p>
      </div>

      <div className="section-rule">
        <span className="section-rule-num">04</span>
        <h2>Empezar</h2>
      </div>

      <div className="disc-grid">
        <Link href="/olimpiada/teoria-numeros/contenidos" className="disc-card">
          <div className="disc-symbol">ℕ</div>
          <h3>Teoría de números</h3>
          <p>Congruencias, primos, ecuaciones diofánticas, valuación p-ádica.</p>
        </Link>
        <Link href="/olimpiada/geometria/contenidos" className="disc-card">
          <div className="disc-symbol">△</div>
          <h3>Geometría</h3>
          <p>Sintética clásica, transformaciones, inversión, geometría del triángulo.</p>
        </Link>
      </div>
    </>
  );
}
