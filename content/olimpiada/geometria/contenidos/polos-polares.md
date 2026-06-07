---
title: "Polos y polares: dualidad respecto a una circunferencia"
preview: "Dada una circunferencia $\\omega$ y un punto $P$, la polar de $P$ es una recta canónica asociada. La correspondencia $P \\leftrightarrow $ polar establece una dualidad profunda entre puntos y rectas."
dificultad: nacional
tags: [polo, polar, dualidad, conicas, proyectiva]
prerequisites: [potencia-de-un-punto, inversion]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Definición

Sea $\omega$ una circunferencia de centro $O$ y radio $r$, y sea $P \neq O$ un punto del plano. La **polar de $P$ respecto a $\omega$** es la recta perpendicular a $OP$ que pasa por el punto $P^* = $ inverso de $P$ respecto a $\omega$ (es decir, sobre la semirrecta $OP$ con $|OP| \cdot |OP^*| = r^2$).

Recíprocamente, dada una recta $\ell$ que no pasa por $O$, su **polo** es el único punto cuya polar es $\ell$.

```geofig
// Polar de P: recta perpendicular a OP por el inverso P' (con |OP|·|OP'| = r²); coincide con la recta T1T2 de los puntos de tangencia desde P
size 7 5
circle -1    0      2
point -1     0      O   -0.08  0.3
point  3     0      P    0.18  0.15
point  0     0      P'  -0.05  0.28
point  0     1.732  T1   0.16  0.12
point  0    -1.732  T2   0.16 -0.28
segment O P
segment P T1
segment P T2
dash T1 T2
```

## Caracterizaciones equivalentes

Sea $\omega$ con ecuación $x^2 + y^2 = r^2$ (centro en el origen). Para $P = (x_0, y_0)$:

**Polar de $P$:** $\;\; x_0 x + y_0 y = r^2.$

Tres caracterizaciones equivalentes:

1. **Inverso + perpendicular:** la recta perpendicular a $OP$ por el inverso de $P$ respecto a $\omega$.

2. **Tangentes (si $P$ exterior):** si $P$ es exterior a $\omega$ y trazamos las dos tangentes a $\omega$ desde $P$, tocando $\omega$ en $T_1, T_2$, entonces la polar de $P$ es la recta $T_1 T_2$.

3. **Secantes (si $P$ exterior o interior):** sean dos secantes cualesquiera por $P$ que cortan $\omega$ en $(A, A')$ y $(B, B')$. Entonces las dos diagonales del cuadrilátero $AB'A'B$ cortan la polar de $P$ en sus extremos. Equivalentemente, la polar pasa por $AB \cap A'B'$ y $AB' \cap A'B$.

## Propiedades fundamentales

### Reciprocidad (dualidad)

**Teorema (reciprocidad polar).** $Q$ está en la polar de $P$ si y solo si $P$ está en la polar de $Q$.

Esta es la **propiedad fundamental** que justifica el nombre "dualidad". Permite traducir afirmaciones sobre puntos a afirmaciones sobre rectas y viceversa.

### Demostración

Si $P = (x_0, y_0)$ y $Q = (x_1, y_1)$, entonces $Q$ está en la polar de $P$ sii $x_0 x_1 + y_0 y_1 = r^2$. Esta condición es **simétrica** en $P, Q$. Por tanto, también equivale a "$P$ está en la polar de $Q$". $\blacksquare$

### Consecuencias inmediatas

- Si tres puntos $P, Q, R$ son colineales, sus polares son **concurrentes**.
- Si tres rectas concurren, sus polos son **colineales**.

Esta es la dualidad punto-recta: "colineales" y "concurrentes" se intercambian.

## Configuración del cuadrilátero autopolar

**Teorema.** Sean cuatro puntos $A, B, C, D$ sobre una circunferencia $\omega$ formando un cuadrilátero $ABCD$. Sean:

- $P = AB \cap CD$,
- $Q = AD \cap BC$,
- $R = AC \cap BD$.

Estos tres puntos forman el **triángulo diagonal** del cuadrilátero. Entonces:

- La polar de $P$ es la recta $QR$.
- La polar de $Q$ es la recta $PR$.
- La polar de $R$ es la recta $PQ$.

Es decir, **cada uno de los tres puntos diagonales es polo del lado opuesto** del triángulo $PQR$. Esta configuración se llama **cuadrilátero autopolar**.

## Aplicaciones

### Aplicación 1: concurrencia de cevianas en cónicas

**Teorema (variante proyectiva).** Sea $\omega$ una circunferencia y $A, B, C$ tres puntos en ella. Sea $P$ un punto. Las cevianas $AP, BP, CP$ cortan $\omega$ de nuevo en $A', B', C'$. Entonces

$$
AB \cap A'B', \quad BC \cap B'C', \quad CA \cap C'A'
$$

son **colineales**. (Es el **teorema de Pascal** para hexágonos $AB'CA'BC'$.)

La demostración con polos: las tres intersecciones están en la polar de $P$.

### Aplicación 2: construcción de tangentes

**Problema:** dadas una circunferencia $\omega$ y un punto exterior $P$, construir las tangentes desde $P$.

**Solución:** construye la polar de $P$ (por intersección de secantes). Los puntos donde la polar corta $\omega$ son exactamente los puntos de tangencia.

### Aplicación 3: cuadriláteros cíclicos

Para un cuadrilátero $ABCD$ inscrito en $\omega$ y su triángulo diagonal $PQR$:

- $PQR$ es **autopolar**.
- $R$ está sobre $\omega$ si y solo si $PQ$ es tangente a $\omega$.

### Aplicación 4: problemas olímpicos

**ISL 2015/G6.** Sea $ABC$ un triángulo con circuncírculo $\omega$. Sea $P$ un punto interior. Cevianas $AP, BP, CP$ cortan $\omega$ de nuevo en $A_1, B_1, C_1$. Demostrar que $B_1C_1, A_1C_1, A_1B_1$ y los lados de $ABC$ forman cierta configuración con propiedades especiales.

*Solución con polos:* las intersecciones relevantes están sobre la polar de $P$.

**OME 2016.** Un problema clásico de cevianas concurrentes en circunferencias resuelto en dos líneas con la teoría de polos.

## Generalización: cónicas

Toda la teoría se generaliza a **cónicas** (elipse, parábola, hipérbola): la polar de $P$ respecto a una cónica se define análogamente, y las propiedades de dualidad, autopolaridad, y reciprocidad valen sin cambios.

Para una cónica con ecuación $\sum a_{ij} x_i x_j = 0$ (forma cuadrática), la polar de $(x_0, y_0, z_0)$ en coordenadas homogéneas es

$$
\sum a_{ij} x_i^{(0)} x_j \;=\; 0.
$$

Esto inicia la **geometría proyectiva**: las cónicas son **autoduales** en el plano proyectivo.

## Observación

**Pensamiento por dualidad.** Cuando un problema involucra muchos puntos y rectas en relación con una circunferencia, considera **dualizar**: convierte puntos en rectas y viceversa. Lo que era "estos tres puntos son colineales" se vuelve "estas tres rectas concurren". Frecuentemente la afirmación dual es obviamente cierta cuando la original es esquiva.

Esta técnica es **un sello distintivo de las olimpiadas internacionales de nivel alto**, especialmente desde 2010 en adelante.

## Problemas relacionados

- **Teorema de Pascal:** seis puntos en una cónica determinan tres intersecciones colineales.
- **Teorema de Brianchon** (dual): seis tangentes a una cónica determinan tres diagonales concurrentes.
- **Teorema de Desargues:** dos triángulos perspectivos centralmente lo son axialmente. Demostración elegante con polos respecto a una cónica auxiliar.
