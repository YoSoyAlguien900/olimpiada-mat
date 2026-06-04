import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="hero">
      <div className="hero-deco">404</div>
      <div className="hero-eyebrow">Página no encontrada</div>
      <h1>
        Esta <em>demostración</em><br />no existe.
      </h1>
      <p className="hero-lede">
        La ruta que buscas no figura en el índice. <Link href="/" style={{ color: 'var(--vermillion)', borderBottom: '1px solid' }}>Volver al inicio</Link>.
      </p>
    </div>
  );
}
