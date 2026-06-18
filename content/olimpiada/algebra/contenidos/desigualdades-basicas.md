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

*La idea común.* Toda desigualdad de esta sección se reduce a **construir el cuadrado adecuado** y exigir que sea $\geq 0$. El arte está en adivinar qué cuadrado: lo que se anula en el punto de igualdad.

**Ejemplo 1.** Para $x>0$, demostrar que $x+\dfrac{1}{x}\geq2$.

*La idea.* La igualdad ocurre en $x = 1$, donde $\sqrt x = 1/\sqrt x$. Eso sugiere partir del cuadrado $(\sqrt x - 1/\sqrt x)^2$.

$$
\left(\sqrt{x}-\frac{1}{\sqrt{x}}\right)^2 \geq 0 \implies x - 2 + \frac{1}{x} \geq 0 \implies x + \frac{1}{x} \geq 2. \quad \square
$$

**Ejemplo 2.** Para $a,b\in\mathbb{R}$, demostrar que $a^2+b^2+1\geq ab+a+b$.

*La idea.* La igualdad se da en $a = b = 1$. Buscamos cuadrados que se anulen ahí: $(a-b)$, $(a-1)$, $(b-1)$. Al duplicar la diferencia, encajan exactamente.

$$
a^2+b^2+1-ab-a-b = \tfrac12\left[(a-b)^2+(a-1)^2+(b-1)^2\right]\geq0. \quad \square
$$

*(Es el primer ejemplo de la técnica SOS, que formalizamos más abajo.)*

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

*La idea común.* La desigualdad triangular $|u| + |v| \geq |u + v|$ se aprovecha de dos formas: para **acotar por abajo** una suma de valores absolutos, y al revés, recordando que la **igualdad** ocurre justo cuando $u$ y $v$ tienen el mismo signo.

**Ejemplo 1.** Demostrar que $|x-3|+|x-7|\geq4$ para todo $x\in\mathbb{R}$.

*La idea.* Elegimos los signos para que, al sumar dentro del valor absoluto, la $x$ se cancele y quede una constante. Por eso escribimos $|x-7| = |7-x|$.

$$
|x-3|+|x-7| = |x-3|+|7-x| \geq |(x-3)+(7-x)| = |4| = 4. \quad \square
$$

**Ejemplo 2.** Demostrar que $\big||a|-|b|\big|\leq|a-b|$.

Es exactamente la desigualdad triangular inversa, demostrada arriba. $\square$

**Ejemplo 3.** ¿Para qué $x$ se cumple $|2x-1|+|x+3|=|3x+2|$?

*La idea.* No hay que abrir casos a ciegas: como $(2x-1)+(x+3) = 3x+2$, la igualdad es justo el **caso de igualdad** de la desigualdad triangular $|u|+|v| \geq |u+v|$, que ocurre cuando $u$ y $v$ tienen el **mismo signo** (o alguno es $0$).

Con $u = 2x-1$ y $v = x+3$, pedimos que ambos tengan el mismo signo:

- **Ambos $\geq 0$:** $2x-1\geq0$ y $x+3\geq0 \iff x\geq\tfrac12$.
- **Ambos $\leq 0$:** $2x-1\leq0$ y $x+3\leq0 \iff x\leq\tfrac12$ y $x\leq-3 \iff x\leq-3$.

Por tanto la igualdad se cumple exactamente para $x\geq\tfrac12$ o $x\leq-3$. $\square$

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

*La idea común.* En SOS no se "adivina" el resultado: se **reescribe** la diferencia $P - Q$ como una combinación de cuadrados con coeficientes $\geq 0$. Si se consigue, la desigualdad queda demostrada de un golpe, y los cuadrados que se anulan marcan el caso de igualdad.

**Ejemplo 1.** Demostrar que $a^2+b^2+c^2\geq ab+bc+ca$ para todo $a,b,c\in\mathbb{R}$.

Es la receta básica de arriba aplicada literalmente:

$$
a^2+b^2+c^2-ab-bc-ca = \tfrac12\left[(a-b)^2+(b-c)^2+(c-a)^2\right]\geq0. \quad \square
$$

