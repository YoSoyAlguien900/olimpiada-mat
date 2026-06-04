---
title: "Reciprocidad cuadrática y símbolo de Legendre"
preview: "El 'theorema aureum' de Gauss: determinar si $p$ es cuadrado módulo $q$ se reduce a saber si $q$ es cuadrado módulo $p$, con un signo que depende solo de las congruencias de $p$ y $q$ módulo $4$."
dificultad: nacional
tags: [reciprocidad, legendre, residuos-cuadraticos, primos, gauss]
prerequisites: [pequeno-teorema-fermat, orden-multiplicativo]
author: "Material olímpico"
updated: "2026-06-03"
---

Gauss llamó a la ley de reciprocidad cuadrática el **«theorema aureum»** — el teorema dorado — y le dedicó ocho demostraciones distintas a lo largo de su vida. No es exagerado: este resultado conecta la pregunta «¿tiene solución $x^2 \equiv p \pmod q$?» con la pregunta «¿tiene solución $x^2 \equiv q \pmod p$?», revelando una simetría impensable a primera vista.

El símbolo de Legendre codifica si un entero es cuadrado módulo un primo. La ley de reciprocidad, junto con las dos leyes complementarias, permite calcular cualquier símbolo de Legendre en tiempo logarítmico, análogamente a como el algoritmo de Euclides calcula el MCD.

## Definición

Sea $p$ un primo impar y $a$ un entero con $p \nmid a$. El **símbolo de Legendre** se define como:

$$\left(\frac{a}{p}\right) \;=\; \begin{cases} +1 & \text{si existe } x \in \mathbb Z \text{ con } x^2 \equiv a \pmod p, \\ -1 & \text{en caso contrario.} \end{cases}$$

Un entero $a$ con $\left(\frac{a}{p}\right) = 1$ es un **residuo cuadrático** (RC) módulo $p$; con $\left(\frac{a}{p}\right) = -1$ es un **no-residuo cuadrático** (NRC).

Por convención extendemos a $\left(\frac{0}{p}\right) = 0$.

## Teorema

**(Propiedades del símbolo de Legendre)**

**(i)** (Criterio de Euler) $\left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p$.

**(ii)** (Multiplicatividad) $\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right) \left(\frac{b}{p}\right)$.

**(iii)** (Periodicidad) Si $a \equiv b \pmod p$, entonces $\left(\frac{a}{p}\right) = \left(\frac{b}{p}\right)$.

**(iv)** (Distribución equitativa) Hay exactamente $(p-1)/2$ RC y $(p-1)/2$ NRC en $\{1, 2, \ldots, p-1\}$.

## Demostración

**(i)** Sea $a$ un RC: $a \equiv x^2 \pmod p$, así $a^{(p-1)/2} \equiv x^{p-1} \equiv 1 \pmod p$ por PTF.

Sea $a$ un NRC. Sabemos que $a^{(p-1)/2} \equiv \pm 1 \pmod p$ (pues es raíz de $t^2 - 1 = (t-1)(t+1)$ en el cuerpo $\mathbb F_p$). Si fuera $a^{(p-1)/2} \equiv 1$, entonces $a$ sería raíz de $x^{(p-1)/2} - 1$, que tiene a lo sumo $(p-1)/2$ raíces en $\mathbb F_p$. Pero los $(p-1)/2$ RC ya son $(p-1)/2$ raíces distintas de este polinomio (como vimos arriba). Así $a$ no puede ser raíz, contradicción. Luego $a^{(p-1)/2} \equiv -1 \pmod p$.

**(iv)** La función $x \mapsto x^2 \pmod p$ envía $\{1, \ldots, p-1\}$ a los RC. Como $x^2 \equiv (-x)^2 = (p-x)^2$, cada RC tiene exactamente dos preimágenes $\{x, p-x\}$. Hay $(p-1)/2$ pares, luego $(p-1)/2$ RC. Los restantes $(p-1)/2$ elementos son NRC. $\blacksquare$

**(ii)** Por el criterio de Euler: $\left(\frac{ab}{p}\right) \equiv (ab)^{(p-1)/2} = a^{(p-1)/2} b^{(p-1)/2} \equiv \left(\frac{a}{p}\right)\left(\frac{b}{p}\right) \pmod p$. Como ambos lados están en $\{-1, 0, 1\}$ y son iguales módulo $p > 2$, son iguales. $\blacksquare$

## Teorema

**(Leyes complementarias)**

