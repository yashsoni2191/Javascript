function fun(){
    let n = document.getElementById("number")
    let output = ''

    for(n = 1; n <= output; n++){
        if(n %3 == 0 && n %5 == 0){
            output += 'FizzBuzz <br>'
        }
        else if(n % 3 == 0){
            output += 'Fizz <br>'
        }
        else if(n % 5 == 0){
            output += 'Buzz <br>'
        }
        else{
            output += n + '<br>'
        }
    }
    document.getElementById('result').innerHTML = output
}