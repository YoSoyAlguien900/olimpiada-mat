---
title: "El argumento extremal en combinatoria"
preview: "Entre todas las configuraciones posibles, fíjate en la más grande, la más pequeña, la más a la izquierda. Esa elección, aparentemente arbitraria, suele ser exactamente el punto de apoyo que la demostración necesita."
dificultad: regional
tags: [extremal, maximalidad, minimalidad, configuraciones, optimizacion]
prerequisites: [principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **argumento del extremo** (o **principio extremal**) consiste en, dentro de una familia de objetos o configuraciones que satisfacen ciertas condiciones, **elegir uno que maximiza o minimiza alguna cantidad bien definida**, y deducir propiedades sobre él a partir de su extremalidad —típicamente, mostrando que si no tuviera cierta propiedad, se podría modificar para obtener un objeto "todavía más extremo", contradiciendo la elección inicial.

Es, en esencia, el mismo principio que en teoría de números recibe el nombre de [principio del extremo](../../teoria-numeros/metodos/principio-extremo) (donde suele aplicarse a soluciones mínimas de ecuaciones diofánticas vía descenso), pero en combinatoria se manifiesta de forma distinta: en lugar de buscar la solución entera más pequeña, se busca la **configuración** —grafo, conjunto, coloración, secuencia— más extrema respecto de algún parámetro de conteo.

La estructura lógica habitual:

1. Considerar la familia (no vacía, finita) de todas las configuraciones válidas.
2. Elegir una que maximiza (o minimiza) un parámetro $\Phi$ bien elegido.
3. Suponer, por contradicción, que la configuración elegida no tiene la propiedad deseada.
4. Construir, a partir de ella, otra configuración válida con un valor de $\Phi$ estrictamente mayor (o menor) — contradicción.

## Teorema

Como en el caso de los invariantes, no hay un único enunciado: el argumento extremal es **una estrategia**, no un resultado. Su instancia más célebre en combinatoria estructural es:

**Teorema (existencia de un vértice de grado mínimo/máximo con propiedades especiales).** En todo grafo finito no vacío, un vértice de **grado máximo** $\Delta$ es adyacente a vértices cuyo grado combinado revela información global —esta observación, aplicada recursivamente, es la base de demostraciones de cotas como $\chi(G) \leq \Delta+1$ (ver [coloraciones-grafos](../contenidos/coloraciones-grafos)) y de argumentos de existencia de subgrafos densos.

**Lema extremal de Turán (esquema).** Si $G$ es un grafo sin $K_{r+1}$ con el número máximo de aristas posible, entonces $G$ es **completo $r$-partito** (el grafo de Turán) — un resultado que se demuestra mostrando que cualquier desviación de esta estructura permitiría añadir una arista sin crear $K_{r+1}$, contradiciendo la maximalidad.

## Demostración

Ilustramos con dos derivaciones de referencia.

**(a) Todo grafo tiene dos vértices del mismo grado (revisión extremal).** Aunque esta afirmación se demuestra habitualmente por palomar (ver [palomar](palomar)), también admite una lectura extremal: si todos los grados fueran distintos, ordenándolos tendríamos $n$ valores distintos en $\{0, 1, \ldots, n-1\}$ —es decir, *todos* estos valores aparecen—; en particular hay un vértice $u$ de grado $0$ y un vértice $v$ de grado $n-1$. Pero $v$ es adyacente a *todos* los demás, incluido $u$ — contradicción con $\deg(u) = 0$. Aquí los "extremos" $u$ (mínimo grado) y $v$ (máximo grado) entran en conflicto directo, produciendo la contradicción. $\blacksquare$

**(b) El camino más largo revela los extremos del grafo.** En cualquier grafo finito, sea $P = v_0 v_1 \cdots v_k$ un **camino de longitud máxima** (no extensible). Entonces *todos* los vecinos de $v_0$ están en $P$ —si $v_0$ tuviera un vecino $u \notin P$, el camino $u v_0 v_1 \cdots v_k$ sería más largo, contradicción—. Esta observación, aplicada con cuidado, demuestra que todo grafo con grado mínimo $\geq k$ contiene un camino de longitud $\geq k$ (de hecho un ciclo de longitud $\geq k+1$ si el grafo es 2-conexo): basta notar que $v_0$ tiene al menos $k$ vecinos, todos en $\{v_1,\ldots,v_k\} \subseteq P$, así que $P$ tiene al menos $k+1$ vértices. $\blacksquare$ Esta es la idea seminal detrás del **teorema de Dirac** sobre ciclos hamiltonianos.

## Ejemplo

**Ejemplo 1 (el "vecino más cercano" en geometría combinatoria).** Entre $n$ puntos del plano en posición general, considera el par $(P,Q)$ a **distancia mínima**. Esta elección extremal es el punto de apoyo estándar para argumentos sobre gráficas de proximidad: el disco de radio $\frac12 |PQ|$ centrado en $P$ no contiene ningún otro punto del conjunto (si lo contuviera, ese punto formaría con $P$ un par más cercano que $(P,Q)$, contradicción). Esta simple observación basta para acotar el número de pares a distancia mínima, resolviendo instantáneamente una familia entera de problemas de "puntos más cercanos".

**Ejemplo 2 (subconjunto de suma máxima).** Dado un conjunto finito $S$ de enteros (positivos y negativos), considera un subconjunto no vacío $T \subseteq S$ de **suma máxima**. Entonces, para todo $x \in T$ se tiene $x \geq 0$ —si $x < 0$, $T \setminus \{x\}$ tendría suma mayor, contradicción—, y para todo $y \in S \setminus T$ con $T \cup \{y\}$ no vacío se tiene $y \leq 0$ —análogamente—. Esta caracterización extremal resuelve de inmediato problemas de tipo "demostrar la existencia de un subconjunto cuya suma satisface tal propiedad".

## Aplicaciones

### Elegir el parámetro correcto: la decisión crucial

El éxito del argumento extremal depende casi enteramente de **qué cantidad se maximiza o minimiza**. Las elecciones recurrentes:

- *Tamaño* de un conjunto, camino, ciclo o subgrafo (más largo, más corto, más grande).
- *Suma o producto* ponderados (suma máxima, producto mínimo).
- *Distancia* (par de puntos más cercano o más lejano).
- *Número de violaciones* de cierta condición (configuración que minimiza el número de "defectos" — y si ese mínimo no es cero, se deriva una contradicción).

Esta última variante —**minimizar los defectos**— es especialmente potente: convierte preguntas de existencia ("¿hay alguna configuración perfecta?") en preguntas extremales ("la configuración con menos imperfecciones, ¿tiene alguna?").

### El argumento extremal como motor de algoritmos voraces

Muchas demostraciones extremales son, en esencia, la **verificación de corrección de un algoritmo voraz** (greedy): "toma siempre el elemento más conveniente disponible, y demuestra por inducción —usando la extremalidad de la elección en cada paso— que el resultado es óptimo". Esta dualidad —argumento extremal $\leftrightarrow$ algoritmo voraz— es transversal a la combinatoria, la teoría de grafos, y la optimización combinatoria.

### Combinación con inducción y descenso

El argumento extremal rara vez actúa solo: se combina naturalmente con **inducción** (la configuración extremal "pequeña" sirve de caso base, o se reduce a una instancia menor tras eliminar el elemento extremal) y con **descenso infinito** (si la existencia de una configuración mala implica la existencia de una "más pequeña" del mismo tipo, no puede haber ninguna — ver [descenso infinito](../../teoria-numeros/metodos/descenso-infinito)). Reconocer esta tríada —extremo, inducción, descenso— como tres caras de una misma idea es una de las observaciones metodológicas más útiles que se pueden interiorizar.

## Observación

La pregunta que define si un argumento extremal va a funcionar no es "¿cuál es el objeto extremo?" sino **"¿qué puedo deducir, con certeza absoluta, del hecho de que este objeto es extremo?"**. Si la respuesta es "nada que no supiera ya", el parámetro elegido es el incorrecto; si la respuesta es "una contradicción inmediata" o "una propiedad estructural fuerte", se ha encontrado la palanca correcta. Vale la pena, ante cualquier problema de existencia o de cota, preguntarse de inmediato: *¿qué pasa si miro al "mejor" o "peor" caso posible?*

## Problemas relacionados

- **(Clásico)** En un grupo de personas donde cada una tiene al menos un amigo, demostrar que existen dos personas con el mismo número de amigos dentro del grupo, usando un argumento extremal sobre el grado máximo y mínimo (comparar con el método de [palomar](palomar)).
- **(Clásico)** Sea $S$ un conjunto finito de puntos del plano, no todos colineales. Demostrar que existe una recta que pasa por exactamente dos puntos de $S$ (teorema de Sylvester–Gallai), considerando el par punto-recta a **distancia positiva mínima**.
- **(IMO 1990/P3, esquema)** Determinar todos los enteros $n > 1$ tales que $n^2 \mid 2^n + 1$. *(No es puramente combinatorio, pero la estrategia de considerar el menor primo $p$ que divide a $n$ —un argumento extremal sobre divisores— es exactamente la misma técnica aplicada en otro dominio.)*
- **(Clásico)** En un torneo de todos contra todos sin empates, demostrar que existe un jugador $A$ tal que, para cualquier otro jugador $B$, $A$ le ganó a $B$ directamente o le ganó a alguien que le ganó a $B$. *(Considerar al jugador con el máximo número de victorias.)*
- **(Olimpiada, clásico)** En una cuadrícula $n \times n$ coloreada con dos colores, demostrar la existencia de un rectángulo con los cuatro vértices del mismo color, usando un argumento que combine palomar con la elección extremal de filas "similares".
