"use strict";
// Initial count value
let count = 0;
// Update the count display
const updateCountDisplay = () => {
    const countElement = document.getElementById("count");
    if (countElement) {
        countElement.textContent = count.toString();
    }
};
// Increment the count
const increment = () => {
    count += 1;
    updateCountDisplay();
};
// Decrement the count
const decrement = () => {
    count -= 1;
    updateCountDisplay();
};
// Reset the count
const reset = () => {
    count = 0;
    updateCountDisplay();
};
// Attach event listeners to buttons
const incrementButton = document.getElementById("increment-button");
if (incrementButton) {
    incrementButton.onclick = increment;
}
const decrementButton = document.getElementById("decrement-button");
if (decrementButton) {
    decrementButton.onclick = decrement;
}
const resetButton = document.getElementById("reset-button");
if (resetButton) {
    resetButton.onclick = reset;
}
