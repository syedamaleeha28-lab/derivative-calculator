import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  InternalLinksBlock,
  Link,
  TipCard,
  WarningCard,
  renderMath,
} from "../helpers";

export function DerivadaDeSinXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Introducción: por qué estudiar la derivada de sin(x)</h2>
        <p>
          La pregunta «¿cuál es la derivada de sin x?» aparece en casi todo curso de cálculo diferencial.
          No es un resultado aislado: abre la puerta a modelar oscilaciones, ondas y fenómenos periódicos.
          En este artículo verás la definición, la interpretación geométrica, ejemplos resueltos y cómo
          comprobar tus resultados con una{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas online
          </Link>{" "}
          que muestra derivadas paso a paso.
        </p>
        <p>
          Si buscas derivadas trigonométricas explicadas con claridad, empezar por sin(x) es la mejor
          decisión. Una vez domines este caso, cos(x) y tan(x) encajan en el mismo marco mental.
        </p>
      </section>

      <section>
        <h2 id="formula-basica">Fórmula básica: derivada de sin(x)</h2>
        <FormulaCard title="Derivada fundamental">
          {renderMath("\\dfrac{d}{dx}\\sin(x) = \\cos(x)", true)}
        </FormulaCard>
        <p>
          La derivada de sin(x) es cos(x) cuando x se mide en radianes. Esa condición es esencial:
          si tu calculadora está en grados, los resultados numéricos no coincidirán con el cálculo
          simbólico estándar de las derivadas matemáticas en universidad.
        </p>
        <TipCard>
          Memoriza el par sin → cos y cos → −sin. Repasa la tabla completa en nuestra página de{" "}
          <Link href="/reglas" className="font-semibold text-violet-600 hover:underline">
            reglas de derivación
          </Link>
          .
        </TipCard>
      </section>

      <section>
        <h2 id="interpretacion">Interpretación geométrica y física</h2>
        <p>
          Geometricamente, la derivada es la pendiente de la recta tangente. La función sin(x) oscila
          entre −1 y 1; su derivada cos(x) indica cuán rápido cambia la altura en cada punto. Donde
          sin(x) alcanza un máximo o mínimo, la pendiente es cero y cos(x) se anula.
        </p>
        <p>
          En física, si x representa el tiempo y sin(x) describe una posición oscilatoria, cos(x) se
          relaciona con la velocidad instantánea. Por eso las derivadas trigonométricas aparecen en
          movimiento armónico simple y en ingeniería de señales.
        </p>
      </section>

      <section>
        <h2 id="regla-cadena">Derivada de sin(g(x)): regla de la cadena</h2>
        <p>
          En la práctica rara vez derivamos sin(x) «plano». Aparecen composiciones como sin(3x),
          sin(x²) o sin(ln x). Ahí entra la{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena
          </Link>
          .
        </p>
        <FormulaCard title="Regla de la cadena">
          {renderMath("\\dfrac{d}{dx}\\sin(g(x)) = \\cos(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Ejemplo: derivar sin(3x)"
          steps={[
            "Identifica la capa externa sin(·) y la interna g(x)=3x.",
            "Derivada externa: cos(3x).",
            "Derivada interna: g'(x)=3.",
            "Resultado: 3cos(3x).",
          ]}
        >
          <p className="mb-4">{renderMath("\\dfrac{d}{dx}\\sin(3x) = 3\\cos(3x)", true)}</p>
        </ExampleCard>
        <ExampleCard title="Ejemplo: derivar sin(x²)">
          <p>{renderMath("\\dfrac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x = 2x\\cos(x^2)", true)}</p>
        </ExampleCard>
        <WarningCard>
          No olvides multiplicar por g'(x). El error «solo cos(3x)» sin el factor 3 es uno de los más
          frecuentes en exámenes de derivadas universitarias.
        </WarningCard>
      </section>

      <section>
        <h2 id="producto-cociente">Productos y cocientes con seno</h2>
        <p>
          Si sin(x) se multiplica por otro factor, por ejemplo x·sin(x), aplica la regla del producto:
          la derivada del producto no es el producto de las derivadas. Consulta{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            regla del producto y del cociente
          </Link>{" "}
          antes de mezclar técnicas.
        </p>
        <FormulaCard title="Regla del producto">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <p>
          Ejemplo breve: la derivada de x·sin(x) es sin(x) + x·cos(x). Escribe cada paso en papel y
          luego contrasta con la calculadora de derivadas con pasos para detectar signos incorrectos.
        </p>
      </section>

      <section>
        <h2 id="practica">Cómo practicar derivadas online</h2>
        <p>
          Para resolver derivadas online de forma útil, introduce la expresión con paréntesis claros:
          sin(2*x), sin(x^2+1), etc. Revisa el desglose: cada línea debe nombrar la regla aplicada.
        </p>
        <p>
          Combina este artículo con{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos(x)
          </Link>
          ,{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            derivada de tan(x)
          </Link>{" "}
          y la galería de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>
          .
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="errores">Errores típicos al derivar seno</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confundir sin(x) con sin⁻¹(x) (arcsen); son funciones distintas.</li>
          <li>Omitir el factor de la regla de la cadena en sin(g(x)).</li>
          <li>Usar grados en lugar de radianes en el motor simbólico.</li>
          <li>Derivar sin(x)·cos(x) como producto sin aplicar (uv)′.</li>
        </ul>
        <p className="mt-4">
          Más fallos comentados en{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="limite">Relación con la definición por límite</h2>
        <p>
          Formalmente, la derivada de f en x₀ es el límite de [f(x₀+h)−f(x₀)]/h cuando h→0. Para
          f(x)=sin(x), ese límite se demuestra con identidades trigonométricas y produce cos(x₀).
          No necesitas reproducir la demostración completa en cada parcial, pero entender que la
          derivada nace de un límite refuerza por qué las derivadas matemáticas son rigurosas y no
          solo «reglas mágicas».
        </p>
        <h3 id="radianes">Por qué los radianes importan</h3>
        <p>
          La igualdad (sin x)′=cos x es válida en radianes. En grados, las tasas de cambio se escalan
          y las derivadas trigonométricas dejan de coincidir con las tablas del libro. Antes de
          resolver derivadas online, confirma el modo angular de tu calculadora y del motor simbólico.
        </p>
      </section>

      <section>
        <h2 id="tabla-trig">Tabla rápida: sin, cos y tan</h2>
        <p>
          Memorizar las tres básicas acelera el estudio de cálculo diferencial:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>d/dx sin(x) = cos(x)</li>
          <li>d/dx cos(x) = −sin(x)</li>
          <li>d/dx tan(x) = sec²(x)</li>
        </ul>
        <p className="mt-4">
          Profundiza en{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos(x)
          </Link>{" "}
          y{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            derivada de tan(x)
          </Link>
          . La tabla completa de reglas está en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="avanzado">Casos avanzados con seno</h2>
        <h3 id="sin-exp">sin(e^x) y sin(ln x)</h3>
        <p>
          En sin(e^x), la capa interna es exponencial: g′(x)=e^x, resultado cos(e^x)·e^x. En sin(ln x),
          g′(x)=1/x. Estos ejercicios mezclan derivadas logarítmicas con trigonométricas y aparecen en
          listas de derivadas universitarias.
        </p>
        <ExampleCard title="Ejemplo: sin(ln x) para x &gt; 0">
          {renderMath("\\dfrac{d}{dx}\\sin(\\ln x) = \\cos(\\ln x)\\cdot \\dfrac{1}{x}", true)}
        </ExampleCard>
        <h3 id="sin-suma">Suma de senos y linealidad</h3>
        <p>
          La derivada de sin(x)+cos(x) es cos(x)−sin(x) por linealidad. La derivada de 3sin(2x) es
          6cos(2x). Identificar constantes y sumas antes de aplicar la cadena reduce errores en
          ejercicios de derivadas.
        </p>
      </section>

      <section>
        <h2 id="estudio">Plan de estudio de una semana</h2>
        <p>
          Día 1: derivada de sin(x) y cos(x). Día 2: regla de la cadena con sin(g(x)). Día 3: producto
          y cociente con trigonométricas. Día 4: diez ejercicios en{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>
          . Día 5: simulacro con la calculadora de derivadas con pasos apagada, luego verificación.
        </p>
        <p>
          Si eres principiante, lee primero{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>{" "}
          para contextualizar el ritmo de estudio.
        </p>
      </section>

      <InternalLinksBlock
        links={[
          { href: "/blog/regla-de-la-cadena-ejercicios", label: "Regla de la cadena: ejercicios", desc: "Seis problemas resueltos paso a paso" },
          { href: "/blog/ejemplos-de-derivadas-resueltas", label: "Ejemplos de derivadas resueltas", desc: "Galería de práctica" },
          { href: "/#calculator", label: "Calculadora de derivadas", desc: "Derivadas online con pasos" },
          { href: "/como-funciona", label: "Cómo funciona la herramienta", desc: "Tutorial de sintaxis" },
        ]}
      />
    </ArticleWrap>
  );
}
