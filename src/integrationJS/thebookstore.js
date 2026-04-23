// findBook(title)
// Accepts "dune" , "neuromancer" , or "foundation"
// Returns { title, price } using this catalogue:
// dune: 89
// neuromancer: 79
// foundation: 75
export const findBook = (title) => {
  const catalogue = {
    dune: 89,
    neuromancer: 79,
    foundation: 75,
  };
  return { title: title, price: catalogue[title] };
};


    // reserveStock(book)
    // Logs "Reserving stock for <title>"
    // Returns a reservation code, a random integer between 1000–9999 (inclusive)
  const reserveStock = (book) => {
  console.log(`Reserving stock for ${book.title} in library...`);
  const reservationCode = Math.floor(Math.random() * 9000) + 1000;
  return reservationCode;
};


// confirmPurchase(reservationCode, price)
// Throws "Invalid reservation" if reservationCode is falsy
// Logs "Purchase confirmed. Reservation: <code>, Amount: <price>"
// Returns { success: true, code: reservationCode }
const confirmPurchase = (reservationCode, price) => {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(`Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`);
  return { success: true, code: reservationCode };
};


// Write an integration test for:
// findBook("dune") , does the full flow return { success: true, code: reservationCode } ?
const purchaseBook = (title) => {
  const book = findBook(title);
  const reservationCode = reserveStock(book);
  const purchaseResult = confirmPurchase(reservationCode, book.price);
  return purchaseResult;
};

export { reserveStock, confirmPurchase, purchaseBook };