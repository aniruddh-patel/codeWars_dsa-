// 3. Product Stock Value
const products = [
  { name: "Laptop", price: 50000, qty: 2 },
  { name: "Phone", price: 20000, qty: 5 },
  { name: "Tablet", price: 15000, qty: 3 }
];
// 👉 Calculate the total stock value (price × qty) of all products.


function main(products) {
    let total_stock_value=0;
    products.forEach(element => {
        total_stock_value+=(element.price)*(element.qty)
    });
    console.log(total_stock_value);
}
main(products)