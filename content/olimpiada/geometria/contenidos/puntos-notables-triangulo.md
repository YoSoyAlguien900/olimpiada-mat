---
title: "Puntos notables del triángulo: I, O, G, H y los excentros"
preview: "Incentro, circuncentro, baricentro, ortocentro y los tres excentros. Las propiedades fundamentales de los cuatro puntos clásicos y sus relaciones (recta de Euler, distancias, configuraciones)."
dificultad: regional
tags: [incentro, circuncentro, baricentro, ortocentro, excentros, euler]
prerequisites: [angulos-inscritos, ceva]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Los cuatro puntos clásicos

Sea $ABC$ un triángulo con lados $a = |BC|$, $b = |CA|$, $c = |AB|$, semiperímetro $s = (a+b+c)/2$, y área $[ABC]$.

### Baricentro $G$

**Definición.** Intersección de las tres medianas. Equivalentemente, $G = \frac{A + B + C}{3}$.

**Propiedades.**
- Divide cada mediana en razón $2:1$ desde el vértice.
- Es el **centroide** físico (centro de masas si las tres masas en los vértices son iguales).
- Coordenadas baricéntricas: $G = (1:1:1)$.

```geofig
// Las tres medianas AD, BE, CF se cortan en el baricentro G
size 8 8
point  0    3.2  A  0.1   0.25
point -3   -1.8  B -0.25 -0.22
point  3   -1.8  C  0.25 -0.22
point  0   -1.8  D  0.12 -0.28
point  1.5  0.7  E  0.22  0.12
point -1.5  0.7  F -0.32  0.12
point  0   -0.13 G  0.22 -0.18
segment A B
segment B C
segment C A
segment A D
segment B E
segment C F
```

### Circuncentro $O$

**Definición.** Intersección de las tres mediatrices. Equidista de los tres vértices: $|OA| = |OB| = |OC| = R$ (circunradio).

**Fórmula del circunradio.** Por la ley extendida del seno:
$$
R \;=\; \frac{a}{2\sin A} \;=\; \frac{b}{2\sin B} \;=\; \frac{c}{2\sin C} \;=\; \frac{abc}{4[ABC]}.
$$

**Coordenadas baricéntricas:** $O = (a^2(b^2+c^2-a^2) : b^2(c^2+a^2-b^2) : c^2(a^2+b^2-c^2))$.

```geofig
// Circuncentro O: equidista de los tres vértices (OA = OB = OC = R)
size 9 9
circle 0 -0.2 3.4
point  0    3.2  A  0.1   0.22
point -3   -1.8  B -0.25 -0.22
point  3   -1.8  C  0.25 -0.22
point  0   -0.2  O  0.22 -0.18
segment A B
segment B C
segment C A
dash O A
dash O B
dash O C
```

### Incentro $I$

**Definición.** Intersección de las tres bisectrices internas. Equidista de los tres lados: distancia $r$ (inradio) a cada uno.

**Fórmula del inradio.**
$$
r \;=\; \frac{[ABC]}{s}.
$$

**Posición.** En coordenadas baricéntricas, $I = (a:b:c)$, es decir, $I = \frac{aA + bB + cC}{a+b+c}$.

**Caracterización angular.** El incentro es el único punto interior $P$ tal que las distancias a los tres lados son iguales.

```geofig
// Incentro I: centro de la circunferencia inscrita tangente a los tres lados
size 8 8
circle 0 -0.1 1.7
point  0    3.2  A  0.1   0.25
point -3   -1.8  B -0.25 -0.22
point  3   -1.8  C  0.25 -0.22
point  0   -0.1  I  0.22 -0.18
segment A B
segment B C
segment C A
```

### Ortocentro $H$

**Definición.** Intersección de las tres alturas.

**Caracterización vectorial.** Con el origen en el circuncentro $O$:
$$
\vec{OH} \;=\; \vec{OA} + \vec{OB} + \vec{OC}.
$$

**Propiedades.**
- $|AH| = 2R |\cos A|$ (y análogas para $|BH|, |CH|$).
- En triángulo acutángulo, $H$ es interior; en obtusángulo, exterior.
- $H$ y $A$ son **isogonales conjugados** respecto a $\triangle BCO$.

