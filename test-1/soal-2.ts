export function maxSum(input: number[], subArrayLength: number) {
  if (subArrayLength > input.length || subArrayLength < 1) {
    throw new Error("Invalid second argument.");
  }

  let prevMax = 0;
  for (let i = 0; i < subArrayLength; i++) {
    prevMax += input[i];
  }

  let biggestMax = prevMax;
  for (
    let nextTailIndex = subArrayLength;
    nextTailIndex < input.length;
    nextTailIndex++
  ) {
    const nextMax =
      prevMax - input[nextTailIndex - subArrayLength] + input[nextTailIndex];
    biggestMax = Math.max(biggestMax, nextMax);

    prevMax = nextMax;
  }

  return biggestMax;
}
