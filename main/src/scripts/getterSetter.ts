//[GETTERS AND SETTERS]

class Forest{
    private _treeName: string = 'Banyan';
    
    get treeName() {
        return this._treeName;
    }

    set treeName(value:string) {
        if (value.length > 5) {
            this._treeName = 'Big Banyan Tree';
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