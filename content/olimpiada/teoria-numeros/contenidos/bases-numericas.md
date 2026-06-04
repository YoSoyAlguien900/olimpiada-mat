---
title: "Bases numéricas"
preview: "Todo entero positivo admite una única representación en cualquier base $b \\geq 2$. Los criterios de divisibilidad clásicos (por 9, 11, 7, 13…) son consecuencias directas de la aritmética de las potencias de la base."
dificultad: iniciacion
tags: [bases, representacion, dígitos, divisibilidad]
prerequisites: [divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

Los sistemas posicionales son tan cotidianos que casi pasan inadvertidos. Escribir «$245$» y saber que eso es $2\cdot 100 + 4\cdot 10 + 5$ es una herramienta que usamos sin pensarla. Sin embargo, la teoría detrás de esa notación —la representación de un entero en una base arbitraria— tiene consecuencias profundas y no triviales en teoría de números.

Los babilonios usaron base $60$ (de ahí que un minuto tenga $60$ segundos y un grado $60$ minutos de arco). Los mayas usaron base $20$. Los ordenadores modernos usan base $2$. Pero para el matemático olímpico, la elección más frecuente es **base $p$ con $p$ primo**, porque desbloquea tres resultados fundamentales: la **fórmula de Legendre** para $v_p(n!)$, el **teorema de Kummer** para $v_p\binom{m+n}{m}$, y el **teorema de Lucas** para $\binom{n}{k} \pmod p$.

Este capítulo cubre la teoría fundamental: la existencia y unicidad de la representación, y los criterios de divisibilidad que se siguen directamente de ella. Las aplicaciones avanzadas (fórmula de Legendre, teorema de Kummer, teorema de Lucas) requieren herramientas que se estudian en capítulos posteriores.

## Definición

Sea $b \geq 2$ un entero. La **representación en base $b$** de un entero positivo $n$ es la escritura

$$
n = a_k b^k + a_{k-1} b^{k-1} + \cdots + a_1 b + a_0 = \sum_{i=0}^{k} a_i\, b^i,
$$

donde cada $a_i$ es un entero con $0 \leq a_i \leq b - 1$, y $a_k \neq 0$ (el dígito más significativo no es cero). Los enteros $a_0, a_1, \ldots, a_k$ se llaman los **dígitos** de $n$ en base $b$, y escribimos $n = (a_k\, a_{k-1} \cdots a_1\, a_0)_b$.

El número de dígitos de $n$ en base $b$ es $k + 1 = \lfloor \log_b n \rfloor + 1$.

### El algoritmo de conversión

Para hallar los dígitos de $n$ en base $b$, aplicamos la **división euclidiana** de forma iterada:

$$
n = b\,q_0 + a_0, \qquad 0 \leq a_0 \leq b - 1,
$$
$$
q_0 = b\,q_1 + a_1, \qquad 0 \leq a_1 \leq b - 1,
$$
$$
q_1 = b\,q_2 + a_2, \qquad 0 \leq a_2 \leq b - 1,
$$
$$
\vdots
$$

El proceso termina cuando $q_j = 0$. Los restos, **leídos de abajo hacia arriba**, dan los dígitos $a_0, a_1, a_2, \ldots$ En cada paso el cociente estrictamente decrece: $n > q_0 > q_1 > \cdots \geq 0$, así que el algoritmo siempre termina en finitos pasos.

## Teorema

Sea $b \geq 2$ un entero. Todo entero positivo $n$ admite una **única** representación

$$
n = \sum_{i=0}^{k} a_i\, b^i, \qquad 0 \leq a_i \leq b - 1,\quad a_k \neq 0.
$$

## Demostración

**Existencia.** Procedemos por inducción fuerte sobre $n$.

*Caso base.* Si $1 \leq n \leq b - 1$, entonces $n = (n)_b$ es una representación válida con un solo dígito.

*Paso inductivo.* Sea $n \geq b$. Por la división euclidiana, existen únicos enteros $q_0$ y $a_0$ con

$$
n = b\,q_0 + a_0, \qquad 0 \leq a_0 \leq b - 1.
$$

Como $b \geq 2$ y $n \geq b$, se tiene $q_0 = (n - a_0)/b \leq n/b < n$, así que $1 \leq q_0 < n$. Por hipótesis de inducción, $q_0$ admite representación en base $b$:

$$
q_0 = a_k b^{k-1} + a_{k-1} b^{k-2} + \cdots + a_1.
$$

Multiplicando por $b$ y sumando $a_0$:

$$
n = b\,q_0 + a_0 = a_k b^k + a_{k-1} b^{k-1} + \cdots + a_1 b + a_0,
$$

que es una representación válida para $n$.

**Unicidad.** Supongamos que $n$ admite dos representaciones:

$$
n = \sum_{i=0}^{k} a_i\, b^i = \sum_{i=0}^{m} c_i\, b^i,
$$

con $a_k \neq 0$ y $c_m \neq 0$. Queremos demostrar que $k = m$ y $a_i = c_i$ para todo $i$.

Tomando ambas expresiones módulo $b$:

$$
a_0 \equiv n \equiv c_0 \pmod{b}.
$$

Como $0 \leq a_0, c_0 \leq b - 1$, se sigue $a_0 = c_0$. Restando y dividiendo por $b$:

$$
\sum_{i=1}^{k} a_i\, b^{i-1} = \sum_{i=1}^{m} c_i\, b^{i-1}.
$$

Esta es una igualdad del mismo tipo entre los cocientes $q_0 = (n - a_0)/b$. Repitiendo el argumento (equivalentemente, por inducción sobre el número de dígitos), concluimos $a_i = c_i$ para todo $i \geq 0$, y en particular $k = m$. $\blacksquare$

## Lema

Sea $n = (a_k\, a_{k-1} \cdots a_1\, a_0)_b$. Denotamos $s_b(n) = a_0 + a_1 + \cdots + a_k$ la **suma de dígitos** de $n$ en base $b$. Entonces:

**(i)** $n \equiv s_b(n) \pmod{b - 1}$.

**(ii)** $n \equiv \displaystyle\sum_{i=0}^{k} (-1)^i\, a_i \pmod{b + 1}$.

## Demostración

**(i)** Como $b \equiv 1 \pmod{b-1}$, toda potencia satisface $b^i \equiv 1 \pmod{b-1}$. Por lo tanto:

$$
n = \sum_{i=0}^k a_i\, b^i \;\equiv\; \sum_{i=0}^k a_i \cdot 1 \;=\; s_b(n) \pmod{b - 1}.
$$

**(ii)** Como $b \equiv -1 \pmod{b+1}$, se tiene $b^i \equiv (-1)^i \pmod{b+1}$. Por lo tanto:

$$
n = \sum_{i=0}^k a_i\, b^i \;\equiv\; \sum_{i=0}^k a_i\, (-1)^i \pmod{b + 1}. \quad \blacksquare
$$

## Corolario

**(i)** (Criterio del 9) En base $10$: $\;9 \mid n \iff 9 \mid s_{10}(n)$. Igualmente, $3 \mid n \iff 3 \mid s_{10}(n)$.

**(ii)** (Criterio del 11) En base $10$: $\;11 \mid n \iff 11 \mid (a_0 - a_1 + a_2 - \cdots)$, donde $a_i$ son los dígitos de $n$.

**(iii)** (Caso general) Para cualquier base $b$: $(b-1) \mid n \iff (b-1) \mid s_b(n)$, y $(b+1) \mid n \iff (b+1) \mid \sum (-1)^i a_i$.

*Demostración.* Aplicación directa del Lema. Para (i): $b = 10$, $b - 1 = 9 = 3^2$; como $10 \equiv 1 \pmod 3$ y $10 \equiv 1 \pmod 9$, el criterio funciona para $3$ y para $9$. Para (ii): $b + 1 = 11$. $\blacksquare$

## Ejemplo

### Conversiones de base

**Ejemplo 1.** Escribir $245$ en base $7$.

Aplicamos el algoritmo:
$$245 = 7 \cdot 35 + \mathbf{0}, \quad 35 = 7 \cdot 5 + \mathbf{0}, \quad 5 = 7 \cdot 0 + \mathbf{5}.$$

Leyendo los restos de abajo arriba: $\mathbf{245 = (500)_7}$.

*Verificación.* $5 \cdot 49 + 0 \cdot 7 + 0 = 245$. $\checkmark$

---

**Ejemplo 2.** Escribir $2026$ en base $2$.

$$
2026 = 2 \cdot 1013 + \mathbf{0}, \quad
1013 = 2 \cdot 506 + \mathbf{1}, \quad
506  = 2 \cdot 253 + \mathbf{0},
$$
$$
253  = 2 \cdot 126 + \mathbf{1}, \quad
126  = 2 \cdot 63 + \mathbf{0}, \quad
63   = 2 \cdot 31 + \mathbf{1},
$$
$$
31   = 2 \cdot 15 + \mathbf{1}, \quad
15   = 2 \cdot 7 + \mathbf{1}, \quad
7    = 2 \cdot 3 + \mathbf{1}, \quad
3    = 2 \cdot 1 + \mathbf{1}, \quad
1    = 2 \cdot 0 + \mathbf{1}.
$$

Leyendo de abajo arriba: $\mathbf{2026 = (11111101010)_2}$.

*Verificación.* $2^{10} + 2^9 + 2^8 + 2^7 + 2^6 + 2^5 + 2^3 + 2^1 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2 = 2026$. $\checkmark$

---

### Criterios de divisibilidad

**Ejemplo 3.** ¿Es $n = 874\,593$ divisible por $9$?

$$s_{10}(874593) = 8 + 7 + 4 + 5 + 9 + 3 = 36 = 4 \cdot 9.$$

Como $9 \mid 36$, el Corolario garantiza $9 \mid 874\,593$.

---

**Ejemplo 4.** ¿Es $n = 7\,392\,814$ divisible por $11$?

Suma alternada (dígito menos significativo primero):
$$4 - 1 + 8 - 2 + 9 - 3 + 7 = 22 = 2 \cdot 11.$$

Como $11 \mid 22$, se tiene $11 \mid 7\,392\,814$.

---

### Un problema clásico con suma de dígitos

**Ejemplo 5.** Hallar todos los enteros positivos $n$ tales que $n + s_{10}(n) = 100$.

**Análisis módulo 9.** Por el Lema, $n \equiv s_{10}(n) \pmod 9$. Sumando: $2s_{10}(n) \equiv 100 \equiv 1 \pmod 9$, así $s_{10}(n) \equiv 5 \pmod 9$.

**Acotación.** Como $s_{10}(n) \geq 1$, $n \leq 99$. Con $n$ de dos dígitos: $n = \overline{ab}$, la ecuación es $11a + 2b = 100$. El único entero con $a \leq 9$ es $a = 8, b = 6$: $n = 86$.

**La única solución es $n = 86$.**

## Aplicaciones

**Elección estratégica de la base.** La base no es un dato fijo del problema: es una herramienta. Criterio práctico:

- **Base 10**: criterios estándar por 3, 9, 11.
- **Base 2**: problemas de paridad, potencias de 2, representaciones binarias.
- **Base 7 (o cualquier primo $p$)**: si el problema pregunta divisibilidad por $p \pm 1$, la suma (o suma alternada) de dígitos en base $p$ da la respuesta directamente.
- **Base $b = $ módulo del problema**: si aparece divisibilidad por $b-1$ o $b+1$, trabajar en base $b$.

**Aplicaciones avanzadas.** La representación en base $p$ permite calcular:
- Cuántas veces divide $p$ a un factorial $n!$ — **Fórmula de Legendre**, estudiada en el capítulo de *Valuación $p$-ádica*.
- El exponente de $p$ en un coeficiente binomial — **Teorema de Kummer**, idem.
- El valor de $\binom{n}{k} \pmod p$ — **Teorema de Lucas**, en el capítulo dedicado.

Estos resultados requieren las herramientas de aritmética modular y valuaciones que se desarrollan en capítulos posteriores.

## Observación

**El criterio para $7$, $11$ y $13$.** Como $10^3 = 1000 \equiv 1 \pmod{7}$, $\pmod{11}$ y $\pmod{13}$ (a la vez, pues $7 \cdot 11 \cdot 13 = 1001$ y $1000 \equiv -1 \pmod{1001}$), podemos procesar los dígitos de tres en tres. Esto explica el criterio: "separa los últimos tres dígitos, réstalos a los anteriores; el resultado es divisible por $7$, $11$ o $13$ si y solo si el original lo era." Formalmente: $n \equiv \overline{a_{2}a_{1}a_{0}} - \overline{a_{5}a_{4}a_{3}} + \cdots \pmod{1001}$.

## Problemas relacionados

- **(Clásico)** Hallar todos los enteros positivos $n$ tales que $n + s_{10}(n) = 100$. *(Solución en el Ejemplo 5.)*

- **(OMG 2013/P1)** Dado un entero $n$ en base decimal, formamos el entero $k$ restando del número formado por las tres últimas cifras de $n$ el número formado por las cifras anteriores. Demostrar que $n$ es divisible por $7$, $11$ o $13$ si y solo si $k$ también lo es.

- **(OMG 2024/P1)** Determinar el menor entero positivo $n$ tal que la suma $A(n) = 1 + 11 + 111 + \cdots + \underbrace{11\cdots1}_{n}$ sea divisible por $45$.

- **(Clásico)** Sea $f(n)$ el número de representaciones de $n$ como suma de potencias de $2$ distintas. Demostrar que $f(n)$ es siempre una potencia de $2$ (incluyendo $2^0 = 1$) y que $f(n)$ depende únicamente de los dígitos de $n$ en base $2$.

- **(Clásico)** Encontrar todos los enteros positivos que son palíndromos en base $2$ y en base $3$ simultáneamente.

- **(Clásico)** Probar que $n$ es divisible por $b+1$ si y solo si su suma alternada de dígitos en base $b$ lo es. Verificar con $b = 3$: criterio de divisibilidad por $4$ en base $3$.
