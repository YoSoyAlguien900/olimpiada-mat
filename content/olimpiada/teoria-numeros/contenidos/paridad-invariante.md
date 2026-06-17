---
title: "Paridad: el invariante más simple y más poderoso"
preview: "El argumento de paridad consiste en observar que cierta cantidad es par o impar, y que las operaciones permitidas no cambian esa condición. Detrás de su aparente trivialidad se esconde uno de los métodos más versátiles de la olimpiada."
dificultad: iniciacion
tags: [paridad, invariantes, modular, coloracion, combinatoria]
prerequisites: [divisibilidad-basica]
author: "Adrián García Bouzas"
updated: "2026-06-03"
---

La paridad es el primer invariante que aprende un matemático. Un entero es par o impar. Eso es todo. Pero este hecho —tan simple que parece trivial— resuelve problemas que de otro modo parecerían completamente intratables.

La idea fundamental: si una operación conserva la paridad de cierta magnitud, entonces la paridad de la configuración inicial y la final debe coincidir. Si no coincide, la transformación es imposible. Este esquema —invariante, operación, conclusión— aparece decenas de veces al año en olimpiadas de todo nivel.

## Definición

Un entero $n$ es **par** si $2 \mid n$, es decir, si existe $k \in \mathbb Z$ con $n = 2k$. Es **impar** si $2 \nmid n$, es decir, si existe $k \in \mathbb Z$ con $n = 2k + 1$.

La paridad de $n$ es su clase módulo $2$: $n \bmod 2 \in \{0, 1\}$.

## Teorema

**(Reglas de paridad)** Sean $a, b$ enteros. Entonces:

| Operación | Par $+$ Par | Impar $+$ Impar | Par $+$ Impar |
|-----------|-------------|-----------------|---------------|
| $a + b$ | Par | Par | Impar |
| $a - b$ | Par | Par | Impar |
| $ab$ | Par | Impar | Par |

En general: $a + b$ es par $\iff$ $a$ y $b$ tienen la misma paridad.

La suma de $n$ números impares es par si $n$ es par, e impar si $n$ es impar.

## Demostración

Si $a = 2j$ y $b = 2k$, entonces $a + b = 2(j + k)$ (par) y $ab = 4jk$ (par). Si $a = 2j + 1$ y $b = 2k + 1$, entonces $a + b = 2(j + k + 1)$ (par) y $ab = 4jk + 2j + 2k + 1 = 2(2jk + j + k) + 1$ (impar). Las demás combinaciones son análogas. $\blacksquare$

## Corolario

**(Cuadrados y paridades)**

**(i)** Si $n$ es par, $n^2 \equiv 0 \pmod 4$. Si $n$ es impar, $n^2 \equiv 1 \pmod 4$.

En particular, **$n^2 \not\equiv 2, 3 \pmod 4$ para ningún entero $n$**, y $n^2 \equiv 0$ o $1 \pmod 4$.

**(ii)** Si $n$ es impar, $n^2 \equiv 1 \pmod 8$.

*Demostración de (i).* Si $n = 2k$: $n^2 = 4k^2 \equiv 0 \pmod 4$. Si $n = 2k+1$: $n^2 = 4k^2 + 4k + 1 = 4k(k+1) + 1 \equiv 1 \pmod 4$.

*Demostración de (ii).* Si $n = 2k+1$: $n^2 = 4k(k+1) + 1$. Como $k(k+1)$ es el producto de dos enteros consecutivos, es par, así $k(k+1) = 2m$ y $n^2 = 8m + 1 \equiv 1 \pmod 8$. $\blacksquare$

Este corolario es inmediatamente útil: la ecuación $x^2 + y^2 = n$ no tiene solución si $n \equiv 3 \pmod 4$, porque el lado izquierdo solo puede ser $\equiv 0, 1, 2 \pmod 4$.

## Ejemplo

Los ejemplos siguen un orden creciente de sofisticación: de la imposibilidad directa, al invariante en un proceso, a la coloración y, finalmente, al salto a módulos mayores.

### Nivel 1: imposibilidad directa

**Ejemplo 1.** Demostrar que la suma de tres números impares cualesquiera es impar.

