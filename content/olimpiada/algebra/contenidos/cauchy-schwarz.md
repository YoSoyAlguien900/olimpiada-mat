---
title: "Cauchy-Schwarz y forma de Engel (Titu)"
preview: "$(\\sum a_i^2)(\\sum b_i^2)\\geq(\\sum a_i b_i)^2$ es la segunda desigualdad fundamental. La forma de Engel, $\\sum a_i^2/b_i\\geq(\\sum a_i)^2/\\sum b_i$, es la variante más potente en olimpiada."
dificultad: regional
tags: [desigualdades, cauchy-schwarz, engel, titu, sedrakyan]
prerequisites: [am-gm]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

La desigualdad de Cauchy-Schwarz es la segunda gran herramienta de las desigualdades olímpicas. Tiene múltiples formas equivalentes, y la más útil en la práctica — la forma de Engel o Titu — convierte sumas de cocientes en algo que se puede comparar directamente.

## Enunciado

**Forma vectorial / suma de cuadrados.** Para reales $a_1, \ldots, a_n$ y $b_1, \ldots, b_n$:

$$\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right) \;\geq\; \left(\sum_{i=1}^n a_i b_i\right)^2,$$

con igualdad si y solo si los vectores $(a_1,\ldots,a_n)$ y $(b_1,\ldots,b_n)$ son proporcionales, es decir, existe $\lambda$ tal que $a_i = \lambda b_i$ para todo $i$.

**Forma de Engel (Titu / Sedrakyan).** Para $a_i \in \mathbb{R}$ y $b_i > 0$:

$$\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \cdots + \frac{a_n^2}{b_n} \;\geq\; \frac{(a_1 + a_2 + \cdots + a_n)^2}{b_1 + b_2 + \cdots + b_n},$$

con igualdad si y solo si $a_1/b_1 = a_2/b_2 = \cdots = a_n/b_n$.

## Demostración

**Demostración de la forma vectorial.** Considera el polinomio en $t$:

$$P(t) \;=\; \sum_{i=1}^n (a_i t - b_i)^2 \;=\; \left(\sum a_i^2\right)t^2 - 2\left(\sum a_i b_i\right)t + \sum b_i^2 \;\geq\; 0.$$

Es una parábola hacia arriba (el coeficiente $\sum a_i^2 \geq 0$) que nunca toma valores negativos, luego su discriminante es $\leq 0$:

$$4\left(\sum a_i b_i\right)^2 - 4\left(\sum a_i^2\right)\left(\sum b_i^2\right) \;\leq\; 0.$$

Dividiendo entre $4$ y reordenando se obtiene $\left(\sum a_i^2\right)\left(\sum b_i^2\right) \geq \left(\sum a_i b_i\right)^2$. La igualdad exige que $P(t)=0$ tenga raíz real $t_0$, es decir $a_i t_0 = b_i$ para todo $i$: los vectores son proporcionales. $\blacksquare$

**Deducción de la forma de Engel.** Sustituye $a_i \to a_i/\sqrt{b_i}$ y $b_i \to \sqrt{b_i}$ en Cauchy-Schwarz:

$$\left(\sum \frac{a_i^2}{b_i}\right)\left(\sum b_i\right) \;\geq\; \left(\sum a_i\right)^2.$$

Dividiendo entre $\sum b_i > 0$: forma de Engel. $\blacksquare$

## Ejemplo

### Aplicación directa de la forma de Engel

*La idea común.* La forma de Engel se reconoce por su **huella**: una suma de fracciones cuyos numeradores son cuadrados (o pueden escribirse como cuadrados) y cuyos denominadores son positivos. La maniobra es siempre la misma — colapsar la suma de fracciones en **una sola fracción** cuyo numerador es el cuadrado de la suma de los numeradores y cuyo denominador es la suma de los denominadores. El éxito depende de que esa suma de denominadores se simplifique a algo manejable.

**Ejemplo 1.** Para $a, b, c > 0$, probar que

