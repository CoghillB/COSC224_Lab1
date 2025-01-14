let sum = 0;

switch (operator) {
    case "+":
        sum += document.getElementById("display").innerText;
        break;
    case "-":
        sum -= document.getElementById("display").innerText;
        break;
    case "*":
        sum *= document.getElementById("display").innerText;
        break;
    case "/":
        sum /= document.getElementById("display").innerText;
}

// Attach event listeners to buttons on page load
window.onload = function () {
    // Attach listeners to number buttons
    document.querySelectorAll(".button.number").forEach((button) => {
        button.addEventListener("click", () => {
            const number = button.innerText;
            numberPressed(number);
        });
    });
}

// Attach listener to the clear button
document.querySelector(".button.clear").addEventListener("click", () => {
    clearPressed();
});

// Function for when a number button is pressed
function numberPressed(number) {
    console.log(`Number ${number} pressed`);
}

// Function for when equals button is pressed
function equalsPressed() {
    document.querySelector(".display").innerText = "0";
}

