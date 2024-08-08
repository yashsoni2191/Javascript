function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let evenCount = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}
console.log("Count of Even Numbers between 1 to 100:", evenCount);