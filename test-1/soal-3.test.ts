import { it, expect } from "vitest";
import { propertySum } from "./soal-3";

it("should sum all of the even numbers in all properties", () => {
  expect(
    propertySum({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    }),
  ).toEqual(6);
  expect(
    propertySum({
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    }),
  ).toEqual(12);
});
