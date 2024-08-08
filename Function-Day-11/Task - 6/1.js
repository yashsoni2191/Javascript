function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Prime Numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}