---
title: "IMO 1959 — Fracción irreducible (guiado paso a paso)"
preview: "Demostrar que la fracción $\\frac{21n+4}{14n+3}$ es irreducible para todo entero positivo $n$. El primer problema del primer IMO de la historia, accesible y precioso para introducirse al algoritmo de Euclides."
dificultad: iniciacion
competencia: "IMO 1959 P1"
tags: [irreducible, euclides, mcd, guiado]
prerequisites: [divisibilidad-basica, euclides-bezout]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Enunciado

Demostrar que la fracción $\dfrac{21n + 4}{14n + 3}$ es **irreducible** para todo entero positivo $n$.

(Una fracción $a/b$ es irreducible si $\gcd(a, b) = 1$.)

---

## Fase 1: entender lo que se pide

"Irreducible" significa $\gcd(21n+4, 14n+3) = 1$ para todo $n \geq 1$.

**Plan general.** Calcular $\gcd(21n + 4, 14n + 3)$ usando el **algoritmo de Euclides** y mostrar que el resultado es $1$ independientemente de $n$.

---

## Fase 2: experimentar con casos pequeños

Antes de teorizar, probamos algunos valores.

- $n = 1$: $\dfrac{25}{17}$. $\gcd(25, 17) = ?$ Como $25 = 1 \cdot 17 + 8$, $17 = 2 \cdot 8 + 1$, $8 = 8 \cdot 1$, llegamos a $\gcd = 1$. ✓
- $n = 2$: $\dfrac{46}{31}$. $46 = 1 \cdot 31 + 15$, $31 = 2 \cdot 15 + 1$. $\gcd = 1$. ✓
- $n = 3$: $\dfrac{67}{45}$. $67 = 1 \cdot 45 + 22$, $45 = 2 \cdot 22 + 1$. $\gcd = 1$. ✓
- $n = 10$: $\dfrac{214}{143}$. $214 = 1 \cdot 143 + 71$, $143 = 2 \cdot 71 + 1$. $\gcd = 1$. ✓

**Patrón observado.** El algoritmo de Euclides aplicado a estos pares produce el mismo "patrón": dos pasos, llegando a $1$. Esto sugiere que el algoritmo aplicado a $(21n+4, 14n+3)$ termina con resto $1$ después de pocos pasos, **independientemente de $n$**.

Vamos a confirmarlo simbólicamente.

---

## Fase 3: aplicar Euclides al caso general

Sean $a = 21n + 4$ y $b = 14n + 3$. Aplicamos el algoritmo de Euclides:

**Paso 1.** Dividimos $a$ entre $b$:

$$
21n + 4 \;=\; 1 \cdot (14n + 3) + (7n + 1).
$$

Verificación: $1 \cdot (14n + 3) + (7n + 1) = 14n + 3 + 7n + 1 = 21n + 4$. ✓

El nuevo par es $(14n + 3, 7n + 1)$ y $\gcd(a, b) = \gcd(14n + 3, 7n + 1)$.

**Paso 2.** Dividimos $14n + 3$ entre $7n + 1$:

$$
14n + 3 \;=\; 2 \cdot (7n + 1) + 1.
$$

Verificación: $2 \cdot (7n + 1) + 1 = 14n + 2 + 1 = 14n + 3$. ✓

El nuevo par es $(7n + 1, 1)$.

**Paso 3.** Como $\gcd(\text{cualquier cosa}, 1) = 1$:

$$
\gcd(7n + 1, 1) \;=\; 1.
$$

**Conclusión.** $\gcd(21n + 4, 14n + 3) = 1$ para todo $n \geq 1$. La fracción es irreducible. $\blacksquare$

---

## Demostración limpia (sin proceso heurístico)

**Demostración.** Sea $d = \gcd(21n + 4, 14n + 3)$. Entonces $d$ divide a cualquier combinación lineal entera. En particular:

$$
d \mid 2 \cdot (21n + 4) - 3 \cdot (14n + 3) \;=\; 42n + 8 - 42n - 9 \;=\; -1.
$$

