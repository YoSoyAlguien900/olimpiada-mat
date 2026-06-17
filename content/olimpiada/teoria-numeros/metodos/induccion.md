---
title: "Inducción matemática: ordinaria, fuerte y bien fundada"
preview: "La técnica de demostración más fundamental de la matemática discreta. Dominada correctamente, la inducción no es solo un método para probar fórmulas sino una forma de pensar sobre cualquier propiedad que crece con los enteros."
dificultad: iniciacion
tags: [induccion, induccion-fuerte, demostracion, buen-orden]
prerequisites: []
author: "Adrián García Bouzas"
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

*La idea común.* En toda inducción ordinaria, el paso de $n$ a $n+1$ se hace con **una misma maniobra**: aislar la última pieza nueva (el último sumando, el último factor) para que aparezca la expresión de $n$, y ahí sustituir por la hipótesis inductiva.

**Ejemplo 1.** Demostrar que $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ para todo $n \geq 1$.

**Caso base ($n = 1$).** $1 = 1 \cdot 2 / 2 = 1$. ✓

**Paso inductivo.** Supongamos $1 + 2 + \cdots + n = n(n+1)/2$ (hipótesis inductiva, HI). Separamos el último sumando $(n+1)$ y aplicamos la HI:

$$\sum_{k=1}^{n+1} k = \left(\sum_{k=1}^{n} k\right) + (n+1) \stackrel{HI}{=} \frac{n(n+1)}{2} + (n+1) = (n+1)\left(\frac{n}{2} + 1\right) = \frac{(n+1)(n+2)}{2}.$$

Esto es exactamente la fórmula para $n + 1$. $\blacksquare$

---

**Ejemplo 2.** Demostrar la desigualdad de Bernoulli: $(1+x)^n \geq 1 + nx$ para todo $n \geq 1$ y $x > -1$.

*La idea.* Para subir de exponente, multiplicamos la HI por $(1+x)$. La hipótesis $x > -1$ está justo para garantizar $1 + x > 0$, de modo que la desigualdad **no cambie de sentido** al multiplicar.

**Caso base ($n = 1$).** $(1+x)^1 = 1 + x \geq 1 + x$. ✓

**Paso inductivo.** Supongamos $(1+x)^n \geq 1 + nx$. Como $1 + x > 0$, multiplicamos por ese factor:

$$(1+x)^{n+1} = (1+x)^n (1+x) \geq (1 + nx)(1 + x) = 1 + (n+1)x + nx^2 \geq 1 + (n+1)x,$$

donde el último paso descarta el término $nx^2 \geq 0$. $\blacksquare$

---

**Ejemplo 3.** Para todo $n \geq 1$, $\;1 \cdot 1! + 2 \cdot 2! + \cdots + n \cdot n! = (n+1)! - 1$.

*La idea.* De nuevo aislamos el último término, $(n+1)\cdot(n+1)!$, y sacamos factor común $(n+1)!$ para que se "telescope" en $(n+2)!$.

**Caso base.** $1 \cdot 1! = 1 = 2! - 1$. ✓

**Paso inductivo.** Separando el último término y usando la HI:

$$\sum_{k=1}^{n+1} k \cdot k! = \big((n+1)! - 1\big) + (n+1)(n+1)! = (n+1)!\,(1 + n + 1) - 1 = (n+2)! - 1. \quad \blacksquare$$

---

### Inducción fuerte

*La idea común.* A veces $P(n+1)$ no depende de $P(n)$, sino de casos **mucho más pequeños**. Entonces se asume $P(k)$ para **todos** los $k$ menores, no solo el inmediato anterior.

**Ejemplo 4.** Todo entero $n \geq 2$ es producto de primos.

*La idea.* Al factorizar $n = ab$, los factores $a, b$ pueden ser cualquier cosa entre $2$ y $n-1$, no $n-1$ concretamente. Por eso necesitamos la hipótesis para **todos** los menores: ahí está la fuerza de la inducción fuerte.

**Caso base ($n = 2$).** $2$ es primo, luego es producto de un solo primo. ✓

**Paso inductivo (fuerte).** Sea $n \geq 3$ y supongamos que todo entero $m$ con $2 \leq m < n$ es producto de primos. Dos casos:

- Si $n$ es primo: es producto de un primo (él mismo).
- Si $n$ es compuesto: $n = ab$ con $2 \leq a, b < n$. Por HI fuerte, $a$ y $b$ son productos de primos; concatenando, $n = ab$ también.

