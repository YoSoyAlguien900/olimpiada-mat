---
title: "Eje radical y centro radical de tres circunferencias"
preview: "Dadas dos circunferencias, el lugar geométrico de los puntos con igual potencia respecto a ambas es una recta perpendicular a la línea de centros: el eje radical. Tres circunferencias dan tres ejes que concurren en un punto."
dificultad: regional
tags: [eje-radical, centro-radical, potencia, circunferencias]
prerequisites: [potencia-de-un-punto]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Definición

Sea $\omega$ una circunferencia con centro $O$ y radio $r$. La **potencia** de un punto $P$ respecto a $\omega$ es

$$
\operatorname{pot}_\omega(P) \;=\; |PO|^2 - r^2.
$$

Es negativa si $P$ está dentro de $\omega$, cero si está sobre $\omega$, positiva si está fuera.

**Equivalencias.** Si una recta por $P$ corta a $\omega$ en $A, B$, entonces $\operatorname{pot}_\omega(P) = \overline{PA} \cdot \overline{PB}$ (con signo). Si $PT$ es tangente desde $P$ con $T \in \omega$, entonces $\operatorname{pot}_\omega(P) = |PT|^2$.

```geofig
// Potencia de P: secante PAB y tangente PT, con OT ⟂ PT
size 7.5 6
circle -1    0      2
point  -1    0      O  -0.08  0.3
point   3    0      P   0.18  0.15
point  -3    0      A  -0.42  0.05
point   1    0      B   0.16  0.18
point   0    1.732  T   0.16  0.15
segment P A
segment P T
dash O T
rightangle T O P
```

## Eje radical

**Teorema.** Dadas dos circunferencias $\omega_1, \omega_2$ no concéntricas, el lugar geométrico de los puntos $P$ con $\operatorname{pot}_{\omega_1}(P) = \operatorname{pot}_{\omega_2}(P)$ es una **recta perpendicular a la línea de centros $O_1 O_2$**. Esta recta se llama **eje radical** de $\omega_1$ y $\omega_2$.

```geofig
// Eje radical: recta perpendicular a O1O2 donde la potencia es igual
size 9 8
circle -1.5 0 1.5
circle  2   0 1.2
point -1.5  0  O1  0.18 -0.25
point  2    0  O2  0.18 -0.25
point  0.37  3.6  P  0.18  0.15
point  0.37 -3.6  Q  0.18 -0.25
segment O1 O2
dash P Q
label 1.4 3.1 "eje radical"
```

## Demostración

Sean $\omega_i$ definidas por $(x - x_i)^2 + (y - y_i)^2 = r_i^2$, o equivalentemente $x^2 + y^2 - 2x_i x - 2y_i y + (x_i^2 + y_i^2 - r_i^2) = 0$. La potencia de $P = (x, y)$ es

$$
\operatorname{pot}_{\omega_i}(P) \;=\; x^2 + y^2 - 2x_i x - 2 y_i y + x_i^2 + y_i^2 - r_i^2.
$$

Restando para $i = 1, 2$, los términos $x^2 + y^2$ se cancelan:

$$
\operatorname{pot}_{\omega_1}(P) - \operatorname{pot}_{\omega_2}(P) \;=\; -2(x_1 - x_2) x - 2(y_1 - y_2) y + \text{const}.
$$

Es una **ecuación lineal** en $(x, y)$, así que define una recta. El vector dirección de la recta perpendicular es $(x_1 - x_2, y_1 - y_2) = O_1 - O_2$. Como queremos $\operatorname{pot}_1 = \operatorname{pot}_2$, la recta está orientada perpendicular a $O_1 O_2$. $\blacksquare$

## Posiciones del eje radical

Según la posición relativa de las dos circunferencias:

- **Circunferencias secantes:** el eje radical es la **recta que pasa por los dos puntos de intersección**.
- **Circunferencias tangentes:** el eje radical es la **tangente común** en el punto de tangencia.
- **Circunferencias disjuntas:** el eje radical es una recta exterior a ambas, equidistante en cierto sentido.
- **Una circunferencia interior a otra (no tangentes):** el eje radical no corta a ninguna de las dos.

## Centro radical

**Teorema.** Dadas **tres** circunferencias $\omega_1, \omega_2, \omega_3$ cuyos centros no son colineales, los tres ejes radicales (de cada par) son **concurrentes** en un único punto, llamado **centro radical** de las tres.

