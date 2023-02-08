export function cn(...classes: (string | boolean | null | undefined)[]) {
  return classes
    .filter((x): x is string => typeof x === "string" && x !== "")
    .map((x) => x.trim())
    .join(" ");
}
