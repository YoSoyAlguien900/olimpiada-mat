---
title: "Cómo atacar ecuaciones funcionales"
preview: "Las ecuaciones funcionales siguen un patrón: explorar con sustituciones especiales, deducir la forma de $f$, probar la inducción para extender a $\\mathbb{Q}$ o $\\mathbb{R}$, y verificar. La estrategia es siempre la misma."
dificultad: nacional
tags: [ecuaciones-funcionales, estrategia, sustitucion, induccion, regularidad]
prerequisites: [ecuaciones-funcionales]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Atacar una ecuación funcional es un proceso sistemático. No existe un método que funcione siempre, pero sí un conjunto de movimientos estándar que, aplicados en orden, agotan la mayoría de los casos que aparecen en olimpiada.

## La estrategia en cinco pasos

### Paso 1: Explorar con sustituciones especiales

Las primeras sustituciones siempre son las mismas:

| Sustitución | Qué se obtiene típicamente |
|---|---|
| $x = y = 0$ | Información sobre $f(0)$ |
| $y = 0$ (o $x = 0$) | Relación $f(x)$ con $f(0)$ |
| $x = y$ | Información sobre $f(2x)$ o $f(x^2)$ |
| $y = -x$ (si el dominio es $\mathbb{R}$) | Paridad de $f$ |
| $x = 1$ o $y = 1$ | Relación de $f(n)$ con $f(1)$ |
| $y = f(x)$ (si el codominio ⊆ dominio) | Composiciones de $f$ |

**Objetivo:** Determinar $f(0)$, $f(1)$, si $f$ es par/impar/monótona, y cuál es la "forma candidata" de $f$.

### Paso 2: Conjeturar la forma de $f$

Con la información del Paso 1, conjetura qué funciones son candidatas. Las más comunes en olimpiada:

- $f(x) = cx$ (lineal)
- $f(x) = cx + d$ (afín)
- $f(x) = x^n$ (potencia)
- $f(x) = 0$ (trivial)
- $f(x) = c$ (constante)
- $f(x) = |x|$, $f(x) = \text{sgn}(x)$

### Paso 3: Extender de $\mathbb{N}$ a $\mathbb{Q}$ a $\mathbb{R}$

Si la función actúa sobre $\mathbb{Q}$ o $\mathbb{R}$, la prueba de que $f(x)=cx$ (o la candidata) tiene tres etapas:

**Enteros positivos:** Por inducción, $f(n) = nf(1)$.

**Enteros negativos:** De $f(x)+f(-x)=\text{algo}$ (del Paso 1), deducir $f(-n)$.

**Racionales:** De $nf(p/n) = f(p)$ (usando aditividad o la ecuación), deducir $f(p/q)$.

**Reales:** Si se pide $f:\mathbb{R}\to\mathbb{R}$ y no hay condición de regularidad, puede haber soluciones patológicas. Si se da **monotonía**, **continuidad** o **acotación en un intervalo**, la extensión de $\mathbb{Q}$ a $\mathbb{R}$ es por densidad.

### Paso 4: Probar que solo existen esas soluciones

Después de encontrar las candidatas, hay que demostrar que no hay otras. Las técnicas son:

- **Inducción hacia abajo:** Si el problema tiene buena estructura descendente.
- **Suponer que $f(x_0)\neq cx_0$ y derivar contradicción.**
- **Inyectividad/sobreyectividad:** Si se puede probar que $f$ es biyectiva, a veces se pueden hacer sustituciones más potentes.

### Paso 5: Verificar

**Siempre** sustituir la candidata en la ecuación original para confirmar que funciona. Este paso es parte obligatoria de la solución.

## Sustituciones avanzadas

### Inyectividad y sobreyectividad

**Cómo probar inyectividad:** Si $f(a)=f(b)$, sustituir en la ecuación y deducir $a=b$.

**Cómo probar sobreyectividad:** Mostrar que para todo $c$ en el codominio existe $x$ con $f(x)=c$. A veces basta fijar un parámetro en la ecuación y variar el otro.

### Usar $f(f(x))$

Si la ecuación tiene composiciones, a veces sustituir $x\to f(x)$ da nueva información.

**Ejemplo.** $f(f(x)+y)=2x+f(f(y)-x)$. Sustituir $y=0$: $f(f(x))=2x+f(f(0)-x)$. Sustituir $x=0$: $f(f(0))=f(f(0))$. ✓ (sin info). Sustituir $y=-f(x)$: $f(0)=2x+f(f(-f(x))-x)$...

### Separar pares e impares

