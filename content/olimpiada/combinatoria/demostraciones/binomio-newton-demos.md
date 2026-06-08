---
title: "Tres demostraciones del teorema del binomio"
preview: "Combinatoria, inducción, o cálculo: el desarrollo de $(x+y)^n$ se demuestra de tres formas independientes que iluminan tres facetas distintas de los coeficientes binomiales."
dificultad: regional
tags: [binomio-newton, demostracion, induccion, coeficientes-binomiales]
prerequisites: [coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

El teorema del binomio es uno de esos resultados que se "ven" de inmediato combinatoriamente, pero que también admiten demostraciones puramente algebraicas. Conocer las tres es valioso: cada una generaliza en una dirección distinta (a multinomios, a exponentes negativos o fraccionarios, a anillos no conmutativos).

## Demostración 1: Conteo directo (la prueba "del libro")

**Enunciado.** Para $n \geq 0$ entero, $\displaystyle (x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$.

**Demostración.** Escribimos $(x+y)^n = \underbrace{(x+y)(x+y)\cdots(x+y)}_{n \text{ factores}}$. Al expandir el producto mediante la propiedad distributiva, cada término del desarrollo resulta de elegir, **de cada uno de los $n$ factores**, o bien el sumando $x$ o bien el sumando $y$, y multiplicar las elecciones. Un término particular $x^k y^{n-k}$ se obtiene cada vez que se elige $x$ en exactamente $k$ de los $n$ factores (e $y$ en los $n-k$ restantes). El número de formas de elegir **cuáles** $k$ factores aportan una $x$ es, por definición, $\binom{n}{k}$. Por tanto, al agrupar los términos semejantes,
$$
(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}. \qquad \blacksquare
$$

**Por qué es la prueba "del libro".** No requiere cálculo ni inducción: el coeficiente $\binom{n}{k}$ aparece *porque* cuenta exactamente lo que tiene que contar — no es una coincidencia algebraica, sino la definición misma de $\binom{n}{k}$ aplicada al lugar correcto. Esta es la razón por la que conviene **memorizar el teorema del binomio combinatoriamente**, no como una fórmula a recordar mecánicamente.

## Demostración 2: Inducción usando la regla de Pascal

**Demostración.** Por inducción sobre $n$. El caso $n=0$ es $(x+y)^0 = 1 = \binom{0}{0}x^0y^0$. Supongamos el resultado válido para $n-1$:
$$
(x+y)^{n-1} = \sum_{k=0}^{n-1} \binom{n-1}{k} x^k y^{n-1-k}.
$$
Multiplicando ambos lados por $(x+y)$:
$$
(x+y)^n = \sum_{k=0}^{n-1}\binom{n-1}{k} x^{k+1}y^{n-1-k} + \sum_{k=0}^{n-1} \binom{n-1}{k} x^k y^{n-k}.
$$
Reindexando la primera suma con $j = k+1$ (de modo que recorre $j = 1,\ldots,n$):
$$
(x+y)^n = \sum_{j=1}^{n} \binom{n-1}{j-1} x^{j} y^{n-j} + \sum_{k=0}^{n-1} \binom{n-1}{k} x^k y^{n-k}.
$$
Agrupando los términos con la misma potencia $x^k y^{n-k}$ (los extremos $k=0$ y $k=n$ aparecen en una sola suma cada uno, y coinciden con $\binom{n-1}{0} = \binom{n-1}{n-1} = 1 = \binom{n}{0} = \binom{n}{n}$):
$$
(x+y)^n = \sum_{k=0}^{n} \left[\binom{n-1}{k-1} + \binom{n-1}{k}\right] x^k y^{n-k} = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k},
$$
donde el último paso usa exactamente la **regla de Pascal** $\binom{n-1}{k-1}+\binom{n-1}{k} = \binom{n}{k}$ (ver [coeficientes-binomiales](../contenidos/coeficientes-binomiales)). $\blacksquare$

**Observación metodológica.** Esta demostración revela que el teorema del binomio y la regla de Pascal son, en esencia, **la misma afirmación** vista desde ángulos distintos: una recurrencia sobre coeficientes y una identidad de polinomios se implican mutuamente. Es un ejemplo perfecto de cómo dos formulaciones aparentemente distintas de una idea —una combinatoria, otra algebraica— terminan siendo equivalentes en el fondo.

## Demostración 3: Vía derivación formal (caracterización por series de Taylor)

**Demostración.** Sea $f(x) = (1+x)^n$, un polinomio de grado $n$. Por el teorema de Taylor (válido para polinomios sin ninguna sutileza analítica, pues son funciones enteras), $f$ coincide con su desarrollo de Taylor en torno a $x=0$:
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k.
$$
Calculamos las derivadas sucesivas: $f'(x) = n(1+x)^{n-1}$, $f''(x) = n(n-1)(1+x)^{n-2}$, y en general $f^{(k)}(x) = n(n-1)\cdots(n-k+1)(1+x)^{n-k} = n^{\underline{k}}(1+x)^{n-k}$ para $k \leq n$ (y $f^{(k)} \equiv 0$ para $k > n$, pues $f$ tiene grado $n$). Evaluando en $x = 0$:
$$
f^{(k)}(0) = n^{\underline{k}} = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}.
$$
Sustituyendo,
$$
(1+x)^n = \sum_{k=0}^{n} \frac{n!/(n-k)!}{k!} x^k = \sum_{k=0}^{n} \binom{n}{k} x^k.
$$
El caso general $(x+y)^n$ se obtiene homogeneizando: si $y \neq 0$, escribimos $(x+y)^n = y^n\left(\frac{x}{y}+1\right)^n = y^n \sum_k \binom{n}{k}\left(\frac{x}{y}\right)^k = \sum_k \binom{n}{k}x^k y^{n-k}$ (y el caso $y=0$ es trivial). $\blacksquare$

**Por qué vale la pena conocerla.** Esta tercera vía es la que **generaliza** de forma más natural: sustituyendo $n$ por un exponente real arbitrario $\alpha$ —y la suma finita por una serie infinita— se obtiene el **teorema del binomio generalizado de Newton**,
$$
(1+x)^{\alpha} = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k, \qquad \binom{\alpha}{k} := \frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!},
$$
válido para $|x| < 1$. Esta extensión es exactamente la que permite obtener $\sqrt{1-4x} = (1-4x)^{1/2}$ como serie de potencias en la deducción de la fórmula cerrada de los números de Catalan vía funciones generadoras (ver [catalan-formula-demos](catalan-formula-demos) y [funciones-generadoras](../contenidos/funciones-generadoras)) — un puente directo entre el análisis y la combinatoria enumerativa.

## Comparación y moraleja

Las tres demostraciones difieren en lo que **explican**:

- La prueba combinatoria explica **por qué** aparece $\binom{n}{k}$ — su significado.
- La prueba inductiva explica **cómo** se relaciona con la estructura recursiva del triángulo de Pascal.
- La prueba analítica explica **cómo generalizar** más allá de los enteros no negativos.

Ninguna es "la mejor" en abstracto: la elegida depende de qué se necesite extraer del resultado. En el contexto de una demostración olímpica, la primera suele ser la más rápida de escribir y la más persuasiva; las otras dos son las que abren la puerta a generalizaciones que, llegado el momento, resultan indispensables.
