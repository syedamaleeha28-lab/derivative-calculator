import fs from "fs";

const bad = "</" + "motion.div>";
const good = "</motion.div>".replace("motion.div", "div");

let s = fs.readFileSync("src/app/reglas/page.tsx", "utf8");
s = s.split(bad).join(good);
s = s.replace("<motion.div>", "<section>");
s = s.replace(
  `{currentLang === "en" 
            ? "It is not enough to know the formula; you have to know when to apply it. In complex functions, you will often have to combine several rules."
            : currentLang === "pt"
            ? "Não basta saber a fórmula; é preciso saber quando aplicá-la. Em funções complexas, muitas vezes você terá que combinar várias regras."
            : "No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas."
          }`,
  "No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas."
);
s = s.replace(
  `{currentLang === "en"
            ? "If you have a division of functions, it is always preferable to use the quotient rule, but sometimes you can move the denominator as a negative power and use the product rule."
            : currentLang === "pt"
            ? "Se você tiver uma divisão de funções, é sempre preferível usar a regra do quociente, mas às vezes você pode subir o denominador como uma potência negativa e usar a regra do produto."
            : "Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto."
          }`,
  "Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto."
);
s = s.replace(
  `{t.sections.formulas.p1.replace("tabla de fórmulas completa", "").trim()} <Link href="/reglas" className="text-secondary font-bold">"tabla de fórmulas completa"</Link>.`,
  `{t.sections.formulas.p1.replace("tabla de fórmulas completa", "").trim()}{" "}
          <Link href="/reglas" className="text-secondary font-bold">
            tabla de fórmulas completa
          </Link>.`
);
fs.writeFileSync("src/app/reglas/page.tsx", s);
console.log("ok");
