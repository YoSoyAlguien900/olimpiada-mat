---
title: "IMO 2000 P2 — Desigualdad con producto 1 (guiado)"
preview: "Para $a,b,c>0$ con $abc=1$: $\\left(a-1+\\tfrac{1}{b}\\right)\\left(b-1+\\tfrac{1}{c}\\right)\\left(c-1+\\tfrac{1}{a}\\right)\\leq1$. La sustitución que lineariza el producto y la AM-GM que cierra."
dificultad: nacional
competencia: "IMO 2000 P2"
tags: [desigualdades, am-gm, sustitucion, guiado, imo-2000]
prerequisites: [am-gm, sustitucion-normalizacion]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

## Enunciado

Sean $a, b, c > 0$ números reales con $abc = 1$. Demostrar que

$$\left(a - 1 + \frac{1}{b}\right)\left(b - 1 + \frac{1}{c}\right)\left(c - 1 + \frac{1}{a}\right) \;\leq\; 1.$$

---

## Fase 1: experimentar

**Comprobar el caso de igualdad.**

$a=b=c=1$ (que satisface $abc=1$): cada factor es $1-1+1=1$. Producto: $1$. $\checkmark$ (igualdad).

**Probar con valores extremos.**

$a=2, b=2, c=1/4$ (check: $2\cdot2\cdot1/4=1$ ✓):
- Factor 1: $2-1+1/2=3/2$.
- Factor 2: $2-1+4=5$.
- Factor 3: $1/4-1+1/2=-1/4$.

Producto: $(3/2)\cdot5\cdot(-1/4)=-15/8<0<1$. $\checkmark$

**Observación.** Si algún factor es negativo, el producto de tres negativos es negativo (o positivo si exactamente dos son negativos). Habrá que analizar los signos.

**¿Pueden dos factores ser negativos simultáneamente?**

Si $a-1+1/b<0$ y $b-1+1/c<0$: entonces $a+1/b<1$ y $b+1/c<1$. Multiplicando: $(a+1/b)(b+1/c)=ab+a/c+1+1/(bc)<1$. Así $ab+a/c+1/(bc)<0$, imposible pues $a,b,c>0$. **No pueden ser dos factores negativos al mismo tiempo.**

---

## Fase 2: la estructura del problema

El hecho de que no puedan ser dos factores negativos simultáneamente nos dice: el producto de los tres factores puede ser:
- Negativo (exactamente un factor negativo), que es $<0<1$ ✓.
- Negativo (exactamente tres factores negativos), también $<0<1$ ✓.
- Positivo (los tres factores positivos): **el caso interesante**.

También: el caso de exactamente dos factores negativos es imposible (lo demostramos arriba), y si exactamente tres son negativos, el producto es negativo $<1$ ✓.

**Conclusión de la Fase 2:** Solo hay que demostrar la desigualdad cuando **los tres factores son positivos**.

---

## Fase 3: la sustitución clave

Con $abc=1$, sustituir $a=x/y$, $b=y/z$, $c=z/x$ para $x,y,z>0$ (esto satisface $abc=\frac{x}{y}\cdot\frac{y}{z}\cdot\frac{z}{x}=1$ ✓).

Calculemos cada factor:

$$a-1+\frac{1}{b} = \frac{x}{y}-1+\frac{z}{y} = \frac{x+z-y}{y}.$$

$$b-1+\frac{1}{c} = \frac{y}{z}-1+\frac{x}{z} = \frac{x+y-z}{z}.$$

$$c-1+\frac{1}{a} = \frac{z}{x}-1+\frac{y}{x} = \frac{y+z-x}{x}.$$

El producto de los tres factores es:

$$\frac{(x+z-y)(x+y-z)(y+z-x)}{xyz}.$$

---

## Fase 4: acotar el numerador

Hay que probar que $(x+z-y)(x+y-z)(y+z-x)\leq xyz$ cuando los tres factores son positivos.

Los tres factores del numerador siendo positivos equivalen a:

$$x+z>y, \quad x+y>z, \quad y+z>x,$$

es decir, $x, y, z$ son **lados de un triángulo**.

**Sustitución de Ravi.** Sea $u=x+y-z>0$, $v=y+z-x>0$, $w=z+x-y>0$. Entonces:

$$x = \frac{u+w}{2}, \quad y = \frac{u+v}{2}, \quad z = \frac{v+w}{2}.$$

El numerador es $uvw$. El denominador es:

$$xyz = \frac{(u+w)(u+v)(v+w)}{8}.$$

