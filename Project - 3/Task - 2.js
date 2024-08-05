function YearFun() {
    let LeapYear = document.getElementById("yearNumber").value;

    if (LeapYear % 4 == 0 && LeapYear % 100 != 0 || (LeapYear % 400 == 0)) {
        document.getElementById("result").innerText = "Leap year: " + LeapYear;
    } else {
        document.getElementById("result").innerText = "Not a leap year: " + LeapYear;
    }
}