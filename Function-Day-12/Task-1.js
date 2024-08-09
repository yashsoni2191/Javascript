function palindrome(str){
    
    let ans = ""

    for (let x = str.length - 1; x >= 0; x--) {
        ans += str[x]
    }
    if(ans == str){
        return true
    }
    else{
        return false
    }
}
console.log(palindrome("radar"))
