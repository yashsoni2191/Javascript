function total(){
    let income = document.getElementById("income").value
    let credit = document.getElementById("credit").value
    let loan = document.getElementById("loan").value

    let clarify = (income >= 50000 && credit >= 700 && loan >= income/2) ? "Eligible": 
    "Not Eligible";
    document.getElementById("result").innerText = clarify
}