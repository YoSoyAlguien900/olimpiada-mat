---
title: "El método de los coeficientes indeterminados (para factorizar polinomios)"
preview: "Para factorizar —o demostrar que no se puede factorizar— un polinomio de forma no evidente, postula la forma del factor con coeficientes desconocidos, expande, iguala coeficiente a coeficiente, y resuelve el sistema resultante. Una receta sistemática donde la inspiración no alcanza."
dificultad: nacional
tags: [polinomios, factorizacion, coeficientes-indeterminados, sistemas-de-ecuaciones, sophie-germain, irreducibilidad]
prerequisites: [polinomios, identidades-algebraicas, polinomios-avanzados]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

> **Nota de nomenclatura.** Este método comparte nombre —y, en el fondo, filosofía— con el "método de los coeficientes indeterminados" usado para hallar soluciones particulares de ecuaciones diferenciales lineales. Se trata de una técnica completamente distinta: aquí no hay derivadas ni ecuaciones diferenciales, solo polinomios, productos, y sistemas de ecuaciones algebraicas. La idea común —*postular una forma con parámetros desconocidos y determinarlos igualando lo postulado con lo conocido*— es lo único que ambos métodos comparten, y es una idea tan general que aparece, con nombres distintos, en casi cualquier rincón de las matemáticas.

## La idea

Factorizar un polinomio "a ojo" funciona bien cuando la factorización es evidente —una raíz racional visible, una identidad notable reconocible—. Pero muchos polinomios se factorizan de formas genuinamente sorprendentes, sin ninguna pista visual. El **método de los coeficientes indeterminados** convierte la búsqueda de una factorización —un problema de "adivinar"— en un problema de **resolver un sistema de ecuaciones**:

1. **Postular** la forma de la factorización, con coeficientes desconocidos: por ejemplo, "$P(x) = (x^2 + ax + b)(x^2 + cx + d)$ para ciertos $a, b, c, d$".
2. **Expandir** el producto postulado y agrupar por potencias de $x$.
3. **Igualar coeficiente a coeficiente** con el polinomio original — esto produce un sistema de ecuaciones algebraicas en $a, b, c, d, \ldots$
4. **Resolver el sistema** — a menudo explotando simetrías, sustituciones, o (si se buscan factorizaciones enteras) restricciones de divisibilidad.

Lo más interesante del método es que funciona **en ambas direcciones**: si el sistema tiene solución, se obtiene una factorización explícita; si se demuestra que el sistema **no tiene solución** (en los enteros, en los racionales, donde se esté buscando), se obtiene una demostración de que tal factorización **no existe** — es decir, una prueba de irreducibilidad. Pocas técnicas algebraicas elementales son tan simétricamente útiles para probar existencia y no-existencia con la misma maquinaria.

## El método, paso a paso

**Paso 1 — Elegir la forma correcta.** La elección de la forma postulada es la decisión más importante, y suele guiarse por:
- El **grado**: un polinomio de grado $4$ que no tiene raíces racionales (verificable por el criterio de la raíz racional, ver [polinomios-avanzados](../contenidos/polinomios-avanzados)) solo puede factorizarse, sobre $\mathbb{Z}$, como producto de dos cuadráticos —o ser irreducible—.
- La **simetría**: si $P(x)$ es par (solo potencias pares), conviene postular factores también simétricos entre sí, como $(x^2+ax+b)(x^2-ax+b)$ — una forma con menos parámetros, más fácil de resolver, y que cubre una familia amplia de casos relevantes.
- El **comportamiento modular o asintótico**: a veces el término líder o el término constante del polinomio fuerzan relaciones entre los coeficientes de los factores (por ejemplo, $bd = $ término constante), reduciendo drásticamente las posibilidades a verificar.

**Paso 2 — Expandir y agrupar.** Para $(x^2+ax+b)(x^2+cx+d)$:
$$
(x^2+ax+b)(x^2+cx+d) = x^4 + (a+c)x^3 + (b+d+ac)x^2 + (ad+bc)x + bd.
$$
Esta expansión —que conviene memorizar o, mejor aún, saber producir mecánicamente— es la plantilla a partir de la cual se construye el sistema en casi todos los problemas de factorización de cuárticas en dos cuadráticos.

**Paso 3 — Igualar coeficientes.** Si $P(x) = x^4 + px^2 + q$ (un polinomio bicuadrático, sin términos de grado impar), igualar con la expansión anterior da el sistema
$$
a + c = 0, \qquad b + d + ac = p, \qquad ad + bc = 0, \qquad bd = q.
$$

**Paso 4 — Resolver, explotando la estructura.** De $a + c = 0$ se obtiene $c = -a$. Sustituyendo en la tercera ecuación, $ad + bc = ad - ab = a(d - b) = 0$, así que **$a = 0$ o $d = b$** — una bifurcación que organiza el resto del análisis en dos casos limpios. Esta reducción —de cuatro incógnitas acopladas a una disyunción manejable— es el momento en que el método "se paga solo": lo que parecía un sistema de cuatro ecuaciones en cuatro incógnitas se convierte en dos sistemas mucho más simples.

