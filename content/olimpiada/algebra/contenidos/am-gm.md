---
title: "Desigualdad AM-GM"
preview: "Para reales positivos, la media aritmética nunca es menor que la geométrica: $\\frac{a_1+\\cdots+a_n}{n}\\geq\\sqrt[n]{a_1\\cdots a_n}$. Una de las herramientas más versátiles de toda la olimpiada."
dificultad: iniciacion
tags: [desigualdades, am-gm, optimizacion, fundamental]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad AM-GM (Aritmético-Geométrica) establece que, para reales positivos, la media aritmética siempre supera o iguala a la media geométrica. Es la primera desigualdad que debe dominar cualquier olímpico: aparece en todos los niveles, desde problemas de iniciación hasta el IMO.

## Enunciado

**Caso $n = 2$.** Para $a, b > 0$:

$$\frac{a + b}{2} \;\geq\; \sqrt{ab},$$

con igualdad si y solo si $a = b$.

**Caso general.** Para $a_1, a_2, \ldots, a_n > 0$:

$$\frac{a_1 + a_2 + \cdots + a_n}{n} \;\geq\; \sqrt[n]{a_1 a_2 \cdots a_n},$$

con igualdad si y solo si $a_1 = a_2 = \cdots = a_n$.

**Forma ponderada.** Para $a_i > 0$ y pesos $w_i > 0$ con $\sum w_i = 1$:

$$w_1 a_1 + w_2 a_2 + \cdots + w_n a_n \;\geq\; a_1^{w_1} a_2^{w_2} \cdots a_n^{w_n}.$$

## Demostración (caso $n = 2$)

La demostración más corta parte de que el cuadrado de cualquier real es no negativo:

$$0 \;\leq\; (\sqrt{a} - \sqrt{b})^2 \;=\; a - 2\sqrt{ab} + b.$$

Reorganizando: $a + b \geq 2\sqrt{ab}$, es decir, $\dfrac{a+b}{2} \geq \sqrt{ab}$. $\blacksquare$

La igualdad se da exactamente cuando $\sqrt{a} = \sqrt{b}$, es decir, cuando $a = b$.

Para $n = 3$: equivalentemente $(a+b+c)^3 \geq 27abc$, que se demuestra por la desigualdad del caso $n=2$ aplicada iterativamente (ver el archivo de demostraciones para la versión general por inducción de Cauchy).

## Ejemplo

### Básicos

**Ejemplo 1.** Probar que $x + \dfrac{1}{x} \geq 2$ para todo $x > 0$.

Por AM-GM con $a = x$ y $b = 1/x$:

$$x + \frac{1}{x} \;=\; a + b \;\geq\; 2\sqrt{ab} \;=\; 2\sqrt{x \cdot \frac{1}{x}} \;=\; 2.$$

Igualdad si y solo si $x = 1/x$, es decir, $x = 1$. $\square$

---

**Ejemplo 2.** Para $a, b > 0$, probar que $a^2 + b^2 \geq 2ab$.

Por AM-GM: $\dfrac{a^2 + b^2}{2} \geq \sqrt{a^2 b^2} = ab$. $\square$

---

**Ejemplo 3.** Para $a, b, c > 0$, probar que $a^2 + b^2 + c^2 \geq ab + bc + ca$.

Usamos AM-GM tres veces:

$$a^2 + b^2 \geq 2ab, \quad b^2 + c^2 \geq 2bc, \quad c^2 + a^2 \geq 2ca.$$

Sumando y dividiendo entre $2$: $a^2 + b^2 + c^2 \geq ab + bc + ca$. $\square$

### Optimización bajo restricciones

**Ejemplo 4.** Hallar el valor máximo de $xy$ dados $x, y > 0$ con $x + y = s$ fijo.

Por AM-GM: $s = x + y \geq 2\sqrt{xy}$, así $\sqrt{xy} \leq s/2$ y $xy \leq s^2/4$.

El máximo $s^2/4$ se alcanza cuando $x = y = s/2$. $\square$

---

**Ejemplo 5.** Dados $x, y, z > 0$ con $xyz = 1$, hallar el mínimo de $x + y + z$.

Por AM-GM: $\dfrac{x+y+z}{3} \geq \sqrt[3]{xyz} = 1$, así $x + y + z \geq 3$.

El mínimo $3$ se alcanza cuando $x = y = z = 1$. $\square$

---

**Ejemplo 6.** Mínimo de $f(x) = \dfrac{x^2 + 2}{x}$ para $x > 0$.

$$f(x) = x + \frac{2}{x} \;\geq\; 2\sqrt{x \cdot \frac{2}{x}} \;=\; 2\sqrt{2}.$$

