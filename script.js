const display = document.querySelector('#display p');
const numBtn = document.querySelectorAll('.num-symbol');
const clearBtn = document.querySelector('#clear');
let displayText = '';

//operator functions

const add = function(num1, num2) {
    return +num1 + +num2;
};

const subtract = function(num1, num2) {
    return +num1 - +num2;
};

const multiply = function(num1, num2) {
    return +num1 * +num2;
};

const divide = function(num1, num2) {
    return +num1 / +num2;
};

const operate = function(num1, op, num2) {
    switch (op) {
        case '+':
            add(num1, num2);
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
};

//Display

const enterDigit = function() {
    displayText = this.textContent;
    display.textContent += displayText;
}

numBtn.forEach(element => element.addEventListener('click', enterDigit));

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    displayText = '';
})