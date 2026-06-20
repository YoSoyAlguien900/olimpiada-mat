---
title: "Colección regional — Álgebra en la Olimpiada Matemática Galega"
preview: "Quince problemas reales de álgebra de la OMG (2003–2026): relaciones de Vieta, divisibilidad de polinomios, sistemas reales y desigualdades con AM-GM y técnicas de extremo. Nivel fase autonómica. Sin convexidad, ecuaciones funcionales ni reordenamiento."
dificultad: regional
tags: [coleccion, problemas, fase-regional, algebra, polinomios, vieta, desigualdades, OMG]
prerequisites: [polinomios, am-gm, cauchy-schwarz, progresiones-sumas]
author: "Adrián García Bouzas"
updated: "2026-06-21"
---

Problemas reales de álgebra extraídos de los exámenes oficiales de la **Olimpiada Matemática Galega** (OMG, fase autonómica de la OME). Los enunciados originales están en gallego en `archivo/OMG_Problemas/`; aquí se presentan traducidos al castellano.

Todo lo que se necesita está en el nivel **regional** del itinerario: relaciones de Vieta y manipulación de polinomios, AM-GM, Cauchy-Schwarz, progresiones y sumas telescópicas, y argumentos de extremo. No hace falta convexidad/Jensen, ecuaciones funcionales completas ni la desigualdad del reordenamiento. Las pistas del final son opcionales: intenta cada problema sin ellas primero.

---

**1. (OMG 2006/P4)** Calcular los números $p$ y $q$ tales que las raíces de la ecuación

$$x^2 + px + q = 0$$

sean $D$ y $1 - D$, siendo $D$ el discriminante de dicha ecuación de segundo grado.

---

**2. (OMG 2016/P4)** Las tres raíces del polinomio $x^3 - 14x^2 + Bx - 84$ son los lados de un triángulo rectángulo. Calcular $B$.

---

**3. (OMG 2013/P2)** Probar que las sumas de las primeras, las segundas y las terceras potencias de las raíces del polinomio $p(x) = x^3 + 2x^2 + 3x + 4$ valen lo mismo.

---

**4. (OMG 2003/P3)** Dado el polinomio $p(x) = x^3 + Bx^2 + Cx + D$, probar que si el cuadrado de una de sus raíces es igual al producto de las otras dos, entonces $B^3 D = C^3$.

---

**5. (OMG 2020/P4)** Dados tres números reales $a$, $b$, $c$, se considera el polinomio

$$p(x) = (x - a)(x - b) + (x - b)(x - c) + (x - c)(x - a).$$

Demostrar que $p(x) \geq 0$ para todo número real $x$ si y solo si $a = b = c$.

---

**6. (OMG 2024/P2)** Sea $P(x)$ un polinomio de grado $5$ y sean $a$ y $b$ dos números reales distintos de $0$. Supongamos que el resto de $P(x)$ al dividirlo por $x^3 + ax + b$ es igual al resto de $P(x)$ al dividirlo por $x^3 + ax^2 + b$. Determinar el valor de $a + b$.

---

**7. (OMG 2017/P6)** Calcular el número máximo de raíces reales distintas que puede tener un polinomio $P$ que verifique la siguiente propiedad: el producto de dos raíces distintas de $P$ es también una raíz de $P$.

---

**8. (OMG 2022/P4)** Encontrar todos los polinomios $p(x)$ con coeficientes reales tales que

$$p(x) + p(y) + p(z) + p(x + y + z) = p(x + y) + p(y + z) + p(z + x)$$

para cualesquiera números reales $x$, $y$, $z$.

---

**9. (OMG 2026/P1)** Encontrar todas las soluciones reales del sistema de ecuaciones

$$x^3 = 5x + y, \qquad y^3 = 5y + x.$$

---

**10. (OMG 2022/P3)** Determinar todas las ternas de números reales $(a, b, c)$ que satisfagan el sistema

$$a + b + c = 3, \qquad 2^a + 2^b + 2^c = 7, \qquad 2^{-a} + 2^{-b} = \tfrac{3}{4}.$$

---

**11. (OMG 2020/P3)** Determinar todos los valores reales de $(x, y, z)$ para los que

$$x + y + z = 1, \qquad x^2 y + y^2 z + z^2 x = xy^2 + yz^2 + zx^2, \qquad x^3 + y^2 + z = y^3 + z^2 + x.$$

---

**12. (OMG 2007/P3)** Encontrar todas las soluciones reales de la ecuación

$$3^{\,x^2 - x - y} + 3^{\,y^2 - y - z} + 3^{\,z^2 - z - x} = 1.$$

---

**13. (OMG 2020/P2)** Sean $a_1, a_2, \ldots, a_{2020}$ números reales tales que la suma de $1009$ cualesquiera de ellos es positiva. Demostrar que la suma de los $2020$ números también es positiva.

---

**14. (OMG 2006/P2)** Un número positivo $x$ verifica la relación

$$x^2 + \frac{1}{x^2} = 7.$$

Demostrar que $x^5 + \dfrac{1}{x^5}$ es un número entero y calcular su valor.

---

