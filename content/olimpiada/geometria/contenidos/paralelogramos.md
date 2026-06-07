---
title: "Paralelogramos: criterios y propiedades"
preview: "Lados opuestos paralelos, lados opuestos iguales, diagonales que se bisecan: tres caras de la misma simetría central. Reconocer un paralelogramo —o construir uno— es uno de los movimientos más rentables al enfrentarse a un cuadrilátero."
dificultad: iniciacion
tags: [paralelogramo, cuadrilatero, diagonales, simetria-central, congruencia, base-media]
prerequisites: [congruencia-isosceles]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

Después del triángulo, el paralelogramo es la figura más simétrica y más útil de la geometría elemental: tiene un **centro de simetría** (el punto de corte de las diagonales), y esa simetría central es la fuente de todas sus propiedades. Reconocer que un cuadrilátero es un paralelogramo —o construir uno auxiliar— convierte de un plumazo igualdades de ángulos en igualdades de longitudes, y viceversa.

## Definición

Un cuadrilátero $ABCD$ es un **paralelogramo** si sus lados opuestos son paralelos: $AB \parallel CD$ y $BC \parallel DA$.

```geofig
// Paralelogramo ABCD con diagonales que se cortan en O
size 8 6.5
point -3   -1.4  A -0.28 -0.22
point  2.6 -1.4  B  0.28 -0.22
point  3.6  1.4  C  0.28  0.25
point -2   1.4   D -0.28  0.25
point  0.3  0    O  0.05 -0.3
segment A B
segment B C
segment C D
segment D A
segment A C
segment B D
```

## Teorema

**(Criterios de paralelogramo)** Para un cuadrilátero convexo $ABCD$, las siguientes condiciones son equivalentes —cada una por sí sola caracteriza al paralelogramo—:

**(i)** Lados opuestos paralelos: $AB \parallel CD$ y $BC \parallel DA$. *(definición)*

**(ii)** Lados opuestos iguales: $AB = CD$ y $BC = DA$.

**(iii)** Un par de lados opuestos paralelos e iguales: $AB \parallel CD$ y $AB = CD$.

**(iv)** Las diagonales se bisecan mutuamente: $AC$ y $BD$ se cortan en su punto medio común.

**(v)** Ángulos opuestos iguales: $\angle A = \angle C$ y $\angle B = \angle D$.

## Demostración

La estrategia es siempre la misma: trazar una diagonal, que parte el cuadrilátero en dos triángulos, y comparar esos triángulos por congruencia o por ángulos alternos.

**(i) $\Rightarrow$ (ii) y (iv).** Tracemos la diagonal $AC$. Como $AB \parallel CD$, los ángulos alternos internos con transversal $AC$ son iguales: $\angle BAC = \angle DCA$. Como $BC \parallel DA$, igualmente $\angle BCA = \angle DAC$. Junto con el lado común $AC$, el criterio **ALA** da $\triangle ABC \cong \triangle CDA$. De la congruencia: $AB = CD$ y $BC = DA$, que es (ii).

Para (iv): sea $O = AC \cap BD$. En los triángulos $\triangle AOB$ y $\triangle COD$: $AB = CD$ (recién probado), $\angle OAB = \angle OCD$ y $\angle OBA = \angle ODC$ (ángulos alternos internos, $AB \parallel CD$). Por **ALA**, $\triangle AOB \cong \triangle COD$, así $AO = CO$ y $BO = DO$: las diagonales se bisecan. $\blacksquare$

**(ii) $\Rightarrow$ (i).** Tracemos la diagonal $AC$. Como $AB = CD$, $BC = DA$ y $AC = CA$, el criterio **LLL** da $\triangle ABC \cong \triangle CDA$. Luego $\angle BAC = \angle DCA$, que son alternos internos con transversal $AC$, así $AB \parallel CD$. Análogamente $\angle BCA = \angle DAC$ da $BC \parallel DA$. $\blacksquare$

