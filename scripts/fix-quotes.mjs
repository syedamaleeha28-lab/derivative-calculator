import fs from "fs";

const fixes = [
  ["src/app/ejemplos/page.tsx", () => {
    let s = fs.readFileSync("src/app/ejemplos/page.tsx", "utf8");
    s = s.replace(/import \{ LOCALIZED_ROUTES \} from "@\/lib\/routes";\n/, "");
    s = s.replace(/const lang = "es";\n\s*const currentLang = "es";\n/, "");
    s = s.replace(/const lang = "es";\n\s*const currentLang = \(lang === "en" \|\| lang === "pt" \? lang : "es"\) as Lang;\n/, "");
    // fix unquoted strings in examples array - wrap lines like `title: Derivada` 
    s = s.replace(/title: ([^,\n]+),/g, (m, t) => {
      if (t.startsWith('"')) return m;
      return `title: "${t.trim()}",`;
    });
    s = s.replace(/desc: ([^,\n]+)$/gm, (m, t) => {
      if (t.startsWith('"')) return m;
      return `desc: "${t.trim()}"`;
    });
    s = s.replace(/desc: ([^,\n]+),/g, (m, t) => {
      if (t.startsWith('"')) return m;
      return `desc: "${t.trim()}",`;
    });
    return s;
  }],
  ["src/app/como-funciona/page.tsx", () => {
    let s = fs.readFileSync("src/app/como-funciona/page.tsx", "utf8");
    s = s.replace(/import \{ LOCALIZED_ROUTES \} from "@\/lib\/routes";\n\n?/, "");
    s = s.replace(/const lang = "es";\n\s*const currentLang = "es";\n/, "");
    s = s.replace(/const lang = "es";\n\s*const currentLang = \(lang === "en" \|\| lang === "pt" \? lang : "es"\) as Lang;\n/, "");
    s = s.replace(/\{Ejemplos de Uso Comum\}/g, '{"Ejemplos de Uso Común"}');
    s = s.replace(/title=\{Derivada del Seno\}/g, 'title="Derivada del Seno"');
    s = s.replace(/title=\{Logaritmo Natural\}/g, 'title="Logaritmo Natural"');
    s = s.replace(/\{currentLang === "en" \? "Sine" : "Seno"\}/g, '"Seno"');
    s = s.replace(/\{currentLang === "en" \? "Cosine" : "Coseno"\}/g, '"Coseno"');
    s = s.replace(/\{currentLang === "en" \? "Tangent" : "Tangente"\}/g, '"Tangente"');
    s = s.replace(/\{currentLang === "en" \? "Arcsine" : "Arcoseno"\}/g, '"Arcoseno"');
    s = s.replace(/\{currentLang === "en" \? "Natural Log" : "Log\. Natural"\}/g, '"Log. Natural"');
    s = s.replace(/\{currentLang === "en" \? "Exponential" : "Exponencial"\}/g, '"Exponencial"');
    s = s.replace(/\{currentLang === "en" \? "Root" : "Raíz"\}/g, '"Raíz"');
    s = s.replace(/\{currentLang === "en" \? "Power" : "Potencia"\}/g, '"Potencia"');
    return s;
  }],
  ["src/app/reglas/page.tsx", () => {
    let s = fs.readFileSync("src/app/reglas/page.tsx", "utf8");
    s = s.replace(/\{qué es una derivada\}/g, '"qué es una derivada"');
    s = s.replace(/\{antes de memorizar las fórmulas\.\}/g, '"antes de memorizar las fórmulas."');
    s = s.replace(/\{tabla de fórmulas completa\}/g, '"tabla de fórmulas completa"');
    s = s.replace(/<h2 id="ejemplos-reales">\{Ejemplos de Aplicación\}<\/h2>/g, '<h2 id="ejemplos-reales">Ejemplos de Aplicación</h2>');
    return s;
  }],
  ["src/components/EducationalArticle.tsx", () => {
    let s = fs.readFileSync("src/components/EducationalArticle.tsx", "utf8");
    s = s.replace(/\{Leer más\}/g, '"Leer más"');
    s = s.replace(/\{Leer artículo\}/g, '"Leer artículo"');
    s = s.replace(
      /\{Aprende paso a paso cómo resolver ejercicios complejos y domina el cálculo diferencial rápidamente con nuestras guías interactivas\.\}/g,
      '"Aprende paso a paso cómo resolver ejercicios complejos y domina el cálculo diferencial rápidamente con nuestras guías interactivas."'
    );
    return s;
  }],
];

for (const [file, fn] of fixes) {
  fs.writeFileSync(file, fn());
  console.log("fixed", file);
}