**Ejemplo 2.** Demostrar que $(a+b+c)^2\geq3(ab+bc+ca)$ para $a,b,c\in\mathbb{R}$.

*La idea.* Al desarrollar el cuadrado aparece $a^2+b^2+c^2$ más dobles productos; restando $3(ab+bc+ca)$ se reduce al ejemplo anterior:

$$
(a+b+c)^2 - 3(ab+bc+ca) = a^2+b^2+c^2 - ab-bc-ca \geq 0. \quad \square
$$

**Ejemplo 3.** Demostrar que $a^3+b^3+c^3\geq 3abc$ para $a,b,c>0$.

*La idea.* La identidad de factorización separa el signo: $a^3+b^3+c^3-3abc$ se parte en un factor positivo $(a+b+c)$ por la suma de cuadrados del Ejemplo 1.

$$
a^3+b^3+c^3-3abc=(a+b+c)\cdot\underbrace{\tfrac12\left[(a-b)^2+(b-c)^2+(c-a)^2\right]}_{\geq0}\geq0. \quad \square
$$

**Ejemplo 4.** Demostrar que $a^4+b^4\geq a^3b+ab^3$ para todo $a,b\in\mathbb{R}$.

*La idea.* Agrupamos $a^4 - a^3 b$ y $b^4 - ab^3$ para sacar factor común $(a-b)$; el factor restante resulta ser otro cuadrado-positivo.

$$
a^4+b^4-a^3b-ab^3 = a^3(a-b)-b^3(a-b) = (a-b)(a^3-b^3) = (a-b)^2(a^2+ab+b^2)\geq0,
$$

donde $a^2+ab+b^2 = \left(a+\tfrac{b}{2}\right)^2 + \tfrac{3b^2}{4} \geq 0$. $\square$

---

## Cómo demostrar $P\geq Q$ en la práctica

Hay tres estrategias básicas según el nivel:

| Estrategia | Cuándo | Cómo |
|---|---|---|
| SOS directo | $P-Q$ es un polinomio simétrico | Escribir como $\sum\lambda_i(\cdot)^2$ |
| Comparar con cuadrado | $P$ y $Q$ con raíces o productos | Comparar $P^2$ vs $Q^2$ (si ambos $\geq0$) |
| Reducir a caso conocido | Homogeneidad | Normalizar y aplicar identidad |

### Ejemplo de "comparar con cuadrado"

*La idea común.* Cuando aparecen raíces, compararlas directamente es incómodo; pero si **ambos lados son no negativos**, elevar al cuadrado preserva la desigualdad y suele dejar algo polinómico y conocido.

**Demostrar que $\sqrt{2} < \dfrac{3}{2}$.**

Ambos lados son positivos, así que basta comparar sus cuadrados: $2 < \dfrac{9}{4} = 2{,}25$. ✓ $\square$

**Demostrar que $\sqrt{a}+\sqrt{b}\leq\sqrt{2(a+b)}$ para $a,b\geq0$.**

Ambos lados son $\geq 0$; elevamos al cuadrado:

$$
a + 2\sqrt{ab} + b \leq 2a + 2b \iff 2\sqrt{ab} \leq a + b,
$$

que es AM-GM. Al ser una cadena de equivalencias entre cantidades no negativas, la desigualdad original queda probada. $\square$

---

## Desigualdades con valor absoluto frecuentes en olimpiada

**1.** $|x|\geq x$ y $|x|\geq -x$ para todo $x$.

**2.** $|x|\leq M \Leftrightarrow -M\leq x\leq M$ (para $M>0$).

**3.** $|x-a|<\varepsilon \Leftrightarrow a-\varepsilon<x<a+\varepsilon$ (entorno de $a$).

**4. Desigualdad $|a_1+\cdots+a_n|\leq|a_1|+\cdots+|a_n|$** (triangular general, por inducción).

**5. Para sumas:** si $|a_i|\leq M$ para todo $i$, entonces $|\sum a_i|\leq nM$.

### Ejemplo de olimpiada

**Hallar todos los enteros $n$ tales que $|n^2-10n+1|\leq10$.**

