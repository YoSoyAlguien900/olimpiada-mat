---
title: "Teorema de Carnot: criterio para perpendiculares concurrentes"
preview: "Tres rectas, cada una perpendicular a un lado del triángulo desde un punto, concurren si y solo si una identidad de cuadrados de distancias se satisface. Un criterio limpio y muy útil."
dificultad: regional
tags: [carnot, perpendiculares, concurrencia, distancias]
prerequisites: [pitagoras]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Teorema

Sean $ABC$ un triángulo y $X \in BC$, $Y \in CA$, $Z \in AB$ tres puntos. Las perpendiculares a los lados levantadas en $X, Y, Z$ son **concurrentes** si y solo si

$$
|BX|^2 - |XC|^2 \;+\; |CY|^2 - |YA|^2 \;+\; |AZ|^2 - |ZB|^2 \;=\; 0.
$$

(Aquí, las longitudes están medidas con signo, y la condición se puede reescribir como una identidad de **diferencias de cuadrados**.)

## Demostración

**(⇒)** Supongamos que las tres perpendiculares concurren en un punto $P$. Por el **teorema de Pitágoras** aplicado a $\triangle PXB$ y $\triangle PXC$ (rectos en $X$):

$$
|PB|^2 \;=\; |PX|^2 + |XB|^2, \qquad |PC|^2 \;=\; |PX|^2 + |XC|^2.
$$

Restando:
$$
|PB|^2 - |PC|^2 \;=\; |XB|^2 - |XC|^2.
$$

Análogamente $|PC|^2 - |PA|^2 = |YC|^2 - |YA|^2$ y $|PA|^2 - |PB|^2 = |ZA|^2 - |ZB|^2$.

Sumando las tres:
$$
0 \;=\; (|XB|^2 - |XC|^2) + (|YC|^2 - |YA|^2) + (|ZA|^2 - |ZB|^2). \quad \checkmark
$$

**(⇐)** Sean las dos primeras perpendiculares (en $X$ e $Y$): se cortan en un punto $P$. Por el cálculo anterior aplicado a $X, Y$:

$$
|PB|^2 - |PA|^2 \;=\; (|XB|^2 - |XC|^2) + (|YC|^2 - |YA|^2).
$$

Por la hipótesis del teorema, esto es igual a $-(|AZ|^2 - |ZB|^2) = |ZB|^2 - |AZ|^2$.

Por tanto, $|PB|^2 - |PA|^2 = |ZB|^2 - |ZA|^2$. Pero esta condición caracteriza que **la perpendicular a $AB$ por $Z$ pasa por $P$** (porque cualquier punto $Q$ sobre tal perpendicular satisface $|QB|^2 - |QA|^2 = |ZB|^2 - |ZA|^2$).

Conclusión: las tres perpendiculares concurren en $P$. $\blacksquare$

## Forma trigonométrica

Hay una versión usando ángulos. Para perpendiculares **desde los vértices** que cortan los lados opuestos:

Si $X = $ pie de la perpendicular desde $A$, $Y = $ desde $B$, $Z = $ desde $C$ (en este caso son las **alturas**), entonces siempre concurren (en el ortocentro). Carnot generaliza a perpendiculares **arbitrarias**.

## Casos particulares

### Caso 1: alturas

Las **alturas** son perpendiculares a los lados desde puntos especiales (los pies, en los lados). Verificación: con $X, Y, Z$ los pies de las alturas, la identidad de Carnot se cumple automáticamente, lo que da la **existencia del ortocentro** como aplicación inmediata.

### Caso 2: mediatrices

Las **mediatrices** son perpendiculares a los lados por los puntos medios. Si $X, Y, Z$ son los puntos medios:

$$
(|BX|^2 - |XC|^2) + (|CY|^2 - |YA|^2) + (|AZ|^2 - |ZB|^2) \;=\; 0 + 0 + 0 \;=\; 0.
$$

(Cada término se anula por la definición de punto medio.) Por Carnot, las mediatrices concurren — recuperando la existencia del **circuncentro**.

### Caso 3: perpendiculares por puntos especiales

**Lema (Stewart-Carnot).** Sea $P$ un punto interior al triángulo. Las perpendiculares a los lados levantadas en los pies de las perpendiculares **desde $P$** concurren (obviamente, en $P$ mismo). El interés está en perpendiculares **levantadas en otros puntos**.

## Aplicaciones

### Aplicación 1: el ortocentro como caso particular

La existencia del **ortocentro** es una consecuencia directa de Carnot. Las tres alturas son perpendiculares a los lados desde los pies (que son puntos específicos), y la identidad de Carnot se verifica.

### Aplicación 2: el circuncentro como caso particular

Como se vio arriba, las mediatrices concurren por Carnot trivialmente.

### Aplicación 3: configuraciones especiales

**Problema típico.** Demostrar que en cierta configuración (con puntos $X, Y, Z$ definidos por construcción geométrica), las perpendiculares concurren.

**Estrategia.** Calcular $|BX|^2 - |XC|^2$ usando datos del problema (potencias, semejanzas) y verificar la identidad de Carnot.

### Aplicación 4: problemas olímpicos

**OME 2013.** Configuración con tres perpendiculares cuya concurrencia se demuestra vía Carnot.

**IMO Shortlist 1996 G4.** Problema con perpendiculares en puntos definidos por circunferencias auxiliares.

## Observación

**Cuándo aplicar Carnot.**

✅ Aparecen **tres rectas perpendiculares** a los lados del triángulo en puntos específicos.
✅ Se piden propiedades de **concurrencia** sin ángulos en juego directo.
✅ Las **distancias al cuadrado** son accesibles (por potencias, Pitágoras, etc.).

❌ Si las rectas no son perpendiculares a los lados, considera **Ceva** (forma trigonométrica o estándar).

**Carnot vs Ceva.** Ambos teoremas son **criterios de concurrencia**, pero para tipos distintos de rectas:

- **Ceva:** rectas desde los vértices a los lados opuestos (cevianas).
- **Carnot:** rectas perpendiculares a los lados desde puntos en los lados.

Saber cuál aplicar es **fundamental** en problemas de concurrencia.

## Problemas relacionados

- **OME 2013.** Citado.
- **IMO 2003/4.** Configuración con perpendiculares; aplicación indirecta.
- **Teorema de la mediatriz extendida:** cualquier punto en la mediatriz de un segmento equidista de los extremos. Es la "versión local" de Carnot.
- **Generalización vectorial:** la identidad de Carnot se expresa elegantemente con productos escalares y direcciones perpendiculares.
