class Person {
    name: string ;
    private type: string | undefined ;
    protected age: number | undefined = 27;

    constructor(name: string, public username:string) {
        this.name = name;
    }

    getPersonAge() {
        console.log(this.age);
        this.setPersonType('year old awsome guy !');
    }

    protected setPersonType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

let person = new Person('Vikash', 'vicky');
console.log(person.name + "  " + person.username);
person.getPersonAge();
//person.setPersonType('Awsome guy!') as this method is protected we cannot use it outside the class