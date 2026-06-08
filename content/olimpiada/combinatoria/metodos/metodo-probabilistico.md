---
title: "El método probabilístico"
preview: "Para demostrar que existe un objeto con cierta propiedad, calcula la probabilidad de que un objeto aleatorio la tenga; si es positiva, el objeto existe. Una de las ideas más audaces e influyentes de la combinatoria moderna, atribuida a Erdős."
dificultad: internacional
tags: [probabilistico, esperanza, existencia, erdos, segundo-momento]
prerequisites: [principios-conteo, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **método probabilístico** demuestra la existencia de un objeto combinatorio con cierta propiedad $P$ sin construirlo explícitamente: se define una distribución de probabilidad razonable sobre una familia de objetos candidatos, y se demuestra que
$$
\Pr[\text{el objeto aleatorio tiene la propiedad } P] > 0.
$$
Como la probabilidad es estrictamente positiva, **debe existir** al menos un objeto en el espacio muestral con la propiedad —de lo contrario la probabilidad sería $0$—. El argumento no construye el objeto ni indica cómo encontrarlo: solo certifica que existe.

La variante más usada con diferencia es el **argumento de la esperanza**: si una variable aleatoria $X$ (que cuenta o mide algo de interés) satisface $\mathbb{E}[X] \geq c$, entonces existe un resultado del experimento con $X \geq c$ — porque, si todos los valores de $X$ fueran estrictamente menores que $c$, también lo sería su promedio.

## Teorema

**1. Principio de la esperanza (forma combinatoria del principio del promedio).** Si $X$ es una variable aleatoria que toma finitos valores, entonces existen resultados $\omega_1, \omega_2$ con $X(\omega_1) \leq \mathbb{E}[X] \leq X(\omega_2)$. En particular, $\Pr[X \geq \mathbb{E}[X]] > 0$ y $\Pr[X \leq \mathbb{E}[X]] > 0$.

**2. Linealidad de la esperanza.** $\displaystyle \mathbb{E}\Big[\sum_i X_i\Big] = \sum_i \mathbb{E}[X_i]$ — **sin que importe si los $X_i$ son independientes**. Esta propiedad —simple de enunciar, asombrosamente potente en aplicación— es el motor de casi todas las pruebas probabilísticas en combinatoria.

**3. Cota inferior de Erdős para números de Ramsey.** Para $t \geq 3$, $\displaystyle R(t,t) > 2^{t/2}$.

**4. Método del segundo momento (esquema).** Si $\mathbb{E}[X] \to \infty$ y $\text{Var}(X) = o(\mathbb{E}[X]^2)$, entonces $X > 0$ con probabilidad que tiende a $1$ — una herramienta para demostrar que cierta estructura aparece *casi siempre*, no solo *alguna vez*.

## Demostración

**(3) Cota de Erdős para $R(t,t)$.** Coloreamos las aristas de $K_n$ al azar: cada arista, independientemente, roja o azul con probabilidad $\frac12$. Para cada subconjunto $S$ de $t$ vértices, sea $A_S$ el evento "$S$ induce una clique monocromática". Como hay $\binom{t}{2}$ aristas dentro de $S$, y cada una debe tener el mismo color,
$$
\Pr[A_S] = 2 \cdot \left(\frac{1}{2}\right)^{\binom{t}{2}} = 2^{1 - \binom{t}{2}}.
$$
Por la **cota de unión** (un caso particular de subaditividad, consecuencia inmediata de la linealidad de la esperanza aplicada a la variable indicadora $\sum_S \mathbf 1_{A_S}$),
$$
\Pr\Big[\bigcup_S A_S\Big] \leq \sum_{S} \Pr[A_S] = \binom{n}{t} 2^{1-\binom{t}{2}}.
$$
Si esta cantidad es **estrictamente menor que $1$**, entonces $\Pr\big[\text{ninguna clique monocromática}\big] > 0$: existe una coloración de $K_n$ sin cliques monocromáticas de tamaño $t$, así que $R(t,t) > n$. Una verificación numérica muestra que $\binom{n}{t}2^{1-\binom{t}{2}} < 1$ se cumple para $n = \lfloor 2^{t/2} \rfloor$ y $t$ suficientemente grande (usando $\binom{n}{t} \leq n^t/t!$ y comparando exponentes), lo que da $R(t,t) > 2^{t/2}$. $\blacksquare$

Es instructivo notar lo que este argumento **no** hace: no exhibe ninguna coloración concreta sin cliques monocromáticas grandes —de hecho, construir una explícitamente para $t$ grande sigue siendo un problema abierto (el "problema de la construcción explícita de Ramsey")—. El método probabilístico certifica la existencia sin revelar el objeto: una de las paradojas más fascinantes —y más productivas— de la combinatoria moderna.

## Ejemplo

**Ejemplo 1 (torneos sin "dominadores", el resultado fundacional de Erdős, 1963).** En un torneo (grafo dirigido completo) de $n$ jugadores, decimos que un conjunto $S$ de $k$ jugadores está **dominado** si existe un jugador que vence a todos los de $S$. Si $\binom{n}{k}\left(1 - 2^{-k}\right)^{n-k} < 1$, existe un torneo en el que ningún conjunto de $k$ jugadores está dominado. *Esquema:* orientamos cada partido al azar e independientemente; para cada $k$-subconjunto $S$, $\Pr[S \text{ dominado}] \leq n (1-2^{-k})^{n-k}$ (la probabilidad de que un jugador fijo fuera de $S$ no domine a $S$ es $1 - 2^{-k}$, y hay $n - k$ candidatos). La cota de unión cierra el argumento. $\blacksquare$ Este resultado —que para $k$ fijo y $n$ suficientemente grande siempre existe tal torneo— es esencialmente imposible de obtener mediante una construcción explícita, y marcó el nacimiento del método probabilístico como herramienta sistemática.

**Ejemplo 2 (conjuntos sin progresiones aritméticas vía esperanza).** Para estimar el tamaño máximo de un subconjunto de $\{1,\ldots,N\}$ sin progresiones aritméticas de longitud $3$, se puede colorear cada elemento al azar con probabilidad $p$ de pertenecer al conjunto, calcular la esperanza del número de elementos menos el número (esperado) de progresiones aritméticas de longitud $3$ contenidas, y elegir $p$ para maximizar esta diferencia — produciendo, vía el argumento de la esperanza, un conjunto grande sin tales progresiones (el método de "alteración" o *deletion method*).

## Aplicaciones

### El argumento de la esperanza como atajo universal

Cuando un problema pide demostrar "existe un objeto con al menos / a lo sumo $X$ de tal cosa", conviene preguntarse de inmediato: *¿cuál es el valor esperado de $X$ sobre alguna distribución natural de objetos?* Si se puede calcular ese promedio —y la linealidad de la esperanza casi siempre lo hace tratable, incluso cuando los sumandos están correlacionados de forma complicada—, el principio del promedio produce la existencia gratuitamente.

**Problema.** En cualquier grafo $G$ con $n$ vértices y $m$ aristas, demostrar que existe una **bipartición** de los vértices que "corta" al menos $m/2$ aristas.

**Solución.** Asignamos cada vértice, independientemente, a una de dos partes con probabilidad $\frac12$. Para cada arista $e = \{u,v\}$, sea $X_e$ el indicador de que $e$ es "cortada" (sus extremos caen en partes distintas); $\Pr[X_e = 1] = \frac12$. Por linealidad de la esperanza, el número esperado de aristas cortadas es $\sum_e \mathbb{E}[X_e] = m/2$. Por el principio del promedio, existe alguna bipartición concreta con al menos $\lceil m/2 \rceil$ aristas cortadas. $\blacksquare$ Este argumento —de tres líneas— resuelve un problema de optimización combinatoria (el "problema del corte máximo", **Max-Cut**) que en su forma exacta es **NP-difícil**.

### El método de alteración (*deletion method*)

A veces un objeto aleatorio "casi" tiene la propiedad deseada, salvo por unos pocos defectos: el **método de alteración** consiste en construir el objeto al azar, calcular el número esperado de defectos, y luego **eliminar** un elemento por cada defecto (de forma determinista). Si el número esperado de elementos restantes tras esta poda sigue siendo positivo, el objeto resultante —sin defectos, y no vacío— existe. Esta combinación de aleatoriedad y corrección determinista es uno de los recursos más versátiles del método.

### De la existencia a la abundancia: el método del segundo momento

El argumento de la esperanza certifica que *al menos un* objeto tiene la propiedad. El **método del segundo momento** (vía la desigualdad de Chebyshev, $\Pr[|X - \mathbb{E}[X]| \geq t] \leq \text{Var}(X)/t^2$) certifica algo más fuerte: que *casi todos* los objetos del espacio muestral la tienen. Esta distinción —"existe" frente a "es típico"— es la frontera entre el método probabilístico elemental (suficiente en olimpiadas) y la teoría de grafos aleatorios moderna (Erdős–Rényi, umbral de aparición de propiedades).

## Observación

El método probabilístico desconcierta la primera vez que se encuentra: ¿cómo puede la "probabilidad" —una noción aparentemente analítica, asociada a la incertidumbre— demostrar afirmaciones puramente combinatorias y deterministas? La respuesta es que **la probabilidad aquí es solo un lenguaje conveniente para el conteo ponderado y el promedio**: "$\Pr[A] > 0$" es exactamente "$|A| > 0$" expresado en proporciones en lugar de cardinales absolutos, y la linealidad de la esperanza es exactamente el [conteo doble](conteo-doble) disfrazado de promedio. Una vez interiorizada esta traducción, el método deja de parecer mágico y se convierte en una herramienta más del repertorio —extraordinariamente potente cuando un conteo directo de "el peor caso" resulta inabordable, pero un promedio sobre todos los casos es tratable.

## Problemas relacionados

- **(Clásico)** Demostrar que en cualquier conjunto de $n$ vectores unitarios en $\mathbb{R}^d$, existe un subconjunto cuya suma tiene norma al menos $\sqrt{n/d}$ — usando un argumento de esperanza sobre signos aleatorios $\pm 1$.
- **(Clásico)** Probar que todo grafo con $n$ vértices y $m$ aristas contiene un subgrafo bipartito con al menos $m/2$ aristas (caso particular del Max-Cut probabilístico desarrollado arriba — verificarlo de forma autónoma).
- **(ISL, clásico)** Demostrar que existe una coloración de las aristas de $K_n$ con dos colores tal que el número de triángulos monocromáticos es a lo sumo $\binom{n}{3} 2^{-2}$ — calculando la esperanza del número de triángulos monocromáticos bajo coloración aleatoria.
- **(Clásico)** Usando el método de la esperanza, demostrar que para todo grafo $G$ con $n$ vértices y grado medio $d$, existe un conjunto independiente de tamaño al menos $n/(d+1)$. *(Algoritmo aleatorio de eliminación de vecinos — el "argumento de Caro–Wei".)*
- **(Olimpiada, clásico)** En una competición con $n$ concursantes y $m$ problemas, donde cada concursante resuelve al menos $\frac{m}{2}$ problemas, demostrar que existen dos concursantes y dos problemas tales que ambos concursantes resolvieron ambos problemas — comparando un argumento de esperanza con uno de doble conteo directo.