Por tanto $d \mid 1$, así $d = 1$. La fracción es irreducible. $\blacksquare$

---

## Fase 4: la idea simplificada

La demostración "limpia" condensa todo el proceso de Euclides en **una sola combinación lineal**. La estrategia:

> Si $d \mid 21n + 4$ y $d \mid 14n + 3$, entonces $d$ divide a cualquier combinación lineal entera, en particular a una que **elimine $n$**.

Buscamos coeficientes $u, v$ con $u(21n + 4) + v(14n + 3) = $ constante (sin $n$).

Imponiendo $21u + 14v = 0$: $u/v = -14/21 = -2/3$. Tomamos $u = 2, v = -3$:

$$
2(21n + 4) - 3(14n + 3) \;=\; (42n - 42n) + (8 - 9) \;=\; -1.
$$

Así, $d \mid -1$, $d = 1$.

---

## Observación

**Lo que aprendemos.**

1. **El algoritmo de Euclides es estructural.** Aplicado a polinomios lineales en $n$, produce un proceso simbólico que termina en una constante. Si esa constante es $\pm 1$, el $\gcd$ es $1$.

2. **Eliminación lineal.** El truco más directo es **eliminar la variable $n$** mediante una combinación lineal entera de los numeradores y denominadores. Si la constante resultante es $\pm 1$, ya hemos terminado.

3. **Generalización inmediata.** El mismo método demuestra que $\frac{An + b}{Cn + d}$ es irreducible para todo $n$ siempre que $\gcd(Ad - Bc, $ y cosas similares$) = $ algún ajuste. La condición precisa es $|Ad - Bc| = 1$.

   En nuestro caso: $A = 21, B = 4, C = 14, D = 3$. $AD - BC = 21 \cdot 3 - 4 \cdot 14 = 63 - 56 = 7$.

   ¿Cómo conciliar con que la fracción **sí** es irreducible? Porque cualquier divisor común de $An + B$ y $Cn + D$ divide a $A(Cn + D) - C(An + B) = AD - BC = 7$. Es decir, $d \mid 7$, así $d \in \{1, 7\}$.

   Si $d = 7$, entonces $7 \mid 21n + 4$, es decir, $4 \equiv 0 \pmod 7$, falso. Por tanto $d = 1$.

**Una sutileza.** Mi argumento "limpio" tiene la trampa de que el coeficiente $-1$ no aparece directamente; sale tras eliminar $n$. Es la combinación $2, -3$ que da $-1$, no el $A, C$ obvio. **Encontrar la combinación correcta** es la observación clave.

---

## Generalización: $\dfrac{An + B}{Cn + D}$ irreducible

**Pregunta general.** ¿Para qué $(A, B, C, D)$ con $\gcd(A, B) = \gcd(C, D) = 1$ la fracción $\frac{An+B}{Cn+D}$ es irreducible para todo $n$?

**Respuesta.** La fracción es irreducible para todo $n$ si y solo si los divisores primos de $|AD - BC|$ son todos divisores de $\gcd(C, B \cdot k)$ para alguna estructura modular específica. Más simple:

> $\frac{An+B}{Cn+D}$ es irreducible para todo $n$ si $|AD - BC| = 1$.

Si $|AD - BC| > 1$, la fracción **puede ser reducible** para ciertos $n$ (cuando el primo correspondiente divide a $An + B$).

Para el problema original: $|AD - BC| = 7$. La fracción $\frac{21n+4}{14n+3}$ tendría que reducirse por $7$ si $7 \mid 21n+4$, es decir $4 \equiv 0 \pmod 7$ — imposible. Por eso siempre es irreducible.

---

## Problemas relacionados

- **Variante:** demostrar que $\frac{18n + 3}{21n + 4}$ es irreducible (similar análisis).
- **OME 1990:** problema sobre fracciones irreducibles con análisis modular.
- **Conjetura abierta (Sierpiński):** caracterizar todas las $(A, B, C, D)$ tales que $\frac{An+B}{Cn+D}$ es irreducible para infinitos $n$.
