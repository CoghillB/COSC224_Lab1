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
