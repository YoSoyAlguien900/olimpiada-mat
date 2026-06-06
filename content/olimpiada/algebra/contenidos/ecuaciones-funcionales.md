---
title: "Ecuaciones funcionales: tipos principales"
preview: "Una ecuación funcional es una ecuación en la que la incógnita es una función. Los tipos más comunes en olimpiada son la ecuación de Cauchy $f(x+y)=f(x)+f(y)$ y sus variantes. La estrategia es explorar sustituciones, luego deducir la forma."
dificultad: nacional
tags: [ecuaciones-funcionales, cauchy, aditividad, olimpiada]
prerequisites: [sucesiones-recurrencias]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Una ecuación funcional impone una relación entre los valores de una función en distintos puntos. En olimpiada, el objetivo es encontrar **todas** las funciones que satisfacen la ecuación, y demostrar que no hay otras. La dificultad está en extraer información de la ecuación mediante sustituciones inteligentes.

## Tipos principales

### Ecuación de Cauchy aditiva

$$f(x + y) = f(x) + f(y) \quad \forall x, y.$$

**Sobre $\mathbb{Q}$:** la única solución es $f(x) = cx$ para alguna constante $c = f(1)$.

**Sobre $\mathbb{R}$** con condición de regularidad (monótona, acotada en un intervalo, o medible): la única solución es también $f(x) = cx$.

**Sobre $\mathbb{R}$ sin regularidad:** existen soluciones patológicas no medibles (construidas con la base de Hamel), pero estas nunca aparecen en olimpiadas.

### Ecuación de Cauchy multiplicativa

$$f(xy) = f(x)f(y) \quad \forall x, y > 0.$$

Soluciones sobre $\mathbb{R}^+$: $f(x) = x^c$ para algún $c \in \mathbb{R}$, o $f \equiv 0$.

### Ecuación de Jensen funcional

$$f\!\left(\frac{x+y}{2}\right) = \frac{f(x)+f(y)}{2} \quad \forall x, y.$$

Equivalente a la aditividad: toda solución continua es $f(x) = ax + b$.

### Otras formas habituales

| Nombre | Ecuación |
|---|---|
| Cauchy cuadrática | $f(x+y)+f(x-y)=2f(x)+2f(y)$ |
| Gompertz | $f(xy)=f(x)+f(y)$ |
| Pexider | $f(x+y)=g(x)+h(y)$ |
| D'Alembert | $f(x+y)+f(x-y)=2f(x)f(y)$ |

## Estrategia general

Véase el archivo de métodos para la estrategia detallada. Aquí el esquema básico:

1. **Evaluar en puntos especiales** ($x=0$, $y=0$, $x=y$, $y=-x$, $x=1$, ...) para determinar $f(0)$, $f(1)$, simetría, etc.
2. **Inducción** para extender de $\mathbb{N}$ a $\mathbb{Z}$ a $\mathbb{Q}$.
3. **Regularidad** (monotonía, continuidad) para pasar de $\mathbb{Q}$ a $\mathbb{R}$.
4. **Conjeturar** la forma de $f$ basándose en los casos hallados.
5. **Verificar** que la función hallada satisface efectivamente la ecuación.

## Enunciado y resolución: ecuación de Cauchy sobre $\mathbb{Q}$

**Teorema.** Si $f:\mathbb{Q}\to\mathbb{Q}$ satisface $f(x+y)=f(x)+f(y)$ para todos $x,y\in\mathbb{Q}$, entonces $f(x)=cx$ para $c=f(1)$.

**Demostración.**

**Paso 1:** $f(0)=0$. Sustituir $x=y=0$: $f(0)=2f(0)$, así $f(0)=0$.

**Paso 2:** $f(-x)=-f(x)$. Sustituir $y=-x$: $0=f(0)=f(x)+f(-x)$, así $f(-x)=-f(x)$.

**Paso 3:** $f(n)=nf(1)$ para $n\in\mathbb{N}$. Por inducción: $f(n)=f((n-1)+1)=f(n-1)+f(1)$. Caso base $n=1$ trivial.

**Paso 4:** $f(n)=nf(1)$ para $n\in\mathbb{Z}$. Por el Paso 2: $f(-n)=-f(n)=-nf(1)$.

**Paso 5:** $f(p/q)=\dfrac{p}{q}f(1)$ para $p/q\in\mathbb{Q}$. Tenemos $qf(p/q)=f(q\cdot p/q)=f(p+p/q+\cdots)$... más limpiamente: $f(p/q+p/q+\cdots+p/q)=q\cdot f(p/q)=f(p)=pf(1)$. Así $f(p/q)=\frac{p}{q}f(1)$.

**Conclusión:** $f(x)=cx$ con $c=f(1)$. $\blacksquare$

## Ejemplo

### Sustituciones que dan información inmediata

**Ejemplo 1.** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x+y)+f(x-y)=2f(x)\cos y$ para todos $x,y\in\mathbb{R}$.

