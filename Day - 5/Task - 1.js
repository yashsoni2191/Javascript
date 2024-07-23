function checkIncome(){
    var income = document.getElementById("income").value;

    let tax;
    if(income <= 10000){
        tax = income * 0.05;
        document.getElementById("show").innerText = tax 
    }
    else if(income > 10001 && income <= 50000){
        tax = income * 0.10;
        document.getElementById("show").innerText = tax
    }
    else if(income > 50001 && income <= 100000){
        tax = income * 0.15;
        document.getElementById("show").innerText = tax
    }
    else if(income > 100001){
        tax = income * 0.20;
        document.getElementById("show").innerText = tax
    }
    else{
        document.getElementById("show").innerText = "Please enter a valid number"
    }
}