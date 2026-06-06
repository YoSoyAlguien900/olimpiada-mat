---
title: "Desigualdades básicas: el cuadrado no negativo"
preview: "La desigualdad más simple y más usada del álgebra es $(a-b)^2\\geq0$. De ella se derivan AM-GM, $a^2+b^2\\geq ab$, la desigualdad triangular, y la técnica de SOS. Es el punto de partida de toda desigualdad olímpica."
dificultad: iniciacion
tags: [desigualdades, cuadrado-no-negativo, sos, valor-absoluto, basico]
prerequisites: [identidades-algebraicas]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Antes de aprender AM-GM, Cauchy-Schwarz o Jensen, hay una desigualdad que lo fundamenta todo: **un cuadrado real nunca es negativo**. Esta observación trivial, combinada con las identidades algebraicas, genera las herramientas más versátiles de las desigualdades olímpicas.

---

## El axioma de partida

Para todo número real $x$:

$$\boxed{x^2 \geq 0,}$$

con igualdad si y solo si $x = 0$.

Este hecho, junto con las propiedades de orden de $\mathbb{R}$ (suma e multiplicación preservan el orden para positivos), es la base de **todas** las desigualdades entre reales.

---

## Primera consecuencia: $a^2+b^2\geq2ab$

Para cualesquiera $a,b\in\mathbb{R}$:

$$(a-b)^2\geq0 \implies a^2-2ab+b^2\geq0 \implies \boxed{a^2+b^2\geq2ab.}$$

Igualdad iff $a=b$.

**Esto es AM-GM para dos variables:** si $a,b\geq0$, sustituir $a\to\sqrt{a}$, $b\to\sqrt{b}$:

$$a+b\geq2\sqrt{ab},$$

que es exactamente AM-GM.

**Variante útil.** Para $a,b>0$:

$$(a-b)^2\geq0 \implies a^2+b^2\geq2ab \implies \frac{a^2+b^2}{2}\geq ab \implies \frac{a}{b}+\frac{b}{a}\geq2.$$

### Ejemplos

**Ejemplo 1.** Para $x>0$, demostrar que $x+\dfrac{1}{x}\geq2$.

De $(\sqrt{x}-1/\sqrt{x})^2\geq0$: $x-2+1/x\geq0$, luego $x+1/x\geq2$. $\square$

**Ejemplo 2.** Para $a,b\in\mathbb{R}$, demostrar que $a^2+b^2+1\geq ab+a+b$.

$$a^2+b^2+1-ab-a-b = \tfrac12[(a-b)^2+(a-1)^2+(b-1)^2]\geq0. \;\square$$

*(Este es el primer ejemplo de la técnica SOS.)*

---

## Segunda consecuencia: desigualdad triangular

**Valor absoluto.** Para $x\in\mathbb{R}$:

$$|x| = \begin{cases}x & \text{si }x\geq0,\\ -x & \text{si }x<0.\end{cases}$$

Equivalentemente, $|x|=\sqrt{x^2}$.

**Propiedades básicas:**

| Propiedad | Enunciado |
|---|---|
| No negatividad | $\|x\|\geq0$, con igualdad iff $x=0$ |
| Multiplicativa | $\|ab\|=\|a\|\cdot\|b\|$ |
| Cuadrado | $x^2=\|x\|^2$ |
| Simétrica | $\|-x\|=\|x\|$ |
| Acotación | $-\|x\|\leq x\leq\|x\|$ |

**Desigualdad triangular:**

$$\boxed{|a+b|\leq|a|+|b|}$$

**Demostración.** $(|a+b|)^2=(a+b)^2=a^2+2ab+b^2\leq a^2+2|a||b|+b^2=(|a|+|b|)^2$. Como ambos lados son no negativos, tomando raíces: $|a+b|\leq|a|+|b|$. $\square$

**Desigualdad triangular inversa:**

$$\boxed{|a-b|\geq\big||a|-|b|\big|}$$

**Demostración.** $|a|=|(a-b)+b|\leq|a-b|+|b|$, luego $|a|-|b|\leq|a-b|$. Por simetría ($a\leftrightarrow b$): $|b|-|a|\leq|a-b|$. Las dos juntas dan $||a|-|b||\leq|a-b|$. $\square$

