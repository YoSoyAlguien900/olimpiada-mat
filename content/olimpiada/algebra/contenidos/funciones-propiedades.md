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

Tomando $x=0$ obtenemos $f(f(y))=f(0)+y$. Cuando $y$ recorre $\mathbb{R}$, el lado derecho $f(0)+y$ recorre **todo** $\mathbb{R}$. Por tanto, dado cualquier $c\in\mathbb{R}$, existe $y_0$ con $f(0)+y_0=c$, y entonces $f\big(f(y_0)\big)=c$: el valor $c$ se alcanza (es la imagen de $f(y_0)$). Como $c$ era arbitrario, $f$ es sobreyectiva. $\square$

---

## Biyectividad

**Definición.** $f$ es **biyectiva** si es inyectiva y sobreyectiva.

Una función biyectiva tiene **función inversa** $f^{-1}:B\to A$ tal que $f(f^{-1}(y))=y$ y $f^{-1}(f(x))=x$.

**En olimpiada:** probar que una función es biyectiva permite "despejar" la variable dentro de $f$. Si $f(g(x))=h(x)$ y $f$ es biyectiva, entonces $g(x)=f^{-1}(h(x))$.

### Ejemplo

**EF:** En el ejemplo $f(x+f(y))=f(x)+y$ ya vimos que $f$ es inyectiva y sobreyectiva, luego es **biyectiva** y existe $f^{-1}$. La relación $f(f(y))=y+f(0)$ dice que $f\circ f$ es la traslación $y\mapsto y+f(0)$; en particular, si además $f(0)=0$, entonces $f$ es **involutiva** ($f(f(y))=y$, es decir, $f^{-1}=f$).

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

**Hallar todas las $f:\mathbb{R}\to\mathbb{R}$ tales que $f(x)+2f(1-x)=x^2$ para todo $x\in\mathbb{R}$.**

*La idea.* No hay $f$ dentro de $f$ ni variables libres independientes: solo aparecen $f(x)$ y $f(1-x)$. La sustitución $x\to 1-x$ intercambia esos dos valores y genera una **segunda ecuación** con las mismas dos incógnitas $f(x)$ y $f(1-x)$. Dos ecuaciones lineales, dos incógnitas: se resuelve como un sistema.

**Solución.** Llamemos $(1)$ a la ecuación dada:

$$f(x)+2f(1-x)=x^2.$$

Sustituimos $x$ por $1-x$ (válido porque la ecuación vale para todo real, y $1-(1-x)=x$); la llamamos $(2)$:

$$f(1-x)+2f(x)=(1-x)^2.$$

Tratamos $u=f(x)$ y $v=f(1-x)$ como incógnitas del sistema formado por $(1)$ y $(2)$:

$$\begin{cases} u+2v=x^2,\\ 2u+v=(1-x)^2. \end{cases}$$

Multiplicamos la segunda por $2$ y le restamos la primera: $4u+2v-(u+2v)=2(1-x)^2-x^2$, es decir $3u=2(1-x)^2-x^2$. Desarrollando $2(1-x)^2-x^2=2(1-2x+x^2)-x^2=x^2-4x+2$, de modo que

$$f(x)=u=\frac{x^2-4x+2}{3}.$$

**Verificación.** Con esta $f$, $f(1-x)=\dfrac{(1-x)^2-4(1-x)+2}{3}=\dfrac{x^2+2x-1}{3}$, y entonces

$$f(x)+2f(1-x)=\frac{(x^2-4x+2)+2(x^2+2x-1)}{3}=\frac{3x^2}{3}=x^2. \checkmark$$

Como el sistema tiene determinante $1\cdot1-2\cdot2=-3\neq0$, la solución es **única**: $\boxed{f(x)=\dfrac{x^2-4x+2}{3}}$. $\square$

*La moraleja.* Cuando la ecuación solo relaciona $f$ evaluada en un puñado de puntos ligados por una transformación (aquí $x\leftrightarrow 1-x$), itera esa transformación hasta cerrar un **sistema lineal** y resuélvelo. No hace falta adivinar la forma de $f$: sale forzada.

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
| Acotada | $\lvert f(x)\rvert\leq M$ | Con Cauchy $\Rightarrow$ $f(x)=cx$ |

## Problemas relacionados

**Problema 1 (regional).** Sea $f:\mathbb{Z}\to\mathbb{Z}$ con $f(m+n)=f(m)+f(n)$ para todo $m,n$. Probar que $f(n)=f(1)\cdot n$ para todo $n\in\mathbb{Z}$.

[[pista]]

Calcula primero $f(0)$, luego $f(n)$ para $n>0$ por inducción sumando $1$ cada vez, y por último relaciona $f(-n)$ con $f(n)$.

[[/pista]]

[[solución]]

Sea $c=f(1)$.

*Cero.* Con $m=n=0$: $f(0)=f(0)+f(0)$, luego $f(0)=0$.

*Enteros positivos.* Por inducción, $f(n)=f(n-1+1)=f(n-1)+f(1)=f(n-1)+c$. Como $f(0)=0$, sumando se obtiene $f(n)=nc$ para todo $n\geq0$.

*Enteros negativos.* Con $m=n$ y $-n$: $0=f(0)=f(n+(-n))=f(n)+f(-n)$, luego $f(-n)=-f(n)=-nc$. 

En todos los casos $f(n)=cn=f(1)\cdot n$. $\blacksquare$

[[/solución]]

