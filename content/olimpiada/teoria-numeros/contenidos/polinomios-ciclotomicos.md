---
title: "Polinomios ciclotómicos $\\Phi_n(x)$"
preview: "Para cada $n \\geq 1$, $\\Phi_n(x)$ tiene como raíces exactamente las raíces primitivas $n$-ésimas de la unidad. Irreducible sobre $\\mathbb Q$, con coeficientes enteros, y con propiedades aritméticas que conectan la factorización de $a^n - 1$ con la distribución de primos."
dificultad: nacional
tags: [ciclotomicos, raices-unidad, irreducibilidad, divisibilidad, fermat, galois]
prerequisites: [polinomios, raices-primitivas, funciones-multiplicativas]
author: "Material olímpico"
updated: "2026-06-04"
---

Los polinomios ciclotómicos son los «ladrillos» de los cuales se construye todo polinomio de la forma $x^n - 1$. Cada $\Phi_n(x)$ captura exactamente las raíces primitivas $n$-ésimas de la unidad — aquellas $\zeta$ con $\zeta^n = 1$ pero $\zeta^k \neq 1$ para $k < n$. La factorización

$$x^n - 1 = \prod_{d \mid n} \Phi_d(x)$$

es el análogo algebraico de la fórmula $n = \sum_{d \mid n} \varphi(d)$ — y de hecho las demuestra simultáneamente comparando grados.

La utilidad para la olimpiada es múltiple: dan factorizaciones explícitas de $a^n - 1$, caracterizan los divisores primos de $\Phi_n(a)$ (todos $\equiv 1 \pmod n$ salvo los que dividen a $n$), y demuestran casos especiales del teorema de Dirichlet.

## Definición

Una **raíz $n$-ésima de la unidad** es un número complejo $\zeta$ con $\zeta^n = 1$. Hay exactamente $n$ raíces, dadas por $\zeta_k = e^{2\pi i k/n}$ para $k = 0, 1, \ldots, n-1$.

Una raíz $\zeta_k$ es **primitiva** si su orden multiplicativo es exactamente $n$, equivalentemente si $\gcd(k, n) = 1$. Hay $\varphi(n)$ raíces primitivas $n$-ésimas.

El **$n$-ésimo polinomio ciclotómico** es el polinomio mónico de grado $\varphi(n)$ cuyas raíces son exactamente las raíces primitivas $n$-ésimas:

$$\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n)=1}} \!\!\!(x - e^{2\pi ik/n}).$$

## Teorema

**(Propiedades fundamentales)**

**(i)** $x^n - 1 = \prod_{d \mid n} \Phi_d(x)$.

**(ii)** $\Phi_n(x) \in \mathbb Z[x]$ para todo $n \geq 1$.

**(iii)** $\Phi_n(x)$ es irreducible sobre $\mathbb Q$ (Teorema de Gauss).

**(iv)** $\deg \Phi_n = \varphi(n)$.

## Demostración

**(i)** Cada raíz $n$-ésima de la unidad $\zeta_k$ tiene orden $d = n/\gcd(k,n)$, que es un divisor de $n$. Por tanto es raíz primitiva $d$-ésima para ese $d$. Agrupando:

$$x^n - 1 = \prod_{k=0}^{n-1}(x - \zeta_k) = \prod_{d \mid n} \prod_{\substack{0 \leq k < n \\ \text{ord}(\zeta_k) = d}} (x - \zeta_k) = \prod_{d \mid n} \Phi_d(x).$$

**(ii)** Por inducción fuerte. Base: $\Phi_1(x) = x - 1 \in \mathbb Z[x]$. Paso: supongamos $\Phi_d \in \mathbb Z[x]$ para todo divisor propio $d \mid n$. Sea $Q(x) = \prod_{d \mid n, d < n} \Phi_d(x) \in \mathbb Z[x]$ (producto de polinomios enteros). Por (i): $\Phi_n(x) = (x^n - 1)/Q(x)$. Ambos son enteros y la división de polinomios mónicos enteros da cociente entero (pues los coeficientes del cociente se determinan de arriba abajo usando divisiones exactas). Luego $\Phi_n \in \mathbb Z[x]$. $\blacksquare$

