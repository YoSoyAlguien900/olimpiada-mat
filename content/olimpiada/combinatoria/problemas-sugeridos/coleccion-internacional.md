---
title: "Colección internacional: Ramsey, extremal de conjuntos, conteo y juegos"
preview: "Quince problemas reales de la IMO (Olimpiada Internacional de Matemáticas) en la frontera de la combinatoria olímpica: donde Ramsey, los argumentos extremales sobre conjuntos, el conteo de promedios, la teoría de juegos y los emparejamientos dejan de ser curiosidades y se convierten en herramientas de trabajo cotidianas."
dificultad: internacional
tags: [coleccion, ramsey, extremal-conjuntos, probabilistico, juegos, internacional]
prerequisites: [ramsey, teoria-extremal-conjuntos, metodo-probabilistico, juegos-combinatorios-estrategias, teorema-hall-matchings]
author: "Adrián García Bouzas"
updated: "2026-06-11"
---

Esta colección reúne quince problemas reales de la Olimpiada Internacional de Matemáticas (IMO), el nivel más alto de la combinatoria olímpica preuniversitaria. Cada uno requiere identificar —entre un repertorio de técnicas avanzadas: [ramsey](../contenidos/ramsey), [teoria-extremal-conjuntos](../contenidos/teoria-extremal-conjuntos), el [metodo-probabilistico](../metodos/metodo-probabilistico) (aquí, sobre todo, en su forma de conteo de promedios y dobles conteos), los [juegos-combinatorios-estrategias](../metodos/juegos-combinatorios-estrategias) y los [teorema-hall-matchings](../contenidos/teorema-hall-matchings)— cuál es la herramienta correcta, y luego ejecutarla con precisión. No es una colección para resolver de un tirón: cada problema merece, como mínimo, una sesión completa de reflexión antes de consultar las pistas.

---

**1. (IMO 1972/P1)** Demuestra que, dado cualquier conjunto de diez números distintos de dos cifras (en el sistema decimal), es posible elegir dos subconjuntos disjuntos de dicho conjunto cuyos elementos tengan la misma suma.

---

**2. (IMO 1981/P2)** Sea $1\leq r\leq n$ y considera todos los subconjuntos de $r$ elementos del conjunto $\{1,2,\ldots,n\}$. Cada uno de estos subconjuntos tiene un elemento mínimo. Sea $F(n,r)$ la media aritmética de estos elementos mínimos (promediada sobre los $\binom{n}{r}$ subconjuntos posibles). Demuestra que $F(n,r)=\dfrac{n+1}{r+1}$.

---

**3. (IMO 1987/P1)** Para cada entero $n\geq1$, sea $p_n(k)$ el número de permutaciones del conjunto $\{1,2,\ldots,n\}$ que tienen exactamente $k$ puntos fijos (un punto fijo de una permutación $f$ es un elemento $i$ tal que $f(i)=i$). Demuestra que
$$\sum_{k=0}^{n}k\cdot p_n(k)=n!.$$

---

**4. (IMO 1979/P2)** Se tiene un prisma cuyas caras superior e inferior son los pentágonos $A_1A_2A_3A_4A_5$ y $B_1B_2B_3B_4B_5$. Cada lado de los dos pentágonos, y cada uno de los segmentos $A_iB_j$ para todo $i,j=1,\ldots,5$, se colorea de rojo o de verde. Se sabe que todo triángulo cuyos vértices son vértices del prisma y cuyos tres lados están coloreados tiene sus lados de dos colores distintos (es decir, no existe ningún triángulo monocromático entre los segmentos coloreados). Demuestra que los $10$ lados de las caras superior e inferior son todos del mismo color.

---

**5. (IMO 1992/P3)** Se consideran nueve puntos en el espacio, de modo que no hay cuatro de ellos coplanarios. Cada par de puntos está unido por una arista (es decir, un segmento). Cada arista se colorea de azul, de rojo, o se deja sin colorear. Halla el menor valor de $n$ tal que, siempre que se coloreen exactamente $n$ aristas (de azul o de rojo), el conjunto de aristas coloreadas contiene necesariamente un triángulo cuyos tres lados tienen el mismo color.

---

**6. (IMO 1998/P2)** En una competición hay $a$ concursantes y $b$ jueces, donde $b\geq3$ es un entero impar. Cada juez califica a cada concursante como "apto" o "no apto". Supón que $k$ es un número tal que, para cualesquiera dos jueces, sus calificaciones coinciden en, como mucho, $k$ concursantes. Demuestra que $\dfrac{k}{a}\geq\dfrac{b-1}{2b}$.

