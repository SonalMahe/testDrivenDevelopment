// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../../src/unitJS/fizzbuzz.js";

describe("fizzBuzz", () => {
  it("returns 'Fizz' for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("returns 'Buzz' for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("returns 'FizzBuzz' for multiples of both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns the number for non-multiples", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});