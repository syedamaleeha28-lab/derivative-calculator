import { inferExpressionType } from "./infer-expression-type";

/** GA4 measurement ID from environment (e.g. G-K8QMS819KY). */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

export const isGaEnabled = Boolean(GA_MEASUREMENT_ID);

/** Named GA4 events used across the app. */
export const GA_EVENTS = {
  CALCULATOR_USED: "calculator_used",
} as const;

export type GaEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function sanitizeParams(
  params?: Record<string, string | number | boolean | undefined>
): GaEventParams | undefined {
  if (!params) return undefined;
  const out: GaEventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) out[key] = value;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

/**
 * Fire a GA4 custom event via gtag.js.
 * Safe to call from client components; no-ops when GA is disabled or on the server.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (!isGaEnabled || typeof window === "undefined") return;
  const payload = sanitizeParams(params);
  if (payload) {
    window.gtag("event", eventName, payload);
  } else {
    window.gtag("event", eventName);
  }
}

/** Send a page_view to GA4 (App Router client navigations). */
export function pageview(url: string) {
  if (!isGaEnabled || typeof window === "undefined") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

/** Track a derivative calculation from the main calculator UI. */
export function trackCalculatorUsed(pagePath: string, expression: string) {
  trackEvent(GA_EVENTS.CALCULATOR_USED, {
    page_path: pagePath,
    expression_type: inferExpressionType(expression),
  });
}
