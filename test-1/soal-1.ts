export function sortDescending(input: number[]) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1 - i; j++) {
      if (input[j] < input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}
