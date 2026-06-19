---
title: "Desigualdad de potencias: HM ≤ GM ≤ AM ≤ QM"
preview: "La media armónica, geométrica, aritmética y cuadrática satisfacen $H\\leq G\\leq A\\leq Q$ para reales positivos. Son los cuatro representantes de la familia de medias de potencias $M_r=(\\frac{\\sum a_i^r}{n})^{1/r}$, que son crecientes en $r$."
dificultad: regional
tags: [desigualdades, medias, am-gm, media-armonica, media-cuadratica, power-mean]
prerequisites: [am-gm, cauchy-schwarz]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad AM-GM solo compara dos de las cuatro medias clásicas: la geométrica $G$ y la aritmética $A$. Pero a un mismo conjunto de reales positivos se le pueden asociar **cuatro** promedios distintos, y todos quedan ordenados en una sola cadena:

$$\boxed{H \;\leq\; G \;\leq\; A \;\leq\; Q.}$$

Dominar esta cadena es clave porque en olimpiada las medias casi nunca aparecen con su nombre: una condición sobre $\sum 1/a_i$ es la media armónica disfrazada, y una sobre $\sum a_i^2$ es la cuadrática. Reconocerlas convierte muchos problemas en una simple lectura de la cadena.

## Las cuatro medias clásicas

Para reales positivos $a_1,\ldots,a_n$ se definen:

| Media | Símbolo | Fórmula |
|---|---|---|
| Armónica | $H$ | $\dfrac{n}{\frac{1}{a_1}+\cdots+\frac{1}{a_n}}$ |
| Geométrica | $G$ | $\sqrt[n]{a_1a_2\cdots a_n}$ |
| Aritmética | $A$ | $\dfrac{a_1+\cdots+a_n}{n}$ |
| Cuadrática | $Q$ | $\sqrt{\dfrac{a_1^2+\cdots+a_n^2}{n}}$ |

La **desigualdad de medias de potencias** afirma que, para cualesquiera reales positivos,

$$H \;\leq\; G \;\leq\; A \;\leq\; Q,$$

con igualdad en *todas* las desigualdades simultáneamente si y solo si $a_1=a_2=\cdots=a_n$. Cada media es un "promedio" que da más o menos peso a los valores pequeños: la armónica es la más sensible a ellos (por eso es la menor) y la cuadrática a los grandes (por eso es la mayor).

**El caso $n=2$.** Conviene tener las cuatro fórmulas a la vista para dos variables $a,b>0$:

$$H = \frac{2ab}{a+b}, \qquad G=\sqrt{ab}, \qquad A=\frac{a+b}{2}, \qquad Q=\sqrt{\frac{a^2+b^2}{2}},$$

y la cadena se lee

$$\frac{2ab}{a+b}\;\leq\;\sqrt{ab}\;\leq\;\frac{a+b}{2}\;\leq\;\sqrt{\frac{a^2+b^2}{2}}.$$

## Demostración de la cadena

Los tres eslabones se apoyan en una sola desigualdad de fondo —AM-GM— más, para el último, Cauchy-Schwarz. Los probamos en orden, de menor a mayor.

### El eslabón central $G\leq A$

Es exactamente la desigualdad **AM-GM**, que damos por conocida:

$$\sqrt[n]{a_1\cdots a_n}\;\leq\;\frac{a_1+\cdots+a_n}{n}.$$

Es el ancla de toda la cadena: los otros dos eslabones se reducen a este.

### El eslabón inferior $H\leq G$

La media armónica de los $a_i$ no es más que el **inverso de la media aritmética de los inversos**: si llamamos $b_i=1/a_i$, entonces

$$\frac{1}{H}=\frac{1}{n}\sum_{i=1}^n\frac1{a_i}=\frac{b_1+\cdots+b_n}{n}=A(b_1,\ldots,b_n).$$

Aplicando AM-GM a los $b_i$ y observando que su media geométrica es $1/G$,

$$\frac{1}{H}=\frac{b_1+\cdots+b_n}{n}\;\geq\;\sqrt[n]{b_1\cdots b_n}=\sqrt[n]{\frac{1}{a_1\cdots a_n}}=\frac{1}{G}.$$

Como $H,G>0$, invertir la desigualdad cambia el sentido: $H\leq G$. $\blacksquare$

Dicho de otro modo: $H\leq G$ **es** $G\leq A$ aplicada a los recíprocos. Las dos mitades inferiores de la cadena son la misma desigualdad vista del derecho y del revés.

### El eslabón superior $A\leq Q$

Como ambos lados son positivos, $A\leq Q$ equivale a $A^2\leq Q^2$, es decir,

$$\left(\frac{a_1+\cdots+a_n}{n}\right)^2\;\leq\;\frac{a_1^2+\cdots+a_n^2}{n}\;\Longleftrightarrow\;\left(\sum a_i\right)^2\leq n\sum a_i^2.$$

