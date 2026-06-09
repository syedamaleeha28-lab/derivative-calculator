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

export function DerivativeCheatSheetContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="overview">Derivative cheat sheet: quick reference for exams</h2>
        <p>
          A derivative cheat sheet condenses every differentiation rule, standard function formula, and
          decision shortcut onto one scannable page. Use this guide for last-minute review before a quiz, as a
          printable reference during open-note practice, or as a map to deeper material in our{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          article and{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          . Pair it with the{" "}
          <Link href={EN_ROUTES.derivativeFormulas} className="text-violet-600 font-semibold hover:underline">
            derivative formulas
          </Link>{" "}
          page for extended tables and the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator with steps
          </Link>{" "}
          to verify any row you are unsure about.
        </p>
        <p>
          Cheat sheets work best when you already understand when to apply each row—not merely what the row
          says. Read the strategy section below the tables before exam day so you can classify a problem in
          seconds: sum, product, quotient, or composition.
        </p>
      </section>

      <section>
        <h2 id="core-rules">Core rules at a glance</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Rule</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Formula</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Constant</td>
                <td className="border border-slate-200 px-4 py-3">0</td>
                <td className="border border-slate-200 px-4 py-3">Standalone number</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Linearity</td>
                <td className="border border-slate-200 px-4 py-3">(f ± g)′ = f′ ± g′</td>
                <td className="border border-slate-200 px-4 py-3">Sum or difference</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Power</td>
                <td className="border border-slate-200 px-4 py-3">n·x^(n−1)</td>
                <td className="border border-slate-200 px-4 py-3">x^n alone</td>
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
                <td className="border border-slate-200 px-4 py-3">Nested f(g(x))</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Tools for each rule:{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product rule calculator
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient rule calculator
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>
          .
        </p>
        <WarningCard>
          (fg)′ ≠ f′g′. (f/g)′ ≠ f′/g′. (f∘g)′ ≠ f′∘g′.
        </WarningCard>
      </section>

      <section>
        <h2 id="trig-sheet">Trigonometric cheat sheet</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-200 px-4 py-3">sin x</td><td className="border border-slate-200 px-4 py-3">cos x</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">cos x</td><td className="border border-slate-200 px-4 py-3">−sin x</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">tan x</td><td className="border border-slate-200 px-4 py-3">sec² x</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">cot x</td><td className="border border-slate-200 px-4 py-3">−csc² x</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">sec x</td><td className="border border-slate-200 px-4 py-3">sec x tan x</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">csc x</td><td className="border border-slate-200 px-4 py-3">−csc x cot x</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Deep dives:{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeOfCosX} className="text-violet-600 font-semibold hover:underline">
            cos(x)
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeOfTanX} className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>
          . Remember: calculus trig derivatives assume radians.
        </p>
      </section>

      <section>
        <h2 id="log-exp-sheet">Logarithm and exponential cheat sheet</h2>
        <FormulaCard title="Essential log and exp rows">
          {renderMath(
            "\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}, \\quad \\dfrac{d}{dx} e^x = e^x, \\quad \\dfrac{d}{dx} a^x = a^x \\ln a",
            true
          )}
        </FormulaCard>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Domain note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln x</td>
                <td className="border border-slate-200 px-4 py-3">1/x</td>
                <td className="border border-slate-200 px-4 py-3">x &gt; 0</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln|x|</td>
                <td className="border border-slate-200 px-4 py-3">1/x</td>
                <td className="border border-slate-200 px-4 py-3">x ≠ 0</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">All reals</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">a^x</td>
                <td className="border border-slate-200 px-4 py-3">a^x ln a</td>
                <td className="border border-slate-200 px-4 py-3">a &gt; 0, a ≠ 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Guides:{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            derivative of ln(x)
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            derivative of e^x
          </Link>
          . Chain cases: ln(g(x)) → g′/g; e^(g(x)) → e^(g(x))·g′.
        </p>
      </section>

      <section>
        <h2 id="inverse-trig">Inverse trigonometric cheat sheet</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-200 px-4 py-3">arcsin x</td><td className="border border-slate-200 px-4 py-3">1/√(1−x²)</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">arccos x</td><td className="border border-slate-200 px-4 py-3">−1/√(1−x²)</td></tr>
              <tr><td className="border border-slate-200 px-4 py-3">arctan x</td><td className="border border-slate-200 px-4 py-3">1/(1+x²)</td></tr>
            </tbody>
          </table>
        </div>
        <TipCard>
          For arctan(g(x)), the chain rule gives g′(x)/(1+g(x)²)—a pattern that appears often in integration
          by substitution.
        </TipCard>
      </section>

      <section>
        <h2 id="implicit-partial">Implicit and partial derivative rows</h2>
        <FormulaCard title="Implicit differentiation">
          {renderMath("\\text{Differentiate both sides; replace } \\dfrac{d}{dx}[y] \\text{ with } \\dfrac{dy}{dx}", true)}
        </FormulaCard>
        <p>
          When y is not isolated, every y-term picks up dy/dx. Examples and full solutions:{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          . Tool:{" "}
          <Link href={EN_ROUTES.implicitDifferentiationCalculator} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation calculator
          </Link>
          .
        </p>
        <FormulaCard title="Partial derivative">
          {renderMath("\\dfrac{\\partial}{\\partial x}: \\text{ treat other variables as constants}", true)}
        </FormulaCard>
        <p>
          Multivariable practice:{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>
          . Calculator:{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="higher-order">Higher-order and application rows</h2>
        <p>
          Second derivative f″ describes concavity; nth derivative repeats the process. (sin x)″ = −sin x;
          (e^x)⁽ⁿ⁾ = e^x. Tools:{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.higherOrderDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            higher-order derivative calculator
          </Link>
          .
        </p>
        <FormulaCard title="Tangent line at x = a">
          {renderMath("y = f(a) + f'(a)(x - a)", true)}
        </FormulaCard>
        <p>
          Critical points: solve f′(x) = 0 or f′ undefined. Classify with first or second derivative test.
          Tools:{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line calculator
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.criticalPointsCalculator} className="text-violet-600 font-semibold hover:underline">
            critical points calculator
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="decision-flow">Five-second decision flow</h2>
        <p>
          Step 1: Is the top level a sum? Split and differentiate each term. Step 2: Is it a product of two
          non-constant factors? Product rule. Step 3: Is it a quotient u/v? Quotient rule—or simplify first.
          Step 4: Is it f(g(x))? Chain rule. Step 5: Combine as needed; simplify last.
        </p>
        <ExampleCard
          title="Quick classify: e^(x²)·sin(x)"
          steps={[
            "Top level: product of e^(x²) and sin x.",
            "Product rule; chain inside u′ for e^(x²).",
            "Not a quotient; not a bare power.",
          ]}
        />
        <ExampleCard
          title="Quick classify: (2x+1)⁵"
          steps={["Composition: outer power 5, inner 2x+1.", "Chain rule only.", "Result: 5(2x+1)⁴·2."]}
        />
        <p>
          Practice classifying under time pressure on the{" "}
          <Link href={EN_ROUTES.derivativePracticeProblems} className="text-violet-600 font-semibold hover:underline">
            derivative practice problems
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2 id="common-mistakes">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Forgetting the chain factor: d/dx sin(3x) = 3cos(3x), not cos(3x).</li>
          <li>Applying the power rule to a product: (x·e^x)′ ≠ 1·e^x.</li>
          <li>Missing the denominator v² in the quotient rule.</li>
          <li>Using degrees instead of radians for trig derivatives.</li>
          <li>Differentiating ln(x) as 1 instead of 1/x.</li>
          <li>Canceling terms in a sum as if it were a fraction.</li>
        </ul>
        <p>
          After each practice set, run missed problems through the{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          and compare step labels to your work.
        </p>
      </section>

      <section>
        <h2 id="print-tips">How to use this cheat sheet effectively</h2>
        <p>
          Do not treat the tables as a substitute for understanding. The best workflow: attempt problems from{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          without the sheet, then use this page only to recover a forgotten formula. Highlight rows you miss
          repeatedly—those become your spaced-repetition list. Before exams, walk the five-second decision flow
          on ten random expressions; if classification takes longer than ten seconds, return to{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          for narrative review.
        </p>
        <p>
          Open-note exams reward organized sheets. Group rules by structure (sum, product, quotient, chain) not
          by function type. Keep trig and log/exp tables adjacent but separate from structural rules so you do
          not grab sin′ when you need the product rule.
        </p>
        <TipCard>
          Bookmark this page and the formula reference together. The cheat sheet is optimized for speed; the
          formulas page adds context and worked examples for learning mode.
        </TipCard>
      </section>

      <section>
        <h2 id="mnemonics">Mnemonics that survive exam pressure</h2>
        <p>
          Product rule: “first d-second plus second d-first.” Quotient rule: “low d-high minus high d-low, over
          low squared.” Chain rule: “derivative of outside, keep inside, times derivative of inside.” These
          phrases are slower than recognition at mastery level but rescue you when fatigue hits during a long
          exam.
        </p>
        <p>
          For tangent and critical-point application rows, remember: derivative gives slope; setting derivative to
          zero finds horizontal tangents (candidate extrema). The second derivative sign tells concavity: f″ &gt; 0
          cups upward, f″ &lt; 0 cups downward. Link each mnemonic row to one calculator check so the association
          sticks: tangent row →{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line calculator
          </Link>
          ; critical row →{" "}
          <Link href={EN_ROUTES.criticalPointsCalculator} className="text-violet-600 font-semibold hover:underline">
            critical points calculator
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="classification-drills">Classification drills for exam fluency</h2>
        <p>
          A cheat sheet only helps if you can reach the correct row in seconds. Spend ten minutes daily on pure
          classification—no full algebra—by naming the rule for each expression below before checking the tables
          above. Treat wrong answers as signals to revisit the{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          guide for narrative explanation, not just the formula row.
        </p>
        <ExampleCard
          title="Drill set A: name the rule only"
          steps={[
            "x⁴ − 3x² + 7 → linearity + power (no product, no chain).",
            "x·cos x → product rule.",
            "(x² + 1)/(x − 2) → quotient rule.",
            "e^(−x²) → chain rule on exponential.",
            "arctan(2x) → chain rule on inverse trig.",
          ]}
        />
        <ExampleCard
          title="Drill set B: mixed structures"
          steps={[
            "ln(x·sin x) → expand with log laws first, or product inside ln (chain).",
            "√(x² + 4) → power/chain: (x²+4)^(1/2).",
            "x²·e^(3x) → product with chain inside v.",
            "tan(e^x) → chain on tan, inner e^x.",
          ]}
        />
        <p>
          After naming rules, attempt one full solution per drill set without notes. Verify with the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            homepage derivative calculator
          </Link>{" "}
          and compare step labels. The first step name should match your classification every time.
        </p>
      </section>

      <section>
        <h2 id="pairing-guides">Pairing this sheet with longer guides</h2>
        <p>
          Use this cheat sheet for speed and the companion pages for depth. The{" "}
          <Link href={EN_ROUTES.derivativeFormulas} className="text-violet-600 font-semibold hover:underline">
            derivative formulas
          </Link>{" "}
          article adds extended tables, application formulas, and when-to-use columns for each row. The{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          gallery walks through beginner-to-advanced problems with full algebra. The{" "}
          <Link href={EN_ROUTES.derivativePracticeProblems} className="text-violet-600 font-semibold hover:underline">
            derivative practice problems
          </Link>{" "}
          page supplies timed drills and a weekly study plan.
        </p>
        <p>
          A productive study loop: read a section in derivative rules, cover the matching rows on this sheet,
          solve three problems from practice problems without looking, then uncover only the rows you missed.
          Repeat the loop for trig, log/exp, implicit, and application blocks across a single week. By exam week,
          the sheet becomes a safety net rather than a crutch—you recall most rows from memory and use the tables
          only for inverse trig or quotient-rule denominator reminders.
        </p>
        <TipCard>
          Highlight the five-second decision flow and the common-mistakes list. Those two sections prevent more
          lost points than memorizing obscure rows like csc′.
        </TipCard>
      </section>

      <section>
        <h2 id="calculator-crosswalk">Calculator crosswalk: every tool on one map</h2>
        <p>
          Each row on this cheat sheet maps to a specialized calculator when you need step-by-step confirmation.
          General expressions go to the{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          page or the embedded tool on the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            English homepage
          </Link>
          . Product and quotient rows map to their dedicated calculators. Chain-heavy compositions—including nested
          trig and exponentials—map to the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>
          . Implicit rows map to the{" "}
          <Link href={EN_ROUTES.implicitDifferentiationCalculator} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation calculator
          </Link>
          . Partial rows map to the{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>
          . Concavity and Taylor prep map to the{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.higherOrderDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            higher-order derivative
          </Link>{" "}
          calculators. Graph sketching applications map to the{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.criticalPointsCalculator} className="text-violet-600 font-semibold hover:underline">
            critical points
          </Link>{" "}
          calculators.
        </p>
        <WarningCard>
          Do not jump to a specialized calculator before classifying the problem. Pick the rule from this sheet
          first, attempt the derivative by hand, then use the tool to audit your work.
        </WarningCard>
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
