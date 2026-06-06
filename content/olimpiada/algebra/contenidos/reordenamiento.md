---
title: "Desigualdad de reordenamiento y Chebyshev"
preview: "La desigualdad de reordenamiento dice que el producto escalar máximo se obtiene cuando dos sucesiones están ordenadas en el mismo sentido. La desigualdad de Chebyshev es su consecuencia más directa. Ambas son alternativas a Cauchy-Schwarz en problemas de sumas simétricas."
dificultad: nacional
tags: [desigualdades, reordenamiento, chebyshev, simetrico, olimpiada]
prerequisites: [am-gm, cauchy-schwarz, desigualdades-basicas]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad de reordenamiento es, junto con AM-GM y Cauchy-Schwarz, una de las tres grandes herramientas de las desigualdades elementales. Su enunciado es intuitivo (para maximizar el producto escalar de dos vectores, hay que ordenarlos igual) y su prueba es elemental. Aparece en muchas situaciones donde Cauchy-Schwarz no es directamente aplicable.

---

## Desigualdad de reordenamiento

**Enunciado.** Sean $a_1\leq a_2\leq\cdots\leq a_n$ y $b_1\leq b_2\leq\cdots\leq b_n$ dos sucesiones de reales. Para cualquier permutación $\sigma\in S_n$:

$$\sum_{i=1}^n a_i b_{n+1-i} \;\leq\; \sum_{i=1}^n a_i b_{\sigma(i)} \;\leq\; \sum_{i=1}^n a_i b_i.$$

Dicho de otro modo:
- La **suma máxima** $\sum a_ib_i$ se obtiene cuando las dos sucesiones están ordenadas **en el mismo sentido** (ambas crecientes o ambas decrecientes).
- La **suma mínima** $\sum a_ib_{n+1-i}$ se obtiene cuando están ordenadas **en sentido opuesto**.

**Igualdad.** En la desigualdad superior: iff $a_1=\cdots=a_n$ o $b_1=\cdots=b_n$. En la inferior: análogamente.

---

## Demostración

**Lema.** Si $a\leq b$ y $x\leq y$, entonces $ax+by\geq ay+bx$.

*Prueba.* $ax+by-ay-bx=(a-b)(x-y)\geq0$ (producto de dos factores con el mismo signo). $\square$

**Prueba de la desigualdad de reordenamiento.** Dada cualquier permutación $\sigma$, mostrar que puede mejorarse intercambiando dos índices hasta llegar al orden natural.

Suponer que $\sigma$ no es la identidad: existen $i<j$ con $\sigma(i)>\sigma(j)$ (una inversión). Sea $p=\sigma(i)$ y $q=\sigma(j)$, con $p>q$. Como $a_i\leq a_j$ y $b_q\leq b_p$ (pues $q<p$):

$$a_ib_p+a_jb_q\leq a_ib_q+a_jb_p.$$

*(Lemma con $a=a_i\leq a_j=b$ y $x=b_q\leq b_p=y$.)*

Intercambiar $\sigma(i)$ y $\sigma(j)$ no decrece la suma. Repitiendo (a lo sumo $\binom{n}{2}$ veces), se llega a la identidad. $\square$

---

## Desigualdad de Chebyshev

**Enunciado.** Si $a_1\leq\cdots\leq a_n$ y $b_1\leq\cdots\leq b_n$ (misma dirección), entonces:

$$\boxed{n\sum_{i=1}^n a_ib_i \;\geq\; \left(\sum_{i=1}^n a_i\right)\left(\sum_{i=1}^n b_i\right).}$$

Si están en sentido opuesto ($a_1\leq\cdots\leq a_n$, $b_1\geq\cdots\geq b_n$): la desigualdad se invierte.

**Demostración.** Sumar la desigualdad de reordenamiento para todas las permutaciones cíclicas:

$$\sum_{i=1}^n a_ib_i\geq\sum_i a_ib_{\sigma_k(i)} \quad\text{para cada permutación cíclica }\sigma_k.$$

Sumando las $n$ permutaciones cíclicas $(b_1,\ldots,b_n)$, $(b_2,\ldots,b_n,b_1)$, ...: cada $b_j$ aparece exactamente una vez con cada $a_i$:

$$n\sum_i a_ib_i\geq\sum_i a_i\cdot\sum_j b_j=\left(\sum a_i\right)\left(\sum b_j\right). \;\square$$

---

## Aplicaciones clásicas

### AM-GM desde reordenamiento

Para $a_1,\ldots,a_n>0$, aplicar reordenamiento a las sucesiones $(a_1,\ldots,a_n)$ (ordenadas crecientes) y a las mismas $(a_1,\ldots,a_n)$, contra la permutación cíclica:

$$a_1^2+a_2^2+\cdots+a_n^2\geq a_1a_2+a_2a_3+\cdots+a_na_1.$$

*(Esto no da AM-GM directamente, pero ilustra el principio.)*

### Nesbitt desde Chebyshev

Para $a,b,c>0$, demostrar que $\dfrac{a}{b+c}+\dfrac{b}{a+c}+\dfrac{c}{a+b}\geq\dfrac{3}{2}$.

