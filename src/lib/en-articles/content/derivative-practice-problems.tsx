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

export function DerivativePracticeProblemsContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Derivative practice problems: structured drills</h2>
        <p>
          Reading formulas is not enough—you need derivative practice problems with increasing difficulty, clear
          solution strategies, and a way to check your work. This page organizes problems into beginner,
          intermediate, and advanced tiers, labels which rule each problem stresses, and includes a self-test
          section you can attempt before reading the outline. Start with the{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          reference for formulas and the{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          gallery for fully worked solutions. Use the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator with steps
          </Link>{" "}
          to verify algebra after you attempt each problem on paper.
        </p>
        <p>
          Effective practice means naming the rule before you write: “power rule only,” “product then chain,”
          “quotient after simplification fails.” That habit transfers directly to timed exams and reduces the
          error class where students apply the power rule to a product.
        </p>
      </section>

      <section>
        <h2 id="beginner">Beginner practice: power rule and linearity</h2>
        <p>
          Master polynomials, roots, and negative exponents before adding product, quotient, or chain rules. Each
          problem below should take under two minutes once fluent.
        </p>
        <h3 id="beginner-1">Problem 1</h3>
        <p>Find f′(x) if f(x) = 4x⁵ − 7x³ + 2x − 9.</p>
        <ExampleCard
          title="Solution 1"
          steps={[
            "Apply linearity and power rule term by term.",
            "f′(x) = 20x⁴ − 21x² + 2.",
            "The constant −9 differentiates to 0.",
          ]}
        />
        <h3 id="beginner-2">Problem 2</h3>
        <p>Find g′(x) if g(x) = 3√x + 1/x.</p>
        <ExampleCard
          title="Solution 2"
          steps={[
            "Rewrite: 3x^(1/2) + x^(−1).",
            "g′(x) = (3/2)x^(−1/2) − x^(−2) = 3/(2√x) − 1/x².",
            "Domain: x > 0 for the root term.",
          ]}
        />
        <h3 id="beginner-3">Problem 3</h3>
        <p>Find h′(x) if h(x) = (2x + 1)⁶.</p>
        <TipCard>
          Hint: this is a composition—beginner chain rule. Outer power 6, inner 2x+1.
        </TipCard>
        <ExampleCard
          title="Solution 3"
          steps={[
            "Chain rule: 6(2x+1)⁵ · 2.",
            "h′(x) = 12(2x + 1)⁵.",
          ]}
        />
        <p>
          For power-rule intuition, see{" "}
          <Link href={EN_ROUTES.derivativeOfXSquared} className="text-violet-600 font-semibold hover:underline">
            derivative of x²
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="intermediate">Intermediate practice: product, quotient, and chain</h2>
        <h3 id="intermediate-1">Problem 4</h3>
        <p>Find f′(x) if f(x) = x²·e^x.</p>
        <ExampleCard
          title="Solution 4"
          steps={[
            "Product rule: u = x², v = e^x.",
            "u′ = 2x, v′ = e^x.",
            "f′(x) = 2x·e^x + x²·e^x = e^x(2x + x²).",
          ]}
        />
        <p>
          Check with the{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product rule calculator
          </Link>
          .
        </p>
        <h3 id="intermediate-2">Problem 5</h3>
        <p>Find g′(x) if g(x) = (x² + 3)/(x − 1).</p>
        <ExampleCard
          title="Solution 5"
          steps={[
            "Quotient rule: u = x²+3, v = x−1.",
            "u′ = 2x, v′ = 1.",
            "Numerator: 2x(x−1) − (x²+3) = x² − 2x − 3.",
            "g′(x) = (x² − 2x − 3)/(x − 1)².",
          ]}
        />
        <p>
          More fraction practice in{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>{" "}
          and the{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient rule calculator
          </Link>
          .
        </p>
        <h3 id="intermediate-3">Problem 6</h3>
        <p>Find h′(x) if h(x) = sin(3x − π/4).</p>
        <ExampleCard
          title="Solution 6"
          steps={[
            "Chain rule on sin: cos(3x − π/4) · 3.",
            "h′(x) = 3cos(3x − π/4).",
          ]}
        />
        <h3 id="intermediate-4">Problem 7</h3>
        <p>Find k′(x) if k(x) = ln(x² + 1).</p>
        <ExampleCard
          title="Solution 7"
          steps={["Chain rule: (2x)/(x² + 1)."]}
        />
        <p>
          Trig formulas:{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            ln(x)
          </Link>
          . Chain practice:{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="advanced">Advanced practice: nested and mixed rules</h2>
        <h3 id="advanced-1">Problem 8</h3>
        <p>Find f′(x) if f(x) = e^(x²)·sin(x).</p>
        <ExampleCard
          title="Solution 8"
          steps={[
            "Product: u = e^(x²), v = sin x.",
            "u′ = 2x·e^(x²) by chain rule.",
            "v′ = cos x.",
            "f′(x) = 2x·e^(x²)·sin x + e^(x²)·cos x.",
          ]}
        />
        <h3 id="advanced-2">Problem 9</h3>
        <p>Find g′(x) if g(x) = tan(x² + 1).</p>
        <ExampleCard
          title="Solution 9"
          steps={["Chain on tan: sec²(x²+1) · 2x.", "g′(x) = 2x·sec²(x² + 1)."]}
        />
        <h3 id="advanced-3">Problem 10</h3>
        <p>Find h′(x) if h(x) = x·ln(x² − 4).</p>
        <ExampleCard
          title="Solution 10"
          steps={[
            "Product: u = x, v = ln(x²−4).",
            "u′ = 1, v′ = 2x/(x²−4).",
            "h′(x) = ln(x²−4) + 2x²/(x²−4).",
            "Domain: |x| > 2.",
          ]}
        />
        <h3 id="advanced-4">Problem 11</h3>
        <p>Find k′(x) if k(x) = (sin x)/(1 + cos x).</p>
        <ExampleCard
          title="Solution 11"
          steps={[
            "Quotient rule.",
            "Numerator: cos x(1+cos x) − sin x(−sin x).",
            "Simplify using sin²+cos²=1 when possible.",
          ]}
        />
        <p>
          Implicit curves:{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          . Multivariable:{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="applications">Application practice: tangent lines and critical points</h2>
        <h3 id="app-1">Problem 12</h3>
        <p>Find the equation of the tangent line to f(x) = x³ − 3x at x = 2.</p>
        <ExampleCard
          title="Solution 12"
          steps={[
            "f(2) = 8 − 6 = 2.",
            "f′(x) = 3x² − 3, so f′(2) = 9.",
            "Tangent: y − 2 = 9(x − 2), or y = 9x − 16.",
          ]}
        />
        <p>
          Verify with the{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line calculator
          </Link>
          .
        </p>
        <h3 id="app-2">Problem 13</h3>
        <p>Find critical points of f(x) = x³ − 12x.</p>
        <ExampleCard
          title="Solution 13"
          steps={[
            "f′(x) = 3x² − 12 = 3(x² − 4).",
            "Set f′ = 0: x = ±2.",
            "Use second derivative or sign chart to classify.",
          ]}
        />
        <p>
          The{" "}
          <Link href={EN_ROUTES.criticalPointsCalculator} className="text-violet-600 font-semibold hover:underline">
            critical points calculator
          </Link>{" "}
          finds stationary points automatically.
        </p>
        <h3 id="app-3">Problem 14</h3>
        <p>Find f″(x) if f(x) = x⁴ − 2x² + 5.</p>
        <ExampleCard
          title="Solution 14"
          steps={["f′(x) = 4x³ − 4x.", "f″(x) = 12x² − 4."]}
        />
        <p>
          Use the{" "}
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
        <h2 id="implicit-partial">Implicit and partial derivative practice</h2>
        <h3 id="implicit-1">Problem 15</h3>
        <p>If x² + y² = 25, find dy/dx.</p>
        <ExampleCard
          title="Solution 15"
          steps={[
            "Differentiate both sides: 2x + 2y·dy/dx = 0.",
            "Solve: dy/dx = −x/y.",
          ]}
        />
        <p>
          Full walkthroughs:{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          . Tool:{" "}
          <Link href={EN_ROUTES.implicitDifferentiationCalculator} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation calculator
          </Link>
          .
        </p>
        <h3 id="partial-1">Problem 16</h3>
        <p>Find ∂f/∂x and ∂f/∂y if f(x, y) = x²y + e^y.</p>
        <ExampleCard
          title="Solution 16"
          steps={[
            "∂f/∂x = 2xy (treat y as constant).",
            "∂f/∂y = x² + e^y.",
          ]}
        />
        <p>
          Use the{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>{" "}
          for multivariable drills.
        </p>
      </section>

      <section>
        <h2 id="self-test">Self-test: try without looking</h2>
        <p>Attempt these four problems under a fifteen-minute timer before scrolling to the hints.</p>
        <h3 id="test-1">Self-test A</h3>
        <p>f(x) = (x³ − 1)(x + 2). Find f′(x).</p>
        <TipCard>Hint: expand to a polynomial or use the product rule.</TipCard>
        <h3 id="test-2">Self-test B</h3>
        <p>g(x) = e^(5x) cos(x). Find g′(x).</p>
        <h3 id="test-3">Self-test C</h3>
        <p>h(x) = √(x² + 9). Find h′(x).</p>
        <h3 id="test-4">Self-test D</h3>
        <p>k(x) = x/(x² + 1). Find k′(x).</p>
        <WarningCard>
          Work on paper first, then run the same input through the step-by-step tool to catch sign errors.
        </WarningCard>
      </section>

      <section>
        <h2 id="difficulty-table">Difficulty and rule mapping</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Level</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Problems</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Rules stressed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Beginner</td>
                <td className="border border-slate-200 px-4 py-3">1–3</td>
                <td className="border border-slate-200 px-4 py-3">Power, linearity, simple chain</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Intermediate</td>
                <td className="border border-slate-200 px-4 py-3">4–7</td>
                <td className="border border-slate-200 px-4 py-3">Product, quotient, chain (once)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Advanced</td>
                <td className="border border-slate-200 px-4 py-3">8–11</td>
                <td className="border border-slate-200 px-4 py-3">Multiple rules combined</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Applications</td>
                <td className="border border-slate-200 px-4 py-3">12–14</td>
                <td className="border border-slate-200 px-4 py-3">Tangent, critical points, f″</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Multivariable</td>
                <td className="border border-slate-200 px-4 py-3">15–16</td>
                <td className="border border-slate-200 px-4 py-3">Implicit, partial derivatives</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="study-plan">Weekly study plan</h2>
        <p>
          Day 1–2: Problems 1–3 without notes. Day 3–4: Problems 4–7, timed at five minutes each. Day 5:
          Problems 8–11 plus one from each specialized guide. Day 6: self-test section under exam conditions.
          Day 7: review mistakes and re-derive missed problems from memory. Cross-check every answer with the{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          or the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            homepage calculator
          </Link>
          .
        </p>
        <FormulaCard title="Product vs chain reminder">
          {renderMath("\\text{Product: } (uv)' \\quad \\text{Chain: } f(g(x))'", true)}
        </FormulaCard>
        <p>
          Formula reference:{" "}
          <Link href={EN_ROUTES.derivativeFormulas} className="text-violet-600 font-semibold hover:underline">
            derivative formulas
          </Link>
          . Full rule explanations:{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>
          . Worked gallery:{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="exam-tips">Exam-style tips</h2>
        <p>
          On timed tests, pass one identifies the rule—underline structure, mark u and v, circle inner g. Pass two
          executes algebra. Pass three checks domain and simplification. Most partial-credit loss comes from
          correct rule with algebra slip; factoring e^x or ln terms at the end often reveals the clean form graders
          expect.
        </p>
        <p>
          Mixed review beats single-rule drills before midterms. Randomly select one beginner, one intermediate,
          and one advanced problem under a twenty-minute timer. Score yourself on rule name, final answer, and
          whether you could explain one step aloud. Explanation catches conceptual gaps that repeating similar
          problems masks.
        </p>
        <p>
          Word problems hide derivatives inside rate-of-change language. “How fast is height changing” means
          find dh/dt; related rates are implicit differentiation in story form. When a ladder slides, differentiate
          the geometric constraint with respect to time t, not x alone.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        heading="All calculator tools"
        links={[
          { href: EN_MAIN_CALCULATOR_HREF, label: "Derivative calculator", desc: "General step-by-step tool" },
          { href: EN_ROUTES.derivativeCalculator, label: "Derivative calculator page", desc: "Dedicated landing" },
          { href: EN_ROUTES.partialDerivativeCalculator, label: "Partial derivative", desc: "∂/∂x and ∂/∂y" },
          { href: EN_ROUTES.chainRuleCalculator, label: "Chain rule", desc: "Nested compositions" },
          { href: EN_ROUTES.implicitDifferentiationCalculator, label: "Implicit differentiation", desc: "dy/dx from equations" },
          { href: EN_ROUTES.secondDerivativeCalculator, label: "Second derivative", desc: "Concavity and f″" },
          { href: EN_ROUTES.productRuleCalculator, label: "Product rule", desc: "uv breakdown" },
          { href: EN_ROUTES.quotientRuleCalculator, label: "Quotient rule", desc: "u/v fractions" },
          { href: EN_ROUTES.higherOrderDerivativeCalculator, label: "Higher-order", desc: "nth derivatives" },
          { href: EN_ROUTES.tangentLineCalculator, label: "Tangent line", desc: "Slope and equation" },
          { href: EN_ROUTES.criticalPointsCalculator, label: "Critical points", desc: "Maxima and minima" },
        ]}
      />
    </ArticleWrap>
  );
}
