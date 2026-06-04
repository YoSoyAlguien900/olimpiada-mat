---
title: "Polinomios: identidades, raíces y funciones simétricas"
preview: "Fórmulas de Vieta, identidades de Newton, divisibilidad polinómica, criterio de Eisenstein. La caja de herramientas algebraica que conecta los coeficientes de un polinomio con sus raíces y aparece en toda olimpiada de nivel medio."
dificultad: regional
tags: [polinomios, vieta, newton, simetricas, eisenstein, raices]
prerequisites: []
author: "Material olímpico"
updated: "2026-06-03"
---

Los polinomios son el puente entre el álgebra y la aritmética. Una ecuación diofántica en enteros tiene, antes de ser entera, una existencia algebraica como polinomio. Un resultado sobre divisibilidad —como el Pequeño Teorema de Fermat o el Teorema de Wilson— se puede probar manipulando polinomios en $\mathbb F_p[x]$. Las funciones simétricas de las raíces relacionan los coeficientes con cualquier expresión que no dependa del orden de las raíces.

Este capítulo desarrolla las herramientas polinómicas estándar: fórmulas de Vieta, identidades de Newton (con prueba completa), divisibilidad, criterio de Eisenstein y polinomios módulo primo. Son las herramientas que todo olympiano necesita en automático.

## Fórmulas de Vieta

## Teorema

Sea $P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$ un polinomio de grado $n$ con raíces $r_1, r_2, \ldots, r_n$ (contadas con multiplicidad, posiblemente complejas). Entonces:

$$P(x) = a_n (x - r_1)(x - r_2) \cdots (x - r_n),$$

y los **polinomios simétricos elementales** de las raíces se relacionan con los coeficientes por:

$$e_1 = r_1 + r_2 + \cdots + r_n = -\frac{a_{n-1}}{a_n},$$

$$e_2 = \sum_{i < j} r_i r_j = \frac{a_{n-2}}{a_n},$$

$$e_k = \sum_{i_1 < i_2 < \cdots < i_k} r_{i_1} r_{i_2} \cdots r_{i_k} = (-1)^k \frac{a_{n-k}}{a_n},$$

$$e_n = r_1 r_2 \cdots r_n = (-1)^n \frac{a_0}{a_n}.$$

## Demostración

El polinomio $P(x)$ se factoriza sobre $\mathbb C$ (por el Teorema Fundamental del Álgebra) como $P(x) = a_n \prod_{i=1}^n (x - r_i)$. Expandiendo este producto:

$$a_n \prod_{i=1}^n (x - r_i) = a_n \left(x^n - e_1 x^{n-1} + e_2 x^{n-2} - \cdots + (-1)^n e_n\right).$$

Comparando con los coeficientes de $P$: $a_n \cdot (-1)^k e_k = a_{n-k}$, lo que da $e_k = (-1)^k a_{n-k}/a_n$. $\blacksquare$

## Ejemplo

**Vieta en grado 2 y 3.**

Para $P(x) = x^2 + bx + c$ con raíces $r, s$: $r + s = -b$, $rs = c$.

Para $P(x) = x^3 + px + q$ (sin término en $x^2$) con raíces $r, s, t$: $r + s + t = 0$, $rs + st + tr = p$, $rst = -q$.

**Ejemplo concreto:** Las raíces de $x^3 - 6x^2 + 11x - 6 = 0$ son $1, 2, 3$. Verificamos: $1+2+3 = 6 = 6/1$ ✓, $1 \cdot 2 + 2 \cdot 3 + 1 \cdot 3 = 11$ ✓, $1 \cdot 2 \cdot 3 = 6$ ✓.

## Identidades de Newton

Las **sumas de potencias** $p_k = r_1^k + r_2^k + \cdots + r_n^k$ se expresan en términos de los simétricos elementales $e_j$ por las **identidades de Newton**.

## Teorema

**(Identidades de Newton)** Para $1 \leq k \leq n$:

$$p_k = e_1 p_{k-1} - e_2 p_{k-2} + e_3 p_{k-3} - \cdots + (-1)^{k-1} k e_k.$$

Para $k > n$:

$$p_k = e_1 p_{k-1} - e_2 p_{k-2} + \cdots + (-1)^{n-1} e_n p_{k-n}.$$

Las primeras identidades explícitas son:

$$p_1 = e_1,$$
$$p_2 = e_1 p_1 - 2e_2 = e_1^2 - 2e_2,$$
$$p_3 = e_1 p_2 - e_2 p_1 + 3e_3,$$
$$p_4 = e_1 p_3 - e_2 p_2 + e_3 p_1 - 4e_4.$$

