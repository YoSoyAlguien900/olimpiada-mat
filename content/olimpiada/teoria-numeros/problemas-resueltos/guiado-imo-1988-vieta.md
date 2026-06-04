---
title: "IMO 1988 P6 — Vieta Jumping (guiado paso a paso)"
preview: "Sean $a, b$ enteros positivos tales que $ab+1$ divide a $a^2+b^2$. Demostrar que $\\frac{a^2+b^2}{ab+1}$ es un cuadrado perfecto. El problema que originó la técnica de los saltos de Vieta."
dificultad: nacional
competencia: "IMO 1988 P6"
tags: [vieta, descenso, cuadrados, diofantica, guiado]
prerequisites: [vieta-jumping, descenso-infinito]
author: "Material olímpico"
updated: "2026-02-13"
---

## Enunciado

Sean $a, b$ enteros positivos tales que $ab + 1$ divide a $a^2 + b^2$. Demostrar que

$$
k \;=\; \frac{a^2 + b^2}{ab + 1}
$$

es un **cuadrado perfecto**.

---

## Fase 1: experimentar y conjeturar

**Buscar parejas $(a, b)$ que satisfagan la condición.**

- $a = b = 1$: $\frac{1+1}{1+1} = 1 = 1^2$. ✓ (Cuadrado perfecto.)
- $a = 8, b = 2$: $\frac{64+4}{16+1} = \frac{68}{17} = 4 = 2^2$. ✓
- $a = 30, b = 8$: $\frac{900+64}{240+1} = \frac{964}{241} = 4 = 2^2$. ✓
- $a = 112, b = 30$: $\frac{12544+900}{3360+1} = \frac{13444}{3361} = 4 = 2^2$. ✓

**Patrón.** Las parejas $(8, 2), (30, 8), (112, 30), \ldots$ todas dan $k = 4$. Parece que **$k$ es siempre el mismo cuadrado para una familia**.

Más experimentación:
- $a = 27, b = 3$: $\frac{729+9}{81+1} = \frac{738}{82} = 9 = 3^2$. ✓ Da $k = 9$.

**Conjetura.** El valor de $k$ es **siempre un cuadrado perfecto** $\geq 1$.

---

## Fase 2: el problema interesante

El enunciado pide demostrar la conjetura. La técnica adecuada es **Vieta Jumping** — un método de descenso que aprovecha que la ecuación es **cuadrática en una variable**.

---

## Fase 3: el argumento por contradicción

**Hipótesis.** Supongamos que existe una pareja $(a, b)$ con la propiedad y $k = \frac{a^2 + b^2}{ab + 1}$ **no es** un cuadrado perfecto.

**Idea.** Buscar una pareja "más pequeña" $(a', b')$ con la misma propiedad y el mismo $k$. Por descenso infinito, llegamos a un caso base que sí es cuadrado.

---

## Paso 1: elegir la pareja minimal

Entre todas las parejas $(a, b)$ con $a, b \geq 0$ y $\frac{a^2 + b^2}{ab + 1} = k$ no cuadrado, elegimos una con $a + b$ **mínimo**.

Sin pérdida de generalidad, $a \geq b > 0$ (si $a < b$ intercambiamos; si $b = 0$, $k = a^2/1 = a^2$, cuadrado, contradicción).

## Paso 2: el salto de Vieta

Fijamos $b$ y vemos la ecuación

$$
\frac{x^2 + b^2}{xb + 1} \;=\; k
$$

como cuadrática en $x$:

$$
x^2 - (kb) x + (b^2 - k) \;=\; 0.
$$

Una raíz es $x_1 = a$. Sea $x_2$ la otra raíz. Por **Vieta**:

$$
x_1 + x_2 \;=\; kb \quad \Rightarrow \quad x_2 \;=\; kb - a,
$$

$$
x_1 x_2 \;=\; b^2 - k \quad \Rightarrow \quad x_2 \;=\; \frac{b^2 - k}{a}.
$$

Ambas fórmulas dan $x_2$ entero (la primera, porque $k, b, a$ son enteros).

## Paso 3: $x_2$ es entero no negativo

**$x_2$ es entero:** ya lo vimos por $x_2 = kb - a$.

**$x_2 \geq 0$:** vamos a probarlo por contradicción. Si $x_2 < 0$, entonces $x_2 \leq -1$. Por la ecuación,

$$
x_2^2 - (kb) x_2 + (b^2 - k) \;=\; 0.
$$

Como $x_2 \leq -1$, $-x_2 \geq 1$. Calculamos:

$$
x_2^2 + (kb) |x_2| + (b^2 - k) \;=\; 0.
$$

Pero $x_2^2 \geq 0$, $kb |x_2| \geq kb \geq k$ (porque $b \geq 1$, $|x_2| \geq 1$), así

$$
x_2^2 + kb|x_2| + b^2 - k \;\geq\; 0 + k + b^2 - k \;=\; b^2 \;>\; 0,
$$

