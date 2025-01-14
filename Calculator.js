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