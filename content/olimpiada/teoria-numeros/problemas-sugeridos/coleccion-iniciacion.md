---
title: "Colección de iniciación — Divisibilidad, últimas cifras y conteo"
preview: "Doce problemas extraídos de exámenes reales (OMG, OME Fase Local) para entrenar divisibilidad, congruencias y conteo básico. Sin PTF ni análisis de órdenes: solo aritmética, factorizaciones y el principio del palomar."
dificultad: iniciacion
tags: [coleccion, iniciacion, divisibilidad, congruencias, palomar]
prerequisites: [congruencias, divisibilidad]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de problemas de iniciación en teoría de números, todos extraídos de exámenes reales. Los problemas 1–6 son accesibles desde el primer mes de preparación; los problemas 7–12 requieren algo más de técnica pero no el Pequeño Teorema de Fermat.

---

**1. (Clásico)** ¿Cuál es la última cifra de $7^{2026}$?

---

**2. (Clásico)** Probar que para todo entero $n$, el número $n^3 - n$ es divisible por $6$.

---

**3. (Clásico)** Probar que para todo entero $n$, la última cifra de $n^5$ es igual a la de $n$.

*Hint: verificar los residuos $0, 1, 2, 3, 4$ módulo $5$ por separado; separar también la paridad.*

---

**4. (OMG 2001/P1)** Se sabe que $n = pqr$ es el producto de tres primos distintos $p < q < r$ que satisfacen

$$r - q = 2p \qquad \text{y} \qquad rq + p^2 = 676.$$

Hallar $n$.

---

**5. (Clásico)** De los números $\{1, 2, \ldots, 2n\}$ se eligen $n+1$ de ellos. Probar que necesariamente existen dos de los elegidos cuya suma es $2n+1$.

---

**6. (OMG 1999/P6)** ¿Cuántas listas de $n$ términos, cada uno $0$ o $1$, tienen un número par de $1$'s? (El cero se considera número par.)

---

**7. (Local XLIV OME, sesión nocturna)** Demostrar que $2^{5m} + 2^m + 1$ no es primo para ningún entero positivo $m$.

---

**8. (Local XLV OME, sábado por la mañana)** Probar que $30 \mid n^{19} - n^7$ para todo entero positivo $n$.

---

**9. (Local XLIV OME, sesión nocturna)** Se tienen $17$ enteros positivos, cada uno sin ningún factor primo mayor que $7$. Demostrar que existen dos de ellos cuyo producto es un cuadrado perfecto.

---

**10. (OMG 1999/P1)** Un Año Santo compostelano es aquel en que el $25$ de julio cae en domingo. Un año no bisiesto desplaza el día de la semana del $25$ de julio en $1$ posición; un año bisiesto lo desplaza en $2$. Demostrar que entre dos Años Santos compostelanos consecutivos no pueden transcurrir más de $11$ años.

---

**11. (OME Fase Local 2011–2012)** Calcular la suma de todos los enteros positivos menores que $10n$ que no son divisibles por $2$ ni por $5$.

---

**12. (Clásico)** Probar el lema de Euclides: si $p$ es un número primo y $p \mid ab$, entonces $p \mid a$ o $p \mid b$.

---

## Pistas

- **Problema 1:** la sucesión de últimas cifras de $7^1, 7^2, 7^3, \ldots$ es periódica con período $4$.

- **Problema 2:** $n^3 - n = (n-1)n(n+1)$, producto de tres enteros consecutivos. Todo producto de tres consecutivos es divisible por $2$ y por $3$.

- **Problema 3:** verificar por casos $n \equiv 0, 1, 2, 3, 4 \pmod{5}$ y usar que $n^5 \equiv n \pmod{2}$ (paridad no cambia). Combinar con el teorema chino del resto.

- **Problema 4:** $rq + p^2 = 676 = 26^2$. Probar primero, por paridad u otras restricciones, que $p$ es pequeño; explorar $p = 2$ y $p = 3$.

- **Problema 5:** agrupar los $2n$ números en las $n$ parejas $\{k,\, 2n+1-k\}$ para $k = 1, \ldots, n$. Con $n+1$ números elegidos y $n$ parejas, el principio del palomar garantiza dos números de la misma pareja.

- **Problema 6:** inducción: si hay $f(n)$ listas de $n$ bits con número par de $1$'s, el bit $(n+1)$-ésimo puede ser $0$ (conserva la paridad) o $1$ (la invierte). Alternativamente, fijar libremente los $n-1$ primeros bits y determinar el $n$-ésimo unívocamente.

- **Problema 7:** factorizar $u^5 + u + 1$ como $(u^2 + u + 1)(u^3 - u^2 + 1)$, con $u = 2^m$. Verificar que ambos factores son mayores que $1$ para todo $m \geq 1$.

- **Problema 8:** escribir $n^{19} - n^7 = n^7(n^{12} - 1)$. Verificar la divisibilidad por $2$, $3$ y $5$ separadamente: si $p \nmid n$, entonces $n^{p-1} \equiv 1 \pmod{p}$ (Pequeño Teorema de Fermat); si $p \mid n$, entonces $p \mid n^7$.

- **Problema 9:** todo entero positivo sin factor primo mayor que $7$ tiene la forma $2^a 3^b 5^c 7^d$. Asociar a cada número el vector $(a \bmod 2,\, b \bmod 2,\, c \bmod 2,\, d \bmod 2) \in \{0,1\}^4$. Hay $2^4 = 16$ posibles vectores; con $17$ números, el palomar garantiza dos con el mismo vector.

- **Problema 10:** en un período de $11$ años hay exactamente $2$ o $3$ años bisiestos. Analizar la acumulación del avance en el día de la semana: el total es $11 + k \equiv 6$ o $0 \pmod 7$ con $k \in \{2,3\}$. Estudiar los casos en que el avance acumulado no puede evitar pasar por un múltiplo de $7$.

- **Problema 11:** los enteros positivos menores que $10n$ y coprimos con $10$ son los de la forma $10q + r$ con $r \in \{1, 3, 7, 9\}$ y $0 \leq q \leq n-1$. Agruparlos y sumar mediante progresiones aritméticas.

- **Problema 12:** si $p \nmid a$, entonces $\gcd(a, p) = 1$. Por el teorema de Bézout, existen enteros $x, y$ con $ax + py = 1$; multiplicar por $b$.
