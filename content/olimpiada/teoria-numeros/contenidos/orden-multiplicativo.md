---
title: "Orden multiplicativo"
preview: "El orden de $a$ módulo $n$ es el menor $d \\geq 1$ con $a^d \\equiv 1$. Controla la periodicidad de las potencias de $a$ y es la herramienta más fina entre el Pequeño Teorema de Fermat y las raíces primitivas."
dificultad: nacional
tags: [orden, congruencias, potencias, raices-primitivas, periodicidad]
prerequisites: [pequeno-teorema-fermat, euclides-bezout]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

El Pequeño Teorema de Fermat dice que $a^{p-1} \equiv 1 \pmod p$, pero no nos dice cuál es el **mínimo** exponente con esa propiedad. El orden multiplicativo llena ese hueco: es la longitud mínima del ciclo de las potencias de $a$. Donde Fermat da una cota universal, el orden da la respuesta exacta.

Esta precisión tiene consecuencias inmediatas: podemos reducir $a^k \pmod p$ al resto de dividir $k$ entre el orden de $a$, no entre $p-1$ (que puede ser mucho mayor). Y el análisis del orden de distintos elementos módulo $p$ revela la estructura completa del grupo $(\mathbb Z/p\mathbb Z)^*$.

## Definición

Sea $n > 1$ un entero y $a$ un entero con $\gcd(a, n) = 1$. El **orden multiplicativo** de $a$ módulo $n$, denotado $\operatorname{ord}_n(a)$, es el menor entero positivo $d$ tal que

$$a^d \;\equiv\; 1 \pmod n.$$

El orden siempre existe y es finito: por el Teorema de Euler, $a^{\varphi(n)} \equiv 1 \pmod n$, así que el orden divide a $\varphi(n)$ y $d \leq \varphi(n)$.

## Teorema

**(Lema fundamental del orden)** Sea $d = \operatorname{ord}_n(a)$. Para todo entero $k \geq 0$:

$$a^k \;\equiv\; 1 \pmod n \;\iff\; d \mid k.$$

En particular, $d \mid \varphi(n)$, y si $n = p$ es primo, $d \mid p - 1$.

## Demostración

Por la división euclidiana, $k = qd + r$ con $0 \leq r < d$. Entonces:

$$a^k \;=\; (a^d)^q \cdot a^r \;\equiv\; 1^q \cdot a^r \;=\; a^r \pmod n.$$

*$(\Rightarrow)$:* Si $a^k \equiv 1$, entonces $a^r \equiv 1$ con $0 \leq r < d$. Por la minimalidad de $d$, debe ser $r = 0$, es decir $d \mid k$.

*$(\Leftarrow)$:* Si $d \mid k$, entonces $k = qd$ y $a^k = (a^d)^q \equiv 1^q = 1 \pmod n$.

La última afirmación: $a^{\varphi(n)} \equiv 1 \pmod n$ por Euler, así $d \mid \varphi(n)$ por el lema. $\blacksquare$

**Corolario.** $a^i \equiv a^j \pmod n$ si y solo si $i \equiv j \pmod d$. Las potencias de $a$ forman un ciclo de longitud $d$:

$$a^0 \equiv 1, \; a^1, \; a^2, \; \ldots, \; a^{d-1}, \; a^d \equiv 1, \; a^{d+1} \equiv a^1, \; \ldots$$

## Teorema

**(Orden de una potencia)** Si $\operatorname{ord}_n(a) = d$, entonces para todo entero $k \geq 1$:

$$\operatorname{ord}_n(a^k) \;=\; \frac{d}{\gcd(d, k)}.$$

## Demostración

Sea $e = \operatorname{ord}_n(a^k)$ y $g = \gcd(d, k)$.

*$e \mid d/g$:* $(a^k)^{d/g} = a^{kd/g}$. Como $d \mid kd/g$ (porque $g \mid k$, así $k/g$ es entero y $kd/g = d \cdot (k/g)$), tenemos $(a^k)^{d/g} \equiv 1 \pmod n$. Por el lema, $e \mid d/g$.

*$d/g \mid e$:* $(a^k)^e = a^{ke} \equiv 1 \pmod n$. Por el lema, $d \mid ke$. Dividiendo por $g$: $(d/g) \mid (k/g) \cdot e$. Como $\gcd(d/g, k/g) = 1$ (pues ya dividimos por el MCD), concluimos $d/g \mid e$.

De $e \mid d/g$ y $d/g \mid e$: $e = d/g = d/\gcd(d, k)$. $\blacksquare$

**Consecuencia directa:** $a^k$ tiene el mismo orden que $a$ si y solo si $\gcd(k, d) = 1$.

## Ejemplo

### Cálculo de órdenes

**Ejemplo 1.** Calcular el orden de $2$ módulo $13$.