*La idea.* Completar el cuadrado convierte el polinomio en algo que solo depende de $(n-5)^2$; entonces la condición con valor absoluto se vuelve una **doble acotación** sobre $(n-5)^2$, fácil de resolver en enteros.

Completando el cuadrado, $n^2-10n+1=(n-5)^2-24$. La condición $|(n-5)^2-24|\leq10$ equivale a

$$
-10 \leq (n-5)^2 - 24 \leq 10 \iff 14\leq(n-5)^2\leq34.
$$

Como $(n-5)^2$ es un cuadrado entero entre $14$ y $34$, los únicos valores posibles son $16$ y $25$, es decir $|n-5|\in\{4,5\}$. Entonces $n-5\in\{-5,-4,4,5\}$, o sea $\boxed{n\in\{0,1,9,10\}}$. $\square$

---

## Observación

**El cuadrado no negativo es la madre de todas las desigualdades.** AM-GM se prueba desde $(a-b)^2\geq0$; Cauchy-Schwarz se prueba desde $\sum(a_it-b_i)^2\geq0$; Jensen se prueba por inducción usando convexidad que viene de $f''\geq0$ (segunda derivada no negativa, otro cuadrado escondido).

**Las desigualdades absolutas se vuelven igualdades en un único punto.** Siempre que uses $(a-b)^2\geq0$, la igualdad es $a=b$. Buscar la condición de igualdad es siempre el último paso de una demostración de desigualdad.

**SOS básico cubre las desigualdades simétricas de grado $\leq4$ en tres variables.** Para grados mayores o expresiones asimétricas, se necesita AM-GM, Cauchy-Schwarz o Schur.

## Problemas relacionados

**Problema 1 (iniciación).** Para $a,b,c\in\mathbb{R}$, demostrar que $a^2+b^2+c^2+ab+bc+ca\geq0$.

[[pista]]

Duplica la expresión y busca cuadrados de **sumas**: $(a+b)^2 + (b+c)^2 + (c+a)^2$.

[[/pista]]

[[solución]]

Multiplicamos por $2$ y reconocemos tres cuadrados:

$$
2(a^2+b^2+c^2+ab+bc+ca) = (a+b)^2 + (b+c)^2 + (c+a)^2 \geq 0,
$$

ya que al desarrollar la derecha sale $2a^2+2b^2+2c^2+2ab+2bc+2ca$. Como el doble de la expresión es $\geq 0$, también lo es la expresión. $\blacksquare$

[[/solución]]

**Problema 2 (iniciación).** Demostrar que $x^2+xy+y^2\geq0$ para todo $x,y\in\mathbb{R}$.

[[pista]]

Completa el cuadrado en $x$, tratando $y$ como constante.

[[/pista]]

[[solución]]

Completamos el cuadrado en $x$:

$$
x^2 + xy + y^2 = \left(x + \frac{y}{2}\right)^2 + y^2 - \frac{y^2}{4} = \left(x + \frac{y}{2}\right)^2 + \frac{3y^2}{4}.
$$

Es suma de dos cuadrados (uno con coeficiente $\tfrac34 > 0$), luego $\geq 0$. La igualdad exige $x + y/2 = 0$ y $y = 0$, es decir $x = y = 0$. $\blacksquare$

[[/solución]]

**Problema 3 (iniciación).** Para $a,b>0$, demostrar que $\dfrac{a^2+b^2}{2}\geq\left(\dfrac{a+b}{2}\right)^2$.

[[pista]]

Pasa todo a un lado; lo que sobra es un múltiplo de $(a-b)^2$. (Es decir: la media de los cuadrados $\geq$ el cuadrado de la media.)

[[/pista]]

[[solución]]

Restamos y simplificamos:

$$
\frac{a^2+b^2}{2} - \left(\frac{a+b}{2}\right)^2 = \frac{2(a^2+b^2) - (a+b)^2}{4} = \frac{a^2 - 2ab + b^2}{4} = \frac{(a-b)^2}{4} \geq 0.
$$

Luego $\dfrac{a^2+b^2}{2}\geq\left(\dfrac{a+b}{2}\right)^2$, con igualdad si $a = b$. (Es la afirmación de que la varianza de dos números es no negativa.) $\blacksquare$

[[/solución]]

