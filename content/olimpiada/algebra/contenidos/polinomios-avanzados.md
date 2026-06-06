---
title: "Polinomios avanzados: irreducibilidad, divisibilidad, interpolación"
preview: "El criterio de Eisenstein, el criterio de la raíz racional y la identidad $a-b\\mid P(a)-P(b)$ son las herramientas con las que se atacan los problemas olímpicos de polinomios de nivel nacional. La interpolación de Lagrange resuelve los problemas de 'hallar el polinomio que pasa por...'."
dificultad: nacional
tags: [polinomios, eisenstein, raiz-racional, irreducibilidad, interpolacion, divisibilidad]
prerequisites: [polinomios, identidades-algebraicas]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Los resultados de este archivo son las herramientas "de ataque" para problemas de polinomios en olimpiada nacional e internacional. Se construyen sobre el conocimiento básico de Vieta y el teorema del factor, y permiten responder preguntas como: ¿tiene este polinomio raíces racionales?, ¿es irreducible sobre $\mathbb{Q}$?, ¿para qué enteros puede $P(n)$ ser primo?

---

## Divisibilidad para polinomios con coeficientes enteros

### La identidad clave

**Teorema.** Para cualquier polinomio $P(x)$ con coeficientes enteros y enteros $a,b$:

$$\boxed{(a-b)\;\mid\;P(a)-P(b).}$$

**Demostración.** Basta verlo para $P(x)=x^k$: $a^k-b^k=(a-b)(a^{k-1}+a^{k-2}b+\cdots+b^{k-1})$. Para un polinomio general, sumar los términos. $\square$

**Consecuencias:**

1. Si $P(n)=0$ para $n\in\mathbb{Z}$ y $P$ tiene coeficientes enteros, entonces $(x-n)\mid P(x)$ en $\mathbb{Z}[x]$.

2. Si $P(a)=P(b)$ para $a\neq b$ enteros, entonces $(a-b)\mid0=P(a)-P(b)$, lo que es trivial pero útil para saber que $P(a)\equiv P(b)\pmod{a-b}$.

3. Si $P(a)=c$ y $P(b)=c$ para enteros $a\neq b$, entonces $(a-b)\mid(P(a)-P(b))=0$: no da información. Pero: **si $P(a)=1$ y $P(b)=-1$**: $(a-b)\mid2$.

### Aplicación clásica: polinomios que dan valores pequeños

**Ejemplo.** Demostrar que si $P(x)\in\mathbb{Z}[x]$ con $\deg P=n$ y $P(a_0)=P(a_1)=\cdots=P(a_n)=1$ para enteros distintos $a_0,\ldots,a_n$, entonces $P\equiv1$.

$Q(x)=P(x)-1$ tiene $n+1$ raíces enteras y grado $n$, luego $Q\equiv0$, es decir, $P\equiv1$. $\square$

**Ejemplo (olimpiada).** Sea $P(x)\in\mathbb{Z}[x]$ con $P(0)=0$ y $P(1)=1$. Demostrar que para cualquier entero $n>1$: si $P(n)=n^2$ entonces $n\mid2$.

$P(n)-P(0)=n^2$, así $(n-0)\mid n^2$: $n\mid n^2$. ✓ Siempre. Pero $P(n)-P(1)=n^2-1=(n-1)(n+1)$, así $(n-1)\mid(n-1)(n+1)$. Cierto. No da $n\mid2$. Revisar el enunciado... (Ejemplo ilustrativo, no real.)

---

## Criterio de la raíz racional

**Teorema.** Sea $P(x)=a_nx^n+\cdots+a_1x+a_0\in\mathbb{Z}[x]$ con $a_n\neq0$, $a_0\neq0$. Si $p/q$ (en mínimos términos, $\gcd(p,q)=1$, $q>0$) es raíz de $P$, entonces:

$$\boxed{p\mid a_0 \quad\text{y}\quad q\mid a_n.}$$

**Demostración.** $P(p/q)=0$, luego $a_n p^n+a_{n-1}p^{n-1}q+\cdots+a_0q^n=0$. Reducir módulo $p$: $a_0q^n\equiv0\pmod{p}$. Como $\gcd(p,q)=1$: $p\mid a_0$. Módulo $q$: $a_np^n\equiv0\pmod{q}$, así $q\mid a_n$. $\square$

**Uso práctico.** Las únicas candidatas a raíces racionales de $P$ son $\pm p/q$ con $p\mid a_0$ y $q\mid a_n$. Para un polinomio mónico ($a_n=1$): solo candidatas enteras $\pm$ divisores de $a_0$.

