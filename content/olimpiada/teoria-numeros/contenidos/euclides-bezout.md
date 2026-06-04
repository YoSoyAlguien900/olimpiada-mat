---
title: "Algoritmo de Euclides e identidad de Bézout"
preview: "El algoritmo más antiguo de las matemáticas calcula el MCD en tiempo logarítmico. Su versión extendida produce la identidad de Bézout: $\\gcd(a,b) = ax + by$, que abre las puertas a las ecuaciones diofánticas lineales y a la aritmética modular."
dificultad: regional
tags: [mcd, euclides, bezout, diofanticas, inverso-modular]
prerequisites: [divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

El algoritmo de Euclides tiene más de $2300$ años y sigue siendo uno de los algoritmos más eficientes y más usados de las matemáticas. Dado en el **Libro VII de los Elementos**, calcula el máximo común divisor de dos enteros en tiempo proporcional al logaritmo de la entrada — una velocidad que los algoritmos modernos no han podido mejorar significativamente.

Pero más importante que el algoritmo mismo es lo que se sigue de él: la **identidad de Bézout**, que dice que el MCD de dos números $a$ y $b$ es una combinación lineal entera de $a$ y $b$. Esta identidad es la piedra angular de la aritmética modular, las ecuaciones diofánticas, los inversos modulares, y — en última instancia — el Teorema Fundamental de la Aritmética.

## Teorema

**(Algoritmo de Euclides)** Sean $a, b$ enteros positivos. Apliquemos el algoritmo de divisiones sucesivas:

$$a = b q_1 + r_1, \quad 0 \leq r_1 < b,$$
$$b = r_1 q_2 + r_2, \quad 0 \leq r_2 < r_1,$$
$$r_1 = r_2 q_3 + r_3, \quad 0 \leq r_3 < r_2,$$
$$\vdots$$
$$r_{k-2} = r_{k-1} q_k + r_k, \quad 0 \leq r_k < r_{k-1},$$
$$r_{k-1} = r_k q_{k+1} + 0.$$

La sucesión de restos $b > r_1 > r_2 > \cdots \geq 0$ es estrictamente decreciente, así que el algoritmo termina. El **último resto no nulo** es $\gcd(a, b) = r_k$.

## Demostración

Probaremos que en cada paso, el MCD se conserva:

$$\gcd(a, b) = \gcd(b, r_1) = \gcd(r_1, r_2) = \cdots = \gcd(r_{k-1}, r_k) = \gcd(r_k, 0) = r_k.$$

**Lema.** Si $a = bq + r$, entonces $\gcd(a, b) = \gcd(b, r)$.

*Demostración del lema.* Sea $d = \gcd(a, b)$. Por la linealidad de la divisibilidad: $d \mid a$ y $d \mid b$ implica $d \mid (a - bq) = r$, luego $d$ es divisor común de $b$ y $r$. Recíprocamente, cualquier divisor común de $b$ y $r$ divide $bq + r = a$, así que también es divisor común de $a$ y $b$. Por tanto el conjunto de divisores comunes de $(a, b)$ y de $(b, r)$ es el mismo, y sus máximos coinciden. $\blacksquare$

**Terminación.** La sucesión $b > r_1 > r_2 > \cdots \geq 0$ es estrictamente decreciente (cada resto es positivo por hipótesis hasta el último) y acotada inferiormente por $0$. Por el principio del buen orden, termina. $\blacksquare$

**Complejidad.** Se puede demostrar (lema de Gabriel Lamé, 1844) que el número de pasos es a lo sumo $5$ veces el número de dígitos decimales de $\min(a, b)$, es decir $O(\log \min(a, b))$ divisiones.

## Ejemplo

**Calcular $\gcd(252, 198)$.**

| Paso | División | Cociente | Resto |
|------|----------|----------|-------|
| 1 | $252 = 1 \cdot 198 + 54$ | $1$ | $54$ |
| 2 | $198 = 3 \cdot 54 + 36$ | $3$ | $36$ |
| 3 | $54 = 1 \cdot 36 + 18$ | $1$ | $18$ |
| 4 | $36 = 2 \cdot 18 + 0$ | $2$ | $0$ |

El último resto no nulo es $18$. Luego $\gcd(252, 198) = 18$.

## Teorema

**(Identidad de Bézout)** Para todo par de enteros $a, b$ no ambos nulos, existen enteros $x, y$ tales que

$$\gcd(a, b) = ax + by.$$

Más precisamente, el conjunto $\{ax + by : x, y \in \mathbb Z\}$ es exactamente el conjunto de múltiplos de $\gcd(a, b)$.

## Demostración

Sea $S = \{ax + by : x, y \in \mathbb Z\} \cap \mathbb Z_{>0}$ el conjunto de combinaciones lineales positivas. Como $|a|, |b| \in S$ (tomando $x = \text{sign}(a), y = 0$ o similar), $S$ es no vacío. Por el buen orden, $S$ tiene un mínimo, digamos $d = ax_0 + by_0$.

**Afirmamos $d = \gcd(a, b)$.**

*$d \mid a$:* por la división euclidiana, $a = dq + r$ con $0 \leq r < d$. Entonces $r = a - dq = a(1 - qx_0) + b(-qy_0) \in \{ax+by\} \cap \mathbb Z_{\geq 0}$. Si $r > 0$, entonces $r \in S$ y $r < d$, contradiciendo la minimalidad de $d$. Luego $r = 0$ y $d \mid a$.

*$d \mid b$:* análogo.

*Es el máximo divisor común:* cualquier divisor común de $a$ y $b$ divide $ax_0 + by_0 = d$. Por la propiedad de acotación, ese divisor es $\leq d$. Luego $d$ es efectivamente el máximo. $\blacksquare$

## El algoritmo extendido de Euclides

El algoritmo extendido calcula no solo $\gcd(a, b)$ sino también los coeficientes de Bézout $x, y$. Se hace recorriendo las igualdades del algoritmo de abajo hacia arriba.

## Ejemplo

**Calcular $x, y$ tales que $18 = 252x + 198y$ (continuando el ejemplo anterior).**

Recorremos hacia atrás:

$$18 = 54 - 1 \cdot 36 \qquad \text{(paso 3)}$$

$$= 54 - 1 \cdot (198 - 3 \cdot 54) = 4 \cdot 54 - 1 \cdot 198 \qquad \text{(paso 2)}$$

$$= 4 \cdot (252 - 1 \cdot 198) - 1 \cdot 198 = 4 \cdot 252 - 5 \cdot 198. \qquad \text{(paso 1)}$$

Luego $x = 4$, $y = -5$, y $252 \cdot 4 - 198 \cdot 5 = 1008 - 990 = 18$. ✓

**Observación.** Los coeficientes de Bézout **no son únicos**: si $(x_0, y_0)$ es una solución, entonces $(x_0 + kb/d, \; y_0 - ka/d)$ también lo es para cualquier $k \in \mathbb Z$, donde $d = \gcd(a,b)$.

## Corolario

Sea $d = \gcd(a, b)$. Entonces:

**(i)** $d$ es la **menor combinación lineal positiva** de $a$ y $b$.

**(ii)** Un entero $m$ es combinación lineal entera de $a$ y $b$ si y solo si $d \mid m$.

**(iii)** $\gcd(a/d, b/d) = 1$ (es decir, $a/d$ y $b/d$ son coprimos).

*Demostración de (ii).* $(\Leftarrow)$: si $m = kd$, entonces $m = k \cdot (ax_0 + by_0) = a(kx_0) + b(ky_0)$. $(\Rightarrow)$: si $m = ax + by$, como $d \mid a$ y $d \mid b$, tenemos $d \mid m$. $\blacksquare$

## Lema

**(Lema de Euclides)** Sea $p$ un número primo. Si $p \mid ab$, entonces $p \mid a$ o $p \mid b$.

Más generalmente: si $\gcd(a, n) = 1$ y $n \mid ab$, entonces $n \mid b$.

## Demostración

Supongamos $\gcd(a, n) = 1$ (tomamos $n = p$ para el caso del primo). Por Bézout, existen $u, v$ con $au + nv = 1$. Multiplicando por $b$:

$$aub + nvb = b.$$

Como $n \mid ab$, se tiene $n \mid aub$. Y trivialmente $n \mid nvb$. Por linealidad, $n \mid aub + nvb = b$. $\blacksquare$

Este lema es la clave para la unicidad en el Teorema Fundamental de la Aritmética.

## Teorema

**(Ecuaciones diofánticas lineales)** Sean $a, b, c$ enteros con $a, b \neq 0$ y $d = \gcd(a, b)$. La ecuación

$$ax + by = c$$

tiene solución entera si y solo si $d \mid c$. En ese caso, fijada una solución particular $(x_0, y_0)$, **todas** las soluciones son

$$x = x_0 + \frac{b}{d} t, \qquad y = y_0 - \frac{a}{d} t, \qquad t \in \mathbb Z.$$

## Demostración

**Necesidad.** Si $ax + by = c$, como $d \mid a$ y $d \mid b$, entonces $d \mid c$.

**Suficiencia.** Si $d \mid c$, sea $c = dk$. Por Bézout, $d = au + bv$ para algunos $u, v$. Entonces $(x_0, y_0) = (uk, vk)$ es una solución particular: $a(uk) + b(vk) = k(au + bv) = kd = c$.

**Familia de soluciones.** Si $(x, y)$ y $(x_0, y_0)$ son soluciones, restando:

$$a(x - x_0) + b(y - y_0) = 0 \implies \frac{a}{d}(x - x_0) = -\frac{b}{d}(y - y_0).$$

Como $\gcd(a/d, b/d) = 1$, el Lema de Euclides aplicado a $\frac{a}{d} \mid \frac{b}{d}(y_0 - y)$ da $\frac{a}{d} \mid (y_0 - y)$. Análogamente $\frac{b}{d} \mid (x - x_0)$. Escribiendo $x - x_0 = \frac{b}{d} t$, se obtiene $y - y_0 = -\frac{a}{d} t$. $\blacksquare$

## Ejemplo

**Ejemplo 1.** Encontrar todas las soluciones enteras de $7x + 11y = 100$.

$\gcd(7, 11) = 1 \mid 100$. Buscamos una solución particular: por ensayo (o el algoritmo extendido), $7 \cdot (-3) + 11 \cdot 2 = -21 + 22 = 1$, así que $7 \cdot (-300) + 11 \cdot 200 = 100$. Solución particular: $x_0 = -300$, $y_0 = 200$.

Solución general: $x = -300 + 11t$, $y = 200 - 7t$, $t \in \mathbb Z$.

Para soluciones **positivas**: $x > 0 \iff t > 300/11 \approx 27.3$, así $t \geq 28$. $y > 0 \iff t < 200/7 \approx 28.6$, así $t \leq 28$.

El único valor es $t = 28$: $x = -300 + 308 = 8$, $y = 200 - 196 = 4$.

*Verificación:* $7 \cdot 8 + 11 \cdot 4 = 56 + 44 = 100$. ✓

---

**Ejemplo 2.** Un comerciante vende artículos a $17$ u.m. y compra insumos de $11$ u.m. cada uno. ¿Cuántas unidades debe vender/comprar para que su caja quede en exactamente $100$ u.m.?

La ecuación es $17x - 11y = 100$ (vende $x$ artículos, compra $y$ insumos). $\gcd(17, 11) = 1$. Buscamos solución particular: $17 \cdot 2 - 11 \cdot 3 = 34 - 33 = 1$, así $17 \cdot 200 - 11 \cdot 300 = 100$. Solución general: $x = 200 - 11t$, $y = 300 - 17t$. Para $x, y \geq 0$: $t \leq 200/11 \approx 18.2$ y $t \leq 300/17 \approx 17.6$, así $t \leq 17$. El óptimo (mínimo de artículos) es $t = 17$: $x = 200 - 187 = 13$, $y = 300 - 289 = 11$.

---

**Ejemplo 3.** Calcular $5^{-1} \pmod{13}$ usando Euclides extendido.

Buscamos $5x \equiv 1 \pmod{13}$, es decir $5x - 13y = 1$ (con $y$ entero).

$\gcd(13, 5)$: $13 = 2 \cdot 5 + 3$, $5 = 1 \cdot 3 + 2$, $3 = 1 \cdot 2 + 1$, $2 = 2 \cdot 1$.

Bézout hacia atrás: $1 = 3 - 1 \cdot 2 = 3 - (5 - 3) = 2 \cdot 3 - 5 = 2(13 - 2 \cdot 5) - 5 = 2 \cdot 13 - 5 \cdot 5$.

Así $5 \cdot (-5) - 13 \cdot (-2) = -25 + 26 = 1$, es decir $5x = 1 + 13 \cdot 2$, dando $x = -5 \equiv 8 \pmod{13}$.

*Verificación:* $5 \cdot 8 = 40 = 3 \cdot 13 + 1 \equiv 1 \pmod{13}$. ✓ El inverso es $5^{-1} \equiv 8 \pmod{13}$.

## Aplicaciones

**Fracciones irreducibles.** Una fracción $a/b$ está en forma irreducible si y solo si $\gcd(a, b) = 1$. Para reducir $a/b$: dividir numerador y denominador por $d = \gcd(a, b)$.

**Inverso modular.** Si $\gcd(a, n) = 1$, el inverso $a^{-1} \pmod n$ se calcula con el algoritmo extendido de Euclides, que produce $x$ con $ax \equiv 1 \pmod n$ en $O(\log n)$ operaciones.

**Solubilidad de sistemas.** La ecuación $ax \equiv b \pmod n$ es equivalente a $ax - ny = b$, solucionable iff $\gcd(a, n) \mid b$.

**Coprimalidad y estructura multiplicativa.** Si $\gcd(a, n) = 1$, entonces la función $x \mapsto ax \pmod n$ es una biyección sobre $\{0, \ldots, n-1\}$. Este es el corazón de la demostración del Pequeño Teorema de Fermat por el método de los productos.

## Observación

**Por qué Bézout es tan poderoso.** La identidad $\gcd(a, b) = ax + by$ es una afirmación sobre el **ideal** $\{ax + by : x, y \in \mathbb Z\}$: dice que es el ideal $d\mathbb Z = \{dk : k \in \mathbb Z\}$. En términos modernos, $\mathbb Z$ es un **dominio de ideal principal**: todo ideal es de la forma $d\mathbb Z$, y $d$ es el generador. Esta propiedad es la razón profunda por la que el TFA vale en $\mathbb Z$ y la puerta de entrada a la teoría algebraica de números.

**Complejidad y el número de Fibonacci.** El par de enteros que requiere más pasos en el algoritmo de Euclides, para $b$ fijo, es un par de Fibonacci consecutivos: $\gcd(F_{n+1}, F_n) = F_1 = 1$ requiere exactamente $n$ pasos. Esto muestra que el número de pasos es $\Theta(\log_\varphi b)$ donde $\varphi$ es la razón áurea.

## Problemas relacionados

- **(OMG 2018/P1)** Sean $a \geq 1$, $b \geq 1$ números naturales. Denotamos por $D$ su máximo común divisor y $M$ su mínimo común múltiplo. Demostrar que $D^2 + M^2 \geq a^2 + b^2$.

- **(OME Nacional 2018/P5)** Sean $a$ y $b$ dos números positivos primos entre sí. Se dice que un entero positivo $n$ es **débil** si no puede escribirse como $n = ax + by$ para enteros $x, y \geq 0$. Probar que si $n$ es débil y $n < ab/6$, entonces existe un entero $k \geq 2$ tal que $kn$ es débil.

- **(Clásico)** Si $\gcd(a, b) = 1$, probar que $\gcd(a + b, a^2 - ab + b^2) \in \{1, 3\}$.

- **(Clásico, moneda de Frobenius)** Si $\gcd(a, b) = 1$, demostrar que todo entero $n \geq (a-1)(b-1)$ es representable como $ax + by$ con $x, y \geq 0$. El mayor no representable es $(a-1)(b-1) - 1$.

- **(Clásico)** Encontrar todos los pares de enteros positivos $(x, y)$ tales que $x^2 y + x + y$ sea múltiplo de $xy^2 + y + x$.
