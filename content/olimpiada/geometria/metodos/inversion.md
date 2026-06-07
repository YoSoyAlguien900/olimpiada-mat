---
title: "Inversión: una transformación que linealiza circunferencias"
preview: "La inversión convierte circunferencias en rectas (y viceversa), revelando estructuras lineales ocultas en configuraciones aparentemente complejas."
dificultad: nacional
tags: [inversion, transformaciones, circunferencias]
prerequisites: [potencia-de-un-punto, semejanza]
author: "Adrián García Bouzas"
updated: "2026-01-13"
---

La **inversión** es una transformación no lineal del plano que tiene la propiedad casi milagrosa de convertir circunferencias en rectas. Esta característica la vuelve la herramienta natural para problemas con muchas circunferencias, tangencias y concurrencias.

## Definición

Sea $O$ un punto del plano y $r > 0$ un número real. La **inversión** de centro $O$ y radio $r$ es la transformación $\iota: \mathbb{R}^2 \setminus \{O\} \to \mathbb{R}^2 \setminus \{O\}$ definida por:

$$
\iota(P) = P', \quad \text{donde } P' \text{ está sobre el rayo } OP \text{ y } OP \cdot OP' = r^2.
$$

Equivalentemente, en coordenadas, si $O$ es el origen,

$$
\iota(\mathbf{x}) = \frac{r^2}{|\mathbf{x}|^2} \mathbf{x}.
$$

```geofig
// Inversión de centro O y radio r: P (exterior a ω) y su imagen P' (interior), con OP · OP' = r²
size 5.6 4.6
circle -0.4335 -0.004 2
point -0.4335 -0.004  O    -0.32  -0.05
point  2.4335  2.004  P     0.1    0.2
point  0.5025  0.651  P'    0.12   0.15
segment O P
```

## Propiedades fundamentales

**P1.** $\iota$ es involutiva: $\iota \circ \iota = \operatorname{id}$.

**P2.** Si $P$ está fuera de la **circunferencia de inversión** $\omega = \{X : OX = r\}$, entonces $\iota(P)$ está dentro, y viceversa. Los puntos sobre $\omega$ son fijos.

**P3.** *Fórmula de distancia bajo inversión.* Para dos puntos $A, B \neq O$ con imágenes $A', B'$:
$$
A'B' = \frac{r^2 \cdot AB}{OA \cdot OB}.
$$

**P4.** *Imagen de rectas y circunferencias.*

| Objeto | Pasa por $O$? | Imagen |
|---|---|---|
| Recta | Sí | La misma recta |
| Recta | No | Circunferencia por $O$ |
| Circunferencia | Sí | Recta no pasante por $O$ |
| Circunferencia | No | Circunferencia |

```geofig
// Una recta ℓ que no pasa por O se transforma en una circunferencia ω' que sí pasa por O
size 7 3.6
circle 0 -0.833 0.667
point -3       1.5     E1    -0.08  0.24
point  3       1.5     E2     0.05  0.24
point  0      -1.5     O     -0.08 -0.05
point -2       1.5     A     -0.05  0.24
point -0.6154 -0.5769  A'     0.14 -0.05
segment E1 E2
dash O A
label -0.15  1.95 "ℓ"
```

**P5.** La inversión **preserva ángulos** (es conforme). En particular, tangencias se preservan.

## Demostración (P3)

Por la propia definición, $OA \cdot OA' = OB \cdot OB' = r^2$, luego

$$
\frac{OA'}{OB} = \frac{r^2 / OA}{OB} = \frac{r^2}{OA \cdot OB} = \frac{OB'}{OA}.
$$

Esto muestra que los triángulos $OAB$ y $OB'A'$ son **semejantes** (comparten el ángulo en $O$ y los lados adyacentes son proporcionales en razón inversa). De la semejanza:

$$
\frac{A'B'}{AB} = \frac{OA'}{OB} = \frac{r^2}{OA \cdot OB}. \qquad \square
$$

## Estrategia: cuándo invertir

Invertir simplifica una configuración cuando hay **muchas circunferencias por un mismo punto** $P$. Centrando la inversión en $P$:

- Todas las circunferencias por $P$ se vuelven **rectas**, fáciles de manipular.
- Las circunferencias que no pasan por $P$ siguen siendo circunferencias.
- Tangencias se preservan, ángulos se preservan.

El problema, originalmente sobre circunferencias, se transforma en uno sobre rectas y circunferencias en posición más simple. Resolverlo allí y luego "deshacer" la inversión.

## Ejemplo

**Problema.** Tres circunferencias $\omega_1, \omega_2, \omega_3$ pasan por un punto común $P$ y se cortan dos a dos en otros puntos $A_{12}, A_{13}, A_{23}$. Probar que los puntos $A_{12}, A_{13}, A_{23}$ son colineales si y sólo si las tres circunferencias tienen un segundo punto común.

```geofig
// Tres circunferencias por P, con segundas intersecciones A12, A13, A23
size 6.6 7.1
circle  1.2795  0.644   1.581
circle -1.2205  1.444   1.640
circle  0.0795 -1.456   1.628
point -0.2205  0.144   P     -0.32  -0.05
point  0.3485  1.922   A12    0.1    0.2
point  1.6105 -0.902   A13    0.18  -0.05
point -0.9155 -0.168   A23   -0.46  -0.05
segment A12 A13
segment A13 A23
segment A23 A12
```

*Solución.* Invertimos respecto a $P$ con radio cualquiera. Las tres circunferencias se vuelven tres **rectas** $\ell_1, \ell_2, \ell_3$. Los puntos $A_{ij}$ se transforman en las intersecciones $\ell_i \cap \ell_j$.

- Si $A_{12}, A_{13}, A_{23}$ son colineales, sus imágenes lo siguen siendo. Pero $\ell_1 \cap \ell_2$, $\ell_1 \cap \ell_3$ y $\ell_2 \cap \ell_3$ son los tres vértices del triángulo formado por las rectas; son colineales si y sólo si el triángulo degenera, es decir, las tres rectas son concurrentes.
- Tres rectas concurrentes en un punto $Q$ vienen de tres circunferencias con un segundo punto común $\iota(Q)$. $\square$

## Aplicaciones

La inversión es decisiva en:

- **Problemas de tangencia.** Cualquier punto de tangencia entre dos circunferencias se vuelve un punto de tangencia entre sus imágenes (o entre una recta y un círculo, o entre dos rectas paralelas).
- **Demostraciones de Ptolomeo** y otras identidades cíclicas.
- **Teorema de Feuerbach:** la circunferencia de los nueve puntos es tangente a las cuatro circunferencias inscrita y exinscritas. La demostración más limpia es por inversión.
- **Configuraciones de Apolonio:** encontrar circunferencias tangentes a tres dadas.

## Observación

Algunos puntos clave del manejo técnico:

1. **Elegir el centro con cuidado.** El centro de inversión es el punto que el problema "trata mal" (muchos objetos lo tocan). Tras invertir, ese punto desaparece y todo se simplifica.
2. **El radio es libre.** Cualquier $r > 0$ funciona; los problemas de igualdad y concurrencia no dependen de $r$.
3. **No invertir el centro.** $O$ no tiene imagen en el plano euclídeo. Si conviene, trabajar en el plano proyectivo (esfera de Riemann), donde $O$ va al punto del infinito.

## Problemas relacionados

- (IMO 1996, P2) Sean $P$ interior a un triángulo $ABC$, y sean $A_1, B_1, C_1$ los pies de las perpendiculares desde $P$ a $BC, CA, AB$. Probar cierta propiedad de concurrencia (la circunferencia pedal). La inversión centrada en $P$ simplifica drásticamente.
- (Iberoamericana 2003) Tres circunferencias mutuamente tangentes externas. Hallar la circunferencia tangente a las tres.
