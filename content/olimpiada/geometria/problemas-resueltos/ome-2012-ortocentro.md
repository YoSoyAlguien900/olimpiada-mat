---
title: "OME 2012 — Reflexión del ortocentro"
preview: "En un triángulo $ABC$ acutángulo, la reflexión del ortocentro $H$ sobre un lado pertenece al circuncírculo. Resultado fundamental con demostración angular."
dificultad: nacional
competencia: "OME 2012 (Fase Nacional)"
tags: [ortocentro, circuncirculo, reflexion, angulos]
prerequisites: [angulos-inscritos, potencia-de-un-punto]
author: "Material olímpico"
updated: "2026-02-10"
---

## Enunciado

Sea $ABC$ un triángulo acutángulo y $H$ su ortocentro. Demostrar que la reflexión de $H$ sobre el lado $BC$ pertenece al circuncírculo de $ABC$.

## Idea de la solución

Llamamos $H_A$ a la reflexión de $H$ sobre $BC$. Para demostrar que $H_A \in \Omega$ (circuncírculo), basta probar que $\angle BH_AC = 180° - \angle BAC$ (suma a $180°$ con $\angle BAC$, condición de inscripción).

## Demostración

Sea $D$ el pie de la altura desde $A$ sobre $BC$. Por definición del ortocentro, $H$ está en la altura $AD$, luego $H$, $D$, $A$ son colineales y $HD \perp BC$. Sea $H_A$ la reflexión de $H$ sobre $BC$: entonces $D$ es el punto medio de $HH_A$.

**Paso 1.** Calculemos $\angle HBC$.

En el triángulo $BDH$ rectángulo en $D$, los ángulos satisfacen $\angle HBD + \angle BHD = 90°$. Pero $\angle BHD$ es el ángulo en $H$ en el triángulo formado por $B$, $H$ y la altura — equivalentemente, $\angle BHD = 90° - \angle HBD$.

Por otro lado, $H$ está también en la altura desde $B$, así que $BH \perp AC$. En el triángulo rectángulo formado por $B$, el pie de la altura desde $B$ y $C$, se obtiene

$$
\angle HBC \;=\; 90° - \angle ACB \;=\; 90° - C.
$$

**Paso 2.** Por simetría respecto a $BC$:

$$
\angle H_A BC \;=\; \angle HBC \;=\; 90° - C.
$$

**Paso 3.** Análogamente,

$$
\angle H_A CB \;=\; \angle HCB \;=\; 90° - B.
$$

**Paso 4.** Sumando en el triángulo $H_A BC$:

$$
\angle BH_AC \;=\; 180° - \angle H_A BC - \angle H_A CB \;=\; 180° - (90° - C) - (90° - B) \;=\; B + C.
$$

Como $A + B + C = 180°$, deducimos $B + C = 180° - A$, así que

$$
\angle BH_AC \;=\; 180° - A.
$$

**Paso 5.** En el cuadrilátero $ABH_AC$, los ángulos opuestos $A$ (en el vértice $A$) y $\angle BH_AC$ suman $180°$. Por el recíproco del criterio de inscripción, $A, B, H_A, C$ son concíclicos. Es decir, $H_A$ pertenece al circuncírculo de $ABC$. $\blacksquare$

## Observación

La demostración usa la **caracterización angular del ortocentro**: $\angle HBC = 90° - C$ y sus tres simetrías cíclicas. Estas tres identidades, junto con $\angle BAC = A$, son el lenguaje básico para todo problema sobre el ortocentro.

Un argumento alternativo, igualmente elegante: la circunferencia que pasa por $B$, $C$ y $H_A$ tiene como centro el circuncentro $O$ — porque $OH_A = OB = OC$ se sigue de que la mediatriz de $BH_A$ y de $CH_A$ coinciden con las mediatrices de $BH$ y $CH$, ya conocidas.

## Aplicaciones

Este resultado es **el más usado** sobre el ortocentro en problemas olímpicos:

1. **Triángulo órtico** $H_A H_B H_C$: las tres reflexiones son concíclicas en $\Omega$, formando otro triángulo inscrito muy estudiado.
2. **Recta de Steiner**: lugar geométrico de las reflexiones del ortocentro sobre los lados.
3. **Configuración Euler**: $H$, baricentro $G$ y circuncentro $O$ son colineales, con $HG = 2\cdot GO$.

## Problemas relacionados

- **Cevianas y ortocentro.** Demostrar que las cuatro circunferencias circunscritas a $\triangle HBC$, $\triangle HCA$, $\triangle HAB$ y $\triangle ABC$ tienen el mismo radio.
- **IMO 2007/4.** En un triángulo acutángulo $ABC$, la bisectriz del ángulo $\angle BCA$ corta al circuncírculo en $R$, a la mediatriz de $BC$ en $P$, y a la mediatriz de $AC$ en $Q$. (la reflexión del ortocentro aparece en la solución).
