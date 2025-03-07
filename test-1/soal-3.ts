export function propertySum(input: Record<string, unknown>) {
  let sum = 0;
  for (const key in input) {
    const value = input[key];
    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
    if (isRecord(value)) {
      sum += propertySum(value);
    }
  }
  return sum;

  function isRecord(element: unknown): element is Record<string, unknown> {
    return (
      typeof element === "object" &&
      typeof element !== "function" &&
      element !== null
    );
  }
}

propertySum({ [Symbol("foo")]: 2 });
