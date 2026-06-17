---
title: "OMG 2026 — Un polinomio que genera primos"
preview: "Determinar los enteros positivos $p$ para los que $4x^2+p$ es primo en $x=0,1,\\dots,p-1$. La clave: según la clase de $p$ módulo $16$, el valor en $x=k$ factoriza solo."
dificultad: regional
competencia: "OMG 2026"
tags: [primos, factorizacion, polinomios, congruencias]
prerequisites: [divisibilidad-basica, congruencias]
author: "Adrián García Bouzas"
updated: "2026-06-14"
---

## Enunciado

Determinar todos los enteros positivos $p$ para los que el polinomio

$$
f(x) = 4x^2 + p
$$

toma valores primos para **todos** los enteros $x = 0, 1, \dots, p-1$.

*(OMG 2026, Problema 6.)*

## Idea de la solución

El primer valor $f(0) = p$ obliga a que $p$ sea **primo**. La idea brillante es que, para conseguir un valor compuesto, basta **evaluar el polinomio en un $x = k$ bien elegido** de modo que $4k^2 + p$ se **factorice**. Y el truco para que factorice es escribir $p$ según su forma:

$$
(2k+1)^2 = 4k^2 + 4k + 1, \qquad (2k+1)(2k+3) = 4k^2 + 8k + 3, \quad\dots
$$

Cada producto de dos lineales en $k$ es de la forma $4k^2 + (\text{lineal en } k)$. Si la parte lineal coincide con $p$ —es decir, si $p$ cae en la clase de congruencia adecuada—, entonces $f(k)$ es exactamente ese producto, y por tanto compuesto. Solo en dos casos límite un factor vale $1$ y no hay compuesto: ahí aparecen $p = 3$ y $p = 7$.

## Demostración

**$p$ es primo.** Como $f(0) = p$ debe ser primo, $p$ lo es.

**$p$ es impar.** Para $p = 2$: $f(1) = 6$ no es primo. En adelante $p$ es un primo impar.

Todo número impar pertenece a **exactamente uno** de los cuatro casos siguientes (partición de los impares: primero según el resto módulo $4$; los $\equiv 3$ se reparten módulo $8$; los $\equiv 7 \pmod 8$, módulo $16$). En cada caso evaluamos en $x = k$.

**Caso 1: $p = 4k + 1$ con $k \geq 1$.** Tomando $x = k$,
$$
4k^2 + p = 4k^2 + 4k + 1 = (2k+1)^2.
$$
Como $2k + 1 \geq 3$, es un cuadrado de un número $\geq 3$: **compuesto**.

**Caso 2: $p = 8k + 3$ con $k \geq 0$.** Tomando $x = k$,
$$
4k^2 + p = 4k^2 + 8k + 3 = (2k+1)(2k+3).
$$
Es compuesto salvo cuando $k = 0$, que da $2k+1 = 1$ y deja la única posibilidad $\boxed{p = 3}$. En ese caso $f(0) = 3,\ f(1) = 7,\ f(2) = 19$ son **todos primos**.

**Caso 3: $p = 16k + 7$ con $k \geq 0$.** Tomando $x = k$,
$$
4k^2 + p = 4k^2 + 16k + 7 = (2k+1)(2k+7).
$$
Es compuesto salvo cuando $k = 0$, que da $2k+1 = 1$ y deja $\boxed{p = 7}$. En ese caso los valores de $f$ son
$$
7,\ 11,\ 23,\ 43,\ 71,\ 107,\ 151,
$$
y **todos son primos**.

**Caso 4: $p = 16k + 15$ con $k \geq 1$.** Tomando $x = k$,
$$
4k^2 + p = 4k^2 + 16k + 15 = (2k+3)(2k+5),
$$
con ambos factores $\geq 5$: **siempre compuesto**.

En los cuatro casos, el $x = k$ elegido cumple $0 \leq k \leq p-1$ (de hecho $k \approx p/4$ a $p/16$), así que está dentro del rango exigido.

**Conclusión.** Salvo las dos excepciones, todo primo impar produce un valor compuesto. Las únicas soluciones son

$$
\boxed{\,p = 3 \quad\text{y}\quad p = 7\,.}
$$

## Observación

La maquinaria es la identidad
$$
(2k + a)(2k + b) = 4k^2 + 2(a+b)\,k + ab,
$$
con $a, b$ impares. La parte $2(a+b)k + ab$ es justo "lineal en $k$ más constante"; al pedir que coincida con $p$, la elección de $(a,b)$ queda fijada por la clase de congruencia de $p$:

| forma de $p$ | $(a,b)$ | factorización de $f(k)$ |
|---|---|---|
| $4k+1$ | $(1,1)$ | $(2k+1)^2$ |
| $8k+3$ | $(1,3)$ | $(2k+1)(2k+3)$ |
| $16k+7$ | $(1,7)$ | $(2k+1)(2k+7)$ |
| $16k+15$ | $(3,5)$ | $(2k+3)(2k+5)$ |

La factorización solo es **trivial** (un factor igual a $1$, es decir $a = 1$ y $k = 0$) en los casos 2 y 3, que producen $p = 3$ y $p = 7$. Esa es la razón estructural de que haya exactamente dos soluciones, y de que sean tan pequeñas: son los únicos primos que "se cuelan" por la rendija $k = 0$.

Conviene contrastar este enfoque con el residuo cuadrático. Uno podría intentar probar que algún primo $q < p$ divide a $f(x)$ para algún $x$ del rango (lo cual equivale a que $-p$ sea residuo cuadrático módulo $q$); pero ese cribado **no termina** y conduce a teoría profunda (cuerpos cuadráticos de número de clase $1$). La gracia de la solución oficial es **esquivar todo eso**: en lugar de buscar un divisor, se *construye* la factorización completa eligiendo $x = k$.

## Aplicaciones

La técnica —**evaluar un polinomio en un punto donde se factorice**, ajustando la forma del parámetro por congruencias— es un recurso clásico para demostrar que ciertas expresiones no pueden ser siempre primas. La misma idea aparece, por ejemplo, en que $n^4 + 4 = (n^2 - 2n + 2)(n^2 + 2n + 2)$ (identidad de Sophie Germain) o al estudiar cuándo $n^2 + n + c$ deja de generar primos. La moraleja: antes de invocar maquinaria pesada, conviene preguntarse si una **elección astuta del punto de evaluación** revela una factorización oculta.
