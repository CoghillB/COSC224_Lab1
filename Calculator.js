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

// Function to update the last operation that was performed
function updateLastOperation(operation) {
    lastOperation = operation;
}

// Function to update the last number that was inputted
function updateLastNumber(number) {
    lastNumber = number;
}

// Function to update the last result of the calculator
function updateLastResult(result) {
    lastResult = result;
}

// Function to update the last button that was pressed
function updateLastButton(button) {
    lastButton = button;
}

// Function to update whether the last button that was pressed was an operation
function updateLastButtonWasOperation(operation) {
    lastButtonWasOperation = operation;
}

// Function to clear the calculator
function clearCalculator() {
    currentOperation = "";
    currentNumber = "";
    currentResult = 0;
    lastOperation = "";
    lastNumber = "";
    lastResult = 0;
    lastButton = "";
    lastButtonWasOperation = false;
    updateDisplay();
}

// Function to handle when a number button is pressed
function numberPressed(number) {
    if (lastButtonWasOperation) {
        currentNumber = "";
    }
    updateCurrentNumber(number);
    updateLastButton(number);
    updateLastButtonWasOperation(false);
}

// Function to handle when an operation button is pressed
function operationPressed(operation) {
    if (currentOperation === "") {
        updateCurrentResult(parseFloat(currentNumber));
    } else {
        if (lastButtonWasOperation) {
            currentOperation = operation;
            return;
        }
        switch (currentOperation) {
            case "+":
                updateCurrentResult(currentResult + parseFloat(currentNumber));
                break;
            case "-":
                updateCurrentResult(currentResult - parseFloat(currentNumber));
                break;
            case "*":
                updateCurrentResult(currentResult * parseFloat(currentNumber));
                break;
            case "/":
                updateCurrentResult(currentResult / parseFloat(currentNumber));
                break;
            default:
                break;
        }
    }
    updateLastOperation(currentOperation);
    updateLastNumber(currentNumber);
    updateCurrentOperation(operation);
    updateLastButton(operation);
    updateLastButtonWasOperation(true);
}

// Function to handle when the equals button is pressed
function equalsPressed() {
    if (lastButtonWasOperation) {
        return;
    }
    switch (currentOperation) {
        case "+":
            updateCurrentResult(currentResult + parseFloat(currentNumber));
            break;
        case "-":
            updateCurrentResult(currentResult - parseFloat(currentNumber));
            break;
        case "*":
            updateCurrentResult(currentResult * parseFloat(currentNumber));
            break;
        case "/":
            updateCurrentResult(currentResult / parseFloat(currentNumber));
            break;
        default:
            break;
    }
    updateLastOperation(currentOperation);
    updateLastNumber(currentNumber);
    updateCurrentOperation("");
    updateLastButton("=");
    updateLastButtonWasOperation(true);
}

// Function to handle when the clear button is pressed
function clearPressed() {
    clearCalculator();
}