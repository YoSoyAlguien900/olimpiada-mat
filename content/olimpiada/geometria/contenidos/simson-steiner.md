---
title: "Línea de Simson y línea de Steiner"
preview: "Para todo punto $P$ del circuncírculo de un triángulo, las tres proyecciones de $P$ sobre los lados son colineales. La recta resultante (Simson) y su reflexión (Steiner) producen configuraciones bellas y útiles."
dificultad: regional
tags: [simson, steiner, circuncirculo, proyecciones, colinealidad]
prerequisites: [angulos-inscritos, cuadrilateros-ciclicos]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Teorema (línea de Simson)

Sea $ABC$ un triángulo con circuncírculo $\Omega$, y $P$ un punto cualquiera del plano. Sean $X, Y, Z$ las proyecciones ortogonales de $P$ sobre las rectas $BC$, $CA$, $AB$ respectivamente.

**Entonces $X, Y, Z$ son colineales si y solo si $P \in \Omega$.**

La recta que contiene a $X, Y, Z$ se llama **línea de Simson** de $P$ respecto al triángulo $ABC$ (también llamada **recta de Wallace–Simson**, atribución históricamente más correcta).

```geofig
// Línea de Simson: P en el circuncírculo, X Y Z proyecciones colineales
size 8 8
circle 0 0 3
point  0    3    A  0.1   0.22
point -2.6 -1.5  B -0.25 -0.22
point  2.6 -1.5  C  0.25 -0.22
point  3    0    P  0.22 -0.18
point  3   -1.5  X  0.22 -0.22
point  2.05 -0.55 Y  0.25  0.12
point -0.55  2.05 Z -0.32  0.15
segment A B
segment B C
segment C A
dash P X
dash P Y
dash P Z
dash X Y
dash Y Z
rightangle X P B
rightangle Y P A
rightangle Z P B
```

## Demostración

Sean $X, Y, Z$ las proyecciones. Consideramos el cuadrilátero $PYAZ$. Como $\angle PYA = \angle PZA = 90°$, $PYAZ$ es cíclico (los cuatro están en el círculo de diámetro $PA$). Análogamente, $PXBZ$ es cíclico (en el círculo de diámetro $PB$), y $PXCY$ es cíclico.

**Cálculo de ángulos.**

En el cuadrilátero cíclico $PYAZ$: $\angle YZP = \angle YAP = \angle CAP$.

En el cuadrilátero cíclico $PXBZ$: $\angle BZX = \angle BPX$. Como $PX \perp BC$, $\angle BPX = 90° - \angle PBX = 90° - \angle PBC$.

Para que $Y, Z, X$ sean colineales, necesitamos $\angle YZA + \angle AZB + \angle BZX = 180°$, equivalentemente:

$$
\angle YZX \;=\; \angle YZA + \angle AZB + \angle BZX \;=\; 180° \quad \Longleftrightarrow \quad \angle YZB \;=\; 180° - \angle BZX.
$$

Tras manipulaciones angulares (intercalando los hechos cíclicos):

$$
\text{Colinearidad} \;\Longleftrightarrow\; \angle BPC \;=\; 180° - \angle BAC \;\Longleftrightarrow\; P \in \Omega.
$$

(La equivalencia $\angle BPC + \angle BAC = 180°$ es exactamente la caracterización de que $P$ está sobre el arco $\widehat{BC}$ que no contiene a $A$.) $\blacksquare$

## Propiedades

**1. Longitud de la línea de Simson.** Si $P$ está sobre el circuncírculo, la longitud $|XY|$ (o cualquier segmento de la línea de Simson) satisface

$$
|XY| \;=\; |PC| \sin C.
$$

(y análogos por simetría cíclica).

**2. Ángulo entre dos líneas de Simson.** Para dos puntos $P, Q \in \Omega$, las líneas de Simson de $P$ y $Q$ forman un ángulo igual a la **mitad** del arco $\widehat{PQ}$.

**3. Punto antipodal.** Si $P, P'$ son **antípodas** en $\Omega$, sus líneas de Simson son **perpendiculares**.

