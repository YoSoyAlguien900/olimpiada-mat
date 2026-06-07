---
title: "Homotecia y semejanzas como transformaciones"
preview: "Una homotecia es una dilatación centrada. La composición de dos homotecias es otra homotecia o una traslación. Conocer estas reglas permite resolver problemas de tangencia y alineación con elegancia."
dificultad: regional
tags: [homotecia, transformaciones, semejanza, tangencia]
prerequisites: [semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-12"
---

## Definición

Una **homotecia** de centro $O$ y razón $k \neq 0$ es la transformación $h_{O, k}: P \mapsto P'$ con $\vec{OP'} = k \vec{OP}$. Es decir, $P'$ está sobre la recta $OP$, a distancia $|k| \cdot |OP|$ de $O$, del mismo lado si $k > 0$ y del lado opuesto si $k < 0$.

```geofig
// Homotecia de centro O y razón k > 1: el triángulo ABC se transforma en A'B'C', con vértices alineados con O
size 2.5 2.9
point -1.04 -0.4    O    -0.32  -0.05
point -0.44  0.6    A    -0.32   0.05
point  0.26 -0.2    B     0.18  -0.2
point -0.64 -0.9    C    -0.32  -0.1
point -0.08  1.2    A'    0.1    0.18
point  1.04 -0.08   B'    0.18   0.05
point -0.4  -1.2    C'   -0.05  -0.26
dash O A'
dash O B'
dash O C'
segment A B
segment B C
segment C A
segment A' B'
segment B' C'
segment C' A'
```

## Propiedades

1. **Linealidad.** Una homotecia transforma rectas en rectas paralelas (o coincidentes si pasan por $O$).
2. **Conservación de ángulos.** Una homotecia es conforme.
3. **Multiplicación de longitudes.** Distancias se multiplican por $|k|$.
4. **Multiplicación de áreas.** Áreas se multiplican por $k^2$.
5. **Transforma circunferencias en circunferencias.** El centro $C$ de una circunferencia $\omega$ se mapea al centro $C'$ de $\omega'$, y el radio se multiplica por $|k|$.

## Teorema (composición)

Sean $h_1$ una homotecia de centro $O_1$ y razón $k_1$, y $h_2$ una de centro $O_2$ y razón $k_2$.

- Si $k_1 k_2 \neq 1$: $h_2 \circ h_1$ es una **homotecia de razón $k_1 k_2$** con centro en algún punto $O_3$ sobre la recta $O_1 O_2$.
- Si $k_1 k_2 = 1$: $h_2 \circ h_1$ es una **traslación** (homotecia con centro en el infinito).

## Demostración

La composición $h_2 \circ h_1$ es una transformación afín que conserva los ángulos, así que es una **homotecia o una traslación**. La razón total es $k_1 k_2$ (productos de razones). El centro se determina como punto fijo: si $P$ es centro, entonces $h_2(h_1(P)) = P$. Resolviendo:

$$
\vec{O_1 P} \cdot k_1 \to h_1(P), \quad h_1(P) = O_1 + k_1 (\vec{P - O_1}).
$$

$$
h_2(h_1(P)) = O_2 + k_2(\vec{h_1(P) - O_2}).
$$

Igualando a $P$ y despejando:

$$
P \;=\; \frac{(1 - k_2) O_2 + k_2(1 - k_1) O_1}{1 - k_1 k_2}.
$$

Esto define $O_3$ siempre que $k_1 k_2 \neq 1$. Si $k_1 k_2 = 1$, no hay punto fijo, y la composición es traslación. $\blacksquare$

## Ejemplo

### Aplicación 1: las medianas concurren

Las medianas $AM_A, BM_B, CM_C$ de un triángulo $ABC$ concurren en el baricentro $G$.

**Demostración.** Consideramos la homotecia de centro $G$ y razón $-1/2$. Aplicada a $A$, debe llevar a $M_A$ (porque $\vec{GM_A} = -\tfrac{1}{2}\vec{GA}$, por la propiedad del baricentro). De forma análoga, $B \to M_B$ y $C \to M_C$.

Esta homotecia transforma el triángulo $ABC$ en el triángulo medial $M_A M_B M_C$, dividiendo todas las distancias por 2.

