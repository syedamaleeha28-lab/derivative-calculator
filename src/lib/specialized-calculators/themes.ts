import type { LucideIcon } from "lucide-react";
import {
  Divide,
  FunctionSquare,
  GitBranch,
  Layers,
  Link2,
  MapPin,
  Sigma,
  TrendingUp,
  Equal,
} from "lucide-react";

export type CalculatorTheme = {
  id: string;
  icon: LucideIcon;
  heroGradient: string;
  shellBorder: string;
  shellBg: string;
  badge: string;
  inputRing: string;
  inputBg: string;
  labelColor: string;
  cta: string;
  ctaHover: string;
  resultBorder: string;
  resultBg: string;
  accentText: string;
  stepBorder: string;
  graphStroke: string;
  graphFill: string;
  markerMax: string;
  markerMin: string;
  markerOther: string;
};

export const PRODUCT_RULE_THEME: CalculatorTheme = {
  id: "product-rule",
  icon: GitBranch,
  heroGradient: "from-cyan-50 via-sky-50/80 to-blue-50/60",
  shellBorder: "border-cyan-200/80",
  shellBg: "bg-gradient-to-br from-white via-cyan-50/40 to-sky-50/30",
  badge: "bg-cyan-100 text-cyan-800 border-cyan-200",
  inputRing: "focus-within:border-cyan-500 focus-within:ring-cyan-200",
  inputBg: "bg-white border-cyan-100",
  labelColor: "text-cyan-800",
  cta: "bg-gradient-to-r from-cyan-600 to-sky-600 shadow-cyan-500/30",
  ctaHover: "hover:from-cyan-500 hover:to-sky-500",
  resultBorder: "border-cyan-200",
  resultBg: "bg-cyan-50/50",
  accentText: "text-cyan-700",
  stepBorder: "border-cyan-100",
  graphStroke: "#0891b2",
  graphFill: "rgba(6, 182, 212, 0.08)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#6366f1",
};

export const QUOTIENT_RULE_THEME: CalculatorTheme = {
  id: "quotient-rule",
  icon: Divide,
  heroGradient: "from-orange-50 via-amber-50/70 to-indigo-50/50",
  shellBorder: "border-orange-200/80",
  shellBg: "bg-gradient-to-br from-white via-orange-50/30 to-indigo-50/20",
  badge: "bg-orange-100 text-orange-900 border-orange-200",
  inputRing: "focus-within:border-orange-500 focus-within:ring-orange-200",
  inputBg: "bg-white border-orange-100",
  labelColor: "text-orange-900",
  cta: "bg-gradient-to-r from-orange-600 to-indigo-600 shadow-orange-500/30",
  ctaHover: "hover:from-orange-500 hover:to-indigo-500",
  resultBorder: "border-orange-200",
  resultBg: "bg-orange-50/40",
  accentText: "text-orange-800",
  stepBorder: "border-orange-100",
  graphStroke: "#ea580c",
  graphFill: "rgba(234, 88, 12, 0.06)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#6366f1",
};

export const CRITICAL_POINTS_THEME: CalculatorTheme = {
  id: "critical-points",
  icon: MapPin,
  heroGradient: "from-emerald-50 via-green-50/70 to-teal-50/40",
  shellBorder: "border-emerald-200/80",
  shellBg: "bg-gradient-to-br from-white via-emerald-50/40 to-green-50/20",
  badge: "bg-emerald-100 text-emerald-900 border-emerald-200",
  inputRing: "focus-within:border-emerald-500 focus-within:ring-emerald-200",
  inputBg: "bg-white border-emerald-100",
  labelColor: "text-emerald-900",
  cta: "bg-gradient-to-r from-emerald-600 to-green-600 shadow-emerald-500/30",
  ctaHover: "hover:from-emerald-500 hover:to-green-500",
  resultBorder: "border-emerald-200",
  resultBg: "bg-emerald-50/50",
  accentText: "text-emerald-800",
  stepBorder: "border-emerald-100",
  graphStroke: "#059669",
  graphFill: "rgba(16, 185, 129, 0.08)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#6366f1",
};

export const TANGENT_LINE_THEME: CalculatorTheme = {
  id: "tangent-line",
  icon: FunctionSquare,
  heroGradient: "from-violet-50 via-purple-50/70 to-fuchsia-50/40",
  shellBorder: "border-violet-200/80",
  shellBg: "bg-gradient-to-br from-white via-violet-50/40 to-purple-50/20",
  badge: "bg-violet-100 text-violet-900 border-violet-200",
  inputRing: "focus-within:border-violet-500 focus-within:ring-violet-200",
  inputBg: "bg-white border-violet-100",
  labelColor: "text-violet-900",
  cta: "bg-gradient-to-r from-violet-600 to-purple-600 shadow-violet-500/30",
  ctaHover: "hover:from-violet-500 hover:to-purple-500",
  resultBorder: "border-violet-200",
  resultBg: "bg-violet-50/50",
  accentText: "text-violet-800",
  stepBorder: "border-violet-100",
  graphStroke: "#7c3aed",
  graphFill: "rgba(124, 58, 237, 0.06)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#6366f1",
};

