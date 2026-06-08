---
title: "Clásico — Los pies de dos alturas y un cuadrilátero cíclico"
preview: "Un primer encuentro con los cuadriláteros cíclicos: dos ángulos rectos que comparten hipotenusa bastan para colocar cuatro puntos sobre una misma circunferencia."
dificultad: iniciacion
competencia: "Clásico (OME Fase Local)"
tags: [angulos-inscritos, cuadrilatero-ciclico, alturas, triangulo-rectangulo, tales]
prerequisites: [angulos-inscritos, congruencia-isosceles]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

## Enunciado

Sea $ABC$ un triángulo acutángulo. Sean $E$ el pie de la altura desde $B$ (sobre la recta $AC$) y $F$ el pie de la altura desde $C$ (sobre la recta $AB$).

Demostrar que los cuatro puntos $B$, $C$, $E$, $F$ son concíclicos, es decir, que existe una circunferencia que pasa por los cuatro.

```geofig
// E, F pies de las alturas desde B y C: ambos ven BC bajo ángulo recto, luego están en la circunferencia de diámetro BC
size 5.6 4.2
point -0.5   1.5    A    -0.05  0.26
point -2.5  -1.5    B    -0.36 -0.05
point  2.5  -1.5    C     0.22 -0.05
point  0     1.0    E     0.18  0.16
point -0.96  0.81   F    -0.38  0.12
segment A B
segment A C
segment B C
dash B E
dash C F
rightangle E B C
rightangle F C B
```

## Idea de la solución

La definición de "concíclico" parece, a primera vista, difícil de verificar directamente: ¿cómo saber si cuatro puntos caen sobre una misma circunferencia sin construirla? La clave es una reformulación del **teorema del ángulo inscrito** que conviene memorizar como herramienta independiente:

> **Lema (arco capaz de $90°$).** Un punto $P$ ve a un segmento $\overline{XY}$ bajo un ángulo recto si y solo si $P$ pertenece a la circunferencia de diámetro $\overline{XY}$.

Si logramos ver que **tanto $E$ como $F$ ven al segmento $BC$ bajo un ángulo de $90°$**, entonces ambos están forzados a estar sobre la misma circunferencia: la de diámetro $BC$. Y esa circunferencia ya contiene a $B$ y a $C$ (los extremos del diámetro). Cuatro puntos, una circunferencia.

## Demostración

**Paso 1 (el lema del arco capaz de $90°$).** Antes de aplicarlo, demostrémoslo, pues es la pieza central del argumento.

($\Rightarrow$) Sea $\omega$ la circunferencia de diámetro $\overline{XY}$, con centro $M$ (punto medio de $XY$) y radio $r = \frac{XY}{2}$. Si $P \in \omega$, entonces $MP = MX = MY = r$, así que $M$ es el circuncentro del triángulo $XPY$ y $XY = 2\,MP$. Por el corolario del ángulo inscrito que abarca un diámetro (el ángulo central correspondiente mide $180°$, luego el inscrito mide la mitad):
$$
\angle XPY = \frac{1}{2}\angle XMY = \frac{180°}{2} = 90°.
$$

($\Leftarrow$) Recíprocamente, si $\angle XPY = 90°$, sea $M$ el punto medio de $XY$. El segmento $\overline{PM}$ es la mediana del triángulo rectángulo $XPY$ relativa a la hipotenusa, y un hecho clásico (problema 5 de la *Colección de iniciación*) afirma que esa mediana mide la mitad de la hipotenusa: $PM = \frac{XY}{2} = XM = YM$. Luego $P$ equidista de $X$, $Y$ y $M$ en la cantidad $r = \frac{XY}{2}$, es decir, $P$ está en la circunferencia de centro $M$ y radio $r$, que es $\omega$. $\quad\blacksquare$ (lema)

