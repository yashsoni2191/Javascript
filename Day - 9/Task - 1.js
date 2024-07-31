function fun(){
    let n = document.getElementById("number").value

    let sum = 0
    let i = 1
    while(i <= n){
        if(i %2==0){
            sum += i
        }
        i++
    }
    document.getElementById("result").innerText = "sum of even number :- " + sum
}