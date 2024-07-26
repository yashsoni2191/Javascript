function classifyCharacter() {
    let ch = document.getElementById('characterInput').value;

    let result = 
        (ch >= 'A' && ch <= 'Z') ? 'Uppercase letter' :
            (ch >= 'a' && ch <= 'z') ? 'Lowercase letter' :
                (ch >= 0 && ch <= 10) ? 'Digit' :
                    'Special character';

    document.getElementById('result').innerText = result;
}