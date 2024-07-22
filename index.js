document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    function input(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (!/^[0-9+\-*/%]$/.test(key)) {
            alert("Only numbers are allowed");
            event.preventDefault();
        } else {
            input(key);
        }

        if (key === 'Enter') {
            calculate();
            event.preventDefault();
        }

        if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
            event.preventDefault();
        }
    });

    window.input = input;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});
