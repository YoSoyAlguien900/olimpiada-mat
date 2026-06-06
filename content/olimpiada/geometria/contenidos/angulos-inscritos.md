---
title: "Ángulos en la circunferencia: inscrito, central y semiinscrito"
preview: "El ángulo inscrito es la mitad del central que abarca el mismo arco. Este resultado sencillo es el primer pilar de toda la geometría sintética del círculo y la fuente de la mayoría de las igualdades de ángulos en olimpiada."
dificultad: iniciacion
tags: [angulos, circunferencia, inscrito, cuadrilatero-ciclico, tangente]
prerequisites: []
author: "Adrián García Bouzas"
updated: "2026-06-04"
---

La circunferencia es el objeto geométrico más simétrico del plano, y esa simetría se manifiesta en una propiedad extraordinaria de los ángulos: todos los ángulos inscritos que «ven» el mismo arco son iguales entre sí, independientemente de desde dónde se miren sobre el círculo. Esta observación parece modesta pero tiene consecuencias que aparecen en casi todos los problemas olímpicos de geometría: cuadriláteros cíclicos, potencias de puntos, configuraciones con tangentes, y la mayoría de los problemas de concurrencia de rectas.

El teorema del ángulo inscrito es el punto de entrada a toda la geometría del círculo. Conviene aprenderlo con sus tres casos de una vez, pues los problemas difícilmente presentan solo el caso «bonito».

## Definición

Sea $\omega$ una circunferencia de centro $O$ y radio $r$, y sean $A$, $B$ dos puntos sobre $\omega$.

- El **ángulo central** $\angle AOB$ es el ángulo en el centro $O$ que subtiende el arco $\widehat{AB}$ (el arco que no contiene ningún otro punto indicado).
- El **ángulo inscrito** $\angle APB$ es el ángulo en un punto $P \in \omega$, $P \neq A, B$, cuyos lados pasan por $A$ y $B$.
- El **ángulo semiinscrito** es el ángulo que forma una cuerda con la tangente a la circunferencia en uno de sus extremos.

El **arco $\widehat{AB}$** subtenido por un ángulo es el arco que queda «dentro» del ángulo. Para un ángulo inscrito $\angle APB$, el arco relevante es el que no contiene a $P$.

## Teorema

**(Ángulo inscrito)** El ángulo inscrito $\angle APB$ es igual a la mitad del ángulo central $\angle AOB$ que subtiende el mismo arco:

$$\angle APB \;=\; \frac{1}{2} \angle AOB.$$

**Corolario 1.** Todos los ángulos inscritos que abarcan el mismo arco son iguales.

**Corolario 2.** (Ángulo en semicírculo) Si $AB$ es diámetro de $\omega$, entonces $\angle APB = 90°$ para todo $P \in \omega$, $P \neq A, B$.

**Corolario 3.** (Ángulo semiinscrito = ángulo inscrito) El ángulo que forma una cuerda $AB$ con la tangente a $\omega$ en $A$ es igual al ángulo inscrito en el arco opuesto: $\angle(AB, t_A) = \angle APB$ para $P$ en el arco que no contiene el punto de tangencia.

```geofig
// Ángulo central vs ángulo inscrito sobre el mismo arco AB
size 7 7
circle 0 0 2.8
point  0    0    O  0.18 -0.22
point -2.2  1.7  A -0.25  0.2
point  2.2  1.7  B  0.25  0.2
point  0   -2.8  P  0.1  -0.25
segment O A
segment O B
segment P A
segment P B
arc 0 0 0.5 141 39
arc 0 0 1.1 219 321
label  0   0.8  "∠AOB"
label  0  -1.6  "∠APB"
```

## Demostración

La demostración se divide en tres casos según la posición del centro $O$ respecto al ángulo inscrito.

**Caso 1: $O$ está sobre uno de los lados del ángulo.** Supongamos $O \in PA$ (es decir, $PA$ es un diámetro). Entonces $OA = OP = r$, así el triángulo $OAB$ es isósceles. Sea $\alpha = \angle OAB = \angle OBA$ (ángulos de la base). El ángulo exterior de $\triangle OAB$ en $O$ es $\angle AOB = 180° - (180° - 2\alpha) = 2\alpha$.

