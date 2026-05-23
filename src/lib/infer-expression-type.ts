/**
 * Lightweight classification of a user-entered expression for analytics.
 * Used as GA4 `expression_type` on calculator_used events.
 */
export function inferExpressionType(expression: string): string {
  const expr = expression.trim().toLowerCase().replace(/\s+/g, "");
  if (!expr) return "empty";

  const hasTrig =
    /(?:sin|cos|tan|sec|csc|cot|asin|acos|atan)(?:h)?\s*\(/.test(expr) ||
    /(?:^|[^a-z])(?:sin|cos|tan)(?![a-z])/.test(expr);
  const hasLog = /\bln\s*\(|\blog\s*\(/.test(expr) || /ln\(|log\(/.test(expr);
  const hasExp = /\be\s*\^|\bexp\s*\(|e\^/.test(expr);
  const hasSqrt = /sqrt\s*\(/.test(expr);
  const hasPower = /\^/.test(expr);
  const hasFraction = /\//.test(expr);
  const hasOnlyAlgebra =
    /^[\d.+*/^()xytuv\-]+$/.test(expr) && !hasTrig && !hasLog && !hasExp && !hasSqrt;

  const tags: string[] = [];
  if (hasTrig) tags.push("trigonometric");
  if (hasLog) tags.push("logarithmic");
  if (hasExp) tags.push("exponential");
  if (hasSqrt) tags.push("radical");
  if (hasFraction) tags.push("rational");

  if (tags.length > 1) return "composite";
  if (tags.length === 1) return tags[0];
  if (hasOnlyAlgebra && hasPower) return "polynomial";
  if (hasOnlyAlgebra) return "polynomial";
  if (hasPower) return "power";
  return "general";
}
