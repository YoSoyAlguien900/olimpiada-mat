---
title: "Coeficientes binomiales: identidades y el triángulo de Pascal"
preview: "El número $\\binom{n}{k}$ aparece en conteo, álgebra, probabilidad y teoría de números. Sus identidades —Pascal, Vandermonde, suma alternada— son el álgebra elemental de la combinatoria."
dificultad: regional
tags: [binomiales, pascal, vandermonde, identidades, conteo]
prerequisites: [principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Para enteros $n \geq k \geq 0$, el **coeficiente binomial** $\binom{n}{k}$ —léase "$n$ sobre $k$"— cuenta el número de subconjuntos de $k$ elementos de un conjunto de $n$ elementos:
$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}.
$$
Convenimos $\binom{n}{k} = 0$ si $k < 0$ o $k > n$. Esta convención hace que las identidades que siguen sean válidas sin excepciones para todos los enteros.

## Teorema

Las identidades fundamentales son:

**1. Simetría.** $\displaystyle \binom{n}{k} = \binom{n}{n-k}$.

**2. Regla de Pascal.** $\displaystyle \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.

**3. Teorema del binomio (Newton).** $\displaystyle (x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{k} y^{n-k}$.

**4. Suma de fila.** $\displaystyle \sum_{k=0}^{n} \binom{n}{k} = 2^n$.

**5. Suma alternada.** $\displaystyle \sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0 \quad (n \geq 1)$.

**6. Identidad de la columna (hockey stick).** $\displaystyle \sum_{i=k}^{n} \binom{i}{k} = \binom{n+1}{k+1}$.

**7. Absorción.** $\displaystyle \binom{n}{k} = \frac{n}{k}\binom{n-1}{k-1} \quad (k \geq 1)$.

**8. Identidad de Vandermonde.** $\displaystyle \sum_{i=0}^{k} \binom{m}{i}\binom{n}{k-i} = \binom{m+n}{k}$.

## Demostración

**(1) Simetría.** Elegir $k$ elementos para incluir equivale a elegir $n - k$ para excluir; biyección directa entre ambas familias de subconjuntos. $\square$

**(2) Pascal.** Fijemos un elemento $x$ del conjunto de $n$. Los subconjuntos de tamaño $k$ se separan en dos clases disjuntas: los que **no contienen** $x$ (un subconjunto de tamaño $k$ del resto, que tiene $n-1$ elementos: hay $\binom{n-1}{k}$) y los que **sí contienen** $x$ (eligiendo $k-1$ elementos más del resto: hay $\binom{n-1}{k-1}$). Por la regla de la suma, $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$. $\square$

Esta identidad es la base recursiva del célebre **triángulo de Pascal**, donde cada entrada es la suma de las dos que tiene encima:
$$
\begin{array}{ccccccccccc}
 &&&&&1&&&&& \\
 &&&&1&&1&&&& \\
 &&&1&&2&&1&&& \\
 &&1&&3&&3&&1&& \\
 &1&&4&&6&&4&&1&
\end{array}
$$

**(3) Binomio de Newton.** Al expandir $(x+y)^n = (x+y)(x+y)\cdots(x+y)$ ($n$ factores), cada término del desarrollo se obtiene eligiendo, de cada uno de los $n$ factores, o bien $x$ o bien $y$. El término $x^k y^{n-k}$ aparece tantas veces como formas haya de elegir, de los $n$ factores, los $k$ que aportan una $x$: exactamente $\binom{n}{k}$ veces. $\square$ *(Una demostración alternativa por inducción usando la regla de Pascal se desarrolla en* [binomio-newton-demos](../demostraciones/binomio-newton-demos)*.)*

**(4) y (5).** Se obtienen evaluando el binomio de Newton en $x = y = 1$ (da $2^n$) y en $x = 1, y = -1$ (da $0$ para $n \geq 1$, pues $(1-1)^n = 0$). $\square$

**(6) Hockey stick.** Por inducción usando Pascal en sentido inverso: $\binom{k}{k} = \binom{k+1}{k+1}$ trivialmente, y
$$
\binom{n+1}{k+1} = \binom{n}{k+1} + \binom{n}{k} = \Big(\sum_{i=k}^{n-1}\binom{i}{k}\Big) + \binom{n}{k} = \sum_{i=k}^{n} \binom{i}{k}. \qquad \square
$$

**(7) Absorción.** Cálculo directo: $\dfrac{n}{k}\binom{n-1}{k-1} = \dfrac{n}{k}\cdot\dfrac{(n-1)!}{(k-1)!(n-k)!} = \dfrac{n!}{k!(n-k)!} = \binom{n}{k}$. Combinatoriamente: elegir $k$ elementos de $n$ y distinguir uno de ellos es lo mismo que elegir primero el distinguido ($n$ formas) y luego $k-1$ más del resto ($\binom{n-1}{k-1}$); pero cada subconjunto se cuenta $k$ veces (una por cada posible distinguido). $\square$

**(8) Vandermonde.** Si tenemos $m$ objetos de un tipo y $n$ de otro, elegir $k$ del total de $m+n$ equivale a elegir $i$ del primer grupo y $k-i$ del segundo, para algún $i$; sumando sobre las elecciones disjuntas de $i$ se obtiene la identidad. $\square$

## Ejemplo

**Ejemplo 1.** $\displaystyle\sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1}$. Por absorción, $k\binom{n}{k} = n\binom{n-1}{k-1}$, así que la suma es $n\sum_{k\geq 1} \binom{n-1}{k-1} = n \cdot 2^{n-1}$.