Como $O \in PA$, también $\angle APB = \angle OPB$. En el triángulo isósceles $OPB$ ($OP = OB = r$), los ángulos de la base son iguales: $\angle OPB = \angle OBP$. El ángulo exterior en $O$: $\angle POB = 2\angle OPB$.

Pero $\angle AOB = \angle POB$ (mismo ángulo), así $2\alpha = 2\angle APB$, dando $\angle APB = \alpha = \frac{1}{2}\angle AOB$. $\checkmark$

**Caso 2: $O$ está en el interior del ángulo $\angle APB$.** Trazamos el diámetro $PD$ desde $P$. Esto divide la configuración en dos del tipo Caso 1:

$$\angle APD = \frac{1}{2}\angle AOD, \qquad \angle DPB = \frac{1}{2}\angle DOB.$$

Sumando: $\angle APB = \angle APD + \angle DPB = \frac{1}{2}(\angle AOD + \angle DOB) = \frac{1}{2}\angle AOB$. $\checkmark$

**Caso 3: $O$ está en el exterior del ángulo $\angle APB$.** Trazamos el diámetro $PD$ de nuevo. Ahora $D$ está al otro lado:

$$\angle APD = \frac{1}{2}\angle AOD, \qquad \angle DPB = \frac{1}{2}\angle DOB.$$

Restando: $\angle APB = \angle DPB - \angle APD = \frac{1}{2}(\angle DOB - \angle AOD) = \frac{1}{2}\angle AOB$. $\checkmark$

En todos los casos, $\angle APB = \frac{1}{2}\angle AOB$. $\blacksquare$

**Demostración del Corolario 3 (ángulo semiinscrito).** Sea $t$ la tangente a $\omega$ en $A$, y sea $\angle(AB, t) = \beta$. Queremos demostrar $\beta = \angle APB$ donde $P$ está en el arco que no contiene el punto donde $t$ es tangente.

Como $t \perp OA$ (radio perpendicular a la tangente), el ángulo entre $AB$ y el radio $OA$ es $90° - \beta$. Por tanto el ángulo central $\angle AOB = 2(90° - \beta) = 180° - 2\beta$... 

Mejor: en el triángulo $OAB$, $OA = OB = r$, así $\angle OAB = \angle OBA = \frac{180° - \angle AOB}{2}$. El ángulo entre $AB$ y la tangente $t$ (que es perpendicular a $OA$) es $90° - \angle OAB = 90° - \frac{180° - \angle AOB}{2} = \frac{\angle AOB}{2} = \angle APB$.

Luego $\angle(AB, t) = \angle APB$. $\blacksquare$

## Ejemplo

### Ángulos en cuadriláteros cíclicos

**Ejemplo 1.** Sea $ABCD$ un cuadrilátero inscrito en una circunferencia. Demostrar que $\angle BAD + \angle BCD = 180°$ (ángulos opuestos son suplementarios).

Los ángulos $\angle BAD$ y $\angle BCD$ son ángulos inscritos que abarcan arcos complementarios: $\angle BAD$ abarca el arco $\widehat{BCD}$ y $\angle BCD$ abarca el arco $\widehat{BAD}$. Estos dos arcos juntos forman la circunferencia completa ($360°$). Por el teorema, cada ángulo inscrito es la mitad de su arco central, así:

$$\angle BAD + \angle BCD = \frac{1}{2}(360°) = 180°. \qquad \blacksquare$$

---

**Ejemplo 2.** En la circunferencia $\omega$, los puntos $A, B, C, D$ están en ese orden. Probar que $\angle ACD = \angle ABD$.

Ambos son ángulos inscritos que abarcan el arco $\widehat{AD}$ (el que no contiene a $B$ ni a $C$). Por el Corolario 1, son iguales. $\square$

---

**Ejemplo 3.** Sea $P$ un punto sobre la circunferencia circunscrita al triángulo $ABC$, en el arco $\widehat{BC}$ que no contiene a $A$. Demostrar que $\angle BPC = 180° - \angle BAC$.

$\angle BAC$ abarca el arco $\widehat{BC}$ que contiene a $A$ (el arco menor si $A$ es el vértice opuesto al lado más largo). $\angle BPC$ abarca el arco $\widehat{BC}$ que contiene a $P$, que es el arco complementario.

La suma de los dos arcos es $360°$, así $\frac{1}{2}(\text{arco}_1 + \text{arco}_2) = 180°$, dando $\angle BAC + \angle BPC = 180°$. $\blacksquare$

