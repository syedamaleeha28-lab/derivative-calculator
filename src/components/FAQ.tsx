"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cómo funciona la calculadora de derivadas con pasos de Derivio?",
    a: "Nuestra calculadora de derivadas utiliza un motor matemático simbólico avanzado que procesa tus expresiones matemáticas de forma analítica, tal como lo haría un experto en cálculo. Al introducir una función, el sistema aplica las reglas de derivación (potencia, producto, cadena, etc.) y genera una solución detallada paso a paso. Esto permite a los estudiantes no solo obtener el resultado final, sino también comprender el procedimiento lógico y mejorar su aprendizaje en cálculo diferencial de manera gratuita y online.",
  },
  {
    q: "¿Qué es la regla de la cadena y cómo la resuelve el calculador?",
    a: "La regla de la cadena es fundamental para derivar funciones compuestas, es decir, funciones dentro de otras funciones. Nuestro calculador de regla de la cadena identifica automáticamente las capas externas e internas de la expresión (como en sin(x²)). Primero deriva la función exterior y luego la multiplica por la derivada de la función interior, mostrando todo el proceso con claridad para que entiendas cómo se conectan las diferentes partes de la función durante la diferenciación.",
  },
  {
    q: "¿Puedo resolver derivadas de funciones trigonométricas online?",
    a: "Sí, Derivio soporta todas las funciones trigonométricas principales (seno, coseno, tangente) y sus inversas (arcoseno, arcocoseno, arcotangente). Al usar nuestro buscador de derivadas, verás que las identidades trigonométricas se manejan con precisión simbólica. Por ejemplo, si buscas la derivada de tan(x), el sistema te mostrará que el resultado es sec²(x), incluyendo los pasos intermedios si la función es más compleja o utiliza la regla del cociente.",
  },
  {
    q: "¿Cómo se calculan las derivadas logarítmicas y exponenciales?",
    a: "Las funciones logarítmicas (como ln(x)) y exponenciales (como eˣ) son pilares del cálculo. Nuestra herramienta utiliza las fórmulas estándar: la derivada de ln(x) es 1/x y la de eˣ permanece como eˣ. Para bases distintas, como log₁₀(x) o 2ˣ, aplicamos las reglas de cambio de base y constantes logarítmicas de forma exacta, asegurando que obtengas una respuesta simplificada y matemáticamente rigurosa, ideal para verificar tus ejercicios de clase.",
  },
  {
    q: "¿La calculadora de derivadas paso a paso es gratuita?",
    a: "Absolutamente. Derivio es una plataforma educativa de acceso libre diseñada para democratizar el aprendizaje de las matemáticas. Puedes realizar consultas ilimitadas, ver todos los pasos del procedimiento y acceder a nuestra tabla de derivadas sin costo alguno. Nuestro objetivo es ser el mejor recurso de ayuda en cálculo para estudiantes de preparatoria y universidad que buscan resolver derivadas online con explicaciones de alta calidad.",
  },
  {
    q: "¿Qué variables puedo usar en mis ejercicios de derivadas?",
    a: "Aunque 'x' es la variable por defecto en la mayoría de los problemas de cálculo, nuestra calculadora te permite elegir entre múltiples variables como 'y', 't', 'u' o 'v'. Esto es especialmente útil para problemas de física donde el tiempo (t) es la variable independiente, o para ejercicios de derivación implícita y multivariable donde necesitas diferenciar respecto a una letra específica para obtener la razón de cambio correcta.",
  },
  {
    q: "¿Cómo insertar potencias y raíces en el calculador?",
    a: "Para potencias, utiliza el símbolo '^' (ejemplo: x^3 para x al cubo). Para raíces cuadradas, puedes usar el botón '√' o la función 'sqrt()'. Si necesitas raíces de mayor grado, recuerda que la raíz n-ésima de x se puede escribir como x^(1/n). Nuestro motor matemático interpretará estas expresiones correctamente y aplicará la regla de la potencia generalizada para mostrarte una solución limpia y fácil de seguir.",
  },
  {
    q: "¿Qué diferencia a Derivio de otros solucionadores de cálculo?",
    a: "A diferencia de otros solucionadores que solo dan el resultado numérico, Derivio se enfoca en la educación. Utilizamos un diseño premium que facilita la lectura de fórmulas complejas y generamos pasos explicativos que mencionan explícitamente las reglas aplicadas. Además, nuestra interfaz está optimizada para dispositivos móviles, permitiéndote resolver tus dudas de cálculo diferencial en cualquier lugar con la misma precisión que en una computadora de escritorio.",
  },
  {
    q: "¿Puedo derivar funciones implícitas con esta herramienta?",
    a: "Actualmente, nuestro motor está optimizado para la diferenciación explícita de funciones. Para derivación implícita, te recomendamos despejar la variable dependiente si es posible. No obstante, estamos trabajando constantemente para ampliar nuestras capacidades y añadir soporte completo para derivadas implícitas y derivadas parciales de orden superior en futuras actualizaciones, manteniendo siempre nuestro estándar de 'paso a paso'.",
  },
  {
    q: "¿Cómo ayuda Derivio a prepararse para exámenes de matemáticas?",
    a: "Derivio funciona como un tutor personal disponible 24/7. Al comparar tus propios desarrollos con nuestras soluciones detalladas, puedes identificar exactamente en qué paso cometiste un error, ya sea en la aplicación de la regla del producto o al simplificar términos algebraicos. Esta retroalimentación inmediata es clave para dominar el cálculo y ganar confianza antes de enfrentarte a ejercicios de derivadas reales en un examen.",
  },
  {
    q: "¿Cuál es la diferencia entre derivar e integrar?",
    a: "En el cálculo, la derivación y la integración son operaciones inversas. Mientras que la derivada mide la razón de cambio o la pendiente de una función, la integral mide el área acumulada bajo la curva. Si derivas una función y luego integras el resultado, volverás (a falta de una constante) a la función original. Derivio se especializa en el proceso de derivación paso a paso para ayudarte a entender esta mitad fundamental del Teorema Fundamental del Cálculo.",
  },
  {
    q: "¿Cómo resolver derivadas por definición de límite?",
    a: "Resolver por definición implica usar el límite cuando h tiende a cero de [f(x+h) - f(x)]/h. Aunque es el método más puro y educativo, suele ser laborioso. Nuestra herramienta utiliza reglas rápidas basadas en este principio para darte soluciones instantáneas. Si quieres aprender la demostración, puedes visitar nuestra sección de 'Demonstraciones' donde explicamos paso a paso cómo surgen las fórmulas a partir de esta definición básica.",
  },
  {
    q: "¿Qué es una derivada de segundo orden o derivada sucesiva?",
    a: "Una derivada de segundo orden es simplemente la derivada de la derivada. Si tienes una función de posición, la primera derivada es la velocidad y la segunda es la aceleración. Para calcularla en Derivio, primero obtén la primera derivada y luego introduce ese resultado nuevamente en el calculador para obtener la segunda. Este proceso se puede repetir para hallar derivadas de tercer, cuarto o enésimo orden.",
  },
  {
    q: "¿Cómo manejar constantes y coeficientes al derivar?",
    a: "Una de las reglas más sencillas pero importantes es que la derivada de una constante sola es siempre cero. Sin embargo, si la constante multiplica a una función (como en 5x²), la constante se mantiene y solo se deriva la función (5 * 2x = 10x). Nuestro calculador de derivadas online aplica esta propiedad de linealidad automáticamente, asegurando que los coeficientes se manejen correctamente en expresiones complejas.",
  },
  {
    q: "¿Qué significan los símbolos d/dx y f'(x)?",
    a: "Ambas son notaciones para la derivada. f'(x) es la notación de Lagrange, muy común en libros de texto por su simplicidad. d/dx es la notación de Leibniz, que es muy útil para entender que estamos midiendo un pequeño cambio en 'y' respecto a un pequeño cambio en 'x'. En Derivio usamos ambas para que te familiarices con la terminología académica estándar que verás en tus clases de cálculo diferencial.",
  },
  {
    q: "¿Cómo derivar funciones con valor absoluto?",
    a: "La derivada de |x| es x/|x| (o sgn(x)) para x distinto de cero. En x=0 la derivada no existe porque hay un 'pico' en la gráfica. Al resolver derivadas online de este tipo, es importante considerar el dominio de la función. Nuestra calculadora te proporcionará la expresión analítica válida para los intervalos donde la función es diferenciable, ayudándote a visualizar el comportamiento de la pendiente.",
  },
  {
    q: "¿Puedo usar Derivio en mi tableta o teléfono móvil?",
    a: "Sí, Derivio ha sido diseñado con una arquitectura 'mobile-first'. La interfaz de la calculadora y el teclado matemático se adaptan perfectamente a pantallas táctiles, permitiéndote introducir funciones complejas con facilidad desde tu smartphone. Es el compañero ideal para estudiar en la biblioteca, en el transporte o en cualquier lugar donde necesites ayuda rápida con tus ejercicios de derivadas paso a paso.",
  },
  {
    q: "¿Qué son las reglas de derivación básicas que debo conocer?",
    a: "Las reglas esenciales incluyen la regla de la potencia (bajar el exponente), la regla de la suma (derivar término a término), la regla del producto (u'v + uv') y la regla del cociente. Dominar estas cuatro reglas te permitirá resolver el 90% de los problemas de cálculo diferencial básico. Derivio te muestra cuál de estas reglas está aplicando en cada paso de la solución para que las memorices de forma natural.",
  },
  {
    q: "¿Quién inventó el cálculo y las derivadas?",
    a: "El cálculo fue desarrollado de forma independiente por Isaac Newton y Gottfried Wilhelm Leibniz a finales del siglo XVII. Newton lo usó para resolver problemas de física y astronomía, mientras que Leibniz desarrolló la notación d/dx que seguimos usando hoy por su elegancia. Derivio honra este legado matemático proporcionando una herramienta moderna que hace que este conocimiento histórico sea accesible y fácil de aprender para todos.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // FAQ Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-[#F8F6F2] dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-[0.18em] mb-5">
            <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
            Centro de Ayuda
            <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
          </span>
          <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-4">
            Preguntas <span className="text-secondary dark:text-accent">Frecuentes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-[1.05rem] leading-relaxed">
            Resuelve tus dudas sobre nuestra calculadora de derivadas online y aprende cálculo diferencial paso a paso.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                className={`rounded-2xl border bg-white dark:bg-[#0f172a] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-secondary/30 dark:border-secondary/40 shadow-lg shadow-secondary/5"
                    : "border-slate-200 dark:border-[#1e293b] shadow-sm hover:border-secondary/20 dark:hover:border-secondary/20"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span
                    className={`font-semibold text-[0.97rem] leading-snug transition-colors ${
                      isOpen ? "text-secondary dark:text-accent" : "text-slate-900 dark:text-slate-100"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-secondary text-white rotate-180"
                        : "bg-slate-100 dark:bg-[#1e293b] text-slate-400 dark:text-slate-300"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-6 pt-0 text-slate-600 dark:text-slate-200 leading-relaxed text-[0.93rem]">
                        <div className="h-px bg-slate-100 dark:bg-[#1e293b] mb-4" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
