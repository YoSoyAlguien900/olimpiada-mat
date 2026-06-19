---
title: "Ángulos en la circunferencia: inscrito, central y semiinscrito"
preview: "El ángulo inscrito es la mitad del central que abarca el mismo arco. Este resultado sencillo es el primer pilar de toda la geometría sintética del círculo y la fuente de la mayoría de las igualdades de ángulos en olimpiada."
dificultad: iniciacion
tags: [angulos, circunferencia, inscrito, cuadrilatero-ciclico, tangente]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-04"
---

La circunferencia es el objeto geométrico más simétrico del plano, y esa simetría se manifiesta en una propiedad extraordinaria de los ángulos: todos los ángulos inscritos que «ven» el mismo arco son iguales entre sí, independientemente de desde dónde se miren sobre el círculo. Esta observación parece modesta pero tiene consecuencias que aparecen en casi todos los problemas olímpicos de geometría: cuadriláteros cíclicos, potencias de puntos, configuraciones con tangentes, y la mayoría de los problemas de concurrencia de rectas.

El teorema del ángulo inscrito es el punto de entrada a toda la geometría del círculo. Conviene aprenderlo con sus tres casos de una vez, pues los problemas difícilmente presentan solo el caso «bonito».

## Definición

Sea $\omega$ una circunferencia de centro $O$ y radio $r$, y sean $A$, $B$ dos puntos sobre $\omega$.

- El **ángulo central** $\angle AOB$ es el ángulo en el centro $O$ que subtiende el arco $\widehat{AB}$ (el arco que no contiene ningún otro punto indicado).
- El **ángulo inscrito** $\angle APB$ es el ángulo en un punto $P \in \omega$, $P \neq A, B$, cuyos lados pasan por $A$ y $B$.
- El **ángulo semiinscrito** es el ángulo que forma una cuerda con la tangente a la circunferencia en uno de sus extremos.

El **arco $\widehat{AB}$** subtenido por un ángulo es el arco que queda «dentro» del ángulo. Para un ángulo inscrito $\angle APB$, el arco relevante es el que no contiene a $P$.

## Teorema

**(Ángulo inscrito)** El ángulo inscrito $\angle APB$ es igual a la mitad del ángulo central $\angle AOB$ que subtiende el mismo arco:

$$\angle APB \;=\; \frac{1}{2} \angle AOB.$$

```geofig
// Ángulo central vs ángulo inscrito sobre el mismo arco AB
size 7 7
circle 0 0 2.8
point  0    0    O  0.18 -0.22
point -2.2  1.7  A -0.25  0.2
point  2.2  1.7  B  0.25  0.2
point  0   -2.8  P  0.1  -0.25
segment O A
segment O B
segment P A
segment P B
arc 0 0 0.5 141 39
arc 0 0 1.1 219 321
label  0   0.8  "∠AOB"
label  0  -1.6  "∠APB"
```

## Corolario 1

Todos los ángulos inscritos que abarcan el mismo arco son iguales.

## Corolario 2

**(Ángulo en semicírculo)** Si $AB$ es diámetro de $\omega$, entonces $\angle APB = 90°$ para todo $P \in \omega$ con $P \neq A, B$.

```geofig
// AB diámetro; el ángulo APB es siempre recto
size 7 6
circle 0 0 2.5
point -2.5  0    A -0.3  -0.25
point  2.5  0    B  0.28 -0.25
point -1.61 1.92 P -0.1   0.3
segment A B
segment P A
segment P B
rightangle P A B
```

## Corolario 3

**(Ángulo semiinscrito = ángulo inscrito)** El ángulo que forma una cuerda $AB$ con la tangente a $\omega$ en $A$ es igual al ángulo inscrito en el arco opuesto: $\angle(AB, t_A) = \angle APB$ para $P$ en el arco que no contiene el punto de tangencia.

