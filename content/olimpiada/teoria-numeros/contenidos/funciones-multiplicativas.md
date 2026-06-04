---
title: "Funciones multiplicativas y convolución de Dirichlet"
preview: "Una función aritmética es multiplicativa si $f(mn) = f(m)f(n)$ cuando $\\gcd(m,n) = 1$. La estructura clave: sus valores se determinan por su comportamiento en potencias de primos. La convolución de Dirichlet convierte identidades aritméticas en ecuaciones algebraicas."
dificultad: regional
tags: [multiplicativas, sigma, tau, mobius, convolucion, inversion]
prerequisites: [divisibilidad-basica, funcion-euler]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

Las funciones aritméticas son funciones $f: \mathbb N^* \to \mathbb C$ que asignan un número a cada entero positivo. A priori, parecen objetos sin estructura: ¿qué relación puede haber entre $f(6)$ y $f(2)$, $f(3)$? La respuesta, en el caso de las funciones multiplicativas, es total: si $\gcd(m, n) = 1$, entonces $f(mn) = f(m) f(n)$. Esta condición, combinada con la factorización única, reduce el estudio de $f$ a comprender $f$ en potencias de primos.

La herramienta algebraica que organiza las funciones aritméticas es la **convolución de Dirichlet**, que convierte identidades como $\sum_{d \mid n} \varphi(d) = n$ en la ecuación $\varphi * \mathbf{1} = \text{id}$, o la **inversión de Möbius** en $f = g * \mu \iff g = f * \mathbf{1}$. Este lenguaje algebraico hace visible la estructura que subyace a docenas de identidades aparentemente dispares.

## Definición

Una función $f: \mathbb N^* \to \mathbb C$ es **multiplicativa** si:
1. $f(1) = 1$,
2. $f(mn) = f(m)f(n)$ para todo $m, n$ con $\gcd(m, n) = 1$.

Es **completamente multiplicativa** si $f(mn) = f(m)f(n)$ para todo $m, n$ (sin condición de coprimalidad).

**Principio clave.** Si $f$ es multiplicativa y $n = p_1^{e_1} \cdots p_k^{e_k}$, entonces $f(n) = f(p_1^{e_1}) \cdots f(p_k^{e_k})$. El valor en $n$ se determina por los valores en potencias de primos.

## Las funciones multiplicativas clásicas

Las siguientes son las funciones multiplicativas fundamentales de la olimpiada:

**$\tau(n)$ (o $d(n)$):** número de divisores positivos de $n$. Para $n = p_1^{e_1} \cdots p_k^{e_k}$:
$$\tau(n) = (e_1 + 1)(e_2 + 1) \cdots (e_k + 1).$$

**$\sigma(n)$:** suma de divisores positivos. Para $n = p_1^{e_1} \cdots p_k^{e_k}$:
$$\sigma(n) = \prod_{i=1}^k \frac{p_i^{e_i+1} - 1}{p_i - 1}.$$

**$\sigma_k(n)$:** suma de potencias $k$-ésimas de divisores: $\sigma_k(n) = \sum_{d \mid n} d^k$.

**$\varphi(n)$:** función totiente de Euler.

**$\mu(n)$:** función de Möbius. $\mu(1) = 1$. Si $n$ tiene algún factor cuadrado, $\mu(n) = 0$. Si $n = p_1 p_2 \cdots p_r$ (producto de $r$ primos distintos), $\mu(n) = (-1)^r$.

**$\mathbf{1}(n) = 1$:** función constantemente $1$ (completamente multiplicativa).

**$\text{id}(n) = n$:** función identidad (completamente multiplicativa).

**$\epsilon(n) = [n = 1]$:** función indicadora del $1$ (la identidad para la convolución).

## Demostración

**(Multiplicatividad de $\tau$)** Sean $m, n$ con $\gcd(m, n) = 1$. Cada divisor $d$ de $mn$ se escribe **de manera única** como $d = d_1 d_2$ con $d_1 \mid m$ y $d_2 \mid n$ (porque $m$ y $n$ son coprimos, sus divisores son independientes). Por tanto:

$$\tau(mn) = \#\{d : d \mid mn\} = \#\{(d_1, d_2) : d_1 \mid m, d_2 \mid n\} = \tau(m) \tau(n). \qquad \blacksquare$$

