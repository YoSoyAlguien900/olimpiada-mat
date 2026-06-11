---
title: "Colección regional-nacional: grafos, conteo doble y argumentos extremales"
preview: "Dieciocho problemas reales (OMG, OME Fase Local y OME Nacional) que entrenan la trinidad central de la combinatoria de nivel medio: pensar en grafos, contar de dos maneras, y elegir el objeto extremo correcto."
dificultad: regional
tags: [coleccion, grafos, conteo-doble, extremal, recurrencias]
prerequisites: [grafos-fundamentos, conteo-doble, argumento-extremal-combinatorio, recurrencias-combinatorias]
author: "Adrián García Bouzas"
updated: "2026-06-11"
---

Esta colección, igual que la de iniciación, está formada íntegramente por problemas reales de la Olimpiada Matemática de Galicia (OMG), la Fase Local de la OME y la Fase Nacional — pero da un paso más: apunta a quien ya domina los fundamentos del conteo y el principio del palomar, y está listo para las tres herramientas que dominan la combinatoria de nivel regional y nacional: el lenguaje de los **grafos** (ver [grafos-fundamentos](../contenidos/grafos-fundamentos)), la técnica de [conteo-doble](../metodos/conteo-doble), y el [argumento-extremal-combinatorio](../metodos/argumento-extremal-combinatorio). Varios problemas requieren además plantear y resolver una recurrencia (ver [recurrencias-combinatorias](../contenidos/recurrencias-combinatorias)). La gran mayoría ceden ante alguna combinación de estas ideas — reconocer cuál (o cuáles) aplicar es, en sí mismo, la habilidad que esta colección busca entrenar.

---

**1. (OMG 2021/P1)** En un torneo de ajedrez participan ocho jugadores durante siete días. Cada día se disputan cuatro partidas en las que participan todos los jugadores, y al terminar el torneo todos se enfrentaron contra todos exactamente una vez. Demuestra que al terminar el quinto día del torneo existe un conjunto de al menos cuatro jugadores que ya jugaron entre ellos todas las partidas.

---

**2. (Local XLIV OME 2008, problema 5)** Un club tiene $25$ miembros. Cada comité está formado por $5$ miembros. Dos comités cualesquiera tienen como mucho un miembro en común. Demuestra que el número de comités no puede ser superior a $30$.

---

**3. (Local XLVIII OME 2012, problema C2)** Tenemos una colección de esferas iguales que apilamos formando un tetraedro cuyas aristas tienen todas $n$ esferas (es decir, un apilamiento piramidal triangular de $n$ pisos). Calcula, en función de $n$, el número total de puntos de tangencia (contactos) entre las esferas del montón.

---

**4. (OMG 2024/P5)** En una fiesta hay $100$ personas. Cada par de personas, o bien son amigas, o bien son enemigas (una y solo una de las dos cosas). Se cumple la siguiente propiedad: si $A$ y $B$ son enemigas y $B$ y $C$ son enemigas, entonces $A$ y $C$ son amigas. Demuestra que hay dos personas $X$ e $Y$ que son amigas y que tienen exactamente el mismo número de enemigos.

---

**5. (Local LI OME 2015, 1ª sesión)** Sea $n \geq 2$ un entero positivo. Tenemos $2n$ bolas, en cada una de las cuales hay escrito un número entero. Se sabe que, para cualquier forma de agrupar las $2n$ bolas en $n$ parejas, siempre hay dos parejas con la misma suma. Demuestra que hay cuatro bolas con el mismo número.

---

**6. (Local XLVI OME 2010, problema 4)** Tenemos un tablero con $16$ casillas dispuestas en $4$ filas y $4$ columnas. (a) Demuestra que se pueden colocar $7$ fichas, nunca dos en la misma casilla, de forma que al eliminar dos filas y dos columnas cualesquiera, siempre quede alguna ficha sin eliminar. (b) Demuestra que si se colocan $6$ fichas, nunca dos en la misma casilla, siempre se pueden eliminar dos filas y dos columnas de forma que todas las fichas queden eliminadas.

---

**7. (Local XLV OME 2009, sábado por la mañana)** Los puntos de una retícula $m \times n$ se colorean de blanco o negro. Se dice que la retícula está equilibrada si, para cualquier punto $P$ de ella, la fila y la columna que pasan por $P$ tienen ambas el mismo número de puntos del color de $P$. Determina todos los pares de enteros positivos $(m,n)$ para los que existe una retícula equilibrada.