```geofig
// Tangente TA, cuerda AB, y ángulo inscrito desde P en el arco opuesto
size 7 7
circle 0 0 2.5
point -2.5   0     A -0.35  0.05
point  1.25  2.165 B  0.28  0.15
point  0.43 -2.46  P  0.05 -0.32
point -2.5  -1.7   T -0.35 -0.05
segment T A
segment A B
segment P A
segment P B
```

## Demostración

La demostración se divide en tres casos según la posición del centro $O$ respecto al ángulo inscrito.

**Caso 1: $O$ está sobre uno de los lados del ángulo.** Supongamos $O \in PA$ (es decir, $PA$ es un diámetro). Entonces $OA = OP = r$, así el triángulo $OAB$ es isósceles. Sea $\alpha = \angle OAB = \angle OBA$ (ángulos de la base). El ángulo exterior de $\triangle OAB$ en $O$ es $\angle AOB = 180° - (180° - 2\alpha) = 2\alpha$.

Como $O \in PA$, también $\angle APB = \angle OPB$. En el triángulo isósceles $OPB$ ($OP = OB = r$), los ángulos de la base son iguales: $\angle OPB = \angle OBP$. El ángulo exterior en $O$: $\angle POB = 2\angle OPB$.

Pero $\angle AOB = \angle POB$ (mismo ángulo), así $2\alpha = 2\angle APB$, dando $\angle APB = \alpha = \frac{1}{2}\angle AOB$. $\checkmark$

**Caso 2: $O$ está en el interior del ángulo $\angle APB$.** Trazamos el diámetro $PD$ desde $P$. Esto divide la configuración en dos del tipo Caso 1:

$$\angle APD = \frac{1}{2}\angle AOD, \qquad \angle DPB = \frac{1}{2}\angle DOB.$$

Sumando: $\angle APB = \angle APD + \angle DPB = \frac{1}{2}(\angle AOD + \angle DOB) = \frac{1}{2}\angle AOB$. $\checkmark$

**Caso 3: $O$ está en el exterior del ángulo $\angle APB$.** Trazamos el diámetro $PD$ de nuevo. Ahora $D$ está al otro lado:

$$\angle APD = \frac{1}{2}\angle AOD, \qquad \angle DPB = \frac{1}{2}\angle DOB.$$

Restando: $\angle APB = \angle DPB - \angle APD = \frac{1}{2}(\angle DOB - \angle AOD) = \frac{1}{2}\angle AOB$. $\checkmark$

En todos los casos, $\angle APB = \frac{1}{2}\angle AOB$. $\blacksquare$

**Demostración del Corolario 3 (ángulo semiinscrito).** Sea $t$ la tangente a $\omega$ en $A$ y $\beta = \angle(AB, t)$ el ángulo que forma con la cuerda $AB$. Queremos ver que $\beta = \angle APB$, con $P$ en el arco que no contiene el punto de tangencia.

El triángulo $OAB$ es isósceles ($OA = OB = r$), luego sus ángulos de la base valen

$$
\angle OAB = \angle OBA = \frac{180° - \angle AOB}{2}.
$$

Como el radio es perpendicular a la tangente ($t \perp OA$), el ángulo entre la cuerda $AB$ y la tangente es

$$
\beta = 90° - \angle OAB = 90° - \frac{180° - \angle AOB}{2} = \frac{\angle AOB}{2}.
$$

Y por el teorema del ángulo inscrito, $\dfrac{\angle AOB}{2} = \angle APB$. Por tanto $\beta = \angle APB$. $\blacksquare$

## Ejemplo

### Ángulos en cuadriláteros cíclicos

*La idea común.* En cuanto cuatro puntos están sobre una circunferencia, **todo ángulo del dibujo se traduce a un arco**. Dos preguntas resuelven casi todo: ¿qué arco abarca este ángulo inscrito? y ¿cómo se reparten los arcos en la circunferencia completa ($360°$)? Igualdades y suplementos salen solos.

