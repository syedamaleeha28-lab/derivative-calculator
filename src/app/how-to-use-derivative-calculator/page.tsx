import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import Link from "next/link";
import Image from "next/image";
import { Calculator, List, Zap, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo usar la Calculadora de Derivadas: Guía y Sintaxis",
  description: "Domina nuestra herramienta de cálculo paso a paso. Aprende la sintaxis correcta para funciones trigonométricas, logarítmicas y compuestas con esta guía detallada.",
};

export default function HowToUseCalculator() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="pasos-basicos">Pasos para resolver tu primera derivada</h2>
        <p className="mb-6">
          Nuestra <strong>calculadora de derivadas paso a paso</strong> ha sido diseñada para ser la herramienta más intuitiva y potente de la web. Sigue estos pasos para obtener resultados precisos y educativos instantáneamente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Escribe la función", d: "Usa el teclado matemático para introducir funciones como sin(x), e^x o x^3. No necesitas preocuparte por la notación compleja.", icon: <Calculator size={20} /> },
            { t: "Verifica la vista previa", d: "A medida que escribes, verás una representación en tiempo real en formato matemático profesional para confirmar que la entrada es correcta.", icon: <Zap size={20} /> },
            { t: "Haz clic en Calcular", d: "Presiona el botón principal y nuestro motor simbólico procesará la derivada en milisegundos con total precisión.", icon: <BookOpen size={20} /> }
          ].map((step, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                {step.icon}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white">{step.t}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="my-8 max-w-3xl mx-auto relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
          <Image
            src="/images/interfaz-calculadora-matematica.webp"
            alt="Ilustración de la interfaz de la calculadora de derivadas, mostrando la entrada de una ecuación matemática y el resultado paso a paso."
            title="Interfaz de la Calculadora Matemática"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
        </div>
        <p className="mt-8">
          Si eres nuevo en el tema, te recomendamos leer primero nuestra guía sobre <Link href="/what-is-a-derivative" className="text-secondary font-bold">qué es una derivada</Link> para entender la lógica detrás de los cálculos.
        </p>
      </section>

      <section>
        <h2 id="notacion">Sintaxis y Notación Soportada</h2>
        <p>
          Para obtener los mejores resultados y evitar ambigüedades, te recomendamos usar paréntesis para agrupar términos complejos. Nuestro motor soporta casi todas las funciones que verás en <Link href="/basic-derivative-formulas" className="text-secondary font-bold">nuestro formulario</Link>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="p-8 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/20">
            <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-400 uppercase text-[0.7rem] tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Sintaxis Recomendada
            </h4>
            <ul className="text-sm space-y-3 font-mono">
              <li className="flex justify-between"><span>sin(x^2)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>ln(3x + 1)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>(x + 1)/(x - 1)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>e^(2x)</span> <span className="text-emerald-600 font-bold">✓</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/20">
            <h4 className="font-bold mb-4 text-rose-700 dark:text-rose-400 uppercase text-[0.7rem] tracking-widest flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-rose-500" /> Evitar (Ambigüedad)
            </h4>
            <ul className="text-sm space-y-3 font-mono text-slate-400">
              <li className="flex justify-between"><span>sinx^2</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>log 3x + 1</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>x+1 / x-1</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>e^2x</span> <span className="text-rose-400 font-bold">✗</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 id="paso-a-paso">Cómo interpretar la solución paso a paso</h2>
        <p>
          Lo que hace única a nuestra herramienta es su capacidad educativa. No solo te damos el resultado final, sino que desglosamos el procedimiento aplicando las <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> correspondientes.
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Identificación de Reglas:</strong> Sabrás exactamente cuándo se aplicó la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link> o la regla del producto.</li>
          <li><strong>Simplificación:</strong> Verás cómo se reducen los términos algebraicos para llegar a la forma más elegante posible.</li>
          <li><strong>Fórmulas de referencia:</strong> Cada paso incluye la fórmula general utilizada para que puedas aprenderla.</li>
        </ul>
        <TipCard>
          Puedes copiar el resultado en formato LaTeX directamente para usarlo en tus documentos, tesis o tareas escolares con un solo clic.
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplos">Práctica con Ejemplos</h2>
        <p>
          Si no estás seguro de cómo empezar, visita nuestra galería de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos resueltos</Link> donde verás casos reales de uso.
        </p>
        <WarningCard>
          Asegúrate de que la variable que quieres derivar sea la misma que está seleccionada en las opciones (por defecto es 'x'). Si tu función es respecto a 't', cambia la variable antes de calcular.
        </WarningCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Cómo usar la Calculadora de Derivadas: Guía y Sintaxis"
      description="Domina nuestra herramienta de cálculo paso a paso. Aprende la sintaxis correcta para funciones trigonométricas, logarítmicas y compuestas con esta guía detallada."
      date="10 de Mayo, 2026"
      readTime="5 min"
      category="Tutorial"
      tags={["Ayuda", "Sintaxis", "Uso de Derivio", "Cálculo Online"]}
      author={{
        name: "Equipo de Soporte",
        role: "Expertos en Derivio"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Centro de Ayuda", href: "/how-it-works" },
        { label: "Guía de Uso", href: "/how-to-use-derivative-calculator" }
      ]}
      content={content}
      faqs={[
        { question: "¿Funciona en dispositivos móviles?", answer: "Sí, la calculadora es totalmente responsiva y cuenta con un teclado virtual optimizado para pantallas táctiles." },
        { question: "¿Puedo resolver derivadas parciales?", answer: "Actualmente estamos optimizados para una variable, pero puedes consultar nuestra guía de derivadas parciales para aprender el método manual." },
        { question: "¿Es totalmente gratuito?", answer: "Absolutamente. Derivio es una plataforma educativa gratuita y no requiere registro previo." }
      ]}
      relatedPosts={[
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: "Reglas de Derivación", slug: "reglas" },
        { title: "¿Qué es una Derivada?", slug: "what-is-a-derivative" }
      ]}
    />
  );
}
