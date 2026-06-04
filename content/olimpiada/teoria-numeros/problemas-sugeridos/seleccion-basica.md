---
title: "Selección de problemas — divisibilidad y congruencias"
preview: "Doce problemas escalonados por dificultad para entrenar las técnicas centrales: PTF, órdenes, LTE y descenso."
dificultad: nacional
tags: [problemas, entrenamiento, divisibilidad, congruencias]
prerequisites: [pequeno-teorema-fermat, orden-multiplicativo]
author: "Material olímpico"
updated: "2026-01-18"
---

Una colección de problemas para consolidar las técnicas básicas de teoría de números. Resolverlos sin ayuda antes de consultar las soluciones.

## Problemas

**1.** Probar que para todo entero $n \geq 1$, el número $5^{2n+1} + 2^{n+4} + 2^{n+1}$ es divisible por $23$.

**2.** Hallar todos los enteros positivos $n$ tales que $n^2 + 1 \mid n + 1$.

**3.** Sea $p$ un primo impar. Probar que

$$
1^{p-1} + 2^{p-1} + \cdots + (p-1)^{p-1} \equiv -1 \pmod p.
$$

**4.** Hallar el menor entero positivo $n$ tal que $n!$ termina en exactamente $100$ ceros.

**5.** Probar que $7 \nmid a^2 + b^2$ si $a, b$ son enteros tales que $7 \nmid a$ o $7 \nmid b$. Generalizar a primos $p \equiv 3 \pmod 4$.

**6.** (Putnam 1972) Demostrar que si $n$ es un entero positivo, entonces $\gcd(n!+1, (n+1)!+1) = 1$.

**7.** Hallar todos los pares $(p, q)$ de primos tales que $p^q - q^p = p + q$.

**8.** Probar que existen infinitos primos $p$ con $p \equiv 1 \pmod 4$.

**9.** (Iberoamericana 2006) Sean $a, b, c, d$ enteros positivos tales que $a + b = c + d$ y $ab + 1 = cd$. Probar que $a = c$ o $a = d$.

**10.** Sea $a_n = 10^n + 1$. Hallar todos los $n$ tales que $a_n \mid a_{n+1}$.

**11.** (ISL 2002) Hallar todos los enteros positivos $n$ tales que $n$ divide a $2^n - 1$.

**12.** Probar que para todo primo $p > 3$, el numerador de

$$
1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{p-1}
$$

es divisible por $p^2$ (Teorema de Wolstenholme).

## Pistas

- Problemas 1, 5, 8: usar Pequeño Teorema de Fermat y análisis de residuos cuadráticos.
- Problemas 2, 9, 10: factorizar y comparar tamaños.
- Problemas 3, 12: agrupar términos $k$ y $p - k$ usando simetría módulo $p$.
- Problema 4: fórmula de Legendre $v_5(n!) = \sum_{i \geq 1} \lfloor n/5^i \rfloor$.
- Problemas 7, 11: trabajar con el menor divisor primo y comparar órdenes.

## Observación

Estos problemas cubren un abanico amplio. Si un estudiante puede resolver al menos $8$ de $12$ sin ayuda, está bien preparado para el primer día de una olimpiada nacional fuerte.
