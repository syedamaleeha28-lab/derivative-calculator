export const CALCULATOR_SET_INPUT = "derivative-calculator:set-input";

export type CalculatorSetInputDetail = {
  expression: string;
  scroll?: boolean;
};

export function dispatchCalculatorInput(
  expression: string,
  options: { scroll?: boolean } = { scroll: true }
) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<CalculatorSetInputDetail>(CALCULATOR_SET_INPUT, {
      detail: { expression, scroll: options.scroll ?? true },
    })
  );
}
