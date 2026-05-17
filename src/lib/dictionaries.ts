import type { DeepStringify } from "./dictionary-types";

const dictionaryData = {
    nav: {
      works: "Cómo funciona",
      examples: "Ejemplos",
      rules: "Reglas",
      blog: "Blog",
      calcNow: "Calcular Ahora",
      calculate: "Calcular"
    },
    hero: {
      tag: "Herramienta Académica Gratuita",
      h1: "Calculadora de Derivadas con Pasos Online",
      desc: "Nuestra calculadora de derivadas online te ayuda a resolver funciones matemáticas con explicaciones paso a paso. Calcula derivadas trigonométricas, implícitas, parciales y logarítmicas de forma rápida y gratuita.",
      calcBtn: "Calcular Ahora",
      howBtn: "Cómo funciona",
      trust1: "Precisión simbólica exacta",
      trust2: "Resultado instantáneo",
      trust3: "Explicación paso a paso",
      stats: "Más de 50,000 estudiantes y profesores confían en esta herramienta."
    },
    metadata: {
      home: {
        title: "Calculadora de Derivadas con Pasos Online Gratis",
        description:
          "Calculadora de derivadas online gratis con solución paso a paso. Resuelve derivadas parciales, implícitas, trigonométricas y logarítmicas fácilmente.",
        keywords:
          "calculadora de derivadas, calculadora de derivadas con pasos, calculadora de derivadas online, derivadas parciales, derivadas implícitas, derivadas trigonométricas, resolver derivadas gratis",
      }
    },
    footer: {
      desc: "El motor matemático más avanzado para resolver derivadas con pasos detallados y explicaciones.",
      resources: "Recursos",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      disclaimer: "Aviso Legal",
      about: "Acerca de",
      contact: "Contacto",
      cols: {
        calculators: {
          title: "Calculadoras",
          links: [
            { label: "Calculadora de Derivadas", href: "/#calculator" },
            { label: "Calculadora de Pasos", href: "/como-funciona" },
            { label: "Derivadas Parciales", href: "/reglas" },
            { label: "Reglas de Derivación", href: "/reglas" },
          ]
        },
        learning: {
          title: "Aprendizaje",
          links: [
            { label: "Concepto de Derivada", href: "/como-funciona" },
            { label: "Regla de la Cadena", href: "/reglas" },
            { label: "Formulario de Derivadas", href: "/reglas" },
            { label: "Ejercicios Resueltos", href: "/ejemplos" },
          ]
        },
        resources: {
          title: "Recursos",
          links: [
            { label: "Preguntas Frecuentes", href: "/como-funciona#faq" },
            { label: "Blog de Cálculo", href: "/blog" },
            { label: "Política de Privacidad", href: "/privacy-policy" },
            { label: "Términos de Servicio", href: "/terms-of-service" },
          ]
        }
      },
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con"
    },
    calculator: {
      placeholder: "Ej: sin(x) * x^2",
      calculate: "Calcular Derivada",
      advanced: "Opciones Avanzadas",
      variable: "Variable",
      ready: "¡Listo!",
      error: "Error en la ecuación",
      invalidExpr: "Expresión inválida. Revisa la sintaxis e inténtalo de nuevo.",
      examples: "Ejemplos",
      calculating: "Calculando…",
      copied: "¡Copiado!",
      simplify: "Simplificar",
      result: "Resultado",
      simplified: "Simplificado",
      expanded: "Expandido",
      showSteps: "VER SOLUCIÓN PASSO A PASSO",
      hideSteps: "OCULTAR PASSOS",
      steps: {
        step1: {
          t: "1. Identificar la estructura",
          d: "Expresión diferenciable respecto a variable. Identificamos las reglas aplicables: potencia, cadena, producto, cociente.",
        },
        step2: {
          t: "2. Aplicar reglas de derivación",
          d: "Se diferencia cada término según las reglas correspondientes y se aplica la regla de la cadena donde sea necesario.",
        },
        step3: {
          t: "3. Simplificar el resultado",
          d: "Se combinan términos semejantes y se reduce la expresión a su forma mínima.",
        }
      },
      tips: {
        sin: "Seno", cos: "Coseno", tan: "Tangente", sec: "Secante", csc: "Cosecante", cot: "Cotangente",
        asin: "Arcoseno", acos: "Arcocoseno", atan: "Arcotangente",
        sinh: "Seno hip.", cosh: "Coseno hip.", tanh: "Tan hip.",
        ln: "Log. natural", log: "Log. base 10", exp: "Exponencial", power: "Potencia", root: "Raíz", pi: "Pi",
        openPar: "Abrir paréntesis", closePar: "Cerrar paréntesis", delete: "Borrar",
        sum: "Suma", sub: "Resta", div: "Dividir", mul: "Multiplicar", point: "Punto decimal",
        var: "Variable", euler: "Número e", clearAll: "Borrar todo", slash: "División"
      }
    },
    popularExamples: {
      badge: "Ejercicios de Cálculo",
      title1: "Ejercicios de ",
      title2: "Derivadas",
      title3: " Resueltos",
      subtitle: "Explora ejemplos resueltos de derivadas comunes. Desde funciones simples hasta derivadas compuestas con la regla de la cadena.",
      categories: {
        constants: "Constantes",
        powers: "Potencias",
        roots: "Raíces",
        exponentials: "Exponenciales",
        logarithms: "Logaritmos",
        trigonometry: "Trigonometría"
      },
      cta: "Probar mi propia ecuación",
      seoTitle: "Domina el Cálculo Diferencial con Ejercicios de Derivadas",
      seoCard1Title: "Ejemplos de Derivadas Paso a Paso",
      seoCard1Desc: "Estudiar derivadas resueltas es la forma más efectiva de comprender cómo se aplican las reglas de derivación.",
      seoCard2Title: "Cómo Resolver Derivadas Online",
      seoCard2Desc: "Si necesitas resolver derivadas online con precisión académica, Calculadora Derivadas es tu mejor aliado.",
      quote: "El cálculo no se trata de memorizar fórmulas, sino de entender cómo cambian las cosas."
    },
    rules: {
      badge: "Cálculo Diferencial",
      title1: "Reglas de ",
      title2: "Derivación",
      title3: " Fundamentales",
      subtitle: "Domina las técnicas esenciales del cálculo. Haz clic en cualquier regla para ver ejemplos resueltos paso a paso.",
      viewMore: "Ver ejemplos y guía",
      list: {
        power: {
          name: "Regla de la Potencia",
          desc: "Aplica cuando x está elevado a una constante. El exponente baja y se reduce en 1."
        },
        product: {
          name: "Regla del Producto",
          desc: "Usada para derivar el producto de dos funciones. Aplica a ambos factores por separado."
        },
        quotient: {
          name: "Regla del Cociente",
          desc: "Permite derivar la división de dos funciones. El denominador nunca puede ser cero."
        },
        chain: {
          name: "Regla de la Cadena",
          desc: "Fundamental para derivar funciones compuestas. Deriva la función exterior, luego la interior."
        },
        trig: {
          name: "Derivadas Trigonométricas",
          desc: "Reglas específicas para funciones circulares. Incluye seno, coseno, tangente y más."
        }
      }
    },
    stepByStep: {
      badge: "Metodología",
      title: "Paso a Paso",
      desc: "Nuestra calculadora desglosa la solución completa para que entiendas de dónde viene cada número.",
      steps: [
        {
          title: "Expresión Original",
          desc: "Comenzamos identificando la función polinomial."
        },
        {
          title: "Aplicar Regla de la Suma",
          desc: "Separamos la derivada en tres partes más simples usando la regla de linealidad."
        },
        {
          title: "Aplicar Regla de la Potencia",
          desc: "Multiplicamos cada término por su exponente y restamos 1 al grado."
        },
        {
          title: "Resultado Final",
          desc: "Simplificamos la expresión para obtener el resultado definitivo."
        }
      ]
    },
    graph: {
      badge: "Análisis Visual",
      title: "Visualiza el Cambio",
      desc: "La derivada representa la tasa de cambio instantánea. Nuestra herramienta gráfica te permite ver simultáneamente la función original y su derivada para que comprendas su relación geométrica y matemática.",
      original: "Función Original",
      derivative: "Función Derivada"
    },
    blog: {
      badge: "Recursos Educativos",
      title1: "Blog de ",
      title2: "Cálculo",
      subtitle: "Artículos diseñados para que aprender derivadas sea una experiencia fácil y entretenida.",
      readMore: "Leer artículo",
      viewAll: "Ver todos",
      recommended: "Artículos Recomendados",
      posts: [
        {
          title: "Cómo aprender derivadas desde cero",
          slug: "como-aprender-derivadas-desde-cero",
          desc: "Una guía completa para principiantes que quieren entender el concepto de derivada sin complicaciones.",
          date: "10 May 2026",
          read: "5 min",
          category: "Guía"
        },
        {
          title: "Los 5 errores más comunes al derivar",
          slug: "errores-comunes-al-derivar",
          desc: "Evita estos fallos típicos en tus exámenes de cálculo. Analizamos la regla de la cadena y el producto.",
          date: "08 May 2026",
          read: "8 min",
          category: "Consejos"
        },
        {
          title: "Entendiendo la Regla de la Cadena",
          slug: "entendiendo-regla-de-la-cadena",
          desc: "Explicación visual y sencilla de la regla más utilizada en el cálculo de derivadas online.",
          date: "05 May 2026",
          read: "6 min",
          category: "Teoría"
        }
      ]
    },
    popularSearches: {
      title: "Funciones Más Calculadas",
      functions: ["sin(x)", "ln(x)", "e^x", "x^2", "tan(x)", "cos(x)"],
    },
    breadcrumbs: {
      home: "Inicio"
    },
    common: {
      solvedExamples: "Ejemplos Resueltos",
      contactTitle: "4. Contacto",
      contactBody:
        "Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestro blog o redes sociales oficiales.",
      liabilityTitle: "4. Limitación de Responsabilidad",
      liabilityBody:
        "Calculadora Derivadas no será responsable de ningún daño derivado del uso o la imposibilidad de uso de la calculadora, incluyendo errores en el cálculo de derivadas o pérdida de datos.",
    },
    article: {
      readTime: "de lectura",
      tableOfContents: "Tabla de Contenidos",
      faqs: "Preguntas Frecuentes",
      authorPrefix: "Escrito por",
      authorRole: "Especialista en educación matemática y creador de contenido pedagógico para estudiantes de secundaria y universidad.",
      relatedPosts: "Artículos Relacionados",
      recommended: "Artículos Recomendados",
      viewAll: "Ver todos",
      resources: "Recursos",
      tocLabel: "Contenido",
      usefulTitle: "¿Te ha servido?",
      usefulDesc: "Calcula cualquier derivada al instante con nuestra herramienta online.",
      useCalculator: "Usar Calculadora",
      exampleLabel: "Ejemplo Práctico"
    },
    howItWorks: {
      title: "Cómo funciona nuestra Calculadora de Derivadas",
      description: "Guía completa sobre el uso de Calculadora Derivadas. Aprende a ingresar funciones, interpretar los pasos y dominar el cálculo diferencial online.",
      date: "10 de Mayo, 2026",
      readTime: "6 min",
      category: "Ayuda",
      tags: ["Tutorial", "Guía", "Uso"],
      authorRole: "Soporte Técnico Educativo",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Cómo funciona", href: "/como-funciona" }
      ],
      sections: {
        steps: {
          title: "Instrucciones paso a paso",
          desc: "Usar nuestra calculadora de derivadas online es sumamente sencillo.",
          items: [
            { title: "Ingresa tu función", desc: "Escribe la función que deseas derivar en el campo de entrada principal." },
            { title: "Selecciona la variable", desc: "Por defecto, la calculadora deriva respecto a 'x'." },
            { title: "Haz clic en 'Calcular'", desc: "Presiona el botón 'Calcular Derivada' o pulsa la tecla Enter." },
            { title: "Revisa el procedimiento", desc: "Obtén el resultado simplificado y haz clic en 'Ver solución paso a paso'." }
          ]
        },
        functions: {
          title: "Funciones Soportadas y Notación",
          desc: "Soportamos una amplia gama de funciones matemáticas.",
          trig: "Trigonométricas",
          special: "Especiales"
        },
        tips: {
          title: "Consejos para mejores resultados",
          proTip: "Usa paréntesis para agrupar términos complejos.",
          warning: "Nuestra calculadora distingue entre minúsculas y mayúsculas."
        }
      },
      faqs: [
        { question: "¿Es gratis?", answer: "Sí, Calculadora Derivadas es una herramienta totalmente gratuita para fines educativos." },
        { question: "¿Puedo ver los pasos?", answer: "¡Por supuesto! Haz clic en el botón de solución detallada después de calcular." }
      ]
    },
    rulesPage: {
      title: "Reglas de Derivación: Guía Completa para Estudiantes",
      description: "Domina todas las reglas de diferenciación. Desde la regla de la potencia hasta la cadena, con explicaciones detalladas, fórmulas y ejemplos prácticos paso a paso.",
      date: "10 de Mayo, 2026",
      readTime: "10 min",
      category: "Educación",
      tags: ["Reglas", "Cálculo", "Derivadas", "Fórmulas"],
      authorRole: "Departamento de Matemáticas",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "Reglas de Derivación", href: "/reglas" }
      ],
      sections: {
        importance: {
          title: "¿Por qué son importantes las reglas de derivación?",
          p1: "Las reglas de derivación son atajos matemáticos que nos permiten encontrar la tasa de cambio de una función sin tener que aplicar la pesada definición formal por límites.",
          p2: "Si eres nuevo en esto, te recomendamos empezar por entender qué es una derivada antes de memorizar las fórmulas."
        },
        catalog: {
          title: "Catálogo de Reglas Principales",
          desc: "Haz clic en cada regla para ver una explicación detallada, la fórmula y ejemplos paso a paso:",
          readMore: "Leer guía"
        },
        formulas: {
          title: "Resumen de Fórmulas Clave",
          desc: "Aquí tienes las dos reglas que resolverán el 80% de tus ejercicios de cálculo:",
          p1: "Para una lista más extensa, consulta nuestra tabla de fórmulas completa."
        }
      },
      faqs: [
        { question: "¿Cuál es la regla más utilizada?", answer: "Sin duda la regla de la potencia y la regla de la cadena son las más fundamentales." },
        { question: "¿Cómo se deriva un producto de tres funciones?", answer: "Puedes derivar las dos primeras como un solo bloque usando la regla del producto." },
        { question: "¿Qué regla debo aplicar para raíces cuadradas?", answer: "Primero convierte la raíz en un exponente fraccionario (1/2) y luego aplica la regla de la potencia." }
      ]
    },
    examplesPage: {
      title: "Ejemplos de Derivadas Resueltos: Guía Práctica Paso a Paso",
      description: "Explora una amplia variedad de ejercicios de derivadas resueltos. Aprende paso a paso con ejemplos de funciones polinómicas, trigonométricas y logarítmicas.",
      date: "10 de Mayo, 2026",
      readTime: "8 min",
      category: "Ejercicios",
      tags: ["Ejemplos", "Práctica", "Derivadas", "Calculus"],
      authorRole: "Docente de Cálculo",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Práctica", href: "/ejemplos" },
        { label: "Ejemplos Resueltos", href: "/ejemplos" }
      ],
      sections: {
        intro: {
          title: "Aprender mediante ejemplos prácticos",
          p1: "La mejor forma de dominar el cálculo diferencial es resolviendo problemas variados.",
          p2: "Antes de sumergirte en los ejercicios, asegúrate de conocer las reglas de derivación fundamentales."
        },
        basic: {
          title: "Ejemplos de Derivadas Básicas",
          desc: "Comenzamos con las funciones elementales. Estos ejercicios son la base para problemas más complejos."
        },
        advanced: {
          title: "Ejercicios con Reglas Especiales",
          desc: "A medida que las funciones se vuelven más complejas, necesitamos herramientas como la regla de la cadena."
        }
      },
      faqs: [
        { question: "¿Cómo puedo practicar más?", answer: "Te recomendamos intentar resolver el ejercicio por tu cuenta antes de ver la solución completa." },
        { question: "¿Qué hago si mi resultado es diferente?", answer: "Asegúrate de haber simplificado la expresión final." }
      ]
    },
    formulasPage: {
      title: "Fórmulas de Derivadas: Tabla Completa y Reglas de Operación",
      description: "El formulario definitivo de derivadas para estudiantes. Consulta todas las fórmulas con explicaciones claras.",
      date: "10 de Mayo, 2026",
      readTime: "6 min",
      category: "Recursos",
      tags: ["Fórmulas", "Tabla de Derivadas", "Cálculo"],
      authorRole: "Educador de Calculadora Derivadas",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Formularios", href: "/reglas" },
        { label: "Tabla de Fórmulas", href: "/reglas" }
      ],
      sections: {
        intro: {
          title: "Tu Formulario de Bolsillo",
          p1: "Tener a mano una tabla de derivadas es fundamental durante el proceso de aprendizaje.",
          p2: "Si necesitas ver cómo se aplican estas fórmulas, consulta nuestra sección de ejemplos."
        },
        table: {
          title: "Tabla de Derivadas Básicas",
          function: "Función f(x)",
          derivative: "Derivada f'(x)",
          description: "Descripción"
        },
        rules: {
          title: "Reglas de Operación Fundamentales",
          sum: "Suma / Resta",
          const: "Múltiplo Constante"
        }
      },
      faqs: [
        { question: "¿Cuál es la derivada de una constante?", answer: "La derivada de cualquier constante es siempre 0." },
        { question: "¿Cómo se deriva e^x?", answer: "La función e^x es especial porque es su propia derivada." }
      ]
    },
    whatIsPage: {
      title: "¿Qué es una derivada? Concepto, Definición y Guía Completa",
      description: "Descubre qué es una derivada de forma sencilla. Exploramos su definición geométrica como pendiente y su aplicación como tasa de cambio.",
      date: "10 de Mayo, 2026",
      readTime: "7 min",
      category: "Fundamentos",
      tags: ["Cálculo", "Derivadas", "Matemáticas"],
      authorRole: "Educador de Calculadora Derivadas",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "¿Qué es una derivada?", href: "/como-funciona" }
      ],
      sections: {
        intro: {
          title: "Introducción al Cálculo Diferencial",
          p1: "La derivada es uno de los conceptos más poderosos y fundamentales de todas las matemáticas."
        },
        geometry: {
          title: "La Definición Geométrica",
          p1: "Visualmente, la derivada en un punto representa la pendiente de la recta tangente a la curva."
        },
        apps: {
          title: "Aplicaciones Reales",
          economy: "Economía",
          engineering: "Ingeniería"
        }
      },
      faqs: [
        { question: "¿Cuál es la diferencia entre derivada y diferencial?", answer: "La derivada es la tasa de cambio, mientras que la diferencial es un cambio infinitamente pequeño." },
        { question: "¿Qué es una derivada parcial?", answer: "Es la derivada respecto a una sola variable manteniendo las otras constantes." }
      ]
    },
    howToUsePage: {
      title: "Cómo usar la Calculadora de Derivadas: Guía y Sintaxis",
      description: "Domina nuestra herramienta de cálculo paso a paso. Aprende la sintaxis correcta para funciones trigonométricas y logarítmicas.",
      date: "10 de Mayo, 2026",
      readTime: "5 min",
      category: "Tutorial",
      tags: ["Ayuda", "Sintaxis", "Uso de Calculadora Derivadas", "Cálculo Online"],
      authorRole: "Expertos en Calculadora Derivadas",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Centro de Ayuda", href: "/como-funciona" },
        { label: "Guía de Uso", href: "/como-funciona" }
      ],
      sections: {
        steps: {
          title: "Pasos para resolver tu primera derivada",
          s1: { t: "Escribe la función", d: "Usa el teclado matemático para introducir funciones." },
          s2: { t: "Verifica la vista previa", d: "Verás una representación en tiempo real." },
          s3: { t: "Haz clic en Calcular", d: "Presiona el botón principal y obtén el resultado." }
        },
        syntax: {
          title: "Sintaxis y Notación Soportada",
          recommended: "Sintaxis Recomendada",
          avoid: "Evitar (Ambigüedad)"
        }
      },
      faqs: [
        { question: "¿Funciona en móviles?", answer: "Sí, la calculadora es totalmente responsiva." },
        { question: "¿Es gratuito?", answer: "Absolutamente, Calculadora Derivadas es una plataforma educativa gratuita." }
      ]
    },
    partialPage: {
      title: "Derivadas Parciales: Guía Completa de Cálculo Multivariable",
      description: "Aprende a resolver derivadas parciales paso a paso. Conceptos, notación e interpretación geométrica.",
      date: "10 de Mayo, 2026",
      readTime: "12 min",
      category: "Avanzado",
      tags: ["Multivariable", "Ingeniería", "IA", "Cálculo"],
      authorRole: "Experto en Análisis Matemático",
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: "Avanzado", href: "/reglas" },
        { label: "Derivadas Parciales", href: "/reglas" }
      ],
      sections: {
        intro: {
          title: "¿Qué es una derivada parcial?",
          p1: "Cuando trabajamos con funciones de varias variables, la derivada ordinaria ya no es suficiente."
        },
        notation: {
          title: "Notación Profesional",
          p1: "Usamos el símbolo 'del' (∂) para distinguir las derivadas parciales."
        }
      },
      faqs: [
        { question: "¿Cómo se identifica?", answer: "Se identifica por el símbolo ∂ o por subíndices como fx." },
        { question: "¿Qué es segundo orden?", answer: "Es derivar una derivada parcial por segunda vez." }
      ]
    },
    faqsPage: {
      title: "Preguntas Frecuentes",
      subtitle:
        "Respuestas claras sobre cómo usar nuestra calculadora de derivadas online y qué tipos de funciones puedes resolver.",
      badge: "Centro de Ayuda",
      list: [
        {
          q: "¿Qué hace una calculadora de derivadas?",
          a: "Una calculadora de derivadas resuelve automáticamente derivadas matemáticas y muestra el procedimiento paso a paso.",
        },
        {
          q: "¿La calculadora de derivadas es gratuita?",
          a: "Sí, nuestra calculadora online es completamente gratuita y funciona desde cualquier dispositivo.",
        },
        {
          q: "¿Puedo resolver derivadas parciales?",
          a: "Sí, la herramienta admite derivadas parciales para funciones multivariables.",
        },
        {
          q: "¿Funciona con funciones trigonométricas?",
          a: "Sí, puedes calcular derivadas de sen(x), cos(x), tan(x) y muchas otras funciones trigonométricas.",
        },
      ],
    },
    homeSeo: {
      whatIs: {
        title: "¿Qué es una derivada?",
        content:
          "Una derivada representa la tasa de cambio instantánea de una función matemática. En cálculo diferencial, las derivadas se utilizan para analizar pendientes, velocidades, máximos, mínimos y comportamiento de funciones. Nuestra calculadora de derivadas permite obtener resultados exactos y simplificados automáticamente.",
        linkLabel: "Aprende más sobre derivadas",
        href: "/como-funciona",
      },
      howToUse: {
        title: "¿Cómo usar la calculadora de derivadas?",
        steps: [
          "Escribe la función matemática en el campo de entrada.",
          "Selecciona funciones como sen, cos, ln o potencias usando el teclado matemático.",
          "Haz clic en “Calcular Derivada”.",
          "Obtén el resultado junto con la resolución paso a paso.",
        ],
        linkLabel: "Ver guía completa",
        href: "/como-funciona",
      },
      types: {
        title: "Tipos de derivadas compatibles",
        items: [
          "Derivadas trigonométricas",
          "Derivadas logarítmicas",
          "Derivadas implícitas",
          "Derivadas parciales",
          "Derivadas exponenciales",
          "Regla de la cadena",
          "Regla del producto",
          "Regla del cociente",
        ],
        linkLabel: "Explorar reglas de derivación",
        href: "/reglas",
      },
      internalLinks: {
        title: "Recursos educativos",
        links: [
          { label: "Cómo funciona", href: "/como-funciona", description: "Guía paso a paso" },
          { label: "Ejemplos resueltos", href: "/ejemplos", description: "Ejercicios con solución" },
          { label: "Reglas de derivación", href: "/reglas", description: "Fórmulas y técnicas" },
          { label: "Blog educativo", href: "/blog", description: "Artículos de cálculo" },
        ],
      },
    },
    seoCards: {
      title: "Tu Calculadora de Derivadas Online y Gratuita",
      subtitle: "Nuestra plataforma educativa está diseñada para ayudarte a resolver derivadas con pasos y comprender la lógica matemática detrás de cada función diferencial de forma rápida y sencilla.",
      cards: [
        {
          id: "que-es-derivada",
          title: "¿Qué es una derivada?",
          desc: "La derivada representa la tasa de cambio instantánea de una función. Es la pendiente de la recta tangente en un punto específico.",
          link: "Aprende el concepto base →",
          href: "/como-funciona",
        },
        {
          id: "como-usar-calculadora",
          title: "Cómo usar la calculadora",
          desc: "Simplemente ingresa tu expresión matemática usando nuestro teclado especializado. Obtendrás no solo el resultado final, sino la resolución paso a paso.",
          link: "Ver tutorial rápido →",
          href: "/como-funciona",
        },
        {
          id: "reglas-derivacion",
          title: "Reglas de Derivación",
          desc: "Domina las reglas esenciales: regla de la potencia, regla del producto, cociente y la regla de la cadena.",
          link: "Estudar reglas →",
          href: "/reglas",
        },
        {
          id: "ejemplos-derivadas",
          title: "Ejemplos de Derivadas",
          desc: "Explora nuestra biblioteca de ejercicios resueltos. Desde polinomios simples hasta complejas derivadas trigonométricas.",
          link: "Ver galería de ejemplos →",
          href: "/ejemplos",
        },
        {
          id: "derivadas-parciales",
          title: "Derivadas Parciales",
          desc: "Avanza hacia el cálculo multivariable. Aprende a mantener variables constantes mientras derivas respecto a otra.",
          link: "Conceptos avanzados →",
          href: "/reglas",
        },
        {
          id: "formulas-derivadas",
          title: "Fórmulas de Derivadas",
          desc: "Accede a nuestra tabla de derivadas y fórmulas trigonométricas interactivas.",
          link: "Ver formulario completo →",
          href: "/reglas",
        },
      ]
    },
    aboutPage: {
      title: "Acerca de Calculadora Derivadas",
      subtitle: "Herramienta educativa gratuita para aprender cálculo diferencial.",
      sections: [
        { title: "Nuestra misión", content: "Ofrecemos una calculadora de derivadas paso a paso para estudiantes y docentes que necesitan resultados exactos con explicaciones claras." },
        { title: "Qué ofrecemos", content: "Cálculo simbólico, reglas de derivación, ejemplos resueltos, blog educativo y recursos en español, inglés y portugués." },
      ],
      back: "Volver al Inicio",
    },
    contactPage: {
      title: "Contacto",
      subtitle: "¿Tienes preguntas o sugerencias? Escríbenos.",
      sections: [
        { title: "Canales", content: "Puedes contactarnos a través de nuestro blog, redes sociales oficiales o comentarios en publicaciones educativas." },
        { title: "Tiempo de respuesta", content: "Intentamos responder en un plazo de 2 a 5 días hábiles." },
      ],
      back: "Volver al Inicio",
    },
    disclaimerPage: {
      title: "Aviso Legal",
      subtitle: "Información sobre el uso educativo de esta herramienta.",
      sections: [
        { title: "Uso educativo", content: "Los resultados son orientativos. Verifica siempre con tu docente o material de referencia antes de entregas evaluadas." },
        { title: "Sin garantía", content: "No garantizamos ausencia total de errores en cálculos simbólicos complejos." },
      ],
      back: "Volver al Inicio",
    },
    privacy: {
      title: "Política de Privacidad",
      subtitle: "Información sobre el manejo de datos y cumplimiento.",
      sections: [
        { title: "1. Introducción", content: "En Calculadora Derivadas, valoramos tu privacidad. Esta política describe cómo manejamos la información cuando utilizas nuestra calculadora y recursos." },
        { title: "2. Información que Recopilamos", content: "Somos una herramienta gratuita. No requerimos registro. Recopilamos datos técnicos anónimos para mejorar el rendimiento." },
        { title: "3. Uso de Cookies", content: "Utilizamos cookies para analizar tráfico y personalizar contenido mediante Google AdSense." }
      ],
      back: "Volver al Inicio"
    },
    terms: {
      title: "Términos de Servicio",
      subtitle: "Información legal y educativa.",
      sections: [
        { title: "1. Uso del Servicio", content: "Aceptas usar esta plataforma con fines educativos y de forma responsable." },
        { title: "2. Descargo de Responsabilidad", content: "Aunque buscamos precisión, no garantizamos que los resultados estén libres de errores. Verifica siempre para fines críticos." },
        { title: "3. Propiedad Intelectual", content: "El diseño y algoritmos son propiedad de Calculadora Derivadas." }
      ],
      accept: "Aceptar e Ir al Inicio"
    }
};

export type TranslationDictionary = DeepStringify<typeof dictionaryData>;
export const dict: TranslationDictionary = dictionaryData;