---

**8. (Local LVI OME 2020, sábado por la mañana)** Ana y Bernardo juegan al siguiente juego. Se empieza con una bolsa que contiene $n \geq 1$ piedras. En turnos sucesivos, empezando por Ana, cada jugador puede hacer los siguientes movimientos: si el número de piedras de la bolsa es par, el jugador puede coger una sola piedra o la mitad de las piedras; si el número de piedras es impar, tiene que coger una sola piedra. Gana el jugador que coge la última piedra. Determina para qué valores de $n$ Ana tiene una estrategia ganadora.

---

**9. (Local L OME 2014, sesión 4)** Consideramos un número primo $p$. Queremos diseñar un torneo de $p$-parchís sujeto a las siguientes reglas: en el torneo participan $p^2$ jugadores; en cada partida juegan $p$ jugadores; el torneo se divide en rondas, las rondas se dividen en partidas, y cada jugador juega una partida (o ninguna) en cada ronda; al final del torneo, cada jugador se ha enfrentado exactamente una vez con cada uno de los demás. Determina si es posible diseñar un torneo así y, en caso afirmativo, halla el mínimo número de rondas que puede tener el torneo.

---

**10. (OME Nacional 2009/P3)** Se pintan de rojo algunas de las aristas de un poliedro regular. Se dice que una coloración de este tipo es buena si, para cada vértice del poliedro, existe una arista que concurre en dicho vértice y no está pintada de rojo. Por otra parte, se dice que una coloración es completamente buena si, además de ser buena, ninguna cara del poliedro tiene todas sus aristas pintadas de rojo. ¿Para qué poliedros regulares es igual el número máximo de aristas que se pueden pintar en una coloración buena y en una completamente buena? Justifica la respuesta.

---

**11. (OME Nacional 2015/P4)** Todas las caras de un poliedro son triángulos. A cada uno de los vértices de este poliedro se le asigna, de forma independiente, uno de entre tres colores: verde, blanco o negro. Decimos que una cara es extremeña si sus tres vértices son de tres colores distintos: uno verde, uno blanco y uno negro. ¿Es cierto que, independientemente de cómo coloreemos los vértices, el número de caras extremeñas de este poliedro es siempre par?

---

**12. (OME Nacional 2019/P1)** Un conjunto de números enteros $T$ es orensano si existen enteros $a<b<c$ tales que $a$ y $c$ pertenecen a $T$ y $b$ no pertenece a $T$. Halla el número de subconjuntos $T$ de $\{1,2,\ldots,2019\}$ que son orensanos.

---

**13. (OME Nacional 2016/P5)** De entre todas las permutaciones $(a_1,a_2,\ldots,a_n)$ del conjunto $\{1,2,\ldots,n\}$ ($n \geq 1$ entero), se consideran las que cumplen que $2(a_1+a_2+\cdots+a_m)$ es divisible por $m$, para cada $m=1,2,\ldots,n$. Calcula el número total de estas permutaciones.

---

**14. (OME Nacional 2018/P2)** Se colocan $2n+1$ fichas, blancas y negras, en una fila ($n \geq 1$). Se dice que una ficha está equilibrada si el número de fichas blancas a su izquierda más el número de fichas negras a su derecha es igual a $n$. Determina, razonadamente, si el número de fichas equilibradas es siempre par o siempre impar.

---

**15. (OMG 2017/P5)** Se colorean los números $1,2,\ldots,n$ con dos colores, azul y rojo. Demuestra que si $n=2017$ existe una coloración tal que la ecuación $8(x+y)=z$ no tiene soluciones monocromáticas (es decir, no existen $x,y,z$ del mismo color con $8(x+y)=z$). Determina el menor $n$ para el que ya nunca es posible colorear los números de forma que no haya soluciones monocromáticas.

---

