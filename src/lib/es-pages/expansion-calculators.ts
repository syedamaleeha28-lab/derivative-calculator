import type { CalculatorPageConfig } from "../calculator-pages/types";
import { esStandardInternalLinks } from "../calculator-pages/standard-links";
import { ES_CALCULATOR_ROUTES } from "../es-routes";
import { EN_ROUTES } from "../en-routes";
import { ROUTES } from "../routes";

const BREADCRUMB_HOME = { label: "Inicio", path: ROUTES.home };
const TAG = "Herramienta Académica Gratuita";

const SITE_LINKS = [
  { label: "Reglas de derivación", href: ROUTES.reglas },
  { label: "Ejemplos de derivadas resueltas", href: ROUTES.ejemplos },
  { label: "Blog de cálculo diferencial", href: ROUTES.blog },
];

export const productRulePage: CalculatorPageConfig = {
  slug: "calculadora-regla-producto",
  path: ES_CALCULATOR_ROUTES.productRule,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora Regla del Producto con Pasos Online",
  intro: [
    "La regla del producto resuelve una situación cotidiana del cálculo: derivar dos funciones multiplicadas entre sí. Si h(x) = u(x)·v(x), no basta con derivar cada factor por separado; hay que sumar el producto de la derivada del primero por el segundo más el primero por la derivada del segundo. Esta calculadora regla del producto aplica esa fórmula de forma simbólica y muestra cada paso intermedio.",
    "Expresiones como x·sin(x), e^x·cos(x) o x²·ln(x) aparecen en prácticamente todo curso de cálculo diferencial. Antes de expandir algebraicamente, conviene reconocer la estructura de producto: dos factores claramente identificables, cada uno con su propia regla de derivación interna.",
    "Introduce tu función en notación estándar, pulsa calcular y compara el desglose automático con tu trabajo manual. La herramienta nombra explícitamente la regla del producto en la traza de la solución, lo que facilita detectar errores de signo o factores omitidos de la regla de la cadena.",
  ],
  meta: {
    title: "Calculadora Regla del Producto con Pasos | uv′ + u′v Online Gratis",
    description:
      "Calculadora regla del producto online gratis con pasos. Deriva x·sin(x), e^x·cos(x) y productos de funciones con explicación detallada para estudiantes de cálculo.",
    keywords:
      "calculadora regla del producto, regla del producto calculadora, derivar producto de funciones online, regla del producto paso a paso, uv más u prime v calculadora, cálculo diferencial regla producto",
  },
  defaultExamples: ["x*sin(x)", "e^x*cos(x)", "x^2*ln(x)", "(x+1)*(x-2)"],
  examples: [
    {
      title: "Polinomio por seno",
      problem: "Calcular d/dx [x·sin(x)]",
      steps: [
        "Identificamos u = x y v = sin(x); entonces u′ = 1 y v′ = cos(x).",
        "Regla del producto: u′v + uv′ = 1·sin(x) + x·cos(x).",
        "El resultado queda sin(x) + x·cos(x), sin factor común evidente.",
      ],
      result: "sin(x) + x·cos(x)",
    },
    {
      title: "Exponencial por coseno",
      problem: "Derivar f(x) = e^x·cos(x)",
      steps: [
        "u = e^x, v = cos(x); u′ = e^x, v′ = −sin(x).",
        "Aplicamos u′v + uv′: e^x·cos(x) − e^x·sin(x).",
        "Factorizamos e^x: e^x(cos(x) − sin(x)).",
      ],
      result: "e^x(cos(x) − sin(x))",
    },
    {
      title: "Dos factores lineales",
      problem: "Hallar la derivada de (x+1)(x−2)",
      steps: [
        "Podemos expandir a x² − x − 2, pero usemos la regla del producto.",
        "u = x+1, v = x−2; u′ = 1, v′ = 1.",
        "Suma: (x−2) + (x+1) = 2x − 1, coherente con la expansión.",
      ],
      result: "2x − 1",
    },
  ],
  faqs: [
    {
      q: "¿Cuál es la fórmula de la regla del producto?",
      a: "Si h(x) = u(x)·v(x), entonces h′(x) = u′(x)·v(x) + u(x)·v′(x). En notación de Leibniz: d/dx(uv) = (du/dx)·v + u·(dv/dx). Un mnemotécnico útil es «primera por derivada de la segunda más segunda por derivada de la primera».",
    },
    {
      q: "¿Cuándo debo usar la regla del producto en lugar de expandir?",
      a: "Cuando expandir sería engorroso o imposible de forma elegante: productos de trascendentes (e^x·sin(x)), polinomio por logaritmo (x·ln(x)) o factores compuestos. Si el producto tiene más de dos factores, aplica la regla de forma encadenada o agrupa pares.",
    },
    {
      q: "¿Se combina la regla del producto con la regla de la cadena?",
      a: "Sí, con frecuencia. Cada factor u o v puede ser una función compuesta; al calcular u′ o v′ debes aplicar la cadena dentro de ese factor. Por ejemplo, en x·sin(2x), la derivada de sin(2x) es 2cos(2x).",
    },
    {
      q: "¿Por qué no puedo derivar cada factor y multiplicar las derivadas?",
      a: "Porque (uv)′ no es u′v′. Un contraejemplo rápido: (x·x)′ = (x²)′ = 2x, pero x′·x′ = 1·1 = 1. La regla correcta suma dos términos, no multiplica derivadas.",
    },
    {
      q: "¿Cómo simplificar después de aplicar la regla del producto?",
      a: "Busca factores comunes, especialmente e^x o funciones trigonométricas repetidas en ambos sumandos. A veces identidades como sin²x + cos²x = 1 permiten compactar el resultado final.",
    },
    {
      q: "¿La calculadora funciona con más de dos factores?",
      a: "Sí, siempre que escribas el producto con el operador * entre factores. Para tres factores f·g·h, puedes derivar (fg) primero y luego multiplicar por h, o agrupar de otra forma equivalente.",
    },
    {
      q: "¿Qué error cometen más los estudiantes con la regla del producto?",
      a: "Olvidar uno de los dos sumandos, intercambiar el orden de derivación o confundirla con la regla del cociente. Etiqueta siempre u y v antes de derivar.",
    },
    {
      q: "¿Dónde practico más ejercicios de regla del producto?",
      a: "Consulta nuestra sección de reglas de derivación, los ejemplos resueltos del blog y la calculadora general de derivadas para contrastar resultados.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Herramienta general que aplica todas las reglas automáticamente.",
    },
    {
      label: "Calculadora regla del cociente",
      href: ES_CALCULATOR_ROUTES.quotientRule,
      description: "Para fracciones y funciones racionales u/v.",
    },
    {
      label: "Calculadora regla de la cadena",
      href: ES_CALCULATOR_ROUTES.chainRule,
      description: "Cuando los factores del producto son funciones compuestas.",
    },
    {
      label: "Calculadora segunda derivada",
      href: ES_CALCULATOR_ROUTES.secondDerivative,
      description: "La regla del producto suele repetirse al derivar dos veces.",
    },
  ],
  internalLinks: [
    { label: "Regla del producto en la guía de reglas", href: ROUTES.reglas },
    { label: "Errores comunes al derivar", href: "/blog/errores-comunes-al-derivar" },
    { label: "Product rule calculator (English)", href: EN_ROUTES.productRuleCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué es la regla del producto?",
      paragraphs: [
        "La regla del producto es el procedimiento que permite derivar la multiplicación de dos funciones diferenciables. Geometricamente, si dos cantidades cambian simultáneamente, la tasa de cambio del producto no es el producto de las tasas individuales, sino una combinación que contempla cómo cada factor influye en el otro.",
        "En cálculo de una variable, si f y g dependen de x, la derivada de f(x)·g(x) captura dos efectos: el cambio de f mientras g se mantiene fijo, más el cambio de g mientras f se mantiene fijo. Esa intuición «uno quieto, el otro se mueve» es la base del mnemotécnico clásico.",
        "La regla aparece en el temario estándar de Cálculo I inmediatamente después de las derivadas elementales y antes o junto a la regla del cociente y la regla de la cadena.",
      ],
    },
    {
      h2: "Fórmula y notación de la regla del producto",
      paragraphs: [
        "La forma más usada es (uv)′ = u′v + uv′. En notación de Leibniz se escribe d/dx(uv) = (du/dx)·v + u·(dv/dx). Si prefieres operadores, D(fg) = (Df)·g + f·(Dg). Todas expresan la misma idea.",
        "Para tres factores, (fgh)′ = f′gh + fg′h + fgh′. En la práctica, agrupa dos factores, deriva el grupo y aplica la regla de nuevo sobre el tercero. La calculadora maneja productos escritos con asterisco entre factores.",
        "Cuando un factor es una constante c, el producto c·f(x) se deriva como c·f′(x) sin necesidad de la regla completa, porque la derivada de la constante es cero.",
      ],
    },
    {
      h2: "Cuándo aplicar la regla del producto",
      paragraphs: [
        "Usa la regla del producto cuando la función esté escrita como multiplicación de dos piezas diferenciables y no convenga expandir. Los casos típicos son polinomio por trigonométrica, exponencial por trigonométrica, polinomio por logaritmo y binomios lineales que prefieres no expandir.",
        "Si la expresión es un cociente u/v, corresponde la regla del cociente, no la del producto. Si es una composición f(g(x)), aplica la cadena. Muchos ejercicios de examen mezclan reglas: producto en el nivel exterior y cadena dentro de cada factor.",
        "Antes de derivar, pregúntate: ¿puedo nombrar u y v sin ambigüedad? Si la respuesta es sí y el producto no es trivial (constante por función), la regla del producto es el camino.",
      ],
    },
    {
      h2: "Método paso a paso para derivar un producto",
      paragraphs: [
        "Paso 1: Identifica u(x) y v(x). Escríbelos en el margen; este paso evita la mayoría de errores. Paso 2: Calcula u′(x) y v′(x) por separado, aplicando cadena u otras reglas dentro de cada factor si hace falta.",
        "Paso 3: Sustituye en u′v + uv′. Paso 4: Simplifica: factoriza expresiones comunes, aplica identidades trigonométricas si procede y ordena términos. Paso 5: Verifica con esta calculadora o derivando un caso numérico simple.",
        "Ejemplo mental: para x²·e^x, u = x², v = e^x, u′ = 2x, v′ = e^x. Resultado: 2x·e^x + x²·e^x = e^x(2x + x²). El factor e^x salió en ambos sumandos.",
      ],
    },
    {
      h2: "Aplicaciones reales de la regla del producto",
      paragraphs: [
        "En economía, si R(x) = p(x)·q(x) representa ingresos como precio por cantidad vendida y ambas magnitudes dependen del tiempo o de una variable de control, la derivada del ingreso usa la regla del producto para separar el efecto del cambio de precio del efecto del cambio de cantidad.",
        "En física, la energía cinética K = ½mv² puede verse como producto de términos que dependen del tiempo en problemas de masa variable o movimiento relativo; al derivar respecto al tiempo aparecen sumandos análogos a u′v + uv′.",
        "En biología y farmacocinética, modelos de concentración a veces son productos de funciones exponenciales de decaimiento y de entrada; la tasa de cambio de la concentración requiere derivar esos productos correctamente.",
      ],
    },
    {
      h2: "Errores frecuentes al usar la regla del producto",
      paragraphs: [
        "El error más común es omitir uno de los dos sumandos, dejando solo u′v o solo uv′. Otro es confundir (uv)′ con u′v′, que da resultados absurdos en ejemplos tan simples como x·x.",
        "También se olvida la regla de la cadena dentro de u′ o v′. En e^(2x)·sin(x), la derivada de e^(2x) es 2e^(2x), no e^(2x). Sin ese factor 2, toda la respuesta falla.",
        "Por último, algunos estudiantes cambian el signo del segundo término por analogía incorrecta con la regla del cociente. Repite: producto suma, cociente resta en el numerador.",
      ],
    },
    {
      h2: "Relación con la regla del cociente y la regla de la cadena",
      paragraphs: [
        "La regla del cociente se puede deducir escribiendo u/v como u·v^(−1) y aplicando producto más cadena sobre v^(−1). Conocer ambas reglas refuerza la comprensión: no son fórmulas aisladas sino consecuencias del álgebra de derivadas.",
        "La regla de la cadena opera dentro de cada factor del producto. En cos(x²)·ln(x), al derivar el primer factor aparece −sin(x²)·2x y al derivar el segundo 1/x; luego se ensamblan en u′v + uv′.",
        "El orden de aplicación en problemas mixtos: identifica primero la estructura global (¿producto, cociente o composición?). Si es producto, etiqueta factores y deriva cada uno con las reglas que necesite.",
      ],
    },
    {
      h2: "Consejos para exámenes de cálculo diferencial",
      paragraphs: [
        "Memoriza la fórmula (uv)′ = u′v + uv′ y practica diez minutos diarios con productos de distinta dificultad: un polinomio por exponencial, una exponencial por trigonométrica, un logaritmo por polinomio.",
        "En el examen, si el resultado parece demasiado largo, busca factor común antes de entregar. Muchos profesores esperan forma factorizada, especialmente cuando e^x o ln(x) aparecen en ambos términos.",
        "Comprueba casos límite: si un factor es constante, tu respuesta debe reducirse a constante por derivada del otro factor. Si ambos factores son lineales (ax+b)(cx+d), expandir o usar producto debe dar el mismo binomio de grado uno.",
      ],
    },
    {
      h2: "Productos con funciones trigonométricas y exponenciales",
      paragraphs: [
        "El producto e^x·sin(x) modela oscilaciones con crecimiento exponencial; su derivada e^x·sin(x) + e^x·cos(x) = e^x(sin(x)+cos(x)) combina ambas familias. Este patrón se repite en ecuaciones diferenciales elementales.",
        "Para x·cos(x), el resultado sin(x) + x·(−sin(x)) = sin(x) − x·sin(x) puede reescribirse factorizando sin(x) si conviene. Con x·tan(x), recuerda que la derivada de tan(x) es sec²(x) o 1/cos²(x).",
        "Las identidades sin(2x) = 2sin(x)cos(x) permiten ver sin(x)cos(x) como producto y derivar con la regla del producto para obtener cos²(x) − sin²(x) = cos(2x), enlazando álgebra y trigonometría.",
      ],
    },
    {
      h2: "Segunda derivada y regla del producto repetida",
      paragraphs: [
        "Al derivar dos veces un producto, la regla del producto se aplica de nuevo sobre la primera derivada, que ya suele ser una suma de dos términos. En f(x) = x·e^x, f′(x) = e^x + x·e^x = e^x(1+x) y f″(x) requiere producto otra vez sobre e^x(1+x).",
        "Este doble uso es una trampa habitual en parcials: el alumno deriva bien la primera vez pero olvida la regla en la segunda. Practica al menos un ejemplo completo hasta f″(x) antes del examen.",
        "La calculadora de segunda derivada enlazada en esta página te permite verificar esos cálculos encadenados sin perder la traza de la regla aplicada en cada paso.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora regla del producto",
      paragraphs: [
        "Escribe el producto con * entre factores: x*sin(x), e^x*cos(x), etc. Usa paréntesis cuando un factor sea compuesto: (x+1)*ln(x^2+1). La variable por defecto es x; en opciones avanzadas puedes cambiarla.",
        "Tras calcular, lee la traza paso a paso y localiza dónde se nombra la regla del producto. Compara con tu etiquetado manual de u y v. Si difieren, revisa primero las derivadas internas de cada factor.",
        "Combina esta herramienta con la guía de reglas y los artículos del blog para estudiar de forma activa: intenta el ejercicio, luego verifica, luego repite sin mirar.",
      ],
    },
  ],
};

export const quotientRulePage: CalculatorPageConfig = {
  slug: "calculadora-regla-cociente",
  path: ES_CALCULATOR_ROUTES.quotientRule,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora Regla del Cociente con Pasos Online",
  intro: [
    "La regla del cociente permite derivar fracciones donde numerador y denominador dependen de la misma variable. Si h(x) = u(x)/v(x), la derivada no es u′/v′; la fórmula correcta combina las derivadas de ambas partes en un numerador nuevo y el cuadrado del denominador original.",
    "Funciones racionales, cocientes trigonométricos como sin(x)/x o expresiones del tipo ln(x)/x son ejemplos clásicos que aparecen en listas de ejercicios y en exámenes de optimización. Reconocer la estructura u/v antes de elegir la regla ahorra tiempo y evita aplicar por error la regla del producto.",
    "Esta calculadora regla del cociente aplica (u′v − uv′)/v² de forma simbólica, simplifica cuando es posible y documenta cada transformación algebraica para que puedas contrastar tu procedimiento manual con el resultado automático.",
  ],
  meta: {
    title: "Calculadora Regla del Cociente con Pasos | Derivar Fracciones Online",
    description:
      "Calculadora regla del cociente gratis con pasos. Deriva sin(x)/x, fracciones racionales y cocientes u/v con explicación paso a paso para estudiantes de cálculo.",
    keywords:
      "calculadora regla del cociente, regla del cociente calculadora, derivar fracciones online, regla del cociente paso a paso, derivada de u entre v, cómo derivar un cociente calculadora",
  },
  defaultExamples: ["sin(x)/x", "e^x/x", "(x^2+1)/(x-1)", "ln(x)/x"],
  examples: [
    {
      title: "Seno dividido entre x",
      problem: "Calcular d/dx [sin(x)/x]",
      steps: [
        "u = sin(x), v = x; u′ = cos(x), v′ = 1.",
        "Numerador de la regla: u′v − uv′ = cos(x)·x − sin(x)·1.",
        "Dividimos entre v² = x²: (x·cos(x) − sin(x)) / x².",
      ],
      result: "(x·cos(x) − sin(x)) / x²",
    },
    {
      title: "Exponencial sobre lineal",
      problem: "Derivar e^x / x",
      steps: [
        "u′v − uv′ = e^x·x − e^x·1 = e^x(x − 1).",
        "Denominador: v² = x².",
        "Resultado: e^x(x − 1) / x².",
      ],
      result: "e^x(x − 1) / x²",
    },
    {
      title: "Racional cuadrática sobre lineal",
      problem: "Hallar d/dx [(x²+1)/(x−1)]",
      steps: [
        "u′ = 2x, v′ = 1.",
        "Numerador: 2x(x−1) − (x²+1)·1 = 2x² − 2x − x² − 1 = x² − 2x − 1.",
        "Denominador: (x−1)².",
      ],
      result: "(x² − 2x − 1) / (x−1)²",
    },
  ],
  faqs: [
    {
      q: "¿Cuál es la fórmula de la regla del cociente?",
      a: "Para h(x) = u(x)/v(x), h′(x) = (u′(x)·v(x) − u(x)·v′(x)) / [v(x)]². El orden importa: derivada del numerador por el denominador menos numerador por derivada del denominador, todo sobre el denominador al cuadrado.",
    },
    {
      q: "¿Cómo se relaciona la regla del cociente con la del producto?",
      a: "Escribiendo u/v = u·v^(−1) y derivando con producto y cadena se obtiene exactamente la fórmula del cociente. Entender esa deducción ayuda a no confundir signos ni estructuras.",
    },
    {
      q: "¿Puedo derivar una fracción sin la regla del cociente?",
      a: "A veces, reescribiendo como u·v^(−1). Pero para fracciones racionales estándar la regla del cociente suele ser más directa. Evita dividir «derivada del numerador entre derivada del denominador»; eso es incorrecto.",
    },
    {
      q: "¿Qué pasa si el denominador es una constante?",
      a: "Si v(x) = c constante, h(x) = u(x)/c y h′(x) = u′(x)/c. No hace falta la regla completa: la constante sale del proceso de derivación como factor 1/c.",
    },
    {
      q: "¿Por qué el denominador va al cuadrado?",
      a: "Geométricamente y algebraicamente, derivar u/v equivale a derivar u multiplicado por v^(−1). La derivada de v^(−1) introduce −v′/v², y al combinar con u aparece v² en el denominador final.",
    },
    {
      q: "¿Cómo evitar errores de signo en el numerador?",
      a: "Recuerda que es menos, no más: u′v − uv′. Comprueba con 1/x: u = 1, v = x, u′ = 0, v′ = 1 → (0·x − 1·1)/x² = −1/x², que es correcto.",
    },
    {
      q: "¿La calculadora simplifica fracciones algebraicas?",
      a: "Sí, cuando el motor simbólico detecta factorizaciones o términos comunes. Aun así, conviene practicar la simplificación manual del numerador antes de dividir entre v².",
    },
    {
      q: "¿Dónde hay más ejemplos de derivar fracciones?",
      a: "Visita el artículo del blog sobre cómo derivar fracciones y la guía de reglas de derivación enlazada al final de esta página.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Todas las reglas de derivación en una sola herramienta.",
    },
    {
      label: "Calculadora regla del producto",
      href: ES_CALCULATOR_ROUTES.productRule,
      description: "Para multiplicaciones en lugar de cocientes.",
    },
    {
      label: "Calculadora regla de la cadena",
      href: ES_CALCULATOR_ROUTES.chainRule,
      description: "Cuando u o v son funciones compuestas.",
    },
    {
      label: "Calculadora puntos críticos",
      href: ES_CALCULATOR_ROUTES.criticalPoints,
      description: "Analizar máximos y mínimos de funciones racionales.",
    },
  ],
  internalLinks: [
    { label: "Cómo derivar fracciones (guía)", href: "/blog/como-derivar-fracciones" },
    { label: "Regla del cociente en reglas de derivación", href: ROUTES.reglas },
    { label: "Quotient rule calculator (English)", href: EN_ROUTES.quotientRuleCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué es la regla del cociente?",
      paragraphs: [
        "La regla del cociente es la técnica para derivar el cociente de dos funciones diferenciables. Responde a la pregunta: si la razón u(x)/v(x) cambia cuando x cambia, ¿cómo se expresa esa tasa de cambio en términos de u, v y sus derivadas?",
        "A diferencia de la suma o la resta, el cociente no se deriva «término a término». El denominador influye en el numerador de la derivada y genera el término cuadrático v² en el resultado final.",
        "Es una herramienta indispensable para funciones racionales, cocientes trigonométricos y modelos donde una magnitud se normaliza dividiendo por otra que también evoluciona con x.",
      ],
    },
    {
      h2: "Fórmula de la regla del cociente",
      paragraphs: [
        "La forma estándar es h′ = (u′v − uv′) / v². En Leibniz, si y = u/v, entonces dy/dx = (v·du/dx − u·dv/dx) / v². El signo menos del numerador es la marca distintiva frente a la regla del producto.",
        "Una deducción útil: u/v = u·v^(−1). Derivando el producto, (u)′·v^(−1) + u·(v^(−1))′ = u′/v + u·(−v′/v²) = (u′v − uv′)/v². Ver esa cadena una vez fija la fórmula en la memoria de forma lógica.",
        "Para cocientes de más de dos «capas», descompón primero. Por ejemplo, (sin(x)/x)² es un cociente cuya derivada puede abordarse con cadena sobre el cuadrado o reescritura previa.",
      ],
    },
    {
      h2: "Cuándo usar la regla del cociente",
      paragraphs: [
        "Aplica la regla del cociente cuando la función esté escrita claramente como fracción u/v con ambas partes dependiendo de x. Ejemplos: (x²+1)/(x−1), tan(x) escrito como sin(x)/cos(x), ln(x)/x.",
        "No la uses si puedes reescribir de forma más simple: x³/x = x² se deriva con la regla de la potencia. Tampoco confundas con la regla del producto cuando veas multiplicación disfrazada.",
        "En funciones definidas por partes o con denominador que se anula en algún punto, la fórmula da la derivada en los puntos donde v(x) ≠ 0 y la función es diferenciable.",
      ],
    },
    {
      h2: "Procedimiento paso a paso",
      paragraphs: [
        "Paso 1: Identifica u(x) (numerador) y v(x) (denominador). Paso 2: Calcula u′(x) y v′(x), usando cadena u otras reglas según corresponda en cada parte.",
        "Paso 3: Forma el numerador u′v − uv′ y simplifica si es posible antes de dividir. Paso 4: Divide entre v². Paso 5: Verifica con un caso conocido, como la derivada de 1/x.",
        "En (x²+3x)/(x−2), u′ = 2x+3, v′ = 1. El numerador es (2x+3)(x−2) − (x²+3x)·1. Expandir con cuidado evita errores aritméticos antes de colocar (x−2)² abajo.",
      ],
    },
    {
      h2: "Aplicaciones en contextos reales",
      paragraphs: [
        "En tasas y rendimientos, si R(t) = P(t)/Q(t) representa una razón de dos procesos temporales, la velocidad de cambio de R usa la regla del cociente. Economistas y analistas de datos encuentran esta estructura al estudiar ratios que evolucionan.",
        "En física, cocientes como velocidad media instantánea derivada de posición/tiempo en modelos no triviales, o leyes de Beer-Lambert con atenuación escrita como cociente de intensidades, generan derivadas de tipo u/v.",
        "En probabilidad, cocientes de funciones de densidad o de funciones generadoras aparecen en transformaciones; dominar la regla del cociente facilita seguir esas manipulaciones sin perderse en el álgebra.",
      ],
    },
    {
      h2: "Errores comunes al derivar cocientes",
      paragraphs: [
        "Confundir u′v + uv′ (producto) con u′v − uv′ (cociente) es el fallo más frecuente. Un truco: la derivada de 1/x es −1/x²; si tu fórmula da +1/x², intercambiaste el signo.",
        "Olvidar elevar v al cuadrado en el denominador — usar solo v en lugar de v² — produce respuestas con unidades incorrectas de «orden de magnitud» en la variable.",
        "Derivar el numerador y el denominador por separado y dividir, como (u′)/(v′), es matemáticamente falso salvo casos accidentales. Nunca uses esa atajo.",
      ],
    },
    {
      h2: "Conexión con otras reglas de derivación",
      paragraphs: [
        "La regla del cociente se combina con la cadena cuando u o v son compuestas. En sin(x²)/x³, derivar el numerador requiere cadena y el denominador potencia.",
        "La regla del producto aparece en la deducción formal del cociente. Dominar ambas y saber cuándo usar cada una es señal de madurez en cálculo diferencial.",
        "Para funciones implícitas definidas como F(x,y) = 0, a veces dy/dx es un cociente de derivadas parciales (−F_x/F_y); ese resultado enlaza cociente, implícitas y varias variables.",
      ],
    },
    {
      h2: "Consejos para exámenes y parciales",
      paragraphs: [
        "Antes del examen, resuelve sin mirar: sin(x)/x, e^x/x, (x+1)/(x−1) y ln(x)/x. Son plantillas que cubren trigonométrica, exponencial, racional y logarítmica en el numerador.",
        "Simplifica el numerador algebraicamente antes de escribir la fracción final; muchos puntos se pierden por errores de expansión, no por desconocer la fórmula.",
        "Si el enunciado pide evaluar la derivada en un punto, sustituye solo después de tener la expresión simplificada de h′(x). Sustituir demasiado pronto multiplica la aritmética.",
      ],
    },
    {
      h2: "Funciones racionales y simplificación previa",
      paragraphs: [
        "Antes de derivar, comprueba si el cociente se simplifica algebraicamente. (x²−1)/(x−1) = x+1 para x ≠ 1; derivar x+1 es trivial frente a aplicar cociente sobre la forma original.",
        "Cuando no hay simplificación evidente, la regla del cociente es obligada. En funciones racionales propias o impropias de exámenes, el resultado suele ser otra fracción racional.",
        "La descomposición en fracciones parciales pertenece a integración, no a derivación; no la confundas con el procedimiento de derivar un cociente.",
      ],
    },
    {
      h2: "Cocientes trigonométricos y la tangente",
      paragraphs: [
        "tan(x) = sin(x)/cos(x) es el ejemplo canónico. Aplicando la regla del cociente se obtiene (cos(x)·cos(x) − sin(x)·(−sin(x)))/cos²(x) = (cos²x + sin²x)/cos²x = 1/cos²x = sec²(x), coincidiendo con la derivada memorizada de tan(x).",
        "cot(x), sec(x) y csc(x) pueden derivarse como cocientes o con fórmulas directas; verificar con la regla del cociente refuerza las identidades.",
        "En oscilaciones amortiguadas, cocientes de exponenciales y trigonométricas modelan envolventes; la derivada describe cómo cambia la amplitud efectiva en el tiempo.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora regla del cociente",
      paragraphs: [
        "Escribe el cociente como fracción o con división explícita: sin(x)/x, (x^2+1)/(x-1). Usa paréntesis en numerador y denominador cuando sean compuestos.",
        "Revisa la traza: debe aparecer el numerador u′v − uv′ y el denominador v². Compara cada derivada parcial u′ y v′ con tu trabajo.",
        "Enlaza con la calculadora de puntos críticos cuando trabajes optimización sobre funciones racionales: primero deriva, luego busca ceros del numerador de f′.",
      ],
    },
  ],
};

export const secondDerivativePage: CalculatorPageConfig = {
  slug: "calculadora-segunda-derivada",
  path: ES_CALCULATOR_ROUTES.secondDerivative,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora de Segunda Derivada con Pasos Online",
  intro: [
    "La segunda derivada f″(x) mide cómo cambia la pendiente de una función: si la curva se curva hacia arriba (cóncava hacia arriba) o hacia abajo, y si un punto crítico corresponde a un máximo o un mínimo local. Es el siguiente paso natural después de calcular f′(x).",
    "En física, si s(t) es la posición, la segunda derivada respecto al tiempo es la aceleración. En economía y optimización, f″ ayuda a clasificar extremos mediante el criterio de la segunda derivada. Esta calculadora de segunda derivada deriva dos veces y muestra cada etapa del proceso.",
    "Introduce tu función, obtén primero f′(x) en la traza y continúa hasta f″(x). Usa el resultado para estudiar concavidad, posibles puntos de inflexión y para verificar ejercicios de análisis de gráficas antes del examen.",
  ],
  meta: {
    title: "Calculadora Segunda Derivada con Pasos | Concavidad y f″(x) Online",
    description:
      "Calculadora de segunda derivada gratis con pasos. Calcula f″(x), analiza concavidad e inflexión y comprueba ejercicios de cálculo diferencial online.",
    keywords:
      "calculadora segunda derivada, segunda derivada calculadora, f doble prima online, concavidad calculadora, criterio segunda derivada calculadora, derivar dos veces paso a paso",
  },
  defaultExamples: ["x^4 - 3*x^2", "sin(x)", "x*exp(x)", "ln(x)"],
  examples: [
    {
      title: "Polinomio y concavidad",
      problem: "Hallar f″(x) si f(x) = x⁴ − 3x²",
      steps: [
        "Primera derivada: f′(x) = 4x³ − 6x.",
        "Segunda derivada: f″(x) = 12x² − 6.",
        "f″(x) = 0 en x = ±√(1/2); posibles cambios de concavidad.",
      ],
      result: "12x² − 6",
    },
    {
      title: "Seno y ciclo de derivadas",
      problem: "Calcular la segunda derivada de sin(x)",
      steps: [
        "f′(x) = cos(x).",
        "f″(x) = −sin(x).",
        "El patrón de sin(x) se repite cada cuatro derivaciones.",
      ],
      result: "−sin(x)",
    },
    {
      title: "Producto que exige regla del producto dos veces",
      problem: "Encontrar f″(x) para f(x) = x·e^x",
      steps: [
        "f′(x) = e^x + x·e^x = e^x(1+x) con regla del producto.",
        "f″(x): derivamos e^x(1+x) otra vez con producto.",
        "Resultado: e^x(2+x).",
      ],
      result: "e^x(2+x)",
    },
  ],
  faqs: [
    {
      q: "¿Qué información da la segunda derivada sobre la gráfica?",
      a: "Si f″(x) > 0 en un intervalo, la gráfica es cóncava hacia arriba (como una copa). Si f″(x) < 0, es cóncava hacia abajo. Los ceros de f″ son candidatos a puntos de inflexión.",
    },
    {
      q: "¿Cómo calculo la segunda derivada con esta herramienta?",
      a: "Introduce f(x) y revisa la traza hasta obtener f′(x). Deriva de nuevo el resultado —o repite el cálculo sobre la expresión simplificada— para llegar a f″(x). La herramienta documenta cada regla aplicada.",
    },
    {
      q: "¿Qué es el criterio de la segunda derivada?",
      a: "Si f′(c) = 0 y f″(c) > 0, suele haber un mínimo local en c. Si f″(c) < 0, suele haber un máximo local. Si f″(c) = 0, el criterio es inconcluso: hay que usar otras pruebas.",
    },
    {
      q: "¿La segunda derivada es lo mismo que la aceleración?",
      a: "En cinemática, si s(t) es la posición en función del tiempo, s″(t) es la aceleración. El concepto matemático es el mismo: tasa de cambio de la tasa de cambio.",
    },
    {
      q: "¿Cuándo aparece la regla del producto al derivar dos veces?",
      a: "Cuando f′(x) sigue siendo un producto o cociente no trivial —por ejemplo x·e^x o sin(x)/x— la segunda derivada vuelve a requerir reglas compuestas. Es una trampa habitual en exámenes.",
    },
    {
      q: "¿Qué es un punto de inflexión?",
      a: "Es un punto donde la concavidad cambia y, bajo condiciones de regularidad, f″ se anula. No todo cero de f″ garantiza inflexión; hay que confirmar el cambio de signo de f″.",
    },
    {
      q: "¿Puedo calcular derivadas de orden superior aquí?",
      a: "Sí, derivando repetidamente. Para un enfoque dedicado a tercera y cuarta derivada, visita la calculadora de derivadas de orden superior enlazada en esta página.",
    },
    {
      q: "¿Cómo estudio concavidad para el examen?",
      a: "Hallar f″(x), buscar intervalos donde es positiva o negativa y marcar candidatos a inflexión donde f″(x) = 0. Combina con un esbozo de f′ para ver crecimiento y decrecimiento.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Primera derivada con todos los pasos detallados.",
    },
    {
      label: "Calculadora derivadas orden superior",
      href: ES_CALCULATOR_ROUTES.higherOrderDerivative,
      description: "Tercera, cuarta y siguientes derivadas.",
    },
    {
      label: "Calculadora puntos críticos",
      href: ES_CALCULATOR_ROUTES.criticalPoints,
      description: "Máximos, mínimos y criterio de la segunda derivada.",
    },
    {
      label: "Calculadora regla del producto",
      href: ES_CALCULATOR_ROUTES.productRule,
      description: "Necesaria cuando f″ exige derivar un producto otra vez.",
    },
  ],
  internalLinks: [
    { label: "Derivadas de orden superior", href: ES_CALCULATOR_ROUTES.higherOrderDerivative },
    { label: "Puntos críticos y optimización", href: ES_CALCULATOR_ROUTES.criticalPoints },
    { label: "Second derivative calculator (English)", href: EN_ROUTES.secondDerivativeCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué es la segunda derivada?",
      paragraphs: [
        "La segunda derivada f″(x) es la derivada de la primera derivada f′(x). Si f′ describe la pendiente instantánea de la curva, f″ describe cómo esa pendiente cambia al desplazarte a lo largo del eje x.",
        "Intuitivamente, f″ grande y positiva indica que la pendiente crece rápidamente: la curva se «cierra» hacia arriba. f″ negativa indica que la pendiente disminuye: la curva se curva hacia abajo.",
        "Formalmente, f″ existe en puntos donde f′ es derivable. En esquinas de |x| o puntos cúspide, puede fallar la existencia de la segunda derivada aunque exista f′.",
      ],
    },
    {
      h2: "Notación de la segunda derivada",
      paragraphs: [
        "Se escribe f″(x), d²f/dx² o d²y/dx² en notación de Leibniz. En física, derivadas respecto al tiempo a veces usan puntos: ẍ para la segunda derivada de x(t).",
        "La segunda derivada parcial ∂²f/∂x² es distinta: pertenece al cálculo multivariable. En esta página trabajamos funciones de una variable.",
        "Para orden n general se usa f⁽ⁿ⁾(x). La segunda es el caso n = 2, puente hacia derivadas de orden superior.",
      ],
    },
    {
      h2: "Concavidad y puntos de inflexión",
      paragraphs: [
        "Cóncava hacia arriba en un intervalo I significa f″(x) > 0 para todo x en I: la gráfica «abre» hacia arriba como un cuenco. Cóncava hacia abajo significa f″(x) < 0: la gráfica «abre» hacia abajo.",
        "Un punto de inflexión es donde cambia la concavidad. A menudo f″(c) = 0 en ese punto, pero la condición clave es el cambio de signo de f″ al cruzar c.",
        "Ejemplo: f(x) = x³ tiene f″(x) = 6x, que se anula en x = 0 y cambia de signo; (0,0) es punto de inflexión aunque f′(0) = 0 también.",
      ],
    },
    {
      h2: "Criterio de la segunda derivada para extremos",
      paragraphs: [
        "Si c es crítico (f′(c) = 0) y f″(c) > 0, f tiene un mínimo local en c bajo condiciones estándar de diferenciabilidad. Si f″(c) < 0, hay un máximo local.",
        "Si f″(c) = 0, el criterio no decide: f(x) = x⁴ en c = 0 tiene f″(0) = 0 pero mínimo claro. Usa tabla de signos de f′ o comparación de valores.",
        "En problemas de optimización aplicada, el criterio de la segunda derivada cierra el análisis tras hallar el único candidato interior del dominio.",
      ],
    },
    {
      h2: "Método paso a paso para calcular f″(x)",
      paragraphs: [
        "Paso 1: Calcula f′(x) con las reglas necesarias (potencia, producto, cociente, cadena). Paso 2: Simplifica f′(x) cuando sea posible para facilitar la segunda pasada.",
        "Paso 3: Deriva f′(x) término a término. Paso 4: Identifica f″(x) y simplifica. Paso 5: Resuelve f″(x) = 0 para candidatos a inflexión y analiza signos.",
        "En f(x) = x·ln(x), f′(x) = ln(x) + 1; f″(x) = 1/x para x > 0. La segunda pasada fue sencilla porque f′ ya estaba compacta.",
      ],
    },
    {
      h2: "Aplicaciones en física y economía",
      paragraphs: [
        "En movimiento rectilíneo, posición → velocidad (primera derivada) → aceleración (segunda). Una aceleración negativa indica que la velocidad disminuye aunque el objeto siga avanzando momentáneamente.",
        "En curvas de coste C(x), C″(x) informa sobre rendimientos: si es positiva, el coste marginal crece al aumentar producción; si es negativa, hay economías de escala locales.",
        "En elasticidad y curvatura de funciones de utilidad, la segunda derivada captura aversión al riesgo y convexidad de preferencias en modelos microeconómicos simplificados.",
      ],
    },
    {
      h2: "Errores comunes con la segunda derivada",
      paragraphs: [
        "Derivar solo una vez y confundir f′ con f″. Siempre etiqueta claramente cada orden antes de continuar.",
        "Olvidar reglas compuestas en la segunda pasada: f′ de x·e^x es e^x(1+x), y f″ requiere producto otra vez.",
        "Concluir inflexión solo porque f″(c) = 0 sin verificar cambio de signo. f(x) = x⁴ tiene f″(0) = 0 pero no cambia concavidad en 0 de forma típica de inflexión — en x⁴ la concavidad es positiva a ambos lados.",
      ],
    },
    {
      h2: "Relación con otras herramientas de análisis",
      paragraphs: [
        "El análisis completo de gráficas combina f, f′ y f″: f′ para intervalos de crecimiento, f″ para concavidad. La calculadora de puntos críticos complementa este estudio localizando candidatos a extremos.",
        "La recta tangente usa f′ en un punto; la curvatura en ese punto está ligada a f″. Así, tangente y segunda derivada describen la misma curva en escalas distintas.",
        "Las derivadas de orden superior (tercera, cuarta) extienden la idea; la segunda es la más usada en Cálculo I por su vínculo directo con concavidad y el test del máximo/mínimo.",
      ],
    },
    {
      h2: "Consejos para exámenes de análisis de funciones",
      paragraphs: [
        "Memoriza patrones: (x^n)″ = n(n−1)x^(n−2), (sin x)″ = −sin x, (e^x)″ = e^x. Ahorran tiempo en polinomios y trascendentes.",
        "En problemas de optimización, después de hallar x* con f′(x*) = 0, calcula f″(x*) y justifica mínimo o máximo en una frase.",
        "Dibuja un esquema de signos de f′ y f″ en la misma recta numérica; la visualización reduce errores al redactar la conclusión.",
      ],
    },
    {
      h2: "Ejemplos de concavidad en funciones clásicas",
      paragraphs: [
        "f(x) = x² tiene f″(x) = 2 > 0 en todo ℝ: parábola cóncava hacia arriba. f(x) = −x² es cóncava hacia abajo.",
        "f(x) = ln(x) en x > 0 tiene f″(x) = −1/x² < 0: el logaritmo es siempre cóncavo hacia abajo en su dominio.",
        "f(x) = sin(x) alterna: f″(x) = −sin(x), lo que explica los cambios periódicos de concavidad en la onda sinusoidal.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora de segunda derivada",
      paragraphs: [
        "Introduce f(x) en notación estándar. Sigue la traza hasta f′(x) y continúa derivando para obtener f″(x). Si el resultado intermedio es largo, cópialo y vuelve a derivar en una segunda pasada.",
        "Usa los ejemplos predeterminados (x⁴ − 3x², sin(x), x·e^x) para comparar con tus apuntes. Contrasta especialmente el caso x·e^x donde la regla del producto aparece dos veces.",
        "Combina con la calculadora de puntos críticos para cerrar problemas de optimización: primero f′ = 0, luego f″ en el candidato.",
      ],
    },
  ],
};

export const higherOrderDerivativePage: CalculatorPageConfig = {
  slug: "calculadora-derivadas-orden-superior",
  path: ES_CALCULATOR_ROUTES.higherOrderDerivative,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora de Derivadas de Orden Superior con Pasos",
  intro: [
    "Las derivadas de orden superior son las que se obtienen al derivar repetidamente: la tercera derivada f‴(x) describe cómo cambia la concavidad; la cuarta y siguientes aparecen en series de Taylor, ecuaciones diferenciales y análisis de movimiento (jerk, snap).",
    "Cada orden aplica las mismas reglas —potencia, producto, cociente, cadena— sobre el resultado del orden anterior. La complejidad crece, pero los patrones en polinomios, senos, cosenos y exponenciales son predecibles y merecen estudio sistemático.",
    "Esta calculadora de derivadas de orden superior te ayuda a calcular f⁽ⁿ⁾(x) con trazas simbólicas claras. Deriva en secuencia, compara con tu trabajo manual y detecta en qué paso se introdujo un error algebraico.",
  ],
  meta: {
    title: "Calculadora Derivadas Orden Superior | Tercera y Cuarta Derivada Online",
    description:
      "Calculadora de derivadas de orden superior gratis con pasos. Calcula tercera, cuarta y siguientes derivadas con trabajo simbólico detallado para cálculo y ingeniería.",
    keywords:
      "calculadora derivadas orden superior, tercera derivada calculadora, cuarta derivada online, derivadas sucesivas paso a paso, f triple prima calculadora, derivadas de orden n",
  },
  defaultExamples: ["x^5", "sin(x)", "e^x", "x*exp(x)"],
  examples: [
    {
      title: "Polinomio: las derivadas se van reduciendo",
      problem: "Primeras cuatro derivadas de f(x) = x⁵",
      steps: [
        "f′(x) = 5x⁴, f″(x) = 20x³, f‴(x) = 60x².",
        "Cuarta derivada: f⁽⁴⁾(x) = 120x.",
        "La quinta es 120; la sexta es 0.",
      ],
      result: "f⁽⁴⁾(x) = 120x",
    },
    {
      title: "Seno: ciclo de periodo cuatro",
      problem: "Listar f″ y f‴ para f(x) = sin(x)",
      steps: [
        "f′ = cos x, f″ = −sin x, f‴ = −cos x.",
        "f⁽⁴⁾ = sin x, volviendo al punto de partida.",
        "El patrón se repite indefinidamente.",
      ],
      result: "f‴(x) = −cos(x)",
    },
    {
      title: "Exponencial invariante",
      problem: "Derivada de orden n de e^x",
      steps: [
        "f′(x) = e^x, f″(x) = e^x, f‴(x) = e^x.",
        "Toda derivada de e^x es e^x.",
        "Propiedad clave en ecuaciones diferenciales lineales.",
      ],
      result: "f⁽ⁿ⁾(x) = e^x para todo n ≥ 1",
    },
  ],
  faqs: [
    {
      q: "¿Qué es una derivada de orden superior?",
      a: "Es la derivada de una derivada. El orden 2 es la segunda derivada (concavidad); el orden 3 puede describir jerk en cinemática; órdenes mayores aparecen en aproximaciones polinómicas locales.",
    },
    {
      q: "¿Cómo calculo la tercera derivada con esta herramienta?",
      a: "Deriva tres veces en secuencia. Cada salida puede usarse como entrada de la siguiente pasada. La traza indica qué regla se aplicó en cada orden.",
    },
    {
      q: "¿En qué se diferencia de la calculadora de segunda derivada?",
      a: "La página de segunda derivada enfatiza concavidad y criterio de extremos. Esta página cubre tercera, cuarta y órdenes generales con patrones y aplicaciones ampliadas.",
    },
    {
      q: "¿Toda función tiene derivadas de todos los órdenes?",
      a: "No siempre. Funciones con discontinuidades o esquinas pueden ser derivables pocas veces. Las funciones analíticas en un intervalo sí admiten derivadas de todo orden en ese intervalo.",
    },
    {
      q: "¿Por qué el seno y el coseno ciclan cada cuatro derivaciones?",
      a: "Cada derivada rota entre sin, cos, −sin y −cos. Es una herramienta de verificación rápida: si obtienes sin(x) en la cuarta derivada de sin(x), el cálculo es coherente.",
    },
    {
      q: "¿Qué es el jerk en física?",
      a: "Es la tercera derivada de la posición respecto al tiempo: tasa de cambio de la aceleración. En diseño de vehículos y robótica, limitar el jerk mejora el confort.",
    },
    {
      q: "¿Cómo se relacionan con la serie de Taylor?",
      a: "El polinomio de Taylor de grado n usa derivadas hasta orden n en un punto a. Los coeficientes dependen de f⁽ᵏ⁾(a)/k!. Calcular órdenes superiores es el primer paso para construir la serie.",
    },
    {
      q: "¿Qué estrategia de estudio recomiendan?",
      a: "Practica un polinomio de grado 5, sin(x), e^x y x·e^x hasta la cuarta derivada sin mirar. Luego verifica aquí y anota el patrón de cada familia.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora segunda derivada",
      href: ES_CALCULATOR_ROUTES.secondDerivative,
      description: "Concavidad y criterio del máximo/mínimo.",
    },
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Primera derivada con pasos completos.",
    },
    {
      label: "Calculadora regla del producto",
      href: ES_CALCULATOR_ROUTES.productRule,
      description: "Esencial al derivar x·e^x varias veces.",
    },
    {
      label: "Calculadora derivadas parciales",
      href: ES_CALCULATOR_ROUTES.partialDerivatives,
      description: "Derivadas mixtas en varias variables.",
    },
  ],
  internalLinks: [
    { label: "Calculadora segunda derivada", href: ES_CALCULATOR_ROUTES.secondDerivative },
    { label: "Series y aproximaciones en el blog", href: ROUTES.blog },
    { label: "Higher order derivative calculator (English)", href: EN_ROUTES.higherOrderDerivativeCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué son las derivadas de orden superior?",
      paragraphs: [
        "Una derivada de orden k es el resultado de derivar k veces en sucesión, siempre que exista en cada paso intermedio. La primera derivada mide pendiente; la segunda, cambio de pendiente; la tercera, cambio de ese cambio, y así sucesivamente.",
        "La notación f⁽ᵏ⁾(x) generaliza f′, f″ y f‴. En Leibniz, dᵏf/dxᵏ. En problemas de tiempo, puntos sobre variables indican órdenes respecto a t.",
        "No todas las funciones «suaves» en sentido coloquial admiten órdenes arbitrariamente altos en todo el dominio; los polinomios son el caso didáctico donde el orden máximo es finito.",
      ],
    },
    {
      h2: "Notación y convenciones",
      paragraphs: [
        "Primera: f′ o df/dx. Segunda: f″ o d²f/dx². Tercera: f‴ o d³f/dx³. A partir del cuarto, f⁽⁴⁾, f⁽⁵⁾, etc. Evita mezclar notaciones en un mismo examen sin aclarar.",
        "En español académico se dice «derivada tercera» o «derivada de tercer orden». Jerk, snap y crack son nombres físicos para tercera, cuarta y quinta derivada temporal de la posición.",
        "Las derivadas parciales de orden superior usan subíndices o ∂ᵏf/∂xᵏ; no confundir con el caso unidimensional de esta calculadora.",
      ],
    },
    {
      h2: "Patrones en funciones elementales",
      paragraphs: [
        "Polinomio de grado n: la (n+1)-ésima derivada es 0. Ejemplo: x⁵ → quinta derivada 120, sexta 0. Es una comprobación rápida de coherencia.",
        "e^x: toda derivada es e^x. e^(kx): cada orden introduce factor k acumulado: f⁽ⁿ⁾(x) = k^n e^(kx).",
        "sin(x) y cos(x): ciclo de longitud 4. sin → cos → −sin → −cos → sin. Memorizar el ciclo evita recomputar desde cero.",
      ],
    },
    {
      h2: "Método paso a paso para órdenes altos",
      paragraphs: [
        "Paso 1: Calcula f′ y simplifica. Paso 2: Repite sobre f′ para f″. Paso 3: Continúa hasta el orden pedido, simplificando entre pasos para no arrastrar expresiones innecesariamente largas.",
        "En x·e^x, los órdenes superiores siguen patrones con e^x(…): conviene factorizar e^x tras cada derivación para ver la estructura del polinomio entre paréntesis.",
        "Si el enunciado pide f⁽ⁿ⁾(x) en forma general, busca el patrón tras calcular los primeros órdenes y conjetura con inducción si el curso lo permite.",
      ],
    },
    {
      h2: "Aplicaciones en física e ingeniería",
      paragraphs: [
        "Posición → velocidad → aceleración → jerk → snap. En control de movimiento, perfiles con jerk acotado reducen vibraciones y desgaste mecánico.",
        "En ecuaciones diferenciales, y″ + y = 0 tiene soluciones sinusoidales cuyos órdenes superiores ciclan; reconocer el patrón acorta la resolución.",
        "En aproximación numérica, errores de truncamiento en fórmulas de diferencias finitas dependen de derivadas de orden superior del integrando o de la solución exacta.",
      ],
    },
    {
      h2: "Series de Taylor y polinomios locales",
      paragraphs: [
        "f(x) ≈ f(a) + f′(a)(x−a) + f″(a)(x−a)²/2! + f‴(a)(x−a)³/3! + … Los coeficientes requieren derivadas sucesivas en a.",
        "Cuanto más derivables sea f en a y mayor sea el orden del polinomio, mejor la aproximación cerca de a. Las derivadas de orden superior controlan el error de resto.",
        "Ejemplo conceptual: para e^x en a = 0, todas las derivadas valen 1 en 0, lo que explica los coeficientes 1/k! en la serie exponencial.",
      ],
    },
    {
      h2: "Errores frecuentes al derivar varias veces",
      paragraphs: [
        "Perder simplificación intermedia: arrastrar sumas sin factorizar complica la siguiente derivada y aumenta errores de signo.",
        "Romper el ciclo trigonométrico: un signo mal en f‴ de sin(x) se propaga a todos los órdenes siguientes.",
        "Olvidar la regla del producto en x·e^x, x·sin(x) u otros productos no triviales a partir del segundo o tercer orden.",
      ],
    },
    {
      h2: "Conexión con la segunda derivada y el análisis de curvas",
      paragraphs: [
        "La segunda derivada es el caso k = 2, el más usado en Cálculo I. Órdenes mayores refinan la forma local de la curva pero rara vez se grafican.",
        "En puntos de inflexión de orden superior (donde f″ se anula sin cambio de concavidad estándar), f‴ o f⁽⁴⁾ pueden aportar información; es material de cursos avanzados.",
        "La calculadora de segunda derivada enlazada cubre el test de concavidad; esta página extiende la técnica computacional a más pasos.",
      ],
    },
    {
      h2: "Consejos para exámenes y competiciones",
      paragraphs: [
        "Antes del parcial, tabula sin, cos, e^x y x^n hasta orden 5. Tener la tabla mental ahorra cinco minutos por problema largo.",
        "Si el resultado crece en grado o en factorial, revisa si estás derivando un polinomio: el grado debe bajar hasta llegar a cero.",
        "En problemas «encadenados», el profesor a veces pide solo f‴(1) numérico: calcula simbólicamente, simplifica y sustituye al final.",
      ],
    },
    {
      h2: "Funciones que no son suaves de todos los órdenes",
      paragraphs: [
        "|x| es continua y tiene derivada lateral en 0, pero la derivada no es diferenciable en 0: la segunda derivada falla en el origen.",
        "Funciones definidas a trozos con «empalmes» suaves solo hasta cierto orden ilustran que «derivable n veces» es una hipótesis explícita en teoremas.",
        "En aplicaciones, los modelos físicos suelen asumir suavidad suficiente; el matemático verifica hasta qué orden tiene sentido el modelo.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora de orden superior",
      paragraphs: [
        "Introduce f(x) y revisa la traza orden por orden. Para x⁵ y sin(x), confirma los patrones conocidos antes de intentar expresiones más difíciles como x·e^x.",
        "Copia cada resultado simplificado antes de la siguiente derivación si trabajas en papel en paralelo. La coherencia entre pasos es la mejor prueba de corrección.",
        "Enlaza con derivadas parciales si tu curso avanza hacia ∂²f/∂x∂y; el espíritu es el mismo pero con variables múltiples.",
      ],
    },
  ],
};

export const tangentLinePage: CalculatorPageConfig = {
  slug: "calculadora-recta-tangente",
  path: ES_CALCULATOR_ROUTES.tangentLine,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora de Recta Tangente con Pasos Online",
  intro: [
    "La recta tangente a la gráfica de y = f(x) en un punto x = a toca la curva en (a, f(a)) y comparte con ella la pendiente instantánea f′(a). Es la aproximación lineal local de la función y el puente entre derivada y geometría analítica.",
    "Hallar la ecuación tangente es un ejercicio recurrente: primero calculas f′(x), evalúas en a, luego usas la forma punto-pendiente y = f(a) + f′(a)(x − a). Esta calculadora de recta tangente obtiene f′(x) con pasos simbólicos para que completes la ecuación con confianza.",
    "Desde parábolas x² hasta sin(x) o ln(x), la pendiente tangente cambia en cada punto. Practica reconocer cuándo f′(a) no existe —tangente vertical— y cuándo la curva admite también recta normal perpendicular.",
  ],
  meta: {
    title: "Calculadora Recta Tangente con Pasos | Pendiente f′(a) Online",
    description:
      "Calculadora de recta tangente online gratis. Obtén f′(a), aprende la forma punto-pendiente y resuelve ecuaciones de tangentes con pasos para cálculo diferencial.",
    keywords:
      "calculadora recta tangente, ecuación recta tangente calculadora, pendiente tangente online, derivada en un punto calculadora, recta tangente paso a paso, f prima en un punto",
  },
  defaultExamples: ["x^2", "sin(x)", "ln(x)", "x^3 - 3*x"],
  examples: [
    {
      title: "Parábola en x = 2",
      problem: "Recta tangente a f(x) = x² en x = 2",
      steps: [
        "f′(x) = 2x, pendiente m = f′(2) = 4.",
        "Punto de tangencia: (2, f(2)) = (2, 4).",
        "Forma punto-pendiente: y − 4 = 4(x − 2) → y = 4x − 4.",
      ],
      result: "y = 4x − 4",
    },
    {
      title: "Seno en el origen",
      problem: "Tangente a sin(x) en x = 0",
      steps: [
        "f′(x) = cos(x), m = cos(0) = 1.",
        "Punto (0, 0). Ecuación: y = x.",
      ],
      result: "y = x",
    },
    {
      title: "Logaritmo en x = 1",
      problem: "Tangente a ln(x) en x = 1",
      steps: [
        "f′(x) = 1/x, m = f′(1) = 1.",
        "Punto (1, ln(1)) = (1, 0).",
        "y − 0 = 1·(x − 1) → y = x − 1.",
      ],
      result: "y = x − 1",
    },
  ],
  faqs: [
    {
      q: "¿Cómo se halla la ecuación de la recta tangente?",
      a: "Calcula f′(a) para la pendiente, evalúa f(a) para el punto (a, f(a)) y escribe y − f(a) = f′(a)(x − a). Despeja y si el enunciado pide forma explícita.",
    },
    {
      q: "¿La derivada en un punto es la pendiente de la tangente?",
      a: "Sí, si f es derivable en a, f′(a) coincide con la pendiente de la recta tangente en ese punto. Es la interpretación geométrica central del concepto de derivada.",
    },
    {
      q: "¿Qué ocurre si f′(a) no existe?",
      a: "Puede haber tangente vertical (pendiente infinita) si la curva es continua en a, o la función puede no ser diferenciable —como |x| en 0— sin tangente en el sentido usual.",
    },
    {
      q: "¿Qué es la recta normal?",
      a: "Es perpendicular a la tangente en el punto de contacto. Si m es la pendiente tangente y m ≠ 0, la normal tiene pendiente −1/m.",
    },
    {
      q: "¿Puedo hallar tangentes a curvas implícitas?",
      a: "Sí, obteniendo dy/dx por derivación implícita y evaluando en el punto sobre la curva. Usa la calculadora de derivadas implícitas para ese caso.",
    },
    {
      q: "¿La tangente siempre cruza la curva solo en un punto?",
      a: "No necesariamente. La tangente «toca» localmente en el punto de tangencia, pero puede cruzar la curva cerca —por ejemplo, sin(x) en x = 0.",
    },
    {
      q: "¿Cómo verifico mi ecuación tangente?",
      a: "Comprueba que pasa por (a, f(a)) sustituyendo x = a, y que su pendiente coincide con f′(a). Ambas condiciones deben cumplirse.",
    },
    {
      q: "¿Para qué sirve la aproximación lineal?",
      a: "f(a) + f′(a)(x − a) aproxima f(x) cerca de a. Es la base del diferencial y de estimaciones rápidas en física e ingeniería.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Obtener f′(x) antes de evaluar en x = a.",
    },
    {
      label: "Calculadora derivadas implícitas",
      href: ES_CALCULATOR_ROUTES.implicitDerivatives,
      description: "Tangentes a curvas no despejadas como y² = x.",
    },
    {
      label: "Calculadora segunda derivada",
      href: ES_CALCULATOR_ROUTES.secondDerivative,
      description: "Concavidad cerca del punto de tangencia.",
    },
    {
      label: "Calculadora puntos críticos",
      href: ES_CALCULATOR_ROUTES.criticalPoints,
      description: "Donde f′ = 0 la tangente es horizontal.",
    },
  ],
  internalLinks: [
    { label: "Ejemplos de derivadas resueltas", href: "/blog/ejemplos-de-derivadas-resueltas" },
    { label: "Derivadas implícitas paso a paso", href: "/blog/derivadas-implicitas-paso-a-paso" },
    { label: "Tangent line calculator (English)", href: EN_ROUTES.tangentLineCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué es la recta tangente?",
      paragraphs: [
        "La recta tangente a una curva en un punto P es la recta que mejor aproxima la curva en las inmediaciones de P. En el punto de tangencia comparte con la gráfica la misma pendiente instantánea.",
        "Formalmente, si f es derivable en a, la tangente es la recta que pasa por (a, f(a)) con pendiente f′(a). Esa definición une el límite del cociente incremental con la geometría euclidiana.",
        "Visualmente, «acercar» dos puntos de la curva hace que la secante tienda a la tangente; el proceso del límite en la definición de derivada es exactamente ese.",
      ],
    },
    {
      h2: "Fórmula de la recta tangente",
      paragraphs: [
        "Forma punto-pendiente: y − y₀ = m(x − x₀), con (x₀, y₀) = (a, f(a)) y m = f′(a). Forma explícita: y = f(a) + f′(a)(x − a).",
        "La aproximación lineal L(x) = f(a) + f′(a)(x − a) satisface L(a) = f(a) y L′(a) = f′(a). Cerca de a, f(x) ≈ L(x) si f es suave.",
        "Para curvas dadas implícitamente F(x,y) = 0, la pendiente dy/dx en un punto sobre la curva se obtiene por derivación implícita y se sustituye en la misma plantilla.",
      ],
    },
    {
      h2: "Cuándo necesitas la ecuación tangente",
      paragraphs: [
        "En ejercicios de cálculo I y II, enunciados piden «hallar la recta tangente en x = a» o «aproximar f(1.01) usando el diferencial». Ambos requieren f′(a).",
        "En optimización geométrica, tangentes a parábolas o cónicas aparecen al buscar rectas que tocan una curva en un solo punto.",
        "En física, la velocidad instantánea es la pendiente de la tangente a la gráfica posición-tiempo en un instante dado.",
      ],
    },
    {
      h2: "Procedimiento paso a paso",
      paragraphs: [
        "Paso 1: Verifica que a está en el dominio de f. Paso 2: Calcula f(a). Paso 3: Halla f′(x) y evalúa f′(a). Paso 4: Escribe y − f(a) = f′(a)(x − a). Paso 5: Simplifica a forma y = mx + b si se pide.",
        "Ejemplo: f(x) = x³ en a = 1. f(1) = 1, f′(x) = 3x², f′(1) = 3. Tangente: y − 1 = 3(x − 1) → y = 3x − 2.",
        "Si el enunciado da un punto sobre la curva pero no el valor de a, despeja a del dato o usa el x del punto directamente.",
      ],
    },
    {
      h2: "Aplicaciones reales de la tangente y el diferencial",
      paragraphs: [
        "Estimaciones rápidas: √4.1 ≈ 2 + (1/(2√4))·0.1 usando la tangente de √x en x = 4. El diferencial dx = 0.1 entra en f(a) + f′(a)dx.",
        "En economía marginal, la tangente al coste total en una producción a₀ aproxima el coste de pequeños incrementos de producción.",
        "En control y sensores, linearizar un modelo no lineal cerca de un punto de operación —tangente al sistema— simplifica el diseño de reguladores.",
      ],
    },
    {
      h2: "Errores comunes al hallar tangentes",
      paragraphs: [
        "Usar f(a) como pendiente en lugar de f′(a). La pendiente viene de la derivada, no del valor de la función.",
        "Sustituir mal en punto-pendiente: el punto es (a, f(a)), no (a, f′(a)).",
        "Olvidar que ln(x) solo tiene sentido para a > 0, o que 1/x no está definido en a = 0. El dominio restringe dónde existe tangente.",
      ],
    },
    {
      h2: "Recta normal y perpendicularidad",
      paragraphs: [
        "La normal es perpendicular a la tangente. Si m_t = f′(a) ≠ 0, la pendiente normal es m_n = −1/m_t. Ecuación: y − f(a) = m_n(x − a).",
        "Muchos exámenes piden tangente y normal en el mismo punto. Deriva una sola vez para m_t; la normal es álgebra inmediata.",
        "En óptica geométrica, leyes de reflexión usan la normal a la superficie, no la tangente, para describir ángulos de incidencia y reflexión.",
      ],
    },
    {
      h2: "Conexión con la regla de la cadena y otras reglas",
      paragraphs: [
        "Si f es compuesta —por ejemplo sin(2x²)— f′(a) requiere la cadena. La tangente solo es tan correcta como la derivada que la alimenta.",
        "En cocientes y productos, errores en f′(x) se propagan directamente a la ecuación tangente. Usa las calculadoras especializadas si la estructura de f es compleja.",
        "La segunda derivada informa si la curva está por encima o por debajo de la tangente cerca de a (concavidad), refinando la calidad de la aproximación lineal.",
      ],
    },
    {
      h2: "Consejos para exámenes",
      paragraphs: [
        "Practica tres plantillas: polinomio en a entero, sin(x) o cos(x) en múltiplos de π/2, ln(x) en x = 1. Cubren la mayoría de preguntas estándar.",
        "Si piden aproximar f(a+h), usa f(a) + f′(a)·h sin reescribir toda la recta; es el mismo núcleo del diferencial.",
        "Verifica siempre sustituyendo x = a en tu recta final: debe dar y = f(a).",
      ],
    },
    {
      h2: "Tangente vertical y casos especiales",
      paragraphs: [
        "Si f′(a) tiende a infinito —por ejemplo f(x) = x^(1/3) en a = 0 en algunos tratamientos— la tangente puede ser vertical, ecuación x = a.",
        "En esquinas de |x − a|, no hay tangente única en el sentido de derivada clásica, aunque hay rectas tangentes laterales en sentido extendido.",
        "Curvas paramétricas x(t), y(t) usan dy/dx = (dy/dt)/(dx/dt) en el punto; el espíritu es el mismo con otra parametrización.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora de recta tangente",
      paragraphs: [
        "Introduce f(x) y obtén f′(x) en la traza. Evalúa mentalmente o con calculadora numérica f(a) y f′(a) para el a del enunciado.",
        "Arma la ecuación y − f(a) = f′(a)(x − a) en papel y comprueba con los ejemplos resueltos de esta página (x² en 2, sin(x) en 0, ln(x) en 1).",
        "Para curvas implícitas, enlaza con la calculadora de derivadas implícitas y vuelve aquí con dy/dx ya calculada.",
      ],
    },
  ],
};

export const criticalPointsPage: CalculatorPageConfig = {
  slug: "calculadora-puntos-criticos",
  path: ES_CALCULATOR_ROUTES.criticalPoints,
  breadcrumbHome: BREADCRUMB_HOME,
  tag: TAG,
  embedCalculator: true,
  h1: "Calculadora de Puntos Críticos con Pasos Online",
  intro: [
    "Los puntos críticos de una función son los valores de x donde la derivada se anula o no existe, y donde el comportamiento local puede cambiar de crecimiento a decrecimiento. Son la base del análisis de máximos, mínimos y de muchos problemas de optimización aplicada.",
    "Encontrar puntos críticos exige calcular f′(x), resolver f′(x) = 0 y revisar el dominio en busca de singularidades. Después se clasifican con criterio de la primera o segunda derivada. Esta calculadora de puntos críticos te da f′(x) con pasos para que completes el análisis con rigor.",
    "Desde polinomios cuadráticos hasta funciones racionales o con raíces, el procedimiento es el mismo en esqueleto: derivar, igualar a cero, filtrar soluciones válidas y decidir si cada candidato es máximo local, mínimo local o ninguno de los dos.",
  ],
  meta: {
    title: "Calculadora Puntos Críticos con Pasos | Máximos y Mínimos Online",
    description:
      "Calculadora de puntos críticos gratis con pasos. Halla f′(x), identifica candidatos a máximos y mínimos y estudia optimización en cálculo diferencial.",
    keywords:
      "calculadora puntos críticos, puntos críticos calculadora, máximos y mínimos online, optimización cálculo diferencial, criterio segunda derivada calculadora, extremos locales paso a paso",
  },
  defaultExamples: ["x^3 - 3*x", "x^4 - 4*x^2", "x*exp(-x)", "x^2/(x+1)"],
  examples: [
    {
      title: "Cúbica con dos extremos",
      problem: "Puntos críticos de f(x) = x³ − 3x",
      steps: [
        "f′(x) = 3x² − 3 = 3(x² − 1).",
        "f′(x) = 0 → x = −1 y x = 1.",
        "f″(x) = 6x: mínimo en x = 1 (f″ > 0), máximo en x = −1 (f″ < 0).",
      ],
      result: "Críticos en x = −1 (máx. local) y x = 1 (mín. local)",
    },
    {
      title: "Cuarta potencia menos término cuadrático",
      problem: "Analizar f(x) = x⁴ − 4x²",
      steps: [
        "f′(x) = 4x³ − 8x = 4x(x² − 2).",
        "Ceros: x = 0, x = √2, x = −√2.",
        "Tabla de signos de f′ o f″ clasifica tres candidatos.",
      ],
      result: "Críticos en x = 0, ±√2",
    },
    {
      title: "Función con factor exponencial",
      problem: "Críticos de f(x) = x·e^(−x) para x real",
      steps: [
        "Regla del producto: f′(x) = e^(−x) − x·e^(−x) = e^(−x)(1 − x).",
        "e^(−x) > 0 siempre; f′ = 0 cuando x = 1.",
        "f″(1) < 0: máximo local en x = 1, valor f(1) = 1/e.",
      ],
      result: "Máximo local en x = 1",
    },
  ],
  faqs: [
    {
      q: "¿Qué es un punto crítico?",
      a: "Es un punto c en el interior del dominio donde f′(c) = 0 o f′(c) no existe. Los extremos locales candidatos suelen estar entre los puntos críticos, aunque no todo crítico es extremo.",
    },
    {
      q: "¿Cómo encuentro los puntos críticos paso a paso?",
      a: "Calcula f′(x), resuelve f′(x) = 0 y lista los x del dominio donde f′ no existe. Esos valores son los puntos críticos; luego clasifícalos.",
    },
    {
      q: "¿Cuál es la diferencia entre máximo local y absoluto?",
      a: "Un máximo local en c significa que f(c) ≥ f(x) en un entorno de c. El máximo absoluto en un intervalo es el mayor valor de f en todo ese intervalo; puede ocurrir en un crítico o en un extremo del intervalo.",
    },
    {
      q: "¿Cómo uso el criterio de la segunda derivada?",
      a: "Si f′(c) = 0 y f″(c) > 0, suele haber mínimo local. Si f″(c) < 0, máximo local. Si f″(c) = 0, usa tabla de signos de f′ o compara valores.",
    },
    {
      q: "¿Qué es el criterio de la primera derivada?",
      a: "Examina el signo de f′ antes y después de c. Si f′ cambia de + a −, hay máximo local; de − a +, mínimo local. Si no cambia signo, no hay extremo.",
    },
    {
      q: "¿Los puntos críticos siempre son máximos o mínimos?",
      a: "No. f(x) = x³ tiene crítico en x = 0 sin extremo: f′ cambia de − a + sin cambiar de creciente a decreciente en el sentido de extremo.",
    },
    {
      q: "¿Cómo resuelvo problemas de optimización aplicada?",
      a: "Traduce el enunciado a f(x) en un dominio físico (longitudes positivas, etc.), halla críticos interiores, evalúa f en críticos y en fronteras del dominio, compara.",
    },
    {
      q: "¿Esta calculadora clasifica automáticamente los extremos?",
      a: "La herramienta obtiene f′(x) con pasos detallados. La clasificación (máximo/mínimo) la completas con f″ o tabla de signos usando los métodos de esta guía.",
    },
  ],
  relatedCalculators: [
    {
      label: "Calculadora de derivadas",
      href: ROUTES.home,
      description: "Calcular f′(x) es el primer paso del análisis.",
    },
    {
      label: "Calculadora segunda derivada",
      href: ES_CALCULATOR_ROUTES.secondDerivative,
      description: "Criterio de la segunda derivada para clasificar críticos.",
    },
    {
      label: "Calculadora regla del producto",
      href: ES_CALCULATOR_ROUTES.productRule,
      description: "Muchos modelos de optimización son productos.",
    },
    {
      label: "Calculadora regla del cociente",
      href: ES_CALCULATOR_ROUTES.quotientRule,
      description: "Funciones racionales en problemas de extremos.",
    },
  ],
  internalLinks: [
    { label: "Segunda derivada y concavidad", href: ES_CALCULATOR_ROUTES.secondDerivative },
    { label: "Ejemplos de derivadas resueltas", href: "/blog/ejemplos-de-derivadas-resueltas" },
    { label: "Critical points calculator (English)", href: EN_ROUTES.criticalPointsCalculator },
    ...esStandardInternalLinks(),
    ...SITE_LINKS,
  ],
  educationalSections: [
    {
      h2: "¿Qué son los puntos críticos?",
      paragraphs: [
        "Un punto crítico es un valor c en el dominio de f donde la derivada es cero o no está definida. Geometricamente, en un crítico con f′(c) = 0 la tangente es horizontal; si f′ no existe, puede haber esquina o tangente vertical.",
        "Los teoremas que garantizan extremos en intervalos cerrados (Weierstrass) aseguran que el máximo y mínimo absolutos existen, pero no dicen dónde: los críticos interiores son candidatos principales junto con los extremos del intervalo.",
        "En optimización, «buscar puntos críticos» es el paso algebraico central antes de interpretar el resultado en contexto —área máxima, coste mínimo, beneficio óptimo.",
      ],
    },
    {
      h2: "Relación entre críticos, máximos y mínimos",
      paragraphs: [
        "Todo extremo local interior en un punto diferenciable ocurre en un crítico: si f tiene máximo o mínimo local en c y f′(c) existe, entonces f′(c) = 0. La recíproca es falsa: no todo crítico es extremo.",
        "f(x) = x³ ilustra el caso: crítico en 0, pero la función sigue creciendo. El criterio de signos de f′ detecta que no hay cambio de creciente a decreciente.",
        "En aplicaciones, el contexto puede imponer un único candidato físicamente admisible; entonces basta verificar que mejora el objetivo frente a fronteras del dominio.",
      ],
    },
    {
      h2: "Método paso a paso para hallar puntos críticos",
      paragraphs: [
        "Paso 1: Determina el dominio de f. Paso 2: Calcula f′(x) con las reglas necesarias. Paso 3: Resuelve f′(x) = 0. Paso 4: Añade x donde f′ no existe pero f sí. Paso 5: Clasifica cada candidato.",
        "En f(x) = x/(x²+1), f′ es cociente; los ceros del numerador de f′ tras simplificar dan los críticos. En |x|, x = 0 es crítico por no derivabilidad.",
        "Paso 6 en optimización aplicada: evalúa f en cada candidato relevante y en fronteras; elige el valor óptimo según el enunciado (máximo o mínimo).",
      ],
    },
    {
      h2: "Criterio de la primera derivada",
      paragraphs: [
        "Construye una tabla con intervalos separados por los críticos. Si f′ es positiva a la izquierda de c y negativa a la derecha, f tiene máximo local en c.",
        "Si f′ es negativa y luego positiva, hay mínimo local. Si el signo de f′ no cambia, no hay extremo en c.",
        "Este criterio funciona aunque f″(c) = 0 o f″ no exista, por eso es más robusto que la segunda derivada en casos límite.",
      ],
    },
    {
      h2: "Criterio de la segunda derivada",
      paragraphs: [
        "Si f′(c) = 0 y f″(c) > 0, la gráfica es cóncava hacia arriba en c: típicamente mínimo local. Si f″(c) < 0, cóncava hacia abajo: típicamente máximo local.",
        "Si f″(c) = 0, el criterio no concluye. f(x) = x⁴ en 0 tiene mínimo con f″(0) = 0.",
        "Calcular f″ solo tiene sentido donde f′ es derivable; en esquinas, vuelve al criterio de la primera derivada.",
      ],
    },
    {
      h2: "Optimización y problemas aplicados",
      paragraphs: [
        "Problemas de «caja sin tapa», «cerca con postes», «tiempo mínimo de viaje» se traducen a una variable, se obtiene f(x) y se buscan críticos en el dominio físico (x > 0, etc.).",
        "El extremo absoluto en un intervalo cerrado [a,b] se encuentra comparando f en todos los críticos interiores y en x = a y x = b.",
        "En economía, maximizar beneficio B(x) o minimizar coste C(x) sigue el mismo esquema: C′(x) = 0, interpretar x* en unidades del problema.",
      ],
    },
    {
      h2: "Errores frecuentes en análisis de críticos",
      paragraphs: [
        "Olvidar puntos donde f′ no existe. En f(x) = x^(2/3), x = 0 es crítico aunque la derivada «explote» en el límite.",
        "Incluir soluciones de f′(x) = 0 fuera del dominio físico del problema aplicado —longitudes negativas, por ejemplo.",
        "Confundir crítico con extremo sin clasificar. Siempre añade una línea que justifique máximo, mínimo o «no extremo».",
      ],
    },
    {
      h2: "Conexión con otras reglas de derivación",
      paragraphs: [
        "f′ de un producto, cociente o composición requiere las reglas correspondientes. Un error en f′ desplaza todos los críticos calculados.",
        "En funciones racionales, simplificar f antes de derivar puede ocultar puntos donde f no es derivable; conviene marcar exclusiones del dominio desde el inicio.",
        "La recta tangente horizontal en un máximo o mínimo local refleja f′(c) = 0; enlazar con la calculadora de tangentes refuerza la imagen geométrica.",
      ],
    },
    {
      h2: "Consejos para exámenes de optimización",
      paragraphs: [
        "Redacta siempre: dominio, f(x), f′(x), ecuación f′(x) = 0, lista de críticos, clasificación, conclusión con unidades si aplica.",
        "Si hay un solo crítico interior y el contexto pide mínimo, argumenta con criterio de segunda derivada o con comportamiento de f en los límites del dominio.",
        "Dibuja un esquema: muchos profesores valoran un croquis con flechas de crecimiento y la posición de máximos y mínimos.",
      ],
    },
    {
      h2: "Ejemplos representativos en familias de funciones",
      paragraphs: [
        "Polinomios: f′ es polinomio de grado uno menos; número de críticos acotado. Cuadrática: un crítico, parábola con vértice en el extremo.",
        "x·e^(−x): un máximo en x = 1 típico de modelos de concentración o decaimiento con pico.",
        "Racionales: críticos donde numerador de f′ se anula, más cuidado con x que anulan el denominador de f.",
      ],
    },
    {
      h2: "Cómo usar esta calculadora de puntos críticos",
      paragraphs: [
        "Introduce f(x) y obtén f′(x) en la traza paso a paso. Iguala a cero esa expresión y resuelve en papel o con herramientas algebraicas.",
        "Para cada solución, calcula f″(x) con la calculadora de segunda derivada o construye la tabla de signos de f′. Redacta la conclusión en lenguaje del enunciado.",
        "Contrasta con los ejemplos x³ − 3x, x⁴ − 4x² y x·e^(−x) de esta página antes de abordar ejercicios del libro o del parcial.",
      ],
    },
  ],
};