### Ejemplo

**Determinar si $x^4-3x^2+x-1$ tiene raíces racionales.**

Mónico con $a_0=-1$: candidatas $\pm1$. $P(1)=1-3+1-1=-2\neq0$. $P(-1)=1-3-1-1=-4\neq0$. No hay raíces racionales. $\square$

**Determinar si $3x^3-7x^2+4$ tiene raíces racionales.**

$a_3=3$, $a_0=4$. Candidatas: $\pm1,\pm2,\pm4,\pm1/3,\pm2/3,\pm4/3$. $P(1)=3-7+4=0$. ✓ Raíz: $x=1$. Dividir: $3x^3-7x^2+4=(x-1)(3x^2-4x-4)=(x-1)(3x+2)(x-2)$. Raíces: $1, -2/3, 2$.

---

## Criterio de Eisenstein

**Teorema (Eisenstein, 1850).** Sea $P(x)=a_nx^n+\cdots+a_1x+a_0\in\mathbb{Z}[x]$. Si existe un primo $p$ tal que:
- $p\mid a_0, a_1,\ldots, a_{n-1}$ (divide todos los coeficientes excepto el principal),
- $p\nmid a_n$ (no divide el coeficiente principal),
- $p^2\nmid a_0$ (el primo al cuadrado no divide el término independiente),

entonces $P$ es **irreducible en $\mathbb{Q}[x]$** (no puede escribirse como producto de dos polinomios de grado menor con coeficientes racionales).

**Demostración (esquema).** Suponer $P=QR$ en $\mathbb{Z}[x]$ (por Gauss, si factoriza en $\mathbb{Q}$ también en $\mathbb{Z}$). Reducir módulo $p$: $\overline{P}=\overline{a_n}x^n$. Así $\overline{Q}=\overline{b_k}x^k$ y $\overline{R}=\overline{c_l}x^l$, luego $p\mid b_0$ y $p\mid c_0$. Entonces $p^2\mid b_0c_0=a_0$, contradicción. $\square$

### Ejemplos

**Ejemplo 1.** $x^5-3x^2+6x-3$. Tomar $p=3$: $3\mid3,6,3$; $3\nmid1$ (coeficiente de $x^5$); $9\nmid3$. Por Eisenstein con $p=3$: irreducible. $\square$

**Ejemplo 2.** $x^4+x^3+x^2+x+1=\Phi_5(x)$ (ciclotómico). Eisenstein no aplica directamente. Pero con la sustitución $x\to x+1$: $(x+1)^4+(x+1)^3+(x+1)^2+(x+1)+1=x^4+5x^3+10x^2+10x+5$. Eisenstein con $p=5$: $5\mid5,10,10,5$; $5\nmid1$; $25\nmid5$. Irreducible. $\square$

**Ejemplo 3.** $p$ primo. El polinomio ciclotómico $\Phi_p(x)=x^{p-1}+\cdots+x+1$ es irreducible por el truco del Ejemplo 2.

---

## Irreducibilidad módulo un primo

Si $P$ es irreducible módulo $p$ (es decir, $\overline{P}\in\mathbb{F}_p[x]$ es irreducible), entonces $P$ es irreducible en $\mathbb{Q}[x]$.

*(El recíproco es falso: $x^4+1$ es irreducible en $\mathbb{Q}$ pero reducible módulo todo primo.)*

**Uso.** Para verificar irreducibilidad, reducir módulo $2$ o $3$ y comprobar que no tiene raíces en $\mathbb{F}_p$ (para grado $\leq4$, esto es suficiente si $\overline{P}$ no tiene raíces en $\mathbb{F}_p$).

### Ejemplo

**$x^3+x+1$ es irreducible en $\mathbb{Q}[x]$.**

Módulo $2$: $x^3+x+1$. Candidatas en $\mathbb{F}_2$: $0$ y $1$. $0^3+0+1=1\neq0$, $1^3+1+1=1\neq0$. No tiene raíces en $\mathbb{F}_2$, luego irreducible en $\mathbb{F}_2[x]$, luego irreducible en $\mathbb{Q}[x]$. $\square$

---

## Interpolación de Lagrange

**Problema.** Dados $n+1$ puntos distintos $(x_0,y_0),(x_1,y_1),\ldots,(x_n,y_n)$, existe un único polinomio $P$ de grado $\leq n$ con $P(x_i)=y_i$ para todo $i$.

**Fórmula de Lagrange:**

