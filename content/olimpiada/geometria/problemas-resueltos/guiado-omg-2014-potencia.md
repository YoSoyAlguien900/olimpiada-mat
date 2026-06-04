---
title: "OMG 2014 — Potencia de un punto y configuración tangente (guiado)"
preview: "Dos circunferencias tangentes y una secante. Probar una identidad de longitudes usando potencia del punto. Problema regional con análisis paso a paso de las equivalencias entre potencia y longitudes."
dificultad: regional
competencia: "OMG 2014"
tags: [potencia, tangencia, circunferencias, guiado]
prerequisites: [potencia-de-un-punto, eje-radical]
author: "Material olímpico"
updated: "2026-02-13"
---

## Enunciado

Sean $\omega_1$ y $\omega_2$ dos circunferencias tangentes externamente en un punto $T$. Una recta $\ell$ pasa por un punto $P$ exterior a ambas circunferencias y corta a $\omega_1$ en los puntos $A$, $A'$ (con $A$ entre $P$ y $A'$) y a $\omega_2$ en los puntos $B$, $B'$ (con $B$ entre $P$ y $B'$). Demostrar que

$$
|PA| \cdot |PA'| \;=\; |PB| \cdot |PB'| \;\Longleftrightarrow\; P \in \overleftrightarrow{T} \text{ (la tangente común en } T).
$$

(Es decir, las dos potencias coinciden exactamente cuando $P$ está sobre la tangente común en el punto de tangencia.)

---

## Fase 1: identificar las herramientas

Recordemos las dos potencias en juego:

$$
\operatorname{pot}_{\omega_1}(P) \;=\; |PA| \cdot |PA'|, \qquad \operatorname{pot}_{\omega_2}(P) \;=\; |PB| \cdot |PB'|.
$$

(Con signos, pero para $P$ exterior a ambas circunferencias, ambas son positivas.)

**Replanteamiento.** La condición pedida es:

$$
\operatorname{pot}_{\omega_1}(P) \;=\; \operatorname{pot}_{\omega_2}(P).
$$

**Conocimiento previo:** el lugar geométrico de los puntos con potencia igual a dos circunferencias es el **eje radical**.

---

## Fase 2: identificar el eje radical

¿Qué es el eje radical de dos circunferencias **tangentes externamente** en $T$?

**Caso de tangencia:** dos circunferencias tangentes externamente comparten exactamente un punto $T$. La recta perpendicular a la línea de centros $O_1 O_2$ que pasa por $T$ es precisamente la **tangente común** en $T$. Esta es la **tangente común externa que pasa por $T$**.

**Verificación.** Por la caracterización: el eje radical es la recta perpendicular a $O_1 O_2$ tal que la potencia respecto a ambas circunferencias coincide. En el punto $T$:

- $\operatorname{pot}_{\omega_1}(T) = |TO_1|^2 - r_1^2 = r_1^2 - r_1^2 = 0$.
- $\operatorname{pot}_{\omega_2}(T) = |TO_2|^2 - r_2^2 = r_2^2 - r_2^2 = 0$.

Sí, $T$ está en el eje radical. La perpendicular a $O_1 O_2$ por $T$ es la tangente común en $T$ (porque la línea de centros es perpendicular a la tangente común en el punto de tangencia, por simetría).

Por tanto: **el eje radical de $\omega_1$ y $\omega_2$ es la tangente común en $T$**.

---

## Fase 3: aplicar la caracterización

Por la definición del eje radical:

$$
P \in \text{eje radical} \quad \Longleftrightarrow \quad \operatorname{pot}_{\omega_1}(P) = \operatorname{pot}_{\omega_2}(P).
$$

Sustituyendo:

$$
P \in \text{tangente común en } T \quad \Longleftrightarrow \quad |PA| \cdot |PA'| = |PB| \cdot |PB'|.
$$

**Esto es exactamente lo pedido.** $\blacksquare$

---

## Demostración formal completa

Vamos a redactarlo limpio, sin proceso heurístico:

**Demostración.**

Sea $\omega_1$ con centro $O_1$ y radio $r_1$, $\omega_2$ con centro $O_2$ y radio $r_2$, tangentes externamente en $T$. La línea $O_1 O_2$ pasa por $T$ y $|O_1 T| = r_1$, $|O_2 T| = r_2$.

