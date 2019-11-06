let operand =  {
    symbol: ""
};

let userNum = {
    num1: 0,
    num2: ""
}

let display = document.querySelector(".firstDisplay");
let info = document.querySelector(".secondDisplay");

let firstNumber = 0;
let secondNumber = 0;

// Functions for actual number operation
function addNumber(x, y) {
    return x + y;
}

function subtractNumber(x, y) {
    return x - y;
}

function multiplyNumber(x, y) {
    return x * y;
}

function divideNumber(x, y) {
    return x / y;
}

// If operation button is clicked, changes operation and stores number
function add() {
    operand.symbol = "+";
    firstNumber = userNum.num1;
    info.textContent = operand.symbol;
    userNum.num2 = "";
    //console.log(firstNumber);
}

function subtract() {
    operand.symbol = "-";
    firstNumber = userNum.num1;
    info.textContent = operand.symbol;
    userNum.num2 = "";
    //console.log(firstNumber);
}

function multiply() {
    operand.symbol = "x";
    firstNumber = userNum.num1;
    info.textContent = operand.symbol;
    userNum.num2 = "";
    //console.log(firstNumber);
}

function divide() {
    operand.symbol = "/";
    firstNumber = userNum.num1;
    info.textContent = operand.symbol;
    userNum.num2 = "";
    //console.log(firstNumber);
}

// Stores number when clicked
function getNumber(x) {
    let numString = x.toString();
    userNum.num2 = userNum.num2.concat(numString);
    //console.log(userNum.num2);
    userNum.num1 = parseInt(userNum.num2);
    secondNumber = parseInt(userNum.num2);
    info.textContent = "";
    display.textContent = userNum.num2;
}

// When the equals key is pressed, does calculations
function operate(firstNumber, secondNumber) {
    if (operand.symbol == "+") {
        display.textContent = addNumber(firstNumber, secondNumber);
        userNum.num1 = addNumber(firstNumber, secondNumber);
        userNum.num2 = "";
    } else if (operand.symbol == "-") {
        display.textContent = subtractNumber(firstNumber, secondNumber);
        userNum.num1 = subtractNumber(firstNumber, secondNumber);
        userNum.num2 = "";
    } else if (operand.symbol == "x") {
        display.textContent = multiplyNumber(firstNumber, secondNumber);
        userNum.num1 = multiplyNumber(firstNumber, secondNumber);
        userNum.num2 = "";
    } else if (operand.symbol == "/") {
        display.textContent = divideNumber(firstNumber, secondNumber);
        userNum.num1 = divideNumber(firstNumber, secondNumber);
        userNum.num2 = "";
    }

    if (display.textContent == "Infinity") {
        display.textContent == "Nice try."
    }
}

// Clears stored numbers
function clearNumber() {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    userNum.num1 = 0;
    userNum.num2 = "";
    info.textContent = "";
}

// Backspaces current number

function deleteNumber() {
    let sliceString = userNum.num2;
    userNum.num2 = sliceString.slice(0, -1);
    userNum.num1 = parseInt(userNum.num2);
    secondNumber = parseInt(userNum.num2);
    //console.log("Num 2 = ", userNum.num2);
    //console.log("Num 1 = ", userNum.num1);
    //console.log(secondNumber);
    display.textContent = userNum.num2;
    info.textContent = "";
}

function decimalNumber() {
    userNum.num2 = userNum.num2.concat(".");
    //console.log(userNum.num2);
    userNum.num1 = parseInt(userNum.num2);
    secondNumber = parseInt(userNum.num2);
    info.textContent = "";
    display.textContent = userNum.num2;
}


/* TO-DO

--1. Make it so that you can get multiple digits DONE
--2. Make the clear button work DONE
--3. Make the backspace button work DONE
4. Make the decimal button work CURRENT
5. Implement negative numbers?

*/
