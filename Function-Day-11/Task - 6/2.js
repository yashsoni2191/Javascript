function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let primeCount = 0;
for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        primeCount++;
    }
}
console.log("Count of Prime Numbers between 1 to 50:", primeCount);