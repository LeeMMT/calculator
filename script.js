const display = document.querySelector('#display p');
const numBtn = document.querySelectorAll('.num-symbol');
const operatorBtn = document.querySelectorAll('.operator-symbol');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
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
        case '+':
            console.log('hi');
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
    }
}

//Display

const enterDigit = function() {
    if (!operator) {
        num1 = this.textContent;
        display.textContent += this.textContent;
    } else if (operator) {
        num2 = this.textContent;
        display.textContent += this.textContent;
    }
}

const enterOperator = function() {
    if (!operator && num1) {
        operator = this.textContent;
        display.textContent += this.textContent;
    }
}

//Event listeners

numBtn.forEach(element => element.addEventListener('click', enterDigit));

operatorBtn.forEach(element => element.addEventListener('click', enterOperator));

equalsBtn.addEventListener('click', operate);

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
});