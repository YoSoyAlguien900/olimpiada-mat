---
title: "Ecuación de Cauchy sobre ℚ (guiado paso a paso)"
preview: "Si $f:\\mathbb{Q}\\to\\mathbb{Q}$ satisface $f(x+y)=f(x)+f(y)$ para todos $x,y\\in\\mathbb{Q}$, entonces $f(x)=cx$ con $c=f(1)$. El problema-modelo de ecuaciones funcionales: la técnica se repite en cien variantes."
dificultad: regional
tags: [ecuaciones-funcionales, cauchy, aditividad, guiado, racional]
prerequisites: [ecuaciones-funcionales, busqueda-ef]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

## Enunciado

Hallar todas las funciones $f:\mathbb{Q}\to\mathbb{Q}$ tales que

$$f(x+y) = f(x) + f(y) \quad \text{para todos } x, y \in \mathbb{Q}.$$

---

## Fase 1: explorar y conjeturar

**Calcular $f$ en algunos puntos.**

$f(1)$ queda libre. Llamémoslo $c$.

- $x=y=1$: $f(2)=2f(1)=2c$.
- $x=2,y=1$: $f(3)=f(2)+f(1)=3c$.
- $x=n-1,y=1$ (inducción obvia): $f(n)=nc$ para $n\in\mathbb{N}$.

Probar con fracciones: $f(1/2)+f(1/2)=f(1)=c$, así $f(1/2)=c/2$.

$f(1/3)+f(1/3)+f(1/3)=f(1)=c$, así $f(1/3)=c/3$.

**Conjetura:** $f(x)=cx$ para todo $x\in\mathbb{Q}$, con $c=f(1)$.

---

## Fase 2: verificar la conjetura

Antes de demostrarla, verificar que $f(x)=cx$ sí satisface la ecuación:

$$f(x+y)=c(x+y)=cx+cy=f(x)+f(y). \;\checkmark$$

Así, para cualquier $c\in\mathbb{Q}$, la función $f(x)=cx$ es solución.

---

## Fase 3: demostración completa

Ahora hay que probar que **no hay otras soluciones** más allá de $f(x)=cx$.

### Paso 1: $f(0) = 0$

Sustituir $x=y=0$ en la ecuación:

$$f(0+0)=f(0)+f(0) \implies f(0)=2f(0) \implies f(0)=0. \;\square$$

### Paso 2: $f(-x)=-f(x)$

Sustituir $y=-x$:

$$f(x+(-x))=f(x)+f(-x) \implies f(0)=f(x)+f(-x) \implies 0=f(x)+f(-x).$$

Por tanto $f(-x)=-f(x)$ para todo $x$. $\square$

### Paso 3: $f(n)=nf(1)$ para todo $n\in\mathbb{Z}$

**Para $n\in\mathbb{N}$**, por inducción:
- Base: $f(1)=f(1)$. ✓
- Paso: $f(n)=f((n-1)+1)=f(n-1)+f(1)=\underbrace{(n-1)f(1)}_{\text{hip.}}+f(1)=nf(1)$.

**Para $n\in\mathbb{Z}_{<0}$**: $f(n)=f(-|n|)=-f(|n|)=-|n|f(1)=nf(1)$ (por el Paso 2).

Así $f(n)=nf(1)$ para todo $n\in\mathbb{Z}$. $\square$

### Paso 4: $f(p/q)=\frac{p}{q}f(1)$ para todo $p/q\in\mathbb{Q}$

Fijado $q\in\mathbb{N}$, evaluamos la ecuación en $x=y=\cdots=p/q$ ($q$ veces):

$$f\!\underbrace{\left(\frac{p}{q}+\frac{p}{q}+\cdots+\frac{p}{q}\right)}_{q \text{ veces}} = q\cdot f\!\left(\frac{p}{q}\right).$$

El argumento de la izquierda es $p$, así $f(p)=q\cdot f(p/q)$.

Por el Paso 3: $f(p)=pf(1)$. Por tanto:

$$pf(1) = q\cdot f(p/q) \implies f\!\left(\frac{p}{q}\right) = \frac{p}{q}f(1). \;\square$$

### Conclusión

Para todo $x=p/q\in\mathbb{Q}$: $f(x)=f(1)\cdot x=cx$.

Las únicas soluciones son $f(x)=cx$ con $c=f(1)\in\mathbb{Q}$. $\blacksquare$

