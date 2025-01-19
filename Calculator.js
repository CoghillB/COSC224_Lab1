let sum = Number(document.getElementById('display').innerText);
let lastOperator = "";
let next = 0;
let $display;

$(document).ready(function () {
    $display = $("#display");
    let sum = Number($display.text());
    let lastOperator = "";
    let next = 0;

    $(".button.number").on("click", function() {
        const number = $(this).text();
        numberPressed(number);
    });

    $(".button.operator").on("click", function() {
        const operation = $(this).text();
        if (operation === "=") {
            equalsPressed();
        } else {
            operationPressed(operation);
        }
    })

    $(".button.clear").on("click", function() {
        $display.text = "0";
        sum = 0;
        next = 0;
        lastOperator = ""
    })
})

let numberPressed = (number) => {
    let display = $("#display");
    if (display.text() === "0" && number !== ".") {
        display.text(number);
    } else {
        // If the button is not a decimal, or if we do not already have a decimal
        if (number !== "." || display.text().indexOf(".") === -1) {
            display.text(display.text() + number);
        }
    }
}

let operationPressed = (operator) => {
    next = Number($display.text());

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
    $display.text("0");
}

let equalsPressed = () => {
    operationPressed("");
    $display.text(sum);
}