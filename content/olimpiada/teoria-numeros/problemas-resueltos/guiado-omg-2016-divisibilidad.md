---
title: "OMG 2016 — Divisibilidad y dígitos (guiado paso a paso)"
preview: "Encontrar todos los números de tres cifras divisibles por 7 cuyo número formado al invertir sus dígitos es también divisible por 7. Un problema regional resuelto con todo el proceso de pensamiento explícito."
dificultad: regional
competencia: "OMG 2016"
tags: [divisibilidad, digitos, modular, guiado]
prerequisites: [congruencias, bases-numericas]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Enunciado

Hallar todos los enteros de tres cifras (entre $100$ y $999$) que son divisibles por $7$ y cuyo número obtenido al **invertir el orden de sus dígitos** también es divisible por $7$.

---

## Fase 1: leer y entender

Vamos a procesar el enunciado lentamente.

**Tres cifras:** $N = \overline{abc}$ con $a \in \{1, 2, \ldots, 9\}$ y $b, c \in \{0, 1, \ldots, 9\}$. Es decir, $N = 100a + 10b + c$.

**Inverso:** $N' = \overline{cba} = 100c + 10b + a$. Atención: si $c = 0$, el "inverso" $\overline{0ba}$ ya no es un número de tres cifras, sino de dos. Pensemos si esto importa.

El enunciado dice "el número obtenido al invertir el orden de sus dígitos". Si $N = 140$, el inverso es $\overline{041} = 41$. La condición es que $7 \mid 41$. ¿Cuenta esto? Sí: el problema no exige que el inverso tenga tres cifras, solo que sea divisible por $7$.

Decisión metodológica: **incluiremos** los $N$ con $c = 0$ siempre que la condición se cumpla.

**Lo que buscamos:** todas las parejas $(a, b, c)$ con $a \in \{1, \ldots, 9\}$, $b, c \in \{0, \ldots, 9\}$, tales que

$$
7 \mid 100a + 10b + c \quad \text{y} \quad 7 \mid 100c + 10b + a.
$$

---

## Fase 2: la primera idea — restar

**Pregunta heurística:** dos condiciones de divisibilidad por el mismo número $7$. ¿Qué pasa si las restamos?

$$
(100a + 10b + c) - (100c + 10b + a) \;=\; 99a - 99c \;=\; 99(a - c).
$$

Como $7$ divide a ambos números, $7 \mid 99(a - c)$. Como $\gcd(99, 7) = 1$ (porque $99 = 7 \cdot 14 + 1$), deducimos

$$
7 \mid (a - c). \quad (\star)
$$

¡Hemos transformado dos condiciones en una! Y de paso, hemos descubierto una **relación necesaria** entre $a$ y $c$.

**Verificación:** $a, c \in \{0, \ldots, 9\}$ con $a \geq 1$. Los valores posibles de $a - c$ están en $\{-9, -8, \ldots, 9\}$. Los múltiplos de $7$ en este rango son $\{-7, 0, 7\}$. Por tanto:

$$
a - c \in \{-7, 0, 7\}.
$$

---

## Fase 3: enumeración por casos

### Caso 1: $a = c$

Entonces $N = N'$ trivialmente, y la condición se reduce a $7 \mid 100a + 10b + a = 101a + 10b$.

Calculamos $101 \mod 7$: $101 = 14 \cdot 7 + 3$, así $101 \equiv 3$. Y $10 \equiv 3$. Por tanto

$$
101a + 10b \;\equiv\; 3a + 3b \;\equiv\; 3(a + b) \pmod 7.
$$

Como $\gcd(3, 7) = 1$, la condición $7 \mid 3(a+b)$ equivale a $7 \mid a + b$.

**Subcaso 1.1.** $a = c \in \{1, \ldots, 9\}$ y $a + b \in \{0, 7, 14\}$.

Como $a \geq 1$, $a + b \geq 1$, así que $a + b \in \{7, 14\}$.

- Si $a + b = 7$: $(a, b) \in \{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1), (7,0)\}$. Cada uno da un $N = \overline{aba}$, hay **$7$** soluciones.
- Si $a + b = 14$: $(a, b) \in \{(5,9), (6,8), (7,7), (8,6), (9,5)\}$. **$5$** soluciones.

**Total Caso 1:** $7 + 5 = 12$ soluciones.

Listemos algunas: $161, 252, 343, 434, 525, 616, 707$ (con $a+b=7$) y $595, 686, 777, 868, 959$ (con $a+b=14$).

Verificación rápida: $343 = 7^3$, divisible por $7$. ✓ $777 = 7 \cdot 111$, divisible. ✓

### Caso 2: $a - c = 7$

Entonces $c = a - 7 \geq 0$, así que $a \geq 7$.

- $a = 7$: $c = 0$, $N = \overline{7b0}$, $N' = \overline{0b7} = 10b + 7$.
- $a = 8$: $c = 1$, $N = \overline{8b1}$, $N' = \overline{1b8} = 100 + 10b + 8 = 108 + 10b$.
- $a = 9$: $c = 2$, $N = \overline{9b2}$, $N' = \overline{2b9} = 209 + 10b$.

Imponemos $7 \mid N$ en cada subcaso.

**$a = 7$:** $N = 700 + 10b$. $700 = 100 \cdot 7$, así $700 \equiv 0$. Necesitamos $7 \mid 10b$, equivalente a $7 \mid b$ (porque $\gcd(10, 7) = 1$). Así $b \in \{0, 7\}$.

