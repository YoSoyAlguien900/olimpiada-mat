---
title: "Valuación $p$-ádica"
preview: "Para un primo $p$ y un entero $n \\neq 0$, la valuación $v_p(n)$ es el exponente exacto de $p$ en la factorización de $n$. Se comporta como un logaritmo discreto: convierte multiplicación en suma y divisibilidad en desigualdad."
dificultad: regional
tags: [valuacion-p-adica, primos, factorizacion, LTE, irracionalidad]
prerequisites: [divisibilidad-basica, euclides-bezout]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

La factorización en primos asigna a cada entero $n$ una secuencia de exponentes: cuántas veces divide $2$, cuántas veces $3$, cuántas veces $5$, etcétera. La **valuación $p$-ádica** $v_p(n)$ extrae exactamente uno de esos exponentes — el correspondiente al primo $p$ — y lo convierte en la herramienta central para razonar sobre divisibilidad.

La potencia de la valuación está en su comportamiento algebraico: $v_p$ es un **homomorfismo de grupos** de $(\mathbb Q^*, \cdot)$ a $(\mathbb Z, +)$, y satisface una desigualdad triangular ultramétrica sobre la suma. Esto convierte multiplicaciones sobre potencias de $p$ en sumas, y divisibilidades en comparaciones de enteros. El resultado: problemas de divisibilidad que eran opacos se vuelven inmediatos.

## Definición

Sea $p$ un primo. Para un entero $n \neq 0$, la **valuación $p$-ádica** de $n$, denotada $v_p(n)$, es el único entero $e \geq 0$ tal que

$$p^e \mid n \quad\text{pero}\quad p^{e+1} \nmid n.$$

Por convenio, $v_p(0) = +\infty$. Para racionales no nulos: $v_p(a/b) = v_p(a) - v_p(b)$.

**Ejemplos inmediatos:**

- $v_2(48) = v_2(2^4 \cdot 3) = 4$.
- $v_3(1350) = v_3(2 \cdot 3^3 \cdot 5^2) = 3$.
- $v_5(100) = v_5(2^2 \cdot 5^2) = 2$.
- $v_7(1) = 0$ (el $7^0 = 1$ divide a $1$ pero $7^1$ no).
- $v_2(3) = 0$ (el $2$ no divide a $3$).

## Teorema

**(Propiedades de la valuación)** Para todo primo $p$ y enteros no nulos $a, b$:

**(i)** (Multiplicatividad) $v_p(ab) = v_p(a) + v_p(b)$.

**(ii)** (Cociente) $v_p(a/b) = v_p(a) - v_p(b)$.

**(iii)** (Desigualdad ultramétrica) $v_p(a + b) \geq \min(v_p(a), v_p(b))$.

**(iv)** (Igualdad cuando difieren) Si $v_p(a) \neq v_p(b)$, entonces $v_p(a + b) = \min(v_p(a), v_p(b))$.

**(v)** (Caracterización de divisibilidad) $a \mid b \iff v_p(a) \leq v_p(b)$ para todo primo $p$.

## Demostración

**(i)** Escribe $a = p^{v_p(a)} \cdot a'$ con $p \nmid a'$, y $b = p^{v_p(b)} \cdot b'$ con $p \nmid b'$. Entonces $ab = p^{v_p(a) + v_p(b)} \cdot a'b'$, y $p \nmid a'b'$ porque $p$ es primo. Luego $v_p(ab) = v_p(a) + v_p(b)$.

**(iii)** Sea $m = \min(v_p(a), v_p(b))$. Entonces $p^m \mid a$ y $p^m \mid b$, así $p^m \mid (a + b)$. Luego $v_p(a+b) \geq m$.

**(iv)** Supongamos $v_p(a) < v_p(b)$ (WLOG). Escribamos $a = p^{v_p(a)} a'$ con $p \nmid a'$ y $b = p^{v_p(b)} b'$. Entonces:

$$a + b = p^{v_p(a)}\left(a' + p^{v_p(b) - v_p(a)} b'\right).$$

El paréntesis es $a' + (\text{múltiplo de }p)$. Como $p \nmid a'$, el paréntesis $\not\equiv 0 \pmod p$, luego $v_p(a + b) = v_p(a) = \min(v_p(a), v_p(b))$. $\blacksquare$

## Ejemplo

### Aplicaciones directas

**Ejemplo 1.** Calcular $v_2(100!)$.

Por la fórmula de Legendre: $v_2(100!) = \lfloor 100/2 \rfloor + \lfloor 100/4 \rfloor + \lfloor 100/8 \rfloor + \lfloor 100/16 \rfloor + \lfloor 100/32 \rfloor + \lfloor 100/64 \rfloor = 50 + 25 + 12 + 6 + 3 + 1 = 97$.

