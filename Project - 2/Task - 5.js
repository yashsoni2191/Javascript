function classifyNumber() {
    var n = document.getElementById('numberInput').value

    var result = (n > 0) ? 'Positive' :
                   (n < 0) ? 'Negative' : 'Zero';

    document.getElementById('result').innerText = result;
}