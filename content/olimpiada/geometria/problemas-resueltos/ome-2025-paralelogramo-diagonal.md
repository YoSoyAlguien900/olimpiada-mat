---
title: "OME 2025 — Paralelogramo, diagonal y razón de áreas"
preview: "En un paralelogramo $ABCD$, un punto $M$ de la diagonal $BD$ con $MD = 2\\,BM$ determina, junto con la recta $AM$, un punto $N$ en $BC$. ¿Qué fracción del área del paralelogramo ocupa el triángulo $MND$? Dos ideas elementales —áreas iguales por bases paralelas y semejanza— bastan para resolverlo."
dificultad: iniciacion
competencia: "OME 2025 (Fase Local)"
tags: [paralelogramo, semejanza, areas, base-media, razon-de-segmentos]
prerequisites: [paralelogramos, semejanza]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

## Enunciado

Sea $ABCD$ un paralelogramo y sea $M$ un punto en la diagonal $BD$ que cumple $MD = 2\,BM$. Las rectas $AM$ y $BC$ se cortan en un punto $N$. ¿Cuál es el cociente entre el área del triángulo $MND$ y el área del paralelogramo $ABCD$?

```geofig
// Paralelogramo ABCD; diagonal BD con M tal que MD=2BM; recta AM corta a BC en N (resulta ser el punto medio de BC)
size 7.2 4.6
point -2     -1     A   -0.28 -0.2
point  1     -1     B    0.05 -0.32
point  2      1     C    0.26  0.18
point -1      1     D   -0.28  0.18
point  0.33  -0.33  M    0.08 -0.27
point  1.5    0     N    0.26 -0.07
segment A B
segment B C
segment C D
segment D A
segment B D
segment A N
```

## Idea de la solución

Dos observaciones elementales encadenadas resuelven el problema sin necesidad de coordenadas:

1. **Comparar áreas con la misma base.** Como $BC \parallel AD$, los triángulos $ABD$ y $AND$ —que comparten la base $AD$ y tienen sus terceros vértices $B$, $N$ sobre la misma recta paralela a $AD$— tienen igual área. Y $[ABD]$ es, por la diagonal, la mitad del paralelogramo.
2. **Aprovechar la semejanza que crea el cruce de las dos cevianas.** Las rectas $AD$ y $BC$, paralelas, son cortadas por las transversales $DB$ y $AN$, que se cruzan en $M$: esto produce dos triángulos semejantes, $ADM$ y $NBM$, cuya razón de semejanza es precisamente $MD : MB = 2:1$. De ahí sale la proporción $MN:AN$, que convierte el área de $\triangle AND$ (ya conocida) en el área de $\triangle MND$.

## Demostración

**Paso 1 ($[AND] = \tfrac12[ABCD]$).** Como $ABCD$ es un paralelogramo, el lado $BC$ —que contiene a $N$— es paralelo al lado $AD$. Los triángulos $ABD$ y $AND$ comparten la base $AD$, y sus vértices opuestos $B$ y $N$ están ambos sobre la recta $BC$, paralela a $AD$; por tanto $B$ y $N$ están a la misma distancia de la recta $AD$, es decir, los dos triángulos tienen la misma altura sobre esa base común. Triángulos con igual base e igual altura tienen igual área:
$$
[AND] = [ABD].
$$
Por otro lado, la diagonal $BD$ divide al paralelogramo en dos triángulos congruentes (y por tanto de igual área), así que $[ABD] = \tfrac12[ABCD]$. Combinando ambas igualdades,
$$
[AND] = \frac{1}{2}\,[ABCD].
$$

**Paso 2 ($\triangle ADM \sim \triangle NBM$ y $\tfrac{MN}{AN} = \tfrac13$).** Las rectas $AD$ y $NB$ —esta última contenida en $BC$— son paralelas, y quedan cortadas por las transversales $AN$ y $DB$, que se cortan en $M$. Por ángulos alternos internos y ángulos opuestos por el vértice,
$$
\angle MAD = \angle MNB, \qquad \angle MDA = \angle MBN, \qquad \angle AMD = \angle NMB,
$$
así que, por el criterio AA, $\triangle ADM \sim \triangle NBM$ (vértices correspondientes $A \leftrightarrow N$, $D \leftrightarrow B$, $M \leftrightarrow M$). La razón de semejanza es, por tanto,
$$
\frac{AM}{NM} = \frac{DM}{BM} = \frac{AD}{NB}.
$$
Por hipótesis $MD = 2\,BM$, luego $\dfrac{DM}{BM} = 2$, y de la proporción anterior se sigue $AM = 2\,MN$. Equivalentemente,
$$
\frac{MN}{AN} = \frac{MN}{AM + MN} = \frac{MN}{2MN + MN} = \frac{1}{3}.
$$

