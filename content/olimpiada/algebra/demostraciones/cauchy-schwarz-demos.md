---
title: "Dos demostraciones de Cauchy-Schwarz"
preview: "La desigualdad de Cauchy-Schwarz se prueba en dos líneas por el discriminante de un polinomio cuadrático, o por la identidad de Lagrange. Ambas perspectivas son útiles en competición."
dificultad: regional
tags: [cauchy-schwarz, demostracion, discriminante, lagrange, identidad]
prerequisites: [cauchy-schwarz]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Cauchy-Schwarz es tan fundamental que vale la pena conocer más de una demostración. La prueba por discriminante es la más breve; la identidad de Lagrange es la más informativa (da exactamente cuándo hay igualdad y cuánto falta para la igualdad).

## Demostración 1: Por el discriminante (Cauchy, 1821)

**Enunciado.** Para $a_1,\ldots,a_n, b_1,\ldots,b_n\in\mathbb{R}$:

$$\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right)\geq\left(\sum_{i=1}^n a_i b_i\right)^2.$$

**Demostración.** Considera el polinomio en $t$:

$$P(t) = \sum_{i=1}^n (a_i t - b_i)^2 \;\geq\; 0 \quad\text{para todo }t\in\mathbb{R}.$$

Expandiendo:

$$P(t) = \left(\sum a_i^2\right)t^2 - 2\left(\sum a_i b_i\right)t + \sum b_i^2.$$

Sea $A=\sum a_i^2$, $B=\sum a_ib_i$, $C=\sum b_i^2$. Entonces $P(t)=At^2-2Bt+C\geq0$.

Como $P(t)\geq0$ para todo $t\in\mathbb{R}$, su discriminante es no positivo:

$$\Delta = 4B^2 - 4AC \;\leq\; 0 \implies B^2\leq AC \implies \left(\sum a_ib_i\right)^2\leq\left(\sum a_i^2\right)\left(\sum b_i^2\right). \;\blacksquare$$

**Condición de igualdad.** $\Delta=0$ iff $P(t)=0$ tiene raíz doble $t_0=-B/A$ (si $A\neq0$). Esto requiere $a_it_0=b_i$ para todo $i$, es decir, $b_i=t_0 a_i$: los vectores son proporcionales. Si $A=0$ entonces $a_i=0$ para todo $i$ y la igualdad es trivial.

**Nota.** Esta demostración funciona sobre cualquier campo ordenado (no solo $\mathbb{R}$), e incluso sobre $\mathbb{C}$ si se usa $|a_it-b_i|^2$.

## Demostración 2: Identidad de Lagrange

**Identidad de Lagrange.** Para $a_1,\ldots,a_n, b_1,\ldots,b_n\in\mathbb{R}$:

$$\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right) - \left(\sum_{i=1}^n a_ib_i\right)^2 \;=\; \sum_{1\leq i<j\leq n}(a_ib_j-a_jb_i)^2.$$

**Demostración de la identidad.** Expandir el lado izquierdo:

$$\left(\sum_i a_i^2\right)\left(\sum_j b_j^2\right)-\left(\sum_k a_kb_k\right)^2$$

$$=\sum_{i,j}a_i^2b_j^2 - \sum_{k,l}a_kb_ka_lb_l$$

$$= \frac{1}{2}\left[\sum_{i,j}a_i^2b_j^2 - 2\sum_{i,j}a_ia_jb_ib_j + \sum_{i,j}a_j^2b_i^2\right]$$

$$= \frac{1}{2}\sum_{i,j}(a_ib_j-a_jb_i)^2 = \sum_{i<j}(a_ib_j-a_jb_i)^2. \;\blacksquare$$

**Cauchy-Schwarz como consecuencia.** Como $(a_ib_j-a_jb_i)^2\geq0$, el lado derecho de la identidad es $\geq0$, y Cauchy-Schwarz se sigue inmediatamente. $\blacksquare$

**Ventaja sobre la Demostración 1.** La identidad de Lagrange da más información:

1. **Cuánto falta para la igualdad.** La diferencia $AC-B^2=\sum_{i<j}(a_ib_j-a_jb_i)^2$ mide exactamente cuánto "se aleja" de la igualdad.

2. **Condición de igualdad más clara.** Igualdad iff todos los $a_ib_j-a_jb_i=0$, es decir, iff los vectores $(a_1,\ldots,a_n)$ y $(b_1,\ldots,b_n)$ son proporcionales.