**Ejemplo 1.** Sea $ABCD$ un cuadrilátero inscrito en una circunferencia. Demostrar que $\angle BAD + \angle BCD = 180°$.

*La idea.* Los dos ángulos opuestos abarcan **arcos que entre los dos cubren toda la circunferencia**. Sumar los ángulos equivale a sumar medios arcos, y la suma de los arcos es $360°$.

$\angle BAD$ es inscrito y abarca el arco $\widehat{BCD}$; $\angle BCD$ abarca el arco $\widehat{BAD}$. Juntos forman los $360°$, y como cada ángulo inscrito es la mitad de su arco,

$$
\angle BAD + \angle BCD = \frac{1}{2}\cdot 360° = 180°. \qquad \blacksquare
$$

---

**Ejemplo 2.** En la circunferencia $\omega$, los puntos $A, B, C, D$ están en ese orden. Probar que $\angle ACD = \angle ABD$.

Ambos son ángulos inscritos que abarcan el **mismo** arco $\widehat{AD}$ (el que no contiene a $B$ ni a $C$). Por el Corolario 1, son iguales. $\square$

---

**Ejemplo 3.** Sea $P$ sobre la circunferencia circunscrita al triángulo $ABC$, en el arco $\widehat{BC}$ que no contiene a $A$. Demostrar que $\angle BPC = 180° - \angle BAC$.

*La idea.* $A$ y $P$ están en **arcos opuestos** respecto de la cuerda $BC$, así que sus ángulos inscritos abarcan los dos arcos $\widehat{BC}$ complementarios, cuya suma es $360°$.

$\angle BAC$ abarca el arco $\widehat{BC}$ que contiene a $P$... no: $\angle BAC$ abarca el arco que **no** contiene a $A$, y $\angle BPC$ el que no contiene a $P$; entre ambos suman la circunferencia entera. Por tanto

$$
\angle BAC + \angle BPC = \tfrac12\cdot 360° = 180° \;\Longrightarrow\; \angle BPC = 180° - \angle BAC. \qquad \blacksquare
$$

*(Es justo la condición de cuadrilátero cíclico $ABPC$: ángulos opuestos suplementarios.)*

---

### Ángulo semiinscrito: la tangente-cuerda

*La idea común.* La tangente actúa como una cuerda "límite": el ángulo que forma con una cuerda **vale lo mismo que el ángulo inscrito** que ve esa cuerda desde el otro arco (Corolario 3). Esto deja meter la tangente en cualquier cacería de ángulos como si fuera una cuerda más.

**Ejemplo 4.** La tangente a $\omega$ en $A$ forma $40°$ con la cuerda $AB$. ¿Cuánto mide el arco $\widehat{AB}$ que no contiene el punto de tangencia, y el ángulo inscrito desde el arco opuesto?

Por el Corolario 3, el ángulo semiinscrito ($40°$) es igual al ángulo inscrito desde el arco opuesto, así que ese **ángulo inscrito mide $40°$**. Y como el inscrito es la mitad de su arco central, el **arco mide $2\times 40° = 80°$**. $\square$

---

**Ejemplo 5.** (Configuración clásica) Dos cuerdas $AB$ y $CD$ se cortan en un punto interior $P$. Demostrar que $\angle APC = \angle DPB$ y calcular $\angle APC$ en términos de los arcos.

*La idea.* El ángulo $\angle APC$ es un ángulo **exterior** del triángulo $APC$ (o, vía la suma de ángulos del triángulo, se expresa con los otros dos), y cada uno de esos ángulos es inscrito: traducimos todo a arcos.

```geofig
// Cuerdas AB y CD que se cortan en P
size 7.5 7.5
circle 0 0 2.5
point -2.35  0.855  A -0.32  0.12
point  1.92 -1.61   B  0.28 -0.18
point -0.43  2.46   C -0.05  0.3
point -0.43 -2.46   D -0.05 -0.32
point -0.43 -0.25   P -0.36 -0.02
segment A B
segment C D
```