**Paso 2 ($E$ ve a $BC$ bajo ángulo recto).** Por definición, $E$ es el pie de la altura desde $B$, es decir, $BE \perp AC$. Como $E$ está sobre la recta $AC$, el segmento $\overline{EC}$ es parte de esa recta, así que $BE \perp EC$. Esto significa exactamente que
$$
\angle BEC = 90°.
$$

**Paso 3 ($F$ ve a $BC$ bajo ángulo recto).** Análogamente, $F$ es el pie de la altura desde $C$, es decir, $CF \perp AB$. Como $F$ está sobre la recta $AB$, el segmento $\overline{FB}$ es parte de esa recta, así que $CF \perp FB$. Esto significa exactamente que
$$
\angle BFC = 90°.
$$

**Paso 4 (conclusión vía el lema).** Por los pasos 2 y 3, los puntos $E$ y $F$ ven ambos al segmento $\overline{BC}$ bajo un ángulo recto. Por el lema del Paso 1, ambos pertenecen a la circunferencia $\omega$ de diámetro $\overline{BC}$. Como $B$ y $C$ son los extremos de ese diámetro, también $B, C \in \omega$.

En consecuencia, los cuatro puntos $B$, $C$, $E$, $F$ pertenecen todos a la circunferencia $\omega$ de diámetro $\overline{BC}$: son concíclicos. $\blacksquare$

## Observación

Lo notable de esta demostración es que **no necesitamos construir la circunferencia nosotros mismos**: el enunciado nos la regala. En cuanto detectamos *dos* ángulos rectos que comparten el mismo segmento como "base de visión" ($\angle BEC = \angle BFC = 90°$), el lema del arco capaz garantiza que esa circunferencia —la de diámetro $BC$— ya pasa por los cuatro puntos relevantes.

Esta es una de las técnicas de detección de cuadriláteros cíclicos más usadas en olimpiada: **buscar un segmento que dos puntos distintos vean bajo el mismo ángulo** (en este caso, $90°$, pero el principio se generaliza a cualquier ángulo vía el teorema del ángulo inscrito y su recíproco, como en el problema 4 de la *Colección de iniciación*).

Nótese también que la hipótesis "$ABC$ acutángulo" simplifica la figura (los pies $E$, $F$ caen sobre los lados, no sobre sus prolongaciones), pero el resultado y la demostración son válidos —con el ajuste natural en la figura— para cualquier triángulo no rectángulo.

## Aplicaciones

1. **El triángulo órtico.** Si añadimos el tercer pie de altura $D$ (desde $A$), el mismo argumento aplicado por parejas muestra que $A, B, D, E$ y $A, C, D, F$ también son concíclicos. Estas tres circunferencias de "diámetro un lado" son la semilla de toda la teoría del triángulo órtico y sus propiedades de reflexión.

2. **La circunferencia de los nueve puntos.** Los seis pies de altura y de mediana (más los puntos medios de $\overline{AH}$, $\overline{BH}$, $\overline{CH}$) resultan estar todos sobre una única circunferencia. La técnica del "arco capaz de $90°$" es exactamente la que arranca esa demostración.

3. **Detección rápida de concurrencias y ángulos iguales.** Cada vez que aparecen dos ángulos rectos compartiendo hipotenusa en un problema, vale la pena preguntarse de inmediato: *¿qué cuadrilátero cíclico se esconde aquí?* — suele ser el primer paso hacia la solución completa.

## Problemas relacionados

- Demostrar que el ortocentro $H$ de $\triangle ABC$ es el incentro de su triángulo órtico $DEF$ (usa repetidamente la concurrencia cíclica anterior).
- (Problema 4, *Colección de iniciación*) Un cuadrilátero convexo es cíclico si y solo si sus ángulos opuestos son suplementarios — el recíproco del ángulo inscrito que generaliza el lema usado aquí.
- Probar que las reflexiones del ortocentro $H$ sobre los lados del triángulo caen sobre la circunferencia circunscrita $\odot(ABC)$.
