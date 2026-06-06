---
title: "Colección de polinomios y sucesiones"
preview: "Problemas sobre polinomios (raíces, Vieta, divisibilidad), sucesiones recurrentes y álgebra combinatoria. Nivel: regional a internacional."
dificultad: nacional
tags: [coleccion, polinomios, vieta, recurrencias, sucesiones, factorizacion]
prerequisites: [polinomios, sucesiones-recurrencias]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de problemas sobre polinomios y sucesiones organizados por tema y dificultad. Los problemas de polinomios en olimpiada suelen mezclar álgebra con teoría de números (divisibilidad, enteros).

---

## Raíces y factorización

**1.** Factorizar completamente en $\mathbb{Z}[x]$:

(a) $x^4 + 4$ *(Sophie Germain: $(x^2+2)^2 - (2x)^2$)*

(b) $x^4 + x^2 + 1$ *(Hint: $=(x^2+x+1)(x^2-x+1)$)*

(c) $a^3 + b^3 + c^3 - 3abc$ *(Factorizar como $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$)*

---

**2.** Sea $P(x) = x^3 + ax^2 + bx + c$ con raíces enteras $r, s, t$. Expresar $r^3 + s^3 + t^3$ en términos de $a, b, c$.

*Usar Vieta: $r+s+t=-a$, $rs+rt+st=b$, $rst=-c$. Aplicar la identidad de Newton $p_3=e_1p_2-e_2p_1+3e_3$.*

---

**3.** Sea $P(x)$ un polinomio con coeficientes enteros. Demostrar que si $P(a)=0$ y $P(b)=2$ para enteros $a\neq b$, entonces $|a-b|\leq2$.

*Hint: $(a-b)\mid P(a)-P(b)=0-2=-2$.*

---

**4.** Demostrar que el polinomio $P(x)=x^4+3x^3+6x^2+9x+12$ no tiene raíces racionales.

*Hint: por el criterio de la raíz racional, las únicas candidatas son $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12$. Evaluar y descartar.*

---

**5. (Polinomios con raíces en PA)** Sea $P(x)=x^3+ax+b$ con raíces reales $r,s,t$ en progresión aritmética. Demostrar que la raíz del medio es cero.

*Hint: $r+s+t=0$ (coeficiente de $x^2$ nulo), y si están en PA: $r=s-d$, $t=s+d$, así $3s=0$.*

---

**6.** Hallar todos los polinomios $P(x)$ con coeficientes reales tales que $(x-1)P(x+1)=(x+2)P(x)$ para todo $x$.

*Hint: evaluar en $x=1$ y $x=-2$. Proponer $P(x)=c\cdot x(x+1)$. Verificar.*

---

## Vieta y relaciones entre raíces

**7.** Sea $P(x)=x^3-6x^2+11x-6$ con raíces $r,s,t$. Calcular:

(a) $r^2+s^2+t^2$

(b) $r^3+s^3+t^3$

(c) $\dfrac{1}{r}+\dfrac{1}{s}+\dfrac{1}{t}$

*Usando Vieta: $r+s+t=6$, $rs+rt+st=11$, $rst=6$.*

---

**8.** Sean $r,s,t$ raíces de $x^3+px+q=0$. Hallar, en términos de $p$ y $q$:

(a) $(r+s)(s+t)(t+r)$

(b) $r^4+s^4+t^4$

*Hint: $(r+s)(s+t)(t+r) = (r+s+t)(rs+st+tr)-rst = 0\cdot p - (-q) = q$.*

---

**9. (Simétricos no estándar)** Sean $a, b, c$ raíces de $x^3-3x+1=0$. Calcular el valor de

$$a^{10}+b^{10}+c^{10}.$$

*Hint: usar relaciones de recurrencia de Newton $p_k = e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$. Aquí $e_1=0$, $e_2=-3$, $e_3=-1$, así $p_k=3p_{k-2}+p_{k-3}$ con $p_0=3,p_1=0,p_2=6$.*

---

**10. (IMO 2000/P5)** ¿Puede el polinomio $x^n + 5x^{n-1} + 3$ (con $n\geq1$) escribirse como producto de dos polinomios con coeficientes enteros, ambos de grado $\geq1$?

*Respuesta: no. Técnica: criterio de Eisenstein modificado, o evaluación módulo un primo conveniente.*

---

## Divisibilidad de polinomios y enteros

**11.** Demostrar que $n^5 - n$ es divisible por $30$ para todo entero $n$.

*Hint: $n^5-n=n(n-1)(n+1)(n^2+1)$. Divisibilidad por $2,3,5$ por separado.*

---

**12.** Demostrar que para todo entero positivo $n$:

$$3^{2^n} + 1 \equiv 2 \pmod{2^{n+3}}.$$

*Hint: inducción, con $3^{2^{n+1}}+1=(3^{2^n})^2+1=(3^{2^n}+1)^2-2\cdot3^{2^n}$.*

---

**13.** Sea $P(x)$ un polinomio con coeficientes enteros. Para $a,b\in\mathbb{Z}$ con $a\neq b$, demostrar que $(a-b)\mid P(a)-P(b)$.

*Hint: $x^k-y^k=(x-y)(x^{k-1}+\cdots+y^{k-1})$.*

---

**14.** Hallar todos los enteros $n$ para los que $n^2+1$ divide a $n^3+5n^2+1$.

*Hint: $n^3+5n^2+1=n(n^2+1)+5n^2+1-n+n=n(n^2+1)+5(n^2+1)-5+n=n(n^2+1)+5(n^2+1)+(n-5)$. Así $(n^2+1)\mid(n-5)$. Como $|n-5|\leq n^2+1$ para $n$ grande, hay casos finitos.*