export const PARTIAL_DERIVATIVE_THEME: CalculatorTheme = {
  id: "partial-derivatives",
  icon: Sigma,
  heroGradient: "from-teal-50 via-cyan-50/60 to-slate-50/40",
  shellBorder: "border-teal-200/80",
  shellBg: "bg-gradient-to-br from-white via-teal-50/40 to-cyan-50/20",
  badge: "bg-teal-100 text-teal-900 border-teal-200",
  inputRing: "focus-within:border-teal-500 focus-within:ring-teal-200",
  inputBg: "bg-white border-teal-100",
  labelColor: "text-teal-900",
  cta: "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-teal-500/30",
  ctaHover: "hover:from-teal-500 hover:to-cyan-500",
  resultBorder: "border-teal-200",
  resultBg: "bg-teal-50/50",
  accentText: "text-teal-800",
  stepBorder: "border-teal-100",
  graphStroke: "#0d9488",
  graphFill: "rgba(13, 148, 136, 0.06)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#6366f1",
};

export const HIGHER_ORDER_THEME: CalculatorTheme = {
  id: "higher-order",
  icon: Layers,
  heroGradient: "from-slate-900 via-slate-800 to-indigo-950",
  shellBorder: "border-slate-600/60",
  shellBg: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  badge: "bg-slate-700 text-slate-100 border-slate-600",
  inputRing: "focus-within:border-indigo-400 focus-within:ring-indigo-900",
  inputBg: "bg-slate-800/80 border-slate-600 text-white placeholder:text-slate-400",
  labelColor: "text-slate-200",
  cta: "bg-gradient-to-r from-indigo-600 to-blue-700 shadow-indigo-900/50",
  ctaHover: "hover:from-indigo-500 hover:to-blue-600",
  resultBorder: "border-slate-600",
  resultBg: "bg-slate-800/60",
  accentText: "text-indigo-300",
  stepBorder: "border-slate-700",
  graphStroke: "#818cf8",
  graphFill: "rgba(99, 102, 241, 0.12)",
  markerMax: "#f87171",
  markerMin: "#4ade80",
  markerOther: "#a78bfa",
};

export const SECOND_DERIVATIVE_THEME: CalculatorTheme = {
  id: "second-derivative",
  icon: TrendingUp,
  heroGradient: "from-rose-50 via-pink-50/80 to-fuchsia-50/50",
  shellBorder: "border-rose-200/80",
  shellBg: "bg-gradient-to-br from-white via-rose-50/50 to-pink-50/30",
  badge: "bg-rose-100 text-rose-900 border-rose-200",
  inputRing: "focus-within:border-rose-500 focus-within:ring-rose-200",
  inputBg: "bg-white border-rose-100",
  labelColor: "text-rose-900",
  cta: "bg-gradient-to-r from-rose-600 to-fuchsia-600 shadow-rose-500/30",
  ctaHover: "hover:from-rose-500 hover:to-fuchsia-500",
  resultBorder: "border-rose-200",
  resultBg: "bg-rose-50/50",
  accentText: "text-rose-800",
  stepBorder: "border-rose-100",
  graphStroke: "#e11d48",
  graphFill: "rgba(244, 63, 94, 0.07)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#a855f7",
};

export const CHAIN_RULE_THEME: CalculatorTheme = {
  id: "chain-rule",
  icon: Link2,
  heroGradient: "from-lime-50 via-yellow-50/70 to-amber-50/50",
  shellBorder: "border-lime-300/80",
  shellBg: "bg-gradient-to-br from-white via-lime-50/40 to-amber-50/25",
  badge: "bg-lime-100 text-lime-900 border-lime-300",
  inputRing: "focus-within:border-lime-600 focus-within:ring-lime-200",
  inputBg: "bg-white border-lime-200",
  labelColor: "text-lime-900",
  cta: "bg-gradient-to-r from-lime-600 to-amber-500 shadow-lime-500/30",
  ctaHover: "hover:from-lime-500 hover:to-amber-400",
  resultBorder: "border-lime-200",
  resultBg: "bg-lime-50/50",
  accentText: "text-lime-800",
  stepBorder: "border-lime-100",
  graphStroke: "#65a30d",
  graphFill: "rgba(132, 204, 22, 0.08)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#d97706",
};

export const IMPLICIT_DIFF_THEME: CalculatorTheme = {
  id: "implicit-differentiation",
  icon: Equal,
  heroGradient: "from-stone-100 via-slate-50/80 to-rose-50/40",
  shellBorder: "border-stone-300/80",
  shellBg: "bg-gradient-to-br from-stone-50 via-white to-rose-50/20",
  badge: "bg-stone-200 text-stone-800 border-stone-300",
  inputRing: "focus-within:border-stone-600 focus-within:ring-stone-200",
  inputBg: "bg-white border-stone-200",
  labelColor: "text-stone-800",
  cta: "bg-gradient-to-r from-stone-700 to-rose-700 shadow-stone-500/25",
  ctaHover: "hover:from-stone-600 hover:to-rose-600",
  resultBorder: "border-stone-300",
  resultBg: "bg-stone-50/80",
  accentText: "text-stone-700",
  stepBorder: "border-stone-200",
  graphStroke: "#57534e",
  graphFill: "rgba(120, 113, 108, 0.06)",
  markerMax: "#ef4444",
  markerMin: "#22c55e",
  markerOther: "#be123c",
};

export const THEMES = {
  "product-rule": PRODUCT_RULE_THEME,
  "quotient-rule": QUOTIENT_RULE_THEME,
  "critical-points": CRITICAL_POINTS_THEME,
  "tangent-line": TANGENT_LINE_THEME,
  "partial-derivatives": PARTIAL_DERIVATIVE_THEME,
  "higher-order": HIGHER_ORDER_THEME,
  "second-derivative": SECOND_DERIVATIVE_THEME,
  "chain-rule": CHAIN_RULE_THEME,
  "implicit-differentiation": IMPLICIT_DIFF_THEME,
} as const;

export type SpecializedCalculatorKind = keyof typeof THEMES;
