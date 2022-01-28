let operand1 = null;
let operand2 = 0;
let operator;
let decimalBoolean = false;
let operationUnderway = false;

//DISPLAYS
const topDisplay = document.getElementById('output');
const botDisplay = document.getElementById('input');


//OPERATOR BUTTONS
const equalsBtn = document.getElementById('equals').addEventListener('click', function() {
    operand2 = operate(operand1, operand2, operator);
    displayRefresh();
    topDisplay.textContent = '';
    operator = '';
    operand1 = null;
});
//ADD
const addBtn = document.getElementById('add').addEventListener('click', function(){
    operatorSelected('add');
})

//SUBTRACT
const subtractBtn = document.getElementById('subtract').addEventListener('click', function(){
    operatorSelected('subtract');
})

//MULTIPLY
const multiplyBtn = document.getElementById('multiply').addEventListener('click', function(){
    operatorSelected('multiply');
})

//DIVIDE
const divideBtn = document.getElementById('divide').addEventListener('click', function(){
    operatorSelected('divide');
})

//BACKSPACE
const backBtn = document.getElementById('backspace').addEventListener('click', function(){
    displayRemoveDigit();
})

//NUMBER BUTTONS
const zero = document.getElementById('zero').addEventListener('click', function(){
    displayAddDigit(0);
})
const one = document.getElementById('one').addEventListener('click', function(){
    displayAddDigit(1);
})
const two = document.getElementById('two').addEventListener('click', function(){
    displayAddDigit(2);
})
const three = document.getElementById('three').addEventListener('click', function(){
    displayAddDigit(3);
})
const four = document.getElementById('four').addEventListener('click', function(){
    displayAddDigit(4);
})
const five = document.getElementById('five').addEventListener('click', function(){
    displayAddDigit(5);
})
const six = document.getElementById('six').addEventListener('click', function(){
    displayAddDigit(6);
})
const seven = document.getElementById('seven').addEventListener('click', function(){
    displayAddDigit(7);
})
const eight = document.getElementById('eight').addEventListener('click', function(){
    displayAddDigit(8);
})
const nine = document.getElementById('nine').addEventListener('click', function(){
    displayAddDigit(9);
})
const decimal = document.getElementById('dec-button').addEventListener('click', function(){
    console.log('decimal');
})

//FUNCTIONS
function setTopDisplay(operand, operator){
    let op;
    if (operator == 'add') {
        op = '+';
    } else if (operator == 'subtract') {
        op = '-';
    } else if (operator == 'multiply') {
        op = '×';
    } else if (operator == 'divide') {
        op = '÷';
    } else {
        op = 'ERROR';
    }
    topDisplay.textContent = operand + ' ' + op;
}

function displayAddDigit(newDigit){
    operand2 = operand2*10 + newDigit;
    displayRefresh();
}
function displayRemoveDigit(){
    if (botDisplay.textContent.length > 1 && operand2 > 1) {
        operand2 = Math.floor(operand2/10);
        displayRefresh();
    } else {
        operand2 = 0;
        displayRefresh();
    } 
}
function displayRefresh() {
    botDisplay.textContent = operand2;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return (y == 0)? 'ERROR' : x / y;
}

function operate(x, y, op) {
    let answer;
    if (op == 'add') {
        answer = add(x, y);
    } else if (op == 'subtract') {
        answer = subtract(x, y);
    } else if (op == 'multiply') {
        answer = multiply(x, y);
    } else if (op == 'divide') {
        answer = divide(x, y);
    } else {
        answer = 'ERROR';
    }
    if (typeof answer == 'number') {
        return answer;
    } else {
        return 0;
    }
}

function operatorSelected(newOperator) {
    if (operationUnderway) {
        operand2 = operate(operand1, operand2, operator);

    }
    operationUnderway = true;
    operator = newOperator;
    operand1 = operand2;
    operand2 = 0;
    displayRefresh();
    setTopDisplay(operand1, operator);
}