function checkDiscount() {
    var amount = document.getElementById("amount").value;

    let discountRate = amount > 100 ? 0.00 :
            amount <= 100 && amount >= 500 ? 0.5 :
            amount <= 500 && amount >= 1000 ? 0.10 : 0.00;

    let discountAmount = amount * discountRate
        let finalAmount = amount - discountAmount

        document.getElementById('showfinal').innerText = 
                `Original amount: $${amount}\n` +
                `Discount amount: $${discountAmount}\n` +
                `Final amount after discount: $${finalAmount}`;
}