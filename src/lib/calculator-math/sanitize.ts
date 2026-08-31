/**
 * String-only input helpers. Keep this module free of nerdamer/katex so
 * calculator UI can import it without pulling the CAS bundle.
 */

/**
 * Rewrite e^x / e^(...) to exp(...) so nerdamer text() output (e.g. "e^x")
 * round-trips through sanitize instead of becoming the identifier "expx".
 */
function rewriteNaturalExpCarets(expr: string): string {
  let i = 0;
  let out = "";
  while (i < expr.length) {
    const prev = i === 0 ? "" : expr[i - 1];
    const atExp =
      expr[i] === "e" && expr[i + 1] === "^" && (i === 0 || !/[A-Za-z_]/.test(prev));
    if (!atExp) {
      out += expr[i];
      i += 1;
      continue;
    }

    i += 2;
    while (expr[i] === " " || expr[i] === "\t") i += 1;

    if (expr[i] === "(") {
      let depth = 0;
      let j = i;
      for (; j < expr.length; j += 1) {
        if (expr[j] === "(") depth += 1;
        else if (expr[j] === ")") {
          depth -= 1;
          if (depth === 0) {
            out += `exp(${expr.slice(i + 1, j)})`;
            i = j + 1;
            break;
          }
        }
      }
      if (depth === 0) continue;
    }

    const unary = expr[i] === "-" ? "-" : "";
    const atomStart = unary ? i + 1 : i;
    const atom = expr.slice(atomStart).match(/^(?:[A-Za-z_]\w*|\d+\.?\d*|\.\d+)/);
    if (atom) {
      out += `exp(${unary}${atom[0]})`;
      i = atomStart + atom[0].length;
      continue;
    }

    out += "e^";
  }
  return out;
}

/** Normalize user input for nerdamer. */
export function sanitizeExpr(expr: string): string {
  return rewriteNaturalExpCarets(
    expr
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
      .replace(/sin⁻¹/g, "asin")
      .replace(/cos⁻¹/g, "acos")
      .replace(/tan⁻¹/g, "atan")
  ).trim();
}

export function formatNumericResult(value: number): string {
  const rounded = Math.round(value * 1e10) / 1e10;
  return String(rounded);
}
