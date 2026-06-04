---
title: "Fracciones continuas y aproximación diofántica"
preview: "Todo número real admite una única expansión en fracción continua. Los convergentes son las mejores aproximaciones racionales posibles. Para irracionales cuadráticos la expansión es periódica, y esto da la solución de la ecuación de Pell."
dificultad: nacional
tags: [fracciones-continuas, convergentes, pell, aproximacion-diofantica, periodica]
prerequisites: [euclides-bezout, ecuaciones-diofanticas]
author: "Material olímpico"
updated: "2026-06-04"
---

El algoritmo de Euclides y las fracciones continuas son, en el fondo, la misma idea mirada desde dos ángulos distintos. Al aplicar Euclides a $a$ y $b$, los cocientes sucesivos $q_1, q_2, \ldots$ son exactamente los **coeficientes de la fracción continua** de $a/b$. Esta observación transforma un algoritmo de cálculo de MCD en una teoría completa de aproximación racional.

La teoría tiene tres capas: (1) toda fracción $a/b$ tiene una única expansión finita en fracción continua, y los **convergentes** intermedios son las mejores aproximaciones racionales posibles a $a/b$ con denominador pequeño; (2) todo irracional tiene una expansión infinita única, y los convergentes convergen al número; (3) un irracional tiene expansión **periódica** si y solo si es un **irracional cuadrático**, lo que permite resolver la ecuación de Pell de forma algorítmica.

## Definición

Una **fracción continua** es una expresión de la forma

$$[a_0; a_1, a_2, \ldots] \;=\; a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cdots}}}$$

con $a_0 \in \mathbb Z$ y $a_i \geq 1$ para $i \geq 1$. Los $a_i$ se llaman **cocientes parciales**. Si la expresión termina en $a_n$, la fracción es **finita** y representa un racional. Si es infinita, representa un irracional.

Los **convergentes** $p_k/q_k$ son los truncamientos:
$$\frac{p_k}{q_k} = [a_0; a_1, a_2, \ldots, a_k].$$

## Teorema

**(Recurrencias de los convergentes)** Definiendo $p_{-1} = 1$, $p_0 = a_0$, $q_{-1} = 0$, $q_0 = 1$, los convergentes satisfacen:

$$p_k = a_k p_{k-1} + p_{k-2}, \qquad q_k = a_k q_{k-1} + q_{k-2}.$$

Además, la **identidad de Euler-Wallis**:

$$p_k q_{k-1} - p_{k-1} q_k = (-1)^{k-1}.$$

En particular, $\gcd(p_k, q_k) = 1$: los convergentes están siempre en forma irreducible.

## Demostración

**Recurrencias.** Por inducción: $[a_0; a_1, \ldots, a_k] = a_0 + 1/[a_1; \ldots, a_k]$. Las recurrencias se siguen de que $[a_0; a_1, \ldots, a_k] = (a_k p_{k-1} + p_{k-2})/(a_k q_{k-1} + q_{k-2})$ (demostrable por inducción directa expandiendo la fracción).

**Identidad.** Por inducción sobre $k$:

*Base ($k = 0$):* $p_0 q_{-1} - p_{-1} q_0 = a_0 \cdot 0 - 1 \cdot 1 = -1 = (-1)^{-1}$. ✓

*Paso:* $p_k q_{k-1} - p_{k-1} q_k = (a_k p_{k-1} + p_{k-2})q_{k-1} - p_{k-1}(a_k q_{k-1} + q_{k-2})$
$= p_{k-2} q_{k-1} - p_{k-1} q_{k-2} = -(p_{k-1} q_{k-2} - p_{k-2} q_{k-1}) = -(-1)^{k-2} = (-1)^{k-1}$. $\blacksquare$

**Corolario.** Los convergentes consecutivos difieren en:

$$\frac{p_k}{q_k} - \frac{p_{k-1}}{q_{k-1}} = \frac{(-1)^{k-1}}{q_k q_{k-1}}.$$

Los convergentes de índice par son crecientes; los de índice impar, decrecientes; y los dos subsecuencias se entrecruzan:

$$\frac{p_0}{q_0} < \frac{p_2}{q_2} < \frac{p_4}{q_4} < \cdots < \alpha < \cdots < \frac{p_5}{q_5} < \frac{p_3}{q_3} < \frac{p_1}{q_1}.$$

## Teorema

**(Algoritmo de expansión)** Sea $\alpha \in \mathbb R$. Definimos:
$$\alpha_0 = \alpha, \quad a_k = \lfloor \alpha_k \rfloor, \quad \alpha_{k+1} = \frac{1}{\alpha_k - a_k} \text{ (si } \alpha_k \neq a_k\text{)}.$$

