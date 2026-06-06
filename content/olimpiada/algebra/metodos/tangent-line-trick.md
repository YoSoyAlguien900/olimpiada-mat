---
title: "Tangent Line Trick (TLT)"
preview: "Si $f$ es convexa, su gráfica queda por encima de cualquier recta tangente: $f(x)\\geq f(a)+f'(a)(x-a)$. El TLT usa esta cota lineal para probar desigualdades que Jensen no alcanza directamente."
dificultad: internacional
tags: [desigualdades, tangente, convexidad, tlt, imo-2001]
prerequisites: [convexidad-jensen, sustitucion-normalizacion]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

El Tangent Line Trick (TLT) o método de la recta tangente es la refinación más potente de Jensen para desigualdades que involucran funciones convexas. Cuando Jensen aplicado directamente da una cota demasiado débil, el TLT permite ajustar la aproximación lineal al punto de igualdad esperado.

## La idea

Si $f$ es **convexa** en $I$ y $a_0 \in I$, entonces para todo $x \in I$:

$$f(x) \;\geq\; f(a_0) + f'(a_0)(x - a_0). \tag{TLT}$$

(La recta tangente en $a_0$ está por debajo de la curva convexa.)

**Uso en olimpiada.** Queremos probar $f(a) + f(b) + f(c) \geq C$ dado $a+b+c=s$ fijo. Si encontramos una recta $L(x) = \alpha x + \beta$ tal que:

1. $f(x) \geq L(x)$ para todo $x$ en el dominio relevante.
2. $L(a) + L(b) + L(c) = \alpha s + 3\beta = C$.

Entonces $f(a)+f(b)+f(c) \geq L(a)+L(b)+L(c) = C$.

La recta $L$ es justamente la tangente de $f$ en el punto de igualdad $a_0 = s/3$ (cuando el extremo es $a=b=c=s/3$).

## Método

**Paso 1.** Identificar el punto de igualdad $a_0$ (normalmente $a=b=c=s/n$ para sumas con $a+b+c=s$).

**Paso 2.** Calcular $L(x) = f(a_0) + f'(a_0)(x-a_0)$ (recta tangente en $a_0$).

**Paso 3.** Verificar que $f(x) \geq L(x)$ para todo $x$ en el dominio (esto equivale a que $f$ sea convexa).

**Paso 4.** Sumar: $\sum_i f(x_i) \geq \sum_i L(x_i) = nf(a_0) + f'(a_0)(\sum x_i - na_0) = nf(a_0)$ si $\sum x_i = na_0$.

## El TLT cuando Jensen falla

Jensen daría $f(\bar{x}) \leq \bar{f}$, donde $\bar{x}=\sum x_i/n$ y $\bar{f}=\sum f(x_i)/n$. Pero si la restricción no es $\sum x_i=\text{const}$, sino que mezcla sumas y productos, Jensen no aplica directamente. El TLT sí, con la recta tangente apropiada.

**El TLT para funciones no convexas en todo el dominio.** Si $f$ no es convexa globalmente pero sí en la región relevante, el TLT sigue funcionando. La clave es que la cota $f(x)\geq L(x)$ sea válida en el dominio específico del problema.

## Ejemplo: IMO 2001/P2 (con TLT)

**Enunciado.** Para $a,b,c>0$:

$$\frac{a}{\sqrt{a^2+8bc}}+\frac{b}{\sqrt{b^2+8ca}}+\frac{c}{\sqrt{c^2+8ab}}\geq1.$$

**Enfoque por TLT.** El punto de igualdad es $a=b=c$ (cada término es $1/3$). Buscamos una recta $L(x,y,z)=\alpha(x-a)+\beta(y+z-b-c)+\gamma$ tal que

$$\frac{x}{\sqrt{x^2+8yz}}\geq \alpha(x-a)+\beta(y+z-b-c)+\gamma$$

en el entorno del punto $x=y=z=a$ (donde $a=b=c$ en el problema original).

En el caso específico $a=b=c=t$ (normalizado con $a+b+c=3t$), cada término vale $t/\sqrt{9t^2}=1/3$. La suma de tres tales términos es $1$. ✓ (igualdad).

*(La demostración completa vía TLT en este problema requiere verificar que la función $h(x,y,z)=x/\sqrt{x^2+8yz}$ satisface una cota lineal en $(x,y,z)$ apropiada. Se usa la cota via AM-GM del archivo de problemas resueltos, que es más directa.)*

## Ejemplo: suma de senos

**Ejemplo 1.** Para $A,B,C>0$ con $A+B+C=\pi$, probar que $\sin A+\sin B+\sin C\leq\frac{3\sqrt3}{2}$.

$f(x)=\sin x$ es cóncava en $[0,\pi]$. Por Jensen (cóncava):

