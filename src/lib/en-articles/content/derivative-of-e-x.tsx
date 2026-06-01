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

export function DerivativeOfEXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Introduction: e^x is its own derivative</h2>
        <p>
          The number e ≈ 2.71828 is chosen so that the exponential function f(x) = e^x has a remarkable property:
          its derivative equals itself. That is, d/dx e^x = e^x. No other base enjoys this simplicity—general
          exponentials a^x pick up a factor ln(a). This page explains the formula, why base e is special, chain
          rule for e^(g(x)), and how e^x connects to growth models and to{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            ln(x)
          </Link>
          . Verify symbolic steps on our{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>
          .
        </p>
        <p>
          Euler’s number arises as the limit of (1 + 1/n)^n and as the base for which the exponential grows at
          a rate equal to its current value—precisely the meaning of “derivative equals the function.”
        </p>
      </section>

      <section>
        <h2 id="formula">The fundamental formula</h2>
        <FormulaCard title="Derivative of e^x">
          {renderMath("\\dfrac{d}{dx} e^x = e^x", true)}
        </FormulaCard>
        <p>
          At every point, the slope of the tangent to y = e^x equals the y-coordinate. The function passes
          through (0, 1) with slope 1, through (1, e) with slope e, and so on. That self-similarity under
          differentiation makes e^x central to modeling continuous growth and decay.
        </p>
        <TipCard>
          For e^(kx), the chain rule gives k·e^(kx). The factor k appears whenever the exponent is scaled.
        </TipCard>
      </section>

      <section>
        <h2 id="why-e">Why base e, not base 10?</h2>
        <p>
          For a general base a &gt; 0, a^x can be written as e^(x ln a). Differentiating with the chain rule
          produces a^x ln(a). Only when a = e does ln(a) = 1, so the factor disappears and the function equals
          its derivative.
        </p>
        <FormulaCard title="General exponential">
          {renderMath("\\dfrac{d}{dx} a^x = a^x \\ln(a)", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: derivative of 2^x"
          steps={[
            "Write 2^x = e^(x ln 2).",
            "Derivative: e^(x ln 2) · ln 2 = 2^x ln 2.",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx} 2^x = 2^x \\ln 2", true)}</p>
        </ExampleCard>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule: e^(g(x))</h2>
        <FormulaCard title="Composition">
          {renderMath("\\dfrac{d}{dx} e^{g(x)} = e^{g(x)} \\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: e^(3x)"
          steps={["g(x) = 3x, g′ = 3.", "e^(3x) · 3 = 3e^(3x)."]}
        >
          <p>{renderMath("\\dfrac{d}{dx} e^{3x} = 3e^{3x}", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: e^(x²)">
          <p>{renderMath("\\dfrac{d}{dx} e^{x^2} = 2x e^{x^2}", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: e^(sin x)">
          <p>{renderMath("\\dfrac{d}{dx} e^{\\sin x} = \\cos(x)\\, e^{\\sin x}", true)}</p>
        </ExampleCard>
        <WarningCard>
          Do not confuse e^(x²) with (e^x)². They are different functions with different derivatives.
        </WarningCard>
      </section>

      <section>
        <h2 id="products">Products with e^x</h2>
        <ExampleCard
          title="Example: x·e^x"
          steps={[
            "Product rule: u = x, v = e^x.",
            "u′ = 1, v′ = e^x.",
            "Result: e^x + x·e^x = e^x(1 + x).",
          ]}
        />
        <ExampleCard
          title="Example: e^x·cos(x)"
          steps={["Product rule gives e^x(cos x − sin x).", "Compare with cos guide for trig part."]}
        />
        <p>
          Exponential–trig products are standard exam fare. After differentiating, you can often factor e^x out
          to simplify the final expression.
        </p>
      </section>

      <section>
        <h2 id="applications">Applications: growth and decay</h2>
        <p>
          If a quantity N(t) grows so that the rate of change is proportional to N, then dN/dt = kN has solution
          N = Ce^(kt). Positive k gives growth; negative k gives decay. Radioactive half-life, compound interest
          in continuous compounding, and Newton’s law of cooling all use the same exponential family.
        </p>
        <p>
          The second derivative of e^x is also e^x, so every order of differentiation returns e^x. That is
          unusual among elementary functions and useful in Taylor series: e^x equals the sum of x^n/n!.
        </p>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: uniqueness of base e and modeling</h2>
        <p>
          Among all bases a &gt; 0, only e makes the instantaneous rate of change equal to the current amount. That
          property characterizes exponential growth without extra constants in the derivative. Population models
          dP/dt = kP have solutions P = P₀e^(kt). Radioactive decay uses negative k. The same equation with
          different initial conditions only changes P₀, not the shape of the exponential. When data is exponential
          on a log-linear plot, differentiation of the fitted curve again produces an exponential, which is why e^x
          appears in regression and differential equations courses back-to-back.
        </p>
        <p>
          Comparing e^x with polynomial growth: for any fixed polynomial p(x), e^x eventually outgrows p(x) and
          p′(x) as well. Differentiating polynomials lowers degree; differentiating e^x leaves it unchanged. That
          contrast explains dominance of exponential terms in limits at infinity. In Taylor series, e^x equals the
          infinite sum of x^n/n!, so truncating the series approximates e^x near zero; differentiation term-by-term
          recovers the same series structure, a rare self-similarity.
        </p>
        <p>
          For sums like e^x + e^(−x) = 2 cosh x, hyperbolic functions inherit clean derivatives: sinh′ = cosh,
          cosh′ = sinh. They are built from exponentials and appear in hanging-cable and special relativity
          formulas. Recognizing cosh and sinh saves time compared to expanding into e^x and e^(−x) every time, but
          either route is valid with the chain and product rules you already know for base e.
        </p>
      </section>

      <section>
        <h2 id="table">Exponential and log derivative table</h2>
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
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^(kx)</td>
                <td className="border border-slate-200 px-4 py-3">k·e^(kx)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln(x)</td>
                <td className="border border-slate-200 px-4 py-3">1/x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">a^x</td>
                <td className="border border-slate-200 px-4 py-3">a^x ln(a)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          See also{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>
          .
        </p>
      </section>

      <CalcCTA label="Differentiate e^x and composites" />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          { href: EN_ROUTES.derivativeOfLnX, label: "Derivative of ln(x)", desc: "Inverse function pair" },
          { href: EN_ROUTES.derivativeExamples, label: "Derivative examples", desc: "Mixed practice" },
        ]}
      />
    </ArticleWrap>
  );
}
