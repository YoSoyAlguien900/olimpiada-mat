---
title: "Desigualdad de potencias: HM ≤ GM ≤ AM ≤ QM"
preview: "La media armónica, geométrica, aritmética y cuadrática satisfacen $H\\leq G\\leq A\\leq Q$ para reales positivos. Son los cuatro representantes de la familia de medias de potencias $M_r=(\\frac{\\sum a_i^r}{n})^{1/r}$, que son crecientes en $r$."
dificultad: regional
tags: [desigualdades, medias, am-gm, media-armonica, media-cuadratica, power-mean]
prerequisites: [am-gm, cauchy-schwarz]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

AM-GM es la desigualdad $G\leq A$ entre la media geométrica y la aritmética. Pero hay otras medias: la armónica $H$ (por debajo de $G$) y la cuadrática $Q$ (por encima de $A$). La cadena completa $H\leq G\leq A\leq Q$ aparece constantemente en olimpiada, muchas veces sin que el problema mencione explícitamente la media armónica o cuadrática.

---

## Las cuatro medias clásicas

Para reales positivos $a_1,\ldots,a_n$:

| Media | Símbolo | Fórmula |
|---|---|---|
| Armónica | $H$ | $\dfrac{n}{\frac{1}{a_1}+\cdots+\frac{1}{a_n}}$ |
| Geométrica | $G$ | $\sqrt[n]{a_1a_2\cdots a_n}$ |
| Aritmética | $A$ | $\dfrac{a_1+\cdots+a_n}{n}$ |
| Cuadrática | $Q$ | $\sqrt{\dfrac{a_1^2+\cdots+a_n^2}{n}}$ |

**Desigualdad de potencias:**

$$\boxed{H \;\leq\; G \;\leq\; A \;\leq\; Q,}$$

con igualdad en todas si y solo si $a_1=a_2=\cdots=a_n$.

---

## Caso $n=2$: las cuatro medias explícitas

Para $a,b>0$:

$$H = \frac{2ab}{a+b}, \qquad G=\sqrt{ab}, \qquad A=\frac{a+b}{2}, \qquad Q=\sqrt{\frac{a^2+b^2}{2}}.$$

La cadena $H\leq G\leq A\leq Q$ se convierte en:

$$\frac{2ab}{a+b}\leq\sqrt{ab}\leq\frac{a+b}{2}\leq\sqrt{\frac{a^2+b^2}{2}}.$$

---

## Prueba de $G\leq A$

AM-GM: $\dfrac{a+b}{2}\geq\sqrt{ab}$. ✓ (Ya conocida.)

---

## Prueba de $H\leq G$

Para $a,b>0$: $\dfrac{2ab}{a+b}\leq\sqrt{ab}$.

Multiplicar por $(a+b)/(2\sqrt{ab})>0$: equivalente a $\sqrt{ab}\leq\dfrac{a+b}{2}$, que es AM-GM. $\square$

*(Así HM-GM se reduce a GM-AM con la sustitución $a\to1/a$, $b\to1/b$: $H(a,b)=1/A(1/a,1/b)$.)*

**Para $n$ variables.** $H=n/\sum(1/a_i)$ y $G=(a_1\cdots a_n)^{1/n}$. La desigualdad $H\leq G$ equivale a:

$$\frac{n}{\sum 1/a_i}\leq(a_1\cdots a_n)^{1/n}.$$

Por AM-GM aplicado a $1/a_1,\ldots,1/a_n$:

$$\frac{1/a_1+\cdots+1/a_n}{n}\geq\left(\frac{1}{a_1\cdots a_n}\right)^{1/n},$$

es decir, $\dfrac{\sum(1/a_i)}{n}\geq\dfrac{1}{G}$, luego $H=\dfrac{n}{\sum(1/a_i)}\leq G$. $\square$

---

## Prueba de $A\leq Q$

Para $n$ variables: $\dfrac{a_1+\cdots+a_n}{n}\leq\sqrt{\dfrac{a_1^2+\cdots+a_n^2}{n}}$.

Elevando al cuadrado (ambos lados son positivos), equivale a:

$$\left(\sum a_i\right)^2\leq n\sum a_i^2.$$

Esta es exactamente la **desigualdad de Cauchy-Schwarz** con $b_i=1$:

$$\left(\sum a_i\cdot1\right)^2\leq\left(\sum a_i^2\right)\left(\sum 1^2\right)=n\sum a_i^2. \;\square$$

*(O bien: de $\sum_{i<j}(a_i-a_j)^2\geq0$, expandiendo: $n\sum a_i^2\geq(\sum a_i)^2$.)*

---

## Medias de potencias: la familia completa

**Definición.** Para $a_1,\ldots,a_n>0$ y $r\in\mathbb{R}\setminus\{0\}$:

$$M_r = \left(\frac{a_1^r+\cdots+a_n^r}{n}\right)^{1/r}.$$

