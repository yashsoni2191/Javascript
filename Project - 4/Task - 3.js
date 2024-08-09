function countConsonants(str) {
    let consonantsCount = 0;
    const vowels = "aeiouAEIOU";
    
    for (let x = 0; x < str.length; x++) {
        let char = str[x];
        let isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
        let isVowel = false;
        
        for (let y = 0; y < vowels.length; y++) {
            if (char == vowels[y]) {
                isVowel = true;
            }
        }
        
        if (isLetter && !isVowel) {
            consonantsCount++;
        }
    }
    
    return consonantsCount;
}

let input = "Hello, World!";
let output = countConsonants(input);
console.log(output); 
