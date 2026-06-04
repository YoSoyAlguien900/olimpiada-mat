---
title: "Demostración del Teorema de Wilson: tres caminos"
preview: "$(p-1)! \\equiv -1 \\pmod p$ si y solo si $p$ es primo. Probamos esta identidad por emparejamiento de inversos, por polinomios sobre $\\mathbb F_p$, y por una identidad combinatoria."
dificultad: nacional
tags: [wilson, primos, demostracion, polinomios]
prerequisites: [pequeno-teorema-fermat, congruencias]
author: "Material olímpico"
updated: "2026-02-12"
---

## Teorema

**Wilson.** Para todo entero $p \geq 2$:

$$
(p - 1)! \;\equiv\; -1 \pmod p \quad \Longleftrightarrow \quad p \text{ es primo}.
$$

## Demostración

### Demostración 1: emparejamiento de inversos

Sea $p$ primo. Vamos a probar que $(p-1)! \equiv -1 \pmod p$.

En el grupo multiplicativo $(\mathbb Z/p\mathbb Z)^*$ (los enteros del $1$ al $p-1$ con multiplicación módulo $p$), cada elemento $a$ tiene un único **inverso** $a^{-1}$ tal que $a \cdot a^{-1} \equiv 1 \pmod p$.

**Pregunta clave:** ¿qué elementos $a$ son su propio inverso? Estos satisfacen $a^2 \equiv 1 \pmod p$, es decir, $(a-1)(a+1) \equiv 0 \pmod p$. Como $p$ es primo, $a \equiv 1$ o $a \equiv -1 \equiv p - 1 \pmod p$.

Por tanto, los **autoinversos** son $1$ y $p - 1$. Los demás $p - 3$ elementos se emparejan: $2 \leftrightarrow 2^{-1}$, $3 \leftrightarrow 3^{-1}$, etc., con cada par contribuyendo un producto $\equiv 1$.

Multiplicando todos:

$$
(p-1)! \;=\; 1 \cdot 2 \cdot 3 \cdots (p-1) \;\equiv\; 1 \cdot (p-1) \cdot \underbrace{1 \cdot 1 \cdots 1}_{(p-3)/2 \text{ pares}} \;=\; p - 1 \;\equiv\; -1 \pmod p. \qquad \blacksquare
$$

**Recíproco.** Si $p$ no es primo y $p > 4$, entonces $p$ tiene un divisor propio $d$ con $1 < d < p$. Es entonces $d \mid (p-1)!$ porque $d$ aparece como factor. Pero $d \mid p$ y $(p-1)! \equiv -1$ implicaría $d \mid 1$, contradicción. Para $p = 4$ se verifica directamente: $3! = 6 \equiv 2 \pmod 4$, no es $-1 \equiv 3$. ✓

### Demostración 2: polinomios sobre $\mathbb F_p$

Sea $p$ primo, y consideremos el polinomio

$$
P(x) \;=\; x^{p-1} - 1 \in \mathbb F_p[x].
$$

Por el pequeño teorema de Fermat, todos los $1, 2, \ldots, p-1$ son raíces de $P$. Como $P$ tiene grado $p - 1$ y exactamente $p - 1$ raíces distintas, se factoriza completamente:

$$
P(x) \;=\; (x - 1)(x - 2)(x - 3) \cdots (x - (p - 1)) \pmod p.
$$

Comparando los **términos constantes** de ambos lados:

$$
-1 \;=\; (-1)(-2)(-3) \cdots (-(p-1)) \;=\; (-1)^{p-1} \cdot (p-1)!.
$$

Como $p$ es impar (excepto $p = 2$, que se verifica directamente), $(-1)^{p-1} = 1$, así que

$$
(p - 1)! \;\equiv\; -1 \pmod p. \qquad \blacksquare
$$

Esta demostración es más estructural: identifica el factorial con un coeficiente del polinomio $x^{p-1} - 1$ y deduce la identidad como **álgebra**, no como conteo.

### Demostración 3: identidad combinatoria

(Esquema.) Consideramos el número de **permutaciones de $p$ objetos sin punto fijo** (desarreglos), denotado $D_p$. Por inclusión-exclusión:

$$
D_p \;=\; p! \sum_{k=0}^{p} \frac{(-1)^k}{k!}.
$$

Por otro lado, los desarreglos tienen una estructura cíclica: cada uno se descompone en ciclos de longitud $\geq 2$. Una construcción combinatoria muestra que para $p$ primo, $D_p \equiv -1 \pmod p$.

Combinando esto con la fórmula de inclusión-exclusión y simplificando módulo $p$ (los términos con $k \geq 2$ contienen factor $p$ o se cancelan), se obtiene Wilson.

(El desarrollo completo es notable porque conecta el factorial con la combinatoria de permutaciones — y a través de ella con la teoría de representaciones del grupo simétrico.)

## Observación

Las tres demostraciones son **distintamente filosóficas**:

- **Emparejamiento:** combinatoria pura, una idea inmediatamente verificable.
- **Polinomios:** álgebra estructural, generaliza inmediatamente al teorema de Lagrange y a los polinomios cíclotómicos.
- **Combinatoria:** convierte una identidad numérica en una afirmación sobre permutaciones, abriendo puertas a la teoría de Pólya-Burnside.

Esta multiplicidad es típica de los teoremas profundos: **una sola fórmula admite muchas demostraciones porque conecta varias áreas**.

## Aplicaciones

### Aplicación 1: cálculo de inversos

Wilson da una fórmula explícita para el inverso de $(p - 2)! \pmod p$:

$$
(p - 2)! \cdot (p - 1) \;\equiv\; -1, \qquad (p - 2)! \;\equiv\; \frac{-1}{p - 1} \;\equiv\; \frac{-1}{-1} \;\equiv\; 1 \pmod p.
$$

Es decir, $(p - 2)! \equiv 1 \pmod p$ para todo primo $p$.

### Aplicación 2: criterio de primalidad

Wilson da un criterio de primalidad: $p$ primo $\iff (p-1)! \equiv -1 \pmod p$. Aunque computacionalmente impráctico (calcular $(p-1)!$ es $O(p)$, mientras que algoritmos modernos primarian en $O(\log^c p)$), es teóricamente importante.

### Aplicación 3: refinamientos modulares

Wilson se generaliza:

$$
\prod_{\substack{1 \leq a \leq n \\ \gcd(a, n) = 1}} a \;\equiv\; \pm 1 \pmod n,
$$

con el signo $+1$ excepto cuando $n = 2, 4, p^k, 2p^k$ con $p$ primo impar. Este es un teorema más sutil con aplicaciones en aritmética analítica.

## Problemas relacionados

- **Generalización de Lagrange.** En un grupo abeliano finito, el producto de todos los elementos es el producto de los elementos de orden $\leq 2$.
- **Identidad de Vandermonde:** suma de productos relacionada con factoriales.
- **Sumas de Gauss:** combinaciones lineales de raíces $p$-ésimas de la unidad pesadas por símbolos de Legendre.