El producto de los tres factores se convierte en:

$$\frac{uvw}{\frac{(u+w)(u+v)(v+w)}{8}} = \frac{8uvw}{(u+v)(v+w)(w+u)}.$$

---

## Fase 5: cerrar con AM-GM

Necesitamos $\dfrac{8uvw}{(u+v)(v+w)(w+u)}\leq1$, es decir:

$$(u+v)(v+w)(w+u)\geq8uvw.$$

Por AM-GM aplicada a cada factor:

$$u+v\geq2\sqrt{uv}, \quad v+w\geq2\sqrt{vw}, \quad w+u\geq2\sqrt{wu}.$$

Multiplicando:

$$(u+v)(v+w)(w+u)\geq8\sqrt{uv}\cdot\sqrt{vw}\cdot\sqrt{wu}=8\sqrt{u^2v^2w^2}=8uvw.$$

(Igualdad si y solo si $u=v=w$, es decir, $x=y=z$, es decir, $a=b=c=1$.)

Por tanto el producto original es $\leq1$. $\blacksquare$

---

## Demostración limpia

**Demostración.** Si algún factor es $\leq0$, el producto de los tres es $\leq0<1$ (verificando que no pueden ser exactamente dos factores negativos: si $a-1+1/b<0$ y $b-1+1/c<0$, multiplicando $(a+1/b)(b+1/c)=ab+a/c+1+1/(bc)\geq1$, contradicción). Así el producto $\leq0<1$.

Si los tres factores son positivos, sustituir $a=x/y$, $b=y/z$, $c=z/x$ con $x,y,z>0$:

$$\text{Producto}=\frac{(x+z-y)(x+y-z)(y+z-x)}{xyz}.$$

La positividad de los tres factores implica que $x,y,z$ forman un triángulo. Sea $u=x+y-z$, $v=y+z-x$, $w=z+x-y>0$. Entonces $x=(u+w)/2$, $y=(u+v)/2$, $z=(v+w)/2$ y el producto es

$$\frac{8uvw}{(u+v)(v+w)(w+u)}\leq\frac{8uvw}{8\sqrt{uv}\cdot\sqrt{vw}\cdot\sqrt{wu}}=1,$$

donde la última desigualdad es AM-GM. La igualdad ocurre iff $u=v=w$ iff $x=y=z$ iff $a=b=c=1$. $\blacksquare$

---

## Observación

**Lo que aprendemos.**

1. **El análisis de signos al inicio ahorra trabajo.** Probar que no pueden ser dos factores negativos fue el primer movimiento, y eliminó el caso más complicado de analizar.

2. **La sustitución $a=x/y$, $b=y/z$, $c=z/x$ es la clave para $abc=1$.** Esta sustitución transforma la condición $abc=1$ en una identidad automática, y convierte los factores en cocientes de la forma $(x+z-y)/y$.

3. **Ravi transforma la desigualdad triangular en positividad de variables.** Una vez que los tres factores son positivos, la desigualdad triangular aparece naturalmente. La sustitución de Ravi $u,v,w>0$ la hace explícita.

4. **AM-GM sobre los tres binomios cierra.** $(u+v)(v+w)(w+u)\geq8uvw$ es una aplicación directa y simultánea de AM-GM. La estructura $uvw$ en numerador y $u^2v^2w^2$ en denominador se cancela perfectamente.

5. **La igualdad en $a=b=c=1$ es consistente.** En efecto, $a=b=c=1$ da $u=v=w$ (Ravi con $x=y=z$), que es exactamente la condición de igualdad de AM-GM. La solución es internamente consistente.

---

## Problemas relacionados

- **(Clásico, nivel iniciación)** Para $a,b,c>0$ con $abc=1$, probar que $a+b+c\geq3$.

- **(Clásico)** Para $a,b,c>0$ con $a+b+c=1$, probar que $(1-a)(1-b)(1-c)\geq8abc$.

- **(IMO 1995/P2)** Para $a,b,c>0$ con $abc=1$, probar que $\dfrac{1}{a^3(b+c)}+\dfrac{1}{b^3(c+a)}+\dfrac{1}{c^3(a+b)}\geq\dfrac{3}{2}$. *(Ver problemas resueltos.)*

- **(IMO 2000/P2 variante)** ¿Para qué valores de $k>0$ se tiene $(a-1+1/b)(b-1+1/c)(c-1+1/a)\leq k$ para todos $a,b,c>0$ con $abc=1$? Demostrar que el mínimo de la cota derecha es $1$.
