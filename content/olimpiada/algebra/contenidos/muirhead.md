---
title: "Muirhead y mayorización"
preview: "Si $(\\alpha_1,\\ldots,\\alpha_n)$ mayoriza a $(\\beta_1,\\ldots,\\beta_n)$, entonces $[\\alpha_1,\\ldots,\\alpha_n]\\geq[\\beta_1,\\ldots,\\beta_n]$ para reales positivos. Muirhead generaliza AM-GM para medias simétricas."
dificultad: internacional
tags: [desigualdades, muirhead, mayorizacion, simetrico, sos]
prerequisites: [am-gm, schur]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad de Muirhead es el resultado más potente para comparar expresiones simétricas homogéneas de reales positivos. Su fuerza radica en que permite verificar si una desigualdad entre medias simétricas es válida con un simple criterio combinatorio: comprobar si un vector de exponentes *mayoriza* al otro.

## Mayorización

**Definición.** Un vector $\mathbf{x} = (x_1, \ldots, x_n) \in \mathbb{R}^n$ **mayoriza** a $\mathbf{y} = (y_1,\ldots,y_n)\in\mathbb{R}^n$ — notación $\mathbf{x} \succ \mathbf{y}$ — si, reordenando ambos vectores en orden decreciente ($x_1\geq\cdots\geq x_n$, $y_1\geq\cdots\geq y_n$):

$$\sum_{i=1}^k x_i \;\geq\; \sum_{i=1}^k y_i \quad \text{para todo } k=1,\ldots,n-1, \quad\text{y}\quad \sum_{i=1}^n x_i = \sum_{i=1}^n y_i.$$

La suma total es la misma; $\mathbf{x}$ tiene sus componentes "más concentradas" hacia valores grandes.

**Ejemplos:**
- $(3,0,0)\succ(2,1,0)\succ(1,1,1)$ *(ordenadas de más a menos concentradas)*
- $(4,1,1,0)\succ(3,2,1,0)$: sumas parciales $4\geq3$, $5\geq5$, $6\geq6$, $6=6$ ✓
- $(2,2)\succ(3,1)$: NO, pues $2<3$ (la primera suma parcial falla)

## Enunciado (Muirhead)

**Media de Muirhead.** Para reales positivos $a_1,\ldots,a_n$ y $\mathbf{x}=(x_1,\ldots,x_n)$ con entradas no negativas:

$$[\mathbf{x}] \;=\; [x_1,\ldots,x_n] \;:=\; \frac{1}{n!}\sum_{\sigma\in S_n} a_{\sigma(1)}^{x_1}\cdots a_{\sigma(n)}^{x_n}.$$

**Teorema de Muirhead.** Si $\mathbf{x}\succ\mathbf{y}$ (con $x_i,y_i\geq0$ y $\sum x_i=\sum y_i$), entonces para todos los reales positivos $a_1,\ldots,a_n$:

$$[x_1,\ldots,x_n] \;\geq\; [y_1,\ldots,y_n],$$

con igualdad si y solo si $a_1=\cdots=a_n$, o si $\mathbf{x}$ y $\mathbf{y}$ son permutaciones una de la otra.

## Ejemplos de medias de Muirhead para $n=3$

Para tres variables $a, b, c > 0$, con la convención de simetría total:

$$[3,0,0] = \frac{a^3+b^3+c^3}{3}, \quad [2,1,0] = \frac{a^2b+a^2c+b^2a+b^2c+c^2a+c^2b}{6},$$

$$[1,1,1] = abc, \quad [2,0,0] \text{ no tiene sentido (sumas distintas)}.$$

La cadena de mayorización $(3,0,0)\succ(2,1,0)\succ(1,1,1)$ se traduce en:

$$\frac{a^3+b^3+c^3}{3} \;\geq\; \frac{a^2b+\cdots+c^2a}{6} \;\geq\; abc,$$

o equivalentemente (multiplicando por 3):

$$a^3+b^3+c^3 \;\geq\; \frac{a^2b+a^2c+b^2a+b^2c+c^2a+c^2b}{2} \;\geq\; 3abc.$$

