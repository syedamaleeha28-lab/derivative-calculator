import Link from "next/link";
import katex from "katex";
import { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";

export function renderMath(tex: string, display = false) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(tex, { throwOnError: false, displayMode: display }),
      }}
    />
  );
}

export function blogBreadcrumbs(slug: string, label: string) {
  return [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label, href: `/blog/${slug}` },
  ] as const;
}

export function InternalLinksBlock({
  links,
  heading = "Sigue aprendiendo",
}: {
  links: readonly { href: string; label: string; desc?: string }[];
  heading?: string;
}) {
  return (
    <nav className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label="Artículos relacionados">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{heading}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl bg-white border border-slate-100 px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-violet-600 text-sm">{link.label}</span>
              {link.desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{link.desc}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CalcCTA() {
  return (
    <div className="my-10 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-slate-900 mb-2">Practica con la calculadora</h3>
      <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-4">
        Usa nuestra{" "}
        <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
          calculadora de derivadas con pasos
        </Link>{" "}
        para verificar ejercicios, revisar el procedimiento y estudiar cálculo diferencial en español.
      </p>
      <Link
        href="/#calculator"
        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
      >
        Calcular derivada ahora
      </Link>
    </div>
  );
}

export function ArticleWrap({ children }: { children: React.ReactNode }) {
  return <div className="space-y-12 text-slate-600 leading-relaxed">{children}</div>;
}

export function ArticleTldr({
  tldr,
  steps,
}: {
  tldr: React.ReactNode;
  steps: readonly string[];
}) {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 px-5 py-4 md:px-6 md:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-violet-600 mb-2">
          TL;DR
        </p>
        <div className="text-slate-700 leading-relaxed text-[0.98rem]">{tldr}</div>
      </div>

      <section>
        <h2 id="como-resolver-paso-a-paso">Cómo resolver paso a paso</h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed mt-4">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export { FormulaCard, TipCard, WarningCard, ExampleCard, Link };