Si $f:\mathbb{R}\to\mathbb{R}$, escribir $f=f_e+f_o$ donde $f_e(x)=(f(x)+f(-x))/2$ (parte par) y $f_o(x)=(f(x)-f(-x))/2$ (parte impar). A veces la ecuación separa en ecuaciones para $f_e$ y $f_o$.

## Ejemplo completo: $f(xf(y))=yf(x)$

**Ecuación:** Hallar $f:\mathbb{R}_{>0}\to\mathbb{R}_{>0}$ con $f(xf(y))=yf(x)$ para todo $x,y>0$.

**Paso 1. Sustituciones iniciales:**
- $x=y=1$: $f(f(1))=f(1)$.
- $y=1$: $f(xf(1))=f(x)$. Sea $c=f(1)$: $f(cx)=f(x)$ para todo $x>0$.

Aplicando repetidamente: $f(c^n x)=f(x)$. Si $c\neq1$, esto haría $f$ periódica en escala logarítmica (para $f$ monótona, esto es incompatible con ser positiva). Así $c=f(1)=1$.

- $f(f(y))=y$ para todo $y$ (poner $x=1$): $f(f(y))=y$, o sea $f$ es una involución.

**Paso 2. Conjetura:** $f(x)=1/x$ satisface $f(x\cdot 1/y)=f(x/y)=y/x=yf(x)$. ✓

¿Hay otras? Si $f$ es continua: $f$ es involución positiva y continua en $\mathbb{R}_{>0}$, así $f(x)=x^{-1}$ (el único homeomorfismo involutivo de $\mathbb{R}_{>0}$ sobre sí mismo que preserva el orden es $x\mapsto x$ o lo invierte es $x\mapsto1/x$; la condición $f(f(y))=y$ y $f>0$ excluye la identidad para la ecuación original).

**Paso 3.** Deducir directamente: de $f(xf(y))=yf(x)$ e intercambiando $x$ e $y$: $f(yf(x))=xf(y)$. Así $\frac{f(xf(y))}{f(yf(x))}=\frac{yf(x)}{xf(y)}$. Pero también: $f$ de una sola variable, la única solución continua con $f(1)=1$ y $f(f(y))=y$ es $f(y)=y^{-1}$.

**Conclusión:** $f(x)=1/x$. $\square$

---

## Cuándo es imposible encontrar $f$

A veces la ecuación funcional tiene por solución $f\equiv0$ únicamente o no tiene soluciones. Para detectarlo:

1. **Contradicción al suponer $f\not\equiv0$:** con sustituciones especiales, mostrar que existe $a$ con $f(a)=0$ y luego probar $f\equiv0$.

2. **Sin solución:** si la ecuación implica $f(a)>f(b)$ y $f(a)<f(b)$ simultáneamente para algún $a,b$, no hay solución.

## La presentación de la solución

Una solución completa de una ecuación funcional tiene tres partes:

1. **Encontrar todas las candidatas** (con sustituciones y deducción).
2. **Demostrar que son las únicas** (sin dejar cabos sueltos en la extensión $\mathbb{N}\to\mathbb{Q}\to\mathbb{R}$).
3. **Verificar** que las candidatas satisfacen la ecuación.

En olimpiada, omitir cualquiera de las tres partes es penalizado.

## Observación

**El error más frecuente: afirmar sin demostrar la unicidad.** Encontrar que $f(x)=cx$ satisface la ecuación es solo mitad del trabajo. Si no se demuestra que no hay otras soluciones, la solución está incompleta.

**La verificación parece trivial pero no lo es.** A veces la candidata encontrada por sustituciones funciona solo bajo ciertas condiciones (e.g., solo si $x\geq0$). La verificación para todos los valores del dominio puede revelar problemas.

**Monotonía implícita.** En algunos problemas, la ecuación funcional misma impone que $f$ sea monótona (por ejemplo, si $f$ creciente sigue de la forma de la ecuación). En ese caso, la extensión de $\mathbb{Q}$ a $\mathbb{R}$ es automática.

## Problemas relacionados

- **(Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x+y)=f(x)+f(y)+2xy$.

- **(Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x^2+y^2)=(f(x))^2+(f(y))^2$.

- **(Nacional)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x)+y)=f(x^2-y)+4f(x)y$.

- **(IMO-nivel)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(xy+f(x))=xf(y)+f(x)$.

- **(Clásico)** Hallar todas $f:\mathbb{Z}\to\mathbb{Z}$ con $f(f(n))=n+2$ para todo $n\in\mathbb{Z}$.
