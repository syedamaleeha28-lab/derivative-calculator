/// <reference lib="webworker" />

import { continuityWorkflow } from "./index";

export type ContinuityWorkerRequest = {
  f: string;
  variable: string;
  approach: string;
  locale: "es" | "en";
};

export type ContinuityWorkerResponse =
  | { ok: true; data: ReturnType<typeof continuityWorkflow> }
  | { ok: false; error: string };

self.onmessage = (event: MessageEvent<ContinuityWorkerRequest>) => {
  try {
    const { f, variable, approach, locale } = event.data;
    const data = continuityWorkflow(f, variable, approach, locale);
    const response: ContinuityWorkerResponse = { ok: true, data };
    self.postMessage(response);
  } catch (error) {
    const response: ContinuityWorkerResponse = {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(response);
  }
};

export {};
