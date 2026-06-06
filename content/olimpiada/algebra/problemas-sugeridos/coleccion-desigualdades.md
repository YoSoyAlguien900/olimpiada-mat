---
title: "Colección de desigualdades"
preview: "Problemas de desigualdades seleccionados de IMO, OIM, OMG y otras olimpiadas. Organizado desde AM-GM básico hasta Schur, Muirhead y SOS. El área más rica en técnicas del álgebra olímpico."
dificultad: nacional
tags: [coleccion, desigualdades, am-gm, cauchy-schwarz, jensen, schur, muirhead]
prerequisites: [am-gm, cauchy-schwarz, convexidad-jensen, schur, muirhead]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de problemas de desigualdades ordenados por nivel y técnica principal. Los niveles de dificultad son aproximados; un mismo problema puede resolverse con varias técnicas.

---

## Nivel iniciación: AM-GM básico

**1.** Para $a, b > 0$, demostrar que $a + b \geq 2\sqrt{ab}$.

---

**2.** Para $a, b, c > 0$, demostrar que $a^2 + b^2 + c^2 \geq ab + bc + ca$.

*Hint: escribir como suma de cuadrados.*

---

**3.** Para $a, b > 0$, demostrar que $\dfrac{a}{b} + \dfrac{b}{a} \geq 2$.

---

**4.** Para $a, b, c > 0$, demostrar que $(a+b)(b+c)(c+a) \geq 8abc$.

---

**5.** Para $x, y, z > 0$ con $xyz = 1$, demostrar que $x + y + z \geq 3$.

---

**6. (Clásico)** Para $a, b, c > 0$, demostrar que

$$\frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2}{\frac{1}{a}+\frac{1}{b}}.$$

(La triple desigualdad entre media aritmética, geométrica y armónica.)

---

**7. (OMG 2018/P1)** Sean $a, b \geq 1$ naturales. Sea $D = \gcd(a,b)$ y $M = \text{lcm}(a,b)$. Demostrar que $D^2 + M^2 \geq a^2 + b^2$.

*Hint: escribir $a = Dx$, $b = Dy$ con $\gcd(x,y)=1$; entonces $M = Dxy$.*

---

## Nivel regional: desigualdades simétricas

**8.** Para $a, b, c > 0$, demostrar la desigualdad de Nesbitt:

$$\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \geq \frac{3}{2}.$$

*Hint: sumar 1 a cada fracción y aplicar AM-GM, o usar Cauchy-Engel.*

---

**9.** Para $a, b, c > 0$, demostrar que $a^3 + b^3 + c^3 \geq 3abc$.

*Hint: AM-GM en tres términos, o factorizar $a^3+b^3+c^3-3abc$.*

---

**10.** Para $a, b, c > 0$, demostrar que $a^2b + b^2c + c^2a + ab^2 + bc^2 + ca^2 \geq 6abc$.

---

**11.** Para $a, b, c > 0$ con $a + b + c = 1$, demostrar que

$$\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \geq 9.$$

---

**12. (Cauchy-Schwarz)** Para $a, b, c, d > 0$, demostrar que

$$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{d} + \frac{d^2}{a} \geq a + b + c + d.$$

---

**13.** Para $x, y, z > 0$ con $x^2 + y^2 + z^2 = 1$, demostrar que

$$\frac{x}{1-x^2} + \frac{y}{1-y^2} + \frac{z}{1-z^2} \geq \frac{3\sqrt{3}}{2}.$$

*Hint: $1-x^2=y^2+z^2\geq2yz$, luego usa AM-GM para acotar $x/2yz$ y $\sum x/yz$.*

---

**14. (IMO 1995/P2)** Para $a, b, c > 0$ con $abc = 1$, demostrar que

$$\frac{1}{a^3(b+c)} + \frac{1}{b^3(c+a)} + \frac{1}{c^3(a+b)} \geq \frac{3}{2}.$$

*(Resolución completa disponible en Problemas resueltos.)*

---

## Nivel nacional: Jensen, Schur y sustituciones

**15. (Jensen)** Para $a, b, c > 0$ con $a + b + c = 3$, demostrar que

$$a^a \cdot b^b \cdot c^c \geq 1.$$

*Hint: tomar logaritmos y aplicar Jensen a $f(x) = x\ln x$ (convexa).*

---

**16.** Para $a, b, c > 0$ con $a + b + c = 1$, demostrar que

$$\sqrt{a + b} + \sqrt{b + c} + \sqrt{c + a} \geq 2.$$

*Hint: Cauchy-Schwarz o Jensen con $f(x)=\sqrt{x}$ (cóncava).*

---

**17. (Schur $t=1$)** Para $a, b, c \geq 0$, demostrar que

$$a^3 + b^3 + c^3 + 3abc \geq a^2b + a^2c + b^2a + b^2c + c^2a + c^2b.$$