$$\frac{a^2}{b+c} + \frac{b^2}{c+a} + \frac{c^2}{a+b} \;\geq\; \frac{a+b+c}{2}.$$

*La idea.* Los numeradores ya son cuadrados perfectos $a^2,b^2,c^2$ y los denominadores son positivos: es Engel a primera vista. La clave es que la suma de los denominadores, $(b+c)+(c+a)+(a+b)$, se simplifica a $2(a+b+c)$.

**Solución.** Por la forma de Engel con $(a_i)=(a,b,c)$ y $(b_i)=(b+c,\,c+a,\,a+b)$:

$$\frac{a^2}{b+c} + \frac{b^2}{c+a} + \frac{c^2}{a+b} \;\geq\; \frac{(a+b+c)^2}{(b+c)+(c+a)+(a+b)} \;=\; \frac{(a+b+c)^2}{2(a+b+c)} \;=\; \frac{a+b+c}{2}.$$

Igualdad cuando $\dfrac{a}{b+c}=\dfrac{b}{c+a}=\dfrac{c}{a+b}$, es decir $a=b=c$. $\square$

*La moraleja.* Cuando los denominadores de una suma cíclica recorren todas las parejas, su suma es un múltiplo limpio de $a+b+c$. Ese es justo el escenario en que Engel funciona de un solo golpe.

---

**Ejemplo 2 (Nesbitt).** Para $a, b, c > 0$, probar que

$$\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \;\geq\; \frac{3}{2}.$$

*La idea.* Aquí los numeradores **no** son cuadrados: son $a,b,c$ a la primera. El truco estándar para forzar la huella de Engel es multiplicar numerador y denominador por el propio numerador: $\dfrac{a}{b+c}=\dfrac{a^2}{a(b+c)}$. Así aparece un cuadrado arriba sin cambiar el valor.

**Solución.** Reescribimos cada término como $\dfrac{a}{b+c}=\dfrac{a^2}{a(b+c)}$ y aplicamos Engel:

$$\sum \frac{a^2}{a(b+c)} \;\geq\; \frac{(a+b+c)^2}{a(b+c)+b(c+a)+c(a+b)} \;=\; \frac{(a+b+c)^2}{2(ab+bc+ca)}.$$