La **tangente común** $t$ a $\omega_1$ y $\omega_2$ en $T$ es la recta perpendicular a $O_1 O_2$ por $T$.

**(⇐) Si $P \in t$.**

Calculamos las potencias:

$$
\operatorname{pot}_{\omega_1}(P) \;=\; |PO_1|^2 - r_1^2, \qquad \operatorname{pot}_{\omega_2}(P) \;=\; |PO_2|^2 - r_2^2.
$$

Como $P \in t$ y $t \perp O_1 O_2$ en $T$, por Pitágoras:

$$
|PO_1|^2 \;=\; |PT|^2 + |TO_1|^2 \;=\; |PT|^2 + r_1^2,
$$

$$
|PO_2|^2 \;=\; |PT|^2 + r_2^2.
$$

Sustituyendo:

$$
\operatorname{pot}_{\omega_1}(P) \;=\; |PT|^2, \qquad \operatorname{pot}_{\omega_2}(P) \;=\; |PT|^2.
$$

Las dos potencias coinciden, así que (interpretando las potencias en términos de la secante $\ell$):

$$
|PA| \cdot |PA'| \;=\; \operatorname{pot}_{\omega_1}(P) \;=\; |PT|^2 \;=\; \operatorname{pot}_{\omega_2}(P) \;=\; |PB| \cdot |PB'|. \quad \checkmark
$$

**(⇒) Si $|PA| \cdot |PA'| = |PB| \cdot |PB'|$.**

Esto significa $\operatorname{pot}_{\omega_1}(P) = \operatorname{pot}_{\omega_2}(P)$.

Por la definición del eje radical: el conjunto de tales $P$ es exactamente el eje radical de $\omega_1, \omega_2$.

Por el cálculo de la dirección anterior: $t$ está contenida en el eje radical (las potencias en $T$ son ambas $0$, y $t$ es perpendicular a $O_1 O_2$ — la dirección obligatoria del eje radical, que es única).

Por unicidad de la recta perpendicular por $T$: el eje radical es exactamente $t$. Luego $P \in t$. $\blacksquare$

---

## Observación

**Lo que aprendimos.**

1. **Identificar el invariante.** La condición del problema es una igualdad de productos de longitudes — pero **bajo el espejo de la potencia del punto**, se convierte en igualdad de **potencias**. Esto traduce un problema métrico en un problema geométrico (lugar geométrico).

2. **El eje radical de circunferencias tangentes es la tangente común.** Es un caso particular tan útil que conviene memorizarlo. Otros casos:
   - Tangentes externamente → tangente común en el punto.
   - Tangentes internamente → tangente común en el punto (sí, la misma estructura).
   - Secantes → la recta que pasa por los dos puntos de intersección.
   - Disjuntas → una recta que no toca ninguna de las dos.

3. **Una identidad bonita.** $\operatorname{pot}_{\omega_i}(P) = |PT|^2$ cuando $P$ está en la tangente $t$: significa que la **distancia tangencial** desde $P$ a $T$ es igual a la potencia.

**Por qué este es un problema típico de OMG.** El nivel regional gallego suele tener un problema de geometría con una configuración estándar y una idea técnica conocida. Aquí, la "idea" es invocar el eje radical. Sin ese concepto, el problema parece duro; con él, es una página.

---

## Generalización

**Versión más general.** Para **tres** circunferencias tangentes (o intersecantes) mutuamente en pares, sus tres tangentes comunes (o ejes radicales) son **concurrentes** en el centro radical.

En el caso de tres circunferencias **mutuamente tangentes** en puntos distintos $T_{12}, T_{23}, T_{13}$, las tres tangentes son concurrentes en un punto cuyas distancias a $T_{12}, T_{23}, T_{13}$ son iguales — el centro de la **circunferencia tangencial interior**.

## Problemas relacionados

- **OME 2014.** Problema similar con tres circunferencias y centro radical.
- **IMO 1992/4.** Configuración de circunferencias tangentes con argumento tipo centro radical.
- **Problema de Apolonio (clásico):** dadas tres circunferencias, construir las que son tangentes a las tres. Aplicación profunda de potencias y ejes radicales.
