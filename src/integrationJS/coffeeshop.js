//coffeeshop.js-

export const createCoffee = (type) => {
  const menu = {
    espresso: 30,
    latte: 40,
    cappuccino: 35,
  };
  return { type: type, price: menu[type] };
};



// prepareOrder(drink)
// Logs "Preparing <type>..."
// Returns a randomly generated ticket number (integer between 0–999)
const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type} to the order...`);
  const ticketNumber = Math.floor(Math.random() * 1000);
  return ticketNumber;
};


// processPayment(ticketNumber, amount)
// Throws "No ticket number provided" if ticketNumber is falsy
// Logs "Payment of <amount> received for ticket #<ticketNumber>"
// Returns true
const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
};


// Write an integration test for:
// orderDrink("latte") , does the full flow return true ?
const orderDrink = (drinkType) => {
  const drink = createCoffee(drinkType);
  const ticketNumber = prepareOrder(drink);
  const paymentSuccess = processPayment(ticketNumber, drink.price);
  return paymentSuccess;
};

export { prepareOrder, processPayment, orderDrink };    