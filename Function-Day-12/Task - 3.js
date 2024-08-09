function countVowels(str) {
    let count = 0
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++
        }
    }
    
    return count;
}
console.log(countVowels("Hello World"))
