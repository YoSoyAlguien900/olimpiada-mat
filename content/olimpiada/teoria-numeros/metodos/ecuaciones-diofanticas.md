---
title: "Ecuaciones diofánticas: técnicas estándar"
preview: "Factorización, módulos pequeños, descenso infinito, ecuación de Pell, suma de cuadrados. Un mapa de las técnicas más efectivas para resolver o descartar ecuaciones polinómicas en enteros."
dificultad: nacional
tags: [diofanticas, factorizacion, pell, cuadrados, modular, descenso]
prerequisites: [congruencias, euclides-bezout, pequeno-teorema-fermat]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

Una **ecuación diofántica** es una ecuación polinómica con coeficientes enteros donde se buscan soluciones en $\mathbb Z$ (o $\mathbb N$, o $\mathbb Q$, según el problema). El nombre viene de Diofanto de Alejandría (siglo III d.C.), cuya *Arithmetica* catalogó cientos de tales ecuaciones.

No existe un algoritmo universal para resolver ecuaciones diofánticas — en 1970, Matiyasevich demostró que no puede existir, como consecuencia del décimo problema de Hilbert. Pero sí existen **técnicas** que cubren la mayoría de los casos que aparecen en olimpiadas. Este capítulo las organiza con ejemplos completos.

## Técnica 1: Factorización

La idea: reescribir la ecuación de modo que un lado sea un producto cuyos factores estén acotados.

## Ejemplo

**Ejemplo 1.** Hallar todas las soluciones enteras de $xy + x + y = 35$.

Añadimos $1$ a ambos lados: $(x+1)(y+1) = 36$. El entero $36$ tiene los divisores positivos $1, 2, 3, 4, 6, 9, 12, 18, 36$. Como $(x+1)$ y $(y+1)$ son enteros (positivos, negativos o cero) con producto $36$:

| $x+1$ | $y+1$ | $x$ | $y$ |
|---|---|---|---|
| $1$ | $36$ | $0$ | $35$ |
| $2$ | $18$ | $1$ | $17$ |
| $3$ | $12$ | $2$ | $11$ |
| $4$ | $9$ | $3$ | $8$ |
| $6$ | $6$ | $5$ | $5$ |
| $-1$ | $-36$ | $-2$ | $-37$ |
| $-2$ | $-18$ | $-3$ | $-19$ |
| $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ |

Y los casos con factores negativos. Si pedimos $x, y \geq 1$: las soluciones son $(1, 17), (2, 11), (3, 8), (5, 5)$ y sus simétricas.

---

**Ejemplo 2.** Hallar todos los $(m, n) \in \mathbb Z_{>0}^2$ con $\frac{1}{m} + \frac{1}{n} = \frac{1}{2026}$.

Multiplicando por $2026mn$: $2026n + 2026m = mn$, luego $mn - 2026m - 2026n = 0$.

Completando el producto: $(m - 2026)(n - 2026) = 2026^2$.

Las soluciones son los divisores $d$ de $2026^2 = (2 \cdot 1013)^2 = 4 \cdot 1013^2$ (con $1013$ primo): $m - 2026 = d$, $n - 2026 = 2026^2/d$, con $d \mid 2026^2$ y $m, n > 0$, es decir $d > -2026$.

$2026^2$ tiene $(1+1)(2+1)(2+1) = \ldots$ espera: $2026 = 2 \cdot 1013$, así $2026^2 = 2^2 \cdot 1013^2$, con $\tau(2026^2) = 3 \cdot 3 = 9$ divisores positivos, más $9$ negativos. Las soluciones positivas requieren $d > 0$: hay $9$ pares $(m, n)$ (incluyendo los simétricos, hay $9$ si contamos con orden o $5$ si no).

---

**Ejemplo 3.** Hallar todas las soluciones enteras de $x^2 - y^2 = 100$.

$(x-y)(x+y) = 100$. Sea $a = x - y$, $b = x+y$ con $ab = 100$ y $a + b = 2x$ par, así $a$ y $b$ tienen la misma paridad. Los pares $(a, b)$ con $ab = 100$ y misma paridad son: $(2, 50), (10, 10), (-2, -50), (-10, -10)$ y los con $a < 0 < b$ que den paridad impar... Pares con la misma paridad: ambos pares o ambos impares. $100$ no tiene divisores de la misma paridad impar (pues $100 = 4 \cdot 25$, necesitaría $a, b$ ambos impares, pero $ab = 100$ es par). Así solo pares ambos pares.

