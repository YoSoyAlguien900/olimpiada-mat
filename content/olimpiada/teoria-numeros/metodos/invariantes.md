---
title: "Invariantes y semi-invariantes en juegos y procesos"
preview: "Encuentra una magnitud que no cambia bajo las operaciones permitidas, y habrás resuelto el problema. La técnica más demoledora en combinatoria de procesos."
dificultad: regional
tags: [invariante, semi-invariante, monovariante, paridad, coloraciones]
prerequisites: [paridad-invariante]
author: "Adrián García Bouzas"
updated: "2026-02-11"
---

## Definición

En un problema con un proceso (movimientos, transformaciones, evolución temporal de una configuración), un **invariante** es una función $\Phi$ de las configuraciones tal que $\Phi(\text{antes}) = \Phi(\text{después})$ para toda operación permitida.

Un **semi-invariante** o **monovariante** es una función que cambia siempre en la misma dirección: $\Phi(\text{después}) \leq \Phi(\text{antes})$ (o el inverso).

## Aplicaciones

### Aplicación 1: invariante puro

**Problema (clásico).** En un tablero de $8 \times 8$ se eliminan dos cuadraditos opuestos. ¿Es posible cubrir el resto con piezas de dominó $1 \times 2$?

**Solución.** Coloreamos el tablero como un tablero de ajedrez. Cada pieza de dominó cubre exactamente un cuadrado blanco y uno negro. Los dos cuadrados opuestos eliminados son del mismo color (digamos blancos). Quedan $30$ blancos y $32$ negros: las paridades no concuerdan, ya que cada dominó cubre uno de cada color.

**Invariante:** la diferencia (negros cubiertos) − (blancos cubiertos) $= 0$ para cualquier conjunto de dominós. Pero el tablero residual requiere $32 - 30 = 2 \neq 0$. Imposible. $\blacksquare$

### Aplicación 2: monovariante

**Problema (clásico).** En una pizarra hay los números $1, 2, \ldots, 100$. En cada paso se eligen dos números $a, b$, se borran, y se escribe $a + b - 1$. ¿Qué número queda al final?

**Solución.** Sea $S$ la suma de los números en la pizarra. En cada paso, $S$ disminuye en $1$: $S_{\text{nuevo}} = S_{\text{viejo}} - a - b + (a + b - 1) = S_{\text{viejo}} - 1$.

**Semi-invariante:** $S$ decrece exactamente en $1$ por paso. Como inicialmente $S = 1 + 2 + \cdots + 100 = 5050$ y al cabo de $99$ pasos queda un solo número, este vale

$$
5050 - 99 \;=\; 4951.
$$

$\blacksquare$

### Aplicación 3: coloración como invariante

**Problema (IMO 1980/1).** Sea $A_1, A_2, A_3, A_4$ una sucesión cíclica de cuatro puntos en un plano, ningún tres colineales. En cada paso podemos reemplazar dos puntos consecutivos $A_i, A_{i+1}$ por sus reflexiones respecto a la recta que pasa por los otros dos. Determinar si tras una sucesión de pasos se puede llegar a cualquier configuración con las mismas longitudes.

**Idea de solución.** Se construye una **función orientación** sobre la configuración que es invariante bajo el movimiento permitido. Esto restringe drásticamente las configuraciones alcanzables.

## Ejemplo

**Ejemplo (proceso de fichas).** Sobre un tablero infinito hay fichas en ciertas casillas. En cada paso se puede sustituir una ficha por dos: una a su derecha y otra hacia arriba. Si la configuración inicial es una sola ficha en $(0, 0)$, ¿es posible alcanzar una configuración sin fichas en el cuadrante $\{(x, y) : x + y < 5\}$?

**Solución.** Para cada casilla $(x, y)$, asignamos peso $\varphi^{-(x+y)}$ donde $\varphi = \frac{1+\sqrt 5}{2}$ es la razón áurea, que satisface $\varphi^2 = \varphi + 1$. La elección clave: $\varphi^{-(x+y)} = \varphi^{-(x+1+y)} + \varphi^{-(x+y+1)}$ porque $1 = \varphi^{-1} + \varphi^{-2}$.

Entonces la **suma de pesos** es invariante. Inicialmente vale $1$. Si todas las fichas estuvieran en $\{x + y \geq 5\}$, su suma sería a lo sumo $\sum_{x + y \geq 5} \varphi^{-(x+y)} = \frac{\varphi^{-5}}{(1-\varphi^{-1})^2}$.

Calculando: $\varphi^{-1} \approx 0.618$, así que $\varphi^{-5} \approx 0.090$, y $(1 - \varphi^{-1})^2 = \varphi^{-2}$. Luego la suma máxima es $\varphi^{-5}/\varphi^{-2} = \varphi^{-3} \approx 0.236 < 1$. **Imposible.** $\blacksquare$

Este problema (Conway, "Soldados") es una joya del razonamiento por invariante con valores irracionales.

## Observación

**Cómo encontrar invariantes**:

1. **Paridad.** El más simple: una operación cambia (o conserva) la paridad de alguna magnitud.
2. **Suma o producto módulo $n$.** Como en el ejemplo de la pizarra.
3. **Coloración.** Pintar el tablero con $k$ colores; cada operación afecta a colores específicos.
4. **Funciones con propiedad recursiva.** Como en el ejemplo de Conway, donde la propiedad $\varphi^{-1} + \varphi^{-2} = 1$ permitió que el peso fuera exactamente conservado.
5. **Determinante o signo.** En problemas con permutaciones.

**Cómo encontrar monovariantes**:

- Sumas que decrecen estrictamente bajo la operación.
- Distancias a una configuración objetivo.
- Funciones de Lyapunov en sistemas discretos.

Si encuentras una **monovariante con valores en $\mathbb N$**, sabes que el proceso termina en finitos pasos (por buen orden).

## Problemas relacionados

- **15-puzzle:** la paridad de la permutación es invariante; la mitad de las configuraciones es inalcanzable.
- **Algoritmo de Euclides:** el monovariante es el menor de los dos números, que decrece estrictamente.
- **Burbujas y autómatas:** muchos problemas de simulación se resuelven por invariantes.