*La idea.* Para la paridad **solo importa la clase módulo $2$**: cada impar es $\equiv 1$, así que sumar tres impares es como sumar $1 + 1 + 1$.

*Solución.* Tres impares suman lo mismo, módulo $2$, que $1 + 1 + 1 = 3 \equiv 1$. Luego la suma es impar. $\square$

**Ejemplo 2.** ¿Tiene $x^2 + y^2 = 2023$ solución en enteros?

*La idea.* Cuando aparecen cuadrados y se pregunta por (in)existencia, el primer reflejo es mirar **los cuadrados módulo $4$**: solo valen $0$ (si la base es par) o $1$ (si es impar). Eso restringe muchísimo qué números son suma de dos cuadrados.

*Solución.* Como todo cuadrado es $\equiv 0$ o $1 \pmod 4$, la suma $x^2 + y^2$ solo puede ser $\equiv 0, 1$ o $2 \pmod 4$. Pero

$$
2023 = 4 \cdot 505 + 3 \equiv 3 \pmod 4.
$$

El valor $3$ es inalcanzable, así que **no hay solución**. $\square$

*La moraleja.* Ningún número $\equiv 3 \pmod 4$ es suma de dos cuadrados. Es la obstrucción módulo $4$ más usada de toda la olimpiada.

**Ejemplo 3.** Demostrar que $n^2 + n + 1$ es impar para todo entero $n$.

*La idea.* No hace falta distinguir casos: $n^2 + n = n(n+1)$ es producto de dos enteros **consecutivos**, y de dos consecutivos uno siempre es par.

*Solución.* $n(n+1)$ es par (uno de los dos factores lo es), así que $n^2 + n + 1 = (\text{par}) + 1$ es impar. $\square$

### Nivel 2: invariante en un proceso

**Ejemplo 4.** En una pizarra están escritos $1, 2, 3, \ldots, 100$. En cada paso se borran dos números $a, b$ y se escribe $|a - b|$. Tras $99$ pasos queda un solo número. ¿Puede ser $1$?

*La idea.* En un proceso, hay que buscar **qué se conserva**. La suma total cambia, pero quizá su *paridad* no: conviene medir en cuánto cambia la suma en cada paso.

*Solución.* Al borrar $a, b$ y escribir $|a - b|$, la suma $S$ varía en

$$
|a - b| - (a + b).
$$

Si $a \geq b$, esto es $(a - b) - (a + b) = -2b$; si $b > a$, es $-2a$. **En ambos casos el cambio es par**, así que la **paridad de $S$ se conserva**.

La suma inicial es $S_0 = 1 + 2 + \cdots + 100 = \dfrac{100 \cdot 101}{2} = 5050$, que es **par**. Como la paridad no cambia, el número final también es par. Y $1$ es impar, así que **no puede quedar $1$**. $\square$

*La moraleja.* Cuando una magnitud cambia pero su **paridad** se mantiene, esa paridad es el invariante que separa lo posible de lo imposible.

**Ejemplo 5.** Hay $2n + 1$ vasos en una fila, todos boca arriba. En cada paso se voltean **exactamente dos** vasos (cualesquiera). ¿Se pueden poner todos boca abajo?

*La idea.* El número de vasos boca arriba es lo natural que mirar. Al voltear dos vasos, ese número cambia poco — y siempre de forma **par**.

*Solución.* Sea $f$ el número de vasos boca arriba. Al voltear dos vasos hay tres casos: ambos estaban arriba ($f$ baja en $2$), ambos abajo ($f$ sube en $2$) o uno de cada ($f$ no cambia). En todos, $f$ cambia en una cantidad **par**, luego su paridad se conserva.

Inicialmente $f = 2n + 1$ es **impar**; el objetivo $f = 0$ es **par**. Como la paridad de $f$ no puede cambiar, **es imposible**. $\square$

### Nivel 3: coloración como paridad de la posición

**Ejemplo 6.** (Tablero mutilado) De un tablero de ajedrez $8 \times 8$ se eliminan dos **esquinas opuestas**. ¿Se pueden cubrir las $62$ casillas restantes con $31$ fichas de dominó $1 \times 2$?

