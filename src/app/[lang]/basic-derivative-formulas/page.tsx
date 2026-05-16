import ArticleLayout, { FormulaCard, TipCard, ExampleCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { metadataFromEntry, normalizeLang } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].formulasPage;
  return metadataFromEntry(currentLang, "/basic-derivative-formulas", { title: t.title, description: t.description });
}

export default async function BasicFormulas({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].formulasPage;

  const formulas = [
    { name: currentLang === "en" ? "Constant" : currentLang === "pt" ? "Constante" : "Constante", f: "c", d: "0", desc: currentLang === "en" ? "The derivative of any constant is always zero." : currentLang === "pt" ? "A derivada de qualquer constante é sempre zero." : "La derivada de cualquier constante es siempre cero." },
    { name: currentLang === "en" ? "Identity" : currentLang === "pt" ? "Identidade" : "Identidad", f: "x", d: "1", desc: currentLang === "en" ? "The rate of change of x with respect to itself is one." : currentLang === "pt" ? "A taxa de variação de x em relação a si mesma é um." : "La tasa de cambio de x respecto a sí misma es la unidad." },
    { name: currentLang === "en" ? "Power" : currentLang === "pt" ? "Potência" : "Potencia", f: "x^n", d: "n x^{n-1}", desc: currentLang === "en" ? "Lower the exponent and subtract one." : currentLang === "pt" ? "Desça o expoente e subtraia um." : "Baja el exponente y resta uno." },
    { name: currentLang === "en" ? "Exponential" : currentLang === "pt" ? "Exponencial" : "Exponencial", f: "e^x", d: "e^x", desc: currentLang === "en" ? "The only function that is its own derivative." : currentLang === "pt" ? "A única função que é sua própria derivada." : "La única función que es su propia derivada." },
    { name: currentLang === "en" ? "Natural Log" : currentLang === "pt" ? "Log. Natural" : "Log. Natural", f: "\\ln(x)", d: "\\frac{1}{x}", desc: currentLang === "en" ? "Inverse of the exponential." : currentLang === "pt" ? "Inversa da exponencial." : "Inversa de la exponencial." },
    { name: currentLang === "en" ? "Sine" : currentLang === "pt" ? "Seno" : "Seno", f: "\\sin(x)", d: "\\cos(x)", desc: currentLang === "en" ? "Cyclic phase change." : currentLang === "pt" ? "Mudança cíclica de fase." : "Cambio cíclico de fase." },
    { name: currentLang === "en" ? "Cosine" : currentLang === "pt" ? "Cosseno" : "Coseno", f: "\\cos(x)", d: "-\\sin(x)", desc: currentLang === "en" ? "Always remember the negative sign." : currentLang === "pt" ? "Lembre-se sempre do sinal negativo." : "Recuerda siempre el signo negativo." },
    { name: currentLang === "en" ? "Tangent" : currentLang === "pt" ? "Tangente" : "Tangente", f: "\\tan(x)", d: "\\sec^2(x)", desc: currentLang === "en" ? "Related to secant squared." : currentLang === "pt" ? "Relacionada à secante ao quadrado." : "Relacionada con la secante al cuadrado." }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">{t.sections.intro.title}</h2>
        <p>
          {t.sections.intro.p1}
        </p>
        <p className="mt-4">
          {t.sections.intro.p2.replace("ejemplos de derivadas", "").trim()} <Link href="/derivative-examples" className="text-secondary font-bold">{currentLang === "en" ? "derivatives examples" : currentLang === "pt" ? "exemplos de derivadas" : "ejemplos de derivadas"}</Link>.
        </p>
        <div className="my-8 max-w-3xl mx-auto relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
          <Image
            src="/images/formulas-calculo-diferencial.webp"
            alt={t.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
        </div>
      </section>

      <section>
        <h2 id="tabla">{t.sections.table.title}</h2>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 mt-8 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">{t.sections.table.function}</th>
                <th className="px-6 py-4 font-bold text-secondary border-b border-slate-200">{t.sections.table.derivative}</th>
                <th className="px-6 py-4 font-bold text-slate-500 border-b border-slate-200 hidden md:table-cell">{t.sections.table.description}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {formulas.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600">
                    <span dangerouslySetInnerHTML={{ __html: katex.renderToString(item.f) }} />
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-900 font-bold">
                    <span dangerouslySetInnerHTML={{ __html: katex.renderToString(item.d) }} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 hidden md:table-cell">
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="reglas-operacion">{t.sections.rules.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-6">
            <FormulaCard title={t.sections.rules.sum}>
              <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(f \\pm g)' = f' \\pm g'", { displayMode: true }) }} />
            </FormulaCard>
          </div>
          <div className="space-y-6">
            <FormulaCard title={t.sections.rules.const}>
              <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(k \\cdot f)' = k \\cdot f'", { displayMode: true }) }} />
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <h2 id="practica">{currentLang === "en" ? "Study Tips" : currentLang === "pt" ? "Dicas de Estudo" : "Consejos para el Estudio"}</h2>
        <TipCard>
          {currentLang === "en" 
            ? "Struggling to memorize them? Try solving 5 exercises of each type using our calculator."
            : currentLang === "pt"
            ? "Dificuldade em memorizá-las? Tente resolver 5 exercícios de cada tipo usando nossa calculadora."
            : "¿Te cuesta memorizarlas? Intenta resolver 5 ejercicios de cada tipo usando nuestra calculadora."
          }
        </TipCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={t.title}
      description={t.description}
      date={t.date}
      readTime={t.readTime}
      category={t.category}
      tags={t.tags}
      author={{
        name: "Calculadora Derivadas Team",
        role: t.authorRole
      }}
      breadcrumbs={t.breadcrumbs}
      content={content}
      faqs={t.faqs}
    />
  );
}