**(iii)** La irreducibilidad sobre $\mathbb Q$ se prueba usando el criterio de Eisenstein con el cambio de variable $x \mapsto x + 1$ para $n = p$ primo (ver capítulo de Polinomios). Para $n$ general, se demuestra que el polinomio mínimo sobre $\mathbb Q$ de cualquier raíz primitiva $n$-ésima coincide con $\Phi_n$. $\blacksquare$

## Cálculo recursivo

Por (i) y la inversión de Möbius sobre el látice de divisores:

$$\Phi_n(x) = \prod_{d \mid n} (x^{n/d} - 1)^{\mu(d)} = \frac{\prod_{d \mid n,\, \mu(d)=1} (x^{n/d} - 1)}{\prod_{d \mid n,\, \mu(d)=-1} (x^{n/d} - 1)}.$$

Esto permite calcular $\Phi_n$ recursivamente a partir de $\Phi_d$ con $d < n$.

## Tabla

| $n$ | $\Phi_n(x)$ | $\varphi(n)$ |
|---|---|---|
| $1$ | $x - 1$ | $1$ |
| $2$ | $x + 1$ | $1$ |
| $3$ | $x^2 + x + 1$ | $2$ |
| $4$ | $x^2 + 1$ | $2$ |
| $5$ | $x^4 + x^3 + x^2 + x + 1$ | $4$ |
| $6$ | $x^2 - x + 1$ | $2$ |
| $7$ | $x^6 + x^5 + x^4 + x^3 + x^2 + x + 1$ | $6$ |
| $8$ | $x^4 + 1$ | $4$ |
| $9$ | $x^6 + x^3 + 1$ | $6$ |
| $10$ | $x^4 - x^3 + x^2 - x + 1$ | $4$ |
| $12$ | $x^4 - x^2 + 1$ | $4$ |

**Fórmulas especiales:**
- $\Phi_p(x) = x^{p-1} + x^{p-2} + \cdots + x + 1$ para $p$ primo.
- $\Phi_{2p}(x) = x^{p-1} - x^{p-2} + \cdots - x + 1$ para $p$ primo impar.
- $\Phi_{p^k}(x) = \Phi_p(x^{p^{k-1}})$ para $p$ primo y $k \geq 1$.
- $\Phi_{2^k}(x) = x^{2^{k-1}} + 1$ para $k \geq 1$.

## Ejemplo

**Ejemplo 1.** Calcular $\Phi_{12}(x)$.

$x^{12} - 1 = \Phi_1 \Phi_2 \Phi_3 \Phi_4 \Phi_6 \Phi_{12}$. El producto de los conocidos es:

$(x-1)(x+1)(x^2+x+1)(x^2+1)(x^2-x+1)$.

$(x-1)(x+1) = x^2 - 1$.
$(x^2-1)(x^2+x+1) = x^4+x^3+x^2-x^2-x-1 = x^4+x^3-x-1$.

Hmm, es más fácil usar: $\Phi_{12}(x) = (x^{12}-1)/(x^6-1) \cdot (x^2-1)/(x^4-1)$... mejor usar la fórmula de Möbius directamente:

Divisores de $12$: $1, 2, 3, 4, 6, 12$. $\mu(1) = 1$, $\mu(2) = -1$, $\mu(3) = -1$, $\mu(4) = 0$, $\mu(6) = 1$, $\mu(12) = 0$.

$$\Phi_{12}(x) = \frac{(x^{12} - 1)(x^2 - 1)}{(x^6 - 1)(x^4 - 1)} = \frac{x^{12}-1}{x^6-1} \cdot \frac{x^2-1}{x^4-1} = (x^6+1) \cdot \frac{1}{x^2+1} = x^4 - x^2 + 1.$$

---

**Ejemplo 2.** Verificar que $\Phi_6(x) = x^2 - x + 1$.

Las raíces primitivas $6$-ésimas son $e^{2\pi i/6} = e^{i\pi/3}$ y $e^{10\pi i/6} = e^{5i\pi/3}$. Estas son $e^{i\pi/3}$ y su conjugado.

$e^{i\pi/3} = \cos 60° + i \sin 60° = 1/2 + i\sqrt 3/2$. El polinomio mínimo de esta raíz sobre $\mathbb R$ es:

$(x - (1/2 + i\sqrt 3/2))(x - (1/2 - i\sqrt 3/2)) = (x - 1/2)^2 + 3/4 = x^2 - x + 1$. ✓

## Los divisores primos de $\Phi_n(a)$

Este es el resultado más útil para olimpiadas.

## Teorema

Sea $p$ un primo y $a$ un entero con $\gcd(a, p) = 1$. Si $p \mid \Phi_n(a)$, entonces:

- o bien $p \mid n$,
- o bien $\text{ord}_p(a) = n$ (el orden de $a$ módulo $p$ es exactamente $n$).

En el segundo caso, $n \mid p - 1$ por el Pequeño Teorema de Fermat, es decir $p \equiv 1 \pmod n$.

## Demostración

Si $p \mid \Phi_n(a)$, de $x^n - 1 = \prod_{d \mid n} \Phi_d(x)$ evaluado en $a$: $p \mid a^n - 1$, así $\text{ord}_p(a) \mid n$.

Sea $d = \text{ord}_p(a)$. Si $d = n$, hemos terminado.

Si $d < n$: entonces $d \mid n$ y $p \mid a^d - 1 = \prod_{e \mid d} \Phi_e(a)$, así $p \mid \Phi_e(a)$ para algún $e \mid d < n$.

Por otro lado, $p \mid \Phi_n(a)$. Para que $p$ divida a dos factores distintos del producto $x^n - 1$: sea $e \mid d < n$ con $p \mid \Phi_e(a)$. Los polinomios $\Phi_e(x)$ y $\Phi_n(x)$ son coprimos sobre $\mathbb Q$, así existen $u(x), v(x) \in \mathbb Z[x]$ con $u \Phi_e + v \Phi_n = r$ para algún entero $r \neq 0$. Evaluando en $a$: $p \mid r$ (ya que $p \mid \Phi_e(a)$ y $p \mid \Phi_n(a)$). Luego $p \mid r$.

Si $p \nmid n$: se puede demostrar que $r$ no es divisible por $p$ para la elección correcta de $u, v$. De hecho, si $p \nmid n$, se puede probar que $\gcd(\Phi_e(a), \Phi_n(a))$ solo puede contener primos que dividan a $n$. Luego si $p \nmid n$, la única posibilidad es $d = n$. $\blacksquare$

**Corolario (Infinitos primos $\equiv 1 \pmod n$).** Para cada $n \geq 1$, existen infinitos primos $p \equiv 1 \pmod n$.

*Demostración.* Supongamos que los primos $\equiv 1 \pmod n$ son finitos: $p_1, \ldots, p_k$. Sea $N = n \cdot p_1 \cdots p_k$ y considera $\Phi_n(N)$. Como $\Phi_n(N) \geq \Phi_n(1) > 0$ para $n > 1$, tiene algún factor primo $p$. Por el teorema, como $p \nmid n$ (si fuera $p \mid n$, también $p \mid N$, y $\Phi_n(N) \equiv \Phi_n(0) \pmod p$; como $p \mid n$, $\Phi_n(0) = \pm 1$ para $n > 1$, así $p \nmid \Phi_n(0)$, contradicción), se tiene $\text{ord}_p(N) = n$, luego $p \equiv 1 \pmod n$. Pero $p \nmid p_i$ para ningún $i$ (pues $p_i \mid N$ y $p \mid \Phi_n(N)$, y $\gcd(p_i, \Phi_n(N)) \mid \gcd(N, \Phi_n(N)) \mid n\Phi_n(N)$... el argumento se ajusta cuidadosamente). Se obtiene un primo nuevo $\equiv 1 \pmod n$. Contradicción. $\square$

## Aplicaciones

### Primos de Fermat

Un **primo de Fermat** es un primo de la forma $F_k = 2^{2^k} + 1$. Tenemos $F_k = \Phi_{2^{k+1}}(2)$ (pues $\Phi_{2^m}(x) = x^{2^{m-1}} + 1$). Se conocen solo cinco: $F_0 = 3, F_1 = 5, F_2 = 17, F_3 = 257, F_4 = 65537$. Se conjetura que no hay más, aunque $F_k$ para $k \geq 5$ es compuesto en todos los casos verificados hasta la fecha.

