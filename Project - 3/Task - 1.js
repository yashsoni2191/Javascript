function YearFun(){
    
    let year = document.getElementById("yearNumber").value
    let year2 = 2024

     let classification = year < 0 ? "Ancient" :
    (year >= 1 && year <= 1500) ? "Medieval" :
    (year >= 1501 && year <= year2) ? "Modern" :
    (year > year2) ? "Future" : "Invalid"

    document.getElementById("result").innerText = classification

}   