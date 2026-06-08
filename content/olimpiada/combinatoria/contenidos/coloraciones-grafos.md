---
title: "Coloraciones de grafos y el polinomio cromático"
preview: "¿Cuántos colores hacen falta para que ningún par de vértices vecinos comparta color? Una pregunta de apariencia recreativa que organiza la teoría estructural de grafos —y produce el célebre teorema de los cuatro colores."
dificultad: nacional
tags: [grafos, coloracion, cromatico, bipartito, cuatro-colores]
prerequisites: [grafos-fundamentos]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Una **coloración propia** de un grafo $G = (V,E)$ con $k$ colores es una función $c : V \to \{1,\ldots,k\}$ tal que $c(u) \neq c(v)$ siempre que $\{u,v\} \in E$. El **número cromático** $\chi(G)$ es el menor $k$ para el cual existe tal coloración.

El **polinomio cromático** $P(G, k)$ cuenta el número de coloraciones propias de $G$ con (a lo sumo) $k$ colores disponibles —no necesariamente usando todos—. Es, en efecto, un polinomio en $k$, lo cual ya es un hecho no trivial que debe demostrarse.

## Teorema

**1. Cota elemental.** $\displaystyle \chi(G) \leq \Delta(G) + 1$, donde $\Delta(G) = \max_v \deg(v)$.

**2. Caracterización bipartita.** $\chi(G) \leq 2$ si y solo si $G$ no contiene ciclos de longitud impar (equivalentemente, $G$ es bipartito).

**3. Recurrencia de eliminación-contracción.** Para cualquier arista $e = \{u,v\}$,
$$
P(G, k) = P(G - e, k) - P(G / e, k),
$$
donde $G - e$ es $G$ sin la arista $e$ y $G/e$ es $G$ con $u$ y $v$ identificados (contraídos) en un solo vértice.

**4. $P(G,k)$ es un polinomio mónico de grado $|V|$ con coeficientes enteros alternantes**, y $P(G,k) = k(k-1)^{n-1}$ si $G$ es un árbol con $n$ vértices.

**5. Teorema de los cuatro colores (Appel–Haken, 1976).** Todo grafo planar satisface $\chi(G) \leq 4$.

## Demostración

**(1) Cota por grado máximo.** Algoritmo voraz: ordena los vértices arbitrariamente y asígnales colores en ese orden, dando a cada uno el menor color no usado por sus vecinos ya coloreados. Como cada vértice tiene a lo sumo $\Delta(G)$ vecinos, siempre queda al menos un color disponible entre los $\Delta(G)+1$. $\square$

**(2) Caracterización bipartita.** *(Necesidad)* Si $G$ tiene un ciclo de longitud impar $v_1 v_2 \cdots v_{2m+1} v_1$, una coloración propia con $2$ colores debe alternar a lo largo del ciclo —pero un ciclo de longitud impar fuerza $c(v_1) \neq c(v_1)$, contradicción—. *(Suficiencia)* Si $G$ no tiene ciclos impares, fijamos un vértice $v_0$ en cada componente conexa y coloreamos cada vértice $u$ según la **paridad de la distancia** (longitud del camino más corto) de $u$ a $v_0$. Dos vértices adyacentes $u, w$ tienen distancias a $v_0$ que difieren en exactamente $1$ —si difirieran en más, o fueran iguales, se podría cerrar un ciclo de longitud impar usando la arista $\{u,w\}$ y los caminos más cortos a $v_0$—, así que reciben colores distintos. $\blacksquare$

**(3) Eliminación-contracción.** Las coloraciones propias de $G - e$ con $k$ colores se dividen en dos clases disjuntas: aquellas en que $c(u) \neq c(v)$ (que son automáticamente coloraciones propias de $G$, pues la única arista "nueva" $e$ también queda bien coloreada) y aquellas en que $c(u) = c(v)$ (que corresponden exactamente a las coloraciones propias de $G/e$, identificando $u$ y $v$). Por tanto $P(G-e, k) = P(G,k) + P(G/e, k)$, de donde se sigue la fórmula. $\square$

**(4) Polinomialidad y grado.** Inducción sobre $|E|$ usando (3): el grafo sin aristas tiene $P(\overline{K_n}, k) = k^n$ (polinomio mónico de grado $n$); cada paso de eliminación-contracción resta un polinomio de grado estrictamente menor (pues $G/e$ tiene un vértice menos), preservando el monomio líder $k^n$ y produciendo coeficientes enteros con signos alternantes por la resta repetida. Para un árbol, basta observar que cada arista, una vez fijado el color de un extremo, deja $k-1$ opciones para el otro —y un árbol con $n$ vértices tiene $n-1$ aristas, todas "libres" gracias a la ausencia de ciclos—. $\blacksquare$

## Ejemplo

**Ejemplo 1.** $\chi(K_n) = n$: cada par de vértices es adyacente, así que todos requieren colores distintos. Y $P(K_n, k) = k(k-1)(k-2)\cdots(k-n+1) = k^{\underline n}$.