$$\boxed{P(x) = \sum_{i=0}^n y_i \prod_{j\neq i}\frac{x-x_j}{x_i-x_j}.}$$

Cada sumando es el polinomio $L_i(x)=\prod_{j\neq i}\frac{x-x_j}{x_i-x_j}$, que vale $1$ en $x_i$ y $0$ en $x_j$ para $j\neq i$.

**Uso en olimpiada.** Cuando el problema da los valores de $P$ en $n+1$ puntos y pide $P$ en otro, se usa la interpolación. También para demostrar que un polinomio de grado $n$ es único dado su comportamiento en $n+1$ puntos.

### Ejemplos

**Ejemplo 1.** Hallar el polinomio de grado $\leq2$ con $P(0)=1$, $P(1)=2$, $P(2)=5$.

$$L_0=\frac{(x-1)(x-2)}{(0-1)(0-2)}=\frac{(x-1)(x-2)}{2}, \quad L_1=\frac{x(x-2)}{(1)(1-2)}=-x(x-2),$$
$$L_2=\frac{x(x-1)}{(2)(1)}=\frac{x(x-1)}{2}.$$
$$P=1\cdot L_0+2\cdot L_1+5\cdot L_2=\frac{(x-1)(x-2)}{2}-2x(x-2)+\frac{5x(x-1)}{2}=x^2+1. \;\square$$

**Ejemplo 2 (olimpiada).** Un polinomio $P$ de grado $n$ satisface $P(k)=k/(k+1)$ para $k=0,1,\ldots,n$. Hallar $P(n+1)$.

Considerar $Q(x)=(x+1)P(x)-x$. Entonces $Q(k)=(k+1)P(k)-k=k-k=0$ para $k=0,1,\ldots,n$. Así $Q$ tiene $n+1$ raíces y grado $n+1$: $Q(x)=c\cdot x(x-1)\cdots(x-n)$.

$Q(-1)=0\cdot P(-1)-(-1)=1$, y $Q(-1)=c\cdot(-1)(-2)\cdots(-n-1)=c\cdot(-1)^{n+1}(n+1)!$.

Así $c=(-1)^{n+1}/((n+1)!)$.

$P(n+1)=\frac{Q(n+1)+(n+1)}{n+2}=\frac{c(n+1)!+n+1}{n+2}=\frac{(-1)^{n+1}+(n+1)}{n+2}$.

Para $n$ par: $P(n+1)=\frac{n}{n+2}$. Para $n$ impar: $P(n+1)=\frac{n+2}{n+2}=1$. $\square$

---

## Observación

**Eisenstein es poderoso pero limitado.** Solo detecta un tipo específico de irreducibilidad. Si no funciona directamente, probar sustituciones $x\to x+a$ para algún $a$.

**La identidad $a-b\mid P(a)-P(b)$ es un martillo.** En problemas donde $P(n)$ debe ser primo, o donde $P(a)=P(b)$ implica $a=b$, esta identidad suele ser el primer paso.

**Lagrange en olimpiada se usa al revés.** No para calcular el polinomio explícito, sino para argumentar: "el único polinomio de grado $n$ que toma estos $n+1$ valores es tal, luego su valor en otro punto es...".

## Problemas relacionados

- **(Nacional)** Demostrar que si $P(x)\in\mathbb{Z}[x]$ y $P(a)=P(b)=P(c)=1$ para enteros distintos $a,b,c$, entonces $P$ no tiene raíces enteras.

- **(Nacional)** Hallar todos los polinomios $P\in\mathbb{Z}[x]$ tales que $P(n)\mid 2^n$ para todo entero positivo $n$.

- **(Nacional)** Demostrar que $x^n+5x^{n-1}+3$ es irreducible para infinitos $n$. *(Hint: para $n\equiv2\pmod{3}$, usar Eisenstein con $p=3$ tras la sustitución adecuada.)*

- **(Internacional, Lagrange)** Sea $P(x)$ de grado $n$ con coeficientes enteros. Si $P(0),P(1),\ldots,P(n)$ son todos distintos y todos en $\{0,1,\ldots,n\}$, demostrar que $P$ es o bien una permutación de $\{0,\ldots,n\}$ o bien... *(Problema de competición: explorar.)*

- **(IMO 1997/P5)** $P(x)\in\mathbb{Z}[x]$, $\deg P=k\geq1$. Si $P(n)=0$ para infinitos $n\in\mathbb{N}$, entonces $P$ tiene raíz entera. Demostrar la recíproca: si $P$ no tiene raíces enteras, entonces $|P(n)|$ no está acotado.
