/**
 * Generates localized slug folders under src/app/[lang]/ that re-export internal pages.
 * Run: node scripts/generate-localized-routes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appLangDir = path.join(__dirname, "..", "src", "app", "[lang]");

/** localized path (no leading slash) → internal path (no leading slash) */
const ALIASES = {
  "como-funciona": "how-it-works",
  ejemplos: "examples",
  exemplos: "examples",
  reglas: "derivation-rules",
  regras: "derivation-rules",
  "derivative-examples": "examples",
  "acerca-de": "about",
  sobre: "about",
  contacto: "contact",
  contato: "contact",
  "aviso-legal": "disclaimer",
  "politica-de-privacidad": "privacy-policy",
  "politica-de-privacidade": "privacy-policy",
  "terminos-de-servicio": "terms",
  "termos-de-servico": "terms",
  "formulas-basicas-de-derivacion": "basic-derivative-formulas",
  "formulas-basicas-de-derivacao": "basic-derivative-formulas",
  "como-usar-calculadora-de-derivadas": "how-to-use-derivative-calculator",
  "derivadas-parciales": "partial-derivatives",
  "derivadas-parciais": "partial-derivatives",
  "que-es-una-derivada": "what-is-a-derivative",
  "o-que-e-uma-derivada": "what-is-a-derivative",
  "calculadora-de-derivadas-implicitas": "implicit-derivative-calculator",
  "calculadora-de-derivadas-trigonometricas": "trigonometric-derivative-calculator",
  "calculadora-de-segundas-derivadas": "second-derivative-calculator",
  "derivadas-de-funciones": "derivatives-of-functions",
  "derivadas-de-funcoes": "derivatives-of-functions",
  "derivadas-de-varias-variables": "multivariable-derivatives",
  "derivadas-de-varias-variaveis": "multivariable-derivatives",
  "derivadas-exponenciales": "exponential-derivatives",
  "derivadas-exponenciais": "exponential-derivatives",
  "derivadas-logaritmicas": "logarithmic-derivatives",
  "derivadas-por-definicion": "derivative-by-definition",
  "derivadas-por-definicao": "derivative-by-definition",
  "reglas/regla-de-la-potencia": "derivation-rules/regla-de-la-potencia",
  "reglas/regla-de-la-cadena": "derivation-rules/regla-de-la-cadena",
  "reglas/regla-del-producto": "derivation-rules/regla-del-producto",
  "reglas/regla-del-cociente": "derivation-rules/regla-del-cociente",
  "reglas/derivadas-trigonometricas": "derivation-rules/derivadas-trigonometricas",
  "regras/regla-de-la-potencia": "derivation-rules/regla-de-la-potencia",
  "regras/regla-de-la-cadena": "derivation-rules/regla-de-la-cadena",
  "regras/regla-del-producto": "derivation-rules/regla-del-producto",
  "regras/regla-del-cociente": "derivation-rules/regla-del-cociente",
  "regras/derivadas-trigonometricas": "derivation-rules/derivadas-trigonometricas",
};

function relativeImport(fromDir, targetPath) {
  const fromParts = fromDir.split("/").filter(Boolean);
  const up = fromParts.length;
  const prefix = up === 0 ? "." : Array(up).fill("..").join("/");
  return `${prefix}/${targetPath}/page`;
}

function pageContent(localizedPath, targetPath) {
  const dir = localizedPath.includes("/")
    ? localizedPath.slice(0, localizedPath.lastIndexOf("/"))
    : "";
  const depth = dir ? dir.split("/").length + 1 : 1;
  const prefix = Array(depth).fill("..").join("/");
  return `/** Localized alias: /${localizedPath} → /${targetPath} */\nexport { default, generateMetadata } from "${prefix}/${targetPath}/page";\n`;
}

let created = 0;
for (const [localized, target] of Object.entries(ALIASES)) {
  if (localized === target) continue;
  const dir = path.join(appLangDir, ...localized.split("/"));
  const file = path.join(dir, "page.tsx");
  if (fs.existsSync(file)) continue;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, pageContent(localized, target), "utf8");
  created++;
  console.log(`Created ${path.relative(appLangDir, file)}`);
}
console.log(`Done. Created ${created} alias pages.`);
