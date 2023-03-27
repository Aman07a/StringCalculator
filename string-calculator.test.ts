import { StringCalculator } from "./string-calculator";

describe("string-calculator", () => {
  describe("add", () => {
    test("given empty string should return 0", () => {
      // Arrange
      const input = "";
      const expected = 0;
      const sut = createSut();
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
        const sut = createSut();
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
        const sut = createSut();
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
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("new line as delimiter", () => {
      test("1,2\\n3", () => {
        // Arrange
        const input = "1,2\n3";
        const expected = 6;
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
      test("1\\n2,3,4\\n50", () => {
        // Arrange
        const input = "1\n2,3,4\n50";
        const expected = 60;
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("custom delimiter", () => {
      test("//;\\n1;2", () => {
        // Arrange
        const input = "//;\n1;2";
        const expected = 3;
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
      test("//@\\n2@20@50@3", () => {
        // Arrange
        const input = "//@\n2@20@50@3";
        const expected = 75;
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("throws on negative numbers", () => {
      describe("one negative number in input", () => {
        test.each([
          { input: "1,2,-3", expected: "negatives not allowed: -3" },
          { input: "10,-20,30", expected: "negatives not allowed: -20" },
          { input: "-1000,20,2", expected: "negatives not allowed: -1000" },
        ])("input: $input", ({ input, expected }) => {
          // Arrange
          const sut = createSut();
          // Act/Assert
          expect(() => {
            sut.add(input);
          }).toThrow(expected);
        });
      });
      describe("many negative numbers in input", () => {
        test.each([
          { input: "1,-2,-3", expected: "negatives not allowed: -2,-3" },
          {
            input: "-10,-20,-30",
            expected: "negatives not allowed: -10,-20,-30",
          },
          {
            input: "-1000,-20,2,-30",
            expected: "negatives not allowed: -1000,-20,-30",
          },
        ])("input: $input", ({ input, expected }) => {
          // Arrange
          const sut = createSut();
          // Act/Assert
          expect(() => {
            sut.add(input);
          }).toThrow(expected);
        });
      });
    });

    describe("large numbers (>1000) should be filtered out", () => {
      test.each([
        { input: "1,2,1001", expected: 3 },
        { input: "1,2,1000", expected: 1003 },
        { input: "1000,1001,999", expected: 1999 },
      ])("input: $input", ({ input, expected }) => {
        // Arrange
        const sut = createSut();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });
  });

  function createSut() {
    return new StringCalculator();
  }
});
