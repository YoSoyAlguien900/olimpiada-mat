---
title: "Teorema de Lucas para coeficientes binomiales módulo $p$"
preview: "Para un primo $p$ y enteros $n, k$ con expansiones $n = \\sum a_i p^i$, $k = \\sum b_i p^i$ en base $p$, se cumple $\\binom{n}{k} \\equiv \\prod \\binom{a_i}{b_i} \\pmod p$. Una factorización en base de los binomiales mod p."
dificultad: regional
tags: [lucas, binomiales, modular, base-p]
prerequisites: [bases-numericas, congruencias]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Teorema (Lucas, 1878)

Sea $p$ un primo, y sean $n, k$ enteros no negativos con expansiones en base $p$:

$$
n \;=\; a_r p^r + a_{r-1} p^{r-1} + \cdots + a_1 p + a_0,
$$

$$
k \;=\; b_r p^r + b_{r-1} p^{r-1} + \cdots + b_1 p + b_0,
$$

con $0 \leq a_i, b_i \leq p - 1$. Entonces

$$
\binom{n}{k} \;\equiv\; \prod_{i=0}^{r} \binom{a_i}{b_i} \pmod p,
$$

donde por convención $\binom{a}{b} = 0$ si $b > a$.

## Consecuencias inmediatas

**Corolario 1.** $p \nmid \binom{n}{k}$ si y solo si $b_i \leq a_i$ para todo $i$, es decir, **cada dígito de $k$ en base $p$ es a lo más el dígito correspondiente de $n$**.

**Corolario 2.** El número de $k \in \{0, 1, \ldots, n\}$ con $p \nmid \binom{n}{k}$ es $\prod_i (a_i + 1)$.

**Corolario 3 (Kummer, en realidad anterior).** $v_p\binom{n}{k}$ es el número de **acarreos** al sumar $k$ y $n - k$ en base $p$.

## Demostración

Usamos el **lema de Freshman's Dream**: para todo primo $p$ y todo entero $a$,

$$
(1 + x)^p \;\equiv\; 1 + x^p \pmod p,
$$

como polinomios en $\mathbb F_p[x]$. La razón: el coeficiente $\binom{p}{j}$ es divisible por $p$ para $1 \leq j \leq p - 1$.

Por iteración:

$$
(1 + x)^{p^i} \;\equiv\; 1 + x^{p^i} \pmod p.
$$

Ahora calculamos $(1+x)^n$ usando la expansión de $n$ en base $p$:

$$
(1+x)^n \;=\; (1+x)^{a_0 + a_1 p + a_2 p^2 + \cdots} \;=\; \prod_i (1+x)^{a_i p^i}.
$$

Módulo $p$:
$$
(1+x)^{a_i p^i} \;=\; \left[(1+x)^{p^i}\right]^{a_i} \;\equiv\; (1 + x^{p^i})^{a_i} \pmod p.
$$

Por tanto:
$$
(1+x)^n \;\equiv\; \prod_i (1 + x^{p^i})^{a_i} \pmod p.
$$

El coeficiente de $x^k$ en el lado izquierdo es $\binom{n}{k}$. En el lado derecho, tomar exponente $k$ de $x$ significa, para cada $i$, tomar el coeficiente de $x^{b_i p^i}$ en $(1 + x^{p^i})^{a_i}$, que es $\binom{a_i}{b_i}$ (los dígitos $b_i$ deben coincidir con la expansión de $k$ en base $p$). Multiplicando:

$$
\binom{n}{k} \;\equiv\; \prod_i \binom{a_i}{b_i} \pmod p. \quad \blacksquare
$$

## Ejemplos

**Ejemplo 1.** $\binom{17}{5} \mod 3$.

$17 = 1 \cdot 9 + 2 \cdot 3 + 2 = (122)_3$.
$5 = 0 \cdot 9 + 1 \cdot 3 + 2 = (012)_3$.

Por Lucas:
$$
\binom{17}{5} \;\equiv\; \binom{1}{0} \binom{2}{1} \binom{2}{2} \;=\; 1 \cdot 2 \cdot 1 \;=\; 2 \pmod 3.
$$