$$\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2} = \begin{cases} +1 & \text{si } p \equiv 1 \pmod 4, \\ -1 & \text{si } p \equiv 3 \pmod 4. \end{cases}$$

$$\left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} +1 & \text{si } p \equiv \pm 1 \pmod 8, \\ -1 & \text{si } p \equiv \pm 3 \pmod 8. \end{cases}$$

## Demostración

**Primera ley.** Por el criterio de Euler: $\left(\frac{-1}{p}\right) \equiv (-1)^{(p-1)/2} \pmod p$. Como el valor es $\pm 1$, la igualdad se levanta a $\mathbb Z$. Finalmente, $(p-1)/2$ es par iff $p \equiv 1 \pmod 4$.

**Segunda ley.** Queremos saber si $2$ es RC módulo $p$. Consideramos el conjunto $\{1, 3, 5, \ldots, p-2\}$ (los $(p-1)/2$ impares en $\{1, \ldots, p-1\}$). Reducimos los productos $2 \cdot 1, 2 \cdot 3, 2 \cdot 5, \ldots, 2 \cdot \frac{p-1}{2}$ módulo $p$ al rango $[-(p-1)/2, (p-1)/2]$ y contamos cuántos quedan negativos. El número $\nu$ de negativos satisface $\left(\frac{2}{p}\right) = (-1)^\nu$ (por el Lema de Gauss, a continuación).

El análisis muestra que $\nu = (p^2 - 1)/8 \pmod 2$, lo que da la fórmula. $\blacksquare$

## Teorema

**(Reciprocidad cuadrática, Gauss 1796)** Sean $p$ y $q$ primos impares distintos. Entonces:

$$\left(\frac{p}{q}\right) \cdot \left(\frac{q}{p}\right) \;=\; (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}.$$

En palabras: $\left(\frac{p}{q}\right) = \left(\frac{q}{p}\right)$ **salvo** cuando $p \equiv q \equiv 3 \pmod 4$, en cuyo caso los signos son opuestos.

## Demostración

Utilizamos el **Lema de Gauss** y el método de conteo de Eisenstein.

**Lema de Gauss.** Sea $a$ coprimo con $p$. Consideramos los $\frac{p-1}{2}$ productos:

$$a, 2a, 3a, \ldots, \frac{p-1}{2} \cdot a,$$

reducidos a representantes en $\left\{-\frac{p-1}{2}, \ldots, -1, 1, \ldots, \frac{p-1}{2}\right\}$. Sea $\nu$ el número de representantes negativos. Entonces $\left(\frac{a}{p}\right) = (-1)^\nu$.

*Demostración del Lema.* Los representantes $r_1, \ldots, r_{(p-1)/2}$ son todos distintos en valor absoluto (porque si $|r_i| = |r_j|$, entonces $ia \equiv \pm ja \pmod p$, con $1 \leq i \leq j \leq (p-1)/2$; si el signo es $+$, $i = j$; si es $-$, $ia + ja \equiv 0$, $p \mid (i+j)a$, imposible pues $1 \leq i + j \leq p-1$). Así $\{|r_1|, \ldots, |r_{(p-1)/2}|\} = \{1, \ldots, (p-1)/2\}$.

Multiplicando: $a \cdot 2a \cdots \frac{p-1}{2}a = a^{(p-1)/2} \cdot \left(\frac{p-1}{2}\right)! \equiv (-1)^\nu \cdot \left(\frac{p-1}{2}\right)! \pmod p$ (el $(-1)^\nu$ proviene de cambiar el signo de los $\nu$ representantes negativos). Cancelando $\left(\frac{p-1}{2}\right)!$ (coprimo con $p$): $a^{(p-1)/2} \equiv (-1)^\nu \pmod p$. Por el criterio de Euler: $\left(\frac{a}{p}\right) = (-1)^\nu$. $\square$

**Prueba de la reciprocidad (método de Eisenstein).** Para $\left(\frac{q}{p}\right)$, aplicamos el Lema de Gauss: $\nu$ es el número de enteros en $\{q, 2q, \ldots, \frac{p-1}{2}q\}$ cuyo representante en $(-p/2, p/2)$ es negativo. Equivalentemente, $\nu$ es el número de $k \in \{1, \ldots, \frac{p-1}{2}\}$ tales que $kq \pmod p > p/2$, es decir, tales que $\lfloor 2kq/p \rfloor$ es impar.

