let userNum1
let userOperand1
let userNum2
let userOperand2
const display = document.querySelector('#calc-display');
const buttons = document.querySelector('#buttons');
const calculator = document.querySelector('#calculator');

// button listener
buttons.addEventListener('click', function(event){
    if (event.target.matches('button')){
        const button = event.target;
        const action = button.dataset.action;
        const displayNum = display.textContent;
        const buttonNum = button.textContent;
        const previousButtonType = calculator.dataset.previousButtonType;

        //remove button press class when another button is pressed.
        Array.from(button.parentNode.children).forEach(button => button.classList.remove('clicked-down'));
        // 0-9 number buttons
        if(!action){
            // if display is 0 replace with button #, but if not then tack button # onto end of display #
            if (displayNum === '0' || previousButtonType === 'operator'){
                display.textContent = buttonNum;
                calculator.dataset.previousButtonType = '';
            } else {
                display.textContent = displayNum + buttonNum;
            }
        }

        // * / + - operator buttons
        if(button.matches('.operator')){
            button.classList.add('clicked-down')
            calculator.dataset.previousButtonType = 'operator'
            calculator.dataset.firstValue = displayNum
            calculator.dataset.operator = action
        }

        // . AC = decimal, clear, equals buttons
        if(action === 'decimal'){
            if(!displayNum.includes('.')){
                display.textContent = displayNum + '.'
            } else if(displayNum.includes('.') && previousButtonType === 'operator'){
                display.textContent = '0.'
            }
        }

        if(action == 'clear'){
            console.log('clear');
            calculator.dataset.operator = '';
            calculator.dataset.firstValue = '';
            calculator.dataset.previousButtonType = ''
            display.textContent = 0;
        }

        if(action == 'equals'){
            calculator.dataset.previousButtonType = 'operator'
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            display.textContent = operate(operator, firstValue, secondValue);
        }

        
    }
});

// calculator functions

function add(n1, n2){
    let total = parseFloat(n1) + parseFloat(n2);
    return total;
}

function subtract(n1, n2){
    let difference = parseFloat(n1) - parseFloat(n2);
    return difference;
}

function multiply(n1, n2){
    let product = parseFloat(n1) * parseFloat(n2);
    return product;
}

function divide(n1, n2){
    if(n2 === '0'){
        return "Can't divide by 0."
    } else {
        return parseFloat(n1) / parseFloat(n2);;
    }
}

function operate(str, n1, n2){
    let result;
    switch (str){
        case 'addition':
            console.log(add(n1, n2));
            result = add(n1, n2)
            break;
        case 'subtract':
            console.log(subtract(n1, n2));
            result = subtract(n1, n2)
            break;
        case 'multiply':
            console.log(multiply(n1, n2));
            result = multiply(n1, n2)
            break;
        case 'division':
            console.log(divide(n1, n2));
            result = divide(n1, n2)
            break;
        default:
            console.log(`Invalid operator: ${str}`);
    }
    return result;
}