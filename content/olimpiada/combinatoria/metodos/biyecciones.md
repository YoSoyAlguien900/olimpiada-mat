---
title: "El método biyectivo"
preview: "Para probar que dos conjuntos tienen el mismo cardinal, constrúyase una correspondencia explícita entre ellos. Cuando funciona, una biyección reemplaza una página de cálculo por una idea que se puede dibujar."
dificultad: nacional
tags: [biyecciones, conteo, simetria, involuciones]
prerequisites: [principios-conteo, coeficientes-binomiales]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **método biyectivo** consiste en demostrar que $|A| = |B|$ —o que $|A| \leq |B|$, o que una identidad numérica $f(n) = g(n)$ es válida— **construyendo explícitamente una función biyectiva** $\varphi: A \to B$ (respectivamente, una inyección, o una correspondencia entre los conjuntos que cuentan $f(n)$ y $g(n)$), en lugar de calcular ambos cardinales por separado y comparar los resultados.

Su atractivo no es solo estético: una biyección bien construida revela **por qué** dos cantidades son iguales —la razón estructural profunda—, mientras que una verificación algebraica (aunque correcta) a menudo deja esa razón oculta.

## Teorema

No hay un enunciado único: como el [conteo doble](conteo-doble), es **un patrón de demostración**. Tres instancias de referencia ineludibles:

**1. Simetría de los binomiales.** $\binom{n}{k} = \binom{n}{n-k}$, vía $S \mapsto [n]\setminus S$ (complementación).

**2. Las tres caras de Catalan.** Caminos de Dyck $\leftrightarrow$ secuencias de paréntesis balanceadas $\leftrightarrow$ árboles binarios completos — todas en biyección explícita (ver [numeros-catalan](../contenidos/numeros-catalan)).

**3. El teorema de las particiones de Euler.** Particiones en partes distintas $\leftrightarrow$ particiones en partes impares, vía el algoritmo de Glaisher (factorizar cada parte como (impar) $\times 2^k$ y reagrupar).

## Demostración

Presentamos dos construcciones biyectivas canónicas, elegidas por su elegancia y por la frecuencia con que su *idea* —no la biyección en sí— reaparece en otros contextos.

**(a) La involución de Garsia–Milne / el "truco de la reflexión" para el principio de reflexión de Catalan.** En la demostración de la fórmula $C_n = \binom{2n}{n} - \binom{2n}{n+1}$ (ver [numeros-catalan](../contenidos/numeros-catalan)), el paso decisivo es una biyección: a cada camino "malo" (que toca $-1$) se le asocia, reflejando la parte posterior al primer cruce respecto de la recta $y=-1$, un camino arbitrario hacia $(2n,-2)$. Esta construcción —*localizar el primer momento en que ocurre algo, y "voltear" todo lo que viene después*— es el prototipo del **argumento de reflexión**, que reaparece en el teorema del escrutinio de Bertrand, en estimaciones de paseos aleatorios, y en pruebas de identidades de tipo determinante (lema de Lindström–Gessel–Viennot). $\square$

**(b) La biyección de Glaisier entre particiones distintas e impares.** Dada una partición de $n$ en partes distintas $\lambda_1 > \lambda_2 > \cdots$, escribimos cada $\lambda_i = 2^{a_i} m_i$ con $m_i$ impar, y "desplegamos" cada parte $\lambda_i$ en $2^{a_i}$ copias de $m_i$; la partición resultante tiene solo partes impares (posiblemente repetidas). Recíprocamente, dada una partición en partes impares, agrupamos las copias de cada parte impar $m$ según la representación binaria de su multiplicidad, produciendo partes distintas $2^{a}m$. Estas dos construcciones son inversas entre sí, estableciendo la biyección y demostrando el teorema de Euler sin pasar por funciones generadoras. $\blacksquare$

## Ejemplo

**Ejemplo 1 (subconjuntos de tamaño par e impar — la involución más simple posible).** Para $n \geq 1$, hay tantos subconjuntos de $[n]$ de tamaño par como de tamaño impar (ambos $2^{n-1}$). *Biyección:* $S \mapsto S \,\triangle\, \{1\}$ (añadir o quitar el elemento $1$). Esta involución cambia la paridad del tamaño de $S$ en exactamente $1$, así que empareja perfectamente los subconjuntos de tamaño par con los de tamaño impar — y de paso **demuestra** la identidad $\sum_k (-1)^k \binom{n}{k} = 0$ sin ningún cálculo. $\blacksquare$

