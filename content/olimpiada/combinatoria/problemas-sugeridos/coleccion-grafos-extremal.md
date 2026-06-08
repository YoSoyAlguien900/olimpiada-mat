---
title: "Colección regional-nacional: grafos, conteo doble y argumentos extremales"
preview: "Veinte problemas que entrenan la trinidad central de la combinatoria de nivel medio: pensar en grafos, contar de dos maneras, y elegir el objeto extremo correcto."
dificultad: regional
tags: [coleccion, grafos, conteo-doble, extremal, recurrencias]
prerequisites: [grafos-fundamentos, conteo-doble, argumento-extremal-combinatorio, recurrencias-combinatorias]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

Esta colección apunta a quien ya domina los fundamentos del conteo y el principio del palomar, y está listo para las tres herramientas que dominan la combinatoria de nivel regional y nacional: el lenguaje de los **grafos** (ver [grafos-fundamentos](../contenidos/grafos-fundamentos)), la técnica de [conteo-doble](../metodos/conteo-doble), y el [argumento-extremal-combinatorio](../metodos/argumento-extremal-combinatorio). La gran mayoría de los problemas de esta dificultad ceden ante alguna combinación de estas tres ideas — reconocer cuál (o cuáles) aplicar es, en sí mismo, la habilidad que esta colección busca entrenar.

## Problemas

1. En una fiesta con $2n$ personas, cada una conoce exactamente a $n+1$ otras. Demostrar que existen tres personas que se conocen mutuamente.
2. Un grafo tiene $n$ vértices y más de $\binom{n-1}{2} + 1$ aristas. Demostrar que es conexo.
3. En un torneo (grafo dirigido completo) con $n$ jugadores, demostrar que existe un jugador desde el cual se puede llegar a cualquier otro mediante un camino dirigido de longitud a lo sumo $2$.
4. Demostrar que todo grafo con $n \geq 2$ vértices tiene dos vértices del mismo grado, sin usar el principio del palomar directamente — mediante un argumento extremal sobre el grado máximo y mínimo.
5. Sea $G$ un grafo con $n$ vértices en el que todo vértice tiene grado al menos $n/2$. Demostrar que $G$ es conexo, y de hecho que tiene un ciclo hamiltoniano (teorema de Dirac — al menos demostrar la conexidad es accesible con las herramientas de esta colección).
6. ¿De cuántas maneras se puede recorrer un tablero de $2 \times n$ con fichas de dominó de $1\times 2$? Plantear y resolver la recurrencia, y dar una interpretación biyectiva del resultado en términos de la sucesión de Fibonacci.
7. En un grafo bipartito con partes de tamaño $n$, donde cada vértice tiene grado exactamente $k \geq 1$, demostrar (usando el teorema de Hall) que existe un emparejamiento perfecto.
8. Demostrar que en cualquier grafo simple con $n$ vértices y al menos $n$ aristas existe un ciclo.
9. Una competición de ajedrez por equipos enfrenta a $n$ equipos, cada uno con $k$ jugadores; cada jugador juega exactamente una partida contra cada jugador de otro equipo. Contar el número total de partidas de dos maneras y deducir una identidad combinatoria.
10. Demostrar que el número de subgrafos completos $K_3$ (triángulos) en un grafo $G$ se puede expresar en términos de $\text{tr}(A^3)$, donde $A$ es la matriz de adyacencia de $G$ — y dar una prueba combinatoria (sin álgebra lineal) de la fórmula resultante.
11. Sea $S$ un conjunto de $n$ puntos en el plano, no tres colineales, tales que la distancia entre cualesquiera dos es al menos $1$. Demostrar que hay a lo sumo $3n$ pares a distancia exactamente $1$.
12. En un grafo con $n$ vértices y sin ciclos de longitud $4$, demostrar que el número de aristas es $O(n^{3/2})$ — usando un argumento de conteo doble sobre "caminos de dos aristas" similar al de la prueba de Mantel.
13. Una secuencia de $n$ números reales se llama "balanceada" si toda subsecuencia contigua tiene suma no negativa. Demostrar, usando un argumento extremal sobre la suma parcial mínima, una caracterización útil de tales secuencias.
14. En un grafo conexo con $n$ vértices y exactamente $n$ aristas, demostrar que contiene exactamente un ciclo.
15. Sea $T$ un árbol con $n$ vértices. Demostrar que la suma de los grados de todos los vértices es $2(n-1)$, y deducir que $T$ tiene al menos dos hojas (vértices de grado $1$).
16. En una cuadrícula infinita, se colorean las casillas con $k$ colores. Demostrar que, para $k$ suficientemente pequeño en relación con el tamaño de una región, existe un rectángulo con los cuatro vértices del mismo color — generalizando el problema clásico de la cuadrícula bicoloreada.
17. Sea $G$ un grafo en el que todo vértice tiene grado par. Demostrar, usando un argumento extremal sobre un camino maximal, que $G$ se puede descomponer en ciclos disjuntos por aristas.
18. En un conjunto de $2n+1$ números reales, supongamos que al quitar cualquiera de ellos, los $2n$ restantes se pueden dividir en dos grupos de $n$ con sumas iguales. Demostrar que todos los números son iguales.
19. Demostrar que el número máximo de aristas en un grafo planar con $n \geq 3$ vértices es $3n - 6$, usando la fórmula de Euler $V - E + F = 2$.
20. En una sala hay $n$ interruptores y $n$ bombillas, conectados de forma desconocida (cada interruptor controla exactamente una bombilla, biyectivamente). Determinar el número mínimo de "experimentos" (encender un subconjunto de interruptores y observar qué bombillas se encienden) necesarios para determinar la conexión completa, y justificar la cota mediante un argumento de conteo de información.