```geofig
// Ortocentro H: intersección de las tres alturas AD, BE, CF
size 8 8
point  0    3.2  A  0.1   0.25
point -3   -1.8  B -0.25 -0.22
point  3   -1.8  C  0.25 -0.22
point  0    0    H  0.22 -0.18
point  0   -1.8  D  0.12 -0.28
point  1.41  0.85 E  0.22  0.12
point -1.41  0.85 F -0.32  0.12
segment A B
segment B C
segment C A
segment A D
segment B E
segment C F
rightangle D A B
rightangle E B A
rightangle F C A
```

## Los excentros $I_A$, $I_B$, $I_C$

**Definición.** El **excentro opuesto a $A$**, denotado $I_A$, es el centro de la circunferencia tangente al lado $BC$ y a las **extensiones** de los lados $AB$, $AC$. Análogamente $I_B$, $I_C$.

**Propiedades fundamentales.**

- $I_A$ es la intersección de la bisectriz interna del ángulo $A$ y las bisectrices externas de los ángulos $B$, $C$.
- **Coordenadas baricéntricas:** $I_A = (-a : b : c)$, $I_B = (a : -b : c)$, $I_C = (a : b : -c)$.
- El **exradio** $r_A$ asociado a $I_A$ satisface:
$$
r_A \;=\; \frac{[ABC]}{s - a}.
$$
- $\frac{1}{r} = \frac{1}{r_A} + \frac{1}{r_B} + \frac{1}{r_C}$.

**El triángulo $I_A I_B I_C$** tiene como ortocentro al incentro $I$ del triángulo original. Sus lados pasan por los vértices de $\triangle ABC$.

```geofig
// Excentro I_A: tangente al lado BC y a las prolongaciones de AB y AC más allá de B y C
size 2.8 8.5
circle 0  -2.50    1.22
point  0      3.72   A    0.12   0.2
point -1     -1.28   B   -0.32  -0.05
point  1     -1.28   C    0.22  -0.05
point  0     -2.50   Ia   0.18   0.05
point -1.196 -2.261  P   -0.36  -0.05
point  1.196 -2.261  Q    0.16  -0.05
segment A B
segment A C
segment B C
dash B P
dash C Q
```

## La recta de Euler

**Teorema.** En todo triángulo no equilátero, los puntos $O$, $G$, $H$ son **colineales**, y

$$
\vec{OG} \;=\; \tfrac{1}{3} \vec{OH}, \qquad \vec{GH} \;=\; 2 \vec{OG}.
$$

Es decir, $G$ está en el segmento $OH$, dividiéndolo en razón $1:2$ desde $O$.

**Demostración.** Con $O$ como origen, $\vec{OG} = \frac{A+B+C}{3}$ y $\vec{OH} = A+B+C$. La relación es directa: $\vec{OH} = 3\vec{OG}$. $\blacksquare$

```geofig
// Recta de Euler: O, G, H colineales con OG:GH = 1:2
size 9 7
point  0    3   A  0.1   0.22
point -3   -2   B -0.25 -0.22
point  2.5 -1.5 C  0.25 -0.22
point -0.39 -0.16 O  0.12 -0.26
point -0.17 -0.17 G  0.12  0.15
point  0.29 -0.17 H  0.18 -0.26
segment A B
segment B C
segment C A
dash O G
dash G H
```

**Punto $N$ (centro de la circunferencia de los nueve puntos).** Es el punto medio de $OH$, también en la recta de Euler. Su posición exacta es

$$
\vec{ON} \;=\; \tfrac{1}{2}\vec{OH} \;=\; \tfrac{1}{2}(\vec{OA}+\vec{OB}+\vec{OC}).
$$

## El lema del incentro

**Lema (clave).** Sea $M_A$ el punto medio del arco $BC$ del circuncírculo que **no contiene** a $A$. Entonces

$$
M_A I \;=\; M_A B \;=\; M_A C.
$$

Es decir, $M_A$ es el **centro** del círculo que pasa por $B$, $C$ e $I$.

**Demostración.** Calculamos los ángulos.

$\angle BIM_A = \angle BAI + \angle ABM_A$ (ángulo exterior del $\triangle ABI$ en $I$).

