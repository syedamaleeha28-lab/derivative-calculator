import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  RelatedCalculatorsBlock,
  InternalLinksBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
} from "../helpers";

const APPLICATION_CALCULATORS = [
  {
    href: ES_CALCULATOR_ROUTES.tangentLine,
    label: "Calculadora de recta tangente",
    desc: "Ecuación de la tangente en un punto a partir de f′(a).",
  },
  {
    href: ES_CALCULATOR_ROUTES.criticalPoints,
    label: "Calculadora de puntos críticos",
    desc: "Resuelve f′(x) = 0 y clasifica máximos y mínimos.",
  },
  {
    href: ES_CALCULATOR_ROUTES.secondDerivative,
    label: "Calculadora de segunda derivada",
    desc: "f″(x) con pasos: concavidad y puntos de inflexión.",
  },
  {
    href: ES_CALCULATOR_ROUTES.higherOrderDerivative,
    label: "Calculadora de derivadas de orden superior",
    desc: "Tercera y cuarta derivada para movimiento y más.",
  },
] as const;

export function AplicacionesDeLaDerivadaContent() {
  return (
    <ArticleWrap>
      <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 px-5 py-4 md:px-6 md:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-violet-600 mb-2">TL;DR</p>
        <p className="text-slate-700 leading-relaxed text-[0.98rem]">
          Las <strong>aplicaciones de la derivada</strong> convierten f′(x) y f″(x) en respuestas concretas:
          la <strong>recta tangente</strong> en un punto, los <strong>máximos y mínimos</strong> de una función,
          la <strong>concavidad</strong> de su gráfica, problemas de <strong>optimización</strong> y el análisis
          del <strong>movimiento</strong> (velocidad y aceleración). Cada sección de esta guía enlaza a una
          calculadora con pasos para verificar tu procedimiento, empezando por la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>
          .
        </p>
      </div>

      <section>
        <h2 id="vision-general">Para qué sirve la derivada</h2>
        <p>
          Derivar no es un fin en sí mismo: f′(x) responde preguntas. ¿Qué pendiente tiene la curva aquí? ¿Dónde
          alcanza su valor máximo? ¿La gráfica se curva hacia arriba o hacia abajo? ¿A qué velocidad se mueve un
          objeto? Esta guía organiza las aplicaciones clásicas del cálculo diferencial y conecta cada una con la
          calculadora especializada del sitio. Si necesitas repasar la teoría previa, consulta las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y la{" "}
          <Link href={ES_AUTHORITY_ROUTES.derivadaPorDefinicion} className="text-violet-600 font-semibold hover:underline">
            derivada por definición
          </Link>
          .
        </p>
        <InternalLinksBlock links={APPLICATION_CALCULATORS} heading="Calculadoras de aplicaciones de la derivada" />
      </section>

      <section>
        <h2 id="recta-tangente">Recta tangente a una curva</h2>
        <FormulaCard title="Ecuación de la recta tangente en x = a">
          {renderMath("y = f(a) + f'(a)\\,(x - a)", true)}
        </FormulaCard>
        <p>
          La interpretación geométrica más directa: f′(a) es la pendiente de la recta que toca la gráfica en
          (a, f(a)). Con esa pendiente y el punto de tangencia, la ecuación punto-pendiente da la recta completa.
          Es la base de la aproximación lineal f(x) ≈ f(a) + f′(a)(x − a) para x cercano a a.
        </p>
        <ExampleCard
          title="Ejemplo: tangente a f(x) = x² en x = 1"
          steps={[
            "Punto de tangencia: f(1) = 1, es decir (1, 1).",
            "Pendiente: f′(x) = 2x, así que f′(1) = 2.",
            "Recta: y = 1 + 2(x − 1) = 2x − 1.",
          ]}
        />
        <p>
          Resuelve cualquier caso con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.tangentLine} className="text-violet-600 font-semibold hover:underline">
            calculadora de recta tangente
          </Link>
          , que muestra el punto, la pendiente y la ecuación paso a paso.
        </p>
      </section>

      <section>
        <h2 id="puntos-criticos">Puntos críticos</h2>
        <p>
          Un punto crítico de f es un valor de x en el dominio donde f′(x) = 0 o donde f′ no existe. Son los únicos
          candidatos a máximos y mínimos locales, por eso todo análisis de extremos empieza resolviendo la ecuación
          f′(x) = 0. En los puntos críticos la tangente es horizontal (o no está definida).
        </p>
        <p>
          La{" "}
          <Link href={ES_CALCULATOR_ROUTES.criticalPoints} className="text-violet-600 font-semibold hover:underline">
            calculadora de puntos críticos
          </Link>{" "}
          deriva, resuelve f′(x) = 0 y clasifica cada solución automáticamente.
        </p>
      </section>

      <section>
        <h2 id="maximos-y-minimos">Máximos y mínimos: criterio de la primera derivada</h2>
        <p>
          El signo de f′ indica la monotonía: si f′ &gt; 0 la función crece; si f′ &lt; 0 decrece. En un punto
          crítico donde f′ cambia de positivo a negativo hay un <strong>máximo local</strong>; si cambia de negativo
          a positivo, un <strong>mínimo local</strong>; si no cambia de signo, no hay extremo (como en x³ en el
          origen).
        </p>
        <ExampleCard
          title="Ejemplo: extremos de f(x) = x³ − 3x"
          steps={[
            "f′(x) = 3x² − 3 = 3(x − 1)(x + 1); puntos críticos x = −1 y x = 1.",
            "Signos de f′: positiva en (−∞, −1), negativa en (−1, 1), positiva en (1, ∞).",
            "En x = −1 hay máximo local f(−1) = 2; en x = 1, mínimo local f(1) = −2.",
          ]}
        />
        <TipCard>
          En un intervalo cerrado [a, b], evalúa f en los puntos críticos interiores y en los extremos a y b: el
          mayor valor es el máximo absoluto y el menor, el mínimo absoluto (teorema de Weierstrass).
        </TipCard>
      </section>

      <section>
        <h2 id="concavidad">Concavidad y puntos de inflexión</h2>
        <p>
          La segunda derivada mide cómo cambia la pendiente: si f″ &gt; 0 la gráfica es <strong>cóncava hacia
          arriba</strong> (forma de copa); si f″ &lt; 0, <strong>cóncava hacia abajo</strong> (forma de campana).
          Donde f″ cambia de signo hay un <strong>punto de inflexión</strong>: la curva cambia de curvatura, como
          x³ en el origen.
        </p>
        <p>
          Calcula f″ y estudia su signo con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.secondDerivative} className="text-violet-600 font-semibold hover:underline">
            calculadora de segunda derivada
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="segunda-derivada">Criterio de la segunda derivada</h2>
        <FormulaCard title="Clasificación de un punto crítico c (f′(c) = 0)">
          {renderMath(
            "f''(c) > 0 \\Rightarrow \\text{mínimo local}, \\qquad f''(c) < 0 \\Rightarrow \\text{máximo local}",
            true
          )}
        </FormulaCard>
        <p>
          Es la vía rápida para clasificar extremos: en lugar de estudiar el signo de f′ a ambos lados, evalúa f″ en
          el punto crítico. Si f″(c) = 0 el criterio no decide y hay que volver al criterio de la primera derivada.
          En el ejemplo anterior, f″(x) = 6x: f″(−1) = −6 &lt; 0 confirma el máximo y f″(1) = 6 &gt; 0 el mínimo.
        </p>
      </section>

      <section>
        <h2 id="optimizacion">Optimización</h2>
        <p>
          Los problemas de optimización piden el valor máximo o mínimo de una magnitud sujeta a una restricción:
          maximizar un área con perímetro fijo, minimizar un coste, maximizar un volumen. El método es siempre el
          mismo: expresa la magnitud como función de una sola variable usando la restricción, deriva, resuelve
          f′ = 0 y clasifica el punto crítico.
        </p>
        <ExampleCard
          title="Ejemplo: rectángulo de área máxima con 20 m de valla"
          steps={[
            "Con lados x e y, la restricción es 2x + 2y = 20, así que y = 10 − x.",
            "Área: A(x) = x(10 − x) = 10x − x², con 0 < x < 10.",
            "A′(x) = 10 − 2x = 0 da x = 5; A″(x) = −2 < 0 confirma el máximo.",
            "Solución: cuadrado de 5 × 5 m con área máxima de 25 m².",
          ]}
        />
        <p>
          Verifica la derivada y el punto crítico de tu planteamiento con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.criticalPoints} className="text-violet-600 font-semibold hover:underline">
            calculadora de puntos críticos
          </Link>{" "}
          y practica más casos en los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="movimiento">Movimiento: velocidad y aceleración</h2>
        <FormulaCard title="Posición, velocidad y aceleración">
          {renderMath("v(t) = s'(t), \\qquad a(t) = v'(t) = s''(t)", true)}
        </FormulaCard>
        <p>
          Si s(t) es la posición de un objeto en el instante t, la primera derivada es la <strong>velocidad
          instantánea</strong> y la segunda, la <strong>aceleración</strong>. El objeto está momentáneamente en
          reposo cuando v(t) = 0 —el análogo físico de un punto crítico— y frena cuando velocidad y aceleración
          tienen signos opuestos.
        </p>
        <ExampleCard
          title="Ejemplo: s(t) = t³ − 6t² + 9t (metros, segundos)"
          steps={[
            "Velocidad: v(t) = s′(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3).",
            "Reposo momentáneo en t = 1 s y t = 3 s.",
            "Aceleración: a(t) = s″(t) = 6t − 12; a(1) = −6 m/s² y a(3) = 6 m/s².",
          ]}
        />
        <p>
          Para derivadas sucesivas de la posición (incluida la tercera derivada o «jerk»), usa la{" "}
          <Link
            href={ES_CALCULATOR_ROUTES.higherOrderDerivative}
            className="text-violet-600 font-semibold hover:underline"
          >
            calculadora de derivadas de orden superior
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="siguientes-pasos">Siguientes pasos</h2>
        <p>
          Con las aplicaciones dominadas, refuerza la base: consulta la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          para derivar rápido, repasa las{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivadas de funciones comunes
          </Link>{" "}
          y estudia los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltos
          </Link>
          .
        </p>
      </section>

      <CalcCTA />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.aplicacionesDeLaDerivada} />
      <RelatedCalculatorsBlock />
    </ArticleWrap>
  );
}
