import { MetadataRoute } from 'next';
import { buildIndex, CATEGORIAS, SUBSECCIONES } from '@/lib/content';

const BASE = 'https://olimpiadamatematica.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const index = buildIndex();
  const entries: MetadataRoute.Sitemap = [];

  // Páginas estáticas
  entries.push(
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/competencias`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  );

  // Páginas de categoría
  SUBSECCIONES.forEach((s) => {
    CATEGORIAS.forEach((c) => {
      entries.push({
        url: `${BASE}/olimpiada/${s.id}/${c.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Páginas de artículo/documento
  SUBSECCIONES.forEach((s) => {
    CATEGORIAS.forEach((c) => {
      const docs = index[s.id]?.[c.id] || [];
      docs.forEach((doc) => {
        entries.push({
          url: `${BASE}${doc.href}`,
          lastModified: doc.updated ? new Date(doc.updated) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    });
  });

  return entries;
}
