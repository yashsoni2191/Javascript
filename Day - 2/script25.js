let amount = 200
tip = 0.15
tax = 0.25
serviceCharge = 20;

let totaltip = amount * tip;
let totaltax = amount * tax;

let totalcost = amount + totaltip + totaltax + serviceCharge 

console.log("Total bill amount is : ",totalcost);