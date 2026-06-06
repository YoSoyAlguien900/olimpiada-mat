---
title: "Polinomios: Vieta, identidades y simétricos elementales"
preview: "El teorema del factor, las fórmulas de Vieta y las identidades de Newton conectan las raíces de un polinomio con sus coeficientes. Herramientas esenciales para problemas de expresiones simétricas."
dificultad: regional
tags: [polinomios, vieta, simetricos, newton, identidades]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Los polinomios son el lenguaje en que se formulan muchos problemas de álgebra olímpica. Conocer las relaciones entre raíces y coeficientes (fórmulas de Vieta), cómo factorizar, y qué son los polinomios simétricos elementales es imprescindible para abordar problemas de nivel regional en adelante.

## Enunciado

**Teorema del Factor.** Si $p(x)$ es un polinomio y $p(r) = 0$, entonces $(x - r)$ divide a $p(x)$.

Equivalentemente, $p(x) = (x-r) \cdot q(x)$ para cierto polinomio $q(x)$.

**Corolario.** Un polinomio de grado $n$ tiene a lo sumo $n$ raíces (en $\mathbb{C}$, exactamente $n$ contando multiplicidades).

**Fórmulas de Vieta.** Sea $p(x) = a_n x^n + a_{n-1}x^{n-1}+\cdots+a_0$ con raíces $r_1, r_2, \ldots, r_n$ (en $\mathbb C$):

$$p(x) = a_n(x-r_1)(x-r_2)\cdots(x-r_n).$$

Expandiendo y comparando coeficientes:

$$\begin{aligned}
r_1 + r_2 + \cdots + r_n &= -\frac{a_{n-1}}{a_n}, \\
\sum_{i<j} r_i r_j &= \frac{a_{n-2}}{a_n}, \\
\sum_{i<j<k} r_i r_j r_k &= -\frac{a_{n-3}}{a_n}, \\
&\;\vdots \\
r_1 r_2 \cdots r_n &= (-1)^n \frac{a_0}{a_n}.
\end{aligned}$$

En particular, para cuadráticas $ax^2+bx+c=0$ con raíces $r, s$:

$$r + s = -\frac{b}{a}, \qquad rs = \frac{c}{a}.$$

## Polinomios simétricos elementales

**Definición.** Las **funciones simétricas elementales** de $n$ variables $x_1, \ldots, x_n$ son:

$$\begin{aligned}
e_1 &= x_1 + x_2 + \cdots + x_n, \\
e_2 &= \sum_{i < j} x_i x_j, \\
e_3 &= \sum_{i<j<k} x_i x_j x_k, \\
&\;\vdots \\
e_n &= x_1 x_2 \cdots x_n.
\end{aligned}$$

Para $n = 3$ (caso más frecuente en olimpiada): $e_1 = a+b+c$, $e_2 = ab+bc+ca$, $e_3 = abc$.

**Teorema fundamental de los polinomios simétricos.** Todo polinomio simétrico en $x_1,\ldots,x_n$ puede expresarse como polinomio en $e_1,\ldots,e_n$.

## Identidades algebraicas clave

**Sumas de potencias (Newton).** Definiendo $p_k = x_1^k+\cdots+x_n^k$:

$$p_1 = e_1, \quad p_2 = e_1 p_1 - 2e_2, \quad p_3 = e_1 p_2 - e_2 p_1 + 3e_3, \quad \ldots$$

Para $n = 3$:

$$\begin{aligned}
a + b + c &= e_1, \\
a^2+b^2+c^2 &= e_1^2 - 2e_2, \\
a^3+b^3+c^3 &= e_1^3 - 3e_1 e_2 + 3e_3.
\end{aligned}$$

**Factorizaciones útiles:**

$$a^2-b^2 = (a-b)(a+b),$$
$$a^3-b^3 = (a-b)(a^2+ab+b^2), \quad a^3+b^3 = (a+b)(a^2-ab+b^2),$$
$$a^n - b^n = (a-b)(a^{n-1}+a^{n-2}b+\cdots+b^{n-1}),$$
$$a^3+b^3+c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca).$$

**Identidad de Sophie Germain:**

$$a^4 + 4b^4 = (a^2+2b^2+2ab)(a^2+2b^2-2ab).$$

## Ejemplo

**Ejemplo 1.** Si $r, s$ son las raíces de $x^2 - 5x + 3 = 0$, hallar $r^2 + s^2$ y $r^3 + s^3$ sin resolver la ecuación.

Por Vieta: $r + s = 5$ y $rs = 3$.

$$r^2 + s^2 = (r+s)^2 - 2rs = 25 - 6 = 19.$$

$$r^3 + s^3 = (r+s)^3 - 3rs(r+s) = 125 - 45 = 80. \;\square$$

---

**Ejemplo 2.** Probar que si $r, s, t$ son las raíces de $x^3 - 6x^2 + 11x - 6 = 0$, entonces $r^2+s^2+t^2 = 14$.

Por Vieta: $e_1 = r+s+t = 6$, $e_2 = rs+st+tr = 11$.

$$r^2+s^2+t^2 = e_1^2 - 2e_2 = 36 - 22 = 14. \;\square$$

*(Las raíces son $1, 2, 3$ y efectivamente $1+4+9=14$.)*

---

**Ejemplo 3.** Demostrar que $a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.

