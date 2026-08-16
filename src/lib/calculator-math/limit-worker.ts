/// <reference lib="webworker" />

import { limitWorkflow } from "./index";

export type LimitWorkerRequest = {
  f: string;
  variable: string;
  approach: string;
  locale: "es" | "en";
};

export type LimitWorkerResponse =
  | { ok: true; data: ReturnType<typeof limitWorkflow> }
  | { ok: false; error: string };

self.onmessage = (event: MessageEvent<LimitWorkerRequest>) => {
  try {
    const { f, variable, approach, locale } = event.data;
    const data = limitWorkflow(f, variable, approach, locale);
    const response: LimitWorkerResponse = { ok: true, data };
    self.postMessage(response);
  } catch (error) {
    const response: LimitWorkerResponse = {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(response);
  }
};

export {};
