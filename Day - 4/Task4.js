function checkquadrant(){
    var degree = document.getElementById("degree").value;

    if(degree > 0 && degree <= 90){
        alert("First Quadrant")
    }
    else if(degree > 90 && degree <= 180){
        alert("Second Quadrant")
    }
    else if(degree > 180 && degree <= 270){
        alert("Third Quadrant")
    }
    else if(degree > 270 && degree <= 360){
        alert("Fourth Quadrant")
    }
}