---
title: "Punto de Fermat-Torricelli y optimización geométrica"
preview: "Dados tres puntos $A, B, C$, ¿qué punto $P$ minimiza $|PA| + |PB| + |PC|$? La respuesta es el punto de Fermat-Torricelli: el único punto desde el cual los tres segmentos forman ángulos de $120°$ entre sí (cuando el triángulo es bien acotado)."
dificultad: regional
tags: [fermat, torricelli, optimizacion, minimo]
prerequisites: [trigonometria-triangulo]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## El problema

**Problema (Fermat, ~1640).** Dados tres puntos $A, B, C$ en el plano, hallar el punto $P$ que minimiza la suma de distancias

$$
f(P) \;=\; |PA| + |PB| + |PC|.
$$

## Teorema (caso general)

**Caso 1: todos los ángulos del triángulo $ABC$ son menores que $120°$.**

El punto óptimo $T$ es el **punto de Fermat-Torricelli**, caracterizado por

$$
\angle ATB \;=\; \angle BTC \;=\; \angle CTA \;=\; 120°.
$$

Equivalentemente, $T$ es el único punto del plano desde el cual los tres lados del triángulo $ABC$ se ven bajo ángulos iguales.

```geofig
// Punto de Fermat-Torricelli T: los tres ángulos en T miden 120°
size 9 7
point  0     3      A  0.05  0.3
point -3    -1.5    B -0.32 -0.05
point  3    -1.5    C  0.28 -0.05
point  0     0.232  T  0.16  0.12
segment A B
segment B C
segment C A
segment T A
segment T B
segment T C
arc 0 0.232 0.6  90 210
arc 0 0.232 0.6 210 330
arc 0 0.232 0.6 330 450
```

**Caso 2: algún ángulo del triángulo $ABC$ es $\geq 120°$ (digamos en $A$).**

El punto óptimo es el vértice $A$ mismo. (El "mínimo" se alcanza degenerado.)

## Construcción geométrica (Torricelli)

Sobre cada lado del triángulo, levantamos hacia el exterior un **triángulo equilátero**. Sean $A', B', C'$ los nuevos vértices (opuestos al lado base).

**Teorema.** Las tres rectas $AA', BB', CC'$ son **concurrentes** en un punto $T$, que es el punto de Fermat-Torricelli (cuando los ángulos del triángulo son $< 120°$).

Más aún:

- $|AA'| = |BB'| = |CC'| = |TA| + |TB| + |TC|$. (Estas tres rectas tienen la **misma longitud**, que coincide con la suma mínima de distancias).
- Las circunferencias circunscritas a los tres triángulos equiláteros pasan **todas** por $T$.

## Demostración (esbozo)

**Estrategia: rotación.**

Rotamos el plano $60°$ alrededor de $A$. Bajo esta rotación, $B$ se transforma en cierto punto $B'$ (que es el tercer vértice del triángulo equilátero $\triangle ABB'$ levantado al exterior sobre $AB$).

Cualquier punto $P$ se transforma en $P'$, con $|AP| = |AP'|$ y $\angle PAP' = 60°$. Por tanto, $\triangle APP'$ es equilátero, y $|PP'| = |AP|$.

Ahora consideremos la cadena $C \to P \to P' \to B'$. Su longitud total es

$$
|CP| + |PP'| + |P'B'| \;=\; |CP| + |PA| + |PB|.
$$

