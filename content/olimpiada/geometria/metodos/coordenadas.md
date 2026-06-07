---
title: "Coordenadas: cartesianas, baricéntricas y complejas"
preview: "Cuando la geometría sintética no progresa, las coordenadas siempre funcionan. Una taxonomía de los tres sistemas más útiles en olimpiada, con cuándo usar cada uno."
dificultad: nacional
tags: [coordenadas, cartesianas, baricentricas, complejas, metodos]
prerequisites: [angulos-inscritos, semejanza]
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

## Idea general

Cualquier problema de geometría puede traducirse a un sistema de coordenadas y resolverse mediante cálculo algebraico. El precio: la elegancia. La ventaja: la **garantía** de obtener una respuesta si el problema tiene una.

Los tres sistemas más útiles en olimpiada:

## Coordenadas cartesianas

**Cuándo usar:**

- Distancias y áreas explícitas que aparecen en el enunciado.
- Configuraciones rectangulares o con muchas perpendicularidades.
- Cuando aparezcan **ecuaciones de circunferencias** explícitas.

**Idea operativa.** Sitúa el sistema de modo que las hipótesis se vuelvan simétricas o las coordenadas de puntos sean enteras pequeñas. Por ejemplo: el origen en un vértice, un eje a lo largo de un lado.

### Ejemplo

**Problema.** En un triángulo rectángulo $ABC$ con catetos $a, b$ e hipotenusa $c$, ¿qué relación cumple el radio del círculo inscrito $r$ con $a, b, c$?

**Solución coordenada.** Sitúo $A = (0, 0)$, $B = (a, 0)$, $C = (0, b)$. La hipotenusa es $\frac{x}{a} + \frac{y}{b} = 1$, o $bx + ay = ab$, con distancia a un punto $(x_0, y_0)$ dada por $|bx_0 + ay_0 - ab|/c$.

El incentro está en $(r, r)$ por simetría (a distancia $r$ de los dos ejes coordenados). Su distancia a la hipotenusa debe ser también $r$:

$$
\frac{|br + ar - ab|}{c} \;=\; r \quad\Longrightarrow\quad ab - r(a + b) \;=\; rc \quad\Longrightarrow\quad r \;=\; \frac{ab}{a + b + c}.
$$

Y con $a + b + c = 2s$ y $ab = 2[ABC]$: $r = [ABC]/s$. Recuperamos la fórmula general $r = \text{Área}/\text{semiperímetro}$. $\blacksquare$

```geofig
// A = (0,0), B = (a,0), C = (0,b): el incentro está en (r,r), a distancia r de ambos catetos
size 4.6 3.6
circle -1 -0.5 1
point -2    -1.5   A    -0.28  -0.05
point  2    -1.5   B     0.22  -0.05
point -2     1.5   C    -0.28   0.1
point -1    -0.5   I     0.16   0.05
segment A B
segment B C
segment C A
rightangle A B C
```

## Coordenadas baricéntricas

**Cuándo usar:**

- El problema involucra puntos especiales del triángulo (baricentro, ortocentro, incentro, circuncentro, etc.).
- Hay cevianas, intersecciones de cevianas, configuraciones internas al triángulo.
- Las identidades dependen de razones, no de longitudes absolutas.

**Definición.** Dado un triángulo $ABC$, todo punto $P$ del plano se representa por una terna $(u : v : w)$ con $u + v + w \neq 0$, tal que

$$
\vec P \;=\; \frac{u \vec A + v \vec B + w \vec C}{u + v + w}.
$$

Las coordenadas son **homogéneas**: $(u : v : w)$ y $(\lambda u : \lambda v : \lambda w)$ representan el mismo punto.

Puntos notables:

- **Vértices:** $A = (1:0:0)$, $B = (0:1:0)$, $C = (0:0:1)$.
- **Baricentro:** $G = (1:1:1)$.
- **Incentro:** $I = (a:b:c)$ con $a = |BC|, b = |CA|, c = |AB|$.
- **Circuncentro:** $O = (a^2(b^2+c^2-a^2) : b^2(c^2+a^2-b^2) : c^2(a^2+b^2-c^2))$.
- **Ortocentro:** $H = (\tan A : \tan B : \tan C)$.

**Ecuación de una recta:** $ux + vy + wz = 0$ en variables baricéntricas.

**Colinealidad:** tres puntos son colineales sii el determinante de sus baricéntricas es cero.

