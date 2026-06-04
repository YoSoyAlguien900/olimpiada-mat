---
title: "Sucesiones recurrentes lineales: Fibonacci, Lucas y más"
preview: "Una sucesión recurrente lineal de orden $k$ satisface $a_{n+k} = c_1 a_{n+k-1} + \\cdots + c_k a_n$. Su comportamiento modular es periódico, su forma cerrada explícita vía raíces del polinomio característico, y aparece en divisibilidad, combinatoria y geometría."
dificultad: regional
tags: [recurrencias, fibonacci, lucas, binet, pisano, diofanticas]
prerequisites: [polinomios, congruencias]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

La sucesión de Fibonacci ($0, 1, 1, 2, 3, 5, 8, 13, 21, \ldots$) es probablemente la sucesión más famosa de las matemáticas. Aparece en la naturaleza (espirales de girasoles, disposición de hojas), en la geometría (razón áurea), en la combinatoria (número de formas de cubrir un tablero con dominós) y, por supuesto, en la teoría de números.

Pero Fibonacci no es especial por sí mismo: es el representante más simple de una familia mucho más amplia — las **recurrencias lineales homogéneas** — cuya teoría es elegante y completa. Toda sucesión de esta familia tiene una **forma cerrada** explícita, un **comportamiento modular periódico**, y satisface una familia de **identidades algebraicas** que la hacen extraordinariamente útil en problemas olímpicos.

## Definición

Una **recurrencia lineal homogénea de orden $k$** es una sucesión $\{a_n\}_{n \geq 0}$ que satisface, para ciertos coeficientes $c_1, \ldots, c_k$ con $c_k \neq 0$:

$$a_{n+k} = c_1 a_{n+k-1} + c_2 a_{n+k-2} + \cdots + c_k a_n, \qquad n \geq 0.$$

La sucesión queda completamente determinada por las **condiciones iniciales** $a_0, a_1, \ldots, a_{k-1}$.

## Las sucesiones clásicas

**Fibonacci.** $F_0 = 0$, $F_1 = 1$, $F_{n+2} = F_{n+1} + F_n$.
$$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots$$

**Lucas.** $L_0 = 2$, $L_1 = 1$, $L_{n+2} = L_{n+1} + L_n$.
$$2, 1, 3, 4, 7, 11, 18, 29, 47, 76, \ldots$$

Ambas tienen la **misma recurrencia** pero distintas condiciones iniciales. Son las dos sucesiones de Fibonacci «fundamentales».

**Pell.** $P_0 = 0$, $P_1 = 1$, $P_{n+2} = 2P_{n+1} + P_n$. Aparece en la ecuación de Pell $x^2 - 2y^2 = \pm 1$: las soluciones son $(P_{n+1}, P_n)$.

**Sucesión de Lucas generalizada.** Para parámetros $P, Q$: $U_0 = 0$, $U_1 = 1$, $U_{n+2} = P U_{n+1} - Q U_n$. Fibonacci es $P = 1$, $Q = -1$; Pell es $P = 2$, $Q = -1$.

## Teorema

**(Solución general via polinomio característico)** El **polinomio característico** de la recurrencia $a_{n+k} = c_1 a_{n+k-1} + \cdots + c_k a_n$ es

$$\chi(x) = x^k - c_1 x^{k-1} - c_2 x^{k-2} - \cdots - c_k.$$

Si $\chi$ tiene $k$ raíces distintas $r_1, r_2, \ldots, r_k$ (complejas), la solución general es:

$$a_n = A_1 r_1^n + A_2 r_2^n + \cdots + A_k r_k^n,$$

donde $A_1, \ldots, A_k$ se determinan de las condiciones iniciales. Si una raíz $r_j$ tiene multiplicidad $m$, su contribución es $(B_0 + B_1 n + \cdots + B_{m-1} n^{m-1}) r_j^n$.

## Demostración

**(Idea)** El conjunto de soluciones de la recurrencia forma un **espacio vectorial** de dimensión $k$ (pues los datos iniciales $a_0, \ldots, a_{k-1}$ determinan la sucesión). Las funciones $n \mapsto r_j^n$ con $r_j$ raíz del polinomio característico son soluciones independientes (verificable por sustitución), y si las $k$ raíces son distintas, son linealmente independientes (por la no-singularidad de la matriz de Vandermonde de los $r_j$). Por tanto forman una base del espacio. $\blacksquare$

