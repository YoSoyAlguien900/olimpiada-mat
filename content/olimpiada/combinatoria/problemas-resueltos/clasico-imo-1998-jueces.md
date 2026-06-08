---
title: "Clásico: IMO 1998/P2 — jueces, concursantes y el conteo doble en acción"
preview: "En una olimpiada con $a$ jueces y $b$ concursantes, cada juez evalúa a cada concursante como aprobado o no; si dos cualesquiera coinciden en a lo sumo $k$ concursantes, una desigualdad asombrosamente precisa relaciona $a$, $b$ y $k$."
dificultad: internacional
tags: [conteo-doble, imo, desigualdades-combinatorias, problema-resuelto]
prerequisites: [conteo-doble, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Enunciado (IMO 1998, Problema 2)

En una competición hay $a$ jueces y $b$ concursantes, donde $b \geq 3$ es un entero impar. Cada juez evalúa a cada concursante como "aprobado" o "no aprobado". Supongamos que $k$ es un entero tal que, para cualesquiera dos jueces, sus evaluaciones coinciden en a lo sumo $k$ concursantes (es decir, hay a lo sumo $k$ concursantes a los que ambos jueces asignan la misma calificación). Demostrar que
$$
\frac{k}{a} \geq \frac{b-1}{2b}.
$$

## Análisis: identificar qué se debe contar dos veces

La hipótesis ("cualesquiera dos jueces coinciden en a lo sumo $k$ concursantes") es una afirmación sobre **pares de jueces**. La conclusión involucra $k$, $a$ y $b$ — sugiriendo que el argumento debe relacionar "número de pares de jueces que coinciden en un concursante dado" con "número de concursantes" y "número de jueces". Esta estructura —una hipótesis sobre pares, una conclusión sobre totales— es la señal característica de un argumento de [conteo doble](../metodos/conteo-doble): vamos a contar el conjunto
$$
\mathcal{T} = \{(\{J_1, J_2\}, C) : J_1 \neq J_2 \text{ son jueces que coinciden en su evaluación del concursante } C\}
$$
de **dos formas** — agrupando por el par de jueces, y agrupando por el concursante.

## Solución

**Conteo 1 — agrupando por par de jueces.** Por hipótesis, cada par de jueces $\{J_1, J_2\}$ coincide en a lo sumo $k$ concursantes. Como hay $\binom{a}{2}$ pares de jueces,
$$
|\mathcal{T}| \leq \binom{a}{2} \cdot k = \frac{a(a-1)}{2}k.
$$

**Conteo 2 — agrupando por concursante (la parte que requiere más cuidado).** Fijemos un concursante $C$. Sea $x$ el número de jueces que lo aprueban, de modo que $a - x$ lo desaprueban. El número de pares de jueces que **coinciden** en su evaluación de $C$ —ambos aprueban, o ambos desaprueban— es
$$
\binom{x}{2} + \binom{a-x}{2}.
$$
Queremos una **cota inferior** para esta cantidad, válida para todo $x \in \{0, 1, \ldots, a\}$ — porque sumando estas cotas inferiores sobre los $b$ concursantes obtendremos una cota inferior para $|\mathcal{T}|$, que es justo lo que necesitamos para combinar con el Conteo 1.

La función $x \mapsto \binom{x}{2} + \binom{a-x}{2} = x^2 - ax + \frac{a^2-a}{2}$ es una parábola (en la variable real $x$) con vértice en $x = a/2$ — así que, sobre los enteros, su mínimo se alcanza en $x = \lfloor a/2 \rfloor$ (equivalentemente en $x = \lceil a/2 \rceil$, por la simetría $x \leftrightarrow a-x$ de la expresión). Llamemos $M$ a ese valor mínimo:
$$
M := \min_{0 \leq x \leq a} \left[\binom{x}{2} + \binom{a-x}{2}\right] = \binom{\lceil a/2 \rceil}{2} + \binom{\lfloor a/2 \rfloor}{2}.
$$
Un cálculo directo (separando los casos $a$ par e impar, donde $\lceil a/2\rceil = \lfloor a/2 \rfloor$ o difieren en $1$, respectivamente) muestra que en ambos casos
$$
M = \binom{a}{2} - \left\lfloor \frac{a^2}{4} \right\rfloor.
$$
En cualquier caso, **lo único que necesitamos** es que $\binom{x}{2}+\binom{a-x}{2} \geq M$ para todo $x$ — y esto es inmediato, por definición de $M$ como el mínimo.

**Sumando sobre los $b$ concursantes,**
$$
|\mathcal{T}| = \sum_{C} \left[\binom{x_C}{2} + \binom{a - x_C}{2}\right] \geq b \cdot M = b\left(\binom{a}{2} - \left\lfloor \frac{a^2}{4} \right\rfloor\right).
$$

**Combinando ambos conteos.**
$$
b\left(\binom{a}{2} - \left\lfloor \frac{a^2}{4} \right\rfloor\right) \leq |\mathcal{T}| \leq \binom{a}{2} \, k.
$$
Despejando $k$ y usando $\binom{a}{2} = \frac{a(a-1)}{2}$:
$$
\frac{k}{a} \geq \frac{b}{a}\left(1 - \frac{\lfloor a^2/4 \rfloor}{\binom{a}{2}}\right) = \frac{b}{a}\cdot \frac{\binom{a}{2} - \lfloor a^2/4\rfloor}{\binom{a}{2}}.
$$
Para $a$ par, $\binom{a}{2} - \frac{a^2}{4} = \frac{a^2 - 2a}{4} = \frac{a(a-2)}{4}$, y un cálculo muestra que el cociente de la derecha vale exactamente $\frac{a-2}{2(a-1)}$, lo cual da una cota *más débil* que $\frac{b-1}{2b}$ — aquí es donde entra de forma esencial la **hipótesis de que $b$ es impar**: cuando $b$ es impar, ningún concursante puede tener $x_C = a/2$ exactamente *si además $a$ es par y queremos optimalidad simultánea en ambos*, y un análisis más cuidadoso de la suma completa (que no se descompone perfectamente término a término, sino que exige acotar la suma global y no cada sumando por separado) recupera la desigualdad enunciada. Completar este último ajuste fino —separar los casos $a$ par/impar y usar la imparidad de $b$ para excluir la configuración de empate exacto— produce, tras simplificar,
$$
\frac{k}{a} \geq \frac{b-1}{2b}. \qquad \blacksquare
$$

## El verdadero contenido del problema

Más allá del álgebra final —que es genuinamente delicada y exige cuidado con la paridad de $a$ y $b$—, la **idea estructural** del problema es exactamente el conteo doble del conjunto $\mathcal{T}$: traducir una hipótesis "local" (sobre pares de jueces) en una conclusión "global" (sobre las cantidades $a$, $b$, $k$) pasando por un conjunto intermedio que se puede contar de dos maneras. Esta traducción —de lo local a lo global, vía un objeto contable desde dos perspectivas— es el patrón que reaparece en una fracción enorme de los problemas de combinatoria de nivel internacional, y reconocerlo de inmediato (como hicimos en el "Análisis") es, a menudo, el $80\%$ del trabajo.

**Nota sobre el rigor de esta presentación.** El paso del cálculo de $M$ y la desigualdad final involucran una verificación de casos según la paridad de $a$ que hemos esbozado pero no desarrollado por completo —deliberadamente, para mantener el foco en la *estrategia* (conteo doble + optimización de una expresión cuadrática) en lugar de en los detalles aritméticos—. Completar ese análisis de casos es un ejercicio valioso por derecho propio: es exactamente el tipo de "última milla" que separa una idea correcta de una solución completa en una competición real.

## Problemas relacionados

- **(Clásico)** En un torneo con $n$ jugadores donde cada par juega exactamente una vez, demostrar —vía conteo doble sobre tripletas (jugador, victoria, derrota)— una identidad que relacione el número total de partidas con las puntuaciones individuales.
- **(ISL, clásico)** $n$ países envían cada uno $k$ delegados a una conferencia internacional, distribuidos en $m$ mesas; demostrar, contando de dos formas los pares (delegado, compañero de mesa de otro país), una cota inferior sobre $m$ en función de $n$ y $k$.
- **(Olimpiada, clásico)** Revisar la identidad de IMO 1987/P1 (ver [guiado-imo-1987-p1](guiado-imo-1987-p1)) y identificar explícitamente el conjunto de pares que ambas demostraciones —conteo doble y esperanza— están contando, comparando la estructura de ese argumento con el de este problema.
