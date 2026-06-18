---
title: "Semejanza de triángulos y homotecia espiral"
preview: "Dos triángulos son semejantes si tienen los mismos ángulos. Los criterios AA, LAL y LLL son las tres puertas de entrada a la proporción de lados. La homotecia espiral es la transformación que realiza cualquier semejanza directa."
dificultad: iniciacion
tags: [semejanza, triangulo, AA, LAL, homotecia-espiral, proporcion]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-04"
---

La semejanza es la herramienta más fundamental de la geometría olímpica. Detrás de casi toda demostración geométrica que no use potencia de punto ni ángulos inscritos, hay un par de triángulos semejantes que genera la proporción clave. La habilidad central no es saber qué hacer con la semejanza, sino **detectarla**: identificar el par de triángulos, establecer la correspondencia correcta de vértices, y extraer la proporción relevante.

## Definición

Dos triángulos $\triangle ABC$ y $\triangle A'B'C'$ son **semejantes** (se escribe $\triangle ABC \sim \triangle A'B'C'$) si existe una correspondencia entre sus vértices tal que:

- Los ángulos correspondientes son iguales: $\angle A = \angle A'$, $\angle B = \angle B'$, $\angle C = \angle C'$.
- Los lados correspondientes son proporcionales: $a/a' = b/b' = c/c' = k$ (la **razón de semejanza**).

La correspondencia de vértices importa: $\triangle ABC \sim \triangle A'B'C'$ indica que $A \leftrightarrow A'$, $B \leftrightarrow B'$, $C \leftrightarrow C'$.

```geofig
// ABC y A'B'C' semejantes (misma forma, distinta escala)
size 9 5.5
point -3.6 -1.6  A  -0.3  -0.25
point -0.4 -1.6  B   0.28 -0.25
point -2.6  1.6  C   0.05  0.3
point  1.0 -0.8  A' -0.3  -0.25
point  2.6 -0.8  B'  0.28 -0.25
point  1.5  0.8  C'  0.05  0.3
segment A B
segment B C
segment C A
segment A' B'
segment B' C'
segment C' A'
```

## Teorema

**(Criterios de semejanza)** Dos triángulos son semejantes si y solo si se cumple alguno de:

**(AA)** Dos pares de ángulos correspondientes son iguales. (El tercero se sigue automáticamente.)

**(LAL)** Un par de ángulos iguales con los lados adyacentes proporcionales.

**(LLL)** Los tres pares de lados son proporcionales.

## Demostración

**Criterio AA.** Supongamos $\angle A = \angle A'$ y $\angle B = \angle B'$. Entonces $\angle C = 180° - \angle A - \angle B = 180° - \angle A' - \angle B' = \angle C'$.

Para la proporcionalidad de lados: apliquemos una homotecia de centro $A$ y razón $k = A'B'/AB$ a $\triangle ABC$, obteniendo $\triangle A B_1 C_1$ con $AB_1 = kAB = A'B'$ y mismo ángulo en $A$ que $\triangle ABC$. Como $\angle A = \angle A'$ y $AB_1 = A'B'$, por ASA (usando $\angle B = \angle B_1 = \angle B'$), el triángulo $\triangle AB_1C_1 \cong \triangle A'B'C'$, así $\triangle ABC \sim \triangle A'B'C'$ con razón $k$. $\blacksquare$

**Criterio LLL.** Si $a/a' = b/b' = c/c' = k$, aplicamos la misma homotecia y usamos SSS para la congruencia de los triángulos resultantes.

## Detectar semejanzas: el método práctico

La semejanza aparece en cuatro situaciones:

**1. Ángulos comunes.** Si dos triángulos comparten un ángulo (o ángulos iguales), AA puede aplicarse buscando un segundo par de ángulos iguales en la figura.

**2. Ángulos inscritos en una misma circunferencia.** $\angle APB = \angle AQB$ para $P, Q$ en el mismo arco. Esto genera automáticamente pares de ángulos iguales.

**3. Paralelas.** Una paralela a un lado genera ángulos correspondientes iguales (criterio de paralelas) que a menudo dan semejanza.

