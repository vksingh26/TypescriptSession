console.log('welcome to typescrip session !')
//will start with let and const

let string = 'vikash';
console.log(string);

const anotherString = 'kumar';
console.log(anotherString);
//anotherString = 'singh'; 
//here we are getting an error stating cannot assign to another string as its a constant

//scope of let and const

function function1() {
    console.log(string);
    let string2 = 'Vicky is my nick name';
    console.log(string2);
    return string2;
}

function1();
//console.log(string2); //here it will throw an error stating cannot find string2.
//as the scope of let and const is block