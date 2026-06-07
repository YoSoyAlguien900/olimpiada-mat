---
title: "Áreas de triángulos: bases, alturas y razones"
preview: "Dos triángulos con la misma base tienen áreas en la razón de sus alturas, y viceversa. Esta observación casi trivial —combinada con la semejanza— es la vía más rápida para comparar longitudes a través de razones de áreas, y aparece constantemente disfrazada en problemas de olimpiada."
dificultad: iniciacion
tags: [areas, triangulo, base, altura, razon-de-areas, semejanza, cevianas]
prerequisites: [semejanza]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

El área de un triángulo es, en apariencia, un objeto puramente numérico —un cálculo—. Pero en geometría sintética las áreas se usan sobre todo como **un lenguaje para comparar longitudes**: la razón de dos áreas con una dimensión común (base o altura) es exactamente la razón de la otra dimensión. Esta idea simple, aplicada con cuidado, convierte afirmaciones sobre puntos medios, cevianas concurrentes y cuadriláteros en cálculos casi automáticos.

## Notación

Escribimos $S_{ABC}$ o $[ABC]$ para el área del triángulo $ABC$. La fórmula básica es

$$S_{ABC} = \frac{1}{2} \cdot \text{base} \cdot \text{altura} = \frac12 \, BC \cdot h_A,$$

donde $h_A = d(A, BC)$ es la distancia de $A$ a la recta $BC$ (la altura desde $A$).

## Teorema

**(Razón de áreas con base común)** Sean $\triangle ABC$ y $\triangle DBC$ dos triángulos que comparten el lado $BC$ (es decir, $A$ y $D$ son puntos cualesquiera, no necesariamente en la misma recta que $BC$). Entonces

$$\frac{S_{ABC}}{S_{DBC}} = \frac{d(A, BC)}{d(D, BC)}.$$

En particular, $S_{ABC} = S_{DBC}$ si y solo si $d(A, BC) = d(D, BC)$, es decir, si y solo si $A$ y $D$ equidistan de la recta $BC$ (lo que ocurre exactamente cuando $AD \parallel BC$, o cuando $A = D$, o cuando $AD$ es bisecada por $BC$).

**(Razón de áreas con altura común — triángulos "apilados")** Sean $\triangle ABD$ y $\triangle ACD$ dos triángulos con el mismo vértice $A$ y bases $BD$, $CD$ sobre una misma recta $\ell$ (es decir, $B$, $D$, $C$ son colineales). Entonces

$$\frac{S_{ABD}}{S_{ACD}} = \frac{BD}{CD}.$$

```geofig
// Triángulo ABC con ceviana AD; comparación de áreas ABD y ACD
size 8 6.5
point -3   0   B -0.28 -0.25
point  3   0   C  0.28 -0.25
point -0.6 0   D -0.05 -0.32
point  0.4 3.4 A  0.05  0.3
segment A B
segment A C
segment B C
segment A D
```

## Demostración

**Razón con base común.** $S_{ABC} = \frac12 BC \cdot d(A, BC)$ y $S_{DBC} = \frac12 BC \cdot d(D, BC)$; dividiendo, el factor común $\frac12 BC$ se cancela y queda la razón de las distancias.

Para la caracterización de la igualdad: $d(A,BC) = d(D,BC)$ con $A$, $D$ en el mismo semiplano respecto de $BC$ equivale a $AD \parallel BC$ (la recta $AD$ se mantiene a distancia constante de $BC$ si y solo si nunca se acerca ni se aleja, es decir, es paralela); con $A$, $D$ en semiplanos opuestos, equivale a que $BC$ corte a $AD$ en su punto medio. $\blacksquare$

**Razón con altura común.** Sea $h = d(A, \ell)$ la distancia común de $A$ a la recta $\ell$ que contiene a $B$, $D$, $C$. Entonces $S_{ABD} = \frac12 BD \cdot h$ y $S_{ACD} = \frac12 CD \cdot h$; dividiendo, el factor común $\frac12 h$ se cancela y queda la razón de las bases $BD/CD$. $\blacksquare$

## El lema de la ceviana

**Corolario (lema de la razón de la ceviana).** Sea $\triangle ABC$ un triángulo y $D$ un punto sobre el lado $BC$ (o su prolongación). Entonces

