let getEvenNumbers = (numbers) => numbers.filter((x) => x % 2 === 0)

let nums = [1, 2, 3, 4, 5, 6]
let evens = getEvenNumbers(nums)
console.log(evens)