---
title: "Sumas telescópicas"
preview: "Una suma telescópica colapsa a diferencia del primer y último término: $\\sum_{k=1}^n (f(k+1)-f(k))=f(n+1)-f(1)$. Es la técnica de suma más potente del álgebra elemental y aparece en incontables problemas de olimpiada."
dificultad: regional
tags: [sumas, telescopico, fracciones-parciales, sucesiones, tecnica]
prerequisites: [progresiones-sumas, identidades-algebraicas]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Una suma telescópica es aquella en la que la mayoría de los términos se cancelan con el siguiente o anterior, dejando solo los extremos. Es la técnica de suma más versátil del álgebra olímpica: muchas sumas aparentemente complicadas se simplifican con el truco correcto.

---

## El principio básico

Si $f$ es cualquier función, entonces:

$$\boxed{\sum_{k=1}^n \bigl[f(k+1) - f(k)\bigr] = f(n+1) - f(1).}$$

**Demostración.** Cada sumando cancela con el siguiente:

$$\bigl[f(2)-f(1)\bigr]+\bigl[f(3)-f(2)\bigr]+\cdots+\bigl[f(n+1)-f(n)\bigr] = f(n+1)-f(1). \;\square$$

La clave es encontrar la función $f$ adecuada para cada suma.

---

## Ejemplo 1: suma de recíprocos de productos consecutivos

**Hallar** $\displaystyle\sum_{k=1}^n \frac{1}{k(k+1)}$.

**Descomposición en fracciones parciales:**

$$\frac{1}{k(k+1)} = \frac{1}{k}-\frac{1}{k+1}.$$

**Suma telescópica** con $f(k)=1/k$:

$$\sum_{k=1}^n\frac{1}{k(k+1)} = \sum_{k=1}^n\left(\frac{1}{k}-\frac{1}{k+1}\right) = 1-\frac{1}{n+1} = \frac{n}{n+1}. \;\square$$

---

## Ejemplo 2: suma de recíprocos de progresiones

**Hallar** $\displaystyle\sum_{k=0}^{n-1}\frac{1}{(a+kd)(a+(k+1)d)}$.

Descomposición: $\dfrac{1}{(a+kd)(a+(k+1)d)} = \dfrac{1}{d}\left(\dfrac{1}{a+kd}-\dfrac{1}{a+(k+1)d}\right)$.

Suma telescópica:

$$\frac{1}{d}\left(\frac{1}{a}-\frac{1}{a+nd}\right) = \frac{n}{a(a+nd)}.$$

*(Generaliza el Ejemplo 1, que es $a=d=1$.)*

---

## Ejemplo 3: diferencia de cuadrados

**Hallar** $\displaystyle\sum_{k=1}^n (2k-1) = 1+3+5+\cdots+(2n-1)$.

Usar $f(k)=k^2$: $f(k+1)-f(k)=(k+1)^2-k^2=2k+1$.

Así $\sum_{k=1}^n(2k+1)=\sum_{k=1}^n[(k+1)^2-k^2]=(n+1)^2-1$.

Pero queremos $\sum_{k=1}^n(2k-1)$. Usar $f(k)=k^2$: $(k)^2-(k-1)^2=2k-1$.

$$\sum_{k=1}^n(2k-1) = \sum_{k=1}^n[k^2-(k-1)^2] = n^2-0^2 = n^2. \;\square$$

---

## Ejemplo 4: diferencia de raíces

**Hallar** $\displaystyle\sum_{k=1}^n(\sqrt{k+1}-\sqrt{k})$.

Suma telescópica directa con $f(k)=\sqrt{k}$:

$$\sum_{k=1}^n(\sqrt{k+1}-\sqrt{k}) = \sqrt{n+1}-\sqrt{1} = \sqrt{n+1}-1. \;\square$$

**Variante.** Hallar $\displaystyle\sum_{k=1}^n\frac{1}{\sqrt{k+1}+\sqrt{k}}$.

Racionalizar: $\dfrac{1}{\sqrt{k+1}+\sqrt{k}}=\dfrac{\sqrt{k+1}-\sqrt{k}}{(k+1)-k}=\sqrt{k+1}-\sqrt{k}$.

Así la suma es la misma: $\sqrt{n+1}-1$.

---

## Fracciones parciales: la técnica general

Para sumas de la forma $\sum\frac{1}{P(k)}$ donde $P(k)$ es un producto de factores lineales, la descomposición en fracciones parciales produce una suma telescópica.

**Regla:** Si $P(k)=(k+a)(k+a+d)$:

$$\frac{1}{(k+a)(k+a+d)} = \frac{1}{d}\left(\frac{1}{k+a}-\frac{1}{k+a+d}\right).$$

Si $P(k)=(k+a)(k+a+d)(k+a+2d)$:

$$\frac{1}{(k+a)(k+a+d)(k+a+2d)} = \frac{1}{2d}\left(\frac{1}{(k+a)(k+a+d)}-\frac{1}{(k+a+d)(k+a+2d)}\right).$$

*(La diferencia de dos fracciones con denominador de grado 2 es una fracción con denominador de grado 3.)*

### Ejemplo

**Hallar** $\displaystyle\sum_{k=1}^n\frac{1}{k(k+1)(k+2)}$.

$$\frac{1}{k(k+1)(k+2)}=\frac{1}{2}\left(\frac{1}{k(k+1)}-\frac{1}{(k+1)(k+2)}\right).$$

Suma telescópica:

$$\frac{1}{2}\left(\frac{1}{1\cdot2}-\frac{1}{(n+1)(n+2)}\right) = \frac{1}{4}-\frac{1}{2(n+1)(n+2)}. \;\square$$

---

## Derivación de $\sum k^2$ y $\sum k^3$ por telescopeo

**Sumas de cuadrados.** Usar $f(k)=k^3$: $(k+1)^3-k^3=3k^2+3k+1$.

$$\sum_{k=1}^n[(k+1)^3-k^3]=(n+1)^3-1=3\sum_{k=1}^n k^2+3\cdot\frac{n(n+1)}{2}+n.$$

Despejar:

$$\sum_{k=1}^n k^2 = \frac{(n+1)^3-1-\frac{3n(n+1)}{2}-n}{3}=\frac{n(n+1)(2n+1)}{6}. \;\square$$

**Sumas de cubos.** Usar $f(k)=k^4$ de forma análoga para derivar $\sum k^3$.

---

## Telescopeo en desigualdades

El telescopeo también aparece en **demostraciones de desigualdades**: a veces se acota cada sumando $a_k\leq f(k)-f(k+1)$, y sumando se obtiene la cota total.

### Ejemplo

**Demostrar que** $\displaystyle\sum_{k=1}^n\frac{1}{\sqrt{k}}\leq2\sqrt{n}-1$.

Acotar cada término: $\dfrac{1}{\sqrt{k}}=\dfrac{1}{\sqrt{k}}\leq\dfrac{2}{\sqrt{k}+\sqrt{k-1}}=2(\sqrt{k}-\sqrt{k-1})$ (racionalización).

*(Para $k\geq2$: $\sqrt{k}+\sqrt{k-1}\geq2\sqrt{k-1}\cdot\sqrt{k}/\sqrt{k}\cdots$ más directo: $\dfrac{1}{\sqrt{k}}\leq2(\sqrt{k}-\sqrt{k-1})$ iff $1\leq2\sqrt{k}(\sqrt{k}-\sqrt{k-1})=2(k-\sqrt{k(k-1)})$... verificar separado.)*

Alternativamente: $\dfrac{1}{\sqrt{k}}\leq2(\sqrt{k+1}-\sqrt{k})$ (demostrar multiplicando por $\sqrt{k}$: $1\leq2(\sqrt{k+1}\cdot\sqrt{k}-k)\leq2\sqrt{k(k+1)}-2k$...).

Usando $\frac{1}{\sqrt{k}}\leq2\sqrt{k}-2\sqrt{k-1}$ para $k\geq2$ (que equivale a $1\leq 2\sqrt{k}(\sqrt{k}-\sqrt{k-1})=2(k-\sqrt{k(k-1)})$, cierto pues $k-\sqrt{k(k-1)}\geq1/2$ para $k\geq1$):

$$\sum_{k=1}^n\frac{1}{\sqrt{k}}\leq1+\sum_{k=2}^n2(\sqrt{k}-\sqrt{k-1})=1+2(\sqrt{n}-1)=2\sqrt{n}-1. \;\square$$

---

## Tabla de telescopeos útiles

| Suma | $f(k)$ | Resultado |
|---|---|---|
| $\sum(a_{k+1}-a_k)$ | $a_k$ | $a_{n+1}-a_1$ |
| $\sum\frac{1}{k(k+1)}$ | $1/k$ | $\frac{n}{n+1}$ |
| $\sum(2k-1)$ | $k^2$ | $n^2$ |
| $\sum(\sqrt{k+1}-\sqrt{k})$ | $\sqrt{k}$ | $\sqrt{n+1}-1$ |
| $\sum\frac{1}{k(k+1)(k+2)}$ | $\frac{1}{k(k+1)}$ | $\frac{1}{4}-\frac{1}{2(n+1)(n+2)}$ |
| $\sum k\cdot k!$ | $k!$ | $(n+1)!-1$ |

**El último:** $k\cdot k! = (k+1)!-k!$, luego $\sum_{k=1}^n k\cdot k! = (n+1)!-1$.

---

## Observación

**El truco es siempre el mismo.** Escribir el sumando como $f(k+1)-f(k)$ o $f(k)-f(k+1)$ para algún $f$ adecuado. Si el sumando tiene la forma $g(k)-g(k+1)$, se descubren las fracciones parciales o las diferencias de raíces mirando el denominador o el argumento.

**En competición.** Si ves una suma de fracciones con denominadores que son productos de lineales consecutivos, intenta fracciones parciales. Si ves diferencias de raíces o potencias, intenta telescopeo directo.

## Problemas relacionados

- **(Regional)** Calcular $\dfrac{1}{1\cdot3}+\dfrac{1}{3\cdot5}+\cdots+\dfrac{1}{(2n-1)(2n+1)}$. *(Respuesta: $\frac{n}{2n+1}$.)*

- **(Regional)** Demostrar que $\displaystyle\sum_{k=1}^n k\cdot k! = (n+1)!-1$.

- **(Regional)** Hallar $\displaystyle\sum_{k=2}^n\frac{1}{\log_k(k-1)\cdot\log_k(k+1)}$... *(Más avanzado: usar cambio de base y telescopeo.)*

- **(Nacional)** Demostrar que $\displaystyle\sum_{k=1}^n\frac{k}{(k+1)!}=1-\frac{1}{(n+1)!}$.

- **(Nacional)** Demostrar que $\displaystyle\prod_{k=2}^n\left(1-\frac{1}{k^2}\right)=\frac{n+1}{2n}$. *(Usar telescopeo multiplicativo: $1-1/k^2=(k-1)(k+1)/k^2$.)*
