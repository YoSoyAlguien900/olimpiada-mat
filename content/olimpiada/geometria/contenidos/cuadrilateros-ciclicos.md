---
title: "Cuadriláteros cíclicos: criterios y propiedades"
preview: "Un cuadrilátero es cíclico si y solo si sus ángulos opuestos suman 180°. Este criterio — junto con el de ángulos sobre el mismo arco — es la herramienta estándar para reconocer y explotar la ciclicidad en problemas de olimpiada."
dificultad: regional
tags: [cuadrilatero-ciclico, angulos-inscritos, criterio, circunferencia]
prerequisites: [angulos-inscritos]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Un cuadrilátero es **cíclico** (o inscriptible) si sus cuatro vértices son concíclicos, es decir, si existe una circunferencia que pasa por los cuatro. La mayoría de los problemas de olimpiada con cuadriláteros acaban reduciendo a demostrar que cuatro puntos son concíclicos — y para eso se necesitan criterios rápidos.

---

## Definición

Un cuadrilátero $ABCD$ es **cíclico** si existen una circunferencia $\omega$ tal que $A, B, C, D \in \omega$. En ese caso, $\omega$ se llama la **circunferencia circunscrita** de $ABCD$.

```geofig
// Cuadrilátero cíclico ABCD con ángulos opuestos marcados
size 8 8
circle 0 0 2.8
point  0    2.8  A  0.1   0.22
point -2.6 -1.0  B -0.3   0.12
point  0.5 -2.7  C  0.18 -0.28
point  2.6 -0.5  D  0.28  0.12
segment A B
segment B C
segment C D
segment D A
```

---

## Criterio 1: ángulos opuestos

## Teorema

El cuadrilátero $ABCD$ es cíclico si y solo si los ángulos opuestos son suplementarios:

$$\boxed{\angle DAB + \angle BCD = 180°, \qquad \angle ABC + \angle CDA = 180°.}$$

## Demostración

**($\Rightarrow$)** Si $ABCD$ es cíclico con circuncentro $O$, los arcos $\widehat{BCD}$ y $\widehat{DAB}$ suman $360°$ (el círculo completo). Por el teorema del ángulo inscrito, $\angle DAB = \frac{1}{2}\widehat{BCD}$ y $\angle BCD = \frac{1}{2}\widehat{DAB}$. Así

$$\angle DAB + \angle BCD = \tfrac{1}{2}({\widehat{BCD}} + {\widehat{DAB}}) = \tfrac{1}{2} \cdot 360° = 180°.$$

**($\Leftarrow$)** Si $\angle DAB + \angle BCD = 180°$, sea $\omega$ la circunferencia que pasa por $A$, $B$, $D$. Sea $C'$ la segunda intersección de $\overleftrightarrow{BC}$ con $\omega$. Por la dirección directa: $\angle DAB + \angle BC'D = 180°$. Comparando con la hipótesis: $\angle BCD = \angle BC'D$. Esto implica que $C = C'$ o que $C$ y $C'$ definen el mismo punto sobre la recta $BC$, luego $C \in \omega$. $\blacksquare$

---

## Criterio 2: ángulo sobre el mismo arco

## Teorema

Cuatro puntos $A$, $B$, $C$, $D$ son concíclicos si y solo si

$$\boxed{\angle CAB = \angle CDB}$$

(los dos ángulos que «ven» el segmento $CD$ desde el mismo lado).

```geofig
// A y D ven el segmento BC bajo el mismo ángulo: ∠CAB = ∠CDB
size 7.5 7.5
circle 0 0 2.5
point -2.35 -0.855  B -0.32 -0.18
point  2.35 -0.855  C  0.28 -0.18
point  1.25  2.165  A  0.28  0.12
point -1.92  1.61   D -0.4   0.1
segment B C
segment A B
segment A C
segment D B
segment D C
```

## Demostración

Directamente del teorema del ángulo inscrito: ambos ángulos son iguales a la mitad del arco $\widehat{CD}$. La recíproca: si $\angle CAB = \angle CDB$, el punto $D$ está sobre la circunferencia que pasa por $A$, $B$, $C$ (porque el lugar de los puntos desde donde $AB$ se ve bajo un ángulo fijo es un arco de circunferencia). $\blacksquare$

**Observación.** Si $\angle CAB = \angle CDB$ pero $A$ y $D$ están a **lados opuestos** de $BC$, entonces $\angle CAB + \angle CDB = 180°$ y los cuatro puntos son igualmente concíclicos.

---

## Criterio 3: ángulo entre cuerda y tangente

## Teorema