*(La primera desigualdad es Schur/AM-GM. La segunda es AM-GM: $\frac{a^2b+ab^2}{2}\geq a^{3/2}b^{3/2}$... o más directamente por AM-GM en 6 términos iguales al producto $abc$.)*

## Cómo usar Muirhead

**Paso 1.** Escribir la desigualdad en la forma $[x_1,x_2,x_3]\geq[y_1,y_2,y_3]$.

**Paso 2.** Comprobar que $(x_1,x_2,x_3)\succ(y_1,y_2,y_3)$.

**Paso 3.** Concluir por Muirhead. (No necesita ningún cálculo adicional si la mayorización se verifica.)

**Caveat importante.** En muchas competiciones de alto nivel (IMO, TST), Muirhead **no es aceptado como demostración** porque es no constructivo. Se suele pedir derivar la desigualdad explícitamente via AM-GM, SOS, o Schur. Muirhead sirve para *descubrir* si una desigualdad es verdadera y para orientar la búsqueda de una prueba explícita.

## Ejemplo

**Ejemplo 1.** Para $a,b,c>0$, probar que $a^4+b^4+c^4\geq a^2b^2+b^2c^2+c^2a^2$.

Forma de Muirhead: $[4,0,0]\geq[2,2,0]$?

$(4,0,0)\succ(2,2,0)$: sumas parciales $4\geq2$, $4\geq4$, $4=4$ ✓.

Por Muirhead: $[4,0,0]\geq[2,2,0]$, es decir, $\frac{a^4+b^4+c^4}{3}\geq\frac{a^2b^2+a^2c^2+b^2a^2+b^2c^2+c^2a^2+c^2b^2}{6}$.

Multiplicando por 6: $2(a^4+b^4+c^4)\geq2(a^2b^2+b^2c^2+c^2a^2)$, es decir, $a^4+b^4+c^4\geq a^2b^2+b^2c^2+c^2a^2$. ✓ $\square$

**Prueba explícita (para presentar en olimpiada):** $(a^2-b^2)^2+(b^2-c^2)^2+(c^2-a^2)^2\geq0$, que se expande a $2(a^4+b^4+c^4)-2(a^2b^2+b^2c^2+c^2a^2)\geq0$. $\square$

---

**Ejemplo 2.** Para $a,b,c>0$ con $a+b+c=3$, ¿es verdad que $a^3+b^3+c^3\geq a^2b+b^2c+c^2a$?

Muirhead NO aplica aquí porque $a^2b+b^2c+c^2a$ no es una expresión *simétrica* (hay asimetría cíclica). Muirhead solo funciona con sumas completamente simétricas.

La desigualdad $a^3+b^3+c^3\geq a^2b+b^2c+c^2a$ es en realidad FALSA en general: tomar $a=2,b=1,c=0$: $8+1+0=9\geq4+0+0=4$ ✓. Pero $a=0,b=2,c=1$: $0+8+1=9$ vs $0+4\cdot1+0=4$... Probar con $a=1,b=2,c=0$: $1+8+0=9$ vs $1\cdot2+4\cdot0+0\cdot1=2$. ✓. Probar con $a=\epsilon,b=3,c\approx0$: $\epsilon^3+27+0\approx27$ vs $9\epsilon+0+0\approx0$. ✓. Así parece verdadera pero solo para valores específicos; la desigualdad opuesta puede ocurrir para otros: $a=0,b=\epsilon,c=3$: $0+\epsilon^3+27$ vs $0+\epsilon^2\cdot3+27$: necesitamos $\epsilon^3\geq3\epsilon^2$, es decir, $\epsilon\geq3$, pero $\epsilon$ es pequeño. Así FALLA para $a=0,b=\epsilon,c=3$ con $\epsilon$ pequeño. Por tanto, la desigualdad puede fallar. $\square$ *(No Muirhead, hay que analizar caso a caso.)*

---

**Ejemplo 3.** Para $a,b,c>0$, probar que $a^5+b^5+c^5\geq a^3b^2+b^3c^2+c^3a^2$.

La suma de la derecha es $a^3b^2+b^3c^2+c^3a^2$ (cíclica), no simétrica. NO es aplicable Muirhead directamente.