Igualdad cuando $x = 2/x$, es decir, $x = \sqrt{2}$. Mínimo: $2\sqrt{2}$. $\square$

### Desigualdades simétricas

**Ejemplo 7.** Para $a, b, c > 0$, probar que

$$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \;\geq\; 3.$$

Por AM-GM con tres términos: $\dfrac{a}{b} + \dfrac{b}{c} + \dfrac{c}{a} \geq 3\sqrt[3]{\dfrac{a}{b} \cdot \dfrac{b}{c} \cdot \dfrac{c}{a}} = 3\sqrt[3]{1} = 3$. $\square$

---

**Ejemplo 8.** Dado $a + b + c = 1$ con $a, b, c > 0$, probar que $(1-a)(1-b)(1-c) \geq 8abc$.

Observa que $1 - a = b + c$, $1 - b = c + a$, $1-c = a+b$. Por AM-GM:

$$b + c \geq 2\sqrt{bc}, \quad c + a \geq 2\sqrt{ca}, \quad a + b \geq 2\sqrt{ab}.$$

Multiplicando: $(b+c)(c+a)(a+b) \geq 8\sqrt{bc}\sqrt{ca}\sqrt{ab} = 8abc$. $\square$

## Aplicaciones

**1. Optimización con producto fijo o suma fija.** Si el producto $a_1 \cdots a_n = P$ es fijo, la suma $a_1+\cdots+a_n$ es mínima cuando todos son iguales: $a_i = P^{1/n}$. Y si la suma es fija, el producto es máximo cuando todos son iguales.

**2. Minorizar denominadores.** Para probar que una suma de fracciones es $\geq c$, a veces conviene aplicar AM-GM en el denominador para simplificar.

**3. Desigualdades cíclicas de grado homogéneo.** En desigualdades como $\sum a^2/b \geq \sum a$, la técnica estándar es agrupar términos y aplicar AM-GM a cada grupo.

**4. Ingeniería de términos.** Para maximizar el uso de AM-GM, a veces conviene escribir un término como suma de varios iguales. Por ejemplo, $\frac{a^3}{3} + \frac{a^3}{3} + \frac{a^3}{3} + b^3 \geq 4 \cdot \sqrt[4]{\frac{a^9 b^3}{27}}$ — la igualdad se calibra para que los tres sumandos coincidan con el cuarto.

## Observación

**El error más común: no verificar positividad.** AM-GM requiere que todos los términos sean **estrictamente positivos**. La desigualdad $\dfrac{a+b}{2}\geq\sqrt{ab}$ no tiene sentido si $a$ o $b$ son negativos (la raíz deja de ser real). En problemas donde las variables pueden ser negativas, hay que justificar la positividad antes de aplicar AM-GM, o usar otra desigualdad.

**La condición de igualdad es información.** Siempre que se aplica AM-GM y se afirma que se alcanza la igualdad, hay que verificar que la condición ($a_1=a_2=\cdots=a_n$) es compatible con el resto de las restricciones del problema. Si no es compatible, la igualdad nunca se alcanza y la cota es estricta.

**AM-GM ponderada para exponentes naturales.** La forma ponderada con pesos racionales se reduce a la versión ordinaria: basta repetir cada $a_i$ tantas veces como indica el numerador del peso. Por ejemplo, con pesos $1/3$ y $2/3$ sobre $a$ y $b$: $\frac{a}{3}+\frac{2b}{3}\geq a^{1/3}b^{2/3}$ equivale a AM-GM sobre $\{a/3, b/3, b/3\}$... no directamente, pero sí vía la desigualdad $a+b+b\geq3\sqrt[3]{ab^2}$.

## Problemas relacionados

- **(Clásico)** Para $a, b > 0$, probar que $\dfrac{a^2}{b} + \dfrac{b^2}{a} \geq a + b$.

- **(Clásico)** Hallar el mínimo de $\left(a+\dfrac{1}{b}\right)\left(b+\dfrac{1}{c}\right)\left(c+\dfrac{1}{a}\right)$ para $a,b,c>0$.

- **(Clásico)** Dados $a,b,c>0$ con $a+b+c=3$, probar que $a^2b+b^2c+c^2a\leq4$.

- **(OMG-nivel)** Para $a,b,c>0$ con $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=3$, demostrar que $\dfrac{1}{a^2}+\dfrac{1}{b^2}+\dfrac{1}{c^2}\geq\dfrac{a^2+b^2+c^2}{9}$.

- **(Clásico)** Probar que para $n$ entero positivo y $x_1,\ldots,x_n>0$:
$$(x_1+x_2+\cdots+x_n)\left(\frac{1}{x_1}+\frac{1}{x_2}+\cdots+\frac{1}{x_n}\right)\geq n^2.$$
