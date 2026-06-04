---
title: "OMG 2018 — Bisectriz y circunferencia"
preview: "En un triángulo $ABC$, la bisectriz desde $A$ corta a $BC$ en $D$ y al circuncírculo en $M$. Demostrar que $MD \\cdot MA = MB^2 = MC^2$."
dificultad: regional
competencia: "OMG 2018"
tags: [bisectriz, circuncirculo, potencia, semejanza]
prerequisites: [angulos-inscritos, potencia-de-un-punto]
author: "Adrián García Bouzas"
updated: "2026-02-10"
---

## Enunciado

Sea $ABC$ un triángulo con circuncírculo $\Omega$. La bisectriz interna del ángulo $\angle BAC$ corta al lado $BC$ en $D$ y a $\Omega$ en $M$ (con $M \neq A$). Demostrar que

$$
MA \cdot MD \;=\; MB^2 \;=\; MC^2.
$$

## Idea de la solución

La clave es identificar al punto $M$: por estar en la bisectriz desde $A$ y en el circuncírculo, $M$ es el **punto medio del arco $BC$ que no contiene a $A$**. Esto nos da inmediatamente $MB = MC$. Para la otra igualdad, mostramos que los triángulos $\triangle MBD$ y $\triangle MAB$ son semejantes.

## Demostración

**Paso 1.** $MB = MC$.

Como $AM$ es bisectriz de $\angle BAC$, se tiene $\angle BAM = \angle CAM$. Estos son ángulos inscritos en $\Omega$ que subtienden los arcos $\widehat{BM}$ y $\widehat{CM}$ respectivamente. Por tanto los arcos son iguales, y las cuerdas que los subtienden también:

$$
MB \;=\; MC.
$$

**Paso 2.** $\triangle MBD \sim \triangle MAB$.

Veamos los ángulos de ambos triángulos compartiendo el vértice en $M$:

- En $\triangle MBD$ y $\triangle MAB$, el ángulo en $M$ es **común** (ambos son $\angle BMA = \angle DMB$, ya que $A$, $D$, $M$ son colineales).
- $\angle MBD = \angle MBC$, que es ángulo inscrito en $\Omega$ subtendiendo el arco $\widehat{MC}$.
- $\angle MAB = \angle MAB$, ángulo inscrito subtendiendo el arco $\widehat{MB}$.

Como $\widehat{MB} = \widehat{MC}$ (Paso 1), estos ángulos inscritos son iguales:

$$
\angle MBD \;=\; \angle MAB.
$$

Por el criterio AA, $\triangle MBD \sim \triangle MAB$.

**Paso 3.** De la semejanza, los lados correspondientes son proporcionales:

$$
\frac{MD}{MB} \;=\; \frac{MB}{MA} \quad\Longrightarrow\quad MA \cdot MD \;=\; MB^2.
$$

Combinando con $MB = MC$:

$$
MA \cdot MD \;=\; MB^2 \;=\; MC^2. \qquad \blacksquare
$$

## Observación

El resultado puede interpretarse en términos de la **potencia del punto $D$** respecto al circuncírculo $\Omega$. La potencia de $D$ es

$$
\operatorname{pot}_\Omega(D) \;=\; DA \cdot DM \;=\; DB \cdot DC \;=\; -MB^2 + MA \cdot MD \cdot (\cdots),
$$

en concreto, sustituyendo en la relación obtenida da el resultado conocido $DA \cdot DM = DB \cdot DC$, que es exactamente el enunciado del teorema de la cuerda interseca.

## Aplicaciones

Este lema es **uno de los caballos de batalla** de la geometría olímpica:

1. El punto $M$ es el **centro** de la circunferencia que pasa por $B$, $C$ y el incentro $I$ (lema del incentro). De hecho $MI = MB = MC$.
2. Muchos problemas de configuraciones triangulares se resuelven introduciendo el punto medio del arco $\widehat{BC}$.
3. Combinado con inversión centrada en $M$, transforma problemas de tangencia con el circuncírculo en problemas de rectas paralelas.

## Problemas relacionados

- **Lema del incentro.** Si $I$ es el incentro de $\triangle ABC$ y $M$ el punto medio del arco $\widehat{BC}$ sin $A$, entonces $MB = MC = MI$.
- **IMO 1996/2.** Sea $P$ un punto interior a $\triangle ABC$ tal que... (la solución usa el punto medio de arco como auxiliar).
