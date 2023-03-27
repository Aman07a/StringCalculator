export class StringCalculator {
  public add(input: string) {
    if (input.length === 0) {
      return 0;
    }
    if (input.includes(",")) {
      return input
        .split(",")
        .map((s) => Number.parseInt(s))
        .reduce((n, total) => total + n);
    }
    return Number.parseInt(input);
  }
}
