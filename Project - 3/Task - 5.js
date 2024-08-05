function GPA(){
    let gpa = document.getElementById("GPA").value

    let grade = (gpa >= 90 && gpa <= 100) ? 4.0:
    (gpa >= 80 && gpa <= 89) ? 3.0:
    (gpa >= 70 && gpa <= 79) ? 2.0:
    (gpa >= 60 && gpa <= 69) ? 1.0 : 0.0
    

    document.getElementById("result").innerText = "GPA is :- " + grade
}