## Ejemplo

### La fórmula de Binet

**Ejemplo 1.** Derivar la fórmula de Binet para Fibonacci.

El polinomio característico de $F_{n+2} = F_{n+1} + F_n$ es $x^2 - x - 1$. Las raíces son:

$$\varphi = \frac{1 + \sqrt 5}{2} \approx 1.618, \qquad \hat\varphi = \frac{1 - \sqrt 5}{2} \approx -0.618.$$

La solución general es $F_n = A\varphi^n + B\hat\varphi^n$. De las condiciones iniciales:
- $F_0 = 0$: $A + B = 0$, así $B = -A$.
- $F_1 = 1$: $A\varphi - A\hat\varphi = A(\varphi - \hat\varphi) = A\sqrt{5} = 1$, así $A = 1/\sqrt{5}$.

$$\boxed{F_n = \frac{\varphi^n - \hat\varphi^n}{\sqrt 5}.}$$

**Consecuencias:**
- $F_n$ es el entero más cercano a $\varphi^n / \sqrt 5$ (pues $|\hat\varphi| < 1$, así $|\hat\varphi^n/\sqrt 5| < 1/2$).
- $F_n \sim \varphi^n / \sqrt 5$ exponencialmente.

---

**Ejemplo 2.** Los números de Lucas y su fórmula.

Para $L_n$ con la misma recurrencia: $L_n = \varphi^n + \hat\varphi^n$.

*Verificación:* $L_0 = 1 + 1 = 2$ ✓, $L_1 = \varphi + \hat\varphi = 1$ ✓.

La relación entre Fibonacci y Lucas: $L_n = F_{n-1} + F_{n+1}$ y $F_n = (L_{n-1} + L_{n+1})/5$.

---

### Identidades clásicas

**Ejemplo 3.** Demostrar la identidad de Cassini: $F_{n-1} F_{n+1} - F_n^2 = (-1)^n$.

Por Binet:

$$F_{n-1} F_{n+1} - F_n^2 = \frac{(\varphi^{n-1} - \hat\varphi^{n-1})(\varphi^{n+1} - \hat\varphi^{n+1}) - (\varphi^n - \hat\varphi^n)^2}{5}.$$

Expandiendo el numerador:

$$\varphi^{2n} - \varphi^{n-1}\hat\varphi^{n+1} - \hat\varphi^{n-1}\varphi^{n+1} + \hat\varphi^{2n} - \varphi^{2n} + 2(\varphi\hat\varphi)^n - \hat\varphi^{2n}$$

$$= -\varphi^{n-1}\hat\varphi^{n+1} - \hat\varphi^{n-1}\varphi^{n+1} + 2(\varphi\hat\varphi)^n$$

$$= (\varphi\hat\varphi)^{n-1}(-\hat\varphi^2 - \varphi^2 + 2\varphi\hat\varphi)$$

$$= (\varphi\hat\varphi)^{n-1} \cdot (-(\varphi - \hat\varphi)^2) = (-1)^{n-1} \cdot (-5) = 5 (-1)^n.$$

Dividiendo por $5$: $F_{n-1} F_{n+1} - F_n^2 = (-1)^n$. $\square$

*(Alternativa: inducción o matrices $2 \times 2$, ambas más elegantes.)*

---

**Ejemplo 4.** Demostrar $\gcd(F_m, F_n) = F_{\gcd(m, n)}$.

La clave es la identidad de adición: $F_{m+n} = F_m F_{n+1} + F_{m-1} F_n$.

Esto implica que $F_m \mid F_{kn}$ para todo $k$ entero (por inducción). En particular, $F_{\gcd(m,n)} \mid F_m$ y $F_{\gcd(m,n)} \mid F_n$.

