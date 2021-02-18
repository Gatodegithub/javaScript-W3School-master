// En ECMAScript 2015 se introdujo dos importantes nuevas palabras claves: Let y Const.                 Estas dos palabras claves proporcionan variables de alcance de bloque (y constantes) en js.            Antes de ECMAScript 2015 js tenia solo 2 tipos de scope: Global scope y Function scope.


//Global scope: Variables declaradas globalmente (fuera de una funcion) tienen scope global, las variables globales pueden ser accedidas desde cualquier lugar en un programa js.


//Function scope: Variables declaradas localmente (dentro de una funcion) tienen un scope de funcion.   Las variables locales pueden solamente ser accedidos desde dentro de la funcion donde fue declarada.
// code here can NOT use carName
function myFunction() {
    var carName = "Volvo"; //Si no declaro y solo asigno a la variable un valor, será global, aunque este dentro de una funcion.
    // code here CAN use carName
}
// code here can NOT use carName 


/* SCOPE DE BLOQUE: variables declaradas con VAR NO TIENEN scope de bloque, por lo tanto, pueden ser accedidas desde afuera del bloque.
{
    var x = 2;
}
x puede ser usado aca
*/

//Variables declaradas con LET SI TIENEN scope de bloque, las variables declaradas con let dentro de un bloque no pueden ser accedidas desde afuera del bloque.
{
    let x = 2;
}
// x no puede ser usado aca


/*Redeclarando variables: Las redeclaraciones usando VAR puede imponer problemas. Redeclarar una variable dentro de un bloque tambien redeclarara la variable fuera del bloque:

var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2 
*/

//Redeclarar variables USANDO LET resuelve el problema con var. Redeclarar una variable CON LET dentro de un bloque, no redeclarara la variable fuera del bloque.
var y = 10;
// Here y is 10
{
  let y = 2;
  // Here x is 2
}
// Here y is 10


/*LOOP SCOPE:

    Usando var en un loop:  var i = 5;
                            for (var i = 0; i < 10; i++) {
                                // some statements
                            }
                            // Here i is 10
            Al usar var, la variable declarada en el loop redeclara la variable fuera del loop.
    
    Usando let en un loop:  let i = 5;
                            for (let i = 0; i < 10; i++) {
                                // some statements
                            }
                            // Here i is 5
            Al usar let, la variable declarada en el loop no redeclara la variable fuera del loop, ya que let tiene un scope de bloque.
*/


//SCOPE DE FUNCION: Las variables declaradas con var y let son similares cuando se declaran dentro de una funcion. Ambas tienen un scope de funcion.
function myFunction() {
    var carName = "Volvo";   // Function Scope
    carSi = true;            // Sin declarar es una variable global, aunque este dentro de una funcion.
}
  function myFunction() {
    let carName = "Volvo";   // Function Scope
}


//GLOBAL SCOPE: Las variables declaradas con var y let son similares cuando se declaran fuera de un bloque. Ambas tienen un scope global.
var z = 2; //Global scope
let a = 2; //Global scope


/*GLOBAL VARIABLES IN HTML: Las variables globales definidas CON VAR pertenecen al objeto window. En html el scope global es el objeto window.

    Con js, el scope global es el entorno de javascript.
    En html, el scope global es el objeto window.
*/
var nombre = "Aldo";
//Declarar con var, puedo usar el objeto window ya que le pertenece a este scope global (obj window).
document.querySelector("#parrafin").innerHTML = "I can display " + window.nombre;

let apellido = "Saavedra"
// Con let declaracion, NO PUEDO USAR el objeto window ya que no le pertenece.


//REDECLARAR VARIABLE VAR CON LET, EN EL MISMO SCOPE, O EN EL MISMO BLOQUE NO ESTA PERMITIDO
var o = 2;       // Allowed
let o = 3;       // Not allowed

{
  var o = 4;   // Allowed
  let o = 5   // Not allowed
}


//REDECLARAR VARIABLE LET CON LET, EN EL MISMO SCOPE, O EN EL MISMO BLOQUE, NO ESTA PERMITIDO.
let u = 2;       // Allowed
let u = 3;       // Not allowed

{
  let u = 4;   // Allowed
  let u = 5;   // Not allowed
}


//REDECLARAR VARIABLE LET CON VAR, EN EL MISMO SCOPE, O EN EL MISMO BLOQUE, NO ESTA PERMITIDO.
let e = 2;       // Allowed
var e = 3;       // Not allowed

{
  let e = 4;   // Allowed
  var e = 5;   // Not allowed
}