---

**7. (IMO 2001/P3)** Veintiuna chicas y veintiún chicos participaron en un concurso de matemáticas. Cada concursante resolvió como máximo seis problemas. Para cada pareja formada por una chica y un chico, hubo al menos un problema que ambos resolvieron. Demuestra que existe un problema que fue resuelto por al menos tres chicas y al menos tres chicos.

---

**8. (IMO 2003/P1)** Sea $S=\{1,2,3,\ldots,10^6\}$. Demuestra que para cualquier subconjunto $A$ de $S$ con $101$ elementos, podemos encontrar $100$ elementos distintos $x_1,x_2,\ldots,x_{100}$ de $S$ tales que los conjuntos $\{a+x_i : a\in A\}$, para $i=1,\ldots,100$, son disjuntos dos a dos.

---

**9. (IMO 1988/P2)** Sea $n$ un entero positivo y sean $A_1,A_2,\ldots,A_{2n+1}$ subconjuntos de un conjunto $B$ tales que: (a) cada $A_i$ tiene exactamente $2n$ elementos; (b) para cualesquiera $i,j$ con $1\leq i<j\leq2n+1$, $A_i\cap A_j$ contiene exactamente un elemento; (c) cada elemento de $B$ pertenece al menos a dos de los conjuntos $A_i$. ¿Para qué valores de $n$ es posible asignar a cada elemento de $B$ uno de los números $0$ o $1$ de manera que cada $A_i$ tenga el número $0$ asignado a exactamente $n$ de sus elementos?

---

**10. (IMO 2021/P1)** Sea $n\geq100$ un entero. Iván escribe los números $n,n+1,\ldots,2n$, cada uno en una tarjeta distinta. A continuación baraja estas $n+1$ tarjetas y las reparte en dos montones. Demuestra que al menos uno de los montones contiene dos tarjetas tales que la suma de sus números es un cuadrado perfecto.

---

**11. (IMO 2012/P3)** El juego del adivino mentiroso es un juego entre dos jugadores $A$ y $B$. Las reglas dependen de dos enteros positivos $k$ y $n$, conocidos por ambos jugadores. Al empezar el juego, $A$ elige enteros $x$ y $N$ con $1\leq x\leq N$. El jugador $A$ mantiene $x$ en secreto, pero comunica $N$ a $B$ con sinceridad. El jugador $B$ intenta entonces obtener información sobre $x$ haciendo preguntas a $A$: cada pregunta consiste en que $B$ especifique un conjunto $S$ de enteros positivos (posiblemente uno ya especificado antes) y pregunte a $A$ si $x$ pertenece a $S$. $B$ puede hacer tantas preguntas como desee. Tras cada pregunta, $A$ debe responder inmediatamente sí o no, y se le permite mentir tantas veces como quiera; la única restricción es que, entre cualesquiera $k+1$ respuestas consecutivas, al menos una debe ser sincera. Después de hacer todas las preguntas que desee, $B$ debe especificar un conjunto $X$ de a lo sumo $n$ enteros positivos. Si $x\in X$, $B$ gana; en caso contrario, pierde. Demuestra que: (1) si $n\geq2k$, $B$ puede asegurar la victoria; (2) para todo $k$ suficientemente grande, existe un entero $n\geq1{,}99k$ tal que $B$ no puede asegurar la victoria.

---

**12. (IMO 2014/P2)** Sea $n\geq2$ un entero. Consideramos un tablero $n\times n$ formado por $n^2$ casillas unitarias. Una configuración de $n$ torres en este tablero es pacífica si cada fila y cada columna contiene exactamente una torre. Halla el mayor entero positivo $k$ tal que, para cualquier configuración pacífica de $n$ torres, existe un cuadrado $k\times k$ que no contiene ninguna torre en ninguna de sus $k^2$ casillas unitarias.

---

**13. (IMO 2017/P5)** Sea $N\geq2$ un entero. Una fila contiene $N(N+1)$ jugadores de fútbol, todos de estaturas distintas. Sir Alex quiere retirar $N(N-1)$ jugadores de esta fila, dejando una nueva fila de $2N$ jugadores que cumpla las siguientes $N$ condiciones: (1) nadie queda entre los dos jugadores más altos; (2) nadie queda entre el tercer y el cuarto jugador más altos; ...; ($N$) nadie queda entre los dos jugadores más bajos. Demuestra que esto siempre es posible.

---

