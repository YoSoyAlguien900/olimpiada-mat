---
title: "Teoría de Ramsey: el orden es inevitable"
preview: "En cualquier conjunto suficientemente grande, por caótico que parezca, siempre emerge una estructura ordenada. La afirmación precisa de esta idea —y su demostración— es uno de los resultados más influyentes de la combinatoria del siglo XX."
dificultad: elite
tags: [ramsey, grafos, coloracion, palomar, induccion]
prerequisites: [grafos-fundamentos, palomar]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

## Definición

El **número de Ramsey** $R(s,t)$ es el menor entero $n$ tal que toda coloración de las aristas de $K_n$ con dos colores (rojo y azul) contiene, o bien una **clique roja** de tamaño $s$ (un $K_s$ con todas sus aristas rojas), o bien una **clique azul** de tamaño $t$.

Más generalmente, $R(s_1,\ldots,s_k)$ es el menor $n$ tal que toda coloración de $E(K_n)$ con $k$ colores contiene, para algún $i$, una clique monocromática de color $i$ y tamaño $s_i$.

La pregunta fundacional es de existencia: ¿es siempre finito $R(s,t)$? La respuesta —sí— es el **teorema de Ramsey**, y es de naturaleza completamente distinta a "calcular" $R(s,t)$, que sigue siendo, para la mayoría de los valores, un problema abierto.

## Teorema

**1. Teorema de Ramsey (caso de dos colores, grafos).** Para todos los enteros $s, t \geq 2$, el número $R(s,t)$ existe (es finito).

**2. Cota recursiva de Erdős–Szekeres.**
$$
R(s,t) \leq R(s-1, t) + R(s, t-1), \qquad \text{y por tanto} \qquad R(s,t) \leq \binom{s+t-2}{s-1}.
$$

**3. Casos pequeños exactos.** $R(3,3) = 6$, $R(3,4) = 9$, $R(4,4) = 18$. (Más allá de estos, los valores exactos de $R(s,t)$ son, en su gran mayoría, **desconocidos** — Erdős comentó célebremente que la humanidad debería concentrar todos sus recursos en calcular $R(5,5)$ antes de que una civilización extraterrestre hostil exija el valor de $R(6,6)$ bajo amenaza de destruir la Tierra... porque sería más fácil intentar destruir al alienígena.)

**4. Cota inferior probabilística (Erdős, 1947).** $R(t,t) > 2^{t/2}$ para $t$ suficientemente grande — el primer triunfo espectacular del [método probabilístico](../metodos/metodo-probabilistico) en combinatoria.

## Demostración

**(2) Cota recursiva — el corazón del teorema.** Probamos que $R(s,t) \leq R(s-1,t) + R(s,t-1)$ por inducción doble, lo cual implica la finitud de $R(s,t)$ a partir de los casos base triviales $R(s, 2) = s$ y $R(2, t) = t$ (con solo $2$ vértices, o hay una arista de cada color, o todas son del mismo).

Sea $n = R(s-1,t) + R(s,t-1)$ y consideremos cualquier coloración de $E(K_n)$ con rojo/azul. Fijamos un vértice $v$. Como $v$ tiene $n - 1 = R(s-1,t) + R(s,t-1) - 1$ vecinos, por el **principio del palomar** (ver [palomar](../metodos/palomar)), $v$ tiene al menos $R(s-1,t)$ vecinos unidos por aristas rojas, o al menos $R(s,t-1)$ unidos por aristas azules (si tuviera menos de cada uno, el total de vecinos sería $\leq (R(s-1,t)-1) + (R(s,t-1)-1) = n - 2 < n -1$, contradicción).

*Caso 1:* $v$ tiene $\geq R(s-1,t)$ vecinos rojos. Por definición de $R(s-1,t)$, el subgrafo completo inducido en estos vecinos contiene una clique roja de tamaño $s-1$ o una clique azul de tamaño $t$. En el primer caso, añadiendo $v$ —unido por aristas rojas a todos ellos— se obtiene una clique roja de tamaño $s$. En el segundo, ya tenemos la clique azul buscada.

*Caso 2:* $v$ tiene $\geq R(s,t-1)$ vecinos azules. Simétricamente, se obtiene una clique roja de tamaño $s$ o una clique azul de tamaño $t$.

En cualquier caso, $K_n$ contiene la estructura monocromática deseada, así que $R(s,t) \leq n = R(s-1,t)+R(s,t-1)$. $\blacksquare$

La cota binomial $R(s,t) \leq \binom{s+t-2}{s-1}$ se obtiene resolviendo esta recurrencia —es exactamente la misma recurrencia que la de Pascal— con las condiciones iniciales $R(s,2)=s$, $R(2,t)=t$, lo cual identifica $R(s,t)$ como acotado por una entrada del triángulo de Pascal con desplazamiento.

**(3) $R(3,3) = 6$.** *Cota superior:* la recurrencia da $R(3,3) \leq R(2,3)+R(3,2) = 3+3=6$. *Cota inferior (construcción):* coloreamos $E(K_5)$ formando un $5$-ciclo rojo $C_5$ y su complemento (otro $5$-ciclo, el "pentagrama") azul; ningún triángulo es monocromático —cada triángulo usa al menos una arista de cada color—, así que $R(3,3) > 5$. Combinando, $R(3,3) = 6$. $\blacksquare$

## Ejemplo

