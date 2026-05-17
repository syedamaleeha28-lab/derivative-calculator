import type { StaticImageData } from "next/image";
import queEsUnaDerivada from "../../public/images/que-es-una-derivada.png";
import comoUsarCalculadora from "../../public/images/como-usar-calculadora-de-derivadas.png";
import reglasDeDerivacion from "../../public/images/reglas-de-derivacion.png";
import ejemplosDerivadas from "../../public/images/ejemplos-de-derivadas-resueltas.png";
import derivadasParciales from "../../public/images/derivadas-parciales.png";
import formulasDeDerivadas from "../../public/images/formulas-de-derivadas.png";

export type EducationalCardImage = {
  src: StaticImageData;
  alt: string;
};

/** Unique PNG per card (never map by href — several cards share routes). */
export const EDUCATIONAL_CARD_IMAGES = {
  "que-es-derivada": {
    src: queEsUnaDerivada,
    alt: "Ilustración educativa: gráfica de una función con recta tangente que explica qué es una derivada",
  },
  "como-usar-calculadora": {
    src: comoUsarCalculadora,
    alt: "Captura de la calculadora de derivadas online con teclado matemático y campo de expresión",
  },
  "reglas-derivacion": {
    src: reglasDeDerivacion,
    alt: "Guía visual de reglas de derivación: potencia, producto, cociente y regla de la cadena",
  },
  "ejemplos-derivadas": {
    src: ejemplosDerivadas,
    alt: "Ejemplos de derivadas resueltas paso a paso en formato educativo",
  },
  "derivadas-parciales": {
    src: derivadasParciales,
    alt: "Ilustración de derivadas parciales y funciones de varias variables en cálculo multivariable",
  },
  "formulas-derivadas": {
    src: formulasDeDerivadas,
    alt: "Tabla de fórmulas de derivadas y funciones trigonométricas para consulta",
  },
} as const satisfies Record<string, EducationalCardImage>;

export type EducationalCardImageId = keyof typeof EDUCATIONAL_CARD_IMAGES;

export function getEducationalCardImageById(id: string): EducationalCardImage {
  const image = EDUCATIONAL_CARD_IMAGES[id as EducationalCardImageId];
  if (!image) {
    throw new Error(`Unknown educational card image id: ${id}`);
  }
  return image;
}

export type EducationalCardImageInput = {
  id: string;
  title: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Resolve image by stable card `id` (never by `href` — several cards share routes).
 * Dictionary `image` paths document the public asset; `imageAlt` overrides when set.
 */
export function resolveEducationalCardImage(
  card: EducationalCardImageInput
): EducationalCardImage {
  const mapped = getEducationalCardImageById(card.id);
  return {
    src: mapped.src,
    alt: card.imageAlt ?? mapped.alt,
  };
}
