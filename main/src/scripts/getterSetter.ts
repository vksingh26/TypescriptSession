//[GETTERS AND SETTERS]

class Forest{
    private _treeName: string = 'Banyan';
    
    get treeName() {
        return this._treeName;
    }

    set treeName(value:string) {
        if (value.length > 5) {
            this._treeName = value;
        } else {
            this._treeName = 'Neem Tree'
        }
    }
}

const forest = new Forest();
console.log(forest.treeName);
forest.treeName = 'Neem';
console.log(forest.treeName);
forest.treeName = 'Bigger Tree';
console.log(forest.treeName);


//static properties and methods

class StaticItem {
    static itmeOne: number = 20;
    //if we want to access this itemone property outside the class we need to instantiate it first,
    //so to access this without instantiating we can make it static and same for function too.

    static calculator(addItemTwo: number): number {
        return this.itmeOne + addItemTwo;
    }
}

console.log(StaticItem.itmeOne); //as we can see here we are accessing property and methods 
console.log(StaticItem.calculator(5)); // of a class without instantiating it
