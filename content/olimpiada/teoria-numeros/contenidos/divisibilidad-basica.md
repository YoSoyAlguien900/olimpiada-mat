---
title: "Divisibilidad: fundamentos de la aritmética entera"
preview: "El lenguaje básico de la teoría de números: divisores, múltiplos, MCD, MCM y el Teorema Fundamental de la Aritmética. Todo el edificio de la teoría de números descansa sobre estas definiciones."
dificultad: iniciacion
tags: [divisibilidad, mcd, mcm, primos, factorizacion, TFA]
prerequisites: []
author: "Adrián García Bouzas"
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

**Ejemplo 1.** Factorizar $360$ y $756$ en primos y, a partir de ahí, calcular su MCD y su MCM.

*La idea.* En cuanto tienes la factorización en primos de dos números, el MCD y el MCM se **leen primo a primo**, sin más cálculo. ¿Por qué? Un divisor común no puede contener más copias de un primo $p$ que el número que **menos** tenga, así que en el MCD se toma el exponente **mínimo**. Un múltiplo común necesita al menos tantas copias como el que **más** tenga: en el MCM, el exponente **máximo**.

*Factorización.* Partimos cada número repetidamente hasta llegar a primos:

$$
360 = 36 \cdot 10 = (2^2 \cdot 3^2)(2 \cdot 5) = 2^3 \cdot 3^2 \cdot 5,
$$
$$
756 = 4 \cdot 189 = 2^2 \cdot (27 \cdot 7) = 2^2 \cdot 3^3 \cdot 7.
$$

*MCD y MCM.* Escribimos ambos en función de **todos** los primos en juego ($2, 3, 5, 7$), con exponente $0$ donde un primo falta:

$$
360 = 2^3\, 3^2\, 5^1\, 7^0, \qquad 756 = 2^2\, 3^3\, 5^0\, 7^1.
$$

Ahora basta tomar el mínimo de cada exponente para el MCD, y el máximo para el MCM:

$$
\gcd(360, 756) = 2^{2}\, 3^{2}\, 5^{0}\, 7^{0} = 2^2 \cdot 3^2 = 36,
$$
$$
\operatorname{lcm}(360, 756) = 2^{3}\, 3^{3}\, 5^{1}\, 7^{1} = 2^3 \cdot 3^3 \cdot 5 \cdot 7 = 7560.
$$

*Por qué $\gcd \cdot \operatorname{lcm} = ab$.* Para cada primo, $\min(e, f) + \max(e, f) = e + f$: lo que el mínimo deja fuera, el máximo lo recupera. Sumando exponentes primo a primo, el producto $\gcd \cdot \operatorname{lcm}$ reconstruye exactamente $ab$. Aquí: $36 \cdot 7560 = 272160 = 360 \cdot 756$. ✓

### Irracionalidad por factorización

**Ejemplo 2.** Demostrar que $\sqrt{2}$ es irracional.

*La idea.* "Irracional" es una afirmación **negativa** (no existe ninguna fracción que…), difícil de atacar de frente. La maniobra estándar es **suponer que sí existe** y exprimir la hipótesis hasta romperla. El motor de la contradicción será el Lema de Euclides: si un primo divide a un cuadrado, divide a su base.

*Solución.* Supongamos, por contradicción, que $\sqrt 2$ es racional. Entonces $\sqrt 2 = \dfrac{a}{b}$ con $a, b$ enteros positivos y la fracción **irreducible**, es decir $\gcd(a, b) = 1$ (toda fracción puede llevarse a esa forma). Elevamos al cuadrado:

$$
2 = \frac{a^2}{b^2} \;\Longrightarrow\; a^2 = 2b^2.
$$

Entonces $2 \mid a^2$ y, como $2$ es primo, el Lema de Euclides da $2 \mid a$; escribimos $a = 2k$. Sustituyendo:

$$
(2k)^2 = 2b^2 \;\Longrightarrow\; 4k^2 = 2b^2 \;\Longrightarrow\; b^2 = 2k^2,
$$

y el mismo razonamiento da $2 \mid b$. Pero entonces $2$ divide a $a$ y a $b$, luego $\gcd(a, b) \geq 2$, contradiciendo que la fracción era irreducible. $\blacksquare$

*La moraleja.* El choque es entre "la fracción ya estaba reducida" y "pero $2$ divide a numerador y denominador". Esa tensión —no se puede reducir para siempre— es el germen del **descenso infinito** de Fermat.

### Contar divisores construyéndolos

