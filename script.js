let firstNum = 0;
let secondNum = 0;
let operator = "";
let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".num");
let operatorSelected = false;

function add(num1, num2)    {
    return num1 + num2;
}
function subtract(num1, num2)    {
    return num1 - num2;
}

function divide(num1, num2)    {
    if(num2 === 0)  {
        return "No dividing by 0";
    }
    else    {  
        return num1 / num2;
    }
}
function multiply(num1, num2)    {
    return num1 * num2;
}
function operate(num1, num2, operator)  {
    if(operator === "+")    {
        return add(num1,num2);
    }
    else if(operator === "-")   {
        return subtract(num1, num2);
    }
    else if(operator === "÷")   {
        return divide(num1, num2);
    }
    else {
        return multiply(num1, num2);
    }
    
}

//each number click
numbers.forEach((button)  =>  {
    button.addEventListener("click", () =>   {
        if(display.textContent === "0")    {
            display.textContent = "";
            display.textContent += button.textContent;
        }
        else    {
            if(operatorSelected)    {
                display.textContent = "";
                display.textContent += button.textContent;
                operatorSelected = false;
            }
            else{
                display.textContent += button.textContent;
            } 
        }
    })
});
//clear button
document.querySelector(".clear").addEventListener("click", () =>    {
    display.textContent = "0";
    firstNum = 0;
    secondNum = 0;
    operator = "";
    operatorSelected = false;
})

document.querySelectorAll(".operator").forEach((operatorButton) =>    {
    operatorButton.addEventListener("click", () =>    {
        if(operator !== "" && firstNum !== 0) {
            display.textContent = operate(parseInt(firstNum), parseInt(display.textContent), operator);
            firstNum = display.textContent;
            operator = operator = operatorButton.textContent;
            operatorSelected = true;
        }
        else{
            firstNum = display.textContent;
            operator = operatorButton.textContent;
            operatorSelected = true;
        }       
    })
})

document.querySelector("#equal").addEventListener("click", () =>    {
    secondNum = display.textContent;
    display.textContent = operate(parseInt(firstNum), parseInt(secondNum), operator);
})

document.querySelector(".decimal").addEventListener("click", () =>  {
    if(display.textContent.indexOf(".") === -1) {
        display.textContent += ".";
    } 
})