---
title: "Funciones generadoras"
preview: "Codificar una sucesión como los coeficientes de una serie de potencias convierte problemas de conteo en manipulaciones algebraicas. Una de las ideas más fértiles de toda la combinatoria."
dificultad: nacional
tags: [funciones-generadoras, series-formales, conteo, convolucion]
prerequisites: [coeficientes-binomiales, recurrencias-combinatorias]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

La **función generatriz (ordinaria)** de una sucesión $(a_n)_{n \geq 0}$ es la serie formal de potencias
$$
A(x) = \sum_{n=0}^{\infty} a_n x^n.
$$
La palabra "formal" es esencial: $x$ no es un número sino un símbolo que lleva la cuenta del índice; no nos preocupa la convergencia, sino la **igualdad de coeficientes**. Esta libertad —tratar $A(x)$ como un objeto algebraico manipulable— es lo que convierte preguntas de conteo en cálculos con polinomios y series.

La operación clave es el **producto de Cauchy** (convolución):
$$
A(x)B(x) = \sum_{n=0}^{\infty}\Big(\sum_{k=0}^{n} a_k b_{n-k}\Big)x^n,
$$
que codifica exactamente la regla del producto: el coeficiente de $x^n$ en $A(x)B(x)$ cuenta las formas de "repartir" $n$ entre dos elecciones independientes.

## Teorema

**Diccionario básico.** Las siguientes correspondencias son la base de (casi) todas las aplicaciones:

| Función generatriz | Sucesión de coeficientes |
|---|---|
| $\dfrac{1}{1-x} = 1 + x + x^2 + \cdots$ | $a_n = 1$ |
| $\dfrac{1}{(1-x)^{k+1}}$ | $a_n = \binom{n+k}{k}$ |
| $(1+x)^k$ | $a_n = \binom{k}{n}$ |
| $e^x = \sum \dfrac{x^n}{n!}$ | $a_n = \dfrac{1}{n!}$ |
| $\dfrac{1}{1-x-x^2}$ | $a_n = F_{n+1}$ (Fibonacci) |
| $\dfrac{1 - \sqrt{1-4x}}{2x}$ | $a_n = C_n$ (Catalan) |

**Principio de traducción.** Una *recurrencia lineal* sobre $(a_n)$ se traduce en una *ecuación funcional/algebraica* sobre $A(x)$, y viceversa; una *condición de construcción combinatoria* (elegir un objeto de un tipo y otro de otro tipo, de forma independiente y "aditiva" en el tamaño) se traduce en un *producto* de funciones generadoras.

## Demostración

Ilustramos el principio de traducción —el verdadero "teorema" de esta teoría— con dos derivaciones representativas.

**(a) De recurrencia a función generatriz: Fibonacci.** Sea $F(x) = \sum_{n\geq 0} F_n x^n$ con $F_0 = 0, F_1 = 1$, $F_n = F_{n-1}+F_{n-2}$ para $n \geq 2$. Multiplicamos la recurrencia por $x^n$ y sumamos para $n \geq 2$:
$$
\sum_{n\geq 2} F_n x^n = \sum_{n \geq 2} F_{n-1}x^n + \sum_{n\geq 2} F_{n-2} x^n = x\big(F(x) - F_0\big) + x^2 F(x).
$$
El lado izquierdo es $F(x) - F_0 - F_1 x = F(x) - x$. Resolviendo,
$$
F(x) - x = xF(x) + x^2 F(x) \;\Longrightarrow\; F(x) = \frac{x}{1 - x - x^2}.
$$
Esta identidad algebraica —obtenida sin "adivinar" nada— es el punto de partida estándar para extraer la fórmula de Binet vía descomposición en fracciones simples (ver [sucesiones y recurrencias](../../algebra/contenidos/sucesiones-recurrencias)). $\square$

**(b) De construcción a producto: composiciones.** Una *composición* de $n$ es una forma de escribir $n = c_1 + c_2 + \cdots + c_k$ con $c_i \geq 1$ enteros, **importando el orden**. Cada parte $c_i \geq 1$ tiene función generatriz $x + x^2 + x^3 + \cdots = \frac{x}{1-x}$ (un sumando de tamaño $m$ contribuye $x^m$). Una composición con exactamente $k$ partes corresponde al producto de $k$ copias:
$$
\left(\frac{x}{1-x}\right)^k,
$$
y sumando sobre todos los $k \geq 1$ (número de partes libre):
$$
\sum_{k\geq 1}\left(\frac{x}{1-x}\right)^k = \frac{x/(1-x)}{1 - x/(1-x)} = \frac{x}{1-2x}.
$$
Como $\frac{x}{1-2x} = \sum_{n \geq 1} 2^{n-1} x^n$, concluimos que **el número de composiciones de $n$ es $2^{n-1}$** — un resultado que también se obtiene biyectivamente (cada composición corresponde a un subconjunto de las $n-1$ "separaciones" entre unidades consecutivas). $\blacksquare$

## Ejemplo

