export const dictionaries = {
  es: {
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
      title1: "Calculadora de Derivadas",
      title2: "con Pasos",
      title3: "para Resolver Online.",
      desc: "Nuestra calculadora de derivadas paso a paso te permite obtener resultados simbólicos exactos y explicaciones detalladas. Deriva funciones trigonométricas, logarítmicas y compuestas de forma gratuita.",
      calcBtn: "Calcular Ahora",
      howBtn: "Cómo funciona",
      trust1: "Precisión simbólica exacta",
      trust2: "Resultado instantáneo",
      trust3: "Explicación paso a paso",
      stats: "Más de 50,000 estudiantes y profesores confían en esta herramienta."
    },
    metadata: {
      home: {
        title: "Calculadora de Derivadas Paso a Paso | Resuelve Online Gratis",
        description: "Usa nuestra calculadora de derivadas online para obtener el resultado con procedimiento detallado. Resuelve derivadas con pasos de funciones trigonométricas, logarítmicas y parciales gratis.",
        keywords: "calculadora de derivadas, calculadora de derivadas con pasos, calculadora de derivadas online, calculadora de derivadas paso a paso, resolver derivadas online, derivadas paso a paso gratis"
      }
    },
    footer: {
      desc: "El motor matemático más avanzado para resolver derivadas con pasos detallados y explicaciones.",
      resources: "Recursos",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      cols: {
        calculators: {
          title: "Calculadoras",
          links: [
            { label: "Calculadora de Derivadas", href: "/#calculator" },
            { label: "Calculadora de Pasos", href: "/how-to-use-derivative-calculator" },
            { label: "Derivadas Parciales", href: "/partial-derivatives" },
            { label: "Reglas de Derivación", href: "/reglas" },
          ]
        },
        learning: {
          title: "Aprendizaje",
          links: [
            { label: "Concepto de Derivada", href: "/what-is-a-derivative" },
            { label: "Regla de la Cadena", href: "/reglas/regla-de-la-cadena" },
            { label: "Formulario de Derivadas", href: "/basic-derivative-formulas" },
            { label: "Ejercicios Resueltos", href: "/derivative-examples" },
          ]
        },
        resources: {
          title: "Recursos",
          links: [
            { label: "Preguntas Frecuentes", href: "/how-it-works#faq" },
            { label: "Blog de Cálculo", href: "/blog" },
            { label: "Política de Privacidad", href: "/politica-de-privacidad" },
            { label: "Términos de Servicio", href: "/terminos-de-servicio" },
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
        sum: "Suma", sub: "Resta", div: "Dividir", mul: "Multiplicar", point: "Punto decimal"
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
    breadcrumbs: {
      home: "Inicio"
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
        { label: "Cómo funciona", href: "/how-it-works" }
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
        { label: "Práctica", href: "/derivative-examples" },
        { label: "Ejemplos Resueltos", href: "/derivative-examples" }
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
        { label: "Formularios", href: "/basic-derivative-formulas" },
        { label: "Tabla de Fórmulas", href: "/basic-derivative-formulas" }
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
        { label: "¿Qué es una derivada?", href: "/what-is-a-derivative" }
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
        { label: "Centro de Ayuda", href: "/how-it-works" },
        { label: "Guía de Uso", href: "/how-to-use-derivative-calculator" }
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
        { label: "Avanzado", href: "/partial-derivatives" },
        { label: "Derivadas Parciales", href: "/partial-derivatives" }
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
      subtitle: "Resuelve tus dudas sobre nuestra calculadora de derivadas online y aprende cálculo diferencial paso a paso.",
      badge: "Centro de Ayuda",
      list: [
        {
          q: "¿Cómo funciona la calculadora de derivadas con pasos de Calculadora Derivadas?",
          a: "Nuestra calculadora de derivadas utiliza un motor matemático simbólico avanzado que procesa tus expresiones matemáticas de forma analítica. Al introducir una función, el sistema aplica las reglas de derivación y genera una solución detallada paso a paso."
        },
        {
          q: "¿La calculadora de derivadas paso a paso es gratuita?",
          a: "Absolutamente. Calculadora Derivadas es una plataforma educativa de acceso libre diseñada para democratizar el aprendizaje de las matemáticas. Puedes realizar consultas ilimitadas de forma gratuita."
        }
      ]
    },
    seoCards: {
      title: "Tu Calculadora de Derivadas Online y Gratuita",
      subtitle: "Nuestra plataforma educativa está diseñada para ayudarte a resolver derivadas con pasos y comprender la lógica matemática detrás de cada función diferencial de forma rápida y sencilla.",
      cards: [
        {
          title: "¿Qué es una derivada?",
          desc: "La derivada representa la tasa de cambio instantánea de una función. Es la pendiente de la recta tangente en un punto específico.",
          link: "Aprende el concepto base →",
          href: "/what-is-a-derivative"
        },
        {
          title: "Cómo usar la calculadora",
          desc: "Simplemente ingresa tu expresión matemática usando nuestro teclado especializado. Obtendrás no solo el resultado final, sino la resolución paso a paso.",
          link: "Ver tutorial rápido →",
          href: "/how-to-use-derivative-calculator"
        },
        {
          title: "Reglas de Derivación",
          desc: "Domina las reglas esenciales: regla de la potencia, regla del producto, cociente y la regla de la cadena.",
          link: "Estudar reglas →",
          href: "/reglas"
        },
        {
          title: "Ejemplos de Derivadas",
          desc: "Explora nuestra biblioteca de ejercicios resueltos. Desde polinomios simples hasta complejas derivadas trigonométricas.",
          link: "Ver galería de ejemplos →",
          href: "/derivative-examples"
        },
        {
          title: "Derivadas Parciales",
          desc: "Avanza hacia el cálculo multivariable. Aprende a mantener variables constantes mientras derivas respecto a otra.",
          link: "Conceptos avanzados →",
          href: "/partial-derivatives"
        },
        {
          title: "Fórmulas de Derivadas",
          desc: "Accede a nuestra tabla de derivadas y fórmulas trigonométricas interactivas.",
          link: "Ver formulario completo →",
          href: "/basic-derivative-formulas"
        }
      ]
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
  },
  en: {
    nav: {
      works: "How it works",
      examples: "Examples",
      rules: "Rules",
      blog: "Blog",
      calcNow: "Calculate Now",
      calculate: "Calculate"
    },
    hero: {
      tag: "Free Academic Tool",
      title1: "Derivative Calculator",
      title2: "with Steps",
      title3: "to Solve Online.",
      desc: "Our step-by-step derivative calculator allows you to get exact symbolic results and detailed explanations. Differentiate trigonometric, logarithmic, and composite functions for free.",
      calcBtn: "Calculate Now",
      howBtn: "How it works",
      trust1: "Exact symbolic precision",
      trust2: "Instant result",
      trust3: "Step-by-step explanation",
      stats: "More than 50,000 students and teachers trust this tool."
    },
    metadata: {
      home: {
        title: "Derivative Calculator Step by Step | Free Online Solver",
        description: "Use our free online derivative calculator to get exact symbolic results and detailed step-by-step explanations.",
        keywords: "derivative calculator, step by step derivative calculator, online derivative calculator, solve derivatives online"
      }
    },
    footer: {
      desc: "The most advanced mathematical engine to solve derivatives with detailed steps and explanations.",
      resources: "Resources",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cols: {
        calculators: {
          title: "Calculators",
          links: [
            { label: "Derivative Calculator", href: "/#calculator" },
            { label: "Step-by-Step Calculator", href: "/how-to-use-derivative-calculator" },
            { label: "Partial Derivatives", href: "/partial-derivatives" },
            { label: "Differentiation Rules", href: "/reglas" },
          ]
        },
        learning: {
          title: "Learning",
          links: [
            { label: "Derivative Concept", href: "/what-is-a-derivative" },
            { label: "Chain Rule", href: "/reglas/regla-de-la-cadena" },
            { label: "Derivatives Formula", href: "/basic-derivative-formulas" },
            { label: "Solved Exercises", href: "/derivative-examples" },
          ]
        },
        resources: {
          title: "Resources",
          links: [
            { label: "Frequently Asked Questions", href: "/how-it-works#faq" },
            { label: "Calculus Blog", href: "/blog" },
            { label: "Privacy Policy", href: "/politica-de-privacidad" },
            { label: "Terms of Service", href: "/terminos-de-servicio" },
          ]
        }
      },
      rights: "All rights reserved.",
      madeWith: "Made with"
    },
    calculator: {
      placeholder: "Ex: sin(x) * x^2",
      calculate: "Calculate Derivative",
      advanced: "Advanced Options",
      variable: "Variable",
      ready: "Ready!",
      error: "Equation error",
      invalidExpr: "Invalid expression. Check the syntax and try again.",
      examples: "Examples",
      simplify: "Simplify",
      result: "Result",
      simplified: "Simplified",
      expanded: "Expanded",
      showSteps: "VIEW STEP-BY-STEP SOLUTION",
      hideSteps: "HIDE STEPS",
      steps: {
        step1: {
          t: "1. Identify the structure",
          d: "Differentiable expression with respect to variable. We identify the applicable rules: power, chain, product, quotient.",
        },
        step2: {
          t: "2. Apply differentiation rules",
          d: "Each term is differentiated according to the corresponding rules and the chain rule is applied where necessary.",
        },
        step3: {
          t: "3. Simplify the result",
          d: "Like terms are combined and the expression is reduced to its minimal form.",
        }
      },
      tips: {
        sin: "Sine", cos: "Cosine", tan: "Tangent", sec: "Secant", csc: "Cosecant", cot: "Cotangent",
        asin: "Arcsine", acos: "Arccosine", atan: "Arctangent",
        sinh: "Sinh", cosh: "Cosh", tanh: "Tanh",
        ln: "Natural log", log: "Base 10 log", exp: "Exponential", power: "Power", root: "Root", pi: "Pi",
        openPar: "Open parenthesis", closePar: "Close parenthesis", delete: "Delete",
        sum: "Sum", sub: "Subtract", div: "Divide", mul: "Multiply", point: "Decimal point"
      }
    },
    popularExamples: {
      badge: "Calculus Exercises",
      title1: "Solved ",
      title2: "Derivative",
      title3: " Exercises",
      subtitle: "Explore solved examples of common derivatives. From simple functions to composite derivatives with the chain rule.",
      categories: {
        constants: "Constants",
        powers: "Powers",
        roots: "Roots",
        exponentials: "Exponentials",
        logarithms: "Logarithms",
        trigonometry: "Trigonometry"
      },
      cta: "Try my own equation",
      seoTitle: "Master Differential Calculus with Derivative Exercises",
      seoCard1Title: "Step-by-Step Derivative Examples",
      seoCard1Desc: "Studying solved derivatives is the most effective way to understand how differentiation rules are applied.",
      seoCard2Title: "How to Solve Derivatives Online",
      seoCard2Desc: "If you need to solve derivatives online with academic precision, Derivative Calculator is your best ally.",
      quote: "Calculus is not about memorizing formulas, but about understanding how things change."
    },
    rules: {
      badge: "Differential Calculus",
      title1: "Fundamental ",
      title2: "Differentiation",
      title3: " Rules",
      subtitle: "Master the essential techniques of calculus. Click on any rule to see step-by-step solved examples.",
      viewMore: "View examples and guide",
      list: {
        power: {
          name: "Power Rule",
          desc: "Applies when x is raised to a constant. The exponent comes down and is reduced by 1."
        },
        product: {
          name: "Product Rule",
          desc: "Used to differentiate the product of two functions. Applies to both factors separately."
        },
        quotient: {
          name: "Quotient Rule",
          desc: "Allows differentiating the division of two functions. The denominator can never be zero."
        },
        chain: {
          name: "Chain Rule",
          desc: "Fundamental for differentiating composite functions. Differentiate the outer function, then the inner one."
        },
        trig: {
          name: "Trigonometric Derivatives",
          desc: "Specific rules for circular functions. Includes sine, cosine, tangent and more."
        }
      }
    },
    stepByStep: {
      badge: "Methodology",
      title: "Step by Step",
      desc: "Our calculator breaks down the full solution so you understand where each number comes from.",
      steps: [
        {
          title: "Original Expression",
          desc: "We start by identifying the polynomial function."
        },
        {
          title: "Apply Sum Rule",
          desc: "We separate the derivative into three simpler parts using the linearity rule."
        },
        {
          title: "Apply Power Rule",
          desc: "We multiply each term by its exponent and subtract 1 from the degree."
        },
        {
          title: "Final Result",
          desc: "We simplify the expression to get the definitive result."
        }
      ]
    },
    graph: {
      badge: "Visual Analysis",
      title: "Visualize the Change",
      desc: "The derivative represents the instantaneous rate of change. Our graphic tool allows you to see the original function and its derivative simultaneously so you understand their geometric and mathematical relationship.",
      original: "Original Function",
      derivative: "Derivative Function"
    },
    blog: {
      badge: "Educational Resources",
      title1: "Calculus ",
      title2: "Blog",
      subtitle: "Articles designed to make learning derivatives an easy and entertaining experience.",
      readMore: "Read article",
      viewAll: "View all",
      recommended: "Recommended Articles",
      posts: [
        {
          title: "How to learn derivatives from scratch",
          slug: "como-aprender-derivadas-desde-cero",
          desc: "A complete guide for beginners who want to understand the concept of derivative without complications.",
          date: "10 May 2026",
          read: "5 min",
          category: "Guide"
        },
        {
          title: "The 5 most common mistakes when differentiating",
          slug: "errores-comunes-al-derivar",
          desc: "Avoid these typical failures in your calculus exams. We analyze the chain rule and the product rule.",
          date: "08 May 2026",
          read: "8 min",
          category: "Tips"
        },
        {
          title: "Understanding the Chain Rule",
          slug: "entendiendo-regla-de-la-cadena",
          desc: "Simple and visual explanation of the most used rule in online derivative calculation.",
          date: "05 May 2026",
          read: "6 min",
          category: "Theory"
        }
      ]
    },
    breadcrumbs: {
      home: "Home"
    },
    article: {
      readTime: "read",
      tableOfContents: "Table of Contents",
      faqs: "Frequently Asked Questions",
      authorPrefix: "Written by",
      authorRole: "Specialist in mathematical education and pedagogical content creator for high school and university students.",
      relatedPosts: "Related Articles",
      recommended: "Recommended Articles",
      viewAll: "View all",
      resources: "Resources",
      tocLabel: "Content",
      usefulTitle: "Was this helpful?",
      usefulDesc: "Calculate any derivative instantly with our online tool.",
      useCalculator: "Use Calculator",
      exampleLabel: "Practical Example"
    },
    howItWorks: {
      title: "How our Derivative Calculator works",
      description: "Complete guide on using Derivative Calculator. Learn to enter functions, interpret steps, and master online differential calculus.",
      date: "May 10, 2026",
      readTime: "6 min",
      category: "Help",
      tags: ["Tutorial", "Guide", "Usage"],
      authorRole: "Educational Technical Support",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "How it works", href: "/how-it-works" }
      ],
      sections: {
        steps: {
          title: "Step-by-step instructions",
          desc: "Using our online derivative calculator is extremely simple.",
          items: [
            { title: "Enter your function", desc: "Write the function you want to differentiate in the main input field." },
            { title: "Select the variable", desc: "By default, the calculator differentiates with respect to 'x'." },
            { title: "Click 'Calculate'", desc: "Press the 'Calculate Derivative' button or press the Enter key." },
            { title: "Check the procedure", desc: "Get the simplified result and click on 'View step-by-step solution'." }
          ]
        },
        functions: {
          title: "Supported Functions and Notation",
          desc: "We support a wide range of mathematical functions.",
          trig: "Trigonometric",
          special: "Special"
        },
        tips: {
          title: "Tips for better results",
          proTip: "Use parentheses to group complex terms.",
          warning: "Our calculator is case-sensitive."
        }
      },
      faqs: [
        { question: "Is it free?", answer: "Yes, Derivative Calculator is a completely free tool for educational purposes." },
        { question: "Can I see the steps?", answer: "Of course! Click on the detailed solution button after calculating." }
      ]
    },
    rulesPage: {
      title: "Differentiation Rules: Complete Guide for Students",
      description: "Master all differentiation rules. From the power rule to the chain rule, with detailed explanations, formulas, and practical step-by-step examples.",
      date: "May 10, 2026",
      readTime: "10 min",
      category: "Education",
      tags: ["Rules", "Calculus", "Derivatives", "Formulas"],
      authorRole: "Mathematics Department",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Learn", href: "/reglas" },
        { label: "Differentiation Rules", href: "/reglas" }
      ],
      sections: {
        importance: {
          title: "Why are differentiation rules important?",
          p1: "Differentiation rules are mathematical shortcuts that allow us to find the rate of change of a function without having to apply the heavy formal definition by limits.",
          p2: "If you are new to this, we recommend starting by understanding what a derivative is before memorizing the formulas."
        },
        catalog: {
          title: "Main Rules Catalog",
          desc: "Click on each rule to see a detailed explanation, the formula, and step-by-step examples:",
          readMore: "Read guide"
        },
        formulas: {
          title: "Key Formulas Summary",
          desc: "Here are the two rules that will solve 80% of your calculus exercises:",
          p1: "For a more extensive list, consult our full formulas table."
        }
      },
      faqs: [
        { question: "Which is the most used rule?", answer: "Undoubtedly the power rule and the chain rule are the most fundamental." },
        { question: "How is a product of three functions differentiated?", answer: "You can differentiate the first two as a single block using the product rule." },
        { question: "What rule should I apply for square roots?", answer: "First convert the root into a fractional exponent (1/2) and then apply the power rule." }
      ]
    },
    examplesPage: {
      title: "Solved Derivative Examples: Practical Step-by-Step Guide",
      description: "Explore a wide variety of solved derivative exercises. Learn step by step with examples of polynomial, trigonometric, and logarithmic functions.",
      date: "May 10, 2026",
      readTime: "8 min",
      category: "Exercises",
      tags: ["Examples", "Practice", "Derivatives", "Calculus"],
      authorRole: "Calculus Teacher",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Practice", href: "/derivative-examples" },
        { label: "Solved Examples", href: "/derivative-examples" }
      ],
      sections: {
        intro: {
          title: "Learning through practical examples",
          p1: "The best way to master differential calculus is by solving various problems.",
          p2: "Before diving into the exercises, make sure you know the fundamental differentiation rules."
        },
        basic: {
          title: "Basic Derivative Examples",
          desc: "We start with elementary functions. These exercises are the basis for more complex problems."
        },
        advanced: {
          title: "Exercises with Special Rules",
          desc: "As functions become more complex, we need tools like the chain rule."
        }
      },
      faqs: [
        { question: "How can I practice more?", answer: "We recommend trying to solve the exercise on your own before seeing the full solution." },
        { question: "What do I do if my result is different?", answer: "Make sure you have simplified the final expression." }
      ]
    },
    formulasPage: {
      title: "Derivative Formulas: Full Table and Operation Rules",
      description: "The definitive derivative form for students. Check all formulas with clear explanations.",
      date: "May 10, 2026",
      readTime: "6 min",
      category: "Resources",
      tags: ["Formulas", "Derivative Table", "Calculus"],
      authorRole: "Derivative Calculator Educator",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Forms", href: "/basic-derivative-formulas" },
        { label: "Formulas Table", href: "/basic-derivative-formulas" }
      ],
      sections: {
        intro: {
          title: "Your Pocket Formula Book",
          p1: "Having a derivative table handy is fundamental during the learning process.",
          p2: "If you need to see how these formulas are applied, check our examples section."
        },
        table: {
          title: "Basic Derivative Table",
          function: "Function f(x)",
          derivative: "Derivative f'(x)",
          description: "Description"
        },
        rules: {
          title: "Fundamental Operation Rules",
          sum: "Sum / Subtraction",
          const: "Constant Multiple"
        }
      },
      faqs: [
        { question: "What is the derivative of a constant?", answer: "The derivative of any constant is always 0." },
        { question: "How is e^x differentiated?", answer: "The function e^x is special because it is its own derivative." }
      ]
    },
    whatIsPage: {
      title: "What is a derivative? Concept, Definition, and Complete Guide",
      description: "Discover what a derivative is in a simple way. We explore its geometric definition as a slope and its application as a rate of change.",
      date: "May 10, 2026",
      readTime: "7 min",
      category: "Fundamentals",
      tags: ["Calculus", "Derivatives", "Mathematics"],
      authorRole: "Derivative Calculator Educator",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Learn", href: "/reglas" },
        { label: "What is a derivative?", href: "/what-is-a-derivative" }
      ],
      sections: {
        intro: {
          title: "Introduction to Differential Calculus",
          p1: "The derivative is one of the most powerful and fundamental concepts in all of mathematics."
        },
        geometry: {
          title: "The Geometric Definition",
          p1: "Visually, the derivative at a point represents the slope of the tangent line to the curve at that point."
        },
        apps: {
          title: "Real Applications",
          economy: "Economy",
          engineering: "Engineering"
        }
      },
      faqs: [
        { question: "What is the difference between derivative and differential?", answer: "The derivative is the rate of change, while the differential is an infinitely small change." },
        { question: "What is a partial derivative?", answer: "It is the derivative with respect to a single variable keeping the others constant." }
      ]
    },
    howToUsePage: {
      title: "How to use the Derivative Calculator: Guide and Syntax",
      description: "Master our step-by-step calculation tool. Learn the correct syntax for trigonometric and logarithmic functions.",
      date: "May 10, 2026",
      readTime: "5 min",
      category: "Tutorial",
      tags: ["Help", "Syntax", "Using Derivative Calculator", "Online Calculus"],
      authorRole: "Derivative Calculator Experts",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Help Center", href: "/how-it-works" },
        { label: "Usage Guide", href: "/how-to-use-derivative-calculator" }
      ],
      sections: {
        steps: {
          title: "Steps to solve your first derivative",
          s1: { t: "Write the function", d: "Use the mathematical keyboard to enter functions." },
          s2: { t: "Verify the preview", d: "You will see a real-time representation." },
          s3: { t: "Click Calculate", d: "Press the main button and get the result." }
        },
        syntax: {
          title: "Supported Syntax and Notation",
          recommended: "Recommended Syntax",
          avoid: "Avoid (Ambiguity)"
        }
      },
      faqs: [
        { question: "Does it work on mobile?", answer: "Yes, the calculator is fully responsive." },
        { question: "Is it free?", answer: "Absolutely, Derivative Calculator is a free educational platform." }
      ]
    },
    partialPage: {
      title: "Partial Derivatives: Complete Multivariable Calculus Guide",
      description: "Learn to solve partial derivatives step by step. Concepts, notation, and geometric interpretation.",
      date: "May 10, 2026",
      readTime: "12 min",
      category: "Advanced",
      tags: ["Multivariable", "Engineering", "AI", "Calculus"],
      authorRole: "Expert in Mathematical Analysis",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Advanced", href: "/partial-derivatives" },
        { label: "Partial Derivatives", href: "/partial-derivatives" }
      ],
      sections: {
        intro: {
          title: "What is a partial derivative?",
          p1: "When we work with functions of several variables, the ordinary derivative is no longer enough."
        },
        notation: {
          title: "Professional Notation",
          p1: "We use the symbol 'del' (∂) to distinguish partial derivatives."
        }
      },
      faqs: [
        { question: "How is it identified?", answer: "It is identified by the symbol ∂ or by subscripts like fx." },
        { question: "What is second order?", answer: "It is differentiating a partial derivative a second time." }
      ]
    },
    faqsPage: {
      title: "Frequently Asked Questions",
      subtitle: "Resolve your doubts about our online derivative calculator and learn differential calculus step by step.",
      badge: "Help Center",
      list: [
        {
          q: "How does the derivative calculator with steps from Derivative Calculator work?",
          a: "Our derivative calculator uses an advanced symbolic mathematical engine that processes your mathematical expressions analytically. When you enter a function, the system applies differentiation rules and generates a detailed step-by-step solution."
        },
        {
          q: "Is the step-by-step derivative calculator free?",
          a: "Absolutely. Derivative Calculator is a free access educational platform designed to democratize mathematical learning. You can perform unlimited queries for free."
        }
      ]
    },
    seoCards: {
      title: "Your Free Online Derivative Calculator",
      subtitle: "Our educational platform is designed to help you solve derivatives with steps and understand the mathematical logic behind each differential function quickly and easily.",
      cards: [
        {
          title: "What is a derivative?",
          desc: "The derivative represents the instantaneous rate of change of a function. It is the slope of the tangent line at a specific point.",
          link: "Learn base concept →",
          href: "/what-is-a-derivative"
        },
        {
          title: "How to use the calculator",
          desc: "Simply enter your mathematical expression using our specialized keyboard. You will get not only the final result but the step-by-step resolution.",
          link: "See quick tutorial →",
          href: "/how-to-use-derivative-calculator"
        },
        {
          title: "Differentiation Rules",
          desc: "Master the essential rules: power rule, product rule, quotient, and the chain rule.",
          link: "Study rules →",
          href: "/reglas"
        },
        {
          title: "Derivative Examples",
          desc: "Explore our library of solved exercises. From simple polynomials to complex trigonometric derivatives.",
          link: "See examples gallery →",
          href: "/derivative-examples"
        },
        {
          title: "Partial Derivatives",
          desc: "Advance toward multivariable calculus. Learn to keep variables constant while differentiating with respect to another.",
          link: "Advanced concepts →",
          href: "/partial-derivatives"
        },
        {
          title: "Derivative Formulas",
          desc: "Access our interactive derivative table and trigonometric formulas.",
          link: "See full form →",
          href: "/basic-derivative-formulas"
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Information about data handling and compliance.",
      sections: [
        { title: "1. Introduction", content: "At Derivative Calculator, we value your privacy. This policy describes how we handle information when you use our calculator and resources." },
        { title: "2. Information we collect", content: "We are a free tool. We do not require registration. We collect anonymous technical data to improve performance." },
        { title: "3. Use of Cookies", content: "We use cookies to analyze traffic and personalize content through Google AdSense." }
      ],
      back: "Back to Home"
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Legal and educational information.",
      sections: [
        { title: "1. Use of the Service", content: "You agree to use this platform for educational purposes and responsibly." },
        { title: "2. Educational Disclaimer", content: "While we strive for accuracy, we do not guarantee that results are error-free. Always verify for critical purposes." },
        { title: "3. Intellectual Property", content: "The design and algorithms are property of Derivative Calculator." }
      ],
      accept: "Accept and Go to Home"
    }
  },
  pt: {
    nav: {
      works: "Como funciona",
      examples: "Exemplos",
      rules: "Regras",
      blog: "Blog",
      calcNow: "Calcular Agora",
      calculate: "Calcular"
    },
    hero: {
      tag: "Ferramenta Acadêmica Gratuita",
      title1: "Calculadora de Derivadas",
      title2: "com Passos",
      title3: "para Resolver Online.",
      desc: "Nossa calculadora de derivadas passo a passo permite obter resultados simbólicos exatos e explicações detalhadas. Derive funções trigonométricas, logarítmicas e compostas gratuitamente.",
      calcBtn: "Calcular Agora",
      howBtn: "Como funciona",
      trust1: "Precisão simbólica exata",
      trust2: "Resultado instantâneo",
      trust3: "Explicação passo a passo",
      stats: "Mais de 50.000 estudantes e professores confiam nesta ferramenta."
    },
    metadata: {
      home: {
        title: "Calculadora de Derivadas Passo a Passo | Resolver Online Grátis",
        description: "Use nossa calculadora de derivadas online gratuita para obter resultados simbólicos exatos e explicações passo a passo detalhadas.",
        keywords: "calculadora de derivadas, calculadora de derivadas passo a passo, calculadora de derivadas online, resolver derivadas online"
      }
    },
    footer: {
      desc: "O motor matemático mais avançado para resolver derivadas com passos detalhados e explicações.",
      resources: "Recursos",
      legal: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cols: {
        calculators: {
          title: "Calculadoras",
          links: [
            { label: "Calculadora de Derivadas", href: "/#calculator" },
            { label: "Calculadora Passo a Passo", href: "/how-to-use-derivative-calculator" },
            { label: "Derivadas Parciais", href: "/partial-derivatives" },
            { label: "Regras de Derivação", href: "/reglas" },
          ]
        },
        learning: {
          title: "Aprendizagem",
          links: [
            { label: "Conceito de Derivada", href: "/what-is-a-derivative" },
            { label: "Regra da Cadeia", href: "/reglas/regla-de-la-cadena" },
            { label: "Formulário de Derivadas", href: "/basic-derivative-formulas" },
            { label: "Exercícios Resolvidos", href: "/derivative-examples" },
          ]
        },
        resources: {
          title: "Recursos",
          links: [
            { label: "Perguntas Frequentes", href: "/how-it-works#faq" },
            { label: "Blog de Cálculo", href: "/blog" },
            { label: "Política de Privacidade", href: "/politica-de-privacidad" },
            { label: "Termos de Serviço", href: "/terminos-de-servicio" },
          ]
        }
      },
      rights: "Todos os direitos reservados.",
      madeWith: "Feito com"
    },
    calculator: {
      placeholder: "Ex: sin(x) * x^2",
      calculate: "Calcular Derivada",
      advanced: "Opções Avançadas",
      variable: "Variável",
      ready: "Pronto!",
      error: "Erro na equação",
      invalidExpr: "Expressão inválida. Verifique a sintaxe e tente novamente.",
      examples: "Exemplos",
      simplify: "Simplificar",
      result: "Resultado",
      simplified: "Simplificado",
      expanded: "Expandido",
      showSteps: "VER SOLUÇÃO PASSO A PASSO",
      hideSteps: "OCULTAR PASSOS",
      steps: {
        step1: {
          t: "1. Identificar a estrutura",
          d: "Expressão diferenciável em relação à variável. Identificamos as regras aplicáveis: potência, cadeia, produto, quociente.",
        },
        step2: {
          t: "2. Aplicar regras de derivação",
          d: "Cada termo é diferenciado de acordo com as regras correspondentes e a regra da cadeia é aplicada onde necessário.",
        },
        step3: {
          t: "3. Simplificar o resultado",
          d: "Termos semelhantes são combinados e a expressão é reduzida à sua forma mínima.",
        }
      },
      tips: {
        sin: "Seno", cos: "Cosseno", tan: "Tangente", sec: "Secante", csc: "Cossecante", cot: "Cotangente",
        asin: "Arco-seno", acos: "Arco-cosseno", atan: "Arco-tangente",
        sinh: "Seno hip.", cosh: "Cosseno hip.", tanh: "Tan hip.",
        ln: "Log. natural", log: "Log. base 10", exp: "Exponencial", power: "Potência", root: "Raiz", pi: "Pi",
        openPar: "Abrir parênteses", closePar: "Fechar parênteses", delete: "Apagar",
        sum: "Soma", sub: "Subtração", div: "Dividir", mul: "Multiplicar", point: "Ponto decimal"
      }
    },
    popularExamples: {
      badge: "Exercícios de Cálculo",
      title1: "Exercícios de ",
      title2: "Derivadas",
      title3: " Resolvidos",
      subtitle: "Explore exemplos resolvidos de derivadas comuns. Desde funções simples até derivadas compostas com a regra da cadeia.",
      categories: {
        constants: "Constantes",
        powers: "Potências",
        roots: "Raízes",
        exponentials: "Exponenciais",
        logarithms: "Logaritmos",
        trigonometry: "Trigonometria"
      },
      cta: "Testar minha própria equação",
      seoTitle: "Domine o Cálculo Diferencial com Exercícios de Derivadas",
      seoCard1Title: "Exemplos de Derivadas Passo a Passo",
      seoCard1Desc: "Estudar derivadas resolvidas é a forma mais eficaz de entender como as regras de derivação são aplicadas.",
      seoCard2Title: "Como Resolver Derivadas Online",
      seoCard2Desc: "Se você precisa resolver derivadas online com precisão acadêmica, Calculadora Derivadas é seu melhor aliado.",
      quote: "O cálculo não se trata de memorizar fórmulas, mas de entender como as coisas mudam."
    },
    rules: {
      badge: "Cálculo Diferencial",
      title1: "Regras de ",
      title2: "Derivação",
      title3: " Fundamentais",
      subtitle: "Domine as técnicas essenciais do cálculo. Clique em qualquer regra para ver exemplos resolvidos passo a passo.",
      viewMore: "Ver exemplos e guia",
      list: {
        power: {
          name: "Regra da Potência",
          desc: "Aplica-se quando x é elevado a uma constante. O expoente desce e é reduzido em 1."
        },
        product: {
          name: "Regra do Produto",
          desc: "Usada para derivar o produto de duas funções. Aplica-se a ambos os fatores separadamente."
        },
        quotient: {
          name: "Regra do Quociente",
          desc: "Permite derivar a divisão de duas funções. O denominador nunca pode ser zero."
        },
        chain: {
          name: "Regra da Cadeia",
          desc: "Fundamental para derivar funções compostas. Deriva a função exterior, depois a interior."
        },
        trig: {
          name: "Derivadas Trigonométricas",
          desc: "Regras específicas para funções circulares. Inclui seno, cosseno, tangente e mais."
        }
      }
    },
    stepByStep: {
      badge: "Metodologia",
      title: "Passo a Passo",
      desc: "Nossa calculadora detalha a solução completa para que você entenda de onde vem cada número.",
      steps: [
        {
          title: "Expressão Original",
          desc: "Começamos identificando a função polinomial."
        },
        {
          title: "Aplicar Regra da Soma",
          desc: "Separamos a derivada em três partes mais simples usando a regra da linearidade."
        },
        {
          title: "Aplicar Regra da Potência",
          desc: "Multiplicamos cada termo pelo seu expoente e subtraímos 1 do grau."
        },
        {
          title: "Resultado Final",
          desc: "Simplificamos a expressão para obter o resultado definitivo."
        }
      ]
    },
    graph: {
      badge: "Análise Visual",
      title: "Visualize a Mudança",
      desc: "A derivada representa a taxa de variação instantânea. Nossa ferramenta gráfica permite ver simultaneamente a função original e sua derivada para que você compreenda sua relação geométrica e matemática.",
      original: "Função Original",
      derivative: "Função Derivada"
    },
    blog: {
      badge: "Recursos Educativos",
      title1: "Blog de ",
      title2: "Cálculo",
      subtitle: "Artigos criados para que aprender derivadas seja uma experiência fácil e divertida.",
      readMore: "Ler artigo",
      viewAll: "Ver todos",
      recommended: "Artigos Recomendados",
      posts: [
        {
          title: "Como aprender derivadas do zero",
          slug: "como-aprender-derivadas-desde-cero",
          desc: "Um guia completo para iniciantes que querem entender o conceito de derivada sem complicações.",
          date: "10 Mai 2026",
          read: "5 min",
          category: "Guia"
        },
        {
          title: "Os 5 erros mais comuns ao derivar",
          slug: "errores-comunes-al-derivar",
          desc: "Evite estas falhas típicas em seus exames de cálculo. Analisamos a regra da cadeia e do produto.",
          date: "08 Mai 2026",
          read: "8 min",
          category: "Conselhos"
        },
        {
          title: "Entendendo a Regra da Cadeia",
          slug: "entendiendo-regla-de-la-cadena",
          desc: "Explicação visual e simples da regra mais utilizada no cálculo de derivadas online.",
          date: "05 Mai 2026",
          read: "6 min",
          category: "Teoria"
        }
      ]
    },
    breadcrumbs: {
      home: "Início"
    },
    article: {
      readTime: "de leitura",
      tableOfContents: "Tabela de Conteúdos",
      faqs: "Perguntas Frequentes",
      authorPrefix: "Escrito por",
      authorRole: "Especialista em educação matemática e criador de conteúdo pedagógico para estudantes de ensino médio e universitários.",
      relatedPosts: "Artigos Relacionados",
      recommended: "Artigos Recomendados",
      viewAll: "Ver todos",
      resources: "Recursos",
      tocLabel: "Conteúdo",
      usefulTitle: "Isso te ajudou?",
      usefulDesc: "Calcule qualquer derivada instantaneamente com nossa ferramenta online.",
      useCalculator: "Usar Calculadora",
      exampleLabel: "Exemplo Prático"
    },
    howItWorks: {
      title: "Como funciona nossa Calculadora de Derivadas",
      description: "Guia completo sobre o uso da Calculadora Derivadas. Aprenda a inserir funções, interpretar os passos e dominar o cálculo diferencial online.",
      date: "10 de Maio, 2026",
      readTime: "6 min",
      category: "Ajuda",
      tags: ["Tutorial", "Guia", "Uso"],
      authorRole: "Suporte Técnico Educativo",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Como funciona", href: "/how-it-works" }
      ],
      sections: {
        steps: {
          title: "Instruções passo a passo",
          desc: "Usar nossa calculadora de derivadas online é extremamente simples.",
          items: [
            { title: "Insira sua função", desc: "Escreva a função que deseja derivar no campo de entrada principal." },
            { title: "Selecione a variável", desc: "Por padrão, a calculadora deriva em relação a 'x'." },
            { title: "Clique em 'Calcular'", desc: "Pressione o botão 'Calcular Derivada' ou a tecla Enter." },
            { title: "Verifique o procedimento", desc: "Obtenha o resultado simplificado e clique em 'Ver solução passo a passo'." }
          ]
        },
        functions: {
          title: "Funções Suportadas e Notação",
          desc: "Suportamos uma ampla gama de funções matemáticas.",
          trig: "Trigonométricas",
          special: "Especiais"
        },
        tips: {
          title: "Conselhos para melhores resultados",
          proTip: "Use parênteses para agrupar termos complexos.",
          warning: "Nossa calculadora diferencia minúsculas de maiúsculas."
        }
      },
      faqs: [
        { question: "É grátis?", answer: "Sim, Calculadora Derivadas é uma ferramenta totalmente gratuita para fins educacionais." },
        { question: "Posso ver os passos?", answer: "Com certeza! Clique no botão de solução detalhada após calcular." }
      ]
    },
    rulesPage: {
      title: "Regras de Derivação: Guia Completo para Estudantes",
      description: "Domine todas as regras de diferenciação. Da regra da potência à cadeia, com explicações detalhadas, fórmulas e exemplos práticos passo a passo.",
      date: "10 de Maio, 2026",
      readTime: "10 min",
      category: "Educação",
      tags: ["Regras", "Cálculo", "Derivadas", "Fórmulas"],
      authorRole: "Departamento de Matemática",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "Regras de Derivação", href: "/reglas" }
      ],
      sections: {
        importance: {
          title: "Por que as regras de derivação são importantes?",
          p1: "As regras de derivação são atalhos matemáticos que nos permitem encontrar a taxa de variação de uma função sem ter que aplicar a pesada definição formal por limites.",
          p2: "Se você é novo nisso, recomendamos começar entendendo o que é uma derivada antes de memorizar as fórmulas."
        },
        catalog: {
          title: "Catálogo de Regras Principais",
          desc: "Clique em cada regra para ver uma explicação detalhada, a fórmula e exemplos passo a passo:",
          readMore: "Ler guia"
        },
        formulas: {
          title: "Resumo de Fórmulas Chave",
          desc: "Aqui estão as duas regras que resolverão 80% dos seus exercícios de cálculo:",
          p1: "Para uma lista mais extensa, consulte nossa tabela de fórmulas completa."
        }
      },
      faqs: [
        { question: "Qual é a regra mais utilizada?", answer: "Sem dúvida a regra da potência e a regra da cadeia são as mais fundamentais." },
        { question: "Como se deriva um produto de três funções?", answer: "Você pode derivar as duas primeiras como um único bloco usando a regra do produto." },
        { question: "Que regra devo aplicar para raízes quadradas?", answer: "Primeiro converta a raiz em um expoente fracionário (1/2) e depois aplique a regra da potência." }
      ]
    },
    examplesPage: {
      title: "Exemplos de Derivadas Resolvidos: Guia Prático Passo a Passo",
      description: "Explore uma ampla variedade de exercícios de derivadas resolvidos. Aprenda passo a passo com exemplos de funções polinomiais, trigonométricas e logarítmicas.",
      date: "10 de Maio, 2026",
      readTime: "8 min",
      category: "Exercícios",
      tags: ["Exemplos", "Prática", "Derivadas", "Cálculo"],
      authorRole: "Professor de Cálculo",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Prática", href: "/derivative-examples" },
        { label: "Exemplos Resolvidos", href: "/derivative-examples" }
      ],
      sections: {
        intro: {
          title: "Aprender através de exemplos práticos",
          p1: "A melhor forma de dominar o cálculo diferencial é resolvendo problemas variados.",
          p2: "Antes de mergulhar nos exercícios, certifique-se de conhecer as regras de derivação fundamentais."
        },
        basic: {
          title: "Exemplos de Derivadas Básicas",
          desc: "Começamos com as funções elementares. Estes exercícios são a base para problemas mais complexos."
        },
        advanced: {
          title: "Exercícios com Regras Especiais",
          desc: "À medida que as funções se tornam mais complexas, precisamos de ferramentas como a regra da cadeia."
        }
      },
      faqs: [
        { question: "Como posso praticar mais?", answer: "Recomendamos tentar resolver o exercício por conta própria antes de ver a solução completa." },
        { question: "O que eu faço se meu resultado for diferente?", answer: "Certifique-se de ter simplificado a expressão final." }
      ]
    },
    formulasPage: {
      title: "Fórmulas de Derivadas: Tabela Completa e Regras de Operação",
      description: "O formulário definitivo de derivadas para estudantes. Consulte todas as fórmulas com explicações claras.",
      date: "10 de Maio, 2026",
      readTime: "6 min",
      category: "Recursos",
      tags: ["Fórmulas", "Tabela de Derivadas", "Cálculo"],
      authorRole: "Educador da Calculadora Derivadas",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Formulários", href: "/basic-derivative-formulas" },
        { label: "Tabela de Fórmulas", href: "/basic-derivative-formulas" }
      ],
      sections: {
        intro: {
          title: "Seu Formulário de Bolso",
          p1: "Ter uma tabela de derivadas em mãos é fundamental durante o processo de aprendizagem.",
          p2: "Se precisar ver como essas fórmulas são aplicadas, consulte nossa seção de exemplos."
        },
        table: {
          title: "Tabela de Derivadas Básicas",
          function: "Função f(x)",
          derivative: "Derivada f'(x)",
          description: "Descrição"
        },
        rules: {
          title: "Regras de Operação Fundamentais",
          sum: "Soma / Subtração",
          const: "Múltiplo Constante"
        }
      },
      faqs: [
        { question: "Qual é a derivada de uma constante?", answer: "A derivada de qualquer constante é sempre 0." },
        { question: "Como se deriva e^x?", answer: "A função e^x é especial porque é sua própria derivada." }
      ]
    },
    whatIsPage: {
      title: "O que é uma derivada? Conceito, Definição e Guia Completo",
      description: "Descubra o que é uma derivada de forma simples. Exploramos sua definição geométrica como inclinação e sua aplicação como taxa de variação.",
      date: "10 de Maio, 2026",
      readTime: "7 min",
      category: "Fundamentos",
      tags: ["Cálculo", "Derivadas", "Matemática"],
      authorRole: "Educador da Calculadora Derivadas",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "O que é uma derivada?", href: "/what-is-a-derivative" }
      ],
      sections: {
        intro: {
          title: "Introdução ao Cálculo Diferencial",
          p1: "A derivada é um dos conceitos mais poderosos e fundamentais de toda a matemática."
        },
        geometry: {
          title: "A Definição Geométrica",
          p1: "Visualmente, a derivada em um ponto representa a inclinação da reta tangente à curva naquele ponto."
        },
        apps: {
          title: "Aplicações Reais",
          economy: "Economia",
          engineering: "Engenharia"
        }
      },
      faqs: [
        { question: "Qual é a diferença entre derivada e diferencial?", answer: "A derivada é a taxa de variação, enquanto a diferencial é uma mudança infinitamente pequena." },
        { question: "O que é uma derivada parcial?", answer: "É a derivada em relação a uma única variável, mantendo as outras constantes." }
      ]
    },
    howToUsePage: {
      title: "Como usar a Calculadora de Derivadas: Guia e Sintaxe",
      description: "Domine nossa ferramenta de cálculo passo a passo. Aprenda a sintaxe correta para funções trigonométricas e logarítmicas.",
      date: "10 de Maio, 2026",
      readTime: "5 min",
      category: "Tutorial",
      tags: ["Ajuda", "Sintaxe", "Uso da Calculadora Derivadas", "Cálculo Online"],
      authorRole: "Especialistas da Calculadora Derivadas",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Central de Ajuda", href: "/how-it-works" },
        { label: "Guia de Uso", href: "/how-to-use-derivative-calculator" }
      ],
      sections: {
        steps: {
          title: "Passos para resolver sua primeira derivada",
          s1: { t: "Escreva a função", d: "Use o teclado matemático para inserir funções." },
          s2: { t: "Verifique a pré-visualização", d: "Você verá uma representação em tempo real." },
          s3: { t: "Clique em Calcular", d: "Pressione o botão principal e obtenha o resultado." }
        },
        syntax: {
          title: "Sintaxe e Notação Suportada",
          recommended: "Sintaxe Recomendada",
          avoid: "Evitar (Ambiguidade)"
        }
      },
      faqs: [
        { question: "Funciona em celulares?", answer: "Sim, a calculadora é totalmente responsiva." },
        { question: "É gratuito?", answer: "Absolutamente, Calculadora Derivadas é uma plataforma educativa gratuita." }
      ]
    },
    partialPage: {
      title: "Derivadas Parciais: Guia Completo de Cálculo Multivariável",
      description: "Aprenda a resolver derivadas parciais passo a passo. Conceitos, notação e interpretação geométrica.",
      date: "10 de Maio, 2026",
      readTime: "12 min",
      category: "Avançado",
      tags: ["Multivariável", "Engenharia", "IA", "Cálculo"],
      authorRole: "Especialista em Análise Matemática",
      breadcrumbs: [
        { label: "Início", href: "/" },
        { label: "Avançado", href: "/partial-derivatives" },
        { label: "Derivadas Parciais", href: "/partial-derivatives" }
      ],
      sections: {
        intro: {
          title: "O que é uma derivada parcial?",
          p1: "Quando trabalhamos com funções de várias variáveis, a derivada ordinária já não é suficiente."
        },
        notation: {
          title: "Notação Profissional",
          p1: "Usamos o símbolo 'del' (∂) para distinguir as derivadas parciais."
        }
      },
      faqs: [
        { question: "Como se identifica?", answer: "Identifica-se pelo símbolo ∂ ou por subscritos como fx." },
        { question: "O que é segunda ordem?", answer: "É derivar uma derivada parcial pela segunda vez." }
      ]
    },
    faqsPage: {
      title: "Perguntas Frequentes",
      subtitle: "Resolva suas dúvidas sobre nossa calculadora de derivadas online e aprenda cálculo diferencial passo a passo.",
      badge: "Central de Ajuda",
      list: [
        {
          q: "Como funciona a calculadora de derivadas com passos da Calculadora Derivadas?",
          a: "Nossa calculadora de derivadas utiliza um motor matemático simbólico avançado que processa suas expressões matemáticas de forma analítica. Ao inserir uma função, o sistema aplica as regras de derivação e gera uma solução detalhada passo a passo."
        },
        {
          q: "A calculadora de derivadas passo a passo é gratuita?",
          a: "Absolutamente. Calculadora Derivadas é uma plataforma educativa de acesso livre projetada para democratizar o aprendizado da matemática. Você pode realizar consultas ilimitadas gratuitamente."
        }
      ]
    },
    seoCards: {
      title: "Sua Calculadora de Derivadas Online e Gratuita",
      subtitle: "Nossa plataforma educativa foi projetada para ajudá-lo a resolver derivadas com passos e compreender a lógica matemática por trás de cada função diferencial de forma rápida e simples.",
      cards: [
        {
          title: "O que é uma derivada?",
          desc: "A derivada representa a taxa de variação instantânea de uma função. É a inclinação da reta tangente em um ponto específico.",
          link: "Aprenda o conceito base →",
          href: "/what-is-a-derivative"
        },
        {
          title: "Como usar a calculadora",
          desc: "Basta inserir sua expressão matemática usando nosso teclado especializado. Você obterá não apenas o resultado final, mas a resolução passo a passo.",
          link: "Ver tutorial rápido →",
          href: "/how-to-use-derivative-calculator"
        },
        {
          title: "Regras de Derivação",
          desc: "Domine as regras essenciais: regra da potência, regra do produto, quociente e a regra da cadeia.",
          link: "Estudar regras →",
          href: "/reglas"
        },
        {
          title: "Exemplos de Derivadas",
          desc: "Explore nossa biblioteca de exercícios resolvidos. Desde polinômios simples até complexas derivadas trigonométricas.",
          link: "Ver galeria de exemplos →",
          href: "/derivative-examples"
        },
        {
          title: "Derivadas Parciais",
          desc: "Avance para o cálculo multivariável. Aprenda a manter variáveis constantes enquanto deriva em relação a outra.",
          link: "Conceitos avançados →",
          href: "/partial-derivatives"
        },
        {
          title: "Fórmulas de Derivadas",
          desc: "Acesse nossa tabela de derivadas e fórmulas trigonométricas interativas.",
          link: "Ver formulário completo →",
          href: "/basic-derivative-formulas"
        }
      ]
    },
    privacy: {
      title: "Política de Privacidade",
      subtitle: "Informações sobre o tratamento de dados e conformidade.",
      sections: [
        { title: "1. Introdução", content: "Na Calculadora Derivadas, valorizamos sua privacidade. Esta política descreve como tratamos as informações quando você usa nossa calculadora e recursos." },
        { title: "2. Informações que Coletamos", content: "Somos uma ferramenta gratuita. Não exigimos registro. Coletamos dados técnicos anônimos para melhorar o desempenho." },
        { title: "3. Uso de Cookies", content: "Usamos cookies para analisar o tráfego e personalizar o conteúdo através do Google AdSense." }
      ],
      back: "Voltar ao Início"
    },
    terms: {
      title: "Termos de Serviço",
      subtitle: "Informações legais e educativas.",
      sections: [
        { title: "1. Uso do Serviço", content: "Você concorda em usar esta plataforma para fins educacionais e de forma responsável." },
        { title: "2. Isenção de Responsabilidade Educacional", content: "Embora busquemos precisão, não garantimos que os resultados estejam livres de erros. Verifique sempre para fins críticos." },
        { title: "3. Propriedade Intelectual", content: "O design e os algoritmos são propriedade da Calculadora Derivadas." }
      ],
      accept: "Aceitar e Ir ao Início"
    }
  }
} as const;

export type Lang = keyof typeof dictionaries;
