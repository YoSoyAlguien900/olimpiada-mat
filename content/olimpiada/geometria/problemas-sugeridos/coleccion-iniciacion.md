---
title: "Colección de iniciación — Figuras planas y circunferencias"
preview: "Once problemas de geometría plana extraídos de exámenes reales de la OMG y la OME Fase Local. Cubre puntos medios, cuadriláteros cíclicos, circunferencia inscrita, semejanza y tangencias."
dificultad: iniciacion
tags: [coleccion, iniciacion, geometria, circunferencias, triangulos, cuadrilateros]
prerequisites: [angulos-inscritos, semejanza]
author: "Adrián García Bouzas"
updated: "2026-06-06"
---

Colección de problemas de iniciación en geometría, todos extraídos de exámenes reales. Los problemas 1–5 son accesibles con geometría elemental; los problemas 6–11 requieren el manejo fluido de ángulos inscritos, la circunferencia inscrita y la semejanza.

---

**1. (OMG 2000/P2a)** Sea $ABC$ un triángulo y sean $M$, $N$, $P$ los puntos medios de los lados $BC$, $CA$ y $AB$ respectivamente. Probar que el triángulo medial $MNP$ divide al triángulo $ABC$ en cuatro triángulos congruentes entre sí, cada uno con área igual a la cuarta parte de $S_{ABC}$.

---

**2. (OMG 2000/P2b)** Sea $ABCD$ un cuadrilátero convexo y sean $M$, $N$, $P$, $Q$ los puntos medios de los lados $AB$, $BC$, $CD$ y $DA$ respectivamente. Probar que $MNPQ$ es un paralelogramo y que su área es exactamente la mitad del área de $ABCD$.

---

**3. (Clásico)** Sea $\omega$ una circunferencia con centro $O$ y sean $A$, $B$ dos puntos de $\omega$. Sea $C$ un tercer punto de $\omega$ que no pertenece al arco $AB$ que no contiene al ángulo central $\angle AOB$. Probar que $\angle ACB = \frac{1}{2}\,\angle AOB$.

*Deducir que todos los ángulos inscritos que abarcan el mismo arco son iguales entre sí.*

---

**4. (Clásico)** Probar que un cuadrilátero convexo es cíclico (inscribible en una circunferencia) si y solo si sus ángulos opuestos son suplementarios, es decir, suman $180°$.

---

**5. (Clásico)** En un triángulo rectángulo, probar que la mediana trazada a la hipotenusa tiene longitud igual a la mitad de la hipotenusa.

*Hint: situar el triángulo en el plano de coordenadas con los catetos sobre los ejes.*

---

**6. (Local XLIV OME, 1ª sesión)** Sea $\mathcal{F}$ una familia de puntos del plano tal que cualesquiera cuatro de ellos son concíclicos (yacen sobre una misma circunferencia). Probar que todos los puntos de $\mathcal{F}$ son concíclicos.

---

**7. (OME Fase Local 2011–2012)** Sea $ABCD$ un cuadrilátero convexo y $P$ un punto de su interior tal que los cuatro triángulos $PAB$, $PBC$, $PCD$ y $PDA$ tienen la misma área. Probar que las diagonales $AC$ y $BD$ se bisecan mutuamente.

---

**8. (Local XLIV OME, 1ª sesión)** Sea $ABCD$ un cuadrilátero convexo. Desde el vértice $A$ se traza la perpendicular a la diagonal $BD$, con pie $A'$; desde $B$, la perpendicular a $AC$, con pie $B'$; desde $C$, la perpendicular a $BD$, con pie $C'$; desde $D$, la perpendicular a $AC$, con pie $D'$. Demostrar que el cuadrilátero $A'B'C'D'$ es semejante al cuadrilátero $ABCD$.

---

**9. (Local XLIV OME, 2ª sesión)** Sean $D$, $E$, $F$ los puntos de tangencia de la circunferencia inscrita del triángulo $ABC$ con los lados $BC$, $CA$ y $AB$ respectivamente. Probar que

$$4 \cdot S_{DEF} \leq S_{ABC},$$

con igualdad si y solo si $ABC$ es equilátero.