**(iii) $\Rightarrow$ (i).** Tracemos $AC$. Como $AB \parallel CD$, $\angle BAC = \angle DCA$ (alternos internos). Junto con $AB = CD$ y $AC = CA$, el criterio **LAL** da $\triangle ABC \cong \triangle CDA$, de donde $BC = DA$ y $\angle BCA = \angle DAC$ (alternos internos), así $BC \parallel DA$. Junto con $AB \parallel CD$ (hipótesis), obtenemos (i): los dos pares de lados opuestos son paralelos. $\blacksquare$

**(iv) $\Rightarrow$ (i).** Sea $O$ el punto medio común de $AC$ y $BD$. En $\triangle AOB$ y $\triangle COD$: $AO = CO$, $BO = DO$ (hipótesis) y $\angle AOB = \angle COD$ (opuestos por el vértice). Por **LAL**, $\triangle AOB \cong \triangle COD$, así $AB = CD$ y $\angle OAB = \angle OCD$ (alternos internos), dando $AB \parallel CD$. Simétricamente $BC \parallel DA$. $\blacksquare$

**(v) $\Rightarrow$ (i).** En un cuadrilátero, $\angle A + \angle B + \angle C + \angle D = 360°$. Si $\angle A = \angle C$ y $\angle B = \angle D$, entonces $2\angle A + 2\angle B = 360°$, así $\angle A + \angle B = 180°$. Pero $\angle A$ y $\angle B$ son ángulos internos en el mismo lado de la transversal $AB$ respecto a las rectas $DA$ y $CB$; si suman $180°$, son **suplementarios conjugados internos**, lo que fuerza $DA \parallel CB$. Análogamente $\angle B + \angle C = 180°$ fuerza $AB \parallel DC$. $\blacksquare$

(Las implicaciones recíprocas —p. ej. (i) $\Rightarrow$ (v)— se obtienen encadenando las anteriores: (i) $\Rightarrow$ (ii) $\Rightarrow \cdots$, y en cada paso ya establecimos también las propiedades cruzadas, como (i) $\Rightarrow$ ángulos alternos iguales $\Rightarrow$ (v).)

## Casos particulares

- **Rectángulo:** paralelogramo con un ángulo recto (y por tanto los cuatro). Propiedad distintiva: las diagonales son iguales ($AC = BD$).
- **Rombo:** paralelogramo con los cuatro lados iguales. Propiedad distintiva: las diagonales son perpendiculares y bisectrices de los ángulos.
- **Cuadrado:** rectángulo y rombo a la vez.

## Ejemplo

### Construir un paralelogramo para trasladar información

**Ejemplo 1 (Problema 7 de la colección de iniciación — OME Fase Local 2011-2012).** Sea $ABCD$ un cuadrilátero convexo y $P$ un punto interior tal que los cuatro triángulos $\triangle PAB$, $\triangle PBC$, $\triangle PCD$, $\triangle PDA$ tienen la misma área. Demostrar que las diagonales $AC$ y $BD$ se bisecan mutuamente (es decir, que $ABCD$ es un paralelogramo).

*Solución.* Usamos el hecho elemental (desarrollado en el contenido de Áreas de triángulos): **dos triángulos que comparten un lado tienen áreas proporcionales a las distancias del tercer vértice a la recta que contiene ese lado**; en particular, áreas iguales con base común fuerzan distancias iguales.

**Paso 1: la diagonal $BD$ pasa por el punto medio de $AC$.** Los triángulos $\triangle ABP$ y $\triangle CBP$ comparten el lado $BP$ (contenido en la recta $BD$). Como $S_{PAB} = S_{PBC}$, las distancias de $A$ y de $C$ a la recta $BD$ son iguales: $d(A, BD) = d(C, BD)$. Como $ABCD$ es convexo, la diagonal $BD$ separa a $A$ de $C$ (quedan en semiplanos opuestos). Un segmento cuyos extremos equidistan de una recta y están en semiplanos opuestos es bisecado por esa recta. Luego $BD$ pasa por el punto medio $M$ de $AC$.

