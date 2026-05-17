const fs = require('fs');

async function fix() {
  const files = [
    'src/app/como-funciona/page.tsx',
    'src/app/ejemplos/page.tsx',
    'src/app/reglas/page.tsx',
    'src/app/blog/page.tsx',
    'src/app/privacy-policy/page.tsx',
    'src/app/terms-of-service/page.tsx',
    'src/app/disclaimer/page.tsx',
    'src/app/reglas/regla-de-la-potencia/page.tsx',
    'src/app/reglas/regla-de-la-cadena/page.tsx',
    'src/app/reglas/regla-del-producto/page.tsx',
    'src/app/reglas/regla-del-cociente/page.tsx',
    'src/app/reglas/derivadas-trigonometricas/page.tsx'
  ];

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/export async function generateMetadata\([^)]+\):\s*Promise<Metadata>\s*\{[\s\S]*?const \{ lang \} = await params;/g, 'export async function generateMetadata(): Promise<Metadata> {\n  const lang = "es";');
    content = content.replace(/export default async function \w+\([^)]+\)\s*\{[\s\S]*?const \{ lang \} = await params;/g, (match) => {
       const funcName = match.match(/export default async function (\w+)/)[1];
       return `export default async function ${funcName}() {\n  const lang = "es";`;
    });
    fs.writeFileSync(file, content);
  }

  // Handle [slug]
  const slugFile = 'src/app/blog/[slug]/page.tsx';
  let slugContent = fs.readFileSync(slugFile, 'utf8');
  slugContent = slugContent.replace(/export async function generateMetadata\(props: \{ params: Promise<\{ lang: string; slug: string \}> \}\): Promise<Metadata> \{\s*const resolvedParams = await props\.params;\s*const lang = resolvedParams\.lang;/g, 'export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {\n  const resolvedParams = await props.params;\n  const lang = "es";');
  slugContent = slugContent.replace(/export default async function BlogPostPage\(props: \{ params: Promise<\{ lang: string; slug: string \}> \}\) \{\s*const resolvedParams = await props\.params;\s*const lang = resolvedParams\.lang;/g, 'export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {\n  const resolvedParams = await props.params;\n  const lang = "es";');
  fs.writeFileSync(slugFile, slugContent);
}

fix();