$$\frac{\sin A+\sin B+\sin C}{3}\leq\sin\frac{A+B+C}{3}=\sin\frac{\pi}{3}=\frac{\sqrt3}{2}.$$

*(Aquí Jensen es suficiente, TLT no es necesario.)*

---

**Ejemplo 2 (TLT necesario).** Para $A,B,C>0$ con $A+B+C=\pi$, probar que

$$\sin A + \sin B + \sin C \;\geq\; \frac{3\sqrt3}{2}(1-(A-\pi/3)^2-(B-\pi/3)^2-(C-\pi/3)^2)$$

*(Cota refinada near the equality point — ilustra TLT con correcciones cuadráticas; no es un resultado estándar de olimpiada pero muestra el espíritu del TLT.)*

---

**Ejemplo 3 (TLT clásico).** Para $x_1,\ldots,x_n>0$ con $\sum x_i=n$, probar que $\sum x_i^r\geq n$ para $r\geq1$.

$f(x)=x^r$ es convexa para $r\geq1$, $x>0$. Punto de igualdad: $x_i=1$. Recta tangente en $x=1$: $L(x)=f(1)+f'(1)(x-1)=1+r(x-1)=rx-(r-1)$.

Verificar $f(x)\geq L(x)$: $x^r\geq rx-(r-1)$ para $x>0$, $r\geq1$. Esto es equivalente a $x^r-rx+r-1\geq0$. Sea $g(x)=x^r-rx+r-1$. $g'(x)=rx^{r-1}-r=r(x^{r-1}-1)=0$ en $x=1$. $g(1)=0$ (mínimo). $g''(x)=r(r-1)x^{r-2}\geq0$. Así $g\geq0$ con mínimo $0$ en $x=1$. ✓

Por TLT: $\sum x_i^r\geq\sum L(x_i)=r\sum x_i-n(r-1)=rn-n(r-1)=n$. $\square$

---

**Ejemplo 4 (TLT con restricción de producto).** Para $a,b,c>0$ con $abc=1$, probar que $a+b+c\geq3$.

$f(x)=e^x$ es convexa. Con $a=e^u,b=e^v,c=e^w$ y $u+v+w=0$:

Necesitamos $e^u+e^v+e^w\geq3$. Por Jensen (convexa): $\frac{e^u+e^v+e^w}{3}\geq e^{(u+v+w)/3}=e^0=1$, así suma $\geq3$. ✓ *(Aquí Jensen basta; TLT daría la misma cota.)*

## Cuándo usar TLT vs Jensen

| Situación | Recomendación |
|---|---|
| Función convexa, restricción $\sum x_i=C$ | Jensen directo |
| Función convexa, restricción mezcla suma y producto | TLT con recta tangente ajustada |
| Jensen da cota correcta pero no exactamente lo que se pide | TLT refina |
| Desigualdad con exponentes fraccionarios cerca del punto de igualdad | TLT es más útil |

## Observación

**El TLT solo funciona si la cota lineal es válida globalmente.** Si la función no es convexa en todo el dominio, la recta tangente puede estar por encima de la curva en algunas partes. Verificar siempre que $f(x)\geq L(x)$ para todo $x$ en el dominio del problema.

**La elección de $a_0$ determina el éxito.** Tomar $a_0$ igual al punto de igualdad del enunciado casi siempre funciona. Si el enunciado tiene igualdad en $a=b=c=k$, la tangente en $k$ da la cota óptima.

**TLT + Cauchy-Schwarz = herramienta potente.** En el IMO 2001/P2, la prueba más elegante combina Cauchy-Schwarz con AM-GM en la forma de TLT implícito: acotar $\sum a\sqrt{a^2+8bc}\leq(a+b+c)^2$ usando que $\sqrt{x}\leq(x/t+t)/2$ (que es la recta tangente de $\sqrt{\cdot}$ en $t$).

## Problemas relacionados

- **(Clásico, TLT)** Para $x_1,\ldots,x_n>0$ con $x_1\cdots x_n=1$, probar que $\sum x_i^k\geq\sum x_i$ para $k\geq1$ entero.

- **(IMO 2001/P2)** Ver solución completa en problemas resueltos.

- **(Nacional)** Para $a,b,c>0$ con $a+b+c=3$, probar que $\sqrt{a}+\sqrt{b}+\sqrt{c}\leq3$ usando TLT o Jensen.

- **(Internacional)** Para $a,b,c>0$ con $a+b+c=1$, probar que $a^a b^b c^c\leq\dfrac{1}{3}$ usando TLT sobre $f(x)=x\ln x$.

- **(Elite)** Para $p\geq1$ y $a_1,\ldots,a_n\geq0$ con $\sum a_i=1$, probar que $\sum a_i^p\geq n^{1-p}$ usando TLT sobre $f(x)=x^p$.
