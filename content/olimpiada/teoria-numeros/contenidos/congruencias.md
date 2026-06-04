---
title: "Congruencias y aritmética modular"
preview: "El lenguaje en el que se expresa casi toda la teoría elemental de números. Trabajar módulo $n$ convierte problemas sobre infinitos enteros en problemas sobre conjuntos finitos, y desbloquea potentes herramientas algebraicas."
dificultad: regional
tags: [congruencias, modular, residuos, inverso, congruencia-lineal]
prerequisites: [divisibilidad-basica, euclides-bezout]
author: "Material olímpico"
updated: "2026-06-03"
---

Si le preguntas a alguien qué hora es y son las $14{:}00$, puede responder «las $2$». Está haciendo aritmética módulo $12$: los enteros $2, 14, 26, -10$ son todos «la misma hora». Esta idea cotidiana —identificar enteros que difieren en un múltiplo de $n$— es la base de la **aritmética modular**, el lenguaje universal de la teoría de números.

La aritmética modular convierte cuestiones sobre infinitos enteros en cuestiones sobre conjuntos finitos de residuos. En vez de preguntar «¿es $7^{1000}$ divisible por $11$?», preguntamos «¿cuál es $7^{1000}$ módulo $11$?» — y esa es una pregunta sobre el ciclo de las potencias de $7$ en el conjunto $\{0, 1, \ldots, 10\}$.

## Definición

Sea $n$ un entero positivo. Decimos que $a$ es **congruente** con $b$ módulo $n$, y escribimos

$$a \equiv b \pmod n,$$

si $n \mid (a - b)$. Equivalentemente, $a$ y $b$ dejan el mismo resto al dividir por $n$.

El entero $n$ se llama el **módulo**. Cada entero $a$ queda en exactamente una de las $n$ **clases de residuos** $\{0, 1, 2, \ldots, n-1\}$ — la clase de $a$ es el resto de dividir $a$ entre $n$.

## Teorema

La relación $\equiv \pmod n$ es una **relación de equivalencia** sobre $\mathbb Z$:

**(i)** (Reflexiva) $a \equiv a \pmod n$.

**(ii)** (Simétrica) $a \equiv b \pmod n \implies b \equiv a \pmod n$.

**(iii)** (Transitiva) $a \equiv b$ y $b \equiv c \pmod n$ implica $a \equiv c \pmod n$.

## Demostración

**(i)** $n \mid (a - a) = 0$. ✓

**(ii)** Si $n \mid (a - b)$, entonces $n \mid (-(a-b)) = b - a$. ✓

**(iii)** Si $n \mid (a - b)$ y $n \mid (b - c)$, entonces $n \mid (a - b) + (b - c) = a - c$. ✓ $\blacksquare$

## Teorema

**(Compatibilidad con operaciones)** Si $a \equiv a' \pmod n$ y $b \equiv b' \pmod n$, entonces:

**(i)** $a + b \equiv a' + b' \pmod n$.

**(ii)** $a - b \equiv a' - b' \pmod n$.

**(iii)** $ab \equiv a'b' \pmod n$.

**(iv)** $a^k \equiv a'^k \pmod n$ para todo entero $k \geq 0$.

## Demostración

Escribimos $a = a' + np$ y $b = b' + nq$ para enteros $p, q$.

**(i)** $a + b = a' + b' + n(p + q)$, luego $n \mid (a+b) - (a'+b')$.

**(iii)** $ab = (a' + np)(b' + nq) = a'b' + n(a'q + b'p + npq)$, luego $n \mid ab - a'b'$.

**(ii)** y **(iv)** se siguen de (i) y (iii). $\blacksquare$

Este teorema dice que $\mathbb Z / n\mathbb Z$ — el conjunto de clases de residuos — es un **anillo** con la suma y multiplicación heredadas de $\mathbb Z$.

## Corolario

**(Ley de cancelación)** Si $ac \equiv bc \pmod n$ y $d = \gcd(c, n)$, entonces

$$a \equiv b \pmod{n/d}.$$

En particular, si $\gcd(c, n) = 1$, podemos cancelar: $ac \equiv bc \pmod n \implies a \equiv b \pmod n$.