**Paso 2: la diagonal $AC$ pasa por el punto medio de $BD$.** Simétricamente, $\triangle PAB$ y $\triangle PAD$ comparten el lado $AP$ (contenido en $AC$), y $S_{PAB} = S_{PDA}$ da $d(B, AC) = d(D, AC)$. Como $ABCD$ es convexo, $AC$ separa a $B$ de $D$, así $AC$ pasa por el punto medio $N$ de $BD$.

**Paso 3: concluir.** Sea $O = AC \cap BD$ (las diagonales de un cuadrilátero convexo se cortan en un único punto interior). Por el Paso 1, $M \in BD$; pero $M \in AC$ trivialmente (es el punto medio de $AC$), así $M$ está en ambas diagonales, luego $M = O$. Por el Paso 2, análogamente $N = O$. Por tanto $O$ es simultáneamente el punto medio de $AC$ (pues $O = M$) y el punto medio de $BD$ (pues $O = N$): las diagonales se bisecan mutuamente. Por el criterio **(iv)**, $ABCD$ es un paralelogramo. $\blacksquare$

---

### Detectar un paralelogramo oculto: el paralelogramo de Varignon

**Ejemplo 2.** (Repaso del Ejemplo 1 del contenido de la base media, ahora con el lenguaje de paralelogramos.) Sea $ABCD$ un cuadrilátero convexo y $M$, $N$, $P$, $Q$ los puntos medios de $AB$, $BC$, $CD$, $DA$. Por el teorema de la base media aplicado a $\triangle ABC$ (puntos medios $M$, $N$) y a $\triangle ACD$ (puntos medios $Q$, $P$): $MN \parallel AC \parallel QP$ y $MN = \frac12 AC = QP$.

Por el criterio **(iii)** —un par de lados opuestos paralelos e iguales—, $MNPQ$ es un paralelogramo (el **paralelogramo de Varignon**). $\blacksquare$

---

### El paralelogramo como herramienta de traslación: el reflejo del ortocentro

**Ejemplo 3 (Clásico).** Sea $ABC$ un triángulo con ortocentro $H$, y sea $D$ el punto tal que $BHCD$ es un paralelogramo. Demostrar que $D$ está sobre el circuncírculo de $ABC$ y que $AD$ es un diámetro.

*Solución.* Como $BHCD$ es un paralelogramo, sus lados opuestos son paralelos (criterio (i)): $CD \parallel HB$ y $BD \parallel HC$.

Como $H$ es el ortocentro de $ABC$, las rectas $HB$ y $HC$ son las alturas desde $B$ y desde $C$: $HB \perp AC$ y $HC \perp AB$.

Combinando: $CD \parallel HB$ y $HB \perp AC$ dan $CD \perp AC$, es decir $\angle ACD = 90°$. Y $BD \parallel HC$ y $HC \perp AB$ dan $BD \perp AB$, es decir $\angle ABD = 90°$.

Ahora bien: $\angle ABD = 90°$ significa que $B$ ve al segmento $AD$ bajo un ángulo recto, así $B$ está sobre la circunferencia de diámetro $AD$ (ángulo en semicírculo, recíproco del Corolario 2 del teorema del ángulo inscrito). Análogamente, $\angle ACD = 90°$ pone a $C$ sobre esa misma circunferencia de diámetro $AD$.

Así $A$, $B$, $C$ están los tres sobre la circunferencia de diámetro $AD$. Pero por tres puntos no alineados pasa una única circunferencia —el circuncírculo de $\triangle ABC$—, así esa circunferencia de diámetro $AD$ **es** el circuncírculo de $ABC$. Luego $D$ está sobre el circuncírculo y $AD$ es uno de sus diámetros. $\blacksquare$

*(El paralelogramo $BHCD$ es exactamente la construcción que «traslada» las direcciones perpendiculares de las alturas $HB$, $HC$ hasta los vértices $C$, $B$, convirtiéndolas en los lados $CD$, $BD$ —perpendiculares a $AC$, $AB$ respectivamente—. Esta traslación de direcciones perpendiculares mediante un paralelogramo es la idea reutilizable del ejemplo.)*

