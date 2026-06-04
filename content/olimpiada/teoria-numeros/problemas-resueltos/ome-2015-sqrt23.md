---
title: "OME 2015 — Irracionalidad de $\\sqrt 2 + \\sqrt 3$"
preview: "Demostrar que $\\sqrt 2 + \\sqrt 3$ es irracional. Problema clásico de fase nacional que ejercita el descenso y el manejo de extensiones cuadráticas."
dificultad: nacional
competencia: "OME 2015 (Fase Nacional)"
tags: [irracionalidad, descenso, extensiones-cuadraticas]
prerequisites: [descenso-infinito]
author: "Material olímpico"
updated: "2026-02-10"
---

## Enunciado

Demostrar que el número $\sqrt 2 + \sqrt 3$ es irracional.

## Idea de la solución

Suponemos por reducción al absurdo que $\sqrt 2 + \sqrt 3 = \frac{p}{q}$ es racional, y manipulamos para llegar a una contradicción con la irracionalidad — ya conocida — de $\sqrt 6$.

## Demostración

Supongamos que $\sqrt 2 + \sqrt 3 = r \in \mathbb Q$. Elevando al cuadrado:

$$
r^2 \;=\; (\sqrt 2 + \sqrt 3)^2 \;=\; 2 + 2\sqrt 6 + 3 \;=\; 5 + 2\sqrt 6.
$$

Despejando:

$$
\sqrt 6 \;=\; \frac{r^2 - 5}{2}.
$$

Como $r \in \mathbb Q$, el lado derecho es racional, así que $\sqrt 6 \in \mathbb Q$. Pero $\sqrt 6$ es irracional: si $\sqrt 6 = \frac{a}{b}$ con $\gcd(a, b) = 1$, entonces $6b^2 = a^2$, así que $2 \mid a^2 \Rightarrow 2 \mid a$, luego $4 \mid a^2 = 6b^2$, lo que obliga a $2 \mid 3b^2$, y por tanto $2 \mid b$, contradiciendo $\gcd(a, b) = 1$.

Hemos derivado una contradicción. Luego $\sqrt 2 + \sqrt 3 \notin \mathbb Q$. $\blacksquare$

## Observación

El argumento se generaliza con elegancia: si $p_1, \ldots, p_k$ son primos distintos, entonces

$$
\sqrt{p_1} + \sqrt{p_2} + \cdots + \sqrt{p_k}
$$

es irracional. La demostración general usa la teoría de extensiones de cuerpos: el grado $[\mathbb Q(\sqrt{p_1}, \ldots, \sqrt{p_k}) : \mathbb Q] = 2^k$, lo que prohíbe que cualquier elemento no trivial sea racional.

## Aplicaciones

La técnica clave es **aislar la parte irracional**: tras elevar al cuadrado, la única expresión que sobrevive con raíces no anidadas es la mixta $\sqrt{2 \cdot 3} = \sqrt 6$. Esta idea de *forzar la aparición del radical aislado* es el motor de casi todos los problemas de irracionalidad olímpica.

En geometría se traduce en la imposibilidad de construir con regla y compás ciertos puntos cuyas coordenadas violan esta estructura — el conocido problema de la duplicación del cubo $\sqrt[3]{2}$.

## Problemas relacionados

- **OME 2003.** Demostrar que $\sqrt[3]{2} + \sqrt[3]{3}$ es irracional. *Idea:* elevar al cubo y usar que $\sqrt[3]{6} \notin \mathbb Q$.
- **USAMO 1973/1.** Demostrar que $\cos(1°)$ es irracional.