3. **Interpretación geométrica.** En el caso $n=2$: $(a_1^2+a_2^2)(b_1^2+b_2^2)-(a_1b_1+a_2b_2)^2=(a_1b_2-a_2b_1)^2$, que es el cuadrado del área del paralelogramo formado por los dos vectores. Cauchy-Schwarz dice que el área del paralelogramo es $\leq$ el producto de los módulos, lo que es equivalente a $|\sin\theta|\leq1$.

## Demostración 3: Algebraica por completar el cuadrado (caso $n=2$)

Para $n=2$ y como ilustración pedagógica:

$$(a_1^2+a_2^2)(b_1^2+b_2^2)-(a_1b_1+a_2b_2)^2$$

$$= a_1^2b_1^2+a_1^2b_2^2+a_2^2b_1^2+a_2^2b_2^2 - a_1^2b_1^2-2a_1b_1a_2b_2-a_2^2b_2^2$$

$$= a_1^2b_2^2 - 2a_1b_2a_2b_1 + a_2^2b_1^2 = (a_1b_2-a_2b_1)^2 \;\geq\; 0. \;\blacksquare$$

*(Este es el caso $n=2$ de la identidad de Lagrange.)*

## La forma de Engel desde Cauchy-Schwarz

**Derivación de la forma de Engel.** Para demostrar $\sum\dfrac{a_i^2}{b_i}\geq\dfrac{(\sum a_i)^2}{\sum b_i}$:

Aplicar Cauchy-Schwarz con vectores $\mathbf{u}=(a_1/\sqrt{b_1},\ldots,a_n/\sqrt{b_n})$ y $\mathbf{v}=(\sqrt{b_1},\ldots,\sqrt{b_n})$:

$$\left(\sum\frac{a_i^2}{b_i}\right)\left(\sum b_i\right) \;\geq\; \left(\sum\frac{a_i}{\sqrt{b_i}}\cdot\sqrt{b_i}\right)^2 = \left(\sum a_i\right)^2.$$

Dividiendo entre $\sum b_i>0$: forma de Engel. $\blacksquare$

## Cauchy-Schwarz sobre $\mathbb{C}$

Para vectores complejos $\mathbf{a}=(a_1,\ldots,a_n)$ y $\mathbf{b}=(b_1,\ldots,b_n)$:

$$\left(\sum|a_i|^2\right)\left(\sum|b_i|^2\right)\geq\left|\sum a_i\overline{b_i}\right|^2.$$

La demostración es idéntica con $P(t)=\sum|a_it-b_i|^2\geq0$ para $t\in\mathbb{C}$... más precisamente, con $t=\sum a_i\overline{b_i}/\sum|a_i|^2$ (número complejo). $\blacksquare$

## Observación

**¿Cuál demostración usar?** La del discriminante es la más corta y suficiente para casi todo. La de la identidad de Lagrange es mejor para entender qué ocurre cuando se acerca a la igualdad.

**La demostración por discriminante es sorprendentemente poderosa.** El mismo truco (construir un polinomio no negativo y explotar su discriminante) aparece en varias otras desigualdades en olimpiada.

**La identidad de Lagrange tiene análoga vectorial.** El producto vectorial $\mathbf{a}\times\mathbf{b}$ satisface $|\mathbf{a}|^2|\mathbf{b}|^2=|\mathbf{a}\cdot\mathbf{b}|^2+|\mathbf{a}\times\mathbf{b}|^2$, que es exactamente la identidad de Lagrange para $n=3$. Cauchy-Schwarz equivale a $|\mathbf{a}\times\mathbf{b}|\geq0$, que es trivial geométricamente.

## Problemas relacionados

- **(Clásico)** Probar Cauchy-Schwarz para funciones integrales: $\left(\int_a^b f g\right)^2\leq\int_a^b f^2\cdot\int_a^b g^2$, siguiendo la misma idea del discriminante con el polinomio $P(\lambda)=\int_a^b(f+\lambda g)^2\,dx$.

- **(Clásico)** Probar la desigualdad de Chebyshev: si $a_1\leq\cdots\leq a_n$ y $b_1\leq\cdots\leq b_n$, entonces $n\sum a_ib_i\geq(\sum a_i)(\sum b_i)$. *(Hint: usar reordenamiento.)*

- **(Clásico)** Usar la identidad de Lagrange para demostrar que el área de un paralelogramo con lados $\overrightarrow{u}=(a,b)$ y $\overrightarrow{v}=(c,d)$ es $|ad-bc|$, y que esto es $\leq|\overrightarrow{u}||\overrightarrow{v}|$.
