export function money(n: number) {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}
