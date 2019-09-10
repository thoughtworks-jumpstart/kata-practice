const { passwordValidation } = require("./passwordValidation");

describe("passwordValidation", () => {
  it(
    "should return true contains at least 8 characters and" +
      "a single digit and contains both lower and upper case character",
    () => {
      expect(passwordValidation("aBcdefg1")).toBeTruthy();
    }
  );

  it("should fail if password is less than 8 characters", () => {
    expect(passwordValidation("aBcefg1")).toBeFalsy();
  });

  it("should fail if password does not contains a single digit", () => {
    expect(passwordValidation("aBcdefga")).toBeFalsy();
  });

  it("should fail if password does not contains a lower case character", () => {
    expect(passwordValidation("ABCDEFG1")).toBeFalsy();
  });

  it("should fail if password does not contains a uppercase character", () => {
    expect(passwordValidation("abcdefg1")).toBeFalsy();
  });
});
