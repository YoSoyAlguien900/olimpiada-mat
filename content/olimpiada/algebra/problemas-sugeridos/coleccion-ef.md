---
title: "Colección de ecuaciones funcionales"
preview: "Problemas de ecuaciones funcionales desde Cauchy básica hasta IMO. Organizado por técnica: sustitución directa, inyectividad/sobreyectividad, extensión de dominios, reducción a Cauchy."
dificultad: nacional
tags: [coleccion, ecuaciones-funcionales, cauchy, inyectividad, sobreyectividad]
prerequisites: [ecuaciones-funcionales, busqueda-ef]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de ecuaciones funcionales organizada por dificultad y técnica principal. Para cada problema se indica la técnica esperada. La verificación de que la solución candidata satisface la ecuación es siempre obligatoria.

---

## Nivel regional: Cauchy y variantes directas

**1.** Hallar todas $f:\mathbb{Q}\to\mathbb{Q}$ con $f(x+y)=f(x)+f(y)$ para todo $x,y\in\mathbb{Q}$.

*Técnica: extensión $\mathbb{N}\to\mathbb{Z}\to\mathbb{Q}$. Solución: $f(x)=cx$ con $c\in\mathbb{Q}$.*

---

**2.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ continuas con $f(x+y)=f(x)+f(y)$ para todo $x,y\in\mathbb{R}$.

*Técnica: igual que el anterior, luego extender por densidad de $\mathbb{Q}$ en $\mathbb{R}$. Solución: $f(x)=cx$ con $c\in\mathbb{R}$.*

---

**3.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x+y)=f(x)f(y)$ para todo $x,y\in\mathbb{R}$, siendo $f$ continua.

*Técnica: fijar $f(0)$, deducir $f(n)=f(1)^n$, extender a $\mathbb{Q}$, luego $\mathbb{R}$. Solución: $f\equiv0$ o $f(x)=e^{cx}$ con $c\in\mathbb{R}$.*

---

**4.** Hallar todas $f:\mathbb{Q}\to\mathbb{Q}$ con $f(xy)=f(x)f(y)$ para todo $x,y\in\mathbb{Q}$.

*Técnica: $f(0)=f(0)^2$ (así $f(0)=0$ o $f(0)=1$); $f(1)=f(1)^2$; $f(-1)^2=f(1)$. Explorar $f(x)=|x|^c$ como candidato. Soluciones: $f\equiv0$, $f\equiv1$, y $f(x)=|x|^c\cdot\text{signo}$ para $c$ racional.*

---

**5.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x+y)=f(x)+f(y)+2xy$ para todo $x,y\in\mathbb{R}$.

*Técnica: reducción a Cauchy. Sea $g(x)=f(x)-x^2$; verificar que $g$ satisface Cauchy. Solución: $f(x)=x^2+cx$.*

---

**6.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x-y)=f(x)f(y)-f(y)+1$ para todo $x,y\in\mathbb{R}$.

*Técnica: $y=0$ da $f(0)=1$; $x=0$ da $f(-y)=f(0)f(y)-f(y)+1=1$, luego $f(-y)=1$. Así $f\equiv1$.*

---

**7.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x))=x$ para todo $x\in\mathbb{R}$.

*Solución: cualquier involución (hay infinitas en general). Sin condición adicional, no hay clasificación completa. Si además $f$ es continua y creciente: $f=\text{id}$. Si $f$ es continua y decreciente: $f(x)=c-x$ para alguna constante $c$.*

---

## Nivel nacional: inyectividad y sobreyectividad

**8. (Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=f(x)+y$ para todo $x,y\in\mathbb{R}$.

*Técnica: inyectividad (si $f(a)=f(b)$ tomar $x=0$: $f(f(a))=a$, luego $f$ es involutiva y biyectiva). Solución: $f(x)=x$ y $f(x)=-x$.*

---

**9. (Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x)+y)=x+f(y)$ para todo $x,y\in\mathbb{R}$.

*Técnica: similar al anterior. Solución: $f(x)=x+c$ para algún $c$ con $f(c)=0$, es decir, $f(x)=x$ o $f$ traslación de la identidad.*

---

**10.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(xf(y)+f(x))=2f(x)+xy$ para todo $x,y\in\mathbb{R}$.

*Técnica: $x=y=0$ da $f(f(0))=2f(0)$; $x=1$ da $f(f(y)+f(1))=2f(1)+y$ (sobreyectiva). Usar biyectividad. Solución: $f(x)=x+1$ y $f(x)=-x+1$.*

---

**11. (OIM 2010/P1 — nivel nacional)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con

$$f(\lfloor x\rfloor y) = f(x)\lfloor f(y)\rfloor \quad\text{para todos }x,y\in\mathbb{R}.$$

*Solución: $f\equiv0$ y $f\equiv c$ para $c\in[1,2)$. Ver Problemas resueltos para la demostración completa.*

---

**12.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x^2+f(y))=y+f(x)^2$ para todo $x,y\in\mathbb{R}$.

