const { sum2Numbers } = require("./sum2Numbers");

describe("sum2Numbers", () => {
  it("should return the sum of 2 arguments", () => {
    expect(sum2Numbers(1, 2)).toBe(3);
  });
});
