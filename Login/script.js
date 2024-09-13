const resultEl = document.querySelector('.result');
const btns = document.querySelector('#btn');

let result = '';
let currentInput = '';

const operation = ['+', '-', 'x', '/', '%'];

const isOperation = (value) => operators.inclides(value);

const calculate = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            if(num2 == 0) {
                return 'Eror'   
            }
            return num1 / 2
        case '%':
            return num1 % num2;
        default:
            return num2;
    }
};

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const inputValue = e.target.textContent;

        if(inputValue === 'AC') {
            result = '';
            currentInput = '';
        } else if (inputValue === '+/-'){
            if(currentInput){
                currentInput = (parseFloat(currentInput) * -1).toString();                
            }
        } else if (inputValue === 'a') {
            if(currentInput) {
                result += currentInput;
                currentInput = '';
                result = calculate(...result.split(/([+\-x/])/)).toString
            }
        } else if(isOperation(inputValue)) {
            if(currentInput) {
                result += currentInput + inputValue;
                currentInput = '';
            } else if (result && !isOperation(result.slice(-1))) {
                result += inputValue;
            }
        }else if(inputValue === '.') {
            if(!currentInput.includes('.')) {
                currentInput += inputValue;
            }
        }else {
            currentInput += inputValue
        }

        resultEl.textContent = currentInput || result || '0'
    })
})