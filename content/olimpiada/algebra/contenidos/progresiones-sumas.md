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

*La idea.* Si tres números están en PA, se escriben $a-d,\,a,\,a+d$: con esta forma simétrica, la **suma** se reduce a $3a$ y Vieta da $a$ al instante.

**Solución.** Escribimos las raíces como $a-d,\,a,\,a+d$. Por Vieta, su suma es $9$:

$$(a-d)+a+(a+d)=3a=9\;\Longrightarrow\;a=3.$$

El producto de las raíces es $24$:

$$(a-d)\,a\,(a+d)=a(a^2-d^2)=3(9-d^2)=24\;\Longrightarrow\;9-d^2=8\;\Longrightarrow\;d^2=1,$$

luego $d=\pm1$. En ambos casos las raíces son $2,\,3,\,4$. $\square$

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

*La idea.* Como en el caso PA, la simetría de la PG sugiere parametrizar las raíces como $a/r,\,a,\,ar$: así el **producto** de las tres es simplemente $a^3$, y por Vieta lo conocemos de inmediato.

**Solución.** Escribimos las raíces como $\dfrac{a}{r},\,a,\,ar$. Por Vieta, el producto de las raíces es $\dfrac{-(-1)}{8}=\dfrac18$, y como ese producto es $\dfrac{a}{r}\cdot a\cdot ar=a^3$,

$$a^3=\frac18\;\Longrightarrow\;a=\frac12.$$

La suma de las raíces es $\dfrac{14}{8}=\dfrac74$:

$$\frac{a}{r}+a+ar=\frac74\;\Longrightarrow\;\frac{1}{2}\left(\frac1r+1+r\right)=\frac74\;\Longrightarrow\;\frac1r+r=\frac72-1=\frac52.$$

Multiplicando por $2r$: $2r^2-5r+2=0$, cuyas soluciones son $r=2$ y $r=\dfrac12$ (que dan el mismo conjunto de raíces, en orden inverso). Con $a=\tfrac12,\ r=2$ las raíces son $\dfrac14,\ \dfrac12,\ 1$. $\square$

*La moraleja.* Para raíces en PA usa $a-d,a,a+d$ (la suma se simplifica); para raíces en PG usa $a/r,a,ar$ (el producto se simplifica). En cada caso, la parametrización simétrica hace que una de las fórmulas de Vieta dé un valor de un solo golpe.

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

**Problema 1 (iniciación).** Calcular $1+3+5+\cdots+2019$.

[[pista]]

Es la suma de los primeros impares. ¿Cuántos hay hasta $2019$? Recuerda que $1+3+\cdots+(2n-1)=n^2$.

[[/pista]]

[[solución]]

Es una PA con $a_1=1$, $d=2$. El término $2019=2n-1$ da $n=1010$ términos. La suma de los primeros $n$ impares es $n^2$, luego

$$1+3+5+\cdots+2019=1010^2=1\,020\,100. \;\blacksquare$$

[[/solución]]

**Problema 2 (regional).** Demostrar que la suma de cualquier número impar de términos consecutivos de una PA es divisible por ese número impar.

[[pista]]

Toma $2m+1$ términos consecutivos. El del medio es la media de todos; agrupa los extremos en parejas simétricas alrededor de él.

[[/pista]]

[[solución]]

Sean $2m+1$ términos consecutivos de una PA, y sea $t$ el término **central**. Por la propiedad de la PA, los pares simétricos respecto al centro suman $2t$: el $k$-ésimo a la izquierda y el $k$-ésimo a la derecha del centro son $t-kd$ y $t+kd$, que suman $2t$. Hay $m$ de esos pares más el centro, de modo que la suma total es

$$S=m\cdot 2t+t=(2m+1)\,t.$$

Por tanto $S$ es múltiplo de $2m+1$, el número (impar) de términos. $\blacksquare$

[[/solución]]

**Problema 3 (regional).** Hallar la suma $\dfrac{1}{1\cdot2}+\dfrac{1}{2\cdot3}+\cdots+\dfrac{1}{n(n+1)}$.

[[pista]]

Descompón $\dfrac{1}{k(k+1)}=\dfrac1k-\dfrac1{k+1}$ y observa cómo se cancelan los términos al sumar (telescopeo).

[[/pista]]

[[solución]]

Usamos la descomposición en fracciones simples $\dfrac{1}{k(k+1)}=\dfrac1k-\dfrac1{k+1}$. La suma telescopa:

$$\sum_{k=1}^n\frac{1}{k(k+1)}=\sum_{k=1}^n\left(\frac1k-\frac1{k+1}\right)=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1n-\frac1{n+1}\right).$$

Todos los términos intermedios se cancelan, quedando

$$1-\frac{1}{n+1}=\frac{n}{n+1}. \;\blacksquare$$

[[/solución]]

**Problema 4 (regional).** Si $a,b,c$ son términos consecutivos de una PG con $a<b<c$ enteros positivos, $a+b+c=21$ y $ab+bc+ca=126$, hallar $a,b,c$.

[[pista]]

En una PG de tres términos, $b^2=ac$. Sustituye eso en $ab+bc+ca$ y verás que se factoriza como $b\cdot(a+b+c)$.

[[/pista]]

[[solución]]

Por ser PG de tres términos, $b^2=ac$. Entonces

$$ab+bc+ca=b(a+c)+ac=b(a+c)+b^2=b(a+b+c)=21b.$$

Igualando a $126$: $21b=126$, luego $b=6$. Como $ac=b^2=36$ y $a+c=21-6=15$, los números $a,c$ son las raíces de $t^2-15t+36=0$, esto es $t=3$ o $t=12$. Con $a<b<c$: $a=3,\ b=6,\ c=12$ (PG de razón $2$). $\blacksquare$

[[/solución]]

**Problema 5 (nacional).** Demostrar que no existe ninguna terna pitagórica $a^2+b^2=c^2$ (con $a<b<c$ enteros positivos) cuyos tres lados estén en progresión geométrica.

[[pista]]

Escribe los tres términos como $a$, $ar$, $ar^2$ y sustituye en $a^2+b^2=c^2$; obtendrás una ecuación solo en $r^2$.

[[/pista]]

[[solución]]

Supongamos $a,b,c$ en PG con razón $r>1$ (pues $a<b<c$), es decir $b=ar$, $c=ar^2$, con $r$ racional. La condición pitagórica $a^2+b^2=c^2$ da

$$a^2+a^2r^2=a^2r^4\;\Longrightarrow\;1+r^2=r^4.$$

Poniendo $u=r^2>0$: $u^2-u-1=0$, luego $u=\dfrac{1+\sqrt5}{2}$. Entonces $r^2=\dfrac{1+\sqrt5}{2}$ es irracional, así que $r$ es irracional. Pero si $a,b,c$ son enteros, $r=b/a$ sería racional — contradicción. Por tanto no existe tal terna. $\blacksquare$

[[/solución]]
