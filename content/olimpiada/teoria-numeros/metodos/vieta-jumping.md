---
title: "Vieta Jumping (saltos de Vieta)"
preview: "Una técnica de descenso infinito refinada para ecuaciones diofánticas cuadráticas en dos variables. Originada en IMO 1988 P6, hoy es un método clásico para problemas de aspecto inocente con respuesta sorprendente."
dificultad: nacional
tags: [vieta, descenso, diofantica, cuadratica]
prerequisites: [descenso-infinito, polinomios]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## La idea

Considera una ecuación diofántica de la forma

$$
F(x, y) \;=\; 0, \quad F \in \mathbb Z[x, y],
$$

donde $F$ es **cuadrática en al menos una variable**. La técnica de **Vieta jumping** funciona así:

**Paso 1.** Supongamos $(x, y) = (a, b)$ es una solución entera. Fijamos $y = b$ y vemos $F$ como **polinomio cuadrático en $x$**:

$$
F(x, b) \;=\; \alpha x^2 + \beta x + \gamma \;=\; 0.
$$

Como $a$ es una raíz, **hay otra raíz** $a'$ dada por las fórmulas de Vieta:

$$
a + a' \;=\; -\beta/\alpha, \qquad a \cdot a' \;=\; \gamma/\alpha.
$$

**Paso 2.** Si los coeficientes son enteros y $\alpha$ es razonable, $a'$ es entero (o racional con denominador controlado). Así obtenemos una **nueva solución** $(a', b)$.

**Paso 3.** Comparamos $(a, b)$ y $(a', b)$. Si el "tamaño" de $(a', b)$ es **estrictamente menor** que el de $(a, b)$, podemos iterar. Por descenso infinito (los enteros positivos no descienden indefinidamente), eventualmente alcanzamos una solución **mínima** o **base** con propiedades especiales.

**Paso 4.** Analizamos las soluciones mínimas directamente.

## Esquema canónico: IMO 1988 P6

**Enunciado.** Sean $a, b$ enteros positivos tales que $ab + 1$ divide a $a^2 + b^2$. Demostrar que $\frac{a^2 + b^2}{ab + 1}$ es un cuadrado perfecto.

## Demostración paso a paso

**Paso 0.** Sea $k = \frac{a^2 + b^2}{ab + 1}$. Es un entero positivo. Queremos probar que es cuadrado.

**Paso 1: el descenso.** Supongamos que existe alguna pareja $(a, b)$ con $k$ no cuadrado. Tomamos $(a, b)$ con $a \geq b \geq 1$ **minimizando $a + b$**.

**Paso 2: aplicar Vieta.** Fijamos $b$. La ecuación $\frac{x^2 + b^2}{xb + 1} = k$ se reescribe:

$$
x^2 - k b x + (b^2 - k) \;=\; 0.
$$

Es cuadrática en $x$. Las dos raíces son $a$ y otra que llamamos $a'$. Por Vieta:

$$
a + a' \;=\; kb, \qquad a \cdot a' \;=\; b^2 - k.
$$

De la primera: $a' = kb - a$, así $a'$ es **entero**.

**Paso 3: signo de $a'$.** De la segunda fórmula: $a a' = b^2 - k$.

- Si $b^2 = k$: $a a' = 0$, así $a' = 0$. Pero entonces $(0, b)$ es solución y $k = b^2/1 = b^2$, **cuadrado**. ¡Contradicción con la suposición!
- Si $b^2 > k$: $a' > 0$ (porque $a > 0$).
- Si $b^2 < k$: $a' < 0$.