Esta última es **Cauchy-Schwarz** aplicada a los vectores $(a_1,\ldots,a_n)$ y $(1,\ldots,1)$:

$$\left(\sum a_i\cdot 1\right)^2\leq\left(\sum a_i^2\right)\left(\sum 1^2\right)=n\sum a_i^2. \qquad\blacksquare$$

Equivalentemente, $n\sum a_i^2-(\sum a_i)^2=\sum_{i<j}(a_i-a_j)^2\geq0$, lo que además exhibe la igualdad: ocurre solo si todos los $a_i$ coinciden.

## La familia de medias de potencias

Las cuatro medias clásicas son casos particulares de una misma familia. Para reales positivos $a_1,\ldots,a_n$ y un exponente $r\neq0$, la **media de potencias de orden $r$** es

$$M_r = \left(\frac{a_1^r+a_2^r+\cdots+a_n^r}{n}\right)^{1/r}.$$

Los valores notables del exponente reproducen las medias ya vistas:

- $M_{-1}=H$ (armónica),
- $M_{1}=A$ (aritmética),
- $M_{2}=Q$ (cuadrática),
- $\displaystyle\lim_{r\to0}M_r=G$ (geométrica), el caso límite que rellena el hueco en $r=0$.

En los extremos, $M_r\to\max(a_i)$ cuando $r\to+\infty$ y $M_r\to\min(a_i)$ cuando $r\to-\infty$.

**Teorema (desigualdad de medias de potencias).** $M_r$ es **creciente en $r$**: si $r\leq s$, entonces $M_r\leq M_s$, con igualdad si y solo si todos los $a_i$ son iguales.

La cadena $H\leq G\leq A\leq Q$ es simplemente este teorema leído en los exponentes $-1<0<1<2$:

$$\min(a_i)\;\leq\;\underbrace{M_{-1}}_{H}\;\leq\;\underbrace{M_0}_{G}\;\leq\;\underbrace{M_1}_{A}\;\leq\;\underbrace{M_2}_{Q}\;\leq\;\max(a_i).$$

La demostración general se hace por convexidad (desigualdad de Jensen) y es el Problema 5.

## Ejemplo

*La idea común.* Casi todos los problemas de medias se resuelven con el mismo gesto: **identificar qué media calcula cada expresión del enunciado** y colocarlas en la cadena $H\leq G\leq A\leq Q$. La dificultad no está en la cuenta, sino en reconocer que "$\sum 1/a_i$" es la armónica disfrazada, que "$\sum a_i^2$" es la cuadrática, etc. Una vez identificadas, la desigualdad sale de leer la cadena en el sentido adecuado.

**Ejemplo 1 (reconocer la media armónica).** Para $a,b>0$, probar que $\dfrac{a+b}{2}\geq\dfrac{2ab}{a+b}$.

*La idea.* El lado izquierdo es la media aritmética $A$ y el derecho es la armónica $H$. La cadena ya dice $H\leq A$; basta invocarla. Si uno no la recuerda, despejar a "cuadrado $\geq0$" siempre funciona.

**Solución.** Es la desigualdad $H\leq A$, que por transitividad sale de $H\leq G\leq A$. Comprobación directa: multiplicando en cruz (ambos denominadores positivos), $\dfrac{a+b}{2}\geq\dfrac{2ab}{a+b}$ equivale a $(a+b)^2\geq4ab$, esto es $(a-b)^2\geq0$, cierto. Igualdad en $a=b$. $\square$

*La moraleja.* Reconocer $\dfrac{2ab}{a+b}$ como media armónica ahorra todo el álgebra: la desigualdad es un eslabón de la cadena, no algo que haya que demostrar desde cero.

**Ejemplo 2 (restricción en la suma de recíprocos).** Para $a,b,c>0$ con $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=3$, hallar el mínimo de $a+b+c$.

*La idea.* La condición fija $\sum 1/a_i=3$, es decir, **fija la media armónica**: $H=\dfrac{3}{\sum 1/a_i}=1$. Y $a+b+c=3A$. La cadena $H\leq A$ conecta lo que sabemos con lo que buscamos.

**Solución.** Por definición, $H=\dfrac{3}{\frac1a+\frac1b+\frac1c}=\dfrac{3}{3}=1$. Por $H\leq A$,

$$1=H\leq A=\frac{a+b+c}{3}\;\Longrightarrow\; a+b+c\geq3.$$

La igualdad de la cadena exige $a=b=c$, compatible con la restricción ($a=b=c=1$). El mínimo es $\boxed{3}$. $\square$

*La moraleja.* Cuando el dato es $\sum 1/a_i$, traduce de inmediato a "la media armónica es tal"; entonces el problema es un eslabón de la cadena.

