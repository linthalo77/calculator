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
    if(display.textContent === "0") {
        display.textContent = num;
        displayContent = display.textContent;
    } else {
        display.textContent += num;
        displayContent = display.textContent;
    }
}

function clearDisplay() {
    display.textContent = "";
    displayContent = display.textContent;
}

function evaluate() {
    clearDisplay();
    let result = operate(num1, num2, operator);
    displayDigit(result);
    num1 = displayContent;
    num2 = "";
}

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        switch(e.target.className) {
            case "digit":
                if(operator == "") {
                    displayDigit(e.target.textContent);
                    num1 = displayContent;
                } else if (operator != "") {
                    if (needClear) {
                        clearDisplay();
                        needClear = false;
                    }
                    displayDigit(e.target.textContent);
                    num2 = displayContent;
                }
                break;
            case "operator":
                needClear = true;
                if (num1 != "" && num2 != "" && operator != "") {
                    evaluate();
                    operator = e.target.textContent;
                } else {
                    operator = e.target.textContent;
                }
                break;
            case "equals":
                if (num1 != "" && num2 != "" && operator != "") {
                    evaluate();
                } else if (num1 != "" && operator != ""){
                    num2 = num1;
                    evaluate();
                }
                break;
            case "clear":
                clearDisplay();
                displayDigit("0");
                num1 = "0";
                num2 = "";

                operator = "";
                needClear = false;
                displayContent = "0";
            default: 
                console.log("No valid button");
            }
    })
})

let num1 = "0";
let num2 = "";

let operator = "";
let needClear = false;
let displayContent = "0";
