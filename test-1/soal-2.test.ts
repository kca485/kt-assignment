import { it, expect } from "vitest";
import { maxSum } from "./soal-2";

it("should find the biggest possible sum of its subarray with given length", () => {
  expect(maxSum([100, 200, 300, 400], 2)).toEqual(700);
  expect(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  expect(maxSum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
});
