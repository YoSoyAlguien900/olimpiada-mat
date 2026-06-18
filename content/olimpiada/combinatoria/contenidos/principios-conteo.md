---
title: "Principios fundamentales de conteo"
preview: "Las reglas de la suma y el producto, permutaciones y combinaciones: la gramática elemental de la combinatoria, sin la cual ningún argumento posterior tiene sentido."
dificultad: iniciacion
tags: [conteo, permutaciones, combinaciones, factorial, principio-multiplicativo]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Contar, en el sentido olímpico, es determinar el cardinal de un conjunto finito sin enumerar uno por uno sus elementos. Toda la combinatoria de conteo descansa en dos reglas elementales que parecen triviales y que, combinadas con ingenio, resuelven una cantidad sorprendente de problemas.

**Regla de la suma.** Si un objeto puede elegirse de $m$ formas y otro objeto, *incompatible con el primero*, de $n$ formas, entonces hay $m + n$ formas de elegir uno u otro. En lenguaje de conjuntos: si $A \cap B = \varnothing$, entonces $|A \cup B| = |A| + |B|$.

**Regla del producto.** Si una primera elección puede hacerse de $m$ formas y, *para cada una de ellas*, una segunda elección puede hacerse de $n$ formas, entonces el par ordenado puede elegirse de $mn$ formas. En lenguaje de conjuntos: $|A \times B| = |A|\cdot|B|$.

La sutileza casi nunca está en las reglas —es trivial enunciarlas— sino en **identificar correctamente el proceso de elección**: qué se elige primero, qué depende de qué, y si hay elecciones que se solapan (lo que rompería la regla de la suma) o no son realmente independientes (lo que rompería ingenuamente la del producto, aunque a menudo se puede arreglar reordenando el proceso).

## Teorema

**Permutaciones.** El número de formas de ordenar $n$ objetos distintos en una fila es
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! := 1.
$$
Más generalmente, el número de formas de elegir y ordenar $k$ objetos de entre $n$ distintos (**variaciones**, o permutaciones parciales) es
$$
n^{\underline{k}} = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}.
$$

**Combinaciones.** El número de formas de elegir un subconjunto de $k$ elementos de un conjunto de $n$ elementos (sin importar el orden) es el **coeficiente binomial**
$$
\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n^{\underline{k}}}{k!}.
$$

**Permutaciones con repetición.** El número de reordenaciones distintas de una palabra con $n$ símbolos, de los cuales $n_1, n_2, \ldots, n_r$ son copias de cada tipo (con $n_1 + \cdots + n_r = n$), es el **coeficiente multinomial**
$$
\binom{n}{n_1, n_2, \ldots, n_r} = \frac{n!}{n_1!\, n_2! \cdots n_r!}.
$$

## Demostración

*Permutaciones.* Para colocar $n$ objetos en $n$ posiciones ordenadas, hay $n$ elecciones para la primera posición; fijada esta, $n-1$ para la segunda (un objeto ya está colocado); y así sucesivamente hasta la última, donde solo queda un objeto. Por la regla del producto, el total es $n(n-1)\cdots 1 = n!$.

*Variaciones.* Idéntico argumento, deteniéndose tras $k$ pasos: $n(n-1)\cdots(n-k+1)$, que es $n!/(n-k)!$ al completar el factorial y cancelar.

*Combinaciones.* Cada subconjunto de $k$ elementos da lugar a exactamente $k!$ variaciones distintas (sus reordenaciones). Como las variaciones de $k$ elementos de un total de $n$ son $n^{\underline{k}}$, y cada subconjunto se cuenta $k!$ veces, el número de subconjuntos es $n^{\underline{k}}/k! = \binom{n}{k}$. $\blacksquare$

*Multinomial.* Para construir una reordenación, elegimos primero las $n_1$ posiciones del símbolo $1$ (de $\binom{n}{n_1}$ formas), luego las $n_2$ posiciones del símbolo $2$ entre las restantes (de $\binom{n - n_1}{n_2}$ formas), etc. El producto telescopa:
$$
\binom{n}{n_1}\binom{n-n_1}{n_2}\cdots\binom{n - n_1 - \cdots - n_{r-1}}{n_r} = \frac{n!}{n_1!\,n_2!\cdots n_r!}. \qquad \blacksquare
$$

## Ejemplo

*La idea común.* Antes de calcular, hay que **clasificar el problema** con tres preguntas: ¿importa el **orden**? ¿se permite **repetir**? ¿las elecciones son **independientes**? Las respuestas eligen la fórmula —factorial, potencia, combinación o multinomial— casi sin pensar.