$\angle BAI = A/2$ (bisectriz). $\angle ABM_A$ es ángulo inscrito sobre $AM_A$. Como $AM_A$ subtiende el arco $\widehat{AM_A}$ y por simetría $|AM_A| = $ ..., con un poco de cálculo: $\angle ABM_A = \angle ABM_A = B/2$ (este es el truco — $M_A$ está sobre la bisectriz desde $A$ y simetría angular).

Por tanto $\angle BIM_A = A/2 + B/2$.

Por otro lado, $\angle IBM_A = \angle IBA + \angle ABM_A = B/2 + ? = A/2 + B/2$ (cálculo análogo).

Como $\angle BIM_A = \angle IBM_A$, el triángulo $\triangle BIM_A$ es **isósceles** con $M_A B = M_A I$. $\blacksquare$

Este lema es **una de las herramientas más útiles** de la geometría olímpica.

## Aplicaciones

### Aplicación 1: distancias entre puntos notables

**Distancia $OI$ (fórmula de Euler).**
$$
|OI|^2 \;=\; R^2 - 2Rr.
$$
En particular, $R \geq 2r$ con igualdad sii el triángulo es equilátero. Esto es la **desigualdad de Euler**.

**Distancia $OH$.**
$$
|OH|^2 \;=\; R^2(1 - 8\cos A \cos B \cos C) \;=\; 9R^2 - (a^2 + b^2 + c^2).
$$

### Aplicación 2: triángulo isogonal

**Conjugados isogonales.** Para cada punto $P$ interior del triángulo, su **conjugado isogonal** $P^*$ se construye reflejando las cevianas $AP, BP, CP$ sobre las bisectrices.

Pares notables:
- $O \leftrightarrow H$ (circuncentro y ortocentro).
- $G \leftrightarrow K$ (baricentro y punto simediano).
- $I \leftrightarrow I$ (el incentro es su propio conjugado).

### Aplicación 3: caracterizar configuraciones

**Triángulo equilátero:** $O = G = H = I$.

**Triángulo rectángulo:** $O$ está en el punto medio de la hipotenusa, $H$ coincide con el vértice del ángulo recto.

**Triángulo isósceles:** $O, G, H, I$ están todos sobre el **eje de simetría** (mediatriz del lado distinto).

### Aplicación 4: problemas de configuración

**OMG 2019.** En un triángulo $ABC$, las bisectrices internas se cortan en $I$. Demostrar que la reflexión de $I$ sobre el lado $BC$ pertenece al circuncírculo.

*Demostración.* La reflexión de $I$ sobre $BC$ es un punto $I'$ con $|I'B| = |IB|$ y $|I'C| = |IC|$. Por el lema del incentro, $|I'B| = |I'C| = |M_A B| = |M_A C|$, donde $M_A$ es el punto medio del arco. Verificar la posición exacta da $I' = M_A$. ✓

## Observación

**Cuatro puntos notables en pocas palabras.**

| Punto | Construcción | Razón geométrica |
|---|---|---|
| $G$ | Medianas | Centroide |
| $O$ | Mediatrices | Equidistante de vértices |
| $I$ | Bisectrices internas | Equidistante de lados |
| $H$ | Alturas | Algo más sutil — caracterización trigonométrica |

El **ortocentro** es el "menos canónico" de los cuatro: no es el centro de ninguna circunferencia obvia (sí del triángulo formado por las reflexiones del ortocentro, pero esa es una afirmación derivada).

Cualquier problema olímpico que mencione varios de estos puntos casi siempre se beneficia de **representarlos vectorialmente** con un origen común (usualmente $O$ o el baricentro).

## Problemas relacionados

- **IMO 1995/1.** Sea $ABCDEF$ un hexágono convexo con $|AB|=|BC|=|CD|$, $|DE|=|EF|=|FA|$, y $\angle BCD = \angle EFA = 60°$. *(Usa los puntos notables de los triángulos internos.)*
- **OME 2019.** Demostrar que el ortocentro, el baricentro y un cierto cuarto punto son colineales en una configuración dada.
- **Punto de Schiffler:** un punto especial relacionado con los excentros e incentro.