//REDECLARAR VARIABLE CON LET, EN OTRO SCOPE, O EN OTRO BLOQUE, SI ESTA PERMITIDO.
let p = 2;       // Allowed

{
  let p = 3;   // Allowed
}

{
  let p = 4;   // Allowed
} 


/* HOISTING: Variables definidas con var se elevan a la parte superior. Eso quiere decir que podemos usar una variable antes de que haya sido declarada.

    //Puedo usar carName aqui, antes de ser declarada.
    var carName;

Variables definidas CON LET NO SE ELEVAN A LA PARTE SUPERIOR, usar una variable let antes de que esta haya sido declarada resultara en un error de referencia. La variable esta en una "zona muerta temporal" desde el inicio del bloque hasta que se declara.

    //No puedo usar carName aqui.
    let carName; 
*/






//CONST : Variables definidas CON CONST , se comportan como variables let, excepto que no pueden reasignarse
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


//Declarar una variable con const es similar a let cuando se trata de scope bloque
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


/*Las variables const DEBEN SER ASIGNADAS con un valor cuando son declaradas.

  const pi;
  pi = 3.14        <- INCORRECTO

  const pi = 3.14    <- CORRECTO
*/


// VALORES PRIMITIVOS, si asignamos un valor primitivo a una constante, no podemos cambiar el valor primitivo
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


// OBJETOS CONSTANTES, puedo cambiar las propiedades de un objeto constante:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
// NO PUEDO REASIGNAR UN OBJETO CONSTANTE
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR 


// ARRAYS CONSTANTES, puedo cambiar los elementos de un array constante
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
// NO PUEDO REASIGNAR UN ARRAY CONSTANTE
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR


//REDECLARAR VARIABLE CON VAR ESTA PERMITIDO EN CUALQUIER LUGAR DEL PROGRAMA JS
var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed


//REDECLARAR O REASIGNAR UNA VARIABLE EXISTENTE QUE SEA VAR O LET CON CONST, EN EL MISMO SCOPE, O EN EL MISMO BLOQUE, NO ESTA PERMITIDO.
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}


//REDECLARAR O REASIGNAR UNA VARIABLE CONST EXISTENTE, EN EL MISMO SCOPE, O EN EL MISMO BLOQUE, NO ESTA PERMITIDO.
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}


//REDECLARAR UNA VARIABLE CONST, EN OTRO SCOPE, O EN OTRO BLOQUE, ESTA PERMITIDO. (CONST Y LET TIENEN UN SCOPE DE TIPO BLOQUE)
const x = 2;       // Allowed
{
  const x = 3;   // Allowed
}
{
  const x = 4;   // Allowed
}


//HOISTING: Variables definidas CON CONST NO SE ELEVAN A LA PARTE SUPERIOR, una variable const no puede ser usada ni asignada antes de ser declarada.





//ARROW FUNCTION: Fueron introducidas en ECMAScript 6, las funciones de flecha nos permiten escribir una sintaxis de funcion más corta:
var hello = function() {
  return "Hello World!";
}//Sin funcion de flecha

var hello = () => {
  return "Hello World!";
}//Con funcion de flecha


// Si la funcion tiene solo una instruccion y la instruccion devuelve un valor, puede eliminar los corchetes y la palabra clave return:
var hello = () => "Hello World!"; //Esto funciona solo si la funcion tiene una sola declaracion


//Si tengo parametros debo ubicarlos dentro del parentesis:
var hello = (val) => "Hello " + val;


//De hecho, si tengo solo un parametro, tambien puedo omitir los parentesis:
var hello = val => "Hello " + val;


//This en las funciones regulares representa el objeto que llamaba a la funcion, que podria ser window, document, un boton o lo que sea. Con las funciones de flecha, esta palabra clave siempre representa el objeto que definio la funcion de flecha. Echemos un vistazo a dos ejemplos para comprender la diferencia. Ambos ejemplos llaman a un método dos veces, primero cuando se carga la página y una vez más cuando el usuario hace clic en un botón. El primer ejemplo usa una función regular, y el segundo ejemplo usa una función de flecha.

//Regular Function: En funciones regulares this representa al OBJETO QUE LLAMA LA FUNCION
var hello = function() {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello); //this retorna [object Window]

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);//this retorna [object HTMLButtonElement]


// Arrow function: Con una funcion de flecha this representa al propietario de la funcion
var hello = () => {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello); //[object Window]

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello); //[object Window]

/* Recuerde estas diferencias cuando trabaje con funciones. A veces, el comportamiento de las funciones regulares es lo que desea, si no, use las funciones de flecha.*/