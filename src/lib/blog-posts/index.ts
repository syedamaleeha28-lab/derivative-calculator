import type { BlogPostEntry } from "./types";
import { blogBreadcrumbs } from "./helpers";
import { DerivadaDeSinXContent } from "./content/derivada-de-sin-x";
import { DerivadaDeCosXContent } from "./content/derivada-de-cos-x";
import { DerivadaDeTanXContent } from "./content/derivada-de-tan-x";
import { ReglaDeLaCadenaEjerciciosContent } from "./content/regla-de-la-cadena-ejercicios";
import { DerivadasImplicitasContent } from "./content/derivadas-implicitas-paso-a-paso";
import { ComoDerivarFraccionesContent } from "./content/como-derivar-fracciones";
import { EjemplosDeDerivadasResueltasContent } from "./content/ejemplos-de-derivadas-resueltas";
import { DerivadasParcialesEjemplosContent } from "./content/derivadas-parciales-ejemplos";
import { ErroresComunesAlDerivarContent } from "./content/errores-comunes-al-derivar";
import { DerivadasParaPrincipiantesContent } from "./content/derivadas-para-principiantes";
import { ComoAprenderDerivadasDesdeCeroContent } from "./content/como-aprender-derivadas-desde-cero";
import { EntendiendoReglaDeLaCadenaContent } from "./content/entendiendo-regla-de-la-cadena";

const AUTHOR = {
  name: "Equipo Calculadora Derivadas",
  role: "Educación matemática en español",
} as const;

function entry(
  meta: Omit<BlogPostEntry, "breadcrumbs" | "Content"> & {
    breadcrumbLabel: string;
    Content: BlogPostEntry["Content"];
  }
): BlogPostEntry {
  const { breadcrumbLabel, Content, ...rest } = meta;
  return {
    ...rest,
    breadcrumbs: blogBreadcrumbs(rest.slug, breadcrumbLabel),
    Content,
  };
}

