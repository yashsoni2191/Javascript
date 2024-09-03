let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    result[result.length] = arr[i] * arr[i]
  }
}

console.log(result)
