---
title: "Identidades algebraicas fundamentales"
preview: "Las identidades algebraicas son igualdades que se cumplen para todos los valores de las variables. Son el vocabulario básico del álgebra: sin dominarlas, no se puede factorizar, simplificar ni aplicar AM-GM, Vieta o Cauchy-Schwarz."
dificultad: iniciacion
tags: [identidades, factorizacion, algebra, basico, binomio]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Las identidades algebraicas son el vocabulario del álgebra olímpica. Aparecen constantemente: al factorizar una expresión para demostrar divisibilidad, al reconocer una suma de cubos en una desigualdad, al manipular polinomios simétricos. Memorizar las identidades de esta página y saber cuándo aplicarlas es el primer paso.

---

## Identidades del binomio cuadrado

$$\boxed{(a+b)^2 = a^2 + 2ab + b^2}$$

$$\boxed{(a-b)^2 = a^2 - 2ab + b^2}$$

**Consecuencias inmediatas:**

- $(a+b)^2 - (a-b)^2 = 4ab$
- $(a+b)^2 + (a-b)^2 = 2(a^2+b^2)$
- $a^2+b^2 = (a+b)^2 - 2ab = (a-b)^2 + 2ab$

**Completar el cuadrado.** Para $ax^2+bx+c$:

$$ax^2+bx+c = a\!\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}.$$

Útil para encontrar el mínimo/máximo de cuadráticas y para demostrar $ax^2+bx+c\geq0$.

### Ejemplo

**Demostrar que $x^2-6x+10>0$ para todo $x\in\mathbb{R}$.**

*La idea.* Una cuadrática es difícil de acotar tal cual, pero **completar el cuadrado** la reescribe como (cuadrado) $+$ (constante), y un cuadrado nunca es negativo.

$$
x^2-6x+10 = (x-3)^2 + 1 \geq 1 > 0. \quad \square
$$

---

## Diferencia de cuadrados

$$\boxed{a^2 - b^2 = (a-b)(a+b)}$$

Es la identidad de factorización más usada. En olimpiada aparece al factorizar números, al simplificar radicales, y al demostrar divisibilidad.

### Ejemplos

*La idea común.* La diferencia de cuadrados sirve en tres frentes: **factorizar** para estudiar divisibilidad, **racionalizar** denominadores con raíces, y **calcular** productos a ojo. La maniobra es siempre reconocer (o fabricar) la forma $X^2 - Y^2$.

**Ejemplo 1.** Demostrar que si $n$ es **impar**, entonces $n^2-1$ es divisible por $8$.

*La idea.* Factorizamos $n^2-1=(n-1)(n+1)$. Para $n$ impar, $n-1$ y $n+1$ son dos pares **consecutivos**, y de dos pares consecutivos uno es múltiplo de $4$.

Como $n$ es impar, $n-1$ y $n+1$ son pares; escribamos $n-1=2k$, $n+1=2k+2=2(k+1)$. Entonces

$$
n^2-1=(n-1)(n+1)=4k(k+1).
$$

Y $k(k+1)$, producto de dos enteros consecutivos, es par, así que $4k(k+1)$ es divisible por $8$. $\square$

*(Para $n$ par, en cambio, $n^2-1$ es impar: la hipótesis "$n$ impar" es esencial.)*

**Ejemplo 2.** Racionalizar $\dfrac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}}$.

*La idea.* Multiplicar por el **conjugado** $\sqrt5+\sqrt3$ convierte el denominador en una diferencia de cuadrados, que ya no tiene raíces.

$$
\frac{\sqrt5+\sqrt3}{\sqrt5-\sqrt3}\cdot\frac{\sqrt5+\sqrt3}{\sqrt5+\sqrt3} = \frac{(\sqrt5+\sqrt3)^2}{(\sqrt5)^2-(\sqrt3)^2} = \frac{5+2\sqrt{15}+3}{5-3} = 4+\sqrt{15}.
$$

**Ejemplo 3.** Calcular $97^2-3^2$ mentalmente.

En vez de elevar al cuadrado, factorizamos: $97^2-3^2=(97-3)(97+3)=94\cdot100=9400$. $\square$

---

## Cubo del binomio

