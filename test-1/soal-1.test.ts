import { it, expect, vi } from "vitest";
import { sortDescending } from "./soal-1";

it("should sort number in descending order", () => {
  expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});

it("should not use built-in sort method", () => {
  const spy = vi.spyOn(Array.prototype, "sort");
  sortDescending([]);
  expect(spy).not.toHaveBeenCalled();
});
