export class StringCalculator {
  public add(input: string) {
    if (input.length === 0) {
      return 0;
    }
    let delimiter: string | RegExp = /,|\n/;
    if (this.hasCustomDelimiter(input)) {
      delimiter = this.extractCustomDelimiter(input);
      input = this.removeCustomDelimiterHeader(input);
    }
    let parsedNumbers = this.parseNumbers(input, delimiter);
    this.throwIfAnyNegativeNumbers(parsedNumbers);
    parsedNumbers = parsedNumbers.filter((n) => n <= 1000);
    return this.sumTotal(parsedNumbers);
  }

  private sumTotal(parsedNumbers: number[]) {
    return parsedNumbers.reduce((n, total) => total + n);
  }

  private throwIfAnyNegativeNumbers(parsedNumbers: number[]) {
    const negativeNumbers = parsedNumbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw "negatives not allowed: " + negativeNumbers.join(",");
    }
  }

  private parseNumbers(input: string, delimiter: string | RegExp) {
    return input.split(delimiter).map((s) => Number.parseInt(s));
  }

  private removeCustomDelimiterHeader(input: string): string {
    return input.slice(3);
  }

  private extractCustomDelimiter(input: string): string | RegExp {
    return input[2];
  }

  private hasCustomDelimiter(input: string) {
    return input.startsWith("//");
  }
}