**16. (OME Nacional 2022/P5)** En un grupo de $2022$ estudiantes, algunos son amigos entre sí, y la amistad es siempre recíproca. Se sabe que cualquier subconjunto de esos estudiantes tiene la siguiente propiedad: siempre existe un estudiante del subconjunto que es amigo de, a lo sumo, $100$ estudiantes del mismo subconjunto. (a) Determina el menor entero positivo $N$ que asegura que es posible dividir a los estudiantes en $N$ grupos (no necesariamente del mismo tamaño), de manera que dos estudiantes del mismo grupo nunca sean amigos entre sí. (b) Numerando a los estudiantes del $1$ al $2022$, sea $c_i$ el número de amigos del estudiante $i$. Determina el máximo valor que puede tomar la suma $c_1+c_2+\cdots+c_{2022}$.

---

**17. (OME Nacional 2023/P5)** Tenemos una fila de $203$ casillas. Inicialmente la casilla más a la izquierda contiene $203$ fichas y las demás están vacías. En cada movimiento se puede hacer una de estas dos operaciones: tomar una ficha y desplazarla a una casilla adyacente (a izquierda o a derecha), o tomar exactamente $20$ fichas de una misma casilla y desplazarlas todas juntas a una casilla adyacente (todas a la izquierda o todas a la derecha). Tras $2023$ movimientos, cada una de las $203$ casillas contiene exactamente una ficha. Demuestra que alguna ficha se ha desplazado hacia la izquierda al menos nueve veces.

---

**18. (OME Nacional 2025/P5, apartado a)** Sea $S$ un conjunto finito de casillas de una cuadrícula. En cada casilla de $S$ se coloca un saltamontes, que mira hacia arriba, abajo, izquierda o derecha. Una disposición de saltamontes (es decir, una elección de dirección para cada uno) se llama asturiana si, cuando cada saltamontes avanza una casilla en la dirección en la que mira, cada casilla de $S$ vuelve a contener exactamente un saltamontes. Demuestra que, para cualquier conjunto $S$, el número de disposiciones asturianas es un cuadrado perfecto.

---

## Pistas

- **Problema 1:** modela el torneo como $K_8$ ($28$ aristas = partidas), donde cada día es un emparejamiento perfecto ($4$ aristas). Tras $5$ días se han jugado $20$ partidas; las $8$ restantes (días $6$ y $7$) forman un grafo $2$-regular en $8$ vértices, que solo puede ser un único ciclo $C_8$ o dos ciclos $C_4$ disjuntos (¿por qué no puede tener ciclos de longitud $2$ ni impares?). En cualquiera de los dos casos, encuentra $4$ vértices tales que los $\binom{4}{2}=6$ pares entre ellos NO sean aristas de ese grafo $2$-regular: esos $4$ jugadores ya han jugado entre sí todas las partidas.

- **Problema 2:** supón que hay $31$ comités y cuenta los pares (miembro, comité al que pertenece): hay $31\times5=155$ de estos pares repartidos entre $25$ miembros, así que por el principio del palomar algún miembro pertenece a al menos $7$ comités. Mira esos $7$ comités: entre ellos hay $7\times4=28$ "asientos" para los otros $24$ miembros, y vuelve a aplicar el palomar para encontrar dos comités (de esos $7$) que comparten un segundo miembro además del original.

- **Problema 3:** empieza por el caso plano: si $A_n$ es el número de contactos en un piso triangular de $n$ filas de esferas, comprueba que $A_n=A_{n-1}+3(n-1)$. Para el tetraedro completo, al añadir el piso $n$-ésimo (con $A_n$ contactos internos) se generan además los contactos entre ese piso y el piso $n-1$, que son $3\binom{n}{2}$. Plantea y resuelve la recurrencia resultante para $C_n$ en función de $C_{n-1}$, y comprueba que la solución es $C_n=n^3-n$.

- **Problema 4:** traduce la hipótesis al lenguaje de grafos: si $H$ es el grafo cuyas aristas son los pares de enemigos, la condición dice exactamente que $H$ no tiene triángulos (ningún vértice tiene dos vecinos en $H$ que sean a su vez vecinos entre sí). Recuerda el hecho clásico de que en cualquier grafo con $n\geq2$ vértices existen dos vértices del mismo grado (los $n$ grados posibles van de $0$ a $n-1$, pero $0$ y $n-1$ no pueden coexistir). Si esos dos vértices de igual grado en $H$ no son adyacentes, ya tienes la pareja $X,Y$; si lo son, usa que $H$ es libre de triángulos para acotar sus grados y reduce el problema a un conjunto más pequeño de personas.

