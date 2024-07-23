function checkAge() {
    var age = document.getElementById("age").value;

    if (age <= 1) {
        document.getElementById("showage").innerText = "Infant"
    }
    else if (age >= 1 && age <= 12) {
        document.getElementById("showage").innerText = "Child"
    }
    else if (age >= 13 && age <= 19) {
        document.getElementById("showage").innerText = "Teenager"
    }
    else if (age >= 20 && age <= 64) {
        document.getElementById("showage").innerText = "Adult"
    }
    else if (age == 65) {
        document.getElementById("showage").innerText = "Senior Citizen"
    }
    else {
        document.getElementById("showage").innerText = "Invalid Age"
    }
}