function categorizeAge() {
    let age = document.getElementById("age").value
    let result = document.getElementById("result")

    let category = 
    (age >= 0 && age <= 12) ? "Child" :
        (age >= 13 && age <= 19) ? "Teenager" :
            (age >= 20 && age <= 59) ? "Adult" :
                (age >= 60) ? "Senior" : "Invalid age";

    document.getElementById("result").innerText = `You are a ${category}`;
}