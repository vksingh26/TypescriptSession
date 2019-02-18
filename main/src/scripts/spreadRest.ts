//[SPREAD AND REST OPERATORS]

console.log('SPREAD AND REST OPERATORS !');

var arraySpread = [1, 10, 15, 20, 50];
console.log(Math.max(1, 10, 15, 20, 50));
//same as above console we can the same output using spread operator like below 

console.log(Math.max(...arraySpread));
//now the above parameter inside math.max() is known as spread operator. which return value like (1, 10,15,20,50).

const createArray = (name:string, ...args: number[]) => {
    console.log(name)
    console.log(args);
    return args;
}
createArray('Vikash', 1, 5, 10, 16);

//So we pass some numbers to the above createArray method on call and the same method will accept the 
//passed parameter as an array using rest operator (as name suggests) as shown in above function. Rest operator convert 
//those params into an array and return the same (an array).
//and REST operator will always be the last param of any function.

//DIFFERENCE BETWEEN SPREAD AND REST
//if we use it in a function call, we call a function and pass something to the function, in that case it use spread operator.