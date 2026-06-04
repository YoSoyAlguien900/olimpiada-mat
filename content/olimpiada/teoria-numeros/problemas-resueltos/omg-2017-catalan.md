---
title: "OMG 2017 — Divisibilidad de un cociente"
preview: "Mostrar que $\\dfrac{(2n)!}{n!(n+1)!}$ es entero para todo $n \\geq 0$. Un clásico de fase autonómica que esconde el número de Catalan."
dificultad: regional
competencia: "OMG 2017"
tags: [combinatoria, divisibilidad, factoriales, catalan]
prerequisites: [divisibilidad-basica]
author: "Material olímpico"
updated: "2026-02-10"
---

## Enunciado

Demostrar que para todo entero $n \geq 0$, el número

$$
C_n \;=\; \frac{(2n)!}{n!\,(n+1)!}
$$

es un entero positivo.

## Idea de la solución

El truco está en reconocer que $C_n$ es el $n$-ésimo **número de Catalan** y que admite la siguiente identidad:

$$
C_n \;=\; \binom{2n}{n} - \binom{2n}{n+1}.
$$

Como diferencia de dos coeficientes binomiales, es automáticamente entero. Pero el problema espera una demostración directa, no la fórmula.

## Demostración

Partimos de la identidad combinatoria

$$
\frac{(2n)!}{n!\,(n+1)!} \;=\; \frac{(2n)!}{n!\,n!} \cdot \frac{1}{n+1} \;=\; \frac{1}{n+1}\binom{2n}{n}.
$$

El problema se reduce a demostrar que $(n+1) \mid \binom{2n}{n}$. Para ello, observamos:

$$
\binom{2n}{n} - \binom{2n}{n+1} \;=\; \frac{(2n)!}{n!\,n!} - \frac{(2n)!}{(n-1)!\,(n+1)!}.
$$

Sacando factor común $\dfrac{(2n)!}{n!\,(n+1)!}$:

$$
\binom{2n}{n} - \binom{2n}{n+1} \;=\; \frac{(2n)!}{n!\,(n+1)!} \cdot \big[(n+1) - n\big] \;=\; \frac{(2n)!}{n!\,(n+1)!}.
$$

Hemos probado entonces que

$$
\frac{(2n)!}{n!\,(n+1)!} \;=\; \binom{2n}{n} - \binom{2n}{n+1},
$$

que es diferencia de enteros y por tanto entero. $\blacksquare$

## Observación

El número $C_n = \frac{1}{n+1}\binom{2n}{n}$ cuenta, entre otras cosas:

- Las **triangulaciones** de un polígono convexo de $n+2$ lados.
- Las **expresiones bien formadas** con $n$ pares de paréntesis.
- Los caminos en el retículo $(0,0) \to (n,n)$ que no cruzan la diagonal.

Que un mismo número aparezca en tan diversos problemas es una de las primeras lecciones que enseña la combinatoria enumerativa.

## Aplicaciones

El argumento del **paso telescópico** $\binom{2n}{n} - \binom{2n}{n+1}$ es la técnica clave: muchos cocientes de factoriales se prueban enteros buscando una identidad combinatoria que los exprese como diferencia o suma de binomiales.
