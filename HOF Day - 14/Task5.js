let arr = [1, 2, 3, 4, 5]
let allPositive = true

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        allPositive = false
        break
    }
}

console.log(allPositive)