Puede mostrarse (con un conteo cuidadoso sobre puntos del retículo) que:

$$\nu \equiv \sum_{k=1}^{(p-1)/2} \left\lfloor \frac{kq}{p} \right\rfloor \pmod 2.$$

La **prueba de Eisenstein** cuenta los puntos del retículo $\mathbb Z^2$ en el rectángulo $\{(x, y) : 1 \leq x \leq (p-1)/2,\; 1 \leq y \leq (q-1)/2\}$:

$$\frac{p-1}{2} \cdot \frac{q-1}{2} \text{ puntos en total.}$$

Cada punto está **estrictamente** por encima o por debajo de la diagonal $y = (q/p)x$ (nunca sobre ella, pues $p \nmid qx$ para $0 < x < p$). Los puntos bajo la diagonal son $\sum_{x=1}^{(p-1)/2} \lfloor qx/p \rfloor$, y los sobre la diagonal son $\sum_{y=1}^{(q-1)/2} \lfloor py/q \rfloor$.

Sumando:

$$\sum_{x=1}^{(p-1)/2} \left\lfloor \frac{qx}{p} \right\rfloor + \sum_{y=1}^{(q-1)/2} \left\lfloor \frac{py}{q} \right\rfloor \;=\; \frac{p-1}{2} \cdot \frac{q-1}{2}.$$

Pero $\left(\frac{q}{p}\right) = (-1)^{\sum \lfloor qx/p \rfloor}$ y $\left(\frac{p}{q}\right) = (-1)^{\sum \lfloor py/q \rfloor}$, así:

$$\left(\frac{q}{p}\right) \cdot \left(\frac{p}{q}\right) \;=\; (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}. \qquad \blacksquare$$

## Ejemplo

### Cálculos con reciprocidad

**Ejemplo 1.** Determinar si $71$ es residuo cuadrático módulo $73$.

$71 \equiv -2 \pmod{73}$.

$$\left(\frac{71}{73}\right) = \left(\frac{-2}{73}\right) = \left(\frac{-1}{73}\right)\left(\frac{2}{73}\right).$$

$73 \equiv 1 \pmod 4$, así $\left(\frac{-1}{73}\right) = 1$.

$73 \equiv 1 \pmod 8$, así $\left(\frac{2}{73}\right) = 1$.

**$71$ es RC módulo $73$.**

---

**Ejemplo 2.** Calcular $\left(\frac{37}{53}\right)$.

$37 \equiv 1 \pmod 4$, $53 \equiv 1 \pmod 4$. Por reciprocidad:

$$\left(\frac{37}{53}\right) = \left(\frac{53}{37}\right) = \left(\frac{16}{37}\right) = \left(\frac{4^2}{37}\right) = 1.$$

*(En el último paso: $16 = 4^2$ es un cuadrado perfecto, así siempre es RC.)*

**$37$ es residuo cuadrático módulo $53$.**

---

**Ejemplo 3.** ¿Es $-3$ un residuo cuadrático módulo $p$ para primos $p > 3$?

$$\left(\frac{-3}{p}\right) = \left(\frac{-1}{p}\right)\left(\frac{3}{p}\right).$$

Por reciprocidad (con $3 \equiv 3 \pmod 4$):

$$\left(\frac{3}{p}\right) = \left(\frac{p}{3}\right) \cdot (-1)^{\frac{p-1}{2} \cdot 1} = \left(\frac{p}{3}\right) \cdot (-1)^{(p-1)/2}.$$

Entonces:

$$\left(\frac{-3}{p}\right) = (-1)^{(p-1)/2} \cdot \left(\frac{p}{3}\right) \cdot (-1)^{(p-1)/2} = \left(\frac{p}{3}\right).$$

Ahora $\left(\frac{p}{3}\right) = 1$ si $p \equiv 1 \pmod 3$ y $= -1$ si $p \equiv 2 \pmod 3$.

**Conclusión:** $-3$ es RC módulo $p$ iff $p \equiv 1 \pmod 3$, es decir iff $p \equiv 1 \pmod 3$ (equivalentemente, $p \equiv 1 \pmod 6$ ya que $p$ es primo impar mayor que $3$).

---

**Ejemplo 4.** Probar que todo primo $p \equiv 1 \pmod 4$ es suma de dos cuadrados.

