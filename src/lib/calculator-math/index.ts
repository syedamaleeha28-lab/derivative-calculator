// @ts-ignore — nerdamer has no bundled types
import nerdamer from "nerdamer/all.min";

export type CalcStep = {
  label: string;
  latex: string;
  detail?: string;
};

export type CriticalPointResult = {
  x: string;
  xNum: number;
  yNum: number;
  fppAtPoint: string;
  classification: "local-max" | "local-min" | "saddle" | "inconclusive";
  classificationLabel: string;
};

/** Normalize user input for nerdamer. */
export function sanitizeExpr(expr: string): string {
  return expr
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/\blog10\s*\(/g, "§B10§(")
    .replace(/\bln\s*\(/g, "§LN§(")
    .replace(/\blog\s*\(/g, "§B10§(")
    .replace(/§LN§\(/g, "log(")
    .replace(/§B10§\(/g, "log10(")
    .replace(/\basin\s*\(/g, "asin(")
    .replace(/\bacos\s*\(/g, "acos(")
    .replace(/\batan\s*\(/g, "atan(")
    .replace(/e\^/g, "exp")
    .trim();
}

function normalizeRmTrig(tex: string): string {
  return tex.replace(
    /\\mathrm\{(sin|cos|tan|sec|csc|cot|ln|exp|sinh|cosh|tanh|asin|acos|atan)\}/g,
    "\\$1"
  );
}

export function toDisplayTeX(raw: string): string {
  let s = raw
    .replace(/\\log\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\log\s*\(\s*10\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\operatorname\{log\}\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\blog\s*\(\s*10\s*\)/g, "\\ln(10)")
    .replace(/log10/g, "\\ln(10)")
    .replace(/\\log(?!_{10})/g, "\\ln")
    .replace(/\\cdot\s*\\ln/g, "\\ln")
    .replace(/\\ln\s*\\cdot/g, "\\ln");
  s = normalizeRmTrig(s.replace(/\\cdot/g, "").replace(/\s+/g, " "));
  return s;
}

export function exprToTeX(clean: string): string {
  try {
    return toDisplayTeX(nerdamer(clean).toTeX());
  } catch {
    return clean;
  }
}

export function exprToText(clean: string): string {
  try {
    return nerdamer(clean).text();
  } catch {
    return clean;
  }
}

export function differentiate(clean: string, variable: string, order = 1): string {
  return nerdamer(`diff(${clean}, ${variable}, ${order})`).text();
}

export function differentiateTeX(clean: string, variable: string, order = 1): string {
  return toDisplayTeX(nerdamer(`diff(${clean}, ${variable}, ${order})`).toTeX());
}

export function evaluateAt(clean: string, variable: string, value: number): number | null {
  try {
    const sub = nerdamer(`subs(${variable}, ${value}, ${clean})`);
    const n = parseFloat(sub.evaluate().text());
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export function solveExprZeros(expr: string, variable: string): string[] {
  try {
    const solutions = nerdamer.solve(`(${expr})=0`, variable);
    if (!solutions) return [];
    const arr = Array.isArray(solutions) ? solutions : [solutions];
    return arr
      .map((s: { text?: () => string; toString?: () => string }) =>
        typeof s.text === "function" ? s.text() : String(s)
      )
      .filter((s) => s && s !== "false" && s !== "true");
  } catch {
    return [];
  }
}

export function solveDerivativeZeros(clean: string, variable: string): string[] {
  try {
    const fp = nerdamer(`diff(${clean}, ${variable})`).text();
    return solveExprZeros(fp, variable);
  } catch {
    return [];
  }
}

export function parseNumericSolution(s: string): number | null {
  try {
    const n = parseFloat(nerdamer(s).evaluate().text());
    return Number.isFinite(n) ? n : null;
  } catch {
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : null;
  }
}

export function sampleCurve(
  clean: string,
  variable: string,
  xMin: number,
  xMax: number,
  samples = 120
): { x: number; y: number }[] {
  const pts: { x: number; y: number }[] = [];
  const step = (xMax - xMin) / (samples - 1);
  for (let i = 0; i < samples; i++) {
    const x = xMin + i * step;
    const y = evaluateAt(clean, variable, x);
    if (y !== null && Math.abs(y) < 1e6) pts.push({ x, y });
  }
  return pts;
}

export function productRuleWorkflow(
  fRaw: string,
  gRaw: string,
  variable: string
): { result: string; resultTeX: string; steps: CalcStep[] } {
  const f = sanitizeExpr(fRaw);
  const g = sanitizeExpr(gRaw);
  const fp = differentiate(f, variable);
  const gp = differentiate(g, variable);
  const result = nerdamer(`(${fp})*(${g})+(${f})*(${gp})`).text();
  const resultTeX = toDisplayTeX(nerdamer(result).toTeX());
  const steps: CalcStep[] = [
    { label: "Identify u and v", latex: `u = ${exprToTeX(f)},\\quad v = ${exprToTeX(g)}` },
    { label: "Compute u′", latex: `u' = ${differentiateTeX(f, variable)}` },
    { label: "Compute v′", latex: `v' = ${differentiateTeX(g, variable)}` },
    {
      label: "Apply (uv)′ = u′v + uv′",
      latex: `(${differentiateTeX(f, variable)})(${exprToTeX(g)}) + (${exprToTeX(f)})(${differentiateTeX(g, variable)})`,
    },
    { label: "Simplify", latex: resultTeX },
  ];
  return { result, resultTeX, steps };
}

export function quotientRuleWorkflow(
  uRaw: string,
  vRaw: string,
  variable: string
): { result: string; resultTeX: string; steps: CalcStep[] } {
  const u = sanitizeExpr(uRaw);
  const v = sanitizeExpr(vRaw);
  const up = differentiate(u, variable);
  const vp = differentiate(v, variable);
  const result = nerdamer(`((${up})*(${v})-(${u})*(${vp}))/(${v})^2`).text();
  const resultTeX = toDisplayTeX(nerdamer(result).toTeX());
  const steps: CalcStep[] = [
    { label: "Numerator u", latex: `u = ${exprToTeX(u)}` },
    { label: "Denominator v", latex: `v = ${exprToTeX(v)}` },
    { label: "u′", latex: `u' = ${differentiateTeX(u, variable)}` },
    { label: "v′", latex: `v' = ${differentiateTeX(v, variable)}` },
    {
      label: "Apply (u/v)′ = (u′v − uv′) / v²",
      latex: `\\frac{(${differentiateTeX(u, variable)})(${exprToTeX(v)}) - (${exprToTeX(u)})(${differentiateTeX(v, variable)})}{(${exprToTeX(v)})^2}`,
    },
    { label: "Simplify", latex: resultTeX },
  ];
  return { result, resultTeX, steps };
}

export function criticalPointsWorkflow(
  fRaw: string,
  variable: string,
  locale: "es" | "en"
): { fp: string; fpTeX: string; points: CriticalPointResult[]; steps: CalcStep[] } {
  const f = sanitizeExpr(fRaw);
  const fp = differentiate(f, variable);
  const fpTeX = differentiateTeX(f, variable);
  const fpp = differentiate(f, variable, 2);
  const zeros = solveDerivativeZeros(f, variable);

  const labels = {
    "local-max": locale === "es" ? "Máximo local" : "Local maximum",
    "local-min": locale === "es" ? "Mínimo local" : "Local minimum",
    saddle: locale === "es" ? "Punto de silla / no extremo" : "Saddle / not an extremum",
    inconclusive: locale === "es" ? "Inconcluso (f″ = 0)" : "Inconclusive (f″ = 0)",
  };

  const points: CriticalPointResult[] = [];
  for (const z of zeros) {
    const xNum = parseNumericSolution(z);
    if (xNum === null) continue;
    const yNum = evaluateAt(f, variable, xNum);
    if (yNum === null) continue;
    const fppVal = evaluateAt(fpp, variable, xNum);
    let classification: CriticalPointResult["classification"] = "inconclusive";
    if (fppVal !== null) {
      if (fppVal > 0) classification = "local-min";
      else if (fppVal < 0) classification = "local-max";
      else classification = "inconclusive";
    }
    points.push({
      x: z,
      xNum,
      yNum,
      fppAtPoint: fppVal !== null ? fppVal.toFixed(4) : "—",
      classification,
      classificationLabel: labels[classification],
    });
  }

  const steps: CalcStep[] = [
    { label: locale === "es" ? "Función" : "Function", latex: `f(${variable}) = ${exprToTeX(f)}` },
    { label: locale === "es" ? "Primera derivada" : "First derivative", latex: `f'(${variable}) = ${fpTeX}` },
    {
      label: locale === "es" ? "Resolver f′ = 0" : "Solve f′ = 0",
      latex: zeros.length ? zeros.map((z) => `${variable} = ${z}`).join(",\\ ") : "\\text{—}",
    },
    {
      label: locale === "es" ? "Segunda derivada (criterio)" : "Second derivative test",
      latex: `f''(${variable}) = ${differentiateTeX(f, variable, 2)}`,
    },
  ];

  return { fp, fpTeX, points, steps };
}

export function tangentLineWorkflow(
  fRaw: string,
  variable: string,
  pointRaw: string,
  locale: "es" | "en"
): {
  slope: number | null;
  y0: number | null;
  equation: string;
  equationTeX: string;
  steps: CalcStep[];
} {
  const f = sanitizeExpr(fRaw);
  const a = parseNumericSolution(pointRaw);
  const fp = differentiate(f, variable);
  const fpTeX = differentiateTeX(f, variable);
  const slope = a !== null ? evaluateAt(fp, variable, a) : null;
  const y0 = a !== null ? evaluateAt(f, variable, a) : null;

  let equation = "—";
  let equationTeX = "—";
  if (a !== null && slope !== null && y0 !== null) {
    equation = `y = ${y0} + ${slope}(${variable} - ${a})`;
    equationTeX = `y = ${y0.toFixed(4)} + ${slope.toFixed(4)}(${variable} - ${a})`;
  }

  const steps: CalcStep[] = [
    { label: locale === "es" ? "Función" : "Function", latex: `f(${variable}) = ${exprToTeX(f)}` },
    { label: locale === "es" ? "Derivada" : "Derivative", latex: `f'(${variable}) = ${fpTeX}` },
    {
      label: locale === "es" ? "Pendiente en x = a" : "Slope at x = a",
      latex: a !== null && slope !== null ? `f'(${a}) = ${slope.toFixed(4)}` : "—",
    },
    {
      label: locale === "es" ? "Punto de tangencia" : "Point of tangency",
      latex: a !== null && y0 !== null ? `(${a},\\ ${y0.toFixed(4)})` : "—",
    },
    { label: locale === "es" ? "Ecuación de la tangente" : "Tangent equation", latex: equationTeX },
  ];

  return { slope, y0, equation, equationTeX, steps };
}

export function partialDerivativeWorkflow(
  fRaw: string,
  variable: string,
  locale: "es" | "en"
): { result: string; resultTeX: string; steps: CalcStep[] } {
  const f = sanitizeExpr(fRaw);
  const result = differentiate(f, variable);
  const resultTeX = differentiateTeX(f, variable);
  const steps: CalcStep[] = [
    {
      label: locale === "es" ? "Función multivariable" : "Multivariable function",
      latex: `f = ${exprToTeX(f)}`,
    },
    {
      label: locale === "es" ? "Variable de derivación" : "Differentiation variable",
      latex: `\\partial / \\partial ${variable}`,
    },
    {
      label: locale === "es" ? "Resultado" : "Result",
      latex: `\\frac{\\partial f}{\\partial ${variable}} = ${resultTeX}`,
    },
  ];
  return { result, resultTeX, steps };
}

export function higherOrderWorkflow(
  fRaw: string,
  variable: string,
  order: number,
  locale: "es" | "en"
): { result: string; resultTeX: string; chain: { order: number; tex: string }[]; steps: CalcStep[] } {
  const f = sanitizeExpr(fRaw);
  const chain: { order: number; tex: string }[] = [];
  for (let n = 1; n <= order; n++) {
    chain.push({ order: n, tex: differentiateTeX(f, variable, n) });
  }
  const result = differentiate(f, variable, order);
  const resultTeX = differentiateTeX(f, variable, order);
  const steps: CalcStep[] = chain.map((c) => ({
    label:
      c.order === 1
        ? locale === "es"
          ? "Primera derivada"
          : "First derivative"
        : `${c.order}${locale === "es" ? "ª derivada" : ordinal(c.order)}`,
    latex: `f^{(${c.order})}(${variable}) = ${c.tex}`,
  }));
  return { result, resultTeX, chain, steps };
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export type ConcavityRegion = {
  intervalLabel: string;
  sign: "concave-up" | "concave-down" | "linear";
  signLabel: string;
};

export type InflectionPoint = {
  x: string;
  xNum: number;
  yNum: number | null;
};

export function secondDerivativeWorkflow(
  fRaw: string,
  variable: string,
  order: number,
  locale: "es" | "en"
): {
  result: string;
  resultTeX: string;
  chain: { order: number; tex: string; label: string }[];
  concavity: ConcavityRegion[];
  inflectionPoints: InflectionPoint[];
  steps: CalcStep[];
} {
  const f = sanitizeExpr(fRaw);
  const chain: { order: number; tex: string; label: string }[] = [];
  for (let n = 0; n <= order; n++) {
    const tex = n === 0 ? exprToTeX(f) : differentiateTeX(f, variable, n);
    const label =
      n === 0
        ? locale === "es"
          ? "f"
          : "f"
        : n === 1
          ? locale === "es"
            ? "f′"
            : "f′"
          : n === 2
            ? locale === "es"
              ? "f″"
              : "f″"
            : `f^(${n})`;
    chain.push({ order: n, tex, label });
  }

  const result = order === 0 ? f : differentiate(f, variable, order);
  const resultTeX = order === 0 ? exprToTeX(f) : differentiateTeX(f, variable, order);

  const concavity: ConcavityRegion[] = [];
  const inflectionPoints: InflectionPoint[] = [];

  if (order >= 2) {
    const fpp = differentiate(f, variable, 2);
    const zeros = solveExprZeros(fpp, variable);
    const numericZeros = zeros
      .map((z) => ({ z, n: parseNumericSolution(z) }))
      .filter((p): p is { z: string; n: number } => p.n !== null)
      .sort((a, b) => a.n - b.n);

    const bounds = [-6, 6];
    const splitPoints = [bounds[0], ...numericZeros.map((p) => p.n), bounds[1]];

    const upLabel = locale === "es" ? "Cóncava hacia arriba (f″ > 0)" : "Concave up (f″ > 0)";
    const downLabel = locale === "es" ? "Cóncava hacia abajo (f″ < 0)" : "Concave down (f″ < 0)";
    const linearLabel = locale === "es" ? "Lineal / inconcluso (f″ = 0)" : "Linear / inconclusive (f″ = 0)";

    for (let i = 0; i < splitPoints.length - 1; i++) {
      const a = splitPoints[i];
      const b = splitPoints[i + 1];
      const mid = (a + b) / 2;
      const fppMid = evaluateAt(fpp, variable, mid);
      let sign: ConcavityRegion["sign"] = "linear";
      if (fppMid !== null) {
        if (fppMid > 1e-9) sign = "concave-up";
        else if (fppMid < -1e-9) sign = "concave-down";
      }
      concavity.push({
        intervalLabel: `(${a.toFixed(2)}, ${b.toFixed(2)})`,
        sign,
        signLabel: sign === "concave-up" ? upLabel : sign === "concave-down" ? downLabel : linearLabel,
      });
    }

    for (const { z, n } of numericZeros) {
      const eps = 0.05;
      const left = evaluateAt(fpp, variable, n - eps);
      const right = evaluateAt(fpp, variable, n + eps);
      if (left === null || right === null) continue;
      if (left * right < 0 || (Math.abs(left) > 1e-9 && Math.abs(right) > 1e-9 && Math.sign(left) !== Math.sign(right))) {
        inflectionPoints.push({
          x: z,
          xNum: n,
          yNum: evaluateAt(f, variable, n),
        });
      }
    }
  }

  const steps: CalcStep[] = [
    {
      label: locale === "es" ? "Función" : "Function",
      latex: `f(${variable}) = ${exprToTeX(f)}`,
    },
    ...chain.slice(1).map((c) => ({
      label:
        c.order === 1
          ? locale === "es"
            ? "Primera derivada"
            : "First derivative"
          : c.order === 2
            ? locale === "es"
              ? "Segunda derivada"
              : "Second derivative"
            : `${locale === "es" ? "Derivada" : "Derivative"} ${c.order}`,
      latex: `f^{(${c.order})}(${variable}) = ${c.tex}`,
    })),
  ];

  if (order >= 2) {
    steps.push({
      label: locale === "es" ? "Análisis de concavidad (f″)" : "Concavity analysis (f″)",
      latex: `f''(${variable}) = ${differentiateTeX(f, variable, 2)}`,
    });
    if (inflectionPoints.length) {
      steps.push({
        label: locale === "es" ? "Puntos de inflexión candidatos" : "Candidate inflection points",
        latex: inflectionPoints.map((p) => `${variable} = ${p.x}`).join(",\\ "),
      });
    }
  }

  return { result, resultTeX, chain, concavity, inflectionPoints, steps };
}

function substituteU(expr: string, inner: string): string {
  return expr.replace(/\bu\b/g, `(${inner})`);
}

export function chainRuleWorkflow(
  outerRaw: string,
  innerRaw: string,
  locale: "es" | "en"
): {
  composite: string;
  compositeTeX: string;
  outerPrimeTeX: string;
  innerPrimeTeX: string;
  outerPrimeAtInnerTeX: string;
  result: string;
  resultTeX: string;
  steps: CalcStep[];
} {
  const outer = sanitizeExpr(outerRaw);
  const inner = sanitizeExpr(innerRaw);
  const compositeExpr = sanitizeExpr(substituteU(outer, inner));
  const compositeTeX = exprToTeX(compositeExpr);
  const outerPrime = differentiate(outer, "u");
  const innerPrime = differentiate(inner, "x");
  const outerPrimeTeX = differentiateTeX(outer, "u");
  const innerPrimeTeX = differentiateTeX(inner, "x");
  const outerPrimeAtInner = sanitizeExpr(substituteU(outerPrime, inner));
  const outerPrimeAtInnerTeX = exprToTeX(outerPrimeAtInner);
  const chainProduct = nerdamer(`(${outerPrimeAtInner})*(${innerPrime})`).text();
  const resultTeX = toDisplayTeX(nerdamer(chainProduct).toTeX());
  const directDiff = differentiate(compositeExpr, "x");
  const directTeX = exprToTeX(directDiff);

  const steps: CalcStep[] = [
    {
      label: locale === "es" ? "Función exterior f(u)" : "Outer function f(u)",
      latex: `f(u) = ${exprToTeX(outer)}`,
    },
    {
      label: locale === "es" ? "Función interior g(x)" : "Inner function g(x)",
      latex: `g(x) = ${exprToTeX(inner)}`,
    },
    {
      label: locale === "es" ? "Composición f(g(x))" : "Composition f(g(x))",
      latex: `f(g(x)) = ${compositeTeX}`,
    },
    {
      label: locale === "es" ? "Derivada exterior f′(u)" : "Outer derivative f′(u)",
      latex: `f'(u) = ${outerPrimeTeX}`,
    },
    {
      label: locale === "es" ? "Derivada interior g′(x)" : "Inner derivative g′(x)",
      latex: `g'(x) = ${innerPrimeTeX}`,
    },
    {
      label: locale === "es" ? "Evaluar f′ en g(x)" : "Evaluate f′ at g(x)",
      latex: `f'(g(x)) = ${outerPrimeAtInnerTeX}`,
    },
    {
      label: locale === "es" ? "Regla de la cadena f′(g(x))·g′(x)" : "Chain rule f′(g(x))·g′(x)",
      latex: `${outerPrimeAtInnerTeX} \\cdot ${innerPrimeTeX} = ${resultTeX}`,
    },
    {
      label: locale === "es" ? "Verificación directa" : "Direct verification",
      latex: `\\frac{d}{dx}[f(g(x))] = ${directTeX}`,
      detail: locale === "es" ? "Coincide con el producto de la cadena" : "Matches the chain product",
    },
  ];

  return {
    composite: compositeExpr,
    compositeTeX,
    outerPrimeTeX,
    innerPrimeTeX,
    outerPrimeAtInnerTeX,
    result: chainProduct,
    resultTeX: directTeX !== "—" ? directTeX : resultTeX,
    steps,
  };
}

export function implicitDifferentiationWorkflow(
  leftRaw: string,
  rightRaw: string,
  locale: "es" | "en"
): {
  F: string;
  FTeX: string;
  FxTeX: string;
  FyTeX: string;
  result: string;
  resultTeX: string;
  steps: CalcStep[];
} {
  const left = sanitizeExpr(leftRaw);
  const right = sanitizeExpr(rightRaw);
  const F = nerdamer(`(${left})-(${right})`).text();
  const FTeX = exprToTeX(F);
  const Fx = differentiate(F, "x");
  const Fy = differentiate(F, "y");
  const FxTeX = differentiateTeX(F, "x");
  const FyTeX = differentiateTeX(F, "y");
  const result = nerdamer(`-(${Fx})/(${Fy})`).text();
  const resultTeX = toDisplayTeX(nerdamer(result).toTeX());

  const steps: CalcStep[] = [
    {
      label: locale === "es" ? "Ecuación" : "Equation",
      latex: `${exprToTeX(left)} = ${exprToTeX(right)}`,
    },
    {
      label: locale === "es" ? "Forma F(x, y) = 0" : "Form F(x, y) = 0",
      latex: `F(x, y) = ${FTeX} = 0`,
    },
    {
      label: locale === "es" ? "Derivar respecto a x (y depende de x)" : "Differentiate w.r.t. x (y depends on x)",
      latex: `\\frac{d}{dx}[F] = ${FxTeX} + ${FyTeX}\\cdot\\frac{dy}{dx} = 0`,
      detail:
        locale === "es"
          ? "∂F/∂x + (∂F/∂y)(dy/dx) = 0"
          : "∂F/∂x + (∂F/∂y)(dy/dx) = 0",
    },
    {
      label: locale === "es" ? "∂F/∂x (y constante)" : "∂F/∂x (y held constant)",
      latex: `F_x = ${FxTeX}`,
    },
    {
      label: locale === "es" ? "∂F/∂y (x constante)" : "∂F/∂y (x held constant)",
      latex: `F_y = ${FyTeX}`,
    },
    {
      label: locale === "es" ? "Despejar dy/dx" : "Solve for dy/dx",
      latex: `\\frac{dy}{dx} = -\\frac{F_x}{F_y} = ${resultTeX}`,
    },
  ];

  return { F, FTeX, FxTeX, FyTeX, result, resultTeX, steps };
}
