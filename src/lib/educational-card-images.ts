/** Homepage educational card images (public/images). */
export const EDUCATIONAL_CARD_IMAGES = {
  "que-es-derivada": {
    src: "/images/que-es-una-derivada.png",
    alt: "Gráfica de una función con recta tangente que ilustra el concepto de derivada",
  },
  "como-usar-calculadora": {
    src: "/images/como-usar-calculadora-de-derivadas.png",
    alt: "Interfaz de la calculadora de derivadas con teclado matemático",
  },
  "reglas-derivacion": {
    src: "/images/reglas-de-derivacion.png",
    alt: "Guía visual de reglas de derivación: potencia, producto, cociente y cadena",
  },
  "ejemplos-derivadas": {
    src: "/images/ejemplos-de-derivadas-resueltas.png",
    alt: "Cuaderno con ejemplos de derivadas resueltos paso a paso",
  },
  "derivadas-parciales": {
    src: "/images/derivadas-parciales.png",
    alt: "Superficie 3D que representa derivadas parciales en varias variables",
  },
  "formulas-derivadas": {
    src: "/images/formulas-de-derivadas.png",
    alt: "Tabla de fórmulas de derivadas y funciones trigonométricas",
  },
} as const;

export type EducationalCardImageId = keyof typeof EDUCATIONAL_CARD_IMAGES;

export function getEducationalCardImage(id: EducationalCardImageId) {
  return EDUCATIONAL_CARD_IMAGES[id];
}

export function getEducationalCardImageById(id: string) {
  const image = EDUCATIONAL_CARD_IMAGES[id as EducationalCardImageId];
  if (!image) {
    throw new Error(`Unknown educational card image id: ${id}`);
  }
  return image;
}
