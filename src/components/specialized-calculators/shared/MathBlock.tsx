"use client";

import { useEffect, useState } from "react";
import { loadEngine } from "@/lib/calculator-math/load-engine";

type Props = {
  latex: string;
  display?: boolean;
  className?: string;
};

export default function MathBlock({ latex, display = true, className = "" }: Props) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (!latex || latex === "—") {
      setHtml("");
      return;
    }
    let cancelled = false;
    loadEngine()
      .then(({ katex }) => {
        if (cancelled) return;
        setHtml(
          katex.renderToString(latex, {
            throwOnError: false,
            displayMode: display,
          })
        );
      })
      .catch(() => {
        if (!cancelled) setHtml("");
      });
    return () => {
      cancelled = true;
    };
  }, [latex, display]);

  if (!latex || latex === "—") {
    return <span className="text-slate-400">—</span>;
  }
  if (!html) {
    return <code className={`text-sm font-mono ${className}`}>{latex}</code>;
  }
  return (
    <div
      className={`overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
