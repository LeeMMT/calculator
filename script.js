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
    allowedkeyPressOpKeys: ['+', '-', 'c'],
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

const convert = function() {
    if (num2 && num2 < 0 || num2 > 0) {
        (num2 < 0) ? num2 = Math.abs(+num2) : num2 = `-${num2}`;
        display.textContent = `${num1}${operator}${num2}`;
    } else if (num1 && !operator && (num1 < 0 || num1 > 0)) {
        (num1 < 0) ? num1 = Math.abs(+num1) : num1 = `-${num1}`;
        display.textContent = `${num1}${operator}${num2}`;
        display.textContent = num1;
    }
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
    if (keyObj.allowedDigitKeys.includes(!e.key)) {
        return;
    }
    if (keyObj.allowedDigitKeys.includes(e.key)) {
        let btnToFlash = Array.from(calculatorBtns).filter(element => element.textContent === e.key);
        btnToFlash[0].style.backgroundColor = '#30312E';
        setTimeout(() => {btnToFlash[0].style.backgroundColor = '#2A2A28'}, 125);
    } else if (keyObj.allowedkeyPressOpKeys.includes(e.key)) {
        let btnToFlash = Array.from(calculatorBtns).filter(element => element.textContent === e.key);
        btnToFlash[0].style.backgroundColor = '#3C3E3C';
        setTimeout(() => {btnToFlash[0].style.backgroundColor = '#30312E'}, 125);
    } else {
        switch (e.key) {
            case '/':
                calculatorBtns[1].style.backgroundColor = '#3C3E3C';
                setTimeout(() => {calculatorBtns[1].style.backgroundColor = '#30312E'}, 125);
                break;
            case 'x':
            case 'X':
                calculatorBtns[2].style.backgroundColor = '#3C3E3C';
                setTimeout(() => {calculatorBtns[2].style.backgroundColor = '#30312E'}, 125);
                break;
            case '=':
                equalsBtn.style.backgroundColor = '#3C3E3C';
                setTimeout(() => {equalsBtn.style.backgroundColor = '#30312E'}, 125);
                break;
            case 'Backspace':
                backSpaceBtn.style.backgroundColor = '#3C3E3C';
                setTimeout(() => {backSpaceBtn.style.backgroundColor = '#30312E'}, 125);
                break;
            case 'C':
                clearBtn.style.backgroundColor = '#3C3E3C';
                setTimeout(() => {clearBtn.style.backgroundColor = '#30312E'}, 125);
                break;
        }
    }
}

//Keyboard support

const keySupport = function(e) {
    keyPress(e);
    if (keyObj.allowedDigitKeys.includes(e.key)) {
        if (!operator) {
            if (e.key === '.' && num1.includes('.')) {
                return;
            }
            num1 += e.key;
            display.textContent += e.key;
        } else if (operator) {
            if (e.key === '.' && num2.includes('.')) {
                return;
            }
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
        
    }
    
    switch (e.key) {
        case '=':
        case 'Enter':
            operate();
            break;
        case 'Backspace':
            backSpace();
            break;
        case 'c':
        case 'C':
            clearDisplay();
            break;
    }
}

//Event listeners

numBtn.forEach(element => element.addEventListener('click', enterDigit));

operatorBtn.forEach(element => element.addEventListener('click', enterOperator));

equalsBtn.addEventListener('click', operate);

minusPlusBtn.addEventListener('click', convert);

backSpaceBtn.addEventListener('click', backSpace);

clearBtn.addEventListener('click', clearDisplay);

window.addEventListener('keydown', keySupport);

calculatorBtns.forEach(element => element.addEventListener('click', btnPress));