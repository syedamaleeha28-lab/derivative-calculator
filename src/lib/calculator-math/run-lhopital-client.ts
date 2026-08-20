import type { lhopitalWorkflow } from "./index";
import type {
  LhopitalWorkerRequest,
  LhopitalWorkerResponse,
} from "./lhopital-worker";

const LHOPITAL_TIMEOUT_MS = 4000;

export type LhopitalWorkflowResult = ReturnType<typeof lhopitalWorkflow>;

/**
 * Runs lhopitalWorkflow off the main thread and terminates the worker on
 * timeout so pathological nerdamer cases cannot freeze the UI.
 */
export function runLhopitalWorkflowWithTimeout(
  f: string,
  g: string,
  variable: string,
  approach: string,
  locale: "es" | "en",
  timeoutMs = LHOPITAL_TIMEOUT_MS
): Promise<LhopitalWorkflowResult> {
  return new Promise((resolve, reject) => {
    let settled = false;
    const worker = new Worker(new URL("./lhopital-worker.ts", import.meta.url), {
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

    worker.onmessage = (event: MessageEvent<LhopitalWorkerResponse>) => {
      const payload = event.data;
      if (!payload?.ok) {
        finish(() => reject(new Error(payload?.error || "L'Hôpital failed")));
        return;
      }
      finish(() => resolve(payload.data));
    };

    worker.onerror = (event) => {
      finish(() =>
        reject(new Error(event.message || "L'Hôpital worker failed to start"))
      );
    };

    const request: LhopitalWorkerRequest = { f, g, variable, approach, locale };
    worker.postMessage(request);
  });
}