Los ángulos $\angle APC$ y $\angle DPB$ son ángulos opuestos por el vértice en $P$, así son iguales.

Para calcular $\angle APC$: en el triángulo $\triangle APC$, el ángulo en $A$ es $\angle CAB$ (inscrito que abarca $\widehat{BC}$), y el ángulo en $C$ es $\angle ACD$ (inscrito que abarca $\widehat{AD}$). Por la suma de ángulos:

$$\angle APC = 180° - \angle PAC - \angle PCA = 180° - \frac{\widehat{BC}}{2} - \frac{\widehat{AD}}{2} = 180° - \frac{\widehat{BC} + \widehat{AD}}{2}.$$

Pero $360° - \widehat{BC} - \widehat{AD} = \widehat{AB} + \widehat{CD}$, así $\widehat{BC} + \widehat{AD} = 360° - (\widehat{AB} + \widehat{CD})$, y:

$$\angle APC = \frac{\widehat{AB} + \widehat{CD}}{2}.$$

El ángulo formado por dos cuerdas que se cortan es la semisuma de los arcos que las rodean.

---

### Problema olímpico

**Ejemplo 6.** Sean $AB$ un diámetro de $\omega$, $C$ un punto de la semicircunferencia (distinto de $A$ y $B$), y $T$ el punto donde la tangente a $\omega$ en $C$ corta a la recta $AB$. Demostrar que $TC$ es bisectriz del ángulo $\angle ACB$ **si y solo si** $C$ es el punto medio del arco $\widehat{AB}$ (equivalentemente, $CA = CB$).

*La idea.* El ángulo $\angle ACB$ es recto y fijo, lo que tienta a creer que la tangente "siempre" lo biseca. Pero el ángulo semiinscrito convierte "¿$TC$ biseca?" en comparar $\angle CAB$ con $\angle CBA$ — es decir, en si el triángulo es isósceles. La moraleja: una constante ($\angle ACB = 90°$) no implica simetría; hay que traducir la bisección a una igualdad de ángulos concreta.

```geofig
// AB diámetro, C en la semicircunferencia, tangente en C corta a AB en T
size 9.5 4.2
circle 0 0 2.5
point -3.89  0      T -0.05 -0.32
point -2.5   0      A -0.08 -0.32
point  2.5   0      B  0.08 -0.32
point -1.61  1.915  C -0.08  0.3
segment T C
segment A B
segment C A
segment C B
rightangle C A B
```

Por el Corolario 2, $\angle ACB = 90°$ siempre, sin importar dónde esté $C$ (ángulo en semicírculo). Por el ángulo semiinscrito (Corolario 3), la tangente $TC$ forma con las cuerdas $CA$ y $CB$ los ángulos

$$\angle TCA = \angle CBA, \qquad \angle TCB = \angle CAB$$

(cada cuerda vista desde el arco opuesto). Por tanto:

$$TC \text{ biseca } \angle ACB \iff \angle TCA = \angle TCB \iff \angle CBA = \angle CAB \iff CA = CB \iff C \text{ es el punto medio de } \widehat{AB}. \qquad \blacksquare$$

*(El enunciado ingenuo "$TC$ siempre biseca $\angle ACB$" —que uno podría sospechar al ver que $\angle ACB = 90°$ es constante— es falso: solo ocurre en el caso simétrico $C = $ punto medio del arco. El ángulo semiinscrito convierte la pregunta "¿biseca?" en una comparación directa entre $\angle CAB$ y $\angle CBA$, es decir, en la pregunta de si $\triangle ABC$ es isósceles.)*

## El criterio del cuadrilátero cíclico

## Corolario

Un cuadrilátero $ABCD$ es inscriptible en una circunferencia si y solo si:

**(i)** $\angle BAD + \angle BCD = 180°$ (ángulos opuestos suplementarios), **o equivalentemente,**

