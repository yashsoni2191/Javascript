function checkTemperature(){
    var temperature = document.getElementById("temperature").value;

    if(temperature <= 0) {
        document.getElementById("showtemperature").innerHTML = "The temperature is too cold!"
    }
    else if(temperature > 0 && temperature <= 25) {
        document.getElementById("showtemperature").innerHTML = "The temperature is moderate!"
    }
    else {
        document.getElementById("showtemperature").innerHTML = "The temperature is too hot!"
    }
}