**Ejemplo 1 (la formulación clásica de "fiestas").** $R(3,3) = 6$ se enuncia habitualmente así: *en cualquier fiesta con $6$ personas, o bien hay $3$ que se conocen mutuamente por parejas, o bien $3$ que son mutuamente desconocidas — y $6$ es el menor número con esta garantía.* Es uno de los primeros problemas que cualquier estudiante encuentra al asomarse a la teoría de Ramsey, y suele aparecer (con esta formulación o ligeras variantes) en olimpiadas de iniciación.

**Ejemplo 2 (Ramsey multicolor para progresiones — el teorema de Van der Waerden).** Una generalización en una dirección distinta: para todo $k$ y $r$, existe $N$ tal que toda $r$-coloración de $\{1,\ldots,N\}$ contiene una progresión aritmética monocromática de longitud $k$. Aunque su demostración (por inducción doble, "Ramsey-style") es independiente de la teoría de grafos, comparte el mismo *espíritu*: el caos suficientemente grande siempre contiene orden.

## Aplicaciones

### El "tipo Ramsey" como reconocimiento de patrón

Muchos problemas olímpicos de nivel alto son, en esencia, instancias de Ramsey camufladas: piden demostrar que **alguna estructura monocromática, ordenada o repetida es inevitable** una vez que el tamaño supera cierto umbral. Reconocer esta forma —"para $n$ suficientemente grande, siempre existe..."— sugiere de inmediato dos estrategias: (a) un argumento de doble conteo o palomar que *fuerza* la estructura (como en la prueba de la cota recursiva), o (b) si se pide una *cota inferior* (un ejemplo que evita la estructura para $n$ pequeño), construir una coloración o configuración explícita "casi aleatoria" que la rehúya.

**Problema (Erdős–Szekeres, 1935 — el resultado que originó el método).** Toda sucesión de $mn+1$ números reales distintos contiene una subsucesión creciente de longitud $m+1$ o una decreciente de longitud $n+1$.

**Solución (esquema).** A cada término $a_i$ se le asocia el par $(c_i, d_i)$ donde $c_i$ es la longitud de la subsucesión creciente más larga que termina en $a_i$, y $d_i$ la de la decreciente. Si $c_i \leq m$ y $d_i \leq n$ para todos los $i$, hay a lo sumo $mn$ pares posibles $(c_i,d_i)$ — pero por palomar, con $mn+1$ términos, dos índices $i<j$ comparten par; un análisis directo muestra que esto es imposible (si $a_i < a_j$ entonces $c_j > c_i$, y si $a_i > a_j$ entonces $d_j > d_i$). Contradicción. $\blacksquare$ Este es el mismo resultado citado en [palomar](../metodos/palomar), ahora reconocido como un primo cercano del teorema de Ramsey: ambos afirman que **estructuras suficientemente grandes contienen sub-estructuras ordenadas inevitables**, y ambos se demuestran con la misma maquinaria de doble conteo y casillas bien elegidas.

### El abismo entre existencia y cálculo

La teoría de Ramsey ilustra de forma extrema un fenómeno recurrente en matemáticas: **la demostración de existencia (finitud de $R(s,t)$) es elemental y accesible, pero el cálculo exacto es —incluso para valores pequeños— de una dificultad asombrosa**. $R(5,5)$ se sabe que está entre $43$ y $48$ (a fecha de 2023), y cerrar ese rango se considera un problema de investigación activa, no un ejercicio. Esta brecha —entre "sabemos que existe" y "no sabemos calcularlo"— es un tema recurrente en combinatoria extremal y vale la pena tenerlo presente: en una olimpiada, casi nunca se pide el valor exacto de un número de Ramsey, sino **cotas** (superior, vía argumentos constructivos tipo palomar; inferior, vía construcciones explícitas o el método probabilístico).

## Observación

La demostración del teorema de Ramsey es, esencialmente, **una aplicación iterada y bien organizada del principio del palomar**: nada más sofisticado que "si distribuyo suficientes objetos en pocas cajas, alguna caja recibe muchos" — pero aplicado recursivamente, con una contabilidad cuidadosa, produce uno de los resultados más profundos de la combinatoria. Esta es quizás la lección más importante de toda la teoría: **las herramientas elementales, combinadas con suficiente cuidado y persistencia, alcanzan resultados que a primera vista parecen requerir maquinaria mucho más pesada**. La misma observación se aplica, en sentido inverso, al método probabilístico (cota inferior de Erdős): a veces la *no existencia* de una construcción explícita se demuestra más fácilmente probando que "casi cualquier" construcción aleatoria funciona.

## Problemas relacionados

- **(Clásico)** Probar "a mano" que $R(3,3) \leq 6$ analizando directamente los vecinos de un vértice fijo en $K_6$ (sin invocar la fórmula recursiva general).
- **(Clásico)** Demostrar que $R(3,3,3) \leq 17$ (número de Ramsey con tres colores) generalizando el argumento del palomar a tres clases.
- **(IMO 1964/P4, esquema)** En cada uno de $17$ científicos, cada par se cartea sobre uno de $3$ temas, y cada par discute exactamente un tema. Probar que existen $3$ científicos que se cartean entre sí sobre el mismo tema. *(Es exactamente $R(3,3,3) \leq 17$.)*
- **(Clásico, Erdős–Szekeres geométrico)** Probar que entre cualesquiera $5$ puntos del plano en posición general (sin tres alineados) hay $4$ que forman un cuadrilátero convexo. *(Conjetura de Happy Ending — un "Ramsey geométrico" con sabor distinto pero técnica de doble conteo similar.)*
- **(Clásico)** Probar que $R(4,4) \geq 18$ exhibiendo una $2$-coloración explícita de $E(K_{17})$ sin cliques monocromáticas de tamaño $4$ (la coloración de Paley, basada en residuos cuadráticos módulo $17$).