**(ii)** $\angle BAC = \angle BDC$ (dos ángulos sobre el mismo lado de $BD$ son iguales), **o equivalentemente,**

**(iii)** $\angle ABD = \angle ACD$ (ángulos sobre el mismo lado de $AD$ son iguales).

```geofig
// ABCD cíclico: ∠BAC y ∠BDC subtienden el mismo arco BC
size 7.5 7.5
circle 0 0 2.5
point -2.35 -0.855  A -0.32 -0.15
point -1.25  2.165  B -0.05  0.3
point  1.92  1.61   C  0.28  0.15
point  1.25 -2.165  D  0.1  -0.32
segment A B
segment B C
segment C D
segment D A
segment A C
segment B D
label -0.95  0.35 "∠BAC"
label  0.85 -0.55 "∠BDC"
```

## Demostración

$(\Rightarrow)$: Si $ABCD$ es cíclico, la igualdad (ii) sigue del Corolario 1 (ambos ángulos inscritos abarcan el mismo arco $\widehat{AC}$). La condición (i) se demostró en el Ejemplo 1.

$(\Leftarrow)$: Si $\angle BAC = \angle BDC$, entonces $D$ está sobre la circunferencia que pasa por $A$, $B$, $C$ (única circunferencia tal que todos los puntos desde los que $\widehat{AC}$ subtende ese ángulo forman un arco). Luego $ABCD$ es cíclico. $\blacksquare$

**Este criterio es la herramienta más usada para probar que cuatro puntos son concíclicos.** Siempre que se necesita probar concíclicidad, se busca un par de ángulos iguales o suplementarios.

## Aplicaciones

**Detectar puntos concíclicos.** Dado un diagrama con cuatro puntos $A, B, C, D$, para demostrar que son concíclicos:
1. Calcular $\angle BAC$ y $\angle BDC$ (o cualquier par de ángulos «desde el mismo arco»).
2. Si son iguales (y los puntos están en el mismo lado de $BD$), son concíclicos.

**Alturas y el círculo de nueve puntos.** Los pies de las tres alturas de un triángulo son concíclicos: esto se prueba mostrando que ciertos pares de ángulos inscritos son iguales, lo que requiere el teorema del ángulo inscrito aplicado a los cuadriláteros formados por los pies de las alturas y los vértices.

**Tangentes desde un punto exterior.** Si $PT_1$ y $PT_2$ son las dos tangentes desde $P$ a $\omega$, entonces $\angle T_1PT_2 = 180° - \angle T_1OT_2$, y los ángulos semiinscritos en $T_1$ y $T_2$ revelan la simetría de la configuración.

## Observación

**La identificación rápida.** En un diagrama con circunferencias, el primer reflejo debe ser identificar ángulos inscritos sobre el mismo arco: son iguales. Esto genera igualdades de ángulos de forma «gratis», y esas igualdades suelen ser el primer paso de la solución.

**El caso de ángulos sobre arcos opuestos.** Si $P$ y $Q$ están en arcos opuestos del arco $\widehat{AB}$ (uno en cada lado de la cuerda $AB$), entonces $\angle APB + \angle AQB = 180°$. No son iguales sino suplementarios — ¡un error frecuente!

**Generalización al espacio.** En geometría en $\mathbb R^3$, el análogo es que los ángulos inscritos en una esfera sobre el mismo arco de gran círculo son todos iguales. Pero en olimpiadas solo se trabaja en el plano.

## Problemas relacionados

**Problema 1 (clásico).** Sea $ABCD$ un cuadrilátero cíclico. Demostrar que $\angle ACB = \angle ADB$.

[[pista]]

Los dos ángulos miran la misma cuerda $AB$ desde el mismo arco.

[[/pista]]

[[solución]]

$\angle ACB$ y $\angle ADB$ son ángulos inscritos que subtienden la **misma cuerda $AB$**, y los vértices $C$ y $D$ están en el mismo arco respecto de $AB$ (el arco que no contiene a $A$ ni a $B$). Por el Corolario 1 (ángulos inscritos sobre el mismo arco), son iguales:

$$
\angle ACB = \frac{\widehat{AB}}{2} = \angle ADB. \qquad \blacksquare
$$

[[/solución]]

**Problema 2 (tangente-cuerda).** Sea $ABC$ un triángulo inscrito en $\omega$. La tangente a $\omega$ en $A$ corta a la recta $BC$ en $T$. Demostrar que $TA^2 = TB \cdot TC$.

[[pista]]

Por el ángulo semiinscrito, $\angle TAB = \angle ACB$. Busca dos triángulos semejantes que compartan el vértice $T$.

[[/pista]]

[[solución]]

Por el ángulo semiinscrito (Corolario 3), el ángulo entre la tangente $TA$ y la cuerda $AB$ es igual al ángulo inscrito que ve $AB$ desde el arco opuesto:

$$
\angle TAB = \angle ACB = \angle TCA.
$$

Consideramos los triángulos $\triangle TAB$ y $\triangle TCA$. Comparten el ángulo en $T$, y acabamos de ver que $\angle TAB = \angle TCA$. Por el criterio AA, son semejantes:

$$
\triangle TAB \sim \triangle TCA \;\Longrightarrow\; \frac{TA}{TC} = \frac{TB}{TA}.
$$

De la proporción, $TA^2 = TB \cdot TC$. $\blacksquare$

*(Es el caso límite de la "potencia de un punto": la potencia de $T$ respecto de $\omega$ vale $TB\cdot TC$, y también $TA^2$ por ser $TA$ tangente.)*

[[/solución]]

**Problema 3 (lema del incentro, "trident").** Sea $\omega$ la circunferencia circunscrita al triángulo $ABC$. La bisectriz desde $A$ corta a $\omega$ en el punto medio $M$ del arco $\widehat{BC}$ que no contiene a $A$. Probar que $MB = MC = MI$, donde $I$ es el incentro.

[[pista]]

$MB = MC$ sale de que $M$ es punto medio del arco. Para $MI = MB$, demuestra que el triángulo $MBI$ es isósceles calculando $\angle MBI$ y $\angle MIB$ con $A/2$ y $B/2$.

[[/pista]]

[[solución]]

Sean $\angle A, \angle B, \angle C$ los ángulos del triángulo. Como $AI$ y $BI$ son bisectrices, $\angle BAM = \angle A/2$ y $\angle IBC = \angle B/2$.

**$MB = MC$.** Como $AM$ biseca $\angle A$, los arcos $\widehat{BM}$ y $\widehat{MC}$ son iguales (ambos subtienden ángulos inscritos $\angle BAM = \angle CAM = \angle A/2$). Arcos iguales $\Rightarrow$ cuerdas iguales, luego $MB = MC$.

**$MI = MB$.** Estudiamos el triángulo $MBI$ y mostramos que es isósceles en $M$.

- $\angle MBI = \angle MBC + \angle CBI$. Ahora $\angle MBC = \angle MAC = \dfrac{\angle A}{2}$ (ángulos inscritos sobre el mismo arco $\widehat{MC}$), y $\angle CBI = \dfrac{\angle B}{2}$. Así $\angle MBI = \dfrac{\angle A + \angle B}{2}$.
- $\angle MIB$ es ángulo exterior del triángulo $ABI$ en $I$, luego es la suma de los dos no adyacentes: $\angle MIB = \angle IAB + \angle IBA = \dfrac{\angle A}{2} + \dfrac{\angle B}{2}$.

Por tanto $\angle MBI = \angle MIB$, así que $\triangle MBI$ es isósceles y $MI = MB$.

Combinando, $MB = MC = MI$. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** Sea $H$ el ortocentro del triángulo $ABC$. Demostrar que el circuncírculo de $BHC$ tiene el mismo radio $R$ que el de $ABC$.

