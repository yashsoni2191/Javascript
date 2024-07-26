function checkCondition() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    var d = document.getElementById("d").value

    let largest = (a > b && a > c && a > d) ? a :
                  (b > a && b > c && b > d) ? b :
                  (c > a && c > b && c > d) ? c : d;

    document.getElementById("result").innerText = `The Largest number is ${largest}`;
}