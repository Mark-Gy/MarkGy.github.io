// JavaScript code of Ron Karlo Quodala
// Improved by Mark
let currentInput = '';
let isTranslated = false;
let originalInput = ''; 

function pressDigit(key) {
    if (currentInput === '0' && key === '0') {
        return;
    } else if (currentInput === '0' && key !== '0') {
        currentInput = key;
    } else if (currentInput.length < 2) {
        currentInput += key;
    }
    document.getElementById('display').value = currentInput;
    isTranslated = false;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
    isTranslated = false;
}

function translateToWords() {
    const belowTwenty = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tenths = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (currentInput === '') {
        return;
    }

    if (!isTranslated) {
        originalInput = currentInput;

        if (currentInput < 20) {
            currentInput = belowTwenty[currentInput];
        } else {
            let tenthPart = Math.floor(originalInput / 10);
            let unitPart = originalInput % 10;
            currentInput = tenths[tenthPart] + (unitPart ? " " + belowTwenty[unitPart] : "");
        }
        isTranslated = true;
    } else {
        currentInput = originalInput;
        isTranslated = false;
    }

    document.getElementById('display').value = currentInput;
}
