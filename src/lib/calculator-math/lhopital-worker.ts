/// <reference lib="webworker" />

import { lhopitalWorkflow } from "./index";

export type LhopitalWorkerRequest = {
  f: string;
  g: string;
  variable: string;
  approach: string;
  locale: "es" | "en";
};

export type LhopitalWorkerResponse =
  | { ok: true; data: ReturnType<typeof lhopitalWorkflow> }
  | { ok: false; error: string };

self.onmessage = (event: MessageEvent<LhopitalWorkerRequest>) => {
  try {
    const { f, g, variable, approach, locale } = event.data;
    const data = lhopitalWorkflow(f, g, variable, approach, locale);
    const response: LhopitalWorkerResponse = { ok: true, data };
    self.postMessage(response);
  } catch (error) {
    const response: LhopitalWorkerResponse = {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(response);
  }
};

export {};
