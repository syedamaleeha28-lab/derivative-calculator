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
  EN_MAIN_CALCULATOR_HREF,
  EN_ROUTES,
} from "../helpers";

export function DerivativeOfCosXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="overview">Overview: the derivative of cos(x)</h2>
        <p>
          The derivative of cos x is −sin(x). That minus sign surprises many students the first time they see
          it, but it is consistent with the graph: cosine decreases on intervals where sine is positive, and
          the slope of cos(x) is negative where sin(x) is positive. This article gives the formula, a proof
          sketch, chain-rule and product examples, and links to related guides including the{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            derivative of sin(x)
          </Link>{" "}
          and the complete{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          reference.
        </p>
        <p>
          Cosine and sine are partners in the unit circle and in differentiation: each derivative is the other
          function with an appropriate sign. Mastering cos(x) completes the core pair you need before tangent
          and the reciprocal trig functions.
        </p>
      </section>

      <section>
        <h2 id="formula">Formula and notation</h2>
        <FormulaCard title="Derivative of cosine">
          {renderMath("\\dfrac{d}{dx}\\cos(x) = -\\sin(x)", true)}
        </FormulaCard>
        <p>
          In Leibniz notation, if y = cos(x), then dy/dx = −sin(x). In operator notation, D_x[cos x] = −sin x.
          All forms mean the same thing: the instantaneous rate of change of cosine is negative sine, in
          radians.
        </p>
        <TipCard>
          Pair this with (sin x)′ = cos x. If you forget which gets the minus, remember cosine’s derivative is
          negative sine because cosine lags sine by a quarter period.
        </TipCard>
      </section>

      <section>
        <h2 id="proof">Proof sketch: why the minus sign appears</h2>
        <p>
          One elegant approach uses the cofunction identity cos(x) = sin(π/2 − x) and the chain rule. Another
          uses the limit definition with the angle-addition formula for cos(h). Both end at −sin(x).
        </p>
        <ExampleCard
          title="Proof via cofunction identity"
          steps={[
            "Write cos(x) = sin(π/2 − x).",
            "Let u = π/2 − x, so du/dx = −1.",
            "d/dx sin(u) = cos(u)·(du/dx) = cos(π/2 − x)·(−1).",
            "cos(π/2 − x) = sin(x), so the result is −sin(x).",
          ]}
        />
        <p>
          Alternatively, from the limit of [cos(x+h) − cos(x)]/h, expand cos(x+h) = cos x cos h − sin x sin h,
          apply lim(cos h − 1)/h = 0 and lim sin h/h = 1, and collect −sin(x). Either path shows the sign is
          forced by algebra, not chosen arbitrarily.
        </p>
      </section>

      <section>
        <h2 id="geometry">Geometric and physical interpretation</h2>
        <p>
          On the unit circle, cos(x) gives the horizontal coordinate as the angle x increases. When the point
          moves counterclockwise, the horizontal speed is opposite to the vertical rate given by sin(x) in the
          appropriate phase. In simple harmonic motion, if position is modeled with cosine, velocity is
          proportional to sine with a sign flip—exactly what (cos t)′ = −sin t encodes.
        </p>
        <p>
          At x = 0, cos(x) has value 1 and a flat tangent (slope 0), matching −sin(0) = 0. At x = π/2, cos is
          zero and decreasing, so the derivative is negative; −sin(π/2) = −1 confirms that.
        </p>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule: derivative of cos(g(x))</h2>
        <FormulaCard title="Composition">
          {renderMath("\\dfrac{d}{dx}\\cos(g(x)) = -\\sin(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: cos(2x)"
          steps={[
            "Outer derivative: −sin(2x).",
            "Inner derivative: 2.",
            "Result: −2sin(2x).",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}\\cos(2x) = -2\\sin(2x)", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: cos(x²)">
          <p>{renderMath("\\dfrac{d}{dx}\\cos(x^2) = -\\sin(x^2)\\cdot 2x = -2x\\sin(x^2)", true)}</p>
        </ExampleCard>
        <WarningCard>
          The minus from cosine’s derivative is separate from the minus from du/dx when u = π/2 − x. In
          cos(2x), do not drop the factor 2 or confuse it with the leading negative of −sin(2x).
        </WarningCard>
      </section>

      <section>
        <h2 id="products">Product and mixed examples</h2>
        <ExampleCard
          title="Example: x·cos(x)"
          steps={[
            "u = x, v = cos(x); u′ = 1, v′ = −sin(x).",
            "(uv)′ = cos(x) − x·sin(x).",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}[x\\cos(x)] = \\cos(x) - x\\sin(x)", true)}</p>
        </ExampleCard>
        <ExampleCard
          title="Example: e^x·cos(x)"
          steps={[
            "Product rule with u = e^x, v = cos(x).",
            "u′ = e^x, v′ = −sin(x).",
            "Result: e^x(cos x − sin x).",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}[e^x\\cos(x)] = e^x(\\cos x - \\sin x)", true)}</p>
        </ExampleCard>
        <p>
          For e^x and ln x rules used inside products, see{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            derivative of e^x
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            derivative of ln(x)
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="table">Trig derivative comparison table</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Function</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Derivative</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Sign note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin(x)</td>
                <td className="border border-slate-200 px-4 py-3">cos(x)</td>
                <td className="border border-slate-200 px-4 py-3">positive sine slope at 0</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cos(x)</td>
                <td className="border border-slate-200 px-4 py-3">−sin(x)</td>
                <td className="border border-slate-200 px-4 py-3">minus from cofunction / graph</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">tan(x)</td>
                <td className="border border-slate-200 px-4 py-3">sec²(x)</td>
                <td className="border border-slate-200 px-4 py-3">quotient of sin and cos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: phase, amplitude, and the minus sign</h2>
        <p>
          Write cos x as sin(x + π/2). Differentiating with respect to x and using the chain rule on the shifted
          argument produces cos(x + π/2), which equals −sin x by the cofunction identity. That single line explains
          both the formula and the sign in one stroke. Amplitude changes scale the function but not the derivative
          pattern: d/dx[A cos x] = −A sin x. Vertical shifts add constants that disappear on differentiation: d/dx
          [cos x + k] = −sin x. Horizontal shifts inside the argument always invoke the chain rule, so d/dx cos(x
          − π/3) = −sin(x − π/3) without an extra sign from the shift itself—the sign comes from cosine, not from
          the translation.
        </p>
        <p>
          When cosine models a signal offset from zero, the derivative describes how quickly that signal moves toward
          or away from equilibrium. In economics and biology, oscillatory models with cosine leading terms appear
          as seasonal components; the derivative forecasts the direction of change at each instant, not the
          long-term average. For piecewise smooth curves built from cos on intervals, remember that corner points
          between pieces are not differentiable unless the left and right limits of the derivative match—cosine
          itself is smooth everywhere, but |cos x| introduces corners where cos x = 0.
        </p>
        <p>
          Build speed by drilling negative signs separately: cos(2x), −cos x, and cos x − sin x under the product
          rule each train a different algebraic habit. Students who lose points on cosine problems usually have a
          chain-rule gap or a sign gap, rarely both unknown. Diagnose which by checking whether missing factors
          like 2 in cos(2x) appear; if not, the chain rule needs work. If factors are present but the answer is
          opposite sign, revisit the −sin identity and product-term distribution.
        </p>
      </section>

      <section>
        <h2 id="practice">Study plan and verification</h2>
        <p>
          Practice cos(g(x)) with g linear, quadratic, and exponential. Check each result on the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>
          . Combine with problems from{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          once basic trig rules feel automatic.
        </p>
        <p>
          Second derivative of cos(x) is −cos(x); third is sin(x). The pattern cycles—useful for differential
          equations and for checking work with the{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>
          .
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          { href: EN_ROUTES.derivativeOfSinX, label: "Derivative of sin(x)", desc: "The paired basic trig rule" },
          { href: EN_ROUTES.derivativeOfTanX, label: "Derivative of tan(x)", desc: "sec² from quotient rule" },
        ]}
      />
    </ArticleWrap>
  );
}