---

## Demostración limpia

**Demostración.** Sea $c=f(1)$. Para $x=p/q\in\mathbb{Q}$ (con $p\in\mathbb{Z}$, $q\in\mathbb{N}$):

De $x=0$: $f(0)=0$. De $y=-x$: $f(-x)=-f(x)$. Por inducción, $f(n)=nf(1)$ para $n\in\mathbb{Z}$. Finalmente, $qf(p/q)=f(q\cdot p/q)=f(p)=pf(1)$, así $f(p/q)=\frac{p}{q}f(1)=cx$. ✓ Verificar $f(x+y)=c(x+y)=cx+cy=f(x)+f(y)$. $\blacksquare$

---

## Observación

**Lo que aprendemos.**

1. **Las sustituciones $x=y=0$ y $y=-x$ son siempre el primer movimiento.** Determinan $f(0)$ y la paridad de $f$.

2. **La extensión $\mathbb{N}\to\mathbb{Z}\to\mathbb{Q}$ es el corazón de la solución.** Este esquema se repite en casi todas las ecuaciones funcionales sobre $\mathbb{Q}$.

3. **La verificación no es trivial: hay que comprobar que $f(x)=cx$ satisface la ecuación para toda $c\in\mathbb{Q}$**, no solo para $c$ específico.

4. **Sobre $\mathbb{R}$ sin condición extra, la situación es radicalmente diferente.** Las soluciones patológicas (no medibles, no continuas) existen y son densas en $\mathbb{R}$. En olimpiada, cuando el dominio es $\mathbb{R}$, el problema siempre añade una condición de regularidad (monótona, continua, acotada, etc.).

5. **La ecuación de Cauchy es la madre de todas las ecuaciones funcionales.** Muchas ecuaciones en olimpiada se reducen a ella con la sustitución adecuada.

---

## Variantes y generalizaciones

**Variante 1.** $f:\mathbb{Q}\to\mathbb{Q}$ con $f(x+y)=f(x)+f(y)$ y $f(2)=6$. Solución: $c=f(1)=3$, así $f(x)=3x$.

**Variante 2.** $f:\mathbb{R}\to\mathbb{R}$ continua con $f(x+y)=f(x)+f(y)$. Solución: $f(x)=cx$ con $c=f(1)$ real. (La prueba es idéntica para $\mathbb{Q}$; la continuidad extiende a $\mathbb{R}$ por densidad de $\mathbb{Q}$ en $\mathbb{R}$.)

**Variante 3.** $f:\mathbb{Q}\to\mathbb{Q}$ con $f(x+y)=f(x)+f(y)+2xy$. Reducción: $g(x)=f(x)-x^2$ satisface $g(x+y)=g(x)+g(y)$. Así $g(x)=cx$ y $f(x)=x^2+cx$.

**Variante 4.** $f:\mathbb{Q}^+\to\mathbb{Q}^+$ con $f(xy)=f(x)f(y)$ para todo $x,y>0$. Tomar logaritmos: $\ln f(xy)=\ln f(x)+\ln f(y)$. Sea $g=\ln\circ f\circ\exp$: $g(a+b)=g(a)+g(b)$ (Cauchy aditiva). Así $g(a)=ca$ y $f(x)=x^c$ para algún $c$.

---

## Problemas relacionados

- **(Clásico)** Hallar todas $f:\mathbb{Z}\to\mathbb{Z}$ con $f(m+n)=f(m)+f(n)$ para todo $m,n\in\mathbb{Z}$.

- **(Clásico)** Hallar todas $f:\mathbb{Q}\to\mathbb{Q}$ con $f(x+y)=f(x)+f(y)$ y $f(x)\cdot f(y)=f(xy)$.

- **(OMG-nivel)** Hallar todas $f:\mathbb{Q}_{>0}\to\mathbb{Q}_{>0}$ con $f(x+y)=f(x)+f(y)$ y $f(1/f(x))=x$.

- **(Nacional)** Hallar todas $f:\mathbb{Q}\to\mathbb{Q}$ con $f(xy)=xf(y)+yf(x)$ (ecuación de Leibniz).

- **(Clásico, extensión)** Demostrar que toda $f:\mathbb{R}\to\mathbb{R}$ con $f(x+y)=f(x)+f(y)$ que es monótona no decreciente es de la forma $f(x)=cx$.
