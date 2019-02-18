//[ARRAY DESTRUCTURING AND OBJECT DESTRUCTURING]

console.log('ARRAY DESTRUCTURING AND OBJECT DESTRUCTURING!');

const myArray = ['vikash', 'kumar', 'singh'];

//before es6 either we were looping through the array to get each element or just getting the value using index like below

var myName = myArray[0];
var myMiddleName = myArray[1];
var myLastName = myArray[2];
console.log('My First Name, Middle Name and Last Name is ' + myName + myMiddleName + myLastName);

//so for achieving the above output we need to write three different line, the same we can achieve using array destructuring

const [myName1, myMiddleName1, myLastName1] = myArray;
console.log('My First Name, Middle Name and Last Name is ' + myName1 +' '+ myMiddleName1 + ' '+ myLastName1);


const myObject = { FirstName: 'Vikash', LastName: 'Singh' };
//older way of getting object values i.e before es6
console.log('My First and last name is' + " " + myObject.FirstName + " " + myObject.LastName);

//same we can achieve using object destructuring

const { FirstName, LastName } = myObject;
const { FirstName: MyFirstName, LastName: MyLastName } = myObject;
console.log('My First and last name is' + " " + FirstName + " " + LastName);
console.log('My First and last name is' + " " + MyFirstName + " " + MyLastName);