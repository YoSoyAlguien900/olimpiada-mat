---
title: "OME 2022 — El triángulo isósceles de $100°$ y su bisectriz"
preview: "En un triángulo isósceles con ángulo en el ápice de $100°$, la bisectriz de un ángulo de la base recorta un segmento que, sumado al lado contiguo, reproduce exactamente la base: $BD + DA = BC$. Una demostración sintética que encadena triángulos isósceles a través de un cuadrilátero cíclico."
dificultad: iniciacion
competencia: "OME 2022 (Fase Local)"
tags: [triangulo-isosceles, bisectriz, congruencia, cuadrilatero-ciclico, angulos-inscritos]
prerequisites: [congruencia-isosceles, angulos-inscritos]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

## Enunciado

Sea $ABC$ un triángulo isósceles con $\angle BAC = 100°$. La bisectriz del ángulo $\angle CBA$ corta al lado $AC$ en el punto $D$. Demostrar que
$$
BD + DA = BC.
$$

```geofig
// Triángulo isósceles AB=AC, ángulo en A de 100º; D en AC sobre la bisectriz desde B; E en BC con BE=BD
size 6.6 4.6
point  0     1.09  A   -0.05  0.27
point -1.3   0     B   -0.32 -0.07
point  1.3   0     C    0.22 -0.07
point  0.51  0.66  D    0.24  0.1
point  0.63  0     E    0.07 -0.28
segment A B
segment A C
segment B C
segment B D
dash D E
```

## Idea de la solución

La igualdad $BD + DA = BC$ es una identidad **aditiva**: afirma que un segmento más otro reproduce un tercero. La táctica natural para probar algo así es "cortar" el segmento más largo en dos trozos que coincidan, uno a uno, con los segmentos de la izquierda.

Construimos el punto $E$ sobre $BC$ tal que $BE = BD$. Entonces $BD + DA = BE + DA$, y el problema se reduce a probar que
$$
DA = EC,
$$
pues de ahí se sigue $BD + DA = BE + EC = BC$ (ya que $E$ está entre $B$ y $C$).

Para demostrar $DA = EC$ encadenamos varios triángulos isósceles: primero $BDE$ (por construcción), luego $ADE$ y finalmente $DEC$, conectados entre sí mediante un cuadrilátero cíclico que aparece de forma natural al perseguir ángulos.

## Demostración

Como $ABC$ es isósceles con $\angle BAC = 100°$, los ángulos de la base son iguales y miden
$$
\angle ABC = \angle ACB = \frac{180° - 100°}{2} = 40°.
$$
La bisectriz $BD$ del ángulo $\angle ABC$ produce
$$
\angle ABD = \angle DBC = 20°.
$$

Sea $E$ el único punto de $BC$ tal que $BE = BD$.

**Paso 1 ($\triangle BDE$ isósceles).** Como $E \in BC$, el rayo $BE$ coincide con el rayo $BC$, así que $\angle DBE = \angle DBC = 20°$. Junto con $BD = BE$, el triángulo $BDE$ es isósceles con ápice en $B$, y sus ángulos en la base son iguales:
$$
\angle BDE = \angle BED = \frac{180° - 20°}{2} = 80°.
$$

**Paso 2 (el cuadrilátero $ABED$ es cíclico).** Miremos los ángulos en los vértices opuestos $A$ y $E$ del cuadrilátero $ABED$:
$$
\angle DAB = \angle BAC = 100° \qquad \text{(pues $D \in AC$)},
$$
$$
\angle BED = 80° \qquad \text{(Paso 1)}.
$$
Su suma es $100° + 80° = 180°$. Por el recíproco del teorema del ángulo inscrito —un cuadrilátero convexo es cíclico si y solo si sus ángulos opuestos son suplementarios—, los cuatro puntos $A$, $B$, $E$, $D$ son concíclicos.

**Paso 3 ($\triangle ADE$ isósceles, $AD = DE$).** Al ser $ABED$ cíclico, los ángulos inscritos que abarcan el mismo arco son iguales:
$$
\angle DEA = \angle DBA = \angle ABD = 20° \qquad (\text{arco } \widehat{DA}),
$$
$$
\angle DAE = \angle DBE = \angle DBC = 20° \qquad (\text{arco } \widehat{DE}).
$$
Así, en el triángulo $ADE$ los ángulos en $A$ y en $E$ son iguales ($= 20°$), luego es isósceles y los lados opuestos a esos ángulos coinciden:
$$
DE = AD.
$$