$100!$ termina en $v_5(100!) = \lfloor 100/5 \rfloor + \lfloor 100/25 \rfloor = 20 + 4 = 24$ ceros (el factor limitante es $5$, pues $v_2 > v_5$).

---

**Ejemplo 2.** Demostrar que $v_2\binom{2n}{n} = s_2(n)$ donde $s_2(n)$ es el número de unos en la escritura binaria de $n$.

Por Kummer, $v_p\binom{m+k}{m}$ es el número de acarreos al sumar $m$ y $k$ en base $p$. Con $p = 2$ y $m = k = n$: sumar $n + n$ en binario produce un acarreo en cada posición donde $n$ tiene un $1$. Así $v_2\binom{2n}{n} = s_2(n)$, el número de unos de $n$. $\square$

---

**Ejemplo 3.** Probar que $v_p\binom{n}{k} \geq 0$, es decir, $\binom{n}{k}$ siempre es entero.

$v_p\binom{n}{k} = v_p(n!) - v_p(k!) - v_p((n-k)!)$. Por Legendre, esta diferencia es $(s_p(k) + s_p(n-k) - s_p(n))/(p-1) \geq 0$ porque la suma de dígitos no decrece al sumar (los acarreos no pueden aumentar la suma de dígitos). $\square$

---

**Ejemplo 4.** Demostrar que $\sqrt{2}$ es irracional usando valuaciones.

Supongamos $\sqrt{2} = a/b$ con $a, b \in \mathbb Z_{>0}$. Entonces $a^2 = 2b^2$. Aplicando $v_2$:

$$v_2(a^2) = 2v_2(a), \qquad v_2(2b^2) = 1 + 2v_2(b).$$

La igualdad $2v_2(a) = 1 + 2v_2(b)$ es imposible: el lado izquierdo es par, el derecho es impar. $\blacksquare$

*El mismo argumento prueba que $\sqrt{p}$ es irracional para todo primo $p$, y más generalmente, que $\sqrt[k]{m}$ es irracional cuando $v_p(m)$ no es múltiplo de $k$ para algún primo $p$.*

---

**Ejemplo 5.** Hallar $v_3\!\left(\binom{300}{100}\right)$.

Por Kummer: $v_3\binom{300}{100}$ es el número de acarreos al sumar $100 + 200 = 300$ en base $3$.

$100 = (10201)_3$ (pues $1 \cdot 81 + 0 \cdot 27 + 2 \cdot 9 + 0 \cdot 3 + 1 = 100$).
$200 = (21102)_3$ (pues $2 \cdot 81 + 1 \cdot 27 + 1 \cdot 9 + 0 \cdot 3 + 2 = 200$).
$300 = (102100)_3$ (pues $1 \cdot 243 + 0 \cdot 81 + 2 \cdot 27 + 1 \cdot 9 + 0 \cdot 3 + 0 = 300$).

Hacemos la suma en base $3$:

```
  1 0 2 0 1
+ 2 1 1 0 2
-----------
```

Posición 0: $1 + 2 = 3$, acarreo $1$, dígito $0$.
Posición 1: $0 + 0 + 1 = 1$, sin acarreo, dígito $1$.
Posición 2: $2 + 1 = 3$, acarreo $1$, dígito $0$.
Posición 3: $0 + 1 + 1 = 2$, sin acarreo, dígito $2$.
Posición 4: $1 + 2 = 3$, acarreo $1$, dígito $0$.
Posición 5: $0 + 0 + 1 = 1$, sin acarreo.

Resultado: $(102100)_3 = 300$ ✓. Hubo $3$ acarreos.

**$v_3\binom{300}{100} = 3$.**

Verificación con Legendre: $v_3(300!) - v_3(100!) - v_3(200!)$. $v_3(300!) = (300 - s_3(300))/2 = (300 - 3)/2 = 297/2$... espera. $s_3(300) = 1+0+2+1+0+0 = 4$, así $(300 - 4)/2 = 148$. $s_3(100) = 1+0+2+0+1 = 4$, $(100-4)/2 = 48$. $s_3(200) = 2+1+1+0+2 = 6$, $(200-6)/2 = 97$. $v_3\binom{300}{100} = 148 - 48 - 97 = 3$. ✓

---

**Ejemplo 6.** *(Irracionalidad de $\log_2 3$)* Demostrar que no existen enteros $m, n > 0$ con $2^m = 3^n$.

Aplicando $v_2$: $m = v_2(2^m) = v_2(3^n) = n \cdot v_2(3) = 0$. Luego $m = 0$, contradicción con $m > 0$.

