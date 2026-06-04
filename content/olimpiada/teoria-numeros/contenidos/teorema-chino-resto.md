---
title: "Teorema Chino del Resto"
preview: "Cuando los módulos son coprimos dos a dos, todo sistema de congruencias lineales tiene una única solución módulo el producto. El isomorfismo $\\mathbb{Z}/mn \\cong \\mathbb{Z}/m \\times \\mathbb{Z}/n$ es la estructura algebraica subyacente."
dificultad: regional
tags: [TCR, chino-resto, congruencias, sistemas, isomorfismo]
prerequisites: [congruencias, euclides-bezout]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

El Teorema Chino del Resto (TCR) tiene su origen en el texto matemático chino *Sunzi Suanjing* del siglo III d.C., donde se plantea el problema: «Hay un número que al dividirlo entre $3$ da resto $2$, entre $5$ da resto $3$, y entre $7$ da resto $2$. ¿Cuál es?» La respuesta es $23$, y el método de solución es el embrión del TCR moderno.

Más allá de su antigüedad, el TCR tiene una importancia algebraica profunda: establece que $\mathbb Z/mn\mathbb Z \cong \mathbb Z/m\mathbb Z \times \mathbb Z/n\mathbb Z$ como anillos cuando $\gcd(m, n) = 1$. Este isomorfismo no solo da la existencia y unicidad de la solución; es la razón por la que la función $\varphi$ de Euler es multiplicativa, por la que podemos descomponer problemas módulo un número compuesto en problemas módulo sus factores primos, y por la que la criptografía RSA es eficiente.

## Teorema

**(Teorema Chino del Resto, caso general)** Sean $n_1, n_2, \ldots, n_k$ enteros positivos **coprimos dos a dos** (es decir, $\gcd(n_i, n_j) = 1$ para todo $i \neq j$). Para cualesquiera enteros $a_1, a_2, \ldots, a_k$, el sistema

$$x \equiv a_1 \pmod{n_1}, \quad x \equiv a_2 \pmod{n_2}, \quad \ldots, \quad x \equiv a_k \pmod{n_k}$$

tiene **exactamente una solución** módulo $N = n_1 n_2 \cdots n_k$.

## Demostración

**Existencia (construcción explícita).** Sea $N_i = N / n_i$ el producto de todos los módulos excepto $n_i$. Como $\gcd(n_i, n_j) = 1$ para $j \neq i$, se tiene $\gcd(N_i, n_i) = 1$.

Por Bézout, existe $M_i$ (el inverso de $N_i$ módulo $n_i$) tal que $M_i N_i \equiv 1 \pmod{n_i}$.

Definimos:

$$x_0 \;=\; \sum_{i=1}^k a_i M_i N_i.$$

**Verificación:** para cada $j$, tomamos $x_0 \pmod{n_j}$. Los términos con $i \neq j$ contienen el factor $N_i$, que es múltiplo de $n_j$ (pues $n_j \mid N_i$ ya que $j \neq i$ y $n_j \mid N$). Así se anulan módulo $n_j$. El término $i = j$ da:

$$a_j M_j N_j \;\equiv\; a_j \cdot 1 \;=\; a_j \pmod{n_j}. \qquad \checkmark$$

**Unicidad.** Si $x_0$ y $x_1$ son dos soluciones, entonces para cada $i$: $n_i \mid (x_0 - x_1)$. Como los $n_i$ son coprimos dos a dos, $N = n_1 \cdots n_k \mid (x_0 - x_1)$. Así $x_0 \equiv x_1 \pmod N$. $\blacksquare$

## Ejemplo

### Aplicación directa

**Ejemplo 1.** Resolver el sistema:
$$x \equiv 2 \pmod 3, \quad x \equiv 3 \pmod 5, \quad x \equiv 2 \pmod 7.$$

$N = 3 \cdot 5 \cdot 7 = 105$. Calculamos los $N_i$ y sus inversos:

**Para $n_1 = 3$:** $N_1 = 35$. Necesitamos $35 M_1 \equiv 1 \pmod 3$. $35 \equiv 2 \pmod 3$, e $2^{-1} \equiv 2 \pmod 3$ (pues $2 \cdot 2 = 4 \equiv 1$). Así $M_1 = 2$.

**Para $n_2 = 5$:** $N_2 = 21$. $21 \equiv 1 \pmod 5$, así $M_2 = 1$.

**Para $n_3 = 7$:** $N_3 = 15$. $15 \equiv 1 \pmod 7$, así $M_3 = 1$.

$$x_0 = 2 \cdot 2 \cdot 35 + 3 \cdot 1 \cdot 21 + 2 \cdot 1 \cdot 15 = 140 + 63 + 30 = 233.$$

