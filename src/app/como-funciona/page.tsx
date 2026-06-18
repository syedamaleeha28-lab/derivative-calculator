import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import InternalLinksSection from "@/components/InternalLinksSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { dict } from "@/lib/dictionaries";
import { metadataFromEntry } from "@/lib/seo";
import HowToJsonLd from "@/components/HowToJsonLd";
import { CONTENT_FIGURE } from "@/lib/image-sizes";
import interfazCalculadoraImg from "../../../public/images/interfaz-calculadora-matematica.webp";
import { COMO_FUNCIONA_INTERNAL_LINKS } from "@/lib/internal-links";
import { internalLinksToRelated } from "@/lib/blog-posts/related";

export async function generateMetadata(): Promise<Metadata> {
  const m = dict.metadata.comoFunciona;
  return metadataFromEntry("/como-funciona", {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export default async function ComoFuncionaPage() {
  const t = dict.howItWorks;

  const content = (
    <div className="space-y-16">
      {/* Step by Step */}
      <section>
        <h2 id="instrucciones">{t.sections.steps.title}</h2>
        <p className="mb-8">
          {t.sections.steps.desc}
        </p>
        <figure className="mb-10 max-w-3xl mx-auto">
          <Image
            src={interfazCalculadoraImg}
            alt={t.title}
            width={CONTENT_FIGURE.width}
            height={CONTENT_FIGURE.height}
            loading="lazy"
            className="w-full h-auto rounded-2xl border border-slate-100 shadow-lg object-cover object-top"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
        </figure>
        <div className="flex flex-col gap-8">
          {t.sections.steps.items.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-bold shadow-lg shadow-secondary/20">
                {i + 1}
              </div>
              <div>
                <h3 className="text-[1.2rem] font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="derivada-por-definicion">Derivada por definición (límite)</h2>
        <p>
          La definición formal de la derivada usa un límite: la tasa de cambio instantánea de f en x es
          f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h. Esa fórmula explica por qué la derivada de x es 1,
          la de x² es 2x y, en general, por qué las reglas de derivación son atajos del mismo límite.
        </p>
        <p>
          En la práctica rara vez calculas cada derivada desde cero con límites, pero entender la definición
          conecta la pendiente de la tangente con el concepto de tasa de cambio. Practica el cociente incremental
          en polinomios simples y luego contrasta con la{" "}
          <Link href="/#calculator" className="text-secondary font-bold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          y las{" "}
          <Link href="/reglas-de-derivacion" className="text-secondary font-bold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="glosario">Glosario de cálculo diferencial</h2>
        <p className="mb-6">
          Términos que aparecen en casi todos los capítulos de derivadas. Úsalos como referencia rápida al
          estudiar calculadoras y guías del sitio.
        </p>
        <h3 id="continuidad" className="text-xl font-bold text-slate-900 mb-2">Continuidad</h3>
        <p className="mb-6">
          f es continua en a si lim<sub>x→a</sub> f(x) = f(a). Sin continuidad en un punto, no puede haber
          derivabilidad allí (aunque la continuidad sola no garantiza derivada).
        </p>
        <h3 id="diferenciabilidad" className="text-xl font-bold text-slate-900 mb-2">Diferenciabilidad</h3>
        <p className="mb-6">
          f es derivable en a cuando el límite del cociente incremental existe y es finito. Geometricamente,
          la gráfica admite tangente no vertical en ese punto.
        </p>
        <h3 id="notacion-leibniz-lagrange" className="text-xl font-bold text-slate-900 mb-2">Notación Leibniz y Lagrange</h3>
        <p className="mb-6">
          Lagrange escribe f′(x) o y′; Leibniz usa dy/dx. Ambas notaciones son equivalentes; dy/dx enfatiza
          razones infinitesimales.
        </p>
        <h3 id="diferencial" className="text-xl font-bold text-slate-900 mb-2">Diferencial</h3>
        <p>
          El diferencial dy = f′(x) dx aproxima el cambio en y cuando x varía un poco. No es lo mismo que la
          derivada dy/dx: consulta la sección de{" "}
          <Link href="/formulas-de-derivadas#diferenciales" className="text-secondary font-bold hover:underline">
            diferenciales
          </Link>{" "}
          en fórmulas de derivadas.
        </p>
      </section>

      {/* Notation */}
      <section>
        <h2 id="funciones">{t.sections.functions.title}</h2>
        <p className="mb-6">
          {t.sections.functions.desc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">{t.sections.functions.trig}</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600">
              <li className="flex justify-between"><span>"Seno":</span> <span className="text-slate-900 font-bold">sin(x)</span></li>
              <li className="flex justify-between"><span>"Coseno":</span> <span className="text-slate-900 font-bold">cos(x)</span></li>
              <li className="flex justify-between"><span>"Tangente":</span> <span className="text-slate-900 font-bold">tan(x)</span></li>
              <li className="flex justify-between"><span>"Arcoseno":</span> <span className="text-slate-900 font-bold">asin(x)</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">{t.sections.functions.special}</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600">
              <li className="flex justify-between"><span>"Log. Natural":</span> <span className="text-slate-900 font-bold">ln(x)</span></li>
              <li className="flex justify-between"><span>"Exponencial":</span> <span className="text-slate-900 font-bold">e^(x)</span></li>
              <li className="flex justify-between"><span>"Raíz":</span> <span className="text-slate-900 font-bold">sqrt(x)</span></li>
              <li className="flex justify-between"><span>"Potencia":</span> <span className="text-slate-900 font-bold">x^n</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 id="ejemplos">{"Ejemplos de Uso Común"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExampleCard title="Derivada del Seno">
            <p className="font-mono text-center text-lg">sin(x)</p>
          </ExampleCard>
          <ExampleCard title="Logaritmo Natural">
            <p className="font-mono text-center text-lg">ln(x)</p>
          </ExampleCard>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 id="tips">{t.sections.tips.title}</h2>
        <TipCard>
          {t.sections.tips.proTip}
        </TipCard>
        <WarningCard>
          {t.sections.tips.warning}
        </WarningCard>
        <p className="mt-6">
          Después de practicar con la herramienta, revisa{" "}
          <Link href="/derivada-de-sin-x" className="text-secondary font-bold hover:underline">
            aprende la derivada de sin x paso a paso
          </Link>{" "}
          o los{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-secondary font-bold hover:underline">
            ejercicios de regla de la cadena
          </Link>
          .
        </p>
      </section>

      <InternalLinksSection title="Artículos relacionados" links={COMO_FUNCIONA_INTERNAL_LINKS} />
    </div>
  );

  return (
    <>
      <HowToJsonLd
        
        name={t.title}
        description={t.description}
        path="/como-funciona"
        steps={t.sections.steps.items}
      />
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
      relatedPosts={internalLinksToRelated(COMO_FUNCIONA_INTERNAL_LINKS)}
    />
    </>
  );
}
