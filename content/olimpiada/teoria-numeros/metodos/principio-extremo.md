---
title: "Principio del extremo"
preview: "Para resolver un problema, considera el objeto con valor mínimo o máximo. Es el método más simple y a veces el más sorprendente: 'tomemos el más pequeño' resuelve problemas que parecen intratables."
dificultad: iniciacion
tags: [extremo, minimo, demostraciones, combinatoria]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

## Definición

El **principio del extremo** consiste en seleccionar un objeto del problema cuya alguna magnitud sea mínima (o máxima) entre todos los posibles, y derivar propiedades a partir de esta extremalidad. Es una herramienta de demostración no constructiva: usa el **buen orden** de $\mathbb N$ — todo subconjunto no vacío tiene mínimo — y, en problemas finitos, simplemente la finitud.

## Ejemplo

### El teorema de Sylvester–Gallai

**Ejemplo 1.** En un plano hay $n$ puntos, no todos colineales. Demostrar que existe una recta que pasa por **exactamente dos** de ellos.

*La idea.* Es un enunciado de existencia que no sabemos construir. La maniobra del extremo es **fabricar una cantidad que minimizar** y demostrar que el objeto minimal tiene ya la propiedad buscada. Aquí la cantidad será una **distancia punto–recta**: si la recta minimal tuviera tres puntos, podríamos encontrar otra pareja con distancia aún menor — absurdo.

*Solución.* Consideramos todos los pares $(\ell, P)$ donde $\ell$ es una recta que pasa por al menos dos de los puntos y $P$ es un punto del conjunto que **no** está en $\ell$. Como no todos son colineales, existe al menos un par así, y como hay finitos, **elegimos uno con distancia $d(P, \ell)$ mínima**.

Afirmamos que esa $\ell$ contiene exactamente dos puntos. Si contuviera tres (o más), sea $Q$ el pie de la perpendicular de $P$ a $\ell$. De esos tres puntos, al menos dos caen en el mismo semieje de $\ell$ respecto de $Q$; llamémoslos $A, B$, con $A$ entre $Q$ y $B$ (posiblemente $A = Q$).

Tomemos la recta $\ell' = \overleftrightarrow{PB}$ (válida: pasa por $P$ y $B$). Comparando los triángulos rectángulos semejantes que forman las perpendiculares a $\ell$ y a $\ell'$, la distancia de $A$ a $\ell'$ resulta **estrictamente menor** que la de $P$ a $\ell$:

