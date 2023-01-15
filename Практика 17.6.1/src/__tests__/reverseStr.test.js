import { reverseStr } from "../reverseStr";

describe("test reverse", () => {
  it("str", () => {
    expect(reverseStr("str")).toBe("rts");
  }),
    it("str", () => {
      expect(reverseStr("abcd")).toBe("dcba");
    });
});