*(La inducción ordinaria no bastaría: para $n = 15 = 3 \cdot 5$ necesitamos el resultado en $3$ y $5$, no en $14 = n-1$.)* $\blacksquare$

---

**Ejemplo 5.** (Teorema de Zeckendorf) Todo entero positivo se escribe como suma de números de Fibonacci **no consecutivos**.

*La idea.* Estrategia **voraz**: quita el mayor Fibonacci que quepa y repite con el resto. La clave es que el resto queda tan pequeño que su representación no puede chocar (ser consecutiva) con el Fibonacci que acabamos de quitar.

**Existencia** (por inducción fuerte sobre $n$).

*Caso base:* $n = 1 = F_2$. ✓

*Paso inductivo:* Sea $n > 1$ y $F_k$ el mayor Fibonacci con $F_k \leq n$. Si $n = F_k$, listo. Si no, sea $r = n - F_k$. Como $n < F_{k+1} = F_k + F_{k-1}$, se tiene $r < F_{k-1}$, y en particular $r < n$. Por HI fuerte, $r$ es suma de Fibonacci no consecutivos; además ninguno llega a $F_{k-1}$ (pues $r < F_{k-1}$), así que $F_k$ no es consecutivo con ninguno de ellos. Añadiendo $F_k$ obtenemos la representación de $n$.

*(La unicidad se prueba aparte, por un argumento de minimalidad.)*

---

**Ejemplo 6.** Demostrar que $n! > 2^n$ para todo $n \geq 4$.

*La idea.* Comparamos cómo crece cada lado al pasar de $n$ a $n+1$: el factorial se multiplica por $n+1$ y la potencia solo por $2$. En cuanto $n + 1 > 2$, el factorial gana.

*Caso base ($n = 4$).* $24 > 16$. ✓

*Paso inductivo.* $(n+1)! = (n+1)\cdot n! > (n+1)\cdot 2^n$. Como $n \geq 4$, $n + 1 \geq 5 > 2$, luego $(n+1)\cdot 2^n > 2 \cdot 2^n = 2^{n+1}$. $\blacksquare$

---

### Inducción con varios casos base

*La idea.* Si el paso inductivo se apoya en los **dos** casos anteriores (recurrencias tipo Fibonacci), hacen falta **dos** casos base para arrancar.

**Ejemplo 7.** (Azulejos de Fibonacci) El número $T(n)$ de formas de cubrir un tablero $1 \times n$ con piezas $1 \times 1$ y $1 \times 2$ es $F_{n+1}$.

*La idea.* Clasificar según la **última pieza**: si es $1\times 1$ quedan $n-1$ casillas, si es $1\times 2$ quedan $n-2$. Eso da la recurrencia de Fibonacci, que necesita dos bases.

La pieza más a la derecha ocupa $1$ o $2$ casillas, luego $T(n) = T(n-1) + T(n-2)$.

*Casos base:* $T(1) = 1 = F_2$ (un azulejo de $1$) y $T(2) = 2 = F_3$ (dos de $1 \times 1$, o uno de $1 \times 2$).

*Paso inductivo ($n \geq 3$):* $T(n) = T(n-1) + T(n-2) = F_n + F_{n-1} = F_{n+1}$. $\blacksquare$

---

### Inducción hacia atrás (de Cauchy)

*La idea.* A veces es fácil probar el resultado **duplicando** (de $n$ a $2n$), lo que lo da para todas las potencias de $2$; luego, un paso de **descenso** ($n \to n-1$) rellena los huecos intermedios.

**Ejemplo 8.** (Desigualdad de las medias AM–GM) Para reales positivos, $\dfrac{a_1 + \cdots + a_n}{n} \geq (a_1 \cdots a_n)^{1/n}$.

*Caso base ($n = 2$).* $\dfrac{a+b}{2} \geq \sqrt{ab} \iff (a+b)^2 \geq 4ab \iff (a-b)^2 \geq 0$. ✓

*Duplicación ($n \to 2n$).* Partimos las $2n$ variables en dos mitades y aplicamos la AM–GM de $n$ variables a cada una, con $G_1 = (a_1 \cdots a_n)^{1/n}$ y $G_2 = (a_{n+1} \cdots a_{2n})^{1/n}$; luego el caso base a $G_1, G_2$:

