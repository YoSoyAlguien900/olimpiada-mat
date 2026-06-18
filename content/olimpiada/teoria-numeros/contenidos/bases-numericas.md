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

*La idea.* El algoritmo de "dividir y quedarse con el resto" no es una receta arbitraria: cada división por $b$ **arranca la cifra de las unidades**. En efecto, si $n = (\cdots a_1 a_0)_b$, dividir por $b$ deja resto $a_0$ y cociente $(\cdots a_1)_b$; repetir extrae $a_1$, luego $a_2$… Por eso los restos, leídos **de abajo arriba**, son los dígitos.

*Solución.* Dividimos sucesivamente por $7$:

$$
245 = 7 \cdot 35 + \mathbf{0}, \quad 35 = 7 \cdot 5 + \mathbf{0}, \quad 5 = 7 \cdot 0 + \mathbf{5}.
$$

Leyendo los restos de abajo arriba: $245 = (\mathbf{500})_7$.

*Verificación.* $(500)_7 = 5 \cdot 7^2 + 0 \cdot 7 + 0 = 5 \cdot 49 = 245$. ✓

---

**Ejemplo 2.** Escribir $2026$ en base $2$.

*La idea.* Es el mismo algoritmo, pero en base $2$ el resto de cada división es simplemente la **paridad**: el dígito binario que sacamos en cada paso responde a "¿es par o impar el cociente actual?".

*Solución.*

$$
2026 = 2 \cdot 1013 + \mathbf{0}, \quad
1013 = 2 \cdot 506 + \mathbf{1}, \quad
506  = 2 \cdot 253 + \mathbf{0}, \quad
253  = 2 \cdot 126 + \mathbf{1},
$$
$$
126  = 2 \cdot 63 + \mathbf{0}, \quad
63   = 2 \cdot 31 + \mathbf{1}, \quad
31   = 2 \cdot 15 + \mathbf{1}, \quad
15   = 2 \cdot 7 + \mathbf{1},
$$
$$
7 = 2 \cdot 3 + \mathbf{1}, \quad 3 = 2 \cdot 1 + \mathbf{1}, \quad 1 = 2 \cdot 0 + \mathbf{1}.
$$

Leyendo de abajo arriba: $2026 = (\mathbf{11111101010})_2$.

*Verificación.* $2^{10} + 2^9 + 2^8 + 2^7 + 2^6 + 2^5 + 2^3 + 2^1 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2 = 2026$. ✓

### Criterios de divisibilidad

**Ejemplo 3.** ¿Es $n = 874\,593$ divisible por $9$?

*La idea.* El truco es no mirar $n$, sino sustituir cada potencia $10^i$ por su resto módulo $9$. Como $10 \equiv 1 \pmod 9$, **todas** valen $1$, así que $n$ es congruente con la suma de sus cifras. Comprobar divisibilidad por $9$ se reduce a sumar dígitos.

*Solución.* Por el Lema, $n \equiv s_{10}(n) \pmod 9$, y

$$
s_{10}(874593) = 8 + 7 + 4 + 5 + 9 + 3 = 36 = 4 \cdot 9.
$$

Como $9 \mid 36$, concluimos $9 \mid 874\,593$. ✓

---

**Ejemplo 4.** ¿Es $n = 7\,392\,814$ divisible por $11$?

*La idea.* Misma maniobra, pero ahora $10 \equiv -1 \pmod{11}$: las potencias alternan $+1, -1, +1, \dots$, así que $n$ es congruente con la **suma alternada** de sus cifras (empezando por la de las unidades).

*Solución.* Suma alternada desde el dígito menos significativo:

$$
4 - 1 + 8 - 2 + 9 - 3 + 7 = 22 = 2 \cdot 11.
$$

Como $11 \mid 22$, se tiene $11 \mid 7\,392\,814$. ✓

### Un problema con suma de dígitos

**Ejemplo 5.** Hallar todos los enteros positivos $n$ tales que $n + s_{10}(n) = 100$.

*La idea.* Aparecen $n$ y "una función de sus cifras" sumando una constante. La primera maniobra es siempre **acotar el tamaño**: como $s_{10}(n) \geq 1$, forzosamente $n \leq 99$, así que $n$ tiene a lo sumo dos cifras. Eso convierte el problema en una ecuación lineal en los dos dígitos.

*Solución.* Escribimos $n = 10a + b$ con $0 \leq a, b \leq 9$ (el caso de una cifra es $a = 0$). Como $s_{10}(n) = a + b$, la ecuación $n + s_{10}(n) = 100$ es

$$
(10a + b) + (a + b) = 100 \;\Longrightarrow\; 11a + 2b = 100.
$$

Despejamos $b = \dfrac{100 - 11a}{2}$. Para que $b$ sea entero entre $0$ y $9$ necesitamos $0 \leq 100 - 11a \leq 18$, es decir $11a \in [82, 100]$, lo que deja $a \in \{8, 9\}$:

- $a = 8$: $b = \dfrac{100 - 88}{2} = 6$. Da $n = 86$. ✓
- $a = 9$: $b = \dfrac{100 - 99}{2} = \dfrac{1}{2}$, no entero. ✗

La única solución es $\boxed{n = 86}$. (Comprobación rápida con el Lema: $n + s(n) = 100$ y $n \equiv s(n) \pmod 9$ dan $2\,s(n) \equiv 1 \pmod 9$, luego $s(n) \equiv 5$; y $s(86) = 14 \equiv 5 \pmod 9$. ✓)

*La moraleja.* Ante "$n \pm$ (función de cifras) $=$ constante", **primero acota** usando que la suma de cifras es pequeña; lo que queda es casi siempre una búsqueda finita o una ecuación lineal en los dígitos.

## Aplicaciones

### Elegir la base es una jugada

La base no es un dato fijo del problema: es una **herramienta que tú eliges**. Cambiar de base es como cambiar de coordenadas — el problema no cambia, pero puede volverse trivial en la base correcta. Guía práctica:

- **Base $10$:** criterios estándar por $3$, $9$, $11$.
- **Base $2$:** paridad, potencias de $2$, encender/apagar, representaciones binarias.
- **Base $p$ (primo):** si el problema pregunta por divisibilidad por $p - 1$ o $p + 1$, la suma (o suma alternada) de dígitos en base $p$ da la respuesta directa.
- **Base $b = $ el módulo del problema:** si aparece divisibilidad por $b - 1$ o $b + 1$, pásate a base $b$ y aplica el Lema.

### A dónde lleva esto

La representación en base $p$ es la puerta de entrada a tres resultados centrales que se estudian más adelante:

- Cuántas veces divide $p$ a un factorial $n!$ — **fórmula de Legendre** (capítulo de *valuación $p$-ádica*).
- El exponente de $p$ en un coeficiente binomial — **teorema de Kummer**.
- El valor de $\binom{n}{k} \pmod p$ a partir de los dígitos en base $p$ — **teorema de Lucas**.

Todos ellos requieren la aritmética modular y las valuaciones de capítulos posteriores, pero su raíz común es justamente lo de aquí: **leer un número por sus dígitos en base $p$**.

## Observación

**El criterio para $7$, $11$ y $13$.** Como $10^3 = 1000 \equiv 1 \pmod{7}$, $\pmod{11}$ y $\pmod{13}$ (a la vez, pues $7 \cdot 11 \cdot 13 = 1001$ y $1000 \equiv -1 \pmod{1001}$), podemos procesar los dígitos de tres en tres. Esto explica el criterio: "separa los últimos tres dígitos, réstalos a los anteriores; el resultado es divisible por $7$, $11$ o $13$ si y solo si el original lo era." Formalmente: $n \equiv \overline{a_{2}a_{1}a_{0}} - \overline{a_{5}a_{4}a_{3}} + \cdots \pmod{1001}$.

## Problemas relacionados

**Problema 1 (OMG 2013/P1).** Dado un entero $n$ en base decimal, formamos el entero $k$ restando, del número formado por sus tres últimas cifras, el número formado por las cifras anteriores. Demostrar que $n$ es divisible por $7$, $11$ o $13$ si y solo si $k$ también lo es.

[[pista]]

La clave es $1001 = 7 \cdot 11 \cdot 13$, junto con $1000 \equiv -1 \pmod{1001}$. Escribe $n$ separando sus tres últimas cifras: $n = 1000A + B$.

[[/pista]]

[[solución]]

Sea $B$ el número formado por las tres últimas cifras de $n$ (así $0 \leq B < 1000$) y $A$ el número formado por las cifras anteriores. Entonces

$$
n = 1000\,A + B, \qquad k = B - A.
$$

La observación central es $1001 = 7 \cdot 11 \cdot 13$, de modo que $1000 = 1001 - 1 \equiv -1 \pmod{1001}$. Por tanto, módulo cualquiera de los tres primos $7$, $11$, $13$ (todos divisores de $1001$):

$$
n = 1000\,A + B \equiv (-1)\,A + B = B - A = k.
$$

Como $n \equiv k$ módulo $7$, módulo $11$ y módulo $13$, se cumple que cada uno de esos primos divide a $n$ exactamente cuando divide a $k$. En particular, $n$ es divisible por $7$, $11$ o $13$ si y solo si $k$ lo es. $\blacksquare$

[[/solución]]

**Problema 2 (OMG 2024/P1).** Determinar el menor entero positivo $n$ tal que la suma $A(n) = 1 + 11 + 111 + \cdots + \underbrace{11\cdots1}_{n \text{ unos}}$ sea divisible por $45$.

[[pista]]

$45 = 9 \cdot 5$, así que analiza por separado módulo $9$ y módulo $5$. El repunit $R_k$ (con $k$ unos) cumple $R_k \equiv k \pmod 9$ (suma de cifras) y $R_k \equiv 1 \pmod 5$ (solo sobrevive la cifra de las unidades).

[[/pista]]

[[solución]]

