const display = document.querySelector('#display p');
const numBtn = document.querySelectorAll('.num-symbol');
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
    alert(numBtn.textContent);
}

numBtn.forEach(element => addEventListener('click', enterDigit));