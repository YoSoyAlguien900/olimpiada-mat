---
title: "Desigualdades geométricas clásicas: Erdős–Mordell, Hadwiger–Finsler, Weitzenböck"
preview: "Tres desigualdades centrales de la geometría olímpica: Erdős–Mordell relaciona distancias desde un punto interior; Weitzenböck acota lados por área; Hadwiger–Finsler refina Weitzenböck."
dificultad: nacional
tags: [desigualdades, erdos-mordell, weitzenbock, hadwiger]
prerequisites: [trigonometria-triangulo]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Desigualdad de Erdős–Mordell

**Enunciado.** Sea $P$ un punto interior al triángulo $ABC$. Sean $d_a, d_b, d_c$ las distancias desde $P$ a los lados $BC, CA, AB$ respectivamente, y $|PA|, |PB|, |PC|$ las distancias a los vértices. Entonces

$$
|PA| + |PB| + |PC| \;\geq\; 2(d_a + d_b + d_c),
$$

con igualdad si y solo si $ABC$ es equilátero y $P$ es su centro.

```geofig
// P interior; distancias a los vértices (continuas) y a los lados (discontinuas, perpendiculares)
size 9 7
point  0    3      A   0.05  0.3
point -3   -1.5    B  -0.32 -0.05
point  3   -1.5    C   0.28 -0.05
point  0.3  0.2    P   0.16  0.12
point  0.3 -1.5    Fa   0.12 -0.3
point  1.385 0.923 Fb   0.28  0.05
point -1.2  1.2    Fc  -0.42  0.05
segment A B
segment B C
segment C A
segment P A
segment P B
segment P C
dash P Fa
dash P Fb
dash P Fc
rightangle Fa P B
rightangle Fb P C
rightangle Fc P A
```

## Demostración (esbozo)

Construcción: por cada lado, considerar la **reflexión del punto $P$** respecto a la bisectriz correspondiente; las distancias se traducen a relaciones trigonométricas.

Alternativamente, por aplicación cuidadosa del teorema de Ptolomeo a triángulos auxiliares: para cada vértice, $|PA| \geq d_b \cos\gamma + d_c \cos\beta$ donde $\beta, \gamma$ son ciertos ángulos auxiliares. Sumando las tres desigualdades análogas y usando la desigualdad de medias, se obtiene Erdős–Mordell. $\blacksquare$

## Variantes y consecuencias

**Variante producto.** Bajo las mismas hipótesis:
$$
|PA| \cdot |PB| \cdot |PC| \;\geq\; 8 \, d_a \, d_b \, d_c.
$$

**Caso del incentro.** Si $P = I$ (incentro), $d_a = d_b = d_c = r$. Entonces Erdős–Mordell da $|IA| + |IB| + |IC| \geq 6r$. Combinado con identidades del incentro, esto recupera **desigualdades clásicas** del triángulo.

## Desigualdad de Weitzenböck

**Enunciado.** En todo triángulo de lados $a, b, c$ y área $[ABC]$:

$$
a^2 + b^2 + c^2 \;\geq\; 4 \sqrt 3 \cdot [ABC],
$$

con igualdad sii el triángulo es equilátero.

## Demostración

**Por Herón y manipulación.** $16 [ABC]^2 = 2a^2 b^2 + 2b^2 c^2 + 2c^2 a^2 - a^4 - b^4 - c^4$. Comparar con $(a^2 + b^2 + c^2)^2$ y aplicar AM-GM. $\blacksquare$

Alternativamente, **por trigonometría**: $[ABC] = \frac{1}{2} ab \sin C$, $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$. Manipular hasta obtener una desigualdad sobre $\cos C$ que se reduce a un caso de AM-GM.

## Desigualdad de Hadwiger–Finsler (refinamiento)

**Enunciado.**

$$
a^2 + b^2 + c^2 \;\geq\; 4 \sqrt 3 \cdot [ABC] \;+\; (a - b)^2 + (b - c)^2 + (c - a)^2.
$$

Equivalentemente:

$$
2ab + 2bc + 2ca \;-\; (a^2 + b^2 + c^2) \;\geq\; 4 \sqrt 3 \cdot [ABC].
$$

Hadwiger–Finsler es **estrictamente más fuerte** que Weitzenböck: el término extra $(a-b)^2 + (b-c)^2 + (c-a)^2 \geq 0$ es cero solo si el triángulo es equilátero (donde ambas desigualdades coinciden con igualdad).