Pares $(a, b)$ con $ab = 100$, $a \leq b$, ambos pares: $(2, 50), (10, 10), (-50, -2), (-10, -10)$.

Las soluciones $(x, y) = ((a+b)/2, (b-a)/2)$:
- $(2, 50)$: $x = 26, y = 24$.
- $(10, 10)$: $x = 10, y = 0$.
- $(-50, -2)$: $x = -26, y = 24$.
- $(-10, -10)$: $x = -10, y = 0$.

Y los simétricos con $b < a$.

## Técnica 2: Módulos pequeños

Para probar que una ecuación **no tiene soluciones**, basta encontrar un módulo donde sea imposible.

## Ejemplo

**Ejemplo 4.** Probar que $x^2 + y^2 = 4k + 3$ no tiene solución entera.

Los cuadrados módulo $4$ son $0$ o $1$. Así $x^2 + y^2 \equiv 0 + 0, 0 + 1, $ o $1 + 1 = 0, 1, 2 \pmod 4$.

El valor $3 \pmod 4$ es imposible. $\blacksquare$

---

**Ejemplo 5.** Demostrar que $x^2 - 7y^2 = 3$ no tiene solución entera.

Módulo $7$: $x^2 \equiv 3 \pmod 7$. Los cuadrados módulo $7$ son $0^2 = 0, 1^2 = 1, 2^2 = 4, 3^2 = 2, 4^2 = 2, 5^2 = 4, 6^2 = 1$, es decir $\{0, 1, 2, 4\}$. El valor $3$ no aparece. Imposible. $\blacksquare$

---

**Ejemplo 6.** ¿Tiene soluciones enteras $x^4 + y^4 + z^4 = 2026$?

Módulo $16$: todo cuadrado es $\equiv 0, 1, 4, 9 \pmod{16}$. Todo cuarto poder es $\equiv 0$ o $1 \pmod{16}$ (ya que $0^2 = 0, 1^2 = 1, 4^2 = 0, 9^2 = 1$, $9 \equiv 9$, $9^2 = 81 \equiv 1$). Así $x^4 + y^4 + z^4 \equiv 0, 1, 2, 3 \pmod{16}$.

$2026 = 126 \cdot 16 + 10 \equiv 10 \pmod{16}$.

Como $10 \notin \{0,1,2,3\}$: **no tiene soluciones**.

---

**Ejemplo 7.** La ecuación $x^2 + y^2 \equiv 0 \pmod p$ con $p \equiv 3 \pmod 4$ primo implica $p \mid x$ y $p \mid y$.

Módulo $p$: $x^2 \equiv -y^2 \pmod p$. Si $p \nmid y$: $(x/y)^2 \equiv -1 \pmod p$, es decir $-1$ es RC módulo $p$. Pero $\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2} = -1$ para $p \equiv 3 \pmod 4$. Contradicción. Luego $p \mid y$, y entonces $p \mid x$. $\blacksquare$

**Aplicación:** Si $n = x^2 + y^2$ y $p \mid n$ con $p \equiv 3 \pmod 4$ primo, entonces $p^2 \mid n$.

## Técnica 3: Acotación y finitud

Si los parámetros están implícitamente acotados, el problema se reduce a verificar finitos casos.

## Ejemplo

**Ejemplo 8.** Hallar todos los $(x, y) \in \mathbb Z_{>0}^2$ con $x^y = y^x$.

Caso $x = y$: siempre funciona. Caso $x \neq y$: WLOG $x < y$. Sea $y = tx$ con $t > 1$ racional.

$x^{tx} = (tx)^x$ implica $x^t = tx$, luego $x^{t-1} = t$, $x = t^{1/(t-1)}$.

Para $t = 2$: $x = 2^1 = 2$, $y = 4$. Verificar: $2^4 = 16 = 4^2$ ✓.

Para $t = 3$: $x = 3^{1/2} = \sqrt 3$, no entero.

Para $t = 4$: $x = 4^{1/3}$, no entero.