**Ejemplo 2 (el "truco de empuje cíclico" para Lucas/Fermat combinatorio).** Para probar que $p \mid \binom{p}{k}$ para $0 < k < p$ primo (ver [pequeño teorema de Fermat](../../teoria-numeros/contenidos/pequeno-teorema-fermat)), se hace actuar el grupo cíclico $\mathbb{Z}/p\mathbb{Z}$ sobre los $k$-subconjuntos de $[p]$ por rotación $i \mapsto i+1 \pmod p$; como $p$ es primo, cada órbita tiene tamaño $1$ o $p$, y las órbitas de tamaño $1$ corresponderían a subconjuntos invariantes bajo toda rotación —que solo existen si $k \in \{0, p\}$—. Por tanto todas las órbitas tienen tamaño $p$, y $p \mid \binom{p}{k}$. Este es el **lema de Burnside / conteo de órbitas** en su forma más simple, y es un ejemplo arquetípico de cómo una **acción de grupo bien elegida** sustituye un cálculo aritmético por una observación estructural.

## Aplicaciones

### Involuciones que cancelan: el método de signos

Cuando se quiere probar que una suma alternada $\sum_S (-1)^{|S|} w(S) = 0$ (o se reduce a un único término), una estrategia poderosa es construir una **involución sin puntos fijos** $\varphi$ sobre el conjunto de índices que cambia la paridad de $|S|$ pero preserva $w(S)$: entonces los términos se cancelan en parejas $\{S, \varphi(S)\}$. Esta es la idea detrás de demostraciones biyectivas del principio de inclusión-exclusión, de identidades de tipo Vandermonde con signos, y —en su forma más sofisticada— del **lema de los signos de Lindström–Gessel–Viennot** para determinantes de matrices de caminos.

### Cuándo *no* buscar una biyección

No toda identidad numérica admite una biyección natural y elegante —algunas requieren genuinamente argumentos algebraicos o analíticos (funciones generadoras, polinomios, desigualdades)—. La señal de que una biyección es prometedora: **ambos lados de la identidad cuentan, de forma transparente, objetos combinatorios concretos** (subconjuntos, caminos, palabras, particiones). Cuando una identidad involucra sumas con signos complicados, productos de factoriales sin interpretación combinatoria clara, o constantes irracionales, es más probable que el camino correcto pase por funciones generadoras (ver [funciones-generadoras](../contenidos/funciones-generadoras)) o por manipulación algebraica directa.

### Biyecciones y el principio de "doble conteo elevado"

Una variante refinada: en lugar de biyectar $A$ con $B$ directamente, se biyectan $A \times C$ con $B \times C$ (o $k$ copias de $A$ con $k$ copias de $B$) para algún conjunto auxiliar $C$ —un truco que a menudo simplifica drásticamente la construcción cuando $|A| = |B|$ es "casi" evidente salvo por un factor multiplicativo molesto. Esta es exactamente la estrategia detrás de la prueba clásica de que $\binom{n}{k} = \frac{n^{\underline{k}}}{k!}$: en lugar de biyectar subconjuntos con combinaciones directamente, se biyecta (subconjunto, orden) con (variación), y se divide por $k!$.

## Observación

Construir una biyección exige responder dos preguntas con total precisión: *¿cómo se transforma un objeto típico de $A$ en uno de $B$?* y *¿por qué esa transformación es reversible —cómo se recupera el objeto original?* La segunda pregunta es la que con más frecuencia se omite y la que con más frecuencia esconde el error: una "biyección" que en realidad no es inyectiva, o no es sobreyectiva, es uno de los fallos más comunes (y más difíciles de detectar a simple vista) en soluciones de combinatoria. La disciplina de **verificar explícitamente la función inversa** —no solo describirla intuitivamente— es lo que separa una biyección rigurosa de una mera "intuición de que debería funcionar".

## Problemas relacionados

- **(Clásico)** Construir una biyección explícita entre los subconjuntos de $\{1,\ldots,n\}$ sin dos elementos consecutivos y los subconjuntos de $\{1,\ldots,n-k+1\}$ de tamaño $k$, demostrando que el primer conjunto tiene $\binom{n-k+1}{k}$ elementos de tamaño $k$.
- **(Clásico)** Dar una demostración biyectiva de la identidad $n \cdot \binom{n-1}{k-1} = k \cdot \binom{n}{k}$ (doble conteo de pares (subconjunto de tamaño $k$, elemento distinguido del subconjunto)).
- **(ISL, clásico)** Construir una biyección entre las permutaciones de $[n]$ con exactamente $k$ "descensos" ($\sigma(i) > \sigma(i+1)$) y otra familia combinatoria de igual cardinal (números eulerianos), explorando la simetría $A(n,k) = A(n,n-1-k)$.
- **(Clásico)** Probar biyectivamente que el número de formas de escribir $n$ como suma ordenada de enteros positivos (composiciones) es $2^{n-1}$, asociando a cada composición un subconjunto de $\{1,\ldots,n-1\}$.
- **(Olimpiada, clásico)** Demostrar biyectivamente que el número de subconjuntos de $\{1, \ldots, 2n\}$ de tamaño $n$ que contienen al menos un elemento mayor que $n$ es igual al número de subconjuntos de tamaño $n$ que contienen al menos un elemento menor o igual que $n$ — y notar por qué la afirmación, una vez vista así, es trivial.