Se puede intentar Muirhead sobre la versión simetrizada: $a^3b^2+a^3c^2+b^3a^2+b^3c^2+c^3a^2+c^3b^2=[3,2,0]\cdot6$. La desigualdad $[5,0,0]\geq[3,2,0]$: $(5,0,0)\succ(3,2,0)$, suma parcial $5\geq3$, $5\geq5$, $5=5$ ✓. Así la versión simetrizada se cumple, pero la desigualdad asimétrica requiere análisis adicional.

**Prueba directa por AM-GM:** $a^5+a^5+a^5+b^5+b^5\geq5a^3b^2$ (cinco términos, AM-GM). Análogamente. Sumar cíclicamente: $3(a^5+b^5+c^5)+2(a^5+b^5+c^5)=5(a^5+b^5+c^5)\geq5(a^3b^2+b^3c^2+c^3a^2)$. Así $a^5+b^5+c^5\geq a^3b^2+b^3c^2+c^3a^2$. $\square$

---

**Ejemplo 4.** Para $a,b,c>0$, probar que $\dfrac{a^2+b^2+c^2}{ab+bc+ca}\geq1$.

Equivalente a $a^2+b^2+c^2\geq ab+bc+ca$. En Muirhead: $[2,0,0]\geq[1,1,0]$: $(2,0,0)\succ(1,1,0)$, suma parcial $2\geq1$, $2=2$ ✓.

**Prueba directa:** $(a-b)^2+(b-c)^2+(c-a)^2\geq0$ expande a $2(a^2+b^2+c^2)\geq2(ab+bc+ca)$. $\square$

## Aplicaciones

**Cómo Muirhead guía la prueba por AM-GM.** Si $[x_1,\ldots,x_n]\geq[y_1,\ldots,y_n]$ por Muirhead, la diferencia $\mathbf{x}-\mathbf{y}$ de vectores puede escribirse como suma de intercambios elementales. Cada intercambio elemental corresponde a una aplicación de AM-GM de dos términos. Esto da un algoritmo para construir la prueba por AM-GM.

**Muirhead + Schur.** Para $n=3$, una desigualdad entre $e_1,e_2,e_3$ que no cae directamente en Muirhead (por asimetría o por requerir el uso de $abc>0$) suele necesitar Schur como complemento.

## Observación

**La restricción de simetría completa.** Muirhead requiere que ambas medias sean simétricas (sumando sobre todas las permutaciones). Desigualdades con expresiones cíclicas o asimétricas, aunque parezcan similares, no caen dentro de Muirhead.

**En olimpiada, Muirhead se usa para explorar.** Si Muirhead dice que la desigualdad es verdadera, la prueba explícita suele venir de AM-GM aplicado en la forma "ponderada" indicada por el vector de mayorización. Si Muirhead dice que es falsa (no hay mayorización), buscar contraejemplos.

**El recíproco no siempre vale.** Que $[x]\geq[y]$ para todos los reales positivos no implica necesariamente $\mathbf{x}\succ\mathbf{y}$ (el recíproco de Muirhead). Hay desigualdades que se cumplen para razones específicas sin que haya mayorización.

## Problemas relacionados

- **(Clásico)** Probar que $a^4+b^4+c^4+d^4\geq abcd(a+b+c+d)/\text{algo}$... formular usando Muirhead para $n=4$.

- **(Clásico)** Para $a,b,c>0$, probar por Muirhead (y luego por AM-GM explícito) que $a^3+b^3+c^3\geq3abc$.

- **(Nacional)** Para $a,b,c>0$ con $a+b+c=1$, determinar (usando Muirhead como exploración) si $a^2+b^2+c^2\leq\frac{1}{2}(a^3+b^3+c^3)+\frac{1}{2}$. Demostrar el resultado.

- **(Internacional)** Para $a,b,c>0$, probar que $\dfrac{a^3}{b^2-bc+c^2}+\dfrac{b^3}{c^2-ca+a^2}+\dfrac{c^3}{a^2-ab+b^2}\geq a+b+c$.

- **(ISL)** Usando que $[4,1,0]\succ[3,2,0]\succ[2,2,1]$, deducir una cadena de desigualdades para $a,b,c>0$ y verificar la cadena por AM-GM.
