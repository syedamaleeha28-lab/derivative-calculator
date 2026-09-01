// @ts-ignore — nerdamer has no bundled types
import nerdamer from "nerdamer/all.min";
import { sanitizeExpr, formatNumericResult } from "./sanitize";

export { sanitizeExpr, formatNumericResult };

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
    const sub = nerdamer(clean).sub(variable, value);
    const n = parseFloat(sub.evaluate().text());
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export function evaluateDerivativeAtPoint(
  derivativeExpr: string,
  variable: string,
  pointRaw: string
): { value: number; displayPoint: string } | null {
  const trimmed = pointRaw.trim();
  if (!trimmed) return null;

  const a = parseNumericSolution(sanitizeExpr(trimmed));
  if (a === null) return null;

  const value = evaluateAt(derivativeExpr, variable, a);
  if (value === null || !Number.isFinite(value)) return null;

  return { value, displayPoint: trimmed };
}

function solutionToken(s: unknown): string {
  if (s && typeof s === "object" && typeof (s as { text?: () => string }).text === "function") {
    return (s as { text: () => string }).text();
  }
  return String(s);
}

function flattenSolutionTokens(tokens: string[]): string[] {
  const out: string[] = [];
  for (const raw of tokens) {
    const t = raw.trim();
    if (!t || t === "false" || t === "true") continue;
    if (t.startsWith("[") && t.endsWith("]") && !t.slice(1, -1).includes("[")) {
      for (const part of t.slice(1, -1).split(",")) {
        const p = part.trim();
        if (p) out.push(p);
      }
    } else {
      out.push(t);
    }
  }
  return out;
}