Por la primera ley complementaria: $\left(\frac{-1}{p}\right) = 1$, así existe $a$ con $a^2 \equiv -1 \pmod p$. Entonces $p \mid a^2 + 1$. Por el descenso de Fermat (variante): entre los enteros de la forma $ma + n$ con $0 \leq m, n \leq \sqrt p$, existen por palomar dos que son iguales módulo $p$. Substractando, $p = x^2 + y^2$ para ciertos enteros $x, y$ (la demostración completa es el **algoritmo de Cornacchia**). $\square$

---

### Ecuaciones diofánticas

**Ejemplo 5.** Probar que $x^2 + 3 = y^3$ no tiene soluciones enteras (excepto las evidentes pequeñas).

Módulo $4$: $x^2 \equiv 0$ o $1$, así $x^2 + 3 \equiv 3$ o $0 \pmod 4$. Para que sea cubo $y^3$: cubo $\equiv 0, 1, 3 \pmod 4$. El valor $3 \pmod 4$ requiere $y \equiv 3 \pmod 4$.

Si $y$ es impar: $y^3 - x^2 = 3$; módulo $8$: $y^3 \equiv \pm 1, \pm 3$ y $x^2 \equiv 0, 1, 4$; la combinación $y^3 - x^2 \equiv 3 \pmod 8$ restringe fuertemente los casos. Un análisis más completo (factorización en $\mathbb Z[\sqrt{-3}]$ o $\mathbb Z[\omega]$, donde $\omega = e^{2\pi i/3}$) demuestra que las únicas soluciones son $(x, y) = (\pm 1, 2)$ y $(\pm 5, -2)$.

## Aplicaciones

**Decidir si una ecuación cuadrática tiene solución módulo un primo.** Para resolver $x^2 \equiv a \pmod p$, primero calcular $\left(\frac{a}{p}\right)$. Si $= -1$, no hay solución. Si $= 1$, el algoritmo de Tonelli-Shanks encuentra la raíz en $O(\log^2 p)$ pasos.

**Primos de la forma $x^2 + ny^2$.** El problema de qué primos son representables como $x^2 + ny^2$ está completamente resuelto por la teoría de formas cuadráticas y la reciprocidad cuadrática (y su generalización, la teoría de cuerpos de clases).

**Criba cuadrática.** La factorización de enteros grandes con el algoritmo QS (Quadratic Sieve) usa la reciprocidad para determinar qué primos pequeños pueden dividir a $x^2 - n$ para distintos $x$.

## Observación

**Más de 200 pruebas.** La reciprocidad cuadrática es uno de los teoremas con más demostraciones conocidas. Gauss dio 8; los métodos incluyen combinatoria, análisis complejo, álgebra abstracta, teoría de grupos, sumas de Gauss, y topología. Cada demostración ilumina un aspecto diferente.

**La generalización: reciprocidad de Artin.** La ley de reciprocidad cuadrática es el caso más simple de la **reciprocidad de Artin**, que relaciona extensiones abelianas de cuerpos de números con sumas de caracteres. El programa de Langlands generaliza esto a extensiones no-abelianas — uno de los grandes programas abiertos de la matemática contemporánea.

**Símbolo de Jacobi.** Para denominadores compuestos $n = p_1^{a_1} \cdots p_k^{a_k}$, el símbolo de Jacobi $\left(\frac{a}{n}\right) = \prod \left(\frac{a}{p_i}\right)^{a_i}$ sigue las mismas leyes de reciprocidad, pero ya no caracteriza los RC módulo $n$ (puede ser $+1$ sin que $a$ sea cuadrado). Es útil como herramienta de cálculo.

## Problemas relacionados

- **(Clásico)** Determinar todos los primos $p$ para los cuales $\left(\frac{5}{p}\right) = 1$.

- **(OME 2016)** Probar que si $p \equiv 3 \pmod 4$, entonces $x^4 \equiv -4 \pmod p$ no tiene solución.

- **(Clásico)** Sea $p$ primo con $p \equiv 1 \pmod 3$. Probar que existe $a$ con $a^2 + a + 1 \equiv 0 \pmod p$.

- **(Clásico, congruencias de Gauss)** Para primo impar $p$, calcular $\sum_{a=1}^{p-1} \left(\frac{a}{p}\right) a$.

- **(ISL 2000/N1)** Determinar todos los enteros $n \geq 1$ que se escriben simultáneamente como suma de dos cuadrados y como suma de dos cubos.

- **(Conjetura de Goldbach cuadrática)** Todo primo $p \equiv 1 \pmod 4$ es suma de dos cuadrados de **primos**. Abierta.
