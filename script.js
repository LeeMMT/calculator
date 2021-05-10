const display = document.querySelector('#display p');
const numBtn = document.querySelectorAll('.num-symbol');
const operatorBtn = document.querySelectorAll('.operator-symbol');
const equalsBtn = document.querySelector('#equals');
const backSpaceBtn = document.querySelector('#backspace');
const clearBtn = document.querySelector('#clear');
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
    switch(operator) {
        case '＋':
            num1 = add(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '－':
            num1 = subtract(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '×':
            num1 = multiply(num1, num2).toString();
            num2 = '';
            operator = '';
            display.textContent = num1;
            break;
        case '÷':
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
        display.textContent += this.textContent;
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

//Event listeners

numBtn.forEach(element => element.addEventListener('click', enterDigit));

operatorBtn.forEach(element => element.addEventListener('click', enterOperator));

equalsBtn.addEventListener('click', operate);

backSpaceBtn.addEventListener('click', backSpace);

clearBtn.addEventListener('click', clearDisplay);

window.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 10) {
        if (!operator) {
            num1 += e.key;
            display.textContent += e.key;
        } else if (operator) {
            num2 += e.key;
            display.textContent += e.key;
            }
    }
})
