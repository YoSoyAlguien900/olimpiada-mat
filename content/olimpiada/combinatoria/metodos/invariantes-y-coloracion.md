---
title: "Invariantes y argumentos de coloración"
preview: "Para demostrar que algo es imposible, basta encontrar una cantidad que no cambia —o un patrón de colores que toda jugada respeta— y mostrar que el estado deseado lo viola. La forma más elegante de decir 'no' en matemáticas."
dificultad: regional
tags: [invariantes, coloracion, paridad, imposibilidad, monovariantes]
prerequisites: [principios-conteo]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Un **invariante** es una cantidad (numérica, o de cualquier otro tipo: una paridad, un color, un residuo módulo $n$) asociada a los estados de un proceso, que **permanece constante** bajo cada paso permitido del proceso. Un **monovariante** es una cantidad que cambia siempre en la misma dirección (estrictamente creciente, o decreciente) — útil para demostrar terminación más que imposibilidad (véase [principio del extremo](../../teoria-numeros/metodos/principio-extremo) e [inducción](../../teoria-numeros/metodos/induccion)).

Un **argumento de coloración** es el caso particular —y con diferencia el más frecuente en problemas de tipo combinatorio— en que el invariante se construye asignando *colores* (o, más generalmente, valores de un conjunto pequeño) a las componentes de una configuración, de modo que cada movimiento permitido preserva alguna estadística sobre los colores (un recuento, una suma ponderada, una paridad).

La estructura lógica de toda demostración por invariante es la misma:

1. Identificar una cantidad $I$ definida sobre los estados del sistema.
2. Probar que $I$ es invariante (o monótona) bajo cada movimiento permitido.
3. Calcular $I$ en el estado inicial y en el estado objetivo.
4. Si $I(\text{inicial}) \neq I(\text{objetivo})$ —y $I$ es invariante—, el objetivo es **inalcanzable**. Si $I$ es monótona y el objetivo requeriría revertir su dirección, también es inalcanzable.

## Teorema

No existe un "teorema del invariante" universal: es, ante todo, **una estrategia de demostración de imposibilidad**. No obstante, conviene memorizar el repertorio de invariantes que aparecen una y otra vez:

- **Paridad** (de una suma, de un cardinal, de un número de pasos).
- **Coloración tipo tablero de ajedrez** (y sus generalizaciones: coloraciones con $3$, $4$ o más colores dispuestos periódicamente).
- **Residuos módulo $n$** (sumas o productos invariantes módulo algún entero).
- **Suma o producto ponderado** con pesos elegidos estratégicamente (a menudo potencias de $2$, raíces de la unidad, o valores que hacen que ciertos términos se cancelen).
- **Cantidad de "fronteras" o "bloques"** en configuraciones geométricas o combinatorias (el número de componentes conexas, el perímetro total, el número de cambios de signo).

## Demostración

Ilustramos el método con dos derivaciones canónicas — que son, en realidad, las mismas ideas que aparecen sistemáticamente bajo nombres distintos.

**(a) El tablero de ajedrez mutilado (coloración $2$-periódica).** Un tablero $8\times 8$ sin dos esquinas opuestas no se puede cubrir con dominós $1\times 2$. *Invariante:* la diferencia (casillas blancas) $-$ (casillas negras) cubiertas. Cada dominó cubre exactamente una casilla de cada color, así que cualquier cubrimiento parcial mantiene esta diferencia en $0$. Las dos esquinas opuestas tienen el mismo color (en el coloreado estándar), así que el tablero mutilado tiene una diferencia de $\pm 2 \neq 0$: ningún cubrimiento total es posible. $\blacksquare$ *(Ver el desarrollo guiado completo en* [guiado-tablero-mutilado](../problemas-resueltos/guiado-tablero-mutilado)*.)*

**(b) El juego de los $15$ (invariante de paridad de permutación).** En el clásico rompecabezas deslizante $4\times 4$, ciertas configuraciones —que difieren de la posición resuelta solo por el intercambio de dos fichas— son **inalcanzables**. *Invariante:* la paridad de la permutación de las fichas, combinada con la paridad de la fila del hueco. Cada movimiento (deslizar una ficha al hueco) es una trasposición de la ficha con el hueco, que cambia la paridad de la permutación; pero también cambia la fila del hueco en $\pm 1$ (movimiento vertical) o no la cambia (movimiento horizontal), de forma que la **suma** (paridad de la permutación) $+$ (paridad de la distancia del hueco a su posición original) permanece constante. Dos configuraciones con valores distintos de este invariante combinado nunca son alcanzables una desde la otra. $\blacksquare$

## Ejemplo

