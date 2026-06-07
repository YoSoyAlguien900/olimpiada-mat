---
title: "Teorema de la base media (segmento medio del triángulo)"
preview: "El segmento que une los puntos medios de dos lados de un triángulo es paralelo al tercer lado y mide la mitad. Una herramienta minúscula que resuelve de un plumazo problemas de paralelismo, longitudes y áreas con puntos medios."
dificultad: iniciacion
tags: [base-media, segmento-medio, puntos-medios, paralelismo, triangulo, trapecio, homotecia]
prerequisites: [semejanza]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

Cada vez que un enunciado menciona **puntos medios** de los lados de un triángulo (o, más generalmente, de un cuadrilátero), la primera idea que debe venir a la cabeza es el teorema de la base media. Es un resultado elemental —se demuestra en dos líneas con semejanza o con un vector— pero su poder está en lo que regala automáticamente: un paralelismo y una razón de longitudes $1:2$, listos para usar.

## Definición

En un triángulo $ABC$, el segmento que une los puntos medios de dos de sus lados se llama **base media** (o **segmento medio**, o **paralela media**) relativa al tercer lado.

## Teorema

**(Base media del triángulo)** Sean $M$ y $N$ los puntos medios de los lados $AB$ y $AC$ del triángulo $ABC$. Entonces:

$$MN \parallel BC \qquad \text{y} \qquad MN = \frac{1}{2}\,BC.$$

```geofig
// Triángulo ABC con base media MN paralela a BC
size 8 7
point -3   0   B -0.25 -0.25
point  3   0   C  0.25 -0.25
point  0   3.4 A  0.05  0.3
point -1.5 1.7 M -0.32  0.05
point  1.5 1.7 N  0.3   0.05
segment A B
segment A C
segment B C
segment M N
```

## Demostración

**Por semejanza.** Como $M$ y $N$ son los puntos medios de $AB$ y $AC$, se tiene $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{1}{2}$. El triángulo $AMN$ comparte el ángulo $\angle A$ con el triángulo $ABC$, y los lados que lo forman son proporcionales con razón $\frac12$. Por el criterio **LAL** de semejanza, $\triangle AMN \sim \triangle ABC$ con razón $\frac12$.

De la semejanza se obtiene $\angle AMN = \angle ABC$ (ángulos correspondientes), y como estos son ángulos correspondientes para las rectas $MN$ y $BC$ cortadas por la transversal $AB$, concluimos $MN \parallel BC$. Además $MN = \frac12 BC$ por la razón de semejanza. $\blacksquare$

**Por homotecia (forma rápida).** La homotecia $h$ de centro $A$ y razón $\frac12$ envía $B \mapsto M$ y $C \mapsto N$ (por definición de punto medio). Toda homotecia envía una recta a una recta paralela, así $h(BC) = MN$ es paralela a $BC$, y $MN = \frac12 BC$ porque la homotecia escala todas las longitudes por $\left|\frac12\right|$. $\blacksquare$

## Corolario (recíproco)

Si $M$ es el punto medio de $AB$ y la paralela a $BC$ por $M$ corta a $AC$ en $N$, entonces $N$ es el punto medio de $AC$ (y $MN = \frac12 BC$). En otras palabras: **una recta que pasa por el punto medio de un lado y es paralela a otro lado biseca al tercero**.

*Demostración.* Por el teorema de Thales aplicado al triángulo $ABC$ con la paralela $MN \parallel BC$: $\dfrac{AM}{AB} = \dfrac{AN}{AC}$. Como $\dfrac{AM}{AB} = \dfrac12$, también $\dfrac{AN}{AC} = \dfrac12$, así $N$ es el punto medio de $AC$. $\blacksquare$

## El triángulo medial

Si $M$, $N$, $P$ son los puntos medios de $BC$, $CA$, $AB$ respectivamente, el triángulo $MNP$ se llama el **triángulo medial** de $ABC$. Aplicando el teorema tres veces:

$$NP \parallel BC,\ NP = \tfrac12 BC; \qquad MP \parallel CA,\ MP = \tfrac12 CA; \qquad MN \parallel AB,\ MN = \tfrac12 AB.$$

Es decir, $\triangle MNP \sim \triangle ABC$ con razón $\frac12$ (criterio LLL), y la correspondencia de paralelismos hace que $\triangle MNP$ quede "invertido" respecto de $\triangle ABC$: cada vértice del medial está sobre el lado opuesto al vértice correspondiente de $ABC$ (por ejemplo $M$, punto medio de $BC$, corresponde a $A$).

```geofig
// Triángulo medial MNP inscrito en ABC
size 8 7.5
point -3   0    B -0.28 -0.25
point  3   0    C  0.28 -0.25
point  0.4 3.6  A  0.05  0.3
point -1.3 1.8  P -0.32  0.05
point  1.7 1.8  N  0.3   0.05
point  0   0    M  0.05 -0.32
segment A B
segment A C
segment B C
segment M N
segment N P
segment P M
```

