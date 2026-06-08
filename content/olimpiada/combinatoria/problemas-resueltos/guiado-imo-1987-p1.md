---
title: "Guiado: IMO 1987/P1 — puntos fijos de permutaciones y conteo doble"
preview: "¿Cuántas permutaciones de $\\{1,\\ldots,n\\}$ tienen exactamente $k$ puntos fijos? La pregunta parece pedir una fórmula complicada; la respuesta correcta es una identidad sorprendentemente limpia, descubierta contando una misma cosa de dos maneras."
dificultad: nacional
tags: [conteo-doble, permutaciones, puntos-fijos, imo, problema-resuelto]
prerequisites: [conteo-doble, principios-conteo, inclusion-exclusion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Enunciado (IMO 1987, Problema 1)

Para cada entero $n \geq 1$, sea $p_n(k)$ el número de permutaciones del conjunto $\{1, 2, \ldots, n\}$ que tienen exactamente $k$ **puntos fijos** (es decir, exactamente $k$ valores $i$ tales que $\sigma(i) = i$). Demostrar que
$$
\sum_{k=0}^{n} k \cdot p_n(k) = n!.
$$

## Análisis: ¿qué clase de identidad es esta?

El lado izquierdo es una suma ponderada sobre las posibles cantidades de puntos fijos; el lado derecho, $n!$, es simplemente **el número total de permutaciones**. Esta forma —"una suma complicada de cantidades por sus frecuencias es igual al tamaño total de algo"— es la firma característica del [conteo doble](../metodos/conteo-doble): la suma de la izquierda está, casi con seguridad, contando el tamaño de un conjunto de pares $(\text{algo}, \text{algo más})$ agrupando primero por una coordenada, mientras que $n!$ lo cuenta agrupando por la otra.

La pregunta crucial es: **¿qué conjunto de pares es ese?**

## Solución

**Paso 1 — Reinterpretar la suma como un conteo de pares.** Observamos que
$$
\sum_{k=0}^{n} k \cdot p_n(k) = \sum_{k=0}^n k \cdot |\{\sigma : \sigma \text{ tiene exactamente } k \text{ puntos fijos}\}|.
$$
El sumando $k \cdot p_n(k)$ cuenta —para las permutaciones con exactamente $k$ puntos fijos— el número de esas permutaciones, multiplicado por el número de puntos fijos que cada una tiene. Esto es exactamente lo que se obtiene contando el conjunto
$$
\mathcal{P} = \{(\sigma, i) : \sigma \in S_n,\ \sigma(i) = i\}
$$
**agrupando por $\sigma$ primero**: para cada permutación $\sigma$ con exactamente $k$ puntos fijos, hay $k$ elementos $i$ tales que $(\sigma, i) \in \mathcal{P}$; sumando sobre todas las permutaciones (agrupadas según su número de puntos fijos $k$) se obtiene precisamente $\sum_{k} k \cdot p_n(k) = |\mathcal{P}|$.

**Paso 2 — Contar el mismo conjunto $\mathcal{P}$ agrupando por $i$.** Fijemos un valor $i \in \{1, \ldots, n\}$ y contemos cuántas permutaciones $\sigma$ satisfacen $\sigma(i) = i$. Estas son exactamente las permutaciones que fijan $i$ y permutan arbitrariamente los $n - 1$ elementos restantes — hay $(n-1)!$ de ellas. Como hay $n$ elecciones posibles para $i$,
$$
|\mathcal{P}| = \sum_{i=1}^{n} |\{\sigma : \sigma(i) = i\}| = \sum_{i=1}^{n} (n-1)! = n \cdot (n-1)! = n!.
$$

**Paso 3 — Concluir por conteo doble.** Como $|\mathcal{P}|$ se ha calculado de dos formas —agrupando por $\sigma$ (Paso 1) y agrupando por $i$ (Paso 2)— ambas deben coincidir:
$$
\sum_{k=0}^{n} k \cdot p_n(k) = |\mathcal{P}| = n!. \qquad \blacksquare
$$

## La idea que hay que retener

Lo notable de esta solución es que **no requiere conocer una fórmula cerrada para $p_n(k)$** — y de hecho, encontrar tal fórmula (que involucra los desarreglos $D_{n-k}$, ver [inclusion-exclusion](../contenidos/inclusion-exclusion): $p_n(k) = \binom{n}{k} D_{n-k}$) sería mucho más laborioso y, para este problema concreto, **completamente innecesario**. El conteo doble permite "saltarse" el cálculo intermedio: en lugar de calcular cada $p_n(k)$ y luego sumar, se reorganiza la suma completa como el cardinal de un conjunto de pares, y ese cardinal se calcula de la forma más simple posible —fijando la coordenada que produce un conteo trivial—.

Esta es la lección metodológica central de [conteo-doble](../metodos/conteo-doble): **ante una suma ponderada cuyo valor parece "casualmente" simple, sospecha que hay un conjunto de pares natural detrás, y busca la forma de agrupar que lo hace evidente.**

## Una segunda mirada: vía esperanza (para comparar enfoques)

Es instructivo notar que esta identidad también se obtiene —de forma casi instantánea— mediante el lenguaje del [método probabilístico](../metodos/metodo-probabilistico): si $\sigma$ es una permutación uniformemente aleatoria de $S_n$, sea $X = $ "número de puntos fijos de $\sigma$" $= \sum_{i=1}^n \mathbf{1}[\sigma(i) = i]$. Por linealidad de la esperanza,
$$
\mathbb{E}[X] = \sum_{i=1}^n \Pr[\sigma(i) = i] = \sum_{i=1}^n \frac{(n-1)!}{n!} = \sum_{i=1}^n \frac{1}{n} = 1.
$$
Por otro lado, $\mathbb{E}[X] = \sum_{k=0}^n k \cdot \Pr[X = k] = \sum_k k \cdot \frac{p_n(k)}{n!}$. Igualando, $\sum_k k \cdot p_n(k) = n! \cdot \mathbb{E}[X] = n!$ — la misma identidad, obtenida con el lenguaje de la esperanza en lugar del lenguaje de pares. **Son, en el fondo, el mismo argumento**: la linealidad de la esperanza no es más que conteo doble normalizado por el tamaño del espacio muestral. Reconocer esta equivalencia —que dos "métodos" aparentemente distintos son, vistos de cerca, la misma idea con distinto vocabulario— es una de las observaciones más valiosas que se pueden hacer al estudiar combinatoria.

## Problemas relacionados

- **(Clásico)** Calcular $\displaystyle\sum_{k=0}^n k^2 \cdot p_n(k)$ usando la misma estrategia de conteo doble (ahora sobre tripletas $(\sigma, i, j)$ con $\sigma(i)=i$, $\sigma(j) = j$, distinguiendo los casos $i = j$ e $i \neq j$).
- **(ISL, clásico)** Demostrar que el número esperado de **ciclos** de una permutación aleatoria de $S_n$ es $H_n = 1 + \frac12 + \cdots + \frac1n$ — combinando conteo doble con la descomposición en ciclos.
- **(Olimpiada, clásico)** En un grupo de $n$ personas que intercambian regalos al azar (cada una entrega un regalo y recibe uno, según una permutación aleatoria), calcular el valor esperado del número de personas que reciben su propio regalo, y relacionarlo con la identidad demostrada arriba.
