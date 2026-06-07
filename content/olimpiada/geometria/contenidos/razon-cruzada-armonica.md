---
title: "Razón cruzada y cuaternas armónicas"
preview: "La razón cruzada de cuatro puntos alineados $(A, B; C, D)$ es un invariante proyectivo: se preserva bajo proyecciones y, en particular, bajo inversión. Cuando vale $-1$, los puntos son armónicos."
dificultad: nacional
tags: [razon-cruzada, armonica, proyectiva, polo, polar]
prerequisites: [polos-polares, semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Definición

Sean $A, B, C, D$ cuatro puntos distintos sobre una recta. Su **razón cruzada** es

$$
(A, B; C, D) \;=\; \frac{\overline{CA}}{\overline{CB}} \cdot \frac{\overline{DB}}{\overline{DA}},
$$

donde $\overline{XY}$ denota la **longitud orientada** (signo según orientación de la recta).

Equivalentemente, fijando un origen en la recta y considerando coordenadas $a, b, c, d$:

$$
(A, B; C, D) \;=\; \frac{(c-a)(d-b)}{(c-b)(d-a)}.
$$

```geofig
// Cuatro puntos colineales A, B, C, D: su razón cruzada (A,B;C,D) es el invariante fundamental
size 6.5 2.4
point -2.75  0   A  -0.05  0.32
point -0.75  0   B  -0.05  0.32
point  1.25  0   C  -0.05  0.32
point  2.75  0   D  -0.05  0.32
segment A D
```

## Razón cruzada de un haz de rectas

Sea $P$ un punto y $\ell_1, \ell_2, \ell_3, \ell_4$ cuatro rectas por $P$. Su **razón cruzada** se define como el valor común $(A, B; C, D)$ cuando $A, B, C, D$ son las intersecciones de las rectas con **cualquier** transversal — y este valor **no depende** de la transversal.

Equivalentemente, en función de los ángulos:

$$
(\ell_1, \ell_2; \ell_3, \ell_4) \;=\; \frac{\sin(\ell_3, \ell_1)}{\sin(\ell_3, \ell_2)} \cdot \frac{\sin(\ell_4, \ell_2)}{\sin(\ell_4, \ell_1)}.
$$

## Invariancia bajo proyección

**Teorema (fundamental).** Sean $A, B, C, D$ cuatro puntos colineales en una recta $\ell_1$. Sea $P$ un punto exterior a $\ell_1$, y proyectemos $A, B, C, D$ desde $P$ sobre otra recta $\ell_2$, obteniendo $A', B', C', D'$. Entonces

$$
(A, B; C, D) \;=\; (A', B'; C', D').
$$

```geofig
// Proyección desde P de A,B,C,D ∈ ℓ1 hacia A',B',C',D' ∈ ℓ2: la razón cruzada se conserva
size 10.5 6.5
point  0.917  2.75   P    0.05  0.26
point -2.083 -0.25   A   -0.05  0.26
point -0.083 -0.25   B   -0.05  0.26
point  1.417 -0.25   C   -0.05  0.26
point  2.917 -0.25   D   -0.05  0.26
point -4.583 -2.75   A'  -0.08 -0.32
point -0.917 -2.75   B'  -0.08 -0.32
point  1.833 -2.75   C'  -0.08 -0.32
point  4.583 -2.75   D'  -0.08 -0.32
dash P A'
dash P B'
dash P C'
dash P D'
segment A D
segment A' D'
```

**Demostración.** Aplicar la ley de senos en los triángulos $\triangle PAC$, etc. y simplificar. La igualdad de ángulos vistos desde $P$ es el ingrediente clave. $\blacksquare$

## Cuaternas armónicas

**Definición.** Cuatro puntos colineales $A, B, C, D$ forman una **cuaterna armónica** si $(A, B; C, D) = -1$. Decimos también que $D$ es el **conjugado armónico** de $C$ respecto a $A$ y $B$.

**Equivalencias:**

$$
(A, B; C, D) = -1 \;\Longleftrightarrow\; \frac{|CA|}{|CB|} = \frac{|DA|}{|DB|} \text{ con } C, D \text{ separando vs no separando } A, B.
$$

## Propiedades

### Permutaciones

Las $24$ permutaciones de cuatro puntos producen solo **seis** valores distintos de razón cruzada. Si $r = (A, B; C, D)$, los seis valores son:

$$
r, \quad \frac{1}{r}, \quad 1 - r, \quad \frac{1}{1-r}, \quad \frac{r-1}{r}, \quad \frac{r}{r-1}.
$$

### Cuaternas armónicas y polos

**Conexión fundamental con polos y polares.** Sean $A, B$ dos puntos de una circunferencia $\omega$ y $C, D$ dos puntos colineales con $A, B$. Entonces

$$
(A, B; C, D) \;=\; -1 \;\Longleftrightarrow\; C \text{ y } D \text{ son conjugados respecto a } \omega.
$$

Es decir, $C$ está en la polar de $D$ (y recíprocamente, por la dualidad polar).

### Cuaternas armónicas y bisectrices

**Lema clave.** En un triángulo $ABC$, las bisectrices interna y externa desde $A$ cortan al lado $BC$ (extendido) en dos puntos $D$ (interna) y $E$ (externa). Entonces

$$
(B, C; D, E) \;=\; -1.
$$

Es decir, $D$ y $E$ son conjugados armónicos respecto a $B, C$.

**Demostración.** Por el teorema de la bisectriz interna: $|BD|/|DC| = c/b$. Por el de la bisectriz externa: $|BE|/|EC| = -c/b$ (con signo opuesto). El producto:

$$
\frac{|BD|}{|DC|} \cdot \frac{|EC|}{|EB|} \;=\; \frac{c}{b} \cdot \frac{b}{-c} \;=\; -1. \quad \blacksquare
$$

```geofig
// Bisectrices interna y externa desde A cortan a la recta BC en D, E: (B,C;D,E) = -1
size 7.6 2.5
point -0.964  1.0    A   -0.05  0.28
point -0.984 -0.5    B   -0.1  -0.32
point  3.016 -1.0    C    0.22 -0.05
point  0.024 -0.626  D    0.08  0.26
point -3.016 -0.246  E   -0.08  0.26
segment A B
segment A C
segment B C
segment A D
segment A E
dash E B
```

### Configuraciones armónicas clásicas

**Cuadrilátero completo.** Las **tres diagonales** del cuadrilátero completo determinan cuaternas armónicas con los lados: $A, B, X, Y$ donde $X, Y$ son las intersecciones diagonales. Este es **el origen** del concepto de "armónico" en geometría proyectiva.

## Aplicaciones

### Aplicación 1: detección de polaridad

Si en un problema aparece "$C$ está en la polar de $D$ respecto a $\omega$", podemos sustituir por "$(A, B; C, D) = -1$" con $A, B$ las intersecciones de $CD$ con $\omega$ — y viceversa.

Esta traducción es **una de las llaves maestras** de la geometría proyectiva olímpica.

### Aplicación 2: invariancia bajo proyecciones

Si un problema involucra varias proyecciones desde un punto a otra recta, la razón cruzada se **conserva**. Esto permite "transportar" la información a través de la configuración sin perder precisión.

### Aplicación 3: cuadriláteros armónicos en circunferencia

Un cuadrilátero cíclico $ABCD$ es **armónico** si $|AB| \cdot |CD| = |AD| \cdot |BC|$. Equivalentemente, las tangentes en $A$ y $C$ se cortan en un punto sobre la recta $BD$ (o las tangentes en $B$ y $D$ sobre la recta $AC$).

Los cuadriláteros armónicos son **fundamentales** en muchos problemas porque conectan tangencia, razón cruzada y simedianas.

### Aplicación 4: problemas olímpicos

**IMO 2012/1.** El excentro y la armonía de las bisectrices internas/externas.

**EGMO 2019.** Problema con configuración armónica oculta.

**APMO 2018/4.** Aplicación de invariancia bajo proyecciones.

## Observación

**Lenguaje proyectivo.** La razón cruzada y las cuaternas armónicas son el **vocabulario nativo** de la geometría proyectiva. Cuando un problema parece "demasiado preciso" — todo encaja exactamente con razón $-1$, ciertos puntos están colineales, ciertas rectas concurren — es señal de que la **estructura proyectiva** subyacente es lo que está hablando.

**Diagnóstico rápido.** Si en un problema:
- Aparecen las **bisectrices interna y externa** desde un mismo vértice,
- O **dos pares** de cevianas con razón inversa,
- O un cuadrilátero cíclico con producto de lados opuestos iguales,
- O un cuadrilátero completo,

entonces hay (probablemente) una cuaterna armónica relevante.

## Problemas relacionados

- **IMO 1995/1.** Cuaterna armónica en una configuración cíclica.
- **OIM 2007.** Aplicación de razón cruzada en triángulos perspectivos.
- **Teorema de Steiner-Lehmus:** un triángulo con dos bisectrices iguales es isósceles. Demostración elegante vía cuaternas armónicas.
- **Generalización a cónicas:** la razón cruzada se generaliza a cuatro puntos en una cónica, igualmente proyectivamente invariante.