$$
\frac{a_1 + \cdots + a_{2n}}{2n} = \frac{1}{2}\left(\frac{a_1 + \cdots + a_n}{n} + \frac{a_{n+1} + \cdots + a_{2n}}{n}\right) \geq \frac{G_1 + G_2}{2} \geq \sqrt{G_1 G_2} = (a_1 \cdots a_{2n})^{1/(2n)}.
$$

Esto da la AM–GM para toda potencia de $2$.

*Descenso ($n \to n-1$).* Supongamos la AM–GM para $n$ variables y aplíquémosla a $a_1, \ldots, a_{n-1}$ y a $A = \dfrac{a_1 + \cdots + a_{n-1}}{n-1}$ (la propia media de las primeras $n-1$):

$$
\frac{(a_1 + \cdots + a_{n-1}) + A}{n} \geq (a_1 \cdots a_{n-1} \cdot A)^{1/n}.
$$

El lado izquierdo es $\dfrac{(n-1)A + A}{n} = A$, así que $A^n \geq a_1 \cdots a_{n-1} \cdot A$, y despejando $A^{\,n-1} \geq a_1 \cdots a_{n-1}$, es decir $A \geq (a_1 \cdots a_{n-1})^{1/(n-1)}$, que es la AM–GM para $n-1$ variables.

Como toda $n$ está por debajo de alguna potencia de $2$, duplicación y descenso juntos dan la AM–GM **para todo $n$**. $\blacksquare$

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

**Problema 1 (clásico).** Probar que $\displaystyle\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2$ para todo $n \geq 1$.

[[pista]]

Inducción sobre $n$. Tras el caso base, suma $(n+1)^3$ a la HI y usa que $\dfrac{n(n+1)}{2} + (n+1) = \dfrac{(n+1)(n+2)}{2}$ (la identidad del Ejemplo 1) para reconocer el cuadrado.

[[/pista]]

[[solución]]

**Caso base ($n = 1$).** Izquierda: $1^3 = 1$. Derecha: $\left(\dfrac{1 \cdot 2}{2}\right)^2 = 1^2 = 1$. Coinciden. ✓

**Hipótesis inductiva.** Supongamos $\displaystyle\sum_{k=1}^n k^3 = \left(\dfrac{n(n+1)}{2}\right)^2$.

**Paso inductivo.** Sumamos $(n+1)^3$ a ambos lados:

$$
\sum_{k=1}^{n+1} k^3 = \left(\frac{n(n+1)}{2}\right)^2 + (n+1)^3.
$$

Sacamos factor común $(n+1)^2$ en el lado derecho:

$$
\left(\frac{n(n+1)}{2}\right)^2 + (n+1)^3 = (n+1)^2\left(\frac{n^2}{4} + (n+1)\right) = (n+1)^2 \cdot \frac{n^2 + 4n + 4}{4} = (n+1)^2 \cdot \frac{(n+2)^2}{4}.
$$

Es decir,

$$
\sum_{k=1}^{n+1} k^3 = \left(\frac{(n+1)(n+2)}{2}\right)^2,
$$

que es la fórmula con $n+1$. Por inducción, vale para todo $n \geq 1$. $\blacksquare$

[[/solución]]

**Problema 2 (clásico, desigualdad de Bernoulli).** Demostrar que $(1+x)^n \geq 1 + nx$ para todo $n \geq 1$ y todo real $x > -1$.

[[pista]]

Inducción sobre $n$. Como $x > -1$, el factor $1 + x$ es positivo, así que puedes multiplicar la hipótesis inductiva por $1 + x$ sin invertir la desigualdad. Al final sobrará un término $nx^2 \geq 0$.

[[/pista]]

[[solución]]

**Caso base ($n = 1$).** $(1+x)^1 = 1 + x = 1 + 1\cdot x$. Se cumple con igualdad. ✓

**Hipótesis inductiva.** Supongamos $(1+x)^n \geq 1 + nx$ para un $n \geq 1$.

**Paso inductivo.** Como $x > -1$, tenemos $1 + x > 0$. Multiplicamos la HI por $1 + x$ (la desigualdad se conserva):

$$
(1+x)^{n+1} = (1+x)^n (1+x) \geq (1 + nx)(1 + x).
$$

Desarrollamos el lado derecho:

$$
(1 + nx)(1 + x) = 1 + x + nx + nx^2 = 1 + (n+1)x + nx^2.
$$

Como $n \geq 1$ y $x^2 \geq 0$, el término $nx^2 \geq 0$, luego

$$
(1+x)^{n+1} \geq 1 + (n+1)x + nx^2 \geq 1 + (n+1)x,
$$

que es la desigualdad para $n+1$. Por inducción, vale para todo $n \geq 1$. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** Demostrar que $\displaystyle\sum_{k=1}^n \frac{1}{k^2} \leq 2 - \frac{1}{n}$ para todo $n \geq 1$.

[[pista]]

Inducción sobre $n$. En el paso inductivo bastará probar que $\dfrac{1}{(n+1)^2} \leq \dfrac{1}{n} - \dfrac{1}{n+1}$, y el lado derecho es exactamente $\dfrac{1}{n(n+1)}$.

[[/pista]]

[[solución]]

*(La cota habitual usa $\leq$; con $<$ estricto fallaría en $n=1$, donde hay igualdad.)*

**Caso base ($n = 1$).** Izquierda: $\dfrac{1}{1^2} = 1$. Derecha: $2 - \dfrac{1}{1} = 1$. Se cumple con igualdad. ✓

**Hipótesis inductiva.** Supongamos $\displaystyle\sum_{k=1}^n \frac{1}{k^2} \leq 2 - \frac{1}{n}$.

**Paso inductivo.** Sumamos $\dfrac{1}{(n+1)^2}$ a ambos lados de la HI:

$$
\sum_{k=1}^{n+1} \frac{1}{k^2} \leq 2 - \frac{1}{n} + \frac{1}{(n+1)^2}.
$$

Queremos que esto sea $\leq 2 - \dfrac{1}{n+1}$. Restando $2$, basta comprobar que

$$
-\frac{1}{n} + \frac{1}{(n+1)^2} \leq -\frac{1}{n+1} \iff \frac{1}{(n+1)^2} \leq \frac{1}{n} - \frac{1}{n+1} = \frac{1}{n(n+1)}.
$$

Y esto es cierto porque $(n+1)^2 = (n+1)(n+1) > n(n+1)$, así que $\dfrac{1}{(n+1)^2} < \dfrac{1}{n(n+1)}$. Por tanto

$$
\sum_{k=1}^{n+1} \frac{1}{k^2} \leq 2 - \frac{1}{n+1},
$$

que es la cota para $n+1$. Por inducción, vale para todo $n \geq 1$. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** Sea $a_1 = 2$ y $a_{n+1} = a_n^2 - a_n + 1$ para $n \geq 1$. Demostrar que $\displaystyle\sum_{k=1}^n \frac{1}{a_k} < 1$ para todo $n$.

[[pista]]

La clave es la identidad $a_{n+1} - 1 = a_n^2 - a_n = a_n(a_n - 1)$, que convierte la suma en telescópica. Prueba por inducción la **igualdad** $\displaystyle\sum_{k=1}^n \frac{1}{a_k} = 1 - \frac{1}{a_{n+1}-1}$ y deduce de ahí la desigualdad.

[[/pista]]

[[solución]]

Probaremos por inducción la igualdad más fuerte

$$
S_n := \sum_{k=1}^n \frac{1}{a_k} = 1 - \frac{1}{a_{n+1}-1},
$$

de la que la desigualdad pedida se sigue al instante.

**Observación previa.** De la recurrencia, $a_{n+1} - 1 = a_n^2 - a_n = a_n(a_n - 1)$. Como $a_1 = 2 > 1$ y la recurrencia mantiene $a_n > 1$ (si $a_n > 1$, entonces $a_{n+1} - 1 = a_n(a_n-1) > 0$), todos los denominadores son positivos.

**Caso base ($n = 1$).** $S_1 = \dfrac{1}{a_1} = \dfrac{1}{2}$. Por otro lado $a_2 = a_1^2 - a_1 + 1 = 4 - 2 + 1 = 3$, así $1 - \dfrac{1}{a_2 - 1} = 1 - \dfrac{1}{2} = \dfrac{1}{2}$. Coinciden. ✓

**Hipótesis inductiva.** Supongamos $S_n = 1 - \dfrac{1}{a_{n+1}-1}$.

**Paso inductivo.** Usando la observación con $a_{n+2} - 1 = a_{n+1}(a_{n+1}-1)$:

$$
\frac{1}{a_{n+1}-1} - \frac{1}{a_{n+1}} = \frac{a_{n+1} - (a_{n+1}-1)}{a_{n+1}(a_{n+1}-1)} = \frac{1}{a_{n+1}(a_{n+1}-1)} = \frac{1}{a_{n+2}-1}.
$$

Entonces

$$
S_{n+1} = S_n + \frac{1}{a_{n+1}} = \left(1 - \frac{1}{a_{n+1}-1}\right) + \frac{1}{a_{n+1}} = 1 - \frac{1}{a_{n+2}-1},
$$

que es la fórmula con $n+1$. Por inducción, la igualdad vale para todo $n$.

**Conclusión.** Como $a_{n+1} - 1 > 0$, se tiene $\dfrac{1}{a_{n+1}-1} > 0$, luego

$$
\sum_{k=1}^n \frac{1}{a_k} = 1 - \frac{1}{a_{n+1}-1} < 1. \qquad \blacksquare
$$

[[/solución]]

**Problema 5 (clásico).** Demostrar que $\left\lfloor \dfrac{n}{2} \right\rfloor \left\lceil \dfrac{n}{2} \right\rceil = \left\lfloor \dfrac{n^2}{4} \right\rfloor$ para todo $n \geq 0$.

[[pista]]

No hace falta inducción: distingue según la **paridad** de $n$. Escribe $n = 2m$ o $n = 2m+1$ y calcula los dos lados por separado.

[[/pista]]

[[solución]]

Distinguimos dos casos según la paridad de $n$.

**Caso par ($n = 2m$, con $m \geq 0$).** Entonces $\dfrac{n}{2} = m$ es entero, así que

$$
\left\lfloor \tfrac{n}{2} \right\rfloor \left\lceil \tfrac{n}{2} \right\rceil = m \cdot m = m^2.
$$

Por otro lado $\dfrac{n^2}{4} = \dfrac{4m^2}{4} = m^2$, que es entero, luego $\left\lfloor \dfrac{n^2}{4} \right\rfloor = m^2$. Ambos lados valen $m^2$. ✓

**Caso impar ($n = 2m+1$, con $m \geq 0$).** Ahora $\dfrac{n}{2} = m + \dfrac{1}{2}$, así que $\left\lfloor \tfrac{n}{2} \right\rfloor = m$ y $\left\lceil \tfrac{n}{2} \right\rceil = m+1$:

$$
\left\lfloor \tfrac{n}{2} \right\rfloor \left\lceil \tfrac{n}{2} \right\rceil = m(m+1) = m^2 + m.
$$

Por otro lado

$$
\frac{n^2}{4} = \frac{(2m+1)^2}{4} = \frac{4m^2 + 4m + 1}{4} = m^2 + m + \frac{1}{4},
$$

cuya parte entera es $m^2 + m$. Ambos lados valen $m^2 + m$. ✓

En los dos casos coinciden, luego la igualdad vale para todo $n \geq 0$. $\blacksquare$

[[/solución]]

**Problema 6 (clásico).** Probar, usando inducción fuerte, que todo entero $n \geq 2$ tiene al menos un divisor primo.

[[pista]]

Inducción fuerte sobre $n$. Si $n$ es primo, ya está. Si es compuesto, escríbelo como $n = ab$ con $2 \leq a < n$ y aplica la hipótesis inductiva a $a$.

[[/pista]]

[[solución]]

**Caso base ($n = 2$).** $2$ es primo y $2 \mid 2$, así que tiene un divisor primo (él mismo). ✓

**Hipótesis inductiva (fuerte).** Sea $n \geq 3$ y supongamos que **todo** entero $m$ con $2 \leq m < n$ tiene al menos un divisor primo.

**Paso inductivo.** Hay dos posibilidades:

- Si $n$ es primo, entonces $n \mid n$ y $n$ es su propio divisor primo. ✓
- Si $n$ es compuesto, por definición $n = ab$ con $2 \leq a, b < n$. Aplicamos la hipótesis inductiva al factor $a$ (que cumple $2 \leq a < n$): existe un primo $p$ con $p \mid a$. Como $a \mid n$, por transitividad $p \mid n$. ✓

En ambos casos $n$ tiene un divisor primo. Por inducción fuerte, todo entero $n \geq 2$ lo tiene. $\blacksquare$

[[/solución]]
