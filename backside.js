function clearScreen() {
    var display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendElement(character) {
    var display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}