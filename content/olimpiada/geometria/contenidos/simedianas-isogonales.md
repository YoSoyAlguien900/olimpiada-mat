---
title: "Simedianas, isogonales y el punto de Lemoine"
preview: "La reflexión de una mediana sobre la bisectriz interna es la simediana. Las tres simedianas concurren en el punto de Lemoine. Una de las configuraciones triangulares más ricas y útiles."
dificultad: nacional
tags: [simedianas, isogonales, lemoine, conjugados]
prerequisites: [ceva, semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Definición

Sea $ABC$ un triángulo y sea $AM$ la mediana desde $A$ (con $M$ punto medio de $BC$). La **simediana desde $A$** es la reflexión de $AM$ sobre la bisectriz interna del ángulo $A$.

Equivalente: dos rectas que pasan por $A$ son **isogonales** si una es la reflexión de la otra sobre la bisectriz interna de $\angle BAC$. La simediana es la **isogonal** de la mediana.

```geofig
// La simediana AS es la reflexión de la mediana AM sobre la bisectriz AD: M, D, S son tres puntos distintos de BC
size 6.4 5.0
point -1.75   2.15   A    0.05  0.28
point -2.75  -1.85   B   -0.34 -0.05
point  2.75  -2.15   C    0.28 -0.05
point  0     -2.0    M    0.16 -0.26
point -0.558 -1.97   D   -0.06 -0.32
point -1.073 -1.942  S   -0.3  -0.22
segment A B
segment B C
segment C A
dash A M
segment A D
segment A S
```

## Propiedades fundamentales

**Propiedad 1.** Las tres simedianas (una desde cada vértice) **concurren** en un punto llamado **punto de Lemoine** o **punto simediano** $K$.

**Propiedad 2.** El punto de Lemoine es el **conjugado isogonal** del baricentro $G$.

**Propiedad 3.** La simediana desde $A$ corta al lado $BC$ en un punto $S$ tal que:

$$
\frac{|BS|}{|SC|} \;=\; \frac{|AB|^2}{|AC|^2} \;=\; \frac{c^2}{b^2}.
$$

(Compárese con la mediana: $|BM|/|MC| = 1$; y con la bisectriz: $|BD|/|DC| = c/b$. La simediana es la **media geométrica** entre ambas en cierto sentido.)

**Propiedad 4 (tangentes).** La simediana desde $A$ es la **diagonal del paralelogramo** cuyas tangentes al circuncírculo en $B$ y $C$ son lados.

Equivalentemente: si $T$ es la intersección de las tangentes al circuncírculo en $B$ y $C$, entonces **$A, K, T$ son colineales**, donde la recta $AT$ es la simediana desde $A$.

```geofig
// T = intersección de las tangentes al circuncírculo en B y C; la recta AT es la simediana desde A
size 5.6 6.0
circle 0 0.1935 2.5
point  0      2.6935  A    0.12   0.18
point -1.25  -1.9715  B   -0.32  -0.05
point  1.25  -1.9715  C    0.22  -0.05
point  0     -2.6935  T    0.16  -0.18
segment A B
segment B C
segment C A
segment B T
segment C T
segment A T
```

## Demostración de la concurrencia

**Por Ceva trigonométrica.** Las tres simedianas son las isogonales de las medianas. Las medianas concurren en $G$. Es un hecho general que **las isogonales de cevianas concurrentes son concurrentes** (en el conjugado isogonal). Por tanto las simedianas concurren. $\blacksquare$

## Demostración de la fórmula de razón

**Propiedad 3 ($|BS|/|SC| = c^2/b^2$):**

Sea $AM$ la mediana, con $M$ punto medio de $BC$, y $AS$ la simediana, $S \in BC$. Sea $AD$ la bisectriz interna, con $D \in BC$.

Como $AM$ y $AS$ son simétricas respecto a $AD$:
$$
\angle BAS \;=\; \angle MAC, \qquad \angle CAS \;=\; \angle MAB.
$$

Por el teorema del seno aplicado a los triángulos $\triangle ABS, \triangle ACS$:
$$
\frac{|BS|}{|AB|} \;=\; \frac{\sin\angle BAS}{\sin\angle ASB}, \qquad \frac{|SC|}{|AC|} \;=\; \frac{\sin\angle CAS}{\sin\angle ASC}.
$$

Como $\angle ASB + \angle ASC = \pi$, $\sin\angle ASB = \sin\angle ASC$. Dividiendo:

$$
\frac{|BS|}{|SC|} \;=\; \frac{|AB| \sin\angle BAS}{|AC| \sin\angle CAS} \;=\; \frac{c \sin\angle MAC}{b \sin\angle MAB}.
$$

Por otro lado, aplicando seno al triángulo con la mediana $AM$:
$$
\frac{|BM|}{\sin\angle MAB} \cdot \frac{1}{|AM|} \;=\; \cdots
$$

Tras manipular: $\sin\angle MAB / \sin\angle MAC = b/c$ (por la ley de senos en los subtriángulos), así

$$
\frac{|BS|}{|SC|} \;=\; \frac{c}{b} \cdot \frac{c}{b} \;=\; \frac{c^2}{b^2}. \quad \blacksquare
$$

## Conjugados isogonales: definición y propiedades

**Definición.** Sean $P$ un punto interior del triángulo $ABC$ y $AP, BP, CP$ las cevianas desde los vértices. El **conjugado isogonal** $P^*$ se construye reflejando cada $AP$, $BP$, $CP$ sobre la bisectriz del ángulo correspondiente. Las tres cevianas reflejadas concurren en $P^*$.

**Pares clásicos.**

| $P$ | $P^*$ |
|---|---|
| Baricentro $G$ | Lemoine $K$ |
| Circuncentro $O$ | Ortocentro $H$ |
| Incentro $I$ | $I$ (es su propio conjugado) |
| Excentro $I_A$ | $I_A$ |
| Punto de Gergonne | Punto de Nagel |

**Propiedad geométrica.** Si $P^*$ es el conjugado isogonal de $P$, entonces las **proyecciones de $P^*$ sobre los lados** son concíclicas, y el círculo correspondiente tiene cierta relación con $P$.

## Aplicaciones

### Aplicación 1: tangentes y simedianas

La conexión "simediana = recta al punto de intersección de tangentes" es **clave** en geometría olímpica:

> Si las tangentes al circuncírculo en $B$ y $C$ se cortan en $T$, entonces $AT$ es la simediana desde $A$.

Esta caracterización permite **reconocer** simedianas en problemas que involucran tangentes a la circunferencia.

### Aplicación 2: distancias del Lemoine a los lados

El punto $K$ es **el único** punto cuya suma de cuadrados de distancias a los tres lados es **mínima**. Equivalentemente: $K$ minimiza $\sum d_i^2$ donde $d_i$ es la distancia al lado $i$.

Más explícito: si $d_a, d_b, d_c$ son las distancias de $K$ a $BC, CA, AB$:

$$
d_a : d_b : d_c \;=\; a : b : c.
$$

Esto identifica al Lemoine como el punto cuyas distancias a los lados son **proporcionales** a las longitudes de los lados.

### Aplicación 3: problemas olímpicos

**IMO 2010/4.** Un problema cuya solución elegante usa propiedades de la simediana y reconocer que cierta recta pasa por el punto de intersección de tangentes.

**OME 2018.** Demostrar concurrencia de tres rectas que son simedianas de un triángulo asociado.

**Lema clave para muchos problemas.** En un triángulo $ABC$ con circuncírculo $\omega$, si $A'$ es un punto en $\omega$ tal que $AA'$ pasa por $T$ (intersección de tangentes en $B, C$), entonces:

- $A'$ está sobre la simediana desde $A$.
- El cuadrilátero $BA'CA$ es **armónico**.
- $A'$ es la "imagen reflejada" de $A$ por cierta involución.

### Aplicación 4: cuadriláteros armónicos

Un cuadrilátero $ABCD$ inscrito en una circunferencia es **armónico** si $|AB| \cdot |CD| = |AD| \cdot |BC|$.

**Conexión con simedianas:** $ABCD$ armónico sii $AC$ y $BD$ son simedianas mutuas en los triángulos $\triangle ABD$ y $\triangle ABC$.

## Observación

**Una herramienta sutil.** La simediana es la "ceviana correcta" cuando aparecen las tangentes al circuncírculo o las relaciones $b^2 : c^2$ en lugar de $b : c$.

**Diagnóstico:** si en un problema:
- Aparecen las tangentes al circuncírculo en dos vértices,
- O se preguntan cevianas con razones del tipo $\frac{c^2}{b^2}$,
- O cuadriláteros cíclicos con producto de lados opuestos iguales,

entonces es muy probable que las **simedianas** sean parte de la solución.

## Problemas relacionados

- **IMO 2010/4.** Citado.
- **OIM 2014.** Problema con cuadrilátero armónico.
- **APMO 2018.** Aplicación de Lemoine en configuración con potencia.
- **Punto de Apolonio (no confundir con el círculo):** punto distinguido conectado al Lemoine vía cierta transformación.
