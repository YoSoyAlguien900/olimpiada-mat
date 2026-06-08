---
title: "Números de Catalan"
preview: "Caminos de Dyck, triangulaciones de polígonos, árboles binarios, expresiones bien formadas: docenas de objetos aparentemente distintos, todos contados por la misma sucesión $1,1,2,5,14,42,\\ldots$"
dificultad: nacional
tags: [catalan, biyecciones, caminos-reticulares, conteo]
prerequisites: [coeficientes-binomiales, recurrencias-combinatorias]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **$n$-ésimo número de Catalan** es
$$
C_n = \frac{1}{n+1}\binom{2n}{n}, \qquad n = 0, 1, 2, \ldots
$$
con valores $C_0=1,\ C_1=1,\ C_2=2,\ C_3=5,\ C_4=14,\ C_5=42,\ C_6=132,\ldots$

Su ubicuidad es asombrosa: Richard Stanley cataloga **más de doscientas** familias de objetos combinatorios contadas por $C_n$. Las tres formulaciones canónicas, todas equivalentes:

- **Caminos de Dyck.** Caminos reticulares de $(0,0)$ a $(2n,0)$ con pasos $(1,1)$ y $(1,-1)$ que nunca bajan del eje $x$.
- **Secuencias de paréntesis balanceados.** Cadenas de $n$ pares "(" ")" correctamente anidadas.
- **Triangulaciones.** Formas de dividir un polígono convexo de $n+2$ lados en triángulos mediante diagonales que no se cruzan.

## Teorema

**1. Fórmula cerrada.** $\displaystyle C_n = \frac{1}{n+1}\binom{2n}{n} = \binom{2n}{n} - \binom{2n}{n+1}$.

**2. Recurrencia de convolución.** $\displaystyle C_n = \sum_{k=0}^{n-1} C_k\, C_{n-1-k}$, con $C_0 = 1$.

**3. Razón consecutiva.** $\displaystyle \frac{C_{n+1}}{C_n} = \frac{2(2n+1)}{n+2}$, de donde $C_n$ es siempre entero (no evidente a priori, dado el cociente que lo define).

**4. Asintótica.** $\displaystyle C_n \sim \frac{4^n}{n^{3/2}\sqrt{\pi}}$.

## Demostración

**(Equivalencia de las tres formulaciones — biyecciones).** Una secuencia de paréntesis se traduce en un camino de Dyck identificando "(" $\to (1,1)$ y ")" $\to (1,-1)$; la condición "nunca hay más ')' que '(' en ningún prefijo" es exactamente "el camino nunca baja del eje $x$". Para las triangulaciones: fijamos un lado distinguido del polígono y, recursivamente, asociamos a cada triangulación un árbol binario completo (el triángulo que contiene el lado fijo es la raíz, y sus dos lados restantes generan recursivamente los subárboles izquierdo y derecho); los árboles binarios completos con $n$ nodos internos están en biyección con las secuencias de paréntesis balanceadas (recorrido en profundidad). $\square$

**(Recurrencia, vía "primer retorno a cero").** En un camino de Dyck de $(0,0)$ a $(2n,0)$, sea $2k$ ($1 \le k \le n$) el primer instante en que el camino vuelve a tocar el eje $x$. Entre $0$ y $2k$, el camino sube, permanece estrictamente positivo en el interior, y baja: quitando el primer y el último paso queda un camino de Dyck de longitud $2(k-1)$ (hay $C_{k-1}$ de ellos). Tras $2k$, el resto es un camino de Dyck de longitud $2(n-k)$ ($C_{n-k}$ de ellos). Por la regla del producto y sumando sobre $k$:
$$
C_n = \sum_{k=1}^{n} C_{k-1}\,C_{n-k} = \sum_{j=0}^{n-1} C_j\, C_{n-1-j}. \qquad \square
$$

**(Fórmula cerrada, vía el principio de reflexión — la demostración "del libro").** Contamos caminos de $(0,0)$ a $(2n, 0)$ con pasos $\pm 1$ que **no bajan de $0$**. El total de caminos de $(0,0)$ a $(2n,0)$ (sin restricción) es $\binom{2n}{n}$. Un camino "malo" toca $-1$ en algún momento; sea $t$ el **primer** instante en que esto ocurre. Reflejamos la porción del camino posterior a $t$ respecto de la recta $y = -1$. Esto produce una biyección entre caminos malos de $(0,0)$ a $(2n,0)$ y caminos arbitrarios de $(0,0)$ a $(2n, -2)$ (pues el punto final $(2n,0)$ se refleja a $(2n,-2)$). El número de estos últimos es $\binom{2n}{n+1}$ (se necesitan $n+1$ pasos hacia abajo y $n-1$ hacia arriba). Por lo tanto
$$
C_n = \binom{2n}{n} - \binom{2n}{n+1} = \binom{2n}{n}\left(1 - \frac{n}{n+1}\right) = \frac{1}{n+1}\binom{2n}{n}. \qquad \blacksquare
$$

