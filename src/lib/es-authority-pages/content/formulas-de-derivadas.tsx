import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  RelatedCalculatorsBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
  ROUTES,
  EN_ROUTES,
} from "../helpers";

export function FormulasDeDerivadasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Introducción a las fórmulas de derivadas</h2>
        <p>
          Las fórmulas de derivadas son el vocabulario esencial del cálculo: expresiones compactas que resumen cómo
          cambia cada familia de funciones. Esta guía organiza las fórmulas por categoría (algebraicas, trigonométricas,
          exponenciales, logarítmicas y reglas de combinación) para que puedas consultarlas durante el estudio o antes
          de un examen. No sustituyen el razonamiento, pero aceleran el reconocimiento cuando ya sabes qué regla
          aplicar.
        </p>
        <p>
          Mantén abierta la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>{" "}
          para verificar cada fórmula con un ejemplo numérico o simbólico. Complementa esta página con las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          (explicación conceptual) y la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          (consulta rápida). Equivalente en inglés:{" "}
          <Link href={EN_ROUTES.derivativeFormulas} className="text-violet-600 font-semibold hover:underline">
            derivative formulas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="algebraicas">Fórmulas algebraicas básicas</h2>
        <FormulaCard title="Constante, identidad y potencia">
          {renderMath("\\dfrac{d}{dx}c = 0, \\quad \\dfrac{d}{dx}x = 1, \\quad \\dfrac{d}{dx}x^n = n x^{n-1}", true)}
        </FormulaCard>
        <p>
          La derivada de una constante c es cero porque no depende de x. La de x es 1. La regla de la potencia cubre
          polinomios, raíces y potencias negativas siempre que el dominio lo permita: por ejemplo, x^(−2) deriva a
          −2x^(−3).
        </p>
        <ExampleCard
          title="Polinomio 3x⁴ − 5x² + 7"
          steps={[
            "Aplica potencia término a término.",
            "12x³ − 10x + 0.",
            "Resultado: 12x³ − 10x.",
          ]}
        />
        <p>
          Para fracciones algebraicas simples, a veces conviene reescribir antes de derivar: 1/x² = x^(−2) evita el
          cociente si el numerador es constante.
        </p>
      </section>

      <section>
        <h2 id="linealidad-formulas">Linealidad y combinaciones lineales</h2>
        <FormulaCard title="Suma y escalar">
          {renderMath("(f \\pm g)' = f' \\pm g', \\quad (cf)' = c f'", true)}
        </FormulaCard>
        <p>
          Cualquier combinación lineal de funciones derivables se deriva término a término. Esto explica por qué
          2sin(x) + 3cos(x) deriva a 2cos(x) − 3sin(x) sin necesidad de reglas adicionales: solo linealidad más
          fórmulas trigonométricas básicas.
        </p>
      </section>

      <section>
        <h2 id="producto-cociente">Fórmulas de producto y cociente</h2>
        <FormulaCard title="Producto y cociente">
          {renderMath("(uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Memoriza las fórmulas, pero prioriza reconocer la estructura. Un producto x·e^x necesita UV; un cociente
          (x²+1)/(x−1) necesita la regla del cociente salvo que simplifiques algebraicamente primero. La{" "}
          <Link href={ES_CALCULATOR_ROUTES.productRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del producto
          </Link>{" "}
          y la{" "}
          <Link href={ES_CALCULATOR_ROUTES.quotientRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del cociente
          </Link>{" "}
          muestran u, v y sus derivadas paso a paso.
        </p>
        <WarningCard>
          Nunca confundas (uv)′ con u′v′ ni (u/v)′ con u′/v′. Son errores entre los más frecuentes en bachillerato y
          primer curso universitario.
        </WarningCard>
      </section>

      <section>
        <h2 id="cadena-formula">Fórmula de la regla de la cadena</h2>
        <FormulaCard title="Composición">
          {renderMath("\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          Casos típicos: sin(2x) → 2cos(2x); ln(x²+1) → 2x/(x²+1); e^(3x) → 3e^(3x). La cadena aparece también dentro
          de productos y cocientes: en (x²+1)^5 sin(x), primero identificas el producto y dentro de cada factor puede
          haber cadena.
        </p>
        <TipCard>
          Subraya la función interior antes de derivar. Ese hábito visual reduce olvidos del factor g′(x).
        </TipCard>
        <p>
          Practica con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla de la cadena
          </Link>{" "}
          y los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>{" "}
          de este sitio.
        </p>
      </section>

      <section>
        <h2 id="trigonometricas-formulas">Fórmulas trigonométricas</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sin x", "cos x"],
                ["cos x", "−sin x"],
                ["tan x", "sec² x"],
                ["cot x", "−csc² x"],
                ["sec x", "sec x tan x"],
                ["csc x", "−csc x cot x"],
              ].map(([f, fp]) => (
                <tr key={f}>
                  <td className="border border-slate-200 px-4 py-3">{f}</td>
                  <td className="border border-slate-200 px-4 py-3">{fp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Recuerda que x debe estar en radianes en cálculo estándar. Para sin(3x), aplica cadena: 3cos(3x). Guías del
          blog:{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin x
          </Link>
          ,{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos x
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="inversas">Funciones trigonométricas inversas</h2>
        <FormulaCard title="Arcoseno, arcocoseno, arcotangente">
          {renderMath(
            "\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}",
            true
          )}
        </FormulaCard>
        <p>
          Los dominios importan: arcsin y arccos requieren |x| &lt; 1 en la fórmula estándar. Con argumento compuesto
          g(x), multiplica por g′(x). Estas fórmulas suelen aparecer en cursos avanzados de bachillerato o primer
          semestre universitario.
        </p>
      </section>

      <section>
        <h2 id="exponenciales-log">Exponenciales y logaritmos</h2>
        <FormulaCard title="Exp y log">
          {renderMath(
            "\\frac{d}{dx}e^x = e^x, \\quad \\frac{d}{dx}a^x = a^x \\ln a, \\quad \\frac{d}{dx}\\ln x = \\frac{1}{x}, \\quad \\frac{d}{dx}\\log_a x = \\frac{1}{x \\ln a}",
            true
          )}
        </FormulaCard>
        <p>
          La exponencial natural es la única (salvo escalar) cuya derivada coincide consigo misma. Para ln(g(x)), la
          fórmula compacta es g′(x)/g(x). La{" "}
          <Link href="/reglas-de-derivacion#derivacion-logaritmica" className="text-violet-600 font-semibold hover:underline">
            derivación logarítmica
          </Link>{" "}
          extiende esto a productos y potencias con exponente variable. Fórmulas rápidas por función en la{" "}
          <Link href={`${ES_AUTHORITY_ROUTES.tablaDeDerivadas}#derivada-de-ex`} className="text-violet-600 font-semibold hover:underline">
            tabla: e^x, 1/x, x²
          </Link>
          .
        </p>
        <ExampleCard
          title="Derivar ln(x² + 1)"
          steps={[
            "Cadena: derivada exterior 1/(x²+1).",
            "Derivada interior: 2x.",
            "Resultado: 2x/(x²+1).",
          ]}
        />
      </section>

      <section>
        <h2 id="hiperbolicas">Hiperbólicas (referencia)</h2>
        <p>
          En algunos planes de estudio aparecen sinh, cosh y tanh. Sus derivadas son: (sinh x)′ = cosh x, (cosh x)′ =
          sinh x, (tanh x)′ = sech² x. Se comportan de forma análoga a las trigonométricas circulares, lo que facilita
          su memorización por paralelismo.
        </p>
      </section>

      <section>
        <h2 id="orden-superior-formulas">Fórmulas de orden superior</h2>
        <p>
          Derivar dos veces aplica las mismas reglas a la primera derivada. Ejemplos útiles: (sin x)″ = −sin x;
          (cos x)″ = −cos x; (e^x)⁽ⁿ⁾ = e^x. Para polinomios de grado n, la derivada (n+1)-ésima es cero. La{" "}
          <Link href={ES_CALCULATOR_ROUTES.secondDerivative} className="text-violet-600 font-semibold hover:underline">
            calculadora de segunda derivada
          </Link>{" "}
          automatiza este proceso.
        </p>
      </section>

      <section>
        <h2 id="como-memorizar">Cómo memorizar sin perder el sentido</h2>
        <p>
          Agrupa fórmulas por familia y practica con un ejemplo cada vez que añades una fila a tu tabla mental. No
          memorices listas aisladas: enlaza sin con cos (−signo), tan con sec² (cociente de sin/cos), ln con 1/x
          (inversa de e^x). Repasa semanalmente con la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          cubierta y un problema por categoría al descubierto.
        </p>
        <p>
          Si olvidas una fórmula en examen, a veces puedes recuperarla con cociente o cadena desde sin y cos. Por
          ejemplo, tan x = sin x / cos x y la regla del cociente reproduce sec² x. Ese razonamiento de respaldo vale
          más que memorizar sin entender.
        </p>
        <p>
          Combina lectura de fórmulas con práctica activa en{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          y en la página de{" "}
          <Link href={ROUTES.ejemplos} className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          . La retención mejora cuando cada fórmula se asocia a un problema que ya resolviste correctamente al menos
          una vez.
        </p>
      </section>

      <section>
        <h2 id="parciales-formula">Notación de derivadas parciales</h2>
        <p>
          En varias variables, ∂f/∂x trata las demás letras como constantes. Las mismas fórmulas de potencia y
          trigonométricas aplican; solo cambia qué símbolos son «constantes» en ese paso. La{" "}
          <Link href={ES_CALCULATOR_ROUTES.partialDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas parciales
          </Link>{" "}
          acepta expresiones en x, y, z y muestra el paso con la variable elegida.
        </p>
      </section>

      <section>
        <h2 id="diferenciales">Diferenciales (dy vs. dy/dx)</h2>
        <p>
          La derivada dy/dx es una razón de tasas de cambio. El diferencial dy = f′(x) dx es un cambio aproximado en y
          cuando x varía un poco (dx). No son lo mismo: dy/dx es una función; dy depende también de cuánto mueves x.
        </p>
        <FormulaCard title="Aproximación lineal y diferencial">
          {renderMath("dy = f'(x)\\,dx \\quad\\Leftrightarrow\\quad \\Delta y \\approx f'(x)\\,\\Delta x", true)}
        </FormulaCard>
        <p>
          Ejemplo: si f(x) = x², entonces dy = 2x·dx. Cerca de x = 3, un incremento dx = 0.01 da dy ≈ 0.06, mientras
          f(3.01) − f(3) ≈ 0.0601. Usa la calculadora de recta tangente para ver f′(a) como pendiente de esa
          aproximación. Consulta también las entradas de funciones comunes en la{" "}
          <Link href={`${ES_AUTHORITY_ROUTES.tablaDeDerivadas}#funciones-comunes`} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>
          .
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.formulasDeDerivadas} />
    </ArticleWrap>
  );
}
