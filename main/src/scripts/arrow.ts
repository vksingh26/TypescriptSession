//[ARROW FUNCTION]
console.log('[ARROW FUNCTION]');

const addTwoNumber = function (num1: number, num2: number):number {
    console.log('addition of two number using normal function: ' + num1 + num2);
    return num1 + num2;
};
addTwoNumber(3, 5);

const multiplyTwoNumber = (num1: number, num2: number) => {
    console.log('multiplying two number using arrow function: ' + num1 * num2);
    return num1 * num2;   
}

multiplyTwoNumber(3, 5);

//we can achieve the above code in one line too.

const multiplyTwoNumber2 = (num1: number, num2: number) => num1 * num2;
multiplyTwoNumber2(3, 5);