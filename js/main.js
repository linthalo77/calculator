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
    console.log(displayContent);
}

function storeNum() {
    numbers.push(+displayContent);
    console.log(numbers);
}

function clearDisplay() {
    display.textContent = "";
    displayContent = display.textContent;
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
                operator = e.target.textContent;
                break;
            case "equals":
                storeNum();
                clearDisplay();
                let result = operate(numbers[0], numbers[1], operator);
                displayDigit(result);
                hasOperator = false;
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
