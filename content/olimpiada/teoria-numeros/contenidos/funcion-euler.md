---
title: "Función $\\varphi$ de Euler y teorema de Euler"
preview: "La generalización natural del Pequeño Teorema de Fermat: si $\\gcd(a,n) = 1$, entonces $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$. La función $\\varphi(n)$ cuenta los enteros coprimos con $n$ y es multiplicativa."
dificultad: nacional
tags: [euler, totient, multiplicatividad, congruencias, grupo-multiplicativo]
prerequisites: [congruencias, pequeno-teorema-fermat, divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

La función $\varphi$ de Euler, también llamada **función totiente** o **indicatriz de Euler**, generaliza el Pequeño Teorema de Fermat de los primos a todos los módulos. Para un primo $p$, la función $\varphi(p) = p - 1$ y el teorema de Euler es exactamente el PTF. Para módulos compuestos, $\varphi(n)$ mide el tamaño del grupo multiplicativo $(\mathbb Z/n\mathbb Z)^*$ — los elementos invertibles — y el teorema garantiza que cada uno de estos elementos tiene un «período» que divide a $\varphi(n)$.

La función $\varphi$ es uno de los objetos más ricos de la teoría elemental: es multiplicativa, satisface una identidad de suma sobre divisores, y aparece en criptografía (RSA), en la fórmula de los restos periódicos, y en la caracterización de las raíces primitivas.

## Definición

Para todo entero $n \geq 1$, la **función totiente de Euler** es

$$\varphi(n) \;=\; \#\{k \in \mathbb Z : 1 \leq k \leq n,\ \gcd(k, n) = 1\}.$$

En palabras: $\varphi(n)$ es el número de enteros en $\{1, 2, \ldots, n\}$ que son coprimos con $n$.

**Valores iniciales:**

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $12$ | $p$ | $p^k$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $\varphi(n)$ | $1$ | $1$ | $2$ | $2$ | $4$ | $2$ | $6$ | $4$ | $6$ | $4$ | $4$ | $p-1$ | $p^k - p^{k-1}$ |

## Teorema

**(Fórmula para $\varphi(p^k)$)** Si $p$ es primo y $k \geq 1$:

$$\varphi(p^k) \;=\; p^k - p^{k-1} \;=\; p^{k-1}(p - 1) \;=\; p^k \!\left(1 - \tfrac{1}{p}\right).$$

## Demostración

De los $p^k$ enteros en $\{1, 2, \ldots, p^k\}$, los que **no** son coprimos con $p^k$ son exactamente los múltiplos de $p$: hay $p^{k-1}$ de ellos ($p, 2p, \ldots, p^{k-1} \cdot p$). Por tanto:

$$\varphi(p^k) \;=\; p^k - p^{k-1}. \qquad \blacksquare$$

## Teorema

**(Multiplicatividad)** Si $\gcd(m, n) = 1$, entonces $\varphi(mn) = \varphi(m)\varphi(n)$.

## Demostración

Organizamos los enteros $\{1, 2, \ldots, mn\}$ en una tabla de $m$ columnas y $n$ filas:

$$\begin{pmatrix} 1 & 2 & \cdots & m \\ m+1 & m+2 & \cdots & 2m \\ \vdots & & & \vdots \\ (n-1)m+1 & (n-1)m+2 & \cdots & nm \end{pmatrix}$$

La columna $j$ (con $1 \leq j \leq m$) contiene los enteros $j, j+m, j+2m, \ldots, j+(n-1)m$.

**Paso 1.** $\gcd(j + im, mn) = 1$ si y solo si $\gcd(j, m) = 1$ (condición sobre la columna) **y** $\gcd(j + im, n) = 1$ (condición sobre la fila dentro de la columna).

Justificación: $mn = m \cdot n$ con $\gcd(m,n) = 1$, así $\gcd(x, mn) = 1 \iff \gcd(x, m) = 1$ y $\gcd(x, n) = 1$.

**Paso 2.** La columna $j$ contribuye coprimos solo si $\gcd(j, m) = 1$: hay $\varphi(m)$ tales columnas.

**Paso 3.** En cada columna $j$ con $\gcd(j, m) = 1$, la subcondición $\gcd(j + im, n) = 1$ depende de $i$. Como $\gcd(m, n) = 1$, los residuos $j + im \pmod n$ para $i = 0, 1, \ldots, n-1$ son una permutación completa de $\{0, 1, \ldots, n-1\}$ (porque $m$ es invertible módulo $n$). Por tanto exactamente $\varphi(n)$ valores de $i$ satisfacen $\gcd(j + im, n) = 1$.

**Conclusión.** El número de enteros en $\{1, \ldots, mn\}$ coprimos con $mn$ es $\varphi(m) \cdot \varphi(n)$. $\blacksquare$

## Teorema

**(Fórmula del producto)** Si $n = p_1^{e_1} p_2^{e_2} \cdots p_r^{e_r}$ es la factorización de $n$ en primos distintos:

$$\varphi(n) \;=\; n \prod_{p \mid n} \!\left(1 - \frac{1}{p}\right) \;=\; n \cdot \frac{p_1 - 1}{p_1} \cdot \frac{p_2 - 1}{p_2} \cdots \frac{p_r - 1}{p_r}.$$

## Demostración

Por multiplicatividad aplicada iterativamente:

$$\varphi(n) \;=\; \prod_{i=1}^r \varphi(p_i^{e_i}) \;=\; \prod_{i=1}^r p_i^{e_i - 1}(p_i - 1) \;=\; \left(\prod_{i=1}^r p_i^{e_i}\right) \cdot \prod_{i=1}^r \frac{p_i - 1}{p_i} \;=\; n \prod_{p \mid n} \!\left(1 - \frac{1}{p}\right). \qquad \blacksquare$$

## Teorema

**(Identidad de Euler)** Para todo entero positivo $n$:

$$\sum_{d \mid n} \varphi(d) \;=\; n.$$

## Demostración

Particionamos $\{1, 2, \ldots, n\}$ según el valor de $\gcd(k, n)$. Para cada divisor $d$ de $n$:

$$\#\{k \in \{1,\ldots,n\} : \gcd(k,n) = d\} \;=\; \#\{j \in \{1,\ldots,n/d\} : \gcd(j, n/d) = 1\} \;=\; \varphi(n/d).$$

*(Razonamiento: $\gcd(k, n) = d$ si y solo si $k = dj$ con $\gcd(j, n/d) = 1$ y $1 \leq j \leq n/d$.)*

Sumando sobre todos los divisores $d$ de $n$:

$$n \;=\; \sum_{d \mid n} \varphi(n/d) \;=\; \sum_{e \mid n} \varphi(e), \qquad \blacksquare$$

cambiando variable $e = n/d$.

## Teorema

**(Teorema de Euler)** Si $\gcd(a, n) = 1$, entonces

$$a^{\varphi(n)} \;\equiv\; 1 \pmod n.$$

## Demostración

Consideramos el sistema reducido de residuos $\{r_1, r_2, \ldots, r_{\varphi(n)}\}$ módulo $n$: los $\varphi(n)$ enteros en $\{1, \ldots, n\}$ coprimos con $n$.

Como $\gcd(a, n) = 1$, la función $x \mapsto ax \pmod n$ es una **biyección** del sistema reducido en sí mismo: cada $ar_i$ es coprimo con $n$ (pues $\gcd(ar_i, n) = \gcd(a,n)\gcd(r_i, n) = 1$) y todos son distintos (si $ar_i \equiv ar_j$, la cancelación da $r_i \equiv r_j$).

Por tanto $\{ar_1, ar_2, \ldots, ar_{\varphi(n)}\}$ es una permutación de $\{r_1, \ldots, r_{\varphi(n)}\}$ módulo $n$. Multiplicando:

$$\prod_{i=1}^{\varphi(n)} (ar_i) \;\equiv\; \prod_{i=1}^{\varphi(n)} r_i \pmod n.$$

Esto da $a^{\varphi(n)} \cdot (r_1 r_2 \cdots r_{\varphi(n)}) \equiv r_1 r_2 \cdots r_{\varphi(n)} \pmod n$. Como cada $r_i$ es coprimo con $n$, también su producto lo es. Cancelando: $a^{\varphi(n)} \equiv 1 \pmod n$. $\blacksquare$

## Ejemplo

### Cálculo de $\varphi$

**Ejemplo 1.** Calcular $\varphi(360)$.

$360 = 2^3 \cdot 3^2 \cdot 5$. Por la fórmula del producto:

$$\varphi(360) \;=\; 360 \cdot \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{4}{5} \;=\; 360 \cdot \frac{8}{30} \;=\; 96.$$

*Verificación directa parcial:* los enteros en $\{1,\ldots,360\}$ que no son coprimos con $360$ son múltiplos de $2$, $3$ o $5$. Por inclusión-exclusión: $180 + 120 + 72 - 60 - 36 - 24 + 12 = 264$. Luego $360 - 264 = 96$. ✓

---

**Ejemplo 2.** Hallar todos los $n$ con $\varphi(n) = 8$.

$$\varphi(n) = 8 \implies n \in \{15, 16, 20, 24, 30\}.$$

Verificamos: $\varphi(15) = 15 \cdot \frac{2}{3} \cdot \frac{4}{5} = 8$, $\varphi(16) = 16/2 = 8$, $\varphi(20) = 20 \cdot \frac{1}{2} \cdot \frac{4}{5} = 8$, $\varphi(24) = 24 \cdot \frac{1}{2} \cdot \frac{2}{3} = 8$, $\varphi(30) = 30 \cdot \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{4}{5} = 8$.

*(La solución sistemática: $\varphi(p^k) = p^{k-1}(p-1)$, por lo que buscar $\varphi(n) = 8$ requiere factorizar $8$ como producto de términos $p^{k-1}(p-1)$.)*

---

### Aplicación del Teorema de Euler

**Ejemplo 3.** Calcular $7^{1000} \pmod{100}$.

$\gcd(7, 100) = 1$. $\varphi(100) = \varphi(4) \cdot \varphi(25) = 2 \cdot 20 = 40$.

Por Euler: $7^{40} \equiv 1 \pmod{100}$. Y $1000 = 25 \cdot 40$, así $7^{1000} = (7^{40})^{25} \equiv 1^{25} = 1 \pmod{100}$.

**Los últimos dos dígitos de $7^{1000}$ son $01$.**

---

**Ejemplo 4.** Torre exponencial: los últimos dos dígitos de $3^{3^{3^3}}$.

Necesitamos $3^{3^{3^3}} \pmod{100}$.

$\varphi(100) = 40$. Necesitamos $3^{3^3} \pmod{40}$.

$\varphi(40) = \varphi(8)\varphi(5) = 4 \cdot 4 = 16$. Necesitamos $3^3 = 27 \pmod{16}$.

$27 = 16 + 11 \equiv 11 \pmod{16}$.

Entonces $3^{3^3} \equiv 3^{11} \pmod{40}$.

$3^4 = 81 \equiv 1 \pmod{40}$! Así $3^{11} = 3^{4 \cdot 2 + 3} \equiv 1^2 \cdot 3^3 = 27 \pmod{40}$.

Finalmente, $3^{3^{3^3}} \equiv 3^{27} \pmod{100}$.

$3^1 = 3$, $3^2 = 9$, $3^4 = 81$, $3^8 = 81^2 = 6561 \equiv 61$, $3^{16} \equiv 61^2 = 3721 \equiv 21$, $3^{24} \equiv 21 \cdot 61 = 1281 \equiv 81$, $3^{27} = 3^{24} \cdot 3^3 \equiv 81 \cdot 27 = 2187 \equiv 87 \pmod{100}$.

**Los últimos dos dígitos de $3^{3^{3^3}}$ son $87$.**

---

**Ejemplo 5.** ¿Para qué valores de $n$ es $\varphi(n)$ impar?

$\varphi(n)$ es impar $\iff$ $n \in \{1, 2\}$.

Demostración: si $p \mid n$ y $p$ es primo impar, entonces $\varphi(p) = p - 1$ es par, y por la multiplicatividad $\varphi(n)$ hereda ese factor. Si $n = 2^k$ con $k \geq 2$, $\varphi(2^k) = 2^{k-1}$ es par. Solo para $n = 1$ ($\varphi(1) = 1$) y $n = 2$ ($\varphi(2) = 1$) tenemos $\varphi(n)$ impar.

## Aplicaciones

### RSA y criptografía

El sistema RSA se basa directamente en el Teorema de Euler. Se elige $n = pq$ producto de dos primos grandes. Entonces $\varphi(n) = (p-1)(q-1)$. Se escoge $e$ con $\gcd(e, \varphi(n)) = 1$ y se calcula $d = e^{-1} \pmod{\varphi(n)}$.

**Cifrado:** $m \mapsto m^e \pmod n$.
**Descifrado:** $c \mapsto c^d \pmod n$.

Por Euler: $(m^e)^d = m^{ed} = m^{1 + k\varphi(n)} = m \cdot (m^{\varphi(n)})^k \equiv m \pmod n$ (si $\gcd(m, n) = 1$).

La seguridad depende de que factorizar $n$ sea computacionalmente difícil — el único algoritmo eficiente conocido para calcular $\varphi(n)$ a partir de $n$ requiere la factorización.

### Período de fracciones decimales

La fracción $1/n$ tiene representación decimal periódica de período $d$ donde $d$ es el orden de $10$ módulo $n/\gcd(n, 10^k)$ (después de eliminar factores de $2$ y $5$). Por el Teorema de Euler, $d \mid \varphi(n)$.

Por ejemplo: $\varphi(7) = 6$, y $1/7 = 0.\overline{142857}$ tiene período $6$ (que divide a $\varphi(7) = 6$, de hecho coincide porque $10$ es raíz primitiva mod $7$).

## Observación

**La función de Carmichael $\lambda$.** El Teorema de Euler da $a^{\varphi(n)} \equiv 1 \pmod n$, pero $\varphi(n)$ no es siempre el exponente mínimo universal. La **función de Carmichael** $\lambda(n)$ es el menor entero positivo $m$ tal que $a^m \equiv 1 \pmod n$ para todo $a$ con $\gcd(a, n) = 1$. Siempre $\lambda(n) \mid \varphi(n)$.

Para $n = 2^k$, $k \geq 3$: $\lambda(2^k) = 2^{k-2}$ mientras $\varphi(2^k) = 2^{k-1}$. El grupo $(\mathbb Z/2^k\mathbb Z)^*$ no es cíclico (para $k \geq 3$): es producto de $\mathbb Z/2$ y $\mathbb Z/2^{k-2}$.

**Orden real vs. exponente universal.** En problemas que preguntan por $a^k \pmod n$, conviene calcular primero el orden exacto de $a$ módulo $n$ (que divide a $\lambda(n)$, que divide a $\varphi(n)$). Reducir el exponente módulo el orden real da la respuesta más eficiente.

## Problemas relacionados

- **(OME 2011)** Demostrar que $\varphi(n) \geq \sqrt{n/2}$ para todo $n \geq 1$.

- **(Clásico)** Calcular $\varphi(n!)$ para valores pequeños de $n$ y estimar el crecimiento.

- **(OMG 2020)** Probar que para todo primo $p$, $\sum_{k=1}^{p-1} k \cdot \varphi(k) \equiv 0 \pmod p$.

- **(Clásico)** Demostrar que $n \mid \varphi(a^n - 1)$ para todo $a > 1$ y $n \geq 1$.

- **(Conjetura abierta de Lehmer)** ¿Es $\varphi(n) \mid n - 1$ solo para $n$ primo? Se sabe que si no es primo, tiene al menos $14$ factores primos distintos.

- **(IMO 1990/3)** Hallar todos los enteros positivos $n$ con $n^2 \mid 2^n + 1$.
