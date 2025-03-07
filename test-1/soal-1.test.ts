import { it, expect } from "vitest";
import { sortDescending } from "./soal-1";

it("should sort number in descending order", () => {
  expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});
