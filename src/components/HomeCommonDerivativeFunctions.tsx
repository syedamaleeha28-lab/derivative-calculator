import Link from "next/link";
import { ArrowRight, FunctionSquare } from "lucide-react";
import { HOME_COMMON_DERIVATIVE_FUNCTION_LINKS } from "@/lib/internal-links";
import { dict } from "@/lib/dictionaries";

const [hubLink, ...functionLinks] = HOME_COMMON_DERIVATIVE_FUNCTION_LINKS;

export default function HomeCommonDerivativeFunctions() {
  const t = dict.homeCommonFunctions;

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-b from-violet-50/80 to-white border-t border-violet-100"
      aria-labelledby="home-common-functions-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-3">
          <FunctionSquare className="text-violet-600" size={22} aria-hidden />
          <p className="text-violet-600 font-bold tracking-widest uppercase text-[0.7rem]">
            {t.badge}
          </p>
        </div>
        <h2
          id="home-common-functions-heading"
          className="heading-font text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-3"
        >
          {t.title}
        </h2>
        <p className="text-slate-600 max-w-2xl mb-10 leading-relaxed">{t.lead}</p>

        <Link
          href={hubLink.href}
          className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border-2 border-violet-200 bg-white p-6 md:p-8 mb-8 hover:border-violet-400 hover:shadow-lg transition-all"
        >
          <div>
            <span className="font-bold text-lg md:text-xl text-slate-900 group-hover:text-violet-600 transition-colors leading-snug">
              {hubLink.anchor}
            </span>
            <p className="text-sm md:text-base text-slate-500 mt-2 leading-relaxed max-w-3xl">
              {hubLink.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 shrink-0">
            {t.viewHub} <ArrowRight size={16} />
          </span>
        </Link>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {functionLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 hover:border-violet-300 hover:shadow-md transition-all"
              >
                <span className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-snug">
                  {link.anchor}
                </span>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[0.8rem] font-bold text-violet-600">
                  {t.readGuide} <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