$$\frac{BD}{DC} = \frac{S_{ABD}}{S_{ADC}}.$$

Más generalmente, si $P$ es cualquier punto que no está sobre la recta $BC$,

$$\frac{BD}{DC} = \frac{S_{PBD}}{S_{PDC}}$$

(los dos triángulos $\triangle PBD$, $\triangle PDC$ comparten el vértice $P$ y tienen bases $BD$, $DC$ sobre la misma recta, así están en la situación del segundo teorema con altura común $d(P, BC)$).

**Esta es, esencialmente, la maquinaria detrás del teorema de Ceva**: cada razón $BD/DC$ a lo largo de un lado se reescribe como un cociente de áreas, y los cocientes se combinan telescópicamente.

## Ejemplo

### Comparar segmentos vía áreas: el teorema de la mediana

**Ejemplo 1.** Sea $ABC$ un triángulo y $M$ el punto medio de $BC$. Demostrar que la mediana $AM$ divide a $\triangle ABC$ en dos triángulos de igual área: $S_{ABM} = S_{ACM}$.

*Solución.* $\triangle ABM$ y $\triangle ACM$ comparten el vértice $A$ y tienen bases $BM$, $MC$ sobre la recta $BC$. Por el teorema de razón con altura común,

$$\frac{S_{ABM}}{S_{ACM}} = \frac{BM}{MC} = 1$$

porque $M$ es el punto medio. Luego $S_{ABM} = S_{ACM} = \frac12 S_{ABC}$. $\blacksquare$

*(Esta es la observación clave detrás del Ejemplo del triángulo medial: cada mediana biseca el área del triángulo, y las tres medianas —concurrentes en el baricentro— dividen a $ABC$ en seis triángulos de igual área.)*

---

### Razones de longitudes a partir de razones de áreas

**Ejemplo 2 (Problema 1 de la colección de iniciación, OMG 2000/P2a — vía áreas).** Sea $ABC$ un triángulo y $M$, $N$, $P$ los puntos medios de $BC$, $CA$, $AB$. Demostrar que cada uno de los cuatro triángulos $\triangle APN$, $\triangle PBM$, $\triangle NMC$, $\triangle MNP$ tiene área $\frac14 S_{ABC}$.

*Solución (alternativa a la de congruencia, vía áreas y semejanza).* Por el teorema de la base media, $\triangle APN \sim \triangle ABC$ con razón $\frac12$ (lados $AP = \frac12 AB$, $AN = \frac12 AC$ y ángulo $\angle A$ común). La razón de áreas de triángulos semejantes es el cuadrado de la razón de semejanza (esto se sigue de que todas las longitudes —incluidas bases y alturas— escalan por $k$, así el área, producto de dos longitudes, escala por $k^2$):

$$\frac{S_{APN}}{S_{ABC}} = \left(\frac12\right)^2 = \frac14.$$

Análogamente $S_{PBM} = S_{NMC} = \frac14 S_{ABC}$ (cada uno semejante a $ABC$ con razón $\frac12$). Como los cuatro triángulos llenan $ABC$ sin solaparse, $S_{MNP} = S_{ABC} - 3 \cdot \frac14 S_{ABC} = \frac14 S_{ABC}$. $\blacksquare$

---

### Localizar un punto mediante áreas iguales

**Ejemplo 3 (pieza clave del Problema 7, OME Fase Local 2011-2012).** Sea $ABCD$ un cuadrilátero convexo y $P$ un punto interior con $S_{PAB} = S_{PBC}$. Demostrar que $A$ y $C$ equidistan de la diagonal $BD$, es decir, $d(A, BD) = d(C, BD)$.

*Solución.* Los triángulos $\triangle PAB$ y $\triangle PCB$ comparten el lado $PB$, contenido en la recta $BD$. Por el teorema de razón de áreas con base común (aplicado a la base $PB$):

$$\frac{S_{PAB}}{S_{PCB}} = \frac{d(A, PB)}{d(C, PB)} = \frac{d(A, BD)}{d(C, BD)}.$$

Como $S_{PAB} = S_{PBC}$, se sigue $d(A, BD) = d(C, BD)$. $\blacksquare$

