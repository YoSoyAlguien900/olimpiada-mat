import { redirect } from 'next/navigation';
import { SUBSECCIONES } from '@/lib/content';

export function generateStaticParams() {
  return SUBSECCIONES.map((s) => ({ subseccion: s.id }));
}

export default function SubseccionPage({ params }: { params: { subseccion: string } }) {
  redirect(`/olimpiada/${params.subseccion}/contenidos`);
}
