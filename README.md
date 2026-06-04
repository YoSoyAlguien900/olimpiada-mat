# Olimpiada Matemática — Material de élite

Sitio web Next.js con material de teoría de números y geometría para olímpicos.

## Cómo se ejecuta

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Para producción:

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/                Páginas Next.js (App Router)
  components/         Sidebar, Topbar, AppShell
  lib/content.ts      Loader + indexador de contenidos
  styles/globals.css  Estilos editoriales

content/
  olimpiada/
    geometria/
      contenidos/            ← teoría, teoremas, definiciones
      metodos/               ← técnicas y estrategias
      problemas-resueltos/   ← soluciones detalladas
      demostraciones/        ← pruebas formales
      problemas-sugeridos/   ← ejercicios para practicar
    teoria-numeros/
      (idéntica estructura)
```

## Formato de archivo de contenido

Cada entrada es un archivo `.md` con **frontmatter YAML** y **cuerpo Markdown con secciones semánticas**.

### Ejemplo mínimo

```markdown
---
title: "Lema del Levantamiento del Exponente (LTE)"
preview: "Una herramienta poderosa para calcular $v_p(a^n - b^n)$."
difficulty: 4
tags: [valuacion, primos]
prerequisites: [congruencias]
author: "Tu nombre"
updated: "2026-01-15"
---

Texto introductorio, en Markdown estándar, con LaTeX usando `$...$` para
inline y `$$...$$` para display.

## Enunciado

El cuerpo de cada `## Encabezado` reconocido se renderiza como un BLOQUE
TIPOGRÁFICO ESPECIAL. Los encabezados reconocidos:

- `## Enunciado` / `## Teorema` / `## Lema` / `## Proposición` / `## Corolario` → bloque teorema
- `## Definición` → bloque definición (acento rojo)
- `## Demostración` / `## Prueba` → bloque prueba (cierra con ∎)
- `## Ejemplo` → bloque ejemplo (acento ámbar)
- `## Observación` / `## Nota` → bloque nota
- `## Aplicaciones` / `## Problemas relacionados` → bloque secundario

Cualquier otro `## Título` se trata como sección genérica.
```

### Frontmatter — campos disponibles

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | **Obligatorio.** Título mostrado |
| `preview` | string | Descripción corta que aparece en listados y como subtítulo |
| `difficulty` | número 1-5 | Dificultad (pinta puntitos rojos) |
| `tags` | lista | Tags para búsqueda y exhibición |
| `prerequisites` | lista | Prerrequisitos (links/identificadores) |
| `author` | string | Autor |
| `updated` | string | Fecha |

### LaTeX

- Inline: `$a^2 + b^2 = c^2$`
- Display: `$$ \sum_{k=1}^n k = \frac{n(n+1)}{2} $$`
- Renderizado con KaTeX. Casi todos los comandos AMSmath soportados.

### Añadir contenido nuevo

Crear un archivo `.md` con frontmatter en la carpeta apropiada:

```
content/olimpiada/<geometria|teoria-numeros>/<categoria>/mi-tema.md
```

La página lo indexa automáticamente al recargar (en dev) o al rebuild
(en producción). El nombre del archivo (sin `.md`) se convierte en el slug
de la URL.

### Añadir una nueva subsección (ej. combinatoria)

1. Editar `src/lib/content.ts` y añadir a `SUBSECCIONES`:
   ```ts
   { id: 'combinatoria', label: 'Combinatoria', descripcion: '...', simbolo: 'C' }
   ```
2. Editar el tipo `Subseccion` para incluir `'combinatoria'`.
3. Crear `content/olimpiada/combinatoria/` con las 5 carpetas de categoría.

### Añadir una nueva categoría

Editar `CATEGORIAS` en `src/lib/content.ts`. Crear la carpeta correspondiente.

## Tecnologías

- **Next.js 14** (App Router, SSG)
- **gray-matter** + **remark/rehype** + **KaTeX** para parsing
- **CSS variables** para tema claro/oscuro
- **TypeScript** estricto

## Diseño

Estética editorial-matemática inspirada en libros impresos:
- Tipografía: Playfair Display + EB Garamond + IBM Plex
- Paleta: papel cálido / pergamino oscuro con acento bermellón
- Bloques semánticos diferenciados por color y tipografía