## Pistas

1. Aplica el contrarrecíproco del teorema de Mantel: si no hay triángulo, el número de aristas está acotado por $\lfloor (2n)^2/4 \rfloor = n^2$; compara con el número de aristas garantizado por la hipótesis sobre los grados.
2. Si $G$ no fuera conexo, alguna componente tendría a lo sumo $n-1$ vértices; acota el número máximo de aristas de un grafo disconexo con $n$ vértices.
3. Considera un vértice de "salida" máxima (mayor número de jugadores a los que vence directamente) y analiza a quién no vence directamente.
4. Si todos los grados fueran distintos, tomarían los valores $0, 1, \ldots, n-1$; analiza la contradicción entre el vértice de grado $0$ y el de grado $n-1$ (revisar [argumento-extremal-combinatorio](../metodos/argumento-extremal-combinatorio), Demostración (a)).
5. Supón que $G$ es disconexo y deriva una cota sobre el grado máximo de un vértice en la componente más pequeña, contradiciendo la hipótesis.
6. Clasifica los recorridos según cómo se cubre la primera columna (con una ficha vertical, o con dos horizontales) — esto da la recurrencia $a_n = a_{n-1} + a_{n-2}$.
7. Verifica la condición de Hall directamente: para cualquier subconjunto $S$ de un lado, cuenta las aristas que salen de $S$ y las que entran en $N(S)$, usando que el grafo es $k$-regular.
8. Si no hubiera ciclos, el grafo sería un bosque; acota el número máximo de aristas de un bosque con $n$ vértices.
9. Cuenta los pares (jugador, oponente de otro equipo) de dos formas: agrupando por jugador, y agrupando por par de equipos.
10. La entrada $(i,i)$ de $A^3$ cuenta los caminos cerrados de longitud $3$ desde $i$; relaciona esto con triángulos que pasan por $i$, y ten cuidado con el factor de sobreconteo.
11. Para cada punto, ¿cuántos otros puntos pueden estar exactamente a distancia $1$ de él, dado que no hay tres colineales y todas las distancias son $\geq 1$? Acumula esta cota local en una cota global vía el lema del apretón de manos.
12. Cuenta pares (vértice central, par de vecinos); la ausencia de $C_4$ implica que cada par de vértices es "centro común" de a lo sumo un camino de longitud $2$.
13. Considera las sumas parciales $S_0 = 0, S_1, \ldots, S_n$ y relaciona "toda subsecuencia contigua tiene suma no negativa" con una propiedad de monotonía o de mínimos de la sucesión $(S_i)$.
14. Cuenta aristas y vértices: un árbol con $n$ vértices tiene $n-1$ aristas; una arista "extra" en un grafo conexo crea exactamente un ciclo.
15. Usa el lema del apretón de manos junto con el hecho de que un árbol tiene $n-1$ aristas; razona por contradicción suponiendo que hay a lo sumo una hoja.
16. Aplica palomar repetidamente: primero a las casillas de cada columna (¿cuántas del mismo color?), luego a las columnas mismas vistas como "supercajones" — exactamente como en el problema clásico de la cuadrícula bicoloreada, pero con más colores y, por tanto, columnas más altas.
17. Toma un camino (o circuito) de longitud máxima que no repite aristas; el grado par de cada vértice garantiza que el camino se puede cerrar en un ciclo, que luego se puede remover y proceder por inducción.
18. Considera la suma total $S$ y observa que, para cada elemento removido $x_i$, el resto se divide en dos partes iguales — deduce que $S - x_i$ es par para todo $i$, y por tanto todos los $x_i$ tienen la misma paridad; itera el argumento.
19. Cada cara de un grafo planar (con $n\geq 3$) está bordeada por al menos $3$ aristas, y cada arista bordea exactamente dos caras — esto da $2E \geq 3F$; combina con Euler.
20. Piensa en cada experimento como una "pregunta" que produce un bit de información por bombilla; compara el número de configuraciones posibles ($n!$) con la cantidad de información que un experimento puede revelar, en el espíritu de un argumento de conteo (cota de información de Shannon aplicada combinatoriamente).