Por otro lado, si $d \mid F_m$ y $d \mid F_n$, de la identidad de adición $d \mid F_{m-n}$ (por linealidad). El argumento del algoritmo de Euclides aplicado a $(F_m, F_n)$ con la operación $F_m \mapsto F_{m-n}$ reproduce el algoritmo de Euclides en los índices, dando $\gcd(F_m, F_n) = F_{\gcd(m, n)}$. $\square$

**Corolario:** $F_m \mid F_n \iff m \mid n$.

---

### Periodicidad modular y período de Pisano

**Ejemplo 5.** Demostrar que $\{F_n \bmod m\}$ es periódica para todo $m \geq 1$.

Consideramos los pares $(F_n \bmod m, F_{n+1} \bmod m)$. Hay a lo sumo $m^2$ pares posibles. Por el principio del palomar, dos índices $i < j$ dan el mismo par: $(F_i, F_{i+1}) \equiv (F_j, F_{j+1}) \pmod m$.

Como la recurrencia es **invertible** (también vale hacia atrás: $F_n = F_{n+2} - F_{n+1}$), la sucesión es periódica en ambas direcciones, y el período es $j - i$. $\square$

El período de $\{F_n \bmod m\}$ se llama **período de Pisano** y se denota $\pi(m)$.

Valores conocidos: $\pi(2) = 3$, $\pi(3) = 8$, $\pi(4) = 6$, $\pi(5) = 20$, $\pi(7) = 16$, $\pi(8) = 12$, $\pi(10) = 60$.

---

**Ejemplo 6.** Calcular $F_{10^{100}} \bmod 7$.

$\pi(7) = 16$. Necesitamos $10^{100} \bmod 16$.

$10 \equiv 10 \pmod{16}$, $10^2 = 100 \equiv 4 \pmod{16}$, $10^4 \equiv 16 \equiv 0$... wait: $10^2 = 100 = 6 \cdot 16 + 4$, así $10^2 \equiv 4$. $10^4 \equiv 16 \equiv 0$? No: $4^2 = 16 \equiv 0 \pmod{16}$. Entonces $10^{100} = (10^2)^{50} \equiv 4^{50} = (4^2)^{25} \equiv 16^{25} \equiv 0 \pmod{16}$.

Entonces $F_{10^{100}} \equiv F_0 \equiv 0 \pmod 7$.

*Verificación:* $16 \mid 10^{100}$ pues $10^2 = 100$ y $10^{100} = (100)^{50}$, y $100 \equiv 4 \pmod{16}$, $4^2 = 16 \equiv 0$, $4^{50} = 4^{2 \cdot 25} = (4^2)^{25} \equiv 0 \pmod{16}$. ✓

---

**Ejemplo 7.** Demostrar que $F_n$ es divisible por $5$ si y solo si $n \equiv 0 \pmod 5$.

$\pi(5) = 20$. Calculamos los primeros $20$ valores módulo $5$:

$$F_0, F_1, \ldots, F_{19} \equiv 0, 1, 1, 2, 3, 0, 3, 3, 1, 4, 0, 4, 4, 3, 2, 0, 2, 2, 4, 1 \pmod 5.$$

Los ceros aparecen en posiciones $0, 5, 10, 15$, exactamente los múltiplos de $5$. Como el período es $20$ y $5 \mid 20$, el patrón se repite. $\square$

*(Esto también se sigue de $\gcd(F_m, F_n) = F_{\gcd(m,n)}$: $5 \mid F_n \iff F_5 \mid F_n \iff 5 \mid n$.)*

---

### Recurrencias en problemas olímpicos

**Ejemplo 8.** Demostrar que $F_n^2 + F_{n+1}^2 = F_{2n+1}$.

Probaremos por inducción. Caso base $n = 0$: $0^2 + 1^2 = 1 = F_1$ ✓.

Paso inductivo: suponemos $F_n^2 + F_{n+1}^2 = F_{2n+1}$ y probamos para $n + 1$:

$$F_{n+1}^2 + F_{n+2}^2 = F_{n+1}^2 + (F_{n+1} + F_n)^2 = 2F_{n+1}^2 + 2F_n F_{n+1} + F_n^2$$

$$= F_{n+1}(2F_{n+1} + 2F_n) + F_n^2 - F_{n+1}^2 + 2F_{n+1}^2$$

