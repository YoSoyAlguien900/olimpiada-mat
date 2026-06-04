---
title: "Inducción matemática: ordinaria, fuerte y bien fundada"
preview: "La técnica de demostración más fundamental de la matemática discreta. Dominada correctamente, la inducción no es solo un método para probar fórmulas sino una forma de pensar sobre cualquier propiedad que crece con los enteros."
dificultad: iniciacion
tags: [induccion, induccion-fuerte, demostracion, buen-orden]
prerequisites: []
author: "Material olímpico"
updated: "2026-06-03"
---

La inducción matemática es, junto con la contradicción, el método de demostración más utilizado en teoría de números. Pero a diferencia de la contradicción —que solo dice «si no es esto, tampoco puede ser aquello»— la inducción es **constructiva**: construye la demostración hacia adelante, un paso a la vez.

La idea es simple: si una propiedad $P(n)$ vale para $n = 1$ (o cualquier $n_0$ inicial) y si saber que vale para $n$ nos permite probarla para $n + 1$, entonces vale para todos los enteros $\geq n_0$. Esto no es más que la observación de que los enteros son la estructura más simple donde cada número tiene un sucesor inmediato — y si puedes subir cualquier escalón, puedes llegar a cualquier peldaño.

## Teorema

**(Principio de inducción matemática)** Sea $P(n)$ una afirmación que depende de un entero $n$. Si:

1. **Caso base:** $P(n_0)$ es verdadera para algún entero $n_0$.
2. **Paso inductivo:** Para todo entero $n \geq n_0$, si $P(n)$ es verdadera entonces $P(n+1)$ también lo es.

Entonces $P(n)$ es verdadera para todo entero $n \geq n_0$.

**Equivalencia con el buen orden.** El principio de inducción es equivalente al **principio del buen orden**: todo subconjunto no vacío de $\mathbb N$ tiene un elemento mínimo. Ambos son axiomas equivalentes que caracterizan a $\mathbb N$ entre los órdenes totales.

## Inducción fuerte (completa)

A veces el paso inductivo requiere asumir no solo $P(n)$, sino $P(k)$ para todos $k \leq n$.

## Teorema

**(Inducción fuerte)** Si:

1. $P(n_0)$ es verdadera.
2. Para todo $n \geq n_0$: si $P(k)$ es verdadera para todos $n_0 \leq k \leq n$, entonces $P(n+1)$ también.

Entonces $P(n)$ es verdadera para todo $n \geq n_0$.

La inducción fuerte es lógicamente equivalente a la ordinaria, pero más cómoda cuando el paso inductivo necesita el resultado para valores muy anteriores a $n$.

## Ejemplo

### Inducción ordinaria

**Ejemplo 1.** Demostrar que $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ para todo $n \geq 1$.

**Caso base ($n = 1$).** $1 = 1 \cdot 2 / 2 = 1$. ✓

**Paso inductivo.** Supongamos $1 + 2 + \cdots + n = n(n+1)/2$ (hipótesis inductiva, HI). Entonces:

$$\sum_{k=1}^{n+1} k = \left(\sum_{k=1}^{n} k\right) + (n+1) \stackrel{HI}{=} \frac{n(n+1)}{2} + (n+1) = (n+1)\left(\frac{n}{2} + 1\right) = \frac{(n+1)(n+2)}{2}.$$

Esto es exactamente la fórmula para $n + 1$. $\blacksquare$

---

**Ejemplo 2.** Demostrar la desigualdad de Bernoulli: $(1+x)^n \geq 1 + nx$ para todo $n \geq 1$ y $x > -1$.

**Caso base ($n = 1$).** $(1+x)^1 = 1 + x \geq 1 + x$. ✓

**Paso inductivo.** Supongamos $(1+x)^n \geq 1 + nx$. Como $1 + x > 0$:

$$(1+x)^{n+1} = (1+x)^n (1+x) \geq (1 + nx)(1 + x) = 1 + (n+1)x + nx^2 \geq 1 + (n+1)x.$$

$\blacksquare$

---

**Ejemplo 3.** Para todo $n \geq 1$, $1 \cdot 1! + 2 \cdot 2! + 3 \cdot 3! + \cdots + n \cdot n! = (n+1)! - 1$.

