---
title: "Lema del Levantamiento del Exponente (LTE)"
preview: "Una herramienta poderosa para calcular la valuación p-ádica de expresiones del tipo $v_p(a^n \\pm b^n)$, esencial para problemas olímpicos sobre divisibilidad."
dificultad: nacional
tags: [valuacion-p-adica, primos, divisibilidad, exponentes]
prerequisites: [valuacion-p-adica, congruencias-basicas]
author: "Adrián García Bouzas"
updated: "2026-01-15"
---

El **Lema del Levantamiento del Exponente** (Lifting The Exponent, LTE) es un resultado fundamental sobre la valuación $p$-ádica de diferencias y sumas de potencias. Permite reducir el cálculo de $v_p(a^n - b^n)$ a un cómputo elemental que aparece con frecuencia en problemas IMO, ISL y olimpiadas iberoamericanas.

## Definición

Para un primo $p$ y un entero $n \neq 0$, la **valuación $p$-ádica** $v_p(n)$ es el mayor entero $k \geq 0$ tal que $p^k \mid n$. Convencionalmente $v_p(0) = +\infty$.

## Enunciado

Sea $p$ un primo impar y sean $a, b$ enteros con $p \nmid a$, $p \nmid b$ y $p \mid a - b$. Entonces, para todo entero positivo $n$:

$$
v_p(a^n - b^n) = v_p(a - b) + v_p(n).
$$

Para el caso $p \mid a + b$ (también con $p$ impar y $p \nmid ab$), si $n$ es impar:

$$
v_p(a^n + b^n) = v_p(a + b) + v_p(n).
$$

Para $p = 2$, el caso requiere matices. Si $a, b$ son ambos impares y $4 \mid a - b$:

$$
v_2(a^n - b^n) = v_2(a - b) + v_2(n).
$$

Si $a, b$ son impares, $2 \mid a - b$ pero $4 \nmid a - b$, y $n$ es par:

$$
v_2(a^n - b^n) = v_2(a - b) + v_2(a + b) + v_2(n) - 1.
$$

## Demostración

Demostramos el caso principal: $p$ primo impar, $p \mid a - b$, $p \nmid ab$.

**Paso 1.** Reducimos al caso $n = p$. Si $n = p^k m$ con $\gcd(m, p) = 1$, aplicamos inducción en $k$ y mostramos por separado que $v_p(a^m - b^m) = v_p(a - b)$ cuando $\gcd(m, p) = 1$.

Para $\gcd(m, p) = 1$: escribimos

$$
a^m - b^m = (a - b)(a^{m-1} + a^{m-2}b + \cdots + b^{m-1}).
$$

Como $a \equiv b \pmod p$, cada sumando del segundo factor es $\equiv a^{m-1} \pmod p$, de donde el factor vale $\equiv m \cdot a^{m-1} \pmod p$. Como $p \nmid m$ y $p \nmid a$, este factor es coprimo con $p$. Por lo tanto $v_p(a^m - b^m) = v_p(a - b)$.

**Paso 2.** Caso $n = p$. Escribimos $a = b + pc$ con $c$ entero. Entonces

$$
a^p - b^p = (b + pc)^p - b^p = \sum_{k=1}^{p} \binom{p}{k} b^{p-k} (pc)^k.
$$

El término $k = 1$ es $p \cdot b^{p-1} \cdot pc = p^2 c b^{p-1}$, con valuación exactamente $v_p(a-b) + 1$ (puesto que $p \nmid bc$ asumiendo $v_p(a-b)$ exacto y dividiendo por las potencias correctas).

Para $k \geq 2$: el término es $\binom{p}{k} b^{p-k} (pc)^k$. Como $p$ es primo, $p \mid \binom{p}{k}$ para $1 \leq k \leq p-1$, y la potencia $(pc)^k$ aporta $\geq 2$ factores de $p$. Un análisis cuidadoso (usando $p$ impar para que $k = p$ se trate aparte) muestra que estos términos tienen mayor valuación.

Concluimos $v_p(a^p - b^p) = v_p(a - b) + 1 = v_p(a-b) + v_p(p)$.

**Paso 3.** Inducción. Combinando los pasos 1 y 2 con la factorización $a^n - b^n = (a^{n/p})^p - (b^{n/p})^p$ cuando $p \mid n$, se obtiene el resultado general.

## Ejemplo

**Problema.** Determinar todos los enteros positivos $n$ tales que $7 \mid 2^n + 1$.

Como $2^3 = 8 \equiv 1 \pmod 7$, el orden de $2$ módulo $7$ es $3$. Por lo tanto $2^n \equiv -1 \pmod 7$ requiere $n \equiv 3/2 \pmod 3$, imposible. **No existe tal $n$**.

**Problema.** Calcular $v_3(2^{30} - 1)$.

Notemos $3 \mid 2 - (-1)$ pero queremos $a = 2, b = 1$. No funciona directamente porque $3 \nmid 2 - 1 = 1$. Tomamos $a = 4, b = 1$: $3 \mid 4 - 1 = 3$. Entonces

$$
v_3(4^{15} - 1) = v_3(4 - 1) + v_3(15) = 1 + 1 = 2.
$$

Y $4^{15} - 1 = 2^{30} - 1$, luego $v_3(2^{30} - 1) = 2$.

## Aplicaciones

LTE es decisivo en problemas donde aparece la pregunta *"¿cuál es la mayor potencia de $p$ que divide a $\ldots$?"*. Apariciones típicas:

- Determinar para qué $n$ una expresión es divisible por una potencia dada.
- Probar que ciertas ecuaciones diofánticas no tienen solución módulo un primo.
- Caracterizar primos que dividen sucesiones $a_n = x^n \pm y^n$.

## Observación

Los errores más comunes al aplicar LTE:

1. **Olvidar la hipótesis $p \nmid ab$**. Si $p$ divide a $a$ o $b$, el lema no aplica directamente y hay que tratar el caso aparte.
2. **Usar el caso $p = 2$ sin ajuste**. El lema para $p = 2$ tiene casos especiales según la paridad de $a - b$ módulo $4$.
3. **Confundir suma y diferencia**. La versión para $a^n + b^n$ requiere $n$ impar.

## Problemas relacionados

- **(Clásico)** Hallar todos los enteros positivos $n > 1$ tales que $n^2 \mid 2^n + 1$.

- **(Clásico)** Determinar $v_3(2^{30} - 1)$ y $v_3(4^{15} - 1)$ usando LTE. Verificar que coinciden.

- **(Clásico)** Probar que si $p$ es primo impar y $p \mid a + b$ con $p \nmid ab$ y $n$ impar, entonces $v_p(a^n + b^n) = v_p(a + b) + v_p(n)$.

- **(Clásico)** Usar LTE para demostrar que $\frac{a^p - b^p}{a - b}$ es coprimo con $a - b$ salvo posiblemente por $p$.

- **(Clásico)** Hallar todos los pares de enteros positivos $(a, n)$ tales que $a^n - 1 \mid a^{n+1} - 1$.
