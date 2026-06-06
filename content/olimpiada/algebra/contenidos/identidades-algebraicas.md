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

$$x^2-6x+10 = (x-3)^2+1 \geq 1 > 0. \;\square$$

---

## Diferencia de cuadrados

$$\boxed{a^2 - b^2 = (a-b)(a+b)}$$

Es la identidad de factorización más usada. En olimpiada aparece al factorizar números, al simplificar radicales, y al demostrar divisibilidad.

### Ejemplos

**Ejemplo 1.** Demostrar que $n^2-1=(n-1)(n+1)$ es par para todo entero $n$.

Si $n$ es par: $n-1$ y $n+1$ son impares, pero su producto se analiza como sigue. Si $n$ es impar: $n-1$ y $n+1$ son ambos pares, luego $(n-1)(n+1)$ es divisible por $4$. En cualquier caso es par. $\square$

**Ejemplo 2.** Simplificar $\dfrac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}}$.

Multiplicar arriba y abajo por $\sqrt{5}+\sqrt{3}$:

$$\frac{(\sqrt5+\sqrt3)^2}{(\sqrt5)^2-(\sqrt3)^2} = \frac{5+2\sqrt{15}+3}{2} = 4+\sqrt{15}.$$

**Ejemplo 3.** Probar que $97^2-3^2=94\cdot100=9400$.

$97^2-3^2=(97-3)(97+3)=94\cdot100$. (Útil para cálculo mental.)

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

**Ejemplo 1.** Factorizar $8x^3+27$.

$8x^3+27=(2x)^3+3^3=(2x+3)(4x^2-6x+9).$ $\square$

**Ejemplo 2.** Demostrar que $n^3-n = (n-1)n(n+1)$ es divisible por $6$ para todo entero $n$.

$n^3-n=(n-1)n(n+1)$: producto de tres consecutivos. Entre tres consecutivos hay al menos un par y uno divisible por $3$, luego el producto es divisible por $2\cdot3=6$. $\square$

---

## Factorización general: $a^n - b^n$

$$\boxed{a^n-b^n = (a-b)(a^{n-1}+a^{n-2}b+\cdots+ab^{n-2}+b^{n-1})}$$

Para $n$ impar, también:

$$a^n+b^n = (a+b)(a^{n-1}-a^{n-2}b+a^{n-3}b^2-\cdots+b^{n-1}).$$

**Consecuencia directa:** $(a-b)\mid (a^n-b^n)$ para todo $n\geq1$.

**En olimpiada:** Si $a\equiv b\pmod{m}$, entonces $m\mid (a-b)$, luego $m\mid(a^n-b^n)$.

### Ejemplo

**Demostrar que $3^{100}-1$ es divisible por $2$.**

$3^{100}-1^{100}=(3-1)(\ldots)=2\cdot(\ldots)$. $\square$ (Trivial. Con $n=2$: $9-1=8=2^3$; con $n=3$: $27-1=26=2\cdot13$.)

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

**Corolario.** $a^3+b^3+c^3\geq3abc$ para $a,b,c\geq0$, con igualdad iff $a=b=c$ o $a+b+c=0$.

### Ejemplo

**Si $a+b+c=0$, demostrar que $a^3+b^3+c^3=3abc$.**

De la identidad: $a^3+b^3+c^3-3abc=(a+b+c)(\ldots)=0\cdot(\ldots)=0$. $\square$

---

## Identidad de Sophie Germain

$$\boxed{a^4+4b^4 = (a^2+2b^2+2ab)(a^2+2b^2-2ab)}$$

**Demostración.** $a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$, diferencia de cuadrados. $\square$

**Uso principal.** Factorizar expresiones de la forma $n^4+4^k$ en problemas de divisibilidad. Por ejemplo, $n^4+4 = (n^2+2+2n)(n^2+2-2n)$ con $b=1$.

### Ejemplo

**Probar que $n^4+4$ es compuesto para todo entero $n>1$.**

$n^4+4 = (n^2+2n+2)(n^2-2n+2)$. Para $n>1$: $n^2-2n+2=(n-1)^2+1\geq2$ y $n^2+2n+2=(n+1)^2+1>n^2-2n+2$. Ambos factores son $>1$. $\square$

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

- **(Clásico)** Factorizar $x^6-y^6$ de dos formas distintas (como diferencia de cuadrados y como diferencia de cubos). Deducir que $x^2+xy+y^2$ divide a $x^6-y^6$.

- **(OMG-nivel)** Demostrar que $n^4+4^n$ es compuesto para todo entero $n>1$. *(Hint: si $n$ es par, es divisible por $4$; si $n$ es impar, usar Sophie Germain con $n^4+4\cdot(2^{(n-1)/2})^4$.)*

- **(Iniciación)** Si $a+b=5$ y $ab=3$, calcular: $a^2+b^2$, $a^3+b^3$, $a^4+b^4$.

- **(Iniciación)** Si $x+1/x=3$, calcular $x^2+1/x^2$ y $x^3+1/x^3$. *(Usar las identidades del binomio.)*

- **(Clásico)** Demostrar que si $p>3$ es primo, entonces $p^2\equiv1\pmod{24}$. *(Hint: $p^2-1=(p-1)(p+1)$; entre $p-1$ y $p+1$ hay dos consecutivos pares y uno divisible por $3$.)*