Observa que $a^2+b^2+c^2-ab-bc-ca = \frac{1}{2}[(a-b)^2+(b-c)^2+(c-a)^2] \geq 0$ para reales.

Directamente: expandir el RHS y verificar que coincide con el LHS. $\square$

**Consecuencia:** Si $a+b+c=0$, entonces $a^3+b^3+c^3=3abc$.

---

**Ejemplo 4.** (Clásico) Sean $r,s$ raíces de $x^2+px+q=0$. Expresar $r^4+s^4$ en términos de $p$ y $q$.

$$r+s=-p, \quad rs=q.$$
$$r^2+s^2=(r+s)^2-2rs=p^2-2q.$$
$$r^4+s^4=(r^2+s^2)^2-2(rs)^2=(p^2-2q)^2-2q^2=p^4-4p^2q+2q^2. \;\square$$

---

**Ejemplo 5.** (Construcción de polinomio) Hallar el polinomio cúbico con raíces $1+\sqrt{2}$, $1-\sqrt{2}$ y $3$.

Las raíces satisfacen: $e_1=1+\sqrt2+1-\sqrt2+3=5$, $e_2=(1+\sqrt2)(1-\sqrt2)+(1-\sqrt2)\cdot3+(1+\sqrt2)\cdot3 = -1+3-3\sqrt2+3+3\sqrt2=5$, $e_3=(1+\sqrt2)(1-\sqrt2)\cdot3=-3$.

Polinomio: $x^3-5x^2+5x+3$. $\square$

---

**Ejemplo 6.** (Sophie Germain en acción) Factorizar $4x^4+1$.

$4x^4+1 = (2x^2)^2+1^2$... no factoriza sobre $\mathbb Z$ directamente. Usando Sophie Germain con $a=1, b=x$:

$$4x^4+1 = x^4 + 4x^4 - x^4 + 1 = (x^2+1)^2-(x)^2\cdot4\cdot?$$

Mejor: reconocer $4x^4+1 = (2x^2+1)^2-4x^2=(2x^2+2x+1)(2x^2-2x+1)$.

*(Verificar: $(2x^2+2x+1)(2x^2-2x+1)=4x^4-4x^2+1\cdot?$... no cuadra. La factorización correcta de $4x^4+1$: completar cuadrado: $4x^4+4x^2+1-4x^2=(2x^2+1)^2-(2x)^2=(2x^2+2x+1)(2x^2-2x+1)$.)* $\square$

## Aplicaciones

**Problemas con expresiones simétricas.** Si $a, b, c$ son raíces de un polinomio conocido, todas las expresiones simétricas en $a, b, c$ se calculan mediante Vieta y las identidades de Newton sin necesidad de calcular las raíces explícitamente.

**Construir ecuaciones con raíces transformadas.** Si $r_1, \ldots, r_n$ son raíces de $p(x)$, a veces se pide el polinomio con raíces $f(r_1), \ldots, f(r_n)$ para alguna función $f$. La técnica: calcular las funciones simétricas elementales de los $f(r_i)$ usando Vieta.

**Identidades y factorizaciones en competencias.** Muchas igualdades algebraicas se demuestran más elegantemente reconociéndolas como casos de $a^n-b^n$ o $a^3+b^3+c^3-3abc$.

## Observación

**Vieta funciona sobre $\mathbb{C}$, no solo $\mathbb{R}$.** El teorema fundamental del álgebra garantiza que todo polinomio de grado $n$ tiene exactamente $n$ raíces complejas (contando multiplicidades). Las fórmulas de Vieta se aplican con esas raíces.

**El teorema del factor requiere cuerpo.** Sobre $\mathbb{Z}$, el teorema del factor dice que si $p(r)=0$ con $r\in\mathbb{Z}$, entonces $(x-r)\mid p(x)$ en $\mathbb{Z}[x]$. En particular, las raíces enteras de un polinomio mónico con coeficientes enteros son divisores del término independiente.

**Criterio de Eisenstein.** Un polinomio $a_n x^n+\cdots+a_0 \in \mathbb{Z}[x]$ es irreducible sobre $\mathbb{Q}$ si existe primo $p$ tal que: $p \nmid a_n$; $p \mid a_i$ para $i<n$; $p^2 \nmid a_0$. Útil para verificar irreducibilidad.

## Problemas relacionados

- **(Clásico)** Sean $r, s, t$ raíces de $x^3 - x - 1 = 0$. Calcular $\dfrac{1}{r-1}+\dfrac{1}{s-1}+\dfrac{1}{t-1}$.

- **(Clásico)** Demostrar que si $a + b + c = 0$, entonces $a^5+b^5+c^5 = 5abc(ab+bc+ca)$. *(Usar identidades de Newton.)*

- **(OMG-nivel)** Hallar todos los pares $(p, q) \in \mathbb{Z}^2$ tales que $x^2+px+q=0$ tiene raíces enteras y las raíces satisfacen $r^2+s^2=p$.

- **(Clásico)** Probar que si $p(x)\in\mathbb{Z}[x]$ es mónico de grado $n$ y $p(0)\cdot p(1)$ es impar, entonces $p$ no tiene raíces enteras.

- **(IMO-nivel)** Sean $a, b, c$ raíces de $x^3+px+q=0$. Expresar $(a-b)^2(b-c)^2(c-a)^2$ en términos de $p$ y $q$.
