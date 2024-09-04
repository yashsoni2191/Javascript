let areAllStringsLong = (strings) => strings.every((str) => str.length > 5)

let strs = ["banana", "cherry", "applepie"]
let allLong = areAllStringsLong(strs)
console.log(allLong)