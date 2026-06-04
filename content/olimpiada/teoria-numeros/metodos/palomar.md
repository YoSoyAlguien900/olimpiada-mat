---
title: "Principio del palomar y sus generalizaciones"
preview: "Si se colocan $n+1$ objetos en $n$ cajas, alguna caja contiene al menos dos. Trivial en el enunciado, demoledor en aplicación: una de las técnicas más usadas en combinatoria olímpica."
dificultad: iniciacion
tags: [palomar, combinatoria, principio-cajas, dirichlet]
prerequisites: []
author: "Material olímpico"
updated: "2026-02-10"
---

## Definición

El **principio del palomar**, también llamado *principio de las cajas de Dirichlet* o *pigeonhole principle*, afirma:

## Teorema

*Si $n + 1$ objetos se distribuyen en $n$ cajas, entonces al menos una caja contiene dos o más objetos.*

Más generalmente: si $m$ objetos se distribuyen en $n$ cajas, alguna caja contiene al menos $\lceil m/n \rceil$ objetos.

## Demostración

Si todas las cajas contuvieran a lo más $\lceil m/n \rceil - 1$ objetos, el total sería a lo sumo $n \cdot (\lceil m/n \rceil - 1)$. Como $\lceil m/n \rceil - 1 < m/n$, obtendríamos un total estrictamente menor que $m$. Contradicción. $\blacksquare$

## Ejemplo

**Ejemplo 1.** Entre 7 personas hay dos que nacieron el mismo día de la semana.

**Ejemplo 2.** En cualquier conjunto de 5 enteros, hay dos con la misma paridad. (Solo hay 2 paridades: 5 > 2.)

**Ejemplo 3.** Entre 10 enteros cualesquiera, hay dos cuya diferencia es múltiplo de 9. (Las 10 clases módulo 9 son solo 9, así que dos enteros caen en la misma clase, y su diferencia es divisible por 9.)

## Aplicaciones

El verdadero arte del palomar es **inventar las cajas correctas**. A continuación algunos ejemplos donde la elección de cajas es la idea brillante.

### Aplicación 1: subconjuntos con suma divisible

**Problema.** Demostrar que entre cualesquiera $n$ enteros, existe un subconjunto no vacío cuya suma es divisible por $n$.

**Solución.** Sean $a_1, \ldots, a_n$ los enteros. Consideramos las sumas parciales

$$
S_0 = 0, \; S_1 = a_1, \; S_2 = a_1 + a_2, \; \ldots, \; S_n = a_1 + \cdots + a_n.
$$

Tenemos $n + 1$ sumas y $n$ posibles residuos módulo $n$. Por palomar, dos sumas $S_i$ y $S_j$ con $i < j$ tienen el mismo residuo. Entonces

$$
S_j - S_i \;=\; a_{i+1} + a_{i+2} + \cdots + a_j \;\equiv\; 0 \pmod n. \qquad \blacksquare
$$

### Aplicación 2: irracionalidad y aproximación diofántica

**Teorema (Dirichlet, 1842).** Para todo irracional $\alpha$ y todo entero $N \geq 1$, existen enteros $p, q$ con $1 \leq q \leq N$ tales que

$$
\left| \alpha - \frac{p}{q} \right| \;<\; \frac{1}{qN}.
$$

**Demostración.** Consideramos los $N+1$ números $0, \{\alpha\}, \{2\alpha\}, \ldots, \{N\alpha\}$ en el intervalo $[0, 1)$, donde $\{x\}$ denota la parte fraccionaria. Dividimos $[0, 1)$ en $N$ intervalos de longitud $1/N$:

$$
\left[0, \tfrac{1}{N}\right), \; \left[\tfrac{1}{N}, \tfrac{2}{N}\right), \; \ldots, \; \left[\tfrac{N-1}{N}, 1\right).
$$

Por palomar, dos de los $N + 1$ números caen en el mismo intervalo: digamos $\{i\alpha\}$ y $\{j\alpha\}$ con $i < j$. Entonces

$$
|(j - i)\alpha - (\lfloor j\alpha\rfloor - \lfloor i\alpha\rfloor)| \;<\; \frac{1}{N}.
$$

Poniendo $q = j - i$ y $p = \lfloor j\alpha\rfloor - \lfloor i\alpha\rfloor$, obtenemos $|q\alpha - p| < 1/N$, equivalente a la afirmación. $\blacksquare$

### Aplicación 3: geometría

**Problema (clásico).** Si se eligen 5 puntos dentro de un cuadrado de lado 1, hay dos a distancia $\leq \sqrt 2 / 2$.

**Solución.** Dividimos el cuadrado en 4 cuadraditos de lado $1/2$. Por palomar, dos puntos caen en el mismo cuadradito; su distancia es a lo más la diagonal de este, que mide $\sqrt 2 / 2$. $\blacksquare$

## Observación

La forma más fina del principio — el **palomar infinito** — afirma: si se distribuyen infinitos objetos en finitas cajas, alguna caja recibe infinitos. Es la base del **teorema de Ramsey** y de muchos argumentos en combinatoria infinita y análisis.

## Problemas relacionados

- **Erdős-Ko-Rado** (combinatoria extremal): cuántos subconjuntos $k$-arios de $\{1, \ldots, n\}$ pueden ser pairwise interesantes.
- **Existencia de un Hamilton subseguencia monótona** (Erdős-Szekeres).
