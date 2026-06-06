---
title: "Cauchy-Schwarz y forma de Engel (Titu)"
preview: "$(\\sum a_i^2)(\\sum b_i^2)\\geq(\\sum a_i b_i)^2$ es la segunda desigualdad fundamental. La forma de Engel, $\\sum a_i^2/b_i\\geq(\\sum a_i)^2/\\sum b_i$, es la variante más potente en olimpiada."
dificultad: regional
tags: [desigualdades, cauchy-schwarz, engel, titu, sedrakyan]
prerequisites: [am-gm]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad de Cauchy-Schwarz es la segunda gran herramienta de las desigualdades olímpicas. Tiene múltiples formas equivalentes, y la más útil en la práctica — la forma de Engel o Titu — convierte sumas de cocientes en algo que se puede comparar directamente.

## Enunciado

**Forma vectorial / suma de cuadrados.** Para reales $a_1, \ldots, a_n$ y $b_1, \ldots, b_n$:

$$\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right) \;\geq\; \left(\sum_{i=1}^n a_i b_i\right)^2,$$

con igualdad si y solo si los vectores $(a_1,\ldots,a_n)$ y $(b_1,\ldots,b_n)$ son proporcionales, es decir, existe $\lambda$ tal que $a_i = \lambda b_i$ para todo $i$.

**Forma de Engel (Titu / Sedrakyan).** Para $a_i \in \mathbb{R}$ y $b_i > 0$:

$$\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \cdots + \frac{a_n^2}{b_n} \;\geq\; \frac{(a_1 + a_2 + \cdots + a_n)^2}{b_1 + b_2 + \cdots + b_n},$$

con igualdad si y solo si $a_1/b_1 = a_2/b_2 = \cdots = a_n/b_n$.

## Demostración

**Demostración de la forma vectorial.** Considera el polinomio en $t$:

$$P(t) \;=\; \sum_{i=1}^n (a_i t - b_i)^2 \;=\; \left(\sum a_i^2\right)t^2 - 2\left(\sum a_i b_i\right)t + \sum b_i^2 \;\geq\; 0.$$

Como $P(t) \geq 0$ para todo real $t$, su discriminante es $\leq 0$:

$$4\left(\sum a_i b_i\right)^2 - 4\left(\sum a_i^2\right)\left(\sum b_i^2\right) \;\leq\; 0. \qquad \blacksquare$$

**Deducción de la forma de Engel.** Sustituye $a_i \to a_i/\sqrt{b_i}$ y $b_i \to \sqrt{b_i}$ en Cauchy-Schwarz:

$$\left(\sum \frac{a_i^2}{b_i}\right)\left(\sum b_i\right) \;\geq\; \left(\sum a_i\right)^2.$$

Dividiendo entre $\sum b_i > 0$: forma de Engel. $\blacksquare$

## Ejemplo

### Aplicación directa

**Ejemplo 1.** Para $a, b, c > 0$, probar que

$$\frac{a^2}{b+c} + \frac{b^2}{c+a} + \frac{c^2}{a+b} \;\geq\; \frac{a+b+c}{2}.$$

Por la forma de Engel con $a_i = a, b, c$ y $b_i = b+c, c+a, a+b$:

$$\frac{a^2}{b+c} + \frac{b^2}{c+a} + \frac{c^2}{a+b} \;\geq\; \frac{(a+b+c)^2}{(b+c)+(c+a)+(a+b)} \;=\; \frac{(a+b+c)^2}{2(a+b+c)} \;=\; \frac{a+b+c}{2}. \;\square$$

---

**Ejemplo 2 (Nesbitt).** Para $a, b, c > 0$, probar que

$$\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \;\geq\; \frac{3}{2}.$$

Escribimos $\dfrac{a}{b+c} = \dfrac{a^2}{a(b+c)}$. Por la forma de Engel:

$$\sum \frac{a^2}{a(b+c)} \;\geq\; \frac{(a+b+c)^2}{a(b+c)+b(c+a)+c(a+b)} \;=\; \frac{(a+b+c)^2}{2(ab+bc+ca)}.$$

Por AM-GM: $(a+b+c)^2 \geq 3(ab+bc+ca)$. Así:

$$\frac{(a+b+c)^2}{2(ab+bc+ca)} \;\geq\; \frac{3(ab+bc+ca)}{2(ab+bc+ca)} \;=\; \frac{3}{2}. \;\square$$

---

**Ejemplo 3.** Para $a_1,\ldots,a_n > 0$ con $\sum a_i = 1$, probar que $\sum \dfrac{a_i^2}{a_i + a_{i+1}} \geq \dfrac{1}{2}$ (índices cíclicos: $a_{n+1}=a_1$).

Por la forma de Engel:

$$\sum_{i=1}^n \frac{a_i^2}{a_i+a_{i+1}} \;\geq\; \frac{(\sum a_i)^2}{\sum (a_i+a_{i+1})} \;=\; \frac{1}{2}. \;\square$$

---

