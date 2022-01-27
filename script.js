let prevVal = 0;
let value = 0;
let operator;

//NEXT: when you're back code in the prevValue from the operator buttons!!

//OPERATOR BUTTONS
const equalsBtn = document.getElementById('equals').addEventListener('click', function(){
    console.log('equals');
    value = operate(prevVal, value, operator);
});
const addBtn = document.getElementById('add').addEventListener('click', function(){
    console.log('add');
    operator = 'add';
})
const subtractBtn = document.getElementById('subtract').addEventListener('click', function(){
    console.log('subtract');
    operator = 'subtract';
})
const multiplyBtn = document.getElementById('multiply').addEventListener('click', function(){
    console.log('multiply');
    operator = 'multiply';
})
const divideBtn = document.getElementById('divide').addEventListener('click', function(){
    console.log('divide');
    operator = 'divide';
})
const backBtn = document.getElementById('backspace').addEventListener('click', function(){
    console.log('backspace');
    botDisplayRemove();
})

//NUMBER BUTTONS
const zero = document.getElementById('zero').addEventListener('click', function(){
    botDisplayAdd(0);
})
const one = document.getElementById('one').addEventListener('click', function(){
    botDisplayAdd(1);
})
const two = document.getElementById('two').addEventListener('click', function(){
    botDisplayAdd(2);
})
const three = document.getElementById('three').addEventListener('click', function(){
    botDisplayAdd(3);
})
const four = document.getElementById('four').addEventListener('click', function(){
    botDisplayAdd(4);
})
const five = document.getElementById('five').addEventListener('click', function(){
    botDisplayAdd(5);
})
const six = document.getElementById('six').addEventListener('click', function(){
    botDisplayAdd(6);
})
const seven = document.getElementById('seven').addEventListener('click', function(){
    botDisplayAdd(7);
})
const eight = document.getElementById('eight').addEventListener('click', function(){
    botDisplayAdd(8);
})
const nine = document.getElementById('nine').addEventListener('click', function(){
    botDisplayAdd(9);
})

//DISPLAYS
const botDisplay = document.getElementById('input');

//FUNCTIONS
function botDisplayAdd(newDigit){
    value = value*10 + newDigit;
    botDisplay.textContent = value;
}
function botDisplayRemove(){
    if (botDisplay.textContent.length > 1 && value > 1) {
        value = Math.floor(value/10);
        botDisplay.textContent = value;
        console.log('here')
    } else {
        value = 0;
        botDisplay.textContent = value;
    } 
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
    if (op == 'add') {
        return add(x, y);
    } else if (op == 'subtract') {
        return subtract(x, y);
    } else if (op == 'multiply') {
        return multiply(x, y);
    } else if (op == 'divide') {
        return divide(x, y);
    } else {
        return 'ERROR';
    }
}