## Demostración (esbozo)

Usar **coordenadas trigonométricas** y la fórmula del área. La manipulación se reduce a una desigualdad de la forma:

$$
\sum \cos(A - B) \geq \frac{3}{2}
$$

donde la suma es sobre los pares de ángulos. Esto es equivalente a una desigualdad simétrica en los ángulos que se prueba por convexidad. $\blacksquare$

## Otras desigualdades importantes

### Desigualdad de Euler ($R \geq 2r$)

En todo triángulo, $R \geq 2r$ con igualdad sii equilátero. Es la **más simple** y aparece sistemáticamente.

### Desigualdad de Garfunkel–Bankoff

$$
\frac{|OI|^2}{R^2} \;=\; 1 - \frac{2r}{R} \;\leq\; 1 - \frac{2 \cdot 0}{R} \;=\; 1,
$$

así $|OI|^2 \leq R^2$. Equivalentemente, **el incentro está dentro del circuncírculo**.

### Desigualdad de Leibniz

Para todo punto $P$ del plano:

$$
|PA|^2 + |PB|^2 + |PC|^2 \;=\; 3 |PG|^2 + |GA|^2 + |GB|^2 + |GC|^2,
$$

donde $G$ es el baricentro. Esto identifica $G$ como el punto que **minimiza** $\sum |PV|^2$ (con $V$ los vértices).

### Desigualdad de Pedoe (para dos triángulos)

Sean $\triangle$ y $\triangle'$ dos triángulos con lados $a, b, c$ y $a', b', c'$, áreas $S$ y $S'$. Entonces

$$
a^2(-a'^2 + b'^2 + c'^2) + b^2(a'^2 - b'^2 + c'^2) + c^2(a'^2 + b'^2 - c'^2) \;\geq\; 16 S S'.
$$

Aplicada con $\triangle = \triangle'$, recupera Weitzenböck.

## Aplicaciones

### Aplicación 1: optimizar bajo restricciones

**Problema típico.** Demostrar que $a^2 + b^2 + c^2 \geq $ alguna expresión con $abc$ o $[ABC]$.

Si la expresión es $4\sqrt 3 [ABC]$, es Weitzenböck. Si es más complicada, considerar Hadwiger–Finsler u otra.

### Aplicación 2: identidades con igualdad

Cuando un problema **fuerza la igualdad** en Weitzenböck, deduce que el triángulo es equilátero. Esto **resuelve** muchos problemas pidiendo caracterizar triángulos con cierta propiedad.

### Aplicación 3: problemas olímpicos

**IMO 1965/2.** Aplicación de Erdős–Mordell.

**OME 2011.** Problema que se reduce a Weitzenböck tras manipulación.

**OIM 2017.** Aplicación combinada de Pedoe y desigualdad de triángulo.

### Aplicación 4: cota inferior universal

Si en un problema aparecen $a^2 + b^2 + c^2$ y $[ABC]$, **siempre** podemos invocar Weitzenböck para acotar inferiormente.

## Observación

**Memorizar las constantes clave.**

| Desigualdad | Cota |
|---|---|
| Euler | $R \geq 2r$ |
| Weitzenböck | $a^2 + b^2 + c^2 \geq 4\sqrt 3 [ABC]$ |
| Erdős–Mordell | $\sum |PV| \geq 2 \sum d_l$ |
| Hadwiger–Finsler | Weitzenböck + $\sum (a-b)^2 \geq 0$ |

**Casos de igualdad.** Todas estas desigualdades alcanzan igualdad **solo en el triángulo equilátero**. Esto es una observación profunda: el equilátero es el "punto crítico" universal de las desigualdades del triángulo.

**Estrategia para usar desigualdades.**

1. Identificar las **cantidades involucradas** ($a, b, c, R, r, [ABC]$, etc.).
2. Buscar la **forma estándar** de la desigualdad que conecta esas cantidades.
3. Aplicar la desigualdad, verificando el **caso de igualdad** para entender cuándo es óptima.

## Problemas relacionados

- **IMO 1965/2.** Erdős–Mordell.
- **IMO 1991/1.** Aplicación de Hadwiger–Finsler.
- **OIM 2014.** Desigualdades en un triángulo con condiciones angulares.
- **Conjetura abierta:** caracterización completa de las desigualdades polinómicas óptimas para el triángulo. Tema activo en investigación.
