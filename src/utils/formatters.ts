export function roundTo(value: number | string): number {
  const num = typeof value === "number" ? value : Number(value);

  if (isNaN(num)) {
    throw new Error("Invalid input. Expected a number or a numeric string.");
  }

  return Math.round(num * 100) / 100;
}

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number | string | null) {
  if (typeof amount === "number") {
    return CURRENCY_FORMATTER.format(amount);
  } else if (typeof amount === "string") {
    return CURRENCY_FORMATTER.format(Number(amount));
  } else {
    return "N/A";
  }
}