**Ejemplo 3 (la media cuadrática).** Para $a,b,c>0$ con $a+b+c=3$, demostrar que $a^2+b^2+c^2\geq3$.

*La idea.* El dato fija $A=1$ y la conclusión habla de $\sum a_i^2$, que es la cuadrática: $Q^2=\dfrac{\sum a_i^2}{3}$. La cadena $A\leq Q$ es justo el puente.

**Solución.** Tenemos $A=\dfrac{a+b+c}{3}=1$. Por $A\leq Q$,

$$1=A\leq Q=\sqrt{\frac{a^2+b^2+c^2}{3}}\;\Longrightarrow\;\frac{a^2+b^2+c^2}{3}\geq1\;\Longrightarrow\;a^2+b^2+c^2\geq3,$$

con igualdad en $a=b=c=1$. $\square$

*La moraleja.* "Suma fija, acotar suma de cuadrados" es exactamente $A\leq Q$. Es el reflejo dual de AM-GM (que relaciona suma con producto).

## Aplicaciones

**Optimizar bajo restricción de recíprocos.** Si el problema fija $\sum 1/a_i$, fija $H$; la cadena entonces acota $G$, $A$ y $Q$ por debajo. Es la herramienta natural cuando los datos vienen "invertidos".

**Acotar sumas de cuadrados.** $A\leq Q$ da $\sum a_i^2\geq\dfrac{(\sum a_i)^2}{n}$ — la misma cota que Cauchy-Schwarz con pesos $1$. Aparece siempre que se quiere minimizar una suma de cuadrados con suma fija.

**Cambio de variable para la armónica.** Si $a+b=S$ es fijo, $H=\dfrac{2ab}{S}$, de modo que maximizar $H$ equivale a maximizar el producto $ab$, que por AM-GM ($ab\leq S^2/4$) ocurre en $a=b$. Traducir entre medias convierte un problema de óptimos en otro ya conocido.

---

## Identidades de las cuatro medias para $n=2$

Para $a,b>0$, cada "salto" de la cadena tiene una expresión exacta como cuadrado (lo que prueba de paso que es $\geq0$, con igualdad solo si $a=b$):

| Diferencia | Valor exacto |
|---|---|
| $Q^2-A^2$ | $\dfrac{(a-b)^2}{4}$ |
| $A^2-G^2$ | $\dfrac{(a-b)^2}{4}$ |
| $A-G$ | $\dfrac{(\sqrt{a}-\sqrt{b})^2}{2}$ |
| $G-H$ | $\dfrac{\sqrt{ab}\,(\sqrt{a}-\sqrt{b})^2}{a+b}$ |

Todas se comprueban desarrollando. Por ejemplo, $A^2-G^2=\dfrac{(a+b)^2}{4}-ab=\dfrac{(a+b)^2-4ab}{4}=\dfrac{(a-b)^2}{4}$, y $G-H=\sqrt{ab}-\dfrac{2ab}{a+b}=\sqrt{ab}\cdot\dfrac{a+b-2\sqrt{ab}}{a+b}=\dfrac{\sqrt{ab}\,(\sqrt a-\sqrt b)^2}{a+b}$.

Además hay una **identidad** notable (no una desigualdad): para $n=2$,

$$A\cdot H=\frac{a+b}{2}\cdot\frac{2ab}{a+b}=ab=G^2,$$

es decir, $G$ es la media geométrica de $A$ y $H$. Es de las relaciones más útiles: conocidas dos de las tres medias $A,G,H$, la tercera queda determinada.

---

## Observación

**La media armónica es la más olvidada y la más útil.** Aparece disfrazada: $\frac{2ab}{a+b}$, $\frac{n}{\sum 1/a_i}$, o en la condición "$\frac{1}{a}+\frac{1}{b}=c$". Siempre que el problema da condiciones en $1/a$ en lugar de $a$, se está trabajando con la media armónica.

**La media cuadrática aparece en varianza.** La varianza de $(a_1,\ldots,a_n)$ es $Q^2-A^2=\frac{\sum a_i^2}{n}-\left(\frac{\sum a_i}{n}\right)^2\geq0$. Esto es exactamente $Q\geq A$.

## Problemas relacionados

**Problema 1 (regional).** Para $a,b>0$ con $a+b=2$, demostrar que $\dfrac{1}{a}+\dfrac{1}{b}\geq2$.

[[pista]]

$\frac1a+\frac1b$ es $\frac{2}{H}$. Como $a+b=2$ fija $A=1$ y $H\leq A$, acota $H$ por arriba.

[[/pista]]

[[solución]]

La media armónica es $H=\dfrac{2}{\frac1a+\frac1b}$. Por $H\leq A=\dfrac{a+b}{2}=1$, tenemos $H\leq1$, luego

$$\frac1a+\frac1b=\frac{2}{H}\geq\frac{2}{1}=2.$$

