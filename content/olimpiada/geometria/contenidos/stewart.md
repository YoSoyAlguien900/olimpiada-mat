---
title: "Teorema de Stewart: longitudes de cevianas"
preview: "Si $AD$ es una ceviana del triángulo $ABC$ con $D \\in BC$, entonces $b^2 m + c^2 n - a(d^2 + mn) = 0$ donde $a = m + n$. Una identidad que reduce muchas configuraciones a aritmética."
dificultad: regional
tags: [stewart, cevianas, longitudes, triangulo]
prerequisites: [semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-12"
---

## Teorema

Sea $ABC$ un triángulo con $a = |BC|$, $b = |CA|$, $c = |AB|$. Sea $D$ un punto sobre el segmento $BC$, con $m = |BD|$, $n = |DC|$, así que $a = m + n$. Sea $d = |AD|$. Entonces

$$
b^2 m + c^2 n - a(d^2 + mn) \;=\; 0.
$$

Equivalentemente:

$$
b^2 m + c^2 n \;=\; a d^2 + amn.
$$

## Demostración

**Vía teorema del coseno.** Sean $\angle ADB = \theta$ y $\angle ADC = \pi - \theta$ (suplementarios). Aplicamos el teorema del coseno en los triángulos $ABD$ y $ACD$:

$$
c^2 \;=\; m^2 + d^2 - 2md\cos\theta,
$$

$$
b^2 \;=\; n^2 + d^2 - 2nd\cos(\pi - \theta) \;=\; n^2 + d^2 + 2nd\cos\theta.
$$

Multiplicamos la primera por $n$ y la segunda por $m$:

$$
c^2 n \;=\; m^2 n + d^2 n - 2mnd\cos\theta,
$$

$$
b^2 m \;=\; mn^2 + d^2 m + 2mnd\cos\theta.
$$

Sumando, los términos en $\cos\theta$ se cancelan:

$$
b^2 m + c^2 n \;=\; m^2 n + mn^2 + d^2(m + n) \;=\; mn(m + n) + d^2(m + n) \;=\; a(mn + d^2).
$$

Esto es exactamente lo que queríamos. $\blacksquare$

## Ejemplo

**Ejemplo 1 (longitud de la mediana).** Si $D$ es el punto medio de $BC$, entonces $m = n = a/2$. Sustituyendo en Stewart:

$$
b^2 \cdot \tfrac{a}{2} + c^2 \cdot \tfrac{a}{2} \;=\; a \cdot \tfrac{a^2}{4} + a \cdot d^2 \quad\Longrightarrow\quad d^2 \;=\; \frac{2b^2 + 2c^2 - a^2}{4}.
$$

Esta es la **fórmula de Apolonio** para la mediana desde $A$. Las medianas $m_a, m_b, m_c$ cumplen:

$$
m_a^2 \;=\; \tfrac{2b^2 + 2c^2 - a^2}{4}, \qquad m_b^2 \;=\; \tfrac{2a^2 + 2c^2 - b^2}{4}, \qquad m_c^2 \;=\; \tfrac{2a^2 + 2b^2 - c^2}{4}.
$$

**Ejemplo 2 (bisectriz interior).** Por el teorema de la bisectriz, si $AD$ es bisectriz de $A$ con $D \in BC$, entonces $m/n = c/b$, así que $m = ac/(b+c)$ y $n = ab/(b+c)$. Sustituyendo en Stewart:

$$
b^2 \cdot \tfrac{ac}{b+c} + c^2 \cdot \tfrac{ab}{b+c} \;=\; a \cdot d^2 + a \cdot \tfrac{ac \cdot ab}{(b+c)^2}.
$$

Dividiendo por $a$ y simplificando:

$$
\frac{bc(b + c)}{b + c} \;=\; d^2 + \frac{a^2 bc}{(b+c)^2} \quad\Longrightarrow\quad d^2 \;=\; bc - \frac{a^2 bc}{(b+c)^2} \;=\; bc\left(1 - \frac{a^2}{(b+c)^2}\right).
$$

Factorizando:

$$
d^2 \;=\; \frac{bc[(b+c)^2 - a^2]}{(b+c)^2} \;=\; \frac{bc(b+c-a)(b+c+a)}{(b+c)^2}.
$$

Usando que $2s = a+b+c$:

$$
\boxed{\,d^2 \;=\; \frac{4 bc \, s(s - a)}{(b+c)^2}.\,}
$$

Esta es la **fórmula de la longitud de la bisectriz**, indispensable cuando aparecen bisectrices con longitudes específicas en problemas olímpicos.

## Observación

**Mnemónica de Stewart:** "**b**a-**m**e-**c**a-**n**e-de**c**ide", a lo que se añade $mn$. La fórmula

$$
b^2 m + c^2 n \;=\; a(d^2 + mn)
$$

a veces se memoriza en la versión simétrica de **van Aubel**:

$$
b^2 m + c^2 n \;=\; a \cdot d^2 + amn.
$$

Aún más mnemónica: **"hombre nuevo, nueva mujer, da niño"** (un asno antiguo). En cualquier caso, conviene **deducirla rápidamente del teorema del coseno** en lugar de memorizarla.

## Aplicaciones

### Aplicación 1: cálculos métricos en olimpiada

Cualquier problema donde aparece una ceviana cuya longitud necesita calcularse: Stewart es la primera técnica a probar. Es directo, rápido y no requiere ingenio geométrico.

### Aplicación 2: identidades del triángulo

Combinando Stewart con identidades como $m_a^2 + m_b^2 + m_c^2 = \frac{3}{4}(a^2 + b^2 + c^2)$ (sumando las tres fórmulas de Apolonio), se obtienen relaciones útiles entre las longitudes del triángulo.

### Aplicación 3: localización de puntos

Para verificar si un punto $D$ está sobre la bisectriz desde $A$, basta comprobar si $d^2$ coincide con la fórmula derivada arriba. Esto convierte una pregunta cualitativa (¿está en la bisectriz?) en una verificación numérica.

## Problemas relacionados

- **Fórmula del incentro:** $|AI|^2 = bc \left(1 - \frac{a^2}{(b+c)^2}\right)$, derivable de la fórmula de la bisectriz combinada con la división del incentro $AI:ID = (b+c):a$.
- **Punto de Gergonne, Nagel:** sus distancias a los vértices se obtienen aplicando Stewart a las cevianas correspondientes.
- **Teorema de Routh:** generalización que cuantifica el área del triángulo formado por tres cevianas cualesquiera.
