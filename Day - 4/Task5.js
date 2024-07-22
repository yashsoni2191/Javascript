function checkTriangleType() {

    const sideA = document.getElementById("side1").value;
    const sideB = document.getElementById("side2").value;
    const sideC = document.getElementById("side3").value;

    if (sideA === sideB && sideB === sideC) {
        alert("Equilateral");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        alert("Isosceles");
    } else {
        alert("Scalene");
    }
}