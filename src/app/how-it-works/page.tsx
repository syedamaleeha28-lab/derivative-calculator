import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo funciona nuestra Calculadora de Derivadas | Guía de Uso",
  description: "Guía completa sobre el uso de Derivio. Aprende a ingresar funciones, interpretar los pasos y dominar el cálculo diferencial online.",
};

export default function HowItWorks() {
  const content = (
    <div className="space-y-16">
      {/* Step by Step */}
      <section>
        <h2 id="instrucciones">Instrucciones paso a paso</h2>
        <p className="mb-8">
          Usar nuestra <strong>calculadora de derivadas online</strong> es sumamente sencillo. Hemos diseñado la interfaz para que sea intuitiva tanto para estudiantes principiantes como para usuarios avanzados.
        </p>
        <figure className="mb-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/interfaz-calculadora-matematica.webp"
              alt="Ilustración de la interfaz de una calculadora de derivadas en línea con campo de función, botón Calcular y resultado en tonos violeta y oscuro."
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
        <div className="flex flex-col gap-8">
          {[
            {
              title: "Ingresa tu función",
              desc: "Escribe la función que deseas derivar en el campo de entrada principal. Puedes usar el teclado físico o los botones de la calculadora virtual diseñada especialmente para símbolos matemáticos."
            },
            {
              title: "Selecciona la variable",
              desc: "Por defecto, la calculadora deriva respecto a 'x'. Si tu función usa otra variable como 't' o 'u', puedes cambiarla fácilmente en el menú de Opciones."
            },
            {
              title: "Haz clic en 'Calcular'",
              desc: "Presiona el botón 'Calcular Derivada' o pulsa la tecla Enter. Nuestro motor simbólico procesará la expresión instantáneamente."
            },
            {
              title: "Revisa el procedimiento",
              desc: "Obtén el resultado simplificado y haz clic en 'Ver solución paso a paso' para desplegar la explicación detallada de cada regla aplicada."
            }
          ].map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-bold shadow-lg shadow-secondary/20">
                {i + 1}
              </div>
              <div>
                <h3 className="text-[1.2rem] font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notation */}
      <section>
        <h2 id="funciones">Funciones Soportadas y Notación</h2>
        <p className="mb-6">
          Soportamos una amplia gama de funciones matemáticas, desde polinomios básicos hasta funciones trascendentes complejas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">Trigonométricas</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600 dark:text-slate-400">
              <li className="flex justify-between"><span>Seno:</span> <span className="text-slate-900 dark:text-white font-bold">sin(x)</span></li>
              <li className="flex justify-between"><span>Coseno:</span> <span className="text-slate-900 dark:text-white font-bold">cos(x)</span></li>
              <li className="flex justify-between"><span>Tangente:</span> <span className="text-slate-900 dark:text-white font-bold">tan(x)</span></li>
              <li className="flex justify-between"><span>Arcoseno:</span> <span className="text-slate-900 dark:text-white font-bold">asin(x)</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">Especiales</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600 dark:text-slate-400">
              <li className="flex justify-between"><span>Log. Natural:</span> <span className="text-slate-900 dark:text-white font-bold">ln(x)</span></li>
              <li className="flex justify-between"><span>Exponencial:</span> <span className="text-slate-900 dark:text-white font-bold">e^(x)</span></li>
              <li className="flex justify-between"><span>Raíz:</span> <span className="text-slate-900 dark:text-white font-bold">sqrt(x)</span></li>
              <li className="flex justify-between"><span>Potencia:</span> <span className="text-slate-900 dark:text-white font-bold">x^n</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 id="ejemplos">Ejemplos de Uso Común</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExampleCard title="Derivada del Seno">
            <p className="font-mono text-center text-lg">sin(x)</p>
          </ExampleCard>
          <ExampleCard title="Logaritmo Natural">
            <p className="font-mono text-center text-lg">ln(x)</p>
          </ExampleCard>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 id="tips">Consejos para mejores resultados</h2>
        <TipCard>
          Usa paréntesis para agrupar términos complejos, especialmente en fracciones o exponentes. Por ejemplo: <code>e^(x^2)</code> es más claro que <code>e^x^2</code>.
        </TipCard>
        <WarningCard>
          Nuestra calculadora distingue entre minúsculas y mayúsculas para las funciones. Asegúrate de escribir <code>sin(x)</code> y no <code>SIN(x)</code>.
        </WarningCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout 
      title="Cómo funciona nuestra Calculadora de Derivadas"
      description="Guía completa sobre el uso de Derivio. Aprende a ingresar funciones, interpretar los pasos y dominar el cálculo diferencial online."
      date="10 de Mayo, 2026"
      readTime="6 min"
      category="Ayuda"
      tags={["Tutorial", "Guía", "Uso"]}
      author={{
        name: "Equipo Derivio",
        role: "Soporte Técnico Educativo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Cómo funciona", href: "/how-it-works" }
      ]}
      content={content}
      faqs={[
        { question: "¿Es gratis?", answer: "Sí, Derivio es una herramienta totalmente gratuita para fines educativos." },
        { question: "¿Puedo ver los pasos?", answer: "¡Por supuesto! Haz clic en el botón de solución detallada después de calcular." }
      ]}
    />
  );
}