Reducimos: $233 = 2 \cdot 105 + 23$, así $x_0 \equiv 23 \pmod{105}$.

*Verificación:* $23 = 7 \cdot 3 + 2 \equiv 2 \pmod 3$ ✓, $23 = 4 \cdot 5 + 3 \equiv 3 \pmod 5$ ✓, $23 = 3 \cdot 7 + 2 \equiv 2 \pmod 7$ ✓.

---

**Ejemplo 2.** (El problema de Sunzi) Hallar el menor entero positivo $n$ tal que $n \equiv 2 \pmod 3$, $n \equiv 3 \pmod 5$, $n \equiv 2 \pmod 7$.

Por el ejemplo anterior, $n \equiv 23 \pmod{105}$. El menor positivo es $n = 23$.

---

### Técnica: descomponer módulos con factores primos

**Ejemplo 3.** Resolver $x \equiv 3 \pmod{12}$, $x \equiv 5 \pmod{35}$.

**Problema:** $\gcd(12, 35) = 1$ ✓ (pues $12 = 2^2 \cdot 3$ y $35 = 5 \cdot 7$). Podemos aplicar TCR directamente.

$N = 12 \cdot 35 = 420$. $N_1 = 35$, $N_2 = 12$.

$35^{-1} \pmod{12}$: $35 \equiv 11 \equiv -1 \pmod{12}$, así $M_1 = -1 \equiv 11$.

$12^{-1} \pmod{35}$: usamos Euclides: $35 = 2 \cdot 12 + 11$, $12 = 1 \cdot 11 + 1$. Bézout: $1 = 12 - 11 = 12 - (35 - 2 \cdot 12) = 3 \cdot 12 - 35$. Así $12 \cdot 3 \equiv 1 \pmod{35}$, $M_2 = 3$.

$$x_0 = 3 \cdot 11 \cdot 35 + 5 \cdot 3 \cdot 12 = 1155 + 180 = 1335.$$

$1335 = 3 \cdot 420 + 75$, así $x \equiv 75 \pmod{420}$.

*Verificación:* $75 = 6 \cdot 12 + 3$ ✓, $75 = 2 \cdot 35 + 5$ ✓.

---

### TCR para construir soluciones

**Ejemplo 4.** Probar que para todo $k \geq 1$, existe un entero positivo $n$ tal que $n, n+1, n+2, \ldots, n+k-1$ son todos compuestos.

**Solución.** Tomamos los $k$ primos distintos $p_1, p_2, \ldots, p_k$ (existen infinitos). Por TCR, existe $n$ con

$$n \equiv -1 \pmod{p_1}, \quad n \equiv -2 \pmod{p_2}, \quad \ldots, \quad n \equiv -k \pmod{p_k}.$$

Entonces $p_i \mid n + i$ para cada $i = 1, \ldots, k$. Si además $n + i > p_i$ (lo que se logra para $n$ suficientemente grande), cada $n + i$ es compuesto.

*(En realidad, $(k+1)! + 2, (k+1)! + 3, \ldots, (k+1)! + (k+1)$ también funciona sin TCR. Pero TCR da explícitamente el primer bloque de esta forma.)*

---

### Aplicación a la estructura del grupo multiplicativo

**Ejemplo 5.** Calcular $\varphi(3600)$ usando TCR.

$3600 = 2^4 \cdot 3^2 \cdot 5^2$. Como los factores son potencias de primos distintos, por multiplicatividad:

$$\varphi(3600) = \varphi(16) \cdot \varphi(9) \cdot \varphi(25) = 8 \cdot 6 \cdot 20 = 960.$$

El TCR dice que $(\mathbb Z/3600\mathbb Z)^* \cong (\mathbb Z/16\mathbb Z)^* \times (\mathbb Z/9\mathbb Z)^* \times (\mathbb Z/25\mathbb Z)^*$, que tiene orden $8 \cdot 6 \cdot 20 = 960$.

---

### Problemas de cajas y residuos

**Ejemplo 6.** (Problema clásico del comerciante chino) Una cesta con huevos: sacándolos de $2$ en $2$ sobra $1$, de $3$ en $3$ sobra $2$, de $5$ en $5$ sobra $4$. ¿Cuántos huevos hay como mínimo?

$$x \equiv 1 \pmod 2, \quad x \equiv 2 \pmod 3, \quad x \equiv 4 \pmod 5.$$

$N = 30$. $N_1 = 15$, $M_1 = 15^{-1} \pmod 2 = 1^{-1} = 1$. $N_2 = 10$, $M_2 = 10^{-1} \pmod 3 = 1^{-1} = 1$. $N_3 = 6$, $M_3 = 6^{-1} \pmod 5 = 1^{-1} = 1$.

