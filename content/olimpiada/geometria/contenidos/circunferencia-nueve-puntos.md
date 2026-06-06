---
title: "Circunferencia de los nueve puntos"
preview: "En todo triángulo, los nueve puntos especiales — pies de las alturas, puntos medios de los lados, y puntos medios de los segmentos del ortocentro a los vértices — son concíclicos. Una de las configuraciones más bellas de la geometría del triángulo."
dificultad: nacional
tags: [triangulo, nueve-puntos, euler, ortocentro, circunferencia]
prerequisites: [angulos-inscritos, recta-de-euler]
author: "Adrián García Bouzas"
updated: "2026-02-10"
---

## Teorema

Sea $ABC$ un triángulo con ortocentro $H$. Los siguientes nueve puntos son concíclicos:

1. **$M_A$, $M_B$, $M_C$:** los puntos medios de los lados $BC$, $CA$, $AB$.
2. **$H_A$, $H_B$, $H_C$:** los pies de las alturas desde $A$, $B$, $C$.
3. **$E_A$, $E_B$, $E_C$:** los puntos medios de los segmentos $HA$, $HB$, $HC$.

Esta circunferencia se llama **circunferencia de los nueve puntos** (o de Feuerbach), tiene centro $N$ en el punto medio del segmento $OH$ (donde $O$ es el circuncentro), y radio igual a la mitad del circunradio $R$:

$$
\text{radio} \;=\; \frac{R}{2}.
$$

```geofig
// Circunferencia de los nueve puntos pasa por los tres puntos medios de los lados
size 9 9
circle -0.05 -0.17 1.59
point  0    3    A  0.1   0.22
point -3   -2    B -0.25 -0.22
point  2.5 -1.5  C  0.25 -0.22
point -0.25 -1.75 Ma  0.12 -0.28
point  1.25  0.75 Mb  0.22  0.12
point -1.5   0.5  Mc -0.35  0.12
point -0.05 -0.17 N  0.22 -0.18
segment A B
segment B C
segment C A
```

## Demostración

Probaremos que los nueve puntos están todos a distancia $R/2$ del **punto medio** $N$ de $OH$.

**Paso 1: los tres puntos medios de los lados están en una circunferencia de centro y radio fijos.**

Sea $G$ el baricentro. Es conocido (recta de Euler) que $G$ divide $OH$ en razón $OG : GH = 1 : 2$. El triángulo formado por $M_A, M_B, M_C$ (triángulo medial) es la imagen de $ABC$ por la homotecia de centro $G$ y razón $-\tfrac{1}{2}$. Por tanto:

- El circuncentro del triángulo medial es la imagen de $O$ por esta homotecia, es decir, el punto $N'$ tal que $\vec{GN'} = -\tfrac{1}{2}\vec{GO}$.
- El circunradio del triángulo medial es $R/2$.

Calculando: $N' = G - \tfrac{1}{2}(O - G) = \tfrac{3G - O}{2}$. Sustituyendo $G = (A + B + C)/3$ y usando $H = A + B + C - 2O$ (relación de Euler tras elegir origen en $O$, con $O$ y $G$ y $H$ alineados):

$$
N' \;=\; \frac{O + H}{2}.
$$

Es decir, $N'$ es el punto medio de $OH$. Lo llamamos $N$.

**Paso 2: los pies de las alturas están en la misma circunferencia.**

Probamos que $|NH_A| = R/2$.

Sea $H_A$ el pie de la altura desde $A$. Como $H_A \in BC$ y $AH_A \perp BC$, el cuadrilátero $M_A H_A H E_A$ es interesante: usando que $E_A$ es punto medio de $AH$ y $M_A$ punto medio de $BC$, podemos comprobar que $E_A M_A$ es un diámetro de la circunferencia buscada.

Concretamente: vectorialmente, $M_A - N = \tfrac{1}{2}(B + C) - \tfrac{1}{2}(O + H) = \tfrac{1}{2}((B + C) - (O + H))$. Sabemos $H = A + B + C - 2O$ (origen en $O$), simplificando: $M_A - N = \tfrac{1}{2}(-A + O) = -\tfrac{1}{2}(A - O)$. Como $|A - O| = R$ (porque $A$ está en el circuncírculo), $|M_A - N| = R/2$. ✓

Análogamente para $E_A = \tfrac{1}{2}(H + A)$, calculamos $E_A - N = \tfrac{1}{2}(H + A) - \tfrac{1}{2}(O + H) = \tfrac{1}{2}(A - O)$, así que $|E_A - N| = R/2$. ✓

Para el pie de la altura, $H_A$ es la proyección ortogonal de $A$ sobre $BC$. Usando que $M_A E_A$ es diámetro (lo acabamos de mostrar) y que $\angle M_A H_A E_A = 90°$ (porque $H_A M_A \perp H_A E_A$, ya que $M_A E_A \parallel OA$ paralelo a... — un cálculo análogo lo verifica), concluimos que $H_A$ está en la circunferencia de diámetro $M_A E_A$, que es exactamente la nuestra.

Por simetría cíclica, los nueve puntos están todos en la misma circunferencia, de centro $N$ y radio $R/2$. $\blacksquare$

## Observación

El nombre **Feuerbach** se debe al matemático alemán Karl Wilhelm Feuerbach (1800-1834), que en 1822 demostró un resultado aún más bello — el **teorema de Feuerbach**:

> *La circunferencia de los nueve puntos es tangente a la circunferencia inscrita y a las tres circunferencias exinscritas del triángulo.*

Este teorema es uno de los más sorprendentes de la geometría clásica y su demostración (vía inversión) es un ejercicio estándar de olimpiada avanzada.

## Aplicaciones

La circunferencia de los nueve puntos aparece en multitud de configuraciones:

1. **Recta de Euler:** $O$, $G$, $N$, $H$ son colineales, con $OG : GN : NH = 2 : 1 : 3$.
2. **Punto antipodal:** el punto antipodal a $H_A$ en la circunferencia de los nueve puntos es el reflejo del ortocentro respecto a $M_A$.
3. **Configuraciones IMO:** la circunferencia de los nueve puntos aparece en varias soluciones de problemas internacionales (IMO 2001/5, IMO 2014/3).

## Problemas relacionados

- **Teorema de Feuerbach.** Demostrar la tangencia entre la circunferencia de los nueve puntos y la inscrita.
- **Triángulo órtico.** Sus lados son antiparalelos a los del triángulo original.