$\operatorname{ord}_{13}(2) \mid \varphi(13) = 12$. Los divisores de $12$ son $1, 2, 3, 4, 6, 12$. Comprobamos de menor a mayor:

- $2^1 = 2 \not\equiv 1$.
- $2^2 = 4 \not\equiv 1$.
- $2^3 = 8 \not\equiv 1$.
- $2^4 = 16 \equiv 3 \not\equiv 1$.
- $2^6 = 64 \equiv 64 - 4 \cdot 13 = 12 \equiv -1 \not\equiv 1$.
- $2^{12} \equiv (-1)^2 = 1 \pmod{13}$.

Luego $\operatorname{ord}_{13}(2) = 12$. Como $12 = \varphi(13)$, $2$ es **raíz primitiva** módulo $13$.

---

**Ejemplo 2.** Dado que $\operatorname{ord}_{13}(2) = 12$, calcular $\operatorname{ord}_{13}(2^k)$ para $k = 2, 3, 4, 6, 8$.

Usando $\operatorname{ord}_{13}(2^k) = 12/\gcd(12, k)$:

| $k$ | $\gcd(12,k)$ | $\operatorname{ord}_{13}(2^k)$ |
|---|---|---|
| $2$ | $2$ | $6$ |
| $3$ | $3$ | $4$ |
| $4$ | $4$ | $3$ |
| $6$ | $6$ | $2$ |
| $8$ | $4$ | $3$ |

*Verificación:* $2^6 = 64 \equiv 12 \equiv -1$, y $(-1)^6 = 1$ ✓ (orden $6$ para $2^2 \equiv 4$).

---

**Ejemplo 3.** Calcular el orden de $3$ módulo $7$.

$\varphi(7) = 6$, divisores: $1, 2, 3, 6$.

$3^1 = 3$, $3^2 = 9 \equiv 2$, $3^3 \equiv 6 \equiv -1$, $3^6 \equiv 1 \pmod 7$.

Probamos $3^3 = -1 \neq 1$, $3^2 = 2 \neq 1$, $3^1 = 3 \neq 1$. Luego $\operatorname{ord}_7(3) = 6$, y $3$ es raíz primitiva módulo $7$.

Las $6$ potencias de $3$ módulo $7$: $3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1$ — recorren todas las clases $\{1,2,3,4,5,6\}$.

---

### Órdenes en problemas de divisibilidad

**Ejemplo 4.** Sea $p$ un primo que divide a $2^n - 1$ con $p > 2$. Demostrar que $\operatorname{ord}_p(2) \mid n$ y que todo primo divisor impar de $2^p - 1$ (con $p$ primo) es $\equiv 1 \pmod p$.

*Primera parte:* Si $p \mid 2^n - 1$, entonces $2^n \equiv 1 \pmod p$, y por el lema fundamental $\operatorname{ord}_p(2) \mid n$.

*Segunda parte:* Sea $q$ un primo impar que divide a $2^p - 1$. Entonces $2^p \equiv 1 \pmod q$, así $\operatorname{ord}_q(2) \mid p$. Como $p$ es primo, $\operatorname{ord}_q(2) \in \{1, p\}$.

Si $\operatorname{ord}_q(2) = 1$: $2 \equiv 1 \pmod q$, luego $q \mid 1$, imposible.

Entonces $\operatorname{ord}_q(2) = p$. Como $\operatorname{ord}_q(2) \mid \varphi(q) = q - 1$, tenemos $p \mid q - 1$, es decir $q \equiv 1 \pmod p$. $\square$

---

**Ejemplo 5.** Encontrar todos los primos $p$ tales que $\operatorname{ord}_p(3) \mid 4$.

$\operatorname{ord}_p(3) \mid 4$ significa $3^4 = 81 \equiv 1 \pmod p$, es decir $p \mid 80 = 2^4 \cdot 5$. Los primos que dividen a $80$ son $2$ y $5$.

Verificamos: $\operatorname{ord}_2(3) = 1$ (pues $3 \equiv 1 \pmod 2$), $\operatorname{ord}_5(3)$: $3^1=3, 3^2=4, 3^4=16\equiv 1 \pmod 5$, y $3^2 = 4 \neq 1$. Así $\operatorname{ord}_5(3) = 4$.

**Los primos son $p = 2$ y $p = 5$.**

---

**Ejemplo 6.** *(OME 2014)* Probar que para $p$ primo impar, $\sum_{k=1}^{p-1} k^{p-1} \equiv -1 \pmod p$.

Por PTF, $k^{p-1} \equiv 1 \pmod p$ para todo $k \in \{1, \ldots, p-1\}$. Sumando:

$$\sum_{k=1}^{p-1} k^{p-1} \equiv \sum_{k=1}^{p-1} 1 = p - 1 \equiv -1 \pmod p. \qquad \square$$

