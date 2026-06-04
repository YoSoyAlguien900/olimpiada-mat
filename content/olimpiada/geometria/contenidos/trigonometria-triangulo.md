---
title: "Trigonometría del triángulo: ley de senos, cosenos e identidades"
preview: "Las leyes fundamentales que relacionan lados y ángulos de un triángulo, más una colección de identidades que aparecen sistemáticamente en problemas olímpicos. Indispensable para geometría calculada."
dificultad: regional
tags: [trigonometria, ley-senos, ley-cosenos, identidades]
prerequisites: [semejanza]
author: "Material olímpico"
updated: "2026-02-13"
---

## Notación estándar

En un triángulo $ABC$, denotamos:

- $a = |BC|, b = |CA|, c = |AB|$ (lados opuestos a los vértices).
- $A, B, C$ los ángulos en los vértices, con $A + B + C = \pi$.
- $s = (a+b+c)/2$ semiperímetro.
- $R$ circunradio, $r$ inradio.
- $[ABC]$ el área.

## Ley de senos

$$
\frac{a}{\sin A} \;=\; \frac{b}{\sin B} \;=\; \frac{c}{\sin C} \;=\; 2R.
$$

**Demostración.** Consideramos la altura desde $A$ al lado $BC$: tiene longitud $b \sin C = c \sin B$. Por tanto $b/\sin B = c/\sin C$. La igualdad con $2R$ se sigue del teorema del ángulo inscrito: la cuerda $a$ subtiende un ángulo $A$ en el vértice opuesto, así que el ángulo central es $2A$, y $a = 2R \sin A$. $\blacksquare$

## Ley de cosenos

$$
c^2 \;=\; a^2 + b^2 - 2ab \cos C.
$$

(y las dos identidades simétricas obvias).

**Demostración.** Colocamos el triángulo en coordenadas con $C$ en el origen, $B$ sobre el eje $x$, $A$ en posición arbitraria. Calculamos $|AB|^2$ por la fórmula de distancia y simplificamos. $\blacksquare$

**Caso particular.** Si $C = \pi/2$ (triángulo rectángulo), $\cos C = 0$, recuperamos **Pitágoras**: $c^2 = a^2 + b^2$.

## Fórmulas del área

$$
[ABC] \;=\; \frac{1}{2}ab \sin C \;=\; \frac{1}{2}bc \sin A \;=\; \frac{1}{2}ca \sin B.
$$

**Por circunradio:**
$$
[ABC] \;=\; \frac{abc}{4R}.
$$

**Por inradio:**
$$
[ABC] \;=\; r s.
$$

**Fórmula de Herón:**
$$
[ABC] \;=\; \sqrt{s(s-a)(s-b)(s-c)}.
$$

## Tangentes y cotangentes

**Ley de tangentes:**
$$
\frac{a + b}{a - b} \;=\; \frac{\tan\tfrac{A+B}{2}}{\tan\tfrac{A-B}{2}}.
$$

**Cotangentes y área:**
$$
\cot A + \cot B + \cot C \;=\; \frac{a^2 + b^2 + c^2}{4 [ABC]}.
$$

## Identidades específicas

Para todo triángulo (consecuencia de $A + B + C = \pi$):

**Suma de cosenos:**
$$
\cos A + \cos B + \cos C \;=\; 1 + \frac{r}{R}.
$$

**Suma de cuadrados de senos:**
$$
\sin^2 A + \sin^2 B + \sin^2 C \;=\; 2 + 2\cos A \cos B \cos C.
$$

**Producto de cosenos:**
$$
\cos A \cos B \cos C \;\leq\; \frac{1}{8},
$$
con igualdad sii equilátero. Esta cota es la base de muchas desigualdades trigonométricas.

**Tangente:**
$$
\tan A + \tan B + \tan C \;=\; \tan A \tan B \tan C \quad (\text{si los tres ángulos están definidos}).
$$

Esta identidad **define** el ortocentro: cuando $H$ está dentro del triángulo, $\tan A + \tan B + \tan C > 0$.

## Ángulos mitad

Las **fórmulas de ángulos mitad** son cruciales para fórmulas que involucran $r$ y $R$:

$$
\sin\frac{A}{2} \;=\; \sqrt{\frac{(s-b)(s-c)}{bc}}, \quad \cos\frac{A}{2} \;=\; \sqrt{\frac{s(s-a)}{bc}},
$$

$$
\tan\frac{A}{2} \;=\; \sqrt{\frac{(s-b)(s-c)}{s(s-a)}} \;=\; \frac{r}{s-a}.
$$

## Distancias entre puntos notables

Combinando las fórmulas:

**$OI$ (fórmula de Euler):**
$$
|OI|^2 \;=\; R^2 - 2Rr.
$$

**$OH$:**
$$
|OH|^2 \;=\; R^2 - 8R^2 \cos A \cos B \cos C.
$$

**$IH$ (Feuerbach):**
$$
|IH|^2 \;=\; 2r^2 - 4R^2 \cos A \cos B \cos C.
$$

## Aplicaciones

### Aplicación 1: resolver triángulos

**Problema típico.** Dados $a = 7$, $b = 8$, $C = 60°$, hallar $c, A, B$.

Por la ley de cosenos: $c^2 = 49 + 64 - 2 \cdot 7 \cdot 8 \cdot \tfrac{1}{2} = 113 - 56 = 57$. Así $c = \sqrt{57} \approx 7.55$.

Por la ley de senos: $\sin A / 7 = \sin 60° / \sqrt{57}$, así $\sin A = 7\sqrt 3 / (2\sqrt{57})$, etc.

### Aplicación 2: identidades olímpicas

**OMG 2017.** En un triángulo $ABC$, demostrar que $\sin^2 A + \sin^2 B + \sin^2 C \leq 9/4$, con igualdad sii equilátero.

*Solución.* Usar la identidad $\sin^2 A + \sin^2 B + \sin^2 C = 2 + 2\cos A \cos B \cos C$ y el hecho $\cos A \cos B \cos C \leq 1/8$.

### Aplicación 3: identificar triángulos especiales

**Triángulo rectángulo:** $a^2 + b^2 = c^2$, $\sin C = 1$.

**Triángulo equilátero:** $a = b = c$, $A = B = C = \pi/3$, $r = R/2$, $|OI| = 0$.

**Triángulo isósceles:** dos lados iguales y dos ángulos iguales.

### Aplicación 4: desigualdades

**OME 2013.** Demostrar que en todo triángulo, $\cot A \cot B + \cot B \cot C + \cot C \cot A = 1$.

*Solución.* Usar $A + B + C = \pi$ y manipulaciones con $\tan$. Es una identidad exacta, no desigualdad — pero requiere conocer las identidades trigonométricas.

## Observación

**Cuándo usar trigonometría.**

- ✅ Hay **ángulos específicos** dados (no relaciones puras).
- ✅ Se piden **longitudes** explícitas.
- ✅ El problema tiene **suficiente simetría** para reducir bien con identidades.
- ❌ El problema es **puramente sintético** (mejor con ángulos directamente).
- ❌ Aparecen **muchas configuraciones cíclicas** (usar ángulos inscritos).

La trigonometría es **una bala de plata** cuando todo lo demás falla, pero es a menudo más larga que un argumento sintético elegante.

## Problemas relacionados

- **IMO 2013/4.** Configuración de triángulos relacionados — resuelto elegantemente con ley de senos.
- **OME 2020.** Una desigualdad geométrica donde la trigonometría reduce el problema a una desigualdad sobre senos y cosenos.
- **Identidad de los productos:** $\sin A \sin B \sin C = $ función de $r/R$.
