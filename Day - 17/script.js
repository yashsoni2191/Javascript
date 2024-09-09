let arr = [
    "https://i.pinimg.com/originals/d4/32/30/d4323062065c96e06e794370cfc01571.png",

    "https://wallpaperbat.com/img/144237-wallpaper.jpg",

    "https://wallpaper.dog/large/10697437.jpg",

    "https://wallpaperswide.com/download/space_aesthetic-wallpaper-2160x1440.jpg"
]   


let n = 0;

function Prev(){

    n++;
    
    if( n == arr.length){
        n=0
    }
   
    document.getElementById("slider").innerHTML =`<img src="${arr[n]}">`
        
}

function Next(){
    n--;

    if( n<0 ){
        n=arr.length-1;
    }

    document.getElementById("slider").innerHTML =`<img src="${arr[n]}">`
    
}
document.getElementById(Prev())