Casos especiales:
- $M_1 = A$ (aritmética)
- $M_2 = Q$ (cuadrática o RMS)
- $M_{-1} = H$ (armónica)
- $M_{-2}$: "media cuadrática armónica"
- $\lim_{r\to0} M_r = G$ (geométrica)
- $\lim_{r\to\infty} M_r = \max(a_i)$
- $\lim_{r\to-\infty} M_r = \min(a_i)$

**Teorema (Power Mean Inequality).** $M_r\leq M_s$ para $r\leq s$.

Es decir, las medias de potencias son **crecientes en $r$**:

$$\min \;=\; M_{-\infty} \leq \cdots \leq M_{-1} \leq M_0 = G \leq M_1 = A \leq M_2 = Q \leq \cdots \leq M_\infty \;=\; \max.$$

---

## Usos en olimpiada

### Uso 1: reconocer la media armónica

**Ejemplo.** Para $a,b>0$, probar que $\dfrac{a+b}{2}\geq\dfrac{2ab}{a+b}$.

Esto es $A\geq H$: $A\geq G\geq H$ (transitiva). O directo: $(a+b)^2\geq4ab$, que es $(a-b)^2\geq0$. $\square$

### Uso 2: maximizar sumas con restricción en la suma de recíprocos

**Ejemplo.** Para $a,b,c>0$ con $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=3$, hallar el mínimo de $a+b+c$.

$H=n/\sum(1/a_i)=3/3=1$. Por $H\leq A$: $1\leq(a+b+c)/3$, así $a+b+c\geq3$.

Igualdad en $a=b=c=1$. $\square$

### Uso 3: la media cuadrática en probabilidad

**Ejemplo.** Para $a,b,c>0$ con $a+b+c=3$, demostrar que $a^2+b^2+c^2\geq3$.

$Q^2=(a^2+b^2+c^2)/3$ y $A=(a+b+c)/3=1$. Por $A\leq Q$: $1\leq Q$, luego $a^2+b^2+c^2\geq3$. $\square$

### Uso 4: reformulación con cambio de variable

Si $a,b>0$ con $a+b=S$ fija, la media armónica es $H=2ab/S$. Maximizar $ab$ (por AM-GM, $ab\leq S^2/4$) equivale a maximizar $H$, que se alcanza en $a=b$.

---

## Tabla de identidades HM-GM-AM-QM para $n=2$

| | Fórmula | Relación con $A,G$ |
|---|---|---|
| $Q^2-A^2$ | $\frac{(a-b)^2}{4}$ | $Q\geq A$, igualdad iff $a=b$ |
| $A^2-G^2$ | $\frac{(a-b)^2}{4}+\cdots$ | — |
| $A-G$ | $\frac{(\sqrt{a}-\sqrt{b})^2}{2}$ | AM-GM para $a,b>0$ |
| $G-H$ | $\frac{ab(\sqrt{a}-\sqrt{b})^2}{A\cdot(something)}$ | siempre $\geq0$ |
| $A\cdot H$ | $G^2$ | $!$ Identidad: $AH=G^2$ para $n=2$ |

La identidad $AH=G^2$ (para $n=2$) es una de las más útiles: $\dfrac{a+b}{2}\cdot\dfrac{2ab}{a+b}=ab=(\sqrt{ab})^2$.

---

## Observación

**La media armónica es la más olvidada y la más útil.** Aparece disfrazada: $\frac{2ab}{a+b}$, $\frac{n}{\sum 1/a_i}$, o en la condición "$\frac{1}{a}+\frac{1}{b}=c$". Siempre que el problema da condiciones en $1/a$ en lugar de $a$, se está trabajando con la media armónica.

**La media cuadrática aparece en varianza.** La varianza de $(a_1,\ldots,a_n)$ es $Q^2-A^2=\frac{\sum a_i^2}{n}-\left(\frac{\sum a_i}{n}\right)^2\geq0$. Esto es exactamente $Q\geq A$.

## Problemas relacionados

- **(Regional)** Para $a,b>0$ con $a+b=2$, demostrar que $\dfrac{1}{a}+\dfrac{1}{b}\geq2$.

- **(Regional)** Para $a,b,c>0$ con $abc=1$, demostrar que $a+b+c\geq\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$. *(Hint: equivale a $a+b+c\geq ab+bc+ca$ cuando $abc=1$; usar AM-GM.)*

- **(Nacional)** Para $a_1,\ldots,a_n>0$ con $\sum a_i=n$, demostrar que $\sum\dfrac{1}{a_i}\geq n$ y que $\sum a_i^2\geq n$.

- **(Nacional)** Para $a,b,c>0$, demostrar que $\dfrac{a+b+c}{3}\cdot\dfrac{1/a+1/b+1/c}{3}\geq1$, con igualdad iff $a=b=c$. *(Equivale a $A\cdot\frac{1}{H}\geq1$, es decir, $A\geq H$.)*

- **(Internacional)** Demostrar la Power Mean Inequality $M_1\leq M_2$ para $n$ variables: $\left(\dfrac{\sum a_i}{n}\right)^2\leq\dfrac{\sum a_i^2}{n}$, es decir, $A^2\leq Q^2$. Deducir la Power Mean Inequality $M_r\leq M_s$ para $0<r<s$ usando Jensen.