**Ejemplo 3.** ¿Cuántos divisores positivos tiene $n = 2^a \cdot 3^b \cdot 5^c$? Aplícalo a $360$.

*La idea.* No hace falta listar los divisores: hay que **construirlos**. Cada divisor se fabrica eligiendo, de forma independiente, cuántas copias de cada primo se toman. Contar divisores se convierte así en un problema de combinatoria (principio de la multiplicación).

*Solución.* Un divisor de $n$ es exactamente un número $2^x \cdot 3^y \cdot 5^z$ con

$$
0 \leq x \leq a, \qquad 0 \leq y \leq b, \qquad 0 \leq z \leq c,
$$

pues no puede contener primos ajenos a $n$ ni más copias de las disponibles. Hay $a+1$ opciones para $x$ (de $0$ a $a$), $b+1$ para $y$ y $c+1$ para $z$, e independientes entre sí. Por el principio de la multiplicación:

$$
\tau(n) = (a+1)(b+1)(c+1).
$$

En general, si $n = p_1^{e_1} \cdots p_r^{e_r}$, entonces $\tau(n) = \prod_{i} (e_i + 1)$.

*Aplicación.* Para $360 = 2^3 \cdot 3^2 \cdot 5^1$: $\tau(360) = (3+1)(2+1)(1+1) = 4 \cdot 3 \cdot 2 = 24$.

### Irracionalidad: el caso general

**Ejemplo 4.** Sea $n \geq 2$ entero. Demostrar que $\sqrt{n}$ es irracional **salvo** cuando $n$ es un cuadrado perfecto.

*La idea.* Generalizamos el Ejemplo 2, pero el primo clave ya no es "$2$": es **un primo cuyo exponente en $n$ sea impar**. La herramienta fina para hablar de "cuántas veces divide un primo" es la **valuación $p$-ádica** $v_p(\cdot)$ (el exponente de $p$ en la factorización). Lo decisivo: al elevar al cuadrado, toda valuación se **duplica**, y por tanto se vuelve par; un exponente impar en $n$ es incompatible con eso.

*Solución.* Si $n = m^2$ es un cuadrado perfecto, entonces $\sqrt n = m$ es entero, luego racional.

Recíprocamente, supongamos que $n$ **no** es cuadrado perfecto. Entonces algún primo $p$ aparece en $n$ con exponente **impar**: $v_p(n) = 2t + 1$. Supongamos por contradicción que $\sqrt n = \dfrac{a}{b}$ con $a, b$ enteros positivos. Elevando al cuadrado, $a^2 = n\, b^2$. Tomamos $v_p$ en ambos lados, usando $v_p(xy) = v_p(x) + v_p(y)$:

$$
v_p(a^2) = v_p(n) + v_p(b^2) \;\Longrightarrow\; 2\,v_p(a) = (2t + 1) + 2\,v_p(b).
$$

El lado izquierdo es **par** y el derecho es **impar** — imposible. Luego $\sqrt n$ no puede ser racional. $\blacksquare$

*La moraleja.* "Ser cuadrado perfecto" equivale a "todas las valuaciones $p$-ádicas son pares". Comparar la **paridad de las valuaciones** es una de las técnicas más rentables en problemas con raíces, potencias y cuadrados.

## Aplicaciones

### Criterios de divisibilidad: por qué funcionan

Los criterios "de toda la vida" no son magia. Todos salen de la misma maniobra: escribir $n = \sum_i a_i 10^i$ y sustituir cada potencia $10^i$ por su **resto** módulo el divisor, que suele ser muy simple.

**Por $2$ (y por $5$).** Como $10 \equiv 0 \pmod 2$, toda potencia $10^i$ con $i \geq 1$ desaparece módulo $2$, y queda $n \equiv a_0 \pmod 2$: decide la **última cifra**. (Igual con $5$, porque $10 \equiv 0 \pmod 5$.)

**Por $4$.** Ahora $100 = 4 \cdot 25 \equiv 0 \pmod 4$, así que mueren todas las potencias desde $10^2$: $n \equiv 10 a_1 + a_0 \pmod 4$, las **dos últimas cifras**.

**Por $3$ y por $9$.** Aquí $10 \equiv 1$, luego $10^i \equiv 1$ para todo $i$, y $n \equiv a_0 + a_1 + \cdots = s(n) \pmod{3 \text{ y } 9}$: decide la **suma de cifras**.

**Por $11$.** Como $10 \equiv -1 \pmod{11}$, se tiene $10^i \equiv (-1)^i$, y $n \equiv a_0 - a_1 + a_2 - \cdots \pmod{11}$: la **suma alternada**.