*Hint: usar la desigualdad de Euler $R \geq 2r$ entre el circunradio $R$ y el inradio $r$, y expresar ambas áreas en términos de $R$, $r$ y los ángulos del triángulo.*

---

**10. (OMG 2001/P2)** Un cristal triangular contiene en su interior una circunferencia de radio $r$. Para cualquier entero positivo $n$, demostrar que es posible recortar del cristal $n^2$ piezas triangulares similares al original, cada una de las cuales contiene en su interior una circunferencia de radio $\dfrac{r}{n}$.

---

**11. (Local XLV OME 2009, sábado por la tarde)** Sea $ABCD$ un paralelogramo. En su interior se sitúan dos circunferencias $\omega_1$ y $\omega_2$ con las propiedades siguientes: $\omega_1$ es tangente a los lados $AB$ y $AD$; $\omega_2$ es tangente a los lados $CB$ y $CD$; y $\omega_1$ y $\omega_2$ son tangentes exteriormente entre sí. Demostrar que el punto de tangencia de $\omega_1$ y $\omega_2$ pertenece a la diagonal $AC$.

---

## Pistas

- **Problema 1:** los cuatro triángulos son congruentes porque cada uno comparte un vértice de $ABC$ y sus lados son mitades de los lados de $ABC$. La semejanza 1:2 implica razón de áreas 1:4.

- **Problema 2:** las diagonales del cuadrilátero $MNPQ$ son las medianas del cuadrilátero $ABCD$ (segmentos que unen los puntos medios de lados opuestos), y cada diagonal del cuadrilátero original es una diagonal de uno de los triángulos formados. Usar el teorema del punto medio en los triángulos $ABC$ y $ACD$.

- **Problema 3:** conectar $O$ con $C$ y dividir en casos según $O$ esté dentro o fuera del ángulo $ACB$. En el caso central, $\triangle OAC$ y $\triangle OBC$ son isósceles.

- **Problema 4:** para el recíproco, tomar la circunferencia por tres vértices y probar que el cuarto también pertenece a ella usando el ángulo inscrito.

- **Problema 5:** si la hipotenusa es $AB$ y $M$ su punto medio, situar $A=(0,0)$, $B=(2a,0)$, $C=(0,2b)$. Entonces $M=(a,0)$ y $CM = \sqrt{a^2+b^2}= AB/2$.

- **Problema 6:** tomar tres puntos cualesquiera de $\mathcal{F}$; queda determinada una circunferencia $\omega$. Cualquier cuarto punto $D \in \mathcal{F}$: los cuatro puntos son concíclicos, y tres de ellos determinan $\omega$ unívocamente, luego $D \in \omega$.

- **Problema 7:** el área de $\triangle PAB$ es $\frac{1}{2}|AB|\cdot d(P, AB)$. Igualar las áreas de triángulos adyacentes implica que $P$ equidista de $AB$ y $CD$ (y de $BC$ y $AD$), lo que sitúa a $P$ en la intersección de las medianas de los lados, i.e., en la intersección de las diagonales.

- **Problema 8:** los cuatro pies $A', B', C', D'$ yacen sobre el círculo de diámetro $AC$ o $BD$ (según corresponda). Usar que $A'$ y $C'$ yacen sobre el círculo con diámetro $BD$ (ángulo en semicírculo es recto) para encontrar la relación angular.

- **Problema 9:** el triángulo de contacto $DEF$ tiene lados $EF = a\sin(A/2)$, etc. (o usar la fórmula $S_{DEF} = 2R\sin A\sin B\sin C \cdot r/(2R)$). La desigualdad $R \geq 2r$ (Euler) da $4S_{DEF} \leq S_{ABC}$.

- **Problema 10:** subdividir el triángulo en $n^2$ triángulos similares de escala $1/n$ mediante líneas paralelas a los lados. La circunferencia inscrita de cada subtriángulo tiene radio $r/n$.

- **Problema 11:** los centros de $\omega_1$ y $\omega_2$ son $O_1$ y $O_2$; el punto de tangencia $T$ está en el segmento $O_1 O_2$. Usar la simetría del paralelogramo: la diagonal $AC$ es eje de simetría de la configuración. Mostrar que $O_1$, $T$ y $O_2$ son simétricos respecto a esta diagonal y que $T$ cae sobre ella.
