function fun(){
    let n = document.getElementById("number")
    let str = n.length

    if(n.length < 0){
        
        document.getElementById("result").innerText = 'the length of number is :- ' + n.length
    }

    
}