**Caso base.** $1 \cdot 1! = 1 = 2! - 1$. ✓

**Paso inductivo.** $\sum_{k=1}^{n+1} k \cdot k! = ((n+1)! - 1) + (n+1)(n+1)! = (n+1)!(1 + n+1) - 1 = (n+2)! - 1$. $\blacksquare$

---

### Inducción fuerte

**Ejemplo 4.** Todo entero $n \geq 2$ es producto de primos.

**Caso base ($n = 2$).** $2$ es primo, así es producto de un solo primo. ✓

**Paso inductivo (fuerte).** Sea $n \geq 3$. Supongamos que todo entero $m$ con $2 \leq m < n$ es producto de primos. Hay dos casos:

- Si $n$ es primo: es producto de un primo (sí mismo).
- Si $n$ es compuesto: $n = ab$ con $2 \leq a, b < n$. Por HI fuerte, $a$ y $b$ son productos de primos. Concatenando: $n = ab$ es producto de primos.

*(La inducción ordinaria no basta: si $n = 15 = 3 \cdot 5$, necesitamos el resultado para $3$ y $5$, no para $14 = n-1$.)*

$\blacksquare$

---

**Ejemplo 5.** (Teorema de Zeckendorf) Todo entero positivo $n$ se escribe de forma única como suma de Fibonacci no consecutivos.

**Existencia** (por inducción fuerte sobre $n$).

*Caso base:* $n = 1 = F_2$. ✓

*Paso inductivo:* Sea $n > 1$. Sea $F_k$ el mayor Fibonacci con $F_k \leq n$. Si $n = F_k$, hecho. Si $n > F_k$, sea $r = n - F_k$. Entonces $r < F_k$ (pues $n < F_{k+1} = F_k + F_{k-1}$, así $r < F_{k-1}$) y $r < n$, así por HI fuerte, $r$ se escribe como suma de Fibonacci no consecutivos, y ninguno de ellos es $F_{k-1}$ (pues $r < F_{k-1}$), así $F_k$ no es consecutivo con ninguno en la representación de $r$.

*(La unicidad requiere un argumento adicional por mínimo.)*

---

**Ejemplo 6.** Demostrar que $n! > 2^n$ para todo $n \geq 4$.

*Caso base ($n = 4$).* $24 > 16$. ✓

*Paso inductivo.* $(n+1)! = (n+1) \cdot n! > (n+1) \cdot 2^n$. Como $n \geq 4$, $n+1 \geq 5 > 2$, así $(n+1) \cdot 2^n > 2 \cdot 2^n = 2^{n+1}$. $\blacksquare$

---

### Inducción con múltiples bases

A veces el paso inductivo requiere más de un caso base.

**Ejemplo 7.** (Azulejos de Fibonacci) El número de formas de cubrir un tablero de $1 \times n$ con piezas de $1 \times 1$ y $1 \times 2$ es $F_{n+1}$ (el $(n+1)$-ésimo de Fibonacci).

Sean $T(n)$ = número de formas. La recurrencia: $T(n) = T(n-1) + T(n-2)$ (la pieza más a la derecha ocupa $1$ o $2$ casillas).

*Casos base:* $T(1) = 1 = F_2$ (solo un azulejo de $1$), $T(2) = 2 = F_3$ (dos de $1\times 1$ o uno de $1\times 2$).

*Paso inductivo (para $n \geq 3$):* $T(n) = T(n-1) + T(n-2) = F_n + F_{n-1} = F_{n+1}$. $\blacksquare$

---

### Inducción hacia atrás

A veces es más fácil probar primero para $n$ potencia de $2$ y luego para valores intermedios.

**Ejemplo 8.** (Media aritmética $\geq$ media geométrica, caso $n$ potencia de $2$)

Para $n = 2^k$: la AM-GM dice $\frac{a_1 + \cdots + a_n}{n} \geq (a_1 \cdots a_n)^{1/n}$.

*Paso base ($n = 2$):* $\frac{a + b}{2} \geq \sqrt{ab}$ sii $(a + b)^2 \geq 4ab$ sii $(a-b)^2 \geq 0$. ✓

*Duplicación ($n \to 2n$):* Dada AM-GM para $n$ variables, para $2n$ variables:

$$\frac{a_1 + \cdots + a_{2n}}{2n} = \frac{\frac{a_1+\cdots+a_n}{n} + \frac{a_{n+1}+\cdots+a_{2n}}{n}}{2} \geq \frac{\sqrt{G_1 G_2 \cdot \ldots} }{1}$$

donde $G_1 = (a_1 \cdots a_n)^{1/n}$, $G_2 = (a_{n+1}\cdots a_{2n})^{1/n}$:

$$\frac{a_1+\cdots+a_{2n}}{2n} \geq \frac{G_1 + G_2}{2} \geq \sqrt{G_1 G_2} = (a_1 \cdots a_{2n})^{1/(2n)}. \qquad \square$$

*Descenso ($n \to n-1$):* Si AM-GM vale para $n$ variables, aplicar a $a_1, \ldots, a_{n-1}, A$ donde $A = (a_1 + \cdots + a_{n-1})/(n-1)$:

$$\frac{(n-1)A + A}{n} \geq (a_1 \cdots a_{n-1} A)^{1/n} \implies A \geq (a_1 \cdots a_{n-1})^{1/(n-1)}.$$

Combinando: AM-GM vale para todo $n$.

## Errores típicos

**Error 1: caso base ausente.** La famosa «demostración» de que todos los caballos son del mismo color (Pólya) falla porque el paso $n = 1 \to n = 2$ no es válido (dos grupos con un elemento de intersección vacía).

**Error 2: usar la conclusión.** El paso inductivo debe *deducir* $P(n+1)$ de $P(n)$, no *asumir* $P(n+1)$. «Tomamos el entero más grande entre los primos…» ya asume lo que hay que probar.

**Error 3: inducción en la dirección equivocada.** Para resultados que dicen «existe $n$ suficientemente grande tal que…», la inducción ordinaria hacia adelante es la correcta. Para «para todo $n$ desde $n_0$ hasta $N$», puede ser necesaria inducción descendente.

**Error 4: hipótesis demasiado débil.** Probar algo «para algún $n$» por inducción falla si la hipótesis no es lo suficientemente fuerte para dar el paso inductivo. La solución clásica es reforzar la hipótesis.

## Observación

**Inducción estructural.** En objetos recursivos (árboles, grafos, expresiones formales), la inducción se hace sobre la **estructura**: el caso base es la estructura atómica (hojas, vértice aislado) y el paso inductivo descompone la estructura en partes más pequeñas. Este es el tipo de inducción usado en análisis de algoritmos y teoría de grafos.

**El buen orden como alternativa.** Muchas demostraciones por inducción se pueden reformular así: «supongamos que el conjunto $S = \{n : P(n) \text{ falla}\}$ es no vacío; sea $m$ su mínimo; derivamos una contradicción». Esto es el descenso infinito de Fermat, equivalente a la inducción fuerte.

**Inducción transfinita.** Para estructuras más ricas que $\mathbb N$ (ordinales transfinitos, conjuntos bien ordenados), la inducción se generaliza. Es la herramienta central en lógica matemática y teoría de conjuntos.

## Problemas relacionados

- **(Clásico)** Probar $\sum_{k=1}^n k^3 = (n(n+1)/2)^2$ por inducción.

- **(Desigualdad de Bernoulli generalizada)** Para $r > 1$: $(1+x)^r \geq 1 + rx$ para $x > -1$.

- **(Clásico)** Probar que para $n \geq 2$, $\sqrt n < \sqrt{n-1} + \frac{1}{2\sqrt{n-1}}$.

- **(Clásico de inducción fuerte)** Para todo $n$, $\frac{1}{1^2} + \frac{1}{2^2} + \cdots + \frac{1}{n^2} < 2 - \frac{1}{n}$.

- **(OME 2014)** Sea $a_1 = 2$ y $a_{n+1} = a_n^2 - a_n + 1$ para $n \geq 1$. Demostrar por inducción que $\sum_{k=1}^n 1/a_k < 1$ para todo $n$.

- **(Clásico de dos pasos)** Demostrar que $\lfloor n/2 \rfloor \lceil n/2 \rceil = \lfloor n^2/4 \rfloor$ para todo $n \geq 0$.
