let operand1 = null;
let operand2 = 0;
let operator;
let decimalBoolean = false;
let operationUnderway = false;

//add negative 0 possibility
//limit number size

//DISPLAYS
const topDisplay = document.getElementById('output');
const botDisplay = document.getElementById('input');


//OPERATOR BUTTONS
//EQUALS
const equalsBtn = document.getElementById('equals').addEventListener('click', function() {
    operationUnderway = false
    operand2 = operate(operand1, operand2, operator);
    refreshBotDisplay();
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

//FUNCTION BUTTONS
//BACKSPACE
const backBtn = document.getElementById('backspace').addEventListener('click', function(){
    displayRemoveDigit();
})

//PLUS-MINUS
const plusMinusBtn = document.getElementById('plus-minus').addEventListener('click', function(){
    operand2 *=-1;
    refreshBotDisplay();
})

//CLEAR
const clearBtn = document.getElementById('clear').addEventListener('click', function(){
    operand1 = null;
    operand2 = 0;
    operator = '';
    decimalBoolean = false;
    operationUnderway = false;
    topDisplay.textContent = '';
    refreshBotDisplay();
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
    decimalBoolean? decimalBoolean = false: decimalBoolean = true;
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
    if (operand2 < 0) {
        operand2 = -(-operand2*10 + newDigit);
    } else {
        operand2 = operand2*10 + newDigit;
    }

    refreshBotDisplay();
}
function displayRemoveDigit(){
    if (botDisplay.textContent.length > 1 && (operand2 > 1 || operand2 < -1)) {
        if (operand2 < 0) {
            console.log('oops2222');
            operand2 = -1*Math.floor((-operand2)/10);
        } else {
            operand2 = Math.floor(operand2/10);
            console.log('oops');
        }
        refreshBotDisplay();
    } else {
        operand2 = 0;
        refreshBotDisplay();
    } 
}
function refreshBotDisplay() {
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
    refreshBotDisplay();
    setTopDisplay(operand1, operator);
}