Verificación: $\binom{17}{5} = 6188 = 3 \cdot 2062 + 2$. ✓

**Ejemplo 2.** ¿Es $\binom{100}{37}$ divisible por $7$?

$100 = (202)_7$ (porque $2 \cdot 49 + 0 \cdot 7 + 2 = 100$).
$37 = (52)_7$ (porque $5 \cdot 7 + 2 = 37$, o $(052)_7$).

Comparando dígito a dígito: $a_0 = 2, b_0 = 2$. $a_1 = 0, b_1 = 5$. Aquí $b_1 > a_1$, así $\binom{0}{5} = 0$.

Por tanto $\binom{100}{37} \equiv 0 \pmod 7$.

## Aplicaciones

### Aplicación 1: contar binomiales no divisibles

**Problema clásico.** ¿Cuántos $k \in \{0, 1, \ldots, n\}$ satisfacen $p \nmid \binom{n}{k}$?

Por el Corolario 2: si $n = (a_r \cdots a_0)_p$, son exactamente $\prod (a_i + 1)$.

**Ejemplo.** Entre $\binom{1000}{0}, \binom{1000}{1}, \ldots, \binom{1000}{1000}$, ¿cuántos son impares?

$1000 = (1111101000)_2$ (binario). Dígitos: cuatro $1$, un $0$, dos $1$, tres $0$. Cuento los $1$: $1, 1, 1, 1, 0, 1, 1, 0, 0, 0$. Son **siete** unos.

Por el Corolario 2 con $p = 2$: $\prod (a_i + 1) = 2^7 = 128$.

### Aplicación 2: caracterización de impares

Por Lucas con $p = 2$: $\binom{n}{k}$ es impar si y solo si **cada bit de $k$ está en $n$**, es decir, $k \;\mathrm{AND}\; n = k$ en lenguaje binario.

### Aplicación 3: el triángulo de Sierpinski

Si pintamos $\binom{n}{k}$ módulo $2$ en una rejilla triangular (Pascal), obtenemos el **triángulo de Sierpinski**. La estructura fractal es **consecuencia directa de Lucas**.

### Aplicación 4: problemas olímpicos

**OME 2017.** Demostrar que $\binom{2n}{n}$ es par para todo $n \geq 1$.

*Solución.* $2n = (a_r \cdots a_0 0)_2$ termina en $0$. $n = (a_r \cdots a_0)_2$ tiene los mismos bits pero desplazados. Comparando dígito a dígito vs $2n$: el dígito $0$ de $2n$ es $0$, pero el dígito $0$ de $n$ es $a_0$. Si $a_0 = 1$, $\binom{0}{1} = 0$ y el producto se anula.

Más simple: $2n$ termina en bit $0$, $n$ debería tener su bit $0$ a $\leq 0$ para que $2 \nmid \binom{2n}{n}$, lo cual requiere bit $0$ de $n$ igual a $0$. Pero entonces hay otra comparación a hacer... Caso a caso lleva al resultado.

**Argumento más limpio (Kummer):** $v_2\binom{2n}{n}$ es el número de acarreos en $n + n$ binario. Para $n \geq 1$, hay al menos un acarreo (el del bit más bajo de $n$ donde $a_i = 1$). Por tanto $v_2\binom{2n}{n} \geq 1$, par. $\blacksquare$

## Observación

Lucas es el **enlace fundamental** entre la combinatoria de los binomiales y la aritmética modular. Su poder viene de **localizar** la información sobre $\binom{n}{k} \mod p$ en los **dígitos** de $n, k$ en base $p$, transformando una cuestión global en una cuestión dígito a dígito.

**Generalización.** Hay una versión de Lucas para módulos primos potencia ($p^k$) más complicada (Granville, Davis-Webb), aplicable cuando los argumentos elementales se quedan cortos.

## Problemas relacionados

- **Putnam 2008.** Conteo de binomiales con propiedades modulares.
- **OMM 2019.** Problema combinatorio resuelto vía Lucas.
- **Conjetura central:** caracterización completa de patrones binomiales mod $p^k$, aún abierta para $k$ alto.