Para grandes $t$: $t^{1/(t-1)} \to 1^+ < 2$, luego $x < 2$, imposible para enteros $x \geq 2$.

**Única solución no trivial (con $x < y$):** $(2, 4)$.

---

**Ejemplo 9.** Hallar todos los enteros positivos $n$ con $\tau(n) = 6$.

$\tau(n) = 6$ puede ocurrir de las siguientes formas (factorizando $6 = 6 = 3 \cdot 2 = 2 \cdot 3$):

- $n = p^5$: $\tau = 6$. Mínimo: $n = 2^5 = 32$.
- $n = p^2 q$ con $p \neq q$ primos: $\tau = 3 \cdot 2 = 6$. Ejemplos: $12 = 2^2 \cdot 3$, $18 = 2 \cdot 3^2$, $20 = 2^2 \cdot 5$, $28 = 2^2 \cdot 7$, ...

Todos los $n$ de estas dos formas tienen $\tau(n) = 6$.

## Técnica 4: Ecuación de Pell

La **ecuación de Pell** $x^2 - Dy^2 = 1$ (con $D > 0$ no cuadrado) tiene infinitas soluciones generadas por la **solución fundamental**.

## Ejemplo

**Ejemplo 10.** Hallar todas las soluciones enteras positivas de $x^2 - 2y^2 = 1$.

La solución fundamental es $(x_1, y_1) = (3, 2)$: $9 - 8 = 1$ ✓.

Las demás soluciones se obtienen por $(x_n + y_n\sqrt{2}) = (3 + 2\sqrt{2})^n$:

$n = 1$: $(3, 2)$.
$n = 2$: $(3+2\sqrt 2)^2 = 17 + 12\sqrt 2$, así $(17, 12)$.
$n = 3$: $(3+2\sqrt 2)^3 = 99 + 70\sqrt 2$, así $(99, 70)$.

La recurrencia: $x_{n+1} = 3x_n + 4y_n$, $y_{n+1} = 2x_n + 3y_n$.

---

**Ejemplo 11.** Probar que hay infinitos triángulos rectangulares con catetos consecutivos.

Necesitamos $a^2 + (a+1)^2 = c^2$, es decir $2a^2 + 2a + 1 = c^2$, o $c^2 - 2(a + 1/2)^2 = 1/2$. Reescribiendo con $b = 2a + 1$: $c^2 - 2 \cdot ((b-1)/2 + 1/2)^2 = 1/2$... mejor: $c^2 = 2a^2 + 2a + 1$, así $2c^2 - (2a+1)^2 = 1$. Poniendo $d = 2a+1$: la ecuación de Pell $2c^2 - d^2 = 1$ (o equivalentemente $d^2 - 2c^2 = -1$).

Las soluciones de $d^2 - 2c^2 = -1$ son $(d, c) = (1, 1), (7, 5), (41, 29), \ldots$ dadas por $(d_n + c_n\sqrt 2) = (1 + \sqrt 2)^{2n-1}$.

Cada solución da $a = (d - 1)/2$, que es entero cuando $d$ es impar (siempre lo es en nuestra secuencia). Infinitas soluciones. $\square$

---

**Ejemplo 12.** (IMO 1988/6) Sean $a, b$ enteros positivos con $ab + 1 \mid a^2 + b^2$. Probar que $\frac{a^2 + b^2}{ab + 1}$ es cuadrado perfecto.

*(Ver el capítulo de Vieta Jumping para la solución completa. Aquí mencionamos que el descenso produce cadenas de soluciones de la ecuación de Pell.)*

## Técnica 5: Suma de cuadrados (Fermat)

## Teorema

Un entero $n \geq 1$ es suma de dos cuadrados ($n = x^2 + y^2$) si y solo si en la factorización de $n$ todo primo $p \equiv 3 \pmod 4$ aparece con **exponente par**.

**Consecuencias:**

- Si $p \equiv 1 \pmod 4$ es primo: $p = x^2 + y^2$ para algún $x, y$ (demostrado por descenso + reciprocidad).
- $2 = 1^2 + 1^2$ y $p \equiv 3 \pmod 4$ no es suma de dos cuadrados (módulo $4$).
- El producto de sumas de dos cuadrados es suma de dos cuadrados: $(a^2+b^2)(c^2+d^2) = (ac-bd)^2 + (ad+bc)^2$.

