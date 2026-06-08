---
title: "Juegos combinatorios: posiciones, estrategias y el teorema de Sprague-Grundy"
preview: "Nim, robar fichas, partir chocolatinas: detrás de cada juego de dos jugadores sin azar se esconde una estructura algebraica que determina, de antemano y con total precisión, quién gana."
dificultad: internacional
tags: [juegos, nim, sprague-grundy, estrategia, posiciones-perdedoras]
prerequisites: [invariantes-y-coloracion, induccion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Un **juego combinatorio imparcial** es un juego de dos jugadores, sin elementos de azar ni información oculta, en el que ambos jugadores disponen de los mismos movimientos desde cualquier posición, y el jugador que no puede mover **pierde** (convención normal) o **gana** (convención *misère*). Trabajaremos con la convención normal, la estándar en problemas olímpicos.

Una posición es:

- **P-posición** (anterior, *previous player wins*) si el jugador que **acaba de mover** hacia ella tiene una estrategia ganadora — equivalentemente, el jugador en turno **pierde** con juego óptimo.
- **N-posición** (siguiente, *next player wins*) si el jugador **en turno** tiene una estrategia ganadora.

## Teorema

**1. Caracterización recursiva de P- y N-posiciones.** Una posición terminal (sin movimientos) es una P-posición. Una posición no terminal es:
- una **N-posición** si existe algún movimiento hacia una P-posición;
- una **P-posición** si **todos** los movimientos llevan a N-posiciones.

**2. Teorema de Bouton para el Nim (1901).** En el juego de Nim con montones de tamaños $a_1, \ldots, a_k$ (cada jugador, en su turno, retira cualquier número positivo de fichas de un único montón), una posición es una P-posición si y solo si
$$
a_1 \oplus a_2 \oplus \cdots \oplus a_k = 0,
$$
donde $\oplus$ denota la operación **XOR a nivel de bits** (la suma de Nim).

**3. Teorema de Sprague–Grundy (1939).** Todo juego combinatorio imparcial bajo convención normal es equivalente —en el sentido de que se puede sustituir uno por otro en una suma de juegos sin alterar el resultado— a un juego de Nim de un único montón, de tamaño igual a su **valor de Grundy**
$$
\mathcal{G}(P) = \operatorname{mex}\{\mathcal{G}(P') : P' \text{ es una posición alcanzable desde } P\},
$$
donde $\operatorname{mex}(S)$ ("*minimum excludant*") es el menor entero no negativo que no pertenece a $S$. Una posición $P$ es una P-posición si y solo si $\mathcal{G}(P) = 0$.

**4. Suma de juegos.** El valor de Grundy de una suma disjunta de juegos $G_1 + G_2 + \cdots + G_k$ (en cada turno, el jugador elige un componente y mueve en él) es $\mathcal{G}(G_1) \oplus \mathcal{G}(G_2) \oplus \cdots \oplus \mathcal{G}(G_k)$.

## Demostración

**(1) Caracterización de P/N — inducción sobre la "profundidad" del juego.** Como el juego termina siempre (es finito y no hay ciclos infinitos en la mayoría de los juegos combinatorios estándar — formalmente, se requiere que el juego sea *bien fundado*), se puede inducir sobre el número máximo de movimientos restantes. Caso base: una posición terminal es P (el jugador en turno no puede mover, así que pierde — su oponente, "el jugador anterior", gana). Paso inductivo: si todos los movimientos desde $P$ llevan a N-posiciones, cualquier jugada del jugador en turno entrega a su rival una posición desde la que **él** puede ganar — así que $P$ es una P-posición; si, en cambio, existe un movimiento hacia una P-posición $P'$, el jugador en turno mueve allí, entregando a su rival una posición perdedora — así que $P$ es una N-posición. $\blacksquare$

**(2) Bouton — verificación de la caracterización recursiva para Nim.** Sea $S = a_1 \oplus \cdots \oplus a_k$.

*Si $S = 0$ (se afirma P-posición):* cualquier movimiento cambia un único $a_i$ a un valor $a_i' < a_i$, y entonces $a_1 \oplus \cdots \oplus a_i' \oplus \cdots \oplus a_k = S \oplus a_i \oplus a_i' = a_i \oplus a_i' \neq 0$ (pues $a_i \neq a_i'$). Así que **todo** movimiento desde una posición con XOR $0$ lleva a una posición con XOR $\neq 0$.

*Si $S \neq 0$ (se afirma N-posición):* sea $d$ la posición del bit más significativo de $S$ que es $1$. Existe algún $a_i$ cuyo bit $d$ es $1$ (de lo contrario ese bit de $S$ sería $0$). Sea $a_i' = a_i \oplus S$; como el bit $d$ de $S$ y de $a_i$ son ambos $1$, el bit $d$ de $a_i'$ es $0$, y los bits superiores a $d$ no cambian — así que $a_i' < a_i$, y retirar $a_i - a_i'$ fichas del montón $i$ es un movimiento legal. Tras este movimiento, $a_1 \oplus \cdots \oplus a_i' \oplus \cdots \oplus a_k = S \oplus a_i \oplus a_i' = S \oplus S = 0$.

Por inducción sobre el número total de fichas (que decrece estrictamente en cada movimiento), las posiciones con XOR $0$ son exactamente las P-posiciones. $\blacksquare$

**(3) Sprague–Grundy — esquema.** Se demuestra por inducción que $\mathcal{G}(P) = 0 \iff P$ es P-posición (caso particular: $\operatorname{mex}(\varnothing) = 0$, y una posición terminal es P). El contenido más profundo —que $\mathcal G$ codifica *toda* la información estratégica relevante, no solo "quién gana"— se demuestra junto con la fórmula de la suma (4): el valor de Grundy de una suma de juegos se calcula componente a componente vía XOR, **exactamente como en Nim**, lo que reduce el análisis de cualquier suma de juegos imparciales al análisis de Nim. Esta es la razón profunda por la que el teorema de Bouton —aparentemente un resultado aislado sobre un juego particular— resulta ser universal. $\blacksquare$

## Ejemplo

**Ejemplo 1.** Nim con montones $(3, 4, 5)$: $3 \oplus 4 \oplus 5 = 011 \oplus 100 \oplus 101 = 010 = 2 \neq 0$. Es una N-posición: el jugador en turno gana. La jugada ganadora consiste en modificar el montón cuyo bit más significativo de $S=2$ (el bit $1$) está activo —el montón de $3 = 011$ o el de $5 = 101$— para anular el XOR total; concretamente, cambiar $3 \to 3 \oplus 2 = 1$ deja $(1,4,5)$ con $1 \oplus 4 \oplus 5 = 0$.

**Ejemplo 2 (Nim de un montón — el caso trivial que todo lo explica).** Con un único montón de $n$ fichas, la P-posición es exactamente $n = 0$ — el caso terminal—, y $\mathcal{G}(n) = n$ para todo $n$ (cada movimiento permite llegar a cualquier $n' < n$, así que $\operatorname{mex}\{0,1,\ldots,n-1\} = n$). Esto confirma que "Nim de un montón" es el juego "canónico" de valor de Grundy $n$, y explica por qué Sprague–Grundy reduce todo a Nim: cualquier juego de valor $\mathcal{G}(P) = n$ se comporta —para efectos de victoria/derrota en sumas— exactamente como un montón de Nim de $n$ fichas.

## Aplicaciones

### Calcular valores de Grundy: la maquinaria estándar

Para un juego nuevo, el procedimiento sistemático es: (1) identificar las posiciones terminales (Grundy $0$); (2) calcular recursivamente $\mathcal{G}(P) = \operatorname{mex}$ de los valores de las posiciones alcanzables; (3) buscar un patrón —periodicidad, fórmula cerrada— en la tabla de valores; (4) si el juego es una suma de componentes independientes, combinar vía XOR.

**Problema (juego de retirar de dos montones — variante del Nim).** Dos montones de fichas; en cada turno se retiran $k \geq 1$ fichas de un montón, o $k \geq 1$ fichas de **ambos** montones simultáneamente (variante "Wythoff"). Las P-posiciones de este juego —llamado **Nim de Wythoff**— resultan estar dadas por una fórmula sorprendente que involucra la **razón áurea**: $(\lfloor n\varphi \rfloor, \lfloor n\varphi^2 \rfloor)$ para $n = 0, 1, 2, \ldots$, donde $\varphi = \frac{1+\sqrt 5}{2}$. Este resultado —que conecta un juego combinatorio discreto con una constante irracional clásica— ilustra cuán inesperadamente profunda puede ser la estructura de un juego de apariencia simple.

### Reconocer Nim disfrazado

La habilidad central en problemas de juegos no es calcular valores de Grundy desde cero —tedioso y propenso a errores bajo presión de examen—, sino **reconocer que un juego de apariencia distinta es, estructuralmente, Nim** (o una suma de Nims). Señales: el juego se descompone naturalmente en componentes independientes; cada movimiento afecta solo a un componente; existe una cantidad "tipo cuenta de fichas" que decrece monótonamente.

**Problema (Nim de turnos — el juego de las monedas en fila).** En una fila de $n$ casillas hay monedas en algunas posiciones; cada jugador, en su turno, mueve una moneda cualquier número de casillas hacia la izquierda, sin saltar sobre otra moneda ni ocupar su posición. Demostrar que este juego es equivalente a un Nim cuyos montones son las distancias entre monedas consecutivas (emparejadas). *Esta reducción —descubierta por Wythoff y generalizada por Berlekamp, Conway y Guy en su tratado "Winning Ways"— es el ejemplo paradigmático de cómo un disfraz geométrico esconde una estructura de Nim pura.*

### Estrategias de "espejo" e invariantes sin Grundy

No todos los problemas de juegos requieren la maquinaria completa de Sprague–Grundy: muchos se resuelven con argumentos de **simetría** ("el segundo jugador copia, reflejada, la jugada del primero") o con [invariantes](invariantes-y-coloracion) elementales (paridad del número de movimientos restantes, una cantidad que cambia monótonamente). Antes de calcular valores de Grundy, vale la pena preguntarse: *¿hay una estrategia de espejo o un invariante simple que decida el juego de un plumazo?*

## Observación

El teorema de Sprague–Grundy es un ejemplo extraordinario de **reducción estructural**: una familia aparentemente ilimitada de juegos —cualquier juego imparcial bajo convención normal, sin importar su complejidad aparente— colapsa, para efectos de análisis, a un único objeto bien entendido (Nim) y una operación algebraica simple (XOR). Es la misma filosofía que organiza tantas otras áreas de las matemáticas: identificar el "objeto canónico" al que todo lo demás es equivalente, y trasladar el problema —vía un diccionario explícito— a ese terreno conocido.

## Problemas relacionados

- **(Clásico)** En el juego de Nim con tres montones de $7$, $11$ y $13$ fichas, decidir quién gana con juego óptimo y describir la primera jugada ganadora.
- **(Clásico)** Dos jugadores se turnan para escribir, en una pizarra inicialmente vacía, un divisor de $n$ no escrito previamente que no sea múltiplo de ninguno de los ya escritos. El que no pueda mover pierde. Determinar para qué $n$ gana el primer jugador. *(Reconocer la estructura de "anticadena en el poset de divisores" — conexión con [teoria-extremal-conjuntos](../contenidos/teoria-extremal-conjuntos).)*
- **(ISL, clásico)** En el juego de "Chomp" sobre una cuadrícula $m \times n$ (cada jugador elige una casilla y retira esa casilla y todas las que están a su derecha y abajo; quien retire la casilla $(1,1)$ pierde), demostrar —mediante un argumento de **estrategia de robo** (*strategy stealing*), sin calcular valor de Grundy alguno— que el primer jugador siempre tiene una estrategia ganadora si el tablero tiene más de una casilla.
- **(Clásico)** Calcular los valores de Grundy del juego de "partir una chocolatina rectangular $m \times n$ en una sola fila o columna" y deducir las condiciones de victoria.
- **(Olimpiada, clásico)** Un juego consiste en $n$ fichas dispuestas en círculo; cada jugador retira una o dos fichas adyacentes. Demostrar, identificando la suma de Nim correspondiente a los arcos resultantes, una condición necesaria y suficiente sobre $n$ para que el primer jugador tenga estrategia ganadora.
