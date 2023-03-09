let userNum1
let userOperand1
let userNum2
let userOperand2
const display = document.querySelector('#calc-display');
const buttons = document.querySelector('#buttons');

// button listener
buttons.addEventListener('click', function(event){
    if (event.target.matches('button')){
        const button = event.target;
        const action = button.dataset.action;
        const displayNum = display.textContent;
        const buttonNum = button.textContent;

        //remove button press class when another button is pressed.
        Array.from(button.parentNode.children).forEach(button => button.classList.remove('clicked-down'));
        // 0-9 number buttons
        if(!action){
            // if display is 0 replace with button #, but if not then tack button # onto end of display #
            if (displayNum === '0'){
                display.textContent = buttonNum;
            } else {
                display.textContent = displayNum + buttonNum;
            }
        }

        // * / + - operator buttons
        if(button.matches('.operator')){
            button.classList.add('clicked-down')
        }

        // . AC = decimal, clear, equals buttons
        if(action == 'decimal'){
            display.textContent = displayNum + '.'
        }

        if(action == 'clear'){
            console.log('clear');
        }

        if(action == 'equals'){
            console.log('equals');
        }

        
    }
});

// calculator functions

function add(n1, n2){
    let total = n1 + n2;
    return total;
}

function subtract(n1, n2){
    let difference = n1 - n2;
    return difference;
}

function multiply(n1, n2){
    let product = n1 * n2;
    return product;
}

function divide(n1, n2){
    if(n2 === 0){
        return "Can't divide by 0."
    } else {
        return n1 / n2;;
    }
}

function operate(str, n1, n2){
    switch (str){
        case '+':
            console.log(add(n1, n2));
            break;
        case '-':
            console.log(subtract(n1, n2));
            break;
        case '*':
            console.log(multiply(n1, n2));
            break;
        case '/':
            console.log(divide(n1, n2));
            break;
        default:
            console.log(`Invalid operator: ${str}`);
    }
}