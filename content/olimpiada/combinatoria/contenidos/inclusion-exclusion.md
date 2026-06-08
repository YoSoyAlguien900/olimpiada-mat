---
title: "Principio de inclusión-exclusión"
preview: "Para contar la unión de varios conjuntos hay que sumar, restar las intersecciones por pares, sumar las triples... La fórmula que convierte el solapamiento en una suma alternada exacta."
dificultad: regional
tags: [inclusion-exclusion, conteo, union-conjuntos, desarreglos]
prerequisites: [principios-conteo, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Cuando los conjuntos $A_1, \ldots, A_n$ se solapan, $|A_1 \cup \cdots \cup A_n| \neq |A_1| + \cdots + |A_n|$: cada elemento que pertenece a varios conjuntos se cuenta varias veces. El **principio de inclusión-exclusión** (PIE) corrige sistemáticamente este sobreconteo.

## Teorema

Para conjuntos finitos $A_1, \ldots, A_n$ dentro de un universo,
$$
\left|\bigcup_{i=1}^n A_i\right| \;=\; \sum_{i} |A_i| \;-\; \sum_{i<j} |A_i \cap A_j| \;+\; \sum_{i<j<k} |A_i \cap A_j \cap A_k| \;-\; \cdots \;+\; (-1)^{n+1} |A_1 \cap \cdots \cap A_n|,
$$
es decir,
$$
\left|\bigcup_{i=1}^n A_i\right| \;=\; \sum_{\varnothing \neq S \subseteq \{1,\ldots,n\}} (-1)^{|S|+1} \left|\bigcap_{i \in S} A_i\right|.
$$

**Forma complementaria.** Si $U$ es el universo finito que contiene a todos los $A_i$,
$$
\left|U \setminus \bigcup_{i=1}^n A_i\right| \;=\; \sum_{S \subseteq \{1,\ldots,n\}} (-1)^{|S|} \left|\bigcap_{i \in S} A_i\right| \qquad (\text{con } \textstyle\bigcap_{i\in\varnothing} A_i := U).
$$

## Demostración

Fijemos un elemento $x \in U$ y sea $T = \{i : x \in A_i\}$, $t = |T|$. Calculamos cuántas veces contribuye $x$ al lado derecho de la fórmula complementaria:
$$
\sum_{S \subseteq \{1,\ldots,n\}} (-1)^{|S|} [x \in \textstyle\bigcap_{i\in S} A_i] = \sum_{S \subseteq T} (-1)^{|S|} = \sum_{j=0}^{t} (-1)^j \binom{t}{j}.
$$
Por la identidad de la suma alternada (ver [coeficientes-binomiales](coeficientes-binomiales)), esta suma vale $0$ si $t \geq 1$ y vale $1$ si $t = 0$. Es decir, $x$ contribuye exactamente $1$ al lado derecho si $x \notin \bigcup A_i$ (entonces $t=0$), y $0$ en caso contrario. Sumando sobre todos los $x \in U$ obtenemos precisamente $\big|U \setminus \bigcup A_i\big|$. La forma original se deduce restando de $|U|$. $\blacksquare$

## Ejemplo

**Ejemplo 1 (dos conjuntos).** $|A \cup B| = |A| + |B| - |A \cap B|$ — el caso $n=2$, ya familiar.

**Ejemplo 2 (criba simple).** ¿Cuántos enteros entre $1$ y $100$ son divisibles por $2$ o por $3$?

Sean $A = \{$múltiplos de $2\}$, $B = \{$múltiplos de $3\}$. Entonces $|A| = 50$, $|B| = 33$, $|A \cap B| = |\{$múltiplos de $6\}| = 16$. Por PIE, $|A \cup B| = 50 + 33 - 16 = 67$.

**Ejemplo 3 (función $\varphi$ de Euler).** El número de enteros en $[1, n]$ coprimos con $n = p_1^{a_1}\cdots p_r^{a_r}$ se calcula tomando $A_i = \{$múltiplos de $p_i$ en $[1,n]\}$ y aplicando la forma complementaria:
$$
\varphi(n) = n\prod_{i=1}^{r}\left(1 - \frac{1}{p_i}\right).
$$
Esta es exactamente la demostración combinatoria de la fórmula de $\varphi$ — véase [función de Euler](../../teoria-numeros/contenidos/funcion-euler).

## Aplicaciones

### Desarreglos (permutaciones sin puntos fijos)

**Problema.** Una permutación $\sigma$ de $\{1, \ldots, n\}$ es un **desarreglo** si $\sigma(i) \neq i$ para todo $i$. ¿Cuántos desarreglos hay?

**Solución.** Sea $A_i$ el conjunto de permutaciones con $\sigma(i) = i$. Queremos $\left|S_n \setminus \bigcup A_i\right|$, donde $|S_n| = n!$. Para cualquier $S \subseteq \{1,\ldots,n\}$ con $|S| = k$, el conjunto $\bigcap_{i \in S} A_i$ consta de las permutaciones que fijan los elementos de $S$ y permutan libremente el resto: $\left|\bigcap_{i\in S} A_i\right| = (n-k)!$. Hay $\binom{n}{k}$ subconjuntos de tamaño $k$, así que por la forma complementaria del PIE,
$$
D_n = \sum_{k=0}^{n} (-1)^k \binom{n}{k}(n-k)! = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}.
$$
Como $\sum_{k=0}^{\infty} \frac{(-1)^k}{k!} = e^{-1}$, se obtiene $D_n \approx n!/e$, y de hecho $D_n$ es el entero más cercano a $n!/e$ para $n \geq 1$. $\blacksquare$