**Ejemplo 2.** $\displaystyle\binom{2n}{n} = \sum_{k=0}^n \binom{n}{k}^2$. Es Vandermonde con $m = n$, usando $\binom{n}{k} = \binom{n}{n-k}$: $\sum_k \binom{n}{k}\binom{n}{n-k} = \binom{2n}{n}$.

**Ejemplo 3 (paridad de $\binom{n}{k}$, teorema de Kummer/Lucas).** El coeficiente $\binom{n}{k}$ es impar si y solo si, en binario, cada bit de $k$ es $\leq$ el bit correspondiente de $n$ (es decir, $k \;\&\; n = k$, el AND a nivel de bits). Esto se sigue del [teorema de Lucas](../../teoria-numeros/contenidos/teorema-lucas-binomial) y produce el patrón fractal del **triángulo de Sierpiński** al colorear las entradas impares del triángulo de Pascal módulo $2$.

## Aplicaciones

### Conteo de caminos reticulares

**Problema.** ¿Cuántos caminos van de $(0,0)$ a $(m,n)$ moviéndose solo hacia la derecha o hacia arriba, en pasos unitarios?

**Solución.** Cualquier camino consta de $m + n$ pasos, de los cuales $m$ son "derecha" y $n$ son "arriba"; el camino queda determinado por **qué** $m$ de los $m+n$ pasos son horizontales. La respuesta es $\binom{m+n}{m}$. $\blacksquare$

Esta interpretación geométrica hace *visibles* identidades como Pascal (el último paso llega desde la izquierda o desde abajo) y la del palo de hockey (sumar sobre el primer momento en que el camino toca una recta vertical fija). Es la puerta de entrada natural a los [números de Catalan](numeros-catalan), que cuentan caminos con restricciones adicionales.

### Estimaciones del coeficiente central

**Problema.** Probar que $\dfrac{4^n}{2n+1} \leq \binom{2n}{n} \leq 4^n$.

**Solución (cota superior).** Por la identidad (4), $\sum_{k=0}^{2n}\binom{2n}{k} = 4^n$, y $\binom{2n}{n}$ es uno de los $2n+1$ sumandos no negativos, luego $\binom{2n}{n} \leq 4^n$.

**Solución (cota inferior).** El coeficiente $\binom{2n}{n}$ es el máximo de la fila $2n$ (los binomiales crecen y luego decrecen, simétricamente). Como hay $2n+1$ términos sumando $4^n$ y el máximo no puede ser menor que el promedio, $\binom{2n}{n} \geq \dfrac{4^n}{2n+1}$. $\blacksquare$

Estimaciones de este tipo son la herramienta estándar para acotar $\binom{2n}{n}$ en problemas de teoría de números (por ejemplo, en demostraciones del postulado de Bertrand) y en argumentos de conteo asintótico.

## Observación

El **principio de conteo doble** —calcular una misma cantidad de dos formas distintas— es la fuente de casi todas las identidades binomiales no triviales. Cada identidad de esta página admite (y merece) una lectura combinatoria: no son manipulaciones algebraicas que "casualmente" funcionan, sino afirmaciones sobre conjuntos que se pueden *ver*. Acostumbrarse a buscar esa lectura —en lugar de recurrir solo al cálculo— es la diferencia entre memorizar fórmulas y dominarlas. Véase [conteo-doble](../metodos/conteo-doble) para una exploración sistemática de esta idea.

## Problemas relacionados

- **(Clásico)** Demostrar que $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$ contando subconjuntos de $\{1,\ldots,n\}$ por tamaño.
- **(Clásico)** Probar que $\displaystyle\sum_{k=0}^n \binom{n}{k}\binom{k}{m} = \binom{n}{m}2^{n-m}$ para $0 \leq m \leq n$.
- **(IMO 1981/P1, adaptado)** Determinar el máximo valor de $m^2+n^2$, donde $m,n$ son enteros con $1\le m,n\le 1981$ que satisfacen $(n^2-mn-m^2)^2=1$. *(No es de binomiales, pero requiere la misma familiaridad con identidades combinatorias y recurrencias —aparecen los números de Fibonacci.)*
- **(Clásico)** Probar que $\binom{2n}{n}$ es siempre par para $n \geq 1$.
- **(Putnam, clásico)** Demostrar que $\displaystyle \sum_{k=0}^{n}\binom{n}{k}^2 \binom{2k}{k}^{-1}$ tiene una forma cerrada simple (explorar casos pequeños y conjeturar).
