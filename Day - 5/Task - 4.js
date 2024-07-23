function checkYear(){
    var year = document.getElementById("year").value;

    let presntYear = 2024

    if(year <= 0){
        document.getElementById("showyear").innerText = "Ancient"
    }
    else if(year >= 1 && year <= 1500){
        document.getElementById("showyear").innerText = "Medieval"
    }
    else if(year >= 1501 && year <= presntYear){
        document.getElementById("showyear").innerText = "Modern"
    }
    else if(year > presntYear){
        document.getElementById("showyear").innerText = "Future"
    }
}