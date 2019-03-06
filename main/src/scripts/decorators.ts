//DECORATORS
console.log('DECORATORS');

//A decorator is just a function, depends where you want to append the decorators, the arguments depends on that
//decorators will get one argument by TS, decorators are ts feature so ts manage which args will be pass to a decorators
//depending on what this decorators are attached to.

function decoratorExample(constructorFn: Function) { //this will only get constructor as a function 
    console.log(constructorFn);
}

@decoratorExample
class decoratorExampleClass {
    constructor() {
        console.log('Basic Decorator class!');
    }
}


//factory: below is the factory using decorator

// function logging(value: boolean) {
//     return value ? decoratorExample : null
// }

// @logging(true)
// class test {}

//advanced decorator

function printPlantName(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@printPlantName  //without parenthesis, as its not a factory. because constructorfn is decorator itself or decorator function
class GreenPlant{
    name = 'Money Plant'
}

let greenPlant = new GreenPlant();
(<any>greenPlant).print(); //here we are typecasting explicitly otherwise TS doesnot recognise the print function.

//look for gulp-typescript.