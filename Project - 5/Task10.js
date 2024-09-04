let doubleNumbers = (numbers) => {
    let doubledArray = []
    for (let i = 0; i < numbers.length; i++) {
        doubledArray.push(numbers[i] * 2)
    }
    return doubledArray
}

let nums = [1, 2, 3, 4]
let doubled = doubleNumbers(nums)
console.log(doubled)