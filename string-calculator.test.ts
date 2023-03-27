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
});