**15. (OMG 2013/P4)** Demostrar que el producto de los dos mil trece primeros términos de la sucesión

$$a_n = 1 + \frac{1}{n^3}$$

no llega a valer $3$.

---

## Pistas

- **Problema 1:** por Vieta, la suma de raíces $D + (1 - D) = 1 = -p$, luego $p = -1$. El producto $D(1 - D) = q$ junto con la definición $D = p^2 - 4q = 1 - 4q$ forman un sistema en $D$ y $q$.

- **Problema 2:** ordena las raíces $a \leq b < c$; la hipotenusa $c$ cumple $a^2 + b^2 = c^2$. Combina $(a + b + c)^2 = 196$ con $a^2 + b^2 + c^2 = 2c^2$ para hallar $c$, y usa $abc = 84$ con $ab + bc + ca = B$.

- **Problema 3:** llama $e_1 = -2$, $e_2 = 3$, $e_3 = -4$ a las funciones simétricas (Vieta). Las identidades de Newton dan $p_1 = e_1$, $p_2 = e_1^2 - 2e_2$, $p_3 = e_1^3 - 3e_1 e_2 + 3e_3$; las tres valen $-2$.

- **Problema 4:** si $r^2 = st$ y $\{r, s, t\}$ son las raíces, entonces $r^3 = r \cdot st = rst = -D$ y además $C = rs + st + tr = r(r + s + t) = -Br$. Eleva $C = -Br$ al cubo.

- **Problema 5:** desarrolla $p(x) = 3x^2 - 2(a + b + c)x + (ab + bc + ca)$. Como el coeficiente líder es $3 > 0$, $p \geq 0$ siempre $\iff$ discriminante $\leq 0$. Verifica que $(a + b + c)^2 - 3(ab + bc + ca) = \tfrac{1}{2}\bigl[(a - b)^2 + (b - c)^2 + (c - a)^2\bigr]$.

- **Problema 6:** ambas cúbicas dividen a $P(x) - r(x)$, de grado $\leq 5$. Dos cúbicas distintas no pueden ser coprimas (su m.c.m. tendría grado $6$), así que comparten una raíz. Su diferencia es $ax(1 - x)$, luego la raíz común es $0$ o $1$; descarta $0$ porque $b \neq 0$.

- **Problema 7:** una raíz $r$ con $|r| > 1$ genera, multiplicándola por otra adecuada, productos de módulo creciente que no pueden ser todos raíces. Acota cuántas raíces pueden tener $|r| > 1$ y estudia los valores $0$, $1$, $-1$ y los signos.

- **Problema 8:** sustituye $x = y = z = 0$ para obtener $p(0) = 0$; luego $z = 0$ da una relación que limita el grado. Comparando coeficientes se ve que solo sirven los de la forma $p(x) = \alpha x^2 + \beta x$.

- **Problema 9:** resta las ecuaciones: $(x - y)(x^2 + xy + y^2) = 4(x - y)$, luego $x = y$ o $x^2 + xy + y^2 = 4$. El caso $x = y$ da $x^3 = 6x$; para el otro, suma las dos ecuaciones.

- **Problema 10:** con $u = 2^a$, $v = 2^b$, $w = 2^c$ tienes $u + v + w = 7$, $uvw = 8$ y $\dfrac{u + v}{uv} = \dfrac{3}{4}$. Sustituyendo $uv = 8/w$ y $u + v = 7 - w$ sale $w^2 - 7w + 6 = 0$.

- **Problema 11:** la segunda ecuación factoriza como $-(x - y)(y - z)(z - x) = 0$, así que dos variables coinciden. Sustituye cada caso (con $x + y + z = 1$) en la tercera ecuación.

- **Problema 12:** los tres sumandos son positivos. Por AM-GM, su suma es $\geq 3 \cdot 3^{S/3}$, donde $S = (x - 1)^2 + (y - 1)^2 + (z - 1)^2 - 3$ es la suma de los tres exponentes. Analiza cuándo el valor puede bajar hasta $1$ y fuerza la igualdad $x = y = z = 1$.

- **Problema 13:** promedia la condición sobre todos los subconjuntos de $1009$ elementos. Cada $a_i$ aparece en el mismo número de ellos, de modo que el promedio de todas esas sumas es exactamente $\dfrac{1009}{2020}$ veces la suma total; si cada suma es positiva, también lo es el promedio.

- **Problema 14:** pon $s = x + \dfrac{1}{x}$; de $x^2 + x^{-2} = 7$ sale $s^2 = 9$. Con $p_n = x^n + x^{-n}$ usa la recurrencia $p_n = s\,p_{n - 1} - p_{n - 2}$ hasta $p_5 = 41s = \pm 123$.

- **Problema 15:** factoriza $1 + \dfrac{1}{n^3} = \dfrac{(n + 1)(n^2 - n + 1)}{n^3}$ y observa que $n^2 - n + 1 = (n - 1)^2 + (n - 1) + 1$, lo que permite telescopiar. El producto queda acotado y se mantiene por debajo de $3$.

---

Los enunciados originales en gallego están en `archivo/OMG_Problemas/`.