*Esta es la desigualdad de Schur para $t=1$.*

---

**18. (Schur aplicado)** Para $a, b, c \geq 0$ con $a + b + c = 1$, demostrar que

$$a^2 + b^2 + c^2 + 2 \geq 5(ab + bc + ca) - 2abc - \frac{1}{3}.$$

*Hint: usar la forma de Schur en $e_1, e_2, e_3$ junto con $e_1=1$.*

---

**19.** Para $a, b, c \geq 0$ con $a + b + c = 3$, demostrar que

$$\frac{a}{b^2+1} + \frac{b}{c^2+1} + \frac{c}{a^2+1} \geq \frac{3}{2}.$$

*Hint: acotar $\frac{a}{b^2+1}\geq\frac{a(3-b)}{4}$ por AM-GM en denominador, y sumar.*

---

**20. (Ravi)** Para $a, b, c$ lados de un triángulo (con $a+b>c$ etc.), demostrar que

$$\frac{a}{b+c-a} + \frac{b}{c+a-b} + \frac{c}{a+b-c} \geq 3.$$

*Hint: sustitución de Ravi $a=y+z$, $b=z+x$, $c=x+y$ con $x,y,z>0$; después Nesbitt.*

---

**21. (OIM 1991/P4)** Para $a, b, c$ lados de un triángulo, demostrar que

$$a^2b(a-b) + b^2c(b-c) + c^2a(c-a) \geq 0.$$

---

## Nivel internacional: TLT, Muirhead y técnicas avanzadas

**22.** Para $a, b, c > 0$ con $a + b + c = 3$, demostrar que

$$a^2 + b^2 + c^2 + \frac{1}{a} + \frac{1}{b} + \frac{1}{c} \geq 6.$$

*Hint: TLT sobre $f(x) = x^2 + 1/x$ en $x_0 = 1$.*

---

**23. (Muirhead)** Para $a, b, c > 0$ con $a + b + c = 1$, demostrar que

$$a^3 + b^3 + c^3 \geq a^2b + b^2c + c^2a.$$

*Hint: $[3,0,0]\succ[2,1,0]$, Muirhead. Observar que no es simétrica la desigualdad original — ¿aplica Muirhead?*

---

**24.** Para $a, b, c > 0$ con $abc = 1$, demostrar que

$$\frac{1}{1+a+ab} + \frac{1}{1+b+bc} + \frac{1}{1+c+ca} = 1.$$

*(Identidad, no desigualdad. Muy útil en problemas de desigualdades como valor de referencia.)*

---

**25. (IMO 2000/P2)** Para $a, b, c > 0$ con $abc = 1$, demostrar que

$$\left(a - 1 + \frac{1}{b}\right)\left(b - 1 + \frac{1}{c}\right)\left(c - 1 + \frac{1}{a}\right) \leq 1.$$

*(Resolución completa disponible en Problemas resueltos.)*

---

**26. (IMO 2001/P2)** Para $a, b, c > 0$, demostrar que

$$\frac{a}{\sqrt{a^2+8bc}} + \frac{b}{\sqrt{b^2+8ca}} + \frac{c}{\sqrt{c^2+8ab}} \geq 1.$$

*(Resolución completa disponible en Problemas resueltos.)*

---

**27. (ISL 2000/A1)** Para $a, b, c > 0$, demostrar que

$$\left(\frac{ab+bc+ca}{a^2+b^2+c^2}\right)^2 + \left(\frac{ab+bc+ca}{(a+b+c)^2}\right)^2 \leq 2 \cdot \frac{ab+bc+ca}{a^2+b^2+c^2}.$$

---

**28. (Clásico — Stolarsky)** Para $a, b, c > 0$ con $a^2+b^2+c^2=3$, demostrar que

$$a^5 + b^5 + c^5 \geq a^3 + b^3 + c^3 \geq a + b + c \geq \sqrt{3(ab+bc+ca)} \geq 3.$$

---

## Problemas de dificultad abierta

**29. (SOS)** Para $a, b, c > 0$, demostrar que

$$2(a^6+b^6+c^6) \geq a^4(b^2+c^2) + b^4(c^2+a^2) + c^4(a^2+b^2).$$

*Hint: SOS con términos $(a^2-b^2)^2(a^2+b^2)$, etc.*

---

**30. (Putnam 2003/B5)** Para $a_1,\ldots,a_n\geq0$ con $a_1+\cdots+a_n=1$, demostrar que

$$\sum_{1\leq i<j\leq n}a_ia_j(a_i+a_j) \leq \frac{1}{3} - \frac{2}{3}\sum_{i=1}^n a_i^3.$$

*Hint: relacionar $\sum_{i<j}a_ia_j(a_i+a_j)=\sum_i a_i^2-\sum_i a_i^3$ y usar $(\sum a_i)^2=1$.*
