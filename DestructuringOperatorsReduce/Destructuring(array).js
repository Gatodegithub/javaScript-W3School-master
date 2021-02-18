// Puedo acceder rapidamente mediante variables a elementos de un array

const fruits = ['orange', 'banana', 'lemon']
const friends = ['diego', 'kevin', 'romero', 'constanza', 'javiera']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

const [, ilkevin, , cony] = friends;

console.log(cony);

let first = 'popo';
let second = 'constanza';

// let temp = second;
// second = first;
// first = temp;
console.log(first, second);

[second, first] = [first, second]

console.log(first, second);


const familiares = ['Julia', 'Natalia', 'Aldo', 'Jisslen', 'Emilia'];

let [primero, segundo, tercero, cuarto, quinto] = familiares;

[quinto,cuarto,tercero,segundo,primero] = [primero, segundo, tercero, cuarto, quinto];

console.log(quinto);