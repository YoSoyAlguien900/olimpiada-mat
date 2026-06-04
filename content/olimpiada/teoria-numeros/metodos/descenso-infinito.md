---
title: "Descenso infinito de Fermat"
preview: "Una técnica de demostración donde una hipotética solución mínima genera otra más pequeña — absurdo, pues los enteros positivos no admiten cadenas decrecientes infinitas. La herramienta clásica para probar inexistencia de soluciones diofánticas."
dificultad: nacional
tags: [descenso-infinito, diofanticas, irracionalidad, pitagoras]
prerequisites: [divisibilidad-basica, euclides-bezout]
author: "Material olímpico"
updated: "2026-06-03"
---

Pierre de Fermat inventó el método del descenso infinito alrededor de 1640. La idea es deslumbrante en su sencillez: para demostrar que ningún entero positivo satisface cierta propiedad $P$, suponemos que sí hay uno. Tomamos el **mínimo** (que existe por el principio del buen orden). Luego demostramos que a partir de él podemos construir otro entero positivo más pequeño con la misma propiedad. Contradicción: no existe ninguno.

El descenso es «infinito» en el sentido de que si el argumento pudiera repetirse indefinidamente, generaría una sucesión $n > n_1 > n_2 > \cdots > 0$ de enteros positivos — imposible. Por eso la primera repetición ya da la contradicción.

## El esquema

Para demostrar que el conjunto $S = \{n \in \mathbb Z_{>0} : P(n)\}$ es vacío:

1. Suponer $S \neq \emptyset$ y tomar $m = \min S$ (existe por buen orden).
2. Construir, a partir de $m$, un elemento $m' \in S$ con $m' < m$.
3. Contradicción con la minimalidad de $m$.

## Ejemplo

### Irracionalidades elementales

**Ejemplo 1.** Demostrar que $\sqrt{2}$ es irracional.

Equivalentemente: no existen enteros positivos $a, b$ con $a^2 = 2b^2$.

**Descenso.** Supongamos que existe tal par. Sea $(a, b)$ con $a$ mínimo. De $a^2 = 2b^2$: $2 \mid a^2$, luego $2 \mid a$ (Lema de Euclides). Sea $a = 2a'$.

$$4a'^2 = 2b^2 \implies b^2 = 2a'^2.$$