Entonces $\alpha = [a_0; a_1, a_2, \ldots]$.

- Si $\alpha \in \mathbb Q$: la expansión es finita.
- Si $\alpha \notin \mathbb Q$: la expansión es infinita y **única** (con la convención $a_k \geq 1$ para $k \geq 1$).

## Demostración

Por construcción: $\alpha_k = a_k + 1/\alpha_{k+1}$, así:

$$\alpha = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cdots}} = [a_0; a_1, a_2, \ldots].$$

**Finitud para racionales.** Si $\alpha = p/q \in \mathbb Q$ con $q > 0$, entonces $\alpha_1 = q/(p - a_0 q)$ es también racional con denominador estrictamente menor que $q$ (pues $0 < p - a_0 q < q$). Por descenso, el proceso termina.

**Unicidad.** Si $[a_0; a_1, \ldots] = [b_0; b_1, \ldots]$, comparando la parte entera da $a_0 = b_0$; luego $1/[a_1; \ldots] = 1/[b_1; \ldots]$, y por inducción $a_k = b_k$ para todo $k$. $\blacksquare$

## Ejemplo

### Expansiones concretas

**Ejemplo 1.** Calcular $[2; 1, 4, 3]$.

$$[2; 1, 4, 3] = 2 + \cfrac{1}{1 + \cfrac{1}{4 + \cfrac{1}{3}}} = 2 + \cfrac{1}{1 + \cfrac{1}{13/3}} = 2 + \cfrac{1}{1 + \cfrac{3}{13}} = 2 + \cfrac{1}{16/13} = 2 + \frac{13}{16} = \frac{45}{16}.$$

Los convergentes son:
- $p_0/q_0 = 2/1$
- $p_1/q_1 = (1 \cdot 2 + 1)/(1 \cdot 1 + 0) = 3/1$
- $p_2/q_2 = (4 \cdot 3 + 2)/(4 \cdot 1 + 1) = 14/5$
- $p_3/q_3 = (3 \cdot 14 + 3)/(3 \cdot 5 + 1) = 45/16$ ✓

---

**Ejemplo 2.** Expandir $\sqrt{2}$ en fracción continua.

$a_0 = \lfloor \sqrt 2 \rfloor = 1$. $\alpha_1 = 1/(\sqrt 2 - 1) = (\sqrt 2 + 1)/((\sqrt 2)^2 - 1) = \sqrt 2 + 1$.

$a_1 = \lfloor \sqrt 2 + 1 \rfloor = 2$. $\alpha_2 = 1/(\sqrt 2 + 1 - 2) = 1/(\sqrt 2 - 1) = \sqrt 2 + 1$.

El proceso se repite: $\alpha_1 = \alpha_2 = \cdots = \sqrt 2 + 1$. Por tanto $\sqrt 2 = [1; \overline{2}]$ (período $1$).

Los convergentes son $1, 3/2, 7/5, 17/12, 41/29, 99/70, \ldots$

Relación: $p_k/q_k$ son las soluciones de $x^2 - 2y^2 = \pm 1$ (Pell). ✓

---

**Ejemplo 3.** La razón áurea $\varphi = (1+\sqrt 5)/2 = [1; 1, 1, 1, \ldots] = [\overline{1}]$.

Los convergentes son $1, 2, 3/2, 5/3, 8/5, 13/8, 21/13, \ldots$ — ¡las razones de Fibonacci consecutivos!

$$\frac{p_k}{q_k} = \frac{F_{k+2}}{F_{k+1}}.$$

---

**Ejemplo 4.** Expansión de $\sqrt{7} = [2; \overline{1, 1, 1, 4}]$.

$a_0 = 2$. $\alpha_1 = 1/(\sqrt 7 - 2) = (\sqrt 7 + 2)/3$.
$a_1 = \lfloor (\sqrt 7 + 2)/3 \rfloor = 1$. $\alpha_2 = 3/(\sqrt 7 - 1) = (\sqrt 7 + 1)/2$.
$a_2 = 1$. $\alpha_3 = 2/(\sqrt 7 - 1) = (\sqrt 7 + 1)/3$.
$a_3 = 1$. $\alpha_4 = 3/(\sqrt 7 - 2) = (\sqrt 7 + 2)$.
$a_4 = 4$. $\alpha_5 = 1/(\sqrt 7 - 2) = \alpha_1$.

El período es $(1, 1, 1, 4)$, de longitud $4$. Notar que el último coeficiente del período es $4 = 2 a_0 = 2 \cdot 2$.

## Teorema

