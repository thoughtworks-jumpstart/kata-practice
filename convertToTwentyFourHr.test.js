const convertToTwentyFourHr = require("./convertToTwentyFourHr");

describe("convertToTwentyFourHr", () => {
  it("should convert 1:00:00AM to 1:00:00", () => {
    expect(convertToTwentyFourHr("11:00:00AM")).toBe("11:00:00");
  });

  it("should convert 11:59:59PM to 23:59:59", () => {
    expect(convertToTwentyFourHr("11:59:59PM")).toBe("23:59:59");
  });

  it("should convert 12:00:00AM to 00:00:00", () => {
    expect(convertToTwentyFourHr("12:00:00AM")).toBe("00:00:00");
  });

  it("should convert 12:00:00PM to 12:00:00", () => {
    expect(convertToTwentyFourHr("12:00:00PM")).toBe("12:00:00");
  });

  it("should convert 1:00:00AM to 01:00:00", () => {
    expect(convertToTwentyFourHr("1:00:00AM")).toBe("01:00:00");
  });
});
