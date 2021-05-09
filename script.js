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
            display.textContent = add(num1, num2);
            num1 = add(num1, num2);
            num2 = '';
            operator = '';
            break;
        case '－':
            display.textContent = subtract(num1, num2);
            num1 = subtract(num1, num2);
            num2 = '';
            operator = '';
            break;
        case '×':
            display.textContent = multiply(num1, num2);
            num1 = multiply(num1, num2);
            num2 = '';
            operator = '';
            break;
        case '÷':
            display.textContent = divide(num1, num2);
            num1 = divide(num1, num2);
            num2 = '';
            operator = '';
            break;
    }
    }
}

//Display

const enterDigit = function() {
    if (!operator) {
        num1 += this.textContent;
        display.textContent += this.textContent;
    } else if (operator) {
        num2 += this.textContent;
        display.textContent += this.textContent;
    }
}

const enterOperator = function() {
    if (!operator && num1) {
        operator = this.textContent;
        display.textContent += this.textContent;
    }
}

const backSpace = function() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if (num2) {
        num2 = num2.slice(0, num2.length -1)
    } else if (operator) {
        operator = '';
    } else if (num1) {
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