(Porque $|PP'| = |PA|$ y $|P'B'| = |PB|$ por la rotación que envía $B \to B'$ y $P \to P'$ conservando distancias.)

La cadena $C \to P \to P' \to B'$ es siempre $\geq |CB'|$ (desigualdad poligonal), con igualdad sii la cadena es una recta. Es decir, sii $C, P, P', B'$ son colineales en este orden.

La condición de colinealidad da:
- $P$ está sobre la recta $CB'$,
- $\angle CPA = 180° - 60° = 120°$ (porque $\angle APP' = 60°$),
- $\angle APB = 120°$ (por simetría análoga).

Por tanto el mínimo se alcanza cuando $\angle APB = \angle APC = 120°$ y $P$ está sobre las tres rectas $AA', BB', CC'$. Ahí $f(P) = |CB'| = |AA'| = $ longitud mínima. $\blacksquare$

## Coordenadas y fórmula

Aunque no hay una expresión cerrada sencilla en términos de $a, b, c$ para las **coordenadas** del punto de Fermat, sí hay para el **valor mínimo**:

$$
f(T)^2 \;=\; \frac{a^2 + b^2 + c^2}{2} + 2\sqrt 3 \cdot [ABC].
$$

(Donde $[ABC]$ es el área del triángulo.)

## Generalizaciones

### El problema de Weber (centro de masas ponderado)

Sea $f(P) = w_1 |PA_1| + w_2 |PA_2| + \cdots + w_n |PA_n|$ con $w_i > 0$. El punto $P^*$ que minimiza $f$ se llama el **punto de Weber** o **centro de masas geométrico** y no tiene en general una expresión cerrada — solo existe un **algoritmo iterativo** (Weiszfeld).

El caso $n = 3$, $w_i = 1$ es Fermat-Torricelli.

### El problema de Steiner

Dado un conjunto finito de puntos, encontrar la **red de Steiner** que los conecte minimizando longitud total. Para tres puntos, se reduce a Fermat-Torricelli; para más, los puntos auxiliares de Steiner (con tres aristas a $120°$) son **óptimos locales**.

### Geodésicas en superficies

En geometrías no euclídeas, el punto análogo de Fermat se define usando longitudes geodésicas. Cuestiones de existencia y unicidad se vuelven sutiles.

## Aplicaciones

### Aplicación 1: olimpíadas con minimización

**Problema típico.** Hallar el punto interior a un triángulo cuya suma de distancias a los vértices es mínima.

Si los ángulos son $< 120°$, la respuesta es el punto de Fermat; si alguno es $\geq 120°$, es el vértice correspondiente.

### Aplicación 2: tres circunferencias concurrentes

**Aplicación inmediata.** Las **tres circunferencias circunscritas a los triángulos equiláteros externos** pasan por un punto común, que es el punto de Fermat. Esto es la **base** de la construcción.

### Aplicación 3: identidad notable

**OMG 2017.** Demostrar que si $T$ es el punto de Fermat de un triángulo $ABC$ con ángulos $< 120°$, entonces

$$
|TA| + |TB| + |TC| \;=\; |AA'| \;=\; \sqrt{\frac{a^2 + b^2 + c^2}{2} + 2\sqrt 3 \cdot [ABC]}.
$$

### Aplicación 4: problemas olímpicos

**Putnam 1996 B-1.** Variante con tres puntos colineales.

**OIM 2005.** Aplicación de la construcción de Torricelli.

**Conjetura clásica:** caracterización del punto óptimo cuando los pesos $w_i$ no son iguales (no se conoce expresión cerrada para $n \geq 4$).

## Observación

**Cuándo aparece Fermat-Torricelli.**

Cualquier problema que pida:
- Minimizar una **suma de distancias** desde un punto a tres puntos fijos.
- Encontrar el punto que ve los lados de un triángulo bajo **ángulos iguales**.
- Concurrencia de **rectas asociadas a triángulos equiláteros levantados**.

es candidato a una aplicación de Fermat-Torricelli.

**Una belleza histórica.** Pierre de Fermat planteó el problema en 1640 desafiando a Evangelista Torricelli, quien dio la primera solución. Es el primer ejemplo de un **problema de optimización geométrica** no trivial en la historia de las matemáticas. Hoy se generaliza al **problema de Fermat-Weber** y tiene aplicaciones en logística, redes y diseño de circuitos.

## Problemas relacionados

- **Putnam 1996 B-1.** Citado.
- **OMG 2017.** Identidad para el mínimo.
- **Problema de Steiner para grafos:** generalización combinatoria.
- **Conjugación isogonal del punto de Fermat:** el "primer punto isogónico" tiene propiedades elegantes.
