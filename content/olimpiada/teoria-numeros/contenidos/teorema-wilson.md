---
title: "Teorema de Wilson"
preview: "$(p-1)! \\equiv -1 \\pmod p$ caracteriza primalidad. Una identidad bellísima que esconde más profundidad de la que aparenta."
dificultad: nacional
tags: [wilson, factoriales, primos, congruencias]
prerequisites: [congruencias, pequeno-teorema-fermat]
author: "Adrián García Bouzas"
updated: "2026-02-07"
---

## Teorema

Un entero $p > 1$ es primo si y solo si
$$ (p-1)! \equiv -1 \pmod p. $$

## Demostración

**$(\Rightarrow)$ Si $p$ es primo.** Trabajamos en el cuerpo $\mathbb Z/p\mathbb Z$. Cada elemento $a \in \{1, 2, \ldots, p-1\}$ tiene un único inverso multiplicativo $a^{-1} \in \{1, \ldots, p-1\}$.

Los elementos que son **autoinversos** ($a = a^{-1}$, es decir $a^2 = 1$) son las raíces de $x^2 - 1 = (x-1)(x+1)$ en el cuerpo: exactamente $a = 1$ y $a = p - 1 \equiv -1$.

Para $a \in \{2, 3, \ldots, p-2\}$, su inverso es **distinto** de $a$. Agrupando cada $a$ con su inverso obtenemos pares $(a, a^{-1})$ cuyo producto es $1$. Quedan sin emparejar solo $1$ y $p-1$. Por tanto
$$ (p-1)! = 1 \cdot (p-1) \cdot \prod_{\text{pares}} 1 \equiv 1 \cdot (-1) = -1 \pmod p. $$

**$(\Leftarrow)$ Si $p$ es compuesto.** Sea $p = ab$ con $1 < a \leq b < p$. Si $a \neq b$, ambos aparecen en el producto $(p-1)!$, luego $p = ab \mid (p-1)!$, es decir $(p-1)! \equiv 0 \pmod p$. Si $a = b$ (caso $p = a^2$): para $p \geq 8$, $2a < p$ y $a < p$ aparecen en $(p-1)!$, dando $2a^2 = 2p \mid (p-1)!$, en particular $p \mid (p-1)!$. Casos pequeños: $p=4$ da $3! = 6 \equiv 2 \neq -1 \pmod 4$, también compuesto correctamente.

En cualquier caso $(p-1)! \not\equiv -1 \pmod p$. ∎

## Ejemplo

$p = 7$: $(7-1)! = 720 = 7 \cdot 102 + 6 \equiv 6 \equiv -1 \pmod 7$. ✓

$p = 11$: $10! = 3\,628\,800 = 11 \cdot 329\,890 + 10 \equiv -1 \pmod{11}$. ✓

## Aplicaciones

**Problema.** Hallar el resto al dividir $97!$ entre $101$.

$101$ es primo. Por Wilson, $100! \equiv -1 \pmod{101}$. Y $100! = 100 \cdot 99 \cdot 98 \cdot 97!$. Trabajando módulo $101$:
$$ 100 \equiv -1, \quad 99 \equiv -2, \quad 98 \equiv -3, $$
así que $100 \cdot 99 \cdot 98 \equiv (-1)(-2)(-3) = -6 \pmod{101}$. Entonces
$$ -1 \equiv 100! \equiv -6 \cdot 97! \pmod{101}, $$
de donde $6 \cdot 97! \equiv 1 \pmod{101}$. Buscamos $6^{-1} \pmod{101}$: $6 \cdot 17 = 102 \equiv 1$, así que $6^{-1} \equiv 17$.

Por tanto $97! \equiv 17 \pmod{101}$.

**Problema.** Probar que para todo primo $p > 5$, $(p-3)! \equiv \frac{(p-1)(p-2)}{2} \cdot \text{algo} \pmod p$... veamos:

Por Wilson, $(p-1)! \equiv -1$. Y $(p-1)! = (p-1)(p-2)(p-3)!$. Módulo $p$:
$$ -1 \equiv (-1)(-2)(p-3)! \equiv 2 \cdot (p-3)! \pmod p, $$
así que $(p-3)! \equiv -1/2 \equiv (p-1)/2 \pmod p$.

**Resultado:** $(p-3)! \equiv \dfrac{p-1}{2} \pmod p$ para todo primo $p > 3$.

## Observación

**Aplicación contundente: el problema de Brocard.** Encontrar todos los $n$ tales que $n! + 1$ sea un cuadrado perfecto. Solo se conocen tres: $n = 4, 5, 7$ (dan $25 = 5^2$, $121 = 11^2$, $5041 = 71^2$). Se conjetura que son los únicos, pero no se sabe demostrar. Una de las muchas preguntas elementales sobre factoriales que siguen abiertas.
