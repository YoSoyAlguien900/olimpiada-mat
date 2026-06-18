---
title: "Congruencia de triángulos y triángulos isósceles"
preview: "LAL, ALA, LLL: los tres criterios que certifican que dos triángulos son «el mismo» salvo movimiento. Combinados con la propiedad fundamental del triángulo isósceles —ángulos de la base iguales—, generan la mayoría de las igualdades de segmentos y ángulos en geometría elemental."
dificultad: iniciacion
tags: [congruencia, triangulo, isosceles, LAL, ALA, LLL, mediatriz, bisectriz]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

Antes de la semejanza viene la congruencia: dos figuras son **congruentes** si una se obtiene de la otra mediante un movimiento rígido (traslación, rotación, reflexión), es decir, si tienen exactamente la misma forma *y* el mismo tamaño. Toda la geometría sintética elemental —simetrías, mediatrices, bisectrices, el triángulo isósceles— descansa sobre tres criterios prácticos para certificar la congruencia de triángulos sin tener que exhibir el movimiento rígido explícitamente.

## Definición

Dos triángulos $\triangle ABC$ y $\triangle A'B'C'$ son **congruentes** (se escribe $\triangle ABC \cong \triangle A'B'C'$) si existe una correspondencia entre sus vértices $A \leftrightarrow A'$, $B \leftrightarrow B'$, $C \leftrightarrow C'$ tal que los tres lados y los tres ángulos correspondientes son iguales:

$$AB = A'B', \quad BC = B'C', \quad CA = C'A', \qquad \angle A = \angle A', \quad \angle B = \angle B', \quad \angle C = \angle C'.$$

Equivalentemente: $\triangle ABC \cong \triangle A'B'C'$ si y solo si $\triangle ABC \sim \triangle A'B'C'$ con razón de semejanza $k = 1$.

## Teorema

**(Criterios de congruencia)** Dos triángulos son congruentes si se cumple alguna de las siguientes condiciones (cada una determina por completo al triángulo, salvo reflexión):

**(LAL)** Dos lados y el ángulo comprendido entre ellos son iguales: $AB = A'B'$, $\angle A = \angle A'$, $AC = A'C'$.

**(ALA)** Dos ángulos y el lado comprendido entre ellos son iguales: $\angle A = \angle A'$, $AB = A'B'$, $\angle B = \angle B'$.

**(LLL)** Los tres lados son iguales: $AB = A'B'$, $BC = B'C'$, $CA = C'A'$.

**(Caso particular: triángulos rectángulos, hipotenusa-cateto)** Si dos triángulos rectángulos tienen la hipotenusa y un cateto iguales, son congruentes. (Esto se reduce a LLL: el tercer lado queda determinado por Pitágoras.)

## Demostración

La idea común a los tres criterios es la misma: los datos dados determinan la posición relativa de los tres vértices salvo movimiento rígido, así que cualquier triángulo que los satisfaga puede superponerse exactamente al otro.

