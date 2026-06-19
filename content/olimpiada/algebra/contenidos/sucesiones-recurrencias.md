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

**Ejemplo 3 (raíces distintas).** Resolver $a_n = 5a_{n-1}-6a_{n-2}$ con $a_0=1$, $a_1=2$.

*La idea.* El método es mecánico: escribir el polinomio característico, factorizarlo, y montar la combinación $A r_1^n+B r_2^n$. Las constantes $A,B$ son lo único que depende de las condiciones iniciales, y salen de un sistema $2\times2$.

**Solución.** El polinomio característico es $r^2-5r+6=(r-2)(r-3)=0$, con raíces $r_1=2$, $r_2=3$. La solución general es

$$a_n=A\cdot2^n+B\cdot3^n.$$

Imponemos las condiciones iniciales: de $a_0=1$, $A+B=1$; de $a_1=2$, $2A+3B=2$. Restando la primera multiplicada por $2$ de la segunda: $B=0$, y entonces $A=1$. Por tanto

$$a_n=2^n.$$

*(Comprobación: $5\cdot2^{n-1}-6\cdot2^{n-2}=2^{n-2}(10-6)=2^{n-2}\cdot4=2^n$. ✓)* $\square$

*La moraleja.* Toda recurrencia lineal homogénea de coeficientes constantes se resuelve igual: característico → raíces → combinación → ajustar constantes. No hay que adivinar nada.

---

**Ejemplo 4 (raíz doble).** Resolver $a_n = 4a_{n-1}-4a_{n-2}$ con $a_0=1$, $a_1=4$.

*La idea.* Cuando el característico tiene una raíz **doble** $r$, las dos soluciones $r^n$ no bastan (serían la misma); el segundo modo independiente es $n\,r^n$. Por eso la forma general es $(A+Bn)r^n$.

**Solución.** El polinomio característico es $r^2-4r+4=(r-2)^2=0$, con raíz doble $r=2$. La solución general es

$$a_n=(A+Bn)\cdot2^n.$$

De $a_0=1$ obtenemos $A=1$. De $a_1=4$: $(1+B)\cdot2=4$, luego $B=1$. Por tanto

$$a_n=(1+n)\cdot2^n. \;\square$$

*La moraleja.* Una raíz de multiplicidad $m$ aporta los modos $r^n,\,nr^n,\dots,n^{m-1}r^n$. El factor $n$ es lo que distingue el caso de raíz repetida del de raíces distintas.

---

**Ejemplo 5.** (Suma telescópica) Calcular $\sum_{k=1}^n F_k$.

Usando la identidad $F_{k+2}-F_{k+1}=F_k$:

$$\sum_{k=1}^n F_k = \sum_{k=1}^n (F_{k+2}-F_{k+1}) = F_{n+2}-F_2 = F_{n+2}-1. \;\square$$

---

**Ejemplo 6 (identidad de Cassini).** Probar que $F_{n+1}^2-F_n F_{n+2} = (-1)^n$ para todo $n\geq0$.

*La idea.* La cantidad $D_n=F_{n+1}^2-F_nF_{n+2}$ cambia de signo al avanzar un paso. Si demostramos que $D_{n+1}=-D_n$, entonces $D_n$ es una progresión geométrica de razón $-1$, y basta el valor inicial.

**Solución.** Sea $D_n=F_{n+1}^2-F_nF_{n+2}$. Usamos $F_{n+2}=F_{n+1}+F_n$ para relacionar $D_{n+1}$ con $D_n$:

$$D_{n+1}=F_{n+2}^2-F_{n+1}F_{n+3}=F_{n+2}^2-F_{n+1}(F_{n+2}+F_{n+1})=F_{n+2}^2-F_{n+1}F_{n+2}-F_{n+1}^2.$$

Sacamos factor $F_{n+2}$ en los dos primeros términos: $F_{n+2}(F_{n+2}-F_{n+1})-F_{n+1}^2$. Pero $F_{n+2}-F_{n+1}=F_n$, así que

