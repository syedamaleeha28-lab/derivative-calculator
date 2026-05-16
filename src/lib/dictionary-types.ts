/**
 * Recursively widens string literal types to `string` so each locale
 * can use different copy without cross-language assignability errors.
 */
export type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Lang = "es" | "en" | "pt";
