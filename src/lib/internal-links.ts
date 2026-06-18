import { ROUTES } from "./routes";

export type InternalLinkItem = {
  href: string;
  anchor: string;
  description: string;
};

/** Homepage featured blog links (keyword-rich anchors). */
export const HOME_FEATURED_BLOG_LINKS: InternalLinkItem[] = [
  {
    href: "/derivada-de-sin-x",
    anchor: "Aprende la derivada de sin x paso a paso",
    description:
      "Fórmula cos(x), regla de la cadena con seno y ejemplos para verificar en la calculadora.",
  },
  {
    href: "/derivada-de-cos-x",
    anchor: "Derivada de cos x explicada con ejemplos",
    description:
      "Signo negativo, composiciones cos(g(x)) y práctica de derivadas trigonométricas.",
  },
  {
    href: "/blog/regla-de-la-cadena-ejercicios",
    anchor: "Ejercicios de regla de la cadena resueltos",
    description:
      "Seis problemas con procedimiento completo para dominar funciones compuestas.",
  },
  {
    href: "/blog/derivadas-implicitas-paso-a-paso",
    anchor: "Derivadas implícitas resueltas paso a paso",
    description:
      "Método para ecuaciones no despejadas y verificación con calculadora de derivadas.",
  },
  {
    href: "/blog/ejemplos-de-derivadas-resueltas",
    anchor: "Galería de ejemplos de derivadas resueltas",
    description:
      "Polinomios, trigonométricas, producto y cociente con enlaces a más recursos.",
  },
];

export const COMO_FUNCIONA_INTERNAL_LINKS: InternalLinkItem[] = [
  {
    href: "/derivada-de-sin-x",
    anchor: "Aprende la derivada de sin x paso a paso",
    description: "Guía trigonométrica esencial antes de usar sin() en la calculadora.",
  },
  {
    href: "/blog/regla-de-la-cadena-ejercicios",
    anchor: "Ejercicios de regla de la cadena",
    description: "Practica composiciones como sin(x²) y ln(3x).",
  },
  {
    href: ROUTES.ejemplos,
    anchor: "Ver ejemplos de derivadas resueltas",
    description: "Ejercicios comentados en la página de ejemplos del sitio.",
  },
  {
    href: ROUTES.reglas,
    anchor: "Repasar reglas de derivación",
    description: "Potencia, producto, cociente y cadena en un solo lugar.",
  },
  {
    href: "/#calculator",
    anchor: "Usar la calculadora de derivadas online",
    description: "Introduce tu función y revisa cada paso del procedimiento.",
  },
];

export const REGLAS_INTERNAL_LINKS: InternalLinkItem[] = [
  {
    href: "/blog/regla-de-la-cadena-ejercicios",
    anchor: "Ejercicios de regla de la cadena",
    description: "Aplica la cadena con desarrollo completo en español.",
  },
  {
    href: "/blog/como-derivar-fracciones",
    anchor: "Cómo derivar fracciones con la regla del cociente",
    description: "Cocientes y funciones racionales paso a paso.",
  },
  {
    href: "/derivada-de-tan-x",
    anchor: "Derivada de tan x y sec²(x)",
    description: "Demostración con cociente y composiciones.",
  },
  {
    href: ROUTES.ejemplos,
    anchor: "Ejemplos de derivadas resueltas",
    description: "Practica variando el tipo de regla en cada ejercicio.",
  },
  {
    href: "/#calculator",
    anchor: "Calculadora de derivadas con pasos",
    description: "Comprueba tus resultados al estudiar las reglas.",
  },
];

export const EJEMPLOS_INTERNAL_LINKS: InternalLinkItem[] = [
  {
    href: "/blog/ejemplos-de-derivadas-resueltas",
    anchor: "Más ejemplos de derivadas resueltas en el blog",
    description: "Guía ampliada con rutas de estudio y enlaces internos.",
  },
  {
    href: "/derivada-de-sin-x",
    anchor: "Derivada de sin x paso a paso",
    description: "Repasa la regla básica de las trigonométricas.",
  },
  {
    href: "/blog/derivadas-implicitas-paso-a-paso",
    anchor: "Derivadas implícitas resueltas",
    description: "Cuando la función no está despejada como y=f(x).",
  },
  {
    href: "/blog/errores-comunes-al-derivar",
    anchor: "Errores comunes al derivar",
    description: "Evita fallos típicos en cadena, producto y cociente.",
  },
  {
    href: ROUTES.reglas,
    anchor: "Reglas de derivación completas",
    description: "Tabla y explicación de cada regla.",
  },
];

