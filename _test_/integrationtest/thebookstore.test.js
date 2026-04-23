import { findBook, reserveStock, confirmPurchase, purchaseBook } from "../../src/integrationJS/thebookstore";
import { describe, test, expect } from "vitest";

describe("The Bookstore Unit Test", () => {

  // --- findBook ---

  test("findBook returns correct title and price for 'dune'", () => {
    const book = findBook("dune");
    expect(book).toEqual({ title: "dune", price: 89 });
  });

  test("findBook returns correct title and price for 'neuromancer'", () => {
    const book = findBook("neuromancer");
    expect(book).toEqual({ title: "neuromancer", price: 79 });
  });

  test("findBook returns correct title and price for 'foundation'", () => {
    const book = findBook("foundation");
    expect(book).toEqual({ title: "foundation", price: 75 });
  });

  test("findBook returns undefined price for an unknown title", () => {
    const book = findBook("hobbit");
    expect(book).toEqual({ title: "hobbit", price: undefined });
  });

  // --- reserveStock ---

  test("reserveStock returns a number", () => {
    const book = { title: "dune", price: 89 };
    const code = reserveStock(book);
    expect(typeof code).toBe("number");
  });

  test("reserveStock returns an integer between 1000 and 9999 (inclusive)", () => {
    const book = { title: "neuromancer", price: 79 };
    const code = reserveStock(book);
    expect(Number.isInteger(code)).toBe(true);
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });

  // --- confirmPurchase ---

  test("confirmPurchase returns { success: true, code } for a valid reservation code", () => {
    const result = confirmPurchase(5432, 89);
    expect(result).toEqual({ success: true, code: 5432 });
  });

  test("confirmPurchase throws 'Invalid reservation' when code is 0", () => {
    expect(() => confirmPurchase(0, 89)).toThrow("Invalid reservation");
  });

  test("confirmPurchase throws 'Invalid reservation' when code is null", () => {
    expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation");
  });

  test("confirmPurchase throws 'Invalid reservation' when code is undefined", () => {
    expect(() => confirmPurchase(undefined, 89)).toThrow("Invalid reservation");
  });
});

// --- Integration Tests ---

describe("The Bookstore Integration Test", () => {

  test("purchaseBook('dune') completes full flow and returns success with valid code", () => {
    const result = purchaseBook("dune");
    expect(result.success).toBe(true);
    expect(typeof result.code).toBe("number");
    expect(result.code).toBeGreaterThanOrEqual(1000);
    expect(result.code).toBeLessThanOrEqual(9999);
  });

  test("purchaseBook('neuromancer') completes full flow and returns success with valid code", () => {
    const result = purchaseBook("neuromancer");
    expect(result.success).toBe(true);
    expect(typeof result.code).toBe("number");
    expect(result.code).toBeGreaterThanOrEqual(1000);
    expect(result.code).toBeLessThanOrEqual(9999);
  });

  test("purchaseBook('foundation') completes full flow and returns success with valid code", () => {
    const result = purchaseBook("foundation");
    expect(result.success).toBe(true);
    expect(typeof result.code).toBe("number");
    expect(result.code).toBeGreaterThanOrEqual(1000);
    expect(result.code).toBeLessThanOrEqual(9999);
  });
});