**14. (IMO 2018/P4)** Un sitio es cualquier punto $(x,y)$ del plano tal que $x$ e $y$ son enteros positivos menores o iguales que $20$. Inicialmente, los $400$ sitios están desocupados. Ana y Bruno colocan piedras alternativamente, empezando Ana. En su turno, Ana coloca una piedra roja nueva en un sitio desocupado de modo que la distancia entre dos sitios cualesquiera ocupados por piedras rojas nunca sea igual a $5$. En su turno, Bruno coloca una piedra azul nueva en cualquier sitio desocupado, sin restricciones de distancia. Se detienen tan pronto como un jugador no pueda colocar una piedra. Determina el mayor valor de $K$ tal que Ana puede asegurar colocar al menos $K$ piedras rojas, sin importar cómo juegue Bruno.

---

**15. (IMO 2024/P5)** Turbo, un caracol, juega en un tablero de $2024$ filas y $2023$ columnas. Hay monstruos escondidos en $2022$ de las casillas: se sabe que hay exactamente un monstruo en cada fila excepto la primera y la última, y que cada columna contiene como mucho un monstruo. Turbo no conoce la posición de los monstruos, pero puede hacer varios intentos de ir de la primera fila a la última. En cada intento, Turbo elige una casilla inicial cualquiera de la primera fila y se mueve repetidamente a una casilla adyacente (compartiendo un lado), pudiendo revisitar casillas. Si llega a una casilla con un monstruo, el intento termina y Turbo vuelve a la primera fila para empezar un nuevo intento (recordando, para siempre, qué casillas visitadas tenían monstruo). Si llega a una casilla de la última fila, el intento termina y el juego se acaba. Determina el menor valor de $n$ para el que Turbo tiene una estrategia que garantiza llegar a la última fila en, como mucho, el intento número $n$, sin importar dónde estén los monstruos.

---

## Pistas

- **Problema 1:** cuenta cuántos subconjuntos no vacíos y propios tiene un conjunto de $10$ elementos: hay $2^{10}-2=1022$. Por otro lado, la suma de los elementos de cualquier subconjunto está acotada (todos los números tienen dos cifras, entre $10$ y $99$), así que el número de valores posibles para esa suma es mucho menor que $1022$. Por el principio del palomar, dos subconjuntos distintos $A$ y $B$ tienen la misma suma; elimina los elementos comunes a $A\cap B$ de ambos para obtener dos subconjuntos disjuntos con la misma suma.

- **Problema 2:** a cada subconjunto $S=\{a_1<a_2<\cdots<a_r\}\subseteq\{1,\ldots,n\}$ asóciale su sucesión de "huecos": $g_0=a_1-1$, $g_i=a_{i+1}-a_i-1$ para $1\leq i\leq r-1$, y $g_r=n-a_r$. Comprueba que $g_0+g_1+\cdots+g_r=n-r$ siempre, y que la correspondencia entre subconjuntos $S$ y sucesiones $(g_0,\ldots,g_r)$ de enteros no negativos con esa suma fija es una biyección. Por la simetría de esta biyección frente a permutaciones de las posiciones $0,\ldots,r$, la media de $g_0$ sobre todos los subconjuntos es la misma que la media de cualquier $g_i$, es decir, $\frac{n-r}{r+1}$. Como $\min(S)=a_1=g_0+1$, concluye.

- **Problema 3:** cuenta de dos formas el número de pares $(\sigma,i)$ donde $\sigma$ es una permutación de $\{1,\ldots,n\}$ e $i$ es un punto fijo de $\sigma$. Agrupando por el número de puntos fijos de $\sigma$, este conteo es exactamente $\sum_{k=0}^n k\cdot p_n(k)$. Agrupando por el valor de $i$: para cada $i\in\{1,\ldots,n\}$ fijo, ¿cuántas permutaciones $\sigma$ cumplen $\sigma(i)=i$? Multiplica por las $n$ posibilidades de $i$.

- **Problema 4:** razona por reducción al absurdo: si los lados del pentágono superior no fueran todos del mismo color, existirían dos lados consecutivos $A_iA_{i+1}$ y $A_{i+1}A_{i+2}$ de colores distintos. Estudia cómo deben colorearse los cinco segmentos $A_iB_j$: usando que ningún triángulo $A_iA_{i\pm1}B_j$ puede ser monocromático, deduce que la mayoría de esos segmentos deben tener un color fijo. Luego observa que si dos vértices $B_j,B_{j+1}$ adyacentes están unidos a $A_i$ con el mismo color, el triángulo $A_iB_jB_{j+1}$ obliga al lado $B_jB_{j+1}$ a tener el color contrario; combina estas restricciones para llegar a una contradicción, y concluye que ambos pentágonos son monocromáticos y del mismo color.