*La idea.* Una coloración es una paridad disfrazada: el color de $(i, j)$ es $i + j \bmod 2$. La clave es ver cómo interactúa la **pieza** con esa coloración: un dominó siempre tapa una casilla de cada color.

*Solución.* Coloreamos como un tablero de ajedrez: $(i, j)$ es negra si $i + j$ es par, blanca si es impar. Cada dominó cubre exactamente **una negra y una blanca**, así que $31$ dominós cubrirían $31$ de cada color.

Las dos esquinas opuestas tienen el **mismo** color (sus coordenadas suman ambas par, p. ej. $(1,1)$ y $(8,8)$): las dos son negras. Al quitarlas quedan $30$ negras y $32$ blancas. Pero cualquier recubrimiento por dominós exige el mismo número de cada color. Como $30 \neq 32$, **es imposible**. $\square$

*La moraleja.* Si una pieza siempre respeta cierto reparto de colores, el **desequilibrio de colores** de la región es una obstrucción infranqueable.

### Nivel 4: subir a módulo 8

**Ejemplo 7.** Demostrar que $x^2 + y^2 + z^2 = 7$ no tiene solución en enteros.

*La idea.* Módulo $4$ aquí **no basta** (tres impares dan $1+1+1 = 3 \equiv 7 \pmod 4$, no se descarta). Cuando módulo $4$ se queda corto, el siguiente paso natural es **módulo $8$**, donde los cuadrados son aún más rígidos.

*Solución.* Módulo $8$, todo cuadrado es $\equiv 0, 1$ o $4$: en efecto, los pares dan $0$ o $4$ y los impares dan $1$ (recuérdese que un impar al cuadrado es $\equiv 1 \pmod 8$). Sumando tres valores de $\{0, 1, 4\}$ se obtiene, módulo $8$, cualquiera de

$$
0, 1, 2, 3, 4, 5, 6,
$$

pero **nunca $7$** (compruébese: las únicas formas de acercarse son $4+1+1 = 6$ y $4+4+1 = 9 \equiv 1$). Como $7 \equiv 7 \pmod 8$, la ecuación no tiene solución. $\square$

**Teorema (Legendre, 1798).** Un entero $n \geq 0$ es suma de tres cuadrados si y solo si **no** es de la forma $4^a(8b + 7)$. La obstrucción módulo $8$ que acabamos de usar es, de hecho, la única que existe.

## Aplicaciones

**Criterios de irresolubilidad.** Cuando un problema pide demostrar que algo es imposible, la paridad es lo primero que hay que intentar. Si falla, se pasa a módulo $4$, luego módulo $8$, y así sucesivamente hasta encontrar la obstrucción.

**Paridad de permutaciones.** Cada permutación es un producto de transposiciones. El número de transposiciones en cualquier descomposición tiene la misma paridad (par o impar). Esto define la **signatura** de una permutación, que es un invariante fundamental en álgebra y en la teoría del determinante.

**Problema del $15$.** El rompecabezas del $15$ (las fichas numeradas en un tablero de $4 \times 4$) tiene la propiedad de que exactamente la mitad de las $16!$ configuraciones son alcanzables desde la inicial. La condición exacta es que la paridad de la permutación más la paridad de la posición del hueco sea fija. La demostración usa la paridad de permutaciones.

## Observación

**Paridad como caso especial de módulo $n$.** La paridad es el invariante módulo $2$. Las mismas ideas generalizan:

- Módulo $3$: suma de cifras módulo $3$.
- Módulo $4$: cuadrados son $0$ o $1$ (muy útil para sumas de cuadrados).
- Módulo $8$: cuadrados de impares son siempre $1$ (para sumas de tres cuadrados).
- Módulo $p$: criterio de Euler para residuos cuadráticos.

La habilidad en teoría de números es saber qué módulo elegir. La paridad (módulo $2$) es la primera opción. Si no basta, se escalan los módulos.

**Coloraciones generalizadas.** La coloración del tablero de ajedrez (bipartición) es una paridad de la posición: la casilla $(i, j)$ tiene paridad $i + j \pmod 2$. Generalizando, se puede colorear con $k$ colores donde el color de $(i, j)$ depende de $i + j \pmod k$. Cada operación de dominó (o de caballo, etc.) mueve entre colores de una forma predecible, y los invariantes de color limitan las configuraciones alcanzables.

