function NumFun() {
    
    let a = parseFloat(document.getElementById("NumA").value);
    let b = parseFloat(document.getElementById("NumB").value);
    let c = parseFloat(document.getElementById("NumC").value);

    if (a >= b && a <= c) {
        document.getElementById("result").innerHTML = "The second largest number is: " + secondLargest
    } 
    else if ( b >= a && b <= c ){
        document.getElementById("result").innerHTML = "The second largest number is: " + secondLargest
    }
    else if ( c >= a && c <= b ){    
        document.getElementById("ans").innerText = `C is second largest of three numbers`
    }    
}