**Ejemplo 1.** ¿De cuántas formas se sientan $5$ personas en $5$ sillas en fila?

*La idea.* El orden **sí** importa (sentarse distinto es distinto) y no hay repetición (cada persona una vez): es una permutación pura.

Hay $5$ opciones para la primera silla, $4$ para la segunda, etc.: $5! = 120$. $\square$

**Ejemplo 2.** ¿Cuántas palabras de $4$ letras (con repetición permitida) se forman con $\{A,B,C\}$?

*La idea.* Aquí **sí** se repite y las $4$ posiciones son **independientes** entre sí: cada una se decide por separado, así que se multiplican opciones iguales (regla del producto).

Cada posición admite $3$ elecciones: $3^4 = 81$. $\square$

**Ejemplo 3.** ¿De cuántas formas se eligen $3$ libros de una estantería de $10$ (el orden no importa)?

*La idea.* El orden **no** importa (llevarse los mismos libros es lo mismo): combinación. Es la situación del "sobreconteo": ordenarlos daría $10\cdot 9\cdot 8$, pero cada trío se contaría $3!$ veces.

$$
\binom{10}{3} = \frac{10\cdot 9\cdot 8}{3!} = 120. \qquad \square
$$

**Ejemplo 4.** ¿Cuántos anagramas tiene MISSISSIPPI?

*La idea.* Si las $11$ letras fueran distintas habría $11!$ órdenes; pero **las letras repetidas son indistinguibles**, así que cada anagrama real se cuenta de más, tantas veces como formas de permutar las copias iguales ($4!$ las I, $4!$ las S, $2!$ las P). Dividir por ellas es el coeficiente multinomial.

La palabra tiene $1$ M, $4$ I, $4$ S, $2$ P, luego

$$
\binom{11}{1,4,4,2} = \frac{11!}{1!\,4!\,4!\,2!} = 34\,650. \qquad \square
$$

## Aplicaciones

### Conteo por etapas (descomposición del proceso)

La técnica más común consiste en **descomponer una elección compleja en una secuencia de elecciones simples**, verificando en cada paso que el número de opciones restantes no dependa de detalles irrelevantes de los pasos anteriores (solo de cuántas opciones se han "consumido").

**Problema.** ¿De cuántas formas se pueden colocar $8$ torres no atacantes en un tablero de ajedrez $8\times 8$ (ninguna comparte fila ni columna)?

**Solución.** Colocamos las torres columna por columna. La torre de la columna $1$ puede ir en cualquiera de las $8$ filas; la de la columna $2$, en cualquiera de las $7$ filas restantes (la suya está prohibida); etc. El total es $8! = 40\,320$. $\blacksquare$

### Combinaciones con repetición (estrellas y barras)

**Problema.** ¿Cuántas soluciones enteras no negativas tiene $x_1 + x_2 + \cdots + x_k = n$?

**Solución.** Representamos una solución como una fila de $n$ estrellas separadas en $k$ grupos por $k-1$ barras, es decir, una sucesión de $n + k - 1$ símbolos de los que $k - 1$ son barras. El número de tales sucesiones es
$$
\binom{n+k-1}{k-1} = \binom{n+k-1}{n}. \qquad \blacksquare
$$

Esta identidad —**estrellas y barras**— es la herramienta estándar para contar multiconjuntos, reparticiones de objetos idénticos en cajas distinguibles, y monomios de un cierto grado total (ver [coeficientes-binomiales](coeficientes-binomiales)).

### Sobreconteo controlado

A veces es más fácil contar cada objeto varias veces de manera uniforme y dividir al final —exactamente como en la prueba de $\binom{n}{k} = n^{\underline k}/k!$ de arriba—. Esta idea, llevada a su forma más general, es el germen del [conteo doble](conteo-doble) y de la [acción de grupos sobre conjuntos](biyecciones) (lema de Burnside).

## Observación

Una fuente constante de errores es **confundir "ordenado" con "no ordenado"**. La pregunta crucial siempre es: *si intercambio dos elementos de mi elección, ¿obtengo una configuración distinta?* Si la respuesta es sí, hay que usar variaciones (o el principio del producto directamente); si es no, combinaciones —y hay que tener cuidado de no contar cada subconjunto $k!$ veces.

Otra fuente de error: **aplicar la regla del producto a elecciones que no son independientes**. Cuando la segunda elección depende de la primera de forma asimétrica (por ejemplo, "elige dos números distintos del $1$ al $10$ cuya suma sea par"), normalmente conviene reorganizar el conteo por casos disjuntos —volviendo a la regla de la suma— antes de multiplicar.

