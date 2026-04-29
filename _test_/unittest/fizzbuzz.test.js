// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

import { describe, it, expect } from "vitest";
import  fizzbuzz from "../../src/unitJS/fizzbuzz.js";

describe("fizzbuzz for number 1-100", () => {
  for (let i = 1; i <= 100; i++) {
    const expected = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
                     (i % 3 === 0) ? "Fizz" :
                     (i % 5 === 0) ? "Buzz" : 
                     String(i)
  
    it(`returns ${expected} for ${i}`, () => {
      expect(fizzbuzz(i)).toBe(expected);
    });
  }
});



//   it("returns 'Fizz' for multiples of 3", () => {
//     expect(fizzbuzz(3)).toBe("Fizz");
//   });

//   it("returns 'Buzz' for multiples of 5", () => {
//     expect(fizzbuzz(5)).toBe("Buzz");
//   });

//   it("returns 'FizzBuzz' for multiples of both 3 and 5", () => {
//     expect(fizzbuzz(15)).toBe("FizzBuzz");
//   });

//   it("returns the number for non-multiples", () => {
//     expect(fizzbuzz(7)).toBe(7);
//   });
// });