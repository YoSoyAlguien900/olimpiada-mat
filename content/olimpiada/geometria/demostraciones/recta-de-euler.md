---
title: "Recta de Euler: O, G, H son colineales"
preview: "En todo triángulo no equilátero, el circuncentro $O$, el baricentro $G$ y el ortocentro $H$ son colineales, con $\\overrightarrow{OH} = 3 \\overrightarrow{OG}$."
dificultad: nacional
tags: [recta-euler, ortocentro, baricentro, circuncentro]
prerequisites: [baricentro, ortocentro, vectores]
author: "Material olímpico"
updated: "2026-01-08"
---

La **recta de Euler** es uno de los resultados más bellos de la geometría elemental: tres centros notables de un triángulo —que se definen por construcciones completamente distintas— resultan estar siempre alineados, y además guardan entre sí una proporción fija.

## Enunciado

Sea $ABC$ un triángulo no equilátero. Sean $O$ su circuncentro, $G$ su baricentro y $H$ su ortocentro. Entonces:

1. Los puntos $O, G, H$ son colineales.
2. $G$ divide al segmento $OH$ en razón $1:2$ (con $G$ entre $O$ y $H$).
3. Equivalentemente, $\overrightarrow{OH} = 3 \overrightarrow{OG}$.

## Demostración

Trabajamos con vectores tomando $O$ como origen, de modo que $|\overrightarrow{OA}| = |\overrightarrow{OB}| = |\overrightarrow{OC}| = R$ (el circunradio).

**Definición del baricentro.** $G = \frac{A + B + C}{3}$, es decir $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$.

**Ortocentro: afirmación clave.** Sea $H^* = \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}$. Probaremos que $H^* = \overrightarrow{OH}$, es decir, que $H^*$ es el ortocentro.

Para que $H^*$ sea el ortocentro, basta probar que $\overrightarrow{AH^*} \perp \overrightarrow{BC}$ (y análogamente para los otros dos lados; por simetría basta uno).

$$
\overrightarrow{AH^*} = H^* - A = \overrightarrow{OB} + \overrightarrow{OC}.
$$

$$
\overrightarrow{BC} = \overrightarrow{OC} - \overrightarrow{OB}.
$$

Calculemos el producto escalar:

$$
\overrightarrow{AH^*} \cdot \overrightarrow{BC} = (\overrightarrow{OB} + \overrightarrow{OC}) \cdot (\overrightarrow{OC} - \overrightarrow{OB}) = |\overrightarrow{OC}|^2 - |\overrightarrow{OB}|^2 = R^2 - R^2 = 0.
$$

Por lo tanto $\overrightarrow{AH^*} \perp \overrightarrow{BC}$. Análogamente para las otras dos alturas. Así $H^*$ está sobre las tres alturas y, por tanto, $H^* = H$.

**Conclusión.** De $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$ y $\overrightarrow{OH} = \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}$, se sigue inmediatamente

$$
\overrightarrow{OH} = 3 \overrightarrow{OG}.
$$

Esto significa que $H$ está en la recta $OG$ extendida (al lado opuesto del origen $O$ respecto a $G$), y que $\overrightarrow{GH} = 2 \overrightarrow{OG}$. En particular, $G$ divide al segmento $\overline{OH}$ en razón $OG : GH = 1 : 2$. $\blacksquare$

## Observación

Si el triángulo es equilátero, los tres centros **coinciden** ($O = G = H$) y la "recta de Euler" se degenera en un punto. Por eso la hipótesis "no equilátero" es esencial para hablar de una recta única.

El **centro de la circunferencia de los nueve puntos** $N$ también está sobre la recta de Euler, y es el punto medio de $\overline{OH}$. Junto con la relación $\overrightarrow{OH} = 3 \overrightarrow{OG}$, esto da las posiciones relativas:

$$
O \xrightarrow{1} G \xrightarrow{1/2} N \xrightarrow{3/2} H,
$$

en proporción $2 : 1 : 3$ a lo largo de la recta.

## Aplicaciones

La recta de Euler aparece de forma recurrente en problemas que combinan varios centros notables. Cualquier identidad que relacione $O, G, H$ con otros puntos del triángulo se simplifica notablemente al recordar que $\overrightarrow{OH} = \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}$.

Una consecuencia útil: la distancia $OH^2 = R^2 - 8 R^2 \cos A \cos B \cos C$, que se obtiene desarrollando $|\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}|^2$ y usando el producto escalar entre vectores que parten de $O$.

## Problemas relacionados

- Probar que las tres reflexiones del ortocentro sobre los lados del triángulo están sobre la circunferencia circunscrita.
- (Iberoamericana 2012) Aplicación de la recta de Euler para resolver una concurrencia.
- Demostrar la existencia de la circunferencia de los nueve puntos usando la posición de $H$ como suma vectorial.
