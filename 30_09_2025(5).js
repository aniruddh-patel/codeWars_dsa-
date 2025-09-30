// 5. Order Summary
const order = {
  id: 101,
  customer: "Kavya",
  items: [
    { product: "Book", price: 200, qty: 3 },
    { product: "Pen", price: 20, qty: 10 },
    { product: "Bag", price: 500, qty: 1 },
  ],
};
// 👉 Calculate the total amount of the order.

function main(order) {
  let total_amount = 0;
  order.items.forEach((element) => {
    let { price, qty } = element;
    total_amount += price * qty;
  });
  console.log(total_amount);
}
main(order);