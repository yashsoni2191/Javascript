function checkRange() {
    var number = document.getElementById("number").value;
   
    let num1 = 10
    let num2 = 100

    if(number > 10 && number < 100){
        alert("True")
    }
    else{
        alert("False")
    }
}