**(Multiplicatividad de $\sigma$)** Análogamente, $\sigma(mn) = \sum_{d \mid mn} d = \sum_{d_1 \mid m} \sum_{d_2 \mid n} d_1 d_2 = \left(\sum_{d_1 \mid m} d_1\right)\left(\sum_{d_2 \mid n} d_2\right) = \sigma(m)\sigma(n)$. $\blacksquare$

## La convolución de Dirichlet

## Definición

Dadas dos funciones aritméticas $f, g: \mathbb N^* \to \mathbb C$, su **convolución de Dirichlet** es la función

$$(f * g)(n) \;=\; \sum_{d \mid n} f(d)\, g(n/d) \;=\; \sum_{d_1 d_2 = n} f(d_1) g(d_2).$$

## Teorema

La convolución de Dirichlet satisface:

**(i)** (Conmutatividad) $f * g = g * f$.

**(ii)** (Asociatividad) $(f * g) * h = f * (g * h)$.

**(iii)** (Identidad) $\epsilon * f = f * \epsilon = f$ para toda $f$.

**(iv)** (Inverso) $f$ tiene inverso bajo $*$ si y solo si $f(1) \neq 0$.

**(v)** (Preservación) Si $f, g$ son multiplicativas, entonces $f * g$ también lo es.

## Demostración

**(i)** $(f * g)(n) = \sum_{d \mid n} f(d) g(n/d) = \sum_{e \mid n} f(n/e) g(e) = (g * f)(n)$, cambiando $e = n/d$.

**(v)** Sean $f, g$ multiplicativas y $h = f * g$. Para $\gcd(m, n) = 1$:

$$h(mn) = \sum_{d \mid mn} f(d) g(mn/d).$$

Todo divisor $d$ de $mn$ se escribe como $d = d_1 d_2$ con $d_1 \mid m$, $d_2 \mid n$ y $\gcd(d_1, d_2) = 1$ (de forma única). Por tanto:

$$h(mn) = \sum_{d_1 \mid m} \sum_{d_2 \mid n} f(d_1 d_2) g\!\left(\frac{mn}{d_1 d_2}\right) = \sum_{d_1 \mid m} \sum_{d_2 \mid n} f(d_1)f(d_2) g\!\left(\frac{m}{d_1}\right) g\!\left(\frac{n}{d_2}\right)$$

$$= \left(\sum_{d_1 \mid m} f(d_1)g(m/d_1)\right)\!\left(\sum_{d_2 \mid n} f(d_2)g(n/d_2)\right) = h(m) h(n). \qquad \blacksquare$$

## Las identidades fundamentales

Las siguientes identidades son la «tabla de multiplicar» de las funciones multiplicativas:

**Identidad 1.** $\mathbf{1} * \mathbf{1} = \tau$. (El número de divisores es la convolución de $\mathbf{1}$ consigo misma.)

**Identidad 2.** $\mathbf{1} * \text{id} = \sigma$.

**Identidad 3.** $\mu * \mathbf{1} = \epsilon$. (La función de Möbius es el inverso de $\mathbf{1}$.)

**Identidad 4.** $\varphi * \mathbf{1} = \text{id}$. (La identidad $\sum_{d \mid n} \varphi(d) = n$.)

## Demostración

**(Identidad 3: $\mu * \mathbf{1} = \epsilon$)** Queremos demostrar: $\sum_{d \mid n} \mu(d) = [n = 1]$.

Para $n = 1$: $\mu(1) = 1$ ✓.

Para $n > 1$ con $n = p_1^{e_1} \cdots p_k^{e_k}$: solo los divisores libres de cuadrados contribuyen (los demás dan $\mu = 0$). Así:

$$\sum_{d \mid n} \mu(d) = \sum_{S \subseteq \{p_1,\ldots,p_k\}} \mu\!\left(\prod_{p \in S} p\right) = \sum_{j=0}^k \binom{k}{j} (-1)^j = (1 - 1)^k = 0. \qquad \blacksquare$$

**(Identidad 4: $\varphi * \mathbf{1} = \text{id}$)** Verificamos $\sum_{d \mid n} \varphi(d) = n$. Particionamos $\{1, \ldots, n\}$ según $\gcd(k, n) = d$:

