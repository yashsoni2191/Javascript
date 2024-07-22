function checkgrade() {
    var grade = document.getElementById("grade").value;

    if (grade >= 90) {
        alert("A");
    } else if (grade >= 80 && grade <= 89) {
        alert("B");
    } else if (grade >= 70 && grade <= 79) {
        alert("C");
    } else if (grade >= 60 && grade <= 69) {
        alert("D");
    } else {
        alert("F");
    }

}