## Ejemplo 1: la identidad de Sophie Germain, redescubierta sin magia

**Objetivo.** Factorizar $x^4 + 4$ en $\mathbb{Z}[x]$.

Postulamos $x^4 + 4 = (x^2+ax+b)(x^2+cx+d)$ y aplicamos el sistema del Paso 3 con $p = 0$, $q = 4$:
$$
a+c=0, \quad b+d+ac=0, \quad a(d-b)=0, \quad bd=4.
$$

*Caso $a = 0$:* entonces $c = 0$ y $b + d = 0$, es decir $d = -b$; junto con $bd = 4$ esto da $-b^2 = 4$, imposible para $b$ real. Este caso no produce soluciones.

*Caso $d = b$:* entonces $c = -a$, y la segunda ecuación se convierte en $2b - a^2 = 0$, es decir $a^2 = 2b$. Junto con $bd = b^2 = 4$, obtenemos $b = \pm 2$. Como $a^2 = 2b \geq 0$, debe ser $b = 2$, de donde $a^2 = 4$ y $a = \pm 2$.

Tomando $a = 2$ (la elección $a = -2$ simplemente intercambia los dos factores): $c = -2$, $b = d = 2$, y
$$
x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2).
$$
Esta es exactamente la **identidad de Sophie Germain** $a^4 + 4b^4 = (a^2+2b^2-2ab)(a^2+2b^2+2ab)$, evaluada en $b=1$ — recuperada aquí no por inspiración repentina, sino **resolviendo un sistema**. $\blacksquare$

## Ejemplo 2: cuando el sistema no tiene solución — una prueba de irreducibilidad

**Objetivo.** Demostrar que $x^4 + 1$ es irreducible sobre $\mathbb{Z}$ (y, por el lema de Gauss, sobre $\mathbb{Q}$).

Primero descartamos factores lineales: por el criterio de la raíz racional, las únicas raíces racionales posibles son $\pm 1$, y $1^4+1 = (-1)^4+1 = 2 \neq 0$. Así que cualquier factorización no trivial debe ser un producto de dos cuadráticos con coeficientes enteros.

Postulamos $x^4 + 1 = (x^2+ax+b)(x^2+cx+d)$ con $a,b,c,d \in \mathbb{Z}$. El sistema (con $p=0$, $q=1$) es idéntico en forma al del Ejemplo 1:
$$
a+c=0, \quad b+d+ac=0, \quad a(d-b)=0, \quad bd=1.
$$

*Caso $a = 0$:* $c = 0$, $b + d = 0$, $bd = 1 \Rightarrow -b^2 = 1$, imposible.

*Caso $d = b$:* $a^2 = 2b$ (como antes), y $bd = b^2 = 1 \Rightarrow b = \pm 1$. Si $b = 1$: $a^2 = 2$, no es un cuadrado entero. Si $b = -1$: $a^2 = -2$, imposible.

**Ningún caso produce una solución entera.** Por tanto $x^4+1$ no admite ninguna factorización no trivial en $\mathbb{Z}[x]$: es irreducible. $\blacksquare$

**La comparación que vale la pena interiorizar.** Los Ejemplos 1 y 2 resuelven, palabra por palabra, **el mismo sistema** —solo cambia el valor de $q = bd$ (de $4$ a $1$)—. Ese único cambio es lo que decide si el sistema tiene solución entera o no. Esta es la moraleja central del método: **la pregunta "¿se puede factorizar?" se convierte en la pregunta, mucho más concreta, "¿tiene este sistema de ecuaciones una solución entera (o racional)?"** — y esta segunda pregunta, a diferencia de la primera, es atacable con herramientas estándar (sustitución, análisis de casos, argumentos de divisibilidad).

## Ejemplo 3: una factorización "oculta" sin Sophie Germain

**Objetivo.** Factorizar $x^4 + x^2 + 1$.

Aquí el polinomio no encaja en el molde $x^4 + p x^2 + q$ con $p, q$ arbitrarios sin más estructura — pero sí se puede aplicar el mismo sistema. Con $p = 1$, $q = 1$:
$$
a + c = 0, \quad b+d+ac = 1, \quad a(d-b) = 0, \quad bd = 1.
$$
Probamos $d = b$ (el caso $a=0$ lleva, como siempre, a $-b^2 = 1$, imposible): entonces $bd = b^2 = 1 \Rightarrow b = \pm 1$, y $2b - a^2 = 1$. Si $b = 1$: $a^2 = 1$, $a = \pm 1$. Tomando $a = 1, c = -1, b = d = 1$:
$$
x^4+x^2+1 = (x^2+x+1)(x^2-x+1).
$$
Una verificación directa confirma la identidad. $\blacksquare$ Esta factorización —que generaliza a $x^{4k}+x^{2k}+1 = (x^{2k}+x^k+1)(x^{2k}-x^k+1)$, una identidad que reaparece constantemente en problemas sobre divisibilidad de $\frac{x^{3k}-1}{x^k-1}$— es mucho más fácil de **encontrar** mediante el sistema que de **adivinar** directamente.