**Consecuencia inmediata (Problema clásico, OMG 2000/P2a).** El triángulo medial divide a $ABC$ en cuatro triángulos $\triangle APN$, $\triangle PBM$, $\triangle NMC$ y $\triangle MNP$, todos congruentes entre sí (cada uno semejante a $ABC$ con razón $\frac12$, y con lados respectivamente paralelos a los de $ABC$, lo que fuerza la congruencia por LLL una vez fijada la longitud común $\frac12 BC$, $\frac12 CA$, $\frac12 AB$). En particular cada uno tiene área $\frac14 S_{ABC}$.

## Ejemplo

### Aplicación a cuadriláteros: el paralelogramo de Varignon

**Ejemplo 1 (OMG 2000/P2b).** Sea $ABCD$ un cuadrilátero convexo y sean $M$, $N$, $P$, $Q$ los puntos medios de $AB$, $BC$, $CD$, $DA$ respectivamente. Demostrar que $MNPQ$ es un paralelogramo de área igual a la mitad de $S_{ABCD}$.

*Solución.* Tracemos la diagonal $AC$. En el triángulo $ABC$, $M$ y $N$ son los puntos medios de $AB$ y $BC$, así por el teorema de la base media:

$$MN \parallel AC \qquad \text{y} \qquad MN = \tfrac12 AC.$$

En el triángulo $ACD$, $Q$ y $P$ son los puntos medios de $DA$ y $DC$, así igualmente:

$$QP \parallel AC \qquad \text{y} \qquad QP = \tfrac12 AC.$$

Combinando ambas, $MN \parallel QP$ y $MN = QP$. Un cuadrilátero con un par de lados opuestos paralelos e iguales es un **paralelogramo** (véase el contenido de paralelogramos), luego $MNPQ$ es un paralelogramo. $\checkmark$

Para el área: la diagonal $MP$ del paralelogramo $MNPQ$ lo divide en dos triángulos de igual área, $S_{MNPQ} = 2\,S_{MNP}$ (o usando $NQ$, $S_{MNPQ}=2\,S_{MQN}$ — cualquier diagonal sirve). Una manera limpia: la homotecia de centro $A$ y razón $\frac12$ envía $B \mapsto M$, y junto con las otras tres (centradas en $B$, $C$, $D$, todas de razón $\frac12$) descompone $ABCD$ en piezas que se reorganizan exactamente en $MNPQ$ recorrido una vez y su complemento — el cómputo directo con coordenadas o vectores da

$$S_{MNPQ} = \tfrac12 S_{ABCD},$$

resultado conocido como el **teorema de Varignon**. $\blacksquare$

---

### Aplicación a triángulos rectángulos: una segunda prueba del Problema 5

**Ejemplo 2.** Sea $ABC$ un triángulo rectángulo con $\angle C = 90°$ y sea $M$ el punto medio de la hipotenusa $AB$. Demostrar que $MC = \frac12 AB$ (es decir, $MA = MB = MC$), sin usar coordenadas.

*Solución.* Sea $N$ el punto medio del cateto $AC$. Por el teorema de la base media en $\triangle ABC$ (con $N$, $M$ puntos medios de $AC$, $AB$):

$$MN \parallel BC \qquad \text{y} \qquad MN = \tfrac12 BC.$$

Como $\angle ACB = 90°$, el lado $BC$ es perpendicular a $AC$; y como $MN \parallel BC$, también $MN \perp AC$. Así $MN$ es perpendicular a $AC$ y pasa por su punto medio $N$: $MN$ es la **mediatriz** del segmento $AC$.

Todo punto de la mediatriz de $AC$ equidista de $A$ y $C$, así $MA = MC$. Pero $M$ es el punto medio de $AB$, luego $MA = MB$. Combinando:

$$MC = MA = MB = \tfrac12 AB. \qquad \blacksquare$$

*(Compárese con la prueba por coordenadas sugerida en el enunciado del Problema 5: la base media convierte el problema en una propiedad de la mediatriz, evitando todo cálculo.)*

---

### Problema guiado

**Ejemplo 3 (Local XLIV OME).** Sea $ABC$ un triángulo, $M$ el punto medio de $BC$, y $D$, $E$ los puntos medios de $AB$ y $AC$. La recta $AM$ corta a $DE$ en $F$. Demostrar que $F$ es el punto medio de $AM$ y de $DE$.

