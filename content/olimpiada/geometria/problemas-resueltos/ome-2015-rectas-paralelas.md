---
title: "OME 2015 — Dos rectas paralelas y una circunferencia fija"
preview: "Un punto $A$ equidistante de dos rectas paralelas $r$ y $s$: para cada $B \\in r$ se traza $C \\in s$ con $\\angle BAC = 90°$ y se proyecta $A$ sobre $BC$. El pie $P$ de esa proyección recorre siempre la misma circunferencia, tangente a ambas rectas, sin importar qué $B$ elijamos."
dificultad: iniciacion
competencia: "OME 2015 (Fase Local)"
tags: [rectas-paralelas, congruencia, lugar-geometrico, circunferencia, triangulo-rectangulo]
prerequisites: [congruencia-isosceles, angulos-inscritos]
author: "Adrián García Bouzas"
updated: "2026-06-07"
---

## Enunciado

Sean $r$ y $s$ dos rectas paralelas, y $A$ un punto fijo a igual distancia de ambas rectas. Para cada punto $B$ de la recta $r$, sea $C$ el punto de la recta $s$ tal que $\angle BAC = 90°$, y sea $P$ el pie de la perpendicular desde $A$ sobre la recta $BC$. Demuestra que, independientemente de qué punto $B$ de la recta $r$ tomemos, el punto $P$ está sobre una circunferencia fija.

```geofig
// r (abajo) y s (arriba) paralelas; A equidistante; ∠BAC=90º; D segunda intersección de AC con r;
// Q pie de la perpendicular fija desde A a r; P pie de la perpendicular variable desde A a BC
size 7.4 5.8
point -1.6  -1     B   -0.1  -0.32
point  0    -1     Q    0.18 -0.28
point  0.63 -1     D    0.2  -0.28
point -0.63  1     C   -0.08  0.28
point  0     0     A   -0.28  0.07
point -0.9   0.44  P   -0.37  0.06
segment B D
segment A B
segment C D
segment B C
dash A Q
dash A P
circle 0 0 1
rightangle A B C
label -2.3 -1.05 "r"
label -2.1  1.1   "s"
```

## Idea de la solución

Para probar que un punto variable $P$ recorre una circunferencia fija centrada en $A$, basta con encontrar **una cantidad que no dependa de $B$ y que sea igual a $AP$**. La candidata natural es la distancia $d$ de $A$ a las rectas (la misma para $r$ y para $s$, por hipótesis): si logramos ver que $AP = d$ siempre, entonces $P$ está siempre a distancia $d$ de $A$, y la circunferencia de centro $A$ y radio $d$ —que ni siquiera depende de $B$— es la buscada.

La manera de "anclar" $AP$ a esa distancia fija es construir, junto al triángulo rectángulo $ABC$, un segundo triángulo rectángulo $ABD$ —con $D \in r$— que sea **congruente** con él. Como las alturas correspondientes de triángulos congruentes son iguales, la altura desde $A$ en $\triangle ABD$ (que resulta ser, precisamente, la distancia fija de $A$ a la recta $r$) es igual a $AP$.

## Demostración

Sea $d$ la distancia común de $A$ a las rectas $r$ y $s$, y sea $Q \in r$ el pie de la perpendicular desde $A$ a $r$ (de modo que $AQ = d$ y $\angle AQB = 90°$). **El punto $Q$ no depende de $B$**: queda determinado únicamente por $A$ y $r$.

Sea $\ell$ la recta por $A$ paralela a $r$ y $s$ (la "recta media"). Como $A$ equidista de $r$ y $s$, también $\ell$ equidista de ambas, a distancia $d$ de cada una. Sea $D$ el segundo punto de corte de la recta $AC$ con $r$ (es decir, $D$ es el punto donde la prolongación de $CA$ más allá de $A$ vuelve a cortar a $r$; existe porque $A$ está entre las rectas $r$ y $s$, así que la recta $CA$ necesariamente cruza $r$).

**Paso 1 ($AC = AD$).** Sean $C'$ y $D'$ los pies de las perpendiculares desde $C$ y $D$ a la recta $\ell$. Por construcción de $\ell$,
$$
CC' = DD' = d.
$$
Como $C$, $A$, $D$ son colineales, $A \in \ell$, y $C$, $D$ están a un lado y otro de $\ell$ (porque $s$ y $r$ están a un lado y otro de $A$), los ángulos $\angle CAC'$ y $\angle DAD'$ son opuestos por el vértice, luego iguales; y $\angle AC'C = \angle AD'D = 90°$. Los triángulos rectángulos $ACC'$ y $ADD'$ tienen entonces un cateto igual ($CC' = DD'$) y dos ángulos iguales, así que son congruentes (criterio AAS), y en particular sus hipotenusas coinciden:
$$
AC = AD.
$$

