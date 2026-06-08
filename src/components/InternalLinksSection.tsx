import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { InternalLinkItem } from "@/lib/internal-links";

type Props = {
  title?: string;
  links: readonly InternalLinkItem[];
};

export default function InternalLinksSection({ title = "Guías relacionadas", links }: Props) {
  if (links.length === 0) return null;

  return (
    <section
      className="mt-16 pt-10 border-t border-slate-200"
      aria-labelledby="page-internal-links-heading"
    >
      <h2
        id="page-internal-links-heading"
        className="heading-font text-2xl md:text-[1.75rem] text-slate-900 mb-6"
      >
        {title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.anchor}>
            <Link
              href={link.href}
              className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-secondary/40 hover:shadow-md transition-all"
            >
              <span className="font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                {link.anchor}
              </span>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">{link.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[0.8rem] font-bold text-secondary">
                Leer más <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
