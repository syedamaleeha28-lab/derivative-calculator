const fs = require('fs');
fs.copyFileSync('src/app/[lang]/how-it-works/page.tsx', 'src/app/como-funciona/page.tsx');
fs.copyFileSync('src/app/[lang]/examples/page.tsx', 'src/app/ejemplos/page.tsx');
fs.copyFileSync('src/app/[lang]/rules/page.tsx', 'src/app/reglas/page.tsx');
fs.copyFileSync('src/app/[lang]/blog/page.tsx', 'src/app/blog/page.tsx');
fs.mkdirSync('src/app/blog/[slug]', { recursive: true });
fs.copyFileSync('src/app/[lang]/blog/[slug]/page.tsx', 'src/app/blog/[slug]/page.tsx');
fs.copyFileSync('src/app/[lang]/privacy-policy/page.tsx', 'src/app/privacy-policy/page.tsx');
fs.copyFileSync('src/app/[lang]/terms/page.tsx', 'src/app/terms-of-service/page.tsx');
fs.copyFileSync('src/app/[lang]/disclaimer/page.tsx', 'src/app/disclaimer/page.tsx');

// Subpages for reglas
const subpages = [
  "regla-de-la-potencia",
  "regla-de-la-cadena",
  "regla-del-producto",
  "regla-del-cociente",
  "derivadas-trigonometricas",
];
for(const sub of subpages) {
  try {
     fs.mkdirSync(`src/app/reglas/${sub}`, { recursive: true });
     fs.copyFileSync(`src/app/[lang]/rules/${sub}/page.tsx`, `src/app/reglas/${sub}/page.tsx`);
  } catch(e) {}
}

console.log('done');