**Advertencia.** Sin la condición de coprimalidad la cancelación puede fallar. Ejemplo: $2 \cdot 3 \equiv 2 \cdot 0 \pmod 6$, pero $3 \not\equiv 0 \pmod 6$. El módulo se reduce a $6 / \gcd(2, 6) = 3$: efectivamente $3 \equiv 0 \pmod 3$.

*Demostración del Corolario.* $ac \equiv bc \pmod n$ significa $n \mid c(a-b)$. Dividiendo por $d = \gcd(c,n)$: $(n/d) \mid (c/d)(a-b)$. Como $\gcd(c/d, n/d) = 1$, el Lema de Euclides da $(n/d) \mid (a-b)$, es decir $a \equiv b \pmod{n/d}$. $\blacksquare$

## Definición

El **sistema completo de residuos módulo $n$** es cualquier conjunto de $n$ enteros que represente cada clase exactamente una vez. El canónico es $\{0, 1, 2, \ldots, n-1\}$.

El **sistema reducido de residuos módulo $n$** es el subconjunto de elementos **coprimos con $n$**: $\{a \in \{1, \ldots, n\} : \gcd(a, n) = 1\}$. Tiene $\varphi(n)$ elementos.

Un elemento $a$ con $\gcd(a, n) = 1$ es una **unidad** módulo $n$: tiene inverso multiplicativo. Si $n = p$ es primo, **todos** los elementos no nulos son unidades, y $\mathbb Z/p\mathbb Z$ es un **cuerpo**.

## Teorema

**(Congruencia lineal)** Sea $a, b, n$ enteros con $n > 0$ y $d = \gcd(a, n)$. La congruencia

$$ax \equiv b \pmod n$$

tiene solución si y solo si $d \mid b$. En ese caso, tiene exactamente $d$ soluciones en $\{0, 1, \ldots, n-1\}$, que forman una progresión aritmética de paso $n/d$:

$$x \equiv x_0, \; x_0 + \tfrac{n}{d}, \; x_0 + 2\tfrac{n}{d}, \; \ldots, \; x_0 + (d-1)\tfrac{n}{d} \pmod n.$$

## Demostración

**(Existencia)** La congruencia $ax \equiv b \pmod n$ equivale a $ax - ny = b$ para algún entero $y$, que es una ecuación diofántica lineal en $x, y$. Esta tiene solución si y solo si $\gcd(a, n) = d \mid b$ (ver capítulo de Euclides y Bézout). Si $d \mid b$, una solución es $x_0 = (b/d) \cdot u$ donde $u$ es el inverso de $a/d$ módulo $n/d$ (que existe porque $\gcd(a/d, n/d) = 1$).

**(Número de soluciones)** Si $x_0$ es una solución, todas las soluciones son $x_0 + t \cdot (n/d)$ para $t \in \mathbb Z$. En el rango $\{0, \ldots, n-1\}$ hay exactamente $d$ valores de $t$: $t = 0, 1, \ldots, d-1$. $\blacksquare$

**Caso $d = 1$ (el más importante).** Si $\gcd(a, n) = 1$, la congruencia $ax \equiv b \pmod n$ tiene solución única: $x \equiv a^{-1} b \pmod n$, donde $a^{-1}$ es el inverso de $a$ módulo $n$. El inverso se calcula con el algoritmo extendido de Euclides.

## Ejemplo

### Cálculo de potencias

**Ejemplo 1.** Calcular $7^{100} \pmod{13}$.

Por el Pequeño Teorema de Fermat, $7^{12} \equiv 1 \pmod{13}$ (pues $13$ es primo y $13 \nmid 7$). Dividimos: $100 = 12 \cdot 8 + 4$, así

$$7^{100} = (7^{12})^8 \cdot 7^4 \equiv 1^8 \cdot 7^4 = 7^4 \pmod{13}.$$

Calculamos $7^2 = 49 = 3 \cdot 13 + 10 \equiv 10 \equiv -3 \pmod{13}$, y $7^4 \equiv (-3)^2 = 9 \pmod{13}$.

**Respuesta: $7^{100} \equiv 9 \pmod{13}$.**

---

**Ejemplo 2.** ¿Cuál es el último dígito de $7^{2026}$?

