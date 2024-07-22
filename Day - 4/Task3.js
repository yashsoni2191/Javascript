function checkLeapYear(){
    var year = document.getElementById("yearInput").value;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert("Leap Year")
    }
    else{
        alert("Not a Leap Year")
    }
}