**(Lagrange, 1770)** Un número real irracional $\alpha$ tiene expansión en fracción continua **periódica** si y solo si $\alpha$ es un **irracional cuadrático** (raíz de un polinomio de grado $2$ con coeficientes enteros).

Si $\alpha = \sqrt{D}$ con $D$ entero positivo no cuadrado, entonces la expansión tiene la forma:

$$\sqrt D = [a_0; \overline{a_1, a_2, \ldots, a_{l-1}, 2a_0}],$$

donde la secuencia $a_1, a_2, \ldots, a_{l-1}$ es **palíndroma** ($a_i = a_{l-i}$).

*(La demostración completa requiere la teoría de formas cuadráticas; omitida aquí.)*

## Teorema

**(Mejor aproximación)** El convergente $p_k/q_k$ es la **mejor aproximación racional** a $\alpha$ entre todas las fracciones con denominador $\leq q_k$: si $\gcd(p, q) = 1$ y $1 \leq q \leq q_k$ con $p/q \neq p_k/q_k$, entonces

$$\left|\alpha - \frac{p_k}{q_k}\right| < \left|\alpha - \frac{p}{q}\right|.$$

Además, la aproximación satisface la cota:

$$\frac{1}{q_k(q_k + q_{k+1})} < \left|\alpha - \frac{p_k}{q_k}\right| < \frac{1}{q_k q_{k+1}}.$$

## Demostración

**(Idea)** De la identidad $\alpha - p_k/q_k = (-1)^k (\alpha_{k+1} q_k - q_{k+1} p_k) \cdot \ldots$ (derivable por la recurrencia), el error exacto es:

$$\alpha - \frac{p_k}{q_k} = \frac{(-1)^k}{q_k(\alpha_{k+1} q_k + q_{k-1})}.$$

Como $a_{k+1} \leq \alpha_{k+1} < a_{k+1} + 1$, se tiene $a_{k+1} q_k + q_{k-1} \leq \alpha_{k+1} q_k + q_{k-1} < q_{k+1} + q_k$, dando la cota del enunciado.

La propiedad de «mejor aproximación» se prueba mostrando que cualquier fracción entre dos convergentes consecutivos tiene denominador mayor que el convergente. $\blacksquare$

## La ecuación de Pell via fracciones continuas

La conexión entre fracciones continuas y la ecuación de Pell $x^2 - Dy^2 = 1$ es algorítmica y completa.

## Teorema

**(Pell y convergentes)** Sea $D > 0$ no cuadrado y $\sqrt D = [a_0; \overline{a_1, \ldots, a_l}]$ con período de longitud $l$. La **solución fundamental** de $x^2 - Dy^2 = 1$ es $(x, y) = (p_{l-1}, q_{l-1})$ si $l$ es par, o $(p_{2l-1}, q_{2l-1})$ si $l$ es impar. Todas las soluciones de $x^2 - Dy^2 = 1$ son de la forma $(p_{nl-1}, q_{nl-1})$ para $n = 1, 2, 3, \ldots$

## Demostración

**(Idea)** Los convergentes $p_k/q_k$ de $\sqrt D$ satisfacen $|p_k^2 - D q_k^2| \leq 2a_0 + 1$ (acotado). Para el convergente en la posición $k = l - 1$ (justo antes de que el período se repita), la «coincidencia» de los cocientes parciales fuerza $p_{l-1}^2 - D q_{l-1}^2 = \pm 1$.

Si $l$ es par: el signo es $+1$. Si $l$ es impar: es $-1$, y hay que esperar el doble período para obtener $+1$ (pues $(-1)^2 = 1$ en el producto de Pell). $\blacksquare$

## Ejemplo

### Pell en acción

**Ejemplo 5.** Resolver $x^2 - 3y^2 = 1$.

$\sqrt 3 = [1; \overline{1, 2}]$ (período $l = 2$, par). La solución fundamental es $(p_1, q_1) = (2, 1)$: $4 - 3 = 1$ ✓.

Las demás soluciones: $(p_{2n-1}, q_{2n-1})$ para $n = 1, 2, \ldots$, o equivalentemente, $(x_n + y_n \sqrt 3) = (2 + \sqrt 3)^n$:

$(n=1)$: $(2, 1)$.
$(n=2)$: $(2+\sqrt 3)^2 = 7 + 4\sqrt 3$, solución $(7, 4)$.
$(n=3)$: $(2+\sqrt 3)^3 = 26 + 15\sqrt 3$, solución $(26, 15)$.

---

**Ejemplo 6.** Resolver $x^2 - 5y^2 = 1$.

$\sqrt 5 = [2; \overline{4}]$ (período $l = 1$, impar). Hay que usar el doble período: $(p_1, q_1)$.