**Igualdad en la triangular.** $|a+b|=|a|+|b|$ iff $a$ y $b$ tienen el mismo signo (o alguno es $0$).

### Ejemplos

**Ejemplo 1.** Demostrar que para todo $x\in\mathbb{R}$: $|x-3|+|x-7|\geq4$.

$|x-3|+|x-7|=|x-3|+|7-x|\geq|(x-3)+(7-x)|=|4|=4.$ $\square$

**Ejemplo 2.** Demostrar que $||a|-|b||\leq|a-b|$.

*(Directamente de la desigualdad triangular inversa.)* $\square$

**Ejemplo 3.** ¿Para qué $x$ es $|2x-1|+|x+3|=|3x+2|$?

$|2x-1|+|x+3|\geq|(2x-1)+(x+3)|=|3x+2|$ siempre. Igualdad cuando $(2x-1)$ y $(x+3)$ tienen el mismo signo, es decir, cuando $2x-1\geq0$ y $x+3\geq0$, lo que da $x\geq1/2$. Para $-3\leq x<1/2$: $|2x-1|=1-2x$ y $|x+3|=x+3$, suma $4-x$; $|3x+2|$: verificar si $3x+2\geq0$ (iff $x\geq-2/3$). Para $x<-3$: $|2x-1|+|x+3|=1-2x-x-3=-3x-2$ y $|3x+2|=-3x-2$ ✓.

Así la igualdad ocurre para $x\geq1/2$ y para $x\leq-3$.

---

## Técnica: Sum of Squares (SOS) básico

**Idea.** Para demostrar $P(a,b,c)\geq0$, escribir $P$ explícitamente como suma de cuadrados con coeficientes no negativos:

$$P = \lambda_1(A_1)^2 + \lambda_2(A_2)^2 + \cdots, \quad \lambda_i\geq0.$$

Entonces $P\geq0$ es inmediato.

**Recetas básicas:**

$$2(a^2+b^2+c^2-ab-bc-ca) = (a-b)^2+(b-c)^2+(c-a)^2.$$

$$a^2+b^2+c^2-ab-bc-ca = \tfrac12[(a-b)^2+(b-c)^2+(c-a)^2].$$

Estas dos son las más usadas en olimpiada.

### Ejemplos de SOS

**Ejemplo 1.** Demostrar que $a^2+b^2+c^2\geq ab+bc+ca$ para todo $a,b,c\in\mathbb{R}$.

$$a^2+b^2+c^2-ab-bc-ca = \tfrac12[(a-b)^2+(b-c)^2+(c-a)^2]\geq0. \;\square$$

**Ejemplo 2.** Demostrar que $(a+b+c)^2\geq3(ab+bc+ca)$ para $a,b,c\in\mathbb{R}$.

Equivalente a $a^2+b^2+c^2\geq ab+bc+ca$ (expandir y simplificar). Por el Ejemplo 1. $\square$

**Ejemplo 3.** Demostrar que para $a,b,c>0$: $a^3+b^3+c^3-3abc\geq0$.

$$a^3+b^3+c^3-3abc=(a+b+c)\cdot\underbrace{\tfrac12[(a-b)^2+(b-c)^2+(c-a)^2]}_{\geq0}\geq0.$$

(Usando la identidad de la sección anterior.) $\square$

**Ejemplo 4.** Demostrar que $3(a^2b^2+b^2c^2+c^2a^2)\geq(abc)^{4/3}\cdot\text{algo}$... Mejor: demostrar que $a^4+b^4\geq a^3b+ab^3=ab(a^2+b^2)$.

$a^4+b^4-a^3b-ab^3=a^3(a-b)-b^3(a-b)=(a-b)(a^3-b^3)=(a-b)^2(a^2+ab+b^2)\geq0.$ $\square$

---

## Cómo demostrar $P\geq Q$ en la práctica

Hay tres estrategias básicas según el nivel:

| Estrategia | Cuándo | Cómo |
|---|---|---|
| SOS directo | $P-Q$ es un polinomio simétrico | Escribir como $\sum\lambda_i(\cdot)^2$ |
| Comparar con cuadrado | $P$ y $Q$ con raíces o productos | Comparar $P^2$ vs $Q^2$ (si ambos $\geq0$) |
| Reducir a caso conocido | Homogeneidad | Normalizar y aplicar identidad |