*(Esta es exactamente la herramienta que resuelve el Problema 7 de la colección: aplicada a los cuatro triángulos de áreas iguales, produce —como se detalla en el contenido de Paralelogramos, Ejemplo 1— que ambas diagonales pasan por el punto medio de la otra, forzando que $ABCD$ sea un paralelogramo.)*

## Aplicaciones

**Traducir longitudes a áreas y viceversa.** Cuando un problema pide comparar dos segmentos $XY$ y $ZW$ que no comparten ni extremo ni dirección obvia, buscar un vértice común $P$ y comparar $S_{PXY}$ con $S_{PZW}$ —o, si comparten una recta base, usar directamente el lema de la ceviana— suele ser más rápido que perseguir semejanzas explícitas.

**Detectar paralelismo a través de áreas iguales.** $S_{ABC} = S_{DBC}$ (con $A$, $D$ en el mismo semiplano respecto de $BC$) es **equivalente** a $AD \parallel BC$. Esta equivalencia, leída de derecha a izquierda, es una manera estándar de producir un paralelismo; leída de izquierda a derecha, es una manera estándar de explotar uno.

**El teorema de Ceva por áreas.** La identidad $\dfrac{BD}{DC} = \dfrac{S_{ABD}}{S_{ADC}} = \dfrac{S_{PBD}}{S_{PDC}}$ (para cualquier $P$ fuera de $BC$) permite escribir, para cevianas concurrentes $AD$, $BE$, $CF$ en un punto $P$:

$$\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = \frac{S_{PBD}}{S_{PDC}} \cdot \frac{S_{PCE}}{S_{PEA}} \cdot \frac{S_{PAF}}{S_{PFB}} = 1$$

(el producto telescopa usando que, p. ej., $S_{PBD} = S_{ABD}- S_{ABP}$, etc.) — esta es una demostración del **teorema de Ceva** completamente basada en razones de áreas.

## Observación

**No hace falta calcular el área —solo compararla.** En la inmensa mayoría de las aplicaciones olímpicas nunca se calcula explícitamente un área numérica: el área aparece únicamente como intermediario para transferir información entre longitudes (bases, alturas) que de otro modo serían difíciles de relacionar.

**Triángulos semejantes: razón de áreas es el cuadrado de la razón de semejanza.** Si $\triangle ABC \sim \triangle A'B'C'$ con razón $k$, entonces $S_{ABC}/S_{A'B'C'} = k^2$ (Ejemplo 2). Esta es la generalización natural de "longitud escala por $k$, área escala por $k^2$" y aparece en innumerables problemas de recubrimiento y subdivisión (compárese con el Problema 10 de la colección de iniciación, donde un triángulo se subdivide en $n^2$ copias semejantes de razón $1/n$).

## Problemas relacionados

- **(Clásico)** Sea $ABC$ un triángulo y $G$ su baricentro. Demostrar que los seis triángulos en que las tres medianas dividen a $ABC$ tienen todos la misma área, $\frac16 S_{ABC}$.

- **(Clásico)** Sea $P$ un punto interior del triángulo $ABC$. Las cevianas $AP$, $BP$, $CP$ cortan a los lados opuestos en $D$, $E$, $F$. Demostrar, usando razones de áreas, que
$$\frac{PD}{AD} + \frac{PE}{BE} + \frac{PF}{CF} = 1.$$

- **(OMG 2000/P2a)** Demostrar que el triángulo medial de $ABC$ lo divide en cuatro triángulos de área $\frac14 S_{ABC}$ cada uno (véase el Ejemplo 2; comparar con la solución por congruencia del contenido de la base media).

- **(OME Fase Local 2011-2012)** Sea $ABCD$ un cuadrilátero convexo y $P$ interior con las cuatro áreas $S_{PAB}, S_{PBC}, S_{PCD}, S_{PDA}$ iguales. Probar que las diagonales se bisecan (véase el Ejemplo 3 y el contenido de Paralelogramos).

- **(Teorema de Ceva, demostración por áreas)** Sean $D \in BC$, $E \in CA$, $F \in AB$. Probar que $AD$, $BE$, $CF$ son concurrentes si y solo si $\dfrac{BD}{DC}\cdot\dfrac{CE}{EA}\cdot\dfrac{AF}{FB} = 1$, usando exclusivamente razones de áreas (véase el contenido del Teorema de Ceva para la versión completa con razones signadas).