$$\#\{k \leq n : \gcd(k,n) = d\} = \varphi(n/d).$$

Sumando: $n = \sum_{d \mid n} \varphi(n/d) = \sum_{e \mid n} \varphi(e)$. $\blacksquare$

## Inversión de Möbius

## Teorema

**(Inversión de Möbius)** Sean $f, g: \mathbb N^* \to \mathbb C$. Entonces:

$$g(n) = \sum_{d \mid n} f(d) \quad \Longleftrightarrow \quad f(n) = \sum_{d \mid n} \mu(d)\, g(n/d) = \sum_{d \mid n} \mu(n/d)\, g(d).$$

En lenguaje de convolución: $g = f * \mathbf{1} \iff f = g * \mu$.

## Demostración

$(\Rightarrow)$: Si $g = f * \mathbf{1}$, entonces $g * \mu = (f * \mathbf{1}) * \mu = f * (\mathbf{1} * \mu) = f * \epsilon = f$. $\blacksquare$

$(\Leftarrow)$: Si $f = g * \mu$, entonces $f * \mathbf{1} = (g * \mu) * \mathbf{1} = g * (\mu * \mathbf{1}) = g * \epsilon = g$. $\blacksquare$

## Ejemplo

### Cálculos directos

**Ejemplo 1.** Calcular $\tau(720)$, $\sigma(720)$, $\varphi(720)$.

$720 = 2^4 \cdot 3^2 \cdot 5$. Por multiplicatividad:

$$\tau(720) = (4+1)(2+1)(1+1) = 30.$$

$$\sigma(720) = \frac{2^5 - 1}{2 - 1} \cdot \frac{3^3 - 1}{3 - 1} \cdot \frac{5^2 - 1}{5 - 1} = 31 \cdot 13 \cdot 6 = 2418.$$

$$\varphi(720) = 720 \cdot \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{4}{5} = 192.$$

---

**Ejemplo 2.** Demostrar que $\sum_{d \mid n} \tau(d)^3 = \left(\sum_{d \mid n} \tau(d)\right)^2$ para todo $n$.

Esto es equivalente a $(\tau^3 * \mathbf{1})(n) = (\tau * \mathbf{1})(n)^2$ ... en realidad es la identidad $\sum_{d \mid n} d^3 = \left(\sum_{d \mid n} d\right)^2$ aplicada a los divisores via $\tau$? No exactamente.

Mejor: **para $n = p^k$**, $\sum_{d \mid p^k} \tau(d)^3 = \sum_{j=0}^k (j+1)^3 = \left(\sum_{j=0}^k (j+1)\right)^2 = \left(\sum_{d \mid p^k} \tau(d)\right)^2$, usando la identidad $1^3 + 2^3 + \cdots + m^3 = (1 + 2 + \cdots + m)^2 = (m(m+1)/2)^2$.

Por multiplicatividad de ambos lados, la igualdad se extiende a todo $n$. $\square$

---

### Inversión de Möbius aplicada

**Ejemplo 3.** Si se sabe que $\sum_{d \mid n} f(d) = n^2$ para todo $n$, hallar $f$.

Por inversión de Möbius: $f(n) = \sum_{d \mid n} \mu(d) (n/d)^2 = n^2 \sum_{d \mid n} \frac{\mu(d)}{d^2}$.

Para $n = p^k$: $f(p^k) = p^{2k} (1 - 1/p^2) = p^{2k} - p^{2k-2}$. Y $f$ es multiplicativa.

*Verificación:* $f(p) = p^2 - 1 = (p-1)(p+1)$. $\sum_{d \mid p} f(d) = f(1) + f(p) = 1 + p^2 - 1 = p^2$ ✓.

---

**Ejemplo 4.** Calcular $\sum_{\substack{k=1 \\ \gcd(k,n)=1}}^{n} k$ (suma de los enteros hasta $n$ coprimos con $n$).

Si $\gcd(k, n) = 1$ y $k \leq n$, también $\gcd(n-k, n) = 1$. Así los enteros coprimos con $n$ se emparejan en $(k, n-k)$ con suma $n$. Hay $\varphi(n)/2$ pares (para $n > 2$, pues $\varphi(n)$ es par), más eventualmente $n/2$ si es coprimo con $n$... Más limpiamente:

