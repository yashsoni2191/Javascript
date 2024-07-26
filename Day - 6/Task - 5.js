function checkPasswordStrength() {
    let password = document.getElementById('password').value;
    let strength;

    if (password.length < 6) {
        strength = 'weak';
    } else if (password.length <= 10) {
        strength = 'medium';
    } else {
        strength = 'strong';
    }

    document.getElementById('result').innerText = `The password strength is ${strength}.`;
}