/** Per-slug related articles with SEO-friendly anchors (merged with registry). */
export const BLOG_RELATED_BY_SLUG: Record<
  string,
  readonly { slug: string; anchor: string }[]
> = {
  "derivada-de-sin-x": [
    { slug: "derivada-de-cos-x", anchor: "Derivada de cos x explicada" },
    { slug: "derivada-de-tan-x", anchor: "Derivada de tan x y sec²" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Ejercicios de regla de la cadena" },
    { slug: "ejemplos-de-derivadas-resueltas", anchor: "Ejemplos de derivadas resueltas" },
  ],
  "derivada-de-cos-x": [
    { slug: "derivada-de-sin-x", anchor: "Aprende la derivada de sin x paso a paso" },
    { slug: "derivada-de-tan-x", anchor: "Derivada de tan x" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Regla de la cadena con ejercicios" },
  ],
  "derivada-de-tan-x": [
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x" },
    { slug: "derivada-de-cos-x", anchor: "Derivada de cos x" },
    { slug: "como-derivar-fracciones", anchor: "Derivar fracciones (cociente)" },
  ],
  "regla-de-la-cadena-ejercicios": [
    { slug: "entendiendo-regla-de-la-cadena", anchor: "Entender la regla de la cadena" },
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x con cadena" },
    { slug: "errores-comunes-al-derivar", anchor: "Errores comunes al derivar" },
    { slug: "ejemplos-de-derivadas-resueltas", anchor: "Más ejemplos resueltos" },
  ],
  "derivadas-implicitas-paso-a-paso": [
    { slug: "como-derivar-fracciones", anchor: "Cómo derivar fracciones" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Regla de la cadena" },
    { slug: "errores-comunes-al-derivar", anchor: "Errores al derivar" },
    { slug: "derivadas-parciales-ejemplos", anchor: "Derivadas parciales" },
  ],
  "como-derivar-fracciones": [
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Ejercicios de regla de la cadena" },
    { slug: "derivadas-implicitas-paso-a-paso", anchor: "Derivadas implícitas" },
    { slug: "ejemplos-de-derivadas-resueltas", anchor: "Ejemplos de derivadas" },
  ],
  "ejemplos-de-derivadas-resueltas": [
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x paso a paso" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Regla de la cadena" },
    { slug: "derivadas-para-principiantes", anchor: "Derivadas para principiantes" },
    { slug: "/ejemplos-de-derivadas", anchor: "Más ejemplos de derivadas en el sitio" },
  ],
  "derivadas-parciales-ejemplos": [
    { slug: "derivadas-implicitas-paso-a-paso", anchor: "Derivadas implícitas" },
    { slug: "ejemplos-de-derivadas-resueltas", anchor: "Ejemplos resueltos" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Regla de la cadena" },
  ],
  "errores-comunes-al-derivar": [
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Practica la regla de la cadena" },
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x" },
    { slug: "derivadas-para-principiantes", anchor: "Guía para principiantes" },
  ],
  "derivadas-para-principiantes": [
    { slug: "como-aprender-derivadas-desde-cero", anchor: "Aprender derivadas desde cero" },
    { slug: "ejemplos-de-derivadas-resueltas", anchor: "Ejemplos de derivadas resueltas" },
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Regla de la cadena" },
  ],
  "como-aprender-derivadas-desde-cero": [
    { slug: "derivadas-para-principiantes", anchor: "Derivadas para principiantes" },
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x" },
    { slug: "entendiendo-regla-de-la-cadena", anchor: "Regla de la cadena explicada" },
  ],
  "entendiendo-regla-de-la-cadena": [
    { slug: "regla-de-la-cadena-ejercicios", anchor: "Ejercicios de regla de la cadena" },
    { slug: "derivada-de-sin-x", anchor: "Derivada de sin x" },
    { slug: "errores-comunes-al-derivar", anchor: "Errores comunes" },
  ],
};
