---
title: "Guiado: el tablero mutilado y el poder de un buen invariante"
preview: "Un tablero de ajedrez al que se le quitan dos esquinas opuestas — ¿se puede cubrir con fichas de dominó? La respuesta, y sobre todo el porqué, es el ejemplo fundacional de los argumentos de coloración."
dificultad: iniciacion
tags: [invariantes, coloracion, dominos, problema-resuelto]
prerequisites: [invariantes-y-coloracion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Enunciado

Se tiene un tablero de ajedrez de $8 \times 8$ al que se le han quitado dos casillas de esquinas opuestas (por ejemplo, la esquina superior izquierda y la inferior derecha), quedando $62$ casillas. ¿Es posible cubrir exactamente este tablero mutilado con $31$ fichas de dominó de $1 \times 2$, sin solapamientos ni huecos?

## Análisis preliminar

Antes de lanzarse a intentar construir (o descartar) un cubrimiento, vale la pena preguntarse: *¿hay alguna razón estructural, independiente de cómo se coloquen las fichas, por la que esto deba ser imposible?* Esta pregunta es la que separa un problema de "ensayo y error" de un problema de "encontrar el invariante correcto" — y es exactamente la actitud que describe [invariantes-y-coloracion](../metodos/invariantes-y-coloracion).

La pista decisiva está en la coloración natural del tablero: el ajedrez ya viene coloreado en blanco y negro de forma alternada. Esa coloración no es casualidad — vamos a usarla como herramienta de conteo.

## Solución

**Observación clave.** Cada ficha de dominó, al colocarse sobre el tablero (horizontal o verticalmente), cubre exactamente **una casilla blanca y una casilla negra** — porque dos casillas adyacentes del tablero de ajedrez siempre tienen colores distintos.

**Conteo del tablero original.** El tablero de $8\times 8$ tiene $32$ casillas blancas y $32$ negras.

**Conteo del tablero mutilado.** Las dos esquinas opuestas de un tablero de ajedrez **siempre tienen el mismo color** — esto se puede verificar coloreando explícitamente, o argumentando que la diagonal principal conecta dos esquinas del mismo color porque la distancia entre ellas (en pasos de torre) tiene la paridad adecuada—. Supongamos, sin pérdida de generalidad, que ambas esquinas removidas son blancas. Entonces el tablero mutilado tiene
$$
32 - 2 = 30 \text{ casillas blancas}, \qquad 32 \text{ casillas negras}.
$$

**La contradicción.** Si existiera un cubrimiento con $31$ fichas de dominó, cada una cubriendo una casilla blanca y una negra, el número total de casillas blancas cubiertas sería igual al número de casillas negras cubiertas — es decir, el tablero tendría **el mismo número** de casillas de cada color. Pero acabamos de ver que el tablero mutilado tiene $30$ blancas y $32$ negras: una diferencia de $2$.

Por tanto, **no existe** tal cubrimiento. $\blacksquare$

## Por qué esta solución es el modelo a imitar

Fíjate en la estructura del argumento: no se intentó enumerar las (astronómicamente muchas) formas de colocar $31$ fichas para luego comprobar que ninguna funciona — eso sería computacionalmente inviable y, peor aún, no explicaría *por qué* es imposible. En cambio, se identificó una cantidad —la diferencia entre el número de casillas blancas y negras cubiertas— que **toda** ficha de dominó, sin excepción, deja invariante (o más precisamente, fuerza a cero en cada paso). Esa cantidad es el invariante; calcularla en ambos extremos (el objeto inicial y el hipotético objeto final) y observar que no coinciden es la demostración entera.

Esta es la receta general: **encuentra una cantidad que cada movimiento permitido preserve (o module de forma controlada), calcúlala para la situación inicial y para la hipotética situación final, y compara.** Si no coinciden, la transformación es imposible — sin importar cuán ingeniosa sea la estrategia que se intente.

## Variantes para practicar la misma idea

1. ¿Qué ocurre si se quitan dos esquinas **adyacentes** (del mismo lado) en lugar de opuestas? Recalcula el conteo de colores y decide si el cubrimiento es posible — y, si lo es, exhibe uno explícito.
2. Generaliza: ¿para qué pares de casillas $(A, B)$ removidas de un tablero $8\times 8$ es posible cubrir el resto con dominós? *(La respuesta completa —un teorema de Gomory que usa un argumento de "circuito hamiltoniano"— muestra que la condición es exactamente que $A$ y $B$ tengan colores distintos; este es un ejemplo precioso de cómo la condición necesaria que dimos arriba —incluso sin el argumento de Gomory— resulta también ser suficiente.)*
3. Considera un tablero de $10 \times 10$ al que se le quitan una casilla blanca y tres negras. Usando el mismo conteo de paridades, decide para qué combinaciones un cubrimiento con dominós es siquiera posible en principio (la condición necesaria), y reflexiona sobre por qué demostrar la *suficiencia* exige típicamente más trabajo —una construcción explícita— que demostrar la necesidad.
4. (Generalización a fichas de tamaño $1 \times 3$ — *triminós*.) Diseña una coloración con tres colores (en lugar de dos) que produzca un argumento de invariante análogo para cubrimientos con piezas de $1\times 3$, y úsala para decidir si un tablero de $8\times 8$ menos una esquina admite tal cubrimiento.

## Problemas relacionados

- **(Clásico)** Un tablero de $4\times 4$ se cubre con piezas en forma de "L" (triminós en escuadra). Demostrar, mediante una coloración adecuada, que cualquier cubrimiento debe dejar al menos una región sin cubrir si se exige cubrir exactamente $15$ de las $16$ casillas — y determinar cuál casilla puede quedar libre.
- **(Olimpiada, clásico)** En un tablero de $n \times n$ con $n$ impar, ¿es posible recorrer todas las casillas con un caballo de ajedrez visitando cada una exactamente una vez y regresando a la posición inicial (un circuito cerrado)? Usar un argumento de coloración análogo al de este problema.