Las sucesiones $(a,b,c)$ y $\left(\frac{1}{b+c},\frac{1}{a+c},\frac{1}{a+b}\right)$ están en el mismo orden (si $a\geq b$ entonces $b+c\leq a+c$ solo si... no, esto es más sutil). Alternativamente, usar Cauchy-Engel. Reordenamiento aquí es más indirecto.

### $a^3+b^3+c^3\geq a^2b+b^2c+c^2a$

**FALSO en general.** La desigualdad $a^3+b^3+c^3\geq a^2b+b^2c+c^2a$ no es simétrica (el lado derecho es cíclico, no simétrico). **Reordenamiento no aplica directamente a desigualdades cíclicas**.

Esto es un error frecuente: reordenamiento solo funciona con expresiones **simétricas**.

### Ejemplo correcto: $a^2b+b^2c+c^2a+a^2c+b^2a+c^2b\geq6abc$

Esto sí es simétrico. Por reordenamiento aplicado a $(a,b,c)$ vs $(ab, bc, ca)$ — o directamente AM-GM. $\square$

---

## Ejemplo de olimpiada

**Ejemplo.** Para $a,b,c>0$, demostrar que $a^3+b^3+c^3\geq a^2b+b^2c+c^2a+a^2c+b^2a+c^2b - ?$...

Mejor ejemplo: **demostrar que $a^4+b^4+c^4\geq a^3b+b^3c+c^3a$**.

Suponer WLOG $a\geq b\geq c>0$. Entonces $a^3\geq b^3\geq c^3$ y $a\geq b\geq c$. Por reordenamiento:

$$a^3\cdot a+b^3\cdot b+c^3\cdot c\geq a^3\cdot b+b^3\cdot c+c^3\cdot a.$$

*(La suma $a^4+b^4+c^4$ es la suma "ordenada igualmente", mientras que $a^3b+b^3c+c^3a$ es una suma bajo una permutación cíclica.)* $\square$

---

## Cuándo usar reordenamiento vs Cauchy-Schwarz

| Técnica | Cuándo | Forma típica |
|---|---|---|
| Reordenamiento | Expresiones simétricas donde el orden importa; cuando "lo mayor va con lo mayor" | $\sum a_ib_i\geq\sum a_ib_{\sigma(i)}$ |
| Chebyshev | Cuando la suma del producto es mayor que el producto de las sumas | $n\sum a_ib_i\geq(\sum a_i)(\sum b_i)$ |
| Cauchy-Schwarz | Cuando hay raíces cuadradas o cocientes de cuadrados | $(\sum a_ib_i)^2\leq(\sum a_i^2)(\sum b_i^2)$ |

**Regla práctica.** Si el problema tiene sumas simétricas de la forma $\sum f(a_i)g(b_i)$, y puedes ordenar ambas, prueba reordenamiento. Si hay cocientes o raíces, prueba Cauchy.

---

## Observación

**Reordenamiento no funciona con expresiones cíclicas.** Una expresión simétrica $P(a,b,c)$ toma el mismo valor para cualquier permutación de $a,b,c$. Una cíclica solo para permutaciones cíclicas. Reordenamiento requiere simetría.

**El lema del intercambio es el corazón de la prueba.** Si tienes una permutación no óptima, puedes siempre mejorarla intercambiando dos elementos. Este argumento "bubble-sort" aparece también en la demostración de que el algoritmo de la burbuja termina.

**Chebyshev es más débil que Cauchy.** Chebyshev da $\sum a_ib_i\geq\frac{1}{n}(\sum a_i)(\sum b_i)$, mientras que Cauchy da $(\sum a_ib_i)^2\leq(\sum a_i^2)(\sum b_i^2)$. Son comparables pero diferentes.

## Problemas relacionados

- **(Nacional)** Para $a,b,c>0$, demostrar que $a^3+b^3+c^3\geq a^2b+b^2c+c^2a$. *(Hint: no es simétrica; probar por SOS o por Schur.)*

- **(Nacional)** Para $a\geq b\geq c>0$ con $a+b+c=1$, demostrar que $a^2+b^2+c^2\geq1/3$. *(Chebyshev: $a^2+b^2+c^2=\sum a\cdot a\geq\frac{1}{3}(\sum a)^2=1/3$.)*

- **(Nacional)** Demostrar que para $a_1\geq a_2\geq\cdots\geq a_n>0$ y cualquier permutación $\sigma$: $\sum a_i^2\geq\sum a_ia_{\sigma(i)}$. *(Reordenamiento: la suma mayor es con $\sigma=\text{id}$.)*

- **(Nacional)** Para $a_1\leq\cdots\leq a_n$ y $b_1\leq\cdots\leq b_n$, demostrar que $n\sum a_ib_i\geq(\sum a_i)(\sum b_i)$ por el método de las permutaciones cíclicas.

- **(Internacional, Chebyshev extendida)** Para $a_1\leq\cdots\leq a_n$ y funciones $f,g$ crecientes: $n\sum f(a_i)g(a_i)\geq(\sum f(a_i))(\sum g(a_i))$.
