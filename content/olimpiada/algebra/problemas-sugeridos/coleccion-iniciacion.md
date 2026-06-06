---
title: "Colección de iniciación — Ecuaciones, polinomios y comparaciones"
preview: "Once problemas de álgebra extraídos de exámenes reales de la OMG y la OME Fase Local. Cubre ecuaciones no estándar, polinomios con condiciones enteras, sistemas cíclicos, comparaciones y ecuaciones funcionales introductorias."
dificultad: iniciacion
tags: [coleccion, iniciacion, algebra, ecuaciones, polinomios, funcionales]
prerequisites: [am-gm, cauchy-schwarz]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de problemas de iniciación en álgebra, todos extraídos de exámenes reales. Los problemas 1–5 son accesibles con manipulación algebraica básica; los problemas 6–11 introducen ideas de análisis de casos, funcionales sencillas y argumentos de extremo.

---

**1. (Local XLIV OME, 1ª sesión)** Encontrar todas las soluciones reales de

$$x \cdot \frac{6-x}{x+1} \cdot \left(\frac{6-x}{x+1} + x\right) = 8.$$

---

**2. (Local XLIV OME, 2ª sesión)** Probar que no existen enteros $a$, $b$, $c$, $d$ tales que el polinomio $P(x) = ax^3 + bx^2 + cx + d$ satisfaga simultáneamente $P(4) = 1$ y $P(7) = 2$.

---

**3. (Local XLIV OME, 2ª sesión)** ¿Cuál de los dos números es mayor: $999!$ o $500^{999}$?

---

**4. (OMG 1999/P5)** Sean $p$ y $q$ números reales distintos que satisfacen el sistema

$$p = (4 - q)\,q, \qquad q = (4 - p)\,p.$$

Hallar todos los valores posibles de $p + q$.

---

**5. (Local XLV OME 2009, viernes por la tarde)** Un número *repdigit* es un número natural formado por al menos dos cifras iguales (p. ej., $11$, $33$, $555$, $7777$). Escribir $2009$ como suma de números repdigit con el mínimo número posible de sumandos.

---

**6. (Local XLIV OME, 2ª sesión)** Encontrar todas las ternas de números reales $(a, b, c)$ que satisfagan el sistema cíclico

$$a^5 = 5b^3 - 4c, \qquad b^5 = 5c^3 - 4a, \qquad c^5 = 5a^3 - 4b.$$

---

**7. (Local XLV OME 2009, sábado por la tarde)** Para un entero $n > 1$ fijo, encontrar todos los pares de enteros $(a, b)$ tales que las ecuaciones

$$x^n + ax - 2008 = 0 \qquad \text{y} \qquad x^n + bx - 2009 = 0$$

tengan al menos una raíz real común.

---

**8. (OME Fase Local 2011–2012)** Sean $a$, $b$, $c > 0$ con $abc = 1$. Probar que si

$$a + b + c > \frac{1}{a} + \frac{1}{b} + \frac{1}{c},$$

entonces exactamente uno de los tres números $a$, $b$, $c$ es mayor que $1$.

---

**9. (OME Fase Local 2011–2012)** Encontrar todas las funciones continuas $f \colon \mathbb{R}^+ \to \mathbb{R}^+$ que satisfacen

$$x + \frac{1}{x} = f(x) + \frac{1}{f(x)} \qquad \text{para todo } x > 0.$$

---

**10. (Local XLIV OME, 1ª sesión)** Encontrar todas las ternas de reales $(x, y, z)$ que satisfagan

$$\sqrt{3^x(5^y + 7^z)} + \sqrt{5^y(7^z + 3^x)} + \sqrt{7^z(3^x + 5^y)} = \sqrt{2}\,(3^x + 5^y + 7^z).$$

---

**11. (OME Fase Local 2011–2012)** En un triángulo $ABC$ con lados $a = BC$, $b = CA$, $c = AB$, se verifica

$$b(a+b)(b+c) = a^3 + b\bigl(a^2 + c^2\bigr) + c^3.$$

Probar que los ángulos $A$, $B$, $C$ están en progresión aritmética y, por tanto, $B = 60°$.

