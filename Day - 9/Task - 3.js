function fun(){
    let n = document.getElementById("number")
    let output = ''
    let i = 1

    while(i <= n){
        if(i %3 == 0 && i %5 == 0){
            output += 'FizzBuzz <br>'
        }
        else if(i % 3 == 0){
            output += 'Fizz <br>'
        }
        else if(i % 5 == 0){
            output += 'Buzz <br>'
        }
        else{
            output += i + '<br>'
        }
    }
    document.getElementById('result').innerHTML = output
}