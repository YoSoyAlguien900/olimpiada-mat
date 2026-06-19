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

$$r_1 + r_2 + \cdots + r_n = -\frac{a_{n-1}}{a_n},$$

$$\sum_{i<j} r_i r_j = \frac{a_{n-2}}{a_n},$$

$$\sum_{i<j<k} r_i r_j r_k = -\frac{a_{n-3}}{a_n}, \qquad\ldots$$

$$r_1 r_2 \cdots r_n = (-1)^n \frac{a_0}{a_n}.$$

En particular, para cuadráticas $ax^2+bx+c=0$ con raíces $r, s$:

$$r + s = -\frac{b}{a}, \qquad rs = \frac{c}{a}.$$

## Polinomios simétricos elementales

**Definición.** Las **funciones simétricas elementales** de $n$ variables $x_1, \ldots, x_n$ son:

$$e_1 = x_1 + x_2 + \cdots + x_n,$$

$$e_2 = \sum_{i < j} x_i x_j,$$

$$e_3 = \sum_{i<j<k} x_i x_j x_k, \qquad\ldots$$

$$e_n = x_1 x_2 \cdots x_n.$$

Para $n = 3$ (caso más frecuente en olimpiada): $e_1 = a+b+c$, $e_2 = ab+bc+ca$, $e_3 = abc$.

**Teorema fundamental de los polinomios simétricos.** Todo polinomio simétrico en $x_1,\ldots,x_n$ puede expresarse como polinomio en $e_1,\ldots,e_n$.

## Identidades algebraicas clave

**Sumas de potencias (Newton).** Definiendo $p_k = x_1^k+\cdots+x_n^k$:

$$p_1 = e_1, \quad p_2 = e_1 p_1 - 2e_2, \quad p_3 = e_1 p_2 - e_2 p_1 + 3e_3, \quad \ldots$$

Para $n = 3$:

$$a + b + c = e_1,$$

$$a^2+b^2+c^2 = e_1^2 - 2e_2,$$

$$a^3+b^3+c^3 = e_1^3 - 3e_1 e_2 + 3e_3.$$

**Factorizaciones útiles:**

$$a^2-b^2 = (a-b)(a+b),$$
$$a^3-b^3 = (a-b)(a^2+ab+b^2), \quad a^3+b^3 = (a+b)(a^2-ab+b^2),$$
$$a^n - b^n = (a-b)(a^{n-1}+a^{n-2}b+\cdots+b^{n-1}),$$
$$a^3+b^3+c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca).$$

**Identidad de Sophie Germain:**

$$a^4 + 4b^4 = (a^2+2b^2+2ab)(a^2+2b^2-2ab).$$

## Ejemplo

### Calcular expresiones simétricas sin hallar las raíces

*La idea común.* Si los datos del problema son una expresión **simétrica** en las raíces de un polinomio conocido, no hay que resolver el polinomio: por el teorema fundamental, toda simétrica se escribe en términos de $e_1,e_2,\ldots$, y Vieta da esos $e_i$ directamente desde los coeficientes. El trabajo se reduce a reescribir lo que piden en función de $e_1,e_2,\dots$.

**Ejemplo 1.** Si $r, s$ son las raíces de $x^2 - 5x + 3 = 0$, hallar $r^2 + s^2$ y $r^3 + s^3$ sin resolver la ecuación.

*La idea.* Tanto $r^2+s^2$ como $r^3+s^3$ son simétricas; las reescribimos con $e_1=r+s$ y $e_2=rs$, que Vieta entrega de inmediato.

**Solución.** Por Vieta, $r + s = 5$ y $rs = 3$. Entonces

$$r^2 + s^2 = (r+s)^2 - 2rs = 25 - 6 = 19,$$

$$r^3 + s^3 = (r+s)^3 - 3rs(r+s) = 125 - 3\cdot3\cdot5 = 125-45 = 80. \;\square$$

*La moraleja.* "Hallar $\sum r^k$ sin resolver" es siempre Vieta $+$ las identidades de Newton: traduce a $e_1,e_2$ y calcula.

**Ejemplo 2.** Si $r, s, t$ son las raíces de $x^3 - 6x^2 + 11x - 6 = 0$, probar que $r^2+s^2+t^2 = 14$.

**Solución.** Por Vieta, $e_1 = r+s+t = 6$ y $e_2 = rs+st+tr = 11$. Por la identidad de Newton,

$$r^2+s^2+t^2 = e_1^2 - 2e_2 = 36 - 22 = 14. \;\square$$

*(Comprobación: las raíces son $1, 2, 3$, y $1+4+9=14$.)*

**Ejemplo 3 (Clásico).** Sean $r,s$ raíces de $x^2+px+q=0$. Expresar $r^4+s^4$ en términos de $p$ y $q$.

