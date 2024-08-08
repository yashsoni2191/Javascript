function calculateSquare() {
    
    let userInput = prompt("Please enter a number:");
    
    let number = Number(userInput);
    
    let square = number * number;
    
    alert("The square of " + number + " is " + square);
}