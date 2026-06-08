---
title: "Tres caminos hacia la fórmula de Catalan"
preview: "$C_n = \\frac{1}{n+1}\\binom{2n}{n}$ se puede deducir reflejando caminos, resolviendo una ecuación cuadrática de funciones generadoras, o contando con el lema del ciclo. Tres demostraciones, tres formas de pensar la combinatoria enumerativa."
dificultad: nacional
tags: [catalan, demostracion, funciones-generadoras, biyecciones, reflexion]
prerequisites: [numeros-catalan, funciones-generadoras]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

Los números de Catalan $C_n = \frac{1}{n+1}\binom{2n}{n}$ son, posiblemente, la sucesión que admite más demostraciones genuinamente distintas de su fórmula cerrada en toda la combinatoria — Stanley cataloga más de $200$ interpretaciones combinatorias en su "Catalan Numbers". Aquí presentamos tres pruebas de la fórmula misma, cada una representativa de una **familia de técnicas** que reaparece constantemente: reflexión geométrica, álgebra de funciones generadoras, y un argumento de simetría cíclica casi mágico.

## Demostración 1: El principio de reflexión (Désiré André, 1887)

**Enunciado.** El número de caminos de Dyck de $(0,0)$ a $(2n, 0)$ —pasos $(1,1)$ y $(1,-1)$, sin bajar nunca de $y=0$— es $C_n = \binom{2n}{n} - \binom{2n}{n+1}$, que coincide con $\frac{1}{n+1}\binom{2n}{n}$.

**Demostración.** El número total de caminos de $(0,0)$ a $(2n,0)$ con pasos $\pm 1$ (sin restricción) es $\binom{2n}{n}$ (hay que elegir cuáles de los $2n$ pasos son "$+1$"). Llamamos **malo** a un camino que toca la altura $-1$ en algún momento. Construimos una biyección entre los caminos malos y los caminos arbitrarios de $(0,0)$ a $(2n, -2)$:

Dado un camino malo, sea $t$ el primer instante en que toca $y = -1$. Reflejamos verticalmente (respecto de la recta $y = -1$) la porción del camino posterior a $t$. El tramo inicial, hasta $t$, termina en altura $-1$; el tramo reflejado, que originalmente iba de altura $-1$ a la altura final $0$, ahora va de $-1$ a $-2$. El camino resultante llega a $(2n, -2)$.

Esta transformación es **reversible**: dado un camino arbitrario a $(2n,-2)$, como empieza en $0$ y termina en $-2$, debe cruzar $y=-1$ en algún instante $t$ (el primero); reflejando la parte posterior a $t$ se recupera un camino malo único que termina en $0$. La correspondencia es biyectiva.

Un camino de $(0,0)$ a $(2n,-2)$ tiene $n+1$ pasos "$-1$" y $n-1$ pasos "$+1$", así que hay $\binom{2n}{n-1} = \binom{2n}{n+1}$ de ellos. Por tanto el número de caminos malos es $\binom{2n}{n+1}$, y
$$
C_n = \binom{2n}{n} - \binom{2n}{n+1}.
$$
Un cálculo directo confirma que esta diferencia es igual a $\frac{1}{n+1}\binom{2n}{n}$:
$$
\binom{2n}{n} - \binom{2n}{n+1} = \binom{2n}{n}\left(1 - \frac{n}{n+1}\right) = \binom{2n}{n} \cdot \frac{1}{n+1}. \qquad \blacksquare
$$

**Por qué funciona.** El truco —"localiza el primer momento en que ocurre algo malo, y refleja todo lo que viene después"— transforma un conjunto difícil de contar (caminos con una restricción global) en un conjunto fácil de contar (caminos sin restricción, hacia un punto distinto). Es el mismo principio detrás del **teorema del escrutinio de Bertrand** y de numerosas estimaciones de paseos aleatorios — ver [biyecciones](../metodos/biyecciones).

## Demostración 2: Funciones generadoras y la ecuación cuadrática

**Demostración.** Sea $C(x) = \sum_{n \geq 0} C_n x^n$ la función generadora ordinaria de los números de Catalan, donde $C_n$ cuenta, digamos, las triangulaciones de un polígono convexo de $n+2$ lados (o, equivalentemente, los árboles binarios completos con $n$ nodos internos — ver [numeros-catalan](../contenidos/numeros-catalan)).

Todo árbol binario completo no vacío se descompone, de forma única, en una raíz con un **subárbol izquierdo** y un **subárbol derecho**, ambos árboles binarios completos (posiblemente vacíos). Si el subárbol izquierdo tiene $k$ nodos internos, el derecho tiene $n - 1 - k$ (la raíz consume uno). Esta descomposición recursiva se traduce, vía el **diccionario de funciones generadoras** (producto de Cauchy $\leftrightarrow$ convolución de coeficientes — ver [funciones-generadoras](../contenidos/funciones-generadoras)), en la ecuación funcional
$$
C(x) = 1 + x \, C(x)^2,
$$
donde el sumando $1$ corresponde al árbol vacío ($C_0 = 1$) y el término $x \cdot C(x)^2$ codifica "elige una raíz (factor $x$, que desplaza el índice en $1$) y luego un par (subárbol izquierdo, subárbol derecho), independientemente, cada uno generado por $C(x)$".