**Ejemplo 1 (suma invariante módulo $3$).** En una pizarra hay escritos los números $1, 2, \ldots, n$. Repetidamente, se borran dos números $a, b$ y se escribe $a + b - 1$ (o $a+b+1$, según la variante). ¿Qué número queda al final, tras $n-1$ pasos? *Invariante:* la operación $a, b \mapsto a+b-1$ disminuye la suma total en $1$ exactamente en cada paso (pues $a+b-1$ reemplaza a $a+b$); como hay $n-1$ pasos, el número final es siempre $\left(\sum_{i=1}^n i\right) - (n-1) = \binom{n+1}{2} - n + 1$, **independientemente del orden de las operaciones**. La "sorpresa" del problema —que el resultado no dependa de las elecciones— es la huella de un invariante (más precisamente, una cantidad que cambia de forma totalmente predecible).

**Ejemplo 2 (coloración con raíces de la unidad).** Para probar que ciertas teselaciones o particiones son imposibles, a veces conviene asignar a cada casilla del plano el valor $\omega^{x+y}$ donde $\omega = e^{2\pi i/k}$ es una raíz $k$-ésima de la unidad, y sumar sobre las casillas de cada pieza. Si la suma para cada pieza permitida es siempre $0$ (o algún valor fijo), pero la suma sobre la región objetivo no lo es, se obtiene una contradicción —el llamado **argumento de coloración compleja**, una generalización elegante de la coloración bicolor que aparece en problemas de teselación de regiones con piezas en forma de "L" o "T".

## Aplicaciones

### Diseñar el invariante correcto: heurísticas

No existe receta, pero hay preguntas que orientan la búsqueda:

- *¿Qué cantidad numérica asociada al estado cambia de forma "controlada" (siempre por una cantidad fija, o siempre del mismo signo) en cada movimiento?*
- *¿Existe una forma natural de etiquetar las posiciones (coordenadas, colores periódicos, residuos) que distinga sistemáticamente lo que el movimiento "intercambia" de lo que "preserva"?*
- *¿Qué simetría tiene la configuración objetivo que la inicial no tiene, o viceversa?* (A menudo el invariante es precisamente la cantidad que mide esa asimetría.)

### Invariantes en juegos combinatorios

Los argumentos de invariante son el primer paso —y a menudo el único necesario— para analizar **juegos de un solo jugador** (rompecabezas, procesos deterministas) y para identificar **posiciones perdedoras** en juegos de dos jugadores antes de entrar en el análisis fino de estrategias (ver [juegos-combinatorios](juegos-combinatorios-estrategias)). Un invariante que distingue "estado ganador" de "estado perdedor" es, en esencia, la función de Sprague–Grundy evaluada de forma aproximada.

### La coloración como caso particular de homomorfismo

Formalmente, un argumento de coloración es un **homomorfismo** del conjunto de estados a una estructura más simple (un grupo finito, $\{0,1\}$, $\mathbb{Z}/n\mathbb{Z}$) que respeta las transiciones permitidas. Esta perspectiva —"proyectar el problema a una estructura donde la pregunta es trivial"— es transversal a las matemáticas: es la misma idea detrás de las reducciones módulo $n$ en teoría de números, de las invariantes topológicas, y de los argumentos de "tamaño descendente" en inducción.

## Observación

Un invariante bien elegido convierte un problema de "buscar entre exponencialmente muchas configuraciones" en "comparar dos números". Esa es su fuerza —y también su mayor dificultad: **encontrar el invariante correcto requiere, casi siempre, jugar con el problema, experimentar con casos pequeños, y notar qué cantidad "se siente" estable**. No hay atajo algorítmico; pero una vez hallado, el argumento suele caber en dos líneas y resulta, retrospectivamente, obvio. Esa sensación de "¿cómo no lo vi antes?" es la firma de un buen argumento de invariante.

## Problemas relacionados

- **(Clásico)** En un tablero $5 \times 5$ se colocan fichas alternando blanco y negro como en un tablero de ajedrez. Se permite invertir los colores de una fila o columna completa. ¿Es posible llegar a un tablero monocromático?
- **(Clásico)** Una rana salta sobre los enteros, partiendo de $0$; en cada salto avanza $3$ o retrocede $2$. ¿Puede llegar exactamente a $2024$ partiendo de $0$? *(Invariante: el residuo módulo $5$ del avance neto.)*
- **(IMO 1986/P1, esquema)** En cada vértice de un pentágono hay un entero, con suma positiva. Si tres vértices consecutivos llevan $x, y, z$ con $y < 0$, se permite reemplazar $(x,y,z)$ por $(x+y, -y, y+z)$. Demostrar que el proceso termina. *(Monovariante: una cantidad que decrece estrictamente en cada paso — no exactamente un invariante, sino su variante "monótona".)*
- **(Clásico)** Las casillas de un tablero $n \times n$ están coloreadas de blanco y negro. Una operación consiste en elegir una fila o columna e invertir todos sus colores. Caracterizar las configuraciones alcanzables desde una configuración dada.
- **(Olimpiada, clásico)** Demostrar que un caballo de ajedrez no puede recorrer las $64$ casillas de un tablero exactamente una vez cada una y regresar a su posición inicial si... *(análisis de paridad sobre el coloreado bicolor: cada movimiento de caballo cambia de color, así que un recorrido cerrado debe tener longitud par — combínese con argumentos adicionales según la variante exacta del problema).*
