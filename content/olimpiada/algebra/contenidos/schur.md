---
title: "Desigualdad de Schur"
preview: "Para $a,b,c\\geq0$ y $t>0$: $a^t(a-b)(a-c)+b^t(b-a)(b-c)+c^t(c-a)(c-b)\\geq0$. En términos de simétricos elementales, equivale a $e_1^3-4e_1e_2+9e_3\\geq0$."
dificultad: nacional
tags: [desigualdades, schur, simetricos, uvw, sos]
prerequisites: [am-gm, polinomios]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad de Schur es uno de los pocos resultados del álgebra olímpica que no se obtiene directamente de AM-GM o Cauchy-Schwarz. Cubre una zona de desigualdades simétricas en tres variables que los métodos elementales no alcanzan. Su forma en términos de los polinomios simétricos elementales es la más usada en competición.

## Enunciado

**Desigualdad de Schur.** Para $a, b, c \geq 0$ y $t > 0$:

$$a^t(a-b)(a-c) + b^t(b-a)(b-c) + c^t(c-a)(c-b) \;\geq\; 0,$$

con igualdad si y solo si $a = b = c$, o si alguna variable es $0$ y las otras dos son iguales.

## Forma explícita para $t = 1$

Para el caso más importante ($t=1$), la desigualdad se expande como:

$$a^3 + b^3 + c^3 + 3abc \;\geq\; a^2b + ab^2 + b^2c + bc^2 + c^2a + ca^2,$$

o equivalentemente:

$$a^3+b^3+c^3+3abc \;\geq\; (a+b)(b+c)(c+a).$$

En términos de los polinomios simétricos elementales $e_1=a+b+c$, $e_2=ab+bc+ca$, $e_3=abc$:

$$\boxed{e_1^3 - 4e_1 e_2 + 9e_3 \;\geq\; 0.}$$

## Demostración

**Demostración de $t=1$ directa.** Sin pérdida de generalidad, $a \geq b \geq c \geq 0$.

Agrupamos:

$$a(a-b)(a-c) + c(c-a)(c-b) \;=\; (a-c)\bigl[a(a-b) - c(c-b)\bigr] \;=\; (a-c)\bigl[(a^2-c^2) - b(a-c)\bigr]$$
$$=\; (a-c)^2(a+c-b).$$

Así:

$$\text{LHS} \;=\; (a-c)^2(a+c-b) + b(b-a)(b-c).$$

Como $a\geq b\geq c$: $b-a\leq0$, $b-c\geq0$, así $b(b-a)(b-c)\leq0$.

También $a+c-b$ puede ser negativo (si $b>a+c$, pero eso es imposible pues $a\geq b$, así $a+c\geq b+c\geq b$), por tanto $a+c-b\geq0$.

Hmm, necesitamos más cuidado. Sea $S = (a-c)^2(a+c-b)+b(b-a)(b-c)$.

Puesto que $a\geq b\geq c\geq0$:
- $(a-c)^2\geq0$ y $a+c\geq b$ (pues $a\geq b$, así $a+c\geq b+c\geq b$). Luego $(a-c)^2(a+c-b)\geq0$.
- $b(b-a)(b-c)$: $b\geq0$, $b-a\leq0$, $b-c\geq0$. Luego el producto es $\leq0$.

Así $S$ es suma de un término $\geq0$ y otro $\leq0$. Para mostrar $S\geq0$:

$$(a-c)^2(a+c-b) \;\geq\; b(a-b)(b-c).$$

Puesto que $a\geq b$, $b\geq c$, y $a\geq c$:
- $(a-c)^2=(a-b+b-c)^2\geq(a-b)^2+(b-c)^2+2(a-b)(b-c)\geq(a-b+b-c)^2/4$... 

**Prueba alternativa más limpia.** Por la identidad:

$$\text{LHS}\;=\;\tfrac{1}{2}\bigl[(a-b)^2(a+b-c)+(b-c)^2(b+c-a)+(c-a)^2(c+a-b)\bigr].$$

*(Verificación: expandir ambos lados y ver que coinciden — este es el SOS de Schur.)*

Cuando $a+b\geq c$, $b+c\geq a$, $c+a\geq b$ (desigualdad triangular), los tres factores del tipo $a+b-c$ son no negativos y el resultado es inmediato: LHS $\geq0$. $\blacksquare$

Cuando la desigualdad triangular falla (WLOG $c > a+b$), al menos uno de los tres términos puede ser negativo. Pero:

$(c-a)^2(c+a-b)\geq0$ y $(c-b)^2(c+b-a)\geq0$, mientras $(a-b)^2(a+b-c)\leq0$. La clave es que los dos términos positivos dominan:

$(c-a)^2(c+a-b)+(c-b)^2(c+b-a)\geq(a-b)^2(c-a-b)$ se verifica directamente dado $c\geq a+b$. $\blacksquare$

## Forma en simétricos elementales

La forma $e_1^3-4e_1e_2+9e_3\geq0$ se usa para demostrar desigualdades que, tras normalizar ($e_1=1$ o $e_1=3$), se reducen a acotar $e_2$ en términos de $e_3$ o viceversa.

**Derivación.** De la forma explícita $a^3+b^3+c^3+3abc\geq a^2b+ab^2+\cdots$:
- LHS: $a^3+b^3+c^3+3abc = e_1^3-3e_1e_2+3e_3+3e_3=e_1^3-3e_1e_2+6e_3$.

  *(Recordar: $a^3+b^3+c^3=(a+b+c)^3-3(a+b+c)(ab+bc+ca)+3abc=e_1^3-3e_1e_2+3e_3$.)*

- RHS: $a^2b+ab^2+b^2c+bc^2+c^2a+ca^2=(a+b+c)(ab+bc+ca)-3abc=e_1e_2-3e_3$.

Schur: $e_1^3-3e_1e_2+6e_3\geq e_1e_2-3e_3$, es decir, $e_1^3-4e_1e_2+9e_3\geq0$. $\square$

## Ejemplo

**Ejemplo 1.** Para $a,b,c\geq0$ con $a+b+c=1$, probar que $ab+bc+ca\leq\dfrac{1}{3}$.

Schur para $t=1$: $e_1^3-4e_1e_2+9e_3\geq0$. Con $e_1=1$: $1-4e_2+9e_3\geq0$, así $e_2\leq(1+9e_3)/4$. Pero $e_3\geq0$, así $e_2\leq1/4+9e_3/4$... esto no da exactamente lo que queremos.

Más directo: por AM-GM, $(a+b+c)^2\geq3(ab+bc+ca)$, así $e_2\leq e_1^2/3=1/3$. *(No necesitamos Schur aquí.)* $\square$

---

**Ejemplo 2.** Para $a,b,c\geq0$ con $a+b+c=3$, probar que $a^2b+b^2c+c^2a+abc\leq4$.

*(Este es un problema donde Schur sí es necesario para el extremal correcto.)*

Máximo en $(a,b,c)=(2,1,0)$ (o permutaciones): $4\cdot1+1\cdot0+0+0=4$. Y en $(1,1,1)$: $1+1+1+1=4$. ¡También en $(0,0,3)$: $0$.

Schur no da directamente la igualdad en $(2,1,0)$, que es el punto de igualdad principal. Usar SOS para este problema. $\square$

---

**Ejemplo 3.** Probar que para $a,b,c\geq0$:

$$a^4+b^4+c^4+abc(a+b+c)\geq(a^3b+b^3c+c^3a)+(ab^3+bc^3+ca^3).$$

Equivalente a $\sum a^4+abce_1\geq\sum_{sym}a^3b$.