---

## Pistas

- **Problema 1:** denotar $t = (6-x)/(x+1)$. Observar que $t + x = (6-x+x(x+1))/(x+1) = (x^2+6)/(x+1)$. La ecuación se convierte en $x \cdot t \cdot (t+x) = 8$; además $t = (6-x)/(x+1)$ satisface $t(x+1) = 6-x$, es decir, $tx + t = 6 - x$, luego $x(t+1) = 6 - t$. Combinar para obtener una ecuación en $x$.

- **Problema 2:** calcular $P(7) - P(4) = a(7^3 - 4^3) + b(7^2 - 4^2) + c(7-4) = 279a + 33b + 3c = 3(93a + 11b + c)$. Este valor es divisible por $3$, pero $P(7) - P(4) = 2 - 1 = 1$. Contradicción.

- **Problema 3:** emparejar los factores $k$ y $1000-k$ en $999!$: su producto es $k(1000-k) = 500^2 - (k-500)^2 \leq 500^2$. El producto de los $499$ pares más el factor $500$ da $999! \leq 500^{999}$; la desigualdad es estricta porque no todos los productos son iguales a $500^2$.

- **Problema 4:** restar las dos ecuaciones del sistema para obtener $p - q = (4-q)q - (4-p)p$. Factorizar el lado derecho; dividir por $p - q \neq 0$ para obtener $p + q$.

- **Problema 5:** verificar que $2009 = 1111 + 777 + 66 + 55$ (cuatro sumandos). Para demostrar que tres no bastan, comprobar que ninguna suma de tres repdigits puede dar $2009$ (analizar las posibles combinaciones por número de cifras).

- **Problema 6:** si $a = b = c = t$, la ecuación $t^5 = 5t^3 - 4t$ se factoriza como $t(t^4 - 5t^2 + 4) = t(t^2-1)(t^2-4) = 0$, dando $t \in \{0, \pm 1, \pm 2\}$. Para la unicidad, suponer WLOG $a \geq b \geq c$ y mostrar que las desigualdades en el sistema fuerzan $a = b = c$.

- **Problema 7:** si $r$ es raíz común, restar las ecuaciones: $(a-b)r = 1$, luego $r = 1/(a-b)$. Sustituir en la primera ecuación para obtener una condición sobre $(a,b)$. Los dos tipos de soluciones corresponden a $r = 1$ y $r = -1$.

- **Problema 8:** la condición $abc = 1$ implica $1/a + 1/b + 1/c = bc + ca + ab$. La hipótesis es $a + b + c > ab + bc + ca$. Analizar los casos: si los tres son $> 1$ o si ninguno es $> 1$, llegar a contradicción con $abc = 1$ y la hipótesis.

- **Problema 9:** la función $g(t) = t + 1/t$ es estrictamente decreciente en $(0,1]$ y estrictamente creciente en $[1,\infty)$, con mínimo $g(1) = 2$. Para cada $x > 0$, la ecuación $g(f(x)) = g(x)$ tiene exactamente dos soluciones: $f(x) = x$ y $f(x) = 1/x$. La continuidad de $f$ restringe las elecciones a cuatro funciones globales.

- **Problema 10:** aplicar la desigualdad de Cauchy-Schwarz en la forma $\sum \sqrt{u_i v_i} \leq \sqrt{(\sum u_i)(\sum v_i)}$ con $u_i = \sqrt{a}$ y $v_i = \sqrt{b+c}$ (cíclico). La igualdad en Cauchy-Schwarz requiere $a/(b+c) = b/(c+a) = c/(a+b)$, que solo se da cuando $a = b = c$, es decir $3^x = 5^y = 7^z$.

- **Problema 11:** desarrollar la condición y factorizar: $b(a+b)(b+c) - a^3 - b(a^2+c^2) - c^3 = 0$ simplifica a $(a+b+c)(a-2b+c)(a+c) = \ldots$; verificar que conduce a $a + c = 2b$, es decir, $a$, $b$, $c$ en progresión aritmética, equivalente a $A + C = 2B$ y $A + B + C = 180°$, luego $B = 60°$.
