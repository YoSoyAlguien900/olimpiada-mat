---
title: "Sucesiones y recurrencias lineales"
preview: "Una recurrencia lineal de orden $k$ se resuelve mediante su polinomio característico: las raíces dan la forma general de $a_n$. Fibonacci es el ejemplo canónico; las técnicas se aplican directamente en olimpiada."
dificultad: regional
tags: [sucesiones, recurrencias, fibonacci, ecuacion-caracteristica, serie]
prerequisites: [polinomios]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Las recurrencias lineales aparecen en olimpiada en dos formas: como objeto de estudio en sí mismas (divisibilidad, periodicidad, comportamiento asintótico) o como herramienta para calcular sumas. Conocer la ecuación característica convierte una recurrencia en una fórmula cerrada.

## Enunciado

**Definición.** Una **recurrencia lineal de orden $k$ con coeficientes constantes** es una relación

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}, \quad n \geq k,$$

donde $c_1, \ldots, c_k$ son constantes (con $c_k \neq 0$) y se dan $k$ condiciones iniciales $a_0, \ldots, a_{k-1}$.

**Polinomio característico.** Se asocia a la recurrencia el polinomio

$$P(r) = r^k - c_1 r^{k-1} - c_2 r^{k-2} - \cdots - c_k.$$

**Teorema.** Si $P$ tiene $k$ raíces distintas $r_1, \ldots, r_k$, la solución general es

$$a_n = A_1 r_1^n + A_2 r_2^n + \cdots + A_k r_k^n,$$

donde $A_1, \ldots, A_k$ se determinan por las condiciones iniciales.

**Raíz múltiple.** Si $r$ es raíz de $P$ con multiplicidad $m$, contribuye los términos $r^n, n r^n, n^2 r^n, \ldots, n^{m-1}r^n$ a la solución general.

## Caso más común: orden 2

La recurrencia $a_n = p\,a_{n-1} + q\,a_{n-2}$ tiene polinomio característico $r^2 - pr - q = 0$ con raíces

$$r_{1,2} = \frac{p \pm \sqrt{p^2 + 4q}}{2}.$$

- **Raíces distintas** $r_1 \neq r_2$: $a_n = A r_1^n + B r_2^n$.
- **Raíz doble** $r_1 = r_2 = r$: $a_n = (A + Bn)\,r^n$.

## Ejemplo

### Fibonacci

**Definición.** $F_0=0$, $F_1=1$, $F_n=F_{n-1}+F_{n-2}$.

**Fórmula de Binet.** El polinomio característico $r^2-r-1=0$ tiene raíces

$$\varphi = \frac{1+\sqrt5}{2} \approx 1.618\ldots \quad \text{(razón áurea)}, \qquad \hat\varphi = \frac{1-\sqrt5}{2} \approx -0.618\ldots$$

La solución general es $F_n = A\varphi^n + B\hat\varphi^n$. Con $F_0=0$ y $F_1=1$:

$$A + B = 0, \quad A\varphi + B\hat\varphi = 1 \implies A = \frac{1}{\sqrt5}, \;\; B = -\frac{1}{\sqrt5}.$$

**Fórmula de Binet:**

$$F_n = \frac{\varphi^n - \hat\varphi^n}{\sqrt5} = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^n - \left(\frac{1-\sqrt5}{2}\right)^n\right].$$

---

**Ejemplo 1.** Probar que $F_{m+n} = F_m F_{n+1} + F_{m-1} F_n$ para $m \geq 1$.

Se verifica por inducción sobre $n$ usando la recurrencia. Para $n=0$: $F_m=F_m\cdot1+F_{m-1}\cdot0$ ✓. Para $n=1$: $F_{m+1}=F_m F_2+F_{m-1}F_1=F_m+F_{m-1}$ ✓. El paso inductivo usa que $F_{m+n}=F_{m+n-1}+F_{m+n-2}$ y la hipótesis para $n-1$ y $n-2$. $\square$

---

**Ejemplo 2.** (Divisibilidad) Probar que $F_m \mid F_{mk}$ para todo $m, k \geq 1$.

Usando la identidad anterior: $F_{m+n}=F_m F_{n+1}+F_{m-1}F_n$. Fijado $m$, si $F_m \mid F_n$, entonces $F_m \mid F_{m+n}$. Por inducción sobre $k$, $F_m \mid F_{mk}$. $\square$

---

**Ejemplo 3.** (Recurrencia de orden 2 general) Resolver $a_n = 5a_{n-1}-6a_{n-2}$ con $a_0=1$, $a_1=2$.

Polinomio: $r^2-5r+6=(r-2)(r-3)=0$. Raíces: $r_1=2$, $r_2=3$.

Solución: $a_n=A\cdot2^n+B\cdot3^n$.

Condiciones iniciales: $A+B=1$ y $2A+3B=2$. Resolviendo: $A=1$, $B=0$.