**4. Tangentes y secantes.** El ángulo entre una tangente y una cuerda es igual al ángulo inscrito en el arco correspondiente.

## Ejemplo

### Semejanza por ángulo común

*La idea común.* Cuando dos triángulos **comparten un ángulo**, ya tienes la mitad del criterio AA; basta cazar un segundo ángulo igual (un ángulo recto, una paralela, un inscrito) para declararlos semejantes y leer la proporción.

**Ejemplo 1.** (Altura sobre la hipotenusa) En el triángulo rectángulo $ABC$ con ángulo recto en $C$, sea $H$ el pie de la altura desde $C$. Demostrar que $\triangle ACH \sim \triangle ABC$.

*La idea.* Los dos triángulos comparten el ángulo $\angle A$, y ambos tienen un ángulo recto ($\angle AHC = \angle ACB = 90°$): AA cerrado.

$\angle AHC = 90° = \angle ACB$ y $\angle A = \angle A$. Por AA: $\triangle ACH \sim \triangle ABC$.

La razón: $AH/AC = AC/AB$, así $AC^2 = AH \cdot AB$ (relación clave). Análogamente $BC^2 = BH \cdot AB$.

Sumando: $AC^2 + BC^2 = (AH + BH) \cdot AB = AB^2$, que es el **teorema de Pitágoras**. La semejanza prueba Pitágoras. $\square$

```geofig
// Triángulo rectángulo ABC con altura CH a la hipotenusa
size 8 6
point -3   0   B -0.2 -0.25
point  3   0   A  0.2 -0.25
point  0.6  2.4  C  0.1  0.25
point  0.6  0   H  0.12 -0.28
segment A B
segment A C
segment B C
segment C H
rightangle H C A
rightangle H B C
```

---

**Ejemplo 2.** (Secantes desde un punto exterior) Desde un punto $P$ exterior al círculo $\omega$ trazamos dos secantes que cortan a $\omega$ en $A, B$ y en $C, D$ (con $A$ y $C$ los más cercanos a $P$). Probar que $PA \cdot PB = PC \cdot PD$.

*La idea.* Queremos un producto de longitudes; el camino es una **semejanza**. El ángulo en $P$ es común a las dos secantes, así que basta encontrar un segundo par de ángulos iguales — y esos los regala el ángulo inscrito. El único cuidado es **emparejar bien los vértices**.

*Solución.* Comparamos $\triangle PDA$ y $\triangle PBC$:

- El ángulo en $P$ es **común** (es el ángulo entre las dos secantes).
- $\angle PDA = \angle PBC$: en efecto, $\angle PDA = \angle CDA$ (el rayo $DP$ pasa por $C$) y $\angle PBC = \angle ABC$ (el rayo $BP$ pasa por $A$), y ambos, $\angle CDA$ y $\angle ABC$, son **ángulos inscritos que subtienden el mismo arco $\widehat{AC}$**, luego son iguales.

Por el criterio AA, $\triangle PDA \sim \triangle PBC$ (correspondencia $P\leftrightarrow P$, $D\leftrightarrow B$, $A\leftrightarrow C$). De ahí

$$
\frac{PD}{PB} = \frac{PA}{PC} \;\Longrightarrow\; PA \cdot PB = PC \cdot PD. \qquad \square
$$

Este valor común es la **potencia del punto** $P$ respecto de $\omega$.

---

**Ejemplo 3.** (Teorema de la bisectriz, demostración geométrica) La bisectriz interna del ángulo $\angle BAC$ en el triángulo $ABC$ corta a $BC$ en $D$. Demostrar que $BD/DC = AB/AC = c/b$.

*La idea.* La bisectriz por sí sola no da proporciones; el truco clásico es **trazar una paralela** a ella desde $C$. Esa paralela crea un triángulo isósceles (que convierte $AC$ en una longitud manejable) y deja a Thales repartir $BC$ en la razón buscada.

Trazamos por $C$ una paralela a $AD$, cortando $BA$ extendida en $E$. Como $AD \parallel CE$:

- $\angle DAC = \angle ACE$ (ángulos alternos con transversal $AC$). 
- $\angle BAD = \angle AEC$ (ángulos correspondientes con transversal $AB$).
- Como $AD$ es bisectriz: $\angle BAD = \angle DAC$, así $\angle ACE = \angle AEC$. Luego $\triangle ACE$ es isósceles y $AE = AC = b$.

Por el teorema de Thales con paralelas $AD \parallel CE$:

$$\frac{BD}{DC} = \frac{BA}{AE} = \frac{c}{b}. \qquad \square$$

---

### Semejanza con circunferencias

*La idea común.* La circunferencia es una **fábrica de ángulos iguales**: cualquier par de ángulos inscritos sobre el mismo arco coincide. Eso aporta, gratis, el segundo ángulo que el criterio AA necesita.

**Ejemplo 4.** Sea $ABCD$ un cuadrilátero cíclico con diagonales $AC$ y $BD$ intersectándose en $P$. Demostrar que $\triangle APB \sim \triangle DPC$.

*La idea.* En $P$ hay ángulos opuestos por el vértice (iguales), y el arco común $\widehat{BC}$ da el segundo par: $\angle PAB = \angle PDC$.

```geofig
// Cuadrilátero cíclico ABCD, diagonales AC y BD se cortan en P
size 7.5 7.5
circle 0 0 2.5
point -2.35 -0.855  A -0.32 -0.15
point -1.61  1.915  B -0.32  0.12
point  1.61  1.915  C  0.28  0.12
point  1.915 -1.607 D  0.28 -0.2
point -0.284 0.591  P  0.16  0.2
segment A B
segment B C
segment C D
segment D A
segment A C
segment B D
```

$\angle PAB = \angle PDC$ (inscritos sobre el arco $BC$). $\angle APB = \angle DPC$ (opuestos por el vértice). Por AA: $\triangle APB \sim \triangle DPC$.

De la semejanza: $PA/PD = PB/PC = AB/DC$. En particular $PA \cdot PC = PB \cdot PD$ (potencia del punto $P$). $\square$

---

**Ejemplo 5.** (El Lema del Incentro) Sea $ABC$ un triángulo con incentro $I$, y sea $M$ el punto medio del arco $\widehat{BC}$ del circuncírculo que no contiene a $A$. Demostrar que $MI = MB = MC$.

*Resolución.* Sean $\alpha = \angle A$, $\beta = \angle B$, $\gamma = \angle C$ los ángulos del triángulo (con $\alpha+\beta+\gamma = 180°$).

**$MB = MC$.** Como $M$ es el punto medio del arco $\widehat{BC}$, los arcos $\widehat{BM}$ y $\widehat{MC}$ son iguales, y arcos iguales son subtendidos por cuerdas iguales: $MB = MC$. (Equivalentemente: $AM$ es la bisectriz de $\angle A$ —pasa por el punto medio del arco opuesto—, así $\angle MAB = \angle MAC = \alpha/2$, ángulos inscritos sobre $\widehat{BM}$ y $\widehat{MC}$ respectivamente; arcos iguales producen cuerdas iguales.)

**$MI = MB$.** Como $AM$ es la bisectriz de $\angle BAC$ y $I$ es el incentro, los puntos $A$, $I$, $M$ son colineales (la bisectriz desde $A$ pasa por $I$ y corta de nuevo al circuncírculo en $M$). Calculemos los ángulos $\angle MBI$ y $\angle MIB$ del triángulo $\triangle MBI$:

- $\angle MBI = \angle MBC + \angle CBI$. Por un lado, $\angle MBC = \angle MAC = \dfrac{\alpha}{2}$ (ángulos inscritos que abarcan el arco $\widehat{MC}$). Por otro, $\angle CBI = \dfrac{\beta}{2}$ ($BI$ es bisectriz de $\angle B$). Así $\angle MBI = \dfrac{\alpha}{2} + \dfrac{\beta}{2}$.

- $\angle MIB$ es el ángulo exterior del triángulo $\triangle ABI$ en el vértice $I$ (pues $A$, $I$, $M$ son colineales con $I$ entre $A$ y $M$). Por el teorema del ángulo exterior, $\angle MIB = \angle IAB + \angle IBA = \dfrac{\alpha}{2} + \dfrac{\beta}{2}$.

