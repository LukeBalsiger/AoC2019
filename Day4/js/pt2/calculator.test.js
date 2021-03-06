const calc = require("./calculator.js");

describe("Password Validation", () => {
  describe("isValidLength", () => {
    test("returns true if length matches", () => {
      expect(calc.isValidLength("11", 2)).toBe(true);
    });
    test("returns true if length does not match", () => {
      expect(calc.isValidLength("11", 3)).toBe(false);
    });
  });
  describe("containsExactlyTwoDigits", () => {
    test("returns true if there is a repeated digit", () => {
      expect(calc.containsExactlyTwoDigits("122345")).toBe(true);
    });
    test("returns false if there is not a repeated digit", () => {
      expect(calc.containsExactlyTwoDigits("123456")).toBe(false);
    });
    test("returns false if there is only a repeated digit more than twice", () => {
      expect(calc.containsExactlyTwoDigits("123336")).toBe(false);
    });
    test("returns true if there is a 3+ repeated digit and a 2 repeated digit", () => {
      expect(calc.containsExactlyTwoDigits("111122")).toBe(true);
    });
  });
  describe("digitsNeverDecrease", () => {
    test("returns true if digits never decrease", () => {
      expect(calc.digitsNeverDecrease("123456")).toBe(true);
    });
    test("returns false if a digit decreases", () => {
      expect(calc.digitsNeverDecrease("132456")).toBe(false);
    });
    test("returns true if a digit stays the same", () => {
      expect(calc.digitsNeverDecrease("122456")).toBe(true);
    });
  });
});
