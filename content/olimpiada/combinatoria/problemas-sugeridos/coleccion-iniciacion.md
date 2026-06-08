---
title: "Colección de iniciación: conteo, palomar e invariantes"
preview: "Veinte problemas para entrar en la combinatoria por la puerta grande: contar con cuidado, aplicar el principio del palomar, y reconocer el primer invariante de tu vida."
dificultad: iniciacion
tags: [coleccion, conteo, palomar, invariantes, iniciacion]
prerequisites: [principios-conteo, palomar, invariantes-y-coloracion]
author: "Adrián García Bouzas"
updated: "2026-06-08"
---

Esta colección reúne problemas pensados para quien se asoma por primera vez a la combinatoria olímpica — o para quien quiere consolidar los fundamentos antes de abordar técnicas más avanzadas. Ninguno requiere maquinaria sofisticada: todos se resuelven con las ideas de [principios-conteo](../contenidos/principios-conteo), [palomar](../metodos/palomar) e [invariantes-y-coloracion](../metodos/invariantes-y-coloracion), aplicadas con cuidado y, sobre todo, con la actitud correcta — la de preguntarse *qué* se está contando antes de preguntarse *cómo*.

## Problemas

1. ¿De cuántas formas se pueden sentar $5$ personas en una fila de $5$ sillas si dos de ellas insisten en sentarse juntas?
2. Un código de acceso consta de $4$ dígitos (del $0$ al $9$), y no puede tener dos dígitos consecutivos iguales. ¿Cuántos códigos distintos existen?
3. ¿Cuántos números de tres cifras tienen sus dígitos en orden estrictamente creciente?
4. En una caja hay $10$ calcetines rojos y $10$ azules, todos indistinguibles al tacto. ¿Cuál es el menor número de calcetines que hay que sacar, sin mirar, para garantizar tener un par del mismo color?
5. Demostrar que, en cualquier grupo de $13$ personas, hay al menos dos que cumplen años el mismo mes.
6. En un segmento de longitud $1$ se marcan $5$ puntos (incluidos los extremos). Demostrar que hay dos de ellos a distancia menor o igual que $\frac14$.
7. ¿Cuántos subconjuntos de $\{1, 2, \ldots, 10\}$ contienen al menos un número par?
8. Demostrar que entre cualesquiera $7$ enteros distintos, hay dos cuya suma o cuya diferencia es múltiplo de $10$.
9. Un tablero de $5\times 5$ se colorea con dos colores. Demostrar que existe una fila o columna con al menos $3$ casillas del mismo color.
10. ¿De cuántas maneras se pueden repartir $10$ caramelos idénticos entre $4$ niños, de modo que cada uno reciba al menos uno?
11. Demostrar que entre cualesquiera $6$ personas, hay $3$ que se conocen mutuamente o $3$ que son mutuamente desconocidas (caso particular de Ramsey, $R(3,3) = 6$).
12. En una fiesta con $n$ personas, demostrar que siempre hay (al menos) dos personas con el mismo número de conocidos dentro de la fiesta.
13. Una rana salta sobre los enteros, siempre $+3$ o $-2$. Si empieza en $0$, ¿puede llegar exactamente a $100$? Encontrar un invariante que decida la pregunta para llegadas a un entero arbitrario $n$.
14. En un tablero de ajedrez de $8\times 8$, se colocan fichas de dominó cubriendo exactamente $62$ casillas, dejando libres dos casillas del mismo color. Demostrar que las dos casillas libres tienen, de hecho, **distinto** color — contradicción que revela algo sobre el enunciado: replantearlo correctamente y resolverlo. *(Pista: revisar [guiado-tablero-mutilado](../problemas-resueltos/guiado-tablero-mutilado).)*
15. Se tienen $2n$ personas en una fiesta, cada una con un número par de amigos dentro de la fiesta. Demostrar que existen dos personas con el mismo número de amigos.
16. ¿Cuántas diagonales tiene un polígono convexo de $n$ lados? Resolver de dos formas distintas (conteo directo y conteo doble) y verificar que las respuestas coinciden.
17. En una cuadrícula de $n \times n$ se pintan algunas casillas de negro. Demostrar que si se pintan más de $n$ casillas, existen dos casillas negras en la misma fila o dos en la misma columna. *(Reformular como aplicación de palomar.)*
18. Demostrar que cualquier conjunto de $n+1$ números elegidos entre $\{1, 2, \ldots, 2n\}$ contiene dos números tales que uno divide al otro.
19. Sobre una recta se colocan $2024$ fichas, cada una roja o azul. Un movimiento consiste en elegir tres fichas consecutivas con colores RAR o ARA y voltear la del medio. Determinar si, partiendo de cualquier configuración, el proceso debe terminar — buscando una cantidad que decrezca o se mantenga acotada en cada movimiento.
20. ¿Cuántas palabras de longitud $6$, formadas con las letras A, B, C, contienen la letra A exactamente dos veces?