**$a_n=2^n$.** *(Se verifica: $a_n=5\cdot2^{n-1}-6\cdot2^{n-2}=2^{n-2}(10-6)=2^{n-2}\cdot4=2^n$ ✓.)* $\square$

---

**Ejemplo 4.** (Raíz doble) Resolver $a_n = 4a_{n-1}-4a_{n-2}$ con $a_0=1$, $a_1=4$.

Polinomio: $r^2-4r+4=(r-2)^2=0$. Raíz doble $r=2$.

Solución: $a_n=(A+Bn)\cdot2^n$.

Con $a_0=1$: $A=1$. Con $a_1=4$: $(1+B)\cdot2=4$, así $B=1$.

**$a_n=(1+n)\cdot2^n$.** $\square$

---

**Ejemplo 5.** (Suma telescópica) Calcular $\sum_{k=1}^n F_k$.

Usando la identidad $F_{k+2}-F_{k+1}=F_k$:

$$\sum_{k=1}^n F_k = \sum_{k=1}^n (F_{k+2}-F_{k+1}) = F_{n+2}-F_2 = F_{n+2}-1. \;\square$$

---

**Ejemplo 6.** (Olimpiada) Probar que $F_{n+1}^2-F_n F_{n+2} = (-1)^n$ (identidad de Cassini).

Por la fórmula de Binet: con $\varphi\hat\varphi = -1$ y $\varphi-\hat\varphi=\sqrt5$:

$$F_{n+1}^2-F_nF_{n+2} = \frac{(\varphi^{n+1}-\hat\varphi^{n+1})^2-(\varphi^n-\hat\varphi^n)(\varphi^{n+2}-\hat\varphi^{n+2})}{5}.$$

Expandiendo el numerador: $(\varphi\hat\varphi)^n(\varphi^2\hat\varphi^{-2}-2+\hat\varphi^2\varphi^{-2})-\ldots$... el cálculo directo reduce a $(\varphi\hat\varphi)^n(\hat\varphi-\varphi)^2/\text{algo}=(-1)^n$. Más elegante por inducción: $F_2^2-F_1F_3=1-2=-1=(-1)^1$ ✓; y $F_{n+2}^2-F_{n+1}F_{n+3}=-(F_{n+1}^2-F_nF_{n+2})$ por la recurrencia. $\square$

## Aplicaciones

**Periodicidad módulo $m$ (número de Pisano).** La sucesión $F_n \pmod m$ es periódica. El periodo se llama $\pi(m)$. Conocer esta periodicidad permite calcular $F_n \pmod m$ para $n$ muy grande.

**Recurrencias en olimpiada.** Problemas típicos: (a) dado que $a_n$ satisface una recurrencia, probar que ciertos $a_n$ son divisibles por un primo; (b) calcular $\sum a_n$ por sumas telescópicas; (c) hallar $a_n \pmod k$ para todo $n$.

**Identificación de recurrencias.** En problemas sobre sucesiones definidas implícitamente, a veces la ecuación característica permite identificar la forma cerrada. El primer paso es siempre calcular varios términos y encontrar el patrón.

## Observación

**Las condiciones iniciales determinan la solución única.** Una recurrencia lineal de orden $k$ más $k$ condiciones iniciales tiene exactamente una solución. Si encuentras una sucesión que satisface la recurrencia y las condiciones iniciales, es la solución.

**Fibonacci en divisibilidad.** La propiedad $F_m \mid F_n \Leftrightarrow m \mid n$ (para $m\geq1$, $n\geq1$, con $m=1$ trivialmente) se usa frecuentemente. Es consecuencia de $\gcd(F_m, F_n)=F_{\gcd(m,n)}$.

**Extensión a recurrencias no homogéneas.** Si la recurrencia es $a_n = p\,a_{n-1}+q\,a_{n-2}+f(n)$ (término forzado), la solución es la suma de la solución homogénea más una particular. Para $f(n)=c$ (constante), la particular es $c/(1-p-q)$ si $1-p-q\neq0$.

## Problemas relacionados

- **(Clásico)** Probar que $\gcd(F_m, F_n) = F_{\gcd(m,n)}$.

- **(Clásico)** Probar que $F_n^2 + F_{n+1}^2 = F_{2n+1}$.

- **(OMG-nivel)** Una sucesión satisface $a_1=1$, $a_2=3$, $a_{n}=4a_{n-1}-a_{n-2}$. Demostrar que $a_n^2-2$ no es un cuadrado perfecto para ningún $n\geq1$.

- **(Clásico)** Sea $a_n = 2a_{n-1}+1$ con $a_0=0$. Hallar $a_n$ en forma cerrada y probar que si $n+1$ es potencia de $2$, entonces $a_n+1$ también.

- **(Clásico)** Sea $a_n = a_{n-1}+a_{n-2}+a_{n-3}$ con $a_0=a_1=a_2=1$. Demostrar que $3 \mid a_n$ si y solo si $3\mid n$.
