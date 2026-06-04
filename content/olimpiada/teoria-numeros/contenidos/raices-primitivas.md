---
title: "Raíces primitivas y estructura de $(\\mathbb{Z}/p\\mathbb{Z})^*$"
preview: "Para todo primo $p$, el grupo multiplicativo $(\\mathbb{Z}/p\\mathbb{Z})^*$ es **cíclico** de orden $p-1$. Un generador se llama raíz primitiva. Esto es la estructura algebraica subyacente a toda la aritmética modular."
dificultad: nacional
tags: [raices-primitivas, grupo-multiplicativo, orden, ciclico, logaritmo-discreto]
prerequisites: [orden-multiplicativo, pequeno-teorema-fermat, polinomios]
author: "Adrián García Bouzas"
updated: "2026-06-04"
---

La existencia de raíces primitivas módulo un primo $p$ es el resultado estructural más importante de la aritmética modular elemental. Afirma que el grupo $(\mathbb Z/p\mathbb Z)^*$ —  los residuos no nulos módulo $p$ bajo la multiplicación — es **cíclico**: generado por un único elemento $g$ cuyas potencias $g, g^2, \ldots, g^{p-1}$ recorren exactamente todos los elementos.

Este resultado transforma el estudio de la multiplicación módulo $p$ en el estudio de la adición en $\mathbb Z/(p-1)\mathbb Z$. Cualquier pregunta multiplicativa — ¿es $a$ un cuadrado módulo $p$? ¿cuántas soluciones tiene $x^k \equiv b$? — se reduce a una pregunta aditiva sobre logaritmos discretos.

## Definición

Sea $p$ un primo y $g \in \{1, 2, \ldots, p-1\}$. Decimos que $g$ es una **raíz primitiva módulo $p$** si $\text{ord}_p(g) = p - 1$, es decir, si las potencias

$$g^1, g^2, g^3, \ldots, g^{p-1}$$

son todas distintas módulo $p$ — recorriendo todas las clases de $\{1, 2, \ldots, p-1\}$.

## Teorema

**(Gauss, 1801)** Para todo primo $p$, existen raíces primitivas módulo $p$. Más precisamente:

1. El grupo $(\mathbb Z/p\mathbb Z)^*$ es **cíclico** de orden $p - 1$.
2. Hay exactamente $\varphi(p-1)$ raíces primitivas en $\{1, 2, \ldots, p-1\}$.

## Demostración

Sea $N(d)$ el número de elementos de $(\mathbb Z/p\mathbb Z)^*$ que tienen orden exactamente $d$.

**Paso 1.** Para todo $d \mid p-1$, se tiene $N(d) \leq \varphi(d)$.

Si $N(d) = 0$, la desigualdad es trivial. Si $N(d) \geq 1$, existe $a$ con $\text{ord}_p(a) = d$. Los elementos de orden $d$ son todos raíces de $x^d - 1 \equiv 0 \pmod p$. Este polinomio de grado $d$ tiene a lo sumo $d$ raíces en $\mathbb F_p$. Todas las raíces de orden que divide a $d$ (y no menor) son potencias de $a$: específicamente, $a^k$ tiene orden $d$ iff $\gcd(k, d) = 1$. Hay exactamente $\varphi(d)$ tales $k$ en $\{1, \ldots, d\}$. Luego $N(d) \leq \varphi(d)$.

**Paso 2.** $\sum_{d \mid p-1} N(d) = p - 1$.

Esto porque todo elemento de $(\mathbb Z/p\mathbb Z)^*$ tiene un orden que divide a $p - 1$ (por el pequeño teorema de Fermat), y cada elemento tiene exactamente un orden.

**Paso 3.** Combinando los dos pasos:

$$p - 1 = \sum_{d \mid p-1} N(d) \leq \sum_{d \mid p-1} \varphi(d) = p - 1.$$

La última igualdad es la identidad $\sum_{d \mid n} \varphi(d) = n$ con $n = p-1$. Como la suma de los $N(d)$ es exactamente $p - 1$ y cada $N(d) \leq \varphi(d)$, la igualdad global fuerza $N(d) = \varphi(d)$ para **todo** $d \mid p-1$.

En particular, $N(p-1) = \varphi(p-1) \geq 1$. Existen raíces primitivas. $\blacksquare$

## El logaritmo discreto

Fijada una raíz primitiva $g$ módulo $p$, cada elemento no nulo $a \in \{1, \ldots, p-1\}$ se escribe como $a \equiv g^k \pmod p$ para un único $k \in \{0, 1, \ldots, p-2\}$. Este $k$ es el **logaritmo discreto** de $a$ en base $g$:

$$k = \log_g a \pmod{p-1}, \qquad \text{o} \qquad \text{ind}_g(a) = k.$$

El logaritmo discreto satisface las reglas usuales de logaritmos:
$$\text{ind}_g(ab) \equiv \text{ind}_g(a) + \text{ind}_g(b) \pmod{p-1}.$$

Esto convierte la **multiplicación módulo $p$** en **suma módulo $p-1$**, linealizando los problemas multiplicativos.

## Ejemplo

### Encontrando raíces primitivas

**Ejemplo 1.** Encontrar todas las raíces primitivas módulo $7$.

$\varphi(7) = 6$, divisores de $6$: $1, 2, 3, 6$. Probamos $g = 3$:

$$3^1 \equiv 3, \quad 3^2 \equiv 2, \quad 3^3 \equiv 6, \quad 3^4 \equiv 4, \quad 3^5 \equiv 5, \quad 3^6 \equiv 1 \pmod 7.$$

Las potencias de $3$ recorren $\{1, 2, 3, 4, 5, 6\}$. Luego $3$ es raíz primitiva.

Hay $\varphi(6) = 2$ raíces primitivas. Las demás: $3^k$ con $\gcd(k, 6) = 1$: $k = 1$ y $k = 5$. Así las raíces primitivas son $3^1 \equiv 3$ y $3^5 \equiv 5$.

---

**Ejemplo 2.** Raíces primitivas módulo $11$.

$\varphi(11) = 10$, $\varphi(10) = 4$ raíces primitivas. Probamos $g = 2$:

$2^1 = 2, 2^2 = 4, 2^5 = 32 \equiv 10 \equiv -1 \pmod{11}$.

$2^5 \equiv -1 \neq 1$, así el orden no divide a $5$. Como $\text{ord}_{11}(2) \mid 10$ y no divide a $5$, el orden es $10$. Luego $2$ es raíz primitiva módulo $11$.

Las $\varphi(10) = 4$ raíces primitivas son $2^k$ con $\gcd(k, 10) = 1$: $k \in \{1, 3, 7, 9\}$.

$2^1 = 2, 2^3 = 8, 2^7 = 128 \equiv 7, 2^9 = 512 \equiv 6 \pmod{11}$.

Raíces primitivas módulo $11$: $\{2, 6, 7, 8\}$.

---

### Logaritmos discretos en problemas

**Ejemplo 3.** Resolver $x^3 \equiv 5 \pmod{11}$.

Usamos la raíz primitiva $g = 2$. Las tablas de logaritmos discretos módulo $11$ en base $2$:

| $a$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $\text{ind}_2(a)$ | $0$ | $1$ | $8$ | $2$ | $4$ | $9$ | $7$ | $3$ | $6$ | $5$ |

La ecuación $x^3 \equiv 5$ se convierte en $3 \cdot \text{ind}_2(x) \equiv \text{ind}_2(5) = 4 \pmod{10}$.

Congruencia lineal: $3k \equiv 4 \pmod{10}$. $\gcd(3, 10) = 1$, solución única: $k \equiv 4 \cdot 3^{-1} \equiv 4 \cdot 7 = 28 \equiv 8 \pmod{10}$ (pues $3 \cdot 7 = 21 \equiv 1 \pmod{10}$).

$x \equiv 2^8 = 256 \equiv 256 - 23 \cdot 11 = 256 - 253 = 3 \pmod{11}$.

*Verificación:* $3^3 = 27 = 2 \cdot 11 + 5 \equiv 5 \pmod{11}$. ✓

---

**Ejemplo 4.** Residuos cuadráticos vía raíces primitivas.

$a$ es un residuo cuadrático módulo $p$ iff $\text{ind}_g(a)$ es par (pues $a = g^k$ es cuadrado iff $k = 2j$ para algún $j$).

Por tanto, exactamente la mitad de los elementos — los de índice par — son RC, confirmando el resultado clásico: hay $(p-1)/2$ RC en $\{1, \ldots, p-1\}$.

---

**Ejemplo 5.** (OME 2014) Probar que para $p$ primo impar, $\sum_{k=1}^{p-1} k^{p-1} \equiv -1 \pmod p$.

Por PTF, $k^{p-1} \equiv 1 \pmod p$ para todo $k \in \{1, \ldots, p-1\}$. Sumando los $p - 1$ términos: $\sum_{k=1}^{p-1} 1 = p - 1 \equiv -1 \pmod p$. $\square$

