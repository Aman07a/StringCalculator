// Theory to remember:
// - The One to Many green bar pattern
// - The Obvious green bar pattern
// - The Backout green bar pattern
// - The Learning Test green bar pattern
// - The TDD Gears Model

import { StringCalculator } from "./string-calculator";

// String Kata first step:
// 1. Create a simple String calculator with a function: add(input: string): number
//  1.1. The add() function can take 0, 1 or 2 numbers, and will return their sums
//      (for an empty string it will return 0) for example "" or "1" or "1,2"
//  1.2. Start with the simplest test case of an empty string, then move to one and two numbers
// 2. Allow the add() function to handle an unknown amount of numbers

describe("string-calculator", () => {
  describe("add", () => {
    test("add given empty string should return 0", () => {
      // Arrange
      const input = "";
      const expected = 0;
      const sut = new StringCalculator();
      // Act
      const actual = sut.add(input);
      // Assert
      expect(actual).toBe(expected);
    });

    describe("single number", () => {
      test.each([
        { input: "5", expected: 5 },
        { input: "20", expected: 20 },
        { input: "300", expected: 300 },
      ])("input: $input", ({ input, expected }) => {
        // Arrange
        const sut = new StringCalculator();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("two numbers", () => {
      test.each([
        { input: "6,3", expected: 9 },
        { input: "10,23", expected: 33 },
        { input: "234,754", expected: 988 },
      ])("input: $input", ({ input, expected }) => {
        // Arrange
        const sut = new StringCalculator();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("many numbers", () => {
      test.each([
        { input: "6,3,1", expected: 10 },
        { input: "10,20,30", expected: 60 },
        { input: "12,148,1000", expected: 1160 },
      ])("input: $input", ({ input, expected }) => {
        // Arrange
        const sut = new StringCalculator();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
