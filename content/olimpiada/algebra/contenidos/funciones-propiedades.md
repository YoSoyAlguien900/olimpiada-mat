---
title: "Propiedades de funciones: inyectividad, sobreyectividad y monotonía"
preview: "Antes de resolver ecuaciones funcionales, hay que saber leer una función: si es inyectiva (no repite valores), sobreyectiva (alcanza todo el codominio), monótona (creciente o decreciente) o par/impar. Estas propiedades son las herramientas que se extraen de la ecuación antes de adivinar la solución."
dificultad: regional
tags: [funciones, inyectividad, sobreyectividad, monotonia, paridad, ecuaciones-funcionales]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Una ecuación funcional es una ecuación donde la incógnita es una función. Para resolverla, no se puede ir directamente a "adivinar la fórmula": primero hay que extraer propiedades de la función (¿es inyectiva?, ¿es monótona?, ¿qué vale en $0$?) usando sustituciones inteligentes. Este archivo enseña qué son esas propiedades y cómo probarlas a partir de la ecuación.

---

## Funciones: conceptos básicos

Una **función** $f: A \to B$ asigna a cada elemento $x\in A$ exactamente un elemento $f(x)\in B$.

- $A$ es el **dominio** de $f$.
- $B$ es el **codominio**.
- La **imagen** de $f$ es $\text{Im}(f)=\{f(x):x\in A\}\subseteq B$.

En olimpiada, los dominios más frecuentes son $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{R}^+$.

---

## Inyectividad

**Definición.** $f:A\to B$ es **inyectiva** (o uno-a-uno) si elementos distintos del dominio tienen imágenes distintas:

$$\boxed{f(a) = f(b) \implies a = b.}$$

Equivalentemente: $a\neq b\implies f(a)\neq f(b)$.

**Cómo probarlo en una ecuación funcional.** Suponer $f(a)=f(b)$ y deducir $a=b$ usando la ecuación funcional.

### Ejemplos

**Ejemplo 1.** $f(x)=2x+1$ es inyectiva: $2a+1=2b+1\Rightarrow a=b$.

**Ejemplo 2.** $f(x)=x^2$ no es inyectiva sobre $\mathbb{R}$: $f(2)=f(-2)=4$ pero $2\neq-2$.

**Ejemplo 3 (EF).** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=f(x)+y$ para todos $x,y$. Probar que $f$ es inyectiva.

Suponer $f(a)=f(b)$. Evaluar en $y=a$: $f(x+f(a))=f(x)+a$. Evaluar en $y=b$: $f(x+f(b))=f(x)+b$. Como $f(a)=f(b)$: el lado izquierdo es igual en ambos casos, luego $f(x)+a=f(x)+b$, así $a=b$. $\square$

---

## Sobreyectividad

**Definición.** $f:A\to B$ es **sobreyectiva** (o sobre) si todo elemento del codominio es imagen de algún elemento del dominio:

$$\boxed{\forall\, y\in B,\;\exists\, x\in A:\; f(x)=y.}$$

Equivalentemente: $\text{Im}(f)=B$.

**Cómo probarlo en una ecuación funcional.** Fijado un $c$ arbitrario, encontrar un $x$ tal que $f(x)=c$ (usando la ecuación para despejar $x$).

### Ejemplos

**Ejemplo 1.** $f(x)=2x+1:\mathbb{R}\to\mathbb{R}$ es sobreyectiva: dado $y$, tomar $x=(y-1)/2$.

**Ejemplo 2.** $f(x)=x^2:\mathbb{R}\to\mathbb{R}$ no es sobreyectiva: $-1$ no es imagen de ningún real.

**Ejemplo 3 (EF).** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=f(x)+y$. Probar que $f$ es sobreyectiva.

Fijado $c\in\mathbb{R}$. Tomar $x=0$: $f(f(y))=f(0)+y$. Para que $f(z)=c$, necesitamos $z$ con $f(0)+y=c$ para $z=f(y)$... Más directo: $f(f(y))=f(0)+y$ da que $f(f(y))-f(0)=y$, que es biyectivo en $y$. Así la imagen de $f\circ f$ es todo $\mathbb{R}$. En particular, para cualquier $c$, $f(f(y_0))=c$ para algún $y_0$, luego $c$ es imagen de $f(y_0)$ bajo $f$. $\square$

---

## Biyectividad

**Definición.** $f$ es **biyectiva** si es inyectiva y sobreyectiva.

Una función biyectiva tiene **función inversa** $f^{-1}:B\to A$ tal que $f(f^{-1}(y))=y$ y $f^{-1}(f(x))=x$.

**En olimpiada:** probar que una función es biyectiva permite "despejar" la variable dentro de $f$. Si $f(g(x))=h(x)$ y $f$ es biyectiva, entonces $g(x)=f^{-1}(h(x))$.

### Ejemplo

**EF:** Si $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=f(x)+y$ es biyectiva, entonces existe $f^{-1}$, y $f(f(y))=y+f(0)$ da que $f$ "casi" es involutiva.

---

## Monotonía

**Definición.** $f:A\to\mathbb{R}$ (con $A\subseteq\mathbb{R}$) es:

- **Creciente** si $a<b\Rightarrow f(a)<f(b)$.
- **No decreciente** si $a<b\Rightarrow f(a)\leq f(b)$.
- **Decreciente** si $a<b\Rightarrow f(a)>f(b)$.
- **No creciente** si $a<b\Rightarrow f(a)\geq f(b)$.

**Creciente o decreciente** = **estrictamente monótona**.

**Propiedad clave.** Toda función estrictamente monótona es inyectiva.

*Demostración.* Si $f$ es creciente y $a\neq b$, digamos $a<b$: entonces $f(a)<f(b)$, luego $f(a)\neq f(b)$. $\square$

