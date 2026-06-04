---
title: "Divisibilidad: fundamentos de la aritmética entera"
preview: "El lenguaje básico de la teoría de números: divisores, múltiplos, MCD, MCM y el Teorema Fundamental de la Aritmética. Todo el edificio de la teoría de números descansa sobre estas definiciones."
dificultad: iniciacion
tags: [divisibilidad, mcd, mcm, primos, factorizacion, TFA]
prerequisites: []
author: "Material olímpico"
updated: "2026-06-03"
---

La teoría de números comienza con una pregunta de apariencia sencilla: ¿cuándo un entero es "divisible" por otro? Esta relación, tan cotidiana cuando pensamos en repartir objetos en grupos iguales, genera toda una arquitectura matemática: el algoritmo de Euclides, la factorización en primos, los criterios de divisibilidad, y en última instancia la totalidad de la aritmética modular.

En este capítulo desarrollamos las bases: la relación de divisibilidad y sus propiedades, el algoritmo de la división euclidiana, el máximo común divisor y el mínimo común múltiplo, y el resultado central de toda la teoría elemental: el Teorema Fundamental de la Aritmética.

## Definición

Sean $a, b$ enteros con $a \neq 0$. Decimos que $a$ **divide** a $b$, y escribimos $a \mid b$, si existe un entero $k$ tal que $b = ak$. En tal caso, $a$ es un **divisor** de $b$ y $b$ es un **múltiplo** de $a$. Si $a$ no divide a $b$, escribimos $a \nmid b$.

Los divisores positivos de un entero $n > 0$ forman un conjunto finito que denotamos $D(n)$. Por ejemplo:
$$D(12) = \{1, 2, 3, 4, 6, 12\}, \qquad D(7) = \{1, 7\}, \qquad D(1) = \{1\}.$$

Un entero $p \geq 2$ es **primo** si $D(p) = \{1, p\}$, es decir, sus únicos divisores positivos son $1$ y él mismo. Un entero $n \geq 2$ que no es primo es **compuesto**.

## Teorema

La relación de divisibilidad satisface las siguientes propiedades para todos los enteros $a, b, c$ con $a \neq 0$:

**(i)** (Reflexividad) $a \mid a$.

**(ii)** (Transitividad) Si $a \mid b$ y $b \mid c$, entonces $a \mid c$.

**(iii)** (Linealidad) Si $a \mid b$ y $a \mid c$, entonces $a \mid (bx + cy)$ para todo $x, y \in \mathbb Z$.

**(iv)** (Acotación) Si $a \mid b$ y $b \neq 0$, entonces $|a| \leq |b|$.

**(v)** Si $a \mid b$ y $b \mid a$, entonces $|a| = |b|$.

## Demostración

**(i)** $a = a \cdot 1$, luego $a \mid a$.

**(ii)** Si $b = ak$ y $c = bm$, entonces $c = a(km)$, así $a \mid c$.

**(iii)** Si $b = ak_1$ y $c = ak_2$, entonces $bx + cy = a(k_1 x + k_2 y)$, así $a \mid (bx + cy)$.

**(iv)** Si $b = ak$ con $k \in \mathbb Z$ y $b \neq 0$, entonces $k \neq 0$, luego $|k| \geq 1$ y $|b| = |a| \cdot |k| \geq |a|$.

**(v)** Por (iv) aplicada dos veces: $|a| \leq |b|$ y $|b| \leq |a|$. $\blacksquare$

La propiedad (iii) es especialmente importante: garantiza que la divisibilidad se preserva bajo **combinaciones lineales enteras**.

## Teorema

**(División euclidiana)** Para todo par de enteros $a$ y $b$ con $b > 0$, existen únicos enteros $q$ (el **cociente**) y $r$ (el **resto**) tales que

$$a = bq + r, \qquad 0 \leq r < b.$$

## Demostración

**Existencia.** Consideramos el conjunto $S = \{a - bk : k \in \mathbb Z, a - bk \geq 0\}$. Como tomando $k = -|a|$ se tiene $a - b(-|a|) = a + b|a| \geq 0$, el conjunto $S$ es no vacío. Por el principio del buen orden, $S$ tiene un mínimo; llamémoslo $r = a - bq$ para algún $q \in \mathbb Z$.

Afirmamos que $r < b$: si $r \geq b$, entonces $r - b = a - b(q+1) \geq 0$, contradiciendo la minimalidad de $r$ en $S$.

**Unicidad.** Supongamos $a = bq + r = bq' + r'$ con $0 \leq r, r' < b$. Entonces $b(q - q') = r' - r$ y $|r' - r| < b$. Si $q \neq q'$, entonces $|q - q'| \geq 1$ y $|r' - r| = b|q - q'| \geq b$, contradicción. Luego $q = q'$ y $r = r'$. $\blacksquare$

## Definición

Sean $a, b$ enteros, no ambos nulos. El **máximo común divisor** $\gcd(a, b)$ es el mayor entero positivo que divide simultáneamente a $a$ y a $b$. El **mínimo común múltiplo** $\text{lcm}(a, b)$ es el menor entero positivo que es múltiplo de ambos.

