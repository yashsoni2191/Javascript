let getEvenNumbers = (numbers) => {
    let evenArray = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenArray.push(numbers[i])
        }
    }
    return evenArray
}

let nums = [1, 2, 3, 4, 5, 6]
let evens = getEvenNumbers(nums)
console.log(evens)