let displayValue = '0';

function updateDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = displayValue.replace(/\^/g, '**');
        const result = eval(displayValue); // Using eval() for simplicity, not recommended for production
        document.getElementById('display').innerText = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '0';
    }
}
