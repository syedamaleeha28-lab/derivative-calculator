import type { DeepStringify } from "./dictionary-types";

const dictionaryData = {
    nav: {
      home: "Inicio",
      calculator: "Calculadora",
      partialDerivatives: "Parciales",
      chainRule: "Cadena",
      implicitDerivatives: "Implícitas",
      calculators: "Calculadoras",
      guides: "Guías",
      works: "Cómo funciona",
      examples: "Ejemplos",
      rules: "Reglas",
      blog: "Blog",
      calcNow: "Calcular",
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
          "Calculadora de derivadas online gratis con pasos detallados. Resuelve trigonométricas, parciales e implícitas. Prueba la herramienta ahora.",
        keywords:
          "calculadora de derivadas, calculadora de derivadas con pasos, calculadora de derivadas online gratis, derivadas paso a paso, derivadas parciales, derivadas implícitas, resolver derivadas online, calculadora diferencial",
      },
      comoFunciona: {
        title:
          "Cómo Usar la Calculadora de Derivadas Online | Tutorial Paso a Paso",
        description:
          "Guía para usar la calculadora de derivadas con pasos: sintaxis, teclado matemático, derivadas implícitas y consejos para resolver derivadas online con precisión.",
        keywords:
          "cómo usar calculadora de derivadas, calculadora de derivadas con pasos, resolver derivadas online, tutorial cálculo diferencial, calculadora matemática online",
      },
      ejemplos: {
        title:
          "Ejemplos de Derivadas Resueltas | Ejercicios con Pasos en Español",
        description:
          "Ejemplos de derivadas resueltas paso a paso: polinomios, trigonométricas, logarítmicas y compuestas. Practica ejercicios de derivadas para universidad y bachillerato.",
        keywords:
          "ejemplos de derivadas resueltas, derivadas paso a paso, ejercicios de derivadas, derivadas trigonométricas ejemplos, cómo derivar funciones",
      },
      reglas: {
        title:
          "Reglas de Derivación | Cadena, Producto, Cociente y Fórmulas",
        description:
          "Reglas de derivación explicadas: potencia, producto, cociente y regla de la cadena. Fórmulas de derivadas trigonométricas y logarítmicas para estudiar cálculo diferencial.",
        keywords:
          "reglas de derivación, regla de la cadena, derivada del producto, derivada del cociente, derivadas trigonométricas, fórmulas de derivadas",
      },
      blog: {
        title:
          "Blog de Derivadas y Cálculo Diferencial | Aprender a Derivar",
        description:
          "Artículos sobre derivadas explicadas, regla de la cadena, derivadas implícitas y errores comunes. Guías para estudiantes que quieren dominar el cálculo diferencial.",
        keywords:
          "derivadas explicadas, derivadas para principiantes, aprender derivadas, blog cálculo diferencial, derivadas universitarias",
      },
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
      mathFormulaHelperExtension: "Extensión Chrome Matemáticas",
      social: "Síguenos",
      cols: {
        calculators: {
          title: "Calculadoras",
          links: [
            { label: "Calculadora de Derivadas", href: "/#calculator" },
            { label: "Derivadas Parciales", href: "/calculadora-de-derivadas-parciales" },
            { label: "Regla de la Cadena", href: "/calculadora-regla-de-la-cadena" },
            { label: "Derivadas Implícitas", href: "/calculadora-de-derivadas-implicitas" },
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
            { label: "Preguntas Frecuentes", href: "/#faq" },
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
      relatedBottom: "Artículos relacionados",
      readMore: "Leer más",
      readArticle: "Leer artículo",
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
      title: "Preguntas Frecuentes sobre Derivadas y la Calculadora",
      subtitle:
        "Respuestas claras sobre derivadas con pasos, parciales, implícitas, cálculo diferencial y cómo usar la calculadora de derivadas online gratis.",
      badge: "Centro de Ayuda",
      list: [
        {
          q: "¿Qué es una calculadora de derivadas y para qué sirve?",
          a: "Una calculadora de derivadas es una herramienta que obtiene la derivada de una función de forma automática. Sirve para comprobar tareas, preparar exámenes de cálculo diferencial y entender el procedimiento con explicaciones paso a paso.",
        },
        {
          q: "¿Cómo resolver derivadas online con esta herramienta?",
          a: "Escribe la función en el campo principal (por ejemplo sin(x)*x^2 o ln(x)), elige la variable y pulsa Calcular. Luego revisa las derivadas paso a paso que muestra el motor simbólico.",
        },
        {
          q: "¿La calculadora de derivadas es gratuita?",
          a: "Sí. Es una calculadora matemática gratuita orientada al aprendizaje, accesible desde navegador sin instalar programas.",
        },
        {
          q: "¿Puedo calcular la derivada de sin(x) y otras trigonométricas?",
          a: "Sí. Las derivadas trigonométricas como sin(x), cos(x) y tan(x) están soportadas. La derivada de sin(x) es cos(x); la herramienta aplica las reglas y muestra cada paso.",
        },
        {
          q: "¿Cómo se obtiene la derivada de ln(x)?",
          a: "La derivada de ln(x) es 1/x para x > 0. Si tu expresión combina logaritmos con otras funciones, se aplican la regla de la cadena y las reglas de derivación correspondientes.",
        },
        {
          q: "¿Admite derivadas parciales?",
          a: "Sí, puedes trabajar con derivadas parciales en funciones de varias variables, útil en cálculo multivariable y modelos con más de una incógnita.",
        },
        {
          q: "¿Qué reglas de derivación utiliza la calculadora?",
          a: "Aplica las reglas estándar del cálculo diferencial: potencia, producto, cociente, cadena, y fórmulas de funciones elementales. Consulta nuestra página de reglas para repasar cada una con ejemplos.",
        },
        {
          q: "¿En qué se diferencia de solo ver la respuesta en un libro?",
          a: "Además del resultado final, ves derivadas resueltas con el desarrollo intermedio. Eso ayuda a identificar errores de álgebra y a practicar para exámenes.",
        },
        {
          q: "¿Es adecuada para principiantes en cálculo diferencial?",
          a: "Sí. Combínala con la guía de cómo funciona, los ejemplos resueltos y el blog educativo para ir de conceptos básicos a ejercicios más avanzados.",
        },
        {
          q: "¿Puedo usarla en el móvil para estudiar?",
          a: "Sí. Las derivadas online funcionan en móvil y escritorio; el diseño adapta el teclado matemático y la lectura de pasos en pantallas pequeñas.",
        },
        {
          q: "¿La calculadora sustituye al profesor o al libro de texto?",
          a: "No. Es un apoyo educativo. Para evaluaciones formales, verifica siempre con tu docente y practica también a mano para afianzar el razonamiento.",
        },
        {
          q: "¿Dónde encuentro más ejemplos y artículos?",
          a: "Visita la sección de ejemplos de derivadas, las reglas de derivación y el blog, donde publicamos guías sobre técnicas, errores frecuentes y la regla de la cadena.",
        },
        {
          q: "¿Puedo calcular derivadas implícitas con esta calculadora?",
          a: "Puedes introducir ecuaciones que dependan de x y obtener la derivada de la expresión. Para relaciones implícitas clásicas, revisa el procedimiento paso a paso y contrasta con la guía de cómo funciona y los ejemplos resueltos.",
        },
        {
          q: "¿Qué es una calculadora diferencial y en qué se diferencia?",
          a: "Una calculadora diferencial trabaja con tasas de cambio y derivadas. La nuestra está especializada en derivadas con explicaciones educativas, no solo en mostrar un número final.",
        },
        {
          q: "¿Sirve para derivadas parciales con pasos?",
          a: "Sí, puedes elegir la variable de derivación y trabajar expresiones multivariables básicas. Es útil como apoyo en cálculo multivariable junto con la teoría de tu curso.",
        },
        {
          q: "¿Cómo estudiar derivadas trigonométricas con la herramienta?",
          a: "Practica con sin(x), cos(x) y composiciones como sin(2x). Compara tu resultado manual con las derivadas paso a paso y repasa las reglas en la página de reglas de derivación.",
        },
        {
          q: "¿La calculadora de derivadas online gratis tiene límites diarios?",
          a: "No imponemos un límite estricto de uso educativo. Puedes practicar ejercicios de derivadas las veces que necesites desde el navegador.",
        },
        {
          q: "¿Puedo usarla para ejercicios de derivadas universitarios?",
          a: "Sí, está pensada para nivel universitario introductorio y cursos de cálculo diferencial. Verifica siempre los requisitos de tu profesor sobre herramientas permitidas en exámenes.",
        },
        {
          q: "¿Cómo derivar funciones con regla del producto o del cociente?",
          a: "Escribe el producto o cociente con paréntesis claros. El motor identifica la estructura y aplica la regla correspondiente; el desglose te muestra cada factor derivado.",
        },
        {
          q: "¿Ofrece derivadas explicadas para principiantes?",
          a: "Sí. Cada resultado incluye pasos intermedios en lenguaje claro. Combínalo con las tarjetas educativas de la página de inicio y el blog para reforzar conceptos.",
        },
        {
          q: "¿Es una herramienta matemática online segura para usar en clase?",
          a: "Funciona en HTTPS y no requiere registro. Es una herramienta matemática online orientada al estudio; no sustituye la demostración formal que pida tu docente.",
        },
      ],
    },
    seoCards: {
      title: "Recursos visuales para dominar las derivadas",
      subtitle:
        "Accede rápidamente a guías, ejemplos y reglas con ilustraciones claras. Cada tarjeta enlaza a contenido educativo en español.",
      cards: [
        {
          id: "que-es-derivada",
          title: "¿Qué es una derivada?",
          desc: "Comprende la pendiente instantánea y el significado geométrico de la derivada en una función.",
          link: "Aprende el concepto base →",
          href: "/como-funciona",
          image: "/images/que-es-una-derivada.webp",
          imageAlt:
            "Gráfica educativa que explica qué es una derivada y la pendiente de la tangente",
        },
        {
          id: "como-usar-calculadora",
          title: "Cómo usar la calculadora",
          desc: "Introduce tu expresión con el teclado matemático y obtén el resultado con pasos detallados.",
          link: "Ver tutorial rápido →",
          href: "/como-funciona",
          image: "/images/como-usar-calculadora-de-derivadas.webp",
          imageAlt:
            "Calculadora de derivadas con pasos online y teclado matemático integrado",
        },
        {
          id: "reglas-derivacion",
          title: "Reglas de Derivación",
          desc: "Potencia, producto, cociente y cadena explicadas para aplicar cada regla con seguridad.",
          link: "Estudiar reglas →",
          href: "/reglas",
          image: "/images/reglas-de-derivacion.webp",
          imageAlt:
            "Reglas de derivación matemática: potencia, producto, cociente y regla de la cadena",
        },
        {
          id: "ejemplos-derivadas",
          title: "Ejemplos de Derivadas",
          desc: "Ejercicios resueltos desde polinomios básicos hasta funciones trigonométricas compuestas.",
          link: "Ver galería de ejemplos →",
          href: "/ejemplos",
          image: "/images/ejemplos-de-derivadas-resueltas.webp",
          imageAlt:
            "Ejemplos de derivadas resueltas con procedimiento paso a paso",
        },
        {
          id: "derivadas-parciales",
          title: "Derivadas Parciales",
          desc: "Introducción al cálculo multivariable y derivación respecto a una variable manteniendo las demás fijas.",
          link: "Conceptos avanzados →",
          href: "/reglas",
          image: "/images/derivadas-parciales.webp",
          imageAlt:
            "Calculadora de derivadas parciales y funciones de varias variables",
        },
        {
          id: "formulas-derivadas",
          title: "Fórmulas de Derivadas",
          desc: "Consulta tablas de derivadas y fórmulas trigonométricas para estudiar o verificar resultados.",
          link: "Ver formulario completo →",
          href: "/reglas",
          image: "/images/formulas-de-derivadas.webp",
          imageAlt:
            "Fórmulas de derivadas y tabla de funciones trigonométricas para estudiar",
        },
      ],
    },
    homeInternalLinks: {
      featuredBadge: "Blog educativo",
      featuredTitle: "Guías de derivadas paso a paso",
      featuredLead:
        "Artículos con fórmulas, ejercicios resueltos y enlaces a la calculadora para practicar sin(x), regla de la cadena, derivadas implícitas y más.",
      recentBadge: "Últimas publicaciones",
      recentTitle: "Artículos recientes",
      recentLead:
        "Todas las guías del blog sobre cálculo diferencial, actualizadas y enlazadas desde la página principal.",
      readMore: "Leer guía",
      viewAllBlog: "Ver todo el blog",
    },
    homeLongForm: {
      badge: "Guía completa",
      title: "Guía educativa: calculadora de derivadas y cálculo diferencial",
      lead:
        "Esta guía complementa la calculadora interactiva con explicaciones claras sobre derivadas, tipos de problemas y buenas prácticas de estudio. Todo el contenido está en español y enlaza a recursos internos del sitio.",
      sections: [
        {
          id: "que-es",
          h2: "Qué es una derivada y por qué importa en cálculo diferencial",
          paragraphs: [
            "La derivada de una función describe cómo cambia esa función en un punto: geométricamente, coincide con la pendiente de la recta tangente. En física y economía representa velocidad instantánea, tasas marginales y sensibilidad de un modelo.",
            "Comprender qué es una derivada es el primer paso antes de usar cualquier calculadora de derivadas: la herramienta acelera el cálculo, pero el aprendizaje real ocurre cuando relacionas el resultado con el concepto de límite y tasa de cambio.",
          ],
          relatedLinks: [
            { label: "Concepto y uso de la calculadora", href: "/como-funciona" },
          ],
        },
        {
          id: "como-usar",
          h2: "Cómo usar la calculadora de derivadas con pasos",
          paragraphs: [
            "Escribe la función en el campo principal usando el teclado matemático o el teclado del dispositivo. Usa paréntesis para agrupar términos, el símbolo ^ para potencias y nombres estándar: sin, cos, tan, ln, exp.",
            "Selecciona la variable (habitualmente x), activa la simplificación si lo deseas y pulsa Calcular. Revisa las derivadas paso a paso antes de copiar el resultado: cada línea indica qué regla de derivación se aplicó.",
            "Para funciones compuestas o implícitas, conviene descomponer mentalmente la expresión en capas externa e interna; así entenderás mejor por qué aparece la regla de la cadena en el procedimiento.",
          ],
          relatedLinks: [
            { label: "Tutorial completo", href: "/como-funciona" },
            { label: "Ir a la calculadora", href: "/#calculator" },
          ],
        },
        {
          id: "tipos",
          h2: "Tipos de derivadas que puedes resolver online",
          paragraphs: [
            "En un curso típico de cálculo diferencial encontrarás derivadas de polinomios, funciones racionales, trigonométricas, exponenciales y logarítmicas. Muchas combinan varias reglas en un solo ejercicio.",
            "Las derivadas parciales aparecen cuando la función depende de más de una variable; la calculadora permite elegir respecto a cuál derivar. Las derivadas implícitas surgen cuando la relación entre variables no está despejada explícitamente.",
            "Resolver derivadas online con una herramienta educativa te ayuda a contrastar métodos: ordinarias, parciales básicas y composiciones con cadena, producto o cociente.",
          ],
          relatedLinks: [
            { label: "Reglas de derivación", href: "/reglas" },
            { label: "Derivadas parciales (guía)", href: "/calculadora-de-derivadas-parciales" },
          ],
        },
        {
          id: "beneficios",
          h2: "Beneficios para estudiantes de matemáticas y universidad",
          paragraphs: [
            "Una calculadora de derivadas online gratis reduce el tiempo de verificación: detectas errores de signo o de cadena incompleta al comparar con el desglose automático.",
            "Las derivadas explicadas paso a paso favorecen el estudio activo: puedes pausar en cada transformación y preguntarte si la regla aplicada es coherente con el enunciado.",
            "Es una herramienta matemática online accesible desde móvil, ideal para repasar antes de un parcial o para practicar ejercicios de derivadas sin instalar software pesado.",
          ],
        },
        {
          id: "ejemplos-rapidos",
          h2: "Ejemplos rápidos para practicar",
          paragraphs: [
            "Prueba expresiones sencillas como x^2, sin(x) o ln(x) y observa cómo cambia el procedimiento. Luego avanza a productos (x·e^x), cocientes ((x+1)/(x-2)) y composiciones (sin(x^2)).",
            "Cada ejemplo refuerza un patrón distinto de las reglas de derivación. La galería de ejemplos de derivadas resueltas del sitio amplía esta práctica con enunciados comentados.",
          ],
          relatedLinks: [
            { label: "Galería de ejemplos resueltos", href: "/ejemplos" },
          ],
        },
        {
          id: "online",
          h2: "Por qué usar una calculadora de derivadas online",
          paragraphs: [
            "Una calculadora de derivadas online concentra en un solo lugar el cálculo simbólico, la simplificación algebraica y la presentación ordenada del resultado. A diferencia de hojas de cálculo genéricas, está pensada para notación matemática habitual en bachillerato y universidad: potencias, fracciones, funciones compuestas y constantes con nombre.",
            "Las derivadas online son especialmente útiles cuando el tiempo de estudio es limitado: puedes contrastar un ejercicio en segundos y dedicar el resto del bloque a entender por qué se aplicó cada regla. Eso refuerza el cálculo diferencial de forma activa, no pasiva.",
            "Nuestra plataforma prioriza la claridad en español, sin barreras de idioma ni rutas alternativas que dispersen al estudiante. Todo el recorrido —desde la introducción de la función hasta el resultado— permanece en un flujo coherente.",
          ],
          subsections: [
            {
              h3: "Derivadas online frente a software de escritorio",
              paragraphs: [
                "No necesitas licencias ni instalación. Basta un navegador actualizado para resolver derivadas desde la biblioteca, el aula o casa. La interfaz incorpora teclado matemático para reducir errores de sintaxis al teclear expresiones como (x^2+1)/(x-3).",
              ],
            },
          ],
          relatedLinks: [
            { label: "Cómo funciona la calculadora", href: "/como-funciona" },
          ],
        },
        {
          id: "paso-a-paso",
          h2: "Derivadas paso a paso: método de estudio recomendado",
          paragraphs: [
            "Las derivadas paso a paso son el núcleo pedagógico del sitio. Cada solución desglosa la estructura de la función, nombra la regla empleada y muestra transformaciones intermedias antes del resultado simplificado.",
            "Una rutina efectiva consiste en: (1) intentar el ejercicio a mano, (2) calcular con la herramienta, (3) comparar paso a paso y (4) anotar en qué etapa divergió tu razonamiento. Repetir ese ciclo con varios tipos de funciones acelera el aprendizaje.",
          ],
          subsections: [
            {
              h3: "Polinomios, racionales y potencias",
              paragraphs: [
                "En polinomios se aplica la regla de la potencia término a término. En funciones racionales aparece la regla del cociente; conviene identificar numerador y denominador antes de derivar para no mezclar signos.",
              ],
            },
            {
              h3: "Derivadas matemáticas elementales",
              paragraphs: [
                "Las derivadas matemáticas de funciones estándar (potencias, raíces, exponenciales) comparten tablas que debes reconocer de un vistazo. La calculadora las aplica automáticamente, pero leer el desglose ayuda a memorizar patrones para exámenes sin dispositivo.",
              ],
            },
          ],
          relatedLinks: [
            { label: "Ejemplos de derivadas resueltas", href: "/ejemplos" },
          ],
        },
        {
          id: "trigonometricas",
          h2: "Derivadas trigonométricas: sin(x), cos(x) y más",
          paragraphs: [
            "Las derivadas trigonométricas aparecen en física, ingeniería y análisis de señales. Las más consultadas son la derivada de sin(x), igual a cos(x), y la derivada de cos(x), igual a -sin(x). La tangente y funciones inversas requieren la regla de la cadena cuando el argumento no es solo x.",
            "Si trabajas expresiones como sin(3x) o sin(x^2), la estructura interna determina el factor adicional que muchos estudiantes olvidan. Revisar el procedimiento paso a paso después de calcular evita ese error sistemático.",
            "Para practicar variaciones, combina esta guía con ejercicios de la sección de ejemplos, donde verás funciones trigonométricas mezcladas con polinomios y productos.",
          ],
          relatedLinks: [
            { label: "Aprende la derivada de sin x paso a paso", href: "/blog/derivada-de-sin-x" },
            { label: "Derivada de cos x explicada", href: "/blog/derivada-de-cos-x" },
            { label: "Reglas de derivación", href: "/reglas" },
            { label: "Ejemplos trigonométricos", href: "/ejemplos" },
          ],
        },
        {
          id: "logaritmos",
          h2: "Logaritmos y exponenciales: derivada de ln(x)",
          paragraphs: [
            "La derivada de ln(x) es 1/x cuando x > 0. En expresiones como ln(2x) o ln(x^2+1), entra la regla de la cadena: primero derivas el logaritmo natural como si el argumento fuera u, luego multiplicas por la derivada de u.",
            "Las funciones exponenciales e^x y a^x tienen reglas propias que conviene contrastar con los logaritmos. Confundir ambas familias es uno de los errores más frecuentes en cálculo diferencial introductorio.",
            "Introduce paréntesis al escribir ln(x+1) o e^(2x) en la calculadora para que el motor interprete correctamente el orden de operaciones.",
          ],
        },
        {
          id: "reglas",
          h2: "Reglas de derivación en cálculo diferencial",
          paragraphs: [
            "El dominio de las reglas de derivación —potencia, producto, cociente y cadena— cubre la mayoría de ejercicios de primer curso. Cada regla responde a una estructura algebraica distinta; identificar esa estructura antes de derivar ahorra tiempo y reduce fallos.",
            "La regla de la cadena merece práctica dedicada: aparece siempre que una función esté «dentro» de otra. La regla del producto, cuando hay dos factores que dependen de x, exige disciplina para no derivar solo el primer factor.",
          ],
          subsections: [
            {
              h3: "Cuándo repasar el formulario",
              paragraphs: [
                "Antes de un parcial, repasa la tabla de fórmulas básicas y resuelve tres ejercicios por regla. La página de reglas del sitio agrupa explicaciones y enlaces a ejemplos representativos.",
              ],
            },
          ],
          relatedLinks: [
            { label: "Guía de reglas de derivación", href: "/reglas" },
          ],
        },
        {
          id: "parciales",
          h2: "Derivadas parciales en funciones de varias variables",
          paragraphs: [
            "Las derivadas parciales miden la tasa de cambio respecto a una variable manteniendo las demás fijas. La notación ∂f/∂x o f_x es estándar en libros de cálculo multivariable.",
            "En aplicaciones reales —mapas de calor, elasticidad en economía, gradientes— las derivadas parciales conectan modelos simples con fenómenos multidimensionales. La calculadora ayuda a verificar resultados cuando la algebra se extiende.",
            "Si tu asignatura aún no cubre varias variables, puedes posponer este bloque y centrarte en derivadas ordinarias con los ejemplos básicos.",
          ],
        },
        {
          id: "resueltas",
          h2: "Derivadas resueltas y práctica deliberada",
          paragraphs: [
            "Las derivadas resueltas en la sección de ejemplos muestran enunciados variados: desde monomios hasta composiciones con trigonométricas y logaritmos. El objetivo no es copiar, sino reconocer qué regla se activó en cada línea.",
            "Resolver derivadas online con la herramienta y luego rehacer el mismo ejercicio sin mirar refuerza la memoria procedimental. Alterna dificultad: un ejercicio corto, uno medio y uno con cadena o producto por sesión de estudio.",
          ],
          relatedLinks: [
            { label: "Ver derivadas resueltas", href: "/ejemplos" },
            { label: "Artículos en el blog", href: "/blog" },
          ],
        },
        {
          id: "calculadora-matematica",
          h2: "Calculadora matemática orientada al aprendizaje",
          paragraphs: [
            "Más que una calculadora matemática genérica, este recurso combina motor simbólico, interfaz didáctica y contenido en español. Está pensada para quien busca una calculadora de derivadas con explicaciones, no solo un número final.",
            "Puedes usarla como complemento de clase, para preparar trabajos o para repasar antes de evaluaciones. La transparencia del procedimiento favorece la honestidad académica: entiendes el resultado y puedes explicarlo.",
          ],
        },
        {
          id: "resolver",
          h2: "Cómo resolver derivadas online con buenos resultados",
          paragraphs: [
            "Para resolver derivadas online de forma fiable, verifica la sintaxis: paréntesis equilibrados, operadores explícitos (usa * entre factores), nombres de funciones correctos (sin, cos, ln, exp) y variable de derivación coherente con el enunciado.",
            "Tras obtener el resultado, recorre cada paso y pregúntate qué regla justifica la transición. Si un paso te sorprende, vuelve al tema en reglas o en el blog antes de pasar al siguiente ejercicio.",
            "Mantén un cuaderno de errores típicos —signos, cadena incompleta, olvido de derivar el argumento interno— y revisa esa lista antes de cada práctica.",
          ],
          relatedLinks: [
            { label: "Tutorial: cómo funciona", href: "/como-funciona" },
            { label: "Preguntas frecuentes", href: "/#faq" },
          ],
        },
      ],
      linksTitle: "Explora el sitio",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Cómo funciona", href: "/como-funciona" },
        { label: "Ejemplos", href: "/ejemplos" },
        { label: "Reglas", href: "/reglas" },
        { label: "Blog", href: "/blog" },
        { label: "Derivada de sin x paso a paso", href: "/blog/derivada-de-sin-x" },
        { label: "Derivada de cos x", href: "/blog/derivada-de-cos-x" },
        { label: "Regla de la cadena (ejercicios)", href: "/blog/regla-de-la-cadena-ejercicios" },
        { label: "Derivadas implícitas resueltas", href: "/blog/derivadas-implicitas-paso-a-paso" },
        { label: "Ejemplos de derivadas resueltas", href: "/blog/ejemplos-de-derivadas-resueltas" },
      ],
    },
    aboutPage: {
      title: "Acerca de Calculadora Derivadas",
      subtitle: "Herramienta educativa gratuita para aprender cálculo diferencial.",
      sections: [
        { title: "Nuestra misión", content: "Ofrecemos una calculadora de derivadas paso a paso para estudiantes y docentes que necesitan resultados exactos con explicaciones claras." },
        { title: "Qué ofrecemos", content: "Cálculo simbólico, reglas de derivación, ejemplos resueltos, blog educativo y recursos íntegramente en español." },
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
