const calculatorBtns = document.querySelectorAll('.num-symbol, .symbol, .operator-symbol, #minus-plus-btn');
const display = document.querySelector('#display p');
const numBtn = document.querySelectorAll('.num-symbol');
const operatorBtn = document.querySelectorAll('.operator-symbol');
const equalsBtn = document.querySelector('#equals');
const backSpaceBtn = document.querySelector('#backspace');
const clearBtn = document.querySelector('#clear');
const minusPlusBtn = document.querySelector('#minus-plus-btn');
const keyObj = {
    allowedDigitKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
    allowedOperatorKeys: ['+', '＋', '-', '－', '×', 'x', 'X', '÷', '/'],
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
}
let num1 = '';
let operator = '';
let num2 = '';

//operator functions

const add = function(num1, num2) {
    return +num1 + +num2;
}

const subtract = function(num1, num2) {
    return +num1 - +num2;
}

const multiply = function(num1, num2) {
    return +num1 * +num2;
}

const divide = function(num1, num2) {
    return +num1 / +num2;
}

const operate = function() {
    if (num1 && num2) {
    switch (operator) {
        case '＋':
        case '+':
            num1 = add(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '－':
        case '-':
            num1 = subtract(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '×':
        case 'x':
        case 'X':
            num1 = multiply(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '÷':
        case '/':
            num1 = divide(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '=':
            operate();
            break;
    }
    }
}

//Display

const enterDigit = function(e) {
    if (!operator) {
        if (this.textContent === '.' && num1.includes('.')) {
            return;
        }
        num1 += this.textContent;
        display.textContent += this.textContent;
    } else if (operator) {
        if (this.textContent === '.' && num2.includes('.')) {
            return;
        }
        num2 += this.textContent;
        display.textContent += this.textContent;
        }
}

const enterOperator = function() {
    if (!operator && num1) {
        operator = this.textContent;
        display.textContent += operator;
    } else if (num2) {
        operate();
        operator = this.textContent;
        display.textContent += operator;
    }
}

const backSpace = function() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if (num2) {
        num2 = num2.toString();
        num2 = num2.slice(0, num2.length -1)
    } else if (operator) {
        operator = '';
    } else if (num1) {
        num1 = num1.toString();
        num1 = num1.slice(0, num1.length - 1)
    }
}

const clearDisplay = function() {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
}

const btnPress = function(e) {
    if (this.classList.contains('num-symbol')) {
        this.style.backgroundColor = '#30312E';
        setTimeout(() => {this.style.backgroundColor = '#2A2A28'}, 125);
    } else {
        this.style.backgroundColor = '#3C3E3C';
        setTimeout(() => {this.style.backgroundColor = '#30312E'}, 125);
    }
}

const keyPress = function(e) {
    if (keyObj.allowedDigitKeys.includes(e.key)) {
        let btnToFlash = Array.from(calculatorBtns).filter(element => element.textContent === e.key);
        btnToFlash[0].style.backgroundColor = '#30312E';
        setTimeout(() => {btnToFlash[0].style.backgroundColor = '#2A2A28'}, 125);
    } else if (keyObj.allowedOperatorKeys.includes(e.key)) {
        let btnToFlash = Array.from(calculatorBtns).filter(element => element.textContent === e.key);
        btnToFlash[0].style.backgroundColor = '#30312E';
        setTimeout(() => {btnToFlash[0].style.backgroundColor = '#2A2A28'}, 125);
    }
}

//Keyboard support

const keySupport = function(e) {
    keyPress(e);
    if (keyObj.allowedDigitKeys.includes(e.key)) {
        if (!operator) {
            num1 += e.key;
            display.textContent += e.key;
        } else if (operator) {
            num2 += e.key;
            display.textContent += e.key;
            }
    } else if (keyObj.allowedOperatorKeys.includes(e.key)) {
        if (!operator && num1) {
            operator = e.key;
            display.textContent += e.key;
        } else if (num2) {
            operate();
            operator = e.key;
            display.textContent += operator;
        }
        
    } else if (e.key === '=' || e.key === 'Enter') {
        operate();
    } else if (e.key === 'Backspace') {
        backSpace();
    }
}

//Event listeners

numBtn.forEach(element => element.addEventListener('click', enterDigit));

operatorBtn.forEach(element => element.addEventListener('click', enterOperator));

equalsBtn.addEventListener('click', operate);

backSpaceBtn.addEventListener('click', backSpace);

clearBtn.addEventListener('click', clearDisplay);

window.addEventListener('keydown', keySupport);

calculatorBtns.forEach(element => element.addEventListener('click', btnPress));