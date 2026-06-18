import Link from "next/link";
import { ES_AUTHORITY_ROUTES } from "@/lib/es-authority-routes";
import { ES_CALCULATOR_ROUTES } from "@/lib/es-routes";
import { ES_MAIN_CALCULATOR_HREF, ROUTES } from "@/lib/routes";

const CALCULATOR_TOOLS = [
  {
    title: "Calculadora de derivadas",
    href: ES_MAIN_CALCULATOR_HREF,
    desc: "Deriva cualquier función con pasos detallados; calcular derivadas online con explicación de cada regla.",
  },
  {
    title: "Calculadora de regla del producto",
    href: ES_CALCULATOR_ROUTES.productRule,
    desc: "Derivadas de productos u·v con la fórmula u′v + uv′ paso a paso.",
  },
  {
    title: "Calculadora de regla del cociente",
    href: ES_CALCULATOR_ROUTES.quotientRule,
    desc: "Deriva fracciones y funciones racionales sin errores de signo.",
  },
  {
    title: "Calculadora de derivadas parciales",
    href: ES_CALCULATOR_ROUTES.partialDerivatives,
    desc: "∂f/∂x y ∂f/∂y para funciones de varias variables.",
  },
  {
    title: "Calculadora de regla de la cadena",
    href: ES_CALCULATOR_ROUTES.chainRule,
    desc: "Funciones compuestas y derivación anidada explicada.",
  },
  {
    title: "Calculadora de derivadas implícitas",
    href: ES_CALCULATOR_ROUTES.implicitDerivatives,
    desc: "Encuentra dy/dx sin despejar y de la ecuación.",
  },
  {
    title: "Calculadora de segunda derivada",
    href: ES_CALCULATOR_ROUTES.secondDerivative,
    desc: "Concavidad, puntos de inflexión y f″(x) al instante.",
  },
  {
    title: "Calculadora de derivadas de orden superior",
    href: ES_CALCULATOR_ROUTES.higherOrderDerivative,
    desc: "Tercera, cuarta y n-ésima derivada de cualquier función.",
  },
  {
    title: "Calculadora de recta tangente",
    href: ES_CALCULATOR_ROUTES.tangentLine,
    desc: "Pendiente f′(a), evaluar la derivada en un punto y ecuación de la tangente.",
  },
  {
    title: "Calculadora de puntos críticos",
    href: ES_CALCULATOR_ROUTES.criticalPoints,
    desc: "Máximos, mínimos y optimización: dónde f′(x) = 0.",
  },
] as const;

const AUTHORITY_GUIDES = [
  {
    title: "Reglas de derivación",
    href: ES_AUTHORITY_ROUTES.reglasDeDerivacion,
    desc: "Guía completa: potencia, producto, cociente, cadena, trigonométricas y más.",
  },
  {
    title: "Fórmulas de derivadas",
    href: ES_AUTHORITY_ROUTES.formulasDeDerivadas,
    desc: "Todas las fórmulas de derivación con tablas de referencia.",
  },
  {
    title: "Derivadas de funciones comunes",
    href: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes,
    desc: "x, x², e^x, ln x, sin x y más: guías paso a paso por función.",
  },
  {
    title: "Tabla de derivadas",
    href: ES_AUTHORITY_ROUTES.tablaDeDerivadas,
    desc: "Tabla de derivadas inmediatas lista para imprimir y repasar.",
  },
  {
    title: "Ejemplos de derivadas",
    href: ES_AUTHORITY_ROUTES.ejemplosDeDerivadas,
    desc: "Ejemplos de derivadas resueltos paso a paso por nivel.",
  },
  {
    title: "Ejercicios de derivadas",
    href: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas,
    desc: "Ejercicios de derivadas resueltos para practicar antes del examen.",
  },
] as const;

/** Homepage hub: links every specialized calculator and authority guide (topic cluster). */
export default function HomeCalculatorTools() {
  return (
    <section
      aria-labelledby="herramientas-calculo"
      className="py-14 md:py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="herramientas-calculo"
          className="heading-font text-2xl md:text-3xl text-slate-900 mb-3 text-center"
        >
          Herramientas de Cálculo
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Calculadoras especializadas para derivar y resolver derivadas con cada técnica: regla del
          producto, cociente, cadena, derivadas parciales, implícitas, segunda
          derivada, recta tangente y puntos críticos. La{" "}
          <Link href={`${ES_CALCULATOR_ROUTES.tangentLine}#evaluar-f-prima-en-un-punto`} className="text-violet-600 font-medium hover:underline">
            recta tangente
          </Link>{" "}
          expone f′(a); los{" "}
          <Link href={`${ES_CALCULATOR_ROUTES.criticalPoints}#aplicaciones-optimizacion`} className="text-violet-600 font-medium hover:underline">
            puntos críticos
          </Link>{" "}
          conectan con optimización.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CALCULATOR_TOOLS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col h-full rounded-2xl border border-slate-200 p-5 hover:border-violet-300 hover:shadow-md transition-all bg-white"
              >
                <span className="font-bold text-slate-900">{item.title}</span>
                <p className="text-sm text-slate-500 mt-2 flex-1">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="heading-font text-2xl md:text-3xl text-slate-900 mb-3 text-center mt-16">
          Guías de derivadas
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Aprende a derivar con guías completas: reglas de derivación, fórmulas,
          tablas, ejemplos resueltos y ejercicios para practicar.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUTHORITY_GUIDES.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col h-full rounded-2xl border border-slate-200 p-5 hover:border-violet-300 hover:shadow-md transition-all bg-slate-50"
              >
                <span className="font-bold text-slate-900">{item.title}</span>
                <p className="text-sm text-slate-500 mt-2 flex-1">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-slate-500">
          También puedes repasar las{" "}
          <Link href={ROUTES.reglas} className="text-violet-600 font-medium hover:underline">
            reglas de derivación básicas
          </Link>
          {", ver "}
          <Link href={ROUTES.ejemplos} className="text-violet-600 font-medium hover:underline">
            ejemplos de derivadas resueltas
          </Link>{" "}
          o leer el{" "}
          <Link href={ROUTES.blog} className="text-violet-600 font-medium hover:underline">
            blog de cálculo diferencial
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
