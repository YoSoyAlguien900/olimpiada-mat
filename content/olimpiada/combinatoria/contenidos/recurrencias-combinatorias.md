---
title: "Recurrencias combinatorias: plantear, resolver, interpretar"
preview: "Muchas cantidades combinatorias se entienden mejor a través de la relación que guardan consigo mismas en tamaños más pequeños. Plantear la recurrencia correcta es a menudo la mitad del problema."
dificultad: regional
tags: [recurrencias, conteo, induccion, ecuacion-caracteristica]
prerequisites: [principios-conteo, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

Una **recurrencia combinatoria** expresa el valor de una cantidad $a_n$ (que cuenta objetos de "tamaño" $n$) en términos de valores $a_k$ con $k < n$. A diferencia de las recurrencias algebraicas puras —tratadas en [sucesiones y recurrencias](../../algebra/contenidos/sucesiones-recurrencias)—, aquí el énfasis está en **cómo surge la relación de un argumento de conteo**: descomponer los objetos de tamaño $n$ según alguna característica distintiva ("¿qué ocurre en la última posición?", "¿el elemento $n$ está o no está presente?") y contar cada clase en función de problemas más pequeños.

## Teorema

No existe una "fórmula maestra": el contenido de esta página es **metodológico**. No obstante, conviene tener presentes los tres patrones recurrentes:

**1. Recurrencias lineales con coeficientes constantes.** Si $a_n = c_1 a_{n-1} + \cdots + c_k a_{n-k}$, la solución general es una combinación de $r^n$ donde $r$ recorre las raíces del **polinomio característico** $x^k = c_1 x^{k-1} + \cdots + c_k$ (con las modificaciones usuales si hay raíces repetidas). Véase la teoría completa en [sucesiones y recurrencias](../../algebra/contenidos/sucesiones-recurrencias).

**2. Recurrencias "por la última pieza".** Para describir estructuras construidas secuencialmadamente (palabras, caminos, teselaciones), se condiciona sobre la naturaleza del último bloque colocado.

**3. Recurrencias "por el elemento distinguido".** Para describir subconjuntos, particiones o configuraciones de un conjunto de $n$ elementos, se condiciona sobre el papel que juega el elemento $n$ (¿está incluido?, ¿en qué bloque cae?, ¿es el máximo?).

## Demostración

No hay un teorema único que demostrar; en su lugar, ilustramos el método con cuatro derivaciones canónicas.

**(a) Fibonacci vía teselaciones.** Sea $a_n$ el número de formas de cubrir un tablero $1 \times n$ con fichas de $1\times 1$ y $1 \times 2$. La última ficha colocada es de tamaño $1$ (dejando un tablero $1\times(n-1)$) o de tamaño $2$ (dejando uno $1\times(n-2)$):
$$
a_n = a_{n-1} + a_{n-2}, \qquad a_0 = 1,\ a_1 = 1.
$$
Esto es exactamente la recurrencia de Fibonacci, $a_n = F_{n+1}$.

**(b) Subconjuntos vía el elemento distinguido.** Sea $a_{n,k} = \binom{n}{k}$ el número de subconjuntos de tamaño $k$ de $\{1,\ldots,n\}$. Condicionando sobre si $n$ pertenece o no al subconjunto, se recupera la regla de Pascal $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ — la misma demostración que en [coeficientes-binomiales](coeficientes-binomiales), vista ahora como una *recurrencia en dos variables*.

**(c) Números de Catalan vía el primer retorno.** Sea $C_n$ el número de caminos de Dyck de $(0,0)$ a $(2n, 0)$ (pasos $\pm 1$, sin bajar de $0$). Condicionando sobre el primer instante $2k$ ($1 \leq k \leq n$) en que el camino regresa a la altura $0$, se descompone en un camino de Dyck "pequeño" de longitud $2(k-1)$ (elevado una unidad) seguido de un camino de Dyck de longitud $2(n-k)$:
$$
C_n = \sum_{k=1}^{n} C_{k-1} C_{n-k}, \qquad C_0 = 1.
$$
Esta es la recurrencia de convolución que define los números de Catalan — ver [numeros-catalan](numeros-catalan).

**(d) Números de Stirling vía el elemento distinguido.** El número $S(n,k)$ de particiones de $\{1,\ldots,n\}$ en $k$ bloques no vacíos satisface
$$
S(n,k) = S(n-1,k-1) + k\cdot S(n-1,k),
$$
según si el elemento $n$ forma su propio bloque (quedan $S(n-1,k-1)$ formas de particionar el resto) o se añade a uno de los $k$ bloques ya existentes en una partición de $\{1,\ldots,n-1\}$ (hay $k \cdot S(n-1,k)$ formas). Véase [particiones-stirling-bell](particiones-stirling-bell). $\blacksquare$

## Ejemplo

**Ejemplo 1.** Sea $a_n$ el número de cadenas binarias de longitud $n$ sin dos $1$ consecutivos. Condicionando sobre el último símbolo: si termina en $0$, los $n-1$ anteriores forman una cadena válida cualquiera ($a_{n-1}$ de ellas); si termina en $1$, el penúltimo debe ser $0$ y los $n-2$ anteriores forman una cadena válida cualquiera ($a_{n-2}$). Así $a_n = a_{n-1} + a_{n-2}$ — de nuevo Fibonacci, con $a_0 = 1$, $a_1 = 2$.

**Ejemplo 2.** Sea $b_n$ el número de formas de triangular un polígono convexo de $n+2$ lados mediante diagonales que no se cruzan. Fijando un lado y condicionando sobre el vértice opuesto del triángulo que lo contiene, se obtiene $b_n = \sum_{k=0}^{n-1} b_k b_{n-1-k}$, exactamente la recurrencia de Catalan: $b_n = C_n$.

## Aplicaciones

### Resolver vía función generatriz

Cuando la recurrencia involucra una **convolución** —como $C_n = \sum_{k} C_{k-1}C_{n-k}$— la herramienta natural es la función generatriz: si $F(x) = \sum_{n\geq 0} C_n x^n$, la convolución se traduce en una ecuación *algebraica* $F(x) = 1 + xF(x)^2$, que se resuelve para $F$ y se desarrolla en serie. Este es el puente hacia [funciones-generadoras](funciones-generadoras), donde se trata el método con generalidad.

### Resolver vía biyección o forma cerrada directa

No toda recurrencia necesita resolverse "mecánicamente": a menudo conviene **conjeturar la forma cerrada a partir de los primeros términos** y demostrarla por inducción usando la propia recurrencia, o —mejor aún— encontrar una **biyección** que explique la fórmula sin pasar por la recurrencia (como la fórmula del "ciclo de reflexión" para $C_n = \frac{1}{n+1}\binom{2n}{n}$, ver [numeros-catalan](numeros-catalan)). El método biyectivo, cuando existe, suele ser más esclarecedor — véase [biyecciones](../metodos/biyecciones).

### Recurrencias con dos índices y diagonales

Muchas cantidades —$\binom{n}{k}$, $S(n,k)$, números de Stirling de primera especie— dependen de dos parámetros y satisfacen recurrencias "tipo Pascal" en dos variables. Tabularlas en un triángulo (como el de Pascal) revela patrones, simetrías y casos extremos ($k=0$, $k=n$) que orientan la búsqueda de la fórmula general.

## Observación

El paso decisivo casi nunca es "resolver" la recurrencia —eso suele ser mecánico— sino **plantearla correctamente**, eligiendo la característica distintiva adecuada para descomponer el problema. Una mala elección produce una recurrencia que "no cierra" (depende de información que no se ha contado) o que es innecesariamente complicada. La heurística útil: pregúntate *qué le puede pasar al último elemento, al elemento extremo, o al primer evento relevante*, y separa en casos disjuntos y exhaustivos.

## Problemas relacionados

- **(Clásico)** Encontrar y resolver la recurrencia para el número de formas de teselar un tablero $2 \times n$ con fichas de dominó $1\times 2$.
- **(Clásico)** Sea $a_n$ el número de subconjuntos de $\{1,\ldots,n\}$ que no contienen dos enteros consecutivos. Probar $a_n = a_{n-1} + a_{n-2}$ y deducir $a_n = F_{n+2}$.
- **(Clásico)** Hallar una recurrencia para el número $I_n$ de involuciones de $\{1,\ldots,n\}$ (permutaciones que son su propia inversa) condicionando sobre la imagen de $n$. *(Respuesta: $I_n = I_{n-1} + (n-1)I_{n-2}$.)*
- **(OMG, clásico)** ¿De cuántas formas puede subir una persona una escalera de $n$ escalones si en cada paso sube $1$, $2$ o $3$ escalones? Encontrar la recurrencia (tribonacci) y calcular el valor para $n = 10$.
- **(ISL, clásico)** Probar que el número de formas de colorear los vértices de un polígono de $n$ lados con $3$ colores de modo que vértices adyacentes tengan colores distintos satisface una recurrencia lineal, y deducir una fórmula cerrada. *(Conecta con el [polinomio cromático](coloraciones-grafos).)*