Soluciones: $N = 700, 770$. Verificamos los inversos: $7$ y $77$, ambos divisibles por $7$. ✓

**$a = 8$:** $N = 800 + 10b + 1 = 801 + 10b$. $801 = 114 \cdot 7 + 3$, así $801 \equiv 3$. Necesitamos $3 + 10b \equiv 0 \pmod 7$, i.e. $3 + 3b \equiv 0$, $b \equiv -1 \equiv 6 \pmod 7$. Así $b \in \{6\}$ (descartamos $b = 13$ por estar fuera).

Solución: $N = 861$. Inverso $168 = 24 \cdot 7$. ✓

**$a = 9$:** $N = 900 + 10b + 2 = 902 + 10b$. $902 = 128 \cdot 7 + 6$, así $902 \equiv 6$. Necesitamos $6 + 3b \equiv 0 \pmod 7$, $b \equiv -2 \equiv 5 \pmod 7$. Así $b \in \{5\}$.

Solución: $N = 952$. Inverso $259 = 37 \cdot 7$. ✓

**Total Caso 2:** $2 + 1 + 1 = 4$ soluciones.

### Caso 3: $a - c = -7$, es decir, $c = a + 7$

Como $c \leq 9$, $a \leq 2$. Y $a \geq 1$.

- $a = 1$: $c = 8$, $N = \overline{1b8} = 108 + 10b$.
- $a = 2$: $c = 9$, $N = \overline{2b9} = 209 + 10b$.

**$a = 1$:** $108 \equiv ?$. $108 = 15 \cdot 7 + 3$, así $108 \equiv 3$. $3 + 3b \equiv 0 \pmod 7 \Rightarrow b \equiv 6$. Así $b \in \{6\}$.

Solución: $N = 168$. Inverso $861$. Ya verificado en Caso 2. ✓

**$a = 2$:** $209 \equiv ?$. $209 = 29 \cdot 7 + 6$, así $209 \equiv 6$. $6 + 3b \equiv 0 \pmod 7 \Rightarrow b \equiv 5$. Así $b \in \{5\}$.

Solución: $N = 259$. Inverso $952$. ✓

**Total Caso 3:** $2$ soluciones.

(Observa que los Casos 2 y 3 son **simétricos**: cada solución del Caso 2 con $a > c$ tiene un compañero en el Caso 3 con $a < c$, que es exactamente su inverso. Lo verás reflejado en las parejas $(861, 168)$ y $(952, 259)$.)

---

## Fase 4: contar y verificar

**Total:** $12 + 4 + 2 = 18$ números.

**Lista completa** (ordenada):

$$
161, 168, 252, 259, 343, 434, 525, 595, 616, 686, 707, 770, 777, 861, 868, 952, 959.
$$

Espera — eso son $17$. Falta uno. Revisemos.

Caso 1: $a = c$, $a+b = 7$ o $14$:
- $a + b = 7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1), (7,0)$ → $161, 252, 343, 434, 525, 616, 707$ (7 nums).
- $a + b = 14$: $(5, 9), (6, 8), (7, 7), (8, 6), (9, 5)$ → $595, 686, 777, 868, 959$ (5 nums).

Total Caso 1: 12. ✓

Caso 2: $N = 700, 770, 861, 952$ → 4 nums.

Caso 3: $N = 168, 259$ → 2 nums.

Total: $12 + 4 + 2 = 18$.

Lista ordenada: $161, 168, 252, 259, 343, 434, 525, 595, 616, 686, 700, 707, 770, 777, 861, 868, 952, 959$.

Cuento: $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18$. Son **18**. ✓

---

## Observación

**Lo que aprendemos.**

1. **Reducir dos condiciones a una.** La idea de restar fue el momento crítico. Antes había $2$ condiciones modulares simultáneas; después, $1$ sola más una condición algebraica sobre $a, c$.

2. **Casos exhaustivos pequeños.** Una vez reducidas las opciones de $a - c$ a tres valores, el problema se vuelve enumeración mecánica.

3. **Simetría.** Caso 2 y Caso 3 son uno el "espejo" del otro. Detectarlo ahorra trabajo.

**Lo que NO funcionaría.**

Intentar probar uno a uno los múltiplos de $7$ entre $100$ y $999$ (que son $\lfloor 999/7\rfloor - \lfloor 99/7 \rfloor = 142 - 14 = 128$) y verificar cada inverso. **Funcionaría** pero es masivo, sin elegancia.

La elegancia viene de **observar que la diferencia es múltiplo de $7$** automáticamente y trabajar con eso.

## Generalización

¿Y si fuera divisible por otro primo $p$? El argumento de restar funciona idénticamente: obtenemos $p \mid 99(a-c)$. Si $\gcd(99, p) = 1$ (es decir, $p \notin \{3, 11\}$), el argumento sigue.

Para $p = 11$: $99 = 9 \cdot 11$, así que la condición $11 \mid 99(a-c)$ se satisface **siempre** y no obtenemos información nueva. Los problemas con $p = 11$ son por tanto **más sutiles**.

Para $p = 13$: $\gcd(99, 13) = 1$, mismo argumento.

## Problemas relacionados

- **OMG 2014.** Problema similar con divisibilidad por $11$ — requiere un enfoque distinto (suma alternada de dígitos).
- **Generalización:** ¿cuántos enteros de $k$ cifras divisibles por $p$ tienen inverso también divisible por $p$? Análisis sistemático con bases.
- **Números palíndromos** (Caso 1 de este problema): caracterización modular completa.
