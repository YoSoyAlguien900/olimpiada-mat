---
title: "Inversión: la transformación que convierte rectas en circunferencias"
preview: "La inversión es la transformación más poderosa de la geometría sintética. Convierte rectas y circunferencias entre sí, intercambia tangencias y simplifica configuraciones aparentemente intratables."
dificultad: nacional
tags: [inversion, transformaciones, conformes, tangencia]
prerequisites: [angulos-inscritos, potencia-de-un-punto]
author: "Material olímpico"
updated: "2026-02-12"
---

## Definición

La **inversión** de centro $O$ y razón $r^2$ es la transformación del plano (menos $O$) en sí mismo definida por:

$$
P \mapsto P', \quad \text{donde } \vec{OP'} = \frac{r^2}{|OP|^2} \vec{OP}.
$$

Equivalentemente, $P'$ está sobre la semirrecta $OP$ y $|OP| \cdot |OP'| = r^2$.

## Propiedades

1. **Involutividad.** $P \to P' \to P$. La inversión es su propia inversa.

2. **Puntos fijos.** Son los puntos de la circunferencia $|OP| = r$, llamada **circunferencia de inversión**.

3. **Imágenes de rectas y circunferencias.**
   - Una **recta por $O$** se mapea a sí misma.
   - Una **recta que no pasa por $O$** se mapea a una **circunferencia que pasa por $O$**.
   - Una **circunferencia por $O$** se mapea a una **recta que no pasa por $O$**.
   - Una **circunferencia que no pasa por $O$** se mapea a otra **circunferencia que no pasa por $O$**.

4. **Conservación de ángulos.** La inversión es **conforme**: ángulos entre curvas se preservan.

5. **Preservación de tangencias.** Dos curvas tangentes en un punto $P \neq O$ se transforman en curvas tangentes en $P'$.

## Demostración

**(3) Recta a circunferencia.** Sea $\ell$ una recta que no pasa por $O$, y sea $A$ el pie de la perpendicular de $O$ a $\ell$. Su imagen $A'$ está sobre la semirrecta $OA$ con $|OA||OA'| = r^2$.

Tomemos cualquier punto $P \in \ell$, $P \neq A$. Por el teorema del ángulo inscrito y el cálculo de potencia, el ángulo $\angle OP'A' = 90°$, así que $P'$ está sobre la circunferencia con diámetro $OA'$. Esta es la imagen completa de $\ell$.

**(4) Conformalidad.** Las dos curvas que se cortan en $P$ con cierto ángulo se mapean a dos curvas (rectas/circunferencias) que se cortan en $P'$ con el mismo ángulo. La demostración elegante usa que la inversión es composición de una **reflexión sobre la circunferencia** y una conjugación compleja, y ambas son antiholomorfas.

## Ejemplo

**Ejemplo 1.** Invertir un triángulo $\triangle ABC$ respecto a $A$ con razón $r^2 = AB \cdot AC$.

El punto $B \to B'$ sobre $AB$ con $AB' = r^2/AB = AC$. Es decir, $B'$ es **un punto sobre $AB$ con $AB' = AC$**. Similarmente $C \to C'$ sobre $AC$ con $AC' = AB$.

La circunferencia $\omega$ que pasa por $A, B, C$ (circuncírculo) pasa por $A$, así que se transforma en una **recta**: la recta $B'C'$. Por construcción, esta recta es paralela al... — un cálculo verifica que es paralela a $BC$ rotada por $\angle BAC$.

**Ejemplo 2.** El **lema PoP** (potencia del punto) tiene una demostración trivial vía inversión. Dada una circunferencia $\omega$ y un punto $P$ exterior, la inversión centrada en $P$ con razón igual a la potencia $\operatorname{pot}_\omega(P)$ mapea $\omega$ a sí misma. Las dos intersecciones de una secante por $P$ se intercambian, y el producto de sus distancias a $P$ es exactamente la potencia.

## Aplicaciones

### Aplicación 1: tangencias

**Problema.** Tres circunferencias son mutuamente tangentes externamente. Demostrar que existen exactamente dos circunferencias tangentes a las tres.

**Solución con inversión.** Invertir respecto al punto de tangencia de dos de ellas: las dos se vuelven dos **rectas paralelas**. La tercera circunferencia se vuelve una circunferencia tangente a ambas rectas. El problema se reduce a encontrar circunferencias tangentes a dos paralelas y a una circunferencia entre ellas — clásico, con dos soluciones.

### Aplicación 2: la cadena de Pappus

Dadas dos circunferencias tangentes internamente, la **cadena de Pappus** es una secuencia de circunferencias mutuamente tangentes inscritas en la región entre ellas. Por inversión adecuada, las dos circunferencias originales se mapean a dos paralelas, y la cadena se vuelve una serie de circunferencias iguales tangentes entre paralelas — situación trivial.

### Aplicación 3: el teorema de Ptolomeo

Por inversión centrada en un vértice del cuadrilátero cíclico, las longitudes se transforman de manera controlable, y Ptolomeo se reduce a la **desigualdad triangular** entre las imágenes.

### Aplicación 4: problemas IMO clásicos

Numerosos problemas IMO con configuraciones que parecen imposibles se resuelven con una sola inversión. Por ejemplo:

- **IMO 1996/5.** Sea $ABCDEF$ un hexágono convexo... (inversión simplifica la configuración).
- **IMO 2014/3.** Cuadrilátero con ángulos rectos opuestos.
- **IMO 1997/2.** En el ángulo $\angle BAC$, sea $L$ una recta...

## Observación

**Cómo elegir el centro y la razón.**

- **Centro en un punto de tangencia múltiple.** Mejora drásticamente la configuración.
- **Centro en un vértice del polígono.** Útil cuando los lados desde ese vértice son protagónicos.
- **Razón igual a la potencia de un punto.** Hace que ciertas circunferencias se preserven.
- **Razón unidad (inversión sobre circunferencia dada).** Especialmente útil para problemas con tangencias a esa circunferencia.

La elección correcta de centro y razón es **el** arte de la inversión olímpica.

## Problemas relacionados

- **Teorema de Feuerbach:** la circunferencia de los nueve puntos es tangente a las cuatro circunferencias inscrita/exinscritas. Demostración estándar por inversión.
- **Problema de Apolonio:** circunferencias tangentes a tres dadas. Inversión + casos.
- **Inversión hiperbólica:** generalización a geometrías no euclidianas.
