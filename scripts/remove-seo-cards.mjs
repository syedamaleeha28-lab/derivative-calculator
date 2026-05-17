import fs from "fs";

const path = "src/lib/dictionaries.ts";
let s = fs.readFileSync(path, "utf8");

const start = s.indexOf("    seoCards:");
const end = s.indexOf("    aboutPage:", start);
if (start >= 0 && end >= 0) {
  s = s.slice(0, start) + s.slice(end);
}

const intro =
  '      intro:\n        "Aprende a usar la calculadora y repasa los conceptos esenciales del cálculo diferencial en español.",\n';

if (!s.includes("intro:")) {
  s = s.replace("    homeSeo: {\n      whatIs:", `    homeSeo: {\n${intro}      whatIs:`);
}

fs.writeFileSync(path, s, "utf8");
console.log("Removed seoCards");
