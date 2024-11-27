// Append value to the screen
function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

// Clear the screen
function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
}

// Delete the last character
function deleteLast() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

