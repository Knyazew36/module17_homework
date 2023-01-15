import { getPercents } from "../getPercents";

describe("Percents", () => {
  it("number", () => {
    expect(getPercents(10, 100)).toBe(10);
  });
  it("", () => {
    expect(getPercents(0.1, 100)).toBe(0.1);
  });
  it("null", () => {
    expect(getPercents(null, 100)).toBe(0);
  });
});
