---
title: "OMG 2019 — Cuadrados perfectos consecutivos"
preview: "Determinar todos los enteros $n$ tales que $n^2 + 19n + 92$ es un cuadrado perfecto. Un clásico de fase regional: acotar entre cuadrados."
dificultad: regional
competencia: "OMG 2019"
tags: [cuadrados, acotacion, polinomios]
prerequisites: [divisibilidad-basica]
author: "Material olímpico"
updated: "2026-02-10"
---

## Enunciado

Hallar todos los enteros $n$ tales que $n^2 + 19n + 92$ sea un cuadrado perfecto.

## Idea de la solución

Una de las técnicas más fiables para problemas del tipo *"¿cuándo es un polinomio cuadrático un cuadrado?"* consiste en **encerrar la expresión entre dos cuadrados consecutivos**. Si conseguimos que $k^2 < P(n) < (k+1)^2$ para todo $n$ suficientemente grande, no hay solución en ese rango; los pocos casos restantes se verifican a mano.

## Demostración

Sea $P(n) = n^2 + 19n + 92$. Completamos el cuadrado:

$$
P(n) \;=\; n^2 + 19n + 92 \;=\; \left(n + \tfrac{19}{2}\right)^2 + 92 - \tfrac{361}{4} \;=\; \left(n + \tfrac{19}{2}\right)^2 + \tfrac{7}{4}.
$$

Esto sugiere comparar $P(n)$ con $(n+9)^2$ y $(n+10)^2$:

$$
(n+9)^2 \;=\; n^2 + 18n + 81, \qquad (n+10)^2 \;=\; n^2 + 20n + 100.
$$

Computamos las diferencias:

$$
P(n) - (n+9)^2 \;=\; n + 11, \qquad (n+10)^2 - P(n) \;=\; n + 8.
$$

**Caso 1.** Si $n \geq -7$, entonces $n + 11 > 0$ y $n + 8 \geq 1 > 0$, así que

$$
(n+9)^2 \;<\; P(n) \;<\; (n+10)^2.
$$

Es decir, $P(n)$ está estrictamente entre dos cuadrados consecutivos y no puede ser un cuadrado. **No hay solución para $n \geq -7$.**

**Caso 2.** Si $n = -8$: $P(-8) = 64 - 152 + 92 = 4 = 2^2$. **Solución.**

**Caso 3.** Si $n = -9$: $P(-9) = 81 - 171 + 92 = 2$. No es cuadrado.

**Caso 4.** Si $n = -10$: $P(-10) = 100 - 190 + 92 = 2$. No es cuadrado.

**Caso 5.** Si $n = -11$: $P(-11) = 121 - 209 + 92 = 4 = 2^2$. **Solución.**

**Caso 6.** Para $n \leq -12$, observamos por simetría: la sustitución $n \mapsto -19 - n$ deja $P(n)$ invariante (lo verificamos: $(-19-n)^2 + 19(-19-n) + 92 = n^2 + 38n + 361 - 361 - 19n + 92 = n^2 + 19n + 92$). Por simetría con el Caso 1, $P(n)$ tampoco puede ser cuadrado para $n \leq -12$.

Las únicas soluciones son $\boxed{n = -8 \text{ y } n = -11}$. $\blacksquare$

## Observación

El uso de la **simetría** $n \mapsto -19 - n$ ahorra la mitad del análisis. Detectarla: el eje del polinomio es $n = -19/2$, y reflejar en él intercambia los valores enteros. Es una herramienta muy útil en este tipo de problemas.

## Aplicaciones

Esta técnica del **sandwich entre cuadrados** funciona siempre que el polinomio sea cuadrático mónico (o, más generalmente, cuando podamos identificar el coeficiente líder). Para grado mayor, el ingrediente correcto es la **acotación entre potencias** consecutivas y, en problemas más finos, la valoración $p$-ádica.
