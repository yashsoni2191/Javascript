function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let base = 2;
let exponent = 3;
let output = power(base, exponent);
console.log(output);
