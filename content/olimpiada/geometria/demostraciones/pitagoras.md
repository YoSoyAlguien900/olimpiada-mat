---
title: "Cuatro demostraciones del teorema de Pitágoras"
preview: "El teorema más demostrado de la historia. Una galería de cuatro pruebas, desde la disección clásica hasta la rotación, mostrando el placer de ver el mismo resultado por ojos distintos."
dificultad: iniciacion
tags: [pitagoras, demostracion, triangulo-rectangulo, historia]
prerequisites: [semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

## Teorema

**Pitágoras.** En todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos:

$$
a^2 + b^2 \;=\; c^2.
$$

## Demostración

### Demostración 1: disección de Bhaskara

Bhaskara II, matemático indio del siglo XII, presentó esta demostración con la palabra **"¡Mira!"** y un dibujo.

Tomamos un cuadrado de lado $c$ (la hipotenusa) y dibujamos en su interior cuatro triángulos rectángulos congruentes al original, dispuestos con los catetos a lo largo de los lados, dejando un pequeño cuadrado central de lado $|b - a|$.

El área del cuadrado grande es $c^2$. Por otro lado, es la suma de las áreas de los cuatro triángulos más el cuadrado central:

$$
c^2 \;=\; 4 \cdot \tfrac{1}{2}ab + (b - a)^2 \;=\; 2ab + b^2 - 2ab + a^2 \;=\; a^2 + b^2. \quad \blacksquare
$$

```geofig
// Disección de Bhaskara: cuadrado de lado c, cuatro triángulos en molinete y un cuadrado central de lado |b-a|
size 5.6 5.6
point -2.5 -2.5  A   -0.32 -0.05
point  2.5 -2.5  B    0.22 -0.05
point  2.5  2.5  C    0.22  0.18
point -2.5  2.5  D   -0.32  0.18
point  0.7 -0.1  V1   0.16  0.05
point  0.1  0.7  V2   0.05  0.2
point -0.7  0.1  V3  -0.34  0.05
point -0.1 -0.7  V4  -0.05 -0.28
segment A B
segment B C
segment C D
segment D A
segment A V1
segment B V2
segment C V3
segment D V4
segment V1 V2
segment V2 V3
segment V3 V4
segment V4 V1
```

### Demostración 2: por semejanza

Es la demostración estándar moderna.

En el triángulo rectángulo $\triangle ABC$ con ángulo recto en $C$, sea $H$ el pie de la altura desde $C$ a la hipotenusa $AB$. Los tres triángulos $\triangle ABC$, $\triangle ACH$, $\triangle CBH$ son semejantes entre sí (todos tienen los mismos ángulos $A$, $B$, $90°$ — véase la entrada *Semejanza de triángulos*).

De $\triangle ACH \sim \triangle ABC$:

$$
\frac{AC}{AB} \;=\; \frac{AH}{AC} \quad\Longrightarrow\quad AC^2 \;=\; AB \cdot AH.
$$

De $\triangle CBH \sim \triangle ABC$:

$$
\frac{BC}{AB} \;=\; \frac{BH}{BC} \quad\Longrightarrow\quad BC^2 \;=\; AB \cdot BH.
$$

Sumando:

$$
AC^2 + BC^2 \;=\; AB \cdot (AH + BH) \;=\; AB \cdot AB \;=\; AB^2. \quad \blacksquare
$$

```geofig
// H = pie de la altura desde C: los triángulos ABC, ACH, CBH son semejantes (mismos ángulos)
size 5.8 3.0
point -2.5  -1.2   A   -0.05  -0.28
point  2.5  -1.2   B    0.22  -0.28
point  0.7   1.2   C    0.05   0.22
point  0.7  -1.2   H    0.05  -0.28
segment A B
segment A C
segment B C
dash C H
rightangle C A B
rightangle H C B
```

### Demostración 3: por reordenación

Construimos dos cuadrados grandes, ambos de lado $a + b$.

**Primer cuadrado:** dividido como $a^2 + b^2 + $ (dos rectángulos de área $ab$ cada uno).

**Segundo cuadrado:** dividido con cuatro triángulos rectángulos de catetos $a, b$ dispuestos en las esquinas, dejando un cuadrado central de lado $c$.

Como ambos cuadrados tienen el mismo área $(a+b)^2$, igualando:

$$
a^2 + b^2 + 2ab \;=\; 4 \cdot \tfrac{1}{2}ab + c^2 \;=\; 2ab + c^2,
$$

y simplificando, $a^2 + b^2 = c^2$. $\blacksquare$

### Demostración 4: con rotación (vectores)

Esta es una demostración moderna que explota el producto escalar.

Sea $\vec u$ el vector cateto horizontal y $\vec v$ el cateto vertical, con $\vec u \cdot \vec v = 0$ (perpendiculares). La hipotenusa es $\vec u + \vec v$, y su módulo al cuadrado es

$$
|\vec u + \vec v|^2 \;=\; (\vec u + \vec v) \cdot (\vec u + \vec v) \;=\; |\vec u|^2 + 2\vec u \cdot \vec v + |\vec v|^2 \;=\; |\vec u|^2 + |\vec v|^2.
$$

Y con $|\vec u| = a$, $|\vec v| = b$, $|\vec u + \vec v| = c$:

$$
c^2 \;=\; a^2 + b^2. \quad \blacksquare
$$

```geofig
// u ⊥ v: la hipotenusa es u + v, y |u+v|² = |u|² + |v|² por la distributividad del producto escalar
size 3.5 2.5
point -1.5 -1   O   -0.32 -0.05
point  1.5 -1   U    0.05 -0.28
point  1.5  1   S    0.16  0.1
segment O U
segment U S
dash O S
rightangle U O S
label -0.15 -1.3  "u"
label  1.65  0.0  "v"
label -1.05  0.15 "u+v"
```

## Observación

La prueba vectorial es prácticamente **tautológica**: la propiedad fundamental del producto escalar — distributividad — es lo que da Pitágoras. Esto refleja una verdad profunda: **el teorema de Pitágoras es equivalente al postulado de las paralelas euclidiano**. En geometrías no euclidianas (esféricas, hiperbólicas) la identidad falla — y la falla mide la curvatura.

Algunas curiosidades históricas:

- El **presidente Garfield** (EE.UU., 1881) publicó una demostración propia usando un trapecio.
- Euclides la incluyó como **Proposición 47 del Libro I** de los *Elementos*, con la famosa figura del "molino de viento".
- Existe una colección, *The Pythagorean Proposition*, que recopila más de **370** demostraciones distintas.

## Generalizaciones

### Teorema del coseno (Al-Kashi)

Para un triángulo no necesariamente rectángulo, con ángulo $C$ entre los lados $a$ y $b$:

$$
c^2 \;=\; a^2 + b^2 - 2ab \cos C.
$$

Cuando $C = 90°$, $\cos C = 0$ y recuperamos Pitágoras.

### Teorema de Pitágoras en dimensiones superiores

Si $\vec u_1, \ldots, \vec u_n$ son vectores **ortogonales dos a dos**, entonces

$$
|\vec u_1 + \cdots + \vec u_n|^2 \;=\; |\vec u_1|^2 + \cdots + |\vec u_n|^2.
$$

Es la base del cálculo en espacios euclidianos $\mathbb R^n$ y, vía completación, de los espacios de Hilbert.

### Teorema de De Gua

Si un tetraedro tiene tres caras mutuamente perpendiculares en un vértice (las "tres caras del cubo"), entonces el cuadrado del área de la cuarta cara iguala la suma de los cuadrados de las áreas de las tres primeras. Es la generalización tridimensional natural.

## Problemas relacionados

- **Demostración de Da Vinci.** Construyó una elegante prueba por disección (similar a la de Bhaskara).
- **Generalización de Pappus.** Usa paralelogramos sobre los catetos en lugar de cuadrados.
