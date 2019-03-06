//[GENERICS]
console.log('GENERICS');

//simple generic

function printData(data:any) {
    return data;
}

console.log(printData('Vikash'));
console.log(printData(27));
console.log(printData({ name: 'vikash', age: 28, mobile: 7259669313 }));

//Better Generics
console.log('Another Generics');
function printDataGenerics<J>(data: J){ //here we are defining type of the function.
    return data;
}

console.log(printDataGenerics('Vikash'));
console.log(printDataGenerics(<number>27));
console.log(printDataGenerics({ name: 'vikash', age: 28, mobile: 9620435888 }));

//Built-in generics
//1. array
//we can create generic type, class too