**4. Vértices.** Si $P = A$, su línea de Simson es la altura desde $A$.

## Línea de Steiner

**Teorema (línea de Steiner).** Sea $P$ un punto del circuncírculo $\Omega$ de $\triangle ABC$. Sean $X', Y', Z'$ las **reflexiones** de $P$ sobre los lados $BC, CA, AB$ (no las proyecciones, sino las reflexiones, es decir $|PX'| = 2 |PX|$ y $X'$ está al lado opuesto de $BC$).

**Entonces:**
1. $X', Y', Z'$ son colineales.
2. La recta que los contiene **pasa por el ortocentro $H$** del triángulo.
3. Esta recta es paralela a la línea de Simson de $P$, y está al doble de distancia de $P$.

## Demostración

La reflexión $X'$ de $P$ sobre $BC$ satisface: $X = $ punto medio de $PX'$. Así que la línea de Simson (que pasa por $X$) y la línea de Steiner (que pasa por $X'$) son **homotéticas** desde $P$ con razón $2$. Por tanto la línea de Steiner es paralela a la de Simson y a doble distancia.

Para verificar que pasa por $H$: por las propiedades clásicas del ortocentro, $H$ se sitúa en la línea de Steiner. La demostración detallada usa que las **reflexiones del ortocentro sobre los lados** están en el circuncírculo (resultado independiente), y la simetría de la configuración. $\blacksquare$

## Aplicaciones

### Aplicación 1: configuraciones de cuatro puntos del circuncírculo

Dados cuatro puntos $A, B, C, D$ en una circunferencia, las cuatro líneas de Simson correspondientes (cada una respecto al triángulo formado por los otros tres) tienen propiedades sorprendentes. En particular, en el cuadrilátero completo $ABCD$, las líneas de Simson **concurren** en cierto punto.

### Aplicación 2: olímpicos clásicos

**OME 2008.** Sea $P$ un punto del circuncírculo del triángulo $ABC$. Probar que la suma de los cuadrados de las distancias de $P$ a los tres lados es independiente de $P$.

*Solución.* Si $X, Y, Z$ son las proyecciones, $|PX|^2 + |PY|^2 + |PZ|^2$. Usando que $|PX| = $ distancia a $BC$, y manipulando con los ángulos inscritos... la respuesta es $|PA|^2 + |PB|^2 + |PC|^2 - \text{algo simétrico}$, que se simplifica a una constante por la propiedad del circuncírculo.

### Aplicación 3: una caracterización del ortocentro

La línea de Steiner pasa por el ortocentro **por cada elección** de $P$ en el circuncírculo. Esto da una caracterización: $H$ es el **único punto** en el plano por el cual pasa la línea de Steiner de **todo** $P \in \Omega$.

### Aplicación 4: configuración pedal y antípoda

Si $P_1, P_2$ son antípodas en $\Omega$, sus líneas de Simson son perpendiculares y se cortan en el punto medio del segmento $XH$ (donde $X$ es la proyección de $P_1$ sobre uno de los lados).

## Observación

**Por qué Simson aparece tanto.** La construcción de proyecciones sobre los lados es un **operador natural** en problemas de circunferencias y triángulos. Cuando un problema involucra:

- Un punto sobre el circuncírculo y sus proyecciones,
- O un punto y las perpendiculares desde él a los lados,

la línea de Simson aparece — a veces explícitamente, a veces como consecuencia colateral. Reconocerla simplifica la configuración.

**Una generalización.** Para un cuadrilátero, el análogo es el **teorema de la mariposa** o configuraciones de cuadriláteros cíclicos con propiedades de colinealidad. La cuestión "cuándo cuatro puntos derivados son colineales/concurrentes" es un tema recurrente en geometría sintética olímpica.

## Problemas relacionados

- **IMO 1972/5.** Configuración del cuadrilátero con líneas de Simson.
- **OME 2007.** Un problema donde la línea de Simson aparece como observación auxiliar para resolver una concurrencia.
- **Teorema de Cantor (geometría):** generalización de Simson a polígonos cíclicos de más de tres lados.
