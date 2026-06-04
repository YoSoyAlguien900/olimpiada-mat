---
title: "Selección básica — Divisibilidad y congruencias"
preview: "Doce problemas escalonados por dificultad para entrenar las técnicas fundamentales. Los de nivel 1–4 son accesibles con solo las congruencias básicas; los de nivel 9–12 requieren PTF y órdenes."
dificultad: regional
tags: [problemas, entrenamiento, divisibilidad, congruencias, basico]
prerequisites: [pequeno-teorema-fermat, congruencias, euclides-bezout]
author: "Adrián García Bouzas"
updated: "2026-06-05"
---

Una colección para consolidar las técnicas básicas de teoría de números. Los primeros cuatro problemas son accesibles para cualquiera con conocimiento de congruencias; los últimos cuatro requieren el Pequeño Teorema de Fermat y análisis de órdenes.

---

**1. (OMG 2008/P3)** Demostrar que $2222^{5555} + 5555^{2222}$ es múltiplo de $7$.

---

**2.** Hallar el menor entero positivo $n$ tal que $n!$ termine en exactamente $100$ ceros.

---

**3. (Clásico)** Probar que para todo primo $p > 3$, se tiene $p^2 \equiv 1 \pmod{24}$.

---

**4. (OMG 2000/P5)** Probar que no existen enteros $m, n$ con $419m^4 + 150m^2n + 1875n^2 = 2000$.

---

**5. (OMG 2009/P4)** Determinar los valores de $n$ para los que $3^{2n+1} - 2^{2n+1} - 6^n$ es compuesto.

---

**6.** Sea $p$ primo impar. Probar que $1^{p-1} + 2^{p-1} + \cdots + (p-1)^{p-1} \equiv -1 \pmod p$.

---

**7. (Clásico)** Hallar todos los pares $(p, q)$ de primos tales que $p^q - q^p = p + q$.

---

**8.** Probar que existen infinitos primos $p \equiv 1 \pmod 4$.

---

**9.** Sean $a, b, c, d$ enteros positivos tales que $a + b = c + d$ y $ab + 1 = cd$. Probar que $a = c$ o $a = d$.

---

**10.** Sea $a_n = 10^n + 1$. Hallar todos los $n$ tales que $a_n \mid a_{n+1}$.

---

**11. (Clásico)** Hallar todos los enteros positivos $n$ tales que $n \mid 2^n - 1$.

---

**12.** Probar que para todo primo $p > 3$, el numerador de la suma $1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{p-1}$ es divisible por $p^2$. *(Teorema de Wolstenholme.)*

---

## Pistas

- **Problemas 1, 4, 5:** congruencias módulo primos pequeños. Factorizar o agrupar para facilitar.
- **Problema 2:** fórmula de Legendre $v_5(n!) = \sum \lfloor n/5^k \rfloor$.
- **Problema 3:** todo primo $p > 3$ es $\equiv 1$ o $5 \pmod 6$; analizar módulo $3$ y módulo $8$.
- **Problema 6:** agrupar $k$ y $p-k$; ambos contribuyen $1 + 1 = 2 \equiv 2$...
- **Problemas 7, 11:** trabajar con el menor divisor primo y comparar órdenes.
- **Problema 12:** usar Wilson y agrupar $k$ con $p-k$ en el denominador.

## Observación

Si resuelves $8$ de estos $12$ sin ayuda, estás preparado para el nivel de una fase autonómica fuerte. Los problemas $9$–$12$ son propios de una fase nacional.
