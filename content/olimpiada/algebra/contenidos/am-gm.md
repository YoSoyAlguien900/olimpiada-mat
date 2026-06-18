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

Para $n = 3$, la desigualdad equivale a $(a+b+c)^3 \geq 27abc$ y se deduce aplicando el caso $n = 2$ de forma iterada. La versión general, válida para todo $n$, se demuestra por la inducción de Cauchy (ver el archivo de demostraciones).

## Ejemplo

### Básicos

*La idea común.* El arte de aplicar AM-GM está en **elegir bien los términos**: se buscan $a, b$ (o $a_1, \ldots, a_n$) cuyo **producto se simplifique** a una constante. Entonces la media geométrica es un número concreto y AM-GM da la cota directamente.

**Ejemplo 1.** Probar que $x + \dfrac{1}{x} \geq 2$ para todo $x > 0$.

*La idea.* Elegimos $a = x$ y $b = 1/x$ justamente porque su producto $ab = 1$ es constante.

Por AM-GM,

$$x + \frac{1}{x} = a + b \geq 2\sqrt{ab} = 2\sqrt{x \cdot \tfrac{1}{x}} = 2.$$

Igualdad si y solo si $x = 1/x$, es decir $x = 1$. $\square$

---

**Ejemplo 2.** Para $a, b > 0$, probar que $a^2 + b^2 \geq 2ab$.

Aplicamos AM-GM a $a^2$ y $b^2$ (su producto $a^2 b^2$ es un cuadrado perfecto):

$$\frac{a^2 + b^2}{2} \geq \sqrt{a^2 b^2} = ab. \qquad \square$$

---

**Ejemplo 3.** Para $a, b, c > 0$, probar que $a^2 + b^2 + c^2 \geq ab + bc + ca$.

*La idea.* El lado derecho son tres productos $ab, bc, ca$; cada uno se acota con la pareja de cuadrados correspondiente y luego se suma.

$$a^2 + b^2 \geq 2ab, \quad b^2 + c^2 \geq 2bc, \quad c^2 + a^2 \geq 2ca.$$

Sumando las tres y dividiendo entre $2$: $a^2 + b^2 + c^2 \geq ab + bc + ca$. $\square$

### Optimización bajo restricciones

*La idea común.* AM-GM relaciona **suma** y **producto**: si una es fija, acota la otra, y el óptimo se alcanza justo en la igualdad (todas las variables iguales). Es la forma más rápida de optimizar sin derivadas.

**Ejemplo 4.** Hallar el valor máximo de $xy$ con $x, y > 0$ y $x + y = s$ fijo.

Como la **suma** es fija, AM-GM acota el **producto**: $s = x + y \geq 2\sqrt{xy}$, luego $\sqrt{xy} \leq s/2$ y $xy \leq s^2/4$. El máximo $s^2/4$ se alcanza en la igualdad, $x = y = s/2$. $\square$

---

**Ejemplo 5.** Dados $x, y, z > 0$ con $xyz = 1$, hallar el mínimo de $x + y + z$.

Ahora el **producto** es fijo, así que AM-GM acota la **suma**: $\dfrac{x+y+z}{3} \geq \sqrt[3]{xyz} = 1$, luego $x + y + z \geq 3$, con mínimo en $x = y = z = 1$. $\square$

---

**Ejemplo 6.** Hallar el mínimo de $f(x) = \dfrac{x^2 + 2}{x}$ para $x > 0$.

*La idea.* Partimos la fracción en $x + \dfrac{2}{x}$ precisamente para que el producto de los dos sumandos, $x \cdot \dfrac{2}{x} = 2$, sea constante.

$$f(x) = x + \frac{2}{x} \geq 2\sqrt{x \cdot \tfrac{2}{x}} = 2\sqrt{2},$$

con igualdad cuando $x = 2/x$, es decir $x = \sqrt 2$. Mínimo: $2\sqrt 2$. $\square$

### Desigualdades simétricas

*La idea común.* En expresiones cíclicas conviene agrupar de modo que el **producto de los términos sea $1$** (entonces la media geométrica vale $1$), o emparejar cada suma $x + y$ con su $2\sqrt{xy}$ y multiplicar.

**Ejemplo 7.** Para $a, b, c > 0$, probar que $\dfrac{a}{b} + \dfrac{b}{c} + \dfrac{c}{a} \geq 3$.

El producto de los tres términos se cancela: $\dfrac{a}{b}\cdot\dfrac{b}{c}\cdot\dfrac{c}{a} = 1$. Por AM-GM con tres términos,

$$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \geq 3\sqrt[3]{\frac{a}{b}\cdot\frac{b}{c}\cdot\frac{c}{a}} = 3\sqrt[3]{1} = 3. \qquad \square$$

---

**Ejemplo 8.** Dado $a + b + c = 1$ con $a, b, c > 0$, probar que $(1-a)(1-b)(1-c) \geq 8abc$.