Mejor usar la identidad de adición: $F_{m+n} = F_m F_{n+1} + F_{m-1} F_n$.

Con $m = n + 1$, $n = n + 1$: $F_{2n+2} = F_{n+1}^2 + F_n F_{n+1}$ y $F_{2n+3} = F_{n+2}F_{n+1} + F_{n+1}F_n + ... $

Más directo: la identidad $F_{2n+1} = F_{n+1}^2 + F_n^2$ se puede probar con matrices:

$$\begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n.$$

Elevando al cuadrado (potencia $2n$) y comparando entradas: $F_{2n+1} = F_{n+1}^2 + F_n^2$. $\square$

## Identidades de adición y de duplicación

Recopilamos las identidades más útiles:

- **Adición:** $F_{m+n} = F_m F_{n+1} + F_{m-1} F_n$.
- **Duplicación:** $F_{2n} = F_n(2F_{n+1} - F_n) = F_n L_n$.
- **Cassini:** $F_{n-1}F_{n+1} - F_n^2 = (-1)^n$.
- **Catalan generalizada:** $F_{n+r}F_{n-r} - F_n^2 = (-1)^{n-r} F_r^2$.
- **Suma:** $\sum_{k=1}^n F_k = F_{n+2} - 1$.
- **Suma de cuadrados:** $\sum_{k=1}^n F_k^2 = F_n F_{n+1}$.
- **Zeckendorf:** todo entero positivo se escribe de forma única como suma de Fibonacci no consecutivos.

## Aplicaciones

**Teorema de Zeckendorf.** Todo entero positivo $n$ se escribe de manera única como $n = F_{i_1} + F_{i_2} + \cdots + F_{i_r}$ con $i_j - i_{j+1} \geq 2$ (Fibonacci no consecutivos) y $i_r \geq 2$.

**Dominós y combinatoria.** El número de formas de cubrir un tablero de $1 \times n$ con piezas de $1 \times 1$ y $1 \times 2$ es $F_{n+1}$ (recurrencia inmediata: la primera pieza ocupa $1$ o $2$ casillas).

**Ecuación de Pell.** La sucesión de Pell $P_n$ da todas las soluciones $(P_{n+1}, P_n)$ de $x^2 - 2y^2 = \pm 1$. La recurrencia garantiza que todas las soluciones se obtienen así.

## Observación

**Por qué las recurrencias lineales son ubicuas.** Una sucesión recurrente lineal es esencialmente la misma cosa que un sistema lineal discreto. La «forma cerrada» via raíces del polinomio característico es el análogo discreto de la solución de una EDO lineal con coeficientes constantes. Esta analogía permite transferir toda la teoría de EDOs al mundo discreto: estabilidad, resonancia, comportamiento asintótico.

**Módulo primo.** Para $p$ primo, la sucesión $\{F_n \bmod p\}$ tiene período $\pi(p)$ que divide a $2(p - 1)$ o $2(p + 1)$ según $p \equiv \pm 1 \pmod 5$ o $p \equiv \pm 2 \pmod 5$. Este es un resultado profundo conectado con la teoría de cuerpos de clase.

## Problemas relacionados

- **(Clásico)** Demostrar que $F_{n+1}^2 - F_n F_{n+2} = (-1)^n$ (Cassini). Usar el método matricial.

- **(OME 2012)** Hallar todos los $n$ con $F_n$ cuadrado perfecto. Respuesta: $n = 0, 1, 2, 12$.

- **(Clásico)** Para $p$ primo y $p \equiv \pm 1 \pmod 5$, probar que $p \mid F_{p-1}$. Para $p \equiv \pm 2 \pmod 5$, probar que $p \mid F_{p+1}$.

- **(OMG 2020)** Sea $a_1 = 1$, $a_{n+1} = a_n + \lfloor\sqrt{a_n}\rfloor$. Probar que todos los cuadrados perfectos aparecen en la sucesión.

- **(Clásico, Identidad de Vajda)** $F_{m+n} F_{m-n} - F_m^2 = (-1)^{m-n} F_n^2$.

- **(ISL 2007/N5)** Sea $p$ primo y $n = p^2 - 1$. Probar que $p \mid F_n$.