*La idea.* Subimos de grado por pasos: primero $r^2+s^2$, y de ahí $r^4+s^4$ con el mismo truco "cuadrado de la suma menos el doble del producto", ahora aplicado a $r^2,s^2$ (cuyo producto es $(rs)^2$).

**Solución.** Por Vieta, $r+s=-p$ y $rs=q$. Entonces

$$r^2+s^2=(r+s)^2-2rs=p^2-2q,$$

$$r^4+s^4=(r^2+s^2)^2-2(rs)^2=(p^2-2q)^2-2q^2=p^4-4p^2q+2q^2. \;\square$$

*La moraleja.* Las potencias pares se escalan duplicando: $r^4+s^4$ es a $r^2,s^2$ lo que $r^2+s^2$ es a $r,s$. Encadenar la misma identidad sube de grado sin esfuerzo.

### Factorizaciones e identidades

*La idea común.* Muchas igualdades se demuestran reconociéndolas como un caso de una factorización estándar ($a^n-b^n$, $a^3+b^3+c^3-3abc$, Sophie Germain). El arte está en ver la **estructura** escondida: un cuadrado que falta, una suma de cubos disfrazada.

**Ejemplo 4.** Demostrar que $a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$, y deducir que si $a+b+c=0$ entonces $a^3+b^3+c^3=3abc$.

**Solución.** Desarrollamos el lado derecho. Multiplicando cada sumando de $a+b+c$ por el segundo paréntesis:

$$a\,(a^2+b^2+c^2-ab-bc-ca)=a^3+ab^2+ac^2-a^2b-abc-a^2c,$$

y análogamente para $b$ y $c$. Al sumar los tres bloques, los términos de tipo $a^2b$ se cancelan por pares: por ejemplo $+ab^2$ (del bloque de $a$) con $-ab^2$ (del bloque de $b$, que contiene $-b^2a$). Lo mismo ocurre con $a^2b, a^2c, b^2c,\dots$, de modo que **todos** los monomios mixtos de grado $3$ con un cuadrado desaparecen. Sobreviven $a^3+b^3+c^3$ y los términos $-abc$, que aparecen una vez en cada bloque: $-3abc$ en total. El resultado es

$$a^3+b^3+c^3-3abc,$$

lo que prueba la identidad. Si además $a+b+c=0$, el lado derecho se anula, luego $a^3+b^3+c^3-3abc=0$, es decir $a^3+b^3+c^3=3abc$. $\square$

*La moraleja.* El factor $a^2+b^2+c^2-ab-bc-ca=\tfrac12[(a-b)^2+(b-c)^2+(c-a)^2]\geq0$ es siempre no negativo; combinado con esta identidad es la vía estándar para desigualdades con cubos.

**Ejemplo 5 (Sophie Germain).** Factorizar $4x^4+1$ sobre $\mathbb{Z}$.

*La idea.* $4x^4+1$ es "casi" un cuadrado: $(2x^2+1)^2=4x^4+4x^2+1$, que se pasa por $4x^2$. Restando ese exceso obtenemos una **diferencia de cuadrados**, que factoriza. (Es el caso $a=1,b=x$ de la identidad de Sophie Germain $a^4+4b^4=(a^2+2b^2+2ab)(a^2+2b^2-2ab)$.)

**Solución.** Sumamos y restamos $4x^2$:

$$4x^4+1=4x^4+4x^2+1-4x^2=(2x^2+1)^2-(2x)^2.$$

Por diferencia de cuadrados,

$$(2x^2+1)^2-(2x)^2=(2x^2+1-2x)(2x^2+1+2x)=(2x^2-2x+1)(2x^2+2x+1).$$

**Comprobación:** $(2x^2+1)^2-(2x)^2=4x^4+4x^2+1-4x^2=4x^4+1$. ✓ $\square$

*La moraleja.* Ante $a^4+4b^4$ (o cualquier "cuadrado al que le falta un término"), completa el cuadrado y conviértelo en diferencia de cuadrados. Es el truco de Sophie Germain.

### Construcción de polinomios a partir de sus raíces

**Ejemplo 6.** Hallar el polinomio cúbico mónico con raíces $1+\sqrt{2}$, $1-\sqrt{2}$ y $3$.

*La idea.* El polinomio mónico con raíces dadas es $x^3-e_1x^2+e_2x-e_3$, donde $e_1,e_2,e_3$ son las simétricas elementales de las raíces. Las raíces conjugadas $1\pm\sqrt2$ hacen que los $\sqrt2$ se cancelen al sumar y multiplicar, dejando coeficientes enteros.

**Solución.** Calculamos las simétricas elementales:

$$e_1=(1+\sqrt2)+(1-\sqrt2)+3=5,$$