**Ejemplo 1 (estrellas y barras, revisitado).** El número de soluciones de $x_1 + \cdots + x_k = n$ con $x_i \geq 0$ es el coeficiente de $x^n$ en
$$
\left(\frac{1}{1-x}\right)^k = \sum_{n \geq 0} \binom{n+k-1}{k-1} x^n,
$$
recuperando $\binom{n+k-1}{k-1}$ sin pasar por el argumento combinatorio directo — y generalizando de inmediato a restricciones como $x_i \geq 2$ (basta usar $\frac{x^2}{1-x}$ en lugar de $\frac{1}{1-x}$) o $x_i$ par (usar $\frac{1}{1-x^2}$).

**Ejemplo 2 (particiones en partes distintas vs. partes impares).** La función generatriz de las particiones de $n$ en partes **distintas** es $\prod_{k\geq 1}(1+x^k)$, y la de particiones en partes **impares** es $\prod_{k\geq 0}\frac{1}{1-x^{2k+1}}$. La identidad
$$
\prod_{k\geq 1}(1+x^k) = \prod_{k \geq 0} \frac{1}{1-x^{2k+1}}
$$
—que se demuestra escribiendo $1 + x^k = \frac{1-x^{2k}}{1-x^k}$ y telescopando— es el célebre **teorema de Euler sobre particiones**: *el número de particiones de $n$ en partes distintas es igual al número de particiones de $n$ en partes impares*. Glaisher dio después una demostración biyectiva directa.

## Aplicaciones

### Resolución de recurrencias de convolución (Catalan)

Si $C(x) = \sum C_n x^n$ con $C_n = \sum_{k=0}^{n-1} C_k C_{n-1-k}$ y $C_0 = 1$, la convolución se traduce exactamente en $C(x) = 1 + x C(x)^2$. Resolviendo la ecuación cuadrática,
$$
C(x) = \frac{1 - \sqrt{1-4x}}{2x},
$$
y el desarrollo en serie de $\sqrt{1-4x}$ vía el teorema del binomio generalizado produce $C_n = \frac{1}{n+1}\binom{2n}{n}$. Véase [numeros-catalan](numeros-catalan) para los detalles y una demostración biyectiva alternativa de la fórmula cerrada.

### Funciones generadoras exponenciales (EGF)

Para sucesiones donde el orden de los elementos importa dentro de cada "bloque" (permutaciones, funciones, estructuras etiquetadas), conviene la **función generatriz exponencial**
$$
\hat A(x) = \sum_{n \geq 0} a_n \frac{x^n}{n!}.
$$
La ventaja: el producto de EGFs corresponde a "repartir un conjunto etiquetado en dos bloques disjuntos y estructurar cada uno independientemente" —exactamente el tipo de construcción que aparece al contar permutaciones por ciclos, funciones por fibras, o particiones en bloques (números de Stirling y Bell, ver [particiones-stirling-bell](particiones-stirling-bell)). Por ejemplo, $\hat A(x) = e^x$ codifica "elegir un subconjunto y ordenarlo arbitrariamente" y aparece en la fórmula exponencial $e^{e^x - 1} = \sum_n B_n \frac{x^n}{n!}$ para los números de Bell.

### Extracción de coeficientes y estimaciones asintóticas

Más allá del cálculo exacto, la **forma analítica** de $A(x)$ —en particular la ubicación de su singularidad más cercana al origen— determina el comportamiento asintótico de $a_n$ (teoría de Flajolet–Sedgewick). Si bien esto excede el ámbito olímpico habitual, justifica por qué $C_n \sim \frac{4^n}{n^{3/2}\sqrt\pi}$ y por qué tantas sucesiones combinatorias crecen como $c \cdot r^{-n} n^{-3/2}$: la singularidad dominante de tipo "raíz cuadrada" es omnipresente en estructuras "tipo árbol".

## Observación

Las funciones generadoras son el puente natural entre la combinatoria y el análisis y el álgebra: convierten **identidades de conteo** en **identidades de series**, donde las herramientas (sustitución, derivación formal, composición, el teorema del binomio generalizado) son mecánicas y fiables. El precio es la abstracción inicial; la recompensa es que problemas que parecen requerir "un truco" para cada caso particular se resuelven todos con la misma maquinaria. En el contexto olímpico, suelen ser más útiles como **herramienta de descubrimiento** (encontrar la fórmula cerrada candidata) que como solución final —que después conviene verificar o reescribir de forma elemental.

## Problemas relacionados

- **(Clásico)** Usando funciones generadoras, encontrar el número de formas de pagar $n$ euros con monedas de $1$, $2$ y $5$ euros (el orden no importa).
- **(Clásico)** Probar la identidad $\sum_{k=0}^n \binom{n}{k}F_k = F_{2n}$ usando funciones generadoras (o, alternativamente, una biyección).
- **(ISL, clásico)** Demostrar que el número de particiones de $n$ en partes distintas e impares simultáneamente tiene una interpretación en términos de particiones autoconjugadas.
- **(Putnam, clásico)** Sea $a_n$ el número de sucesiones $(\epsilon_1,\ldots,\epsilon_n) \in \{-1,0,1\}^n$ sin dos términos consecutivos ambos no nulos. Encontrar $\sum a_n x^n$ en forma cerrada.
- **(Clásico)** Demostrar el teorema de Euler sobre particiones (partes distintas $\leftrightarrow$ partes impares) construyendo una biyección explícita (algoritmo de Glaisher), y comparar con la demostración vía funciones generadoras de esta página.
