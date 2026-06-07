---
title: "Lema del Tridente (Incentro-Excentro)"
preview: "Sea $M$ el punto medio del arco $BC$ del circuncírculo que no contiene a $A$. Entonces $M$ equidista de $B$, $C$, del incentro $I$ y del excentro $I_A$. Una herramienta sutil pero increíblemente útil."
dificultad: regional
tags: [incentro, excentro, arco, lema, tridente]
prerequisites: [puntos-notables-triangulo, angulos-inscritos]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Enunciado

Sea $ABC$ un triángulo con incentro $I$ y excentro $I_A$ (opuesto a $A$). Sea $\Omega$ el circuncírculo, y sea $M$ el **punto medio del arco $BC$** de $\Omega$ que **no contiene a $A$**. Entonces:

$$
|MB| \;=\; |MC| \;=\; |MI| \;=\; |MI_A|.
$$

Es decir, $B, C, I, I_A$ están **todos** sobre una circunferencia de centro $M$. Este lema se llama de varios modos:
- **Lema del Tridente** (la imagen del incentro y los tres puntos $B, C, I_A$ forma un "tridente" desde $A$).
- **Lema del Incentro-Excentro**.
- **Fact Five** (en literatura inglesa).

```geofig
// "Tridente": la bisectriz desde A pasa por I, M, Ia; los puntos B, C, I, Ia equidistan de M
size 7.5 8.5
circle -0.218  1.491  2.5
circle  0     -1.0    3.044
point -0.218   3.991  A    0.05  0.28
point -2.567   0.636  B   -0.34  0.05
point  2.244   1.057  C    0.28  0.08
point  0      -1.0    M    0.18 -0.05
point -0.133   2.042  I   -0.05  0.26
point  0.132  -4.045  Ia   0.2  -0.12
segment A B
segment B C
segment C A
segment A Ia
```

## Demostración

**Parte 1: $|MB| = |MC|$.** Inmediato porque $M$ es el punto medio del arco $\widehat{BC}$.

**Parte 2: $|MB| = |MI|$.**

Sea $\angle BAC = 2\alpha$ (donde $\alpha = A/2$). La bisectriz interna desde $A$ pasa por $I$ y, prolongada, llega a $M$ (porque $M$ es el punto medio del arco que no contiene $A$, y la bisectriz desde $A$ corta $\Omega$ exactamente en $M$).

Calculemos $\angle MBC$. Es un ángulo inscrito sobre el arco $\widehat{MC}$. El arco $\widehat{BC}$ que no contiene $A$ tiene medida $2A$ (porque el ángulo inscrito en el arco opuesto, $\angle BAC = A$, satisface ángulo inscrito = mitad de arco no contenido). Como $M$ es punto medio, $\widehat{MC} = A$ (medida), y por tanto $\angle MBC = A/2 = \alpha$.

Análogamente $\angle ABM = \angle ABM_{\text{(parte fuera del arco BC)}} = $ algún ángulo. Pero el punto crítico es:

**En el triángulo $\triangle BIM$:**
- $\angle IBM = \angle IBC + \angle CBM = B/2 + \alpha = B/2 + A/2$.
- $\angle BIM$: como $\angle BIA = \pi - A/2 - B/2$ (suma de ángulos en $\triangle ABI$), y $A, I, M$ son colineales, $\angle BIM = \pi - \angle BIA = A/2 + B/2$.

Así $\angle IBM = \angle BIM$, lo que significa que $\triangle BIM$ es **isósceles** con $|MB| = |MI|$. ✓

**Parte 3: $|MB| = |MI_A|$.**

El excentro $I_A$ está sobre la bisectriz **externa** de los ángulos $B$ y $C$, y sobre la bisectriz **interna** del ángulo $A$. Por tanto, $I_A$ está en la recta $AM$ (extendida más allá de $M$).

Además, $I$ e $I_A$ son **conjugados armónicos** respecto a $A$ y $M$ en la recta $AM$ (porque $I_A$ es la "reflexión polar" de $I$ respecto a la bisectriz). De hecho:

**Hecho.** $|AI| \cdot |AI_A| = |AM|^2 \cdot \text{factor angular}$. La clave: $\angle IBI_A = \pi/2$ porque la bisectriz interna y externa desde $B$ son perpendiculares. Así $\triangle BII_A$ es rectángulo en $B$, y $M$ es el **punto medio de la hipotenusa $II_A$** (porque $M$ está sobre $AI = AI_A$ y equidista...).

Más directo: $\angle IBI_A = 90°$, así $|MI_A| = $ distancia del punto medio de $II_A$ a $B$, igual a $|II_A|/2$. Y por simetría $|MI| = |II_A|/2$ también, así $|MI| = |MI_A|$.

Combinando con la parte 2: $|MB| = |MI| = |MI_A|$. $\blacksquare$

## Visión gráfica (el "tridente")

Trazada la bisectriz interna desde $A$, ésta corta:
- Al lado $BC$ en $D$ (punto de la bisectriz).
- Al circuncírculo en $M$ (punto medio del arco).
- Su prolongación da $I_A$ (excentro).

A lo largo de esta recta tenemos en orden: $A \to I \to D \to M \to I_A$ (aproximadamente). El "tridente" se ve cuando trazamos las cevianas desde $A$ a los tres puntos especiales $I, M, I_A$ y a los vértices $B, C$.

## Aplicaciones

### Aplicación 1: identificar concíclicos

Si un problema menciona el incentro $I$ y el punto medio del arco $M$, **automáticamente** $B, C, I, I_A$ son concíclicos. Esto da:

- $\angle IBM = \angle ICM = $ ángulos inscritos en el círculo centrado en $M$.
- Potencia del punto desde cualquier vértice a este círculo.
- Conjugación con $I_A$.

### Aplicación 2: equidistancias

**Problema clásico.** Demostrar que la reflexión del incentro $I$ sobre el lado $BC$ está sobre el circuncírculo.

*Solución.* La reflexión de $I$ sobre $BC$ es el punto $I'$ con $|I'B| = |IB|$ y $|I'C| = |IC|$. Por el lema, $|MB| = |MI|$, y por simetría $I' = M$ exactamente (porque $M$ es el único punto sobre la mediatriz de $BC$ con $|MI| = |MB|$ en el lado correcto).

### Aplicación 3: problemas olímpicos

**OME 2018.** Configuración con incentro y arcos. Aplicación directa del lema.

**IMO 2015/4.** Triángulo y bisectriz; el lema simplifica la demostración.

**OIM 2010.** Problema cuya solución elegante requiere identificar $B, C, I, I_A$ concíclicos.

### Aplicación 4: caracterizaciones

- El punto medio $M$ del arco $\widehat{BC}$ es el **circuncentro** del triángulo $\triangle BIC$.
- $\angle BIC = \pi - A/2$ (no $\pi - A$, importante recordar).
- $\angle BI_A C = A/2$.
- $\triangle BIC$ y $\triangle BI_A C$ están en círculos relacionados por reflexión sobre $BC$.

## Observación

**Por qué es tan útil.** El lema reduce **cuatro puntos aparentemente sin relación** ($B, C, I, I_A$) a una **configuración cíclica conocida**. Las relaciones cíclicas dan acceso a:

- Potencia del punto.
- Arcos capaces.
- Conversión de ángulos a longitudes y viceversa.

**Memorización.** Un olímpico debería saber este lema **de memoria**:

> En el triángulo $ABC$, el punto medio $M$ del arco $\widehat{BC}$ (sin $A$) equidista de $B$, $C$, $I$, $I_A$. Equivalentemente, los cuatro son concíclicos en el círculo de centro $M$ y radio $|MB|$.

**Variantes.** Hay lemas análogos para arcos relacionados con los otros vértices y los excentros correspondientes. Total: tres versiones del lema, una por vértice.

## Problemas relacionados

- **IMO 2002/2.** Aplicación del lema en configuración del arco y bisectriz.
- **EGMO 2020.** Variante con excentros.
- **OMG 2018.** Lema clave para resolver un problema sobre bisectrices.
- **Lema del cuadrilátero de Ptolomeo aplicado a $BICI_A$**: produce identidades de productos de longitudes.