**Subcaso $a' < 0$:** entonces $a' \leq -1$. Pero $a'$ satisface también la ecuación, así que $a'^2 - kba' + b^2 - k = 0$, es decir $a'^2 + |kba'| + b^2 - k = 0$ con $|kba'|$ positivo. La suma $a'^2 + |kba'| + b^2 \geq 0 + |kb| + b^2 > k$ (para $a' \neq 0$ y $k, b \geq 1$). Así $a'^2 - kba' + b^2 - k > 0$, contradicción.

Por tanto $a' \geq 0$. Combinado con $a' = 0$ ya cubierto, **$a' \geq 1$**.

**Paso 4: el salto.** Tenemos una nueva solución $(a', b)$ con $a' \geq 1$.

¿Es $(a', b)$ "más pequeña"? $a' = kb - a$. Como $a \geq b$ y $a \geq 1$:

$$
a' \;=\; \frac{b^2 - k}{a}.
$$

Si $b^2 - k < 0$ ya descartamos. Si $b^2 - k = 0$ ya descartamos. Así $b^2 > k$, lo cual da $a' \leq b^2/a \leq b$ (porque $a \geq b$, así $b^2/a \leq b$).

Más precisamente: $a' < a$ porque $a' \cdot a = b^2 - k < b^2 \leq a^2$, así $a' < a$.

Entonces $(a', b)$ tiene **$a' < a$**, y al menos $a' + b < a + b$. **Contradicción con la minimidad** elegida.

**Paso 5: conclusión.** La hipótesis "existe pareja con $k$ no cuadrado" fue falsa. Por tanto $k$ es siempre cuadrado. $\blacksquare$

## Patrón general

El esquema **Vieta jumping** se reconoce por:

1. **Ecuación cuadrática** en al menos una variable (o reducible a tal).
2. **Coeficientes simétricos o controlados** que hagan que la "otra raíz" sea entera.
3. Una **función de tamaño** (típicamente suma o producto) que decrezca al saltar.
4. **Soluciones base** identificables (típicamente con una variable nula o pequeña).

## Otras aplicaciones

### Ejemplo 2: $a^2 + b^2 + 1 = 3ab$ tiene infinitas soluciones

Probamos $(1, 1)$: $1 + 1 + 1 = 3 \cdot 1 \cdot 1$. ✓.

Saltamos: fijamos $b = 1$, ecuación en $a$: $a^2 - 3a + 2 = 0$, raíces $a = 1, 2$. Nueva solución $(2, 1)$.

Saltamos desde $(2, 1)$: fijamos $a = 2$, ecuación en $b$: $b^2 - 6b + 5 = 0$, raíces $b = 1, 5$. Nueva solución $(2, 5)$.

Iteramos: $(2, 5) \to (13, 5) \to (13, 34) \to \cdots$. Las soluciones son los **Fibonacci impares**: $1, 2, 5, 13, 34, 89, \ldots$

### Ejemplo 3: ecuación de Markov

$$
x^2 + y^2 + z^2 \;=\; 3 xyz.
$$

Vieta jumping en cualquier variable produce una nueva solución. Genera el **árbol de Markov**, con infinitas soluciones.

### Ejemplo 4: ecuación de Pell generalizada

$$
x^2 - n y^2 \;=\; c.
$$

Si tiene una solución, Vieta jumping (combinado con multiplicación por la solución fundamental de Pell) genera infinitas.

## Observación

**Vieta jumping vs descenso clásico.** Ambos son técnicas de descenso, pero:

- **Descenso clásico** (Fermat): muestra que ninguna solución entera positiva existe, por reducción al absurdo.
- **Vieta jumping**: muestra una **propiedad** de las soluciones, comparando soluciones generales con soluciones mínimas.

El descenso clásico **destruye** la solución; Vieta jumping la **transforma**.

**Cuándo funciona.** Cuando la ecuación es cuadrática en una variable y la otra raíz (vía Vieta) es entera. Si la otra raíz sale racional con denominador no trivial, el método se complica pero a veces puede adaptarse.

## Problemas relacionados

- **(IMO 1988/P6)** Sean $a, b$ enteros positivos con $ab + 1 \mid a^2 + b^2$. Probar que $\frac{a^2 + b^2}{ab + 1}$ es un cuadrado perfecto. *(El problema-origen del método.)*

- **(Clásico)** Sea $k$ entero positivo fijo. Hallar todos los pares de enteros positivos $(x, y)$ con $x^2 - kxy + y^2 + k = 0$.

- **(Clásico)** Demostrar que la ecuación de Markov $x^2 + y^2 + z^2 = 3xyz$ tiene infinitas soluciones en enteros positivos.

- **(Clásico)** Probar que si $a^2 + b^2 + 1 = 3ab$ para enteros positivos, entonces hay infinitas soluciones. Describir su estructura.