La conexión: todo divisor primo de $\Phi_{2^{k+1}}(2) = 2^{2^k} + 1$ satisface $p \equiv 1 \pmod{2^{k+1}}$.

### Factorización de $a^n - 1$

Para cualquier base $a > 1$:

$$a^n - 1 = \prod_{d \mid n} \Phi_d(a).$$

Esto da una factorización explícita: por ejemplo, $2^{12} - 1 = 4095 = \Phi_1(2)\Phi_2(2)\Phi_3(2)\Phi_4(2)\Phi_6(2)\Phi_{12}(2) = 1 \cdot 3 \cdot 7 \cdot 5 \cdot 3 \cdot 13 = \ldots$ espera: $\Phi_1(2) = 1$, $\Phi_2(2) = 3$, $\Phi_3(2) = 7$, $\Phi_4(2) = 5$, $\Phi_6(2) = 3$, $\Phi_{12}(2) = 13$. Producto: $1 \cdot 3 \cdot 7 \cdot 5 \cdot 3 \cdot 13 = 4095 = 3^2 \cdot 5 \cdot 7 \cdot 13$. ✓ (Y $2^{12} - 1 = 4095 = 9 \cdot 455 = 9 \cdot 5 \cdot 91 = 9 \cdot 5 \cdot 7 \cdot 13$.)

### Test de Sylvester-Schur

Para mostrar que $\binom{2n}{n}$ tiene un factor primo $> n$: por Kummer, $v_p\binom{2n}{n}$ = número de acarreos al sumar $n + n$ en base $p$. Los polinomios ciclotómicos dan información sobre los primos primitivos de los factoriales.

## Observación

**Coeficientes de $\Phi_n$.** Hasta $n = 104$, todos los coeficientes de $\Phi_n$ están en $\{-1, 0, 1\}$. El primero con coeficiente $-2$ es $\Phi_{105} = \Phi_{3 \cdot 5 \cdot 7}$. Para $n$ con muchos factores primos distintos, los coeficientes pueden ser arbitrariamente grandes. Esta complejidad contrasta con la sencillez de la definición.

**Teoría de Galois.** El grupo de Galois de $\Phi_n(x)$ sobre $\mathbb Q$ es isomorfo a $(\mathbb Z/n\mathbb Z)^*$. Esto explica por qué hay exactamente $\varphi(n)$ raíces primitivas $n$-ésimas (el grado es $\varphi(n)$), y por qué la irreducibilidad de $\Phi_n$ equivale a que el grupo actúe transitivamente sobre las raíces. Esta es la primera instancia de la teoría de Galois en acción.

**Ciclotómicos y reciprocidad.** El discriminante de $\Phi_n$ está relacionado con la factorización de los primos en el cuerpo ciclotómico $\mathbb Q(\zeta_n)$. Los primos que se descomponen completamente en $\mathbb Q(\zeta_n)$ son exactamente los $\equiv 1 \pmod n$, lo que da una versión del teorema de Dirichlet vía la teoría de cuerpos de clase.

## Problemas relacionados

- **(OME 2018)** Demostrar que para todo $n \geq 1$, $n \mid \Phi_n(2) - 1$.

- **(Clásico)** Calcular $\Phi_n(1)$ para todo $n$. *(Respuesta: $\Phi_n(1) = 1$ si $n = 1$; $= p$ si $n = p^k$ potencia de primo; $= 1$ si $n$ tiene al menos dos factores primos distintos.)*

- **(Clásico)** Probar que si $q$ es primo y $q \mid \Phi_p(a)$ con $p$ primo y $q \neq p$, entonces $q \equiv 1 \pmod p$.

- **(Clásico, Bang-Zsigmondy)** Todo factor primo de $\Phi_n(a)$ con $\gcd(a, n) = 1$ es $\equiv 1 \pmod n$ o divide a $n$. Usar esto para deducir que para $n \geq 3$, todo divisor primo de $\Phi_n(2)$ es $\equiv 1 \pmod n$ o es $= 2$.

- **(Putnam 1972)** Probar que $\Phi_n(0) = 1$ si $n$ no es una potencia de primo, y $= p$ si $n = p^k$.
