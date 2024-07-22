let amount = 100, tip = 20, tax = 10;

let total = amount + (amount * tip)/100;
let cost = total + (total * tax)/100;

console.log("Total bill amount is : ",total);