Trabajamos módulo $10$. El ciclo de las potencias de $7$ módulo $10$ tiene longitud $4$:
$$7^1 \equiv 7, \quad 7^2 \equiv 9, \quad 7^3 \equiv 3, \quad 7^4 \equiv 1, \quad 7^5 \equiv 7, \ldots$$

Como $2026 = 4 \cdot 506 + 2$, se tiene $7^{2026} \equiv 7^2 \equiv 9 \pmod{10}$.

**El último dígito es $9$.**

---

### Torres de exponentes

**Ejemplo 3.** Hallar el resto de $2026^{2026^{2026}}$ al dividir entre $7$.

**Paso 1.** Por el Pequeño Teorema de Fermat, $a^6 \equiv 1 \pmod 7$ para $\gcd(a, 7) = 1$. Necesitamos $2026^{2026^{2026}} \pmod 7$, y para eso necesitamos el exponente $2026^{2026} \pmod 6$.

**Paso 2.** $2026 = 2 \cdot 3 \cdot 337 + 4 \equiv 4 \pmod 6$. El ciclo de $4^k$ módulo $6$ es $4, 4, 4, \ldots$ (siempre $4$, porque $4^2 = 16 \equiv 4$). Así $2026^{2026} \equiv 4 \pmod 6$.

**Paso 3.** $2026 = 289 \cdot 7 + 3 \equiv 3 \pmod 7$. Entonces $2026^{2026^{2026}} \equiv 3^4 \pmod 7$.

$3^2 = 9 \equiv 2$, $3^4 \equiv 4 \pmod 7$.

**Respuesta: el resto es $4$.**

---

### Inversas y congruencias lineales

**Ejemplo 4.** Resolver $5x \equiv 3 \pmod{11}$.

$\gcd(5, 11) = 1$, hay solución única. Buscamos $5^{-1} \pmod{11}$: necesitamos $5k \equiv 1 \pmod{11}$. Probando: $5 \cdot 9 = 45 = 44 + 1 \equiv 1 \pmod{11}$. Así $5^{-1} \equiv 9$.

$x \equiv 9 \cdot 3 = 27 \equiv 5 \pmod{11}$.

*Verificación:* $5 \cdot 5 = 25 = 2 \cdot 11 + 3 \equiv 3 \pmod{11}$. ✓

---

**Ejemplo 5.** Hallar el número de $x \in \{0, 1, \ldots, 30\}$ que satisfacen $6x \equiv 4 \pmod{10}$.

$d = \gcd(6, 10) = 2$. Como $2 \mid 4$, hay solución. Dividimos todo por $2$: $3x \equiv 2 \pmod 5$. Como $\gcd(3, 5) = 1$, la solución es única módulo $5$: $3^{-1} \equiv 2 \pmod 5$ (pues $3 \cdot 2 = 6 \equiv 1$), así $x \equiv 4 \pmod 5$.

Las soluciones en $\{0, \ldots, 30\}$ son $x = 4, 9, 14, 19, 24, 29$ — pero como $d = 2$, hay $d = 2$ soluciones en $\{0, \ldots, 10\}$: $x \equiv 4, 9 \pmod{10}$. En $\{0, \ldots, 30\}$ hay $2 \cdot 3 + 1 = \ldots$ En realidad hay $6$ soluciones: $x \in \{4, 9, 14, 19, 24, 29\}$.

---

### Un problema de estructura

**Ejemplo 6.** Hallar el menor número de la forma $\overline{1a25b}$ (cinco cifras) divisible por $99$.

$99 = 9 \cdot 11$ y $\gcd(9, 11) = 1$. Un número es divisible por $99$ si y solo si lo es por $9$ y por $11$ simultáneamente.

**Criterio del 9:** $1 + a + 2 + 5 + b = 8 + a + b \equiv 0 \pmod 9$, es decir $a + b \equiv 1 \pmod 9$.

**Criterio del 11 (suma alternada, de derecha a izquierda):** $b - 5 + 2 - a + 1 = b - a - 2 \equiv 0 \pmod{11}$, es decir $b - a \equiv 2 \pmod{11}$.

Del sistema: $a + b \equiv 1 \pmod 9$ y $b - a \equiv 2 \pmod{11}$, con $0 \leq a, b \leq 9$.