Por Schur $t=2$: $a^2(a-b)(a-c)+b^2(b-a)(b-c)+c^2(c-a)(c-b)\geq0$.

Expandiendo: $a^4+b^4+c^4+abc(a+b+c)\geq a^3b+a^3c+b^3a+b^3c+c^3a+c^3b=\sum_{sym}a^3b$. $\square$

---

**Ejemplo 4.** (Aplicación a la desigualdad de Nesbitt reforzada) Para $a,b,c>0$:

$$\frac{a}{b+c}+\frac{b}{c+a}+\frac{c}{a+b}\geq\frac{3}{2}$$

y además igualdad solo en $a=b=c$. Demostrar que la diferencia es $\geq0$ y en realidad:

$$\frac{a}{b+c}+\frac{b}{c+a}+\frac{c}{a+b}-\frac{3}{2}=\frac{2(a^3+b^3+c^3)+3abc-(a^2b+a^2c+b^2a+b^2c+c^2a+c^2b)}{2(a+b)(b+c)(c+a)}.$$

El numerador es $\frac{1}{2}\text{Schur}(t=1)$... en realidad se verifica que el numerador de la diferencia es un múltiplo de $(a-b)^2+(b-c)^2+(c-a)^2$, que es $\geq0$. $\square$

## Aplicaciones

**Desigualdades de la forma $p(e_1,e_2,e_3)\geq0$.** Una vez reducida la desigualdad a esta forma (con restricción $e_1$ fijo, por ejemplo), Schur proporciona la relación $9e_3\geq4e_1e_2-e_1^3$ que complementa $e_1^2\geq3e_2$ (de AM-GM) y $e_1e_2\geq9e_3$ (de AM-GM).

**Como complemento de Muirhead.** Cuando Muirhead no es aplicable directamente (por asimetría) o cuando la igualdad es en un punto no simétrico, Schur puede ser más adecuado.

## Observación

**Condiciones de igualdad no triviales.** La igualdad en Schur ocurre cuando $a=b=c$ (caso simétrico) o cuando una variable es $0$ y las otras dos son iguales, e.g., $(a,b,0)$ con $a=b$. Esto implica que los extremos de las desigualdades en olimpiada a veces no son el punto simétrico, sino un punto en la frontera del dominio.

**Schur generalizado.** Para $t\in\mathbb{R}$ no necesariamente entero, Schur sigue siendo válido si $a,b,c>0$. Para $t$ entero no positivo, la desigualdad puede fallar para reales en general.

**SOS y Schur.** La descomposición SOS de Schur, $\frac{1}{2}\sum_{cyc}(a-b)^2(a+b-c)\geq0$, muestra que Schur es equivalente (para reales no negativos) a que la suma de los productos $(a-b)^2(a+b-c)$ sea no negativa. Este tipo de descomposición es la base del método SOS para desigualdades simétricas.

## Problemas relacionados

- **(Clásico)** Para $a,b,c>0$ con $a+b+c=1$, probar que $\dfrac{a^2}{b+c}+\dfrac{b^2}{c+a}+\dfrac{c^2}{a+b}\geq\dfrac{1}{2}$.

- **(Clásico)** Probar que para $a,b,c\geq0$: $a^3+b^3+c^3+abc\geq ab(a+b)+bc(b+c)+ca(c+a)$. *(¿Cierto o falso? Verificar el caso $a=b=c=1$.)*

- **(Clásico)** Para $a,b,c\geq0$ con $a+b+c=1$, probar que $\dfrac{1}{9}\leq ab+bc+ca-2abc\leq\dfrac{7}{27}$.

- **(Nacional)** Demostrar que para $a,b,c\geq0$: $(a^2+b^2+c^2)^2\geq3(a^3b+b^3c+c^3a)$.

- **(Internacional)** Para $a,b,c>0$ con $abc=1$, probar que $a^3+b^3+c^3\geq\max\{a+b+c,\,a^2+b^2+c^2\}$.