---

**Ejemplo 6.** Contar las soluciones de $x^n \equiv 1 \pmod p$.

Con $g$ raíz primitiva y $x = g^j$: la ecuación se convierte en $g^{nj} \equiv g^0 \pmod p$, es decir $p - 1 \mid nj$, es decir $(p-1)/\gcd(n, p-1) \mid j$. El número de soluciones es $\gcd(n, p-1)$.

**Consecuencia:** el número de soluciones de $x^n \equiv b \pmod p$ es $0$ si $\text{ind}_g(b) \not\equiv 0 \pmod{\gcd(n, p-1)}$, y $\gcd(n, p-1)$ en caso contrario.

## Generalización: módulos no primos

Las raíces primitivas existen para todos los módulos de la forma $1, 2, 4, p^k, 2p^k$ con $p$ primo impar y $k \geq 1$.

Para $m = 2^k$ con $k \geq 3$: $(\mathbb Z/2^k\mathbb Z)^*$ no es cíclico sino isomorfo a $\mathbb Z/2 \times \mathbb Z/2^{k-2}$. No hay raíz primitiva.

Para $m$ con dos factores primos impares distintos o más: tampoco hay raíz primitiva (el grupo es producto de grupos de ordenes coprimos $> 1$, no cíclico).

## Aplicaciones

**Resolución de $x^k \equiv b \pmod p$.** Con logaritmo discreto: $k \cdot \text{ind}(x) \equiv \text{ind}(b) \pmod{p-1}$. Congruencia lineal, resuelta por Euclides. El número de soluciones es $\gcd(k, p-1)$ o $0$.

**Demostración del criterio de Euler.** $a$ es RC módulo $p$ iff $a^{(p-1)/2} \equiv 1$ iff $\text{ind}(a) \cdot (p-1)/2 \equiv 0 \pmod{p-1}$ iff $\text{ind}(a)$ es par.

**Criptografía Diffie-Hellman.** El protocolo de intercambio de clave Diffie-Hellman se basa en la dificultad de invertir el logaritmo discreto: dado $p$, $g$ y $g^x \pmod p$, encontrar $x$ es computacionalmente difícil para $p$ grande.

## Observación

**La conjetura de Artin (1927).** Para todo entero $a \neq -1, 0, 1$ que no sea un cuadrado perfecto, Artin conjeturó que $a$ es raíz primitiva módulo infinitos primos. Es más: la densidad de tales primos dentro de todos los primos es

$$\prod_p \left(1 - \frac{1}{p(p-1)}\right) \approx 0.3739\ldots$$

(la constante de Artin). Esto sigue sin demostrarse incondicionalmente, aunque se ha probado bajo la Hipótesis de Riemann generalizada (Hooley, 1967). Es uno de los grandes problemas abiertos de la teoría analítica de números elemental.

**Raíces primitivas y logaritmos discretos en criptografía.** La seguridad de los sistemas Diffie-Hellman, ElGamal y DSA descansa en que computar $\text{ind}_g(a)$ dado $a, g, p$ es difícil — el «problema del logaritmo discreto». Los mejores algoritmos conocidos (index calculus) tienen complejidad subexponencial pero superpolinomial.

## Problemas relacionados

- **(IMO 1991/P2)** Sea $n > 6$ un entero y sean $a_1, a_2, \ldots, a_k$ todos los naturales menores que $n$ y coprimos con $n$. Si $a_2 - a_1 = a_3 - a_2 = \cdots = a_k - a_{k-1} > 0$, probar que $n$ es primo o una potencia de $2$.

- **(IMO 1995/P3)** Sea $p$ un número primo impar. ¿Cuántos subconjuntos de $p$ elementos de $\{1, 2, \ldots, 2p\}$ tienen suma divisible por $p$?

- **(Clásico)** Para primo $p$ y raíz primitiva $g$, demostrar que $g^{(p-1)/2} \equiv -1 \pmod p$ y deducir que $g$ no es RC módulo $p$.

- **(Clásico)** Si $p$ es primo y $g$ es raíz primitiva módulo $p$, demostrar que $g + p$ también es raíz primitiva módulo $p^2$.

- **(Conjetura de Artin, abierta)** Todo entero $a \neq -1, 0, 1$ que no es cuadrado perfecto es raíz primitiva módulo infinitos primos. Verificar computacionalmente para $a = 2$ y los primeros $50$ primos.
