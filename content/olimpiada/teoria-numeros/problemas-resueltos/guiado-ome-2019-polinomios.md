---
title: "OME 2019 — Polinomios y valores enteros (guiado paso a paso)"
preview: "Hallar todos los polinomios con coeficientes enteros $P(x)$ tales que $P(n)$ divide a $n! - 1$ para todo entero positivo $n$. Un problema nacional con análisis modular y argumentos de crecimiento."
dificultad: nacional
competencia: "OME 2019"
tags: [polinomios, factoriales, crecimiento, modular, guiado]
prerequisites: [pequeno-teorema-fermat, polinomios]
author: "Adrián García Bouzas"
updated: "2026-02-13"
---

## Enunciado

Hallar todos los polinomios $P(x) \in \mathbb Z[x]$ tales que $P(n)$ divide a $n! - 1$ para todo entero positivo $n$.

(Versión adaptada de problemas OME / Iberoamericana sobre polinomios y factoriales.)

---

## Fase 1: experimentación con casos pequeños

Antes de teorizar, conviene **probar polinomios concretos** y ver qué cumplen la condición.

**$P(x) = 1$.** Trivialmente $1 \mid n! - 1$ para todo $n$. ✓ Es una solución.

**$P(x) = -1$.** $-1 \mid n! - 1$ siempre (cualquier entero es divisible por $-1$). ✓ Es solución.

**$P(x) = x$.** Pediríamos $n \mid n! - 1$. ¿Lo cumple? $n! \equiv 0 \pmod n$ para $n \geq 2$, así $n! - 1 \equiv -1 \pmod n$. Solo si $n \mid -1$, es decir $n = 1$. **Falla** para $n = 2$. No es solución.

**$P(x) = x - 1$.** Pediríamos $(n-1) \mid n! - 1$.

Verifico:
- $n = 1$: $P(1) = 0$. Pero $0$ no divide a nada (la división por cero no está definida). ¿Excluimos $n = 1$ o interpretamos $0 \mid 0!-1 = 0$ como verdadero?

**Observación crítica.** Si $P(n) = 0$ para algún $n$, entonces $P(n) \mid n! - 1$ se interpreta como "$0$ divide a $n! - 1$", lo cual es **falso** si $n! - 1 \neq 0$ (que ocurre para $n \neq 1$). Si $n = 1$: $0! - 1 = 0$, y "$0 \mid 0$" es **verdadero** por convenio.

Conclusión: el polinomio **no debe anularse en ningún entero positivo** salvo posiblemente en $n = 1$ con cuidado.

Volvemos a $P(x) = x - 1$. Para $n = 1$: $P(1) = 0$, $1! - 1 = 0$. OK. Para $n = 2$: $P(2) = 1$, $2! - 1 = 1$. $1 \mid 1$. ✓. Para $n = 3$: $P(3) = 2$, $3! - 1 = 5$. $2 \mid 5$? **No**. Falla.

**$P(x) = $ constante $c$.** $c \mid n! - 1$ para todo $n \geq 1$. Como $n!$ crece sin límite y $1! - 1 = 0$, la condición $c \mid 0$ se cumple siempre; pero para $n = 2$, $c \mid 1$, así $c \in \{1, -1\}$.

Tenemos por tanto dos soluciones constantes: $\pm 1$.

---

## Fase 2: descartar grado $\geq 1$

¿Hay polinomios no constantes? Mi intuición tras los experimentos: probablemente **no**. Pero hay que demostrarlo.

**Idea para descartar grado $\geq 1$:** si $\deg P \geq 1$, entonces $|P(n)| \to \infty$ cuando $n \to \infty$. Comparar el crecimiento de $|P(n)|$ con el de $|n! - 1|$. Si $|P(n)|$ crece "como $n^k$" mientras $|n! - 1|$ crece "como $n!$" (que es mucho más rápido), parecería que la condición de divisibilidad podría cumplirse... pero entonces $P(n)$ es muy pequeño comparado con $n!$, lo cual permite muchos divisores. Eso no descarta nada.

Necesitamos un argumento **modular**.

### Idea modular clave

Si $p$ es un primo y $p \mid P(n_0)$ para algún $n_0$, entonces:

$$
P(n_0) \mid n_0! - 1 \;\Longrightarrow\; p \mid n_0! - 1 \;\Longrightarrow\; n_0! \equiv 1 \pmod p.
$$

Esto es una condición **fuerte**.

**Observación 1.** Si $n_0 \geq p$, entonces $n_0! \equiv 0 \pmod p$, así que $n_0! \equiv 1 \pmod p$ implicaría $0 \equiv 1 \pmod p$, contradicción.

**Por tanto:** si $p$ es un primo y $p \mid P(n_0)$ para algún $n_0$, entonces $n_0 < p$.

### Construcción de la contradicción

Supongamos $\deg P \geq 1$. Entonces $P(n)$ toma valores arbitrariamente grandes en valor absoluto cuando $n \to \infty$. En particular, $|P(n)| \geq 2$ para $n$ suficientemente grande, así que $P(n)$ tiene algún divisor primo.

**Tomemos $n$ grande.** $P(n)$ tiene algún divisor primo $p$. Por la observación anterior, $n < p$.

Pero $p \leq |P(n)|$. Y $|P(n)|$ crece polinomialmente, digamos $|P(n)| \leq C n^k$ para constantes $C, k$.

Esto da: para todo $n$ grande, **existe** un primo $p$ con

$$
n < p \leq C n^k.
$$

Es decir, el menor primo $p$ que divide a $P(n)$ está en el intervalo $(n, Cn^k]$. **No** es una contradicción inmediata — sí existen primos en ese intervalo (de hecho muchos).

Necesitamos profundizar.