$$e_2=(1+\sqrt2)(1-\sqrt2)+3(1-\sqrt2)+3(1+\sqrt2)=(1-2)+(3-3\sqrt2)+(3+3\sqrt2)=-1+6=5,$$

$$e_3=(1+\sqrt2)(1-\sqrt2)\cdot3=(1-2)\cdot3=-3.$$

El polinomio es $x^3-e_1x^2+e_2x-e_3=x^3-5x^2+5x+3$. $\square$

*La moraleja.* Vieta funciona en los dos sentidos: de coeficientes a simétricas de las raíces, y de raíces a coeficientes. Las parejas conjugadas garantizan coeficientes racionales.

## Aplicaciones

**Problemas con expresiones simétricas.** Si $a, b, c$ son raíces de un polinomio conocido, todas las expresiones simétricas en $a, b, c$ se calculan mediante Vieta y las identidades de Newton sin necesidad de calcular las raíces explícitamente.

**Construir ecuaciones con raíces transformadas.** Si $r_1, \ldots, r_n$ son raíces de $p(x)$, a veces se pide el polinomio con raíces $f(r_1), \ldots, f(r_n)$ para alguna función $f$. La técnica: calcular las funciones simétricas elementales de los $f(r_i)$ usando Vieta.

**Identidades y factorizaciones en competencias.** Muchas igualdades algebraicas se demuestran más elegantemente reconociéndolas como casos de $a^n-b^n$ o $a^3+b^3+c^3-3abc$.

## Observación

**Vieta funciona sobre $\mathbb{C}$, no solo $\mathbb{R}$.** El teorema fundamental del álgebra garantiza que todo polinomio de grado $n$ tiene exactamente $n$ raíces complejas (contando multiplicidades). Las fórmulas de Vieta se aplican con esas raíces.

**El teorema del factor requiere cuerpo.** Sobre $\mathbb{Z}$, el teorema del factor dice que si $p(r)=0$ con $r\in\mathbb{Z}$, entonces $(x-r)\mid p(x)$ en $\mathbb{Z}[x]$. En particular, las raíces enteras de un polinomio mónico con coeficientes enteros son divisores del término independiente.

**Criterio de Eisenstein.** Un polinomio $a_n x^n+\cdots+a_0 \in \mathbb{Z}[x]$ es irreducible sobre $\mathbb{Q}$ si existe primo $p$ tal que: $p \nmid a_n$; $p \mid a_i$ para $i<n$; $p^2 \nmid a_0$. Útil para verificar irreducibilidad.

## Problemas relacionados

**Problema 1 (clásico).** Sean $r, s, t$ raíces de $x^3 - x - 1 = 0$. Calcular $\dfrac{1}{r-1}+\dfrac{1}{s-1}+\dfrac{1}{t-1}$.

[[pista]]

Los números $y=r-1,\,s-1,\,t-1$ son las raíces de $p(x+1)$. Calcula ese polinomio y usa $\sum\frac1{y_i}=\dfrac{e_2(y)}{e_3(y)}$.

[[/pista]]

[[solución]]

Sea $y_i=r_i-1$. Los $y_i$ son las raíces de $p(x+1)$ donde $p(x)=x^3-x-1$:

$$p(x+1)=(x+1)^3-(x+1)-1=x^3+3x^2+3x+1-x-1-1=x^3+3x^2+2x-1.$$

Para este polinomio, las simétricas de los $y_i$ son $E_2=\sum_{i<j}y_iy_j=2$ y $E_3=y_1y_2y_3=-(-1)=1$. Por tanto

$$\frac{1}{r-1}+\frac{1}{s-1}+\frac{1}{t-1}=\sum\frac{1}{y_i}=\frac{\sum_{i<j}y_iy_j}{y_1y_2y_3}=\frac{E_2}{E_3}=\frac{2}{1}=2. \;\blacksquare$$

[[/solución]]

**Problema 2 (clásico).** Demostrar que si $a + b + c = 0$, entonces $a^5+b^5+c^5 = -5abc(ab+bc+ca)$.

[[pista]]

Con $e_1=0$, las identidades de Newton dan $p_2=-2e_2$, $p_3=3e_3$, y luego $p_5=e_1p_4-e_2p_3+e_3p_2$.

[[/pista]]

[[solución]]

Sean $e_1=a+b+c=0$, $e_2=ab+bc+ca$, $e_3=abc$, y $p_k=a^k+b^k+c^k$. Las identidades de Newton (con $e_1=0$) dan

$$p_1=e_1=0,\qquad p_2=e_1p_1-2e_2=-2e_2,\qquad p_3=e_1p_2-e_2p_1+3e_3=3e_3.$$

Para tres variables, $e_k=0$ si $k>3$, así que las siguientes Newton son $p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$. Con $e_1=0$:

$$p_4=-e_2p_2+e_3p_1=-e_2(-2e_2)+0=2e_2^2,$$

$$p_5=-e_2p_3+e_3p_2=-e_2(3e_3)+e_3(-2e_2)=-3e_2e_3-2e_2e_3=-5e_2e_3.$$

Por tanto $a^5+b^5+c^5=-5e_2e_3=-5\,abc\,(ab+bc+ca)$. $\blacksquare$

*(Verificación con $a=1,b=2,c=-3$: $a^5+b^5+c^5=1+32-243=-210$; y $-5abc(ab+bc+ca)=-5(-6)(-7)=-210$.)* ✓

[[/solución]]

**Problema 3 (regional).** Hallar todos los pares $(p, q) \in \mathbb{Z}^2$ tales que $x^2+px+q=0$ tiene raíces enteras $r,s$ que satisfacen $r^2+s^2=p$.

[[pista]]

Por Vieta, $p=-(r+s)$ y $q=rs$. La condición $r^2+s^2=p=-(r+s)$ se reescribe como $(2r+1)^2+(2s+1)^2=2$.

[[/pista]]

[[solución]]

Por Vieta, $r+s=-p$ y $rs=q$, luego $p=-(r+s)$. La condición $r^2+s^2=p$ es

$$r^2+s^2=-(r+s)\;\Longrightarrow\;r^2+r+s^2+s=0\;\Longrightarrow\;(2r+1)^2+(2s+1)^2=2,$$

multiplicando por $4$ y completando cuadrados. Como $2r+1$ y $2s+1$ son enteros (impares), la única forma de que dos cuadrados enteros sumen $2$ es $1+1$, así que $2r+1=\pm1$ y $2s+1=\pm1$, es decir $r,s\in\{0,-1\}$. Los casos:

- $r=s=0$: $(p,q)=(0,0)$.
- $\{r,s\}=\{0,-1\}$: $p=-(-1)=1$, $q=0$, es decir $(p,q)=(1,0)$.
- $r=s=-1$: $p=2$, $q=1$, es decir $(p,q)=(2,1)$.

Las soluciones son $(p,q)\in\{(0,0),\,(1,0),\,(2,1)\}$. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** Probar que si $p(x)\in\mathbb{Z}[x]$ y $p(0)\cdot p(1)$ es impar, entonces $p$ no tiene raíces enteras.

[[pista]]

Si $n$ es entero, $p(n)$ tiene la misma paridad que $p(0)$ (si $n$ par) o que $p(1)$ (si $n$ impar), porque $a-b\mid p(a)-p(b)$.

[[/pista]]

[[solución]]

Usamos que para enteros $a,b$ se cumple $a-b\mid p(a)-p(b)$ (cada $a^k-b^k$ es divisible por $a-b$). En particular, módulo $2$:

- Si $n$ es par, $n\equiv0$, luego $p(n)\equiv p(0)\pmod 2$.
- Si $n$ es impar, $n\equiv1$, luego $p(n)\equiv p(1)\pmod 2$.

Que $p(0)\cdot p(1)$ sea impar significa que **ambos** $p(0)$ y $p(1)$ son impares. Entonces, para todo entero $n$, $p(n)$ es impar (igual a $p(0)$ o a $p(1)$ mód $2$), y en particular $p(n)\neq0$. Por tanto $p$ no tiene raíces enteras. $\blacksquare$

[[/solución]]

**Problema 5 (nivel nacional).** Sean $a, b, c$ raíces de $x^3+px+q=0$. Expresar $(a-b)^2(b-c)^2(c-a)^2$ en términos de $p$ y $q$.

[[pista]]

Es el discriminante de la cúbica. Con $e_1=0$, $e_2=p$, $e_3=-q$, desarrolla el producto en función de las sumas de potencias, o usa la fórmula conocida $\Delta=-4p^3-27q^2$.

[[/pista]]

[[solución]]

Por Vieta sobre $x^3+px+q$ (sin término cuadrático): $e_1=a+b+c=0$, $e_2=ab+bc+ca=p$, $e_3=abc=-q$.

El producto $D=(a-b)^2(b-c)^2(c-a)^2$ es el **discriminante** de la cúbica, un polinomio simétrico que se expresa en $e_1,e_2,e_3$. Para la cúbica deprimida ($e_1=0$) la fórmula es

$$D=-4e_2^3-27e_3^2=-4p^3-27q^2.$$

(Se obtiene desarrollando $D$ como simétrica y sustituyendo; el resultado es el discriminante clásico, cuyo signo distingue si las tres raíces son reales.) Así,

$$(a-b)^2(b-c)^2(c-a)^2=-4p^3-27q^2. \;\blacksquare$$

[[/solución]]
