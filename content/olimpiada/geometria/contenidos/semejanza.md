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

**Ejemplo 1.** (Altura sobre la hipotenusa) En el triángulo rectángulo $ABC$ con ángulo recto en $C$, sea $H$ el pie de la altura desde $C$. Demostrar que $\triangle ACH \sim \triangle ABC$.

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

**Ejemplo 2.** (Secantes desde un punto exterior) Desde el punto $P$ exterior al círculo $\omega$, tracemos dos secantes que corten a $\omega$ en $\{A, B\}$ y $\{C, D\}$ respectivamente (con $A$ y $C$ más cercanos a $P$). Probar que $PA \cdot PB = PC \cdot PD$.

Los triángulos $\triangle PAC$ y $\triangle PDC$... hmm, busquemos la semejanza correcta. En $\omega$: $\angle PAD = \angle PCA$ (ángulos sobre el mismo arco $AD$, visto desde puntos del círculo). Y el ángulo en $P$ es compartido. Por AA: $\triangle PAD \sim \triangle PCB$ (¡ojo a la correspondencia!).

Veamos: $\angle PAD = \angle PBC$ (ambos inscriben el arco $AD$, pero... cuidado con el orden). Usemos $\angle DAC = \angle DBC$ (inscritos sobre arco $DC$) y el ángulo común en $P$: $\triangle PAD \sim \triangle PCB$ (vértice $P$ común, y $\angle PAD = \angle PCB$).

De la semejanza: $PA/PC = PD/PB$, así $PA \cdot PB = PC \cdot PD$. $\square$

---

**Ejemplo 3.** (Teorema de la bisectriz, demostración geométrica) La bisectriz interna del ángulo $\angle BAC$ en el triángulo $ABC$ corta a $BC$ en $D$. Demostrar que $BD/DC = AB/AC = c/b$.

Trazamos por $C$ una paralela a $AD$, cortando $BA$ extendida en $E$. Como $AD \parallel CE$:

- $\angle DAC = \angle ACE$ (ángulos alternos con transversal $AC$). 
- $\angle BAD = \angle AEC$ (ángulos correspondientes con transversal $AB$).
- Como $AD$ es bisectriz: $\angle BAD = \angle DAC$, así $\angle ACE = \angle AEC$. Luego $\triangle ACE$ es isósceles y $AE = AC = b$.

Por el teorema de Thales con paralelas $AD \parallel CE$:

$$\frac{BD}{DC} = \frac{BA}{AE} = \frac{c}{b}. \qquad \square$$

---

### Semejanza con circunferencias

**Ejemplo 4.** Sea $ABCD$ un cuadrilátero cíclico con diagonales $AC$ y $BD$ intersectándose en $P$. Demostrar que $\triangle APB \sim \triangle DPC$.

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

## Demostración

Sea $f$ la semejanza que envía $A \mapsto A'$ y $B \mapsto B'$. Si $k \neq 1$, hay un único punto fijo $Z$ que se encuentra como la intersección de las circunferencias que contienen a $A, A', B'$ y que contienen a $B, B', A'$... La demostración detallada usa que los triángulos $\triangle ZAB$ y $\triangle ZA'B'$ son semejantes con el mismo centro $Z$.

*Clave práctica:* el centro de la homotecia espiral que lleva $AB \mapsto A'B'$ se encuentra como la intersección de los círculos sobre $AA'$ y $BB'$... la construcción exacta es: $Z$ es el punto tal que $\triangle ZAA' \sim \triangle ZBB'$ con la misma orientación.

## Ejemplo

**Ejemplo 7.** (Homotecia espiral en olimpiadas) Sea $ABCD$ un cuadrado. Sobre los segmentos $AB$ y $BC$ se construyen cuadrados exteriores $ABB_1A_1$ y $BCC_1B_2$. Demostrar que los triángulos $\triangle AB_2C_1$ son isósceles o que ciertos puntos son concíclicos.

*Hint:* La homotecia espiral de centro $B$ con razón $1$ y ángulo $90°$ envía $A \mapsto C$ y algún otro punto al lugar adecuado. Las configuraciones de cuadrados sobre lados de triángulos suelen resolverse identificando la homotecia espiral apropiada.

## Aplicaciones

**Potencia del punto y semejanza.** Toda demostración de $PA \cdot PB = PC \cdot PD$ (potencia del punto) se reduce a encontrar el par de triángulos semejantes que da la proporción $PA/PC = PD/PB$.

**Teorema de Thales.** Una paralela a un lado de un triángulo crea un triángulo semejante con el original (por AA, usando ángulos alternos o correspondientes), con la razón de semejanza dada por la posición de la paralela.

**Construcción de cuartas proporcionales.** Dados tres segmentos $a, b, c$, el segmento $x$ con $a/b = c/x$ se construye con una semejanza.

## Observación

**El orden de los vértices importa.** $\triangle ABC \sim \triangle DEF$ no es lo mismo que $\triangle ABC \sim \triangle DEF$ si la correspondencia es diferente. Siempre hay que establecer la correspondencia correcta de vértices antes de escribir la proporción.

**Semejanza inversa vs. directa.** Las semejanzas pueden ser directas (preservan orientación, como una homotecia + rotación) o inversas (invierten orientación, como una homotecia + reflexión). En la mayoría de los problemas olímpicos se trabaja con semejanzas directas.

**Detección rápida de pares semejantes.** La heurística: si en un diagrama ves dos triángulos que «tienen la misma forma» (aunque escalados y/o rotados), probablemente son semejantes. Busca primero ángulos iguales (por inscritos, por paralelas, o por tangentes), y si encuentras dos pares, AA los declara semejantes.

## Problemas relacionados

- **(Clásico)** Sea $ABC$ un triángulo y $H_B$, $H_C$ los pies de las alturas desde $B$ y desde $C$ respectivamente. Demostrar que $H_B$ y $H_C$ pertenecen a la circunferencia de diámetro $BC$.

- **(Clásico)** Sea $P$ un punto interior del triángulo $ABC$. Las rectas $AP$, $BP$, $CP$ cortan a los lados opuestos en $D$, $E$, $F$. Probar que

$$\frac{AP}{PD} + \frac{BP}{PE} + \frac{CP}{PF} = \frac{[ABC]}{[DEF]} + 2.$$

- **(Clásico)** Sea $ABCD$ un cuadrilátero con $\angle A + \angle C = 180°$. Demostrar que $ABCD$ es cíclico.

- **(Clásico)** En el triángulo rectángulo $ABC$ con ángulo recto en $C$, sea $D$ el pie de la altura desde $C$ sobre la hipotenusa $AB$. Demostrar que $CD^2 = AD \cdot DB$ directamente por semejanza de triángulos.

- **(IMO 2009/2)** Sea $ABC$ un triángulo con circuncentro $O$. Los puntos $P$ y $Q$ son puntos interiores de los lados $CA$ y $AB$ respectivamente. Sean $K$, $L$ y $M$ los puntos medios de los segmentos $BP$, $CQ$ y $PQ$ respectivamente, y sea $\Gamma$ la circunferencia que pasa por $K$, $L$ y $M$. Supongamos que la recta $PQ$ es tangente a la circunferencia $\Gamma$. Probar que $OP = OQ$.