**Por $7$, $11$ y $13$ a la vez.** El truco aquí es notar que $1000 = 10^3 \equiv -1 \pmod{1001}$ y que $1001 = 7 \cdot 11 \cdot 13$. Agrupando las cifras de tres en tres, $n$ equivale módulo $1001$ a la suma alternada de esos bloques: separa las tres últimas cifras, réstaselas a las anteriores, y repite.

### Maximizar el número de divisores

**Problema.** Hallar el entero positivo $n \leq 1000$ con el mayor número de divisores.

*La idea.* Por el Ejemplo 3, $\tau(n) = \prod (e_i + 1)$ depende **solo de los exponentes**, no de qué primos uses. Para un tamaño dado conviene entonces: **(1)** gastar los exponentes en los primos más pequeños ($2, 3, 5, 7, \dots$), porque "cuestan" menos tamaño; **(2)** repartirlos de forma decreciente $e_1 \geq e_2 \geq \cdots$. Eso deja muy pocos candidatos que comparar.

*Solución.* Comparamos los mejores aspirantes con $2^{e_1} 3^{e_2} 5^{e_3} \cdots \leq 1000$:

$$
840 = 2^3 \cdot 3 \cdot 5 \cdot 7, \quad \tau = 4 \cdot 2 \cdot 2 \cdot 2 = 32,
$$
$$
720 = 2^4 \cdot 3^2 \cdot 5, \quad \tau = 5 \cdot 3 \cdot 2 = 30, \qquad
960 = 2^6 \cdot 3 \cdot 5, \quad \tau = 7 \cdot 2 \cdot 2 = 28,
$$
$$
900 = 2^2 \cdot 3^2 \cdot 5^2, \quad \tau = 3 \cdot 3 \cdot 3 = 27.
$$

Añadir el primo $7$ (que aún cabe) bate a concentrar exponentes en pocos primos. El máximo es $\tau(840) = 32$, así que la respuesta es $\boxed{n = 840}$, con $32$ divisores. (Es el mayor número *altamente compuesto* $\leq 1000$.)

## Observación

**Sobre la unicidad de la factorización.** El TFA puede fallar en otros anillos. Por ejemplo, en $\mathbb Z[\sqrt{-5}]$:
$$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}),$$
y los cuatro factores son "irreducibles" pero no primos. Esta falla motivó a Kummer a introducir los "números ideales" (hoy llamados ideales), base de la teoría algebraica de números.

**Sobre las aplicaciones de la linealidad.** La propiedad (iii) tiene una consecuencia crucial: si $\gcd(a, b) = d$, entonces $d \mid c$ para cualquier $c = ax + by$. Y recíprocamente, el MCD es la **mínima combinación lineal positiva** de $a$ y $b$. Esta es la esencia de la identidad de Bézout, desarrollada en el capítulo siguiente.

**Infinitos primos.** La factorización única implica que hay infinitos primos: si hubiera finitos $p_1, \ldots, p_k$, el número $N = p_1 p_2 \cdots p_k + 1$ no sería divisible por ninguno de ellos (por la linealidad), pero debería tener algún divisor primo. Contradicción.

## Problemas relacionados

**Problema 1 (lema de Euclides, clásico).** Demostrar que si $a \mid bc$ y $\gcd(a, b) = 1$, entonces $a \mid c$.

[[pista]]

Como $\gcd(a,b) = 1$, la identidad de Bézout da enteros $x, y$ con $ax + by = 1$. Multiplica esa igualdad por $c$.

[[/pista]]

[[solución]]

Por la **identidad de Bézout**, como $\gcd(a, b) = 1$ existen enteros $x, y$ tales que

$$
ax + by = 1.
$$

Multiplicamos ambos lados por $c$:

$$
acx + bcy = c.
$$

Examinamos el lado izquierdo: $a \mid acx$ trivialmente, y $a \mid bc$ por hipótesis, así que $a \mid (bc)y = bcy$. Como $a$ divide a los dos sumandos, divide a su suma:

$$
a \mid (acx + bcy) = c. \qquad \blacksquare
$$

[[/solución]]

**Problema 2 (clásico).** Hallar todos los $n \in \mathbb N$ tales que $n \mid 2^n - 1$.

[[pista]]

$n = 1$ funciona. Si $n > 1$, toma el **menor primo** $p$ que divide a $n$ y considera el orden de $2$ módulo $p$: debe dividir a la vez a $n$ y a $p - 1$, pero $\gcd(n, p-1) = 1$.