Igualdad en $a=b=1$. (Directo: $\frac1a+\frac1b=\frac{a+b}{ab}=\frac{2}{ab}$ y $ab\leq\left(\frac{a+b}{2}\right)^2=1$.) $\blacksquare$

[[/solución]]

**Problema 2 (regional).** Para $a,b,c>0$ con $a^2+b^2+c^2=3$, demostrar que $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}\geq3$.

[[pista]]

El dato fija la media cuadrática: $Q=\sqrt{\frac{a^2+b^2+c^2}{3}}=1$. Y $\frac1a+\frac1b+\frac1c=\frac{3}{H}$. Usa dos eslabones de la cadena.

[[/pista]]

[[solución]]

El dato dice $Q=\sqrt{\dfrac{a^2+b^2+c^2}{3}}=\sqrt{1}=1$. Por la cadena completa, $H\leq A\leq Q$, de modo que $H\leq Q=1$. Como $H=\dfrac{3}{\frac1a+\frac1b+\frac1c}$,

$$\frac{3}{\frac1a+\frac1b+\frac1c}=H\leq1\;\Longrightarrow\;\frac1a+\frac1b+\frac1c\geq3.$$

Igualdad cuando $a=b=c$, y con $a^2+b^2+c^2=3$ eso da $a=b=c=1$. $\blacksquare$

[[/solución]]

**Problema 3 (nacional).** Para $a_1,\ldots,a_n>0$ con $\sum a_i=n$, demostrar que $\sum\dfrac{1}{a_i}\geq n$ y que $\sum a_i^2\geq n$.

[[pista]]

La condición fija $A=1$. La primera desigualdad es $H\leq A$; la segunda, $A\leq Q$.

[[/pista]]

[[solución]]

La condición $\sum a_i=n$ dice $A=\dfrac{\sum a_i}{n}=1$.

*Primera.* Por $H\leq A$: $\dfrac{n}{\sum 1/a_i}=H\leq1$, luego $\sum\dfrac1{a_i}\geq n$.

*Segunda.* Por $A\leq Q$: $1=A\leq Q=\sqrt{\dfrac{\sum a_i^2}{n}}$, luego $\dfrac{\sum a_i^2}{n}\geq1$, es decir $\sum a_i^2\geq n$.

Ambas con igualdad cuando todos los $a_i=1$. $\blacksquare$

[[/solución]]

**Problema 4 (nacional).** Para $a,b,c>0$, demostrar que $\dfrac{a+b+c}{3}\cdot\dfrac{\frac1a+\frac1b+\frac1c}{3}\geq1$, con igualdad si y solo si $a=b=c$.

[[pista]]

El primer factor es $A$; el segundo es $\frac1H$. La cadena $H\leq A$ da $A/H\geq1$.

[[/pista]]

[[solución]]

El primer factor es $A=\dfrac{a+b+c}{3}$. El segundo es $\dfrac{1}{3}\sum\dfrac1{a_i}=\dfrac{1}{H}$, pues $H=\dfrac{3}{\sum 1/a_i}$. Por tanto el producto es $\dfrac{A}{H}$, y por $H\leq A$ (con $H>0$) resulta $\dfrac{A}{H}\geq1$. Igualdad si y solo si $a=b=c$. 

Equivalentemente, es la desigualdad AM-HM: $(a+b+c)\left(\frac1a+\frac1b+\frac1c\right)\geq9$. $\blacksquare$

[[/solución]]

**Problema 5 (internacional).** Demostrar la desigualdad de medias de potencias $M_r\leq M_s$ para $0<r<s$.

[[pista]]

La función $t\mapsto t^{s/r}$ es convexa para $s/r>1$. Aplica Jensen a los valores $a_i^r$.

[[/pista]]

[[solución]]

Sea $p=s/r>1$. La función $\varphi(t)=t^{p}$ es convexa en $(0,\infty)$ (su segunda derivada $p(p-1)t^{p-2}>0$). Aplicando la desigualdad de Jensen a los valores $x_i=a_i^r>0$ con pesos iguales $1/n$,

$$\varphi\!\left(\frac{1}{n}\sum x_i\right)\leq\frac{1}{n}\sum\varphi(x_i),\qquad\text{es decir}\qquad\left(\frac{\sum a_i^r}{n}\right)^{p}\leq\frac{\sum a_i^{rp}}{n}=\frac{\sum a_i^{s}}{n}.$$

Elevando ambos lados a la potencia $1/s>0$ (función creciente) y usando $p/s=1/r$:

$$\left(\frac{\sum a_i^r}{n}\right)^{1/r}\leq\left(\frac{\sum a_i^s}{n}\right)^{1/s},$$

esto es $M_r\leq M_s$. Igualdad si y solo si todos los $a_i$ son iguales (estricticidad de Jensen). $\blacksquare$

[[/solución]]
