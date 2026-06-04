---
title: "Números perfectos y primos de Mersenne"
preview: "Un entero es perfecto si es igual a la suma de sus divisores propios. Los perfectos pares están en biyección exacta con los primos de Mersenne $2^p - 1$. Una de las conexiones más sorprendentes de la aritmética elemental, con una pregunta abierta de 2300 años."
dificultad: regional
tags: [perfectos, mersenne, sigma, abundantes, euclides-euler]
prerequisites: [funciones-multiplicativas, divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-04"
---

El concepto de número perfecto tiene $2300$ años: Euclides lo estudió en sus *Elementos* y Nicómaco los catalogó en su *Introducción a la Aritmética* (siglo I d.C.). El resultado central — que los perfectos pares son exactamente los de la forma $2^{p-1}(2^p - 1)$ con $2^p - 1$ primo — requirió a **dos** de los matemáticos más grandes: Euclides demostró la mitad positiva, y Euler completó el recíproco veinte siglos después.

Lo fascinante es que esta caracterización reduce una pregunta sobre perfectos a una pregunta sobre un tipo especial de primos — los **primos de Mersenne** — que sigue abierta hoy. Y la pregunta análoga para perfectos impares es una de las más resistentes de la matemática elemental: nadie ha encontrado ninguno ni ha demostrado que no existan.

## Definición

Un entero positivo $n$ es **perfecto** si es igual a la suma de sus divisores propios (todos sus divisores positivos excepto él mismo), equivalentemente, si $\sigma(n) = 2n$ donde $\sigma(n) = \sum_{d \mid n} d$.

**Ejemplos:**
- $6$: divisores propios $1, 2, 3$; suma $= 6$. $\sigma(6) = 12 = 2 \cdot 6$. ✓
- $28$: divisores propios $1, 2, 4, 7, 14$; suma $= 28$. $\sigma(28) = 56$. ✓
- $496 = 2^4 \cdot 31$: $\sigma(496) = (1 + 2 + 4 + 8 + 16)(1 + 31) = 31 \cdot 32 = 992 = 2 \cdot 496$. ✓
- $8128 = 2^6 \cdot 127$: perfecto (con $127 = 2^7 - 1$ primo). ✓

Clasificación:
- $n$ es **deficiente** si $\sigma(n) < 2n$ (la mayoría de los enteros: potencias de primos, primos, etc.).
- $n$ es **perfecto** si $\sigma(n) = 2n$.
- $n$ es **abundante** si $\sigma(n) > 2n$ (ejemplos: $12, 18, 20, 24, \ldots$).

## Primos de Mersenne

Un **número de Mersenne** es un entero de la forma $M_n = 2^n - 1$ con $n \geq 1$. Un **primo de Mersenne** es un $M_p = 2^p - 1$ que resulta ser primo.

## Teorema

Si $M_n = 2^n - 1$ es primo, entonces $n$ es primo.

## Demostración

Si $n = ab$ con $1 < a \leq b < n$, la factorización $x^{ab} - 1 = (x^a - 1)(x^{a(b-1)} + x^{a(b-2)} + \cdots + 1)$ con $x = 2$ da $2^{ab} - 1 = (2^a - 1)(2^{a(b-1)} + \cdots + 1)$. Como $1 < 2^a - 1 < 2^n - 1$, esto es un factor no trivial. Luego $M_n$ no es primo. $\blacksquare$

**Atención:** el recíproco es falso. $M_{11} = 2047 = 23 \cdot 89$ no es primo aunque $11$ sí lo es.

Los primeros primos de Mersenne son $M_2 = 3$, $M_3 = 7$, $M_5 = 31$, $M_7 = 127$, $M_{13} = 8191$, $M_{17}$, $M_{19}$, $M_{31}$, ... Se conocen $51$ (a junio de 2024). El mayor conocido es $M_{136279841}$ (descubierto en 2024), con más de $41$ millones de dígitos.

**Test de Lucas-Lehmer.** Para determinar si $M_p$ es primo, se usa el test de Lucas-Lehmer: definir $s_0 = 4$ y $s_{k+1} = s_k^2 - 2 \pmod{M_p}$. Entonces $M_p$ es primo si y solo si $s_{p-2} \equiv 0 \pmod{M_p}$. Este test es polinomial en $p$.

## Teorema

**(Euclides-Euler)** Un entero par $n \geq 2$ es perfecto **si y solo si** $n = 2^{p-1}(2^p - 1)$ donde $2^p - 1$ es un primo de Mersenne.

## Demostración

**(⇐, Euclides, ~300 a.C.)** Sea $M = 2^p - 1$ un primo de Mersenne. Tomamos $n = 2^{p-1} M$. Como $\gcd(2^{p-1}, M) = 1$ y $\sigma$ es multiplicativa:

$$\sigma(n) = \sigma(2^{p-1}) \cdot \sigma(M) = (2^p - 1)(M + 1) = M \cdot 2^p = 2 \cdot 2^{p-1} M = 2n. \quad \checkmark$$

**(⇒, Euler, 1747)** Sea $n$ par y perfecto. Escribimos $n = 2^k m$ con $k \geq 1$ y $m$ impar. Por multiplicatividad:

$$\sigma(n) = \sigma(2^k) \cdot \sigma(m) = (2^{k+1} - 1) \cdot \sigma(m) = 2n = 2^{k+1} m.$$

De aquí:

$$(2^{k+1} - 1) \sigma(m) = 2^{k+1} m. \tag{$\star$}$$

Como $\gcd(2^{k+1} - 1, 2^{k+1}) = 1$, el factor $2^{k+1} - 1$ divide a $m$. Escribe $m = (2^{k+1} - 1) t$ para algún entero $t \geq 1$. Sustituyendo en $(\star)$:

$$(2^{k+1} - 1) \sigma(m) = 2^{k+1}(2^{k+1} - 1) t \implies \sigma(m) = 2^{k+1} t.$$

Por otro lado, $m$ tiene al menos los divisores $1$ y $m$ (son distintos si $m > 1$). Si $t > 1$ y $t \neq m$, entonces $m$ tiene al menos **tres** divisores: $1$, $t$, $m$. Entonces:

$$\sigma(m) \geq 1 + t + m = 1 + t + (2^{k+1} - 1)t = 1 + 2^{k+1} t > 2^{k+1} t.$$

Contradicción con $\sigma(m) = 2^{k+1} t$. Por tanto $t = 1$, y $m = 2^{k+1} - 1$.

Con $t = 1$: $\sigma(m) = 2^{k+1} = m + 1$. La condición $\sigma(m) = m + 1$ es equivalente a que $m$ sea **primo** (el único divisor distinto de $m$ es $1$, así $\sigma(m) = 1 + m$). Luego $m = 2^{k+1} - 1$ es primo, y $n = 2^k(2^{k+1} - 1)$. Renombrando $p = k + 1$: $n = 2^{p-1}(2^p - 1)$ con $2^p - 1$ primo. $\blacksquare$

## ¿Existen perfectos impares?

Esta pregunta tiene más de $2000$ años y sigue **completamente abierta**. Los resultados parciales acumulados son notables:

- Si existe $N$ impar perfecto: $N > 10^{1500}$ (Nielsen, 2015).
- $N$ tiene al menos $9$ factores primos distintos.
- $N$ tiene al menos $101$ factores primos contados con multiplicidad.
- $N$ es de la forma $p^a m^2$ con $p$ primo, $p \equiv a \equiv 1 \pmod 4$.
- $N$ tiene un divisor primo mayor que $10^8$.
- El mayor divisor primo de $N$ es mayor que $10^8$, el segundo mayor es mayor que $10^4$.

Todas estas condiciones son **necesarias** pero nadie ha demostrado que sean incompatibles. Es una de esas preguntas donde el enunciado es comprensible para un estudiante de bachillerato pero la respuesta lleva siglos esperando.

## Propiedades adicionales

**Números perfectos como triángulos.** Todo número par perfecto es un número triangular: $6 = T_3$, $28 = T_7$, $496 = T_{31}$, $8128 = T_{127}$. En general, $2^{p-1}(2^p - 1) = T_{2^p - 1}$.

**Suma de cubos de impares.** Todo número par perfecto mayor que $6$ es suma de cubos de impares consecutivos:

$$28 = 1^3 + 3^3, \quad 496 = 1^3 + 3^3 + 5^3 + 7^3, \quad 8128 = 1^3 + \cdots + 15^3.$$

En general: $2^{p-1}(2^p-1) = \sum_{k=0}^{2^{(p-1)/2} - 1} (2k+1)^3$ cuando $p$ es impar.

**Suma de potencias de 2.** Todo número par perfecto es suma de potencias de $2$ consecutivas: $6 = 2 + 4$, $28 = 4 + 8 + 16$, $496 = 16 + 32 + \cdots + 256$.

**Abundantes y su densidad.** A diferencia de los perfectos (que se sospechan infrecuentes e infinitos), los abundantes tienen densidad positiva en $\mathbb N$: la proporción de abundantes entre $\{1, \ldots, N\}$ tiende a $\approx 24.76\%$ cuando $N \to \infty$.

## Ejemplo

**Ejemplo 1.** Verificar que $8128$ es perfecto.

$8128 = 2^6 \cdot 127$, y $127 = 2^7 - 1$. Como $7$ es primo, verificamos si $127$ es primo: $\sqrt{127} < 12$, y $127$ no es divisible por $2, 3, 5, 7, 11$. Sí es primo.

$\sigma(8128) = \sigma(2^6) \cdot \sigma(127) = (2^7 - 1)(127 + 1) = 127 \cdot 128 = 16256 = 2 \cdot 8128$. ✓

---

**Ejemplo 2.** Demostrar que $\sigma(n)/n$ puede ser arbitrariamente grande.

Para $n = p_1 p_2 \cdots p_k$ (producto de los primeros $k$ primos):

$$\frac{\sigma(n)}{n} = \prod_{i=1}^k \frac{p_i + 1}{p_i} = \prod_{i=1}^k \left(1 + \frac{1}{p_i}\right).$$

Como $\sum 1/p$ diverge (teorema de Euler), este producto también diverge. Así $\sigma(n)/n \to \infty$ sobre esta secuencia. $\square$

---

**Ejemplo 3.** Probar que si $n$ es par y perfecto, entonces $n = 2^{p-1}(2^p-1)$, y en particular $3 \mid n$ para $p \geq 3$.

Por el teorema, $n = 2^{p-1}(2^p - 1)$ con $2^p - 1$ primo. Para $p \geq 3$: $2^p - 1 \equiv 2^p - 1 \pmod 3$. Si $p$ par: $2^p \equiv 1 \pmod 3$, $2^p - 1 \equiv 0 \pmod 3$ — pero entonces $3 \mid 2^p - 1$ y $2^p - 1 > 3$, así no es primo. Luego $p$ es impar y $2^p \equiv 2 \pmod 3$, $2^p - 1 \equiv 1 \pmod 3$. Entonces $3 \nmid 2^p - 1$.

¿Divide $3$ a $n = 2^{p-1}(2^p-1)$? Necesitamos $3 \mid 2^{p-1}$: no (ya que $\gcd(3, 2) = 1$). Entonces $3 \nmid n$ para $p \geq 3$. La afirmación estaba mal enunciada en el ejemplo. **Corrección:** todo perfecto par mayor que $6$ es divisible por $4$ (pues $p \geq 3$ implica $p-1 \geq 2$).

## Observación

**Generalización: $k$-multiperfectos.** Un entero $n$ es $k$-multiperfecto si $\sigma(n) = kn$. Los $2$-perfectos son los perfectos. Los $3$-perfectos (triperfectos) son $120$, $672$, $523776$, $\ldots$ Se conocen finitos multiperfectos para cada $k \leq 11$, pero la teoría es incompleta.

**Función alíquota y ciclos.** La **función alíquota** $s(n) = \sigma(n) - n$ (suma de divisores propios) define una dinámica: $n \to s(n) \to s(s(n)) \to \cdots$. Los perfectos son los **puntos fijos** de esta función. Hay también **números amigos** ($s(220) = 284$ y $s(284) = 220$), **cadenas sociables** (ciclos de longitud $\geq 3$), etc. La conjetura de Catalan-Dickson dice que toda órbita termina en $0$ o en un ciclo — sigue abierta.

## Problemas relacionados

- **(Clásico)** Demostrar que $\sigma(n) > n \ln \ln n$ para infinitos $n$ (de hecho para todos los primorials $n = 2 \cdot 3 \cdot 5 \cdots p_k$).

- **(OMM 2013)** Hallar todos los $n$ con $\sigma(n) = n + p$ para algún primo $p$. *(Estos son los números «casi perfectos»: $2^k$.)*

- **(Clásico)** Si $n$ es par y perfecto con $n > 6$, probar que $n \equiv 4 \pmod {12}$ o $n \equiv 8 \pmod{12}$.

- **(Conjetura de Euler)** Si existe $N$ impar perfecto, entonces $N = p^a q_1^{2b_1} \cdots q_r^{2b_r}$ con $p, q_i$ primos distintos y $p \equiv a \equiv 1 \pmod 4$. Demostrar la forma de la factorización bajo estas hipótesis.

- **(Clásico)** Sea $s(n)$ la función alíquota. Probar que los únicos $n$ con $s(s(n)) = n$ y $s(n) \neq n$ son los pares de números amigos. *(Esto caracteriza los ciclos de longitud $2$.)*