## Problemas relacionados

**Problema 1 (clásico).** Los números $1, 2, \ldots, 2n$ están escritos en una pizarra. En cada paso se borran dos números $a, b$ y se escribe $|a - b|$. ¿Puede el número final ser impar?

[[pista]]

Como en el Ejemplo 4, la **paridad de la suma** se conserva. Calcula la paridad de $1 + 2 + \cdots + 2n$.

[[/pista]]

[[solución]]

Igual que en el Ejemplo 4, reemplazar $a, b$ por $|a - b|$ cambia la suma en $-2\min(a,b)$, una cantidad par; luego la **paridad de la suma se conserva** durante todo el proceso. El número final, al ser lo único que queda, tiene la misma paridad que la suma inicial

$$
S_0 = 1 + 2 + \cdots + 2n = \frac{2n(2n+1)}{2} = n(2n+1).
$$

Como $2n + 1$ es impar, la paridad de $S_0$ es la de $n$. Por tanto el número final es **impar si y solo si $n$ es impar**. Es decir, sí puede ser impar, exactamente cuando $n$ lo es. $\blacksquare$

[[/solución]]

**Problema 2 (clásico).** A un tablero $8 \times 8$ se le eliminan dos esquinas opuestas. ¿Se puede cubrir el resto con dominós $1 \times 2$?

[[pista]]

Colorea como un tablero de ajedrez y cuenta de cada color, recordando que cada dominó cubre uno de cada uno (es el Ejemplo 6).

[[/pista]]

[[solución]]

Coloreamos a la manera del ajedrez ($(i,j)$ negra si $i+j$ es par, blanca si es impar). Cada dominó cubre exactamente una casilla de cada color, así que cualquier recubrimiento necesita el mismo número de negras y de blancas.

Dos esquinas **opuestas** tienen coordenadas que suman ambas un número par (por ejemplo $(1,1)$ y $(8,8)$), así que son del **mismo** color: digamos las dos negras. Al quitarlas quedan $30$ negras y $32$ blancas, y $30 \neq 32$. Por tanto **no se puede** cubrir. $\blacksquare$

[[/solución]]

**Problema 3 (clásico).** Demostrar que $x^2 + y^2 \equiv 3 \pmod 4$ no tiene solución entera. Deducir que $x^2 + y^2 + z^2 \equiv 7 \pmod 8$ tampoco.

[[pista]]

Los cuadrados son $\equiv 0, 1 \pmod 4$ y $\equiv 0, 1, 4 \pmod 8$. Para la segunda parte, observa que $7 \equiv 3 \pmod 4$ obliga a que los tres cuadrados sean impares.

[[/pista]]

[[solución]]

**Primera parte.** Todo cuadrado es $\equiv 0$ o $1 \pmod 4$, así que $x^2 + y^2$ solo puede ser $\equiv 0, 1$ o $2 \pmod 4$. El valor $3$ es inalcanzable: no hay solución.

**Segunda parte.** Supongamos que $x^2 + y^2 + z^2 \equiv 7 \pmod 8$. Reduciendo módulo $4$, sería $\equiv 3 \pmod 4$. Como cada cuadrado es $0$ o $1 \pmod 4$, la única forma de sumar $3$ es que los **tres** sean $\equiv 1 \pmod 4$, es decir, los tres impares. Pero un impar al cuadrado es $\equiv 1 \pmod 8$, luego la suma sería $\equiv 1 + 1 + 1 = 3 \pmod 8$, **no** $7$. Contradicción: no hay solución. $\blacksquare$

[[/solución]]

**Problema 4 (clásico).** Hay $n$ luces, todas apagadas. En cada paso se cambia el estado de exactamente $k$ luces. ¿Para qué $n, k$ se puede llegar a tener exactamente **una** luz encendida?

[[pista]]

El número de luces encendidas cambia, en cada paso, en una cantidad con la misma paridad que $k$. Empieza en $0$. ¿Cuándo puede volverse $1$ (impar)?

[[/pista]]

[[solución]]