**Uso en olimpiada.** En algunos problemas de EF, se pide que $f$ sea monótona, o se deduce monotonía de la ecuación. Monotonía + EF sobre $\mathbb{Q}$ extiende la solución a $\mathbb{R}$ por densidad.

### Ejemplo

**Probar que $f(x)=x^3$ es creciente.**

Si $a<b$: $b^3-a^3=(b-a)(b^2+ab+a^2)$. El factor $b-a>0$. El factor $b^2+ab+a^2=(a+b/2)^2+3b^2/4\geq0$. Si $a^2+ab+b^2=0$: solo posible con $a=b=0$, pero $a\neq b$. Así $b^3-a^3>0$. $\square$

---

## Paridad

**Definición.** $f:\mathbb{R}\to\mathbb{R}$ es:

- **Par** si $f(-x)=f(x)$ para todo $x$. (Simétrica respecto al eje $y$.)
- **Impar** si $f(-x)=-f(x)$ para todo $x$. (Simétrica respecto al origen.)

**Propiedad.** Si $f$ es impar: $f(0)=0$ (sustituir $x=0$: $f(0)=-f(0)$, luego $f(0)=0$).

**En EF.** La sustitución $y\to-y$ o $x\to-x$ en la ecuación funcional revela si $f$ es par o impar.

### Ejemplo

**Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x-y)=f(x)f(y)-f(y)+1$. Hallar $f(0)$.**

$x=y=0$: $f(0)=f(0)^2-f(0)+1$, luego $f(0)^2-2f(0)+1=0$, así $(f(0)-1)^2=0$, $f(0)=1$.

**Determinar si $f$ es par.** $x=0$: $f(-y)=f(0)f(y)-f(y)+1=f(y)-f(y)+1=1$ para todo $y$. Luego $f\equiv1$. *(La paridad es un concepto que se verifica después de hallar la solución.)*

---

## Acotación

**$f$ está acotada superiormente** si existe $M$ con $f(x)\leq M$ para todo $x$.

**$f$ está acotada inferiormente** si existe $m$ con $f(x)\geq m$ para todo $x$.

**En EF.** La acotación a veces se puede deducir de la ecuación. Si se deduce que $f$ es acotada y satisface Cauchy, la solución es $f(x)=cx$.

---

## Cómo usar estas propiedades: estrategia en EF

Dado $f(g(x,y))=h(x,y)$, los primeros pasos son:

1. **Hallar $f(0)$:** sustituir $x=y=0$.
2. **Hallar $f(-x)$:** sustituir $y\to-x$ o similar.
3. **Probar inyectividad o sobreyectividad** según lo que permita la ecuación.
4. **Deducir monotonía** si hay condición adicional.
5. **Extender** de $\mathbb{N}$ a $\mathbb{Z}$ a $\mathbb{Q}$ a $\mathbb{R}$.

### Ejemplo completo

**Hallar todas $f:\mathbb{R}\to\mathbb{R}$ con $f(f(x))=x+1$.**

Paso 1: $f(f(0))=1$. Sea $a=f(0)$: $f(a)=1$.

Paso 2: Aplicar $f$ a ambos lados de $f(f(x))=x+1$: $f(f(f(x)))=f(x+1)$. Pero también $f(f(f(x)))=f(x)+1$ (usando la ecuación con $f(x)$ en lugar de $x$). Así $f(x+1)=f(x)+1$.

Paso 3: De $f(x+1)=f(x)+1$: $f(x)=f(0)+x=a+x$. Verificar: $f(f(x))=f(a+x)=a+(a+x)=2a+x$. Esto debe ser $x+1$, luego $2a=1$, $a=1/2$.

Solución: $f(x)=x+1/2$.

Verificar: $f(f(x))=f(x+1/2)=(x+1/2)+1/2=x+1$. ✓ $\square$

---

## Resumen visual

| Propiedad | Definición | Consecuencia |
|---|---|---|
| Inyectiva | $f(a)=f(b)\Rightarrow a=b$ | Permite "cancelar" $f$ |
| Sobreyectiva | $\forall y\exists x: f(x)=y$ | Permite "despejar" argumentos |
| Biyectiva | Inyectiva + sobreyectiva | Existe $f^{-1}$ |
| Creciente | $a<b\Rightarrow f(a)<f(b)$ | Es inyectiva; extensible a $\mathbb{R}$ |
| Par | $f(-x)=f(x)$ | $f(0)$ libre; paridad en cálculos |
| Impar | $f(-x)=-f(x)$ | $f(0)=0$ obligatoriamente |
| Acotada | $|f(x)|\leq M$ | Con Cauchy $\Rightarrow$ $f(x)=cx$ |

## Problemas relacionados

- **(Regional)** Demostrar que si $f:\mathbb{R}\to\mathbb{R}$ es inyectiva y $f(f(x))=x$ para todo $x$, entonces $f$ tiene exactamente un punto fijo o ninguno.

- **(Regional)** Sea $f:\mathbb{Z}\to\mathbb{Z}$ con $f(m+n)=f(m)+f(n)$ para todo $m,n$. Probar que $f(n)=f(1)\cdot n$ para todo $n\in\mathbb{Z}$.

- **(Nacional)** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=y+f(x)$. Probar que $f$ es biyectiva e involutiva ($f(f(x))=x$).

- **(Nacional)** Sea $f:\mathbb{R}^+\to\mathbb{R}^+$ con $f(xf(y))=yf(x)$ para todo $x,y>0$. Probar que $f$ es inyectiva y hallar $f$.

- **(Nacional)** Demostrar que si $f:\mathbb{R}\to\mathbb{R}$ es monótona y satisface $f(x+y)=f(x)+f(y)$, entonces $f(x)=cx$ para alguna constante $c$.