$$\boxed{(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3}$$

$$\boxed{(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3}$$

**Reorganizado:**

$$a^3+b^3 = (a+b)^3 - 3ab(a+b), \qquad a^3-b^3 = (a-b)^3 + 3ab(a-b).$$

---

## Suma y diferencia de cubos

$$\boxed{a^3+b^3 = (a+b)(a^2-ab+b^2)}$$

$$\boxed{a^3-b^3 = (a-b)(a^2+ab+b^2)}$$

**Cómo recordarlas.** La suma de cubos factoriza con $(a+b)$ y el trinomio $a^2-ab+b^2$; la diferencia con $(a-b)$ y $a^2+ab+b^2$. El signo del término medio del trinomio es siempre opuesto al signo de la fórmula original.

### Ejemplos

*La idea común.* Para usar la suma/diferencia de cubos hay que **reconocer cada término como un cubo perfecto** (incluyendo constantes: $27=3^3$, $8=2^3$); a veces el provecho está en la factorización (divisibilidad), a veces en el factor lineal $(a\pm b)$ que aparece.

**Ejemplo 1.** Factorizar $8x^3+27$.

Reconocemos cubos: $8x^3=(2x)^3$ y $27=3^3$. Por la suma de cubos,

$$
8x^3+27=(2x)^3+3^3=(2x+3)\big((2x)^2-(2x)(3)+3^2\big)=(2x+3)(4x^2-6x+9). \quad \square
$$

**Ejemplo 2.** Demostrar que $n^3-n$ es divisible por $6$ para todo entero $n$.

*La idea.* Sacar factor común y factorizar la diferencia de cuadrados deja $n^3-n$ como **producto de tres enteros consecutivos**, y entre tres consecutivos siempre hay un múltiplo de $2$ y uno de $3$.

$$
n^3-n = n(n^2-1) = (n-1)\,n\,(n+1).
$$

Entre tres consecutivos hay al menos un par y al menos un múltiplo de $3$, luego el producto es divisible por $2\cdot 3 = 6$. $\square$

---

## Factorización general: $a^n - b^n$

$$\boxed{a^n-b^n = (a-b)(a^{n-1}+a^{n-2}b+\cdots+ab^{n-2}+b^{n-1})}$$

Para $n$ impar, también:

$$a^n+b^n = (a+b)(a^{n-1}-a^{n-2}b+a^{n-3}b^2-\cdots+b^{n-1}).$$

**Consecuencia directa:** $(a-b)\mid (a^n-b^n)$ para todo $n\geq1$.

**En olimpiada:** Si $a\equiv b\pmod{m}$, entonces $m\mid (a-b)$, luego $m\mid(a^n-b^n)$.

### Ejemplo

**Demostrar que $100^{50}-1$ es divisible por $99$.**

*La idea.* La consecuencia $(a-b)\mid(a^n-b^n)$ se aplica eligiendo $a, b$ para que $a-b$ sea justo el divisor buscado. Aquí escribimos $1 = 1^{50}$ y tomamos $a=100$, $b=1$, de modo que $a-b=99$.

$$
100^{50}-1 = 100^{50}-1^{50} = (100-1)\big(100^{49}+100^{48}+\cdots+1\big) = 99\cdot(\ldots),
$$

luego $99\mid 100^{50}-1$. (El mismo argumento prueba la regla general: si $a\equiv b\pmod m$, entonces $m\mid a^n-b^n$.) $\square$

---

## Binomio al cuadrado con tres variables

$$\boxed{(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca}$$

**Reorganizado:** $a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca)$.

Esta es la relación entre la suma de cuadrados ($p_2$) y los simétricos elementales $e_1, e_2$ para tres variables.

---

## Cubo con tres variables

$$\boxed{(a+b+c)^3 = a^3+b^3+c^3+3(a+b)(b+c)(c+a)}$$

Una forma equivalente y muy útil:

$$a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca).$$

Nótese que $a^2+b^2+c^2-ab-bc-ca = \tfrac{1}{2}[(a-b)^2+(b-c)^2+(c-a)^2]\geq0$.

**Corolario.** $a^3+b^3+c^3\geq3abc$ para $a,b,c\geq0$, con igualdad si y solo si $a=b=c$ (o, en general, $a+b+c=0$).

### Ejemplo

**Si $a+b+c=0$, demostrar que $a^3+b^3+c^3=3abc$.**

*La idea.* La identidad $a^3+b^3+c^3-3abc=(a+b+c)(\cdots)$ tiene a $(a+b+c)$ como factor; cuando la hipótesis dice $a+b+c=0$, **todo el producto se anula** sin necesidad de tocar el otro factor.

$$
a^3+b^3+c^3-3abc=\underbrace{(a+b+c)}_{=\,0}\,(a^2+b^2+c^2-ab-bc-ca)=0,
$$

de donde $a^3+b^3+c^3=3abc$. $\square$

---

## Identidad de Sophie Germain

$$\boxed{a^4+4b^4 = (a^2+2b^2+2ab)(a^2+2b^2-2ab)}$$

**Demostración.** $a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$, diferencia de cuadrados. $\square$

**Uso principal.** Factorizar expresiones de la forma $n^4+4^k$ en problemas de divisibilidad. Por ejemplo, $n^4+4 = (n^2+2+2n)(n^2+2-2n)$ con $b=1$.

### Ejemplo

**Probar que $n^4+4$ es compuesto para todo entero $n>1$.**

*La idea.* Un número es compuesto si lo factorizas en dos factores, ambos mayores que $1$. La identidad de Sophie Germain (con $b=1$) da la factorización; solo falta comprobar que **ningún factor es $1$**.

Con $b=1$, $\;n^4+4 = (n^2+2n+2)(n^2-2n+2)$. Reescribimos cada factor completando el cuadrado:

$$
n^2-2n+2=(n-1)^2+1, \qquad n^2+2n+2=(n+1)^2+1.
$$

Para $n>1$, el menor factor cumple $(n-1)^2+1\geq 2 > 1$, y el otro es aún mayor. Como ambos factores superan a $1$, el número $n^4+4$ es compuesto. $\square$

---

## Otras identidades útiles

**Cuarto binomio cuadrado:**

$$a^2+b^2+c^2+d^2+ab+bc+cd+da+ac+bd = \frac{(a+b+c+d)^2+a^2+b^2+c^2+d^2}{2}.$$

(Menos memorizable; aparece en algunas olimpiadas.)

**Identidad de Fibonacci:**

$$(a^2+b^2)(c^2+d^2) = (ac-bd)^2+(ad+bc)^2 = (ac+bd)^2+(ad-bc)^2.$$

Demuestra que el producto de dos sumas de dos cuadrados es también suma de dos cuadrados.

**Identidad de Cauchy-Lagrange** (suma de cuadrados en dos dimensiones):

$$(a^2+b^2)(c^2+d^2) - (ac+bd)^2 = (ad-bc)^2.$$

(Caso $n=2$ de la identidad de Lagrange para Cauchy-Schwarz.)

---

## Tabla de identidades clave

| Identidad | Forma factorizada |
|---|---|
| $a^2-b^2$ | $(a-b)(a+b)$ |
| $a^3-b^3$ | $(a-b)(a^2+ab+b^2)$ |
| $a^3+b^3$ | $(a+b)(a^2-ab+b^2)$ |
| $a^n-b^n$ | $(a-b)(a^{n-1}+\cdots+b^{n-1})$ |
| $a^4+4b^4$ | $(a^2+2b^2+2ab)(a^2+2b^2-2ab)$ |
| $a^3+b^3+c^3-3abc$ | $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ |

---

## Estrategia: cómo identificar qué identidad usar

1. **¿Hay diferencia de cuadrados?** Busca $X^2-Y^2$ directamente o tras manipular.
2. **¿Hay suma/diferencia de cubos?** Busca $X^3\pm Y^3$ o completa el cubo.
3. **¿Hay $a^4+4b^4$?** Sophie Germain.
4. **¿Hay una suma cíclica simétrica con tres variables?** Probablemente aparece $a^3+b^3+c^3-3abc$.
5. **¿El problema pide factorizar algo de grado alto?** Prueba $a^n-b^n$ con el $b$ conveniente.

## Problemas relacionados

**Problema 1 (clásico).** Factorizar $x^6-y^6$ de dos formas (como diferencia de cuadrados y como diferencia de cubos) y deducir que $x^2+xy+y^2$ divide a $x^6-y^6$.

[[pista]]

$x^6-y^6$ es a la vez $(x^3)^2-(y^3)^2$ y $(x^2)^3-(y^2)^3$. Una de las factorizaciones hace aparecer $x^2+xy+y^2$.

[[/pista]]

[[solución]]

**Como diferencia de cuadrados** ($x^6 = (x^3)^2$):

$$
x^6-y^6 = (x^3-y^3)(x^3+y^3) = (x-y)(x^2+xy+y^2)\cdot(x+y)(x^2-xy+y^2).
$$

**Como diferencia de cubos** ($x^6 = (x^2)^3$):

$$
x^6-y^6 = (x^2-y^2)(x^4+x^2y^2+y^4) = (x-y)(x+y)(x^4+x^2y^2+y^4).
$$

En la primera factorización aparece explícitamente el factor $x^2+xy+y^2$, luego

$$
x^2+xy+y^2 \mid x^6-y^6. \qquad \blacksquare
$$

[[/solución]]

**Problema 2 (nivel OMG).** Demostrar que $n^4+4^n$ es compuesto para todo entero $n>1$.

[[pista]]

Separa por la paridad de $n$. Si $n$ es par, mira la paridad de $n^4+4^n$. Si $n$ es impar, escribe $4^n=4\cdot\big(2^{(n-1)/2}\big)^4$ y aplica Sophie Germain.

[[/pista]]

[[solución]]

**Caso $n$ par.** Entonces $n^4$ es par y $4^n$ es par, luego $n^4+4^n$ es par; y como $n>1$ es claramente mayor que $2$, es un par compuesto.

**Caso $n$ impar.** Como $n-1$ es par, $m=2^{(n-1)/2}$ es un entero, y

$$
4^n = 4\cdot 4^{\,n-1} = 4\cdot\big(2^{\,n-1}\big) = 4\cdot\big(2^{(n-1)/2}\big)^4 = 4m^4.
$$

Entonces $n^4+4^n = n^4+4m^4$, que por la identidad de Sophie Germain factoriza como

$$
n^4+4m^4 = (n^2+2m^2+2nm)(n^2+2m^2-2nm).
$$

El factor menor es $n^2+2m^2-2nm = (n-m)^2 + m^2 \geq m^2 \geq 1$; de hecho, para $n>1$ es $\geq 2$ (pues $m=2^{(n-1)/2}\geq 2$ salvo $n=1$). Ambos factores superan $1$, así que $n^4+4^n$ es compuesto. $\blacksquare$

[[/solución]]

**Problema 3 (iniciación).** Si $a+b=5$ y $ab=3$, calcular $a^2+b^2$, $a^3+b^3$ y $a^4+b^4$.

[[pista]]

Expresa cada potencia en términos de $s=a+b$ y $p=ab$: $a^2+b^2=s^2-2p$, $a^3+b^3=s^3-3ps$, $a^4+b^4=(a^2+b^2)^2-2p^2$.

[[/pista]]

[[solución]]

Con $s=a+b=5$ y $p=ab=3$:

$$
a^2+b^2 = (a+b)^2 - 2ab = 25 - 6 = 19.
$$
$$
a^3+b^3 = (a+b)^3 - 3ab(a+b) = 125 - 3\cdot 3\cdot 5 = 125 - 45 = 80.
$$
$$
a^4+b^4 = (a^2+b^2)^2 - 2(ab)^2 = 19^2 - 2\cdot 9 = 361 - 18 = 343.
$$

$\blacksquare$

[[/solución]]

**Problema 4 (iniciación).** Si $x+\dfrac{1}{x}=3$, calcular $x^2+\dfrac{1}{x^2}$ y $x^3+\dfrac{1}{x^3}$.

[[pista]]

Eleva $x+\frac1x$ al cuadrado y al cubo; los dobles/triples productos se simplifican porque $x\cdot\frac1x=1$.

[[/pista]]

[[solución]]

Elevando al cuadrado, $\left(x+\dfrac{1}{x}\right)^2 = x^2 + 2 + \dfrac{1}{x^2}$, luego

$$
x^2+\frac{1}{x^2} = \left(x+\frac1x\right)^2 - 2 = 9 - 2 = 7.
$$

Elevando al cubo, $\left(x+\dfrac1x\right)^3 = x^3 + 3\left(x+\dfrac1x\right) + \dfrac{1}{x^3}$, luego

$$
x^3+\frac{1}{x^3} = \left(x+\frac1x\right)^3 - 3\left(x+\frac1x\right) = 27 - 9 = 18.
$$

$\blacksquare$

[[/solución]]

**Problema 5 (clásico).** Demostrar que si $p>3$ es primo, entonces $p^2\equiv 1 \pmod{24}$.

[[pista]]

Factoriza $p^2-1=(p-1)(p+1)$. Como $p$ es impar y no múltiplo de $3$, mira la divisibilidad de ese producto por $8$ y por $3$.

[[/pista]]

[[solución]]

Basta probar que $24 = 8\cdot 3$ divide a $p^2-1 = (p-1)(p+1)$.

**Divisibilidad por $8$.** Como $p>3$ es primo, $p$ es impar, así que $p-1$ y $p+1$ son pares **consecutivos**; uno de ellos es múltiplo de $4$. Su producto es entonces divisible por $2\cdot 4 = 8$.

**Divisibilidad por $3$.** Entre los tres consecutivos $p-1,\ p,\ p+1$ hay un múltiplo de $3$. No puede ser $p$ (es primo $>3$), luego $3$ divide a $p-1$ o a $p+1$, y por tanto al producto.

Como $8\mid p^2-1$ y $3\mid p^2-1$ con $\gcd(8,3)=1$, se tiene $24\mid p^2-1$, es decir $p^2\equiv 1\pmod{24}$. $\blacksquare$

[[/solución]]