$$D_{n+1}=F_{n+2}F_n-F_{n+1}^2=-\big(F_{n+1}^2-F_nF_{n+2}\big)=-D_n.$$

Por tanto $D_n=(-1)^n D_0$. Como $D_0=F_1^2-F_0F_2=1-0=1$, concluimos $D_n=(-1)^n$. $\square$

*La moraleja.* Para identidades del tipo "$\,\cdots=(-1)^n$", busca una relación $D_{n+1}=-D_n$: convierte la identidad en una recurrencia trivial y reduce todo a comprobar el caso base.

## Aplicaciones

**Periodicidad módulo $m$ (número de Pisano).** La sucesión $F_n \pmod m$ es periódica. El periodo se llama $\pi(m)$. Conocer esta periodicidad permite calcular $F_n \pmod m$ para $n$ muy grande.

**Recurrencias en olimpiada.** Problemas típicos: (a) dado que $a_n$ satisface una recurrencia, probar que ciertos $a_n$ son divisibles por un primo; (b) calcular $\sum a_n$ por sumas telescópicas; (c) hallar $a_n \pmod k$ para todo $n$.

**Identificación de recurrencias.** En problemas sobre sucesiones definidas implícitamente, a veces la ecuación característica permite identificar la forma cerrada. El primer paso es siempre calcular varios términos y encontrar el patrón.

## Observación

**Las condiciones iniciales determinan la solución única.** Una recurrencia lineal de orden $k$ más $k$ condiciones iniciales tiene exactamente una solución. Si encuentras una sucesión que satisface la recurrencia y las condiciones iniciales, es la solución.

**Fibonacci en divisibilidad.** La propiedad $F_m \mid F_n \Leftrightarrow m \mid n$ (para $m\geq1$, $n\geq1$, con $m=1$ trivialmente) se usa frecuentemente. Es consecuencia de $\gcd(F_m, F_n)=F_{\gcd(m,n)}$.

**Extensión a recurrencias no homogéneas.** Si la recurrencia es $a_n = p\,a_{n-1}+q\,a_{n-2}+f(n)$ (término forzado), la solución es la suma de la solución homogénea más una particular. Para $f(n)=c$ (constante), la particular es $c/(1-p-q)$ si $1-p-q\neq0$.

## Problemas relacionados

**Problema 1 (clásico).** Probar que $F_n^2 + F_{n+1}^2 = F_{2n+1}$.

[[pista]]

Usa la identidad de adición $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$ del Ejemplo 1, con la elección $m=n+1$.

[[/pista]]

[[solución]]

Partimos de la identidad de adición $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$ (Ejemplo 1) y tomamos $m=n+1$:

$$F_{2n+1}=F_{(n+1)+n}=F_{n+1}\,F_{n+1}+F_{n}\,F_{n}=F_{n+1}^2+F_n^2. \;\blacksquare$$

[[/solución]]

**Problema 2 (clásico).** Probar que $F_n$ es par si y solo si $3\mid n$.

[[pista]]

Calcula la sucesión de Fibonacci módulo $2$: $0,1,1,0,1,1,\ldots$ ¿Cada cuánto se repite el $0$?

[[/pista]]

[[solución]]

Trabajamos módulo $2$. La recurrencia $F_n\equiv F_{n-1}+F_{n-2}\pmod 2$ con $F_0=0,F_1=1$ da

$$0,\,1,\,1,\,0,\,1,\,1,\,0,\,1,\,1,\,\ldots$$

El patrón $(0,1,1)$ se repite con periodo $3$ (en cuanto reaparecen dos términos consecutivos $0,1$, todo se repite). Los ceros caen exactamente en las posiciones $n\equiv0\pmod3$. Por tanto $F_n$ es par $\iff 3\mid n$. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** Sea $a_n = 2a_{n-1}+1$ con $a_0=0$. Hallar $a_n$ en forma cerrada y deducir que $a_n+1$ es siempre una potencia de $2$.

