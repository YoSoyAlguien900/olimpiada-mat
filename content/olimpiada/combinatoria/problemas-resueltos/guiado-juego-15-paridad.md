---
title: "Guiado: el juego del 15 y la paridad de las permutaciones"
preview: "El clásico rompecabezas deslizante esconde un invariante algebraico —la paridad de una permutación— que decide, sin ambigüedad, qué configuraciones son alcanzables y cuáles son un sueño imposible."
dificultad: nacional
tags: [invariantes, permutaciones, paridad, problema-resuelto]
prerequisites: [invariantes-y-coloracion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Enunciado

El **juego del 15** consiste en una caja cuadrada de $4\times 4$ con $15$ fichas numeradas del $1$ al $15$ y una casilla vacía. Un movimiento válido consiste en deslizar una ficha adyacente a la casilla vacía hacia esa casilla (intercambiando sus posiciones). Partiendo de la configuración "resuelta" —fichas en orden, de izquierda a derecha y de arriba a abajo, con la casilla vacía en la esquina inferior derecha— ¿es posible alcanzar, mediante una sucesión de movimientos válidos, la configuración idéntica salvo que las fichas $14$ y $15$ están intercambiadas?

## Análisis: ¿qué cantidad podría quedar invariante?

Cada movimiento es, en esencia, un **intercambio (transposición)** entre la posición de una ficha y la posición vacía. Esto sugiere de inmediato un objeto algebraico: la configuración del tablero, vista como una permutación de $16$ símbolos (las $15$ fichas más el "hueco"), y la cuestión de qué le ocurre a esa permutación —específicamente, a su **paridad**— con cada movimiento.

Recordemos el hecho algebraico central: toda permutación se puede escribir como un producto de transposiciones, y aunque la *cantidad* de transposiciones usadas no es única, su **paridad** (par o impar) sí lo es — este es el contenido del **lema de la paridad de las permutaciones**, y es precisamente el tipo de "invariante algebraico" que [invariantes-y-coloracion](../metodos/invariantes-y-coloracion) identifica como una de las grandes familias de invariantes combinatorios.

## Solución

**Paso 1 — Modelar el juego algebraicamente.** Numeramos las $16$ casillas del tablero de $1$ a $16$ (por ejemplo, recorriéndolas por filas), y consideramos el "hueco" como una ficha más, etiquetada $16$. Cada configuración del tablero corresponde entonces a una permutación $\sigma$ de $\{1, \ldots, 16\}$ (qué ficha está en cada casilla). Un movimiento válido —deslizar una ficha adyacente al hueco— intercambia las posiciones de esa ficha y del hueco: algebraicamente, **compone $\sigma$ con una transposición** $\tau = (i\ j)$, donde $i$ es la posición del hueco e $j$ es la posición de la ficha deslizada (que deben ser adyacentes en el tablero).

**Paso 2 — Identificar el invariante candidato.** Cada movimiento multiplica la permutación actual por una transposición, lo cual **cambia la paridad** de la permutación (toda transposición es una permutación impar, y componer con una transposición invierte la paridad del producto — este es exactamente el lema de la paridad). Por tanto, tras $m$ movimientos, la paridad de $\sigma$ es la paridad inicial compuesta con $(-1)^m$.

Esto, por sí solo, no produce un invariante —la paridad de $\sigma$ cambia en cada paso—. Pero hay una segunda cantidad que también cambia en cada movimiento, de forma sincronizada: **la paridad de la distancia (en pasos de torre) entre la posición del hueco y la esquina inferior derecha**. Cada movimiento desplaza el hueco a una casilla adyacente, cambiando esa distancia en $\pm 1$ — es decir, cambiando también su paridad en cada paso.

**El invariante verdadero** es, entonces, el **producto** (o equivalentemente, la suma módulo $2$) de estas dos paridades:
$$
I(\text{configuración}) := \big(\text{paridad de } \sigma\big) + \big(\text{paridad de la distancia del hueco a la esquina inferior derecha}\big) \pmod 2.
$$
Como ambos sumandos cambian en cada movimiento, su suma módulo $2$ **permanece constante**. $I$ es un invariante genuino del juego.

**Paso 3 — Calcular $I$ en ambas configuraciones.**

- *Configuración inicial (resuelta):* $\sigma = \text{identidad}$ (paridad par, es decir $0$), y el hueco está en la esquina inferior derecha (distancia $0$, paridad par, $0$). Luego $I = 0 + 0 = 0$.
- *Configuración objetivo (con $14$ y $15$ intercambiadas):* $\sigma$ es la identidad compuesta con la transposición $(14\ 15)$ — una **transposición simple**, de paridad **impar** ($1$). El hueco sigue en la esquina inferior derecha (distancia $0$, paridad par, $0$). Luego $I = 1 + 0 = 1$.

**Conclusión.** Las dos configuraciones tienen valores distintos del invariante $I$ ($0$ frente a $1$). Como $I$ se preserva en cada movimiento, **es imposible** pasar de una a otra mediante una sucesión de movimientos válidos. $\blacksquare$

## Por qué el invariante "correcto" no era el obvio

Vale la pena detenerse en la estructura de este argumento, porque ilustra una lección general sobre el diseño de invariantes (ver la sección de heurísticas en [invariantes-y-coloracion](../metodos/invariantes-y-coloracion)): la **paridad de la permutación por sí sola no es un invariante** —cambia en cada movimiento—, pero **se puede combinar** con otra cantidad que cambia "al mismo ritmo" para producir una combinación que sí lo es. Este patrón —"ninguna de las dos cantidades es invariante por separado, pero su combinación adecuada sí lo es"— es uno de los recursos más sutiles y más poderosos en el diseño de invariantes, y reaparece en problemas de coloración con varios colores, en problemas de fichas con movimientos de paridad mixta, y en invariantes algebraicos sobre $\mathbb{Z}/n\mathbb{Z}$ para $n$ compuesto.

## Una consecuencia notable: la clasificación completa

El argumento anterior, refinado, demuestra algo más fuerte: **una configuración es alcanzable desde la posición resuelta si y solo si $I = 0$** (la suficiencia —que toda configuración con $I=0$ es alcanzable— requiere una construcción explícita adicional, típicamente mediante "ciclos de tres" que no alteran la posición del hueco y permiten reorganizar fichas preservando la paridad). Esto significa que **exactamente la mitad** de las $16!$ configuraciones posibles del tablero son alcanzables desde cualquier configuración dada — un hecho que, sin el lenguaje de la paridad de permutaciones, sería extraordinariamente difícil siquiera de conjeturar.

## Problemas relacionados

- **(Clásico)** En el "cubo de Rubik" $3\times 3\times 3$, existe un invariante de paridad análogo (relacionado con la orientación de las piezas y la paridad de las permutaciones de esquinas y aristas) que explica por qué ciertas configuraciones —alcanzables si se desarma y rearma el cubo incorrectamente— son inalcanzables mediante giros legales. Investigar la estructura general de este invariante.
- **(Clásico)** En una fila de $2n$ monedas, algunas cara arriba y otras cruz, un movimiento consiste en voltear dos monedas adyacentes simultáneamente. Determinar, mediante un invariante de paridad, qué configuraciones son alcanzables desde "todas cara arriba".
- **(Olimpiada, clásico)** Generalizar el argumento de este problema al "juego del $(n^2-1)$" sobre un tablero $n \times n$: demostrar que la condición de alcanzabilidad depende de la paridad de $n$ de una forma sutil, y describir exactamente cómo.