export function solveExprZeros(expr: string, variable: string): string[] {
  try {
    const solutions = nerdamer.solve(`(${expr})=0`, variable) as {
      each?: (cb: (s: unknown) => void) => void;
    };
    if (!solutions) return [];
    const tokens: string[] = [];
    if (typeof solutions.each === "function") {
      solutions.each((s) => tokens.push(solutionToken(s)));
    } else {
      const arr = Array.isArray(solutions) ? solutions : [solutions];
      for (const s of arr) tokens.push(solutionToken(s));
    }
    return flattenSolutionTokens(tokens);
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

/** Parse approach point for nerdamer limit. Finite points only for now. */
export function parseLimitApproach(raw: string): string {
  const t = sanitizeExpr(raw).toLowerCase().replace(/\s+/g, "");
  if (!t) throw new Error("Missing approach point");
  if (
    t === "inf" ||
    t === "+inf" ||
    t === "infinity" ||
    t === "+infinity" ||
    t === "oo" ||
    t === "+oo" ||
    t === "∞" ||
    t === "+∞" ||
    t === "-inf" ||
    t === "-infinity" ||
    t === "-oo" ||
    t === "-∞"
  ) {
    throw new Error("Infinity approach not supported");
  }
  return sanitizeExpr(raw);
}

export function formatLimitApproachTeX(point: string): string {
  if (point === "Infinity") return "\\infty";
  if (point === "-Infinity") return "-\\infty";
  return exprToTeX(point);
}

export function limitWorkflow(
  fRaw: string,
  variable: string,
  approachRaw: string,
  locale: "es" | "en"
): { result: string; resultTeX: string; approach: string; steps: CalcStep[] } {
  const f = sanitizeExpr(fRaw);
  if (!f) throw new Error("Empty expression");
  const approach = parseLimitApproach(approachRaw);
  const approachTeX = formatLimitApproachTeX(approach);
  const fTeX = exprToTeX(f);

  let directText = "";
  let directTeX = "";
  let looksIndeterminate = false;
  try {
    if (approach === "Infinity" || approach === "-Infinity") {
      looksIndeterminate = true;
      directText = locale === "es" ? "forma en el infinito" : "form at infinity";
      directTeX = "\\cdots";
    } else {
      const aNum = parseFloat(approach);
      if (Number.isFinite(aNum) && String(aNum) === approach.trim()) {
        const y = evaluateAt(f, variable, aNum);
        if (y === null || !Number.isFinite(y)) {
          looksIndeterminate = true;
          directText =
            locale === "es" ? "indeterminada / no definida" : "indeterminate / undefined";
          directTeX = "\\text{¿?}";
        } else {
          directText = formatNumericResult(y);
          directTeX = exprToTeX(directText);
        }
      } else {
        const sub = nerdamer(`subs(${variable}, ${approach}, ${f})`).evaluate();
        directText = sub.text();
        directTeX = toDisplayTeX(sub.toTeX());
        const n = parseFloat(directText);
        looksIndeterminate =
          !Number.isFinite(n) ||
          /nan|undefined|infinity/i.test(directText) ||
          /subs\s*\(/i.test(directText);
      }
    }
  } catch {
    looksIndeterminate = true;
    directText = locale === "es" ? "indeterminada / no definida" : "indeterminate / undefined";
    directTeX = "\\text{¿?}";
  }

  const limitExpr = nerdamer(`limit(${f}, ${variable}, ${approach})`);
  const result = limitExpr.text();
  const resultTeX = toDisplayTeX(limitExpr.toTeX());

  if (!result || /limit\s*\(/i.test(result)) {
    throw new Error("Limit could not be computed");
  }

  const steps: CalcStep[] = [
    {
      label: locale === "es" ? "Expresión" : "Expression",
      latex: `f(${variable}) = ${fTeX}`,
    },
    {
      label: locale === "es" ? "Límite pedido" : "Requested limit",
      latex: `\\lim_{${variable}\\to ${approachTeX}} ${fTeX}`,
    },
    {
      label: locale === "es" ? "Sustitución directa" : "Direct substitution",
      latex: looksIndeterminate
        ? locale === "es"
          ? `f(${approachTeX}) \\to \\text{forma indeterminada o indefinida}`
          : `f(${approachTeX}) \\to \\text{indeterminate or undefined}`
        : `f(${approachTeX}) = ${directTeX}`,
      detail: looksIndeterminate
        ? locale === "es"
          ? "La sustitución directa no resuelve el límite; se aplica álgebra simbólica (p. ej. factorización o L'Hôpital cuando aplica)."
          : "Direct substitution does not resolve the limit; symbolic algebra is applied (e.g. factoring or L'Hôpital when applicable)."
        : undefined,
    },
    {
      label: locale === "es" ? "Resultado" : "Result",
      latex: `\\lim_{${variable}\\to ${approachTeX}} ${fTeX} = ${resultTeX}`,
    },
  ];

  return { result, resultTeX, approach, steps };
}

function looksInfiniteText(text: string): boolean {
  return /infinity|∞/i.test(text);
}

/**
 * Direct evaluation at a finite point. Uses nerdamer.evaluate({[var]: a})
 * (with .sub() fallback). Do not use evaluateAt — its subs() API is broken.
 */
export function evaluateFunctionAtPoint(
  clean: string,
  variable: string,
  approach: string
): { defined: true; value: number; text: string; tex: string } | { defined: false } {
  const aNum = parseNumericSolution(approach);
  if (aNum === null) return { defined: false };

  const read = (expr: { text: () => string; toTeX?: () => string }) => {
    const text = expr.text();
    if (!text || /nan|undefined/i.test(text) || looksInfiniteText(text)) {
      return { defined: false as const };
    }
    const n = parseNumericSolution(text);
    if (n === null || !Number.isFinite(n)) return { defined: false as const };
    const tex = expr.toTeX ? toDisplayTeX(expr.toTeX()) : exprToTeX(text);
    return {
      defined: true as const,
      value: n,
      text: formatNumericResult(n),
      tex,
    };
  };

  try {
    return read(nerdamer(clean).evaluate({ [variable]: aNum }));
  } catch {
    try {
      const subbed = nerdamer(clean).sub(variable, aNum);
      try {
        return read(subbed.evaluate());
      } catch {
        return read(subbed);
      }
    } catch {
      return { defined: false };
    }
  }
}

export type ContinuityKind = "continuous" | "removable" | "infinite" | "jump" | "undefined";

export type ContinuityWorkflowResult = {
  continuous: boolean;
  kind: ContinuityKind;
  verdict: string;
  reason: string;
  approach: string;
  limit: string;
  limitTeX: string;
  fAtA: string;
  fAtATeX: string;
  steps: CalcStep[];
};

export function continuityWorkflow(
  fRaw: string,
  variable: string,
  approachRaw: string,
  locale: "es" | "en"
): ContinuityWorkflowResult {
  const es = locale === "es";
  const f = sanitizeExpr(fRaw);
  if (!f) throw new Error("Empty expression");
  const approach = parseLimitApproach(approachRaw);
  const approachTeX = formatLimitApproachTeX(approach);
  const fTeX = exprToTeX(f);

  const direct = evaluateFunctionAtPoint(f, variable, approach);

  const limitExpr = nerdamer(`limit(${f}, ${variable}, ${approach})`);
  const limit = limitExpr.text();
  const limitTeX = toDisplayTeX(limitExpr.toTeX());

  if (!limit || /limit\s*\(/i.test(limit)) {
    throw new Error("Limit could not be computed");
  }

  const limitInfinite = looksInfiniteText(limit);
  const limitNum = limitInfinite ? null : parseNumericSolution(limit);

  let kind: ContinuityKind;
  let continuous = false;
  if (limitNum !== null && direct.defined && Math.abs(limitNum - direct.value) < 1e-8) {
    kind = "continuous";
    continuous = true;
  } else if (limitNum !== null && !direct.defined) {
    kind = "removable";
  } else if (limitInfinite) {
    kind = "infinite";
  } else if (limitNum !== null && direct.defined) {
    kind = "jump";
  } else {
    kind = "undefined";
  }

  const fAtA = direct.defined ? direct.text : es ? "no definida" : "undefined";
  const fAtATeX = direct.defined ? direct.tex : "\\text{¿?}";
  const limitDisplay = limitNum !== null ? formatNumericResult(limitNum) : limit;

  const verdict = continuous
    ? es
      ? "Continua en este punto."
      : "Continuous at this point."
    : es
      ? "No es continua en este punto."
      : "Not continuous at this point.";

  const reason = (() => {
    if (kind === "continuous") {
      return es
        ? `El límite y f(${approach}) coinciden: ambos valen ${limitDisplay}.`
        : `The limit and f(${approach}) match: both equal ${limitDisplay}.`;
    }
    if (kind === "removable") {
      return es
        ? `El límite existe y vale ${limitDisplay}, pero f(${approach}) no está definida. Discontinuidad removable (hueco).`
        : `The limit exists and equals ${limitDisplay}, but f(${approach}) is undefined. Removable discontinuity (hole).`;
    }
    if (kind === "infinite") {
      return es
        ? `El límite no es un número finito (tiende a infinito). Discontinuidad infinita.`
        : `The limit is not a finite number (it diverges to infinity). Infinite discontinuity.`;
    }
    if (kind === "jump") {
      return es
        ? `El límite vale ${limitDisplay} y f(${approach}) = ${fAtA}, y no coinciden.`
        : `The limit is ${limitDisplay} and f(${approach}) = ${fAtA}, which do not match.`;
    }
    return es
      ? `No hay un límite finito y f(${approach}) no está definida.`
      : `There is no finite limit and f(${approach}) is undefined.`;
  })();

  const steps: CalcStep[] = [
    {
      label: es ? "Expresión" : "Expression",
      latex: `f(${variable}) = ${fTeX}`,
    },
    {
      label: es ? "Valor de la función" : "Function value",
      latex: direct.defined
        ? `f(${approachTeX}) = ${fAtATeX}`
        : `f(${approachTeX}) \\to \\text{${es ? "no definida" : "undefined"}}`,
      detail: direct.defined
        ? undefined
        : es
          ? "La función no tiene un valor finito en este punto (p. ej. división por cero)."
          : "The function has no finite value at this point (e.g. division by zero).",
    },
    {
      label: es ? "Límite" : "Limit",
      latex: `\\lim_{${variable}\\to ${approachTeX}} ${fTeX} = ${limitTeX}`,
    },
    {
      label: es ? "Comparación" : "Comparison",
      latex: continuous
        ? `\\lim_{${variable}\\to ${approachTeX}} f(${variable}) = f(${approachTeX})`
        : `\\lim_{${variable}\\to ${approachTeX}} f(${variable}) \\neq f(${approachTeX})`,
      detail: reason,
    },
  ];

  return {
    continuous,
    kind,
    verdict,
    reason,
    approach,
    limit,
    limitTeX,
    fAtA,
    fAtATeX,
    steps,
  };
}

const LHOPITAL_ZERO = 1e-12;
const LHOPITAL_MAX_APPLICATIONS = 5;

function isNearZero(n: number): boolean {
  return Math.abs(n) < LHOPITAL_ZERO;
}

type PointEval = ReturnType<typeof evaluateFunctionAtPoint>;

function isZeroOverZero(n: PointEval, d: PointEval): boolean {
  return n.defined && d.defined && isNearZero(n.value) && isNearZero(d.value);
}

function evalDisplay(ev: PointEval, es: boolean): { text: string; tex: string } {
  if (ev.defined) return { text: ev.text, tex: ev.tex };
  return { text: es ? "no definida" : "undefined", tex: "\\text{¿?}" };
}

function finiteRatio(
  n: Extract<PointEval, { defined: true }>,
  d: Extract<PointEval, { defined: true }>
): { result: string; resultTeX: string } {
  if (isNearZero(d.value)) {
    return { result: "undefined", resultTeX: "\\text{¿?}" };
  }
  try {
    const r = nerdamer(`(${n.text})/(${d.text})`);
    return { result: r.text(), resultTeX: toDisplayTeX(r.toTeX()) };
  } catch {
    const q = formatNumericResult(n.value / d.value);
    return { result: q, resultTeX: exprToTeX(q) };
  }
}

function limitOfRatio(
  num: string,
  den: string,
  variable: string,
  approach: string
): { result: string; resultTeX: string } | null {
  try {
    const limitExpr = nerdamer(`limit((${num})/(${den}), ${variable}, ${approach})`);
    const result = limitExpr.text();
    if (!result || /limit\s*\(/i.test(result)) return null;
    return { result, resultTeX: toDisplayTeX(limitExpr.toTeX()) };
  } catch {
    return null;
  }
}

export type LhopitalWorkflowResult = {
  applies: boolean;
  exhausted: boolean;
  applications: number;
  verdict: string;
  reason: string;
  approach: string;
  result: string;
  resultTeX: string;
  fTeX: string;
  gTeX: string;
  steps: CalcStep[];
};

export function lhopitalWorkflow(
  fRaw: string,
  gRaw: string,
  variable: string,
  approachRaw: string,
  locale: "es" | "en"
): LhopitalWorkflowResult {
  const es = locale === "es";
  let f = sanitizeExpr(fRaw);
  let g = sanitizeExpr(gRaw);
  if (!f || !g) throw new Error("Empty expression");
  if (!variable.trim()) throw new Error("Missing variable");
  const v = variable.trim();
  const approach = parseLimitApproach(approachRaw);
  const approachTeX = formatLimitApproachTeX(approach);
  const fTeX = exprToTeX(f);
  const gTeX = exprToTeX(g);

  const n0 = evaluateFunctionAtPoint(f, v, approach);
  const d0 = evaluateFunctionAtPoint(g, v, approach);
  const nDisp = evalDisplay(n0, es);
  const dDisp = evalDisplay(d0, es);

  const steps: CalcStep[] = [
    {
      label: es ? "Cociente" : "Quotient",
      latex: `\\dfrac{f(${v})}{g(${v})} = \\dfrac{${fTeX}}{${gTeX}}`,
    },
    {
      label: es ? "Sustitución directa (f y g por separado)" : "Direct substitution (f and g separately)",
      latex: `f(${approachTeX}) = ${nDisp.tex},\\quad g(${approachTeX}) = ${dDisp.tex}`,
      detail: es
        ? "Se evalúa f(a) y g(a) por separado. Solo si ambos son 0 aplica L'Hôpital."
        : "f(a) and g(a) are evaluated separately. L'Hôpital applies only if both are 0.",
    },
  ];

  const emptyResult = {
    approach,
    result: "",
    resultTeX: "",
    fTeX,
    gTeX,
    steps,
  };

  if (!isZeroOverZero(n0, d0)) {
    let result = "";
    let resultTeX = "";
    if (n0.defined && d0.defined) {
      const ratio = finiteRatio(n0, d0);
      result = ratio.result;
      resultTeX = ratio.resultTeX;
    } else {
      result = es ? "no definida" : "undefined";
      resultTeX = "\\text{¿?}";
    }
    const verdict = es ? "L'Hôpital no aplica aquí" : "L'Hôpital does not apply here";
    const reason = es
      ? "La sustitución directa no da 0/0. No se deriva el numerador ni el denominador."
      : "Direct substitution is not 0/0. The numerator and denominator are not differentiated.";
    steps.push({
      label: verdict,
      latex:
        n0.defined && d0.defined && !isNearZero(d0.value)
          ? `\\dfrac{f(${approachTeX})}{g(${approachTeX})} = ${resultTeX}`
          : `\\dfrac{f(${approachTeX})}{g(${approachTeX})} \\to ${resultTeX}`,
      detail: reason,
    });
    return {
      applies: false,
      exhausted: false,
      applications: 0,
      verdict,
      reason,
      ...emptyResult,
      result,
      resultTeX,
      steps,
    };
  }

  steps.push({
    label: es ? "Forma 0/0" : "0/0 form",
    latex: `f(${approachTeX})/g(${approachTeX}) \\to 0/0`,
    detail: es
      ? "L'Hôpital aplica: se derivan numerador y denominador por separado (no la regla del cociente)."
      : "L'Hôpital applies: differentiate numerator and denominator separately (not the quotient rule).",
  });

  let applications = 0;
  for (let i = 1; i <= LHOPITAL_MAX_APPLICATIONS; i += 1) {
    const fPrime = sanitizeExpr(differentiate(f, v));
    const gPrime = sanitizeExpr(differentiate(g, v));
    const fPrimeTeX = exprToTeX(fPrime);
    const gPrimeTeX = exprToTeX(gPrime);
    applications = i;

    const n = evaluateFunctionAtPoint(fPrime, v, approach);
    const d = evaluateFunctionAtPoint(gPrime, v, approach);
    const still = isZeroOverZero(n, d);

    steps.push({
      label: es
        ? `Aplicación ${i}: f'(${v}) = ${fPrime}, g'(${v}) = ${gPrime}`
        : `Application ${i}: f'(${v}) = ${fPrime}, g'(${v}) = ${gPrime}`,
      latex: `\\dfrac{f'(${v})}{g'(${v})} = \\dfrac{${fPrimeTeX}}{${gPrimeTeX}}`,
      detail: still
        ? es
          ? "Sigue siendo 0/0; se aplica L'Hôpital otra vez."
          : "Still 0/0; apply L'Hôpital again."
        : es
          ? "Ya no es 0/0; se evalúa este cociente."
          : "No longer 0/0; evaluate this ratio.",
    });

    if (still) {
      f = fPrime;
      g = gPrime;
      continue;
    }

    const nD = evalDisplay(n, es);
    const dD = evalDisplay(d, es);
    steps.push({
      label: es ? `Evaluación tras aplicación ${i}` : `Evaluation after application ${i}`,
      latex: `f'(${approachTeX}) = ${nD.tex},\\quad g'(${approachTeX}) = ${dD.tex}`,
    });

    let result = "";
    let resultTeX = "";
    if (n.defined && d.defined) {
      const fromLimit = limitOfRatio(fPrime, gPrime, v, approach);
      if (fromLimit) {
        result = fromLimit.result;
        resultTeX = fromLimit.resultTeX;
      } else {
        const ratio = finiteRatio(n, d);
        result = ratio.result;
        resultTeX = ratio.resultTeX;
      }
    } else {
      result = es ? "no definida" : "undefined";
      resultTeX = "\\text{¿?}";
    }

    const verdict = es
      ? `L'Hôpital resuelve el límite (${i} ${i === 1 ? "aplicación" : "aplicaciones"})`
      : `L'Hôpital resolves the limit (${i} ${i === 1 ? "application" : "applications"})`;
    steps.push({
      label: es ? "Resultado" : "Result",
      latex: `\\lim_{${v}\\to ${approachTeX}} \\dfrac{${exprToTeX(sanitizeExpr(fRaw))}}{${exprToTeX(sanitizeExpr(gRaw))}} = ${resultTeX}`,
    });

    return {
      applies: true,
      exhausted: false,
      applications,
      verdict,
      reason: es
        ? "Se derivó numerador y denominador por separado mientras la forma siguió siendo 0/0."
        : "Numerator and denominator were differentiated separately while the form stayed 0/0.",
      ...emptyResult,
      result,
      resultTeX,
      steps,
    };
  }

  const verdict = es
    ? "Sigue siendo 0/0 tras 5 aplicaciones"
    : "Still 0/0 after 5 applications";
  steps.push({
    label: verdict,
    latex: "0/0",
    detail: es
      ? "Se detuvo al llegar al máximo de aplicaciones. El límite puede existir por otra vía."
      : "Stopped at the application cap. The limit may still exist by another method.",
  });

  return {
    applies: true,
    exhausted: true,
    applications,
    verdict,
    reason: verdict,
    ...emptyResult,
    result: "0/0",
    resultTeX: "0/0",
    steps,
  };
}
