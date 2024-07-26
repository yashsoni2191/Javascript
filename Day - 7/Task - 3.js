function checkAge(){
    var age = document.getElementById("age").value;

    age > 1 ? console.log("infant"):
    age <= 1 && age >=12 ? console.log("Child"):
    age <= 13 && age >=19 ? console.log("Teenager"):
    age <= 20 && age >= 64 ? console.log("Adult"):
    age <= 65 ? console.log("Senior Citizen"): console.log
}