function fun(){
    let n = document.getElementById("facNumber")
    let factorial = 1

    while(n <= factorial){
        factorial *= n
    }
    document.getElementById('result').innerText = "Factorial number is " + factorial
}