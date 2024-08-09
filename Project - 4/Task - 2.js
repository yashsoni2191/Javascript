function reverseString(str) {
    let reverseStr = ''
    for (let x = str.length - 1; x>=0; x--){
        reverseStr += str[x]
    }
    return reverseStr
}
console.log(reverseString("hello"));