**Ejemplo 4.** Para $x, y, z > 0$ con $x+y+z=1$, hallar el mínimo de $\dfrac{x^2}{y} + \dfrac{y^2}{z} + \dfrac{z^2}{x}$.

Por la forma de Engel: $\dfrac{x^2}{y}+\dfrac{y^2}{z}+\dfrac{z^2}{x}\geq\dfrac{(x+y+z)^2}{y+z+x}=1$.

El mínimo es $1$, alcanzado cuando $x/y=y/z=z/x$, es decir, $x=y=z=1/3$. $\square$

---

**Ejemplo 5.** Para $a, b, c, d > 0$ con $a+b+c+d=1$, probar que

$$\frac{a^2}{a+b} + \frac{b^2}{b+c} + \frac{c^2}{c+d} + \frac{d^2}{d+a} \;\geq\; \frac{1}{2}.$$

Idéntico al Ejemplo 3 con $n=4$. Por Engel, la suma $\geq (a+b+c+d)^2/((a+b)+(b+c)+(c+d)+(d+a)) = 1/2$. $\square$

### Combinación con otras técnicas

**Ejemplo 6.** (IMO 2001/P2) Para $a,b,c>0$, probar que

$$\frac{a}{\sqrt{a^2+8bc}}+\frac{b}{\sqrt{b^2+8ca}}+\frac{c}{\sqrt{c^2+8ab}}\geq1.$$

*(Demostración completa en el archivo de problemas resueltos.)*

**Idea.** Por Cauchy-Schwarz vectorial con $\alpha_i = \sqrt{a_i}$ y $\beta_i = \sqrt{a_i}\cdot(a_i^2+8b_ic_i)^{1/4}$:

$$\left(\sum\frac{a}{\sqrt{a^2+8bc}}\right)\cdot\left(\sum a\sqrt{a^2+8bc}\right) \;\geq\; (a+b+c)^2.$$

El paso clave es entonces acotar $\sum a\sqrt{a^2+8bc}\leq(a+b+c)^2$ via AM-GM. $\square$

## Aplicaciones

**Sumas de cocientes.** La forma de Engel es ideal cuando aparece $\sum \dfrac{f(x_i)}{g(x_i)}$ donde los denominadores y numeradores tienen estructura que permite reagrupar.

**Acotación de productos escalares.** Si tienes $\sum a_i b_i$ y conoces $\sum a_i^2$ o $\sum b_i^2$, Cauchy-Schwarz da una cota inmediata.

**Desigualdades con raíces cuadradas.** En combinación con AM-GM (como en el IMO 2001/P2), Cauchy elimina las raíces al aparecer al cuadrado.

## Observación

**¿Cuándo usar Engel en vez de la forma clásica?** La forma de Engel es más directa cuando la desigualdad tiene la estructura $\sum \frac{(\text{lineal})^2}{\text{positivo}} \geq \frac{(\text{suma})^2}{\text{suma de denominadores}}$. La forma clásica es mejor cuando hay un producto de sumas.

**La condición de igualdad es la clave para elegir los términos.** En AM-GM, la igualdad ocurre cuando todos los sumandos son iguales. En la forma de Engel, ocurre cuando $a_1/b_1=\cdots=a_n/b_n$. Conocer esto de antemano (evaluando en el caso de igualdad esperado) permite deducir qué agrupación elegir.

**La identidad de Lagrange.** La prueba por discriminante oculta la identidad exacta:

$$\left(\sum a_i^2\right)\left(\sum b_i^2\right) - \left(\sum a_i b_i\right)^2 \;=\; \sum_{i<j}(a_i b_j - a_j b_i)^2 \;\geq\; 0.$$

Esta identidad explica cuándo hay igualdad y a veces es más útil que Cauchy directamente.

## Problemas relacionados

- **(Clásico)** Para $a,b,c>0$ con $a+b+c=1$, probar que $\dfrac{a^2}{1-a}+\dfrac{b^2}{1-b}+\dfrac{c^2}{1-c}\geq\dfrac{1}{2}$.

- **(Clásico, Cauchy vectorial)** Para $a_1,\ldots,a_n, b_1,\ldots,b_n>0$, probar la desigualdad $\left(\sum\sqrt{a_i b_i}\right)^2\leq\left(\sum a_i\right)\left(\sum b_i\right)$.

- **(OME)** Para $a,b,c>0$ con $a^2+b^2+c^2=1$, hallar el mínimo de $\dfrac{a}{1-a^2}+\dfrac{b}{1-b^2}+\dfrac{c}{1-c^2}$.

- **(IMO 1995/P2, adaptado)** Para $a,b,c>0$ con $abc=1$, probar que $\dfrac{1}{a^3(b+c)}+\dfrac{1}{b^3(c+a)}+\dfrac{1}{c^3(a+b)}\geq\dfrac{3}{2}$. *(Ver problemas resueltos.)*

- **(Clásico)** Para reales $x_1,\ldots,x_n$ con $\sum x_i = 0$ y $\sum x_i^2 = 1$, acotar $\max_i x_i$ usando Cauchy-Schwarz.