## Aplicaciones

**El "truco del paralelogramo" para trasladar segmentos.** Para comparar dos segmentos que no comparten extremo, una construcción auxiliar habitual es completar un paralelogramo: dado un segmento $AB$ y un punto $C$, el punto $D = C + (B - A)$ (suma vectorial) hace que $CD \parallel AB$ y $CD = AB$, es decir, $ACDB$ —o la disposición que corresponda según la posición relativa de los puntos— es un paralelogramo. Esta es la manera estándar de «trasladar» un segmento a una posición paralela e igual que pase por un punto dado, como en la construcción de $BHCD$ del Ejemplo 3.

**Diagonales que se bisecan $\Rightarrow$ simetría central.** El criterio (iv) dice que un paralelogramo tiene un centro de simetría: el punto $O = AC \cap BD$. Cualquier recta por $O$ corta al paralelogramo en una cuerda bisecada por $O$ — propiedad que resuelve instantáneamente problemas de "rectas que bisecan el área de un paralelogramo".

**Ángulos alternos $\leftrightarrow$ paralelismo, en ambas direcciones.** La equivalencia entre (i) y (v) recuerda que paralelismo e igualdad de ángulos (alternos, correspondientes, opuestos) son dos caras de la misma moneda — exactamente como en el teorema del triángulo isósceles (lados iguales $\leftrightarrow$ ángulos iguales).

## Observación

**Cuidado con la convexidad y el orden de los vértices.** Todas las equivalencias anteriores suponen que $ABCD$ es un cuadrilátero (los vértices nombrados en orden, sin que los lados se crucen). Un error común es aplicar "lados opuestos iguales" a un cuadrilátero cruzado (un "antiparalelogramo"), donde la conclusión falla.

**El paralelogramo como caso límite.** Muchas configuraciones de olimpiada con triángulos semejantes o congruentes "colapsan" a un paralelogramo cuando cierto ángulo se vuelve $0°$ o $180°$ — reconocer este caso límite ayuda a anticipar qué propiedades persisten.

## Problemas relacionados

- **(OMG 2000/P2b)** Sea $ABCD$ un cuadrilátero convexo y $M$, $N$, $P$, $Q$ los puntos medios de sus lados. Demostrar que $MNPQ$ es un paralelogramo de área $\frac12 S_{ABCD}$ (paralelogramo de Varignon — véase también el contenido de la base media).

- **(OME Fase Local 2011-2012)** Sea $ABCD$ un cuadrilátero convexo y $P$ interior tal que $S_{PAB} = S_{PBC} = S_{PCD} = S_{PDA}$. Probar que $ABCD$ es un paralelogramo (las diagonales se bisecan).

- **(Local XLV OME 2009)** Sea $ABCD$ un paralelogramo con dos circunferencias interiores tangentes entre sí, una tangente a $AB$ y $AD$, la otra a $CB$ y $CD$. Probar que el punto de tangencia está sobre la diagonal $AC$. *(Pista: usar la simetría central de centro $O = AC \cap BD$, que intercambia los pares de lados $(AB, AD) \leftrightarrow (CD, CB)$ y por tanto los ángulos $\angle A \leftrightarrow \angle C$ y sus bisectrices.)*

- **(Clásico)** En un paralelogramo $ABCD$, sea $E$ un punto sobre $AB$ y $F$ un punto sobre $CD$ tales que $AE = CF$. Demostrar que $DEBF$ es un paralelogramo.

- **(Clásico)** Sea $ABC$ un triángulo y $M$ el punto medio de $BC$. Sobre la prolongación de la mediana $AM$ se toma $D$ tal que $MD = MA$. Demostrar que $ABDC$ es un paralelogramo (esta es la construcción que «duplica la mediana», útil para trasladar un triángulo a un paralelogramo y aplicar el teorema de Stewart o la ley de cosenos).