Si la recta $\ell$ es tangente a la circunferencia $\omega$ en $A$, y $B$, $C \in \omega$, entonces

$$\angle(AC, \ell) = \angle ABC.$$

```geofig
// Tangente ℓ = TA en A, cuerda AC, y el ángulo inscrito ABC desde el arco opuesto
size 7 7
circle 0 0 2.5
point -2.5   0     A -0.35  0.05
point  1.25  2.165 C  0.28  0.15
point  0.43 -2.46  B  0.05 -0.32
point -2.5  -1.7   T -0.35 -0.05
segment T A
segment A C
segment A B
segment C B
```

**Consecuencia para cuadriláteros:** $ABCD$ es cíclico si y solo si el ángulo entre $DA$ y la tangente en $A$ a la circunferencia $(ABC)$ es igual a $\angle ABD$.

---

## Estrategia: cómo demostrar que cuatro puntos son concíclicos

En olimpiada aparecen principalmente cuatro métodos:

| Método | Cuándo usarlo |
|---|---|
| **Ángulos opuestos suman $180°$** | Si puedes calcular los ángulos del cuadrilátero |
| **Dos ángulos iguales sobre el mismo arco** | Si hay ángulos iguales visibles (ángulos inscritos, alturas, bisectrices) |
| **Potencia de un punto constante** | Si el punto está fuera de dos círculos y los productos coinciden |
| **Cuatro puntos equidistan de un centro** | Si puedes encontrar el circuncentro directamente |

**Truco habitual.** Para demostrar que $P$, $Q$, $R$, $S$ son concíclicos, busca un ángulo que dos de los cuatro puntos «ven» igual. Por ejemplo: si $\angle QPR = \angle QSR$, entonces $P$, $Q$, $R$, $S$ son concíclicos.

---

## Ejemplos

### Ejemplo 1

**Enunciado.** Sea $ABCD$ un cuadrilátero con $\angle DAB = \angle DCB$. Demostrar que $ABCD$ es cíclico.

**Solución.** $\angle DAB = \angle DCB$ significa que $A$ y $C$ ven el segmento $DB$ bajo el mismo ángulo (desde el mismo lado). Por el criterio 2: $A$, $B$, $C$, $D$ son concíclicos. $\square$

### Ejemplo 2 (olimpiada)

**Enunciado.** En el triángulo $ABC$, la altura desde $A$ tiene pie $H$. Sea $M$ el punto medio de $BC$. Demostrar que $A$, $H$, $M$, $B'$ son concíclicos, donde $B'$ es el simétrico de $B$ respecto a $M$.

**Solución.** [Ejercicio para el lector: usar ángulos opuestos.]

### Ejemplo 3

**Enunciado.** En el cuadrilátero cíclico $ABCD$, $P$ es la intersección de las diagonales. Demostrar que $\triangle PAB \sim \triangle PCD$.

**Solución.** $\angle PAB = \angle CAB$ y $\angle PCD = \angle ACD$ son ángulos inscritos que abarcan el mismo arco $\widehat{BD}$ (visto desde $A$ y desde $C$, en el mismo lado de la cuerda $BD$), así $\angle PAB = \angle PCD$. Y $\angle APB = \angle CPD$ (opuestos por el vértice). Por **AA**: $\triangle PAB \sim \triangle PCD$. $\square$

```geofig
// Cuadrilátero cíclico ABCD; diagonales se cortan en P; △PAB ∼ △PCD
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

---

## Problemas relacionados

- **(Iniciación)** Demostrar que en el cuadrilátero cíclico $ABCD$: $\angle ABD = \angle ACD$ (ángulos sobre el mismo arco $AD$).

- **(Regional)** Sea $\triangle ABC$ con alturas $AD$, $BE$, $CF$ (cuyos pies son $D$, $E$, $F$). Demostrar que $BDHF$ es un cuadrilátero cíclico, donde $H$ es el ortocentro.

- **(Regional)** En el cuadrilátero cíclico $ABCD$, las diagonales se cortan en $P$. Demostrar que $PA \cdot PC = PB \cdot PD$.

- **(Nacional)** Sea $ABCD$ un cuadrilátero convexo con $AB \cdot CD = BC \cdot DA$. ¿Es necesariamente cíclico? Justificar.

- **(Nacional)** Sea $\omega$ una circunferencia y $A$, $B$, $C$, $D$ cuatro puntos en ese orden sobre $\omega$. Las rectas $AB$ y $CD$ se cortan en $P$, y las rectas $AD$ y $BC$ se cortan en $Q$. Demostrar que $PQ$ es el eje radical de $\omega$ y el punto $P$.
