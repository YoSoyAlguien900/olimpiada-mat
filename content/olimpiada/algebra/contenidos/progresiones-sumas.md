---
title: "Progresiones y sumas clásicas"
preview: "Las progresiones aritméticas y geométricas son las sucesiones más básicas de olimpiada. Sus sumas tienen fórmulas cerradas, y las sumas $\\sum k$, $\\sum k^2$, $\\sum k^3$ aparecen constantemente en problemas de conteo y álgebra."
dificultad: regional
tags: [sucesiones, progresion-aritmetica, progresion-geometrica, sumas, telescopico]
prerequisites: [identidades-algebraicas]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Las progresiones aritméticas y geométricas son la base de la teoría de sucesiones. Antes de abordar recurrencias lineales generales, hay que dominar estos dos tipos: son la forma más simple de dependencia entre términos consecutivos, y sus fórmulas de suma aparecen en incontables problemas.

---

## Progresión aritmética (PA)

**Definición.** Una sucesión $a_1, a_2, a_3, \ldots$ es una **progresión aritmética** con razón $d$ si la diferencia entre términos consecutivos es constante:

$$a_{n+1} - a_n = d \quad \text{para todo } n \geq 1.$$

**Término general:**

$$\boxed{a_n = a_1 + (n-1)d.}$$

**Suma de los primeros $n$ términos:**

$$\boxed{S_n = \frac{n(a_1 + a_n)}{2} = \frac{n(2a_1+(n-1)d)}{2}.}$$

**Demostración (Gauss).** Escribir la suma hacia adelante y hacia atrás:

$$S_n = a_1 + a_2 + \cdots + a_n$$
$$S_n = a_n + a_{n-1} + \cdots + a_1$$

Sumar: $2S_n = n(a_1+a_n)$. $\square$

**Propiedad clave.** En una PA, el término del medio es la media aritmética de cualquier par simétrico: si $i+j=k+l$, entonces $a_i+a_j=a_k+a_l$.

### Ejemplos

**Ejemplo 1.** La suma $1+2+3+\cdots+n$.

PA con $a_1=1$, $d=1$, $a_n=n$:

$$\sum_{k=1}^n k = \frac{n(n+1)}{2}.$$

**Ejemplo 2.** La suma $3+7+11+\cdots+99$.

$a_1=3$, $d=4$. Número de términos: $a_n=3+(n-1)\cdot4=99 \Rightarrow n=25$.

$$S_{25}=\frac{25(3+99)}{2}=\frac{25\cdot102}{2}=1275.$$

**Ejemplo 3.** Las raíces de $x^3-9x^2+26x-24=0$ están en PA. Hallarlas.

Si las raíces son $a-d, a, a+d$: por Vieta, $(a-d)+a+(a+d)=9$, así $a=3$. Y $(a-d)\cdot a\cdot(a+d)=24$, es decir, $3(9-d^2)=24$, luego $d^2=1$, $d=\pm1$. Raíces: $2, 3, 4$. $\square$

---

## Progresión geométrica (PG)

**Definición.** Una sucesión $a_1, a_2, a_3, \ldots$ es una **progresión geométrica** con razón $r$ si el cociente entre términos consecutivos es constante:

$$\frac{a_{n+1}}{a_n} = r \quad \text{para todo } n \geq 1.$$

**Término general:**

$$\boxed{a_n = a_1 \cdot r^{n-1}.}$$

**Suma de los primeros $n$ términos** (para $r\neq1$):

$$\boxed{S_n = a_1\cdot\frac{r^n-1}{r-1}.}$$

Para $r=1$: $S_n=na_1$.

**Demostración.** $S_n = a_1+a_1r+\cdots+a_1r^{n-1}$. Multiplicar por $r$: $rS_n=a_1r+\cdots+a_1r^n$. Restar: $(r-1)S_n=a_1(r^n-1)$. $\square$

**Serie geométrica infinita** (para $|r|<1$):

$$\boxed{\sum_{n=0}^\infty a_1 r^n = \frac{a_1}{1-r}.}$$

### Ejemplos

**Ejemplo 1.** La suma $1+2+4+\cdots+2^{n-1}=2^n-1$.

PG con $a_1=1$, $r=2$: $S_n=\frac{2^n-1}{2-1}=2^n-1$.

**Ejemplo 2.** La suma $\dfrac{1}{3}+\dfrac{1}{9}+\dfrac{1}{27}+\cdots$

PG infinita con $a_1=1/3$, $r=1/3$: $S=\dfrac{1/3}{1-1/3}=\dfrac{1}{2}$.

**Ejemplo 3.** Las raíces de $8x^3-14x^2+7x-1=0$ están en PG. Hallarlas.

