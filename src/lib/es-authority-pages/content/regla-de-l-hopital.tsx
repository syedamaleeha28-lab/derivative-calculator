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
  ES_AUTHORITY_ROUTES,
} from "../helpers";

export function ReglaDeLHopitalContent() {
  return (
    <ArticleWrap>
      <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 px-5 py-4 md:px-6 md:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-violet-600 mb-2">TL;DR</p>
        <p className="text-slate-700 leading-relaxed text-[0.98rem]">
          La <strong>regla de L&apos;Hôpital</strong> resuelve límites con forma indeterminada <strong>0/0</strong> o{" "}
          <strong>∞/∞</strong>: sustituye el límite de f(x)/g(x) por el límite de f′(x)/g′(x). Solo aplica si la
          indeterminación existe de verdad, y puede repetirse mientras la forma siga siendo indeterminada. Las
          derivadas del numerador y del denominador se calculan por separado —no con la regla del cociente— y
          puedes verificarlas en la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>
          .
        </p>
      </div>

      <section>
        <h2 id="que-es">Qué es la regla de L&apos;Hôpital y cuándo usarla</h2>
        <FormulaCard title="Regla de L&apos;Hôpital">
          {renderMath(
            "\\lim_{x\\to a}\\dfrac{f(x)}{g(x)} = \\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}",
            true
          )}
        </FormulaCard>
        <p>
          La regla es válida cuando se cumplen tres condiciones: (1) el cociente f(x)/g(x) produce una forma
          indeterminada 0/0 o ∞/∞ al evaluar en a (o en ±∞); (2) f y g son derivables cerca de a, con g′(x) ≠ 0 en
          un entorno; y (3) el límite de f′/g′ existe o es infinito. Si las tres se cumplen, ambos límites
          coinciden.
        </p>
        <p>
          Antes de derivar, evalúa siempre el límite por sustitución directa: si no da 0/0 ni ∞/∞, la regla{" "}
          <strong>no aplica</strong>. Repasa qué reglas necesitas para derivar numerador y denominador en la guía de{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="forma-0-0">La forma indeterminada 0/0</h2>
        <p>
          Ocurre cuando numerador y denominador tienden a cero a la vez. El cociente puede valer cualquier cosa:
          depende de la <em>velocidad</em> a la que cada parte se anula, y esa velocidad es exactamente lo que miden
          las derivadas. Por eso comparar f′ con g′ resuelve la indeterminación.
        </p>
        <ExampleCard
          title="Ejemplo 1: lim x→0 de sin(x)/x (forma 0/0)"
          steps={[
            "Sustitución directa: sin(0)/0 = 0/0, forma indeterminada. La regla aplica.",
            "Deriva por separado: (sin x)′ = cos x y (x)′ = 1.",
            "Nuevo límite: lim x→0 de cos(x)/1 = cos(0) = 1.",
          ]}
        >
          {renderMath("\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = \\lim_{x\\to 0}\\dfrac{\\cos x}{1} = 1", true)}
        </ExampleCard>
        <ExampleCard
          title="Ejemplo 2: lim x→0 de (e^x − 1)/x (forma 0/0)"
          steps={[
            "Sustitución: (e⁰ − 1)/0 = 0/0. La regla aplica.",
            "Derivadas: (e^x − 1)′ = e^x y (x)′ = 1.",
            "Nuevo límite: lim x→0 de e^x = e⁰ = 1.",
          ]}
        >
          {renderMath("\\lim_{x\\to 0}\\dfrac{e^x - 1}{x} = \\lim_{x\\to 0} e^x = 1", true)}
        </ExampleCard>
        <p>
          Las derivadas usadas aquí —seno, exponencial y la identidad— están explicadas una a una en las guías de{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivadas de funciones comunes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="forma-infinito">La forma indeterminada ∞/∞</h2>
        <p>
          Aparece cuando numerador y denominador crecen sin cota, típicamente en límites al infinito. La regla
          funciona igual y suele demostrar la jerarquía de crecimientos: los logaritmos crecen más despacio que las
          potencias, y las potencias más despacio que las exponenciales.
        </p>
        <ExampleCard
          title="Ejemplo 3: lim x→∞ de ln(x)/x (forma ∞/∞)"
          steps={[
            "Cuando x → ∞, ln x → ∞ y x → ∞: forma ∞/∞. La regla aplica.",
            "Derivadas: (ln x)′ = 1/x y (x)′ = 1.",
            "Nuevo límite: lim x→∞ de (1/x)/1 = 0. El logaritmo pierde contra la potencia.",
          ]}
        >
          {renderMath("\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x} = \\lim_{x\\to\\infty}\\dfrac{1/x}{1} = 0", true)}
        </ExampleCard>
        <ExampleCard
          title="Ejemplo 4: aplicación repetida — lim x→0 de (1 − cos x)/x² (0/0 dos veces)"
          steps={[
            "Sustitución: (1 − 1)/0 = 0/0. Primera aplicación: (1 − cos x)′ = sin x, (x²)′ = 2x.",
            "Nuevo límite: sin(x)/(2x) en x → 0 vuelve a dar 0/0. Segunda aplicación: cos(x)/2.",
            "Resultado: cos(0)/2 = 1/2.",
          ]}
        >
          {renderMath(
            "\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^2} = \\lim_{x\\to 0}\\dfrac{\\sin x}{2x} = \\lim_{x\\to 0}\\dfrac{\\cos x}{2} = \\dfrac{1}{2}",
            true
          )}
        </ExampleCard>
        <TipCard>
          Otras indeterminaciones (0·∞, ∞ − ∞, 1^∞, 0⁰, ∞⁰) también se resuelven con L&apos;Hôpital tras reescribirlas
          como cociente: por ejemplo, x·ln x = ln x / (1/x) convierte 0·∞ en ∞/∞.
        </TipCard>
      </section>

      <section>
        <h2 id="relacion-con-derivadas">Relación con la derivada</h2>
        <p>
          La regla no es magia: es cálculo diferencial puro. Cerca de a, una función derivable se comporta como su
          recta tangente: f(x) ≈ f(a) + f′(a)(x − a). En una forma 0/0 con f(a) = g(a) = 0, el cociente se reduce a
          f′(a)(x − a) / [g′(a)(x − a)] = f′(a)/g′(a): comparar funciones que se anulan es comparar sus pendientes.
        </p>
        <p>
          De hecho, el Ejemplo 1 es un círculo completo: lim sin(x)/x es el límite que se usa para demostrar que
          (sin x)′ = cos x mediante la{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.derivadaPorDefinicion}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivada por definición
          </Link>
          , por lo que en un examen de ese tema conviene resolverlo sin L&apos;Hôpital. Y como aplicación que convierte
          derivadas en respuestas concretas, esta regla completa el panorama de las{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.aplicacionesDeLaDerivada}
            className="text-violet-600 font-semibold hover:underline"
          >
            aplicaciones de la derivada
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="errores-comunes">Errores comunes al aplicar L&apos;Hôpital</h2>
        <WarningCard>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Aplicarla sin comprobar la indeterminación: lim x→1 de (x² + 1)/(x + 1) vale 1 por sustitución
              directa; derivar daría 2x/1 → 2, un resultado incorrecto.
            </li>
            <li>
              Usar la regla del cociente: L&apos;Hôpital deriva numerador y denominador <strong>por separado</strong>,
              no como (f/g)′.
            </li>
            <li>
              No re-evaluar tras cada aplicación: después de derivar, sustituye de nuevo; solo repite si persiste
              0/0 o ∞/∞.
            </li>
            <li>
              Entrar en bucles infinitos: en e^x/√(e^(2x)+1) la regla cicla; simplifica algebraicamente en su lugar.
            </li>
            <li>
              Concluir que el límite no existe cuando lim f′/g′ no existe: la regla no decide en ese caso; el límite
              original puede existir por otra vía (p. ej. (x + sin x)/x → 1).
            </li>
          </ul>
        </WarningCard>
        <p>
          Si el fallo está en las derivadas y no en la regla, revisa el procedimiento con la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          antes de repasar el límite.
        </p>
      </section>

      <CalcCTA />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.reglaDeLHopital} />
      <RelatedCalculatorsBlock />
    </ArticleWrap>
  );
}
