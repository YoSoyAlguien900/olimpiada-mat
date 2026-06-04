---
title: "Colección IMO y shortlist — selección clásica"
preview: "Veinte problemas internacionales (IMO, ISL, IMO TST) seleccionados como entrenamiento de nivel internacional. Cada uno presenta una idea técnica reconocible: identifícala, no la copies."
dificultad: internacional
tags: [coleccion, IMO, shortlist, internacional]
prerequisites: [orden-multiplicativo, lifting-the-exponent, inversion]
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

Veinte problemas de competiciones internacionales (IMO, ISL, USA TST, Romanian TST, China MO) seleccionados para introducir las técnicas de nivel internacional. **No esperes resolverlos en una sentada**: un problema IMO bien atacado lleva entre dos y cinco horas a alguien preparado. La lectura de cada enunciado debería sugerir inmediatamente una *clase* de técnica relevante.

## Teoría de números

**1. IMO 1988/6.** Si $a, b$ son enteros positivos tales que $ab + 1 \mid a^2 + b^2$, demostrar que $\frac{a^2 + b^2}{ab + 1}$ es un cuadrado perfecto. *(Salto del descenso de Vieta — el problema más famoso de la historia.)*

**2. IMO 2003/6.** Sea $p$ un primo. Demostrar que existen infinitos $n$ tales que $p \mid 2^n - n$. *(Construcción y LTE.)*

**3. ISL 2014/N3.** Para cada entero $n \geq 2$, sea $A_n$ el número de enteros positivos $m$ tales que la distancia de $n$ al múltiplo de $m$ más cercano es menor que la distancia de $n$ al cuadrado más cercano de $m$. Para qué $n$ es $A_n$ impar. *(Análisis combinatorio fino.)*

**4. USA TST 2010/3.** Demostrar que existe un conjunto infinito $S$ de enteros positivos tal que para todo subconjunto finito $T \subset S$, el número $\sum_{t \in T} t$ es libre de cuadrados. *(Construcción tipo greedy.)*

**5. IMO 2019/4.** Hallar todos los pares $(k, n)$ de enteros positivos tales que $k! = (2^n - 1)(2^n - 2)(2^n - 4) \cdots (2^n - 2^{n-1})$. *(Cotas y valuación.)*

## Combinatoria

**6. IMO 2007/3.** En un torneo matemático hay un cierto número de participantes. Algunos compitieron entre sí... *(Grafos extremales.)*

**7. ISL 2018/C5.** Hallar el menor entero $k$ con la propiedad de que existen $k$ enteros positivos $a_1 < a_2 < \cdots < a_k$ con $\sum 1/a_i^2 = 51/2020$. *(Construcción y cota greedy.)*

**8. IMO 2015/6.** La sucesión $a_1, a_2, \ldots$ está definida por $a_1 = a$ y $a_{n+1} = a_n - 1/a_n$ si $a_n \neq 0$. Hallar todos los $a$ reales tales que la sucesión es periódica. *(Sistemas dinámicos discretos.)*

**9. ISL 2017/C4.** Una secuencia de enteros positivos $a_1, a_2, \ldots, a_n$ se llama *balanceada* si... *(Argumento extremal con dependencia mutua.)*

**10. IMO 2020/4.** Hay un país con $2^n$ aeropuertos. *(Combinatoria con paridad sutil.)*

## Geometría

**11. IMO 2009/2.** Sea $ABC$ un triángulo con circuncentro $O$. Los puntos $P, Q$ están en $CA, AB$ respectivamente. *(Lema del incentro, puntos especiales.)*

**12. IMO 2014/3.** En un cuadrilátero convexo $ABCD$, $\angle ABC = \angle CDA = 90°$. Sea $H$ el pie de la perpendicular desde $A$ a $BD$. *(Inversión y reflexiones.)*

**13. ISL 2011/G5.** Sea $ABC$ un triángulo no equilátero, con circuncírculo $\Omega$. Sean $\omega_a, \omega_b, \omega_c$ las circunferencias tangentes internamente a... *(Inversión y configuraciones de tangencia.)*

**14. IMO 2018/1.** Sea $\Gamma$ el circuncírculo del triángulo acutángulo $ABC$. Los puntos $D, E$ están en los segmentos $AB, AC$ respectivamente tales que $|AD| = |AE|$. *(Reflexiones y simetrías de ángulos.)*

**15. ISL 2019/G6.** Sea $ABCD$ un cuadrilátero convexo cíclico con circuncírculo $\Omega$. Sean $E = AC \cap BD$, $F = AD \cap BC$. *(Configuración compleja, requiere análisis multietapa.)*

## Álgebra y desigualdades

**16. IMO 2001/2.** Sean $a, b, c$ reales positivos. Demostrar que $\frac{a}{\sqrt{a^2 + 8bc}} + \frac{b}{\sqrt{b^2 + 8ca}} + \frac{c}{\sqrt{c^2 + 8ab}} \geq 1$. *(Cauchy-Schwarz / SOS.)*

**17. IMO 2006/3.** Hallar el menor real $M$ tal que la desigualdad $|ab(a^2 - b^2) + bc(b^2 - c^2) + ca(c^2 - a^2)| \leq M(a^2 + b^2 + c^2)^2$ se cumple para todos $a, b, c$ reales. *(Lagrange y casos de igualdad.)*

**18. USA TST 2009/4.** Sea $P(x)$ un polinomio de grado $\geq 1$ con coeficientes enteros. *(Polinomios y aritmética.)*

**19. ISL 2016/A7.** Hallar todos los polinomios $P(x, y) \in \mathbb R[x, y]$ tales que $P(x+y, y-x) = P(x, y)$ para todos $x, y$ reales. *(Sustituciones inteligentes.)*

**20. IMO 2008/3.** Demostrar que existen infinitos enteros positivos $n$ tales que $n^2 + 1$ tiene un divisor primo mayor que $2n + \sqrt{2n}$. *(Análisis fino sobre la distribución de divisores primos.)*

## Cómo trabajarlos

1. **Lee y olvida.** Lee el enunciado, deja pasar un día, y luego intenta reconstruirlo de memoria. Si no puedes, no lo has entendido todavía.
2. **Cinco minutos de trabajo, cinco de descanso.** El cerebro resuelve problemas IMO mientras descansa.
3. **Por cada problema, lleva una lista de las ideas que probaste y por qué fallaron.** Esto se vuelve oro al estudiar más problemas.
4. **No leas la solución antes de 90 minutos.** Incluso si crees que el problema te supera.

## Observación

Los problemas IMO se eligen para que **una sola idea brillante** los desbloquee. Esa idea suele ser:

- Un truco algebraico no obvio (factorización, identidad polinómica).
- Una construcción auxiliar geométrica (un punto, una circunferencia, una reflexión).
- Una invariante combinatoria escondida.
- Una elección de coordenadas o sistema que rompe la simetría aparente.

Identificar **qué clase de idea** se busca es a veces más útil que encontrarla.

## Soluciones

Las soluciones oficiales y comentarios extensos están en:

- **AoPS (Art of Problem Solving)** para todos los problemas con foros de discusión.
- **IMO Compendium** (libro) con análisis técnico.
- **Evan Chen's lecture notes** (web) para una perspectiva moderna y unificada.