- **Problema 5:** para la cota inferior, busca una coloración de $32$ aristas sin triángulos monocromáticos: parte de dos "cuadrados" de cuatro vértices cada uno (ocho de los nueve puntos) más un noveno punto $X$, deja sin colorear las diagonales de cada cuadrado, colorea los lados de un cuadrado de rojo y los del otro de azul, une $X$ con un cuadrado en azul y con el otro en rojo, y colorea las aristas entre los dos cuadrados según la paridad de los índices de sus vértices. Para ver que $33$ aristas siempre fuerzan un triángulo monocromático, cuenta —mediante un doble conteo sobre los grados de cada vértice (como máximo $8$ aristas coloreadas por vértice)— el número de "ángulos bicolores" que cada triángulo no monocromático puede aportar, y comprueba que $33$ aristas coloreadas no dejan margen suficiente para evitarlos todos.

- **Problema 6:** cuenta de dos formas el número de tríos (juez 1, juez 2, concursante), con juez $1<$ juez $2$, tales que ambos jueces dieron la misma calificación a ese concursante. Por un lado, hay $\binom{b}{2}$ parejas de jueces y cada una coincide en a lo sumo $k$ concursantes, así que el total es a lo sumo $k\binom{b}{2}$. Por otro lado, fija un concursante: si $p$ jueces lo califican "apto" y $b-p$ "no apto", el número de parejas de jueces que coinciden en él es $\binom{p}{2}+\binom{b-p}{2}$. Como $b$ es impar, $p\neq b-p$, así que esta cantidad se minimiza cuando $\{p,b-p\}=\{\frac{b-1}{2},\frac{b+1}{2}\}$; escribe $b=2m+1$, calcula ese mínimo y suma sobre los $a$ concursantes para obtener una cota inferior del total. Combina ambas cotas.

- **Problema 7:** razona por conteo de pares (chica, chico): hay $21\times21=441$ parejas en total, y cada una debe compartir al menos un problema resuelto por ambos. Para cada chico, como resuelve a lo más $6$ problemas y hay $21$ chicas, cuantifica cuántas parejas (chica, chico) quedan "cubiertas" únicamente por problemas resueltos por menos de $3$ chicas, y haz lo simétrico para los problemas resueltos por menos de $3$ chicos. Suma ambas cotas y compara el resultado con el total de $441$ parejas: si la suma de las parejas "malas" es menor que $441$, debe quedar al menos una pareja cubierta por un problema resuelto por al menos $3$ chicas y al menos $3$ chicos.

