---
title: "Teoría extremal de conjuntos: Sperner, Erdős–Ko–Rado y cadenas"
preview: "¿Cuántos subconjuntos de $\\{1,\\ldots,n\\}$ se pueden elegir sin que ninguno contenga a otro? ¿Y sin que dos sean disjuntos? Preguntas de apariencia inocente cuyas respuestas exactas son joyas de la combinatoria del siglo XX."
dificultad: internacional
tags: [extremal, sperner, erdos-ko-rado, anticadenas, conjuntos]
prerequisites: [coeficientes-binomiales, principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Sea $[n] = \{1, 2, \ldots, n\}$. Una familia $\mathcal{F}$ de subconjuntos de $[n]$ es:

- una **anticadena** (o familia de Sperner) si ningún miembro contiene a otro: $A \not\subseteq B$ para $A \neq B \in \mathcal{F}$;
- **intersectante** si $A \cap B \neq \varnothing$ para todos $A, B \in \mathcal{F}$ (incluyendo $A = B$, lo que excluye $\varnothing$);
- una **cadena** si está totalmente ordenada por inclusión: $A_1 \subsetneq A_2 \subsetneq \cdots$.

La **teoría extremal de conjuntos** pregunta: ¿cuál es el tamaño máximo posible de $|\mathcal{F}|$ bajo restricciones de este tipo?

## Teorema

**1. Teorema de Sperner (1928).** El tamaño máximo de una anticadena en $2^{[n]}$ es $\displaystyle \binom{n}{\lfloor n/2 \rfloor}$, alcanzado por la familia de todos los subconjuntos de tamaño $\lfloor n/2 \rfloor$.

**2. Teorema de Erdős–Ko–Rado (1961).** Si $\mathcal{F}$ es una familia intersectante de $k$-subconjuntos de $[n]$ con $n \geq 2k$, entonces $\displaystyle |\mathcal{F}| \leq \binom{n-1}{k-1}$, alcanzado por la familia de todos los $k$-subconjuntos que contienen un elemento fijo.

**3. Lema de descomposición en cadenas (Dilworth / de Bruijn–Tengbergen–Kruyswijk).** El conjunto $2^{[n]}$, ordenado por inclusión, se puede descomponer en exactamente $\binom{n}{\lfloor n/2\rfloor}$ cadenas disjuntas, cada una pasando por un nivel "central".

## Demostración

**(1) Sperner — vía cadenas y LYM.** La demostración más limpia combina dos ideas.

*Cota vía conteo de cadenas (LYM, Lubell–Yamamoto–Meshalkin).* Hay $n!$ cadenas maximales $\varnothing \subsetneq A_1 \subsetneq \cdots \subsetneq A_n = [n]$ (una por cada orden de inserción de los elementos). Un conjunto $A$ de tamaño $k$ pertenece a exactamente $k!(n-k)!$ de estas cadenas (las formas de construir $A$ insertando sus elementos, seguidas de las de completar el resto). Si $\mathcal{F}$ es una anticadena, **ninguna cadena maximal puede contener dos miembros distintos de $\mathcal{F}$** (si $A \subsetneq B$ están ambos en una cadena, contradicen que $\mathcal F$ es anticadena). Por tanto, sumando sobre $\mathcal F$ el número de cadenas que pasan por cada miembro, obtenemos a lo sumo $n!$:
$$
\sum_{A \in \mathcal F} |A|!\,(n-|A|)! \;\leq\; n!, \qquad \text{es decir} \qquad \sum_{A \in \mathcal F} \frac{1}{\binom{n}{|A|}} \leq 1.
$$
Como $\binom{n}{|A|} \leq \binom{n}{\lfloor n/2 \rfloor}$ para todo $|A|$, cada sumando es $\geq 1/\binom{n}{\lfloor n/2\rfloor}$, así que $|\mathcal{F}| / \binom{n}{\lfloor n/2\rfloor} \leq \sum_{A} 1/\binom{n}{|A|} \leq 1$, de donde $|\mathcal F| \leq \binom{n}{\lfloor n/2 \rfloor}$. $\blacksquare$

*Igualdad.* La familia de todos los subconjuntos de tamaño $\lfloor n/2 \rfloor$ es claramente una anticadena (dos conjuntos del mismo tamaño nunca se contienen estrictamente) de tamaño $\binom{n}{\lfloor n/2 \rfloor}$, mostrando que la cota es óptima. $\square$

**(2) Erdős–Ko–Rado — vía el argumento "circular" de Katona.** Disponemos los elementos de $[n]$ en un círculo (de las $(n-1)!$ formas posibles, todas equivalentes por simetría). Para cada disposición circular, los $k$-subconjuntos que forman un **arco contiguo** son $n$ en total, y a lo sumo $k$ de ellos pueden pertenecer simultáneamente a una familia intersectante $\mathcal{F}$ —dos arcos disjuntos de longitud $k$ no pueden ser ambos miembros de $\mathcal F$, y un análisis cuidadoso de los arcos que se solapan muestra que como mucho $k$ de los $n$ arcos están en $\mathcal{F}$—. Promediando sobre las $(n-1)!$ disposiciones circulares y contando cuántas veces aparece cada $k$-subconjunto fijo como arco (exactamente $k!(n-k)!$ veces), se obtiene
$$
|\mathcal{F}| \cdot k!\,(n-k)! \;\leq\; k \cdot (n-1)!\quad\Longrightarrow\quad |\mathcal F| \leq \frac{k\,(n-1)!}{k!\,(n-k)!} = \binom{n-1}{k-1}. \qquad \blacksquare
$$

*Igualdad.* La familia de todos los $k$-subconjuntos que contienen el elemento $1$ es intersectante (todos comparten $1$) y tiene $\binom{n-1}{k-1}$ miembros. $\square$

## Ejemplo

**Ejemplo 1.** Para $n = 4$: la familia $\{\{1,2\},\{1,3\},\{1,4\},\{2,3\},\{2,4\},\{3,4\}\}$ —todos los $2$-subconjuntos— es una anticadena de tamaño $\binom{4}{2} = 6 = \binom{4}{\lfloor 4/2\rfloor}$, óptima por Sperner.

**Ejemplo 2.** Para $n = 6, k = 2$ ($n \geq 2k$): la familia de pares que contienen al elemento $1$ tiene $\binom{5}{1} = 5$ miembros, y Erdős–Ko–Rado garantiza que ninguna familia intersectante de pares puede ser mayor —en contraste con familias intersectantes de $3$-subconjuntos de $[6]$, donde *cualquier* familia de más de la mitad de los $3$-subconjuntos es automáticamente intersectante (dos $3$-subconjuntos de un conjunto de $6$ elementos son disjuntos si y solo si son complementarios), ilustrando por qué la condición $n \geq 2k$ es esencial.

## Aplicaciones

### Reconocer una anticadena o familia intersectante escondida

La dificultad real de estos problemas rara vez está en aplicar el teorema —una vez identificado el contexto, la cota sale de inmediato—, sino en **reconocer que un problema de apariencia distinta es, en esencia, una pregunta sobre anticadenas o familias intersectantes**.

**Problema.** En un conjunto de $100$ enteros positivos distintos, ninguno divide a otro. ¿Cuál es el tamaño máximo posible de tal conjunto si todos sus elementos están entre $1$ y $200$?

**Solución (esquema).** "Ninguno divide a otro" es la relación de divisibilidad jugando el papel de inclusión: agrupando los enteros de $[1,200]$ en cadenas según la relación "$a \mid b$ y $b/a$ es potencia de $2$" (cada entero impar $m$ genera la cadena $m, 2m, 4m, \ldots \leq 200$), el problema se reduce —vía el principio del palomar sobre las cadenas— a una variante del teorema de Dilworth / Sperner aplicada al poset de divisibilidad. La respuesta es $100$ (los enteros de $101$ a $200$). $\blacksquare$

### El método de compresión (shifting)

Una técnica recurrente para probar resultados extremales sobre familias de conjuntos es la **compresión**: una operación que transforma una familia en otra, del mismo tamaño y que preserva la propiedad relevante (intersectante, anticadena), pero "más simple" (más cercana a un segmento inicial en algún orden). Iterando compresiones se reduce el problema a familias de forma muy especial, donde la cota se verifica directamente. Esta idea —reducir el caso general a un caso "canónico" mediante transformaciones que no empeoran la cantidad de interés— es transversal a toda la combinatoria extremal y aparece también en la demostración de Hilton–Milner (refinamiento de Erdős–Ko–Rado) y en problemas de geometría combinatoria.

### Más allá: la jerarquía de resultados extremales

Sperner y Erdős–Ko–Rado son la puerta de entrada a una rica jerarquía de resultados —teorema de Kruskal–Katona (cotas sobre "sombras" de familias de conjuntos), teorema de Frankl–Wilson (familias con intersecciones prescritas módulo un primo, con aplicaciones sorprendentes a geometría y teoría de códigos), y la conexión profunda con la **teoría de Ramsey** (ver [ramsey](ramsey)): ambas áreas estudian cuán grande puede ser una estructura "libre" de cierta configuración, y comparten técnicas (compresión, el método probabilístico, argumentos de doble conteo).

## Observación

Estos teoremas ejemplifican un patrón recurrente en combinatoria extremal: **una cota superior elegante, con un argumento de conteo (a menudo doble conteo o promedio) que es sorprendentemente corto**, acompañada de una **familia extremal explícita** que demuestra su optimalidad. Cuando un problema pide "el máximo tamaño de una familia con propiedad $P$", conviene primero **adivinar la familia extremal** —casi siempre tiene una estructura muy simple y simétrica— y luego buscar el argumento de conteo que iguale esa cota. Adivinar primero la respuesta orienta la búsqueda de la demostración.

## Problemas relacionados

- **(Clásico)** Probar que toda familia de subconjuntos de $[n]$ con más de $2^{n-1}$ miembros contiene dos conjuntos $A \subsetneq B$. *(Caso particular inmediato de Sperner para anticadenas "grandes".)*
- **(Clásico)** Demostrar el lema LYM en su forma general $\sum_{A \in \mathcal F} \binom{n}{|A|}^{-1} \leq 1$ para cualquier anticadena $\mathcal F$, sin usar Sperner como atajo.
- **(ISL, clásico)** Sea $\mathcal{F}$ una familia de subconjuntos de $[n]$ tal que $A \cup B \neq [n]$ para todos $A, B \in \mathcal{F}$. Probar que $|\mathcal{F}| \leq 2^{n-1}$. *(Dualidad: complementar y aplicar el resultado intersectante correspondiente.)*
- **(Clásico)** Probar que si $n = 2k$, toda familia intersectante de $k$-subconjuntos de $[n]$ tiene a lo sumo $\binom{2k-1}{k-1} = \frac{1}{2}\binom{2k}{k}$ miembros, e identificar dónde falla el argumento de Erdős–Ko–Rado para $n < 2k$.
- **(Olimpiada, clásico)** En un conjunto de $2n$ personas, cada una conoce a al menos $n$ de las demás. Probar que existen $4$ personas que se conocen mutuamente por parejas o, alternativamente, demostrar una cota relacionada usando un argumento de tipo intersectante sobre los conjuntos de conocidos.
