
import { createCoffee, prepareOrder, processPayment, orderDrink } from "../../src/integrationJS/coffeeshop";
import { describe, test, expect } from "vitest";

describe("Coffee Shop unit Test", () => {
  test("createCoffee returns correct type and price for known type", () => {
    const coffee = createCoffee("latte");
    expect(coffee).toEqual({ type: "latte", price: 40 });
  });


  test("createCoffee returns undefined price for unknown type", () => {
    const coffee = createCoffee("mocha");
    expect(coffee).toEqual({ type: "mocha", price: undefined });
  });


  test("prepareOrder returns a valid ticket number", () => {
    const drink = createCoffee("espresso");
    const ticketNumber = prepareOrder(drink);
    expect(typeof ticketNumber).toBe("number");
    expect(Number.isInteger(ticketNumber)).toBe(true);
    expect(ticketNumber).toBeGreaterThanOrEqual(0);
    expect(ticketNumber).toBeLessThan(1000);
  });

  test("orderDrink returns true for a valid drink order", () => {
    const result = orderDrink("cappuccino");
    expect(result).toBe(true);
  });
});

//integration testing --

describe("Coffee Shop Integration Test", () => {
  test("should successfully complete a full coffee order", () => {
    const result = orderDrink("latte");
    expect(result).toBe(true);
  });
});