"use client";

import { useMemo } from "react";
import type { CalculatorTheme } from "@/lib/specialized-calculators/themes";

type Point = { x: number; y: number };
type Marker = { x: number; y: number; kind?: "max" | "min" | "other" };

type Props = {
  curve: Point[];
  theme: CalculatorTheme;
  tangentLine?: { slope: number; through: { x: number; y: number } };
  markers?: Marker[];
  height?: number;
  title?: string;
  dark?: boolean;
};

export default function FunctionPlot({
  curve,
  theme,
  tangentLine,
  markers = [],
  height = 220,
  title,
  dark = false,
}: Props) {
  const view = useMemo(() => {
    const W = 400;
    const H = height;
    const pad = 28;
    const allY = curve.map((p) => p.y);
    if (tangentLine) {
      for (const p of curve) {
        allY.push(tangentLine.through.y + tangentLine.slope * (p.x - tangentLine.through.x));
      }
    }
    markers.forEach((m) => allY.push(m.y));
    const xs = curve.map((p) => p.x);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    let yMin = Math.min(...allY);
    let yMax = Math.max(...allY);
    if (yMin === yMax) {
      yMin -= 1;
      yMax += 1;
    }
    const margin = (yMax - yMin) * 0.12;
    yMin -= margin;
    yMax += margin;

    const sx = (x: number) => pad + ((x - xMin) / (xMax - xMin || 1)) * (W - 2 * pad);
    const sy = (y: number) => H - pad - ((y - yMin) / (yMax - yMin || 1)) * (H - 2 * pad);

    const path = curve
      .map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`)
      .join(" ");

    let tangentPath = "";
    if (tangentLine && curve.length >= 2) {
      const x0 = xMin;
      const x1 = xMax;
      const y0 = tangentLine.through.y + tangentLine.slope * (x0 - tangentLine.through.x);
      const y1 = tangentLine.through.y + tangentLine.slope * (x1 - tangentLine.through.x);
      tangentPath = `M ${sx(x0).toFixed(1)} ${sy(y0).toFixed(1)} L ${sx(x1).toFixed(1)} ${sy(y1).toFixed(1)}`;
    }

    return { W, H, path, tangentPath, sx, sy, xMin, xMax };
  }, [curve, tangentLine, markers, height]);

  if (curve.length < 2) return null;

  return (
    <div
      className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-3 sm:p-4`}
    >
      {title && (
        <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${dark ? "text-slate-300" : theme.accentText}`}>
          {title}
        </p>
      )}
      <svg
        viewBox={`0 0 ${view.W} ${view.H}`}
        className="w-full h-auto"
        role="img"
        aria-label={title ?? "Function graph"}
      >
        <rect x={0} y={0} width={view.W} height={view.H} fill={theme.graphFill} rx={12} />
        <path d={view.path} fill="none" stroke={theme.graphStroke} strokeWidth={2.5} />
        {view.tangentPath && (
          <path
            d={view.tangentPath}
            fill="none"
            stroke="#f472b6"
            strokeWidth={2}
            strokeDasharray="6 4"
          />
        )}
        {markers.map((m, i) => {
          const color =
            m.kind === "max"
              ? theme.markerMax
              : m.kind === "min"
                ? theme.markerMin
                : theme.markerOther;
          return (
            <g key={i}>
              <circle cx={view.sx(m.x)} cy={view.sy(m.y)} r={5} fill={color} stroke="#fff" strokeWidth={1.5} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