**Problema 2 (regional).** Demostrar que si $f:\mathbb{R}\to\mathbb{R}$ cumple $f(f(x))=x$ para todo $x$, entonces $f$ es biyectiva, y describir su estructura (puntos fijos y parejas intercambiadas).

[[pista]]

Como $f(f(x))=x$, los puntos se agrupan en parejas $\{x,f(x)\}$ con $x\neq f(x)$, salvo los puntos fijos. La inyectividad impide que dos $x$ distintos compartan imagen.

[[/pista]]

[[solución]]

La condición $f(f(x))=x$ dice que $f$ es su propia inversa (involución), y en particular biyectiva. Para cada $x$, o bien $f(x)=x$ (punto fijo), o bien $f(x)\neq x$, y entonces $\{x,f(x)\}$ es una pareja que $f$ intercambia (pues $f(f(x))=x$). 

Así $f$ descompone $\mathbb{R}$ en puntos fijos y en parejas intercambiadas $\{a,b\}$ con $f(a)=b$, $f(b)=a$, $a\neq b$. No hay ninguna obstrucción a que haya $0$, $1$ o muchos puntos fijos: por ejemplo $f(x)=x$ los tiene todos, $f(x)=-x$ tiene exactamente uno ($x=0$), y $f(x)=x+1$ si $x$ par, $x-1$ si $x$ impar (sobre $\mathbb{Z}$) no tiene ninguno. La estructura forzada por inyectividad $+$ involución es precisamente esa partición en puntos fijos y trasposiciones. $\blacksquare$

[[/solución]]

**Problema 3 (nacional).** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x+f(y))=y+f(x)$ para todo $x,y$. Probar que $f$ es biyectiva e involutiva ($f(f(x))=x$).

[[pista]]

Para inyectividad, fija $x$ y varía $y$. Para la involución, sustituye $x=0$ y luego usa la sobreyectividad para eliminar la constante $f(0)$.

[[/pista]]

[[solución]]

*Inyectividad.* Si $f(y_1)=f(y_2)$, entonces $y_1+f(x)=f(x+f(y_1))=f(x+f(y_2))=y_2+f(x)$, luego $y_1=y_2$.

*Sobreyectividad.* Con $x=0$: $f(f(y))=y+f(0)$. El lado derecho recorre todo $\mathbb{R}$, así que $f\circ f$ es sobreyectiva, y por tanto $f$ también.

*Involución.* Sea $c=f(0)$. Tenemos $f(f(y))=y+c$. Como $f$ es sobreyectiva, existe $a$ con $f(a)=0$. Poniendo $y=a$ en la ecuación original con $x=a$: $f(a+f(a))=a+f(a)$, es decir $f(a+0)=a+0$, o sea $f(a)=a$. Pero $f(a)=0$, luego $a=0$ y $c=f(0)=0$. Por tanto $f(f(y))=y$: $f$ es involutiva (y biyectiva, por ser involución). $\blacksquare$

[[/solución]]

**Problema 4 (nacional).** Sea $f:\mathbb{R}^+\to\mathbb{R}^+$ con $f(xf(y))=yf(x)$ para todo $x,y>0$. Probar que $f$ es inyectiva y que $f$ es involutiva.

[[pista]]

Para inyectividad usa $x=1$. Después busca $f(1)$ y aplica la ecuación con valores bien elegidos para obtener $f(f(y))=y$.

[[/pista]]

[[solución]]

*Inyectividad.* Con $x=1$: $f(f(y))=y\,f(1)$. Si $f(y_1)=f(y_2)$, aplicando $f$ y usando esta relación, $y_1f(1)=f(f(y_1))=f(f(y_2))=y_2f(1)$; como $f(1)>0$, se cancela y $y_1=y_2$.

*Valor en $1$.* Pongamos $x=y=1$: $f(f(1))=f(1)$. Por inyectividad, $f(1)=1$.

*Involución.* Volviendo a $f(f(y))=y\,f(1)=y$, concluimos $f(f(y))=y$ para todo $y>0$: $f$ es involutiva (y, en particular, biyectiva). $\blacksquare$

[[/solución]]

**Problema 5 (nacional).** Demostrar que si $f:\mathbb{R}\to\mathbb{R}$ es monótona y satisface $f(x+y)=f(x)+f(y)$ para todos $x,y$, entonces $f(x)=cx$ para alguna constante $c$.

[[pista]]

La ecuación de Cauchy da $f(q)=cq$ para todo racional $q$ (con $c=f(1)$). La monotonía extiende la igualdad a los irracionales por densidad.

[[/pista]]

[[solución]]

Sea $c=f(1)$. Como en el Problema 1, la aditividad da $f(q)=cq$ para todo $q\in\mathbb{Q}$ (primero enteros, luego $f(p/q)$ usando $q\cdot f(p/q)=f(p)=cp$).

Sea ahora $x\in\mathbb{R}$ cualquiera y supongamos $f$ no decreciente (el caso no creciente es análogo). Tomamos racionales $q_1\leq x\leq q_2$ tan próximos a $x$ como queramos. Por monotonía,

$$cq_1=f(q_1)\leq f(x)\leq f(q_2)=cq_2.$$

Si $c\geq0$, haciendo $q_1\uparrow x$ y $q_2\downarrow x$ ambos extremos tienden a $cx$, luego $f(x)=cx$. (Si $f$ fuese no creciente, $c\leq0$ y el mismo argumento con las desigualdades invertidas da $f(x)=cx$.) Por densidad de $\mathbb{Q}$, esto vale para todo $x$, así que $f(x)=cx$. $\blacksquare$

[[/solución]]