Esta fórmula resuelve instantáneamente el clásico **problema del guardarropa** (problème des rencontres): la probabilidad de que nadie recupere su propio abrigo tiende a $1/e \approx 0{,}3679$, sorprendentemente independiente de $n$ para $n$ grande.

### Funciones sobreyectivas

**Problema.** ¿Cuántas funciones sobreyectivas hay de un conjunto de $n$ elementos a un conjunto de $k$ elementos?

**Solución.** El total de funciones es $k^n$. Sea $A_i$ el conjunto de funciones que **omiten** el valor $i$ (es decir, no sobreyectivas porque falta $i$ en la imagen). Para $S \subseteq \{1,\ldots,k\}$ con $|S| = j$, las funciones que omiten todos los valores de $S$ son las que aplican en los $k - j$ valores restantes: $(k-j)^n$ de ellas. Por PIE,
$$
\#\{\text{sobreyectivas}\} = \sum_{j=0}^{k} (-1)^j \binom{k}{j} (k-j)^n.
$$
Dividiendo entre $k!$ (para no distinguir el orden de las "cajas") se obtiene el **número de Stirling de segunda especie** $S(n,k)$ — véase [particiones-stirling-bell](particiones-stirling-bell). $\blacksquare$

### Criba de Eratóstenes-Legendre

**Problema.** Estimar (o calcular exactamente) cuántos enteros en $[1, N]$ no son divisibles por ninguno de los primos $p_1, \ldots, p_r$.

**Solución.** Aplicación directa de la forma complementaria con $A_i = \{$múltiplos de $p_i\}$:
$$
\#\{m \leq N : p_i \nmid m \;\forall i\} = \sum_{S \subseteq \{1,\ldots,r\}} (-1)^{|S|} \left\lfloor \frac{N}{\prod_{i \in S} p_i} \right\rfloor.
$$
Esta es la **fórmula de Legendre**, base teórica de la criba de Eratóstenes y punto de partida de las cribas modernas en teoría analítica de números. $\blacksquare$

## Observación

El PIE es el caso "discreto" de un fenómeno mucho más general: la **fórmula de inversión de Möbius** sobre el retículo de subconjuntos (y, en teoría de números, sobre el retículo de divisores). La suma alternada $\sum (-1)^{|S|}$ es precisamente la función de Möbius del álgebra booleana $2^{\{1,\ldots,n\}}$. Reconocer esta estructura permite trasladar argumentos de PIE a contextos aparentemente distintos —funciones multiplicativas, posets, polinomios cromáticos de grafos— sin reinventar la rueda.

## Problemas relacionados

- **(Clásico)** ¿Cuántos números del $1$ al $1000$ no son divisibles ni por $3$, ni por $5$, ni por $7$?
- **(Clásico)** ¿De cuántas formas se pueden colocar $8$ torres no atacantes en un tablero $8\times 8$ del que se han eliminado las casillas de la diagonal principal?
- **(IMO 1995, banco)** Probar que el número de permutaciones de $\{1, \ldots, 2n\}$ sin puntos fijos "consecutivos especiales" satisface una recurrencia derivable de PIE. *(Ejercicio de manejo de la criba con condiciones solapadas.)*
- **(Clásico)** Calcular $\displaystyle\sum_{k=0}^n (-1)^k \binom{n}{k}\binom{2n-2k}{n}$ y dar una interpretación combinatoria.
- **(Iberoamericana, clásico)** En una clase de $n$ alumnos cada uno escribe el nombre de un compañero al azar en un papel. ¿Cuál es la probabilidad de que al menos un alumno reciba su propio nombre? *(Aplicación directa de desarreglos / PIE.)*
