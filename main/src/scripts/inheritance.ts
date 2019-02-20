class NewPerson {
    name: string;
    private type: string | undefined;
    protected age: number | undefined = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    getNewPersonAge() {
        console.log(this.age);
    }

    setNewPersonType(type: string) {
        this.type = type;
        console.log(this.age +" "+ this.type);
    }
}

let newPerson = new NewPerson('Vikash', 'vicky');
console.log(newPerson.name + "  " + newPerson.username);
newPerson.getNewPersonAge();
newPerson.setNewPersonType('Awsome guy!');

class Singh extends NewPerson {
    //name = 'Vikash Singh'; commented it as i am passing in super. uncomment and test this feature
    constructor(username: string) {
        super('Vikash Singh', 'vicky'); //represents parent constructor and it asks two params
    }
}

//when we are extending/inheriting class, it means we can access all the codes(methods, properties)
//of super class in to child class
const singh = new Singh('Manish'); //now constructor is asking for one argument only, remove constructor and check this feature.
//Here we can see even though i am passing manish as name it get overriden by vikash singh
//as i have overided it in child class
console.log('Adding constructor: '+ singh.name + ' ' + singh.username);