## Problemas relacionados

**Problema 1 (clásico).** ¿Cuántos números de $4$ cifras tienen todas sus cifras distintas?

[[pista]]

Cuenta posición a posición, pero ojo a la primera cifra: no puede ser $0$.

[[/pista]]

[[solución]]

Construimos el número de izquierda a derecha:

- **Primera cifra (millares):** no puede ser $0$, así que hay $9$ opciones ($1$ a $9$).
- **Segunda cifra:** cualquier dígito salvo el ya usado, incluido ahora el $0$: $9$ opciones.
- **Tercera cifra:** quedan $8$ dígitos.
- **Cuarta cifra:** quedan $7$.

Por la regla del producto,

$$
9 \cdot 9 \cdot 8 \cdot 7 = 4536. \qquad \blacksquare
$$

[[/solución]]

**Problema 2 (clásico).** ¿Cuántas diagonales tiene un polígono convexo de $n$ lados?

[[pista]]

Cuenta todos los segmentos entre pares de vértices y réstale los que son lados.

[[/pista]]

[[solución]]

Un segmento queda determinado por un par de vértices (el orden no importa), y hay $\binom{n}{2}$ pares. De esos segmentos, $n$ son **lados** del polígono y el resto son **diagonales**:

$$
\binom{n}{2} - n = \frac{n(n-1)}{2} - n = \frac{n(n-1) - 2n}{2} = \frac{n(n-3)}{2}. \qquad \blacksquare
$$

[[/solución]]

**Problema 3 (clásico).** En una fiesta hay $n$ personas y cada par se da la mano una vez. ¿Cuántos apretones de manos hay?

[[pista]]

Un apretón es un par no ordenado de personas.

[[/pista]]

[[solución]]

Cada apretón corresponde a elegir un par de personas (sin orden: que $A$ salude a $B$ es el mismo apretón que $B$ a $A$). El número de pares es

$$
\binom{n}{2} = \frac{n(n-1)}{2}.
$$

(Es exactamente el número de aristas del grafo completo $K_n$ — véase [grafos-fundamentos](grafos-fundamentos).) $\blacksquare$

[[/solución]]

**Problema 4 (iniciación).** ¿De cuántas formas se reparten $7$ caramelos idénticos entre $3$ niños, si cada uno recibe **al menos uno**?

[[pista]]

Dale primero un caramelo a cada niño; reparte los restantes con estrellas y barras (ya sin restricción).

[[/pista]]

[[solución]]

Como cada niño debe recibir al menos uno, le entregamos primero $1$ caramelo a cada uno. Quedan $7 - 3 = 4$ caramelos para repartir libremente (ahora sí, alguno puede recibir $0$ adicionales) entre los $3$ niños: buscamos las soluciones enteras no negativas de

$$
x_1 + x_2 + x_3 = 4.
$$

Por estrellas y barras, esto es

$$
\binom{4 + 3 - 1}{3 - 1} = \binom{6}{2} = 15. \qquad \blacksquare
$$

[[/solución]]

**Problema 5 (OMG, clásico).** ¿Cuántos subconjuntos de $\{1, 2, \ldots, 10\}$ tienen exactamente $3$ elementos y **no contienen dos enteros consecutivos**?

[[pista]]

Si $a < b < c$ son los elegidos sin consecutivos, la sustitución $a,\ b-1,\ c-2$ los convierte en tres números cualesquiera (ya sin restricción) de un rango más corto.

[[/pista]]

[[solución]]

Sea $\{a, b, c\}$ con $a < b < c$ y sin dos consecutivos, es decir $b \geq a+2$ y $c \geq b+2$. Hacemos el cambio

$$
a' = a, \qquad b' = b - 1, \qquad c' = c - 2.
$$

La condición "sin consecutivos" equivale exactamente a $a' < b' < c'$ (estrictamente crecientes y ya sin restricción de salto), y como $1 \leq a$ y $c \leq 10$, los nuevos valores recorren $\{1, 2, \ldots, 8\}$. Así, los subconjuntos buscados están en biyección con los subconjuntos de $3$ elementos de $\{1, \ldots, 8\}$:

$$
\binom{8}{3} = 56. \qquad \blacksquare
$$

(En general, los subconjuntos de $k$ elementos de $\{1,\dots,n\}$ sin consecutivos son $\binom{n-k+1}{k}$.) $\blacksquare$

[[/solución]]