**Ejemplo 2.** $\chi(C_n) = 2$ si $n$ es par, $\chi(C_n) = 3$ si $n$ es impar (donde $C_n$ es el ciclo de $n$ vértices) — consecuencia inmediata de la caracterización bipartita.

**Ejemplo 3.** $\chi(K_{m,n}) = 2$ para $m, n \geq 1$: un grafo bipartito completo no tiene ciclos impares.

**Ejemplo 4 (mapas y coloración).** Un mapa político se modela como un **grafo planar** (países = vértices, fronteras compartidas = aristas); colorear el mapa de modo que países vecinos tengan colores distintos es exactamente colorear ese grafo. El teorema de los cuatro colores afirma que **cuatro colores siempre bastan** —resultado célebre por ser el primer teorema matemático importante demostrado con asistencia computacional masiva (más de mil configuraciones verificadas por ordenador).

## Aplicaciones

### Coloración como certificado de imposibilidad

La estrategia más frecuente en problemas olímpicos no es *calcular* $\chi(G)$, sino usar una coloración (a menudo de $2$ colores, blanco y negro tipo tablero de ajedrez) como **invariante que certifica la imposibilidad** de cierta configuración. Esta es la idea central del método de [invariantes y coloración](../metodos/invariantes-y-coloracion), del que la coloración propia de grafos es la formalización estructural.

**Problema.** Demostrar que un tablero de ajedrez $8\times 8$ al que se le quitan dos esquinas opuestas no se puede cubrir exactamente con fichas de dominó $1\times 2$.

**Solución.** El coloreado estándar de ajedrez asigna $32$ casillas blancas y $32$ negras; las dos esquinas opuestas tienen el **mismo** color, así que el tablero mutilado tiene $30$ de un color y $32$ del otro. Cada ficha de dominó cubre exactamente una casilla de cada color, así que cualquier cubrimiento debe usar números iguales de cada uno —imposible aquí—. $\blacksquare$ *(Desarrollado con todo detalle en* [guiado-tablero-mutilado](../problemas-resueltos/guiado-tablero-mutilado)*.)*

### Número cromático y estructuras "libres de triángulos"

**Problema (Mycielski, esquema).** Para todo $k$, existe un grafo sin triángulos con $\chi(G) = k$.

**Idea.** La construcción de Mycielski produce, a partir de un grafo $G$ libre de triángulos con $\chi(G) = k$, un grafo $\mu(G)$ también libre de triángulos pero con $\chi(\mu(G)) = k+1$. Esto demuestra que **la ausencia de subgrafos pequeños "obvios" no acota el número cromático** —un fenómeno contraintuitivo que conecta con la [teoría extremal de grafos](teoria-extremal-conjuntos) (teorema de Ramsey: grafos sin estructuras pequeñas pueden, aun así, ser globalmente "complejos").

### El polinomio cromático como invariante algebraico

Evaluar $P(G,k)$ en valores especiales produce información estructural: $P(G, 0) = 0$ siempre; $P(G,1) = 0$ a menos que $G$ no tenga aristas; el coeficiente de $k^{n-1}$ en $P(G,k)$ es $-|E|$; y $G$ es conexo si y solo si $(-1)^{n-1}P(G,-1)$ cuenta el número de **orientaciones acíclicas** de $G$ (teorema de Stanley). Estas conexiones son el punto de entrada a la teoría de **matroides** y a la combinatoria algebraica de grafos.

## Observación

El número cromático es notoriamente difícil de calcular en general (decidir si $\chi(G) \leq 3$ es **NP-completo**), pero las dos cotas elementales —$\chi(G) \leq \Delta(G)+1$ y la caracterización bipartita— bastan para resolver la inmensa mayoría de los problemas de coloración que aparecen en olimpiadas. La lección estructural es que **acotar es fácil; calcular exactamente es difícil**: en el contexto de un examen, casi siempre basta con producir una coloración explícita (cota superior) y un argumento de obstrucción —un ciclo impar, una clique— (cota inferior), y verificar que coinciden.

## Problemas relacionados

- **(Clásico)** Probar que si $G$ es planar entonces $\chi(G) \leq 6$ usando que todo grafo planar tiene un vértice de grado $\leq 5$ (consecuencia de la fórmula de Euler $V - E + F = 2$).
- **(Clásico)** Demostrar que $\chi(G) \cdot \alpha(G) \geq |V(G)|$, donde $\alpha(G)$ es el tamaño del mayor conjunto independiente (sin aristas internas).
- **(IMO 2007/P3, esquema)** En una competición hay $n > 2$ alumnos y problemas que pueden resolverse con "sí" o "no"... *(problema de coloración/estructura combinatoria sobre matrices de respuestas; requiere traducir el enunciado a un argumento de tipo grafo/coloración).*
- **(Clásico)** Probar que todo grafo con $\chi(G) = k$ contiene un subgrafo en el que todo vértice tiene grado $\geq k - 1$.
- **(Clásico)** Calcular el polinomio cromático del ciclo $C_n$ y verificar que $P(C_n, k) = (k-1)^n + (-1)^n (k-1)$.