**LAL.** Coloquemos $\triangle A'B'C'$ mediante un movimiento rígido de modo que $A' = A$ y el lado $A'B'$ caiga sobre el rayo $AB$ (posible porque $AB = A'B'$, el punto $B'$ cae exactamente en $B$). Como $\angle A' = \angle A$, el lado $A'C'$ cae sobre el rayo $AC$, y como $A'C' = AC$, el punto $C'$ cae exactamente en $C$. Luego los dos triángulos coinciden punto por punto. $\blacksquare$

**ALA.** Análogamente, superponemos $A' = A$ y $B'$ sobre el rayo $AB$ con $AB = A'B'$, así $B' = B$. Como $\angle A' = \angle A$ y $\angle B' = \angle B$, los rayos $A'C'$ y $B'C'$ coinciden con $AC$ y $BC$ respectivamente, y su intersección $C'$ coincide con $C$. $\blacksquare$

**LLL.** Coloquemos $A' = A$, $B' = B$ (posible porque $A'B' = AB$). El punto $C'$ está a distancia $A'C' = AC$ de $A$ y a distancia $B'C' = BC$ de $B$; pero $C$ es el único punto (en un semiplano dado respecto a $AB$) que satisface ambas condiciones simultáneamente —la intersección de dos circunferencias—. Luego $C' = C$ o $C'$ es el reflejo de $C$ respecto a $AB$; en cualquier caso $\triangle A'B'C' \cong \triangle ABC$. $\blacksquare$

## El triángulo isósceles

## Definición

Un triángulo $ABC$ es **isósceles** con base $BC$ si $AB = AC$ (los dos «lados iguales» concurren en el vértice $A$, llamado el **vértice** del triángulo isósceles, y $BC$ es la **base**).

## Teorema

**(Triángulo isósceles — ángulos de la base)** En el triángulo $ABC$:

$$AB = AC \quad \Longleftrightarrow \quad \angle B = \angle C.$$

Es decir, un triángulo es isósceles si y solo si tiene dos ángulos iguales (los **ángulos de la base**).

```geofig
// Triángulo isósceles ABC con AB = AC y la altura/mediatriz/bisectriz desde A
size 7 7
point -2.6  0    B -0.28 -0.25
point  2.6  0    C  0.28 -0.25
point  0    3.6  A  0.05  0.3
point  0    0    M  0.08 -0.32
segment A B
segment A C
segment B C
segment A M
rightangle M A B
```

## Demostración

$(\Rightarrow)$ Supongamos $AB = AC$. Sea $M$ el punto medio de $BC$. En los triángulos $\triangle ABM$ y $\triangle ACM$: $AB = AC$ (hipótesis), $BM = CM$ ($M$ es punto medio) y $AM = AM$ (lado común). Por **LLL**, $\triangle ABM \cong \triangle ACM$, así $\angle ABM = \angle ACM$, es decir $\angle B = \angle C$.

$(\Leftarrow)$ Supongamos $\angle B = \angle C$. En los triángulos $\triangle ABC$ y $\triangle ACB$ (¡el mismo triángulo, leído con los vértices $B$ y $C$ intercambiados!): $\angle ABC = \angle ACB$ (hipótesis), $BC = CB$ (lado común) y $\angle ACB = \angle ABC$ (hipótesis de nuevo). Por **ALA**, $\triangle ABC \cong \triangle ACB$, de donde $AB = AC$ (lados correspondientes en la correspondencia $A \leftrightarrow A$, $B \leftrightarrow C$, $C \leftrightarrow B$). $\blacksquare$

## Corolario (las cuatro rectas notables coinciden)

En un triángulo isósceles $ABC$ con $AB = AC$, las siguientes cuatro rectas que pasan por el vértice $A$ **coinciden**:

1. La **mediana** desde $A$ (a $M$, punto medio de $BC$);
2. La **altura** desde $A$ (perpendicular a $BC$);
3. La **bisectriz** del ángulo $\angle BAC$;
4. La **mediatriz** del lado $BC$.

*Demostración.* Esto es exactamente lo que muestra la congruencia $\triangle ABM \cong \triangle ACM$ de la demostración anterior: de ella se obtiene simultáneamente $\angle BAM = \angle CAM$ (luego $AM$ es bisectriz), $\angle AMB = \angle AMC = 90°$ (luego $AM$ es altura y, como $M$ es punto medio, también mediatriz), y $BM = CM$ (luego $AM$ es mediana). $\blacksquare$

Esta coincidencia es una de las observaciones más rentables de la geometría elemental: **siempre que aparezca un triángulo isósceles, se dispone gratis de un eje de simetría** que es a la vez mediana, altura, bisectriz y mediatriz. Detectar un triángulo isósceles equivale a detectar una simetría.

## Ejemplo

### Isósceles ocultos: la fuente más común de igualdades de ángulos

*La idea común.* El reflejo automático: en cuanto veas **dos segmentos iguales que salen del mismo punto** (dos radios, dos lados marcados…), tienes un triángulo isósceles, y por tanto una igualdad de ángulos gratis. Y al revés, dos ángulos iguales delatan dos lados iguales.

**Ejemplo 1.** Sea $\omega$ una circunferencia de centro $O$ y $A$, $B$ dos puntos de $\omega$. Demostrar que $\angle OAB = \angle OBA$.

*La idea.* Dos radios al mismo círculo son iguales: $OA = OB$. Eso es un isósceles disfrazado.

*Solución.* $OA = OB = r$, así $\triangle OAB$ es isósceles con vértice $O$, y por el teorema $\angle OAB = \angle OBA$. $\blacksquare$

*(Esta observación trivial —todo triángulo formado por el centro y dos puntos de la circunferencia es isósceles— es exactamente la pieza que hace funcionar la demostración del teorema del ángulo inscrito: véase el contenido de Ángulos en la circunferencia, Caso 1 de la demostración.)*

---

**Ejemplo 2.** En el triángulo $ABC$, la bisectriz interna del ángulo $\angle A$ corta al circuncírculo en el punto $M$ (el punto medio del arco $\widehat{BC}$ que no contiene a $A$). Demostrar que $MB = MC$.

*La idea.* Queremos una igualdad de longitudes ($MB = MC$); la conseguimos por la ruta de los ángulos: la bisectriz iguala dos ángulos inscritos, esos igualan dos arcos, y arcos iguales dan cuerdas iguales (o, equivalentemente, un triángulo isósceles).

*Solución.* Como $AM$ es bisectriz de $\angle BAC$, se tiene $\angle BAM = \angle CAM$. Estos son ángulos inscritos que abarcan los arcos $\widehat{BM}$ y $\widehat{CM}$ respectivamente, así $\widehat{BM} = \widehat{CM}$ (arcos iguales corresponden a ángulos inscritos iguales). Arcos iguales son subtendidos por cuerdas iguales, luego $MB = MC$.

*Vía isósceles:* alternativamente, $\angle MBC = \angle MAC$ y $\angle MCB = \angle MAB$ (ángulos inscritos sobre los mismos arcos), y $\angle MAC = \angle MAB$ (bisectriz), así $\angle MBC = \angle MCB$: el triángulo $\triangle MBC$ es isósceles con $MB = MC$. $\blacksquare$

*(Este es el primer paso del célebre Lema del Incentro: $M$ es además el centro de una circunferencia que pasa por $B$, $C$, el incentro $I$ y el excentro $I_A$ — desarrollado en su propio capítulo.)*

---

### Construcción de isósceles con paralelas

**Ejemplo 3.** Por un punto $C$ exterior a la recta $AB$ se traza la paralela a la bisectriz del ángulo $\angle A$ del triángulo $ABC$ hasta cortar a la recta $AB$ en un punto $E$ (al prolongar $BA$ más allá de $A$). Demostrar que $AE = AC$, es decir, que $\triangle ACE$ es isósceles.

*La idea.* Para fabricar un isósceles a voluntad, trazamos una **paralela** a la bisectriz: el paralelismo convierte la igualdad de ángulos de la bisectriz en una igualdad de los dos ángulos en la base del triángulo $ACE$, y de ahí salen los lados iguales.

*Solución.* (Esta es la construcción auxiliar clásica para el teorema de la bisectriz —véase el contenido de Semejanza, Ejemplo 3.) Sea $AD$ la bisectriz de $\angle BAC$ ($D \in BC$), y $CE \parallel AD$ con $E$ en la prolongación de $BA$. Por ángulos alternos internos (transversal $AC$ entre las paralelas $AD$ y $CE$): $\angle DAC = \angle ACE$. Por ángulos correspondientes (transversal $AB$ entre las mismas paralelas): $\angle BAD = \angle AEC$.

Como $AD$ es bisectriz, $\angle BAD = \angle DAC$, y combinando las dos igualdades anteriores: $\angle ACE = \angle AEC$. Por el teorema del triángulo isósceles (sentido recíproco), $\triangle ACE$ es isósceles con $AE = AC$. $\blacksquare$

---

### Problema guiado

**Ejemplo 4 (Clásico).** Sea $ABC$ un triángulo isósceles con $AB = AC$. La bisectriz del ángulo $\angle B$ corta a $AC$ en $D$, y la bisectriz del ángulo $\angle C$ corta a $AB$ en $E$. Demostrar que $BD = CE$.

*La idea.* La figura es **simétrica** respecto del eje del isósceles (que intercambia $B\leftrightarrow C$ y $D\leftrightarrow E$). Esa simetría se traduce en una congruencia de triángulos $\triangle DBC \cong \triangle ECB$, de la que $BD = CE$ sale como lados correspondientes.

*Solución.* Sea $\beta = \angle ABC = \angle ACB$ (ángulos de la base, iguales porque $AB = AC$). Como $BD$ y $CE$ son bisectrices, $\angle DBC = \angle ECB = \dfrac{\beta}{2}$.

Comparemos $\triangle DBC$ y $\triangle ECB$:

- $\angle DBC = \angle ECB = \dfrac{\beta}{2}$;
- $BC = CB$ (lado común);
- $\angle BCD = \angle BCA = \beta$ y $\angle CBE = \angle CBA = \beta$ (porque $D \in AC$ y $E \in AB$), luego $\angle BCD = \angle CBE$.

Por **ALA** (en ambos triángulos, el lado $BC = CB$ está flanqueado por un ángulo $\frac{\beta}{2}$ y un ángulo $\beta$, en el mismo orden): $\triangle DBC \cong \triangle ECB$. Los lados correspondientes a $BD$ y $CE$ son iguales: $BD = CE$. $\blacksquare$

*(Detrás de esta solución hay una simetría: el eje del triángulo isósceles —la bisectriz desde $A$, que también es altura, mediana y mediatriz, por el corolario anterior— intercambia $B \leftrightarrow C$ y, con ello, $D \leftrightarrow E$. La congruencia $\triangle DBC \cong \triangle ECB$ es esa simetría hecha explícita.)*

## Aplicaciones

**Cazar isósceles para cazar igualdades de ángulos (y viceversa).** La relación "lados iguales $\Leftrightarrow$ ángulos iguales" es bidireccional y se usa en ambos sentidos constantemente: a veces conviene partir de una igualdad de longitudes (p. ej. dos radios, o $BD = BC$ como en el Ejemplo 4) para obtener una igualdad de ángulos «gratis»; otras veces se hace al revés, obteniendo una igualdad de longitudes a partir de una de ángulos (Ejemplos 2 y 3).

**Construir isósceles con paralelas.** Una técnica auxiliar extremadamente común: para demostrar $XY = XZ$, basta trazar una paralela adecuada que convierta una igualdad de ángulos conocida (alternos o correspondientes) en la condición $\angle XYZ = \angle XZY$. Esto es exactamente lo que ocurre en el Ejemplo 3 y en la demostración del teorema de la bisectriz.

**El triángulo equilátero.** Un triángulo con los tres lados iguales tiene también los tres ángulos iguales (cada $60°$), por aplicación del teorema del isósceles a cada par de lados. Recíprocamente, un triángulo equiangular ($60°$-$60°$-$60°$) es equilátero.

## Observación

**Congruencia vs. semejanza.** La congruencia es el caso $k=1$ de la semejanza: todo lo que se puede demostrar con un criterio de congruencia (LAL, ALA, LLL) es un caso particular de lo que permite la semejanza, pero conviene tener ambas herramientas en mente —la congruencia da igualdades de **longitudes y ángulos** simultáneamente con un solo argumento, mientras que la semejanza da **proporciones**.

**El eje de simetría del isósceles, fuente de simetrizaciones.** Muchos problemas con triángulos isósceles (o configuraciones simétricas más generales, como cuerdas iguales en una circunferencia) se resuelven «reflejando» una parte de la figura sobre el eje de simetría: el reflejo de un punto cae en un lugar conocido, y la igualdad buscada se vuelve evidente.

## Problemas relacionados

**Problema 1 (clásico).** Sea $ABC$ isósceles con $AB = AC$, y sean $M$, $N$ los puntos medios de $AC$ y $AB$. Demostrar que $BM = CN$.

[[pista]]

Compara $\triangle ABM$ y $\triangle ACN$: comparten el ángulo $\angle A$ y los lados que lo forman son iguales.

[[/pista]]

[[solución]]

Como $AB = AC$ y $N$, $M$ son puntos medios de $AB$, $AC$, se tiene $AN = \tfrac12 AB = \tfrac12 AC = AM$. Comparamos $\triangle ABM$ y $\triangle ACN$:

- $AB = AC$ (hipótesis),
- $\angle A = \angle A$ (ángulo común),
- $AM = AN$ (recién visto).

Por **LAL**, $\triangle ABM \cong \triangle ACN$, y los lados correspondientes dan $BM = CN$. $\blacksquare$

[[/solución]]

**Problema 2 (clásico).** Sea $\omega$ una circunferencia de centro $O$ y $AB$, $CD$ dos cuerdas de igual longitud. Demostrar que los arcos $\widehat{AB}$ y $\widehat{CD}$ son iguales.

[[pista]]

Los triángulos $OAB$ y $OCD$ tienen sus tres lados iguales (dos radios y la cuerda).

[[/pista]]

[[solución]]

Consideramos $\triangle OAB$ y $\triangle OCD$. Sus lados son:

- $OA = OC = r$ y $OB = OD = r$ (radios),
- $AB = CD$ (hipótesis).

Por **LLL**, $\triangle OAB \cong \triangle OCD$, luego los ángulos centrales correspondientes son iguales: $\angle AOB = \angle COD$. Como cada arco mide lo mismo que su ángulo central, los arcos $\widehat{AB}$ y $\widehat{CD}$ son iguales. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** En el triángulo $ABC$, sea $I$ el incentro. Demostrar que $\angle BIC = 90° + \dfrac{\angle A}{2}$.

[[pista]]

$BI$ y $CI$ son bisectrices, así que $\angle IBC = \angle B/2$ y $\angle ICB = \angle C/2$. Aplica la suma de ángulos en $\triangle BIC$ y usa $\angle A+\angle B+\angle C = 180°$.

[[/pista]]

[[solución]]

Como $I$ es el incentro, $BI$ y $CI$ bisecan los ángulos $\angle B$ y $\angle C$, luego $\angle IBC = \dfrac{\angle B}{2}$ y $\angle ICB = \dfrac{\angle C}{2}$. En el triángulo $BIC$,

$$
\angle BIC = 180° - \angle IBC - \angle ICB = 180° - \frac{\angle B + \angle C}{2}.
$$

Y como $\angle B + \angle C = 180° - \angle A$,

$$
\angle BIC = 180° - \frac{180° - \angle A}{2} = 180° - 90° + \frac{\angle A}{2} = 90° + \frac{\angle A}{2}. \qquad \blacksquare
$$

[[/solución]]

**Problema 4 (mediana a la hipotenusa).** Sea $ABC$ con $\angle B = 90°$ y $M$ el punto medio de $AC$. Demostrar que $\triangle ABM$ y $\triangle CBM$ son isósceles, y deducir que $BM = \tfrac12 AC$.

[[pista]]

Prolonga $BM$ hasta $B'$ con $M$ punto medio de $BB'$. El cuadrilátero $ABCB'$ tiene las diagonales bisecándose, luego es un paralelogramo; con un ángulo recto, es un rectángulo.

[[/pista]]

[[solución]]

Prolongamos la mediana $BM$ hasta un punto $B'$ tal que $M$ sea el punto medio de $BB'$. Entonces en el cuadrilátero $ABCB'$ las dos diagonales $AC$ y $BB'$ se cortan en su punto medio común $M$, lo que lo convierte en un **paralelogramo**.

Como además $\angle ABC = 90°$, ese paralelogramo tiene un ángulo recto: es un **rectángulo**. En un rectángulo las diagonales son iguales, así que $BB' = AC$, y por tanto

$$
BM = \tfrac12 BB' = \tfrac12 AC.
$$

En consecuencia $MA = MB = MC = \tfrac12 AC$: los triángulos $\triangle ABM$ (con $MA = MB$) y $\triangle CBM$ (con $MC = MB$) son isósceles. $\blacksquare$

[[/solución]]

**Problema 5 (Lema del Incentro).** Sea $\omega$ el circuncírculo de $ABC$ y $M$ el punto medio del arco $\widehat{BC}$ que no contiene a $A$. Probar que $M$ equidista de $B$, $C$ y del incentro $I$: $MB = MC = MI$.

[[pista]]

$MB = MC$ es el Ejemplo 2. Para $MI = MB$, demuestra que $\triangle MBI$ es isósceles calculando $\angle MBI$ y $\angle MIB$ en términos de $\angle A/2$ y $\angle B/2$.

[[/pista]]

[[solución]]

Como $M$ es el punto medio del arco $\widehat{BC}$, la bisectriz desde $A$ pasa por $M$, y por el Ejemplo 2 ya tenemos $MB = MC$. Falta ver $MI = MB$, para lo que mostramos que $\triangle MBI$ es isósceles en $M$.

- $\angle MBI = \angle MBC + \angle CBI$. Ahora $\angle MBC = \angle MAC = \dfrac{\angle A}{2}$ (ángulos inscritos sobre el mismo arco $\widehat{MC}$), y $\angle CBI = \dfrac{\angle B}{2}$ (pues $BI$ biseca $\angle B$). Así $\angle MBI = \dfrac{\angle A + \angle B}{2}$.
- $\angle MIB$ es ángulo exterior del triángulo $ABI$ en $I$, luego igual a la suma de los no adyacentes: $\angle MIB = \angle IAB + \angle IBA = \dfrac{\angle A}{2} + \dfrac{\angle B}{2}$.

Por tanto $\angle MBI = \angle MIB$, el triángulo $\triangle MBI$ es isósceles y $MI = MB$. Combinando, $MB = MC = MI$. $\blacksquare$

[[/solución]]