- $x=y=0$: $2f(0)=2f(0)\cos0=2f(0)$. Sin información.
- $x=0$: $f(y)+f(-y)=2f(0)\cos y$.
- $y=\pi$: $f(x+\pi)+f(x-\pi)=-2f(x)$.

Si $f$ es continua: soluciones $f(x)=A\sin x+B\cos x$ (verificar sustituyendo). $\square$

---

**Ejemplo 2.** Hallar todas las $f:\mathbb{R}\to\mathbb{R}$ continuas con $f(x+y)=f(x)+f(y)+2xy$.

Definir $g(x)=f(x)-x^2$. Entonces:

$$g(x+y)+(x+y)^2=g(x)+x^2+g(y)+y^2+2xy,$$

$$g(x+y)+x^2+2xy+y^2=g(x)+g(y)+x^2+y^2+2xy,$$

$$g(x+y)=g(x)+g(y).$$

Así $g$ es una función de Cauchy continua: $g(x)=cx$. Por tanto $f(x)=x^2+cx$. $\square$

---

**Ejemplo 3.** Hallar todas $f:\mathbb{R}_{>0}\to\mathbb{R}_{>0}$ con $f(xy)=f(x)f(y)$ y $f$ continua.

- $x=y=1$: $f(1)=f(1)^2$, así $f(1)=1$ (pues $f(1)>0$).
- $y=1/x$: $f(1)=f(x)f(1/x)=1$, así $f(1/x)=1/f(x)$.
- Sea $g(x)=\ln f(e^x)$. Entonces $g(x+y)=g(x)+g(y)$ (Cauchy aditiva).

Si $f$ es continua, $g$ es continua, así $g(x)=cx$, es decir, $f(e^x)=e^{cx}$, o sea $f(t)=t^c$ para $t>0$. $\square$

---

**Ejemplo 4.** (IMO 2010/P1 — bosquejo) Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(\lfloor x\rfloor y)=f(x)\lfloor f(y)\rfloor$.

*(Véase el archivo de problemas resueltos para la solución completa.)*

Sustituciones iniciales:
- $x\in[0,1)$: $\lfloor x\rfloor=0$, así $f(0)=f(x)\lfloor f(y)\rfloor$ para todo $x\in[0,1)$, $y\in\mathbb{R}$.
- Esto implica que o bien $f\equiv0$, o bien $\lfloor f(y)\rfloor$ es constante y $f$ es constante en $[0,1)$.
- Las soluciones son $f\equiv0$ y $f\equiv c$ con $c\in[1,2)$. $\square$

---

**Ejemplo 5.** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x))=x$ para todo $x$ (involución) y $f$ continua.

$f\circ f=\text{id}$ implica $f$ es biyectiva. Si $f$ es continua y biyectiva en $\mathbb{R}$, es monótona. Si $f$ es creciente: $f(f(x))=x$ y $f$ creciente implican que el único punto fijo de $f\circ f$ es el punto fijo de $f$. Así $f(x)=x$ o bien... en realidad con $f$ continua y $f(f(x))=x$: $f$ es una reflexión, de la forma $f(x)=a-x$ para algún $a\in\mathbb{R}$.

Verificación: $f(f(x))=a-(a-x)=x$ ✓. Son todas las soluciones continuas. $\square$

## Observación

**Toda ecuación funcional de olimpiada tiene "la respuesta más simple" como solución.** El paso de verificación consiste en comprobar que la función candidata (obtenida por inducción/sustituciones) realmente satisface la ecuación. No se puede omitir.

**La condición sobre el dominio y codominio importa.** $f:\mathbb{Q}\to\mathbb{Q}$ con Cauchy tiene solo soluciones lineales. $f:\mathbb{R}\to\mathbb{R}$ con Cauchy sin condición adicional puede tener soluciones patológicas. En olimpiada, siempre se especifica el dominio y a veces se añade monotonía o continuidad para excluir soluciones patológicas.

**Las soluciones constantes son una trampa frecuente.** Siempre hay que verificar si $f\equiv c$ (constante) satisface la ecuación y qué valores de $c$ son válidos.

**La función cero es siempre candidata.** $f\equiv0$ satisface la ecuación de Cauchy, la multiplicativa, y muchas otras. A veces la ecuación fuerza $f\not\equiv0$ (si hay una condición adicional como $f(1)=1$).

## Problemas relacionados

- **(Clásico, iniciación)** Hallar todas $f:\mathbb{Q}\to\mathbb{Q}$ con $f(x+y)=f(x)+f(y)$ y $f(1)=3$. *(Ver guiado.)*

- **(Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(x^2+y^2)=f(x)^2+f(y)^2$.

- **(Nacional)** Hallar todas $f:\mathbb{R}_{>0}\to\mathbb{R}_{>0}$ con $f(x+y)=f(x)+f(y)$ y $f(xy)=f(x)f(y)$.

- **(IMO 2010/P1)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(\lfloor x\rfloor y)=f(x)\lfloor f(y)\rfloor$.

- **(Clásico)** Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(xf(y))=yf(x)$ para todos $x,y$.
