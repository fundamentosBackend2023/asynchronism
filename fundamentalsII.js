// Objetos
const person = {
    eyes: 'brown',
    height: 1.61,
    5: 'CDMX',
    'hairColor': 'black',
};

console.log(person);

console.log(person.hairColor);
console.log(person['eyes']);
console.log(person[5]);

person.firsName = 'Pedro';
console.log(person)

let propertyName = 'nationality'
person[propertyName] = 'French'
console.log(person)

const {firsName, height} = person
console.log(firsName)
console.log(height)

const {eyes: eyesColor} = person
console.log(eyesColor)

const newPerson = person
newPerson.birthday = '12/06/1981'
console.log(newPerson)
console.log(person)

person.schools = ['IPN', 'CINVESTAV']
person.pet = {
    petName: 'Hercules',
    breed: 'pug'
};
console.log(person);

const otherPerson = {
    ...person,
    jobPosition: 'financial advisor'
};
otherPerson.degree = 'Ing. Robótica';
console.log(person);
console.log(otherPerson);

// Estructuras de control
let myCondition = 65;
const me = {
    age: 17
};
let generalCondition = true

if (me.age >= myCondition && generalCondition){
    console.log('te puedes jubilar!!')
} else if (me.age > 18 ) {
    console.log('a chambear')
} else {
    console.log('a estudiar')
}

if (10 === '10'){
    console.log('they are equal')
}else{
    console.log('not')
}

const pc = {
    cpu: 'Ryzen 8700x',
    gpu: '4090'
}
const otherPc = {
    cpu: 'Ryzen 8700x',
    gpu: '4090'
}

// const otherPc = pc

if (pc === otherPc){
    console.log('same pc')
}

myCondition = undefined

if(!myCondition){
    console.log('its false')
}

for(let i=0; i<10; i++){
    console.log(i)
}

const panDulce = ['Concha', 'Dona de chocolate', 'Reja', 'Muffin'];

for(bread of panDulce){
    console.log(bread)
}

for(bread in panDulce){
    console.log(bread)
}

for(key of Object.keys(person)){
    console.log(key)
}
for(key of Object.values(person)){
    console.log(key)
}
for([key, value] of Object.entries(person)){
    console.log(key, '-', value)
}

let counter = 5;
while(counter >= 0){
    console.log(counter ** 2);
    counter--;
}

do{
    console.log('still in range')
}while(counter >= 0)

let fruit = 'strawberry'

switch(fruit){
    case 'pineapple':
    case 'grape':
        console.log('that is my favorite fruit')
    break
    case 'strawberry':
        console.log('i like it too')
    case 12:
        console.log('not a fruit')
    break
    default:
        console.log('idk')
}

// Funciones
function sumNumbers(n1, n2){
    return n1 + n2
}
let firstSum = sumNumbers(10,15)
console.log(firstSum)

let globalTaco = 'suadero'
function printValues(){
    let localTaco = 'asada'
    console.log(localTaco)
    console.log(globalTaco)
}
printValues()


function operations(n1,n2){
    return {
        sum: n1 + n2,
        substraction: n1 - n2,
        product: n1 * n2
    }
}

let {product} = operations(12, 18)
console.log(product)

// function printVehicle(vehicle, vehicle2='rocket'){
//     console.log(vehicle)
//     if(vehicle2) console.log(vehicle2)
// }


const printVehicle = function (vehicle, vehicle2='rocket'){
    console.log(vehicle)
    if(vehicle2) console.log(vehicle2)
}
printVehicle('ship','car') //Ejecución de objeto
printVehicle.subObject = { color: 'green', age: 23 }
console.log(printVehicle.subObject.color)

function saludar(){
    console.log('Hola amigo')
}

function conversation(cb){
    console.log('Contacto visual...');
    cb('Fernando')
    console.log('adios')
}

conversation(saludar)
conversation(function (condition){
    if(condition) console.log('¿Cómo has estado?')
    else console.log('Perdón, voy tarde')
    return 15
})
const hardConversation = () => console.log('mirada pesada...');
conversation(hardConversation);
conversation((someName) => console.log('hello',someName));

function myClosure(meal1, meal2){
    console.log('meal1'+'-'+meal1);

    return (meal3) => { console.log('My favorite meal are',meal1,meal2,meal3)  }
}

const receivedFunction = myClosure('pizza','enchiladas de spaghetti');
receivedFunction('hamburgers')

class Animal{
    constructor(type){
        this.type = type
    }

    breath(){
        console.log('breathing...')
    }

}


class Dog extends Animal {
    static nature = 'lovely'
    #home = 'My home'

    constructor(breed, color){
        super('Mamifero')
        this.breed = breed
        this.color = color
    }

    makeNoise(){
        console.log('guau guau')
        console.log('My breed is',this.breed)
        console.log(Dog.nature)
    }

    eat(){
        this.makeNoise()
        console.log('brbrbrbrbrbrb')
    }

    static sleep(){
        console.log('zzzzzzz')
    }

    #play(){
        console.log('im playing')
    }

    breath(){
        console.log('... fhm ... fhm')
        this.#play()
    }

    get home(){
        return this.#home
    }

    set home(newHome){
        this.#home = newHome
    }


}
class Cat {
    constructor(breed, color){
        this.breed = breed
        this.color = color
    }

    makeNoise(){
        console.log('miau')
    }
}

const baxter = new Dog('pug','brown')
console.log(baxter.breed)
baxter.makeNoise()
console.log(Dog.nature)
baxter.eat()
Dog.sleep()
baxter.breath()
const milo = new Cat('persian','white')

// Polimorfismo
function makeAnimalNoise(animal){
    animal.makeNoise()
}

makeAnimalNoise(baxter)
makeAnimalNoise(milo)

console.log(baxter.home)
baxter.home = 'CIC'
console.log(baxter.home)
baxter.breath()