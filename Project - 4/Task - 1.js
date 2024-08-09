function sumOfDigits(number) {
    let sum = 0
    for (let temp = number; temp > 0; temp++) {
        sum += temp % 10
        temp = (temp / 10) | 0
    }
    return sum
}

let input = 12345
let output = sumOfDigits(input)
console.log(output)