*Técnica: probar que $f$ es sobreyectiva (fijar $x$, variar $y$), luego inyectiva. Solución: $f(x)=x$ y $f(x)=-x$.*

---

**13. (OIM 1992/P5)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x^2+f(y))=(f(x))^2+y$ para todo $x,y$.

*Técnica: similar al anterior. Solución: $f(x)=x$.*

---

**14.** Hallar todas $f:\mathbb{R}_{>0}\to\mathbb{R}_{>0}$ con $f(xf(y))=yf(x)$ para todo $x,y>0$.

*Técnica: $y=1$ da $f(xf(1))=f(x)$; si $f(1)\neq1$ deducir contradicción por inyectividad. Así $f(1)=1$. Después, $f$ multiplicativa en cierto sentido. Solución: $f(x)=1/x$.*

---

## Nivel internacional: combinación de técnicas

**15. (IMO 1992/P4)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x^2+f(y))=(f(x))^2+y$ para todo $x,y\in\mathbb{R}$.

*(Repetición del P13; la solución completa requiere varios pasos de análisis.)*

---

**16. (IMO 1996/P5)** Hallar todas $f:\mathbb{N}\to\mathbb{N}$ con $f(m+f(n))=f(f(m))+f(n)$ para todos $m,n\in\mathbb{N}$.

*Técnica: demostrar que $f$ es inyectiva, luego encontrar que $f(f(n))=n+c$ para alguna constante. Solución: $f(n)=n+c$ para todo $n$.*

---

**17. (IMO 2010/P1)** Ver Problema 11 arriba y la solución completa en Problemas resueltos.

---

**18. (IMO 2015/P5)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(x+y))+f(xy)=x+f(x+y)+yf(x)$ para todos $x,y$.

*Técnica: probar que $f\equiv2$ o $f(x)=x$ son las únicas soluciones. Probar para $x=1$: $f(1+f(1+y))+f(y)=1+f(1+y)+yf(1)$.*

---

**19. (ISL 2003/A6)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x)+y)=2x+f(f(y)-x)$ para todos $x,y$.

*Solución: $f(x)=x+c$ para algún $c$.*

---

**20. (OIM 2009/P2)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(xy)=f(x)f(y)$ y $f(x+y)=f(x)+f(y)$ para todos $x,y$.

*Técnica: la primera condición da $f(0)=0$ o $f\equiv1$; la segunda es Cauchy. Combinar: si $f$ es aditiva y multiplicativa, $f(x^2)=f(x)^2\geq0$, luego $f\geq0$ en positivos, luego $f$ es la identidad. Solución: $f\equiv0$ o $f(x)=x$.*

---

## Problemas de ecuaciones funcionales sobre $\mathbb{Z}$ o $\mathbb{N}$

**21.** Hallar todas $f:\mathbb{Z}\to\mathbb{Z}$ con $f(m+n)+f(mn)=f(m)f(n)+1$ para todos $m,n\in\mathbb{Z}$.

*Hint: $m=n=0$: $2f(0)=f(0)^2+1$, así $(f(0)-1)^2=0$, $f(0)=1$. Luego $m=0$: $f(n)+f(0)=f(0)f(n)+1$, siempre verdad. Explorar $m=n=1$. Soluciones: $f\equiv1$ y $f(n)=n+1$ y $f(n)=1-n$... investigar.*

---

**22.** Hallar todas $f:\mathbb{N}\to\mathbb{N}$ con $f(n+1)>f(f(n))$ para todo $n\in\mathbb{N}$.

*Técnica: probar que $f(n)=n$ es la única solución. Usar inducción fuerte.*

---

**23. (OIM 2007/P6)** Hallar todas $f:\mathbb{R}^+\to\mathbb{R}^+$ con $f\left(\frac{f(x)}{f(y)}\right)=\frac{x}{y}+1$ para todos $x,y\in\mathbb{R}^+$.

---

**24. (ISL 2007/A2)** Hallar todas $f:\mathbb{R}^+\to\mathbb{R}^+$ con $f(x+y)\geq f(x)\cdot f(y)$ y $f(xy)\leq f(x)\cdot f(y)$ para todos $x,y>0$.

*Solución: $f(x)=x^c$ para algún $c\geq0$.*

---

**25. (Creación propia — nivel nacional)** Hallar todas $f:\mathbb{Q}^+\to\mathbb{Q}^+$ con

$$f\!\left(\frac{1}{f(x)}\right) = x \quad\text{y}\quad f(x+y)=f(x)+f(y)+2\sqrt{f(x)f(y)}$$

para todos $x,y\in\mathbb{Q}^+$.

*Hint: la segunda ecuación dice que $\sqrt{f(x+y)}=\sqrt{f(x)}+\sqrt{f(y)}$; sea $g=\sqrt{f}$, que satisface Cauchy. Como $g:\mathbb{Q}^+\to\mathbb{Q}^+$ aditiva, $g(x)=cx$, luego $f(x)=c^2x^2$. La primera condición da $c=1$. Solución: $f(x)=x^2$.*
