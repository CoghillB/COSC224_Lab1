// Functionality of HTML calculator

// Variables to keep track of the current operation, calculator will let user know what operation they are currently performing
// and the current number that is being inputted
let currentOperation = "";
let currentNumber = "";
let currentResult = 0;
let lastOperation = "";
let lastNumber = "";
let lastResult = 0;
let lastButton = "";
let lastButtonWasOperation = false;

// Function to update the display of the calculator
function updateDisplay() {
    document.getElementById("display").innerHTML = currentNumber;
}

// Function to update the current number being inputted
function updateCurrentNumber(number) {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

// Function to update the current operation being performed
function updateCurrentOperation(operation) {
    currentOperation = operation;
    updateDisplay();
}

// Function to update the current result of the calculator
function updateCurrentResult(result) {
    currentResult = result;
    updateDisplay();
}