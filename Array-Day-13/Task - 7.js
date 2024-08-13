let scores = [85, 92, 78, 95, 88]
let sum = 0

for (let x = 0; x < scores.length; x++) {
  sum += scores[x]
}

let average = sum / scores.length
console.log("Average score:", average)
