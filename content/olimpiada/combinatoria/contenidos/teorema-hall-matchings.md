---
title: "Teorema de Hall y emparejamientos en grafos bipartitos"
preview: "¿Cuándo se puede asignar a cada persona un trabajo distinto de entre los que sabe hacer? La condición de Hall —simple de enunciar, profunda en sus consecuencias— responde exactamente a esta pregunta."
dificultad: internacional
tags: [hall, emparejamientos, grafos-bipartitos, sistemas-representantes, konig]
prerequisites: [grafos-fundamentos, principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Sea $G = (X \cup Y, E)$ un grafo bipartito con partes $X$ e $Y$. Un **emparejamiento** es un conjunto de aristas sin vértices comunes; es **perfecto desde $X$** (o *saturador de $X$*) si cada vértice de $X$ está cubierto.

Para $S \subseteq X$, escribimos $N(S) = \{y \in Y : \{x,y\} \in E \text{ para algún } x \in S\}$ — el conjunto de **vecinos** de $S$.

Decimos que $G$ satisface la **condición de Hall** (respecto de $X$) si
$$
|N(S)| \geq |S| \qquad \text{para todo } S \subseteq X.
$$

## Teorema

**1. Teorema de Hall (del matrimonio, 1935).** Un grafo bipartito $G = (X \cup Y, E)$ tiene un emparejamiento que satura $X$ si y solo si satisface la condición de Hall.

**2. Corolario (matrimonios estables / sistemas de representantes distintos).** Una familia de conjuntos $A_1, \ldots, A_n$ admite un **sistema de representantes distintos** —elementos distintos $a_1 \in A_1, \ldots, a_n \in A_n$— si y solo si $\left|\bigcup_{i \in S} A_i\right| \geq |S|$ para todo $S \subseteq \{1,\ldots,n\}$.

**3. Teorema de König.** En un grafo bipartito, el tamaño máximo de un emparejamiento es igual al tamaño mínimo de un **recubrimiento por vértices** (un conjunto de vértices que toca toda arista).

**4. Teorema de Hall regular.** Todo grafo bipartito $k$-regular ($k \geq 1$, todos los vértices de grado $k$) tiene un emparejamiento perfecto.

## Demostración

**(1) Hall — necesidad.** Si existe un emparejamiento que satura $X$, cada $x \in S$ está unido a un vecino distinto $f(x) \in Y$, y todos estos $f(x)$ son distintos: luego $|N(S)| \geq |\{f(x): x\in S\}| = |S|$. $\square$

**(1) Hall — suficiencia (inducción fuerte sobre $|X|$).** El caso $|X| = 1$ es trivial. Distinguimos dos casos.

*Caso 1: para todo $\varnothing \neq S \subsetneq X$, $|N(S)| \geq |S| + 1$ (la condición de Hall es "estricta" salvo para $S = X$).* Tomamos cualquier $x_0 \in X$ y cualquier vecino $y_0 \in N(\{x_0\})$; emparejamos $x_0$ con $y_0$ y eliminamos ambos. En el grafo restante $G'$, para cualquier $S \subseteq X \setminus \{x_0\}$ no vacío, $|N_{G'}(S)| \geq |N_G(S)| - 1 \geq |S|$ (se pierde a lo sumo el vecino $y_0$). La condición de Hall se preserva en $G'$, y por hipótesis de inducción $G'$ tiene un emparejamiento que satura $X \setminus \{x_0\}$; junto con $\{x_0,y_0\}$, satura $X$.

