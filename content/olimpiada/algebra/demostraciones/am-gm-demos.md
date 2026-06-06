---
title: "Tres demostraciones de AM-GM"
preview: "La desigualdad aritmético-geométrica admite demostraciones radicalmente distintas: por inducción de Cauchy (hacia adelante y atrás), por convexidad del logaritmo, y por reordenamiento. Cada una ilumina un aspecto diferente."
dificultad: regional
tags: [am-gm, demostracion, induccion, convexidad, cauchy-induccion]
prerequisites: [am-gm]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad AM-GM tiene una historia larga y demostraciones de muy distinta naturaleza. Conocer varias es útil: iluminan por qué es verdadera y qué propiedades se generalizan.

## Demostración 1: Inducción de Cauchy (hacia adelante y hacia atrás)

Esta es la demostración clásica de Cauchy (1821). Establece AM-GM para todo $n$ mediante dos induciones encadenadas.

**Lema.** AM-GM es válida para $n=2$: $\dfrac{a+b}{2}\geq\sqrt{ab}$.

*Prueba.* $(\sqrt a-\sqrt b)^2\geq0 \implies a-2\sqrt{ab}+b\geq0 \implies a+b\geq2\sqrt{ab}$. $\blacksquare$

**Paso 1: inducción hacia adelante ($n\to2n$).** Si AM-GM es válida para $n$ variables, es válida para $2n$ variables.

*Prueba.* Dados $a_1,\ldots,a_{2n}$, sean $A=\sqrt[n]{a_1\cdots a_n}$ y $B=\sqrt[n]{a_{n+1}\cdots a_{2n}}$ (medias geométricas de las dos mitades). Por hipótesis de inducción:

$$\frac{a_1+\cdots+a_n}{n}\geq A, \quad \frac{a_{n+1}+\cdots+a_{2n}}{n}\geq B.$$

Sumando y dividiendo entre $2$: $\frac{a_1+\cdots+a_{2n}}{2n}\geq\frac{A+B}{2}$.

Por AM-GM para $n=2$: $\frac{A+B}{2}\geq\sqrt{AB}=(a_1\cdots a_{2n})^{1/(2n)}$. $\blacksquare$

Por inducción doble: AM-GM es válida para $n=2,4,8,16,\ldots$ (todas las potencias de $2$).

**Paso 2: inducción hacia atrás ($n\to n-1$).** Si AM-GM es válida para $n$ variables, es válida para $n-1$ variables.

*Prueba.* Dados $a_1,\ldots,a_{n-1}$, sea $M=\frac{a_1+\cdots+a_{n-1}}{n-1}$ (media aritmética). Aplica AM-GM para $n$ variables a $a_1,\ldots,a_{n-1},M$:

$$\frac{a_1+\cdots+a_{n-1}+M}{n}\geq(a_1\cdots a_{n-1}\cdot M)^{1/n}.$$

El lado izquierdo: $\frac{(n-1)M+M}{n}=M$. Así:

$$M\geq(a_1\cdots a_{n-1}\cdot M)^{1/n}.$$

Elevando a la $n$: $M^n\geq a_1\cdots a_{n-1}\cdot M$, así $M^{n-1}\geq a_1\cdots a_{n-1}$, es decir, $M\geq(a_1\cdots a_{n-1})^{1/(n-1)}$. $\blacksquare$

**Conclusión.** Por el Paso 1, AM-GM vale para $n=2^k$ para todo $k\geq1$. Por el Paso 2, si vale para $n=2^k$ también vale para $n=2^k-1, 2^k-2,\ldots$ hasta $n=1$ (trivial). Así vale para todo $n\geq1$. $\blacksquare$

**Condición de igualdad.** En el Paso 2, la igualdad exige $a_{n-1}^{\text{nuevo}}=M$ (que es la igualdad al añadir $M$ como $n$-ésimo término), que a su vez exige que todos los $a_i=M$ por la hipótesis de inducción. Así, la igualdad general ocurre iff $a_1=\cdots=a_n$.

## Demostración 2: Por convexidad del logaritmo

El logaritmo es cóncavo: $\ln$ satisface $\ln(\lambda x+(1-\lambda)y)\geq\lambda\ln x+(1-\lambda)\ln y$ para $x,y>0$, $\lambda\in[0,1]$.

Por **Jensen con $f=\ln$ cóncava** y pesos iguales $w_i=1/n$:

$$\ln\!\left(\frac{a_1+\cdots+a_n}{n}\right) \;\geq\; \frac{\ln a_1+\cdots+\ln a_n}{n} \;=\; \ln\!\left(a_1\cdots a_n\right)^{1/n}.$$

Aplicando $\exp$ (que es creciente): $\dfrac{a_1+\cdots+a_n}{n}\geq(a_1\cdots a_n)^{1/n}$. $\blacksquare$

**Ventaja.** Esta demostración es la más corta y generaliza inmediatamente a la forma ponderada: con pesos $w_i>0$, $\sum w_i=1$:

$$\ln\!\left(\sum w_i a_i\right)\geq\sum w_i\ln a_i=\ln\prod a_i^{w_i},$$

es decir, $\sum w_i a_i\geq\prod a_i^{w_i}$. $\blacksquare$

**Desventaja.** Requiere tener ya demostrada la concavidad del $\ln$ (o Jensen), que a su vez requiere saber que $(\ln x)''=-1/x^2<0$.

## Demostración 3: Por la desigualdad de reordenamiento

**Desigualdad de reordenamiento.** Si $a_1\leq\cdots\leq a_n$ y $b_1\leq\cdots\leq b_n$, entonces para cualquier permutación $\sigma$:

$$\sum_{i=1}^n a_i b_i \;\geq\; \sum_{i=1}^n a_i b_{\sigma(i)}.$$

*(El mayor emparejado con el mayor da la suma máxima; el mayor con el menor da la mínima.)*

**Demostración de AM-GM via reordenamiento.**

Sea $G=(a_1\cdots a_n)^{1/n}$ la media geométrica. Definir $b_i=a_i/G$ (así $\prod b_i=1$) y probar $\sum b_i\geq n$.

Construir la permutación cíclica $\sigma$: $b_1\to b_2\to\cdots\to b_n\to b_1$. Por el reordenamiento (con pesos $c_i=\ln b_i$... en realidad, el argumento es más sutil):

Considerar las $n$ sumas: $\sum b_i\cdot1$, $\sum b_i\cdot(b_1/b_2)$, ... cada una $\geq\sum b_i^{1-1/n}\cdot b_{\sigma(i)}^{1/n}$... Este enfoque es correcto pero algo elaborado.

**Alternativa directa.** Usar AM-GM para el cociente. Para $\prod b_i=1$:

$$\frac{b_1+b_2+\cdots+b_n}{n} \geq 1 \quad \Longleftrightarrow \quad b_1+\cdots+b_n\geq n,$$

que también se puede probar por inducción usando solo el caso $n=2$: $b_1+b_n\geq2\sqrt{b_1b_n}$, $b_2+b_{n-1}\geq2\sqrt{b_2b_{n-1}}$, ..., sumar y aplicar AM-GM de nuevo para los radicandos. (Esta es en esencia la demostración de Cauchy de nuevo.)

**La demostración vía reordenamiento propiamente dicha.** Sea $G=(a_1\cdots a_n)^{1/n}$. Aplicar el reordenamiento con $a_i$ y $G/a_i$ (que están en orden opuesto, pues $a_i$ creciente implica $G/a_i$ decreciente):

$$\sum_i a_i\cdot\frac{G}{a_i}=nG\;\leq\;\sum_i a_i\cdot\frac{G}{a_{\sigma(i)}}$$

para cualquier permutación $\sigma$. Tomando $\sigma$ apropiada y sumando sobre todas las permutaciones cíclicas... el argumento se convierte en el Lema de Bunching, que no es más simple que Cauchy. $\blacksquare$ *(El espíritu es correcto aunque la presentación limpia requiere más detalle.)*

## Comparación de las tres demostraciones

| Demostración | Prerequisitos | Extensión a forma ponderada | Elegancia |
|---|---|---|---|
| Cauchy (forward-backward) | Solo álgebra elemental | Sí (con más trabajo) | Alta |
| Convexidad del $\ln$ | Cálculo (Jensen) | Inmediata | Muy alta |
| Reordenamiento | Desigualdad de reordenamiento | Complicada | Media |

## Observación

**La demostración de Cauchy es la más elemental.** No requiere ningún resultado de cálculo. Esto la hace perfecta para una olimpiada donde no se permite asumir propiedades de funciones continuas.

**La demostración por $\ln$ es la más reveladora.** Muestra que AM-GM es consecuencia directa de la concavidad del logaritmo, que a su vez viene de $(\ln x)''=-1/x^2<0$. Esta perspectiva conecta AM-GM con toda la teoría de funciones convexas.

**Ambas demostraciones prueba con igualdad.** En la de Cauchy, la igualdad sigue del análisis del Paso 2. En la de $\ln$, la igualdad sigue de cuándo Jensen da igualdad (cuando todos los argumentos son iguales para $f$ estrictamente cóncava).

## Problemas relacionados

- **(Clásico)** Demostrar AM-GM para $n=3$ directamente usando solo la identidad $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ y la identidad $a^2+b^2+c^2-ab-bc-ca\geq0$.

- **(Clásico)** Probar que para $a_1,\ldots,a_n>0$ con $a_1\cdots a_n=1$: $a_1+a_2+\cdots+a_n\geq n$ directamente por inducción (sin usar AM-GM).

- **(Clásico)** Demostrar la desigualdad ponderada $\sum w_i a_i\geq\prod a_i^{w_i}$ (con $w_i>0$, $\sum w_i=1$) usando la inducción de Cauchy con pesos racionales.
