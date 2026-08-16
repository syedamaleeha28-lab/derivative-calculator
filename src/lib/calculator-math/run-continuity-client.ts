import type { continuityWorkflow } from "./index";
import type {
  ContinuityWorkerRequest,
  ContinuityWorkerResponse,
} from "./continuity-worker";

const CONTINUITY_TIMEOUT_MS = 4000;

export type ContinuityWorkflowResult = ReturnType<typeof continuityWorkflow>;

/**
 * Runs continuityWorkflow off the main thread and terminates the worker on
 * timeout so pathological cases (e.g. abs(x)/x) cannot freeze the UI.
 * Both the limit and the direct evaluation run inside this same timeout.
 */
export function runContinuityWorkflowWithTimeout(
  f: string,
  variable: string,
  approach: string,
  locale: "es" | "en",
  timeoutMs = CONTINUITY_TIMEOUT_MS
): Promise<ContinuityWorkflowResult> {
  return new Promise((resolve, reject) => {
    let settled = false;
    const worker = new Worker(new URL("./continuity-worker.ts", import.meta.url), {
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

    worker.onmessage = (event: MessageEvent<ContinuityWorkerResponse>) => {
      const payload = event.data;
      if (!payload?.ok) {
        finish(() => reject(new Error(payload?.error || "Continuity check failed")));
        return;
      }
      finish(() => resolve(payload.data));
    };

    worker.onerror = (event) => {
      finish(() =>
        reject(new Error(event.message || "Continuity worker failed to start"))
      );
    };

    const request: ContinuityWorkerRequest = { f, variable, approach, locale };
    worker.postMessage(request);
  });
}
