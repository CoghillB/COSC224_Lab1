let sum = Number(document.getElementById('display').innerText);
let lastOperator = "";
let next = 0;

// Attach event listeners to buttons on page load
window.onload = function () {
    // Attach listeners to number buttons
    //we consider "." to be a number button for this purpose
    document.querySelectorAll(".button.number").forEach((button) => {
        button.addEventListener("click", () => {
            const number = button.innerText;
            numberPressed(number);
        });
    });
}

// Attach listeners to operator buttons
document.querySelectorAll(".button.operator").forEach((button) => {
    button.addEventListener("click", () => {
        const operation = button.innerText;
        if (operation === "=") {
            equalsPressed();
        } else {
            operationPressed(operation);
        }
    });
});

// Attach listener to the clear button
document.querySelector(".button.clear").addEventListener("click", () => {
    document.getElementById("display").innerText = "0";
    sum = 0;
});

// Function for when a number button is pressed
function numberPressed(number) {
    console.log(`Number ${number} pressed, sum=${sum}`);
    if (document.getElementById("display").innerText === "0" && number !== ".") {
        document.getElementById("display").innerText = number;
    } else {
        //if the button is not a decimal, or if we do not already have a decimal
        if (number !== "." || document.getElementById("display").innerText.indexOf(".") === -1) {
            document.getElementById("display").innerText += number;
        }
    }
}

function operationPressed(operator) {
    next = Number(document.getElementById("display").innerText);
    switch (lastOperator) {
        case "+":
            sum += next;
            break;
        case "-":
            sum -= next;
            break;
        case "*":
            sum *= next;
            break;
        case "/":
            sum /= next;
            break;
        default:
            sum = next;
    }

    lastOperator = operator;
    console.log(`operator=${operator}, sum=${sum}`);
    document.getElementById("display").innerText = "0";
}

function equalsPressed() {
    operationPressed("");
    document.getElementById("display").innerText = sum;
}