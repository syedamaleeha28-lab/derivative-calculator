import fs from "fs";

const files = [
  "src/app/blog/page.tsx",
  "src/app/ejemplos/page.tsx",
  "src/app/como-funciona/page.tsx",
];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/const lang = "es";\n/g, "");
  s = s.replace(/const currentLang = "es";\n/g, "");
  s = s.replace(/const currentLang = \(lang === "en" \|\| lang === "pt" \? lang : "es"\) as Lang;\n/g, "");
  fs.writeFileSync(file, s);
  console.log("cleaned", file);
}

let reglas = fs.readFileSync("src/app/reglas/page.tsx", "utf8");
reglas = reglas.replace(
  /\{currentLang === "en"[\s\S]*?"No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas."\s*\}/,
  "No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas."
);
reglas = reglas.replace(
  /\{currentLang === "en"[\s\S]*?"Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto."\s*\}/,
  "Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto."
);
fs.writeFileSync("src/app/reglas/page.tsx", reglas);

for (const file of ["src/app/privacy-policy/page.tsx", "src/app/terms-of-service/page.tsx", "src/app/disclaimer/page.tsx"]) {
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/const lang = "es";\n/g, "");
  s = s.replace(/<LegalTrustPage\s+pageId/g, "<LegalTrustPage pageId");
  fs.writeFileSync(file, s);
}