*(Una tercera demostración —vía funciones generadoras, resolviendo $C(x) = 1 + xC(x)^2$— se presenta con detalle en* [catalan-formula-demos](../demostraciones/catalan-formula-demos)*.)*

## Ejemplo

**Ejemplo 1.** $C_3 = 5$: las cinco triangulaciones de un pentágono, las cinco secuencias `()()()`,` ()(())`, `(())()`, `(()())`, `((()))`, y los cinco árboles binarios completos con $3$ nodos internos —todos en correspondencia biyectiva explícita.

**Ejemplo 2 (problema de las urnas / escrutinio, Bertrand).** En una elección entre dos candidatos $A$ y $B$ con $A$ ganando $a$ votos a $b$ ($a > b$), la probabilidad de que $A$ vaya **estrictamente por delante** durante todo el recuento es $\frac{a-b}{a+b}$ — el **teorema del escrutinio de Bertrand**, cuya demostración es esencialmente el mismo principio de reflexión.

## Aplicaciones

### Reconocer a Catalan disfrazado

La habilidad central, una vez se conocen las fórmulas, es **reconocer cuándo un problema de conteo es "Catalan disfrazado"**. Las señales típicas: una condición de "no cruzar" o "nunca exceder" (caminos que no bajan de $0$, diagonales que no se cortan, paréntesis que nunca quedan "abiertos en exceso"), o una recursión natural por descomposición en dos partes independientes de tamaños complementarios.

**Problema.** ¿De cuántas formas se puede triangular un polígono convexo de $12$ lados con diagonales que no se crucen?

**Solución.** Es $C_{10} = \frac{1}{11}\binom{20}{10} = 16\,796$. $\blacksquare$

**Problema.** En una fila hay $2n$ personas, $n$ con un billete de $5$€ y $n$ con uno de $10$€; la entrada cuesta $5$€ y la taquillera empieza sin cambio. ¿De cuántas formas pueden ordenarse las personas para que la taquillera siempre pueda dar cambio?

**Solución.** Codificando "billete de $5$" como paso $+1$ y "billete de $10$" como $-1$, la condición "siempre hay cambio suficiente" es precisamente "el camino nunca baja de $0$": la respuesta es $C_n$. $\blacksquare$

### El triángulo de Catalan y refinamientos

Igual que $\binom{n}{k}$ refina $2^n$ por tamaño, el **triángulo de Catalan** $T(n,k)$ —que cuenta caminos de $(0,0)$ a $(n,k)$ que no cruzan la diagonal— refina $C_n = T(2n,0)$ y satisface su propia recurrencia tipo Pascal. Estos refinamientos son la puerta de entrada a la **combinatoria de funciones simétricas y particiones**, y aparecen con frecuencia en problemas de nivel internacional que piden contar caminos con restricciones más finas que "nunca bajar de $0$".

## Observación

Que $C_n$ sea un entero —pese a su definición como cociente— es ya una pista de que admite una interpretación combinatoria directa; cuando una fórmula con factoriales y cocientes resulta ser entera, **buscar el conjunto que cuenta** suele ser más esclarecedor que verificar la divisibilidad algebraicamente. Esta heurística —"si es entero, cuenta algo"— es transversal a toda la combinatoria enumerativa y conecta directamente con identidades de teoría de números (ver [teorema de Lucas para binomiales](../../teoria-numeros/contenidos/teorema-lucas-binomial)).

## Problemas relacionados

- **(Clásico)** ¿De cuántas formas se puede triangular un hexágono regular con diagonales que no se crucen? Verificar a mano que la respuesta es $C_4 = 14$.
- **(Clásico)** Probar que el número de árboles binarios completos con $n$ hojas es $C_{n-1}$.
- **(ISL, clásico)** Demostrar que el número de formas de emparejar $2n$ puntos en una circunferencia mediante $n$ cuerdas que no se cruzan es $C_n$.
- **(Clásico)** Probar la identidad $\sum_{k=0}^{n} C_k C_{n-k} \binom{2k}{k}\binom{2(n-k)}{n-k} = \binom{2n+1}{n}\frac{2}{n+1}$ explorando casos pequeños. *(Avanzado: combina convolución de Catalan con coeficientes centrales.)*
- **(Clásico, escrutinio de Bertrand)** En una votación $2$ a $1$ a favor de $A$ sobre $B$ con $3n$ votos en total, calcular la probabilidad de que $A$ esté siempre estrictamente por delante durante el recuento, y verificar la fórmula $\frac{a-b}{a+b}$.
