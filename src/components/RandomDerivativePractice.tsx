"use client";

import { useCallback, useState } from "react";
import katex from "katex";
import { Eye, RefreshCw, Shuffle } from "lucide-react";

const EXERCISES = [
  { functionLatex: "x^3 + 2x", derivativeLatex: "3x^2 + 2" },
  { functionLatex: "x^4 - 5x^2 + 1", derivativeLatex: "4x^3 - 10x" },
  { functionLatex: "\\sin(x)", derivativeLatex: "\\cos(x)" },
  { functionLatex: "\\cos(x)", derivativeLatex: "-\\sin(x)" },
  { functionLatex: "e^x", derivativeLatex: "e^x" },
  { functionLatex: "\\ln(x)", derivativeLatex: "\\frac{1}{x}" },
  { functionLatex: "x^2 \\sin(x)", derivativeLatex: "2x\\sin(x) + x^2\\cos(x)" },
  { functionLatex: "(x+1)e^x", derivativeLatex: "(x+2)e^x" },
  { functionLatex: "\\frac{\\sin(x)}{x}", derivativeLatex: "\\frac{x\\cos(x) - \\sin(x)}{x^2}" },
  { functionLatex: "e^x \\cos(x)", derivativeLatex: "e^x(\\cos(x) - \\sin(x))" },
  { functionLatex: "(3x-1)^4", derivativeLatex: "12(3x-1)^3" },
  { functionLatex: "\\sin(x^2)", derivativeLatex: "2x\\cos(x^2)" },
  { functionLatex: "e^{x^2+1}", derivativeLatex: "2x e^{x^2+1}" },
  { functionLatex: "\\sqrt{x}", derivativeLatex: "\\frac{1}{2\\sqrt{x}}" },
  { functionLatex: "\\tan(x)", derivativeLatex: "\\sec^2(x)" },
  { functionLatex: "x\\ln(x)", derivativeLatex: "\\ln(x) + 1" },
  { functionLatex: "\\frac{x^2+1}{x^2-1}", derivativeLatex: "\\frac{-4x}{(x^2-1)^2}" },
  { functionLatex: "\\ln(\\cos(x))", derivativeLatex: "-\\tan(x)" },
  { functionLatex: "5x^5 - 3x^3 + x", derivativeLatex: "25x^4 - 9x^2 + 1" },
  { functionLatex: "e^x \\sin(x)", derivativeLatex: "e^x(\\sin(x) + \\cos(x))" },
] as const;

function renderLatex(tex: string, display = false) {
  return katex.renderToString(tex, { throwOnError: false, displayMode: display });
}

function pickRandomIndex(exclude?: number): number {
  if (EXERCISES.length <= 1) return 0;
  let index = Math.floor(Math.random() * EXERCISES.length);
  while (index === exclude) {
    index = Math.floor(Math.random() * EXERCISES.length);
  }
  return index;
}

export default function RandomDerivativePractice() {
  const [exerciseIndex, setExerciseIndex] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const generateExercise = useCallback((exclude?: number) => {
    setExerciseIndex(pickRandomIndex(exclude));
    setShowSolution(false);
  }, []);

  const exercise = exerciseIndex !== null ? EXERCISES[exerciseIndex] : null;

  return (
    <section id="practica-aleatoria" className="my-10">
      <h2 className="heading-font text-2xl md:text-3xl text-slate-900 mb-3">Práctica aleatoria</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Genera un ejercicio al azar, intenta resolverlo por tu cuenta y comprueba la solución cuando lo
        necesites.
      </p>

      <div className="rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-cyan-50/30 p-6 md:p-8 shadow-sm">
        {exercise ? (
          <div className="space-y-5">
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-5 text-center shadow-inner">
              <p className="text-sm font-semibold text-slate-600 mb-3">
                Calcula la derivada de:
              </p>
              <div
                className="text-slate-900 overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: renderLatex(`f(x) = ${exercise.functionLatex}`, true),
                }}
              />
            </div>

            {showSolution ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                  Solución
                </p>
                <div
                  className="text-slate-900 overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html: renderLatex(`f'(x) = ${exercise.derivativeLatex}`, true),
                  }}
                />
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {!showSolution && (
                <button
                  type="button"
                  onClick={() => setShowSolution(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-300 bg-white px-4 py-2.5 text-sm font-bold text-violet-700 hover:bg-violet-50 transition-colors"
                >
                  <Eye size={16} />
                  Ver solución
                </button>
              )}
              <button
                type="button"
                onClick={() => generateExercise(exerciseIndex ?? undefined)}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
              >
                <RefreshCw size={16} />
                Nuevo ejercicio
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => generateExercise()}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
          >
            <Shuffle size={16} />
            Generar ejercicio
          </button>
        )}
      </div>
    </section>
  );
}
