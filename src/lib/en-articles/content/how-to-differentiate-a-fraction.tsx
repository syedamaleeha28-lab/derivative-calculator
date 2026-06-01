import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  InternalLinksBlock,
  RelatedCalculatorsBlock,
  RulesLinksBlock,
  renderMath,
  Link,
  EN_ROUTES,
} from "../helpers";

export function HowToDifferentiateAFractionContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">How to differentiate a fraction: big picture</h2>
        <p>
          Rational functions—quotients of polynomials or other elementary expressions—appear throughout calculus.
          Differentiating a fraction is not “derivative of the top divided by derivative of the bottom.” That
          false rule costs points on every exam. The correct tool is the quotient rule, which combines u′ and v′
          with the square of the denominator in the result. This guide presents the formula, when to simplify
          before differentiating, worked examples with full algebra, and common mistakes to avoid. Pair it with
          our{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient rule calculator
          </Link>{" "}
          and the{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          reference.
        </p>
        <p>
          If the numerator or denominator is itself a composition, you will need the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule
          </Link>{" "}
          inside u′ or v′. Fractions and nested functions often appear together on worksheets labeled “mixed
          differentiation.”
        </p>
      </section>

      <section>
        <h2 id="quotient-formula">Quotient rule formula</h2>
        <FormulaCard title="Derivative of u/v">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Mnemonic: “low d-high minus high d-low, over low squared.” The minus sign and the order u′v − uv′ matter.
          Swapping terms flips the sign of the entire derivative.
        </p>
        <TipCard>
          Before applying the quotient rule, check whether the expression is really a quotient. (x² + 3)/5 is a
          scaled polynomial—differentiate the numerator only and divide by 5. (x² + 3)/(x − 1) genuinely needs the
          quotient rule (or long division first).
        </TipCard>
      </section>

      <section>
        <h2 id="strategy">Strategy: simplify or quotient first?</h2>
        <h3 id="long-division">Polynomial long division</h3>
        <p>
          When the denominator divides the numerator in the polynomial sense, long division rewrites the fraction
          as a polynomial plus a proper remainder term. Differentiating the polynomial part is faster than
          carrying v² in the denominator of the quotient rule result.
        </p>
        <h3 id="when-not">When the quotient form is clearer</h3>
        <p>
          If simplification is messy or you need the derivative in factored form for a later step (critical
          values, asymptotes), the quotient rule may be the direct path. Choose the method that minimizes algebra
          errors for you.
        </p>
      </section>

      <section>
        <h2 id="worked-examples">Worked examples</h2>
        <ExampleCard
          title="Example 1: x/(x + 1)"
          steps={[
            "u = x, u′ = 1; v = x + 1, v′ = 1.",
            "Numerator: 1·(x+1) − x·1 = 1.",
            "f′(x) = 1/(x + 1)².",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{x}{x+1} = \\dfrac{1}{(x+1)^2}", true)}
        </ExampleCard>
        <ExampleCard
          title="Example 2: (x² − 1)/(x² + 1)"
          steps={[
            "u′ = 2x, v′ = 2x.",
            "u′v − uv′ = 2x(x²+1) − (x²−1)2x = 4x.",
            "f′(x) = 4x/(x² + 1)².",
          ]}
        />
        <ExampleCard
          title="Example 3: sin(x)/cos(x) = tan(x)"
          steps={[
            "Quotient gives (cos²x + sin²x)/cos²x = 1/cos²x = sec²x.",
            "Confirms (tan x)′ = sec²x.",
          ]}
        />
        <ExampleCard
          title="Example 4: e^x/(x² + 1)"
          steps={[
            "u′ = e^x, v′ = 2x.",
            "Numerator: e^x(x²+1) − e^x·2x = e^x(x² − 2x + 1).",
            "Factor e^x(x − 1)² over (x²+1)².",
          ]}
        />
      </section>

      <section>
        <h2 id="mistakes">Common mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Using f′/g′ instead of the quotient rule.</li>
          <li>Forgetting to square the denominator v².</li>
          <li>Sign error: writing uv′ − u′v instead of u′v − uv′.</li>
          <li>Differentiating only the numerator and leaving the denominator unchanged.</li>
          <li>Applying the quotient rule when the function is a product disguised by poor parentheses.</li>
        </ul>
        <WarningCard>
          For (x + 1)/(x − 1), do not cancel terms before differentiating unless you have simplified the function
          correctly for all x in the domain.
        </WarningCard>
      </section>

      <section>
        <h2 id="trig-rational">Trig and exponential numerators</h2>
        <p>
          Fractions like (1 + tan x)/x or x/e^x mix quotient rule with known derivatives from{" "}
          <Link href={EN_ROUTES.derivativeOfTanX} className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            e^x
          </Link>{" "}
          guides. Write u and v explicitly on scratch paper before substituting into the formula.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Expression</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Recommended approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">P(x)/Q(x) proper rational</td>
                <td className="border border-slate-200 px-4 py-3">Quotient or long division first</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">f(x)/c (constant denom)</td>
                <td className="border border-slate-200 px-4 py-3">(1/c)·f′(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">1/f(x)</td>
                <td className="border border-slate-200 px-4 py-3">Quotient with u=1 or chain on f^(−1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="rational-graphs">Rational functions: asymptotes and derivative signs</h2>
        <p>
          After finding f′ for a rational function, factoring numerator and denominator helps locate zeros of f′.
          Those zeros are candidates for horizontal tangents on the graph. Vertical asymptotes of f often occur
          where the denominator of f is zero; the derivative may blow up there as well. Connecting derivative signs
          to graph behavior is standard in curve-sketching units. For f(x) = x/(x+1), f′ = 1/(x+1)² is never zero,
          so the function has no horizontal tangents; it is always increasing on its domain.
        </p>
        <p>
          When the quotient rule produces a bulky numerator, pause before expanding. Sometimes factoring u′v − uv′
          reveals a common factor with v or with v², canceling in the simplified form of f′. Computer algebra systems
          factor automatically; on paper, look for shared (x − a) terms. If long division simplifies f before
          differentiating, the derivative of the quotient form and the derivative of the polynomial-plus-remainder
          form must agree—differentiating both ways is a strong self-check.
        </p>
      </section>

      <section>
        <h2 id="practice">Practice and next steps</h2>
        <p>
          Differentiate (3x − 2)/(x² + 4), (ln x)/x, and (1 + e^x)/(1 − e^x). Compare with{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          for mixed review. When the fraction defines y implicitly, see{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          .
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          { href: EN_ROUTES.quotientRuleCalculator, label: "Quotient rule calculator", desc: "u, v, u′, v′ labeled" },
          { href: EN_ROUTES.derivativeExamples, label: "Derivative examples", desc: "Mixed difficulty" },
        ]}
      />
    </ArticleWrap>
  );
}