**Paso 2 ($\triangle ABC \cong \triangle ABD$).** Como $C$, $A$, $D$ son colineales, los ángulos $\angle BAC$ y $\angle BAD$ son suplementarios. Por hipótesis $\angle BAC = 90°$, así que también $\angle BAD = 90°$. Ambos triángulos $ABC$ y $ABD$ son, por tanto, rectángulos en $A$, comparten el cateto $AB$, y tienen el otro cateto igual ($AC = AD$, Paso 1). Por el criterio LAL (dos catetos y el ángulo recto entre ellos), 
$$
\triangle ABC \cong \triangle ABD.
$$

**Paso 3 ($AP = AQ$).** En triángulos congruentes, los elementos correspondientes son iguales; en particular, las alturas trazadas desde el vértice correspondiente $A$ sobre las hipotenusas $BC$ y $BD$ tienen la misma longitud. La altura desde $A$ sobre $BC$ tiene pie $P$ (por definición del enunciado). La altura desde $A$ sobre $BD$ tiene un pie que llamaremos $P'$; la congruencia da $AP = AP'$.

Pero $B, D \in r$, así que la recta $BD$ es exactamente la recta $r$ (siempre que $B \neq D$; si $B = D$ el problema es trivial, pues entonces $C$, $A$, $B$ son colineales y $P = B = Q$). Por tanto el pie de la perpendicular desde $A$ a la recta $BD$ es el mismo que el pie de la perpendicular desde $A$ a $r$, es decir, $P' = Q$. Concluimos
$$
AP = AP' = AQ = d.
$$

**Paso 4 (conclusión).** La cantidad $AP = d$ es la misma para cualquier elección de $B$ en $r$ —no depende de $B$ porque $Q$ y $d$ tampoco dependen de $B$—. Por tanto, todos los puntos $P$ obtenidos al variar $B$ están a la distancia fija $d$ del punto fijo $A$: todos pertenecen a la circunferencia $\omega$ de centro $A$ y radio $d$, una circunferencia que queda completamente determinada por $A$, $r$ y $s$ (sin referencia a ningún $B$ concreto). $\blacksquare$

## Observación

La circunferencia $\omega$ tiene una descripción aún más simple: su radio es exactamente la distancia $d$ de $A$ a cada una de las rectas $r$ y $s$, así que $\omega$ es **tangente simultáneamente a $r$ (en $Q$) y a $s$ (en el punto antípoda de $Q$ respecto de $A$)**. Es, de hecho, la única circunferencia centrada en $A$ tangente a ambas rectas paralelas.

La estrategia general que ilustra este problema —para probar que un punto móvil recorre un lugar geométrico fijo, encontrar una cantidad invariante asociada a él (aquí, su distancia a un punto fijo)— es la base de casi todos los problemas de "lugares geométricos" en olimpiadas. La elección de qué cantidad investigar (distancia a un punto, ángulo bajo el que se ve un segmento, potencia respecto de una circunferencia...) es lo que determina si el lugar resulta ser una recta, una circunferencia o una cónica.

## Aplicaciones

1. **Lugares geométricos vía invariantes.** Si se logra probar que un punto variable equidista de un punto fijo, el lugar es una circunferencia; si equidista de dos puntos fijos, una mediatriz; si ve un segmento fijo bajo un ángulo constante, un arco capaz (como en el problema *Clásico — Los pies de dos alturas y un cuadrilátero cíclico*).
2. **Congruencia de triángulos rectángulos para "transportar" longitudes.** El truco de construir un segundo triángulo congruente con vértice compartido para igualar dos longitudes que a priori no se comparan (aquí, $AP$ y $AQ$, alturas de triángulos distintos) es una herramienta recurrente: convierte una pregunta sobre un objeto variable en una pregunta sobre una configuración fija.
3. **El punto $A$ equidistante de dos rectas paralelas** se sitúa, claro, sobre la recta media $\ell$: cualquier construcción simétrica respecto de $\ell$ hereda automáticamente igualdades de distancias como las del Paso 1.

## Problemas relacionados

- (*Clásico — Los pies de dos alturas y un cuadrilátero cíclico*) El lema del arco capaz de $90°$: un punto ve un segmento bajo ángulo recto si y solo si pertenece a la circunferencia de diámetro ese segmento. Es el "gemelo" angular de este problema, que en cambio caracteriza una circunferencia mediante una distancia constante.
- Sea $O$ un punto fijo y $\ell$ una recta fija que no pasa por $O$. Para cada punto $X$ de una segunda recta fija $m$, sea $Y$ el pie de la perpendicular desde $O$ a la recta $XO$. Estudiar el lugar geométrico de $Y$ cuando $X$ recorre $m$.
- Generalizar el problema cambiando la condición $\angle BAC = 90°$ por $\angle BAC = \theta$ para un ángulo fijo $\theta \neq 90°$: ¿sigue siendo cierto que $P$ recorre una circunferencia fija? ¿Cuál sería su radio?
