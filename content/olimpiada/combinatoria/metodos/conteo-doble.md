---
title: "Conteo doble (double counting) y el principio de Fubini combinatorio"
preview: "Calcular la misma cantidad de dos maneras distintas y comparar los resultados: una idea de una simplicidad desarmante que produce identidades, desigualdades y demostraciones de existencia por igual."
dificultad: regional
tags: [conteo-doble, fubini, sumas, identidades, tecnica]
prerequisites: [principios-conteo, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **conteo doble** —también llamado *principio de Fubini combinatorio*— consiste en contar el número de elementos de un mismo conjunto, o el valor de una misma suma, **de dos formas distintas**, y deducir información (una identidad, una desigualdad, o la existencia de cierto elemento) al igualar ambos resultados.

La forma más característica: dado un conjunto de pares $\mathcal{P} \subseteq A \times B$, su tamaño se puede calcular sumando por filas o por columnas:
$$
|\mathcal{P}| = \sum_{a \in A} |\{b \in B : (a,b) \in \mathcal{P}\}| = \sum_{b \in B} |\{a \in A : (a,b) \in \mathcal{P}\}|.
$$
Cuando una de las dos sumas es fácil de evaluar y la otra codifica la cantidad de interés, la igualdad produce información no trivial casi gratuitamente.

## Teorema

No hay un enunciado único: el conteo doble es un **patrón de demostración**, instanciado de forma distinta en cada contexto. Tres instancias canónicas:

**1. Lema del apretón de manos.** $\sum_{v} \deg(v) = 2|E|$ — contar pares (vértice, arista incidente) por vértice o por arista (ver [grafos-fundamentos](../contenidos/grafos-fundamentos)).

**2. Identidades binomiales.** $\sum_{k} \binom{n}{k} = 2^n$, $\sum_k k\binom{n}{k} = n2^{n-1}$, la identidad de Vandermonde — todas se obtienen contando un mismo conjunto de subconjuntos (o pares de subconjuntos) de dos formas (ver [coeficientes-binomiales](../contenidos/coeficientes-binomiales)).

**3. Desigualdad de Cauchy–Schwarz combinatoria / argumento de promedio.** Si una suma $\sum_x f(x)$ se puede acotar contando incidencias de dos formas, a menudo se obtiene una **desigualdad** (no solo una identidad): el promedio de una cantidad no negativa acota su máximo por debajo.

## Demostración

Presentamos tres derivaciones representativas, que ilustran la versatilidad del método.

**(a) Suma de los grados (igualdad exacta).** Formamos el conjunto $\mathcal{I} = \{(v, e) : v \text{ es extremo de } e\}$ de **incidencias** vértice-arista. Contando por vértice: cada $v$ aporta $\deg(v)$ incidencias, total $\sum_v \deg(v)$. Contando por arista: cada arista tiene exactamente $2$ extremos, total $2|E|$. Igualando, $\sum_v \deg(v) = 2|E|$. $\square$

**(b) Identidad de la suma ponderada $\sum_k k\binom{n}{k} = n2^{n-1}$.** Sea $\mathcal{P} = \{(x, S) : x \in S \subseteq [n]\}$ el conjunto de pares (elemento, subconjunto que lo contiene). Contando por subconjunto: cada $S$ de tamaño $k$ aporta $k$ pares, así que $|\mathcal P| = \sum_{k} k \binom{n}{k}$ (sumando sobre todos los subconjuntos según su tamaño). Contando por elemento: cada $x \in [n]$ pertenece a exactamente $2^{n-1}$ subconjuntos (los que se obtienen decidiendo libremente, para cada uno de los otros $n-1$ elementos, si entra o no), así que $|\mathcal P| = n \cdot 2^{n-1}$. Igualando ambos conteos, $\sum_k k \binom{n}{k} = n \cdot 2^{n-1}$. $\blacksquare$

**(c) Una desigualdad: existencia de un elemento "popular" (argumento de promedio).** Si $n$ objetos se distribuyen entre $m$ cajas, existe una caja con al menos $\lceil n/m \rceil$ objetos. Contamos el total de objetos de dos formas: es $n$, y también es $\sum_{i=1}^m c_i$ donde $c_i$ es el contenido de la caja $i$. Si todas las $c_i < n/m$, entonces $\sum c_i < m \cdot (n/m) = n$, contradicción. Esto **es** el principio del palomar (ver [palomar](palomar)) — y vale la pena notar que su demostración natural es, en el fondo, un argumento de conteo doble disfrazado de promedio. $\square$

## Ejemplo

**Ejemplo 1 (suma de divisores promedio).** Probar que $\displaystyle\sum_{n=1}^{N} \left\lfloor \frac{N}{n} \right\rfloor = \sum_{n=1}^{N} d(n)$, donde $d(n)$ es el número de divisores de $n$.

*Solución.* Ambos lados cuentan $|\{(a,b) : 1 \leq a, b \leq N,\ a \mid b\}|$: el lado izquierdo agrupa por $a$ (para cada $a$, hay $\lfloor N/a \rfloor$ múltiplos de $a$ en $[1,N]$), el derecho agrupa por $b$ (para cada $b$, hay $d(b)$ divisores). $\blacksquare$ Esta identidad —puramente de teoría de números— se demuestra sin esfuerzo algebraico alguno una vez reconocida como conteo doble; compárese con el tratamiento de [funciones multiplicativas](../../teoria-numeros/contenidos/funciones-multiplicativas).

**Ejemplo 2 (suma de los cuadrados de los grados y triángulos).** En cualquier grafo, $\sum_v \binom{\deg(v)}{2}$ cuenta el número de **caminos de longitud $2$** (ternas $u$-$v$-$w$ con $v$ el vértice central): cada vértice central $v$ contribuye $\binom{\deg(v)}{2}$ formas de elegir sus dos extremos. Esta cantidad es clave en estimaciones del número de triángulos y en la demostración del teorema de Mantel/Turán (ver [grafos-fundamentos](../contenidos/grafos-fundamentos) y la colección de problemas resueltos).

## Aplicaciones

### Cómo reconocer una oportunidad de conteo doble

La señal más clara: el problema involucra una **suma cuyo valor parece difícil de calcular directamente**, pero que se puede reescribir como el cardinal de un conjunto de pares (o tuplas) — y ese conjunto admite una segunda forma natural de agruparse. Las preguntas orientadoras: *¿qué objeto compuesto estoy contando? ¿De qué dos maneras "naturales" se puede descomponer ese objeto en sus partes?*

**Problema.** En un torneo de "todos contra todos" entre $n$ equipos (sin empates), sea $w_i$ el número de victorias del equipo $i$. Probar que $\displaystyle\sum_{i=1}^{n} \binom{w_i}{2} = \binom{n}{3} - \sum_{i=1}^n \binom{\ell_i}{2}$ no es, en general, la identidad correcta — en su lugar, identificar y demostrar la relación verdadera entre $\sum \binom{w_i}{2}$, $\sum \binom{\ell_i}{2}$ (derrotas) y los **triángulos cíclicos** del torneo.

*Esquema.* El número total de ternas $\{i,j,k\}$ es $\binom{n}{3}$. Cada terna es, o bien un **triángulo transitivo** (un equipo le gana a los otros dos, que juegan entre sí) — contado exactamente una vez por $\sum_i \binom{w_i}{2}$, fijando el "vértice dominante" — o un **triángulo cíclico** ($i$ vence a $j$, $j$ a $k$, $k$ a $i$). Por tanto $\binom{n}{3} = \sum_i \binom{w_i}{2} + (\text{número de triángulos cíclicos})$ — un ejemplo perfecto de identidad descubierta, no solo verificada, mediante conteo doble. $\blacksquare$

### Conteo doble como certificado de no-existencia

Cuando dos conteos de la misma cantidad producen valores que **no pueden ser iguales** (uno es siempre par y el otro impar, o uno divisible por $p$ y el otro no), se obtiene una contradicción inmediata —y por tanto una prueba de imposibilidad—. Esta variante es uno de los puentes más directos hacia los [argumentos de invariante y coloración](invariantes-y-coloracion): un invariante es, frecuentemente, "el resultado de un conteo doble que no cuadra".

## Observación

El conteo doble es quizás la técnica de mayor "retorno por unidad de esfuerzo" en toda la combinatoria: no requiere maquinaria, solo **disciplina para identificar el conjunto correcto de pares y las dos formas naturales de agruparlo**. Cuando una identidad o desigualdad combinatoria parece "salir de la nada" en una demostración elegante, casi siempre hay un conteo doble debajo —y reconstruir ese argumento es el camino más corto hacia la comprensión genuina (en contraste con la verificación algebraica término a término, que confirma pero no explica).

## Problemas relacionados

- **(Clásico)** Probar $\displaystyle\sum_{k=1}^{n} k^2 = \binom{n+1}{2} + 2\binom{n+1}{3}$ mediante un argumento de conteo doble (contar pares y ternas ordenadas adecuadas).
- **(Clásico)** En una reunión de $n$ personas, sea $a_{ij} = 1$ si $i$ y $j$ son amigos y $0$ si no. Probar que $\sum_{i} \left(\sum_j a_{ij}\right)^2 = \sum_{i,j,k} a_{ij}a_{ik}$ y dar una interpretación combinatoria de ambos lados (caminos de longitud $2$).
- **(IMO 1998/P2, esquema)** En un concurso, $m$ concursantes son evaluados por $n \geq 3$ jueces (impar) con "apto/no apto"; si cada par de jueces coincide en a lo sumo $k$ concursantes, probar $k/m \geq (n-1)/(2n)$. *(El argumento estándar cuenta de dos formas el número de tripletas (juez, juez, concursante) en desacuerdo.)*
- **(Clásico)** Demostrar la identidad de Vandermonde $\sum_i \binom{m}{i}\binom{n}{k-i} = \binom{m+n}{k}$ contando subconjuntos de tamaño $k$ de un conjunto particionado en dos partes de tamaños $m$ y $n$.
- **(Olimpiada, clásico)** En un grafo con $n$ vértices y $m$ aristas, probar que el número de triángulos es al menos $\frac{m(4m-n^2)}{3n}$ (cuando esta cantidad es positiva), contando de dos formas el número de "ángulos" (caminos de longitud $2$) y aplicando una desigualdad de convexidad.
