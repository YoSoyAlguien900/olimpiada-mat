---
title: "Principio del palomar y sus generalizaciones"
preview: "Si se colocan $n+1$ objetos en $n$ cajas, alguna caja contiene al menos dos. Trivial en el enunciado, demoledor en aplicación: una de las técnicas más usadas en combinatoria olímpica."
dificultad: iniciacion
tags: [palomar, combinatoria, principio-cajas, dirichlet]
prerequisites: []
author: "Adrián García Bouzas"
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

*La idea común.* El principio en sí es obvio; lo que resuelve el problema es **decidir qué son los objetos y qué son las cajas**. La regla de oro: las "cajas" son las posibles *categorías* (días, paridades, restos…), y basta tener más objetos que categorías para forzar una coincidencia.

**Ejemplo 1.** Entre $8$ personas hay dos que nacieron el mismo día de la semana.

*La idea.* Objetos = las personas; cajas = los $7$ días de la semana. Para forzar una coincidencia hace falta superar el número de cajas: con $8$ personas y $7$ días, $8 > 7$.

Por el palomar, alguna caja (día) recibe al menos dos personas. (Con solo $7$ personas podría haber exactamente una en cada día, por eso el enunciado clásico usa $8$.) $\square$

**Ejemplo 2.** En cualquier conjunto de $5$ enteros, hay dos con la misma paridad.

*La idea.* Solo existen **dos** paridades (par e impar): esas son las cajas. Cinco enteros en dos cajas obligan a repetir.

Como $5 > 2$, por el palomar dos de los enteros caen en la misma caja de paridad. $\square$

**Ejemplo 3.** Entre $10$ enteros cualesquiera, hay dos cuya diferencia es múltiplo de $9$.

*La idea.* Las cajas son los **restos módulo $9$**: hay $9$. Diez enteros en nueve cajas $\Rightarrow$ dos comparten resto, y dos números con el mismo resto tienen diferencia divisible por $9$.

Hay $9$ clases de resto módulo $9$ y $10$ enteros, así que dos caen en la misma clase; su diferencia es $\equiv 0 \pmod 9$. $\square$

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

**Problema 1 (OMG 2008/P6).** Consideramos $17$ enteros positivos, ninguno con un factor primo mayor que $7$. Demostrar que el producto de al menos dos de ellos es un cuadrado perfecto.

[[pista]]

Cada número es $2^a 3^b 5^c 7^d$. La "caja" de un número es la **paridad** de sus cuatro exponentes: el vector $(a,b,c,d) \bmod 2$. ¿Cuántas cajas hay?

[[/pista]]

[[solución]]

Como los únicos primos $\leq 7$ son $2, 3, 5, 7$, cada número se escribe $2^a 3^b 5^c 7^d$. Le asignamos como "caja" el vector de paridades de sus exponentes,

$$
(a \bmod 2,\; b \bmod 2,\; c \bmod 2,\; d \bmod 2) \in \{0,1\}^4,
$$

del que hay $2^4 = 16$ posibles. Tenemos $17 > 16$ números, así que por el palomar dos de ellos, digamos $x$ e $y$, tienen el **mismo** vector de paridades. Entonces en el producto $xy$ cada exponente es la suma de dos números de la misma paridad, es decir, **par**:

$$
xy = 2^{a_1+a_2} 3^{b_1+b_2} 5^{c_1+c_2} 7^{d_1+d_2}
$$

con todos los exponentes pares. Un número con todos los exponentes pares es un cuadrado perfecto. $\blacksquare$

[[/solución]]

**Problema 2 (IMO 1985/P4).** Dado un conjunto de $1985$ enteros positivos distintos, ninguno con divisor primo mayor que $26$, probar que contiene **cuatro** elementos distintos cuyo producto es la cuarta potencia de un entero.

[[pista]]

Hay $9$ primos $\leq 26$, así que $2^9 = 512$ vectores de paridad. Aplica el Problema 1 **dos veces**: primero extrae muchos pares de producto cuadrado; luego vuelve a aplicar el palomar a las raíces de esos cuadrados.

