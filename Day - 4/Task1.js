function checknumber() {

  var number =document.getElementById('numberinput').value

    if (number > 0) {
        alert("Number is positive!")
    }
    else if (number < 0) {
        alert("Number is negative")
    }
    else {
        alert("Number is zero")
    }
}