*(Este ejemplo usa PTF directamente, pero el orden es la razón de fondo: cada $k$ tiene orden que divide a $p-1$, y PTF es el caso $d = p - 1$.)*

---

**Ejemplo 7.** Demostrar que para todo primo $p$, la ecuación $x^2 \equiv -1 \pmod p$ tiene solución si y solo si $p = 2$ o $p \equiv 1 \pmod 4$.

Si $x^2 \equiv -1 \pmod p$, entonces $x^4 \equiv 1 \pmod p$. Así $\operatorname{ord}_p(x) \mid 4$. Pero $\operatorname{ord}_p(x) \nmid 2$ (porque $x^2 \equiv -1 \neq 1$). Luego $\operatorname{ord}_p(x) = 4$.

Como $\operatorname{ord}_p(x) \mid p - 1$, se tiene $4 \mid p - 1$, es decir $p \equiv 1 \pmod 4$.

Recíprocamente, si $p \equiv 1 \pmod 4$, sea $g$ una raíz primitiva módulo $p$ (existe: ver capítulo de raíces primitivas). Entonces $g^{(p-1)/4}$ tiene orden $4$, y $(g^{(p-1)/4})^2 = g^{(p-1)/2} \equiv -1 \pmod p$ (pues $g^{(p-1)/2}$ es el único elemento de orden $2$, que es $-1$). $\square$

## Aplicaciones

**Período de fracciones decimales.** La fracción $1/p$ tiene período $\operatorname{ord}_p(10)$ en su expansión decimal (para primos $p \neq 2, 5$). Por ejemplo, $1/7$ tiene período $\operatorname{ord}_7(10) = 6$ (pues $10^6 \equiv 1 \pmod 7$ y ninguna potencia menor funciona).

**Logaritmo discreto.** Si $g$ es raíz primitiva módulo $p$, el problema $g^x \equiv b \pmod p$ (encontrar el «logaritmo discreto» de $b$ en base $g$) es la base de la criptografía Diffie-Hellman y ElGamal. El orden de $g$ es exactamente $p - 1$, garantizando que el logaritmo discreto está en $\{0, 1, \ldots, p-2\}$.

**Divisores primitivos.** Que todo divisor primo de $\Phi_n(a) = a^{n-1} + a^{n-2} + \cdots + 1$ (para $a > 1$, $n$ primo) sea $\equiv 1 \pmod n$ es consecuencia directa del análisis del orden.

## Observación

**El orden y el ciclo de Fermat.** Computar el orden de $a$ módulo $p$ es equivalente a encontrar el período mínimo de la sucesión $a, a^2, a^3, \ldots \pmod p$. Como el grupo $(\mathbb Z/p\mathbb Z)^*$ tiene $p - 1$ elementos, el orden divide a $p - 1$. Los posibles órdenes son exactamente los divisores de $p - 1$: para cada divisor $d$ de $p - 1$, hay exactamente $\varphi(d)$ elementos de orden $d$ (esto se demuestra en el capítulo de raíces primitivas).

**Cálculo eficiente del orden.** Para encontrar $\operatorname{ord}_n(a)$ siendo $\varphi(n)$ conocido, se busca el menor divisor $d$ de $\varphi(n)$ con $a^d \equiv 1$. El método: factorizar $\varphi(n) = q_1^{f_1} \cdots q_s^{f_s}$. Para cada primo $q_i$, calcular el exponente máximo que se puede «eliminar»: si $a^{\varphi(n)/q_i} \equiv 1$, entonces $q_i$ no está en el orden. El orden exacto es $\varphi(n)$ dividido por todos los primos $q_i$ que se puedan eliminar iterativamente.

## Problemas relacionados

- **(Clásico)** Demostrar que si $p$ es primo y $p \equiv 3 \pmod 4$, entonces $-1$ no es residuo cuadrático módulo $p$. *(Hint: $\operatorname{ord}_p(-1) = 2$, que no divide a $(p-1)/2$ cuando $4 \nmid p-1$.)*

- **(OME 2013)** Sea $p$ primo y $a \in \{1, \ldots, p-1\}$. Probar que $\sum_{k=0}^{p-1} a^k \equiv 0 \pmod p$ si $a \not\equiv 1$ y $\equiv -1 \pmod p$ si $a \equiv 1$.

- **(ISL 2003/N3)** Determinar todos los pares de enteros positivos $(a, b)$ con $a^2 = b! + a$ y $b! + a$ un cuadrado perfecto.

- **(Clásico)** Para qué enteros $a$ se tiene $\operatorname{ord}_p(a) = p - 1$ (es decir, $a$ es raíz primitiva módulo $p$)?

- **(OMG 2022)** Hallar el menor primo $p$ tal que el orden de $5$ módulo $p$ sea exactamente $\frac{p-1}{2}$.
