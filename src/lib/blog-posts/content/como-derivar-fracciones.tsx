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

export function ComoDerivarFraccionesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Cómo derivar fracciones: panorama general</h2>
        <p>
          Las funciones racionales —cocientes de polinomios— aparecen en casi todo programa de cálculo
          diferencial. Derivar una fracción no es «derivar arriba y abajo por separado y dividir»; esa
          regla falsa es una de las causas principales de puntos perdidos en exámenes. El procedimiento
          correcto es la regla del cociente, que combina las derivadas del numerador y del denominador
          en una sola expresión con el cuadrado del denominador en el denominador del resultado.
        </p>
        <p>
          En esta guía verás la fórmula, cuándo simplificar antes o después, fracciones con
          exponenciales o trigonometría en alguno de los factores, y ejemplos resueltos enlazados con
          la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas paso a paso
          </Link>
          . Si el numerador o denominador es una composición, necesitarás la{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena
          </Link>{" "}
          dentro de u′ o v′. La tabla completa está en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
        <p>
          Muchas búsquedas del tipo «cómo derivar fracciones» o «derivada de un cociente» apuntan al
          mismo objetivo: dominar (u/v)′ con fluidez y saber reconocer si conviene reescribir la
          fracción antes de derivar (por ejemplo, separando términos cuando la división es exacta).
        </p>
      </section>

      <section>
        <h2 id="regla-cociente">Regla del cociente</h2>
        <FormulaCard title="Derivada de u(x)/v(x)">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Memoriza el orden: u′v menos u v′. Un mnemotécnico útil: «bajo por derivada de arriba, menos
          arriba por derivada de abajo, todo sobre bajo al cuadrado». El signo menos es crítico; invertir
          el orden cambia el signo del resultado completo.
        </p>
        <TipCard>
          Antes de aplicar la regla, comprueba si la función es realmente un cociente. (x² + 3)/5 es un
          polinomio escalado: deriva término a término sin cociente. (x² + 3)/(x − 1) sí requiere la regla.
        </TipCard>
      </section>

      <section>
        <h2 id="estrategia">Estrategia antes de derivar</h2>
        <h3 id="simplificar">Simplificar algebraica mente</h3>
        <p>
          Si el denominador divide al numerador (polinomios), la división larga o la factorización pueden
          convertir la fracción en suma de polinomios más restos. Derivar sumas es más estable que un
          cociente con v² en el denominador. No siempre conviene: a veces la forma cociente es más clara
          para evaluar en un punto.
        </p>
        <h3 id="logaritmica">Derivación logarítmica (adelanto)</h3>
        <p>
          Para productos y cocientes con muchas potencias, ln|f| y luego derivar implícitamente acorta
          trabajo. Es un capítulo posterior; aquí nos centramos en la regla del cociente directa.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos resueltos</h2>

        <ExampleCard
          title="Ejemplo 1: x/(x + 1)"
          steps={[
            "u = x, u′ = 1; v = x + 1, v′ = 1.",
            "(uv′) = x; u′v = x + 1.",
            "u′v − uv′ = 1; v² = (x + 1)².",
            "f′(x) = 1/(x + 1)².",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{x}{x+1} = \\dfrac{1\\cdot(x+1) - x\\cdot 1}{(x+1)^2} = \\dfrac{1}{(x+1)^2}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 2: (x² − 1)/(x² + 1)"
          steps={[
            "u′ = 2x, v′ = 2x.",
            "Numerador de la regla: 2x(x²+1) − (x²−1)2x = 4x.",
            "Denominador: (x² + 1)².",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{x^2-1}{x^2+1} = \\dfrac{4x}{(x^2+1)^2}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 3: sin x / cos x (tangente)"
          steps={[
            "u = sin x, v = cos x.",
            "u′ = cos x, v′ = −sin x.",
            "Simplifica usando sin²+cos²=1.",
          ]}
        >
          <p className="mb-3">
            Relacionado con{" "}
            <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
              derivada de tan(x)
            </Link>
            : el cociente sin/cos recupera sec²(x).
          </p>
          {renderMath("\\dfrac{d}{dx}\\dfrac{\\sin x}{\\cos x} = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\sec^2 x", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 4: e^x / x"
          steps={[
            "u′ = e^x, v′ = 1.",
            "u′v − uv′ = e^x(x − 1).",
            "f′(x) = e^x(x − 1)/x².",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{e^x}{x} = \\dfrac{e^x(x-1)}{x^2}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 5: (2x + 1)³ / (x − 2)²"
          steps={[
            "u′ requiere cadena: 6(2x+1)²·2.",
            "v′ requiere cadena: 2(x−2)·1.",
            "Sustituye en u′v − uv′ y factoriza con paciencia.",
          ]}
        >
          <p>
            Este tipo de ejercicio mezcla cociente y cadena; practica la descomposición en{" "}
            <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
              regla de la cadena con ejercicios
            </Link>
            .
          </p>
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 6: 1/xⁿ como potencia"
          steps={[
            "Reescribe x⁻ⁿ y deriva con regla de la potencia.",
            "Compara con la regla del cociente: mismo resultado.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{1}{x^n} = \\dfrac{d}{dx}x^{-n} = -n x^{-n-1} = -\\dfrac{n}{x^{n+1}}", true)}
        </ExampleCard>

        <WarningCard>
          No simplifiques incorrectamente (u′/v′). Tampoco olvides elevar v al cuadrado en el denominador
          final: es v², no 2v.
        </WarningCard>
      </section>

      <section>
        <h2 id="producto-vs-cociente">¿Producto o cociente?</h2>
        <p>
          A veces una expresión admite ambas lecturas. x/e^x puede verse como producto x·e^(−x) o como
          cociente. Elige la forma que minimice errores: si ya dominas la regla del producto con
          exponenciales negativas, úsala; si te resulta más natural el cociente, aplica (u/v)′. El
          resultado final debe coincidir; si no coincide, revisa signos y v².
        </p>
        <FormulaCard title="Regla del producto (alternativa)">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <p>
          En exámenes de cálculo diferencial no hay «método oficial» único, sino corrección algebraica.
          Lo que sí penalizan es mezclar reglas: aplicar cociente a un producto sin reescribir.
        </p>
      </section>

      <section>
        <h2 id="racionales">Funciones racionales y dominio</h2>
        <p>
          Los puntos donde v(x) = 0 no pertenecen al dominio: la derivada puede existir en torno a ellos
          pero la función original tiene discontinuidad. Al estudiar gráficas, combina f′ con signos de
          numerador y denominador de f. La derivada de una fracción suele ser otra fracción más
          complicada; factorizar el numerador de f′ ayuda a encontrar críticos.
        </p>
        <p>
          Para curvas definidas por ecuaciones fraccionarias o implícitas, consulta{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas paso a paso
          </Link>
          . Para repaso desde cero,{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="errores">Errores frecuentes al derivar cocientes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Usar (u′/v′) en lugar de (u′v − uv′)/v².</li>
          <li>Olvidar el cuadrado en v² o derivar el denominador solo una vez sin regla.</li>
          <li>Perder un signo menos en u′v − uv′.</li>
          <li>No aplicar cadena dentro de u o v cuando hay composición.</li>
          <li>Confundir (f/g)′ con f′/g′.</li>
        </ul>
        <p className="mt-4">
          Contrasta tus pasos con la galería de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          y con el artículo de{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          si mezclas trigonometría en el cociente.
        </p>
      </section>

      <section>
        <h2 id="ejercicios-extra">Más ejercicios de cocientes</h2>
        <p>
          Practica derivar (x² + 1)/(x − 2), (sin x)/(x² + 1), (ln x)/x² y (3x − 1)/(x² + 4x + 3).
          En el último, factoriza el denominador si puedes para simplificar f′ después. Cuando el
          numerador sea cero en un punto, la tangente puede ser horizontal; cuando f′ no exista por
          v = 0, anota la discontinuidad en tu cuaderno.
        </p>
        <p>
          Las fracciones aparecen también en reglas de derivación de funciones inversas y en límites
          indeterminados del tipo 0/0 más adelante en el curso; dominar el cociente aquí te ahorra
          tiempo en capítulos futuros.
        </p>
      </section>

      <section>
        <h2 id="practica">Practicar cocientes con herramientas online</h2>
        <p>
          Cuando el denominador es una potencia de un binomio, como (x² − 4)⁻², puedes reescribir y
          usar regla de la potencia con cadena en lugar del cociente explícito. Ambos caminos son
          válidos; elige el que produzca menos oportunidades de error de signo para ti. En tutorías
          vemos que quien domina cociente primero y potencia después tiene más flexibilidad en
          simplificación posterior.
        </p>
        <p>
          Si tu curso incluye asíntotas y gráficas racionales, f′ te dice dónde la función crece o
          decrece, pero el análisis completo también usa límites laterales en puntos donde v se anula.
          Derivar correctamente la fracción es solo el primer paso de un estudio de curva completo.
        </p>
        <p>
          Introduce cocientes con paréntesis claros: (x^2+1)/(x-1). Revisa que el software aplique
          «regla del cociente» o equivalente en el desglose. Lee{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>{" "}
          para interpretar cada línea. Explora más en el{" "}
          <Link href="/blog" className="text-violet-600 font-semibold hover:underline">
            blog
          </Link>
          .
        </p>
        <CalcCTA />
      </section>
    </ArticleWrap>
  );
}
