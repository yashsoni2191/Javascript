function fun(){
    let num = document.getElementById("number").value
    let sum = 0

    for(let i = 1; i <= num; i++){
        if( i % 2 == 0){
            sum += i
        }
    }
    document.getElementById('result').innerText = "Sum of Number" + sum
}