**Paso 3 (área de $\triangle MND$).** Los triángulos $MND$ y $AND$ comparten el vértice $D$, y sus lados opuestos $MN$ y $AN$ están sobre la misma recta; en consecuencia comparten también la altura desde $D$, y la razón de sus áreas es la razón de sus bases:
$$
\frac{[MND]}{[AND]} = \frac{MN}{AN} = \frac{1}{3}.
$$
Combinando con el Paso 1,
$$
[MND] = \frac{1}{3}\,[AND] = \frac{1}{3} \cdot \frac{1}{2}\,[ABCD] = \frac{1}{6}\,[ABCD].
$$

El cociente pedido es, por tanto, $\boxed{\dfrac{1}{6}}$. $\blacksquare$

## Observación

El mismo cálculo de semejanza del Paso 2 revela un dato adicional, gratuito y elegante: como $\dfrac{NB}{AD} = \dfrac{NM}{AM} = \dfrac{1}{2}$ y en un paralelogramo $AD = BC$, se obtiene $NB = \tfrac12\,BC$. Es decir, **$N$ es el punto medio del lado $BC$**, sin importar la forma concreta del paralelogramo: el dato $MD = 2\,BM$ —una condición puramente afín, que solo habla de razones de segmentos sobre una recta— determina un punto $N$ cuya posición relativa en $BC$ es también puramente afín (y, de hecho, universal: siempre el punto medio). Esto explica por qué el cociente de áreas pedido tampoco depende de la forma del paralelogramo, solo de las razones dadas en el enunciado.

## Aplicaciones

1. **"Bases paralelas, áreas iguales".** El argumento del Paso 1 —dos triángulos con la misma base y vértices opuestos sobre una recta paralela a ella tienen igual área— es quizá la herramienta más usada para comparar áreas sin calcular ninguna; aparece, por ejemplo, en la demostración de que las medianas de un triángulo lo dividen en seis partes de igual área (usada en el problema de la "pajarita" de la *Fase Local 2012–2013*).
2. **Semejanza generada por paralelas cortadas por transversales.** Cualquier par de cevianas que se cruzan entre dos rectas paralelas genera de inmediato dos triángulos semejantes (los llamados "triángulos en $X$"); su razón de semejanza traduce cualquier dato de razones de segmentos en un dato de razones de segmentos en la otra pareja de lados, como en el Paso 2.
3. **Invariancia afín.** Como tanto la hipótesis ($MD = 2\,BM$) como la conclusión (un cociente de áreas) son nociones afines —se conservan bajo transformaciones afines del plano—, basta verificar el resultado en un paralelogramo particularmente sencillo (por ejemplo, un cuadrado) para estar seguro de que vale en general. Esta es una técnica de comprobación —y a veces de demostración— muy eficaz en geometría afín elemental.

## Problemas relacionados

- (Problema 2, *Colección de iniciación*, OMG 2000) Sea $ABCD$ un cuadrilátero convexo y sean $M, N, P, Q$ los puntos medios de sus lados. Probar que $MNPQ$ es un paralelogramo de área igual a la mitad de la de $ABCD$ — la misma idea de "bases paralelas, áreas iguales" en otro disfraz.
- En el paralelogramo $ABCD$, sea $M$ un punto de la diagonal $BD$ tal que $BM:MD = m:n$. Hallar, en función de $m$ y $n$, el cociente entre el área de $\triangle MND$ (con $N = AM \cap BC$) y el área de $ABCD$, generalizando el resultado de este problema.
- Demostrar que las tres medianas de un triángulo lo dividen en seis triángulos de igual área (resultado clásico que generaliza la técnica del Paso 1 a un triángulo en lugar de un paralelogramo).
