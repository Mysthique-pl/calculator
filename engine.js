const display = document.getElementById('display-content');
const insert = document.getElementById('calc-insert');
const history = document.getElementById('hist-list');
const buttons = Array.from(document.getElementsByTagName('button'));
console.log(buttons);
const buttonsMap = buttons.map((button) => {
    button.addEventListener('click', calculate);
});
function calculate(e) {
    switch (e.target.innerText) {
        case 'AC':
            display.innerText = '';
            insert.innerText = '';
            break;
        case '=':
            if (display.innerText == '') {
                break;
            }
            try {
                insert.innerText = display.innerText + '=';
                display.innerText = eval(display.innerText);
                let equation = document.createElement('li');
                let text = document.createTextNode(insert.innerHTML + display.innerHTML);
                equation.appendChild(text);
                history.appendChild(equation);
            } catch {
                display.innerText = 'Error';
            }
            break;
        case '÷':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                return;
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
                return;
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
                return;
            } else {
                display.innerText += e.target.innerText;
            }
            break;
        case '-':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/'
            ) {
                return;
            } else {
                display.innerText += e.target.innerText;
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
                display.innerText += e.target.innerText;
            }
            break;
        case 'Clear History':
            history.innerHTML = '';
            display.innerText = '';
            insert.innerText = '';
            break;
        default:
            display.innerText += e.target.innerText;
    }
}

window.addEventListener('keyup', (event) => {
    let pressedKey = event.key;
    //console.log(pressedKey);
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
            try {
                insert.innerText = display.innerText + '=';
                display.innerText = eval(display.innerText);
                let equation = document.createElement('li');
                let text = document.createTextNode(insert.innerHTML + display.innerHTML);
                equation.appendChild(text);
                history.appendChild(equation);
            } catch {
                display.innerText = 'Error';
            }
            break;
        case '/':
            if (
                display.innerText[display.innerText.length - 1] === '+' ||
                display.innerText[display.innerText.length - 1] === '-' ||
                display.innerText[display.innerText.length - 1] === '*' ||
                display.innerText[display.innerText.length - 1] === '/' ||
                display.innerText === ''
            ) {
                return;
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
                return;
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
                return;
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
                return;
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
            break;
    }
});