## Aplicación: $n^4 + 4^n$ es compuesto para $n > 1$

Este es el ejemplo olímpico clásico que muestra el verdadero alcance de la identidad de Sophie Germain —y, por extensión, del método que la produce—.

**Si $n$ es par**, escribimos $n = 2m$, y entonces $4^n = 4^{2m} = (2^m)^4 \cdot 4$, así que
$$
n^4 + 4^n = n^4 + 4(2^m)^4 = \big(n^2 + 2\cdot 2^{2m} - 2n\cdot 2^m\big)\big(n^2+2\cdot2^{2m}+2n\cdot2^m\big),
$$
una factorización no trivial (ambos factores son mayores que $1$ para $n > 1$) por la identidad de Sophie Germain con $b = 2^m$.

**Si $n$ es impar**, el argumento es más sutil: se escribe $4^n = 4 \cdot 4^{n-1} = 4 \cdot (2^{(n-1)/2})^4$ — válido porque $n - 1$ es par— y se aplica la **misma** identidad de Sophie Germain con $b = 2^{(n-1)/2}$, obteniendo de nuevo una factorización no trivial de $n^4 + 4^n$.

En ambos casos, $n^4 + 4^n$ se escribe como producto de dos enteros mayores que $1$, así que es compuesto. $\blacksquare$ Vale la pena notar que **toda la dificultad del problema** —encontrar la forma correcta de aplicar la identidad— desaparece si primero se *deriva* la identidad mediante coeficientes indeterminados (Ejemplo 1): entonces se reconoce de inmediato la estructura "$x^4 + 4y^4$" detrás de la expresión $n^4 + 4 \cdot (\text{potencia cuarta})$, y el problema se convierte en una mera cuestión de manipulación de exponentes.

## Observación

El método de los coeficientes indeterminados es, en esencia, una instancia del principio más general de **comparación de coeficientes**: dos polinomios son iguales si y solo si tienen los mismos coeficientes en cada grado — un hecho que parece trivial, pero que es la base de técnicas tan dispares como la descomposición en fracciones parciales (ver [sumas-telescopicas](sumas-telescopicas)), la deducción de identidades mediante funciones generadoras (ver [funciones-generadoras](../../combinatoria/contenidos/funciones-generadoras)), y la determinación de soluciones polinomiales de ecuaciones funcionales (ver [busqueda-ef](busqueda-ef)). Reconocer esta unidad —que "igualar coeficientes" es siempre, en el fondo, la misma idea, sin importar el disfraz con el que aparezca— ahorra tener que aprender una técnica nueva cada vez que el contexto cambia ligeramente.

**Cuándo usarlo.** El método brilla cuando: (a) se sospecha que un polinomio de grado $\geq 4$ se factoriza, pero ninguna identidad notable es directamente aplicable; (b) se necesita **demostrar** que un polinomio es irreducible y un argumento como el criterio de Eisenstein no se aplica directamente; (c) se busca una familia paramétrica de factorizaciones (como en la identidad de Sophie Germain general $a^4+4b^4$) y conviene "redescubrirla" sistemáticamente en lugar de memorizarla.

**Una advertencia práctica.** El sistema resultante puede tener muchas variables y, a primera vista, parecer intratable. La clave casi siempre está en **explotar la simetría del polinomio original** para reducir el número de parámetros independientes desde el principio —como hicimos al observar que un polinomio bicuadrático fuerza $a + c = 0$— en lugar de enfrentarse al sistema general sin esa reducción previa.

## Problemas relacionados

- **(Clásico)** Factorizar $x^4 + 64$ usando el método de los coeficientes indeterminados, y comparar el sistema resultante con el del Ejemplo 1.
- **(Clásico)** Demostrar que $x^4 + x^3 + x^2 + x + 1$ es irreducible sobre $\mathbb{Q}$ — primero descartando raíces racionales, y luego mostrando que el sistema asociado a una factorización en dos cuadráticos enteros no tiene solución. *(Pista: este polinomio es el quinto polinomio ciclotómico $\Phi_5(x)$.)*
- **(Olimpiada, clásico)** Encontrar todos los enteros $n$ tales que $x^4 + nx^2 + 1$ se factoriza como producto de dos polinomios cuadráticos con coeficientes enteros, y describir explícitamente las factorizaciones resultantes.
- **(Olimpiada, clásico)** Demostrar, mediante una factorización tipo Sophie Germain adecuadamente generalizada, que $4k^4 + 1$ es compuesto para todo entero $k > 1$.
- **(Nacional)** Hallar todos los pares $(a,b)$ de enteros para los cuales $x^4 + ax^3 + bx^2 + ax + 1$ se factoriza en $\mathbb{Z}[x]$ como producto de dos cuadráticos de la forma $(x^2+px+1)(x^2+qx+1)$, explotando la simetría palindrómica del polinomio original.
