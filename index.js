let clear = document.querySelector(".ac");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".opt");
let deleteButton = document.querySelector(".delete");
let previousNumber = document.querySelector("#calc-operation");
let calculator = document.querySelector(".container");
let currentNumber = document.querySelector("#calc-typed");
let fullstop = document.querySelector(".fullstop");
let equals = document.querySelector(".equals");
let currentValue = "";
let previousValue = "";
let operator = "";

numbers.forEach((num) => num.addEventListener("click", function (e) {
    processNums(e.target.textContent)
    currentNumber.textContent = currentValue;
}))

operators.forEach((operate) => operate.addEventListener("click", function (e) {
    processOperator(e.target.textContent)
    previousNumber.textContent = previousValue + " " + operator;
    currentNumber.textContent = currentValue;

}))
deleteButton.addEventListener("click",function() {
    deleteChar()
    
})

clear.addEventListener("click", function () {
     currentValue = "";
     previousValue = "";
     operator = "";
     previousNumber.textContent = currentValue;
     currentNumber.textContent = currentValue;
})


equals.addEventListener("click",function(){
    calculate()
    previousNumber.textContent = '';
    currentNumber.textContent = previousValue;
})

function processNums(number) {
    if (number === "." && currentValue.includes(".")) return
        if (currentValue.length < 19) {
            currentValue += number;
        }
}


function processOperator(operate) {
    if (currentValue === '')return
    if (previousValue !== ''){
        calculate()
    }
    operator = operate;
    previousValue = currentValue;
    currentValue = '';
}
 
function deleteChar(){
    currentValue = currentValue.toString().slice(0,-1);
    
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+'){
        previousValue += currentValue;

    }else if  (operator === '-'){
        previousValue -= currentValue;

    }else if  (operator === 'x'){
        previousValue *= currentValue;

    }else if  (operator === '/'){
        previousValue /= currentValue;

    }else if  (operator === '%'){
        previousValue %= currentValue;

    }else if  (operator === '**'){
        previousValue *= previousValue;

    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue =  previousValue.toString();
}
function roundNumber(num){
    return Math.round(num*1000) / 1000;
}