$x_0 = 1 \cdot 1 \cdot 15 + 2 \cdot 1 \cdot 10 + 4 \cdot 1 \cdot 6 = 15 + 20 + 24 = 59 \equiv 29 \pmod{30}$.

**El mínimo es $29$ huevos.**

## Estructura algebraica

El TCR no es solo un teorema sobre sistemas de congruencias: es un **isomorfismo de anillos**:

$$\mathbb Z/N\mathbb Z \;\cong\; \mathbb Z/n_1\mathbb Z \;\times\; \mathbb Z/n_2\mathbb Z \;\times\; \cdots \;\times\; \mathbb Z/n_k\mathbb Z.$$

El isomorfismo es $a \pmod N \mapsto (a \pmod{n_1}, a \pmod{n_2}, \ldots, a \pmod{n_k})$.

**Consecuencias inmediatas del isomorfismo:**

- **Multiplicatividad de $\varphi$:** $|(\mathbb Z/N\mathbb Z)^*| = \prod |(\mathbb Z/n_i\mathbb Z)^*|$, es decir, $\varphi(N) = \prod \varphi(n_i)$.

- **Solubilidad de ecuaciones polinómicas:** $f(x) \equiv 0 \pmod N$ es equivalente al sistema $f(x) \equiv 0 \pmod{n_i}$ para cada $i$. El número de soluciones de $f \pmod N$ es el producto de los números de soluciones módulo cada $n_i$.

- **Estructura de $(\mathbb Z/N\mathbb Z)^*$:** si $N = \prod p_i^{e_i}$, entonces $(\mathbb Z/N\mathbb Z)^* \cong \prod (\mathbb Z/p_i^{e_i}\mathbb Z)^*$. Cada factor $(\mathbb Z/p^e\mathbb Z)^*$ es cíclico para $p$ impar, y producto de dos grupos cíclicos para $p = 2$, $e \geq 3$.

## Aplicaciones

**TCR no requiere módulos primos.** A diferencia del Pequeño Teorema de Fermat, el TCR funciona con cualquier módulo, siempre que sean coprimos dos a dos. Esto es útil en problemas donde el módulo natural es compuesto.

**Cuando los módulos no son coprimos.** Si $\gcd(n_i, n_j) \neq 1$, el sistema puede no tener solución (hay condiciones de compatibilidad). El caso general: el sistema $x \equiv a_i \pmod{n_i}$ tiene solución si y solo si $\gcd(n_i, n_j) \mid (a_i - a_j)$ para todo $i \neq j$. Cuando tiene solución, es única módulo $\text{lcm}(n_1, \ldots, n_k)$.

## Observación

**TCR en algoritmos.** El TCR permite reducir aritmética con números grandes a aritmética con números pequeños. Un entero grande $n < N = p_1 p_2 \cdots p_k$ puede representarse como la $k$-tupla $(n \bmod p_1, \ldots, n \bmod p_k)$. Las operaciones aritméticas se hacen coordenada a coordenada, y el resultado se reconstruye con TCR. Esta es la base de la **aritmética modular de enteros grandes**, usada en criptografía y en cálculo de determinantes simbólicos.

**TCR y el número de soluciones de polinomios.** Si $f \in \mathbb Z[x]$ y $N = p_1^{e_1} \cdots p_k^{e_k}$, el número de soluciones de $f(x) \equiv 0 \pmod N$ es $\prod_{i=1}^k N_i$ donde $N_i$ es el número de soluciones de $f(x) \equiv 0 \pmod{p_i^{e_i}}$. Esta factorización es fundamental en la teoría de formas cuadráticas y en la fórmula del número de representaciones de $n$ como suma de cuadrados.

## Problemas relacionados

- **(Clásico)** Para todo $k$, demostrar que existen $k$ enteros consecutivos todos divisibles por un cuadrado mayor que $1$.

- **(OME 2012)** Sea $a_1, a_2, \ldots, a_n$ una permutación de $\{1, 2, \ldots, n\}$ con $\gcd(a_i, i) = 1$ para todo $i$. ¿Para qué $n$ existe tal permutación?

- **(Clásico)** Demostrar que si $m, n$ son coprimos, el número de soluciones de $x^2 \equiv a \pmod{mn}$ es igual al producto del número de soluciones de $x^2 \equiv a \pmod m$ y de $x^2 \equiv a \pmod n$.

- **(OMG 2021)** Hallar todos los enteros positivos $n$ tales que $n \mid 2^{\varphi(n)} + 1$. *(TCR permite reducir a potencias de primos.)*

- **(Putnam 2002)** Determinar cuántos enteros $n$ con $1 \leq n \leq 10^6$ satisfacen que $n$ y $n+1$ son ambos divisibles solo por primos en $\{2, 3, 5, 7\}$.
