let hasAnyEvenNumber = (numbers) => numbers.some((x) => x % 2 === 0)

let nums = [1, 3, 5, 6, 7]
let hasEven = hasAnyEvenNumber(nums)
console.log(hasEven)