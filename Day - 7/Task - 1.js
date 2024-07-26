function checkIncome() {
    var income = document.getElementById("income").value;

    let taxrate =
        income <= 10000 ? 0.05 :
            income >= 10001 && income <= 50000 ? 0.10 :
                income >= 50001 && income <= 100000 ? 0.15 :
                    income >= 100001 ? 0.20 : 0.00;

                        let taxamount = income * taxrate
                        document.getElementById("show").innerHTML = `The tax is ${taxamount}`;
}