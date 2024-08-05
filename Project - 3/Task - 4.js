function checkRange() {
    
    let num = document.getElementById("num").value;
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    let resultText = (num >= min && num <= max) ? "Within Range" : "Out of Range";

    document.getElementById("result").innerText = resultText;
}