### Ejemplo de "comparar con cuadrado"

**Demostrar que $\sqrt{2} < \dfrac{3}{2}$.**

Equivalente (ambos $>0$) a $2 < 9/4 = 2.25$. ✓ $\square$

**Demostrar que $\sqrt{a}+\sqrt{b}\leq\sqrt{2(a+b)}$ para $a,b\geq0$.**

Elevar al cuadrado ambos lados (ambos $\geq0$): $a+2\sqrt{ab}+b\leq2a+2b$, es decir, $2\sqrt{ab}\leq a+b$. AM-GM. $\square$

---

## Desigualdades con valor absoluto frecuentes en olimpiada

**1.** $|x|\geq x$ y $|x|\geq -x$ para todo $x$.

**2.** $|x|\leq M \Leftrightarrow -M\leq x\leq M$ (para $M>0$).

**3.** $|x-a|<\varepsilon \Leftrightarrow a-\varepsilon<x<a+\varepsilon$ (entorno de $a$).

**4. Desigualdad $|a_1+\cdots+a_n|\leq|a_1|+\cdots+|a_n|$** (triangular general, por inducción).

**5. Para sumas:** si $|a_i|\leq M$ para todo $i$, entonces $|\sum a_i|\leq nM$.

### Ejemplo de olimpiada

**Hallar todos los enteros $n$ tales que $|n^2-10n+1|\leq10$.**

$n^2-10n+1=(n-5)^2-24$. La condición es $|(n-5)^2-24|\leq10$, es decir, $14\leq(n-5)^2\leq34$. Así $\sqrt{14}\approx3.74\leq|n-5|\leq\sqrt{34}\approx5.83$, luego $|n-5|\in\{4,5\}$ (enteros). Así $n-5\in\{-5,-4,4,5\}$, es decir, $n\in\{0,1,9,10\}$.

---

## Observación

**El cuadrado no negativo es la madre de todas las desigualdades.** AM-GM se prueba desde $(a-b)^2\geq0$; Cauchy-Schwarz se prueba desde $\sum(a_it-b_i)^2\geq0$; Jensen se prueba por inducción usando convexidad que viene de $f''\geq0$ (segunda derivada no negativa, otro cuadrado escondido).

**Las desigualdades absolutas se vuelven igualdades en un único punto.** Siempre que uses $(a-b)^2\geq0$, la igualdad es $a=b$. Buscar la condición de igualdad es siempre el último paso de una demostración de desigualdad.

**SOS básico cubre las desigualdades simétricas de grado $\leq4$ en tres variables.** Para grados mayores o expresiones asimétricas, se necesita AM-GM, Cauchy-Schwarz o Schur.

## Problemas relacionados

- **(Iniciación)** Para $a,b,c\in\mathbb{R}$, demostrar que $a^2+b^2+c^2+ab+bc+ca\geq0$.

- **(Iniciación)** Demostrar que $x^2+xy+y^2\geq0$ para todo $x,y\in\mathbb{R}$. *(Hint: $x^2+xy+y^2=(x+y/2)^2+3y^2/4$.)*

- **(Iniciación)** Para $a,b>0$, demostrar que $\dfrac{a^2+b^2}{2}\geq\left(\dfrac{a+b}{2}\right)^2$. (La varianza es no negativa.)

- **(Regional)** Para $a,b,c\in\mathbb{R}$, demostrar que $a^4+b^4+c^4\geq a^2b^2+b^2c^2+c^2a^2\geq a^2bc+ab^2c+abc^2=abc(a+b+c)$.

- **(Regional)** Demostrar que para $a,b,c>0$ con $a+b+c=1$: $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}\geq9$. *(Dos métodos: Cauchy-Schwarz, o multiplicar directamente por $abc$ y usar SOS.)*

- **(Clásico)** Usando solo $(x-y)^2\geq0$ repetidamente, demostrar AM-GM para $n=4$: $\frac{a+b+c+d}{4}\geq(abcd)^{1/4}$. *(Hint: aplicar AM-GM para $n=2$ dos veces a parejas, luego a los resultados.)*