*(Esto confirma que $ABPC$ es cíclico — lo que ya sabíamos — pero la igualdad de arcos es la clave.)*

---

### Ángulo semiinscrito: la tangente-cuerda

**Ejemplo 4.** La tangente a la circunferencia $\omega$ en $A$ forma un ángulo de $40°$ con la cuerda $AB$. ¿Cuánto mide el arco $\widehat{AB}$ que no contiene el punto de tangencia? ¿Y el ángulo inscrito desde el arco opuesto?

Por el Corolario 3: el ángulo semiinscrito $= 40°$ es igual al ángulo inscrito desde el arco opuesto. El arco central correspondiente mide $2 \times 40° = 80°$. El ángulo inscrito desde ese arco es $40°$.

---

**Ejemplo 5.** (Configuración clásica) Dos cuerdas $AB$ y $CD$ de una circunferencia se cortan en el punto interior $P$. Demostrar que $\angle APC = \angle DPB$ y calcular $\angle APC$ en términos de los arcos.

Los ángulos $\angle APC$ y $\angle DPB$ son ángulos opuestos por el vértice en $P$, así son iguales.

Para calcular $\angle APC$: en el triángulo $\triangle APC$, el ángulo en $A$ es $\angle CAB$ (inscrito que abarca $\widehat{BC}$), y el ángulo en $C$ es $\angle ACD$ (inscrito que abarca $\widehat{AD}$). Por la suma de ángulos:

$$\angle APC = 180° - \angle PAC - \angle PCA = 180° - \frac{\widehat{BC}}{2} - \frac{\widehat{AD}}{2} = 180° - \frac{\widehat{BC} + \widehat{AD}}{2}.$$

Pero $360° - \widehat{BC} - \widehat{AD} = \widehat{AB} + \widehat{CD}$, así $\widehat{BC} + \widehat{AD} = 360° - (\widehat{AB} + \widehat{CD})$, y:

$$\angle APC = \frac{\widehat{AB} + \widehat{CD}}{2}.$$

El ángulo formado por dos cuerdas que se cortan es la semisuma de los arcos que las rodean.

---

### Problema olímpico

**Ejemplo 6.** (Eje del ángulo) Sean $AB$ un diámetro de $\omega$ y $C$ un punto de la semicircunferencia. La tangente a $\omega$ en $C$ corta a la recta $AB$ en $T$. Demostrar que $TC$ es bisectriz del ángulo $\angle ACB$.

Como $AB$ es diámetro, $\angle ACB = 90°$ (Corolario 2). Por el ángulo semiinscrito en $C$:

$$\angle(CA, \text{tangente en }C) = \angle CBA, \qquad \angle(CB, \text{tangente en }C) = \angle CAB.$$

Pero $\angle CBA + \angle CAB = 90°$ (suma en triángulo rectángulo). Luego los dos ángulos que la tangente forma con $CA$ y $CB$ son iguales ($45°$ cada uno si el triángulo es isósceles, pero en general se compensan):

$$\angle TCА = \angle CBА, \qquad \angle TCB = \angle CAB.$$

La bisectriz del ángulo recto $\angle ACB$ divide el ángulo en dos de $45°$. La tangente en $C$ es perpendicular al radio $OC$, y la bisectriz de $\angle ACB$ es perpendicular al segmento que une $C$ con el punto medio del arco $\widehat{AB}$... que es $C$ mismo. El argumento directo: $\angle TCA = \angle CBA$ y $\angle TCB = \angle CAB$; como $\angle CBA = \angle CAB = 45°$ exactamente cuando $C$ es el punto medio, esto no da la bisectriz en general.

*Corrección del enunciado:* lo que sí es cierto es que $TC$ **no** es bisectriz de $\angle ACB$ en general; lo que se demuestra via ángulo semiinscrito es que $TC$ es tangente y que $\angle TCA = \angle ABC$ (lo que implica $TA^2 = TB \cdot $ algo, conectando con potencia del punto). Este ejemplo ilustra cómo el ángulo semiinscrito da igualdades de ángulos que permiten detectar paralelismos e isósceles.

## El criterio del cuadrilátero cíclico

## Corolario

Un cuadrilátero $ABCD$ es inscriptible en una circunferencia si y solo si:

**(i)** $\angle BAD + \angle BCD = 180°$ (ángulos opuestos suplementarios), **o equivalentemente,**

**(ii)** $\angle BAC = \angle BDC$ (dos ángulos sobre el mismo lado de $BD$ son iguales), **o equivalentemente,**

**(iii)** $\angle ABD = \angle ACD$ (ángulos sobre el mismo lado de $AD$ son iguales).

## Demostración

$(\Rightarrow)$: Si $ABCD$ es cíclico, la igualdad (ii) sigue del Corolario 1 (ambos ángulos inscritos abarcan el mismo arco $\widehat{AC}$). La condición (i) se demostró en el Ejemplo 1.

$(\Leftarrow)$: Si $\angle BAC = \angle BDC$, entonces $D$ está sobre la circunferencia que pasa por $A$, $B$, $C$ (única circunferencia tal que todos los puntos desde los que $\widehat{AC}$ subtende ese ángulo forman un arco). Luego $ABCD$ es cíclico. $\blacksquare$

**Este criterio es la herramienta más usada para probar que cuatro puntos son concíclicos.** Siempre que se necesita probar concíclicidad, se busca un par de ángulos iguales o suplementarios.

## Aplicaciones

**Detectar puntos concíclicos.** Dado un diagrama con cuatro puntos $A, B, C, D$, para demostrar que son concíclicos:
1. Calcular $\angle BAC$ y $\angle BDC$ (o cualquier par de ángulos «desde el mismo arco»).
2. Si son iguales (y los puntos están en el mismo lado de $BD$), son concíclicos.

**Alturas y el círculo de nueve puntos.** Los pies de las tres alturas de un triángulo son concíclicos: esto se prueba mostrando que ciertos pares de ángulos inscritos son iguales, lo que requiere el teorema del ángulo inscrito aplicado a los cuadriláteros formados por los pies de las alturas y los vértices.

**Tangentes desde un punto exterior.** Si $PT_1$ y $PT_2$ son las dos tangentes desde $P$ a $\omega$, entonces $\angle T_1PT_2 = 180° - \angle T_1OT_2$, y los ángulos semiinscritos en $T_1$ y $T_2$ revelan la simetría de la configuración.

## Observación

**La identificación rápida.** En un diagrama con circunferencias, el primer reflejo debe ser identificar ángulos inscritos sobre el mismo arco: son iguales. Esto genera igualdades de ángulos de forma «gratis», y esas igualdades suelen ser el primer paso de la solución.

**El caso de ángulos sobre arcos opuestos.** Si $P$ y $Q$ están en arcos opuestos del arco $\widehat{AB}$ (uno en cada lado de la cuerda $AB$), entonces $\angle APB + \angle AQB = 180°$. No son iguales sino suplementarios — ¡un error frecuente!

**Generalización al espacio.** En geometría en $\mathbb R^3$, el análogo es que los ángulos inscritos en una esfera sobre el mismo arco de gran círculo son todos iguales. Pero en olimpiadas solo se trabaja en el plano.

## Problemas relacionados

- **(Clásico)** Sea $ABCD$ un cuadrilátero cíclico. Demostrar que $\angle ACB = \angle ADB$.

- **(Clásico)** En la circunferencia $\omega$, $AB$ es diámetro. $C$ y $D$ son puntos de la semicircunferencia con $C$ entre $A$ y $D$. La tangente en $C$ corta a $BD$ en $E$. Demostrar que $CE$ bisecta al ángulo $\angle ACD$.

- **(Clásico)** Sea $\omega$ la circunferencia circunscrita al triángulo $ABC$. La bisectriz desde $A$ corta a $\omega$ en el punto medio $M_A$ del arco $\widehat{BC}$ que no contiene a $A$. Probar que $M_A B = M_A C = M_A I$ donde $I$ es el incentro.

- **(Clásico)** Sea $H$ el ortocentro del triángulo $ABC$. El circuncírculo de $BHC$ tiene radio $R' = R$ (igual que el circuncírculo de $ABC$). Demostrarlo usando el ángulo inscrito.

- **(Teorema de Simson)** Si $P$ es un punto del circuncírculo del triángulo $ABC$, los pies de las perpendiculares desde $P$ a los tres lados son colineales. *(Demostrar usando ángulos inscritos y el criterio de cuatro puntos concíclicos.)*