## Demostración

Sea $P$ la intersección del eje radical de $\omega_1, \omega_2$ con el eje radical de $\omega_2, \omega_3$ (que existe, porque los centros no son colineales, así que los ejes no son paralelos).

En $P$: $\operatorname{pot}_{\omega_1}(P) = \operatorname{pot}_{\omega_2}(P)$ (por estar en el eje $1$-$2$) y $\operatorname{pot}_{\omega_2}(P) = \operatorname{pot}_{\omega_3}(P)$ (por estar en el eje $2$-$3$).

Por transitividad: $\operatorname{pot}_{\omega_1}(P) = \operatorname{pot}_{\omega_3}(P)$, es decir, $P$ está también en el eje radical de $\omega_1, \omega_3$. $\blacksquare$

## Ejemplo

**Ejemplo (clásico).** Sean $\omega_1, \omega_2, \omega_3$ circunferencias tangentes entre sí dos a dos en puntos distintos. Demostrar que las tres tangentes comunes en los puntos de tangencia son concurrentes.

**Solución.** Cada par $\omega_i, \omega_j$ tiene tangente común en su punto de tangencia, que es precisamente su eje radical. Por el teorema del centro radical, las tres tangentes concurren. $\blacksquare$

## Aplicaciones

### Aplicación 1: existencia del punto de Apolonio

**Problema.** Dadas tres circunferencias no concéntricas, ¿existe un punto $P$ con potencia igual respecto a las tres? Sí: el centro radical.

Si las tres son disjuntas y el centro radical $P$ está fuera, $\operatorname{pot}(P) > 0$ y $\sqrt{\operatorname{pot}(P)}$ es la longitud común de las tangentes desde $P$ a las tres circunferencias. La **circunferencia centrada en $P$ con ese radio** es **ortogonal** a las tres.

### Aplicación 2: detectar concíclicos

**Lema.** Cuatro puntos $A, B, C, D$ son concíclicos si y solo si para cualesquiera dos puntos $X, Y$ sobre las rectas $AB$ y $CD$ respectivamente (con $X = AB \cap CD$ si es el caso), $\operatorname{pot}_\Omega(X) \cdot$... — más útil: usar el inverso del **teorema de la potencia** caracterizando cuadriláteros cíclicos.

### Aplicación 3: construcciones con regla y compás

El eje radical permite construir, dadas dos circunferencias y un punto exterior, la **tangente común** sin trazar las circunferencias auxiliares de bisección.

### Aplicación 4: configuraciones tangentes

En problemas con muchas circunferencias tangentes, el centro radical de tríos suele ser un **punto distinguido** del problema. Ejemplo: en una **cadena de circunferencias mutuamente tangentes** alrededor de una circunferencia base, los centros radicales sucesivos colapsan en el centro de la circunferencia base.

### Aplicación 5: problemas olímpicos

**OME 2014.** Sean $\omega_1, \omega_2, \omega_3$ tres circunferencias con un punto común $P$. Demostrar que las tres rectas $\ell_{ij}$, cada una uniendo los otros dos puntos de intersección de $\omega_i$ y $\omega_j$ (distintos de $P$), son concurrentes.

*Esquema.* Las rectas $\ell_{ij}$ son precisamente los ejes radicales de las parejas $(\omega_i, \omega_j)$. Por el teorema, concurren en el centro radical. $\blacksquare$

## Observación

**Una visión unificada.** El conjunto de "circunferencias generalizadas en el plano" (circunferencias y rectas, las rectas son circunferencias de radio infinito) tiene una estructura algebraica natural — el **plano radical**, sobre el que el eje radical es una operación elemental.

Esto se conecta con la **geometría conforme**: la inversión preserva ejes radicales (porque preserva potencias salvo escala uniforme). En el lenguaje de Möbius, los ejes radicales son **geodésicas** en cierto modelo.

## Problemas relacionados

- **OMG 2014 (regional).** Tres circunferencias tienen un punto común y demuestran que ciertas rectas concurren. *(Aplicación directa de centro radical.)*
- **Teorema de Coaxal:** una familia de circunferencias que comparten todas un eje radical común se llama **familia coaxal**. Aparece en problemas de tangencia múltiple.
- **IMO 2014/3.** Configuración compleja resuelta elegantemente identificando un centro radical no obvio.