[[/pista]]

[[solución]]

**Afirmación: la única solución es $n = 1$.**

Para $n = 1$: $1 \mid 2^1 - 1 = 1$. ✓

Supongamos ahora $n > 1$ y $n \mid 2^n - 1$. Como $2^n - 1$ es impar, $n$ es impar; en particular su menor primo $p$ cumple $p \geq 3$, luego $p \nmid 2$.

Sea $d = \operatorname{ord}_p(2)$ el orden de $2$ módulo $p$ (el menor exponente positivo con $2^d \equiv 1 \pmod p$). Tenemos dos divisibilidades:

- Como $p \mid n$ y $n \mid 2^n - 1$, se cumple $2^n \equiv 1 \pmod p$, luego $d \mid n$.
- Por el pequeño teorema de Fermat, $2^{p-1} \equiv 1 \pmod p$, luego $d \mid p - 1$.

Por tanto $d \mid \gcd(n, p-1)$. Ahora bien, todo primo que divide a $p - 1$ es menor que $p$, y $p$ es el **menor** primo que divide a $n$; así que $p-1$ y $n$ no comparten ningún factor primo, es decir $\gcd(n, p-1) = 1$.

Entonces $d \mid 1$, o sea $d = 1$, lo que significa $2^1 \equiv 1 \pmod p$, es decir $p \mid 1$ — imposible. La contradicción descarta todo $n > 1$.

La única solución es $\boxed{n = 1}$. $\blacksquare$

[[/solución]]

**Problema 3 (primos gemelos, clásico).** Si $p$ y $q = p + 2$ son ambos primos y $p > 3$, probar que $3 \mid p + 1$.

[[pista]]

Mira $p$ módulo $3$. Como $p > 3$ es primo, $p \not\equiv 0$. Descarta $p \equiv 1 \pmod 3$ viendo qué le pasaría a $p + 2$.

[[/pista]]

[[solución]]

Como $p > 3$ es primo, $3 \nmid p$, así que $p \equiv 1$ o $p \equiv 2 \pmod 3$.

**Si $p \equiv 1 \pmod 3$:** entonces $q = p + 2 \equiv 1 + 2 = 3 \equiv 0 \pmod 3$, es decir $3 \mid q$. Pero $q = p + 2 > 5 > 3$ es primo, y un primo mayor que $3$ no puede ser múltiplo de $3$. Contradicción, así que este caso no ocurre.

**Luego $p \equiv 2 \pmod 3$:** entonces $p + 1 \equiv 2 + 1 = 3 \equiv 0 \pmod 3$, es decir

$$
3 \mid p + 1. \qquad \blacksquare
$$

[[/solución]]

**Problema 4 (infinitud de primos $\equiv 3 \pmod 4$, clásico).** Demostrar que todo número natural de la forma $4k + 3$ tiene al menos un divisor primo de la misma forma. Usar esto para demostrar que hay infinitos primos $\equiv 3 \pmod 4$.

[[pista]]

Para la primera parte: $N \equiv 3 \pmod 4$ es impar, así que todos sus primos son $\equiv 1$ o $\equiv 3 \pmod 4$; si todos fueran $\equiv 1$, el producto sería $\equiv 1$. Para la infinitud, copia a Euclides con $N = 4\,p_1 p_2 \cdots p_r - 1$.

[[/pista]]

[[solución]]

**Parte 1.** Sea $N \equiv 3 \pmod 4$. Entonces $N$ es impar, luego todos sus divisores primos son impares y, por tanto, cada uno es $\equiv 1$ o $\equiv 3 \pmod 4$. El producto de enteros $\equiv 1 \pmod 4$ es de nuevo $\equiv 1 \pmod 4$ (porque $1 \cdot 1 \equiv 1$). Si **todos** los primos de $N$ fueran $\equiv 1 \pmod 4$, entonces $N \equiv 1 \pmod 4$, contra $N \equiv 3$. Por tanto $N$ tiene al menos un divisor primo $\equiv 3 \pmod 4$.

**Parte 2.** Supongamos, por contradicción, que solo hay un número **finito** de primos $\equiv 3 \pmod 4$, digamos $p_1 = 3, p_2, \ldots, p_r$. Consideremos

$$
N = 4\, p_1 p_2 \cdots p_r - 1.
$$

