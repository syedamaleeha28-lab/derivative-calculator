import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  InternalLinksBlock,
  RelatedCalculatorsBlock,
  ExamplesLinksBlock,
  renderMath,
  Link,
  EN_MAIN_CALCULATOR_HREF,
  EN_ROUTES,
} from "../helpers";

export function DerivativeRulesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="overview">Comprehensive overview of differentiation rules</h2>
        <p>
          Derivative rules are the grammar of calculus: they tell you how to differentiate combinations of
          functions without returning to the limit definition every time. This guide collects the power rule,
          product rule, quotient rule, chain rule, and the standard derivatives of trigonometric, logarithmic, and
          exponential functions in one place—with a reference table, when-to-use guidance, and links to deep dives
          such as the{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            derivative of sin(x)
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            ln(x)
          </Link>
          , and{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            e^x
          </Link>
          . Keep our{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          open while you study so you can name the rule at each step.
        </p>
        <p>
          A successful strategy is recognition first, algebra second: identify the outer structure (sum,
          product, quotient, composition), apply the matching rule, then simplify. Most exam mistakes come from
          misclassification—treating a product as a composition, or forgetting the chain factor.
        </p>
      </section>

      <section>
        <h2 id="linearity">Linearity and constants</h2>
        <FormulaCard title="Sum and constant multiple">
          {renderMath("(f + g)' = f' + g', \\quad (cf)' = c f'", true)}
        </FormulaCard>
        <p>
          The derivative of a sum is the sum of derivatives. Constants factor out; the derivative of a standalone
          constant is zero. These rules let you differentiate polynomials term by term and split complicated
          expressions into manageable pieces before you touch product or quotient rules.
        </p>
        <ExampleCard
          title="Example: 4x³ − 2x + 9"
          steps={["Term-by-term: 12x² − 2.", "The constant 9 contributes 0."]}
        />
      </section>

      <section>
        <h2 id="power-rule">Power rule</h2>
        <FormulaCard title="Power rule">
          {renderMath("\\dfrac{d}{dx} x^n = n x^{n-1}", true)}
        </FormulaCard>
        <p>
          For any real exponent n (with domain restrictions for some n), multiply by the exponent and subtract
          one from the exponent. The special case n = 0 gives a constant, derivative zero. See{" "}
          <Link href={EN_ROUTES.derivativeOfXSquared} className="text-violet-600 font-semibold hover:underline">
            derivative of x²
          </Link>{" "}
          for a full walkthrough with the limit definition.
        </p>
      </section>

      <section>
        <h2 id="product-rule">Product rule</h2>
        <FormulaCard title="Product rule">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <p>
          Use when a function is written as a product of two simpler factors, neither of which is a constant
          multiple of the other in a trivial way. Mnemonic: “first times derivative of second plus second times
          derivative of first.”
        </p>
        <ExampleCard
          title="Example: x²·sin(x)"
          steps={["u = x², v = sin x.", "u′ = 2x, v′ = cos x.", "Result: 2x sin x + x² cos x."]}
        />
        <p>
          Try the{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product rule calculator
          </Link>{" "}
          for step-by-step UV breakdowns.
        </p>
      </section>

      <section>
        <h2 id="quotient-rule">Quotient rule</h2>
        <FormulaCard title="Quotient rule">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Use for quotients u/v when the function is not a simple power or a rewriteable polynomial division.
          Mnemonic: “low d-high minus high d-low, over low squared.” See{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>{" "}
          for extended examples and common mistakes.
        </p>
        <p>
          The{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient rule calculator
          </Link>{" "}
          labels u, v, u′, and v′ explicitly.
        </p>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule</h2>
        <FormulaCard title="Chain rule">
          {renderMath("\\dfrac{d}{dx} f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          Use when one function is nested inside another: sin(3x), (x²+1)^5, e^(x³), ln(cos x). Identify the
          outer f and inner g; differentiate the outer at the inner, then multiply by the derivative of the inner.
        </p>
        <ExampleCard
          title="Example: cos(x³)"
          steps={[
            "Outer: cos(·), derivative −sin(·).",
            "Inner: x³, derivative 3x².",
            "Result: −3x² sin(x³).",
          ]}
        />
        <p>
          Practice with the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="trig-rules">Trigonometric derivatives</h2>
        <p>
          The three core ratios: (sin x)′ = cos x, (cos x)′ = −sin x, (tan x)′ = sec² x. Reciprocals follow from
          quotients: (cot x)′ = −csc² x, (sec x)′ = sec x tan x, (csc x)′ = −csc x cot x. Inverse trig functions
          have their own formulas—arcsin, arccos, arctan—usually introduced after the chain rule.
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
          heading="Trig deep dives"
          links={[
            { href: EN_ROUTES.derivativeOfSinX, label: "sin(x)", desc: "Definition and chain rule" },
            { href: EN_ROUTES.derivativeOfCosX, label: "cos(x)", desc: "Proof and minus sign" },
            { href: EN_ROUTES.derivativeOfTanX, label: "tan(x)", desc: "sec² derivation" },
          ]}
        />
      </section>

      <section>
        <h2 id="log-exp">Logarithmic and exponential rules</h2>
        <FormulaCard title="Log and exp">
          {renderMath("\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}, \\quad \\dfrac{d}{dx} e^x = e^x, \\quad \\dfrac{d}{dx} a^x = a^x \\ln a", true)}
        </FormulaCard>
        <p>
          Natural log and base-e exponential are inverses; their derivatives reflect that symmetry. For ln(g(x)),
          use g′/g. For e^(g(x)), use e^(g(x))·g′(x).
        </p>
      </section>

      <section>
        <h2 id="master-table">Master reference table</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Rule</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Formula</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Power</td>
                <td className="border border-slate-200 px-4 py-3">n·x^(n−1)</td>
                <td className="border border-slate-200 px-4 py-3">x^n alone or after expanding</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Product</td>
                <td className="border border-slate-200 px-4 py-3">u′v + uv′</td>
                <td className="border border-slate-200 px-4 py-3">Two factors multiplied</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Quotient</td>
                <td className="border border-slate-200 px-4 py-3">(u′v − uv′)/v²</td>
                <td className="border border-slate-200 px-4 py-3">Fraction u/v</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Chain</td>
                <td className="border border-slate-200 px-4 py-3">f′(g(x))·g′(x)</td>
                <td className="border border-slate-200 px-4 py-3">Composition f(g(x))</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Constant</td>
                <td className="border border-slate-200 px-4 py-3">0</td>
                <td className="border border-slate-200 px-4 py-3">Standalone constants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="strategy">Choosing the right rule: decision flow</h2>
        <p>
          Start at the top level of the expression. Is it a sum? Differentiate each term. A product of two
          non-constant factors? Product rule. A quotient? Quotient rule—or simplify algebraically first. A
          nested structure like f(g(x))? Chain rule, possibly combined with product/quotient inside u or v.
        </p>
        <WarningCard>
          (fg)′ is not f′g′. (f/g)′ is not f′/g′. (f∘g)′ is not f′∘g′. Each structure has its own rule.
        </WarningCard>
        <TipCard>
          Before applying the quotient rule, ask whether long division or factoring turns the function into a sum
          of simpler terms—that often saves time.
        </TipCard>
      </section>

      <section>
        <h2 id="higher-order">Higher-order derivatives</h2>
        <p>
          The second derivative is the derivative of the first; it describes concavity and acceleration. Rules
          repeat: (sin x)″ = −sin x, (e^x)″ = e^x. Use the{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>{" "}
          or{" "}
          <Link href={EN_ROUTES.higherOrderDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            higher-order derivative calculator
          </Link>{" "}
          for pattern checks.
        </p>
      </section>

      <section>
        <h2 id="implicit-log">Implicit and logarithmic differentiation (overview)</h2>
        <p>
          When y is defined by F(x, y) = 0, implicit differentiation applies the chain rule to y-terms and solves
          for dy/dx. It is not a separate magic formula but the chain rule organized for unknown y. Logarithmic
          differentiation takes ln of both sides when products, quotients, and variable exponents mix in one
          expression; after expansion, derivatives often simplify. Both techniques appear in our{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>{" "}
          and in advanced product–power problems on the{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2 id="study-habits">Building long-term fluency</h2>
        <p>
          Fluency means choosing the correct rule in under ten seconds. Drill classification: look at the top-level
          operation—sum, product, quotient, or composition. Sums split; products use UV; quotients use low-high;
          compositions use chain. Only after classification should you write u, v, or inner g. Many students start
          differentiating immediately and apply the power rule to a product, producing nonsense like (fg)′ = f′g′.
          Slowing down for classification prevents that error class entirely.
        </p>
        <p>
          Keep a personal error log: date, problem, wrong rule, correct rule. Patterns emerge—perhaps chain rule
          forgotten inside quotient numerators, or minus signs in cos derivatives. Review the log weekly. Pair each
          mistake type with one targeted problem from the matching guide (trig, fraction, implicit). Over a month,
          the log shrinks because recognition improves faster than raw algebra speed.
        </p>
        <p>
          Calculators that show steps are training wheels, not shortcuts past thinking. Read each step name: “apply
          product rule,” “simplify.” Say the name before expanding the expression. That verbalizes the same habit
          instructors reward on written exams. When steps disagree with your work, find the first line of divergence;
          that line tells you which rule was misidentified.
        </p>
      </section>

      <section>
        <h2 id="multivariable">Beyond one variable</h2>
        <p>
          Partial derivatives, implicit differentiation, and gradients extend the same ideas to several variables.
          See{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          . The{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>{" "}
          handles ∂/∂x and ∂/∂y notation.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <ExamplesLinksBlock />
    </ArticleWrap>
  );
}

