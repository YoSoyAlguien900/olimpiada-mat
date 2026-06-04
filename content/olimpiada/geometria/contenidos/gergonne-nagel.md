---
title: "Puntos de Gergonne y Nagel"
preview: "Dos puntos clásicos del triángulo: Gergonne (intersección de cevianas a los puntos de tangencia del incírculo) y Nagel (cevianas a los puntos de tangencia de los excírculos). Caso particular de Brianchon."
dificultad: regional
tags: [gergonne, nagel, cevianas, incirculo, excirculo]
prerequisites: [ceva, puntos-notables-triangulo]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Punto de Gergonne

**Definición.** Sea $ABC$ un triángulo con incírculo $\omega$ tangente a los lados $BC, CA, AB$ en los puntos $D, E, F$ respectivamente. Las tres cevianas $AD, BE, CF$ son **concurrentes**, y su punto de intersección se llama el **punto de Gergonne** $G_e$ del triángulo.

## Punto de Nagel

**Definición.** Sea $\omega_A$ el excírculo opuesto a $A$, tangente al lado $BC$ en $D'$. Análogamente $E'$ ($\omega_B$ tangente a $CA$) y $F'$ ($\omega_C$ tangente a $AB$). Las cevianas $AD', BE', CF'$ son **concurrentes**, y su punto de intersección se llama el **punto de Nagel** $N$ del triángulo.

## Demostración de la concurrencia

### Gergonne

Sea $s = (a+b+c)/2$. Los puntos de tangencia del incírculo dividen los lados en segmentos con longitudes:

$$
|BD| \;=\; s - b, \quad |DC| \;=\; s - c,
$$
$$
|CE| \;=\; s - c, \quad |EA| \;=\; s - a,
$$
$$
|AF| \;=\; s - a, \quad |FB| \;=\; s - b.
$$

Aplicamos el **teorema de Ceva** a las cevianas $AD, BE, CF$:

$$
\frac{|BD|}{|DC|} \cdot \frac{|CE|}{|EA|} \cdot \frac{|AF|}{|FB|} \;=\; \frac{s-b}{s-c} \cdot \frac{s-c}{s-a} \cdot \frac{s-a}{s-b} \;=\; 1.
$$

Por Ceva, las cevianas concurren. $\blacksquare$

### Nagel

Para el excírculo $\omega_A$, las distancias a los puntos de tangencia son:

$$
|BD'| \;=\; s - c, \quad |D'C| \;=\; s - b.
$$

Es decir, $D'$ y $D$ son **simétricos** respecto al punto medio de $BC$. Análogamente $E', F'$.

Por Ceva con estas razones invertidas:

$$
\frac{|BD'|}{|D'C|} \cdot \frac{|CE'|}{|E'A|} \cdot \frac{|AF'|}{|F'B|} \;=\; \frac{s-c}{s-b} \cdot \frac{s-a}{s-c} \cdot \frac{s-b}{s-a} \;=\; 1.
$$

Concurren. $\blacksquare$

## Relaciones notables

### Conjugación isotómica

Los puntos $D$ y $D'$ son **simétricos** respecto al punto medio de $BC$ (ambos a distancia $s-b, s-c$ del par $B, C$, en orden opuesto). Las cevianas $AD$ y $AD'$ son **isotómicas** (la una es la reflexión de la otra respecto a la mediana desde $A$).

Por tanto:

> **Gergonne y Nagel son conjugados isotómicos.**

### Relación con incentro

El punto de Nagel $N$ tiene una propiedad notable:

$$
\vec{GN} \;=\; 2 \vec{GI},
$$

donde $G$ es el baricentro e $I$ el incentro. Equivalentemente, $G, I, N$ son **colineales** con $I$ dividiendo $GN$ en razón $1:2$ desde $G$. Esta línea se llama la **recta de Nagel**.

### Coordenadas baricéntricas

$$
G_e \;=\; \left(\frac{1}{s-a} : \frac{1}{s-b} : \frac{1}{s-c}\right),
$$

$$
N \;=\; (s-a : s-b : s-c).
$$

(Hay que ajustar signos en caso de coordenadas no normalizadas, pero la estructura es ésta.)

## Vinculación con Brianchon

**Observación crucial.** Las cevianas $AD, BE, CF$ son las **diagonales** del hexágono "$ABC$ con tangencia interna" si pensamos el triángulo como hexágono circunscrito al incírculo. Por el **teorema de Brianchon**, las diagonales concurren. Así Gergonne es un **caso particular** del teorema de Brianchon.

Análogamente, las cevianas del punto de Nagel corresponden al hexágono del triángulo circunscrito al excírculo. Brianchon de nuevo.

## Aplicaciones

### Aplicación 1: cálculos de área

**Lema.** El área de los triángulos $\triangle BDG_e, \triangle CEG_e, \triangle AFG_e$ son proporcionales a $\frac{1}{(s-a)(s-b)}, \frac{1}{(s-b)(s-c)}, \frac{1}{(s-c)(s-a)}$ respectivamente.

Esto permite cálculos de área en problemas que involucran las cevianas del incírculo.

### Aplicación 2: problemas olímpicos

**OMG 2018.** Aplicación de la conjugación isotómica de Gergonne/Nagel.

**OME 2010.** Problema sobre la recta de Nagel.

**IMO Shortlist 2007 G2.** Configuración resoluble vía las tangencias del excírculo.

### Aplicación 3: razón de Nagel

Una identidad elegante:

$$
\frac{|AN|}{|N D'|} \;=\; \frac{s}{s - a}.
$$

Esto da una razón explícita de división.

### Aplicación 4: caracterización

**Problema típico.** Demostrar que las tres cevianas a los puntos de tangencia del incírculo dividen el triángulo en seis regiones cuyas áreas tienen razones específicas.

*Vía Gergonne.* Calcular las áreas directamente usando las razones $s-a, s-b, s-c$.

## Observación

**Gergonne y Nagel: una pareja conjugada.** Aparecen siempre juntos en la literatura por su **dualidad isotómica**. Cuando un problema menciona uno, considera el otro.

**Tres puntos relacionados clave.**

| Punto | Cevianas | Punto de tangencia |
|---|---|---|
| Gergonne $G_e$ | Vértices a tangentes del **incírculo** | $D, E, F$ del incírculo |
| Nagel $N$ | Vértices a tangentes de los **excírculos opuestos** | $D', E', F'$ de los excírculos |
| Baricentro $G$ | Vértices a los **puntos medios** | $M_a, M_b, M_c$ |

El baricentro es el "intermedio" entre Gergonne y Nagel en cierto sentido (ambos lo tienen como conjugado isotómico solo si el triángulo es equilátero).

**No confundir $N$ (Nagel) con $N$ (centro de los nueve puntos).** Notación coincidente, contextos distintos.

## Problemas relacionados

- **OME 2010.** Recta de Nagel.
- **OMG 2018.** Configuración con punto de Gergonne.
- **Teorema del punto de Mittenpunkt:** otro punto del triángulo relacionado con los excírculos.
- **Generalización a cuadriláteros:** cuándo un cuadrilátero tiene un análogo de "punto de Gergonne" (involve un incírculo).
