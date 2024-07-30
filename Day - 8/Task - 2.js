function fun() {
    let n = document.getElementById("facNumber")
    let factorial = 1

    for(let n = 1; n <= factorial; n++ ){
        factorial *= n
    }
    document.getElementById('result').innerText = "Factorial number is " + factorial
}