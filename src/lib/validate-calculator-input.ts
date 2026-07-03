const MESSAGES = {
  empty: "Por favor ingresa una función. Ejemplo: sin(x) o x^2 + 3x",
  parentheses: "Revisa los paréntesis — parece que falta cerrar uno. Ejemplo correcto: sin(x^2)",
  unknownFunction:
    "Función no reconocida. Funciones disponibles: sin, cos, tan, ln, log, exp, sqrt",
  divisionByZero: "La función no está definida en ese punto (división por cero)",
  generic:
    "No pude interpretar esa función. Intenta usar paréntesis explícitos. Ejemplo: (x+1)/(x-2)",
} as const;

const KNOWN_FUNCTIONS = new Set([
  "sin",
  "cos",
  "tan",
  "sec",
  "csc",
  "cot",
  "asin",
  "acos",
  "atan",
  "sinh",
  "cosh",
  "tanh",
  "ln",
  "log",
  "log10",
  "exp",
  "sqrt",
  "abs",
  "pi",
  "e",
]);

const DIVISION_BY_ZERO_PATTERN = /\/\s*0\b|\/\s*\(\s*0\s*\)/;

function hasUnmatchedParentheses(expr: string): boolean {
  let depth = 0;
  for (const char of expr) {
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (depth < 0) return true;
  }
  return depth !== 0;
}

function findUnknownFunction(expr: string, variable: string): string | null {
  const allowedVariables = new Set([variable, "x", "y", "t", "u", "v", "pi", "e"]);
  const matches = expr.matchAll(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g);

  for (const match of matches) {
    const name = match[1].toLowerCase();
    if (allowedVariables.has(name) || KNOWN_FUNCTIONS.has(name)) continue;
    return name;
  }

  return null;
}

export function validateCalculatorInput(expr: string, variable: string): string | null {
  const trimmed = expr.trim();
  if (!trimmed) return MESSAGES.empty;

  if (hasUnmatchedParentheses(trimmed)) return MESSAGES.parentheses;

  const compact = trimmed.replace(/\s+/g, "");
  if (DIVISION_BY_ZERO_PATTERN.test(compact)) return MESSAGES.divisionByZero;

  const unknown = findUnknownFunction(trimmed, variable);
  if (unknown) return MESSAGES.unknownFunction;

  return null;
}

export function mapDerivativeError(error: unknown): string {
  const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();

  if (message.includes("division") && message.includes("zero")) {
    return MESSAGES.divisionByZero;
  }

  return MESSAGES.generic;
}

export const calculatorValidationMessages = MESSAGES;