- **Problema 5:** considera la agrupación extremal: ordena los valores de las bolas de forma no creciente $a_1\geq a_2\geq\cdots\geq a_{2n}$ y forma las parejas consecutivas $(a_1,a_2),(a_3,a_4),\ldots$. Sus sumas $s_1\geq s_2\geq\cdots\geq s_n$ quedan automáticamente ordenadas, así que si dos de ellas coinciden (como garantiza la hipótesis aplicada a esta pareja particular), deben ser **consecutivas**: $s_k=s_{k+1}$, es decir $a_{2k-1}+a_{2k}=a_{2k+1}+a_{2k+2}$ con $a_{2k-1}\geq a_{2k}\geq a_{2k+1}\geq a_{2k+2}$. ¿Qué fuerza esto sobre los cuatro valores?

- **Problema 6:** para (b), aplica un argumento extremal e iterativo: con $6$ fichas repartidas en $4$ columnas, por el palomar alguna columna contiene al menos $2$ fichas; elimínala. Quedan a lo sumo $4$ fichas en las $3$ columnas restantes, así que de nuevo alguna columna tiene al menos $2$; elimínala también. Las fichas restantes (a lo sumo $2$) se eliminan con dos filas. Para (a), experimenta colocando $7$ fichas de modo que ninguna fila ni columna concentre demasiadas, y comprueba a mano que ningún par de filas junto con un par de columnas cubre las $7$ — exhibir esa configuración basta.

- **Problema 7:** supón que el punto $P$ es negro y que su fila contiene $k$ puntos negros; la condición de equilibrio obliga a que su columna también contenga exactamente $k$ puntos negros. Toma un punto negro cuya fila tenga el número máximo de puntos negros entre todos los puntos negros, y razona de forma extremal sobre cuántas filas y columnas pueden alcanzar ese máximo — esto te llevará a que $m$ y $n$ deben cumplir $n=m$, $n=2m$ o $m=2n$.

- **Problema 8:** analiza primero los casos pequeños $n=1,2,3,4$: con $4$ piedras, el jugador en turno puede coger la mitad ($2$) y dejar al rival exactamente con $2$, ganando dos turnos después. A partir de ahí, comprueba que un jugador que se encuentra con un número par $n>4$ puede coger $1$ piedra (dejando un impar al rival, que está obligado a coger $1$), de modo que dos turnos después vuelve a tener un par menor — itera este proceso hasta llegar a $4$ piedras en tu propio turno.

- **Problema 9:** cada jugador debe enfrentarse a los otros $p^2-1$ jugadores, repartidos en partidas de $p-1$ rivales cada una, lo que da una cota inferior de $p+1$ rondas. Para construir un torneo con exactamente $p+1$ rondas, representa a cada jugador como un par $(a,b)$ con $a,b\in\{0,\ldots,p-1\}$. En la ronda $k$ (para $k=0,\ldots,p-1$), agrupa a los jugadores según el valor de $a+kb \pmod p$; añade una ronda extra agrupando según el valor de $b$. Comprueba, usando que $p$ es primo, que cada par de jugadores coincide en exactamente una de estas $p+1$ rondas — es la construcción de un plano afín de orden $p$.

- **Problema 10:** si en cada vértice concurren $g$ aristas, una coloración buena puede pintar como máximo una fracción $\frac{g-1}{g}$ de las aristas totales (en cada vértice debe quedar al menos una sin pintar). Calcula esta cota para los cinco poliedros regulares y, para cada uno, intenta alcanzarla con una coloración que además sea completamente buena. Para el octaedro y el icosaedro, suma —sobre todas las caras— el número de aristas rojas por cara y deduce, por paridad, que alguna cara debe quedar completamente roja si se alcanza el máximo de la coloración buena.

- **Problema 11:** llama monocroma a una arista cuyos dos extremos tienen el mismo color. Para cada cara, cuenta cuántas de sus tres aristas son monocromas: si la cara es extremeña, ninguna lo es; si no lo es, el número de aristas monocromas en ella es impar ($1$ o $3$). Suma este conteo sobre todas las caras del poliedro: como cada arista pertenece exactamente a dos caras, esta suma total es par. Deduce que el número de caras NO extremeñas es par, y combina esto con el hecho de que el número total de caras de un poliedro triangulado es siempre par (usa $3F=2E$).