Llamemos $R_k = \underbrace{11\cdots1}_{k}$ al repunit de $k$ unos, de modo que $A(n) = \sum_{k=1}^n R_k$. Como $45 = 9 \cdot 5$ y $\gcd(9,5) = 1$, pedimos $45 \mid A(n)$ $\iff$ $9 \mid A(n)$ **y** $5 \mid A(n)$.

**Módulo $9$.** La suma de cifras de $R_k$ es $k$, luego $R_k \equiv k \pmod 9$. Entonces

$$
A(n) \equiv \sum_{k=1}^n k = \frac{n(n+1)}{2} \pmod 9.
$$

Necesitamos $9 \mid \dfrac{n(n+1)}{2}$, es decir $9 \mid n(n+1)$. Como $\gcd(n, n+1) = 1$, esto equivale a $n \equiv 0$ o $n \equiv 8 \pmod 9$.

**Módulo $5$.** Como $10 \equiv 0 \pmod 5$, en $R_k = 1 + 10 + \cdots + 10^{k-1}$ solo sobrevive el primer término: $R_k \equiv 1 \pmod 5$. Entonces

$$
A(n) \equiv \sum_{k=1}^n 1 = n \pmod 5,
$$

y necesitamos $5 \mid n$.

**Combinando.** Buscamos el menor $n$ con $5 \mid n$ y ($n \equiv 0$ o $n \equiv 8 \pmod 9$). Recorriendo los múltiplos de $5$ y sus restos módulo $9$:

$$
5 \to 5,\ 10 \to 1,\ 15 \to 6,\ 20 \to 2,\ 25 \to 7,\ 30 \to 3,\ 35 \to 8.
$$

El primero que cae en $\{0, 8\}$ es $n = 35$ (pues $35 \equiv 8 \pmod 9$). Comprobación: $5 \mid 35$ y $\dfrac{35 \cdot 36}{2} = 630 = 9 \cdot 70$.

El menor entero es $\boxed{n = 35}$. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** Un número es **capicúa** (palíndromo) si sus cifras se leen igual de izquierda a derecha que al revés. Demostrar que todo capicúa con un número **par** de cifras es divisible por $11$.

[[pista]]

Usa el criterio del $11$: $n \equiv$ suma alternada de cifras $\pmod{11}$. Empareja cada cifra con su simétrica y mira qué signos le tocan a cada una.

[[/pista]]

[[solución]]

Sea $n$ un capicúa con $2m$ cifras $a_{2m-1} a_{2m-2} \cdots a_1 a_0$. Ser capicúa significa $a_i = a_{2m-1-i}$ para todo $i$.

Por el criterio del $11$ (pues $10 \equiv -1 \pmod{11}$),

$$
n \equiv \sum_{i=0}^{2m-1} (-1)^i a_i \pmod{11}.
$$

Emparejamos el término $i$ con el término $j = 2m-1-i$ (su cifra simétrica). Sus signos son opuestos: como $j = 2m - 1 - i$ tiene paridad contraria a la de $i$ (su suma $i + j = 2m - 1$ es impar), se tiene $(-1)^j = -(-1)^i$. Y como $a_i = a_j$, la pareja aporta

$$
(-1)^i a_i + (-1)^j a_j = (-1)^i a_i - (-1)^i a_i = 0.
$$

Al tener $2m$ cifras, todas se reparten en $m$ parejas de este tipo, así que la suma alternada completa es $0$. Por tanto $n \equiv 0 \pmod{11}$, es decir $11 \mid n$. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** Probar que, en base $b$, un número es divisible por $b + 1$ si y solo si su suma alternada de dígitos lo es. Verificar el caso $b = 3$ (criterio de divisibilidad por $4$ en base $3$).

[[pista]]

Es aplicación directa del Lema (ii): $b \equiv -1 \pmod{b+1}$, luego $b^i \equiv (-1)^i$.

[[/pista]]

[[solución]]

Sea $n = (a_k \cdots a_1 a_0)_b = \sum_{i=0}^k a_i b^i$. Como $b \equiv -1 \pmod{b+1}$, toda potencia cumple $b^i \equiv (-1)^i \pmod{b+1}$, y por tanto

$$
n = \sum_{i=0}^k a_i b^i \equiv \sum_{i=0}^k (-1)^i a_i \pmod{b+1}.
$$

Es decir, $n$ y su suma alternada de dígitos $\sum (-1)^i a_i$ dejan el **mismo** resto módulo $b+1$; en consecuencia $(b+1) \mid n$ si y solo si $(b+1)$ divide a esa suma alternada.

**Caso $b = 3$.** Aquí $b + 1 = 4$, así que obtenemos un criterio de divisibilidad por $4$ leyendo en base $3$. Por ejemplo, $n = (121)_3 = 1 \cdot 9 + 2 \cdot 3 + 1 = 16$; su suma alternada es $a_0 - a_1 + a_2 = 1 - 2 + 1 = 0$, divisible por $4$, y en efecto $4 \mid 16$. ✓ $\blacksquare$

[[/solución]]
