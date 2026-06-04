---
title: "Rotohomotecia (similitud espiral) y el centro de semejanza"
preview: "Una rotohomotecia es la composición de una rotación con una homotecia desde el mismo centro. Es la transformación que envía cualquier segmento orientado a cualquier otro. Su centro aparece naturalmente en configuraciones de cuadriláteros cíclicos."
dificultad: nacional
tags: [rotohomotecia, similitud-espiral, cuadrilatero, transformacion]
prerequisites: [homotecia, semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Definición

Una **rotohomotecia** (o **similitud espiral**) con centro $O$, ángulo $\theta$ y razón $k$ es la transformación del plano que envía cada punto $P$ a $P'$ tal que:

- $|OP'| = k \cdot |OP|$ (homotecia con centro $O$, razón $k$).
- $\angle POP' = \theta$ (rotación con centro $O$, ángulo $\theta$).

Equivalentemente, en el plano complejo con $O$ como origen, una rotohomotecia es la multiplicación por $z \mapsto \alpha z$ donde $\alpha = k e^{i\theta}$.

**Casos especiales:**
- $\theta = 0$: homotecia pura.
- $k = 1$: rotación pura.
- $\theta = \pi$ y $k > 0$: equivale a homotecia con razón $-k$.

## Teorema (existencia y unicidad)

**Dados dos segmentos** $AB$ y $CD$ (con $AB \neq 0$, $CD \neq 0$), existe una **única** rotohomotecia que envía $A \mapsto C$ y $B \mapsto D$. Su centro $O$ está caracterizado por:

$$
\triangle OAB \sim \triangle OCD \quad (\text{orientación preservada}).
$$

Equivalentemente, $O$ es la intersección de los lugares geométricos: $\{P : \angle APB = \angle CPD\}$ con $\{P : |PA|/|PB| = |PC|/|PD|\}$, ambos arcos circulares.

## Construcción del centro

**Caracterización clásica.** Sea $X = AC \cap BD$ y sean $\omega_1$ el circuncírculo de $\triangle ABX$ (o de los puntos relevantes) y $\omega_2$ el de $\triangle CDX$. Entonces el centro $O$ de la rotohomotecia que envía $AB$ a $CD$ es la **segunda intersección** de $\omega_1$ y $\omega_2$ (la primera es $X$).

## Lema de la rotohomotecia

**Lema fundamental.** Sean $A, B, C, D$ cuatro puntos del plano. Sean:
- $\omega_1 = $ circuncírculo de $\triangle (A, B, AB \cap CD)$,
- $\omega_2 = $ circuncírculo de $\triangle (C, D, AB \cap CD)$.

Entonces $\omega_1$ y $\omega_2$ se cortan en el punto $X = AB \cap CD$ y en otro punto $P$, que es **el centro de la rotohomotecia que envía $AB \mapsto CD$** (y simultáneamente el de la que envía $AC \mapsto BD$).

**Corolario.** El centro de la rotohomotecia que envía $A \mapsto C$, $B \mapsto D$ coincide con el de la que envía $A \mapsto B$, $C \mapsto D$. Es decir, una rotohomotecia tiene "doble vida" en cuadriláteros.

## Demostración del lema

Sea $X = AB \cap CD$, $P = \omega_1 \cap \omega_2$ distinto de $X$.

Por estar en $\omega_1$: $P, X, A, B$ concíclicos. Por arco capaz: $\angle BPA = \angle BXA$ (o suplementario).

Por estar en $\omega_2$: $P, X, C, D$ concíclicos. $\angle DPC = \angle DXC$.

Pero $\angle BXA$ y $\angle DXC$ son ángulos opuestos por el vértice en $X$, así $\angle BXA = \angle DXC$.

Por tanto $\angle BPA = \angle DPC$.

Análogamente $\angle PAB = \angle PCD$ y $\angle PBA = \angle PDC$ por arco capaz.

Conclusión: $\triangle PAB \sim \triangle PCD$ con orientación preservada. La rotohomotecia con centro $P$ que envía $A \mapsto C$ envía también $B \mapsto D$. $\blacksquare$

## Aplicaciones

### Aplicación 1: cuadriláteros cíclicos

**Configuración estrella.** Si $ABCD$ es un cuadrilátero (no necesariamente convexo o cíclico), con diagonales que se cortan en $X$, y $P$ es el centro de la rotohomotecia que envía $AB$ a $DC$, entonces $P, X, A, B$ son concíclicos y $P, X, C, D$ son concíclicos. Los dos circuncírculos pasan por $X$ y $P$.

Esto es **un recurso muy potente** para identificar puntos concíclicos.

### Aplicación 2: detección de rotohomotecia oculta

Cuando un problema involucra dos pares de puntos $(A, B)$ y $(C, D)$ y se piden propiedades de proyecciones, perpendiculares o circuncentros relacionados, **el centro de la rotohomotecia que envía $A \to C$ y $B \to D$** suele ser un punto distinguido.

**Diagnóstico.** Si en un problema:
- Hay dos segmentos $AB$ y $CD$,
- Y se pide demostrar concurrencia de circuncírculos o cocircularidad,

prueba a buscar el centro de la rotohomotecia.

### Aplicación 3: IMO 1993/2 — el problema clásico

**Enunciado.** Sea $D$ un punto interior al triángulo acutángulo $ABC$ tal que $\angle ADB = \angle ACB + 90°$ y $AC \cdot BD = AD \cdot BC$. Calcular $\frac{|AB| \cdot |CD|}{|AC| \cdot |BD|}$.

*Idea de solución.* La igualdad $AC \cdot BD = AD \cdot BC$ se reescribe como $\frac{AD}{AC} = \frac{BD}{BC}$. Existe una rotohomotecia con centro $A$ que envía $C$ a $D$, y otra con centro $B$ que envía $C$ a $D$. Combinando con la condición angular, la configuración se desbloquea.

Respuesta: $\sqrt 2$.

### Aplicación 4: cocircularidad por rotohomotecia

**Variante de problema.** Cuatro puntos $A, B, C, D$ con propiedades específicas: ¿son concíclicos? A veces, identificar una rotohomotecia oculta entre los pares revela la respuesta.

## Identidad de Davies

**Teorema.** Sean $ABCD$ cuatro puntos. La rotohomotecia que envía $A \to C, B \to D$ tiene **mismo centro** que la que envía $A \to B, C \to D$ (y que la que envía $B \to A, D \to C$ — todas son la misma transformación al revés o lo mismo).

Esto es lo que se llama la **propiedad de la rotohomotecia "doble"** y es la base de muchos problemas.

## Observación

**Cómo reconocer una rotohomotecia oculta.**

1. Dos cuadriláteros, triángulos, o figuras "semejantes" en el problema.
2. Se piden propiedades de **circuncírculos**, **concurrencia**, o **cocircularidad**.
3. Hay una relación angular como $\angle XAY = \angle XBY$ o una proporción $|XA|/|XB| = |YA|/|YB|$.

En cualquiera de estos casos, identificar el **centro de la rotohomotecia** simplifica.

**Una palanca técnica.** Cuando un problema parece "no agarrar" desde ángulos, longitudes o potencias, **probar rotohomotecia** suele desbloquearlo. Es una herramienta de nivel olímpico avanzado pero muy versátil.

## Problemas relacionados

- **IMO 1993/2.** Citado.
- **EGMO 2018/6.** Configuración compleja resuelta con rotohomotecia.
- **APMO 2017/3.** Cocircularidad oculta vía similitud espiral.
- **ISL 2006 G4.** Otra aplicación clásica.
- **Teorema del centro de Miquel** (cuadrilátero completo): el centro de Miquel es precisamente el centro de la rotohomotecia entre los pares opuestos.
