function printFizzBuzz() {
    let a = document.getElementById("number").value;

    a % 3 == 0 && a % 5 == 0
        ? (document.getElementById("result").innerText = "FizzBuzz")
        : a % 3 == 0
            ? (document.getElementById("result").innerText = "Fizz")
            : a % 5 == 0
                ? (document.getElementById("result").innerText = "Buzz")
                : "";
}