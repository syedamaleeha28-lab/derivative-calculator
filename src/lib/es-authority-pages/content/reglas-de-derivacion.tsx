import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  InternalLinksBlock,
  RelatedCalculatorsBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
  ROUTES,
  EN_ROUTES,
} from "../helpers";

export function ReglasDeDerivacionContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="vision-general">Visión general de las reglas de derivación</h2>
        <p>
          Las reglas de derivación son la gramática del cálculo diferencial: te indican cómo derivar combinaciones de
          funciones sin volver a la{" "}
          <Link href="/como-funciona#derivada-por-definicion" className="text-violet-600 font-semibold hover:underline">
            definición por límites
          </Link>{" "}
          en cada problema. Esta guía reúne la regla de la potencia,
          la regla del producto, la regla del cociente, la regla de la cadena y las derivadas estándar de funciones
          trigonométricas, logarítmicas y exponenciales en un solo lugar, con tablas de referencia, consejos de cuándo
          usar cada técnica y enlaces a recursos especializados del blog. Mantén abierta nuestra{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          mientras estudias para poder nombrar la regla en cada paso.
        </p>
        <p>
          Una estrategia exitosa es reconocer primero y algebraizar después: identifica la estructura externa (suma,
          producto, cociente, composición), aplica la regla correspondiente y simplifica. La mayoría de errores en
          exámenes provienen de una mala clasificación: tratar un producto como una composición, o olvidar el factor
          interno de la cadena.           Si aún no dominas el concepto, repasa{" "}
          <Link href="/como-funciona#glosario" className="text-violet-600 font-semibold hover:underline">
            el glosario de cálculo diferencial
          </Link>{" "}
          y{" "}
          <Link href={ROUTES.comoFunciona} className="text-violet-600 font-semibold hover:underline">
            cómo funciona una derivada
          </Link>{" "}
          antes de memorizar fórmulas.
        </p>
        <p>
          Este clúster de guías en español enlaza con{" "}
          <Link href={ES_AUTHORITY_ROUTES.formulasDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            fórmulas de derivadas
          </Link>
          ,{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>{" "}
          y la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>
          . La versión en inglés equivalente está en{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="linealidad">Linealidad y constantes</h2>
        <FormulaCard title="Suma y múltiplo constante">
          {renderMath("(f + g)' = f' + g', \\quad (cf)' = c f'", true)}
        </FormulaCard>
        <p>
          La derivada de una suma es la suma de las derivadas. Las constantes se factorizan hacia fuera; la derivada de
          una constante aislada es cero. Estas reglas permiten derivar polinomios término a término y dividir
          expresiones complicadas en piezas manejables antes de aplicar producto o cociente.
        </p>
        <ExampleCard
          title="Ejemplo: 4x³ − 2x + 9"
          steps={["Término a término: 12x² − 2.", "La constante 9 aporta 0."]}
        />
        <p>
          La linealidad también justifica por qué puedes sacar factores numéricos: la derivada de 7sin(x) es 7cos(x).
          Cuando varias reglas compiten, la suma casi siempre se resuelve primero: descompón, deriva cada summando y
          vuelve a agrupar.
        </p>
      </section>

      <section>
        <h2 id="potencia">Regla de la potencia</h2>
        <FormulaCard title="Regla de la potencia">
          {renderMath("\\dfrac{d}{dx} x^n = n x^{n-1}", true)}
        </FormulaCard>
        <p>
          Para cualquier exponente real n (con restricciones de dominio en algunos casos), multiplica por el exponente
          y réstale uno. El caso especial n = 0 da una constante, cuya derivada es cero. Raíces como √x se escriben
          como potencias fraccionarias: x^(1/2) deriva a (1/2)x^(−1/2).
        </p>
        <p>
          En la{" "}
          <Link href={ES_AUTHORITY_ROUTES.formulasDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            guía de fórmulas
          </Link>{" "}
          encontrarás más casos con exponentes negativos y fraccionarios organizados en tablas.
        </p>
      </section>

      <section>
        <h2 id="producto">Regla del producto</h2>
        <FormulaCard title="Regla del producto">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <p>
          Úsala cuando una función se escribe como producto de dos factores más simples, ninguno de los cuales es un
          múltiplo constante trivial del otro. Mnemotecnia: «la primera por la derivada de la segunda más la segunda
          por la derivada de la primera».
        </p>
        <ExampleCard
          title="Ejemplo: x²·sin(x)"
          steps={["u = x², v = sin x.", "u′ = 2x, v′ = cos x.", "Resultado: 2x sin x + x² cos x."]}
        />
        <p>
          Practica con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.productRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del producto
          </Link>{" "}
          para ver desgloses paso a paso de u y v.
        </p>
      </section>

      <section>
        <h2 id="cociente">Regla del cociente</h2>
        <FormulaCard title="Regla del cociente">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Aplícala a cocientes u/v cuando la función no sea una potencia simple ni una división polinómica reescribible.
          Mnemotecnia: «bajo por derivada de arriba menos arriba por derivada de abajo, sobre abajo al cuadrado». En el
          blog tienes{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>{" "}
          con ejemplos extendidos.
        </p>
        <p>
          La{" "}
          <Link href={ES_CALCULATOR_ROUTES.quotientRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del cociente
          </Link>{" "}
          etiqueta u, v, u′ y v′ explícitamente.
        </p>
      </section>

      <section>
        <h2 id="cadena">Regla de la cadena</h2>
        <FormulaCard title="Regla de la cadena">
          {renderMath("\\dfrac{d}{dx} f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          Úsala cuando una función está anidada dentro de otra: sin(3x), (x²+1)^5, e^(x³), ln(cos x). Identifica la
          función exterior f y la interior g; deriva la exterior evaluada en la interior y multiplica por la derivada de
          la interior.
        </p>
        <ExampleCard
          title="Ejemplo: cos(x³)"
          steps={[
            "Exterior: cos(·), derivada −sin(·).",
            "Interior: x³, derivada 3x².",
            "Resultado: −3x² sin(x³).",
          ]}
        />
        <p>
          Refuerza con{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            ejercicios de regla de la cadena
          </Link>{" "}
          y la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla de la cadena
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="trigonometricas">Derivadas trigonométricas</h2>
        <p>
          Las tres razones básicas: (sin x)′ = cos x, (cos x)′ = −sin x, (tan x)′ = sec² x. Las recíprocas siguen del
          cociente: (cot x)′ = −csc² x, (sec x)′ = sec x tan x, (csc x)′ = −csc x cot x. Las inversas (arcsen, arccos,
          arctan) tienen fórmulas propias, normalmente después de la cadena.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin x</td>
                <td className="border border-slate-200 px-4 py-3">cos x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cos x</td>
                <td className="border border-slate-200 px-4 py-3">−sin x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">tan x</td>
                <td className="border border-slate-200 px-4 py-3">sec² x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <InternalLinksBlock
          heading="Profundiza en trigonometría"
          links={[
            { href: "/derivada-de-sin-x", label: "Derivada de sin(x)", desc: "Definición y regla de la cadena" },
            { href: "/derivada-de-cos-x", label: "Derivada de cos(x)", desc: "El signo menos y composiciones" },
            { href: "/derivada-de-tan-x", label: "Derivada de tan(x)", desc: "Demostración de sec²(x)" },
          ]}
        />
      </section>

      <section>
        <h2 id="log-exp">Logaritmos y exponenciales</h2>
        <FormulaCard title="Log y exp">
          {renderMath("\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}, \\quad \\dfrac{d}{dx} e^x = e^x, \\quad \\dfrac{d}{dx} a^x = a^x \\ln a", true)}
        </FormulaCard>
        <p>
          El logaritmo natural y la exponencial de base e son inversas; sus derivadas reflejan esa simetría. Para
          ln(g(x)), usa g′/g. Para e^(g(x)), usa e^(g(x))·g′(x). Consulta la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          para repasar de un vistazo.
        </p>
      </section>

      <section>
        <h2 id="derivacion-logaritmica">Derivación logarítmica</h2>
        <p>
          La derivación logarítmica toma el logaritmo natural de ambos lados de una igualdad antes de derivar. Es útil
          cuando la función mezcla productos, cocientes y exponentes variables —por ejemplo y = x^x o expresiones del
          tipo (f(x))^(g(x))— porque ln convierte productos en sumas y exponentes en factores.
        </p>
        <ExampleCard
          title="Ejemplo: derivar y = x^x con ln"
          steps={[
            "Toma ln de ambos lados: ln y = x ln x.",
            "Deriva implícitamente: (1/y)·y′ = ln x + 1.",
            "Despeja: y′ = y(ln x + 1) = x^x(ln x + 1).",
          ]}
        />
        <p>
          No sustituye la regla de la cadena en ln(g(x)) = g′/g, pero organiza problemas que de otro modo serían
          engorrosos. Conecta con la{" "}
          <Link href="/como-funciona#derivada-por-definicion" className="text-violet-600 font-semibold hover:underline">
            definición formal de derivada
          </Link>{" "}
          y con las fórmulas de{" "}
          <Link href={ES_AUTHORITY_ROUTES.formulasDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            fórmulas de derivadas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="tabla-maestra">Tabla maestra de reglas</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Regla</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Fórmula</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Cuándo usar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Potencia</td>
                <td className="border border-slate-200 px-4 py-3">n·x^(n−1)</td>
                <td className="border border-slate-200 px-4 py-3">x^n sola o tras expandir</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Producto</td>
                <td className="border border-slate-200 px-4 py-3">u′v + uv′</td>
                <td className="border border-slate-200 px-4 py-3">Dos factores multiplicados</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Cociente</td>
                <td className="border border-slate-200 px-4 py-3">(u′v − uv′)/v²</td>
                <td className="border border-slate-200 px-4 py-3">Fracción u/v</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Cadena</td>
                <td className="border border-slate-200 px-4 py-3">f′(g(x))·g′(x)</td>
                <td className="border border-slate-200 px-4 py-3">Composición f(g(x))</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Constante</td>
                <td className="border border-slate-200 px-4 py-3">0</td>
                <td className="border border-slate-200 px-4 py-3">Constantes aisladas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="estrategia">Elegir la regla correcta</h2>
        <p>
          Empieza en el nivel superior de la expresión. ¿Es una suma? Deriva cada término. ¿Un producto de dos factores
          no constantes? Regla del producto. ¿Un cociente? Regla del cociente, o simplifica algebraicamente antes.
          ¿Una estructura anidada f(g(x))? Regla de la cadena, posiblemente combinada con producto o cociente dentro de
          u o v.
        </p>
        <WarningCard>
          (fg)′ no es f′g′. (f/g)′ no es f′/g′. (f∘g)′ no es f′∘g′. Cada estructura tiene su propia regla.
        </WarningCard>
        <p>
          Si aún no dominas el concepto, repasa{" "}
          <Link href="/como-funciona#glosario" className="text-violet-600 font-semibold hover:underline">
            el glosario de cálculo diferencial
          </Link>{" "}
          y{" "}
          <Link href={ROUTES.comoFunciona} className="text-violet-600 font-semibold hover:underline">
            cómo funciona una derivada
          </Link>{" "}
          antes de memorizar fórmulas.
        </p>
        <TipCard>
          Antes de aplicar la regla del cociente, pregúntate si la división larga o el factor común convierten la
          función en una suma de términos más simples; a menudo ahorra tiempo.
        </TipCard>
      </section>

      <section>
        <h2 id="orden-superior">Derivadas de orden superior</h2>
        <p>
          La segunda derivada es la derivada de la primera; describe concavidad y aceleración. Las reglas se repiten:
          (sin x)″ = −sin x, (e^x)″ = e^x. Usa la{" "}
          <Link href={ES_CALCULATOR_ROUTES.secondDerivative} className="text-violet-600 font-semibold hover:underline">
            calculadora de segunda derivada
          </Link>{" "}
          o la de{" "}
          <Link href={ES_CALCULATOR_ROUTES.higherOrderDerivative} className="text-violet-600 font-semibold hover:underline">
            derivadas de orden superior
          </Link>{" "}
          para comprobar patrones.
        </p>
      </section>

      <section>
        <h2 id="implicita">Derivación implícita y logarítmica (resumen)</h2>
        <p>
          Cuando y está definida por F(x, y) = 0, la derivación implícita aplica la cadena a los términos en y y
          despeja dy/dx. No es una fórmula mágica aparte, sino la cadena organizada para una y desconocida. Para
          productos, cocientes y exponentes variables, la técnica dedicada está en la sección de{" "}
          <Link href="#derivacion-logaritmica" className="text-violet-600 font-semibold hover:underline">
            derivación logarítmica
          </Link>
          . Ambas técnicas aparecen en{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas paso a paso
          </Link>{" "}
          y en problemas avanzados de{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>
          . La{" "}
          <Link href={ES_CALCULATOR_ROUTES.implicitDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas implícitas
          </Link>{" "}
          resuelve ecuaciones del tipo x² + y² = 25.
        </p>
      </section>

      <section>
        <h2 id="habitos">Construir fluidez a largo plazo</h2>
        <p>
          La fluidez significa elegir la regla correcta en menos de diez segundos. Practica la clasificación: mira la
          operación de nivel superior (suma, producto, cociente o composición). Las sumas se separan; los productos usan
          UV; los cocientes usan «bajo-alto»; las composiciones usan cadena. Solo después de clasificar debes escribir u,
          v o la g interior. Muchos estudiantes empiezan a derivar de inmediato y aplican la potencia a un producto,
          produciendo errores como (fg)′ = f′g′. Ralentizar para clasificar evita por completo esa clase de fallos.
        </p>
        <p>
          Lleva un registro personal de errores: fecha, problema, regla incorrecta, regla correcta. Surgirán patrones:
          quizá olvidas la cadena dentro del numerador de un cociente, o los signos en cos. Repasa el registro cada
          semana. Combina cada tipo de error con un problema dirigido de la guía correspondiente. En un mes, el
          registro se reduce porque el reconocimiento mejora más rápido que la velocidad algebraica pura.
        </p>
        <p>
          Las calculadoras con pasos son entrenamiento, no atajos para evitar pensar. Lee el nombre de cada paso:
          «aplicar regla del producto», «simplificar». Di el nombre antes de expandir la expresión. Eso verbaliza el
          mismo hábito que los profesores premian en exámenes escritos. Cuando los pasos no coinciden con tu trabajo,
          encuentra la primera línea de divergencia; esa línea te dice qué regla identificaste mal.
        </p>
      </section>

      <section>
        <h2 id="multivariable">Más allá de una variable</h2>
        <p>
          Las derivadas parciales, la derivación implícita y los gradientes extienden las mismas ideas a varias
          variables. Consulta{" "}
          <Link href="/blog/derivadas-parciales-ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas parciales
          </Link>{" "}
          y la{" "}
          <Link href={ES_CALCULATOR_ROUTES.partialDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas parciales
          </Link>{" "}
          para notación ∂/∂x y ∂/∂y.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.reglasDeDerivacion} />
    </ArticleWrap>
  );
}