contradicción con que la suma sea $0$. Por tanto $x_2 \geq 0$.

## Paso 4: ¿es $x_2 < a$?

**$x_2 \cdot a = b^2 - k$.** Si $b^2 - k < 0$, entonces $x_2 < 0$, ya descartado. Si $b^2 - k = 0$, $x_2 = 0$ y $k = b^2$, **cuadrado**, contradicción con nuestra hipótesis.

Así $b^2 - k > 0$, y

$$
x_2 \;=\; \frac{b^2 - k}{a} \;<\; \frac{b^2}{a} \;\leq\; \frac{b \cdot b}{b} \;=\; b \;\leq\; a.
$$

(Usamos $a \geq b$ en el penúltimo paso.)

Por tanto **$x_2 < a$**, así la nueva pareja $(x_2, b)$ tiene $x_2 + b < a + b$.

## Paso 5: la contradicción

$(x_2, b)$ es otra pareja con la misma propiedad: $x_2, b$ enteros no negativos, $x_2 + b < a + b$, y

$$
\frac{x_2^2 + b^2}{x_2 b + 1} \;=\; k.
$$

(Esto último porque $x_2$ es raíz de la cuadrática $x^2 - kbx + b^2 - k = 0$, equivalente a $x^2 + b^2 = k(xb + 1)$.)

Esto **contradice la minimidad de $(a, b)$**.

## Paso 6: conclusión

La hipótesis "existe pareja con $k$ no cuadrado" lleva a contradicción. Por tanto, $k$ es siempre un cuadrado. $\blacksquare$

---

## Demostración limpia (sin el proceso heurístico)

**Demostración.** Supongamos por contradicción que existen $a, b$ enteros positivos con $(a^2 + b^2)/(ab+1) = k$ no cuadrado. Entre todas las parejas que cumplen esto, sea $(a, b)$ con $a + b$ mínimo y $a \geq b$.

Considera la cuadrática en $x$: $f(x) = x^2 - kbx + b^2 - k = 0$. Una raíz es $x = a$. Sea $a'$ la otra raíz. Por Vieta, $a' = kb - a$ (entero) y $a a' = b^2 - k$.

Si $a' = 0$, entonces $b^2 = k$, cuadrado, contradicción.

Si $a' < 0$, entonces $a' \leq -1$ y $f(a') = a'^2 + kb|a'| + b^2 - k \geq b^2 > 0$, contradicción con $f(a') = 0$.

Así $a' \geq 1$. Además $a' = (b^2 - k)/a < b^2/a \leq b \leq a$, así $a' < a$ y $a' + b < a + b$.

La pareja $(a', b)$ tiene la misma propiedad (por construcción) y suma menor, contradiciendo minimidad. Por tanto $k$ es cuadrado. $\blacksquare$

---

## Observación

**Lo que aprendemos.**

1. **El salto de Vieta** es la herramienta clave. La estructura cuadrática de la ecuación en cada variable permite saltar a otra solución entera, controlando el tamaño.

2. **Minimidad como motor.** Eligiendo una pareja minimal y mostrando que produce una más pequeña, obtenemos contradicción. Esto es **descenso infinito refinado**.

3. **Casos degenerados son la respuesta.** Los casos donde $a' = 0$ (que dan $b^2 = k$ y por tanto cuadrado) **no son patológicos** — son **la respuesta del problema**. El descenso termina en estos casos base, y son precisamente donde $k$ es cuadrado.

4. **Estructura de las soluciones.** Las parejas que cumplen $\frac{a^2+b^2}{ab+1} = k^2$ forman una secuencia: $(k, 0) \to (k^3, k) \to (k^5 - k, k^3) \to \cdots$. Cada salto produce una nueva solución. Para $k = 2$: $(2, 0), (8, 2), (30, 8), (112, 30), \ldots$

---

## Generalización: el árbol de Vieta

Si $k$ es un cuadrado, digamos $k = m^2$, las soluciones $(a, b)$ de $\frac{a^2+b^2}{ab+1} = m^2$ forman un **árbol** infinito desde la raíz $(m, 0)$. Cada nodo $(a, b)$ tiene dos vecinos: $(a, m^2 b - a)$ (saltando en la coordenada $a$) y $(m^2 a - b, a)$ (intercambiando y saltando).

Esta estructura de árbol es **típica** de los problemas resueltos por Vieta Jumping.

---

## Problemas relacionados

- **IMO 1988/6.** El problema original.
- **IMO 2007/5.** Variante "$\frac{a^2 + b^2}{ab + 1} = $ cuadrado" con condiciones adicionales.
- **Ecuación de Markov:** $x^2 + y^2 + z^2 = 3xyz$. Aplicación clásica de Vieta jumping.
- **OMG 2020.** Versión regional accesible con técnica Vieta.
- **Open problem (Catalan-Markov):** ¿son únicas las soluciones del árbol de Markov? Conjetura abierta desde 1913.