- **Problema 12:** cuenta en su lugar los subconjuntos que NO son orensanos: el conjunto vacío, los $2019$ subconjuntos de un solo elemento, y los subconjuntos formados por enteros consecutivos (un "bloque"), que están determinados biunívocamente por su mínimo y su máximo — hay $\binom{2019}{2}$ de estos. Resta estos casos del total $2^{2019}$.

- **Problema 13:** toma $m=n-1$ en la condición: como $a_1+\cdots+a_{n-1}=\frac{n(n+1)}{2}-a_n$, la divisibilidad por $n-1$ se traduce en una congruencia sencilla sobre $a_n$ módulo $n-1$. Combínala con la condición para $m=n-2$ para descartar los valores intermedios y concluir que $a_n\in\{1,n\}$. En cada uno de los dos casos, comprueba que la permutación de las $n-1$ posiciones restantes (tras un reajuste de valores) sigue cumpliendo exactamente las mismas condiciones para $n-1$, lo que da la recurrencia $|P_n|=2|P_{n-1}|$.

- **Problema 14:** para cada posición, define su valoración como (blancas a su izquierda) + (negras a su derecha), y comprueba que intercambiar dos fichas adyacentes cambia el número de fichas equilibradas en $0$ o en $\pm2$ — es decir, no altera su paridad. Esto te permite, sin cambiar la paridad de la respuesta, llevar todas las fichas negras al principio de la fila y todas las blancas al final. En esa configuración, representa la fila como un camino en una retícula y cuenta directamente cuántas fichas son equilibradas.

- **Problema 15:** para la primera parte, busca una coloración periódica (por bloques de tamaño creciente) que evite que $z=8(x+y)$ tenga el mismo color que $x$ e $y$ en el rango $1,\ldots,2017$. Para la segunda, parte de la observación de que tomando $x=y$ se obtiene $z=16x$: si $x$, $16x$ y $256x$ caben en $\{1,\ldots,n\}$, su coloración está muy restringida. Combina esta cadena de razón $16$ con la ecuación general (con $x\neq y$) para acotar cuántos elementos puede tener cada clase de color antes de que el palomar fuerce una solución monocromática.

- **Problema 16:** para (a), construye un orden de eliminación: en cada paso, retira un estudiante con a lo sumo $100$ amigos dentro del subconjunto restante (existe por hipótesis), obteniendo un orden $1,\ldots,2022$. Asigna grupos de atrás hacia adelante: a cada estudiante dale el primer grupo, de entre $101$ disponibles, que no use ninguno de sus amigos ya asignados (con números mayores) — como tiene a lo sumo $100$ de esos amigos, siempre hay un grupo libre. Para ver que $100$ grupos no bastan, busca una configuración con $100$ estudiantes amigos de todos los demás. Para (b), usa la misma estrategia de eliminación: acota cuántas amistades se "eliminan" en cada paso (a lo sumo $100$, o menos cuando quedan pocos estudiantes) y suma estas cotas.

- **Problema 17:** para cada $n=1,\ldots,202$, considera la "frontera" entre la casilla $n$ y la casilla $n+1$: el número neto de fichas que debe cruzarla es exactamente $n$. Si escribes $n=20k+r$ con $0\leq r<20$, calcula el número mínimo de movimientos (individuales o de bloques de $20$) necesarios para lograr ese cruce neto, distinguiendo según convenga compensar con movimientos en sentido contrario. Suma estos mínimos para $n=1,\ldots,202$: si el resultado es exactamente $2023$, cada frontera debe alcanzar su mínimo — analiza qué implica esto para la frontera $n=11$.

- **Problema 18:** colorea las casillas de $S$ como un tablero de ajedrez (blancas y negras): cada saltamontes que parte de una casilla blanca llega a una negra, y viceversa, así que el movimiento se descompone en dos partes independientes. Comprueba que los movimientos de los saltamontes que parten de casillas blancas determinan, de forma biyectiva, una teselación de $S$ por fichas de dominó (cada dominó conecta la casilla de partida con la de llegada); lo mismo ocurre, independientemente, con los que parten de casillas negras. Concluye que (disposiciones asturianas) está en biyección con (pares de teselaciones de $S$ por dominós), y que por tanto su número es (número de teselaciones de $S$)$^2$.
