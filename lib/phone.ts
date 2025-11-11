export function formatPhoneSmart(input: string): { value: string; isLikelyUS: boolean } {
  let v = input.replace(/[^\d+]/g, "");

  // If user starts with + and more than 1 digit, don't force US formatting
  if (v.startsWith("+") && !v.startsWith("+1")) {
    return { value: v, isLikelyUS: false };
  }

  // Handle US/NANP shorthand (10 digits or +1…)
  const digits = v.replace(/\D/g, "");
  const isLikelyUS = digits.length <= 11 && (digits.length === 10 || digits.startsWith("1"));

  if (isLikelyUS) {
    // normalize to 10 digits
    const d = digits.startsWith("1") ? digits.slice(1) : digits;
    const a = d.slice(0, 3);
    const b = d.slice(3, 6);
    const c = d.slice(6, 10);
    if (d.length <= 3) return { value: a ? `(${a}` : "", isLikelyUS: true };
    if (d.length <= 6) return { value: `(${a}) ${b}`, isLikelyUS: true };
    return { value: `(${a}) ${b}-${c}`, isLikelyUS: true };
  }

  // generic fallback
  return { value: v, isLikelyUS: false };
}