**Problema 4 (regional).** Para $a,b,c\in\mathbb{R}$, demostrar la cadena

$$
a^4+b^4+c^4\geq a^2b^2+b^2c^2+c^2a^2\geq abc(a+b+c).
$$

[[pista]]

Las **dos** desigualdades son la misma receta $x^2+y^2+z^2\geq xy+yz+zx$: en la primera con $x=a^2,y=b^2,z=c^2$; en la segunda con $x=ab,y=bc,z=ca$.

[[/pista]]

[[solución]]

Usamos dos veces la desigualdad $x^2+y^2+z^2 \geq xy+yz+zx$ (que es $\tfrac12[(x-y)^2+(y-z)^2+(z-x)^2]\geq0$).

**Primera desigualdad:** con $x=a^2,\ y=b^2,\ z=c^2$,

$$
a^4+b^4+c^4 \geq a^2b^2+b^2c^2+c^2a^2.
$$

**Segunda desigualdad:** con $x=ab,\ y=bc,\ z=ca$,

$$
a^2b^2+b^2c^2+c^2a^2 \geq (ab)(bc)+(bc)(ca)+(ca)(ab) = ab^2c+bc^2a+ca^2b = abc(a+b+c).
$$

Encadenando ambas se obtiene el resultado. $\blacksquare$

[[/solución]]

**Problema 5 (regional).** Demostrar que para $a,b,c>0$ con $a+b+c=1$ se cumple $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}\geq9$.

[[pista]]

Multiplica $\frac1a+\frac1b+\frac1c$ por $a+b+c=1$ (no lo cambia) y usa $(a+b+c)\left(\frac1a+\frac1b+\frac1c\right)\geq 9$.

[[/pista]]

[[solución]]

Como $a+b+c=1$, multiplicar por esa suma no altera nada:

$$
\frac1a+\frac1b+\frac1c = (a+b+c)\left(\frac1a+\frac1b+\frac1c\right).
$$

Desarrollando el producto y agrupando los pares de términos cruzados:

$$
(a+b+c)\left(\frac1a+\frac1b+\frac1c\right) = 3 + \left(\frac{a}{b}+\frac{b}{a}\right) + \left(\frac{b}{c}+\frac{c}{b}\right) + \left(\frac{c}{a}+\frac{a}{c}\right).
$$

Cada paréntesis es $\geq 2$ (pues $\frac{x}{y}+\frac{y}{x}\geq 2$ por ser $(\sqrt{x/y}-\sqrt{y/x})^2\geq0$), así que el total es $\geq 3 + 2 + 2 + 2 = 9$. Igualdad cuando $a=b=c=\tfrac13$. $\blacksquare$

[[/solución]]

**Problema 6 (clásico).** Usando solo $(x-y)^2\geq0$ repetidamente, demostrar AM-GM para $n=4$:

$$
\frac{a+b+c+d}{4}\geq\sqrt[4]{abcd}, \qquad a,b,c,d>0.
$$

[[pista]]

Aplica AM-GM de dos términos a la pareja $(a,b)$ y a la pareja $(c,d)$, y luego otra vez a los dos resultados.

[[/pista]]

[[solución]]

Partimos de la AM-GM de dos términos $\dfrac{x+y}{2}\geq\sqrt{xy}$ (que es $(\sqrt x-\sqrt y)^2\geq0$). La aplicamos a cada pareja:

$$
\frac{a+b}{2}\geq\sqrt{ab}, \qquad \frac{c+d}{2}\geq\sqrt{cd}.
$$

Promediando estas dos y aplicando una vez más la AM-GM de dos términos a $\sqrt{ab}$ y $\sqrt{cd}$:

$$
\frac{a+b+c+d}{4} = \frac{1}{2}\left(\frac{a+b}{2}+\frac{c+d}{2}\right) \geq \frac{\sqrt{ab}+\sqrt{cd}}{2} \geq \sqrt{\sqrt{ab}\cdot\sqrt{cd}} = \sqrt[4]{abcd}.
$$

Igualdad cuando $a=b$, $c=d$ y $\sqrt{ab}=\sqrt{cd}$, es decir $a=b=c=d$. $\blacksquare$

[[/solución]]
