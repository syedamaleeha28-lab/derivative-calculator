import type Katex from "katex";

export type NerdamerExpr = {
  toTeX(): string;
  text(): string;
};

export type NerdamerApi = ((expr: string) => NerdamerExpr) & Record<string, unknown>;

export type MathEngine = {
  nerdamer: NerdamerApi;
  katex: typeof Katex;
};

let enginePromise: Promise<MathEngine> | null = null;

function resolveDefault<T>(mod: { default?: T } | T): T {
  if (mod && typeof mod === "object" && "default" in mod && mod.default) {
    return mod.default;
  }
  return mod as T;
}

/** Load nerdamer + KaTeX once; reuse the same promise for preview and Calculate. */
export function loadEngine(): Promise<MathEngine> {
  if (!enginePromise) {
    enginePromise = Promise.all([
      // @ts-expect-error — nerdamer has no bundled types
      import("nerdamer/all.min"),
      import("katex"),
    ]).then(([nerdamerMod, katexMod]) => ({
      nerdamer: resolveDefault(nerdamerMod as { default?: NerdamerApi }),
      katex: resolveDefault(katexMod as { default?: typeof Katex }),
    }));
  }
  return enginePromise;
}
