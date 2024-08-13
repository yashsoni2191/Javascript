let ages = [25, 32, 18, 45, 28]
let oldestAge = ages[0]

for (let x = 1; x < ages.length; x++) {
  if (ages[x] > oldestAge) {
    oldestAge = ages[x]
  }
}

console.log("Oldest age:", oldestAge);
