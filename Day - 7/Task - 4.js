function checkYear(){
    var year = document.getElementById("year").value;

    year > 0 ? console.log("Ancient"):
    year < 1 && year > 1500 ? console.log("Medieval"):
    year < 1501 ? console.log("Modern"):console.log
}