export const BLOG_POST_ENTRIES: BlogPostEntry[] = [
  entry({
    slug: "derivada-de-sin-x",
    title: "Derivada de sin(x): fórmula, ejemplos y regla de la cadena",
    description:
      "Aprende la derivada de sin x paso a paso: fórmula cos(x), composiciones sin(g(x)), errores típicos y práctica con calculadora de derivadas online.",
    date: "18 de Mayo, 2026",
    dateIso: "2026-05-18",
    readTime: "14 min",
    category: "Trigonometría",
    tags: ["derivada de sin x", "derivadas trigonométricas", "cálculo diferencial"],
    author: AUTHOR,
    heroImageAlt: "Gráfica de la función seno y su derivada coseno en cálculo diferencial",
    faqs: [
      {
        question: "¿Cuál es la derivada de sin(x)?",
        answer: "La derivada de sin(x) es cos(x), siempre que x esté en radianes.",
      },
      {
        question: "¿Cómo derivo sin(3x)?",
        answer: "Aplica la regla de la cadena: cos(3x) multiplicado por 3, es decir 3cos(3x).",
      },
      {
        question: "¿Puedo verificar sin(x) en la calculadora?",
        answer: "Sí, usa la calculadora de derivadas con pasos del sitio para comparar el procedimiento.",
      },
      {
        question: "¿La derivada de sin(x) cambia en grados?",
        answer: "Sí. La fórmula (sin x)′=cos x asume radianes; en grados debes convertir o ajustar el factor de escala.",
      },
      {
        question: "¿Cómo derivo x·sin(x)?",
        answer: "Usa la regla del producto: sin(x) + x·cos(x).",
      },
    ],
    relatedPosts: [
      { title: "Derivada de cos(x)", slug: "derivada-de-cos-x" },
      { title: "Regla de la cadena: ejercicios", slug: "regla-de-la-cadena-ejercicios" },
    ],
    breadcrumbLabel: "Derivada de sin(x)",
    Content: DerivadaDeSinXContent,
  }),
  entry({
    slug: "derivada-de-cos-x",
    title: "Derivada de cos(x): fórmula, ejemplos y composiciones",
    description:
      "Derivada de cos x = −sin(x). Ejemplos con regla de la cadena, productos y cocientes. Guía para estudiantes de cálculo diferencial.",
    date: "18 de Mayo, 2026",
    dateIso: "2026-05-18",
    readTime: "13 min",
    category: "Trigonometría",
    tags: ["derivada de cos x", "derivadas trigonométricas"],
    author: AUTHOR,
    heroImageAlt: "Función coseno y pendiente de la tangente: derivada de cos x",
    faqs: [
      {
        question: "¿Por qué la derivada de cos(x) es negativa?",
        answer: "Porque cos(x) decrece cuando sin(x) crece en la misma fase; el cálculo da −sin(x).",
      },
      {
        question: "¿Cómo derivo cos(2x)?",
        answer: "−sin(2x)·2 = −2sin(2x) usando la regla de la cadena.",
      },
      {
        question: "¿Cuál es la derivada de cos(x)?",
        answer: "−sin(x) en radianes.",
      },
      {
        question: "¿Cómo derivo e^x·cos(x)?",
        answer: "Regla del producto: e^x(cos x − sin x).",
      },
      {
        question: "¿Dónde practico más ejemplos?",
        answer: "En la calculadora con pasos y en la página de ejemplos de derivadas resueltas.",
      },
    ],
    relatedPosts: [
      { title: "Derivada de sin(x)", slug: "derivada-de-sin-x" },
      { title: "Derivada de tan(x)", slug: "derivada-de-tan-x" },
    ],
    breadcrumbLabel: "Derivada de cos(x)",
    Content: DerivadaDeCosXContent,
  }),
  entry({
    slug: "derivada-de-tan-x",
    title: "Derivada de tan(x): sec²(x) y ejercicios resueltos",
    description:
      "Derivada de tan x explicada con cociente, sec²(x) y regla de la cadena. Ejemplos y enlaces a derivadas trigonométricas.",
    date: "17 de Mayo, 2026",
    dateIso: "2026-05-17",
    readTime: "12 min",
    category: "Trigonometría",
    tags: ["derivada de tan x", "sec cuadrado"],
    author: AUTHOR,
    heroImageAlt: "Tangente y derivada secante al cuadrado en cálculo",
    faqs: [
      {
        question: "¿Cuál es la derivada de tan(x)?",
        answer: "sec²(x), equivalente a 1/cos²(x).",
      },
      {
        question: "¿Cómo derivo tan(5x)?",
        answer: "5·sec²(5x) aplicando la regla de la cadena.",
      },
      {
        question: "¿Por qué aparece sec² al derivar tangente?",
        answer: "Porque tan x = sin x / cos x y la regla del cociente simplifica a 1/cos² x.",
      },
      {
        question: "¿Dónde no está definida la derivada de tan(x)?",
        answer: "Donde cos(x)=0, es decir x = π/2 + kπ en radianes.",
      },
      {
        question: "¿Puedo derivar sin(x)/cos(x) en la calculadora?",
        answer: "Sí; el motor aplica el cociente o reconoce la tangente según la sintaxis.",
      },
    ],
    relatedPosts: [
      { title: "Derivada de sin(x)", slug: "derivada-de-sin-x" },
      { title: "Regla de la cadena", slug: "regla-de-la-cadena-ejercicios" },
    ],
    breadcrumbLabel: "Derivada de tan(x)",
    Content: DerivadaDeTanXContent,
  }),
  entry({
    slug: "regla-de-la-cadena-ejercicios",
    title: "Regla de la cadena: ejercicios resueltos paso a paso",
    description:
      "Seis ejercicios de la regla de la cadena con procedimiento completo. Funciones compuestas, trucos de examen y calculadora de derivadas.",
    date: "16 de Mayo, 2026",
    dateIso: "2026-05-16",
    readTime: "18 min",
    category: "Reglas",
    tags: ["regla de la cadena", "derivadas paso a paso"],
    author: AUTHOR,
    heroImageAlt: "Ejercicios de regla de la cadena en cálculo diferencial",
    faqs: [
      {
        question: "¿Cuándo uso la regla de la cadena?",
        answer: "Cuando una función está compuesta dentro de otra, por ejemplo sin(x²) o ln(3x).",
      },
      {
        question: "¿Qué olvido con más frecuencia?",
        answer: "Multiplicar por la derivada de la función interna g′(x).",
      },
    ],
    relatedPosts: [
      { title: "Entendiendo la regla de la cadena", slug: "entendiendo-regla-de-la-cadena" },
      { title: "Derivada de sin(x)", slug: "derivada-de-sin-x" },
    ],
    breadcrumbLabel: "Regla de la cadena",
    Content: ReglaDeLaCadenaEjerciciosContent,
  }),
  entry({
    slug: "derivadas-implicitas-paso-a-paso",
    title: "Derivadas implícitas paso a paso: método y ejemplos",
    description:
      "Aprende derivadas implícitas con cinco ejemplos resueltos: círculos, xy=c, sen(xy) y más. Guía en español con calculadora.",
    date: "15 de Mayo, 2026",
    dateIso: "2026-05-15",
    readTime: "17 min",
    category: "Avanzado",
    tags: ["derivadas implícitas", "cálculo diferencial"],
    author: AUTHOR,
    heroImageAlt: "Derivación implícita de una curva en el plano xy",
    faqs: [
      {
        question: "¿Qué es una derivada implícita?",
        answer: "Derivar y respecto a x cuando la relación entre x e y no está despejada como y=f(x).",
      },
      {
        question: "¿Cómo derivo xy=1?",
        answer: "Deriva ambos lados: y + x·y′ = 0, luego despeja y′ = −y/x.",
      },
    ],
    relatedPosts: [
      { title: "Cómo derivar fracciones", slug: "como-derivar-fracciones" },
      { title: "Errores comunes al derivar", slug: "errores-comunes-al-derivar" },
    ],
    breadcrumbLabel: "Derivadas implícitas",
    Content: DerivadasImplicitasContent,
  }),
  entry({
    slug: "como-derivar-fracciones",
    title: "Cómo derivar fracciones: regla del cociente y ejemplos",
    description:
      "Guía para derivar fracciones y funciones racionales con la regla del cociente. Seis ejemplos y dominio de la función.",
    date: "14 de Mayo, 2026",
    dateIso: "2026-05-14",
    readTime: "16 min",
    category: "Reglas",
    tags: ["derivada del cociente", "fracciones"],
    author: AUTHOR,
    heroImageAlt: "Regla del cociente para derivar fracciones algebraicas",
    faqs: [
      {
        question: "¿Cuál es la regla del cociente?",
        answer: "(u/v)′ = (u′v − uv′)/v², con v ≠ 0.",
      },
      {
        question: "¿Cómo derivo (x+1)/(x−2)?",
        answer: "Aplica la regla del cociente o simplifica algebra antes si es posible.",
      },
    ],
    relatedPosts: [
      { title: "Regla de la cadena: ejercicios", slug: "regla-de-la-cadena-ejercicios" },
      { title: "Ejemplos de derivadas resueltas", slug: "ejemplos-de-derivadas-resueltas" },
    ],
    breadcrumbLabel: "Derivar fracciones",
    Content: ComoDerivarFraccionesContent,
  }),
  entry({
    slug: "ejemplos-de-derivadas-resueltas",
    title: "Ejemplos de derivadas resueltas: guía de práctica",
    description:
      "Colección orientativa de ejercicios de derivadas resueltos: polinomios, trigonométricas, cadena y producto. Enlaces a la galería del sitio.",
    date: "13 de Mayo, 2026",
    dateIso: "2026-05-13",
    readTime: "15 min",
    category: "Ejemplos",
    tags: ["ejemplos de derivadas resueltas", "ejercicios de derivadas"],
    author: AUTHOR,
    heroImageAlt: "Ejemplos de derivadas resueltas paso a paso para estudiantes",
    faqs: [
      {
        question: "¿Dónde encuentro más ejemplos interactivos?",
        answer: "En la página /ejemplos y en la calculadora de derivadas con pasos.",
      },
    ],
    relatedPosts: [
      { title: "Derivadas para principiantes", slug: "derivadas-para-principiantes" },
      { title: "Regla de la cadena", slug: "regla-de-la-cadena-ejercicios" },
    ],
    breadcrumbLabel: "Ejemplos resueltos",
    Content: EjemplosDeDerivadasResueltasContent,
  }),
  entry({
    slug: "derivadas-parciales-ejemplos",
    title: "Derivadas parciales: ejemplos resueltos paso a paso",
    description:
      "Ejemplos de derivadas parciales en funciones de dos y tres variables. Notación ∂f/∂x y práctica con calculadora.",
    date: "12 de Mayo, 2026",
    dateIso: "2026-05-12",
    readTime: "17 min",
    category: "Avanzado",
    tags: ["derivadas parciales", "cálculo multivariable"],
    author: AUTHOR,
    heroImageAlt: "Derivadas parciales de funciones de varias variables",
    faqs: [
      {
        question: "¿Qué es una derivada parcial?",
        answer: "La derivada respecto a una variable manteniendo las demás fijas.",
      },
      {
        question: "¿Es lo mismo que derivada ordinaria?",
        answer: "No; la ordinaria deriva respecto a la variable principal en funciones y=f(x).",
      },
    ],
    relatedPosts: [
      { title: "Ejemplos de derivadas resueltas", slug: "ejemplos-de-derivadas-resueltas" },
      { title: "Cómo derivar fracciones", slug: "como-derivar-fracciones" },
    ],
    breadcrumbLabel: "Derivadas parciales",
    Content: DerivadasParcialesEjemplosContent,
  }),
  entry({
    slug: "errores-comunes-al-derivar",
    title: "Errores comunes al derivar: 10 fallos y cómo corregirlos",
    description:
      "Los errores más frecuentes al derivar: producto, cadena, cociente, logaritmos y trigonométricas. Guía para aprobar cálculo diferencial.",
    date: "11 de Mayo, 2026",
    dateIso: "2026-05-11",
    readTime: "16 min",
    category: "Consejos",
    tags: ["errores al derivar", "exámenes de cálculo"],
    author: AUTHOR,
    heroImageAlt: "Errores frecuentes al calcular derivadas en matemáticas",
    faqs: [
      {
        question: "¿Cuál es el error más común?",
        answer: "Olvidar la regla de la cadena o aplicar mal la regla del producto.",
      },
    ],
    relatedPosts: [
      { title: "Regla de la cadena", slug: "regla-de-la-cadena-ejercicios" },
      { title: "Derivadas para principiantes", slug: "derivadas-para-principiantes" },
    ],
    breadcrumbLabel: "Errores comunes",
    Content: ErroresComunesAlDerivarContent,
  }),
  entry({
    slug: "derivadas-para-principiantes",
    title: "Derivadas para principiantes: guía completa desde cero",
    description:
      "Ruta de estudio de derivadas para principiantes: conceptos, reglas básicas, práctica semanal y calculadora online con pasos.",
    date: "10 de Mayo, 2026",
    dateIso: "2026-05-10",
    readTime: "18 min",
    category: "Guías",
    tags: ["derivadas para principiantes", "aprender derivadas"],
    author: AUTHOR,
    heroImageAlt: "Guía de derivadas para principiantes de cálculo diferencial",
    faqs: [
      {
        question: "¿Por dónde empiezo?",
        answer: "Límites, definición de derivada, potencias, luego trigonométricas y reglas.",
      },
      {
        question: "¿Cuánto tiempo de estudio necesito?",
        answer: "Tres sesiones de 40 minutos por semana durante un mes suelen bastar para lo básico.",
      },
    ],
    relatedPosts: [
      { title: "Aprender derivadas desde cero", slug: "como-aprender-derivadas-desde-cero" },
      { title: "Ejemplos resueltos", slug: "ejemplos-de-derivadas-resueltas" },
    ],
    breadcrumbLabel: "Para principiantes",
    Content: DerivadasParaPrincipiantesContent,
  }),
  entry({
    slug: "como-aprender-derivadas-desde-cero",
    title: "Cómo aprender derivadas desde cero: guía completa",
    description:
      "Domina el cálculo diferencial desde cero: definición, ruta de estudio y práctica con calculadora de derivadas paso a paso.",
    date: "10 de Mayo, 2026",
    dateIso: "2026-05-10",
    readTime: "16 min",
    category: "Guías",
    tags: ["aprender derivadas", "cálculo diferencial", "derivadas para principiantes"],
    author: AUTHOR,
    heroImageAlt: "Aprender derivadas desde cero con calculadora educativa",
    faqs: [
      {
        question: "¿Necesito dominar límites primero?",
        answer: "Sí, la definición formal de derivada usa límites; conviene repasarlos.",
      },
      {
        question: "¿Cuánto tiempo se tarda en aprender derivadas?",
        answer: "Con estudio regular, las reglas básicas suelen afianzarse en tres o cuatro semanas.",
      },
      {
        question: "¿La calculadora ayuda a aprender?",
        answer: "Sí, si la usas para verificar y entender pasos, no solo para copiar el resultado final.",
      },
      {
        question: "¿Qué leo después de este artículo?",
        answer: "Derivadas para principiantes, regla de la cadena y ejemplos resueltos del blog.",
      },
    ],
    relatedPosts: [
      { title: "Derivadas para principiantes", slug: "derivadas-para-principiantes" },
    ],
    breadcrumbLabel: "Aprender desde cero",
    Content: ComoAprenderDerivadasDesdeCeroContent,
  }),
  entry({
    slug: "entendiendo-regla-de-la-cadena",
    title: "Entendiendo la regla de la cadena en cálculo diferencial",
    description:
      "Explicación clara de la regla de la cadena para funciones compuestas. Intuición, fórmula y enlaces a ejercicios.",
    date: "5 de Mayo, 2026",
    dateIso: "2026-05-05",
    readTime: "14 min",
    category: "Reglas",
    tags: ["regla de la cadena", "funciones compuestas", "derivadas paso a paso"],
    author: AUTHOR,
    heroImageAlt: "Regla de la cadena explicada para derivadas compuestas",
    faqs: [
      {
        question: "¿Cuál es la fórmula de la regla de la cadena?",
        answer: "d/dx f(g(x)) = f′(g(x))·g′(x).",
      },
    ],
    relatedPosts: [
      { title: "Regla de la cadena: ejercicios", slug: "regla-de-la-cadena-ejercicios" },
    ],
    breadcrumbLabel: "Regla de la cadena",
    Content: EntendiendoReglaDeLaCadenaContent,
  }),
];

const bySlug = new Map(BLOG_POST_ENTRIES.map((p) => [p.slug, p]));

export function getBlogPostBySlug(slug: string): BlogPostEntry | undefined {
  return bySlug.get(slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POST_ENTRIES.map((p) => p.slug);
}

/** Hub listing (card previews) */
export function getBlogListingPosts() {
  return BLOG_POST_ENTRIES.map((p) => ({
    title: p.title,
    slug: p.slug,
    desc: p.description,
    date: p.date,
    read: p.readTime,
    category: p.category,
  }));
}

/** Recent posts for homepage (newest first). */
export function getRecentBlogPosts(limit = 6) {
  return [...BLOG_POST_ENTRIES]
    .sort((a, b) => b.dateIso.localeCompare(a.dateIso))
    .slice(0, limit)
    .map((p) => ({
      title: p.title,
      slug: p.slug,
      description: p.description,
      date: p.date,
      readTime: p.readTime,
      category: p.category,
    }));
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Trigonometría",
  "Reglas",
  "Guías",
  "Ejemplos",
  "Avanzado",
  "Consejos",
] as const;
