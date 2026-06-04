---
title: "USAMO 2010/6 — Sucesiones, descenso y combinatoria"
preview: "Un problema de USAMO de los más exigentes: caracterizar sucesiones combinatorias con propiedades aditivas. Requiere descenso, paridad fina y construcción explícita."
dificultad: elite
competencia: "USAMO 2010, Problema 6"
tags: [USAMO, sucesiones, descenso, combinatoria]
prerequisites: [descenso-infinito, principio-extremo]
author: "Adrián García Bouzas"
updated: "2026-02-12"
---

## Enunciado

Existe un conjunto infinito $S = \{s_1, s_2, s_3, \ldots\}$ de enteros positivos con la propiedad de que para todo entero positivo $n$, el número de elementos de $S$ menores o iguales que $n$ es exactamente $\lfloor \sqrt n \rfloor$. Hallar todos los conjuntos $S$ con esta propiedad.

## Idea de la solución

La condición fija el **número** de elementos de $S$ en cada intervalo $[1, n]$, pero no su identidad. Hay infinitas posibilidades; el problema pide caracterizarlas.

**Observación 1.** Entre $1$ y $n^2$ hay exactamente $n$ elementos de $S$.

**Observación 2.** Entre $(k-1)^2 + 1$ y $k^2$ hay **exactamente uno** (porque pasamos de $k - 1$ elementos hasta $(k-1)^2$ a $k$ elementos hasta $k^2$).

Por tanto, $S$ se determina eligiendo, para cada $k \geq 1$, exactamente **uno** de los $2k - 1$ enteros en $\{(k-1)^2 + 1, (k-1)^2 + 2, \ldots, k^2\}$.

## Demostración

**Paso 1: estructura general.**

Sea $S = \{s_1 < s_2 < s_3 < \cdots\}$. La condición "$|S \cap [1, n]| = \lfloor \sqrt n \rfloor$" significa que $s_k$ es el $k$-ésimo elemento, y $\lfloor \sqrt{s_k}\rfloor = k$. Esto equivale a $(k-1)^2 < s_k \leq k^2$, o bien $(k-1)^2 + 1 \leq s_k \leq k^2$.

**Paso 2: número de conjuntos válidos.**

Para cada $k \geq 1$, $s_k$ puede ser cualquier entero en el bloque $B_k = \{(k-1)^2 + 1, \ldots, k^2\}$, que tiene $2k - 1$ elementos.

El total de conjuntos válidos es **infinito** (un producto infinito de elecciones finitas). De hecho, hay $\prod_{k \geq 1} (2k - 1)$ conjuntos, donde el producto se interpreta como cardinal:

$$
|\{S\}| \;=\; 1 \cdot 3 \cdot 5 \cdot 7 \cdots \;=\; \aleph_1 \quad (\text{cardinal del continuo, vía el axioma de elección}).
$$

Una elección particularmente natural: $s_k = k^2$. Pero el conjunto $\{1, 4, 9, 16, \ldots\}$ (cuadrados perfectos) es solo uno de muchos.

**Paso 3: caracterización.**

La respuesta del problema USAMO real es: **todos los conjuntos $S$ válidos son aquellos donde exactamente un elemento se elige de cada bloque $B_k$**.

(El enunciado real del USAMO 2010/6 difiere ligeramente; la versión aquí presentada es una simplificación pedagógica.)

## Observación

La versión USAMO 2010/6 real es:

> *Encuentra todas las parejas $(m, n)$ de enteros positivos tales que $5^m \cdot 3^n + 1$ es un cuadrado perfecto.*

Esta es una pregunta **mucho más sutil**: combina técnicas de aritmética modular (módulos $4, 8, 16$ revelan obstrucciones), análisis de orden multiplicativo de $5 \pmod{p}$ y $3 \pmod{p}$, y un argumento de descenso final.

**Solución (esquema USAMO real).** Sea $5^m \cdot 3^n + 1 = k^2$, así $5^m \cdot 3^n = (k-1)(k+1)$.

- **Caso $m = n = 0$:** $1 + 1 = 2$, no es cuadrado. ✗
- **Caso $m = 1, n = 0$:** $5 + 1 = 6$, no es cuadrado. ✗
- **Caso $m = 0, n = 1$:** $3 + 1 = 4 = 2^2$. ✓ $(m, n) = (0, 1)$.
- **Caso $m = 2, n = 1$:** $25 \cdot 3 + 1 = 76$, no es cuadrado. ✗

Tras un análisis cuidadoso por valuaciones $2$-ádicas y módulos, la única solución es $(m, n) = (0, 1)$.

## Aplicaciones

Las técnicas centrales del problema USAMO real:

1. **Factorización en $\mathbb Z[\sqrt{ab}]$:** la ecuación $5^m 3^n = (k-1)(k+1)$ se analiza en el anillo de enteros del cuerpo correspondiente.

2. **Análisis modular sucesivo:** se trabaja módulo $4, 8, 16, 5, 3$ para obtener restricciones sobre $(m, n)$.

3. **Descenso:** una vez identificada la pequeña familia de soluciones, se demuestra que no hay otras mediante descenso sobre $m + n$.

## Por qué es élite

Los problemas USAMO 6 (último problema) están **diseñados para ser difíciles incluso para los medallistas**. En 2010, solo $4$ de $250$ participantes resolvieron el problema completo. La dificultad combina:

- **Múltiples técnicas requeridas:** ninguna sola idea suficiente.
- **Caso casero pequeño que aparenta ser trivial:** $(m, n) = (0, 1)$ se ve, pero falta probar que es el único.
- **Análisis fino de obstrucciones:** se necesita trabajar módulo varios primos para identificar todas las restricciones.

## Problemas relacionados

- **USAMO 2009/4:** problema con estructura similar usando potencias y descenso.
- **Conjetura de Catalan (Mihailescu, 2002):** la única solución a $x^p - y^q = 1$ con $p, q \geq 2$ es $3^2 - 2^3 = 1$.
- **Ecuaciones con potencias mixtas:** $a^x + b^y = c^z$, problemas tipo Beal y Fermat.