[[/pista]]

[[solución]]

Los primos $\leq 26$ son $2, 3, 5, 7, 11, 13, 17, 19, 23$: en total $9$. Como en el Problema 1, a cada número le asociamos su vector de paridades de exponentes en $\{0,1\}^9$, del que hay $2^9 = 512$.

**Etapa 1 (extraer pares de producto cuadrado).** Mientras queden al menos $513$ números sin usar, dos de ellos comparten vector de paridad (palomar), y su producto es un cuadrado perfecto; apartamos esos dos como una pareja y los retiramos. Partiendo de $1985$ y retirando de dos en dos hasta que queden $\leq 512$, el número de parejas formadas es al menos

$$
\frac{1985 - 512}{2} = \frac{1473}{2} > 736, \quad\text{es decir, al menos } 737 \text{ parejas}.
$$

Cada pareja tiene producto un cuadrado perfecto $s_i^2$, donde $s_i$ es un entero (positivo) cuyos factores primos siguen siendo $\leq 26$.

**Etapa 2 (emparejar las raíces).** Tenemos al menos $737 > 512$ valores $s_i$. Por el palomar aplicado a **sus** vectores de paridad, dos de ellos, $s_i$ y $s_j$, comparten paridad, luego $s_i s_j$ es un cuadrado perfecto: $s_i s_j = t^2$.

**Conclusión.** Las dos parejas $i$ y $j$ son disjuntas, así que sus cuatro números originales son distintos, y su producto es

$$
(s_i^2)(s_j^2) = (s_i s_j)^2 = (t^2)^2 = t^4,
$$

una cuarta potencia. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** Demostrar que entre cualesquiera $n+1$ enteros hay dos cuya diferencia es múltiplo de $n$.

[[pista]]

Las cajas son los $n$ restos posibles al dividir por $n$.

[[/pista]]

[[solución]]

Al dividir por $n$ solo hay $n$ restos posibles: $0, 1, \ldots, n-1$ (las cajas). Tenemos $n+1$ enteros (los objetos), y $n+1 > n$, así que por el palomar dos de ellos, $a$ y $b$, dejan el mismo resto módulo $n$. Entonces

$$
a \equiv b \pmod n \;\Longrightarrow\; n \mid (a - b). \qquad \blacksquare
$$

[[/solución]]

**Problema 4 (Erdős–Szekeres).** En toda sucesión de más de $mn$ números reales distintos existe una subsucesión **creciente** de longitud $m+1$ o una **decreciente** de longitud $n+1$.

[[pista]]

A cada término $a_i$ asígnale el par $(c_i, d_i)$: longitud de la subsucesión creciente más larga que **termina** en $a_i$, y de la decreciente más larga que termina en $a_i$. Demuestra que ese par nunca se repite.

[[/pista]]

[[solución]]

Razonamos por contradicción: supongamos que no hay subsucesión creciente de longitud $m+1$ ni decreciente de longitud $n+1$.

A cada término $a_i$ le asociamos el par $(c_i, d_i)$, donde $c_i$ es la longitud de la subsucesión **creciente** más larga que termina en $a_i$, y $d_i$ la de la **decreciente** más larga que termina en $a_i$. Por la hipótesis, $1 \leq c_i \leq m$ y $1 \leq d_i \leq n$, así que solo hay $mn$ pares posibles —las cajas.

Estos pares son **todos distintos**: si $i < j$, como los reales son distintos, o bien $a_i < a_j$, y entonces la mejor creciente que termina en $a_i$ se prolonga con $a_j$, dando $c_j > c_i$; o bien $a_i > a_j$, y análogamente $d_j > d_i$. En cualquier caso $(c_i, d_i) \neq (c_j, d_j)$.

Pero tenemos más de $mn$ términos y solo $mn$ pares posibles: por el palomar, dos términos compartirían par, contradicción. Luego alguna de las dos subsucesiones existe. $\blacksquare$

[[/solución]]