*Caso 2: existe $\varnothing \neq S \subsetneq X$ con $|N(S)| = |S|$.* Por hipótesis de inducción (aplicada al subgrafo inducido por $S \cup N(S)$, más pequeño), $S$ admite un emparejamiento que lo satura, cubriendo exactamente $N(S)$. Consideramos ahora $X' = X \setminus S$ y $Y' = Y \setminus N(S)$: para cualquier $T \subseteq X'$,
$$
|N_{G}(T \cup S)| \geq |T \cup S| = |T| + |S| \quad\text{y}\quad N_G(T \cup S) \subseteq N(S) \cup N_{G'}(T),
$$
de donde $|N_{G'}(T)| \geq |N_G(T \cup S)| - |N(S)| \geq |T|$ (donde $G'$ es el grafo inducido en $X' \cup Y'$). La condición de Hall se hereda en $G'$, y por inducción $G'$ tiene un emparejamiento que satura $X'$. Uniendo ambos emparejamientos se satura $X$. $\blacksquare$

**(2) Sistemas de representantes.** Traducción directa: $X = \{1,\ldots,n\}$, $Y = $ el conjunto universo, $E = \{\{i, a\} : a \in A_i\}$. Un emparejamiento que satura $X$ es exactamente un sistema de representantes distintos, y $N(S) = \bigcup_{i \in S} A_i$. $\square$

**(4) Hall regular.** Para cualquier $S \subseteq X$, contamos las aristas entre $S$ y $N(S)$ de dos formas: cada vértice de $S$ aporta $k$ aristas (todas hacia $N(S)$, por definición), así que hay $k|S|$ aristas; cada vértice de $N(S)$ recibe a lo sumo $k$ de ellas, así que hay a lo sumo $k|N(S)|$. Por tanto $k|S| \leq k|N(S)|$, es decir $|N(S)| \geq |S|$: la condición de Hall se cumple automáticamente, y por el teorema de Hall existe un emparejamiento saturador; por simetría de grados, es perfecto. $\blacksquare$ *(Este es un ejemplo arquetípico de* [conteo doble](../metodos/conteo-doble) *resolviendo instantáneamente lo que parecía requerir construir el emparejamiento explícitamente.)*

## Ejemplo

**Ejemplo 1 (el "problema del matrimonio").** En un pueblo hay $n$ chicos y $n$ chicas; cada chico conoce a algunas chicas. Si todo grupo de $k$ chicos conoce, en conjunto, al menos a $k$ chicas (para todo $k$), entonces es posible casar a cada chico con una chica que conoce, sin repetir — exactamente la condición de Hall.

**Ejemplo 2 (recubrimiento por dominós).** Un tablero (no necesariamente rectangular, posiblemente con casillas eliminadas) admite un cubrimiento perfecto por fichas $1\times 2$ si y solo si, viendo las casillas blancas y negras como las dos partes de un grafo bipartito (aristas = adyacencias), se satisface la condición de Hall en ambas direcciones —y, en particular, el número de casillas blancas debe igualar al de negras—. *(Comparar con el argumento de coloración del* [tablero mutilado](../problemas-resueltos/guiado-tablero-mutilado)*, que es la obstrucción de Hall más simple posible: $|N(S)| < |S|$ para $S = \{$una esquina$\}$ tras eliminar su pareja de color.)*

## Aplicaciones

### Verificar la condición de Hall: dónde buscar el conjunto "malo"

En la práctica, **probar que la condición de Hall se cumple** rara vez requiere verificar los $2^{|X|}$ subconjuntos: basta a menudo un argumento de conteo uniforme (como en la prueba del caso regular). **Refutarla**, en cambio, requiere exhibir un único conjunto "estrecho" $S$ con $|N(S)| < |S|$ —y encontrarlo suele ser la parte creativa del problema—.

**Problema.** Una baraja de $52$ cartas se reparte en $13$ montones de $4$ cartas cada uno. Demostrar que es posible elegir una carta de cada montón de modo que las $13$ cartas elegidas tengan los $13$ valores distintos (As, $2,\ldots,$ Rey).

**Solución (esquema).** Sea $X = \{$montones$\}$, $Y = \{$valores$\}$, con $i \sim v$ si el montón $i$ contiene una carta de valor $v$. Cada montón tiene $4$ cartas, así que $|N(\{i\})| \geq 1$ trivialmente; el argumento fino consiste en contar, para cualquier conjunto $S$ de montones, el número total de cartas que contienen ($4|S|$) frente al número de valores que podrían "faltar" si $|N(S)| < |S|$ —y verificar que esto fuerza una repetición de valor dentro de algún montón, lo cual es imposible (cada montón tiene $4$ cartas de valores no necesariamente distintos, pero la cuenta global de cada valor es exactamente $4$)—. Un análisis cuidadoso de conteo muestra que la condición de Hall se cumple siempre. $\blacksquare$

### De Hall a flujos: el teorema de Max-Flow Min-Cut

El teorema de König —equivalencia entre emparejamiento máximo y recubrimiento mínimo por vértices— es el caso bipartito de un fenómeno mucho más general: el **teorema de flujo máximo - corte mínimo** (Ford–Fulkerson) en redes de transporte. Esta conexión sitúa a Hall en el corazón de la **dualidad combinatoria**: muchos problemas de optimización combinatoria vienen en pares "primal-dual" donde el óptimo de uno es exactamente el óptimo del otro —un patrón que reaparece en programación lineal, en la dualidad de matroides, y en la teoría de juegos posicionales.

### Generalización: el teorema de Hall "defectuoso"

Cuando la condición de Hall *falla*, aún se puede cuantificar el déficit: el tamaño máximo de un emparejamiento es exactamente
$$
|X| - \max_{S \subseteq X} \big(|S| - |N(S)|\big)
$$
(**fórmula del déficit de Hall**, consecuencia directa del teorema aplicado a un grafo auxiliar). Esta versión cuantitativa es la que realmente se necesita en problemas que piden *el tamaño del mayor emparejamiento posible*, en lugar de solo decidir si existe uno perfecto.

## Observación

El teorema de Hall es el prototipo de una **condición necesaria que resulta ser suficiente** —un fenómeno que en combinatoria es la excepción, no la regla, y que cuando ocurre suele señalar una estructura matemática profunda (aquí, la dualidad emparejamiento–recubrimiento de König, y en última instancia la teoría de matroides de Whitney–Edmonds). Cuando un problema pregunta por la existencia de una "asignación compatible" —representantes, parejas, horarios sin solapamientos—, vale la pena preguntarse si se puede modelar como un emparejamiento bipartito: si es así, el problema de existencia se reduce, casi siempre, a verificar una única desigualdad de conteo.

## Problemas relacionados

- **(Clásico)** Probar que toda matriz $n \times n$ con entradas no negativas y todas las sumas de fila y columna iguales a $1$ (matriz doblemente estocástica con entradas racionales, escalada) es una combinación convexa de matrices de permutación. *(Teorema de Birkhoff–von Neumann; usa Hall regular repetidamente.)*
- **(Clásico)** En un grupo de $2n$ personas, cada una conoce exactamente a $n$ de las demás. Probar que se pueden sentar en una mesa redonda de modo que cada persona tenga al menos un conocido a cada lado. *(Aplicación de Hall a un grafo auxiliar de "compatibilidad de posiciones".)*
- **(ISL, clásico)** Sea $G$ un grafo bipartito $k$-regular. Probar que sus aristas se pueden particionar en $k$ emparejamientos perfectos disjuntos. *(Iterar Hall regular y eliminar el emparejamiento hallado.)*
- **(Clásico)** Demostrar el teorema de König a partir del teorema de Hall (o viceversa), explicitando la dualidad entre ambos enunciados.
- **(Olimpiada, clásico)** $2n$ delegados de $n$ países (dos por país) se sientan alrededor de una mesa circular de $2n$ sillas. Probar que se puede hacer de modo que ningún par de delegados del mismo país queden adyacentes, usando un argumento de tipo Hall sobre las posiciones disponibles.