Sea $f$ el número de luces encendidas. Si en un paso cambiamos $k$ luces, de las cuales $j$ estaban encendidas, $f$ varía en $(k - j) - j = k - 2j$, cantidad con la **misma paridad que $k$**. Partimos de $f = 0$.

**Si $k$ es par:** $f$ conserva su paridad, luego siempre es par y **nunca** puede valer $1$. Imposible.

**Si $k$ es impar:** la paridad ya no es obstáculo. Veamos que, cuando además $k < n$, sí se logra: tomando dos pasos sobre dos grupos de $k$ luces que comparten $k - 1$ luces, el efecto neto es cambiar **solo las dos** luces en que difieren; así podemos encender o apagar cualquier pareja. Con esas parejas ajustamos las luces de dos en dos, y un último paso de $k$ luces (cantidad impar) deja un número impar de encendidas; combinando, se llega a exactamente una. Si $k = n$, en cambio, el único movimiento posible voltea **todas** las luces, de modo que $f$ solo alterna entre $0$ y $n$, y solo se alcanza $1$ en el caso trivial $n = k = 1$.

**Conclusión:** se puede si y solo si $k$ es **impar** y $k < n$ (más el caso trivial $n = k = 1$). $\blacksquare$

[[/solución]]

**Problema 5 (clásico).** En la expresión $\pm 1 \pm 2 \pm 3 \pm \cdots \pm n$ se eligen libremente los signos. ¿Para qué valores de $n$ puede el resultado ser $0$?

[[pista]]

Cambiar el signo de un término $k$ altera el total en $2k$ (par), así que la **paridad** del resultado es fija: la de $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$.

[[/pista]]

[[solución]]

**Obstrucción (paridad).** Partiendo de $+1 + 2 + \cdots + n$, cambiar el signo de un término $k$ resta $2k$, que es par. Luego, sean cuales sean los signos, el resultado tiene siempre la misma paridad que

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}.
$$

Para que el resultado pueda ser $0$ (par), esa suma debe ser par, es decir $4 \mid n(n+1)$. Como $n$ y $n+1$ son consecutivos (uno par, uno impar), esto ocurre exactamente cuando $n \equiv 0$ o $n \equiv 3 \pmod 4$.

**Suficiencia (construcción).** Cuando $n \equiv 0$ o $3 \pmod 4$, sí se alcanza $0$:

- Cuatro consecutivos con signos $+,-,-,+$ suman $0$: $\;a - (a{+}1) - (a{+}2) + (a{+}3) = 0$.
- Si $n \equiv 0 \pmod 4$, repartimos $1, \ldots, n$ en bloques de cuatro de ese tipo.
- Si $n \equiv 3 \pmod 4$, usamos $1 + 2 - 3 = 0$ para los tres primeros y agrupamos el resto (que es múltiplo de $4$) en bloques de cuatro.

**Conclusión:** el resultado puede ser $0$ si y solo si $n \equiv 0$ o $n \equiv 3 \pmod 4$. $\blacksquare$

[[/solución]]

**Problema 6 (clásico).** En un tablero $n \times n$, un caballo recorre todas las casillas exactamente una vez. Demostrar que, si $n$ es impar, el recorrido no puede ser **cerrado** (terminar en una casilla a un salto de la inicial).

[[pista]]

Cada salto de caballo cambia el color (ajedrez) de la casilla. Un recorrido cerrado tiene que volver al color de partida: ¿cuántos saltos hace falta?

[[/pista]]

[[solución]]

Coloreamos el tablero como ajedrez. Un salto de caballo va de $(i,j)$ a una casilla cuya suma de coordenadas cambia de paridad (se mueve $(\pm 1, \pm 2)$ o $(\pm 2, \pm 1)$, y $1 + 2$ es impar), así que **cada salto cambia de color**.

Un recorrido cerrado visita las $n^2$ casillas y vuelve a la inicial, dando $n^2$ saltos en total. Como los colores se alternan a cada salto, volver al color de partida exige un número **par** de saltos. Por tanto $n^2$ debe ser par.

Si $n$ es impar, $n^2$ es impar, contradicción: no existe recorrido cerrado. $\blacksquare$

[[/solución]]
