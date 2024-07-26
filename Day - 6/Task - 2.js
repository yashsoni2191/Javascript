function displayInterest(amount, years) {

    var amount = document.getElementById('amount').value
    var years = document.getElementById('years').value

    let rate
    if (amount < 1000) {
        rate = 0.05
    } else if (amount <= 5000) {
        rate = 0.07
    } else {
        rate = 0.10
    }
    var interest = amount * rate * years

    document.getElementById('result').innerText = `The interest amount is ${interest}`
}