[[pista]]

Es una recurrencia no homogénea. Suma $1$ a ambos lados: $a_n+1=2(a_{n-1}+1)$, así que $b_n=a_n+1$ es una PG.

[[/pista]]

[[solución]]

Sumando $1$ a ambos lados, $a_n+1=2a_{n-1}+2=2(a_{n-1}+1)$. Definiendo $b_n=a_n+1$, queda $b_n=2b_{n-1}$ con $b_0=a_0+1=1$: una progresión geométrica. Por tanto $b_n=2^n$, es decir

$$a_n=2^n-1.$$

En consecuencia $a_n+1=2^n$, que es una potencia de $2$ para todo $n$. $\blacksquare$

[[/solución]]

**Problema 4 (nivel nacional).** Una sucesión satisface $a_1=1$, $a_2=3$, $a_n=4a_{n-1}-a_{n-2}$. Demostrar que $a_n^2-2$ no es un cuadrado perfecto para ningún $n\geq1$.

[[pista]]

La sucesión crece ($1,3,11,41,\ldots$). Para $n\geq2$, intenta encajar $a_n^2-2$ estrictamente entre dos cuadrados consecutivos.

[[/pista]]

[[solución]]

La sucesión es $1,3,11,41,153,\ldots$, estrictamente creciente, así que $a_n\geq3\geq2$ para $n\geq2$.

Para $n\geq2$ comparamos $a_n^2-2$ con los cuadrados vecinos de $a_n$:

$$(a_n-1)^2=a_n^2-2a_n+1\;<\;a_n^2-2\;<\;a_n^2,$$

donde la desigualdad de la izquierda equivale a $-2a_n+1<-2$, es decir $2a_n>3$, cierta porque $a_n\geq2$. Así $a_n^2-2$ está **estrictamente** entre dos cuadrados consecutivos $(a_n-1)^2$ y $a_n^2$, luego no puede ser un cuadrado perfecto.

Para $n=1$: $a_1^2-2=-1$, que tampoco es un cuadrado perfecto. Por tanto $a_n^2-2$ no es cuadrado perfecto para ningún $n\geq1$. $\blacksquare$

[[/solución]]

**Problema 5 (nivel nacional).** Probar que $\gcd(F_m, F_n) = F_{\gcd(m,n)}$.

[[pista]]

Apóyate en dos hechos: $\gcd(F_k,F_{k+1})=1$, y la identidad de adición, que da $\gcd(F_m,F_n)=\gcd(F_m,F_{n-m})$. Es el algoritmo de Euclides trasladado a los índices.

[[/pista]]

[[solución]]

*Primer hecho:* $\gcd(F_k,F_{k+1})=1$ para todo $k$, por inducción: $\gcd(F_k,F_{k+1})=\gcd(F_k,F_{k+1}-F_k)=\gcd(F_k,F_{k-1})$, que se reduce hasta $\gcd(F_1,F_2)=1$.

*Paso clave:* por la identidad de adición $F_{n}=F_{(n-m)+m}=F_{n-m}F_{m+1}+F_{n-m-1}F_m$. Como $F_m$ divide al segundo sumando,

$$\gcd(F_m,F_n)=\gcd\!\big(F_m,\;F_{n-m}F_{m+1}\big).$$

Y como $\gcd(F_m,F_{m+1})=1$, el factor $F_{m+1}$ no aporta divisores comunes, de modo que $\gcd(F_m,F_n)=\gcd(F_m,F_{n-m})$.

*Conclusión:* la operación $n\mapsto n-m$ sobre los índices es exactamente el algoritmo de Euclides. Iterándolo, los índices $(m,n)$ se reducen a $(\gcd(m,n),0)$, y como $F_0=0$,

$$\gcd(F_m,F_n)=F_{\gcd(m,n)}. \;\blacksquare$$

[[/solución]]
