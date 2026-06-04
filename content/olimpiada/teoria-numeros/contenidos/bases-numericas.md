---
title: "Bases numéricas"
preview: "Todo entero positivo admite una única representación en cualquier base $b \\geq 2$. El lenguaje de los dígitos desbloquea la fórmula de Legendre, el teorema de Kummer y el teorema de Lucas: tres herramientas centrales en divisibilidad olímpica."
dificultad: iniciacion
tags: [bases, representacion, dígitos, divisibilidad, legendre, kummer, lucas]
prerequisites: [divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

Los sistemas posicionales son tan cotidianos que casi pasan inadvertidos. Escribir «$245$» y saber que eso es $2\cdot 100 + 4\cdot 10 + 5$ es una herramienta que usamos sin pensarla. Sin embargo, la teoría detrás de esa notación —la representación de un entero en una base arbitraria— tiene consecuencias profundas y no triviales en teoría de números.

Los babilonios usaron base $60$ (de ahí que un minuto tenga $60$ segundos y un grado $60$ minutos de arco). Los mayas usaron base $20$. Los ordenadores modernos usan base $2$. Pero para el matemático olímpico, la elección más frecuente es **base $p$ con $p$ primo**, porque desbloquea tres resultados fundamentales: la **fórmula de Legendre** para $v_p(n!)$, el **teorema de Kummer** para $v_p\binom{m+n}{m}$, y el **teorema de Lucas** para $\binom{n}{k} \pmod p$.

Este capítulo cubre la teoría de forma sistemática: primero la existencia y unicidad de la representación, luego los criterios de divisibilidad derivados de la base, y finalmente las tres aplicaciones clásicas con sus demostraciones completas.

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

El proceso termina cuando $q_j = 0$. Los restos, **leídos de abajo hacia arriba**, dan los dígitos $a_0, a_1, a_2, \ldots$ En cada paso el cociente estricatamente decrece: $n > q_0 > q_1 > \cdots \geq 0$, así que el algoritmo siempre termina en finitos pasos.

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

### Un problema olímpico clásico

**Ejemplo 5.** Hallar todos los enteros positivos $n$ tales que $n + s_{10}(n) = 100$.

**Análisis de paridad módulo 9.** Por el Lema, $n \equiv s_{10}(n) \pmod 9$. Sumando: $n + s_{10}(n) \equiv 2s_{10}(n) \pmod 9$. Como $n + s_{10}(n) = 100$ y $100 = 11 \cdot 9 + 1 \equiv 1 \pmod 9$, obtenemos:

$$2\,s_{10}(n) \equiv 1 \pmod 9.$$

Como $2^{-1} \equiv 5 \pmod 9$ (pues $2 \cdot 5 = 10 \equiv 1$), concluimos:

$$s_{10}(n) \equiv 5 \pmod 9, \quad \text{es decir,} \quad s_{10}(n) \in \{5, 14, 23, \ldots\}$$

**Acotación de $n$.** Como $s_{10}(n) \geq 1$, se tiene $n \leq 99$. Por tanto $n$ tiene a lo más dos dígitos, y $s_{10}(n) \leq 9 + 9 = 18$.

Los únicos valores posibles para $s_{10}(n)$ son $5$ y $14$.

**Caso $s_{10}(n) = 5$.** Entonces $n = 100 - 5 = 95$. Pero $s_{10}(95) = 9 + 5 = 14 \neq 5$. Contradicción.

**Caso $s_{10}(n) = 14$.** Entonces $n = 100 - 14 = 86$. Verificamos: $s_{10}(86) = 8 + 6 = 14$. $\checkmark$

La **única solución** es $n = 86$.

*Nota.* Podemos confirmar esto directamente: si $n = \overline{ab}$ con $a, b \in \{0,\ldots,9\}$, la ecuación $10a + b + a + b = 100$ da $11a + 2b = 100$. Las únicas soluciones enteras no negativas con $a \leq 9$ y $b \leq 9$ son $a = 8, b = 6$, es decir, $n = 86$.

## La fórmula de Legendre

La representación en base $p$ de un entero $n$ permite calcular exactamente la valuación $p$-ádica de $n!$. Este resultado, conocido como la **fórmula de Legendre**, es una de las herramientas más útiles en divisibilidad olímpica.

## Teorema

**(Legendre, 1808)** Sea $p$ un primo y $n$ un entero positivo. Entonces:

$$v_p(n!) = \sum_{k=1}^{\infty} \left\lfloor \frac{n}{p^k} \right\rfloor = \frac{n - s_p(n)}{p - 1},$$

donde $s_p(n)$ es la suma de los dígitos de $n$ en base $p$.

## Demostración

**Paso 1: la fórmula de suelo.** En el producto $n! = 1 \cdot 2 \cdots n$, el exponente de $p$ es

$$v_p(n!) = \#\{1 \leq j \leq n : p \mid j\} + \#\{1 \leq j \leq n : p^2 \mid j\} + \cdots$$

El número de múltiplos de $p^k$ en $\{1, \ldots, n\}$ es exactamente $\lfloor n/p^k \rfloor$. Por tanto:

$$v_p(n!) = \sum_{k=1}^{\infty} \left\lfloor \frac{n}{p^k} \right\rfloor.$$

La suma es finita pues $\lfloor n/p^k \rfloor = 0$ para $p^k > n$.

**Paso 2: conexión con la base $p$.** Sea $n = a_r p^r + a_{r-1} p^{r-1} + \cdots + a_1 p + a_0$ la representación de $n$ en base $p$ (con $0 \leq a_i \leq p-1$). Calculamos cada piso:

$$\left\lfloor \frac{n}{p} \right\rfloor = a_r p^{r-1} + a_{r-1} p^{r-2} + \cdots + a_1,$$

$$\left\lfloor \frac{n}{p^2} \right\rfloor = a_r p^{r-2} + a_{r-1} p^{r-3} + \cdots + a_2,$$

$$\vdots$$

$$\left\lfloor \frac{n}{p^j} \right\rfloor = \sum_{i=j}^{r} a_i\, p^{i-j}.$$

Sumando sobre $j = 1, 2, \ldots, r$:

$$\sum_{j=1}^{r} \left\lfloor \frac{n}{p^j} \right\rfloor = \sum_{j=1}^{r} \sum_{i=j}^{r} a_i\, p^{i-j} = \sum_{i=1}^{r} a_i \sum_{j=1}^{i} p^{i-j} = \sum_{i=1}^{r} a_i \left(p^{i-1} + p^{i-2} + \cdots + 1\right).$$

Usando la suma de la progresión geométrica:

$$= \sum_{i=1}^{r} a_i \cdot \frac{p^i - 1}{p - 1} = \frac{1}{p-1} \sum_{i=1}^{r} a_i\,(p^i - 1).$$

Desarrollando:

$$= \frac{1}{p-1}\left(\sum_{i=1}^{r} a_i\, p^i - \sum_{i=1}^{r} a_i\right) = \frac{1}{p-1}\left(\sum_{i=0}^{r} a_i\, p^i - a_0 - \sum_{i=1}^{r} a_i\right) = \frac{n - s_p(n)}{p - 1}. \quad \blacksquare$$

## Corolario

**(Kummer, 1852)** $v_p\!\binom{m+n}{m}$ es igual al número de **acarreos** que se producen al sumar $m$ y $n$ en base $p$.

*Demostración rápida.* Por definición de coeficiente binomial: $\binom{m+n}{m} = \frac{(m+n)!}{m!\,n!}$, así que $v_p\!\binom{m+n}{m} = v_p((m+n)!) - v_p(m!) - v_p(n!)$. Aplicando Legendre:

$$v_p\!\binom{m+n}{m} = \frac{(m+n) - s_p(m+n)}{p-1} - \frac{m - s_p(m)}{p-1} - \frac{n - s_p(n)}{p-1} = \frac{s_p(m) + s_p(n) - s_p(m+n)}{p-1}.$$

Cada acarreo al sumar dígitos en base $p$ reduce la suma de dígitos en exactamente $p - 1$ (se produce cuando la suma de dos dígitos supera $p - 1$: el dígito baja en $p-1$ y el siguiente sube en $1$). Por tanto la expresión anterior cuenta exactamente los acarreos. $\blacksquare$

## El teorema de Lucas

El teorema de Lucas reduce el cálculo de $\binom{n}{k} \pmod p$ a coeficientes binomiales de dígitos individuales en base $p$. Es especialmente útil cuando $n$ y $k$ son grandes pero $p$ es pequeño.

## Teorema

**(Lucas, 1878)** Sea $p$ primo. Sean $n$ y $k$ enteros no negativos con representaciones en base $p$:

$$n = n_r p^r + \cdots + n_1 p + n_0, \qquad k = k_r p^r + \cdots + k_1 p + k_0.$$

Entonces:

$$\binom{n}{k} \equiv \prod_{i=0}^{r} \binom{n_i}{k_i} \pmod{p}.$$

En particular, $\binom{n}{k} \equiv 0 \pmod p$ si y solo si existe algún índice $i$ con $k_i > n_i$.

## Demostración

Trabajamos en $\mathbb{F}_p[x]$, el anillo de polinomios con coeficientes en $\mathbb{Z}/p\mathbb{Z}$.

**Lema previo** (Identidad de Frobenius). Para todo primo $p$:

$$(1 + x)^p \equiv 1 + x^p \pmod{p}.$$

*Demostración del lema.* Por el teorema binomial, $(1+x)^p = \sum_{j=0}^p \binom{p}{j} x^j$. Para $1 \leq j \leq p-1$, el coeficiente $\binom{p}{j} = \frac{p!}{j!(p-j)!}$ es divisible por $p$ (el numerador tiene el factor $p$ y el denominador no, pues $j < p$ y $p-j < p$). Por tanto todos los términos intermedios se anulan módulo $p$, quedando solo $j=0$ y $j=p$. $\square$

**Prueba del teorema.** Aplicando el lema iteradamente:

$$(1+x)^{p^j} \equiv 1 + x^{p^j} \pmod{p}.$$

Por tanto:

$$(1+x)^n = (1+x)^{n_0 + n_1 p + \cdots + n_r p^r} = \prod_{i=0}^r \left[(1+x)^{p^i}\right]^{n_i} \equiv \prod_{i=0}^r (1 + x^{p^i})^{n_i} \pmod{p}.$$

Expandiendo cada factor con el teorema binomial:

$$\prod_{i=0}^r (1 + x^{p^i})^{n_i} = \prod_{i=0}^r \sum_{k_i=0}^{n_i} \binom{n_i}{k_i} x^{k_i p^i}.$$

El coeficiente de $x^k = x^{k_0 + k_1 p + \cdots + k_r p^r}$ en este producto es $\prod_{i=0}^r \binom{n_i}{k_i}$ (pues la representación en base $p$ es única, los distintos sumandos $k_i p^i$ no interfieren entre sí).

Por otro lado, el coeficiente de $x^k$ en $(1+x)^n$ es $\binom{n}{k}$. Igualando:

$$\binom{n}{k} \equiv \prod_{i=0}^r \binom{n_i}{k_i} \pmod{p}. \quad \blacksquare$$

## Ejemplo

### Aplicaciones de la fórmula de Legendre

**Ejemplo 6.** Calcular $v_3(100!)$.

La representación de $100$ en base $3$: $100 = 81 + 18 + 1 = 3^4 + 2\cdot 3^2 + 1$, es decir, $100 = (10201)_3$. Entonces $s_3(100) = 1 + 0 + 2 + 0 + 1 = 4$. Por Legendre:

$$v_3(100!) = \frac{100 - 4}{3 - 1} = \frac{96}{2} = 48.$$

*Verificación directa.* $\lfloor 100/3 \rfloor + \lfloor 100/9 \rfloor + \lfloor 100/27 \rfloor + \lfloor 100/81 \rfloor = 33 + 11 + 3 + 1 = 48$. $\checkmark$

---

**Ejemplo 7.** ¿Para cuántos valores de $k$ con $0 \leq k \leq 2^n$ se tiene $2 \nmid \binom{2^n}{k}$?

Por Lucas con $p = 2$: la representación de $2^n$ en base $2$ es $1\underbrace{00\cdots0}_{n}$. Para que $\binom{2^n}{k} \not\equiv 0 \pmod 2$, necesitamos $k_i \leq (2^n)_i$ para todo dígito $i$. Los únicos dígitos no nulos de $2^n$ son el de posición $0$ (que vale $0$) y el de posición $n$ (que vale $1$). Por tanto $k$ debe tener $k_i = 0$ para $i \neq n$ y $k_n \in \{0, 1\}$. Esto da exactamente $k \in \{0, 2^n\}$: solo dos valores impares de coeficiente binomial.

---

**Ejemplo 8.** Calcular $v_2\binom{2n}{n}$ y deducir que $\binom{2n}{n}$ es siempre par para $n \geq 1$.

Por Kummer: $v_2\binom{2n}{n}$ es el número de acarreos al sumar $n + n = 2n$ en base $2$. Cuando se suman dos copias de $n$, el primer dígito de $n$ en base $2$ que sea $1$ producirá un acarreo (pues $1 + 1 = 10_2$). Para $n \geq 1$, $n$ tiene al menos un dígito $1$ en base $2$, así que hay al menos un acarreo. Luego $v_2\binom{2n}{n} \geq 1$, es decir, $2 \mid \binom{2n}{n}$.

Más precisamente: $v_2\binom{2n}{n} = s_2(n)$, el número de unos en la representación binaria de $n$.

---

### Una aplicación directa del teorema de Lucas

**Ejemplo 9.** Calcular $\binom{100}{35} \pmod 7$.

Representamos $100$ y $35$ en base $7$:
$$100 = 2 \cdot 49 + 0 \cdot 7 + 2 = (202)_7, \qquad 35 = 5 \cdot 7 + 0 = (050)_7.$$

Por Lucas:

$$\binom{100}{35} \equiv \binom{2}{0}\binom{0}{5}\binom{2}{2} \pmod 7.$$

Como $5 > 0$, el factor $\binom{0}{5} = 0$. Por tanto:

$$\binom{100}{35} \equiv 0 \pmod 7.$$

Intuitivamente: el dígito de $35$ en posición $1$ (base $7$) es $5$, pero el de $100$ es $0 < 5$, lo que provoca el cero.

## Aplicaciones

Las bases numéricas aparecen de forma natural en los siguientes contextos olímpicos:

**Criterios de divisibilidad.** Cuando un problema pregunta por divisibilidad de una expresión que involucra dígitos, el Lema del capítulo suele ser la clave: $n \equiv s_b(n) \pmod{b-1}$ y $n \equiv \sum (-1)^i a_i \pmod{b+1}$.

**Valuación de factoriales y coeficientes binomiales.** La fórmula de Legendre es el método estándar para calcular $v_p(n!)$, $v_p\binom{n}{k}$, y para determinar cuántos ceros tiene $n!$ al final (caso $p = 5$, dividiendo por el exceso de $5$ sobre $2$).

**Demostrar divisibilidad por potencias de primos.** El teorema de Kummer convierte preguntas sobre $v_p\binom{n}{k}$ en conteo de acarreos, lo que a menudo da una interpretación combinatoria o permite razonar sobre la paridad de ciertas expresiones.

**Problemas de representación.** Preguntas como *"¿para cuántos $n$ entre $1$ y $N$ los dígitos de $n$ en base $b$ son todos distintos?"* o *"¿cuántos enteros de $k$ dígitos en base $b$ son divisibles por $d$?"* se resuelven combinando la representación posicional con conteo.

**Elección estratégica de la base.** Si un problema menciona una expresión que depende de $n \pmod{b-1}$ o $n \pmod{b+1}$, conviene escribir $n$ en base $b$ y explotar la congruencia de dígitos.

## Observación

**Sobre la elección de la base.** La base no es un dato fijo del problema: es una herramienta que el resolutor elige. Algunos patrones orientadores:

- **Base $2$:** problemas de paridad iterada, juegos de Nim, potencias de $2$ que dividen a expresiones.
- **Base $3$:** conjuntos sin progresiones aritméticas de longitud $3$, problemas tipo Cantor.
- **Base $p$ primo:** valuación $p$-ádica, fórmulas de Legendre, Kummer, Lucas.
- **Base $b = $ módulo + 1:** divisibilidad por $b - 1$ via suma de dígitos.
- **Base $10$:** problemas explícitos sobre dígitos decimales.

**Sobre Kummer y Lucas.** Ambos son consecuencias directas de Legendre, pero su formulación independiente hace que sean más rápidos de aplicar en contexto. Conviene memorizarlos como herramientas de primer acceso:
- Kummer: $v_p\binom{m+n}{m}$ = número de acarreos al sumar $m$ y $n$ en base $p$.
- Lucas: reducir $\binom{n}{k} \pmod p$ a un producto de coeficientes de dígitos.

**Sobre la fórmula de Legendre y los ceros de $n!$.** El número de ceros al final de $n!$ es $v_5(n!) = \frac{n - s_5(n)}{4}$ (no $v_2(n!)$, pues siempre hay más factores $2$ que $5$). Para $n = 100$: $s_5(100) = s_5((400)_5) = 4$, así que $v_5(100!) = (100 - 4)/4 = 24$ ceros.

## Problemas relacionados

- **(OMG 2015, regional).** Hallar todos los enteros positivos $n$ tales que $n + s_{10}(n) = 100$. *(Solución desarrollada en el Ejemplo 5.)*

- **(Clásico).** Demostrar que el número de ceros al final de $n!$ es $\left\lfloor n/5 \rfloor + \lfloor n/25 \right\rfloor + \lfloor n/125 \rfloor + \cdots$ Calcular explícitamente para $n = 1000$.

- **(OME 2009).** Demostrar que $\binom{2n}{n}$ es par para todo $n \geq 1$. *(Aplicación de Kummer en base $2$: ver Ejemplo 8.)*

- **(Clásico de Lucas).** Sea $p = 5$. Calcular $\binom{2025}{175} \pmod 5$.

- **(ISL 2000, N1 adaptado).** Determinar todos los enteros positivos $n$ tales que $n$ divide a $2^{n-1} + 1$. *(Pista: analizar la valuación $p$-ádica de $2^{n-1} + 1$ según los dígitos de $n-1$ en base $p$.)*

- **(Putnam 1994, B-4).** Sea $f(n)$ el número de representaciones de $n$ como suma de potencias distintas de $2$. Demostrar que $f(n)$ es siempre una potencia de $2$ y relacionar $f(n)$ con los dígitos de $n$ en base $2$.
