import Link from "next/link";
import katex from "katex";
import { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import { ES_AUTHORITY_ROUTES } from "../es-authority-routes";
import { ES_CALCULATOR_ROUTES } from "../es-routes";
import { EN_ROUTES } from "../en-routes";
import { ES_MAIN_CALCULATOR_HREF, ROUTES } from "../routes";
import { ES_STANDARD_CALCULATOR_LINKS } from "../calculator-pages/standard-links";

export function renderMath(tex: string, display = false) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(tex, { throwOnError: false, displayMode: display }),
      }}
    />
  );
}

export function esAuthorityBreadcrumbs(route: string, label: string) {
  return [
    { label: "Inicio", href: ROUTES.home },
    { label: "Guías de derivadas", href: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes },
    { label, href: route },
  ] as const;
}

export const ES_AUTHORITY_HUB_LINKS = [
  {
    href: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes,
    label: "Derivadas de funciones comunes",
    desc: "Tabla completa y guías de x, e^x, ln x, sin x y más.",
  },
  {
    href: ES_AUTHORITY_ROUTES.reglasDeDerivacion,
    label: "Reglas de derivación",
    desc: "Potencia, producto, cociente, cadena y trigonométricas en una guía completa.",
  },
  {
    href: ES_AUTHORITY_ROUTES.formulasDeDerivadas,
    label: "Fórmulas de derivadas",
    desc: "Referencia organizada por tipo de función y regla.",
  },
  {
    href: ES_AUTHORITY_ROUTES.ejemplosDeDerivadas,
    label: "Ejemplos de derivadas",
    desc: "Problemas resueltos de nivel básico a avanzado.",
  },
  {
    href: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas,
    label: "Ejercicios de derivadas",
    desc: "Práctica con pistas y estrategias de estudio.",
  },
  {
    href: ES_AUTHORITY_ROUTES.tablaDeDerivadas,
    label: "Tabla de derivadas",
    desc: "Hoja de consulta rápida para repasar antes del examen.",
  },
] as const;

const ES_STANDARD_CALCULATOR_LINKS_WITH_DESC = ES_STANDARD_CALCULATOR_LINKS.map((link) => ({
  ...link,
  desc:
    link.href === ROUTES.home
      ? "Derivación simbólica gratuita con pasos detallados."
      : link.href === ES_CALCULATOR_ROUTES.partialDerivatives
        ? "Calcula ∂f/∂x y ∂f/∂y en funciones multivariable."
        : link.href === ES_CALCULATOR_ROUTES.chainRule
          ? "Funciones compuestas y regla de la cadena automática."
          : "Encuentra dy/dx cuando y no está despejada.",
}));

export function InternalLinksBlock({
  links,
  heading = "Sigue aprendiendo",
}: {
  links: readonly { href: string; label: string; desc?: string }[];
  heading?: string;
}) {
  return (
    <nav className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label="Guías relacionadas">
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

export function AuthorityClusterBlock({
  exclude,
  heading = "Más guías del clúster de derivadas",
}: {
  exclude?: string;
  heading?: string;
}) {
  const links = ES_AUTHORITY_HUB_LINKS.filter((l) => l.href !== exclude);
  return <InternalLinksBlock links={links} heading={heading} />;
}

export function RelatedCalculatorsBlock() {
  return (
    <section className="my-12" aria-labelledby="calculadoras-relacionadas-heading">
      <h2 id="calculadoras-relacionadas-heading" className="text-2xl font-bold text-slate-900 mb-4">
        Calculadoras relacionadas
      </h2>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Usa estas herramientas gratuitas para comprobar tu trabajo. Cada calculadora muestra pasos simbólicos para
        que puedas comparar tu procedimiento escrito con la regla correcta en cada etapa.
      </p>
      <InternalLinksBlock links={ES_STANDARD_CALCULATOR_LINKS_WITH_DESC} heading="Prueba una calculadora" />
    </section>
  );
}

export function CalcCTA() {
  return (
    <div className="my-10 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-slate-900 mb-2">¿Necesitas resolver tu propia derivada?</h3>
      <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-4">
        Usa nuestra{" "}
        <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
          calculadora de derivadas con pasos
        </Link>{" "}
        en la página principal: introduce cualquier expresión, elige la variable y compara tu trabajo con la solución
        simbólica completa.
      </p>
      <Link
        href={ES_MAIN_CALCULATOR_HREF}
        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
      >
        Abrir calculadora de derivadas
      </Link>
    </div>
  );
}

export function ArticleWrap({ children }: { children: React.ReactNode }) {
  return <div className="space-y-12 text-slate-600 leading-relaxed">{children}</div>;
}

export {
  FormulaCard,
  TipCard,
  WarningCard,
  ExampleCard,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
  ROUTES,
  EN_ROUTES,
};
