import { expect, test, describe } from "vitest";
import { calculateTips } from "./calculateTip";

describe("Calculate Tip Function", () => {
  test("Gives correct output for 1000 EUR, 10 people, 20% tip", () => {
    expect(calculateTips(1000, 10, 20)).toStrictEqual({
      totalTip: 200,
      totalWithTip: 1200,
      totalPerPerson: 120,
    });
  });
  test("Gives correct output for 0 EUR Total", () => {
    expect(calculateTips(0, 10, 20)).toStrictEqual({
      totalTip: 0,
      totalWithTip: 0,
      totalPerPerson: 0,
    });
  });
});
