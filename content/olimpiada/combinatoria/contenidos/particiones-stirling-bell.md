---
title: "Números de Stirling, de Bell y particiones de conjuntos y enteros"
preview: "¿De cuántas formas se reparte un conjunto en bloques no vacíos? ¿Y un entero en sumandos? Dos familias de números —Stirling y de partición— que organizan toda la combinatoria de las descomposiciones."
dificultad: nacional
tags: [stirling, bell, particiones, conteo, recurrencias]
prerequisites: [coeficientes-binomiales, recurrencias-combinatorias, inclusion-exclusion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

**Partición de un conjunto.** Una partición de $\{1,\ldots,n\}$ en $k$ bloques es una familia de subconjuntos no vacíos, disjuntos dos a dos, cuya unión es $\{1,\ldots,n\}$ —sin importar el orden de los bloques. El **número de Stirling de segunda especie** $S(n,k)$ (también escrito $\genfrac\{\}{0pt}{}{n}{k}$) cuenta estas particiones. El **número de Bell** $B_n = \sum_{k=0}^{n} S(n,k)$ cuenta *todas* las particiones de $\{1,\ldots,n\}$, sin fijar el número de bloques.

**Permutaciones por ciclos.** El **número de Stirling de primera especie (sin signo)** $c(n,k) = \big[{n \atop k}\big]$ cuenta las permutaciones de $\{1,\ldots,n\}$ que se descomponen en exactamente $k$ ciclos disjuntos.

**Partición de un entero.** Una partición de $n$ es una forma de escribir $n = \lambda_1 + \lambda_2 + \cdots + \lambda_r$ con $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_r \geq 1$, **sin importar el orden** (a diferencia de las composiciones). El número de tales particiones es $p(n)$.

## Teorema

**1. Recurrencias tipo Pascal.**
$$
S(n,k) = S(n-1,k-1) + k\, S(n-1,k), \qquad c(n,k) = c(n-1,k-1) + (n-1)\,c(n-1,k).
$$

**2. Identidad de cambio de base.** Las potencias factoriales decrecientes $x^{\underline{k}} = x(x-1)\cdots(x-k+1)$ y las potencias ordinarias $x^k$ están relacionadas por
$$
x^n = \sum_{k=0}^{n} S(n,k)\, x^{\underline k}, \qquad x^{\underline n} = \sum_{k=0}^n (-1)^{n-k} c(n,k)\, x^k.
$$
Es decir, $S(n,k)$ y $(-1)^{n-k}c(n,k)$ son matrices de cambio de base inversas entre sí.

**3. Fórmula explícita de $S(n,k)$ (vía PIE).**
$$
S(n,k) = \frac{1}{k!}\sum_{j=0}^{k} (-1)^{j}\binom{k}{j}(k-j)^n.
$$

**4. Fórmula de Dobinski para los números de Bell.**
$$
B_n = \frac{1}{e}\sum_{k=0}^{\infty} \frac{k^n}{k!}.
$$

**5. Función de partición $p(n)$ — identidad de Euler.** El número de particiones de $n$ en partes distintas es igual al número de particiones de $n$ en partes impares (ver [funciones-generadoras](funciones-generadoras)).

## Demostración

**(1) Recurrencia de $S(n,k)$.** Toda partición de $\{1,\ldots,n\}$ en $k$ bloques cae en una de dos clases disjuntas: aquellas en que $\{n\}$ es un bloque unitario (eliminar ese bloque da una partición de $\{1,\ldots,n-1\}$ en $k-1$ bloques: $S(n-1,k-1)$ formas), y aquellas en que $n$ comparte bloque con otros elementos (eliminar $n$ de su bloque da una partición de $\{1,\ldots,n-1\}$ en $k$ bloques, y hay $k$ formas de re-insertar $n$ en uno de esos $k$ bloques: $k \cdot S(n-1,k)$ formas). $\square$

La recurrencia de $c(n,k)$ es análoga: en una permutación de $\{1,\ldots,n\}$ con $k$ ciclos, o bien $n$ forma un ciclo de longitud $1$ (eliminar ese ciclo da una permutación de $\{1,\ldots,n-1\}$ con $k-1$ ciclos: $c(n-1,k-1)$), o bien $n$ se inserta en uno de los $n-1$ "huecos" disponibles entre elementos consecutivos de los ciclos de una permutación de $\{1,\ldots,n-1\}$ con $k$ ciclos: $(n-1)\cdot c(n-1,k)$ formas. $\square$

**(3) Fórmula vía PIE.** $S(n,k)$ es el número de formas de partir $\{1,\ldots,n\}$ en $k$ bloques no vacíos *no etiquetados*. El número de funciones **sobreyectivas** de $\{1,\ldots,n\}$ a $\{1,\ldots,k\}$ —que sí distingue los bloques (cada función define una partición ordenada)— es $k! \cdot S(n,k)$, y por la fórmula de funciones sobreyectivas vía PIE (ver [inclusion-exclusion](inclusion-exclusion)):
$$
k!\, S(n,k) = \sum_{j=0}^{k}(-1)^j\binom{k}{j}(k-j)^n. \qquad \square
$$

**(2) Cambio de base.** Inducción sobre $n$ usando las recurrencias de (1): el caso $n=0$ es trivial, y el paso inductivo se reduce a verificar $x \cdot x^{\underline{k}} = x^{\underline{k+1}} + k\, x^{\underline k}$ (identidad elemental con factoriales decrecientes), que reproduce exactamente la recurrencia de Stirling. $\square$

## Ejemplo

**Ejemplo 1.** $S(4,2) = 7$: las particiones de $\{1,2,3,4\}$ en $2$ bloques son
$$
\{1\}\{234\},\ \{2\}\{134\},\ \{3\}\{124\},\ \{4\}\{123\},\ \{12\}\{34\},\ \{13\}\{24\},\ \{14\}\{23\}.
$$

**Ejemplo 2.** $c(4,2) = 11$: las permutaciones de $\{1,2,3,4\}$ con exactamente $2$ ciclos. (Comparar con $S(4,2)=7$: la diferencia es que los ciclos llevan estructura interna —un ciclo de longitud $\ell$ se puede escribir de $(\ell-1)!$ formas distintas como sucesión cíclica—.)

**Ejemplo 3.** Los números de Bell $B_0,\ldots,B_5 = 1,1,2,5,15,52$ se generan por el **triángulo de Bell**: cada fila empieza con el último elemento de la fila anterior, y cada entrada subsiguiente es la suma de la anterior en la misma fila y la que está encima de ella. Esta construcción es la traducción combinatoria directa de la recurrencia $B_{n+1} = \sum_{k=0}^{n}\binom{n}{k}B_k$ (condicionar sobre el bloque que contiene al elemento $n+1$).

## Aplicaciones

### De Stirling a Catalan y de vuelta: el arte de cambiar de "alfabeto"

Los números de Stirling, Bell y Catalan son ejemplos de una idea más amplia: **distintas estructuras combinatorias se "traducen" entre sí mediante biyecciones**, y reconocer estas traducciones permite trasladar resultados (fórmulas, recurrencias, asintóticas) de un contexto a otro. Por ejemplo: las particiones de $\{1,\ldots,n\}$ en bloques *no cruzados* (al disponer los elementos en círculo, ningún par de bloques "se entrelaza") están en biyección con los caminos de Dyck, y su número es exactamente $C_n$ — un puente directo entre [numeros-catalan](numeros-catalan) y esta página.

### Particiones de enteros y el pentágono de Euler

**Problema.** Calcular $p(n)$ para $n$ pequeño y estudiar su crecimiento.

La función generatriz de $p(n)$ es el producto infinito $\prod_{k\geq 1}\frac{1}{1-x^k}$ (cada factor codifica "cuántas veces aparece la parte $k$"). El **teorema del número pentagonal de Euler**,
$$
\prod_{k\geq 1}(1 - x^k) = \sum_{j=-\infty}^{\infty} (-1)^j x^{j(3j-1)/2},
$$
produce una recurrencia sorprendentemente eficiente para $p(n)$ en términos de los **números pentagonales** $\frac{j(3j-1)}{2}$, y es uno de los resultados más bellos —y más citados en problemas de identidades de particiones— de toda la teoría.

### Cota superior para $S(n,k)$ y $B_n$

**Problema.** Probar que $B_n \leq n!$.

**Solución.** Cada partición de $\{1,\ldots,n\}$ define, eligiendo un representante mínimo en cada bloque y ordenando los bloques por su representante, una correspondencia inyectiva (no biyectiva) hacia ciertas estructuras contadas por $n!$; alternativamente, $B_n = \sum_k S(n,k) \leq \sum_k k! \, S(n,k) = \sum_k (\text{funciones sobreyectivas a } [k]) \leq n^n$, cota más débil pero instructiva. Una cota más fina, $B_n \leq \left(\frac{0{,}792 n}{\ln(n+1)}\right)^n$, se obtiene de la fórmula de Dobinski; en el contexto olímpico basta usualmente una estimación cruda seguida de inducción. $\blacksquare$

## Observación

La relación $x^n = \sum_k S(n,k) x^{\underline k}$ —y su inversa— es el ejemplo arquetípico de **cambio de base entre familias de polinomios**, una idea que reaparece en el cálculo de diferencias finitas (donde $x^{\underline k}$ juega el papel de $x^k$ en el cálculo diferencial usual), en la fórmula de interpolación de Newton, y en la teoría de polinomios ortogonales. Reconocer que dos sucesiones de "objetos básicos" están relacionadas por una matriz triangular invertible es, a menudo, la observación que organiza una familia entera de identidades aparentemente dispares.

## Problemas relacionados

- **(Clásico)** Probar que $\sum_{k} S(n,k)\, k^{\underline j} = $ (número de funciones de $\{1,\ldots,n\}$ a $\{1,\ldots,j\}$ sobreyectivas en al menos... ) — explorar la identidad y dar una prueba combinatoria.
- **(Clásico)** Demostrar que $c(n,1) = (n-1)!$ y dar una interpretación: ¿cuántas permutaciones de $\{1,\ldots,n\}$ son un único $n$-ciclo?
- **(ISL, clásico)** Probar que el número de permutaciones de $\{1,\ldots,n\}$ sin ciclos de longitud $1$ (sin puntos fijos) admite una expresión en términos de los números de Stirling de primera especie y coincide con el número de desarreglos $D_n$ de [inclusion-exclusion](inclusion-exclusion).
- **(Clásico)** Calcular $p(10)$ a mano enumerando sistemáticamente las particiones, y verificar el valor mediante la recurrencia pentagonal de Euler.
- **(Clásico)** Probar que el número de particiones de $\{1,\ldots,2n\}$ en bloques de tamaño $2$ (emparejamientos perfectos) es $(2n-1)!! = (2n-1)(2n-3)\cdots 3 \cdot 1$, y relacionarlo con $S(2n, n)$ restringido a bloques de tamaño $2$.