Luego $\angle MBI = \angle MIB = \dfrac{\alpha+\beta}{2}$, así el triángulo $\triangle MBI$ es isósceles con $MI = MB$ (teorema del triángulo isósceles, recíproco).

Combinando ambas partes: $MI = MB = MC$. $\blacksquare$

*(Este lema —a veces llamado "Fact 5"— es una de las herramientas más citadas en geometría olímpica: dice que $M$ es el centro de una circunferencia que pasa por $B$, $C$, $I$ y también por el excentro $I_A$, ya que $\angle ICI_A = 90°$ y $M$ resulta ser el punto medio de $II_A$. Volveremos a él en el capítulo de puntos notables del triángulo.)*

---

**Ejemplo 6.** (Tangente y secante desde un punto exterior) Sea $P$ un punto exterior a una circunferencia $\omega$. Una tangente desde $P$ toca $\omega$ en $T$, y una secante por $P$ corta a $\omega$ en $A$ y $B$ (con $A$ entre $P$ y $B$). Probar que $\triangle PAT \sim \triangle PTB$ (con la correspondencia $P \leftrightarrow P$, $A \leftrightarrow T$, $T \leftrightarrow B$), y deducir que $PT^2 = PA \cdot PB$.

```geofig
// Tangente PT y secante PAB desde P, con triángulos PAT y PTB semejantes
size 9 4.7
circle 0 0 2 ω
point  4.2   0     P  0.3   0.18
point  2     0     A  0.05 -0.32
point -2     0     B -0.1  -0.32
point  0.95  1.76  T  0.08  0.28
segment P T
segment P B
segment T A
segment T B
```

*Resolución.* El ángulo en $P$ es **común** a ambos triángulos: tanto $\angle APT$ (en $\triangle PAT$) como $\angle TPB$ (en $\triangle PTB$) están formados por el rayo $PT$ y el rayo $PA = PB$ (la secante), así $\angle APT = \angle TPB$.

Para el segundo par de ángulos, usamos el **ángulo semiinscrito** (Corolario 3 del teorema del ángulo inscrito: el ángulo entre una tangente y una cuerda iguala al ángulo inscrito en el arco opuesto). La tangente $PT$ y la cuerda $TA$ forman un ángulo $\angle PTA$ que es igual al ángulo inscrito que abarca el arco $\widehat{TA}$ desde el lado opuesto, es decir, $\angle PTA = \angle TBA$. Como $A$ está entre $P$ y $B$, el ángulo $\angle TBA$ es el mismo que $\angle TBP$ (ángulo del triángulo $PTB$ en el vértice $B$). Luego

$$\angle PTA = \angle TBP.$$

Así, en $\triangle PAT$ y $\triangle PTB$ tenemos $\angle P$ común y $\angle PTA = \angle PBT$. Por el criterio **AA**, $\triangle PAT \sim \triangle PTB$ con la correspondencia $P \leftrightarrow P$, $T \leftrightarrow B$, $A \leftrightarrow T$ —exactamente la del enunciado—.

De la semejanza se obtiene la proporción entre lados correspondientes:

$$\frac{PA}{PT} = \frac{PT}{PB} = \frac{AT}{TB} \qquad \Longrightarrow \qquad PT^2 = PA \cdot PB.$$

Esta última igualdad es la **potencia del punto** $P$ respecto a $\omega$: el cuadrado de la tangente iguala al producto de los segmentos de cualquier secante. La semejanza $\triangle PAT \sim \triangle PTB$ es, precisamente, la razón geométrica que hay detrás de esa fórmula. $\blacksquare$

## Homotecia espiral

Toda **semejanza directa** del plano (que preserva orientación) es una **homotecia espiral**: una composición de una homotecia (escalado) y una rotación, ambas centradas en el mismo punto.

## Teorema

