let amount = 200, tip = 15, tax = 25, mycost = 20;

let total = (amount * tax)/100;
let cost = (amount * tip)/100;

let totalcost = amount + total + cost + mycost

console.log("Total bill amount is : ",totalcost);