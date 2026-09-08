/** Central hub for common-function derivative guides. */
export const ES_COMMON_FUNCTIONS_HUB = "/derivadas-de-funciones-comunes" as const;
export const EN_COMMON_FUNCTIONS_HUB = "/en/common-derivative-functions" as const;
export const EN_COMMON_FUNCTIONS_HUB_SLUG = "common-derivative-functions" as const;

/** Spanish top-level derivative-of-function pages. */
export const ES_COMMON_FUNCTION_ROUTES = {
  derivadaDeUnaConstante: "/derivada-de-una-constante",
  derivadaDeX: "/derivada-de-x",
  derivadaDeXCuadrado: "/derivada-de-x-cuadrado",
  derivadaDeXCubo: "/derivada-de-x-cubo",
  derivadaDeRaizCuadradaDeX: "/derivada-de-raiz-cuadrada-de-x",
  derivadaDe1EntreX: "/derivada-de-1-x",
  derivadaDeEElevadoAX: "/derivada-de-e-elevado-a-x",
  derivadaDeLnX: "/derivada-de-ln-x",
  derivadaDeLogX: "/derivada-de-log-x",
  derivadaDeSinX: "/derivada-de-sin-x",
  derivadaDeCosX: "/derivada-de-cos-x",
  derivadaDeTanX: "/derivada-de-tan-x",
  derivadaDeArcotangente: "/derivada-de-arcotangente",
  derivadaDeSecante: "/derivada-de-secante",
  derivadaDeArcoseno: "/derivada-de-arcoseno",
} as const;

/** English article slugs (under /en/). */
export const EN_COMMON_FUNCTION_SLUGS = {
  derivativeOfAConstant: "derivative-of-a-constant",
  derivativeOfX: "derivative-of-x",
  derivativeOfXSquared: "derivative-of-x-squared",
  derivativeOfXCubed: "derivative-of-x-cubed",
  derivativeOfSquareRootX: "derivative-of-square-root-x",
  derivativeOf1OverX: "derivative-of-1-over-x",
  derivativeOfEToTheX: "derivative-of-e-to-the-x",
  derivativeOfLnX: "derivative-of-ln-x",
  derivativeOfLogX: "derivative-of-log-x",
  derivativeOfSinX: "derivative-of-sin-x",
  derivativeOfCosX: "derivative-of-cos-x",
  derivativeOfTanX: "derivative-of-tan-x",
  derivativeOfArctan: "derivative-of-arctan",
  derivativeOfSecant: "derivative-of-secant",
  derivativeOfArcsin: "derivative-of-arcsin",
} as const;

export const ES_COMMON_FUNCTION_ROUTE_LIST = Object.values(ES_COMMON_FUNCTION_ROUTES);

export const EN_COMMON_FUNCTION_SLUG_LIST = Object.values(EN_COMMON_FUNCTION_SLUGS);
