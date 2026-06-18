import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  Link,
  TipCard,
  WarningCard,
  renderMath,
} from "../helpers";

export function ErroresComunesAlDerivarContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Por qué seguimos cometiendo los mismos errores al derivar</h2>
        <p>
          El cálculo diferencial castiga los descuidos: un signo mal puesto o una regla aplicada al revés puede
          arruinar un ejercicio entero. Este artículo amplía la lista habitual de fallos con ocho errores
          comunes al derivar (y dos extra), cada uno con explicación, contraejemplo y forma de detectarlo al
          usar una{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>
          . No sustituye estudiar las{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          , pero te ayuda a corregir patrones antes del examen.
        </p>
        <p>
          Si buscas «errores al derivar», «cómo evitar fallos en derivadas» o «ejercicios de derivadas sin
          errores», la clave es nombrar la regla antes de calcular. Los párrafos siguientes están pensados como
          derivadas paso a paso en formato narrativo: lee el error, cierra la solución y vuelve a intentarlo en
          la galería de{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            /ejemplos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="lista-errores">Los diez errores que más aparecen en exámenes</h2>
        <p>
          Cada apartado tiene un identificador para la tabla de contenidos. Marca en tu cuaderno los que
          reconozcas; repásalos el día antes del parcial con problemas tomados al azar.
        </p>

        <h3 id="error-producto">Error 1: derivar un producto factor a factor</h3>
        <p>
          Dado {renderMath("f(x)=x^2\\sin x")}, es falso escribir {renderMath("f'(x)=2x\\cdot\\cos x")}. La
          regla del producto exige derivar cada factor y sumar:
        </p>
        <FormulaCard title="Regla del producto">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <ExampleCard
          title="Corrección: x² sin(x)"
          steps={[
            "u = x² → u′ = 2x; v = sin x → v′ = cos x.",
            "f′ = 2x·sin x + x²·cos x.",
            "Comprueba con la calculadora: x^2*sin(x).",
          ]}
        >
          {renderMath("f'(x)=2x\\sin x + x^2\\cos x", true)}
        </ExampleCard>
        <p>
          Señal de alarma: tu resultado parece un solo término mezclando potencias y trigonométricas sin suma.
          Repasa{" "}
          <Link href="/blog/ejemplos-de-derivadas-resueltas" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>{" "}
          (sección producto).
        </p>

        <h3 id="error-cadena">Error 2: olvidar el factor interno en la regla de la cadena</h3>
        <p>
          Para {renderMath("\\sin(3x)")}, escribir solo {renderMath("\\cos(3x)")} omite el 3. La derivada
          interna de {renderMath("3x")} es 3.
        </p>
        <ExampleCard
          title="Cadena completa"
          steps={[
            "Capa externa: sin → cos.",
            "Capa interna: 3x → 3.",
            "Resultado: 3 cos(3x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\sin(3x)=3\\cos(3x)", true)}
        </ExampleCard>
        <p>
          Profundiza en{" "}
          <Link href="/blog/entendiendo-regla-de-la-cadena" className="text-violet-600 font-semibold hover:underline">
            entendiendo la regla de la cadena
          </Link>{" "}
          y en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            ejercicios de la cadena
          </Link>
          .
        </p>

        <h3 id="error-cociente">Error 3: mal aplicar la regla del cociente</h3>
        <p>
          En {renderMath("\\dfrac{\\sin x}{x}")}, no basta «derivar arriba y abajo por separado sin fórmula».
          El orden del numerador menos denominador por la derivada del numerador importa. Un desarrollo correcto
          lleva a {renderMath("\\dfrac{x\\cos x - \\sin x}{x^2}")}; si tu denominador no es el cuadrado del
          original, detente y revisa.
        </p>
        <p>
          Cuando el cociente se puede simplificar antes (por ejemplo {renderMath("(x^2-1)/(x-1)")} para x ≠ 1),
          a veces conviene simplificar la función original, pero en evaluaciones formales el dominio importa:
          pregunta si el profesor permite cancelar o exige derivar la forma dada.
        </p>
        <FormulaCard title="Regla del cociente">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <WarningCard>
          Muchos estudiantes invierten el signo del menos central o olvidan elevar el denominador al cuadrado.
        </WarningCard>

        <h3 id="error-potencia-constante">Error 4: derivar potencias como si la base fuera variable</h3>
        <p>
          {renderMath("2^x")} no es {renderMath("x^2")}. La derivada de {renderMath("a^x")} es{" "}
          {renderMath("a^x \\ln a")}; la de {renderMath("x^n")} es {renderMath("nx^{n-1}")}. Mezclar familias
          es un error clásico en ejercicios de derivadas con exponenciales.
        </p>
        <ExampleCard title="2^x vs x²">
          {renderMath("\\dfrac{d}{dx}2^x = 2^x\\ln 2,\\qquad \\dfrac{d}{dx}x^2 = 2x", true)}
        </ExampleCard>

        <h3 id="error-arcsin">Error 5: confundir sin(x) con arcsin(x)</h3>
        <p>
          {renderMath("\\sin^{-1}(x)")} o arcsin no tiene derivada {renderMath("\\cos x")}. Es{" "}
          {renderMath("1/\\sqrt{1-x^2}")} en el dominio habitual. Lo mismo aplica a arccos y arctan.
        </p>
        <p>
          Trigonométricas directas:{" "}
          <Link href="/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>
          ,{" "}
          <Link href="/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            cos(x)
          </Link>
          ,{" "}
          <Link href="/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>
          .
        </p>

        <h3 id="error-ln-log">Error 6: ln, log y falta de valor absoluto</h3>
        <p>
          {renderMath("\\ln x")} deriva a {renderMath("1/x")} (x &gt; 0). En {renderMath("\\ln|u|")} con cadena
          obtienes {renderMath("u'/u")}. Confundir logaritmo en base 10 con natural lleva a factores erróneos.
        </p>
        <TipCard>
          Antes de derivar, identifica la base del logaritmo. En cálculo estándar universitario, «log» sin
          aclarar a menudo significa ln en contexto europeo, pero verifica el convención de tu libro.
        </TipCard>

        <h3 id="error-coseno-signo">Error 7: olvidar el signo negativo en la derivada del coseno</h3>
        <p>
          {renderMath("\\cos'(x) = -\\sin x")}. Si obtienes {renderMath("+\\sin x")}, revisa inmediatamente.
          Este fallo se propaga en productos y cocientes que incluyen coseno.
        </p>

        <h3 id="error-implicita">Error 8: derivación implícita incompleta</h3>
        <p>
          En {renderMath("x^2 + y^2 = 25")}, derivar respecto a x implica tratar y como función de x. El término{" "}
          {renderMath("y^2")} da {renderMath("2y \\cdot y'")}, no solo {renderMath("2y")}. Despeja {renderMath("y'")}
          al final si buscas la pendiente.
        </p>
        <ExampleCard
          title="Círculo x² + y² = 25"
          steps={[
            "Deriva: 2x + 2y y′ = 0.",
            "y′ = −x/y (donde y ≠ 0).",
            "Interpreta: pendiente de la tangente al círculo.",
          ]}
        >
          {renderMath("y'=-\\dfrac{x}{y}", true)}
        </ExampleCard>

        <h3 id="error-simplificar-antes">Error 9: simplificar demasiado pronto o no simplificar al final</h3>
        <p>
          Dos extremos perjudican: borrar sumandos «que parecen repetidos» antes de derivar, o dejar un resultado
          factorizado imposible de comparar con la clave del profesor. Deriva primero con reglas exactas;
          simplifica después con álgebra cuidadosa.
        </p>

        <h3 id="error-parcial">Error 10: mezclar derivada parcial con ordinaria</h3>
        <p>
          En {renderMath("f(x,y)=x^2y")}, al derivar respecto a x, y es constante → {renderMath("2xy")}. Si
          derivas como si y fuera función de x sin justificación, el procedimiento se invalida. Consulta{" "}
          <Link href="/blog/derivadas-parciales-ejemplos" className="text-violet-600 font-semibold hover:underline">
            derivadas parciales: ejemplos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="metodo-revision">Método de revisión en cinco minutos</h2>
        <p>
          Tras cada ejercicio de derivadas, responde mentalmente: ¿producto, cociente, cadena o tabla directa?
          ¿Hay composición dentro de sin, ln o potencia? ¿La variable es x y solo x? Introduce la expresión en la
          calculadora y lee las derivadas paso a paso: si el motor nombra una regla que tú no usaste, ahí está la
          discrepancia.
        </p>
        <p>
          El tutorial{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>{" "}
          ayuda a escribir bien paréntesis; un error de sintaxis puede parecer error de regla.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="practica-correccion">Práctica dirigida: convierte errores en aciertos</h2>
        <p>
          Elige dos errores de la lista que te hayan pasado en el último mes. Busca en{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            /ejemplos
          </Link>{" "}
          un problema que active ese patrón (producto, cadena, etc.). Resuélvelo dos veces el mismo día: la
          segunda vez debería ser más rápida y sin el fallo original.
        </p>
        <p>
          Si empiezas el curso, enlaza con{" "}
          <Link href="/blog/como-aprender-derivadas-desde-cero" className="text-violet-600 font-semibold hover:underline">
            cómo aprender derivadas desde cero
          </Link>
          . Si ya dominas técnicas pero fallas en detalle, este artículo es tu checklist.
        </p>
        <p>
          Palabras clave naturales: calculadora de derivadas online, resolver derivadas online, derivadas
          universitarias, ejercicios de derivadas resueltos y derivadas fáciles que en realidad esconden
          composición. Nombrar la regla correcta convierte un ejercicio «difícil» en uno mecánico y verificable.
        </p>
      </section>

      <section>
        <h2 id="resumen">Resumen ejecutivo</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Producto y cociente: fórmulas completas, no atajos.</li>
          <li>Cadena: nunca olvides g′(x).</li>
          <li>Trigonométricas inversas ≠ directas.</li>
          <li>Exponenciales y potencias: familias distintas.</li>
          <li>Implícitas y parciales: etiqueta la variable activa.</li>
          <li>Verifica con calculadora y galería de ejemplos.</li>
        </ul>
        <p className="mt-4">
          Con disciplina, los mismos errores comunes al derivar desaparecen en pocas semanas de práctica
          deliberada. Usa este artículo como referencia viva hasta el día del examen.
        </p>
      </section>
    </ArticleWrap>
  );
}
