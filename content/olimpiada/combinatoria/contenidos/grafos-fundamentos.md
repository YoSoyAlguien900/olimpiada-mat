---
title: "Fundamentos de teoría de grafos"
preview: "Vértices y aristas: el lenguaje más eficaz para codificar relaciones binarias. El lema del apretón de manos, los árboles y los caminos eulerianos son la base de toda la combinatoria estructural."
dificultad: regional
tags: [grafos, arboles, euler, hamilton, grado]
prerequisites: [principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Un **grafo (simple, no dirigido)** $G = (V, E)$ consta de un conjunto finito de **vértices** $V$ y un conjunto $E$ de **aristas**, cada una un par no ordenado $\{u,v\}$ con $u \neq v \in V$. El **grado** $\deg(v)$ de un vértice es el número de aristas incidentes a él. Un **camino** es una sucesión de vértices distintos consecutivamente unidos por aristas; un **ciclo** es un camino que regresa a su inicio. El grafo es **conexo** si entre cualesquiera dos vértices existe un camino.

Casos especiales que aparecen constantemente:

- $K_n$: el **grafo completo**, con todas las $\binom{n}{2}$ aristas posibles.
- $K_{m,n}$: el **grafo bipartito completo**, con partes de tamaño $m$ y $n$ y todas las aristas entre partes.
- Un **árbol**: grafo conexo sin ciclos.

## Teorema

**1. Lema del apretón de manos.** $\displaystyle \sum_{v \in V} \deg(v) = 2|E|$. En particular, el número de vértices de grado impar es par.

**2. Caracterización de árboles.** Para un grafo $G$ con $n$ vértices, son equivalentes: (a) $G$ es un árbol; (b) $G$ es conexo y tiene $n-1$ aristas; (c) $G$ no tiene ciclos y tiene $n-1$ aristas; (d) entre cualesquiera dos vértices hay exactamente un camino.

**3. Teorema de Euler (caminos y circuitos eulerianos).** Un grafo conexo admite un **circuito euleriano** (que recorre cada arista exactamente una vez y regresa al inicio) si y solo si todos sus vértices tienen grado par. Admite un **camino euleriano** (sin regresar) si y solo si tiene exactamente $0$ o $2$ vértices de grado impar.

**4. Fórmula de Cayley.** El número de árboles distintos (etiquetados) con $n$ vértices es $n^{n-2}$.

## Demostración

**(1) Apretón de manos.** Cada arista $\{u,v\}$ contribuye exactamente $1$ al grado de $u$ y $1$ al grado de $v$; sumando sobre todas las aristas, cada una se cuenta dos veces —una por cada extremo—, así que $\sum_v \deg(v) = 2|E|$. Como el lado derecho es par, la suma de los grados impares debe ser par, y una suma de números impares es par solo si hay un número par de sumandos. $\blacksquare$

**(2) Árboles, (a) $\Rightarrow$ (b).** Inducción sobre $n$. Todo árbol con $n \geq 2$ vértices tiene una **hoja** (vértice de grado $1$): si no la tuviera, todo vértice tendría grado $\geq 2$ y se podría construir un camino que se repite, produciendo un ciclo, contradicción. Eliminando una hoja se obtiene un árbol con $n-1$ vértices y, por hipótesis de inducción, $n-2$ aristas; restituyendo la hoja y su única arista, el árbol original tiene $n-1$ aristas. $\square$ (Las demás implicaciones son ejercicios estándar de manipulación con conteo de componentes y ciclos.)

**(3) Euler, condición necesaria.** Si existe un circuito euleriano, cada vez que el circuito visita un vértice "entra" por una arista y "sale" por otra (distinta, pues no se repite ninguna arista); así las aristas incidentes a cada vértice se emparejan, y el grado es par. *(condición suficiente, esquema)*: por inducción sobre $|E|$, partiendo de cualquier vértice y siguiendo aristas no usadas se cierra necesariamente un ciclo (pues todo grado es par); si este ciclo no cubre todas las aristas, el grafo restante —que también tiene todos los grados pares— tiene, por conexión, un vértice común con el ciclo, y se "incrusta" un circuito euleriano del resto en ese punto. $\blacksquare$

**(4) Cayley.** La demostración más elegante usa el **código de Prüfer**: una biyección explícita entre árboles etiquetados con $n$ vértices y sucesiones $(a_1,\ldots,a_{n-2}) \in \{1,\ldots,n\}^{n-2}$. El algoritmo: repetidamente, elimina la hoja de menor etiqueta y registra la etiqueta de su (único) vecino; al cabo de $n-2$ pasos quedan $2$ vértices. La inversa reconstruye el árbol leyendo el código de izquierda a derecha. Como hay $n^{n-2}$ sucesiones posibles, hay $n^{n-2}$ árboles. $\blacksquare$

## Ejemplo

**Ejemplo 1.** En $K_n$, cada vértice tiene grado $n-1$, y $|E| = \binom{n}{2} = \frac{n(n-1)}{2}$, consistente con el lema del apretón de manos: $n(n-1) = 2\binom{n}{2}$.

**Ejemplo 2 (los puentes de Königsberg).** El problema que dio origen a la teoría de grafos (Euler, 1736): la ciudad de Königsberg tenía $4$ zonas de tierra unidas por $7$ puentes; ¿se puede dar un paseo que cruce cada puente exactamente una vez? Modelando las zonas como vértices y los puentes como aristas, los cuatro vértices tienen grados $3, 3, 3, 5$ —todos impares—. Como hay más de $2$ vértices de grado impar, **no existe** tal paseo: la primera demostración de imposibilidad en teoría de grafos, y el nacimiento de la disciplina.

**Ejemplo 3.** Un grafo bipartito $K_{3,3}$ tiene $9$ aristas, todos los vértices de grado $3$ (impar): admite a lo sumo $2$ vértices de grado impar para tener camino euleriano —pero tiene $6$—, así que ni siquiera tiene camino euleriano.

## Aplicaciones

### El grado como invariante: argumentos de paridad en grafos

La identidad $\sum \deg(v) = 2|E|$ es, ante todo, un **argumento de paridad** disfrazado, y se combina naturalmente con los métodos de [invariantes y coloración](../metodos/invariantes-y-coloracion).

**Problema.** En una fiesta con un número impar de personas, demostrar que el número de personas que han dado un número impar de apretones de manos es par.

**Solución.** Es exactamente el lema del apretón de manos aplicado al grafo de "quién saludó a quién": el número de vértices de grado impar es siempre par, sin importar cuántos vértices tenga el grafo. $\blacksquare$

### Grafos como modelo de problemas no geométricos

La fuerza de la teoría de grafos en olimpiadas rara vez está en problemas que *mencionan* grafos explícitamente, sino en **reconocer una estructura de grafo escondida** en un enunciado sobre amistades, torneos, comités, dominós, o números.

**Problema (clásico — fichas de dominó).** Las $28$ fichas de un dominó completo (de $0$-$0$ a $6$-$6$) se colocan en cadena, tocándose extremo con extremo y con números iguales en contacto. ¿Es posible formar un único circuito cerrado con todas las fichas?

**Solución (esquema).** Modelamos cada número $0,\ldots,6$ como un vértice y cada ficha $a$-$b$ como una arista entre $a$ y $b$ (con bucles para las fichas dobles $a$-$a$). El grafo resultante es $K_7$ con un bucle en cada vértice; cada vértice tiene grado $6 + 2 = 8$ (par). Por el teorema de Euler, existe un circuito euleriano: sí es posible. $\blacksquare$

### Árboles como esqueletos de algoritmos extremales

Los árboles aparecen siempre que un argumento necesita una estructura "mínima conexa": **árboles generadores**, jerarquías de torneos, o el esqueleto de un argumento de inducción sobre componentes conexas. La identificación "esto es un árbol" suele desbloquear de inmediato el conteo —vía la fórmula $|E| = |V| - 1$— o la existencia de hojas, que son el punto de apoyo natural para argumentos inductivos (como en la prueba de la caracterización de árboles).

## Observación

Modelar un problema mediante un grafo es, casi siempre, **una elección**, no una obligación —y elegir bien qué son los vértices y qué las aristas es la parte creativa—. Una mala elección (por ejemplo, vértices que mezclan objetos de naturalezas distintas, o aristas que codifican relaciones no simétricas en un grafo no dirigido) produce un modelo del que no se puede extraer información. Una vez fijado el modelo correcto, sin embargo, el arsenal de la teoría de grafos —grados, conexión, ciclos, bipartición— suele resolver el problema de forma casi mecánica.

## Problemas relacionados

- **(Clásico)** Probar que todo grafo con $n$ vértices y más de $\binom{n-1}{2}$ aristas es conexo.
- **(Clásico)** En un grupo de $n$ personas, demostrar que siempre hay dos con exactamente el mismo número de amigos dentro del grupo. *(Pista: palomar sobre los posibles grados — ver [palomar](../metodos/palomar) y [principio-extremo](../../teoria-numeros/metodos/principio-extremo).)*
- **(IMO 1991/P3, adaptado)** En un grafo conexo con $n$ vértices, probar que se pueden numerar los vértices $v_1,\ldots,v_n$ de modo que cada $v_i$ ($i \geq 2$) tenga al menos un vecino entre $v_1,\ldots,v_{i-1}$. *(Esto es, esencialmente, construir un árbol generador mediante búsqueda en anchura/profundidad.)*
- **(Clásico)** ¿Cuántos árboles generadores tiene $K_4$? Verificar a mano que coincide con $4^{4-2}=16$ de la fórmula de Cayley.
- **(Clásico)** Demostrar que un grafo es bipartito si y solo si no contiene ciclos de longitud impar.
