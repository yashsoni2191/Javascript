function checkBill() {
    var bill = document.getElementById("elec").value;

    let lightbill =
        bill <= 100 ? 0.1 :
            bill > 101 && bill < 200 ? 0.15 :
                bill > 201 && bill <= 300 ? 0.2 :
                    bill > 300 ? 0.25 : 0.00;

    let tarrifRate = bill * lightbill
    document.getElementById("showbill").innerHTML = tarrifRate;
}