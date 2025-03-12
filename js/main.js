const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digits>button");
const operators = document.querySelectorAll(".operators>button");
const equals = document.querySelector(".equals");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    a = +a;
    b = +b;
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            alert("Oops! Invalid operator.");
    }
}

function displayDigit(num) {
    display.textContent = num;
}



digits.forEach((digit) => {
    digit.addEventListener("click", function (e) {
        displayDigit(e.target.textContent);
        displayContent += e.target.textContent;
        console.log(displayContent);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", function (e) {
        displayContent += e.target.textContent;
        console.log(displayContent);
    })
})

equals.addEventListener("click", function (e) {
    num1 = +displayContent.charAt(0);
    operator = displayContent.charAt(1);
    num2 = +displayContent.charAt(2);
    let result = operate(num1, num2, operator);
    displayDigit(result);
    displayContent = result;
})


let displayContent = "";
let num1 = 0;
let operator = "+";
let num2 = 0;

/*if (displayContent.length >= 3) {
    num1 = +displayContent.charAt(0);
    operator = displayContent.charAt(1);
    num2 = +displayContent.charAt(2);
    operate(num1, num2, operator);
}*/