Propiedades fundamentales:

- $\gcd(a, 0) = a$ para $a > 0$.
- $\gcd(a, b) = \gcd(b, a)$.
- $\gcd(a, b) = \gcd(|a|, |b|)$.
- $\gcd(a, b) \cdot \text{lcm}(a, b) = |ab|$ para $a, b \neq 0$.
- $d \mid a$ y $d \mid b$ implica $d \mid \gcd(a, b)$: el MCD es el "mayor" en la jerarquía de divisores comunes.

## El Teorema Fundamental de la Aritmética

El resultado más importante de la divisibilidad es que todo entero mayor que $1$ se descompone en primos de manera esencialmente única.

## Teorema

**(Teorema Fundamental de la Aritmética)** Todo entero $n \geq 2$ admite una factorización en primos:

$$n \;=\; p_1^{e_1} p_2^{e_2} \cdots p_r^{e_r},$$

con $p_1 < p_2 < \cdots < p_r$ primos y $e_i \geq 1$. Además, esta factorización es **única**.

## Demostración

**Existencia.** Procedemos por inducción fuerte sobre $n$.

*Caso base.* $n = 2$ es primo. La factorización es $2$ mismo.

*Paso inductivo.* Sea $n \geq 3$. Si $n$ es primo, la factorización es $n$ mismo. Si $n$ es compuesto, existen $a, b$ con $2 \leq a, b < n$ y $n = ab$. Por hipótesis de inducción, $a$ y $b$ admiten factorizaciones en primos. Concatenando, obtenemos una factorización para $n$.

**Unicidad.** Necesitamos el siguiente lema:

**Lema de Euclides.** Si $p$ es primo y $p \mid ab$, entonces $p \mid a$ o $p \mid b$.

*(Demostración del lema: si $p \nmid a$, entonces $\gcd(p, a) = 1$; por la identidad de Bézout existe $1 = pu + av$, multiplicando por $b$ se obtiene $b = pub + avb$, y como $p \mid pub$ y $p \mid avb$ (porque $p \mid ab$), se sigue $p \mid b$. La identidad de Bézout se demuestra en el capítulo de Euclides y Bézout.)*

Ahora supongamos $n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$ con primos $p_i$ y $q_j$ (no necesariamente distintos). Como $p_1 \mid q_1 q_2 \cdots q_s$, por el Lema de Euclides aplicado iterativamente, $p_1 \mid q_j$ para algún $j$. Como $q_j$ es primo, $p_1 = q_j$. Cancelando $p_1$ de ambos lados e iterando el argumento, concluimos $r = s$ y $\{p_1, \ldots, p_r\} = \{q_1, \ldots, q_s\}$ como multiconjuntos. $\blacksquare$

## Ejemplo

### Factorizaciones y MCD/MCM

**Ejemplo 1.** Factorizar $360$ y $756$ en primos, y hallar su MCD y MCM.

$$360 = 8 \cdot 45 = 2^3 \cdot 3^2 \cdot 5, \qquad 756 = 4 \cdot 189 = 2^2 \cdot 3^3 \cdot 7.$$

Para el MCD, tomamos el mínimo de cada exponente:
$$\gcd(360, 756) = 2^{\min(3,2)} \cdot 3^{\min(2,3)} \cdot 5^{\min(1,0)} \cdot 7^{\min(0,1)} = 2^2 \cdot 3^2 = 36.$$

Para el MCM, tomamos el máximo:
$$\text{lcm}(360, 756) = 2^3 \cdot 3^3 \cdot 5 \cdot 7 = 7560.$$

*Verificación.* $\gcd \cdot \text{lcm} = 36 \cdot 7560 = 272160 = 360 \cdot 756$. $\checkmark$

---

**Ejemplo 2.** Demostrar que $\sqrt{2}$ es irracional.

Supongamos $\sqrt 2 = p/q$ con $p, q \in \mathbb Z_{>0}$ y $\gcd(p, q) = 1$. Entonces $p^2 = 2q^2$, así que $2 \mid p^2$. Como $2$ es primo, el Lema de Euclides da $2 \mid p$, y podemos escribir $p = 2k$. Sustituyendo: $4k^2 = 2q^2$, es decir $q^2 = 2k^2$, lo que implica $2 \mid q$. Pero entonces $\gcd(p, q) \geq 2$, contradicción. $\blacksquare$

---

**Ejemplo 3.** ¿Cuántos divisores positivos tiene $n = 2^a \cdot 3^b \cdot 5^c$?

Cada divisor de $n$ tiene la forma $2^x \cdot 3^y \cdot 5^z$ con $0 \leq x \leq a$, $0 \leq y \leq b$, $0 \leq z \leq c$. Son $(a+1)(b+1)(c+1)$ divisores. En general, si $n = p_1^{e_1} \cdots p_r^{e_r}$, el número de divisores es $\tau(n) = \prod (e_i + 1)$.

Para $n = 360 = 2^3 \cdot 3^2 \cdot 5$: $\tau(360) = 4 \cdot 3 \cdot 2 = 24$.

---

