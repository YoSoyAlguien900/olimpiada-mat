---
title: "Principio del extremo"
preview: "Para resolver un problema, considera el objeto con valor mínimo o máximo. Es el método más simple y a veces el más sorprendente: 'tomemos el más pequeño' resuelve problemas que parecen intratables."
dificultad: iniciacion
tags: [extremo, minimo, demostraciones, combinatoria]
prerequisites: []
author: "Material olímpico"
updated: "2026-02-11"
---

## Definición

El **principio del extremo** consiste en seleccionar un objeto del problema cuya alguna magnitud sea mínima (o máxima) entre todos los posibles, y derivar propiedades a partir de esta extremalidad. Es una herramienta de demostración no constructiva: usa el **buen orden** de $\mathbb N$ — todo subconjunto no vacío tiene mínimo — y, en problemas finitos, simplemente la finitud.

## Ejemplo

**Ejemplo (clásico de Erdős).** En un plano hay $n$ puntos, no todos colineales. Demostrar que existe una recta que pasa por exactamente dos de ellos.

**Solución.** Consideramos todos los pares $(\ell, P)$ con $\ell$ una recta que pase por al menos dos de los puntos y $P$ uno de los puntos *no* en $\ell$. Como no todos los puntos son colineales, hay al menos un tal par.

Entre todos los pares, **escogemos uno con distancia $d(P, \ell)$ mínima** (la distancia del punto $P$ a la recta $\ell$). Vamos a probar que $\ell$ contiene **exactamente dos** puntos del conjunto.

Supongamos por contradicción que $\ell$ contiene tres puntos $A, B, C$ (o más). Sea $Q$ el pie de la perpendicular desde $P$ a $\ell$. Al menos dos de $A, B, C$ están al mismo lado de $Q$ (en $\ell$); sin pérdida de generalidad, sean $A$ y $B$ con $A$ entre $Q$ y $B$ (puede ser $A = Q$).

Consideremos la nueva recta $\ell' = \overleftrightarrow{PB}$. Esta contiene a $B$ y a $P$, así que es una recta válida. La distancia de $A$ a $\ell'$ es la altura del triángulo $\triangle PAB$ desde $A$, que por trigonometría elemental es **menor** que $d(P, \ell)$ (porque el segmento $QA$ está incluido en $\ell$, y $A$ está más cerca de $\ell'$ que $P$ de $\ell$).

Pero entonces $(\ell', A)$ es un par mejor: $d(A, \ell') < d(P, \ell)$, contradiciendo la minimalidad. $\blacksquare$

Este teorema fue **conjeturado por Sylvester** en 1893 y permaneció abierto hasta que Gallai lo demostró en 1944, con esta elegantísima prueba.

## Ejemplo

**Ejemplo (combinatoria).** En un grupo de $n$ personas, ciertas parejas son amigas. Si toda persona tiene al menos un amigo, existen dos personas con exactamente el **mismo número** de amigos.

**Solución.** El número de amigos de cada persona está entre $1$ y $n - 1$ (al menos uno por hipótesis, y como máximo $n - 1$). Son $n - 1$ valores posibles para $n$ personas. Por palomar, dos personas comparten valor. $\blacksquare$

(Este no usa el extremo explícitamente, pero es de la misma familia: argumento por finitud.)

**Ejemplo (geometría).** En un plano hay $n \geq 3$ puntos, no todos colineales. Demostrar que existe un triángulo formado por tres de ellos cuya **área es máxima**, y que tiene la siguiente propiedad: ningún otro punto del conjunto está en el interior de los tres triángulos formados al unir un cuarto punto con dos vértices del original.

(La idea: si un punto $D$ estuviera, el triángulo formado con dos vértices de $ABC$ podría ser mayor — contradicción.)

## Aplicaciones

### Descenso infinito

La aplicación arquetípica del extremo es el **descenso infinito**: para probar que no hay solución a una ecuación diofántica, asume la existencia y construye una solución estrictamente menor, generando una sucesión decreciente infinita en $\mathbb N$ — imposible.

Ejemplo: la irracionalidad de $\sqrt 2$ por descenso. Si $\sqrt 2 = p/q$ con $\gcd(p, q) = 1$ y la solución mínima, entonces $2q^2 = p^2 \Rightarrow 2 \mid p$, así que $p = 2p'$ y $q^2 = 2p'^2$, ahora $2 \mid q$, contradiciendo $\gcd(p, q) = 1$.

### Combinatoria extremal

**Erdős-Ko-Rado**, **Sperner**, **Dilworth** — todos los teoremas extremales de combinatoria usan el principio del extremo en sus demostraciones (o sus consecuencias).

### Procesos discretos

En problemas con procesos repetitivos (algoritmos, evoluciones, juegos), considerar la configuración "más extrema" alcanzable suele simplificar dramáticamente el análisis.

## Observación

Lo bonito del extremo es que **siempre es libre**: si tu problema involucra cualquier conjunto finito o cualquier subconjunto no vacío de $\mathbb N$, puedes invocarlo sin condiciones. Su única dificultad es **inventar qué magnitud minimizar** — esa elección es donde reside el ingenio.

## Problemas relacionados

- **IMO 1986/1.** Sea $d$ un entero positivo distinto de 2, 5, 13. Demostrar que existen $a, b \in \{2, 5, 13, d\}$ con $a \neq b$ tales que $ab - 1$ no es cuadrado perfecto. (Argumento por extremo sobre el divisor)
- **Putnam 1971/B5.** Caracterización de polígonos por mínimos.