### Ejemplo

**Problema.** En un triángulo $ABC$, sea $G$ el baricentro y $D, E, F$ los puntos medios de $BC, CA, AB$. Demostrar que las medianas son concurrentes.

**Solución.** $D = (0 : 1 : 1)$, $E = (1 : 0 : 1)$, $F = (1 : 1 : 0)$.

La mediana $AD$ pasa por $A = (1:0:0)$ y $D = (0:1:1)$: su ecuación es $y - z = 0$ (anula a ambos puntos).

Similarmente, $BE$: $x - z = 0$; $CF$: $x - y = 0$.

Las tres ecuaciones se satisfacen simultáneamente en $x = y = z$, es decir, el baricentro $G = (1:1:1)$. ✓ $\blacksquare$

```geofig
// D, E, F puntos medios de los lados; las medianas AD, BE, CF concurren en G
size 4.4 3.7
point -0.2     1.6     A    0.05  0.26
point -1.9    -1.4     B   -0.34 -0.05
point  1.9    -1.6     C    0.22 -0.26
point  0      -1.5     D    0.16 -0.26
point  0.85    0.0     E    0.2   0.12
point -1.05    0.1     F   -0.36  0.1
point -0.0667 -0.4667  G    0.12 -0.05
segment A B
segment B C
segment C A
segment A D
segment B E
segment C F
```

## Coordenadas complejas

**Cuándo usar:**

- Configuraciones cíclicas (puntos en una circunferencia).
- Problemas con muchas rotaciones, reflexiones, semejanzas.
- Cuando aparezcan **espirales semejantes** o **isogonalidades**.

**Idea.** Cada punto del plano es un número complejo. La circunferencia unitaria suele ser el circuncírculo, y los vértices son $a, b, c$ con $|a| = |b| = |c| = 1$.

Identidades clave:

- **Ortocentro:** $H = a + b + c$.
- **Circuncentro:** $O = 0$ (con el circuncírculo unitario centrado en el origen).
- **Baricentro:** $G = (a + b + c)/3 = H/3$.
- **Reflexión** de $z$ sobre la cuerda $pq$ (con $|p| = |q| = 1$): $z' = p + q - pq\bar z$.
- **Producto $\bar a \cdot a = 1$** porque $|a|^2 = 1$.

### Ejemplo

**Problema.** Demostrar que $O$, $G$, $H$ son colineales (recta de Euler).

**Solución.** Con $O = 0$, $G = (a+b+c)/3$, $H = a+b+c$. Entonces $H = 3G$, y $O = 0 = 0 \cdot G$. Los tres puntos están en la recta que pasa por el origen y por $G$. $\blacksquare$

Comparemos con la prueba sintética, que requiere homotecia y triangulo medial — más bonita, pero menos automática.

## Observación

**Cuándo NO usar coordenadas.** Si el problema admite una solución sintética corta y elegante, las coordenadas son innecesarias y muchas veces enmascararán la idea geométrica. Reserva coordenadas para:

1. Problemas donde llevas $\geq 30$ minutos sin progreso sintético.
2. Cálculos finales (verificar una conjetura una vez identificada la configuración).
3. Problemas con muchas ecuaciones simultáneas que la geometría sintética hace tediosos.

**Una regla general** (Evan Chen): si el problema involucra solo *un* triángulo, prueba baricéntricas. Si la circunferencia es protagonista, prueba complejas. Si hay rectas perpendiculares en abundancia, cartesianas.

## Aplicaciones

### Aplicación 1: identidades trigonométricas

Con complejas en el circuncírculo unitario, la identidad de Ptolomeo se reduce a algebra básica con $|a - b| = $ longitud de la cuerda.

### Aplicación 2: lugares geométricos

Para describir el lugar geométrico de un punto $P(t)$ definido paramétricamente, las coordenadas son a menudo el único camino fiable.

### Aplicación 3: verificación

Una vez identificada (heurísticamente) la configuración solución, las coordenadas dan una verificación rigurosa rápida.

## Problemas relacionados

- **Teorema de los nueve puntos:** demostración limpia con complejas en el circuncírculo.
- **Teorema de Napoleón:** los baricentros de triángulos equiláteros construidos sobre los lados forman un triángulo equilátero. Demostración elegante con complejas.
- **Problema de Fermat:** punto que minimiza la suma de distancias a tres puntos dados.
