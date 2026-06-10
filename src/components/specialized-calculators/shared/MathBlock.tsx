"use client";

import katex from "katex";

type Props = {
  latex: string;
  display?: boolean;
  className?: string;
};

export default function MathBlock({ latex, display = true, className = "" }: Props) {
  if (!latex || latex === "—") {
    return <span className="text-slate-400">—</span>;
  }
  try {
    const html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: display,
    });
    return (
      <div
        className={`overflow-x-auto ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <code className="text-sm font-mono">{latex}</code>;
  }
}