**Paso 4 ($\triangle DEC$ isósceles, $DE = EC$).** Como $B$, $E$, $C$ son colineales con $E$ entre $B$ y $C$,
$$
\angle DEC = 180° - \angle DEB = 180° - 80° = 100°.
$$
Además $\angle DCE = \angle ACB = 40°$ (pues $D \in AC$ y $E \in BC$, así que $\angle DCE$ es exactamente el ángulo del triángulo original en $C$). Por la suma de ángulos del triángulo $DEC$,
$$
\angle EDC = 180° - 100° - 40° = 40° = \angle DCE.
$$
Luego $\triangle DEC$ es isósceles y los lados opuestos a estos ángulos iguales coinciden:
$$
EC = DE.
$$

**Paso 5 (conclusión).** De los pasos 3 y 4, $AD = DE = EC$. En particular $AD = EC$. Por tanto
$$
BD + DA = BE + DA = BE + EC = BC,
$$
donde la primera igualdad usa $BD = BE$ (construcción de $E$), la segunda usa $DA = EC$, y la tercera usa que $E$ está entre $B$ y $C$. $\blacksquare$

## Observación

El paso decisivo —y el que vale la pena memorizar como técnica general— es la **introducción del punto auxiliar $E$**: convierte una identidad aditiva ($BD + DA = BC$) en una identidad de igualdad entre dos segmentos ($DA = EC$), que es mucho más manejable con las herramientas habituales (triángulos isósceles, ángulos inscritos). Esta misma idea —"recortar" un segmento largo para reducir una suma a una igualdad— es el corazón de demostraciones clásicas como el teorema de la cuerda quebrada de Arquímedes.

Nótese también la cadena de razonamiento: la construcción ad hoc de $E$ produce un triángulo isósceles "gratis" ($BDE$), que mediante una suma de ángulos ($100° + 80° = 180°$) revela un cuadrilátero cíclico oculto, y este, a su vez, mediante ángulos inscritos sobre arcos iguales, produce *dos* triángulos isósceles más ($ADE$ y $DEC$). Cada pieza es elemental; la dificultad real está en encontrar el punto que hace arrancar la cadena.

## Aplicaciones

1. **Identidades aditivas de segmentos.** Cuando un enunciado pide probar $X + Y = Z$, suele ser fructífero buscar el punto sobre $Z$ que lo divide en trozos iguales a $X$ e $Y$, y después demostrar esa partición mediante triángulos isósceles o congruentes. El ejemplo más famoso de esta técnica es el **teorema de la cuerda quebrada (lema de Arquímedes)**.
2. **Detección de cuadriláteros cíclicos vía suma de ángulos.** La condición $\angle DAB + \angle BED = 180°$ es exactamente el criterio de ciclicidad del problema 4 de la *Colección de iniciación*; aquí se usa "hacia adelante" (de la suma de ángulos a la circunferencia) para luego usarla "hacia atrás" (de la circunferencia a nuevos ángulos iguales).
3. **Triángulos isósceles con ángulos $20°$–$20°$–$140°$ y $40°$–$40°$–$100°$.** Estas configuraciones angulares —múltiplos de $20°$ que suman $180°$— aparecen recurrentemente en problemas de "triangle dissection" y en la geometría del pentágono regular (ángulos de $36°$ y $72°$ guardan la misma lógica de cadenas de isósceles).

## Problemas relacionados

- Generalizar: si $\angle BAC = \alpha$ con $ABC$ isósceles ($AB=AC$) y $BD$ es la bisectriz de $\angle ABC$, ¿para qué valores de $\alpha$ se cumple una identidad del tipo $BD + DA = BC$? (Pista: el argumento anterior depende esencialmente de que $180° - \angle ABC = \angle BAC$, es decir, de la relación concreta entre $100°$ y $40°$; estudiar qué ocurre al variar $\alpha$.)
- Demostrar el **teorema de la cuerda quebrada**: si $\overarc{AB}$ y $\overarc{BC}$ son dos arcos de una circunferencia con $AB < BC$, y $M$ es el punto medio del arco $\widehat{ABC}$, entonces el pie de la perpendicular desde $M$ a $BC$ es el punto medio de la quebrada $ABC$ (es decir, $AB + BF = FC$ donde $F$ es dicho pie).
- (Problema 4, *Colección de iniciación*) Un cuadrilátero convexo es cíclico si y solo si sus ángulos opuestos son suplementarios.