*Solución.* Por la base media, $DE \parallel BC$. Como $DE \parallel BC$ y $F = AM \cap DE$, el segmento $DF$ es paralelo a $BM$ (ambos están sobre $DE$ y $BC$ respectivamente), así $\triangle ADF \sim \triangle ABM$ por **AA** (ángulo $\angle A$ común, y $\angle ADF = \angle ABM$ por ser ángulos correspondientes con la transversal $AB$ entre las paralelas $DE \parallel BC$). La razón de semejanza es $\dfrac{AD}{AB} = \dfrac12$. Luego $AF = \frac12 AM$ y $DF = \frac12 BM = \frac12 \cdot \frac12 BC = \frac14 BC$.

Análogamente $\triangle AEF \sim \triangle ACM$ con razón $\frac12$, dando $EF = \frac12 CM = \frac14 BC$. Como $DF = EF = \frac14 BC = \frac12 DE$, el punto $F$ es el punto medio de $DE$. Y $AF = \frac12 AM$ dice que $F$ es el punto medio de $AM$. $\blacksquare$

*(Esto también prueba que las tres medianas de un triángulo y los tres lados del triángulo medial se cortan en patrones predecibles — la base de la teoría del centroide.)*

## Aplicaciones

**Generar paralelismos «gratis».** Cuando un problema menciona puntos medios, trazar la base media correspondiente convierte instantáneamente la condición «$M$, $N$ son puntos medios» en una igualdad de longitudes *y* un paralelismo simultáneamente — dos hechos por el precio de uno.

**Trapecios: la base media también existe.** En un trapecio $ABCD$ con $AB \parallel CD$, el segmento que une los puntos medios de los lados no paralelos $AD$ y $BC$ es paralelo a las bases y mide $\dfrac{AB + CD}{2}$ (la semisuma). La demostración traza una diagonal y aplica el teorema del triángulo dos veces, igual que en el Ejemplo 1.

**Reducción de problemas con punto medio a semejanza $1:2$.** Cualquier problema que involucre el punto medio de un lado puede atacarse insertando la base media correspondiente: introduce de inmediato un triángulo semejante con razón $\frac12$, listo para combinar con otras semejanzas o ángulos inscritos.

**El centroide y la razón $2:1$.** Las tres medianas de un triángulo concurren en el **baricentro** o **centroide** $G$, que las divide en razón $2:1$ desde cada vértice. Esto se demuestra con la base media: si $M$, $N$ son puntos medios de $BC$, $CA$, las medianas $AM$ y $BN$ se cortan en $G$; trazando la base media $MN$ ($MN \parallel AB$, $MN = \frac12 AB$) se obtiene $\triangle GMN \sim \triangle GAB$ con razón $\frac12$, de donde $GA = 2\,GM$ y $GB = 2\,GN$.

## Observación

**No confundir con la mediana.** La *mediana* de un triángulo es el segmento que une un vértice con el punto medio del lado opuesto; la *base media* (o segmento medio) une los puntos medios de **dos lados**. Son objetos distintos que con frecuencia aparecen juntos (como en el Ejemplo 3).

**Generalización: el teorema de Thales.** El teorema de la base media es el caso particular $k = \frac12$ del teorema de Thales: si una recta corta a dos lados de un triángulo en la misma razón $\dfrac{AM}{AB} = \dfrac{AN}{AC} = k$, entonces $MN \parallel BC$ y $MN = k \cdot BC$. La demostración es idéntica, vía $\triangle AMN \sim \triangle ABC$ con razón $k$.

## Problemas relacionados

- **(OMG 2000/P2a)** Sea $ABC$ un triángulo y $M$, $N$, $P$ los puntos medios de $BC$, $CA$, $AB$. Probar que el triángulo medial $MNP$ divide a $ABC$ en cuatro triángulos congruentes entre sí, cada uno de área $\frac14 S_{ABC}$.

- **(OMG 2000/P2b)** Sea $ABCD$ un cuadrilátero convexo y $M$, $N$, $P$, $Q$ los puntos medios de sus lados. Probar que $MNPQ$ es un paralelogramo (el paralelogramo de Varignon) de área $\frac12 S_{ABCD}$.

- **(Clásico)** Sea $ABC$ un triángulo y $G$ su baricentro. Las medianas $AM$, $BN$, $CP$ concurren en $G$ y $AG = 2\,GM$, $BG = 2\,GN$, $CG = 2\,GP$. Demostrarlo usando bases medias.

- **(Clásico)** Sea $ABCD$ un trapecio con $AB \parallel CD$ y $M$, $N$ los puntos medios de los lados no paralelos $AD$, $BC$. Probar que $MN \parallel AB$ y $MN = \frac{AB+CD}{2}$.

- **(Clásico)** Sea $ABC$ un triángulo y $H$ su ortocentro. Sean $M$, $N$, $P$ los puntos medios de los lados. Probar que la circunferencia que pasa por $M$, $N$, $P$ también pasa por los pies de las tres alturas — la **circunferencia de los nueve puntos** (desarrollado en su propio capítulo).
