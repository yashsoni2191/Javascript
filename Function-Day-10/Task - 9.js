function double(num) {
    console.log(num * 2);
}

function square(num) {
    console.log(num * num);
}

function doubleSquare(num) {
    const doubled = num * 2;
    square(doubled);
}

doubleSquare(3);  
