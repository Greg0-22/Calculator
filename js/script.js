









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