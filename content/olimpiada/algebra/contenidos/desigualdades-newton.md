---
title: "Desigualdades de Newton y Maclaurin para simétricos"
preview: "Las desigualdades de Newton $e_k^2\\geq e_{k-1}e_{k+1}$ y la desigualdad de Maclaurin $d_1\\geq d_2^{1/2}\\geq d_3^{1/3}\\geq\\cdots$ ordenan jerárquicamente las medias simétricas elementales. Son el eslabón entre Schur y Muirhead, y la herramienta clave para el método uvw."
dificultad: nacional
tags: [desigualdades, newton, maclaurin, simetricos, uvw, medias-simetricas]
prerequisites: [polinomios, schur, convexidad-jensen]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Los polinomios simétricos elementales $e_1, e_2, \ldots, e_n$ satisfacen una jerarquía de desigualdades que no se sigue de AM-GM ni Cauchy-Schwarz directamente. Las desigualdades de Newton y Maclaurin son el lenguaje natural del método uvw y de las desigualdades entre sumas simétricas de alto grado.

---

## Repaso: simétricos elementales

Para $a_1,\ldots,a_n>0$, los polinomios simétricos elementales son:

$$e_1=\sum a_i, \quad e_2=\sum_{i<j}a_ia_j, \quad e_3=\sum_{i<j<k}a_ia_ja_k, \quad \ldots, \quad e_n=a_1\cdots a_n.$$

Las **medias simétricas elementales** (normalizadas) son:

$$d_k = \frac{e_k}{\binom{n}{k}}.$$

Así $d_1 = e_1/n = A$ (media aritmética), $d_n = e_n = G^n$ (media geométrica al exponente $n$).

---

## Desigualdades de Newton

**Teorema (Newton, 1707).** Para $a_1,\ldots,a_n>0$ y $1\leq k\leq n-1$:

$$\boxed{e_k^2 \;\geq\; e_{k-1}\cdot e_{k+1},}$$

equivalentemente:

$$\boxed{d_k^2 \;\geq\; d_{k-1}\cdot d_{k+1}.}$$

Las $d_k$ forman una **sucesión log-cóncava**: $\ln d_k\geq\frac{\ln d_{k-1}+\ln d_{k+1}}{2}$.

**Caso $n=3$, $k=1$:** $e_1^2\geq3e_2$, es decir, $(a+b+c)^2\geq3(ab+bc+ca)$.

*Demostración.* $(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)\geq3(ab+bc+ca)$ iff $a^2+b^2+c^2\geq ab+bc+ca$. Esto es $\frac{1}{2}[(a-b)^2+(b-c)^2+(c-a)^2]\geq0$. $\square$

**Caso $n=3$, $k=2$:** $e_2^2\geq3e_1e_3$, es decir, $(ab+bc+ca)^2\geq3abc(a+b+c)$.

*Demostración.* Expandir: $(ab+bc+ca)^2=a^2b^2+b^2c^2+c^2a^2+2abc(a+b+c)$. Necesitamos $a^2b^2+b^2c^2+c^2a^2+2abc(a+b+c)\geq3abc(a+b+c)$, es decir, $a^2b^2+b^2c^2+c^2a^2\geq abc(a+b+c)=a^2bc+ab^2c+abc^2$. Por AM-GM: $a^2b^2+b^2c^2\geq2ab^2c$, $b^2c^2+c^2a^2\geq2abc^2$, $c^2a^2+a^2b^2\geq2a^2bc$. Sumar y dividir por $2$. $\square$

---

## Desigualdad de Maclaurin

**Teorema (Maclaurin, 1729).** Para $a_1,\ldots,a_n>0$:

$$\boxed{d_1 \;\geq\; d_2^{1/2} \;\geq\; d_3^{1/3} \;\geq\; \cdots \;\geq\; d_n^{1/n},}$$

con igualdad en todas si y solo si $a_1=\cdots=a_n$.

En otras palabras, la sucesión $d_k^{1/k}$ es **decreciente**.

**Observación.** $d_1=A$ (media aritmética) y $d_n^{1/n}=(e_n)^{1/n}=G$ (media geométrica). Así $A\geq G$ es el caso extremo de Maclaurin.

**Para $n=3$ explícitamente:**

$$\frac{a+b+c}{3} \;\geq\; \sqrt{\frac{ab+bc+ca}{3}} \;\geq\; \sqrt[3]{abc}.$$

Estas son las tres desigualdades:
1. $d_1\geq d_2^{1/2}$: equivale a $(a+b+c)^2\geq3(ab+bc+ca)$, que es Newton para $k=1$.
2. $d_2^{1/2}\geq d_3^{1/3}$: equivale a $(ab+bc+ca)^3\geq27(abc)^2(a+b+c)$... verificar.
3. $d_1\geq d_3^{1/3}$: es AM-GM: $(a+b+c)/3\geq(abc)^{1/3}$.

---

## Caso $n=3$: el triángulo de Schur

Para tres variables $a,b,c>0$ con $e_1=p$, $e_2=q$, $e_3=r$, las restricciones son:

- **Newton $k=1$:** $p^2\geq3q$
- **Newton $k=2$:** $q^2\geq3pr$
- **Schur $t=1$:** $p^3+9r\geq4pq$ (i.e., $e_1^3-4e_1e_2+9e_3\geq0$)
- **Positividad:** $r>0$, $q>0$, discriminante de la PG $\geq0$

Estas restricciones definen el **dominio válido** para $(p,q,r)$ cuando $a,b,c>0$. El método uvw trabaja dentro de este dominio.