Entonces $N \equiv -1 \equiv 3 \pmod 4$, así que por la Parte 1 tiene un divisor primo $q \equiv 3 \pmod 4$. Como la lista $p_1, \ldots, p_r$ contiene **todos** los primos $\equiv 3 \pmod 4$, ese $q$ es uno de ellos, luego $q \mid p_1 p_2 \cdots p_r$ y por tanto $q \mid 4\,p_1 \cdots p_r$. Pero también $q \mid N = 4\,p_1 \cdots p_r - 1$. Restando, $q \mid 1$ — imposible.

La contradicción prueba que hay **infinitos** primos $\equiv 3 \pmod 4$. $\blacksquare$

[[/solución]]

**Problema 5 (clásico).** Probar que $\tau(n)$ (número de divisores positivos de $n$) es impar si y solo si $n$ es un cuadrado perfecto.

[[pista]]

Escribe la factorización $n = p_1^{a_1} \cdots p_r^{a_r}$ y usa la fórmula $\tau(n) = (a_1+1)\cdots(a_r+1)$. Un producto es impar exactamente cuando todos sus factores lo son.

[[/pista]]

[[solución]]

Escribimos la factorización en primos $n = p_1^{a_1} p_2^{a_2} \cdots p_r^{a_r}$. La fórmula del número de divisores es

$$
\tau(n) = (a_1 + 1)(a_2 + 1) \cdots (a_r + 1).
$$

Este producto es **impar** si y solo si **cada** factor $a_i + 1$ es impar (basta un factor par para que el producto sea par). Y $a_i + 1$ es impar si y solo si $a_i$ es par.

Por tanto, $\tau(n)$ es impar $\iff$ todos los exponentes $a_i$ son pares $\iff$ $n = \left(p_1^{a_1/2} \cdots p_r^{a_r/2}\right)^2$ es un cuadrado perfecto.

$\blacksquare$

[[/solución]]

**Problema 6 (clásico).** Hallar todos los enteros positivos $n$ tales que $\tau(n) = \sqrt{n}$.

[[pista]]

Como $\tau(n) = \sqrt n$ es entero, $n$ es un cuadrado: $n = \prod p_i^{2b_i}$, y la condición es $\prod (2b_i + 1) = \prod p_i^{b_i}$. El lado izquierdo es impar, y para cada primo $p \geq 3$ se tiene $p^b \geq 2b + 1$ con igualdad solo en $(p, b) = (3, 1)$.

[[/pista]]

[[solución]]

Para que $\sqrt n = \tau(n)$ sea entero, $n$ debe ser un cuadrado perfecto. Escribimos $n = p_1^{2b_1} \cdots p_r^{2b_r}$, de modo que

$$
\sqrt{n} = \prod_{i} p_i^{b_i}, \qquad \tau(n) = \prod_i (2b_i + 1).
$$

La condición $\tau(n) = \sqrt n$ se vuelve

$$
\prod_i (2b_i + 1) = \prod_i p_i^{b_i}. \tag{$\ast$}
$$

**El número es impar.** El lado izquierdo de $(\ast)$ es producto de impares, luego $\sqrt n = \prod p_i^{b_i}$ es impar. Por tanto $n$ es impar y **ningún** $p_i$ es $2$; todos cumplen $p_i \geq 3$.

**Comparación factor a factor.** Para cualquier primo $p \geq 3$ y exponente $b \geq 1$,

$$
p^b \geq 3^b \geq 2b + 1,
$$

donde la segunda desigualdad es igualdad solo si $b = 1$ (pues $3^1 = 3 = 2\cdot 1 + 1$, y para $b \geq 2$ es estricta). En consecuencia $p^b \geq 2b + 1$, **con igualdad únicamente cuando** $(p, b) = (3, 1)$.

Multiplicando estas desigualdades sobre todos los $i$:

$$
\sqrt n = \prod_i p_i^{b_i} \geq \prod_i (2b_i + 1) = \tau(n).
$$

Pero $(\ast)$ exige igualdad, así que la igualdad debe darse en **cada** factor: cada $(p_i, b_i) = (3, 1)$. Como el primo $3$ puede aparecer una sola vez, solo hay dos posibilidades:

- **Sin factores primos** ($r = 0$): $\sqrt n = 1$, es decir $n = 1$. Comprobación: $\tau(1) = 1 = \sqrt 1$. ✓
- **Un único factor $(3,1)$:** $\sqrt n = 3$, es decir $n = 9$. Comprobación: $\tau(9) = 3 = \sqrt 9$. ✓

Las únicas soluciones son $\boxed{n = 1 \text{ y } n = 9}$. $\blacksquare$

[[/solución]]
