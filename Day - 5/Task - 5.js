function checkDiscount() {
    var amount = document.getElementById("amount").value;
    let discountAmount
    let finalAmount = amount

    if (amount <= 100) {
        document.getElementById("showoriginal").innerText = "No discount applied"
        document.getElementById("showdiscount").innerText = "No discount applied"
        document.getElementById("showfinal").innerText = "No discount applied"
    }
    else if (amount > 100 && amount <= 500) {
        discountAmount = amount * 0.5
        finalAmount = amount - discountAmount
        document.getElementById("showoriginal").innerText = "Original amount : " + amount
        document.getElementById("showdiscount").innerText = "Dicount amount : " + discountAmount
        document.getElementById("showfinal").innerText = "Final amount :" + finalAmount
    }
    else if (amount > 500 && amount <= 1000) {
        discountAmount = amount * 0.1
        finalAmount = amount - discountAmount
        document.getElementById("showoriginal").innerText = "Original amount : " + amount
        document.getElementById("showdiscount").innerText = "Dicount amount : " + discountAmount
        document.getElementById("showfinal").innerText = "Final amount : " + finalAmount
    }
    else if (amount > 1000) {
        discountAmount = amount * 0.15
        finalAmount = amount - discountAmount
        document.getElementById("showoriginal").innerText = "Original amount : " + amount
        document.getElementById("showdiscount").innerText = "Dicount amount : " + discountAmount
        document.getElementById("showfinal").innerText = "Final amount : " + finalAmount
    }

}