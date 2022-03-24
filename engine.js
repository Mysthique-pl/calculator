const display = document.getElementById('display-content');
const insert = document.getElementById('calc-insert');
const history = document.getElementById('hist-list');
const buttons = Array.from(document.getElementsByTagName('button'));

buttons.forEach((button) => {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const buttonContent = event.target.innerText;

    switch (buttonContent) {
        case 'AC':
            display.innerText = '';
            insert.innerText = '';
            break;
        case '=':
            if (display.innerText == '') {
                break;
            }
            calculateExpression();

            break;
        case '÷':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += '/';
            }
            break;
        case '×':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += '*';
            }
            break;
        case '+':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += buttonContent;
            }
            break;
        case '-':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/'
            ) {
                break;
            } else {
                display.innerText += buttonContent;
            }
            break;
        case '.':
            if (display.innerText[display.innerText.length - 1] === '.') {
                break;
            } else if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                display.innerText += '0.';
            } else {
                display.innerText += buttonContent;
            }
            break;
        case 'Clear History':
            history.innerHTML = '';
            display.innerText = '';
            insert.innerText = '';
            break;
        default:
            display.innerText += buttonContent;
    }
}

window.addEventListener('keyup', (event) => {
    const pressedKey = event.key;

    switch (pressedKey) {
        case 'Delete':
            display.innerText = '';
            insert.innerText = '';
            break;
        case 'Backspace':
            display.innerText = '';
            break;
        case 'Enter':
            if (display.innerText == '') {
                break;
            }
            calculateExpression();
            break;
        case '/':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += '/';
            }
            break;
        case '*':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += '*';
            }
            break;
        case '+':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                break;
            } else {
                display.innerText += pressedKey;
            }
            break;
        case '-':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/'
            ) {
                break;
            } else {
                display.innerText += pressedKey;
            }
            break;
        case ',':
        case '.':
            if (display.innerText[display.innerText.length - 1] === '.') {
                break;
            } else if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                display.innerText += '0.';
            } else {
                display.innerText += '.';
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '(':
        case ')':
            display.innerText += pressedKey;
            break;
        default:
            console.error('Not supported button click!');
    }
});

function calculateExpression() {
    insert.innerText = display.innerText + '=';

    try {
        const result = eval(display.innerText);
        const text = document.createTextNode(insert.innerHTML + result);
        const equation = document.createElement('li');

        equation.appendChild(text);
        history.appendChild(equation);
    } catch {
        display.innerText = 'Error';
    }
}
