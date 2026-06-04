---
title: "Tres demostraciones de la infinitud de los primos"
preview: "Hay infinitos primos. La demostración de Euclides es el primer teorema profundo de las matemáticas. Aquí presentamos esa, la de Euler vía la serie armónica, y la topológica de Furstenberg."
dificultad: regional
tags: [primos, infinitud, euclides, euler, demostracion]
prerequisites: [divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

## Teorema

Existen infinitos números primos.

## Demostración

### Demostración 1: Euclides (300 a.C.)

Supongamos por reducción al absurdo que solo existen finitos primos: $p_1, p_2, \ldots, p_k$. Consideremos el número

$$
N \;=\; p_1 p_2 \cdots p_k + 1.
$$

Por el teorema fundamental de la aritmética, $N$ tiene al menos un divisor primo $q$. Pero $q$ no puede ser ninguno de los $p_i$ — porque si $q = p_i$, entonces $q \mid N$ y $q \mid p_1 \cdots p_k$, así que $q \mid (N - p_1\cdots p_k) = 1$, lo cual es imposible.

Por tanto $q$ es un primo distinto de los $p_i$, contradiciendo la hipótesis de finitud. $\blacksquare$

Esta es la demostración del **Libro IX, Proposición 20** de los *Elementos*. Tiene casi 2300 años y sigue siendo paradigmática.

### Demostración 2: Euler (1737)

Euler dio una demostración profundamente distinta, basada en la **serie armónica**.

Consideramos el producto

$$
\prod_{p \text{ primo}} \frac{1}{1 - p^{-1}}.
$$

Por la serie geométrica, $\frac{1}{1 - p^{-1}} = 1 + p^{-1} + p^{-2} + p^{-3} + \cdots$. Multiplicando estos factores sobre todos los primos $p$:

$$
\prod_{p} \frac{1}{1 - p^{-1}} \;=\; \prod_p \sum_{k=0}^{\infty} p^{-k} \;=\; \sum_{n=1}^{\infty} \frac{1}{n}.
$$

La última igualdad usa el teorema fundamental de la aritmética: cada entero $n \geq 1$ aparece exactamente una vez en el desarrollo del producto (correspondiente a su factorización en primos).

Pero la **serie armónica** $\sum 1/n$ es divergente — eso es elemental (agrupando términos: $\tfrac{1}{2}, \tfrac{1}{3}+\tfrac{1}{4} > \tfrac{1}{2}, \ldots$, hay infinitas "bloques" cada uno mayor que $\tfrac{1}{2}$).

Si los primos fueran finitos, el producto $\prod_p \frac{1}{1 - p^{-1}}$ sería un número finito. Pero la serie armónica diverge. Contradicción. **Hay infinitos primos.** $\blacksquare$

**Por qué es más profunda:** mientras Euclides solo prueba la existencia, Euler obtiene **información cuantitativa**: la *serie* $\sum 1/p$ sobre los primos también diverge (se sigue tomando logaritmos del producto), lo que dice que los primos son **densos** en un sentido muy preciso. Esta línea de razonamiento conduce al teorema de los números primos.

### Demostración 3: Furstenberg (1955)

Hillel Furstenberg, siendo estudiante en 1955, publicó una demostración **topológica** de una página.

Definimos una topología sobre $\mathbb Z$: declaramos abiertos a las **uniones de progresiones aritméticas dobles**, es decir, conjuntos de la forma

$$
S(a, b) \;=\; \{a + bn : n \in \mathbb Z\}, \qquad b \neq 0,
$$

y sus uniones arbitrarias y intersecciones finitas. Es un buen ejercicio verificar que esto es una topología sobre $\mathbb Z$.

**Observaciones:**

1. Cada $S(a, b)$ es **cerrado**, porque es complemento de la unión $\bigcup_{i \not\equiv a \pmod b} S(i, b)$, que es abierta.
2. Como $\mathbb Z = \bigcup_{p \text{ primo}} S(0, p)$ excluyendo $\{-1, 1\}$. Es decir,

$$
\mathbb Z \setminus \{-1, 1\} \;=\; \bigcup_{p \text{ primo}} S(0, p).
$$

Supongamos por reducción al absurdo que hay finitos primos. Entonces la unión $\bigcup_{p \text{ primo}} S(0, p)$ es **unión finita de cerrados**, por tanto cerrada. Luego $\{-1, 1\} = \mathbb Z \setminus \bigcup_p S(0, p)$ es **abierto**.

Pero todo conjunto abierto no vacío en esta topología contiene alguna $S(a, b)$, que es infinita. El conjunto $\{-1, 1\}$ es finito y no vacío, no puede ser abierto. **Contradicción**, hay infinitos primos. $\blacksquare$

## Observación

Las tres demostraciones revelan **tres formas distintas** de pensar el resultado:

- **Euclides (aritmética):** construye explícitamente un primo nuevo.
- **Euler (analítica):** mide la "densidad" de los primos a través de la divergencia de la serie armónica.
- **Furstenberg (topológica):** reformula el problema como una afirmación sobre topologías.

Cada una lleva a generalizaciones distintas:

- **Euclides** generaliza a la búsqueda de primos en progresiones aritméticas (teorema de **Dirichlet**).
- **Euler** da la primera estimación cuantitativa, que se refina hasta el **teorema de los números primos** ($\pi(x) \sim x/\ln x$).
- **Furstenberg** muestra que conceptos de topología pueden aclarar problemas aritméticos — anticipa la combinatoria aditiva moderna.

## Aplicaciones

El esquema de Euclides — *"multiplica lo que conoces y suma uno"* — se generaliza:

**Hay infinitos primos $\equiv 3 \pmod 4$.** Supongamos que solo hay finitos: $3, 7, 11, \ldots, p_k$. Consideramos $N = 4p_1 p_2 \cdots p_k - 1$. Este número es $\equiv 3 \pmod 4$ y por tanto tiene algún divisor primo $\equiv 3 \pmod 4$ (porque un producto de primos $\equiv 1 \pmod 4$ es $\equiv 1 \pmod 4$). Este primo no puede estar entre los $p_i$ por el mismo argumento que Euclides. Contradicción.

La demostración del teorema de **Dirichlet** sobre infinitos primos en progresiones aritméticas $a \pmod n$ con $\gcd(a, n) = 1$ generaliza esta idea con caracteres modulares y series-L.

## Problemas relacionados

- **Teorema de Dirichlet:** hay infinitos primos en toda progresión aritmética $a, a+d, a+2d, \ldots$ con $\gcd(a, d) = 1$.
- **Conjetura de los primos gemelos:** existen infinitos pares $(p, p+2)$ ambos primos. Abierta.
- **Teorema de Green-Tao** (2004): existen progresiones aritméticas arbitrariamente largas formadas exclusivamente por primos.