```geofig
// Homotecia de centro G y razón -1/2: ABC se transforma en su triángulo medial Ma Mb Mc
size 4.4 3.7
point -0.2     1.6     A     0.05  0.26
point -1.9    -1.4     B    -0.34 -0.05
point  1.9    -1.6     C     0.22 -0.26
point  0      -1.5     Ma    0.16 -0.26
point  0.85    0.0     Mb    0.2   0.12
point -1.05    0.1     Mc   -0.36  0.1
point -0.0667 -0.4667  G     0.12 -0.05
segment A B
segment B C
segment C A
segment Ma Mb
segment Mb Mc
segment Mc Ma
dash A Ma
dash B Mb
dash C Mc
```

### Aplicación 2: dos circunferencias y la línea de centros

Dadas dos circunferencias $\omega_1$ y $\omega_2$ con centros $O_1, O_2$ y radios $r_1, r_2$, hay dos homotecias que mapean $\omega_1$ a $\omega_2$:

- **Homotecia positiva** con centro externo $P_+$ y razón $r_2/r_1$.
- **Homotecia negativa** con centro interno $P_-$ y razón $-r_2/r_1$.

Los centros $P_\pm$ están sobre la recta $O_1 O_2$ y son los puntos donde se intersecan las **tangentes comunes** (externas para $P_+$, internas para $P_-$).

```geofig
// P = centro externo (intersección de las tangentes comunes externas), Q = centro interno; ambos en la recta O1O2
size 11.5 6.7
circle -2.75 0 1
circle  2.25 0 3
point -5.25  0    P    -0.08  0.24
point -1.5   0    Q    -0.08  0.24
point -2.75  0    O1   -0.08  0.24
point  2.25  0    O2   -0.08  0.24
point  1.05  2.75 T1    0.16  0.12
point  1.05 -2.75 T2    0.16 -0.22
dash P O2
dash P T1
dash P T2
```

### Aplicación 3: el teorema de Monge

Dadas tres circunferencias $\omega_1, \omega_2, \omega_3$ en el plano (con centros y radios distintos), los tres centros externos de homotecia $P_{12}, P_{23}, P_{13}$ son **colineales**.

**Demostración.** Sea $h_{ij}$ la homotecia positiva que mapea $\omega_i \to \omega_j$. Entonces $h_{13} = h_{23} \circ h_{12}$ (ambas mapean $\omega_1 \to \omega_3$ con la misma razón $r_3/r_1$). Por el teorema de composición, el centro $P_{13}$ está sobre la recta que une $P_{12}$ y $P_{23}$. $\blacksquare$

Este teorema es uno de los más bonitos de la geometría sintética del siglo XIX, y aparece en numerosos problemas IMO/ISL.

## Observación

La **homotecia es la idea unificadora** detrás de muchos resultados que pueden parecer ad hoc:

- **Triángulo medial homotético al original** con razón $-1/2$.
- **Circunferencia de los nueve puntos**: imagen del circuncírculo bajo una homotecia.
- **Teorema de Tales**: rectas paralelas como ejes de homotecia.

Cuando dos figuras semejantes aparecen en un problema, conviene **identificar el centro y la razón de la homotecia** que las relaciona — desde ahí se siguen todas las consecuencias.

## Aplicaciones

### Identificación de tangencias

Si dos circunferencias son tangentes, el punto de tangencia es el centro de la homotecia (positiva si tangentes externamente, negativa si internamente).

### Solución del problema de Apolonio

El **problema de Apolonio** — dado: tres círculos, hallar un círculo tangente a los tres — se resuelve clásicamente con argumentos de homotecia que reducen el problema a casos elementales.

### Inversiones y homotecias

La composición de una inversión con una homotecia centrada en el centro de la inversión es a menudo más simple que cada una por separado.

## Problemas relacionados

- **Teorema de Monge** (arriba).
- **IMO 2002/2.** En un triángulo $ABC$, sea $BD$ y $CE$ las bisectrices. *(La homotecia que mapea el incentro a un excentro juega papel clave.)*
- **Conjugados isogonales:** la homotecia es un caso límite de las isogonalidades.
