import { notFound } from 'next/navigation';
import {
  listMeta,
  CATEGORIAS,
  SUBSECCIONES,
  type Subseccion,
  type Categoria,
} from '@/lib/content';
import CategoryClient from './CategoryClient';

interface Params {
  params: { subseccion: string; categoria: string };
}

export function generateStaticParams() {
  const out: { subseccion: string; categoria: string }[] = [];
  SUBSECCIONES.forEach((s) => CATEGORIAS.forEach((c) => out.push({ subseccion: s.id, categoria: c.id })));
  return out;
}

export default function CategoryPage({ params }: Params) {
  const sub = SUBSECCIONES.find((s) => s.id === params.subseccion);
  const cat = CATEGORIAS.find((c) => c.id === params.categoria);
  if (!sub || !cat) notFound();

  const entries = listMeta('olimpiada', sub.id as Subseccion, cat.id as Categoria);

  return (
    <CategoryClient
      sub={{ id: sub.id, label: sub.label, descripcion: sub.descripcion, simbolo: sub.simbolo }}
      cat={{ id: cat.id, label: cat.label, descripcion: cat.descripcion }}
      entries={entries}
    />
  );
}
