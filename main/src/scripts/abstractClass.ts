//[ABSTRACT CLASS]

//1. we cannot instantiate abstract classes
//2. Abstract class need to be inherited 

abstract class Abstract {
    abstractName: string = 'Typescript';
    abstractBudget: number = 1000;

    abstract changeAbstract(name: string): void;
    calcAbstractBudget() {
        return this.abstractBudget * 2;
    }
}

class childAbstract extends Abstract {
    changeAbstract(name: string): void {
        this.abstractName = name;
    }
}

let newChildAbstract = new childAbstract();
console.log(newChildAbstract);
newChildAbstract.changeAbstract('Typescript is new javascript!');
console.log(newChildAbstract);