*La idea.* La restricción permite reescribir cada factor: $1 - a = b + c$, etc. Así el problema se vuelve un producto de tres sumas, y a cada una se le aplica AM-GM de dos términos.

Como $1 - a = b + c$, $1 - b = c + a$, $1 - c = a + b$, por AM-GM,

$$b + c \geq 2\sqrt{bc}, \quad c + a \geq 2\sqrt{ca}, \quad a + b \geq 2\sqrt{ab}.$$

Multiplicando las tres: $(b+c)(c+a)(a+b) \geq 8\sqrt{bc}\sqrt{ca}\sqrt{ab} = 8abc$. $\square$

## Aplicaciones

**1. Optimización con producto fijo o suma fija.** Si el producto $a_1 \cdots a_n = P$ es fijo, la suma $a_1+\cdots+a_n$ es mínima cuando todos son iguales: $a_i = P^{1/n}$. Y si la suma es fija, el producto es máximo cuando todos son iguales.

**2. Minorizar denominadores.** Para probar que una suma de fracciones es $\geq c$, a veces conviene aplicar AM-GM en el denominador para simplificar.

**3. Desigualdades cíclicas de grado homogéneo.** En desigualdades como $\sum a^2/b \geq \sum a$, la técnica estándar es agrupar términos y aplicar AM-GM a cada grupo.

**4. Ingeniería de términos.** Para maximizar el uso de AM-GM, a veces conviene escribir un término como suma de varios iguales. Por ejemplo, $\frac{a^3}{3} + \frac{a^3}{3} + \frac{a^3}{3} + b^3 \geq 4 \cdot \sqrt[4]{\frac{a^9 b^3}{27}}$ — la igualdad se calibra para que los tres sumandos coincidan con el cuarto.

## Observación

**El error más común: no verificar positividad.** AM-GM requiere que todos los términos sean **estrictamente positivos**. La desigualdad $\dfrac{a+b}{2}\geq\sqrt{ab}$ no tiene sentido si $a$ o $b$ son negativos (la raíz deja de ser real). En problemas donde las variables pueden ser negativas, hay que justificar la positividad antes de aplicar AM-GM, o usar otra desigualdad.

**La condición de igualdad es información.** Siempre que se aplica AM-GM y se afirma que se alcanza la igualdad, hay que verificar que la condición ($a_1=a_2=\cdots=a_n$) es compatible con el resto de las restricciones del problema. Si no es compatible, la igualdad nunca se alcanza y la cota es estricta.

**AM-GM ponderada para pesos racionales.** La forma ponderada con pesos racionales se reduce a la ordinaria **repitiendo** cada $a_i$ tantas veces como indique el numerador de su peso. Por ejemplo, con pesos $1/3$ y $2/3$ sobre $a$ y $b$, la AM-GM ponderada $\frac{1}{3}a + \frac{2}{3}b \geq a^{1/3}b^{2/3}$ es **exactamente** la AM-GM ordinaria sobre los tres números $\{a, b, b\}$:

$$
\frac{a + b + b}{3} \geq \sqrt[3]{a \cdot b \cdot b} = a^{1/3} b^{2/3}.
$$

## Problemas relacionados

**Problema 1 (clásico).** Para $a, b > 0$, probar que $\dfrac{a^2}{b} + \dfrac{b^2}{a} \geq a + b$.

[[pista]]

Suma $b$ al primer término: $\dfrac{a^2}{b} + b \geq 2a$ por AM-GM. Haz lo simétrico con el segundo.

[[/pista]]

[[solución]]

Aplicamos AM-GM a cada término con un sumando elegido para que el producto se simplifique:

$$
\frac{a^2}{b} + b \geq 2\sqrt{\frac{a^2}{b}\cdot b} = 2a, \qquad \frac{b^2}{a} + a \geq 2\sqrt{\frac{b^2}{a}\cdot a} = 2b.
$$

Sumando ambas desigualdades:

$$
\frac{a^2}{b} + \frac{b^2}{a} + (a + b) \geq 2a + 2b,
$$

y restando $a + b$ a ambos lados, $\dfrac{a^2}{b} + \dfrac{b^2}{a} \geq a + b$. Igualdad cuando $a = b$. $\blacksquare$

[[/solución]]

**Problema 2 (clásico).** Hallar el mínimo de $\left(a + \dfrac{1}{b}\right)\left(b + \dfrac{1}{c}\right)\left(c + \dfrac{1}{a}\right)$ para $a, b, c > 0$.

[[pista]]

Acota cada factor con AM-GM de dos términos. Al multiplicar las tres cotas, el producto bajo las raíces se simplifica a $1$.

[[/pista]]

[[solución]]

Por AM-GM, cada factor cumple

$$
a + \frac{1}{b} \geq 2\sqrt{\frac{a}{b}}, \qquad b + \frac{1}{c} \geq 2\sqrt{\frac{b}{c}}, \qquad c + \frac{1}{a} \geq 2\sqrt{\frac{c}{a}}.
$$

Multiplicando las tres (todos los lados son positivos), el producto dentro de las raíces se cancela:

$$
\left(a + \tfrac{1}{b}\right)\left(b + \tfrac{1}{c}\right)\left(c + \tfrac{1}{a}\right) \geq 8\sqrt{\frac{a}{b}\cdot\frac{b}{c}\cdot\frac{c}{a}} = 8\sqrt{1} = 8.
$$

El valor $8$ se alcanza con $a = b = c = 1$ (entonces cada factor vale $2$). El mínimo es $\boxed{8}$. $\blacksquare$

[[/solución]]

**Problema 3 (desigualdad de Nesbitt).** Para $a, b, c > 0$, probar que

$$
\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \geq \frac{3}{2}.
$$

[[pista]]

Suma $1$ a cada fracción: $\dfrac{a}{b+c} + 1 = \dfrac{a+b+c}{b+c}$. Luego usa que $(x+y+z)\left(\frac1x+\frac1y+\frac1z\right) \geq 9$.

[[/pista]]

[[solución]]

Sea $s = a + b + c$. Sumamos $1$ a cada fracción para hacer aparecer $s$ en cada numerador:

$$
\frac{a}{b+c} + 1 = \frac{a + b + c}{b+c} = \frac{s}{b+c},
$$

y análogamente con las otras. Por tanto

$$
\left(\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b}\right) + 3 = s\left(\frac{1}{b+c} + \frac{1}{c+a} + \frac{1}{a+b}\right).
$$

Ahora, llamando $x = b+c$, $y = c+a$, $z = a+b$ (cuya suma es $x + y + z = 2s$), aplicamos la desigualdad $(x+y+z)\left(\frac1x + \frac1y + \frac1z\right) \geq 9$ (que sale de multiplicar $x+y+z \geq 3\sqrt[3]{xyz}$ por $\frac1x+\frac1y+\frac1z \geq 3/\sqrt[3]{xyz}$, ambas por AM-GM):

$$
s\left(\frac{1}{b+c} + \frac{1}{c+a} + \frac{1}{a+b}\right) = \frac{1}{2}(x+y+z)\left(\frac1x + \frac1y + \frac1z\right) \geq \frac{9}{2}.
$$

Restando $3$:

$$
\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \geq \frac{9}{2} - 3 = \frac{3}{2},
$$

con igualdad cuando $a = b = c$. $\blacksquare$

[[/solución]]

**Problema 4 (clásico, AM–HM).** Para $a, b, c > 0$ con $\dfrac{1}{a} + \dfrac{1}{b} + \dfrac{1}{c} = 3$, demostrar que $a + b + c \geq 3$.

[[pista]]

La desigualdad entre medias aritmética y armónica, $\dfrac{a+b+c}{3} \geq \dfrac{3}{\frac1a+\frac1b+\frac1c}$, sale de multiplicar dos AM-GM.

[[/pista]]

[[solución]]

Por AM-GM aplicada por separado a $a, b, c$ y a sus inversos,

$$
a + b + c \geq 3\sqrt[3]{abc}, \qquad \frac1a + \frac1b + \frac1c \geq \frac{3}{\sqrt[3]{abc}}.
$$

Multiplicando ambas (lados positivos), se cancela $\sqrt[3]{abc}$:

$$
(a + b + c)\left(\frac1a + \frac1b + \frac1c\right) \geq 9.
$$

Esta es la desigualdad AM–HM. Usando la restricción $\frac1a + \frac1b + \frac1c = 3$:

$$
(a + b + c)\cdot 3 \geq 9 \;\Longrightarrow\; a + b + c \geq 3,
$$

con igualdad cuando $a = b = c = 1$. $\blacksquare$

[[/solución]]

**Problema 5 (clásico).** Probar que para todo entero $n \geq 1$ y reales $x_1, \ldots, x_n > 0$,

$$
(x_1 + x_2 + \cdots + x_n)\left(\frac{1}{x_1} + \frac{1}{x_2} + \cdots + \frac{1}{x_n}\right) \geq n^2.
$$

[[pista]]

Acota cada paréntesis por separado con AM-GM de $n$ términos; al multiplicar, las medias geométricas (una inversa de la otra) se cancelan.

[[/pista]]

[[solución]]

Sea $P = x_1 x_2 \cdots x_n$. Por AM-GM aplicada a cada paréntesis,

$$
x_1 + \cdots + x_n \geq n\sqrt[n]{P}, \qquad \frac{1}{x_1} + \cdots + \frac{1}{x_n} \geq n\sqrt[n]{\frac{1}{P}} = \frac{n}{\sqrt[n]{P}}.
$$

Multiplicando ambas desigualdades (todos los términos positivos), las raíces $n$-ésimas se cancelan:

$$
(x_1 + \cdots + x_n)\left(\frac{1}{x_1} + \cdots + \frac{1}{x_n}\right) \geq n\sqrt[n]{P}\cdot\frac{n}{\sqrt[n]{P}} = n^2.
$$

Igualdad cuando todos los $x_i$ son iguales. $\blacksquare$

[[/solución]]
