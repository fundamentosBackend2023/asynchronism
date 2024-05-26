// Variables //
console.log('Hola mundo')
let myVariable = 10 // Declaración - Inicialización
console.log(typeof myVariable)
console.log(myVariable);
//console.log(globalThis);
myVariable = 'this is an example'; // Reasignación
console.log(typeof myVariable);
console.log('first variable', myVariable);
console.log('first variable ' + myVariable);
console.log(`first variable ${myVariable.toUpperCase()}`); // Interpolación de texto
const myConstant = 'this is a constant value';
console.log(myConstant);

// Métodos de String
let stringVariable = 'Just a text';
const character = stringVariable.charAt(3);
console.log(character);
const portion = stringVariable.slice(2, 6);
console.log(portion);
const replacedString = stringVariable.replace('s', 'x')
console.log(replacedString)
const characterCode = stringVariable.charCodeAt(3);
console.log(characterCode);
const splittedText = stringVariable.split(' ');
console.log(splittedText);

// Floats
let myFloat = 121.32131231
let myNumber = 2
let operation = myFloat + myNumber
console.log(Math.round(operation))
console.log(Math.ceil(operation))

// Casteo
myNumber = "1331.686876";
console.log(typeof myNumber);
myNumber = Number(myNumber);
console.log(typeof myNumber);
console.log(myNumber);
myVariable = "text";
console.log(Number(myVariable));
console.log(Number(true));

// Undefined
let notAssigned;
console.log(notAssigned)

// Arrays
let myArray = [12, 2132.23123, 'texto', [1,2,3]]
console.log(myArray)
console.log(myArray.length)
console.log(myArray[0])
myArray.push('at the end')
console.log(myArray)
myArray.unshift('at the beginning')
console.log(myArray)
const popped = myArray.pop()
console.log(myArray)
console.log(popped)
const shifted = myArray.shift()
console.log(myArray)
console.log(shifted)
let otherArray = myArray
console.log('myArray', myArray)
console.log('otherArray',otherArray)
otherArray.push('other value')
console.log('myArray', myArray)
console.log('otherArray',otherArray)

let notLinkedArray = [...myArray] // Spread operator
notLinkedArray.push('different value')
console.log('myArray', myArray)
console.log('notLinkedArray',notLinkedArray)
let newArray = ['Emperador', 'Oreo', 'Principe', 'Lors']
console.log(newArray)
const deletedValues = newArray.splice(1, 2)
console.log(deletedValues)
console.log(newArray)
newArray.splice(1, 0, 'Chookis', 'Florentinas')
console.log(newArray)
newArray.splice(1, 3, 'Flor de naranjo')
console.log(newArray)