Equivalentemente: $2^m = 3^n$ implica $v_3(2^m) = v_3(3^n)$, es decir $0 = n$, imposible. $\square$

En consecuencia $\log_2 3 = m/n$ es imposible, así $\log_2 3$ es **irracional**.

---

**Ejemplo 7.** Demostrar que si $p$ es primo y $\alpha \in \mathbb Q$ satisface $\alpha^2 + \alpha + 1 = 0$, entonces tal $\alpha$ no existe.

$(2\alpha + 1)^2 = -3$. Si $\alpha \in \mathbb Q$, entonces $\beta = 2\alpha + 1 \in \mathbb Q$ y $\beta^2 = -3$. Pero $\beta^2 \geq 0$ para $\beta \in \mathbb R$. Si $\beta \in \mathbb Q \setminus \mathbb R$... en realidad $\mathbb Q \subset \mathbb R$, así $\beta^2 \geq 0$, y $\beta^2 = -3 < 0$ es imposible. $\square$

*(El argumento con $v_3$ es útil en extensiones: si hubiera $\beta$ en $\mathbb Q$ con $\beta^2 = -3$, entonces $v_3(\beta^2) = v_3(-3) = 1$, pero $v_3(\beta^2) = 2v_3(\beta)$ es par. Contradicción.)*

## La fórmula de Legendre y sus aplicaciones

La valuación del factorial es la aplicación más importante de $v_p$ en olimpiada.

## Teorema

**(Legendre)** $v_p(n!) = \dfrac{n - s_p(n)}{p - 1}$, donde $s_p(n)$ es la suma de los dígitos de $n$ en base $p$.

*(Demostración completa en el capítulo de Bases Numéricas.)*

**Aplicaciones directas:**

- **Ceros de $n!$:** número de ceros al final = $v_5(n!)$ (pues siempre $v_2 > v_5$).
- **Máximo $k$ tal que $p^k \mid \binom{n}{m}$:** por Kummer, es el número de acarreos en base $p$.
- **$\binom{n}{m}$ es potencia de $p$:** si $v_p\binom{n}{m} \geq 1$ y todos los demás primos dan $v_q = 0$.

## Aplicaciones

**Ecuaciones diofánticas.** Si $x^n + y^n = z^n$ con $p \mid x$ pero $p \nmid y, z$, tomando $v_p$: $nv_p(x) = v_p(x^n + y^n) = v_p(x^n)$ — wait, esto no siempre funciona directamente. La herramienta para situaciones así es el **Lema del Levantamiento del Exponente (LTE)**, desarrollado en su propio capítulo.

**Criterio de entero.** El número $\binom{m_1 + m_2 + \cdots + m_k}{m_1, m_2, \ldots, m_k} = \frac{(m_1 + \cdots + m_k)!}{m_1! m_2! \cdots m_k!}$ es entero porque $v_p \geq 0$ para todo $p$ (por Kummer generalizado o Legendre).

## Observación

**La métrica $p$-ádica.** La valuación $v_p$ define una **distancia** en $\mathbb Q$: $|a - b|_p = p^{-v_p(a-b)}$. Dos racionales están "$p$-ádicamente cerca" si su diferencia es divisible por una potencia alta de $p$. La completación de $\mathbb Q$ bajo esta métrica da los **números $p$-ádicos** $\mathbb Q_p$, que son el marco natural para la teoría algebraica de números local. Toda la aritmética de congruencias se convierte en análisis en $\mathbb Q_p$.

**Conexión con el Lema LTE.** El Lema del Levantamiento del Exponente calcula $v_p(a^n \pm b^n)$ exactamente. Junto con Legendre y Kummer, forma la trinidad de herramientas de valuación para olimpiadas.

## Problemas relacionados

- **(Clásico)** Para $n \geq 1$, hallar $v_2\left(\prod_{k=1}^n (4k-2)\right)$.

- **(OME 2009)** Sea $n$ un entero positivo. Probar que $v_2\binom{2n}{n} = s_2(n)$ (usando Kummer). Deducir que $\binom{2n}{n}$ es impar si y solo si $n$ es una potencia de $2$.

- **(Clásico)** Demostrar que $\sqrt[3]{2}$, $\sqrt[3]{3}$, $\sqrt[3]{6}$ son todos irracionales.

- **(USAMO 2010/P5)** Si $p$ es primo y $n = p^a m$ con $p \nmid m$, expresar $v_p(n!)$ en términos de $a$, $m$ y $p$.

- **(ISL 2014/N6)** Determinar todos los enteros $n \geq 2$ tales que $\frac{2^n - 1}{n}$ sea un entero.

- **(Clásico)** Probar que $v_p\binom{p^k}{j} = k - v_p(j)$ para $1 \leq j \leq p^k$.