## Demostración

Trabajamos formalmente. El polinomio es $P(x) = a_n \prod (x - r_i) = a_n (x^n - e_1 x^{n-1} + \cdots + (-1)^n e_n)$.

Consideramos la **serie de potencias generatriz**. Para cada raíz $r_i$, la derivada logarítmica de $(x - r_i)$ es $1/(x - r_i)$. Sumando sobre todas las raíces:

$$\frac{P'(x)}{P(x)} = \sum_{i=1}^n \frac{1}{x - r_i} = \sum_{i=1}^n \frac{1}{x} \cdot \frac{1}{1 - r_i/x} = \frac{1}{x} \sum_{i=1}^n \sum_{k=0}^{\infty} \left(\frac{r_i}{x}\right)^k = \sum_{k=0}^{\infty} \frac{p_k}{x^{k+1}}$$

para $|x| > |r_i|$. Por otro lado, $P'(x)/P(x)$ se puede calcular directamente:

$$P'(x) = a_n(nx^{n-1} - (n-1)e_1 x^{n-2} + (n-2)e_2 x^{n-3} - \cdots).$$

Igualando $P(x) \cdot \sum p_k / x^{k+1} = P'(x)$ y comparando coeficientes de $x^{n-k}$ en ambos lados, se obtienen las identidades de Newton. $\blacksquare$

*(Una demostración alternativa más directa: multiplicar $P(x)$ por $p_k$, usar $r_i^k \cdot P(r_i) = 0$ para cada raíz, y comparar coeficientes.)*

## Ejemplo

### Aplicación de Newton

**Ejemplo 1.** Sean $r, s$ raíces de $x^2 - 2x - 1 = 0$. Calcular $r^7 + s^7$.

Por Vieta: $e_1 = r + s = 2$, $e_2 = rs = -1$.

Recurrencia de Newton para $k > 2$: $p_k = e_1 p_{k-1} - e_2 p_{k-2} = 2p_{k-1} + p_{k-2}$.

| $k$ | $p_k$ |
|---|---|
| $0$ | $2$ |
| $1$ | $2$ |
| $2$ | $2 \cdot 2 + 2 \cdot 1 = 6$ |
| $3$ | $2 \cdot 6 + 2 = 14$ |
| $4$ | $2 \cdot 14 + 6 = 34$ |
| $5$ | $2 \cdot 34 + 14 = 82$ |
| $6$ | $2 \cdot 82 + 34 = 198$ |
| $7$ | $2 \cdot 198 + 82 = 478$ |

**$r^7 + s^7 = 478$.**

*(Observación: la recurrencia $p_k = 2p_{k-1} + p_{k-2}$ es la misma que la de la sucesión de Pell.)*

---

**Ejemplo 2.** Sean $a, b, c$ raíces de $x^3 - 3x + 1 = 0$. Calcular $a^5 + b^5 + c^5$.

$e_1 = a+b+c = 0$, $e_2 = ab+bc+ca = -3$, $e_3 = abc = -1$.

Newton: para $k \leq 3$: $p_k = e_1 p_{k-1} - e_2 p_{k-2} + (-1)^{k-1} k e_k$.

$p_1 = e_1 = 0$.
$p_2 = e_1 p_1 - 2e_2 = 0 - 2(-3) = 6$.
$p_3 = e_1 p_2 - e_2 p_1 + 3e_3 = 0 - 0 + 3(-1) = -3$.

Para $k > 3$: $p_k = e_1 p_{k-1} - e_2 p_{k-2} + e_3 p_{k-3} = 0 \cdot p_{k-1} + 3 p_{k-2} - p_{k-3}$.

$p_4 = 3 \cdot 6 - 0 = 18$.
$p_5 = 3 \cdot (-3) - 6 = -9 - 6 = -15$.

**$a^5 + b^5 + c^5 = -15$.**

## Divisibilidad de polinomios

## Teorema

**(División euclidiana de polinomios)** Para todo par de polinomios $A, B$ sobre un cuerpo con $B \neq 0$, existen **únicos** polinomios $Q$ (cociente) y $R$ (resto) con $A = QB + R$ y $\deg R < \deg B$.

**(Teorema del resto)** $P(a) = R$, donde $R$ es el resto de dividir $P(x)$ entre $(x - a)$.

**(Teorema del factor)** $(x - a) \mid P(x)$ si y solo si $P(a) = 0$.

**(Cota de raíces)** Un polinomio de grado $n$ tiene a lo sumo $n$ raíces en cualquier cuerpo.

## Demostración

**Del teorema del resto.** $P(x) = (x - a)Q(x) + R$ con $R$ constante (grado $< 1$). Evaluando en $a$: $P(a) = 0 \cdot Q(a) + R = R$. $\blacksquare$

**De la cota de raíces.** Si $a_1, \ldots, a_{n+1}$ fueran $n+1$ raíces distintas, por el teorema del factor $(x - a_i) \mid P(x)$. Como son distintas y el cuerpo es un dominio integral, $(x-a_1)\cdots(x-a_{n+1}) \mid P(x)$. Pero este producto tiene grado $n+1 > n = \deg P$, imposible. $\blacksquare$

## Polinomios con coeficientes enteros

## Teorema

**(Criterio de Eisenstein)** Sea $P(x) = a_n x^n + \cdots + a_0 \in \mathbb Z[x]$. Si existe un primo $p$ tal que:

- $p \nmid a_n$,
- $p \mid a_i$ para $0 \leq i \leq n-1$,
- $p^2 \nmid a_0$,

entonces $P$ es **irreducible sobre $\mathbb Q$**.

## Demostración

Supongamos por contradicción que $P = FG$ con $F, G \in \mathbb Z[x]$ (por el Lema de Gauss, si hay una factorización en $\mathbb Q[x]$ hay una en $\mathbb Z[x]$) y $\deg F, \deg G \geq 1$.

Sea $F = b_k x^k + \cdots + b_0$ y $G = c_l x^l + \cdots + c_0$ con $k + l = n$.

Módulo $p$: $P \equiv a_n x^n \pmod p$ (todos los coeficientes excepto $a_n$ son divisibles por $p$). Así en $\mathbb F_p[x]$: $\bar F \cdot \bar G \equiv a_n x^n$.

Como $\mathbb F_p[x]$ es un DFU (dominio de factorización única), $\bar F$ y $\bar G$ son ambos monomios: $\bar F = b_k x^k$ y $\bar G = c_l x^l$.

En particular, $p \mid b_0$ y $p \mid c_0$. Pero $a_0 = b_0 c_0$, así $p^2 \mid a_0$. Contradicción con $p^2 \nmid a_0$. $\blacksquare$

## Ejemplo

### Eisenstein y raíces racionales

**Ejemplo 3.** Probar que $x^5 - 4x + 2$ es irreducible sobre $\mathbb Q$.

$p = 2$: $2 \nmid 1$ (coeficiente líder), $2 \mid 4$ y $2 \mid 2$ (coeficientes intermedios; el de $x^0$ es $2$, sí divisible), $4 \nmid 2$ (el término constante). Eisenstein con $p = 2$ aplica. **Irreducible.** $\square$

---

**Ejemplo 4.** Demostrar que $\Phi_p(x) = x^{p-1} + x^{p-2} + \cdots + x + 1$ es irreducible para $p$ primo.

El cambio de variable $y = x + 1$ da:

$$\Phi_p(y + 1) = \frac{(y+1)^p - 1}{y} = y^{p-1} + \binom{p}{1} y^{p-2} + \binom{p}{2} y^{p-3} + \cdots + \binom{p}{p-1}.$$

El coeficiente de $y^{p-1-k}$ es $\binom{p}{k+1}$. Para $1 \leq k \leq p-2$: $p \mid \binom{p}{k+1}$ (pues $1 \leq k+1 \leq p-1$). El coeficiente constante es $\binom{p}{p} = 1$... espera: $\Phi_p(1+y)|_{y=0} = \Phi_p(1) = p$. Y $\binom{p}{p-1} = p \equiv 0$ y $p^2 \nmid p$.

Así Eisenstein aplica a $\Phi_p(x+1)$ con primo $p$: el coeficiente líder es $1$ (no divisible por $p$), los coeficientes $\binom{p}{k+1}$ para $1 \leq k+1 \leq p-1$ son divisibles por $p$, y el término constante es $p$ (divisible por $p$ pero no $p^2$). Luego $\Phi_p(x+1)$ es irreducible, y en consecuencia $\Phi_p(x)$ también. $\square$

---

**Ejemplo 5.** Calcular $r^4 + s^4 + t^4$ donde $r, s, t$ son las raíces de $x^3 + x + 1 = 0$.

$e_1 = 0$, $e_2 = 1$, $e_3 = -1$.

$p_1 = 0$. $p_2 = e_1 p_1 - 2e_2 = -2$. $p_3 = e_1 p_2 - e_2 p_1 + 3e_3 = 0 - 0 - 3 = -3$.

Para $k = 4$: $p_4 = e_1 p_3 - e_2 p_2 + e_3 p_1 = 0 - (-2) + 0 = 2$.

**$r^4 + s^4 + t^4 = 2$.**

## Raíces racionales

## Teorema

**(Regla de las raíces racionales)** Si $P(x) = a_n x^n + \cdots + a_0 \in \mathbb Z[x]$ tiene una raíz racional $p/q$ en forma irreducible ($\gcd(p, q) = 1$), entonces $p \mid a_0$ y $q \mid a_n$.

## Demostración

$a_n (p/q)^n + a_{n-1}(p/q)^{n-1} + \cdots + a_0 = 0$. Multiplicando por $q^n$:

$$a_n p^n + a_{n-1} p^{n-1} q + \cdots + a_0 q^n = 0.$$

Todo término excepto el primero es divisible por $q$, así $q \mid a_n p^n$. Como $\gcd(p, q) = 1$, $q \mid a_n$.

Análogamente, $p \mid a_0 q^n$ y $\gcd(p,q) = 1$ da $p \mid a_0$. $\blacksquare$

## Aplicaciones

**Irracionalidad.** Para probar que $\sqrt[3]{5}$ es irracional: satisface $x^3 - 5 = 0$. Las raíces racionales posibles son $\pm 1, \pm 5$. Ninguna es raíz. Luego $\sqrt[3]{5}$ es irracional (y de hecho algebraico de grado $3$, no $1$).

**Polinomios sobre $\mathbb F_p$.** En el cuerpo $\mathbb F_p = \mathbb Z/p\mathbb Z$, los mismos resultados (división, raíces, factorización) valen. La cota de $n$ raíces para un polinomio de grado $n$ es clave en las pruebas del PTF y del Teorema de Wilson: «$x^{p-1} - 1$ tiene exactamente $p-1$ raíces, a saber $1, 2, \ldots, p-1$».

## Observación

**El Lema de Gauss y la factorización entera.** Si $P \in \mathbb Z[x]$ es irreducible sobre $\mathbb Q$, entonces es irreducible sobre $\mathbb Z$ (no se factoriza en polinomios enteros de grado positivo). Esto permite trasladar resultados de irreducibilidad sobre $\mathbb Q$ (más accesibles via Eisenstein) a resultados sobre $\mathbb Z$.

**Polinomios simétricos y el Teorema de Newton.** El **Teorema Fundamental de las Funciones Simétricas** dice que toda función simétrica (invariante bajo cualquier permutación de las variables) es un polinomio en $e_1, e_2, \ldots, e_n$. Las identidades de Newton dan el algoritmo para expresar $p_k$ en términos de los $e_j$.

**Conexión con el álgebra lineal.** Una sucesión que satisface una recurrencia lineal de orden $k$ tiene un polinomio característico de grado $k$. Las raíces de ese polinomio dan la solución general via la fórmula de Binet. La forma de Jordan de la matriz de recurrencia generaliza esto a raíces múltiples.

## Problemas relacionados

- **(OME 2017)** Si $r, s, t$ son las raíces de $x^3 - 6x^2 + 3x - 1 = 0$, calcular $r^4 + s^4 + t^4$ y $\sum_{i<j<k} r_i r_j r_k(r_i + r_j + r_k)$.

- **(Clásico)** Demostrar que $x^4 + 1$ es irreducible sobre $\mathbb Q$ pero reducible sobre $\mathbb F_p$ para todo primo $p$.

- **(Clásico)** Si $P(x) \in \mathbb Z[x]$ tiene $n+1$ coeficientes todos $\pm 1$ y grado $n$, probar que $P$ tiene raíces solo en $\{-1, 0, 1\}$ (caso de «polinomios littlewood»).

- **(OME 2020)** Sea $P(x) = x^n + a_{n-1} x^{n-1} + \cdots + a_0$ con $a_i \in \{0, 1\}$. Determinar para qué $n$ puede $P$ tener todas sus raíces de módulo $1$.

- **(Clásico)** Probar que para primos $p$, el polinomio $1 + x + x^2 + \cdots + x^{p-1}$ es irreducible sobre $\mathbb Z$. (Eisenstein con cambio de variable.)
