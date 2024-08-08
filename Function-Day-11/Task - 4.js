function calculateFactorial(n) {
    let factorial = 1
    for (let i = 2; i <= n; i++) {
        factorial *= i
    }
    return factorial
}
const input = 5
const output = calculateFactorial(input)
console.log(output) 