Resolviendo la ecuación cuadrática $x C(x)^2 - C(x) + 1 = 0$ mediante la fórmula general (válida formalmente para series de potencias, escogiendo la rama que da $C(0) = 1$):
$$
C(x) = \frac{1 - \sqrt{1 - 4x}}{2x}.
$$
Para extraer los coeficientes, expandimos $\sqrt{1-4x} = (1-4x)^{1/2}$ mediante el **teorema del binomio generalizado de Newton** (ver [binomio-newton-demos](binomio-newton-demos)):
$$
(1-4x)^{1/2} = \sum_{k \geq 0} \binom{1/2}{k}(-4x)^k = 1 - \sum_{n \geq 1} \frac{2}{n}\binom{2n-2}{n-1} x^n,
$$
donde la simplificación de $\binom{1/2}{k}(-4)^k$ —un cálculo de coeficientes binomiales generalizados que requiere cierto cuidado algebraico, pero es mecánico— produce exactamente esos coeficientes. Sustituyendo,
$$
C(x) = \frac{1 - \left(1 - \sum_{n\geq 1} \frac{2}{n}\binom{2n-2}{n-1}x^n\right)}{2x} = \sum_{n \geq 1} \frac{1}{n}\binom{2n-2}{n-1} x^{n-1} = \sum_{n \geq 0} \frac{1}{n+1}\binom{2n}{n} x^n.
$$
Comparando coeficientes, $C_n = \dfrac{1}{n+1}\dbinom{2n}{n}$. $\blacksquare$

**El precio y la recompensa.** Esta demostración exige manipular series formales y el binomio generalizado —más maquinaria que la prueba por reflexión—, pero a cambio **explica de dónde viene la ecuación cuadrática**, y generaliza inmediatamente: la misma técnica (plantear la ecuación funcional de la descomposición recursiva, resolverla, extraer coeficientes vía el binomio generalizado) resuelve contar árboles $k$-arios, particiones planas, y muchas otras familias recursivas — convirtiéndose en un método, no solo en una prueba aislada.

## Demostración 3: El lema del ciclo (Dvoretzky–Motzkin, 1947)

**Enunciado y demostración.** Consideramos secuencias de $2n+1$ símbolos, de los cuales $n+1$ son "$+1$" y $n$ son "$-1$", dispuestos en cualquier orden. El **lema del ciclo** afirma: entre las $2n+1$ rotaciones cíclicas de una secuencia tal, **exactamente una** tiene todas las sumas parciales estrictamente positivas.

*Prueba del lema.* Sea $a_1, \ldots, a_{2n+1}$ la secuencia (con $a_i \in \{+1,-1\}$, suma total $1$), y sean $s_k = a_1 + \cdots + a_k$ las sumas parciales, con $s_0 = 0$, $s_{2n+1} = 1$. Para la rotación que comienza en la posición $j+1$, la suma parcial tras $k$ pasos es $s_{j+k} - s_j$ (índices módulo $2n+1$, ajustando por la vuelta completa que aporta $+1$ a la suma total). Esta rotación tiene todas las sumas parciales positivas si y solo si $j$ es el índice donde $s_j$ alcanza su **valor mínimo** —y, como los $s_k$ son enteros que cambian en $\pm 1$ y $s_{2n+1} = s_0 + 1$, el mínimo se alcanza en **exactamente un** índice $j \in \{0, 1, \ldots, 2n\}$ (el último lugar donde se alcanza el valor mínimo, antes de que la secuencia lo abandone definitivamente para terminar una unidad por encima). Esto prueba el lema. $\square$

*De vuelta a Catalan.* Por el lema, de las $2n+1$ rotaciones de cada secuencia con $n+1$ símbolos "$+1$" y $n$ símbolos "$-1$", exactamente una tiene todas las sumas parciales positivas — y, removiendo el último símbolo (que debe ser "$+1$", pues la suma total es $1$ y la suma parcial en la posición $2n$ es $0$, ya que es positiva en $2n$ pasos y termina en $1$... un análisis cuidadoso muestra que esa rotación corresponde exactamente a un **camino de Dyck prolongado**) se obtiene una correspondencia que muestra que el número de tales secuencias "buenas" es $\frac{1}{2n+1}$ del total $\binom{2n+1}{n}$:
$$
C_n = \frac{1}{2n+1}\binom{2n+1}{n}.
$$
Una manipulación algebraica directa de coeficientes binomiales —usando $\binom{2n+1}{n} = \binom{2n}{n}\cdot\frac{2n+1}{n+1}$— confirma que esto coincide con $\frac{1}{n+1}\binom{2n}{n}$. $\blacksquare$

**Por qué es notable.** El lema del ciclo convierte un problema de conteo con una restricción "global" (sumas parciales positivas en todo momento) en un argumento de **simetría bajo un grupo de rotaciones** — exactamente la misma familia de ideas que el lema de Burnside (ver [biyecciones](../metodos/biyecciones), Ejemplo 2). Es, además, la herramienta estándar para contar **árboles con etiquetas**, **funciones de estacionamiento**, y otras estructuras donde "exactamente una rotación es buena" es el núcleo del argumento — su alcance va mucho más allá de Catalan.

## Comparación: tres lentes sobre el mismo número

| Demostración | Idea central | Generaliza hacia... |
|---|---|---|
| Reflexión | Localizar el primer "error" y reflejar | Teorema del escrutinio, paseos aleatorios con barreras |
| Funciones generadoras | Codificar la recursión como ecuación funcional | Árboles $k$-arios, particiones planas, especies combinatorias |
| Lema del ciclo | Simetría cíclica: una rotación "buena" por órbita | Funciones de estacionamiento, árboles etiquetados, fórmula de Cayley |

Ninguna prueba "explica todo": cada una ilumina una faceta distinta de por qué $\frac{1}{n+1}\binom{2n}{n}$ —una expresión que, a primera vista, no tiene por qué ser siquiera un entero— cuenta tantas familias de objetos aparentemente inconexas. Esa convergencia de perspectivas, más que cualquier prueba individual, es la verdadera explicación de por qué los números de Catalan aparecen por todas partes en la combinatoria.