### Profundización: usar $P(p) \neq 0$ y otra divisibilidad

Sea $p$ un primo. Consideremos $P(p)$. Por nuestra observación, **ningún primo divide $P(p)$ a no ser que sea mayor que $p$** (porque si $q \mid P(p)$ entonces $p < q$).

¿Es esto posible? $P(p)$ es un entero. Si $|P(p)| \geq 2$, todos sus factores primos son $> p$. Pero la cota de Bertrand-Chebyshev dice: hay un primo en cualquier intervalo $(m, 2m)$. Así que $P(p)$ podría perfectamente ser un primo, o un producto de primos $> p$.

**Hmm, esto no da contradicción directa.** Necesitamos algo más fino.

### Argumento final

**Idea.** $P(p) \mid p! - 1$. Y $p! - 1 \equiv -1 \pmod p$ (porque $p! \equiv 0$). Por Wilson, $(p-1)! \equiv -1 \pmod p$. Así $p! = p \cdot (p-1)! \equiv 0 \pmod p$, ratifica $p! - 1 \equiv -1 \pmod p$. No nuevo.

Aún más fino: $p! - 1$ módulo $p^2$. Por **Wilson**: $(p-1)! \equiv -1 \pmod p$. ¿Y módulo $p^2$? El **teorema de Wolstenholme** dice que para $p \geq 5$ primo, $\binom{2p}{p} \equiv 2 \pmod{p^3}$, lo cual implica $(p-1)! \equiv -1 + a_p p^2 \pmod{p^3}$ para cierto $a_p$. No es trivial.

**Estrategia alternativa.** Usar **dos valores**:

Sea $P$ no constante. Existe entonces $n$ con $P(n) > 1$. Sea $q$ el menor primo que divide $P(n)$. Por la observación, $q > n$. Equivalentemente, $n + 1 \leq q$.

Considera ahora $P(n + q) - P(n)$. Como $P$ es polinómico con coeficientes enteros, $q$ divide a $P(n+q) - P(n)$, así que $q \mid P(n+q)$. Por la observación aplicada a $n+q$: $q > n + q$, **contradicción** (porque $q \leq q < q + n$ para $n \geq 1$).

¡Esta es la contradicción! $\blacksquare$

---

## Fase 3: la respuesta

**Los únicos polinomios** $P(x) \in \mathbb Z[x]$ tales que $P(n) \mid n! - 1$ para todo $n \geq 1$ son

$$
P(x) \;=\; 1 \quad \text{y} \quad P(x) \;=\; -1.
$$

---

## Fase 4: revisitar la demostración

**Repasemos el argumento clave una vez limpio.**

Supongamos que $P \in \mathbb Z[x]$ no constante cumple la condición. Sea $n \geq 1$ tal que $|P(n)| \geq 2$ (existe porque $P$ no es constante). Sea $q$ un primo con $q \mid P(n)$. Como $P(n) \mid n! - 1$, tenemos $q \mid n! - 1$, lo que implica $q \nmid n!$. Pero $n!$ es el producto $1 \cdot 2 \cdots n$, así que $q \nmid k$ para todo $k \in \{1, 2, \ldots, n\}$. Esto fuerza $q > n$.

Ahora consideramos $P(n + q)$. Como $P$ tiene coeficientes enteros:

$$
P(n + q) - P(n) \;\equiv\; 0 \pmod q
$$

(propiedad clásica de polinomios enteros: $a \equiv b \pmod q \Rightarrow P(a) \equiv P(b) \pmod q$). Por tanto $q \mid P(n+q)$.

Pero entonces, aplicando la observación a $m = n + q$: como $q \mid P(m)$, debe ser $q > m = n + q$, es decir, $0 > n$. **Contradicción** con $n \geq 1$.

Luego $P$ debe ser constante, y las únicas constantes son $\pm 1$. $\blacksquare$

---

## Observación

**Lo que aprendimos.**

1. **Experimentar primero.** Probar casos $P(x) = c, x, x-1, \ldots$ nos dio intuición de que solo las constantes $\pm 1$ funcionan, y la clave del argumento (las posibilidades modulares limitadas).

2. **Identificar la observación clave temprano.** "Si $p \mid P(n)$, entonces $n < p$" es la observación que da apalancamiento. Sin ella, el problema es opaco.

3. **Usar la estructura polinómica.** La propiedad $q \mid P(n+q) - P(n)$ es un hecho **fundamental** sobre polinomios enteros, y debe estar siempre presente cuando aparezcan polinomios módulo primos.

4. **La contradicción auto-replicante.** El argumento "si tal primo divide $P(n)$, entonces es mayor que $n$" se aplica recursivamente a $n + q$ y produce contradicción. Es un esquema **estándar** en este tipo de problemas.

## Generalización

**Variante 1.** Polinomios $P$ tales que $P(n) \mid f(n)$ para alguna función $f$ que crece "rápido", específicamente con $\gcd(P(n), n) = 1$ forzosamente.

**Variante 2.** Polinomios sobre $\mathbb Q[x]$ con valores enteros en $\mathbb N$ y la misma condición. La respuesta es igual.

**Variante 3.** En lugar de $n! - 1$, considerar $n! + 1$, $2^n - 1$, etc. Cada variante requiere ajustar el argumento modular.

## Problemas relacionados

- **IMO 2008/3.** Demostrar que hay infinitos primos $p$ tales que $p^2 \mid 2^{p-1} - 1$ (problema abierto: primos Wieferich). Estructura argumental análoga (combinar congruencias).
- **OME 2020/3.** Hallar polinomios $P \in \mathbb Z[x]$ con $P(n) \mid 2^n - 1$ para todo $n$. Aplicable el mismo método.
- **Conjetura de Schinzel:** todo polinomio irreducible representa primos infinitos. Abierta.
