---
title: "Teorema de Ptolomeo y su forma generalizada"
preview: "En un cuadrilátero cíclico, el producto de las diagonales iguala a la suma de los productos de los lados opuestos. Una identidad métrica fundamental."
dificultad: nacional
tags: [cuadrilatero-ciclico, longitudes, identidad-metrica]
prerequisites: [angulos-inscritos, semejanza]
author: "Adrián García Bouzas"
updated: "2026-01-11"
---

El **Teorema de Ptolomeo** es uno de los resultados clásicos de la geometría sintética. Ya conocido por los astrónomos alejandrinos, conecta las longitudes de los lados y las diagonales de un cuadrilátero inscrito en una circunferencia.

## Enunciado

Sea $ABCD$ un cuadrilátero cíclico. Entonces

$$
AC \cdot BD = AB \cdot CD + AD \cdot BC.
$$

**Desigualdad de Ptolomeo (forma generalizada).** Para cualesquiera cuatro puntos $A, B, C, D$ del plano,

$$
AC \cdot BD \leq AB \cdot CD + AD \cdot BC,
$$

con igualdad si y sólo si $ABCD$ es un cuadrilátero cíclico convexo (en el orden indicado).

```geofig
// Cuadrilátero cíclico ABCD: AC·BD = AB·CD + AD·BC
size 8 8
circle 0 0 3
point  0.52  2.95  A  0.1   0.22
point -2.95  0.52  B -0.28  0.12
point -1.03 -2.82  C -0.22 -0.28
point  2.82 -1.03  D  0.25 -0.22
segment A B
segment B C
segment C D
segment D A
dash A C
dash B D
```

## Demostración

**Método clásico (Ptolomeo).** Sea $E$ un punto sobre la diagonal $BD$ tal que $\angle BAE = \angle CAD$. Como $\angle ABE = \angle ABD = \angle ACD$ (ángulos inscritos sobre el arco $AD$), los triángulos $ABE$ y $ACD$ son semejantes:

$$
\frac{BE}{CD} = \frac{AB}{AC} \implies BE \cdot AC = AB \cdot CD.
$$

Por otro lado, los triángulos $ABC$ y $AED$ también son semejantes (compárense ángulos), de donde

$$
\frac{ED}{BC} = \frac{AD}{AC} \implies ED \cdot AC = AD \cdot BC.
$$

Sumando ambas igualdades:

$$
(BE + ED) \cdot AC = AB \cdot CD + AD \cdot BC.
$$

Pero $BE + ED = BD$, de donde se concluye $BD \cdot AC = AB \cdot CD + AD \cdot BC$. $\square$

**Método por inversión.** Sea $\iota$ la inversión centrada en $A$ con radio arbitrario $r$. Esta transforma los puntos $B, C, D$ en $B', C', D'$ con $AX \cdot AX' = r^2$. La fórmula de distancia bajo inversión:

$$
X'Y' = \frac{r^2 \cdot XY}{AX \cdot AY}.
$$

Como $A, B, C, D$ son concíclicos, sus imágenes $B', C', D'$ son **colineales** (la circunferencia por $A$ se transforma en recta). Por lo tanto $B'D' = B'C' + C'D'$, y sustituyendo:

$$
\frac{r^2 \cdot BD}{AB \cdot AD} = \frac{r^2 \cdot BC}{AB \cdot AC} + \frac{r^2 \cdot CD}{AC \cdot AD}.
$$

Multiplicando por $\frac{AB \cdot AC \cdot AD}{r^2}$:

$$
BD \cdot AC = BC \cdot AD + CD \cdot AB. \qquad \square
$$

La inversión también prueba inmediatamente la **desigualdad** de Ptolomeo: para cuatro puntos cualesquiera, $B', C', D'$ son tres puntos del plano, y se cumple $B'D' \leq B'C' + C'D'$ por la desigualdad triangular, con igualdad si y sólo si son colineales en el orden correcto, lo que ocurre exactamente cuando $A, B, C, D$ son concíclicos en el orden $A, B, C, D$.

## Ejemplo

**Problema.** Si $ABC$ es un triángulo equilátero inscrito en una circunferencia $\omega$ y $P$ es un punto del arco $BC$ que no contiene a $A$, probar que $PA = PB + PC$.

*Solución.* Aplicamos Ptolomeo al cuadrilátero cíclico $ABPC$:

$$
PA \cdot BC = PB \cdot AC + PC \cdot AB.
$$

Como $ABC$ es equilátero, $AB = BC = CA$, y la igualdad se reduce a $PA = PB + PC$. $\square$

## Observación

Ptolomeo se puede ver como el caso de igualdad de una desigualdad más general. La **desigualdad de Ptolomeo extendida** afirma que para cualesquiera puntos en el plano, $AC \cdot BD \leq AB \cdot CD + AD \cdot BC$, con igualdad si y sólo si los puntos son concíclicos en orden convexo.

Esta caracterización es **bidireccional** y se usa con frecuencia para probar que cuatro puntos son cíclicos sin trabajar con ángulos.

## Aplicaciones

- Demostrar identidades métricas entre las distancias de puntos sobre una circunferencia.
- Probar concyclicidad usando longitudes.
- Generar identidades trigonométricas: aplicando Ptolomeo a un cuadrilátero inscrito en una circunferencia unitaria y usando la **ley del seno**, se obtienen identidades como
$$
\sin(\alpha + \beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta.
$$

## Problemas relacionados

- (IMO 1991, P5) En un triángulo $ABC$, sean $P, Q, R$ puntos sobre $BC, CA, AB$ respectivamente. Probar una desigualdad métrica usando Ptolomeo.
- Si $ABCD$ es un cuadrilátero cíclico con $AB = a, BC = b, CD = c, DA = d$, hallar la longitud de la diagonal $AC$ en función de $a, b, c, d$.