- **Problema 8:** considera el conjunto de diferencias $D=\{a-a' : a,a'\in A,\ a\neq a'\}$; como $|A|=101$, hay como mucho $\binom{101}{2}=5050$ diferencias positivas, así que $|D\cup(-D)|\leq2\times5050=10100$. Observa que los conjuntos $A+x_i$ y $A+x_j$ son disjuntos si y solo si $x_i-x_j\notin D$. Elige los $x_i$ uno a uno, de forma greedy: al elegir $x_i$, evita los valores $x_j+d$ para todo $j<i$ y todo $d\in D\cup(-D)$ — esto descarta como mucho $(i-1)\times10100$ valores. Comprueba que para $i\leq100$ se cumple $(i-1)\times10100<10^6$, así que siempre queda algún valor disponible en $S$.

- **Problema 9:** empieza analizando la estructura combinatoria que imponen las condiciones (a), (b) y (c): comprueba, mediante un doble conteo sobre los tamaños, que cada elemento de $B$ pertenece a exactamente $2$ de los conjuntos $A_i$. Esto te permite representar cada elemento de $B$ como una "arista" entre dos índices $i,j\in\{1,\ldots,2n+1\}$, convirtiendo el problema en uno de coloración de aristas de un grafo (cada $A_i$ es un vértice de grado $2n$, y necesitas que cada vértice tenga exactamente $n$ aristas de cada color). Observa qué restricción de paridad sobre $n$ impone repartir exactamente la mitad de las $2n$ aristas de cada vértice en cada color, y para los valores de $n$ que la cumplen, construye explícitamente la asignación usando la simetría del grafo.

- **Problema 10:** la idea central es encontrar tres números $a,b,c$ dentro del rango $[n,2n]$ tales que las tres sumas por pares $a+b$, $b+c$ y $a+c$ sean simultáneamente cuadrados perfectos. Prueba con tres cuadrados consecutivos de la forma $(2k-1)^2$, $(2k)^2$, $(2k+1)^2$ y resuelve el sistema resultante para $a,b,c$ en función de $k$; comprueba que para $n\geq100$ existe un valor de $k$ que hace que $a,b,c$ caigan dentro de $[n,2n]$. Una vez encontrado ese trío, el argumento final es puro principio del palomar: como hay solo dos montones y tres números, dos de ellos deben caer en el mismo montón, y su suma es uno de los cuadrados perfectos construidos.

- **Problema 11:** para (1), asocia a cada valor posible $m\in\{1,\ldots,N\}$ un contador que registra cuántas respuestas consecutivas recientes han sido incoherentes con "$x=m$"; la condición de que entre $k+1$ respuestas consecutivas al menos una sea sincera implica que, si ese contador llega a $k+1$, entonces $m$ puede descartarse para siempre como candidato. Diseña una secuencia de preguntas (por ejemplo, dividiendo repetidamente el conjunto de candidatos vivos en dos mitades aproximadamente iguales) que garantice que, tras suficientes rondas, sobrevivan a lo sumo $2k$ candidatos — esos son los que $B$ incluye en $X$. Para (2), construye un escenario para $A$ en el que, eligiendo $N$ suficientemente grande y respondiendo de forma adversarial (manteniendo "empatados" los contadores de muchos candidatos a la vez), pueda evitar que el número de candidatos vivos baje de aproximadamente $1{,}99k$.

- **Problema 12:** para ver que siempre existe un cuadrado $k\times k$ vacío de torres, divide el tablero en bloques de tamaño aproximadamente $k\times k$ y compara el número de bloques con las $n$ torres mediante el principio del palomar: si el número de bloques supera a $n$, alguno debe quedar libre. Ajustando el tamaño de los bloques en función de $n$, comprueba que el umbral exacto es $k=\lfloor\sqrt{n-1}\rfloor$. Para ver que $k+1$ no siempre funciona, construye una configuración pacífica explícita —por ejemplo, situando las torres siguiendo una progresión modular cuidadosamente elegida— en la que todo cuadrado de lado $k+1$ contenga alguna torre.

- **Problema 13:** procede por inducción fuerte sobre $N$. Interpreta las $N$ condiciones como un emparejamiento: cada una de las $N$ parejas de rangos consecutivos (1º-2º más alto, 3º-4º más alto, etc.) debe terminar ocupando dos posiciones adyacentes en la fila final. Busca, en la fila original de $N(N+1)$ jugadores, una pareja de jugadores adyacentes en posición cuyas alturas ocupen rangos extremos dentro del conjunto total; resérvala para que desempeñe el papel de "pareja extremal" en la fila final, descarta un número adecuado de jugadores a su alrededor, y aplica la hipótesis de inducción al conjunto restante de $(N-1)N$ jugadores.

- **Problema 14:** observa que dos sitios están a distancia exactamente $5$ si y solo si la diferencia de sus coordenadas es $(\pm3,\pm4)$, $(\pm4,\pm3)$, $(\pm5,0)$ o $(0,\pm5)$ (las únicas formas de escribir $25$ como suma de dos cuadrados). Para la cota inferior (Ana garantiza $K$), busca una forma de agrupar los $400$ sitios en grupos pequeños de manera que, jugando "localmente" un grupo a la vez, Ana siempre tenga un sitio disponible dentro de su grupo sin violar la restricción de distancia $5$. Para la cota superior (Bruno impide más), piensa en cómo Bruno puede usar sus piedras azules para neutralizar, de forma simétrica, cada grupo que Ana intente usar.

- **Problema 15:** piensa en lo que Turbo puede deducir de un intento fallido: si en un intento llega a una casilla $(i,j)$ con monstruo, Turbo aprende que la fila $i$ tiene su monstruo en la columna $j$, y por tanto (como cada columna tiene a lo sumo un monstruo) que ninguna otra fila tiene su monstruo en la columna $j$. Diseña una estrategia para los primeros intentos que "sondee" columnas distintas en filas sucesivas, de modo que la información acumulada sobre en qué columnas NO puede estar el monstruo de cada fila crezca rápidamente; cuenta cuántos intentos fallidos como máximo puede permitirse Turbo antes de que, combinando toda la información obtenida, quede garantizada una columna libre de monstruos para cada fila restante.
