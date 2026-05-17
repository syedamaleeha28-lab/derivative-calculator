/** GA4 measurement ID from environment (e.g. G-K8QMS819KY). */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

export const isGaEnabled = Boolean(GA_MEASUREMENT_ID);

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Send a page_view to GA4 (App Router client navigations). */
export function pageview(url: string) {
  if (!isGaEnabled || typeof window === "undefined") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}
