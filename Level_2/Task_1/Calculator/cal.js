// Function to initialize calculator
function initCalculator() {
    // Get display element
    const display = document.getElementById('display');

    // Get all keys
    const keys = document.querySelectorAll('.keys button');

    // Add event listeners to keys
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;
            if (keyValue === 'Calculate') { // Changed from '=' to 'Calculate'
                calculate(display.value);
            } else if (keyValue === 'C') {
                clearDisplay();
            } else if (keyValue === 'Delete') {
                deleteLastCharacter();
            } else {
                appendToDisplay(keyValue);
            }
        });
    });
}

// Function to append value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete last character from display
function deleteLastCharacter() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to calculate result
function calculate(expression) {
    try {
        const result = eval(expression);
        displayResult(result);
    } catch (error) {
        displayResult('Error');
    }
}

// Function to display result
function displayResult(result) {
    document.getElementById('display').value = result;
}

// Initialize calculator when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCalculator();
});
