const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");

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
    if (b === 0) 
        return "Snarky message";

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
    display.textContent += num;
    displayContent = display.textContent;
}

function storeNum() {
    numbers.push(+displayContent);
}

function clearDisplay() {
    display.textContent = "";
    displayContent = display.textContent;
}

function evaluate() {
    clearDisplay();
    console.log(numbers[0]);
    console.log(numbers[1]);
    let result = operate(numbers[0], numbers[1], operator);
    numbers = [];
    displayDigit(result);
}

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        switch(e.target.className) {
            case "digit":
                if(!hasOperator) {
                    displayDigit(+e.target.textContent);
                } else {
                    storeNum();
                    clearDisplay();
                    displayDigit(+e.target.textContent);
                }
                break;
            case "operator":
                hasOperator = true;
                if (numbers.length >= 1) {
                    storeNum();
                    evaluate();
                    operator = e.target.textContent;
                } else {
                    operator = e.target.textContent;
                }
                break;
            case "equals":
                if (numbers.length >= 1 && hasOperator) {
                    storeNum();
                    evaluate();
                    hasOperator = false;
                } else if (numbers.length < 1 && hasOperator){
                    storeNum();
                    numbers[1] = numbers[0];
                    evaluate();
                    hasOperator = false;
                }
                break;
            default: 
                console.log("No valid button");
            }
    })
})

let numbers = [];
let operator;
let hasOperator = false;
let displayContent;
