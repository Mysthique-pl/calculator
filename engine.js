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
            calculateExpression();
            break;
        case '÷':
            if (isOperatorAllowed()) {
                display.innerText += '/';
            }
            break;
        case '×':
            if (isOperatorAllowed()) {
                display.innerText += '*';
            }
            break;
        case '-':
        case '+':
            if (isOperatorAllowed()) {
                display.innerText += buttonContent;
            }
            break;
        case '.':
            if (getLastDisplayChar() === '.') {
                break;
            } else if (isLastCharOperator() || isDisplayEmpty()) {
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
            calculateExpression();
            break;
        case '/':
        case '*':
        case '+':
        case '-':
            if (isOperatorAllowed()) {
                display.innerText += pressedKey;
            }
            break;
        case ',':
        case '.':
            if (getLastDisplayChar() === '.') {
                break;
            } else if (isLastCharOperator() || isDisplayEmpty()) {
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
    const expression = display.innerText.toLocaleLowerCase().trim();

    if (!expression) {
        return;
    }
    if (expression.includes('error')) {
        display.innerText = '';
        return;
    }

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

function getLastDisplayChar() {
    return display.innerText[display.innerText.length - 1];
}

function isDisplayEmpty() {
    return display.innerText === '';
}

function isLastCharOperator() {
    return ['+', '-', '*', '/'].includes(getLastDisplayChar());
}

function isOperatorAllowed() {
    return !isLastCharOperator() && !isDisplayEmpty();
}
