import type { limitWorkflow } from "./index";
import type { LimitWorkerRequest, LimitWorkerResponse } from "./limit-worker";

const LIMIT_TIMEOUT_MS = 4000;

export type LimitWorkflowResult = ReturnType<typeof limitWorkflow>;

/**
 * Runs limitWorkflow off the main thread and terminates the worker on timeout
 * so pathological cases (e.g. abs(x)/x) cannot freeze the UI.
 */
export function runLimitWorkflowWithTimeout(
  f: string,
  variable: string,
  approach: string,
  locale: "es" | "en",
  timeoutMs = LIMIT_TIMEOUT_MS
): Promise<LimitWorkflowResult> {
  return new Promise((resolve, reject) => {
    let settled = false;
    const worker = new Worker(new URL("./limit-worker.ts", import.meta.url), {
      type: "module",
    });

    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      worker.terminate();
      fn();
    };

    const timer = setTimeout(() => {
      finish(() => reject(new Error("timeout")));
    }, timeoutMs);

    worker.onmessage = (event: MessageEvent<LimitWorkerResponse>) => {
      const payload = event.data;
      if (!payload?.ok) {
        finish(() => reject(new Error(payload?.error || "Limit failed")));
        return;
      }
      finish(() => resolve(payload.data));
    };

    worker.onerror = (event) => {
      finish(() =>
        reject(new Error(event.message || "Limit worker failed to start"))
      );
    };

    const request: LimitWorkerRequest = { f, variable, approach, locale };
    worker.postMessage(request);
  });
}
