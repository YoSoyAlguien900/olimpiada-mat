---
title: "Sustitución y normalización en desigualdades"
preview: "Antes de atacar una desigualdad, simplificarla: normalizar la suma o el producto, aplicar la sustitución de Ravi para triángulos, o usar la sustitución trigonométrica. La elección correcta convierte un problema difícil en trivial."
dificultad: nacional
tags: [desigualdades, sustitucion, normalizacion, ravi, trigonometrica]
prerequisites: [am-gm, cauchy-schwarz]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Las desigualdades olímpicas pocas veces se atacan en su forma original. Antes de aplicar AM-GM, Cauchy o Jensen, conviene transformar la expresión mediante una sustitución que simplifique la estructura. Las técnicas de normalización y sustitución de Ravi son las más versátiles.

## Normalización de la suma

**Principio.** Si la desigualdad es **homogénea** de grado $d$ (es decir, si sustituir $a_i \to \lambda a_i$ multiplica ambos lados por $\lambda^d$), podemos fijar una combinación lineal de las variables, por ejemplo $a+b+c=1$ o $a+b+c=3$.

**Cuándo aplicar.** Cuando la desigualdad tiene el mismo grado en numerador y denominador, o cuando es de la forma $P(a,b,c)\geq 0$ con $P$ homogéneo.

**Ejemplo.** Probar que para $a,b,c>0$: $a^2+b^2+c^2\geq ab+bc+ca$.

Ambos lados son grado 2. Normalizar: $a+b+c=1$. La desigualdad equivale a $(a+b+c)^2-2(ab+bc+ca)\geq ab+bc+ca$, es decir, $1\geq3(ab+bc+ca)$. Y por AM-GM: $ab+bc+ca\leq(a+b+c)^2/3=1/3$. ✓

*(En este caso la normalización no fue necesaria; el punto es ilustrar que con $\sum=1$ los cálculos son más limpios.)*

## Normalización del producto

**Cuándo aplicar.** Cuando la desigualdad tiene restricción $a_1\cdots a_n=1$ o $abc=k$ fijo, o cuando la introducción de $abc=1$ simplifica la expresión.

**Técnica.** Sustituir $a_i = \frac{x_i}{(x_1\cdots x_n)^{1/n}}$ para imponer que el producto sea $1$, y reescribir todo en términos de los $x_i$.

**Ejemplo.** Para $a,b,c>0$ con $abc=1$, probar que $a+b+c\geq3$.

$\frac{a+b+c}{3}\geq\sqrt[3]{abc}=1$, así $a+b+c\geq3$. ✓

La normalización del producto es la que permite aplicar AM-GM directamente: $\sqrt[n]{a_1\cdots a_n}$ ya está "calibrado".

## Sustitución de Ravi

**Cuándo aplicar.** Cuando $a, b, c > 0$ satisfacen la **desigualdad triangular** ($a+b>c$, $b+c>a$, $c+a>b$), o cuando el problema dice explícitamente que $a,b,c$ son lados de un triángulo.

**Sustitución.** Con $a, b, c$ lados de un triángulo, existen $x, y, z > 0$ únicos tales que:

$$a = y + z, \quad b = z + x, \quad c = x + y.$$

(Aquí $x,y,z$ son las semidiferencias: $x=(b+c-a)/2$, $y=(a+c-b)/2$, $z=(a+b-c)/2$.)

**Ventaja.** La sustitución convierte la desigualdad triangular en la positividad de $x, y, z > 0$, sin restricción adicional. Muchas desigualdades triangulares se vuelven triviales tras la sustitución.

**Ejemplo.** Para lados $a,b,c$ de un triángulo, probar que $a^2+b^2+c^2<2(ab+bc+ca)$.

Con Ravi $a=y+z$, $b=z+x$, $c=x+y$:

$$a^2+b^2+c^2 = (y+z)^2+(z+x)^2+(x+y)^2 = 2(x^2+y^2+z^2+xy+yz+zx),$$

$$ab+bc+ca = (y+z)(z+x)+(z+x)(x+y)+(x+y)(y+z) = x^2+y^2+z^2+3(xy+yz+zx).$$

La desigualdad $a^2+b^2+c^2<2(ab+bc+ca)$ es equivalente a:

$$2(x^2+y^2+z^2+xy+yz+zx)<2(x^2+y^2+z^2+3(xy+yz+zx)),$$

$$0<4(xy+yz+zx),$$

que es cierto pues $x,y,z>0$. $\square$

---

**Ejemplo más elaborado.** Para lados $a,b,c$ de un triángulo, probar que

$$\frac{a}{b+c-a}+\frac{b}{c+a-b}+\frac{c}{a+b-c}\geq3.$$

Con $a=y+z$, $b=z+x$, $c=x+y$: los denominadores son $b+c-a=(z+x)+(x+y)-(y+z)=2x>0$, y análogamente $2y$ y $2z$. La desigualdad es:

$$\frac{y+z}{2x}+\frac{z+x}{2y}+\frac{x+y}{2z}\geq3.$$

Por AM-GM: $\frac{y}{x}+\frac{x}{y}\geq2$, $\frac{z}{y}+\frac{y}{z}\geq2$, $\frac{x}{z}+\frac{z}{x}\geq2$. Sumando y dividiendo entre $2$:

$$\frac{y+z}{2x}+\frac{z+x}{2y}+\frac{x+y}{2z} = \frac{1}{2}\left(\frac{y}{x}+\frac{z}{x}+\frac{z}{y}+\frac{x}{y}+\frac{x}{z}+\frac{y}{z}\right)\geq\frac{1}{2}\cdot6=3. \;\square$$

## Sustitución trigonométrica

**Cuándo aplicar.** Cuando las variables satisfacen restricciones del tipo $a^2+b^2=1$ (unitaria), $|a|\leq1$, o cuando aparecen expresiones de la forma $\sqrt{1-a^2}$.

**Sustitución.** Si $0\leq a\leq1$: $a=\sin\theta$ (o $a=\cos\theta$) con $\theta\in[0,\pi/2]$. Si $a^2+b^2=1$: $a=\cos\theta$, $b=\sin\theta$.

**Ejemplo.** Para $x,y\geq0$ con $x^2+y^2=1$, maximizar $x+y$.

$x=\cos\theta$, $y=\sin\theta$: $x+y=\cos\theta+\sin\theta=\sqrt2\sin(\theta+\pi/4)\leq\sqrt2$. Máximo en $\theta=\pi/4$: $x=y=1/\sqrt2$. $\square$

---

**Ejemplo.** Para $a,b,c>0$ con $a^2+b^2+c^2=1$, probar que $\dfrac{a}{1-a^2}+\dfrac{b}{1-b^2}+\dfrac{c}{1-c^2}\geq\dfrac{3\sqrt3}{2}$.

La función $g(t)=t/(1-t^2)$ es convexa para $t\in(0,1)$. Por Jensen con $a^2+b^2+c^2=1$ y la sustitución $a=\sin\alpha$ (y análogos): $g(\sin\alpha)=\sin\alpha/\cos(2\alpha)^{1/2}$... *(La prueba completa requiere más trabajo; el punto es identificar la sustitución trigonométrica como punto de partida.)*

## Otras sustituciones útiles

**Sustitución $t=a/(a+b)$ (proporcional).** Para fracciones $a/(a+b)$ donde $a+b$ aparece en el denominador, escribir $t\in(0,1)$ y $1-t=b/(a+b)$.

**Sustitución de Schur.** Para probar que una expresión simétrica es $\geq0$, sustituir $a=x+y$, $b=y+z$, $c=z+x$ (como en Ravi) y trabajar en $x,y,z>0$ sin restricción.

**Sustitución de SOS (preparación).** Para escribir una desigualdad como suma de cuadrados, a veces conviene sustituir $a-b=u$, $b-c=v$ y analizar en función de $u,v$.

## Observación

**La elección de la normalización es una habilidad.** No existe un criterio mecánico para saber qué normalización usar: depende de la estructura de la desigualdad. La experiencia con muchos problemas es lo que desarrolla la intuición.

**Verificar homogeneidad antes de normalizar.** Si la desigualdad no es homogénea, la normalización puede cambiar su verdad. Siempre verificar que ambos lados tengan el mismo grado de homogeneidad (o que la desigualdad sea entre cantidades de grado 0).

**La sustitución de Ravi nunca falla para triángulos.** Siempre que el problema menciona lados de un triángulo, la sustitución de Ravi es el primer movimiento a considerar.

## Problemas relacionados

- **(Clásico, Ravi)** Para $a,b,c$ lados de un triángulo, probar que $a^2(b+c-a)+b^2(c+a-b)+c^2(a+b-c)\leq3abc$.

- **(Clásico, normalización suma=1)** Para $a,b,c>0$ con $a+b+c=1$, probar que $\dfrac{a}{1-a}+\dfrac{b}{1-b}+\dfrac{c}{1-c}\geq\dfrac{3}{2}$.

- **(Clásico, trigonométrica)** Para $\alpha,\beta,\gamma>0$ con $\alpha+\beta+\gamma=\pi$, probar que $\sin\alpha+\sin\beta+\sin\gamma\leq\dfrac{3\sqrt3}{2}$.

- **(Nacional)** Para $a,b,c>0$ con $ab+bc+ca=1$, probar que $\dfrac{1}{a+b}+\dfrac{1}{b+c}+\dfrac{1}{c+a}\geq\dfrac{5}{2}$.

- **(Internacional)** Para $a,b,c>0$ con $a+b+c=abc$, hallar el mínimo de $ab+bc+ca$ y justificar que la restricción fuerza $a,b,c\geq\sqrt3$. *(Sustitución trigonométrica: $a=\tan A$, etc.)*