Si las raíces son $a/r, a, ar$: por Vieta, $(a/r)\cdot a\cdot(ar)=1/8$, así $a^3=1/8$, $a=1/2$. Y $(a/r)+a+(ar)=14/8=7/4$: $\frac{1}{2r}+\frac{1}{2}+\frac{r}{2}=7/4$, luego $\frac{1}{2r}+\frac{r}{2}=5/4$, multiplicando por $2r$: $r^2-5r/2+1=0$... más limpio: $1+2r+2r^2=7r/2$... Resolver: $r=2$ o $r=1/2$. Raíces: $1/4, 1/2, 1$. $\square$

---

## Sumas de potencias

Las siguientes fórmulas son fundamentales y deben memorizarse:

$$\boxed{\sum_{k=1}^n k = \frac{n(n+1)}{2}}$$

$$\boxed{\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}}$$

$$\boxed{\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2 = \left(\sum_{k=1}^n k\right)^2}$$

La última identidad dice que la suma de los primeros $n$ cubos es el cuadrado de la suma de los primeros $n$ naturales. Un resultado sorprendente.

**Cómo derivar $\sum k^2$ sin memorizar.** Usar la identidad $(k+1)^3-k^3=3k^2+3k+1$ y sumar telescópicamente:

$$\sum_{k=1}^n[(k+1)^3-k^3] = (n+1)^3-1 = 3\sum k^2+3\sum k+n.$$

Sustituir $\sum k=n(n+1)/2$ y despejar $\sum k^2$. $\square$

### Ejemplo de olimpiada

**Demostrar que $1^3+2^3+\cdots+n^3=(1+2+\cdots+n)^2$.**

LHS $=\left(\frac{n(n+1)}{2}\right)^2=$ RHS. $\square$ *(O bien probar por inducción.)*

---

## Relación entre PA y PG

**Si $(a_n)$ está en PA, entonces $(r^{a_n})$ está en PG** con razón $r^d$.

**Media aritmética vs geométrica de dos términos:**
- Si $a, M, b$ están en PA: $M = (a+b)/2$ (media aritmética).
- Si $a, G, b$ están en PG: $G = \sqrt{ab}$ (media geométrica).
- AM-GM: $M\geq G$ siempre.

---

## Técnica: usar PA/PG para hallar sumas

Muchas sumas se simplifican identificando una PA o PG.

**Suma de los impares.** $1+3+5+\cdots+(2n-1)$.

PA con $a_1=1$, $d=2$, $n$ términos: $S_n=n^2$.

*(La suma de los primeros $n$ impares es $n^2$. Imagen: escalera de cuadrados.)*

**Suma $\sum_{k=1}^n k\cdot r^k$ (PG-aritmética).** Multiplicar por $r$ y restar (derivar la fórmula de la PG):

$$S = r+2r^2+3r^3+\cdots+nr^n.$$
$$rS = r^2+2r^3+\cdots+(n-1)r^n+nr^{n+1}.$$
$$S-rS = r+r^2+\cdots+r^n-nr^{n+1} = \frac{r(r^n-1)}{r-1}-nr^{n+1}.$$

Despejar $S$.

---

## Aplicaciones en olimpiada

**¿Cuándo aparece PA en olimpiada?**
- Raíces de polinomios en PA (usar Vieta)
- Números que forman PA (estructura divisional)
- Sumas de términos consecutivos

**¿Cuándo aparece PG en olimpiada?**
- Raíces de polinomios en PG
- Problemas de crecimiento exponencial o interés compuesto
- Series infinitas $\sum ar^n$

### Ejemplo de olimpiada

**(OMG-nivel)** Los términos $a_1, a_2, a_3$ son los tres primeros de una PA con razón entera positiva. Si $a_1+a_2+a_3=21$ y $a_1a_2a_3=315$, hallar $a_1, a_2, a_3$.

Sea $a_2=7$ (de la suma: $3a_2=21$). Luego $(7-d)\cdot7\cdot(7+d)=315$, así $7(49-d^2)=315$, $49-d^2=45$, $d^2=4$, $d=2$. Respuesta: $5,7,9$. $\square$

## Problemas relacionados

- **(Iniciación)** Calcular $1+3+5+\cdots+2019$. *(Respuesta: $1010^2=1020100$.)*

- **(Regional)** Demostrar que la suma de cualquier número impar de términos consecutivos de una PA es divisible por ese número impar.

- **(Regional)** Hallar la suma $\dfrac{1}{1\cdot2}+\dfrac{1}{2\cdot3}+\cdots+\dfrac{1}{n(n+1)}$. *(Respuesta: $\frac{n}{n+1}$. Usar telescopeo.)*

- **(Regional)** Si $a,b,c$ son términos de una PG con $a<b<c$ enteros positivos, y $a+b+c=21$, $ab+bc+ca=116$: hallar $a,b,c$.

- **(Nacional)** Demostrar que no existen tres términos en PG que sean también una terna pitagórica primitiva (i.e., $a^2+b^2=c^2$ con $\gcd(a,b,c)=1$).