$$\sum_{\substack{k=1 \\ \gcd(k,n)=1}}^{n} k \;=\; \frac{n \cdot \varphi(n)}{2}$$

para $n > 1$. (Para $n = 1$: la suma es $1 = 1 \cdot 1/2$, que no cuadra. Para $n > 1$: los pares $(k, n-k)$ dan suma $n$ y hay $\varphi(n)/2$ pares cuando $n > 2$.)

---

**Ejemplo 5.** Contar los enteros $1 \leq k \leq N$ con $\gcd(k, n) = 1$.

$$\#\{k \leq N : \gcd(k, n) = 1\} = \sum_{k=1}^N \sum_{d \mid \gcd(k,n)} \mu(d) = \sum_{d \mid n} \mu(d) \left\lfloor \frac{N}{d} \right\rfloor.$$

Esta fórmula es la **base de la criba de Eratóstenes** en su forma analítica. Para $N = n$, el resultado es $\varphi(n)$.

---

### Sumas de divisores en olimpiadas

**Ejemplo 6.** Sea $f(n)$ el número de pares $(a, b)$ con $a, b \geq 1$ y $\text{lcm}(a, b) = n$. Calcular $f$ en términos de $\tau$.

Para $n = p^k$: los pares $(p^a, p^b)$ con $\max(a, b) = k$ y $0 \leq a, b \leq k$. Hay $(k+1)^2 - k^2 = 2k + 1$ pares (total menos los con $\max(a,b) < k$). Así $f(p^k) = 2k + 1 = 2\tau(p^k) - 1$.

Por multiplicatividad: $f(n) = \prod_{p^k \| n} (2k + 1)$. Esta función es multiplicativa.

## Aplicaciones

**Cribas.** La función $\mu$ permite «invertir» la inclusión-exclusión. Si se sabe cuántos enteros hasta $N$ son divisibles por $d$, la inversión de Möbius da cuántos tienen exactamente $d$ como MCD con $N$.

**Series de Dirichlet.** A cada función aritmética $f$ se asocia la serie formal $\sum_n f(n)/n^s$. La convolución corresponde a la multiplicación de series: $\sum f/n^s \cdot \sum g/n^s = \sum (f*g)/n^s$. Las identidades $\mathbf{1} * \mu = \epsilon$ y $\varphi * \mathbf{1} = \text{id}$ se convierten en $\zeta(s) \cdot \sum \mu(n)/n^s = 1$ y $\sum \varphi(n)/n^s \cdot \zeta(s) = \zeta(s-1)$.

## Observación

**Multiplicatividad y primos.** La condición de multiplicatividad es la «independencia» de los factores primos: lo que ocurre en las potencias de $2$ no afecta a lo que ocurre en las de $3$. Esta independencia es el reflejo funcional de la factorización única en primos.

**La función de Möbius como inverso.** La existencia del inverso bajo $*$ equivale a que $f(1) \neq 0$. La función $\mu$ es el inverso de $\mathbf{1}$; es a la aritmética lo que $(-1)^k$ es a la inclusión-exclusión.

**Generalización a otras estructuras.** Las mismas ideas funcionan en cualquier monoide con factorización única. La teoría de funciones multiplicativas se generaliza a la aritmética de cuerpos de números (mediante funciones de Hecke), y la inversión de Möbius a posets generales.

## Problemas relacionados

- **(OMG 2008/P6)** Consideramos $17$ números enteros positivos tales que ninguno tiene un factor primo mayor que $7$. Demostrar que el producto de al menos dos de ellos es un cuadrado perfecto.

- **(Clásico)** Probar que $\sum_{d \mid n} \mu(d)/d = \varphi(n)/n$ para todo $n \geq 1$.

- **(Clásico)** Hallar una fórmula para $\sum_{d^2 \mid n} \mu(d)$ en términos de los factores primos de $n$.

- **(Clásico)** Demostrar que $\sigma(n) < 2n$ para todo $n$ primo, y encontrar el menor $n$ compuesto con $\sigma(n) > 2n$.

- **(Clásico)** Probar que $\sum_{n \leq N} \tau(n) = \sum_{d \leq N} \lfloor N/d \rfloor$ y estimar esta suma como $N \log N + O(N)$.
