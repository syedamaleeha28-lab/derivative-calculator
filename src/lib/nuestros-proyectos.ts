import { ROUTES } from "./routes";

export const NUESTROS_PROYECTOS_PATH = "/nuestros-proyectos" as const;

export const NUESTROS_PROYECTOS_METADATA = {
  title: "Nuestros proyectos",
  description:
    "Proyectos digitales desarrollados por el mismo equipo detrás de Calculadora de Derivadas: portales educativos y recursos online.",
} as const;

export const NUESTROS_PROYECTOS_BREADCRUMBS = [
  { label: "Inicio", href: ROUTES.home },
  { label: "Nuestros proyectos", href: NUESTROS_PROYECTOS_PATH },
] as const;

export const NUESTROS_PROYECTOS_INTRO = {
  eyebrow: "Equipo",
  h1: "Nuestros proyectos",
  subtitle:
    "Calculadora de Derivadas forma parte de un conjunto de proyectos digitales desarrollados por el mismo equipo. Cada proyecto está especializado en un área diferente y se mantiene de forma independiente con el objetivo de ofrecer contenido útil y una excelente experiencia para los usuarios.",
} as const;

export const NUESTROS_PROYECTOS_LIST_TITLE = "Nuestros proyectos" as const;

export const NUESTROS_PROYECTOS = [
  {
    id: "calculadora-de-derivadas",
    name: "Calculadora de Derivadas",
    description:
      "Nuestra plataforma educativa especializada en cálculo diferencial, derivadas y herramientas matemáticas para estudiantes y docentes.",
    current: true,
  },
  {
    id: "gtasanad",
    name: "GTASanad",
    href: "https://gtasanad.org/",
    description:
      "Portal en árabe con guías, herramientas y recursos sobre Grand Theft Auto para dispositivos Android.",
    current: false,
  },
  {
    id: "hibou-et-mots",
    name: "Hibou et Mots",
    href: "https://hibou-et-mots.com/",
    description:
      "Proyecto educativo dedicado a juegos de palabras y aprendizaje del idioma francés.",
    current: false,
  },
] as const;

export const NUESTROS_PROYECTOS_FILOSOFIA = {
  title: "Nuestra filosofía",
  text: "Creemos en desarrollar herramientas digitales útiles, rápidas y fáciles de usar para diferentes comunidades e idiomas. Cada proyecto se construye de forma independiente, con un enfoque en la calidad del contenido, el rendimiento y la experiencia del usuario.",
} as const;