## Pistas

1. Trata al par como un único "bloque": cuenta las disposiciones del bloque junto con las otras tres personas, y no olvides el factor por el orden interno del bloque.
2. Cuenta las elecciones dígito a dígito: el primero tiene $10$ opciones, cada uno de los siguientes tiene $9$ (cualquiera salvo el anterior).
3. Cada terna de dígitos distintos da lugar a exactamente un número con dígitos crecientes — ¿por qué? Esto convierte el conteo en un conteo de subconjuntos.
4. Piensa en los calcetines como "objetos" y los colores como "cajones": ¿cuántos objetos garantizan dos en el mismo cajón?
5. Hay $12$ meses — los "cajones" del principio del palomar — y $13$ personas — los "objetos".
6. Divide el segmento $[0,1]$ en $4$ subintervalos de longitud $\frac14$ cada uno, y aplica palomar a los $5$ puntos.
7. Es más fácil contar el complemento: subconjuntos que **no** contienen ningún número par (es decir, subconjuntos del conjunto de impares).
8. Clasifica cada entero según su resto módulo $10$ (los "cajones"); analiza con cuidado los restos $0$ y $5$, que son sus propios opuestos.
9. Aplica palomar dos veces: primero a las casillas de cada fila (¿cuántas del mismo color como mínimo?), luego a las filas mismas.
10. Usa el truco de "estrellas y barras" tras retirar primero un caramelo para cada niño (garantizando el mínimo de uno).
11. Fija una persona; por palomar, tiene al menos $3$ conocidos o al menos $3$ desconocidos entre las otras $5$. Analiza ambos casos por separado.
12. El número de conocidos de cada persona está entre $0$ y $n-1$ — pero $0$ y $n-1$ no pueden coexistir (¿por qué?), así que en realidad solo hay $n-1$ valores posibles para $n$ personas.
13. Busca un invariante módulo algún entero pequeño: ¿qué le ocurre a la posición de la rana módulo $5$ en cada salto?
14. El enunciado, tal como está escrito, describe una situación imposible — la verdadera pregunta (la del problema clásico) es sobre casillas de **distinto** color removidas; replantear y resolver esa versión.
15. Considera los posibles números de amigos: ¿cuántos valores pares hay en $\{0, 1, \ldots, 2n-1\}$, y por qué $0$ y $2n-1$ no pueden coexistir?
16. Conteo directo: elige $2$ vértices y resta los lados. Conteo doble: cuenta pares (vértice, diagonal que parte de él).
17. Si cada fila y cada columna tuviera a lo sumo una casilla negra, ¿cuál sería el máximo número de casillas negras posibles?
18. Escribe cada número como $2^k \cdot m$ con $m$ impar; hay solo $n$ valores impares posibles en $\{1,\ldots,2n\}$ — son los "cajones".
19. Busca una cantidad que cambie monótonamente (por ejemplo, relacionada con el número de "fronteras" entre bloques de colores iguales) y que esté acotada — esto fuerza la terminación.
20. Elige primero las posiciones de las dos letras A (un conteo combinatorio), y luego rellena las posiciones restantes con B o C libremente.
