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

export function EjerciciosDeDerivadasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Ejercicios de derivadas para practicar con método</h2>
        <p>
          Esta página reúne ejercicios de derivadas organizados por tema, con pistas progresivas y soluciones
          comentadas para que puedas entrenar como en un examen pero con retroalimentación inmediata. No sustituye
          las clases ni el razonamiento propio: te da volumen de práctica estructurada y enlaces a herramientas para
          comprobar cada paso.
        </p>
        <p>
          Antes de empezar, repasa las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y ten a mano la{" "}
          <Link href={ES_AUTHORITY_ROUTES.formulasDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            guía de fórmulas
          </Link>
          . Usa la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora principal
          </Link>{" "}
          solo después de intentar el ejercicio. Equivalente en inglés:{" "}
          <Link href={EN_ROUTES.derivativePracticeProblems} className="text-violet-600 font-semibold hover:underline">
            derivative practice problems
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="nivel-1">Nivel 1: polinomios y potencias</h2>
        <p>Deriva sin producto, cociente ni cadena. Objetivo: fluidez con la regla de la potencia.</p>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = 4x⁵ − 2x³ + x − 8</li>
          <li>g(x) = x^(−4) + √x</li>
          <li>h(x) = 3/x² − 5x</li>
        </ol>
        <ExampleCard
          title="Solución guía del ejercicio 1"
          steps={[
            "f′(x) = 20x⁴ − 6x² + 1.",
            "Constante −8 desaparece.",
          ]}
        />
        <TipCard>
          Cronometra diez minutos para los tres ejercicios del nivel. Si terminas antes, aumenta la dificultad; si no
          llegas, repite solo potencias otro día.
        </TipCard>
      </section>

      <section>
        <h2 id="nivel-2">Nivel 2: trigonometría y exponenciales</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = sin x + cos x − 2</li>
          <li>g(x) = e^x − e^(−x)</li>
          <li>h(x) = ln(2x) para x &gt; 0</li>
        </ol>
        <p>
          Para ln(2x), recuerda que ln(2x) = ln 2 + ln x, así que la derivada es 1/x. Alternativamente, cadena:
          (1/(2x))·2 = 1/x.
        </p>
        <p>
          Artículos de apoyo:{" "}
          <Link href="/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin x
          </Link>
          ,{" "}
          <Link href="/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos x
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="nivel-3">Nivel 3: regla del producto</h2>
        <FormulaCard title="Recordatorio">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = x²·cos x</li>
          <li>g(x) = (x+1)·e^x</li>
          <li>h(x) = x·ln x</li>
        </ol>
        <ExampleCard
          title="Solución guía: x·ln x"
          steps={[
            "u = x, v = ln x.",
            "u′ = 1, v′ = 1/x.",
            "f′ = ln x + x·(1/x) = ln x + 1.",
          ]}
        />
        <p>
          Verifica en la{" "}
          <Link href={ES_CALCULATOR_ROUTES.productRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del producto
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="nivel-4">Nivel 4: regla del cociente</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = sin x / x</li>
          <li>g(x) = (x² + 1) / (x² − 1)</li>
          <li>h(x) = e^x / x²</li>
        </ol>
        <WarningCard>
          El denominador siempre se eleva al cuadrado completo. No olvides el paréntesis en v² si v es un binomio.
        </WarningCard>
        <p>
          Más ejemplos en{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>{" "}
          y la{" "}
          <Link href={ES_CALCULATOR_ROUTES.quotientRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de cociente
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="nivel-5">Nivel 5: regla de la cadena</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = (3x − 1)^4</li>
          <li>g(x) = sin(x²)</li>
          <li>h(x) = e^(x²+1)</li>
          <li>k(x) = ln(cos x)</li>
        </ol>
        <ExampleCard
          title="Solución guía: ln(cos x)"
          steps={[
            "Derivada exterior: 1/cos x.",
            "Derivada interior: −sin x.",
            "f′ = (−sin x)/cos x = −tan x (donde cos x ≠ 0).",
          ]}
        />
        <p>
          Serie ampliada en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            ejercicios de regla de la cadena
          </Link>{" "}
          y la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de cadena
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="nivel-6">Nivel 6: mezcla (tipo examen)</h2>
        <p>Problemas que combinan varias reglas. Intenta clasificar antes de calcular.</p>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x) = x²·sin(2x)</li>
          <li>g(x) = (x²+1)·e^(−x)</li>
          <li>h(x) = tan(x²)</li>
          <li>m(x) = x / (x² + 1)</li>
        </ol>
        <p>
          Compara tus resultados con los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          resueltos paso a paso.
        </p>
      </section>

      <section>
        <h2 id="implicitos-ej">Ejercicios de derivación implícita</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>x² + xy + y² = 7 — hallar dy/dx</li>
          <li>sin(xy) = x — hallar dy/dx</li>
        </ol>
        <p>
          Pista general: deriva cada término respecto a x; cada vez que derives y, multiplica por dy/dx. La{" "}
          <Link href={ES_CALCULATOR_ROUTES.implicitDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas implícitas
          </Link>{" "}
          muestra el despeje.
        </p>
      </section>

      <section>
        <h2 id="parciales-ej">Ejercicios de derivadas parciales</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>f(x,y) = x³y + y² — calcular ∂f/∂x y ∂f/∂y</li>
          <li>g(x,y) = e^(xy) — calcular ∂g/∂y</li>
        </ol>
        <p>
          En ∂g/∂y, trata x como constante: la derivada de e^(xy) respecto a y es x·e^(xy). Usa la{" "}
          <Link href={ES_CALCULATOR_ROUTES.partialDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas parciales
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="autoevaluacion">Autoevaluación semanal</h2>
        <p>
          Cada viernes, elige cinco ejercicios al azar de niveles distintos. Sin apuntes, resuélvelos en cuarenta
          minutos. Corrige con la calculadora y anota la regla que fallaste. Si repites el mismo error tres veces,
          dedica el fin de semana a ese tema concreto (un artículo del blog + diez problemas dirigidos).
        </p>
        <p>
          La{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          puede usarse en repaso abierto, pero en autoevaluación simula examen: tabla cerrada hasta corregir.
        </p>
      </section>

      <section>
        <h2 id="plan-30-dias">Plan de estudio de 30 días</h2>
        <p>
          Días 1–7: niveles 1 y 2. Días 8–14: producto y cociente. Días 15–21: cadena intensiva. Días 22–26: mezcla
          nivel 6. Días 27–29: implícitas y parciales si tu curso las incluye. Día 30: simulacro completo. Ajusta el
          ritmo si tu examen es antes; la clave es espaciar la práctica.
        </p>
        <p>
          Complementa con la página{" "}
          <Link href={ROUTES.ejemplos} className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>{" "}
          y el artículo{" "}
          <Link href="/blog/como-aprender-derivadas-desde-cero" className="text-violet-600 font-semibold hover:underline">
            cómo aprender derivadas desde cero
          </Link>{" "}
          si empiezas con poca base.
        </p>
      </section>

      <section>
        <h2 id="consejos-examen">Consejos para el día del examen</h2>
        <p>
          Lee el problema entero antes de escribir. Clasifica en una palabra (suma, producto, cociente, cadena).
          Simplifica solo al final salvo que la simplificación previa evite cociente innecesario. Revisa dominios en
          ln, tan y raíces. Deja dos minutos para comprobar signos en derivadas de cos y cocientes.
        </p>
        <TipCard>
          Si te bloqueas, deriva un caso más simple del mismo tipo (por ejemplo, sin(2x) antes de x·sin(2x)) para
          recordar el patrón y vuelve al problema original.
        </TipCard>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} />
    </ArticleWrap>
  );
}
