---
title: "Teorema de Miquel y el punto de Miquel"
preview: "Dados un triángulo y tres puntos uno en cada lado, los tres circuncírculos definidos concurren en un punto. Una de las concurrencias más bellas y útiles de la geometría sintética."
dificultad: nacional
tags: [miquel, concurrencia, circuncirculos, cuadrilatero]
prerequisites: [angulos-inscritos, cuadrilateros-ciclicos]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Teorema de Miquel (triángulo)

Sea $ABC$ un triángulo. Sean $X \in BC$, $Y \in CA$, $Z \in AB$ tres puntos (distintos de los vértices) sobre los lados (o sus prolongaciones). Sean:

- $\omega_A = $ circuncírculo de $\triangle AYZ$,
- $\omega_B = $ circuncírculo de $\triangle BZX$,
- $\omega_C = $ circuncírculo de $\triangle CXY$.

Entonces **$\omega_A$, $\omega_B$, $\omega_C$ pasan por un punto común** llamado el **punto de Miquel** de la tripleta $(X, Y, Z)$.

```geofig
// ωA=(AYZ), ωB=(BZX), ωC=(CXY) concurren en el punto de Miquel M
size 7 6.2
circle  0.779  1.261   1.660
circle -1.33  -0.5825  1.8675
circle  1.67  -1.395   1.5297
point  0.17   2.805   A   0.05  0.28
point -2.83  -1.695   B  -0.34 -0.06
point  3.17  -1.695   C   0.28 -0.06
point  0.17  -1.695   X   0.05 -0.3
point  1.97   0.105   Y   0.26  0.1
point -0.88   1.23    Z  -0.4   0.08
point  0.526 -0.379   M   0.18  0.1
segment A B
segment B C
segment C A
```

## Demostración

Sean $\omega_A$ y $\omega_B$ los dos primeros circuncírculos. Se cortan en $Z$ y en otro punto, llamémoslo $M$.

Vamos a demostrar que $M$ está en $\omega_C$.

**Ángulos en $\omega_A$ (cíclico $AYZM$):**
$$
\angle MYA \;=\; \pi - \angle MZA \quad (\text{ángulos opuestos cíclicos}).
$$

**Ángulos en $\omega_B$ (cíclico $BZXM$):**
$$
\angle MZB \;=\; \pi - \angle MXB.
$$

Como $\angle MZA + \angle MZB = \pi$ (forman un ángulo llano en $Z$):
$$
\angle MZA \;=\; \pi - \angle MZB \;=\; \angle MXB.
$$

Sustituyendo en la primera:
$$
\angle MYA \;=\; \pi - \angle MXB.
$$

Como $\angle MYA + \angle MYC = \pi$ y $\angle MXB + \angle MXC = \pi$ (cada par formando ángulo llano):
$$
\angle MYC \;=\; \pi - \angle MYA \;=\; \angle MXB \;=\; \pi - \angle MXC.
$$

Por tanto $\angle MYC + \angle MXC = \pi$, así que $CYMX$ es **cíclico**, es decir, $M \in \omega_C$. $\blacksquare$

## Teorema de Miquel (cuadrilátero completo)

**Configuración.** Cuatro rectas en posición general definen un **cuadrilátero completo**: cuatro triángulos cuyos vértices son las intersecciones por pares.

**Teorema.** Los cuatro circuncírculos de los cuatro triángulos formados pasan por un mismo punto, el **punto de Miquel del cuadrilátero completo**.

## Demostración

Sea las cuatro rectas $\ell_1, \ell_2, \ell_3, \ell_4$ y sus seis intersecciones $P_{ij} = \ell_i \cap \ell_j$. Los cuatro triángulos son $T_i = $ los tres puntos $P_{jk}$ con $j, k \neq i$.