---

## Aplicaciones en olimpiada

### Aplicación 1: $ab+bc+ca\leq(a+b+c)^2/3$

Para $a,b,c\geq0$: $(a+b+c)^2\geq3(ab+bc+ca)$. Inmediato de Newton $k=1$. $\square$

### Aplicación 2: acotar $e_3$ desde $e_1$ y $e_2$

Por Newton: $e_2^2\geq3e_1e_3$, luego $e_3\leq e_2^2/(3e_1)$.

También, de AM-GM aplicado a $a,b,c$: $e_3\leq(e_1/3)^3$.

Combinando: el rango de $e_3$ para $e_1,e_2$ fijos está acotado por las desigualdades de Newton y Schur.

### Aplicación 3: Maclaurin en problemas de optimización

**Ejemplo.** Para $a,b,c>0$ con $a+b+c=3$, demostrar que $ab+bc+ca\leq3$ y $abc\leq1$.

De Maclaurin: $d_1=1\geq d_2^{1/2}$, luego $d_2=(ab+bc+ca)/3\leq1$, así $ab+bc+ca\leq3$.

$d_1=1\geq d_3^{1/3}=(abc)^{1/3}$, luego $abc\leq1$.

Ambas con igualdad en $a=b=c=1$. $\square$

### Aplicación 4: demostrar Nesbitt vía Maclaurin

Para $a,b,c>0$ con $a+b+c=s$: 

$$\frac{a}{b+c}+\frac{b}{a+c}+\frac{c}{a+b}=\frac{a}{s-a}+\frac{b}{s-b}+\frac{c}{s-c}\geq\frac{3}{2}.$$

Se puede probar desde Newton: $\sum\frac{a}{s-a}=\sum\frac{a}{s-a}\cdot\frac{1}{1}$. Por Chebyshev (si $a\geq b\geq c\Rightarrow1/(s-a)\geq1/(s-b)\geq1/(s-c)$) y Maclaurin: $\sum a\cdot\frac{1}{s-a}\geq\frac{1}{3}(\sum a)(\sum\frac{1}{s-a})=\frac{s}{3}\cdot\sum\frac{1}{s-a}$.

---

## Prueba de Maclaurin para $n=3$: $d_1\geq d_2^{1/2}$

Ya demostrado: equivale a Newton $k=1$: $(a+b+c)^2\geq3(ab+bc+ca)$.

## Prueba de Maclaurin para $n=3$: $d_2^{1/2}\geq d_3^{1/3}$

$d_2=(ab+bc+ca)/3$, $d_3=abc$. Hay que demostrar:

$$\left(\frac{ab+bc+ca}{3}\right)^3 \geq (abc)^2.$$

Por AM-GM sobre $ab,bc,ca$: $\dfrac{ab+bc+ca}{3}\geq(ab\cdot bc\cdot ca)^{1/3}=(abc)^{2/3}$.

Elevando al cubo: $\left(\dfrac{ab+bc+ca}{3}\right)^3\geq(abc)^2$. $\square$

---

## Observación

**Newton vs Maclaurin.** Newton dice que la sucesión $d_k$ es log-cóncava; Maclaurin dice que $d_k^{1/k}$ es decreciente. Maclaurin es más fuerte (implica Newton por el criterio de log-concavidad de sucesiones log-cóncavas con índice).

**Schur completa el triángulo.** Newton y AM-GM dan restricciones de "arriba" en $e_3$ dado $(e_1,e_2)$; Schur da la restricción de "abajo". Juntos, encierran completamente el dominio del método uvw.

**En uvw, se trabaja con $(p,q,r)=(e_1,e_2,e_3)$ con $e_1$ fijo.** Maclaurin y Newton restringen cuánto pueden variar $e_2$ y $e_3$. El método uvw usa que, en el mínimo de una desigualdad bajo estas restricciones, generalmente se alcanza en el borde del dominio ($c=0$ o $a=b$ o $b=c$).

## Problemas relacionados

- **(Nacional)** Para $a,b,c\geq0$ con $a+b+c=1$, demostrar que $ab+bc+ca\leq1/3$ y $abc\leq1/27$.

- **(Nacional)** Para $a,b,c>0$, demostrar que $(ab+bc+ca)^3\geq27abc(a+b+c)ab\cdot bc\cdot ca$... Revisar: demostrar que $(ab+bc+ca)^3\geq27(abc)^2(a+b+c)$. *(Equivale a $d_2^{1/2}\geq d_3^{1/3}$ de Maclaurin.)*

- **(Nacional)** Para $a,b,c>0$ con $abc=1$, demostrar que $\dfrac{1}{a+b+1}+\dfrac{1}{b+c+1}+\dfrac{1}{c+a+1}\leq1$. *(Hint: por AM-GM, $a+b+1\geq3(ab)^{1/3}\cdot(abc)^{1/3}/...$ o usar Newton.)*

- **(Internacional)** Para $a,b,c\geq0$ con $a+b+c=3$ y $ab+bc+ca=q$, determinar el rango de $q$ y para cada $q$ válido, el rango de $abc$. *(Esto es el método uvw: las restricciones son Newton y Schur.)*

- **(Internacional)** Demostrar la desigualdad de Maclaurin completa para $n$ variables: $d_k^{1/k}\geq d_{k+1}^{1/(k+1)}$, usando Jensen aplicado a la función $f(t)=\log\binom{n}{t}^{-1}e_t$... o por inducción en $n$.
