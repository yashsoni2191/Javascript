function checkBill(){
    var elec = document.getElementById("elec").value;

    let tarrifRate
    if(elec <= 100){
        tarrifRate = elec * 0.1
        document.getElementById("showbill").innerText = tarrifRate
    }
    else if(elec > 101 && elec <= 200){
        tarrifRate = elec * 0.15
        document.getElementById("showbill").innerText = tarrifRate
    }
    else if(elec > 201 && elec <= 300){
        tarrifRate = elec * 0.2
        document.getElementById("showbill").innerText = tarrifRate
    }
    else if(elec > 300){
        tarrifRate = elec * 0.25
        document.getElementById("showbill").innerText = tarrifRate
    }
}