De la segunda ecuación: $b = a + 2$ (tomando el representante $0 \leq b - a \leq 9$, la única opción es $b - a = 2$, pues $b - a = 2 + 11 = 13$ implicaría $b > 9$).

Sustituyendo en la primera: $a + (a+2) = 2a + 2 \equiv 1 \pmod 9$, así $2a \equiv -1 \equiv 8 \pmod 9$, y $a \equiv 4 \pmod 9$ (pues $2 \cdot 4 = 8$). El menor $a \geq 0$ es $a = 4$, dando $b = 6$.

**El número es $14256$.**

*Verificación:* $14256 / 9 = 1584$, $14256 / 11 = 1296$. ✓

## Aplicaciones

### Restos de potencias grandes

La técnica estándar para calcular $a^k \pmod n$:
1. Si $n$ es primo y $\gcd(a, n) = 1$: reducir $k$ módulo $n - 1$ (Fermat).
2. Si $\gcd(a, n) = 1$ pero $n$ no es primo: reducir $k$ módulo $\varphi(n)$ (Euler).
3. En general: encontrar el **orden** de $a$ módulo $n$ (el menor $d$ con $a^d \equiv 1$) y reducir $k$ módulo $d$.

### Demostrar que algo es imposible

Para probar que una ecuación diofántica $f(x_1, \ldots, x_k) = 0$ no tiene soluciones enteras:
- Reducir módulo algún $n$ conveniente.
- Verificar que $f(\bar x_1, \ldots, \bar x_k) \not\equiv 0 \pmod n$ para todo $\bar x_i \in \{0, \ldots, n-1\}$.

Los módulos más útiles son $4, 8, 9, 16, 7, 11$. Por ejemplo: $x^2 + y^2 \equiv 3 \pmod 4$ no tiene solución, pues los cuadrados módulo $4$ son solo $0$ y $1$, y $0 + 0 = 0$, $0 + 1 = 1$, $1 + 1 = 2$ — ninguno es $3$.

## Observación

**Estructura algebraica.** El conjunto $\mathbb Z/n\mathbb Z = \{0, 1, \ldots, n-1\}$ con suma y multiplicación módulo $n$ es un **anillo**. Es un **cuerpo** si y solo si $n$ es primo (porque entonces todo elemento no nulo es unidad). Esta es la razón profunda por la que los primos son especiales: $\mathbb F_p = \mathbb Z/p\mathbb Z$ es el objeto algebraico más simple de la teoría de números.

**Criterios de divisibilidad como congruencias.** Todos los criterios de divisibilidad son simplemente afirmaciones sobre $n$ módulo un número: divisibilidad por $9$ es $n \equiv 0 \pmod 9$, divisibilidad por $7$ requiere saber $n \pmod 7$. En vez de memorizar reglas, es más poderoso saber que $10 \equiv 3 \pmod 7$ y construir el criterio cuando se necesita.

**La función de Euler $\varphi$.** El orden del grupo $(\mathbb Z/n\mathbb Z)^*$ (las unidades) es $\varphi(n)$. Por el teorema de Lagrange, el orden de cualquier elemento $a$ (es decir, el menor $d$ con $a^d \equiv 1$) divide a $\varphi(n)$. Esta es la versión general del Pequeño Teorema de Fermat.

## Problemas relacionados

- **(Clásico)** Probar que $n^7 - n$ es divisible por $42$ para todo entero $n$. *(Hint: $42 = 2 \cdot 3 \cdot 7$, usar PTF para cada primo.)*

- **(Clásico)** Demostrar que si $p$ es primo y $p > 3$, entonces $p^2 \equiv 1 \pmod{24}$.

- **(OMG 2019)** Hallar todos los pares de primos $(p, q)$ tales que $p^3 - q^5 = (p + q)^2$.

- **(Clásico)** Probar que $\underbrace{11\cdots1}_{p-1\text{ unos}}$ es divisible por $p$ para todo primo $p > 5$.

- **(OME 2015)** Demostrar que no existen enteros $x, y$ con $x^2 + y^2 = 3z^2$ salvo $x = y = z = 0$. *(Módulo $3$.)*

- **(Torre exponencial)** ¿Cuál es el último dígito de $\underbrace{7^{7^{7^{\cdots}}}}_{2026 \text{ sietes}}$?