**(Homotecia espiral)** Dada cualquier semejanza directa $f$ con razón $k \neq 1$ y ángulo $\theta$, existe un único punto fijo $Z$ (el **centro de la homotecia espiral**) tal que $f$ es la composición de la homotecia de centro $Z$ y razón $k$ con la rotación de centro $Z$ y ángulo $\theta$.

```geofig
// Centro Z; triángulo ZAB y su imagen ZA'B' (rotada y escalada)
size 9 8
point  0     0     Z  0.08  0.32
point -2.4  -0.6   A -0.34  0.08
point -1.0  -2.0   B -0.32 -0.05
point -1.46 -3.0   A' -0.42 -0.08
point  1.2  -2.77  B'  0.3  -0.05
segment Z A
segment Z B
segment A B
dash Z A'
dash Z B'
dash A' B'
```

*(El triángulo $\triangle ZAB$ —trazo continuo— y su imagen $\triangle ZA'B'$ —trazo discontinuo— son semejantes y comparten el centro $Z$: $f$ los relaciona girando un ángulo $\theta = \angle AZA' = \angle BZB'$ y escalando en razón $k = ZA'/ZA = ZB'/ZB$.)*

## Demostración

Sea $f$ la semejanza directa que envía $A \mapsto A'$ y $B \mapsto B'$, con razón $k \neq 1$. Buscamos su punto fijo $Z$.

