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

**Ejemplo 1.** ¿De cuántas formas se pueden sentar $5$ personas en $5$ sillas en fila? Respuesta: $5! = 120$.

**Ejemplo 2.** ¿Cuántas palabras de $4$ letras (con repetición permitida) se pueden formar con el alfabeto $\{A,B,C\}$? Cada una de las $4$ posiciones admite $3$ elecciones independientes: $3^4 = 81$.

**Ejemplo 3.** ¿De cuántas formas se eligen $3$ libros de una estantería de $10$ para llevarlos de viaje (el orden no importa)? $\binom{10}{3} = 120$.

**Ejemplo 4.** ¿Cuántos anagramas tiene la palabra MISSISSIPPI? Tiene $11$ letras: $1$ M, $4$ I, $4$ S, $2$ P. La respuesta es
$$
\binom{11}{1,4,4,2} = \frac{11!}{1!\,4!\,4!\,2!} = 34\,650.
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

- **(Clásico)** ¿Cuántos números de $4$ cifras tienen todas sus cifras distintas?
- **(Clásico)** ¿Cuántas diagonales tiene un polígono convexo de $n$ lados?
- **(Clásico)** En una fiesta hay $n$ personas que se dan la mano una vez cada par. ¿Cuántos apretones de manos hay en total? *(Compárese con [grafos-fundamentos](grafos-fundamentos): es el número de aristas de $K_n$.)*
- **(Iniciación)** ¿De cuántas formas se pueden repartir $7$ caramelos idénticos entre $3$ niños, si cada uno debe recibir al menos uno?
- **(OMG, clásico)** ¿Cuántos subconjuntos de $\{1, 2, \ldots, 10\}$ tienen exactamente $3$ elementos y no contienen dos enteros consecutivos?
