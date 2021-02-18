/*Unlike other global objects, the Math object has no constructor. Methods and properties are static.
All methods and properties (constants) can be used without creating a Math object first.
Las propiedades matematicas constantes, son mas cientificas, en esta guia no se incluyen.
*/
'use strict'
//Math.PI() : retorna pi
Math.PI// returns 3.141592653589793


//Math.round() : retorna el valor redondeado al entero más cercano
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4 

//Math.pow(x,y) : retorna el valor de x como potencia de y
Math.pow(8, 2)  //retorna 84

//Math.sqrt(x) : retorna la raiz cuadrada de x
Math.sqrt(64) //returns 8

//Math.abs(x) : retorna el valor absoluto (positivo) de x
Math.abs(-4.7)  //returns 4.7


//Math.ceil(x) : retorna el valor de x redondeado hacia arriba al entero mas cercano
Math.ceil(4.4)  //returns 5


//Math.floor() : retorna el valor de x redondeado hacia abajo al entero mas cercano
Math.floor(4.7)  //returns 4


//Math.sin() : Para angulos, radianes, cosas raras
//Math.cos() : Para angulos, radianes, cosas raras


//Math.min() : Para encontrar el menor valor en una lista de argumentos.
Math.min(0, 150, 30, 20, -8, -200)  //returns -200


//Math.max() : Para encontrar el mayor valor en una lista de argumentos
Math.max(0, 150, 30, 20, -8, -200);  // returns 150


//Math.random() : retorna un numero random entre 0 (inclusive), y 1 (exclusive)
Math.random()  //returns a random number en decimal

//Math.random() usado con Math.floor() retorna un numero random entero
Math.floor(Math.random() * 10)     // returns a random integer from 0 to 9
Math.floor(Math.random() * 11)     // returns a random integer from 0 to 10 
Math.floor(Math.random() * 100)    // returns a random integer from 0 to 99
Math.floor(Math.random() * 101)    // returns a random integer from 0 to 100
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10 
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100

//This JavaScript function always returns a random number between min (included) and max (excluded):
var numRandomEntero = getRndInteger(10, 20)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(numRandomEntero)
//This JavaScript function always returns a random number between min and max (both included):
var numRandomEnteroIncluye = getRndIntegerIncluye(5, 10)
function getRndIntegerIncluye(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(numRandomEnteroIncluye)