Toda semejanza directa multiplica las distancias por $k$ y gira un ángulo fijo $\theta$. Para un punto fijo $Z$ debe cumplirse $\dfrac{ZA'}{ZA} = k$ y $\angle AZA' = \theta$, y lo mismo con $B$: $\dfrac{ZB'}{ZB} = k$, $\angle BZB' = \theta$. Esas dos condiciones equivalen a pedir

$$
\triangle ZAA' \sim \triangle ZBB' \quad(\text{misma orientación}),
$$

y un tal $Z$ existe y es único: es el segundo punto de intersección de la circunferencia que pasa por $A, A'$ y el centro buscado con la que pasa por $B, B'$ —concretamente, el segundo punto común de los circuncírculos de $\triangle XAB$ y $\triangle XA'B'$, donde $X = AB \cap A'B'$—. $\blacksquare$

## Ejemplo

**Ejemplo 7 (lema de la homotecia espiral).** Sea $Z$ el centro de una homotecia espiral que lleva el segmento $AB$ al segmento $A'B'$ (es decir, $\triangle ZAB \sim \triangle ZA'B'$ con la misma orientación). Demostrar que entonces $Z$ es **también** el centro de la homotecia espiral que lleva $AA'$ a $BB'$; esto es, $\triangle ZAA' \sim \triangle ZBB'$.

*La idea.* La semejanza $\triangle ZAB \sim \triangle ZA'B'$ da, a la vez, una **igualdad de razones** y una **igualdad de ángulos**; reagrupándolas se reconoce el criterio LAL para los *otros* dos triángulos. Es el "intercambio" característico de la homotecia espiral, omnipresente en olimpiada.

*Solución.* De $\triangle ZAB \sim \triangle ZA'B'$ obtenemos

$$
\frac{ZA}{ZA'} = \frac{ZB}{ZB'} \qquad\text{y}\qquad \angle AZB = \angle A'ZB'.
$$

La igualdad de razones se reescribe como $\dfrac{ZA}{ZB} = \dfrac{ZA'}{ZB'}$. Y de $\angle AZB = \angle A'ZB'$, sumando a ambos lados el ángulo $\angle BZA'$, sale $\angle AZA' = \angle BZB'$.

Así, los triángulos $\triangle ZAA'$ y $\triangle ZBB'$ tienen un ángulo igual ($\angle AZA' = \angle BZB'$) comprendido entre lados proporcionales ($\tfrac{ZA}{ZB} = \tfrac{ZA'}{ZB'}$). Por el criterio **LAL**, $\triangle ZAA' \sim \triangle ZBB'$. $\blacksquare$

*(Consecuencia práctica: el centro de la homotecia espiral que envía $AB\mapsto A'B'$ es el mismo que el de la que envía $AA'\mapsto BB'$. Buscar ese centro como segunda intersección de dos circuncírculos resuelve multitud de problemas de concurrencia.)*

## Aplicaciones

**Potencia del punto y semejanza.** Toda demostración de $PA \cdot PB = PC \cdot PD$ (potencia del punto) se reduce a encontrar el par de triángulos semejantes que da la proporción $PA/PC = PD/PB$.

**Teorema de Thales.** Una paralela a un lado de un triángulo crea un triángulo semejante con el original (por AA, usando ángulos alternos o correspondientes), con la razón de semejanza dada por la posición de la paralela.

**Construcción de cuartas proporcionales.** Dados tres segmentos $a, b, c$, el segmento $x$ con $a/b = c/x$ se construye con una semejanza.

## Observación

**El orden de los vértices importa.** $\triangle ABC \sim \triangle DEF$ no es lo mismo que $\triangle ABC \sim \triangle DEF$ si la correspondencia es diferente. Siempre hay que establecer la correspondencia correcta de vértices antes de escribir la proporción.

**Semejanza inversa vs. directa.** Las semejanzas pueden ser directas (preservan orientación, como una homotecia + rotación) o inversas (invierten orientación, como una homotecia + reflexión). En la mayoría de los problemas olímpicos se trabaja con semejanzas directas.

**Detección rápida de pares semejantes.** La heurística: si en un diagrama ves dos triángulos que «tienen la misma forma» (aunque escalados y/o rotados), probablemente son semejantes. Busca primero ángulos iguales (por inscritos, por paralelas, o por tangentes), y si encuentras dos pares, AA los declara semejantes.

## Problemas relacionados

**Problema 1 (clásico).** Sea $ABC$ un triángulo y $H_B$, $H_C$ los pies de las alturas desde $B$ y desde $C$. Demostrar que $H_B$ y $H_C$ están en la circunferencia de diámetro $BC$.

[[pista]]

Cada pie ve al segmento $BC$ bajo un ángulo recto. ¿Qué lugar geométrico es "los puntos que ven $BC$ a $90°$"?

[[/pista]]

[[solución]]

El pie $H_B$ está sobre $AC$ y $BH_B \perp AC$, luego $\angle BH_B C = 90°$. Es decir, $H_B$ ve el segmento $BC$ bajo un ángulo recto, así que está sobre la circunferencia de diámetro $BC$ (recíproco del ángulo en semicírculo).

Igualmente, $H_C$ está sobre $AB$ con $CH_C \perp AB$, luego $\angle BH_C C = 90°$ y $H_C$ está también sobre la circunferencia de diámetro $BC$. $\blacksquare$

[[/solución]]

**Problema 2 (diagonales de un trapecio).** En el trapecio $ABCD$ con $AB \parallel CD$, las diagonales se cortan en $P$. Demostrar que $\triangle PAB \sim \triangle PCD$ y deducir que $\dfrac{PA}{PC} = \dfrac{PB}{PD} = \dfrac{AB}{CD}$.

[[pista]]

Las paralelas $AB \parallel CD$ dan ángulos alternos internos iguales; el ángulo en $P$ es opuesto por el vértice.

[[/pista]]

[[solución]]

Como $AB \parallel CD$ y $AC$ es transversal, $\angle PAB = \angle PCD$ (alternos internos). Igualmente, con la transversal $BD$, $\angle PBA = \angle PDC$. Y $\angle APB = \angle CPD$ (opuestos por el vértice). Por el criterio AA (de hecho sobran ángulos),

$$
\triangle PAB \sim \triangle PCD,
$$

con la correspondencia $A \leftrightarrow C$, $B \leftrightarrow D$. De la semejanza, los lados correspondientes son proporcionales:

$$
\frac{PA}{PC} = \frac{PB}{PD} = \frac{AB}{CD}. \qquad \blacksquare
$$

[[/solución]]

**Problema 3 (recíproco del cuadrilátero cíclico).** Sea $ABCD$ un cuadrilátero convexo con $\angle A + \angle C = 180°$. Demostrar que $ABCD$ es cíclico.

[[pista]]

Traza la circunferencia por $A$, $B$, $C$ y razona por contradicción: si $D$ no estuviera en ella, el ángulo $\angle ADC$ no podría valer $180° - \angle B$.

[[/pista]]

[[solución]]

Sea $\Gamma$ la circunferencia que pasa por $A$, $B$, $C$ (existe y es única, por ser tres puntos no alineados). Como en todo cuadrilátero $\angle A + \angle B + \angle C + \angle D = 360°$, la hipótesis $\angle A + \angle C = 180°$ equivale a $\angle B + \angle D = 180°$, es decir $\angle D = 180° - \angle B$.

Los puntos $X$ del arco de $\Gamma$ situado al otro lado de $AC$ respecto de $B$ ven la cuerda $AC$ bajo el ángulo $\angle AXC = 180° - \angle B$ (cuadrilátero cíclico $ABCX$). Es decir, **ese arco es exactamente el lugar de los puntos, en ese semiplano, que ven $AC$ bajo el ángulo $180° - \angle B$**.

Como $D$ está en ese semiplano (convexidad) y cumple $\angle ADC = 180° - \angle B$, el punto $D$ pertenece a dicho arco, luego a $\Gamma$. Por tanto $A$, $B$, $C$, $D$ son concíclicos. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** En el triángulo rectángulo $ABC$ con ángulo recto en $C$, sea $D$ el pie de la altura desde $C$ sobre la hipotenusa $AB$. Demostrar que $CD^2 = AD \cdot DB$.

[[pista]]

Los dos triángulos pequeños $\triangle ACD$ y $\triangle CBD$ son ambos semejantes al grande; compáralos entre sí.

[[/pista]]

[[solución]]

En $\triangle ACD$ y $\triangle CBD$, ambos rectángulos en $D$:

- $\angle ADC = \angle CDB = 90°$.
- $\angle DAC = \angle DCB$: en efecto, $\angle DCB = 90° - \angle DCA$ (el ángulo recto en $C$ se parte en los dos), y $\angle DAC = 90° - \angle DCA$ (suma de ángulos de $\triangle ACD$). Luego son iguales.

Por AA, $\triangle ACD \sim \triangle CBD$, con la correspondencia $A\leftrightarrow C$, $C\leftrightarrow B$, $D\leftrightarrow D$. De los lados correspondientes,

$$
\frac{AD}{CD} = \frac{CD}{DB} \;\Longrightarrow\; CD^2 = AD \cdot DB. \qquad \blacksquare
$$

[[/solución]]

**Problema 5 (clásico).** Una circunferencia que pasa por $B$ y $C$ corta a los lados $AB$ y $AC$ del triángulo $ABC$ en $E$ y $F$ respectivamente. Demostrar que $\triangle AEF \sim \triangle ACB$ y deducir que $AE \cdot AB = AF \cdot AC$.

[[pista]]

$BEFC$ es cíclico. El ángulo $\angle AEF$ es el ángulo exterior de ese cuadrilátero cíclico en $E$, igual al interior opuesto $\angle ACB$.

[[/pista]]

[[solución]]

Los puntos $B$, $E$, $F$, $C$ están sobre la circunferencia dada, así que $BEFC$ es un cuadrilátero cíclico. En un cuadrilátero cíclico, el ángulo exterior en un vértice es igual al ángulo interior opuesto; en el vértice $E$,

$$
\angle AEF = \angle ACB
$$

(el ángulo $\angle AEF$ es suplementario de $\angle FEB$, y $\angle FEB + \angle FCB = 180°$ por ser opuestos del cíclico).

Ahora, en $\triangle AEF$ y $\triangle ACB$: el ángulo $\angle A$ es común y $\angle AEF = \angle ACB$. Por AA,

$$
\triangle AEF \sim \triangle ACB \quad(A\leftrightarrow A,\ E\leftrightarrow C,\ F\leftrightarrow B).
$$

De la proporción de lados correspondientes, $\dfrac{AE}{AC} = \dfrac{AF}{AB}$, es decir

$$
AE \cdot AB = AF \cdot AC. \qquad \blacksquare
$$

(Ambos productos valen la potencia de $A$ respecto de la circunferencia.)

[[/solución]]