---

**15.** Demostrar que $\gcd(n^3+1, n+1)$ es $1$ o $n+1$.

*Hint: $n^3+1=(n+1)(n^2-n+1)$.*

---

## Sucesiones recurrentes

**16.** Sea $(a_n)$ definida por $a_1=1$, $a_2=3$, $a_{n+2}=4a_{n+1}-3a_n$. Hallar una fórmula cerrada para $a_n$.

*Ecuación característica: $r^2=4r-3$, raíces $r=1$ y $r=3$. Así $a_n=A+B\cdot3^n$; con condiciones iniciales: $a_n=\frac{3^n-1}{2}+1=\frac{3^n+1}{2}$.*

---

**17.** Sea $(F_n)$ la sucesión de Fibonacci con $F_1=F_2=1$, $F_{n+2}=F_{n+1}+F_n$. Demostrar que:

(a) $F_n^2-F_{n-1}F_{n+1}=(-1)^{n-1}$ (identidad de Cassini).

(b) $\gcd(F_m,F_n)=F_{\gcd(m,n)}$.

(c) $F_{2n}=F_n(2F_{n+1}-F_n)$.

---

**18.** La sucesión $(a_n)$ satisface $a_1=2$, $a_2=5$, $a_{n+2}=5a_{n+1}-6a_n$. Probar que $a_n=2^n+3^n$ para todo $n\geq1$.

---

**19. (Recurrencia de raíz doble)** Sea $(a_n)$ definida por $a_1=0$, $a_2=1$, $a_{n+2}=4a_{n+1}-4a_n$. Hallar $a_n$.

*Raíz doble $r=2$. Solución general: $a_n=(A+Bn)\cdot2^n$. Con condiciones iniciales: $a_n=(n-1)2^{n-1}$.*

---

**20.** Sea $x_0=0$, $x_1=1$ y $x_{n+1}=\dfrac{x_n^2+1}{x_{n-1}+1}$ para $n\geq1$. Demostrar que $x_n$ es entero para todo $n$.

---

## Polinomios con condiciones especiales

**21.** Hallar todos los polinomios $P\in\mathbb{R}[x]$ con $P(x)^2-P(x^2)=x^{2025}$.

*Hint: comparar grados: $\deg(P)^2=\deg(P^2)$, $\deg P^2=2\deg P$, $\deg P(x^2)=2\deg P$. Para que $P(x)^2-P(x^2)$ tenga grado $2025$ impar, es necesario...*

---

**22.** Sea $P(x)$ un polinomio con coeficientes reales no negativos. Probar que para $a,b>0$ con $ab=1$:

$$P(a)P(b)\geq P(1)^2.$$

*Hint: si $P(x)=\sum c_kx^k$ con $c_k\geq0$, usar AM-GM: $c_ia^i c_jb^j\geq c_ic_j$ para $ab=1$.*

---

**23. (OIM 2006/P5)** Sea $P(x)$ un polinomio de grado $n$ con coeficientes enteros tal que $P(1)=P(2)=\cdots=P(n-1)=0$ y $P(0)=n!-1$. Hallar $P(n)$.

*Técnica: $P(x)=c(x-1)(x-2)\cdots(x-(n-1))+R(x)$ para algún resto... Más directamente: $P(x)-((x-1)(x-2)\cdots(x-(n-1))\cdot Q(x))=n!-1$ con las condiciones dadas.*

---

**24. (Clásico)** Demostrar que para todo polinomio $P(x)$ de grado $n$ con coeficientes enteros, el número de enteros $m$ tales que $P(m)=\pm1$ es a lo sumo $n+2$ si $n\geq2$.

---

**25. (IMO 2006/P5)** Sea $P(x)$ un polinomio de grado $n>1$ con coeficientes enteros. Demostrar que existe un entero positivo $k$ tal que $P(k)$, $P(P(k))$, $P(P(P(k)))$, $\ldots$ son todos distintos.

---

## Polinomios y teoría de números

**26.** Demostrar que el polinomio $\Phi_4(x)=x^4+1$ no es irreducible sobre $\mathbb{Z}_p$ para ningún primo $p$.

*(Sorprendente: un polinomio irreducible sobre $\mathbb{Z}$ puede ser reducible módulo todo primo.)*

---

**27. (Criterio de Eisenstein — generalizaciones)** Usar Eisenstein con $p=2$ para demostrar que $x^4+2x^3+3x^2+4x+2$ es irreducible en $\mathbb{Q}[x]$.

---

**28.** Para $a,b,c$ enteros con $a\neq0$, demostrar que el polinomio $ax^2+bx+c$ tiene al más dos raíces módulo $p$ para cualquier primo $p$.

---

**29. (OIM 1997/P5)** Sea $P(x)=x^3+x-1$ y sean $p,q,r$ sus raíces (en $\mathbb{C}$). Calcular el valor de

$$\frac{p(q-r)^2+q(r-p)^2+r(p-q)^2}{p+q+r}.$$

*Hint: $p+q+r=0$, $pq+pr+qr=1$, $pqr=1$. Expandir numéricamente.*

---

**30. (Creación — nivel internacional)** Sea $P(x)$ un polinomio no constante con coeficientes enteros positivos y $P(0)=1$. Demostrar que la sucesión $a_n=P(P(\cdots P(0)\cdots))$ ($n$ aplicaciones de $P$) satisface que $\gcd(a_m,a_n)=a_{\gcd(m,n)}$ para todos $m,n\geq0$.