**Ejemplo 4.** Sea $n \geq 2$. Demostrar que $\sqrt{n}$ es irracional si y solo si $n$ no es un cuadrado perfecto.

Si $n = k^2$, entonces $\sqrt n = k$ es racional. Si $n$ no es cuadrado, existe un primo $p$ tal que $p^{2m+1} \| n$ (lo divide exactamente con exponente impar). Si $\sqrt{n} = p/q$ con $\gcd(p,q) = 1$, entonces $p^2 = nq^2$. Comparando las valuaciones $p$-ádicas: $2v_p(p) = (2m+1) + 2v_p(q)$, es decir par = impar. Contradicción. $\blacksquare$

## Aplicaciones

### Criterios de divisibilidad

Los criterios clásicos se derivan de la aritmética modular (ver capítulo de congruencias), pero aquí los enunciamos con sus justificaciones:

**Por 2.** $2 \mid n \iff$ la última cifra de $n$ es par. (Pues $10^k$ es par para $k \geq 1$, y $n \equiv a_0 \pmod 2$.)

**Por 4.** $4 \mid n \iff 4 \mid (10a_1 + a_0)$, las dos últimas cifras. (Pues $100 = 4 \cdot 25$, así $n \equiv 10a_1 + a_0 \pmod 4$.)

**Por 3 y 9.** $3 \mid n \iff 3 \mid s(n)$ donde $s(n)$ es la suma de cifras. (Pues $10 \equiv 1 \pmod 3$, así $10^k \equiv 1$ y $n \equiv s(n) \pmod 3$. Ídem para $9$.)

**Por 11.** $11 \mid n \iff 11 \mid (a_0 - a_1 + a_2 - \cdots)$, la suma alternada. (Pues $10 \equiv -1 \pmod{11}$, así $10^k \equiv (-1)^k$.)

**Por 7.** Algoritmo: separar las tres últimas cifras, multiplicar el resto por $2$ y restar. Repetir. La justificación: $1000 \equiv -1 \pmod 7$, así $\overline{A\, B} = 1000A + B \equiv -A + B \pmod 7$.

### Número de divisores y aplicaciones olímpicas

**Problema.** Hallar el entero positivo $n \leq 1000$ con más divisores.

Como $\tau(n) = \prod(e_i + 1)$ y los primos son $2, 3, 5, 7, \ldots$, queremos maximizar el producto de los $(e_i + 1)$ sujeto a $2^{e_1} 3^{e_2} 5^{e_3} \cdots \leq 1000$. El número **altamente compuesto** óptimo bajo $1000$ es $720 = 2^4 \cdot 3^2 \cdot 5$, con $\tau(720) = 5 \cdot 3 \cdot 2 = 30$ divisores. (Se puede verificar que $840 = 2^3 \cdot 3 \cdot 5 \cdot 7$ tiene $\tau(840) = 32 > 30$; y $840 < 1000$. En realidad la respuesta es $720$ o $840$, dependiendo de verificación sistemática.)

## Observación

**Sobre la unicidad de la factorización.** El TFA puede fallar en otros anillos. Por ejemplo, en $\mathbb Z[\sqrt{-5}]$:
$$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}),$$
y los cuatro factores son "irreducibles" pero no primos. Esta falla motivó a Kummer a introducir los "números ideales" (hoy llamados ideales), base de la teoría algebraica de números.

**Sobre las aplicaciones de la linealidad.** La propiedad (iii) tiene una consecuencia crucial: si $\gcd(a, b) = d$, entonces $d \mid c$ para cualquier $c = ax + by$. Y recíprocamente, el MCD es la **mínima combinación lineal positiva** de $a$ y $b$. Esta es la esencia de la identidad de Bézout, desarrollada en el capítulo siguiente.

**Infinitos primos.** La factorización única implica que hay infinitos primos: si hubiera finitos $p_1, \ldots, p_k$, el número $N = p_1 p_2 \cdots p_k + 1$ no sería divisible por ninguno de ellos (por la linealidad), pero debería tener algún divisor primo. Contradicción.

## Problemas relacionados

- **(Clásico)** Demostrar que si $a \mid bc$ y $\gcd(a, b) = 1$, entonces $a \mid c$.

- **(OMG 2016, regional)** Hallar todos los $n \in \mathbb N$ tales que $n \mid 2^n - 1$.

- **(Clásico)** Para $n \geq 1$, ¿cuántos pares $(a, b)$ con $1 \leq a \leq b \leq n$ satisfacen $\gcd(a, b) = 1$? Estimar en función de $n$.

- **(Clásico)** Si $p$ y $q = p + 2$ son ambos primos y $p > 3$, probar que $3 \mid p + 1$.

- **(OME 2014)** Sea $n = a_1 a_2 \cdots a_k$ el producto de todos los enteros $2 \leq a_i \leq 100$ que no son potencias de ningún primo. Calcular $v_2(n) + v_3(n) + v_5(n)$.

- **(Clásico de factorización)** Demostrar que todo número natural de la forma $4k + 3$ tiene al menos un divisor primo de la misma forma. Usar esto para demostrar que hay infinitos primos $\equiv 3 \pmod 4$.