Aplicamos el teorema de Miquel para tres rectas $\ell_2, \ell_3, \ell_4$ (con vértices $P_{23}, P_{24}, P_{34}$) y los puntos $X = P_{12} \in \ell_2 \cap \ell_1$, $Y = P_{13}, Z = P_{14}$: los tres circuncírculos $\omega_{P_{23}YZ}, \omega_{P_{24}ZX}, \omega_{P_{34}XY}$ concurren en un punto.

Estos circuncírculos son precisamente tres de los cuatro circuncírculos del cuadrilátero completo. Aplicando una vez más se completa la concurrencia. $\blacksquare$

## Propiedades del punto de Miquel

**1. Conexión con rotohomotecia.** El punto de Miquel del cuadrilátero $P_1 P_2 P_3 P_4$ es el **centro de la rotohomotecia** que envía $P_1 P_2 \to P_4 P_3$ (y simultáneamente la que envía $P_1 P_4 \to P_2 P_3$).

**2. Ubicación.** El punto de Miquel está en una posición distinguida — generalmente interior al cuadrilátero si es convexo.

**3. Generalización.** Para un polígono cíclico $n$-gono se generaliza con $n$ circuncírculos pasando por un único punto.

## Aplicaciones

### Aplicación 1: concurrencia de cevianas circulares

Cuando un problema presenta:
- Un triángulo $ABC$,
- Tres puntos uno en cada lado,

y pide demostrar **concurrencia** de tres rectas o **cocircularidad** de cuatro puntos, considerar el punto de Miquel.

### Aplicación 2: cuadrilátero completo

Si un problema involucra cuatro rectas en posición general (o un cuadrilátero con sus diagonales prolongadas), el punto de Miquel es **el centro natural** de la configuración, y casi todas las concurrencias se explican por su existencia.

### Aplicación 3: problemas olímpicos

**IMO 2001/5 (variante).** Configuración con cuatro circuncírculos. El punto común es el punto de Miquel.

**OME 2015.** Demostrar que ciertos cuatro circuncírculos en una configuración pasan por un punto. *Aplicación directa de Miquel.*

**OIM 2009.** Problema con tres puntos en los lados; identificar el punto de Miquel resuelve.

### Aplicación 4: caracterización del punto

Para el cuadrilátero completo $ABCD$ con diagonales prolongadas (rectas $AB$, $CD$, $AC$, $BD$), si $M$ es el punto de Miquel:

- $M$ está en el círculo de los puntos diagonales (configuración autopolar).
- $M$ se proyecta sobre las cuatro rectas en puntos colineales (línea de Simson generalizada).
- $M$ es el centro de la inversión que intercambia los pares opuestos.

## Observación

**Por qué aparece tanto.** El teorema de Miquel formaliza la **idea intuitiva** de que "cuando tres circunferencias están relacionadas de cierta manera, deben concurrir". Es una de las pocas afirmaciones de concurrencia **garantizada** sin hipótesis especiales, lo cual la hace **extremadamente usable**.

**Cómo aplicarlo en un problema.**

1. Identifica un triángulo (o cuadrilátero) en la configuración.
2. Identifica tres puntos en sus lados (o las cuatro intersecciones del cuadrilátero).
3. Aplica Miquel: los tres (o cuatro) circuncírculos concurren.
4. Usa este punto distinguido para la demostración.

**Generalización al cuadrilátero cíclico.** Si los cuatro vértices del cuadrilátero $ABCD$ son **concíclicos** (cuadrilátero cíclico), entonces el punto de Miquel **coincide con el centro del circuncírculo** del cuadrilátero. Esta es la "degeneración" del caso general.

## Problemas relacionados

- **IMO 1985/5.** Configuración con cuatro circuncírculos concurrentes.
- **Putnam 1997.** Aplicación al cuadrilátero completo.
- **Teorema del cuadrilátero pivote:** generalización donde el punto de Miquel "pivota" cuando los tres puntos del triángulo se mueven.
- **Teorema de Clifford:** generalización para $n$ rectas y $n$-tuplas de circunferencias.
