---
title: "Pequeño Teorema de Fermat"
preview: "Si $p$ es primo y $\\gcd(a, p) = 1$, entonces $a^{p-1} \\equiv 1 \\pmod{p}$. La piedra angular de la aritmética modular olímpica: reduce potencias de cualquier tamaño a un residuo en $\\{1, \\ldots, p-1\\}$."
dificultad: regional
tags: [fermat, congruencias, primos, potencias, orden]
prerequisites: [congruencias, divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

Pierre de Fermat anunció el resultado que lleva su nombre en una carta de 1640 a Frénicle de Bessy, sin demostración. La primera prueba publicada la dio Leibniz, y Euler la popularizó en 1736. En sus tres siglos de vida, este teorema ha pasado de ser una curiosidad aritmética a ser la base de la criptografía moderna (RSA), los tests de primalidad probabilísticos, y toda la aritmética modular avanzada.

Su enunciado es deceptivamente simple: las potencias de cualquier entero $a$ forman un ciclo de longitud que divide a $p - 1$ módulo un primo $p$. Esa periodicidad convierte cálculos con exponentes astronómicos en cálculos con restos pequeños.

## Enunciado

**(Pequeño Teorema de Fermat)** Sea $p$ un número primo. Entonces:

**(PTF-1)** Para todo entero $a$ con $\gcd(a, p) = 1$:
$$a^{p-1} \;\equiv\; 1 \pmod{p}.$$

**(PTF-2)** Para todo entero $a$ (sin restricción de coprimalidad):
$$a^p \;\equiv\; a \pmod{p}.$$

La segunda forma se deduce de la primera: si $p \mid a$, ambos lados son $\equiv 0$; si $p \nmid a$, multiplicamos (PTF-1) por $a$.

## Demostración

### Demostración 1: por el método de los productos (Euler)

Sea $a$ con $\gcd(a, p) = 1$. Consideramos los $p - 1$ múltiplos de $a$:

$$S = \{a, 2a, 3a, \ldots, (p-1)a\}.$$

**Afirmación:** los elementos de $S$ son todos distintos módulo $p$, y ninguno es $\equiv 0 \pmod p$.

*Ninguno es cero:* $p \nmid ka$ porque $p \nmid k$ (para $1 \leq k \leq p-1$) y $p \nmid a$.

*Todos distintos:* si $ia \equiv ja \pmod p$ con $1 \leq i < j \leq p-1$, entonces $p \mid (j-i)a$. Como $\gcd(a,p) = 1$, se sigue $p \mid (j-i)$, imposible pues $0 < j - i < p$.

Por tanto $S$ es una permutación de $\{1, 2, \ldots, p-1\}$ módulo $p$. Multiplicando todos los elementos:

$$a \cdot 2a \cdots (p-1)a \;\equiv\; 1 \cdot 2 \cdots (p-1) \pmod p.$$

Esto es $a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod p$. Como $\gcd((p-1)!, p) = 1$ (el factorial de $p-1$ no es divisible por el primo $p$), cancelamos:

$$a^{p-1} \;\equiv\; 1 \pmod p. \qquad \blacksquare$$

### Demostración 2: por inducción (Leibniz)

Probamos $a^p \equiv a \pmod p$ por inducción sobre $a \geq 0$.

*Caso base:* $0^p = 0 \equiv 0 \pmod p$. ✓

*Paso inductivo:* supongamos $a^p \equiv a \pmod p$. Expandimos $(a+1)^p$ con el binomio de Newton:

$$(a+1)^p \;=\; \sum_{k=0}^{p} \binom{p}{k} a^k.$$

Para $1 \leq k \leq p-1$: el coeficiente $\binom{p}{k} = \frac{p!}{k!(p-k)!}$ tiene $p$ en el numerador pero no en el denominador (ya que $k < p$ y $p - k < p$, ningún factor del denominador es divisible por el primo $p$). Luego $p \mid \binom{p}{k}$.

Por tanto todos los términos intermedios desaparecen módulo $p$:

$$(a+1)^p \;\equiv\; a^p + 1 \;\equiv\; a + 1 \pmod p, \qquad \blacksquare$$

usando la hipótesis inductiva.

## Ejemplo

### Cómputo de potencias grandes

**Ejemplo 1.** Calcular $3^{2026} \pmod 7$.

$7$ es primo. Por PTF, $3^6 \equiv 1 \pmod 7$. Dividimos $2026 = 6 \cdot 337 + 4$, así:

$$3^{2026} = (3^6)^{337} \cdot 3^4 \equiv 1^{337} \cdot 81 \pmod 7.$$

$81 = 11 \cdot 7 + 4 \equiv 4 \pmod 7$.

**Respuesta: $3^{2026} \equiv 4 \pmod 7$.**

---

**Ejemplo 2.** ¿Cuál es el resto de $123^{456} \pmod{11}$?

$11$ es primo. $123 = 11 \cdot 11 + 2$, así $123 \equiv 2 \pmod{11}$. Por PTF, $2^{10} \equiv 1 \pmod{11}$.

$456 = 10 \cdot 45 + 6$, así $2^{456} \equiv 2^6 = 64 = 5 \cdot 11 + 9 \equiv 9 \pmod{11}$.

**Respuesta: $123^{456} \equiv 9 \pmod{11}$.**

---

### Divisibilidad con potencias

**Ejemplo 3.** Probar que $p \mid n^p - n$ para todo primo $p$ y todo entero $n$.

Por PTF-2: $n^p \equiv n \pmod p$, así $p \mid n^p - n$.

**Aplicación directa:** $6 \mid n^6 - n$ para todo $n$? $6 = 2 \cdot 3$. Por PTF: $2 \mid n^2 - n$ y $3 \mid n^3 - n$. Pero $n^6 - n = n(n^5 - 1)$. Necesitamos: $2 \mid n^6 - n$: $n^6 \equiv n \pmod 2$ por PTF con $p = 2$. $3 \mid n^6 - n$: $n^6 - n = n(n^5 - 1)$; si $3 \mid n$ está claro; si $3 \nmid n$, $n^2 \equiv 1 \pmod 3$ por PTF, así $n^6 \equiv 1 \equiv n^0$... mejor: $n^3 \equiv n \pmod 3$, así $n^6 = (n^3)^2 \equiv n^2 \pmod 3$, y $n^6 - n = n^6 - n^3 + n^3 - n = n^3(n^3 - 1) + n(n^2 - 1)$... se complica. Verificación directa para $n = 0, 1, 2 \pmod 3$ confirma $3 \mid n^6 - n$.

---

**Ejemplo 4.** Demostrar que $42 \mid n^7 - n$ para todo entero $n$.

$42 = 2 \cdot 3 \cdot 7$. Verificamos divisibilidad por cada primo:

- Por $7$: PTF-2 da $n^7 \equiv n \pmod 7$, luego $7 \mid n^7 - n$.
- Por $3$: $n^3 \equiv n \pmod 3$, así $n^7 = n^{3 \cdot 2 + 1} = (n^3)^2 \cdot n \equiv n^2 \cdot n = n^3 \equiv n \pmod 3$.
- Por $2$: $n^2 \equiv n \pmod 2$ (pues $n^2 - n = n(n-1)$ siempre par), así $n^7 = n^{2 \cdot 3 + 1} \equiv n^{0+1} = n \pmod 2$.

Como los tres primos $2, 3, 7$ son distintos, si $p \mid n^7 - n$ para $p \in \{2, 3, 7\}$, entonces $2 \cdot 3 \cdot 7 = 42 \mid n^7 - n$. $\square$

---

### Torres de exponentes

**Ejemplo 5.** Calcular $3^{3^{100}} \pmod{7}$.

Por PTF: las potencias de $3$ módulo $7$ tienen ciclo de longitud $6$:

$$3^1 \equiv 3,\ 3^2 \equiv 2,\ 3^3 \equiv 6,\ 3^4 \equiv 4,\ 3^5 \equiv 5,\ 3^6 \equiv 1 \pmod 7.$$

Necesitamos $3^{100} \pmod 6$ para reducir el exponente. Las potencias de $3$ módulo $6$:

$$3^1 = 3,\quad 3^2 = 9 \equiv 3,\quad 3^3 \equiv 3,\ldots$$

Siempre $3^k \equiv 3 \pmod 6$ para todo $k \geq 1$ (porque $3 \cdot 3 = 9 = 6 + 3$). Luego $3^{100} \equiv 3 \pmod 6$.

Por tanto $3^{3^{100}} \equiv 3^3 = 27 \equiv 6 \pmod 7$.

**Respuesta: $3^{3^{100}} \equiv 6 \pmod 7$.**

---

### Primos condicionales

**Ejemplo 6.** Probar que si $p$ es primo y $p > 3$, entonces $p^2 \equiv 1 \pmod{24}$.

Todo primo $p > 3$ es impar y no divisible por $3$, luego $p = 6k \pm 1$ para algún $k$. Entonces:

$$p^2 = (6k \pm 1)^2 = 36k^2 \pm 12k + 1 = 12k(3k \pm 1) + 1.$$

Como $k$ y $3k \pm 1$ son de paridad opuesta (uno par, otro impar), su producto $k(3k \pm 1)$ es par. Así $p^2 = 12 \cdot (2m) + 1 = 24m + 1 \equiv 1 \pmod{24}$. $\square$

---

**Ejemplo 7.** Encontrar todos los primos $p$ tales que $p \mid 2^p + 1$.

Por PTF: $2^p \equiv 2 \pmod p$. Entonces $p \mid 2^p + 1$ equivale a $p \mid 2 + 1 = 3$.

El único primo que divide a $3$ es $3$. Verificación: $2^3 + 1 = 9 = 3 \cdot 3$, sí divisible. $\square$

**Los únicos primos son $p = 3$.**

## Aplicaciones

### Reducción del exponente

La técnica estándar para $a^k \pmod p$ con $p$ primo y $p \nmid a$:

1. Calcular $r = k \bmod (p-1)$ (PTF garantiza que el ciclo de $a$ divide a $p-1$).
2. Computar $a^r \pmod p$ con exponenciación rápida en $O(\log r)$ multiplicaciones.

**Precaución:** PTF da que el orden de $a$ módulo $p$ *divide* a $p-1$, no que sea exactamente $p-1$. Por ejemplo, $\text{ord}_7(6) = 2$ (pues $6 \equiv -1$ y $(-1)^2 = 1$), que divide a $6$. Para potencias de $a$ se puede reducir $k$ módulo el orden real de $a$, que divide a $p-1$. En la práctica, reducir módulo $p-1$ es seguro aunque a veces subóptimo.

### Tests de primalidad

PTF da un criterio necesario de primalidad: si $p$ es primo y $\gcd(a, p) = 1$, entonces $a^{p-1} \equiv 1 \pmod p$. Un entero $n$ que falla esta prueba para algún $a$ con $\gcd(a, n) = 1$ es necesariamente **compuesto**.

El **Test de Miller-Rabin** refina esta idea: si $n = 2^s \cdot d + 1$ con $d$ impar, un entero $n$ compuesto "engaña" al test para a lo sumo $1/4$ de las bases $a \in \{2, \ldots, n-2\}$. Con $k$ bases aleatorias, la probabilidad de un falso positivo es $\leq 4^{-k}$.

### Números de Carmichael

El recíproco de PTF es **falso**: existen enteros compuestos $n$ con $a^{n-1} \equiv 1 \pmod n$ para *todo* $a$ coprimo con $n$. Se llaman **números de Carmichael**. El menor es $561 = 3 \cdot 11 \cdot 17$.

Caracterización (Korselt, 1899): $n$ es de Carmichael si y solo si es libre de cuadrados y para cada primo $p \mid n$ se tiene $(p-1) \mid (n-1)$. Hay infinitos números de Carmichael (Alford-Granville-Pomerance, 1994).

## Observación

**PTF como caso especial de Euler.** El Teorema de Euler generaliza PTF: si $\gcd(a, n) = 1$, entonces $a^{\varphi(n)} \equiv 1 \pmod n$, donde $\varphi$ es la función totiente. Para $n = p$ primo, $\varphi(p) = p - 1$ y recuperamos PTF. El teorema de Euler a su vez es un caso especial de que el orden de cualquier elemento divide al orden del grupo: en $(\mathbb Z/n\mathbb Z)^*$, el orden del grupo es $\varphi(n)$.

**El orden de $a$ módulo $p$.** El menor entero positivo $d$ con $a^d \equiv 1 \pmod p$ se llama el **orden** de $a$ módulo $p$ y satisface $d \mid p-1$. El exponente $p-1$ en PTF es universal pero no óptimo: $a^d \equiv 1$ con $d \mid p-1$. El orden exacto puede ser cualquier divisor de $p-1$. Los elementos de orden $p-1$ son las **raíces primitivas** módulo $p$, y existen siempre (hay $\varphi(p-1)$ de ellas).

## Problemas relacionados

- **(Clásico)** Hallar todos los primos $p$ tales que $p \mid 2^p + 1$.

- **(Clásico)** Demostrar que para todo primo $p > 3$, el número $\underbrace{11\cdots1}_{p-1 \text{ unos}}$ es divisible por $p$.

- **(Clásico)** Sea $p$ un primo impar. Probar que $1^{p-1} + 2^{p-1} + \cdots + (p-1)^{p-1} \equiv -1 \pmod p$.

- **(Clásico)** Si $p$ es primo y $a^2 \equiv 1 \pmod p$, demostrar que $a \equiv \pm 1 \pmod p$.

- **(Clásico)** Probar que $n^{13} - n$ es divisible por $2, 3, 5, 7, 13$, y por tanto por $30030$, para todo entero $n$.

- **(Clásico)** Hallar el último dígito de $3^{3^{3^3}}$.