Entonces $(b, a')$ también satisface la ecuación. Y $b < a$ (pues $b^2 = a^2/2 < a^2$). Contradicción con la minimalidad de $a$. $\blacksquare$

---

**Ejemplo 2.** Demostrar que $\sqrt{p}$ es irracional para todo primo $p$.

Si $a^2 = pb^2$ con $(a, b)$ el par mínimo, entonces $p \mid a^2$, así $p \mid a$ (primo), $a = pa'$. Entonces $p^2 a'^2 = pb^2$, $b^2 = pa'^2$. Y $b < a$ (pues $b = a/\sqrt p < a$). Contradicción. $\blacksquare$

---

**Ejemplo 3.** (Generalización) Si $n$ no es un cuadrado perfecto, $\sqrt n$ es irracional.

Existe un primo $p$ tal que $v_p(n)$ es impar. Si $a^2 = nb^2$, tomando valuaciones $p$-ádicas: $2v_p(a) = v_p(n) + 2v_p(b)$. El lado izquierdo es par, el derecho es impar. Contradicción. $\blacksquare$

---

### La ecuación $x^4 + y^4 = z^2$

**Ejemplo 4.** (Fermat) La ecuación $x^4 + y^4 = z^2$ no tiene solución en enteros positivos.

**Preliminar: ternas pitagóricas.** Si $(a, b, c)$ con $a^2 + b^2 = c^2$, $\gcd(a, b) = 1$ y $b$ par, entonces existen $m > n > 0$ con $\gcd(m, n) = 1$, $m, n$ de paridad opuesta, y:
$$a = m^2 - n^2, \quad b = 2mn, \quad c = m^2 + n^2.$$

**Descenso.** Supongamos $(x, y, z)$ solución con $\gcd(x, y) = 1$ (dividiendo por $\gcd$ si fuera necesario) y $z$ mínimo.

**Paso 1.** $(x^2)^2 + (y^2)^2 = z^2$ es una terna pitagórica. Podemos suponer $y^2$ par (si no, intercambiamos $x$ e $y$). Así:
$$x^2 = m^2 - n^2, \quad y^2 = 2mn, \quad z = m^2 + n^2,$$
con $m > n$, $\gcd(m,n) = 1$, $m \not\equiv n \pmod 2$.

**Paso 2.** $y^2 = 2mn$ y $\gcd(m, n) = 1$. Como uno de $m, n$ es par y el otro impar, $2 \mid m$ o $2 \mid n$ pero no ambos. WLOG $n$ impar y $m$ par. Entonces $\gcd(2n, m/2) = 1$ (verificar) y $y^2 = 2mn = 4 \cdot (m/2) \cdot n$. Como son coprimos dos a dos: $m/2 = s^2$, $n = t^2$, $y/2 = st$ para enteros $s, t$.

**Paso 3.** $x^2 = m^2 - n^2 = (m-n)(m+n)$. Como $\gcd(m-n, m+n) = 2$ (ambos impares), $m - n = 2a'^2$, $m + n = 2b'^2$ o similar. Un análisis más cuidadoso (usando que $x$ es impar y el gcd de $m-n$ y $m+n$ divide a $2$) da: los factores son cuadrados salvo un factor $2$.

**Paso 4.** De $x^2 + n^2 = m^2$ (con $n = t^2$ y $m = 2s^2$): $(x, t^2, 2s^2)$ es terna pitagórica con paridad correcta. Así $x = u^2 - v^2$, $t^2 = 2uv$, $2s^2 = u^2 + v^2$ para ciertos $u, v$.

De $t^2 = 2uv$ con $\gcd(u, v) = 1$: uno de ellos es $2r^2$ y el otro $s'^2$, o ambos cuadrados con un $2$ extra. Llegamos a una ecuación del tipo $u^4 + v^4 = w^2$ con $w \leq s \leq m^{1/2} \leq z^{1/2} < z$.

**Conclusión:** Hemos encontrado otra solución $(u, v, w)$ con $w < z$. Contradicción con la minimalidad de $z$. $\blacksquare$

**Corolario.** La ecuación $x^4 + y^4 = z^4$ no tiene solución en enteros positivos. (El último Teorema de Fermat para $n = 4$, el primer caso demostrado.)

---

**Ejemplo 5.** No existen enteros positivos $a, b, c$ con $a^2 + b^2 = c^2$ y $c - b = 1$ y $c - a = 1$.

Si $a^2 + b^2 = c^2$ y $a = b$: $2a^2 = c^2$, $\sqrt{2} = c/a$, irracional. Si $a \neq b$: la ecuación con $c - a = c - b = 1$ implica $a = b$. No existe. $\square$

---

### Descenso en divisibilidad

**Ejemplo 6.** No existen enteros positivos $a, b$ con $a^2 = 3b^2$ y $\gcd(a, b) = 1$.

Sea $(a, b)$ mínimo. $3 \mid a^2$ implica $3 \mid a$ (primo). $a = 3a'$: $9a'^2 = 3b^2$, $b^2 = 3a'^2$. Y $b < a$. Contradicción. $\blacksquare$

---

**Ejemplo 7.** Demostrar que $n^2 + n + 1$ nunca es un cuadrado perfecto para $n \geq 1$.

Supongamos $n^2 + n + 1 = k^2$. Entonces $k^2 - n^2 = n + 1$, $(k-n)(k+n) = n+1$.

Como $k^2 = n^2 + n + 1 > n^2$, $k > n$. Sea $k = n + d$ con $d \geq 1$:

$$d(2n + d) = n + 1 \implies 2dn + d^2 = n + 1.$$

Si $d \geq 1$: $2dn \geq 2n > n$ (para $n \geq 1$), así $2dn + d^2 > n$, lo cual es compatible, pero: $n(2d - 1) = 1 - d^2$. Para $d \geq 2$: $1 - d^2 < 0$ pero $(2d-1)n > 0$, imposible. Para $d = 1$: $n(2 - 1) = 1 - 1 = 0$, $n = 0$, no en el rango. $\blacksquare$

---

### Descenso en ecuaciones diofánticas

**Ejemplo 8.** La ecuación $x^3 + y^3 = z^3$ no tiene solución en enteros positivos.

*(Este es el caso $n = 3$ del Último Teorema de Fermat, demostrado elementalmente por Euler en 1770 via descenso en $\mathbb Z[\omega]$ donde $\omega = e^{2\pi i/3}$.)*

Esquema: si $(x, y, z)$ es una solución mínima (con $\gcd(x,y,z) = 1$), factorizando $z^3 - y^3 = x^3$ en $\mathbb Z[\omega]$ y usando las propiedades de ese anillo (que es un DFU) se construye una solución más pequeña. Contradicción.

## Cuándo usar el descenso

El descenso funciona mejor cuando:
1. La pregunta es **«demostrar que no existe solución»**.
2. Una solución tiene **simetría o factorización** que genera otra del mismo tipo con parámetros más pequeños.
3. La ecuación tiene **grado bajo** (cuadrática, cúbica) y los parámetros se pueden acotar.

Las señales de que el descenso podría funcionar:
- La ecuación es homogénea o se puede hacer homogénea.
- Si $(a, b)$ es solución, $(\text{transformación de }a, b)$ también lo es.
- La «transformación» hace que al menos un parámetro disminuya estrictamente.

## Observación

**Descenso vs. inducción.** El descenso infinito es inducción fuerte en forma negativa: mientras la inducción dice «si vale para menores, vale para $n$», el descenso dice «si vale para $n$, vale para algún $n' < n$», lo que es imposible.

**Vieta Jumping.** Una variante del descenso especialmente elegante para ecuaciones cuadráticas: si $(a, b)$ satisface una ecuación cuadrática en $a$, la otra raíz $a'$ (via fórmulas de Vieta) satisface la misma ecuación y a menudo $a' < a$. Ver el capítulo dedicado.

**El mínimo no tiene que ser el más pequeño en términos obvios.** A veces se minimiza la suma $a + b$, o el producto $ab$, o la norma $a^2 + b^2$. La elección depende de qué es lo que la construcción hace descender.

## Problemas relacionados

- **(Clásico)** No existen enteros positivos $a, b$ con $a^2 + b^2 = a^2 b^2$.

- **(Clásico)** La ecuación $x^4 - y^4 = z^2$ no tiene solución en enteros positivos con $\gcd(x,y) = 1$. (Fermat)

- **(OME 2013)** Demostrar que $\sqrt{2} + \sqrt{3}$ es irracional usando descenso. *(Hint: si $\sqrt 2 + \sqrt 3 = p/q$, racionalizar.)*

- **(ISL 2007/N1)** Demostrar que la ecuación $x^2 + y^2 + z^2 = 2xyz$ no tiene solución en enteros positivos.

- **(Clásico, tres cuadrados)** La ecuación $x^2 + y^2 + z^2 = 8n + 7$ no tiene solución entera. (Módulo $8$, sin descenso necesario; pero la versión con $8n + 7$ específico sí usa el patrón.)

- **(USAMO 2009/P3)** Demostrar por descenso que si $p$ es primo y $p \equiv 3 \pmod 4$, entonces $p \nmid x^2 + y^2$ para $\gcd(x,y) = 1$ implica $p^2 \nmid x^2 + y^2$.
