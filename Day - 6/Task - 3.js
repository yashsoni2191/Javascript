function calculateTotalBill() {
    const amount = document.getElementById('amount').value
    let tax;
    let serviceCharge = 50;
    if (amount < 500) {
        tax = amount * 0.10
    } else if (amount <= 1000) {
        tax = amount * 0.15
    } else {
        tax = amount * 0.20
    }

    let total = amount + tax + serviceCharge;

    document.getElementById('result').innerText = `The total bill is ${total}`
}