$p_0/q_0 = 2$. $p_1 = 4 \cdot 2 + 1 = 9$, $q_1 = 4 \cdot 1 + 0 = 4$. Verificar: $81 - 5 \cdot 16 = 81 - 80 = 1$ ✓.

Solución fundamental $(9, 4)$.

(Con período $l = 1$: $p_0^2 - 5q_0^2 = 4 - 5 = -1$. Al duplicar el período: $(p_1, q_1) = (2p_0^2 + 1, 2p_0 q_0) = (9, 4)$.)

---

**Ejemplo 7.** (Teorema de Hurwitz) Para todo irracional $\alpha$, existen infinitos racionales $p/q$ con $|\alpha - p/q| < 1/(\sqrt 5 q^2)$.

La cota $1/\sqrt 5$ es **óptima**: para $\alpha = \varphi$ (la razón áurea), no existe infinita secuencia de racionales que mejore esta cota. Esto se debe a que $\varphi = [1; 1, 1, 1, \ldots]$ tiene todos los cocientes parciales iguales a $1$ (los más pequeños posibles), haciendo la aproximación tan lenta como se puede. Los convergentes de $\varphi$ son las razones de Fibonacci, y la distancia decae como $|\varphi - F_{n+1}/F_n| \sim 1/(\sqrt 5 F_n^2)$.

## Aplicaciones

**Cálculo del MCD.** La fracción continua de $a/b$ es exactamente el algoritmo de Euclides: los cocientes $q_1, q_2, \ldots$ son los mismos. Los convergentes son los «residuos de Bézout» en cada paso.

**Identificación de irracionales cuadráticos.** Para verificar si un número como $1 + \sqrt{3}/2$ o $(2+\sqrt{7})/3$ tiene expansión periódica: sí, porque son irracionales cuadráticos. La expansión se calcula manualmente como en los ejemplos.

**Mejores aproximaciones en práctica.** La fracción $355/113$ aproxima $\pi$ con error $< 3 \times 10^{-7}$. Esto se debe a que $\pi = [3; 7, 15, 1, 292, \ldots]$ y el convergente $p_3/q_3 = 355/113$ precede un coeficiente muy grande ($292$), lo que garantiza una aproximación excepcionalmente buena.

**Ecuaciones de Pell generalizadas.** $x^2 - Dy^2 = c$ para constante $c$ pequeña: las soluciones son también convergentes de $\sqrt D$ con una comprobación adicional.

## Observación

**Número de oro y los más difíciles de aproximar.** La razón áurea $\varphi = [1;1,1,1,\ldots]$ es el número más difícil de aproximar por racionales: sus convergentes (razones de Fibonacci) se acercan lo más lentamente posible, porque los cocientes parciales $1$ son los mínimos. Esta es la razón matemática de la aparición de Fibonacci en fenómenos de crecimiento óptimo.

**Algoritmo de reducción para Pell.** Para resolver $x^2 - Dy^2 = 1$ con $D$ arbitrario: (1) calcular $a_0 = \lfloor \sqrt D \rfloor$; (2) iterar el algoritmo de fracciones continuas para $\sqrt D$; (3) identificar el final del primer período (cuando $\alpha_k = \sqrt D + a_0$); (4) leer la solución fundamental como $(p_{l-1}, q_{l-1})$ o $(p_{2l-1}, q_{2l-1})$.

## Problemas relacionados

- **(Clásico)** Demostrar que $\gcd(p_k, q_k) = 1$ para todos los convergentes, usando la identidad de Euler-Wallis.

- **(Clásico)** Probar que $|\sqrt D - p_k/q_k| < 1/q_k^2$ para todo convergente de $\sqrt D$.

- **(Teorema de Beatty)** Si $\alpha, \beta > 0$ son irracionales con $1/\alpha + 1/\beta = 1$, las sucesiones $\{\lfloor n\alpha \rfloor\}$ y $\{\lfloor n\beta \rfloor\}$ particionan $\mathbb N$. *(Conectado con fracciones continuas de $\alpha$.)*

- **(Putnam 2009/B6)** Usando propiedades de convergentes, calcular $\sum_{n=1}^\infty \frac{1}{F_{2n-1} F_{2n+1}}$ donde $F_n$ son los números de Fibonacci.

- **(Clásico)** Hallar la solución fundamental de $x^2 - 13y^2 = 1$ usando la expansión de $\sqrt{13}$.

- **(Conjetura de Gauss)** ¿Para qué $D$ el período de $\sqrt D$ tiene longitud exactamente $1$? Exactamente para $D = a^2 + 1$ (e.g. $D = 2, 5, 10, 17, \ldots$).