[[pista]]

Primero prueba que $\angle BHC = 180° - \angle A$. Luego aplica la ley de los senos a $\triangle BHC$ con la cuerda $BC$.

[[/pista]]

[[solución]]

**Cálculo de $\angle BHC$.** Sea $H$ el ortocentro. Mirando el triángulo $BHC$: $\angle HBC = 90° - \angle C$ y $\angle HCB = 90° - \angle B$ (la altura desde $B$ es perpendicular a $AC$, etc.). Entonces

$$
\angle BHC = 180° - (90° - \angle C) - (90° - \angle B) = \angle B + \angle C = 180° - \angle A.
$$

**Comparación de radios.** Sea $R'$ el circunradio de $BHC$. Por la ley de los senos aplicada a la cuerda $BC$ en ese círculo,

$$
\frac{BC}{\sin \angle BHC} = 2R'.
$$

En el círculo original, $\dfrac{BC}{\sin \angle A} = 2R$. Y como $\angle BHC = 180° - \angle A$, se tiene $\sin\angle BHC = \sin\angle A$, luego

$$
2R' = \frac{BC}{\sin\angle BHC} = \frac{BC}{\sin\angle A} = 2R \;\Longrightarrow\; R' = R. \qquad \blacksquare
$$

[[/solución]]

**Problema 5 (recta de Simson).** Si $P$ es un punto del circuncírculo del triángulo $ABC$, los pies de las perpendiculares desde $P$ a los tres lados (rectas $BC$, $CA$, $AB$) son colineales.

[[pista]]

Llama $X, Y, Z$ a los pies sobre $BC$, $CA$, $AB$. Los ángulos rectos crean varios cuadriláteros cíclicos ($AYPZ$, $PXCY$, $BXPZ$). Persigue ángulos para probar $\angle PXZ = \angle PXY$, lo que obliga a $Z, X, Y$ a estar alineados.

[[/pista]]

[[solución]]

Sean $X, Y, Z$ los pies de las perpendiculares desde $P$ a las rectas $BC$, $CA$, $AB$. Suponemos $P$ en el arco $\widehat{BC}$ que no contiene a $A$ (los demás casos son análogos).

**Cuadriláteros cíclicos por ángulos rectos.** Como $\angle PYC = \angle PXC = 90°$, los puntos $P, X, C, Y$ están en una circunferencia (de diámetro $PC$). Como $\angle PXB = \angle PZB = 90°$, los puntos $P, X, B, Z$ están en otra circunferencia (de diámetro $PB$).

**Cacería de ángulos.** En el círculo $PXBZ$, los ángulos $\angle PXZ$ y $\angle PBZ$ subtienden la misma cuerda $PZ$, y como $Z$ está en la recta $AB$, el rayo $BZ$ va por $BA$. Luego

$$
\angle PXZ = \angle PBZ = \angle PBA.
$$

En el círculo $PXCY$, los ángulos $\angle PXY$ y $\angle PCY$ subtienden la cuerda $PY$, y como $Y$ está en la recta $CA$,

$$
\angle PXY = \angle PCY = \angle PCA.
$$

**El cierre.** Los puntos $A, B, P, C$ están sobre el circuncírculo en ese orden cíclico (pues $P$ está en el arco $\widehat{BC}$ opuesto a $A$), así que $ABPC$ es un cuadrilátero cíclico. Sus ángulos en $B$ y en $C$ son **opuestos**, luego suplementarios:

$$
\angle PBA + \angle PCA = 180°.
$$

Sustituyendo,

$$
\angle PXZ + \angle PXY = \angle PBA + \angle PCA = 180°.
$$

Como los rayos $XZ$ y $XY$ forman con $XP$ ángulos que suman $180°$ y salen a lados opuestos de $XP$, son rayos opuestos: $Z$, $X$, $Y$ están alineados. Esa recta es la **recta de Simson** de $P$. $\blacksquare$

[[/solución]]