$$
d(A, \ell') < d(P, \ell).
$$

Pero entonces $(\ell', A)$ es un par con distancia menor, contradiciendo la minimalidad. Luego $\ell$ pasa por exactamente dos puntos. $\blacksquare$

*La moraleja.* "Toma el mínimo y supón que no cumple la propiedad" produce siempre un objeto **todavía menor**: esa es la contradicción que cierra el argumento. Conjeturado por Sylvester (1893), este resultado resistió hasta la prueba de Gallai (1944), esencialmente esta.

### Mismo número de amigos

**Ejemplo 2.** En un grupo de $n$ personas, ciertas parejas son amigas. Si todas tienen al menos un amigo, demostrar que hay dos con **exactamente el mismo número** de amigos.

*La idea.* Aquí el extremo aparece como su pariente cercano, el **principio del palomar**: si hay más personas que valores posibles para "número de amigos", dos comparten valor.

*Solución.* El número de amigos de cada persona es un entero entre $1$ (tiene al menos uno) y $n - 1$ (no puede ser amiga de sí misma): son $n - 1$ valores posibles. Pero hay $n$ personas. Por el principio del palomar, dos personas tienen el mismo número de amigos. $\blacksquare$

### El triángulo de área máxima

**Ejemplo 3.** Dados $n \geq 3$ puntos en el plano, no todos colineales, sea $ABC$ el triángulo de **área máxima** que forman tres de ellos. Demostrar que **todos** los puntos quedan dentro (o en el borde) del triángulo que se obtiene trazando, por cada vértice, la paralela al lado opuesto.

*La idea.* De nuevo elegimos el objeto extremal —el triángulo más grande— y exprimimos su maximalidad: si algún punto se escapara de esa región, daría lugar a un triángulo todavía mayor.

*Solución.* Por cada vértice de $ABC$ trazamos la recta paralela al lado opuesto; las tres rectas encierran un triángulo $A'B'C'$ (del cual $ABC$ es el triángulo medial). Supongamos que algún punto $P$ del conjunto cae **fuera** de $A'B'C'$. Entonces $P$ está, respecto de uno de los lados —digamos $BC$—, más allá de la paralela que pasa por $A$; es decir, $P$ está **más lejos** de la recta $BC$ que $A$.

Pero el área de un triángulo con base $BC$ es proporcional a la distancia del tercer vértice a la recta $BC$. Como $P$ está más lejos que $A$, el triángulo $PBC$ tiene **mayor área** que $ABC$, contradiciendo que $ABC$ era el de área máxima. Por tanto ningún punto se escapa: todos están en $A'B'C'$. $\blacksquare$

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

**Problema 1 (el "rey" de un torneo).** En un torneo, cada par de jugadores juega exactamente una vez y no hay empates. Demostrar que existe un jugador $R$ (un "rey") tal que todo otro jugador, o bien perdió contra $R$, o bien perdió contra alguien que perdió contra $R$.

[[pista]]

Toma como candidato a rey al jugador con el **mayor número de victorias**. Si no fuera rey, encontrarías a alguien con aún más victorias.

[[/pista]]

[[solución]]

Sea $R$ un jugador con el **máximo** número de victorias (existe, por ser finito). Afirmamos que $R$ es un rey.

Supongamos que no: existe un jugador $Y$ al que $R$ **no** vence y que tampoco fue vencido por ninguno de los jugadores a quienes $R$ venció. Como no hay empates, eso significa que $Y$ venció a $R$ **y** que $Y$ venció a **todos** los jugadores que $R$ venció (a cada uno de ellos, o lo vence $Y$, o lo vencería… pero por hipótesis ninguno venció a $Y$, luego $Y$ los venció a todos).

Entonces las victorias de $Y$ incluyen: a todos los que venció $R$, **más** el propio $R$. Es decir, $Y$ tiene al menos una victoria más que $R$, contradiciendo que $R$ tenía el máximo.

Por tanto tal $Y$ no existe: todo jugador o perdió contra $R$, o perdió contra alguien que perdió contra $R$. $\blacksquare$

[[/solución]]

**Problema 2 (descenso infinito).** Demostrar que la ecuación $x^3 + 2y^3 + 4z^3 = 0$ no tiene más solución entera que $x = y = z = 0$.

[[pista]]

Versión del extremo: si hubiera una solución no nula, toma la de menor $|x| + |y| + |z|$. Mira la ecuación módulo $2$ para forzar que $x$, luego $y$, luego $z$ sean pares, y desciende.

[[/pista]]

[[solución]]

Supongamos que existe una solución entera con no todos nulos y, entre todas ellas, elijamos una $(x, y, z)$ con $|x| + |y| + |z|$ **mínimo**.

De $x^3 = -2y^3 - 4z^3$ se ve que $x^3$ es par, luego $x$ es par; escribimos $x = 2x_1$. Sustituyendo:

$$
8x_1^3 + 2y^3 + 4z^3 = 0 \;\Longrightarrow\; 4x_1^3 + y^3 + 2z^3 = 0.
$$

Ahora $y^3 = -4x_1^3 - 2z^3$ es par, luego $y = 2y_1$:

$$
4x_1^3 + 8y_1^3 + 2z^3 = 0 \;\Longrightarrow\; 2x_1^3 + 4y_1^3 + z^3 = 0.
$$

Entonces $z^3$ es par, luego $z = 2z_1$:

$$
2x_1^3 + 4y_1^3 + 8z_1^3 = 0 \;\Longrightarrow\; x_1^3 + 2y_1^3 + 4z_1^3 = 0.
$$

Así $(x_1, y_1, z_1) = (x/2, y/2, z/2)$ es **otra** solución, y si la original no era nula, esta tampoco lo es, pero tiene $|x_1| + |y_1| + |z_1| < |x| + |y| + |z|$, contradiciendo la minimalidad.

La contradicción obliga a que la única solución sea $x = y = z = 0$. $\blacksquare$

[[/solución]]
