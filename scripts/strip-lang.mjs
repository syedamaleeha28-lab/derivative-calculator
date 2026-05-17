import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx|ts)$/.test(ent.name)) files.push(p);
  }
  return files;
}

const ternaryRe =
  /currentLang === "en" \? "[^"]*" : currentLang === "pt" \? "[^"]*" : "([^"]*)"/g;

const ternaryRe2 =
  /currentLang === "en"\s*\? "[^"]*"\s*: currentLang === "pt"\s*\? "[^"]*"\s*: "([^"]*)"/gs;

for (const file of walk(path.join(process.cwd(), "src"))) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;

  s = s.replace(ternaryRe, "$1");
  s = s.replace(
    /const currentLang = \(lang === "en" \|\| lang === "pt" \? lang : "es"\) as Lang;\n/g,
    ""
  );
  s = s.replace(/const currentLang = "es";\n/g, "");
  s = s.replace(/const lang = "es";\n/g, "");
  s = s.replace(/import \{ LOCALIZED_ROUTES \} from "@\/lib\/routes";\n\n?/g, "");
  s = s.replace(/import type \{ Lang \} from "@\/lib\/dictionary-types";\n/g, "");
  s = s.replace(/import \{ useLang \} from "@\/contexts\/I18nContext";\n/g, "");
  s = s.replace(/const \{ dict \} = useLang\(\);\n/g, "");
  s = s.replace(/const \{ lang: currentLang, dict \} = useLang\(\);\n/g, "");
  if (!s.includes('from "@/lib/dictionaries"') && s.includes("dict.")) {
    s = s.replace(/^("use client";\n\n)?/m, (m) => `${m || ""}import { dict } from "@/lib/dictionaries";\n`);
  }
  s = s.replace(/\/what-is-a-derivative/g, "/como-funciona");
  s = s.replace(/\/how-it-works/g, "/como-funciona");
  s = s.replace(/\/derivative-examples/g, "/ejemplos");
  s = s.replace(/\/basic-derivative-formulas/g, "/reglas");
  s = s.replace(/\/partial-derivatives/g, "/reglas");
  s = s.replace(/\/how-to-use-derivative-calculator/g, "/como-funciona");
  s = s.replace(/\/reglas\/regla-de-la-[a-z]+/g, "/reglas");
  s = s.replace(/\/reglas\/derivadas-trigonometricas/g, "/reglas");
  s = s.replace(/metadataFromEntry\(\s*"\/how-it-works"/g, 'metadataFromEntry("/como-funciona"');
  s = s.replace(/metadataFromEntry\(\s*"\/examples"/g, 'metadataFromEntry("/ejemplos"');
  s = s.replace(/metadataFromEntry\(\s*"\/rules"/g, 'metadataFromEntry("/reglas"');
  s = s.replace(/path="\/how-it-works"/g, 'path="/como-funciona"');

  if (s !== orig) {
    fs.writeFileSync(file, s);
    console.log("stripped", path.relative(process.cwd(), file));
  }
}