## Ejemplo

**Ejemplo 13.** ¿Qué enteros entre $1$ y $30$ son suma de dos cuadrados?

Un entero $n$ NO es suma de dos cuadrados si tiene algún factor primo $\equiv 3 \pmod 4$ con exponente impar. Los primos $\equiv 3 \pmod 4$ hasta $30$: $3, 7, 11, 19, 23$.

No son sumas de dos cuadrados: $3, 6 = 2 \cdot 3, 7, 12 = 4 \cdot 3, 14 = 2 \cdot 7, 21 = 3 \cdot 7, 22 = 2 \cdot 11, 24 = 8 \cdot 3, 27 = 3^3$ (exp impar de $3$), $28 = 4 \cdot 7$.

---

**Ejemplo 14.** Hallar todos los enteros positivos $n$ con $n \mid x^2 + 1$ para algún entero $x$.

Por el teorema anterior, $n \mid x^2 + 1$ equivale a que todos los factores primos de $n$ que son $\equiv 3 \pmod 4$ aparezcan con exponente par (pues $x^2 + 1 = x^2 + 1^2$ es suma de dos cuadrados, y sus divisores también lo son... aunque esto es más sutil).

Directamente: $n \mid x^2 + 1$ implica $x^2 \equiv -1 \pmod n$. Esto es posible iff $-1$ es residuo cuadrático módulo $n$, lo que ocurre iff ningún primo $p \equiv 3 \pmod 4$ divide a $n$ (con potencia impar). La condición exacta: para todo primo $p \equiv 3 \pmod 4$, $v_p(n)$ es par; y $v_2(n) \leq 1$.

## Observación

**Árbol de decisión para ecuaciones diofánticas:**

1. **¿La ecuación es lineal?** Usa Bézout y el capítulo de Euclides.
2. **¿La ecuación es cuadrática en una variable?** Usa la fórmula cuadrática; las soluciones enteras requieren que el discriminante sea cuadrado perfecto.
3. **¿La ecuación sugiere factorización?** Añadir/restar términos para completar el cuadrado o un producto.
4. **¿Se sospecha que no hay solución?** Prueba módulos $4, 8, 3, 7, 11$ en ese orden.
5. **¿La ecuación es de Pell?** Encontrar la solución fundamental via fracciones continuas.
6. **¿La ecuación es homogénea?** El descenso puede funcionar.
7. **¿La ecuación involucra sumas de cuadrados?** Factorizar sobre $\mathbb Z[i]$.
8. **¿Todo falla?** Combinar: módulos para descartar, luego acotación para los candidatos restantes, luego fuerza bruta.

**Factorización en anillos.** Las técnicas más avanzadas requieren factorizar en $\mathbb Z[i]$ (enteros de Gauss), $\mathbb Z[\omega]$ (enteros de Eisenstein), o $\mathbb Z[\sqrt{D}]$. El teorema de sumas de dos cuadrados, el caso $n = 3$ del UTF, y muchas ecuaciones del tipo $x^2 + D = y^3$ se resuelven así.

## Problemas relacionados

- **(OMG 2015)** Hallar todos los pares de enteros positivos $(a, b)$ con $a^2 + b \mid a + b^2$.

- **(Clásico)** Para qué primos $p$ tiene solución $x^2 \equiv -3 \pmod p$?

- **(IMO 2006/1)** Probar que para cada entero positivo $n$, existen reales $x_1, \ldots, x_n$ tales que $\lfloor x_i x_j \rfloor$ es negativo par para $i \neq j$ y positivo impar para $i = j$.

- **(USAMO 2000)** Hallar todos los cuadriláteros inscritos con lados enteros y diagonales enteras.

- **(OME 2007)** Determinar todos los enteros $n \geq 1$ para los cuales $n^n - 1$ es divisible por $\sigma(n)$, donde $\sigma(n)$ es la suma de divisores.

- **(Clásico, Pell)** La ecuación $x^2 - 3y^2 = 1$ tiene infinitas soluciones. Encontrar las primeras tres y la recurrencia que las genera.