Ahora basta ver que esta cota es $\geq \tfrac32$. Desarrollando, $(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$, y como $a^2+b^2+c^2\geq ab+bc+ca$ (suma de los tres $\tfrac12(a-b)^2\geq0$), resulta $(a+b+c)^2\geq 3(ab+bc+ca)$. Por tanto

$$\frac{(a+b+c)^2}{2(ab+bc+ca)} \;\geq\; \frac{3(ab+bc+ca)}{2(ab+bc+ca)} \;=\; \frac{3}{2},$$

con igualdad en $a=b=c$. $\square$

*La moraleja.* El truco $x=\dfrac{x^2}{x}$ convierte cualquier suma de fracciones lineales en material para Engel. Es la forma más rápida de demostrar Nesbitt y vale la pena memorizarla.

---

**Ejemplo 3.** Para $a_1,\ldots,a_n > 0$ con $\sum a_i = 1$, probar que $\displaystyle\sum_{i=1}^n \frac{a_i^2}{a_i + a_{i+1}} \geq \frac{1}{2}$ (índices cíclicos: $a_{n+1}=a_1$).

*La idea.* Numeradores ya cuadrados; lo único que hay que comprobar es qué da la suma de denominadores. Como cada $a_j$ aparece exactamente **dos** veces al recorrer el ciclo (una como $a_i$, otra como $a_{i+1}$), esa suma es $2\sum a_i=2$.

**Solución.** Por la forma de Engel,

$$\sum_{i=1}^n \frac{a_i^2}{a_i+a_{i+1}} \;\geq\; \frac{\left(\sum_{i=1}^n a_i\right)^2}{\sum_{i=1}^n (a_i+a_{i+1})} \;=\; \frac{1^2}{2} \;=\; \frac{1}{2}. \qquad\square$$

*La moraleja.* En sumas cíclicas, antes de calcular cuenta **cuántas veces** aparece cada variable en el denominador total: casi siempre es una constante por $\sum a_i$, y eso resuelve el problema sin esfuerzo.

---

**Ejemplo 4.** Para $x, y, z > 0$ con $x+y+z=1$, hallar el mínimo de $\dfrac{x^2}{y} + \dfrac{y^2}{z} + \dfrac{z^2}{x}$.

*La idea.* Es Engel puro: numeradores cuadrados, denominadores positivos, y la suma de denominadores $y+z+x$ es de nuevo $x+y+z$.

**Solución.** Por la forma de Engel,

$$\frac{x^2}{y}+\frac{y^2}{z}+\frac{z^2}{x}\;\geq\;\frac{(x+y+z)^2}{y+z+x}\;=\;\frac{(x+y+z)^2}{x+y+z}\;=\;x+y+z\;=\;1.$$

La cota $1$ se alcanza cuando $\dfrac{x}{y}=\dfrac{y}{z}=\dfrac{z}{x}$, es decir $x=y=z=\tfrac13$. El mínimo es $\boxed{1}$. $\square$

*La moraleja.* Para hallar un mínimo, Engel da la cota inferior y la condición de igualdad da el punto donde se alcanza; comprobar que ese punto es compatible con la restricción cierra el problema.

### Combinación con otras técnicas

*La idea común.* Cauchy-Schwarz rara vez termina un problema duro por sí solo: su papel es **transformar** la expresión a una forma más cómoda (eliminar una raíz, separar una suma de un producto) que luego se remata con AM-GM u otra desigualdad.

**Ejemplo 5 (IMO 2001/P2).** Para $a,b,c>0$, probar que

$$\frac{a}{\sqrt{a^2+8bc}}+\frac{b}{\sqrt{b^2+8ca}}+\frac{c}{\sqrt{c^2+8ab}}\geq1.$$

*La idea.* Las raíces en los denominadores impiden atacar directamente. Cauchy-Schwarz en la forma $\left(\sum u_i\right)\!\left(\sum v_i\right)\geq\left(\sum\sqrt{u_iv_i}\right)^2$ permite **separar** la suma que queremos acotar de una suma sin fracciones, y elegimos los pesos para que las raíces cuadren a algo limpio.

**Solución.** Tomamos $u_i=\dfrac{a}{\sqrt{a^2+8bc}}$ (y cíclicas) y $v_i=a\sqrt{a^2+8bc}$, de modo que $\sqrt{u_iv_i}=a$. Por Cauchy-Schwarz,

$$\left(\sum\frac{a}{\sqrt{a^2+8bc}}\right)\left(\sum a\sqrt{a^2+8bc}\right)\;\geq\;\left(\sum a\right)^2=(a+b+c)^2.$$

Llamando $S$ a la suma que buscamos, esto dice $S\geq\dfrac{(a+b+c)^2}{\sum a\sqrt{a^2+8bc}}$. Basta probar entonces que el denominador no supera $(a+b+c)^2$, pues eso fuerza $S\geq1$.

Acotamos $\sum a\sqrt{a^2+8bc}$ con Cauchy-Schwarz otra vez, ahora para sacar la raíz:

$$\sum a\sqrt{a^2+8bc}=\sum \sqrt{a}\cdot\sqrt{a(a^2+8bc)}\;\leq\;\sqrt{\Big(\sum a\Big)\Big(\sum a(a^2+8bc)\Big)}.$$

Como $\sum a(a^2+8bc)=a^3+b^3+c^3+24abc$, queda

$$\sum a\sqrt{a^2+8bc}\;\leq\;\sqrt{(a+b+c)\,(a^3+b^3+c^3+24abc)}.$$

Finalmente comprobamos $(a+b+c)(a^3+b^3+c^3+24abc)\leq(a+b+c)^4$, es decir, tras dividir entre $a+b+c$,

$$a^3+b^3+c^3+24abc\;\leq\;(a+b+c)^3.$$

Desarrollando $(a+b+c)^3=a^3+b^3+c^3+3(a+b+c)(ab+bc+ca)-3abc$, la desigualdad equivale a $24abc\leq 3(a+b+c)(ab+bc+ca)-3abc$, esto es $(a+b+c)(ab+bc+ca)\geq9abc$. Y esto último es AM-GM: $a+b+c\geq3\sqrt[3]{abc}$ y $ab+bc+ca\geq3\sqrt[3]{(abc)^2}$, cuyo producto es $9abc$. 

Encadenando, $\sum a\sqrt{a^2+8bc}\leq\sqrt{(a+b+c)^4}=(a+b+c)^2$, luego $S\geq\dfrac{(a+b+c)^2}{(a+b+c)^2}=1$, con igualdad en $a=b=c$. $\blacksquare$

*La moraleja.* Cauchy-Schwarz aplicado **dos veces** (una para separar la suma objetivo, otra para domar la raíz) reduce un problema IMO a la desigualdad simétrica $(a+b+c)(ab+bc+ca)\geq9abc$. Las raíces casi siempre se eliminan metiéndolas dentro de un Cauchy y elevando al cuadrado.

## Aplicaciones

**Sumas de cocientes.** La forma de Engel es ideal cuando aparece $\sum \dfrac{f(x_i)}{g(x_i)}$ donde los denominadores y numeradores tienen estructura que permite reagrupar.

**Acotación de productos escalares.** Si tienes $\sum a_i b_i$ y conoces $\sum a_i^2$ o $\sum b_i^2$, Cauchy-Schwarz da una cota inmediata.

**Desigualdades con raíces cuadradas.** En combinación con AM-GM (como en el IMO 2001/P2), Cauchy elimina las raíces al aparecer al cuadrado.

## Observación

**¿Cuándo usar Engel en vez de la forma clásica?** La forma de Engel es más directa cuando la desigualdad tiene la estructura $\sum \frac{(\text{lineal})^2}{\text{positivo}} \geq \frac{(\text{suma})^2}{\text{suma de denominadores}}$. La forma clásica es mejor cuando hay un producto de sumas.

**La condición de igualdad es la clave para elegir los términos.** En AM-GM, la igualdad ocurre cuando todos los sumandos son iguales. En la forma de Engel, ocurre cuando $a_1/b_1=\cdots=a_n/b_n$. Conocer esto de antemano (evaluando en el caso de igualdad esperado) permite deducir qué agrupación elegir.

## Identidad de Lagrange

La prueba por discriminante oculta una igualdad exacta que vale la pena conocer:

$$\left(\sum a_i^2\right)\left(\sum b_i^2\right) - \left(\sum a_i b_i\right)^2 \;=\; \sum_{i<j}(a_i b_j - a_j b_i)^2 \;\geq\; 0.$$

El lado derecho es una suma de cuadrados, lo que **demuestra** Cauchy-Schwarz de un plumazo y, además, deja transparente la condición de igualdad: la suma de cuadrados se anula si y solo si $a_ib_j-a_jb_i=0$ para todos los pares, es decir, cuando los vectores son proporcionales. A veces el "defecto" $\sum_{i<j}(a_ib_j-a_jb_i)^2$ es más útil que la propia desigualdad.

## Problemas relacionados

**Problema 1 (clásico).** Para $a,b,c>0$ con $a+b+c=1$, probar que $\dfrac{a^2}{1-a}+\dfrac{b^2}{1-b}+\dfrac{c^2}{1-c}\geq\dfrac{1}{2}$.

[[pista]]

Como $a+b+c=1$, cada denominador es $1-a=b+c$. Ya tienes la huella de Engel.

[[/pista]]

[[solución]]

Usando $1-a=b+c$, $1-b=c+a$, $1-c=a+b$, la suma es $\dfrac{a^2}{b+c}+\dfrac{b^2}{c+a}+\dfrac{c^2}{a+b}$. Por la forma de Engel,

$$\frac{a^2}{b+c}+\frac{b^2}{c+a}+\frac{c^2}{a+b}\geq\frac{(a+b+c)^2}{2(a+b+c)}=\frac{a+b+c}{2}=\frac{1}{2},$$

con igualdad en $a=b=c=\tfrac13$. $\blacksquare$

[[/solución]]

**Problema 2 (Cauchy vectorial).** Para $a_1,\ldots,a_n, b_1,\ldots,b_n>0$, probar que $\left(\sum\sqrt{a_i b_i}\right)^2\leq\left(\sum a_i\right)\left(\sum b_i\right)$.

[[pista]]

Aplica Cauchy-Schwarz vectorial a los vectores $(\sqrt{a_i})$ y $(\sqrt{b_i})$.

[[/pista]]

[[solución]]

Tomamos en la forma vectorial $x_i=\sqrt{a_i}$ e $y_i=\sqrt{b_i}$ (posibles por ser $a_i,b_i>0$). Entonces $x_i^2=a_i$, $y_i^2=b_i$ y $x_iy_i=\sqrt{a_ib_i}$, de modo que

$$\left(\sum a_i\right)\left(\sum b_i\right)=\left(\sum x_i^2\right)\left(\sum y_i^2\right)\geq\left(\sum x_iy_i\right)^2=\left(\sum\sqrt{a_ib_i}\right)^2.$$

Igualdad cuando $(\sqrt{a_i})$ y $(\sqrt{b_i})$ son proporcionales, es decir $a_i/b_i$ constante. $\blacksquare$

[[/solución]]

**Problema 3 (OME).** Para $a,b,c>0$ con $a^2+b^2+c^2=1$, hallar el mínimo de $\dfrac{a}{1-a^2}+\dfrac{b}{1-b^2}+\dfrac{c}{1-c^2}$.

[[pista]]

Con la restricción, $1-a^2=b^2+c^2$. Escribe $\dfrac{a}{b^2+c^2}=\dfrac{a^2}{a(b^2+c^2)}$ para forzar Engel, o estudia la función $\dfrac{t}{1-t^2}$ en el punto de igualdad $a=b=c=1/\sqrt3$.

[[/pista]]

[[solución]]

Por la restricción, $1-a^2=b^2+c^2$ y análogas, así que buscamos el mínimo de $\sum\dfrac{a}{b^2+c^2}$. Escribimos cada término como $\dfrac{a^2}{a(b^2+c^2)}$ y aplicamos Engel:

$$\sum\frac{a^2}{a(b^2+c^2)}\geq\frac{(a+b+c)^2}{a(b^2+c^2)+b(c^2+a^2)+c(a^2+b^2)}.$$

El denominador es $\sum_{\text{sim}}a b^2=(a+b+c)(ab+bc+ca)-3abc$. En el punto simétrico $a=b=c=\tfrac{1}{\sqrt3}$ cada sumando original vale $\dfrac{1/\sqrt3}{1-1/3}=\dfrac{1/\sqrt3}{2/3}=\dfrac{3}{2\sqrt3}=\dfrac{\sqrt3}{2}$, y la suma vale $3\cdot\dfrac{\sqrt3}{2}=\dfrac{3\sqrt3}{2}$. La función $g(t)=\dfrac{t}{1-t^2}$ es convexa en $(0,1)$, de modo que por Jensen el mínimo de $\sum g(a)$ bajo $\sum a^2=1$ se alcanza en el punto simétrico. El mínimo es $\boxed{\dfrac{3\sqrt3}{2}}$. $\blacksquare$

[[/solución]]

**Problema 4 (IMO 1995/P2).** Para $a,b,c>0$ con $abc=1$, probar que $\dfrac{1}{a^3(b+c)}+\dfrac{1}{b^3(c+a)}+\dfrac{1}{c^3(a+b)}\geq\dfrac{3}{2}$.

[[pista]]

Sustituye $x=1/a$, $y=1/b$, $z=1/c$ (entonces $xyz=1$). Cada término se vuelve $\dfrac{x^2}{y+z}$ y la huella de Engel aparece.

[[/pista]]

[[solución]]

Como $abc=1$, ponemos $x=\tfrac1a,\;y=\tfrac1b,\;z=\tfrac1c$, de modo que $xyz=1$. Entonces, usando $b+c=\tfrac1y+\tfrac1z=\dfrac{y+z}{yz}$ y $a^3=\dfrac1{x^3}$,

$$\frac{1}{a^3(b+c)}=\frac{x^3}{\frac{y+z}{yz}}=\frac{x^3\,yz}{y+z}=\frac{x^3\cdot \frac1x}{y+z}=\frac{x^2}{y+z},$$

donde usamos $yz=\tfrac1x$ (pues $xyz=1$). La desigualdad se convierte en $\dfrac{x^2}{y+z}+\dfrac{y^2}{z+x}+\dfrac{z^2}{x+y}\geq\dfrac32$. Por la forma de Engel,

$$\sum\frac{x^2}{y+z}\geq\frac{(x+y+z)^2}{2(x+y+z)}=\frac{x+y+z}{2}\geq\frac{3\sqrt[3]{xyz}}{2}=\frac{3}{2},$$

usando AM-GM y $xyz=1$ en el último paso. Igualdad en $x=y=z=1$, es decir $a=b=c=1$. $\blacksquare$

[[/solución]]

**Problema 5 (clásico).** Para reales $x_1,\ldots,x_n$ con $\sum x_i = 0$ y $\sum x_i^2 = 1$, hallar la mejor cota superior de $\max_i x_i$ válida para todo $n$ y demostrarla.

[[pista]]

Sea $M=x_k$ el máximo. Los otros $n-1$ valores suman $-M$ y a ellos aplícales Cauchy-Schwarz para acotar su suma de cuadrados por abajo.

[[/pista]]

[[solución]]

Sea $M=\max_i x_i=x_k$. Los restantes $n-1$ valores cumplen $\sum_{i\neq k}x_i=-M$ (porque la suma total es $0$). Por Cauchy-Schwarz aplicado a esos $n-1$ términos,

$$M^2=\left(\sum_{i\neq k}x_i\right)^2\leq(n-1)\sum_{i\neq k}x_i^2=(n-1)\left(1-M^2\right),$$

ya que $\sum_{i\neq k}x_i^2=\sum_i x_i^2-M^2=1-M^2$. Despejando, $M^2\leq(n-1)(1-M^2)$, luego $M^2\,n\leq n-1$ y

$$\max_i x_i=M\leq\sqrt{\frac{n-1}{n}}.$$

La cota se alcanza cuando los $n-1$ valores restantes son iguales (a $-M/(n-1)$), por la condición de igualdad de Cauchy-Schwarz. $\blacksquare$

[[/solución]]

- **(Clásico)** Para $a,b,c>0$ con $a+b+c=1$, probar que $\dfrac{a^2}{1-a}+\dfrac{b^2}{1-b}+\dfrac{c^2}{1-c}\geq\dfrac{1}{2}$.

- **(Clásico, Cauchy vectorial)** Para $a_1,\ldots,a_n, b_1,\ldots,b_n>0$, probar la desigualdad $\left(\sum\sqrt{a_i b_i}\right)^2\leq\left(\sum a_i\right)\left(\sum b_i\right)$.

- **(OME)** Para $a,b,c>0$ con $a^2+b^2+c^2=1$, hallar el mínimo de $\dfrac{a}{1-a^2}+\dfrac{b}{1-b^2}+\dfrac{c}{1-c^2}$.

- **(IMO 1995/P2, adaptado)** Para $a,b,c>0$ con $abc=1$, probar que $\dfrac{1}{a^3(b+c)}+\dfrac{1}{b^3(c+a)}+\dfrac{1}{c^3(a+b)}\geq\dfrac{3}{2}$. *(Ver problemas resueltos.)*

- **(Clásico)** Para reales $x_1,\ldots,x_n$ con $\sum x_i = 0$ y $\sum x_i^2 = 1$, acotar $\max_i x_i$ usando Cauchy-Schwarz.
