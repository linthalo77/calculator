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
}

function evaluateAndDisplay() {
    let temp = operate(num1, num2, operator);
    displayDigit(temp);

    num1 = temp;
    firstNum = true;
    num2 = '';
}

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        switch(e.target.className) {
            case "digit":
                console.log(firstNum);
                displayDigit(e.target.textContent);
                if (firstNum)
                    num1 += e.target.textContent;
                else 
                    num2 += e.target.textContent;
                break;
            case "operator":
                firstNum = !firstNum;
                operator = e.target.textContent;                
                display.textContent = "";
                break;
            case "equals":
                display.textContent = "";
                evaluateAndDisplay();

                break;
            default: 
                console.log("No valid button");
            }
    })
})


let firstNum = true;
let num1 = "";
let operator = "";
let num2 = "";
