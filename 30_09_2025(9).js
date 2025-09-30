// 9. Shopping Cart Discount
const cart = [
  { item: "Shoes", price: 2000, qty: 2 },
  { item: "T-shirt", price: 800, qty: 3 },
  { item: "Jeans", price: 1500, qty: 1 }
];
// 👉 Apply a 10% discount on total bill and return final amount.

function main(){
    let totalBill=0
    cart.forEach(element => {
        const {price,qty}= element
        totalBill+=(price*qty);
    });
    console.log(discount(totalBill));
}
main();

function discount(totalBill){
    return parseFloat((((totalBill*90)/100).toFixed(2)));
}