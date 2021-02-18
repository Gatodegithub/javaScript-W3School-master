//Una funcion definida en un objeto es llamada metodo para el objeto.
//Una funcion diseñada para crear nuevos objetos, es llamada constructor
// Si se llama a una función con demasiados argumentos (más de los declarados), se puede llegar a estos argumentos utilizando la propiedad arguments.
// Si la funcion no pertenece a ningun objeto, pertenecera al objeto GLOBAL WINDOW de la pagina html (creo que todas las funciones), metodos no, ya que pertenecer a un objeto...

// Declarando funcion, estan no son ejecutadas inmediatamente, se ejecutan cuando se les invoca (llamandolas). Los punto y coma ; son usados para separar codigo ejecutable, como la funcion no es una declaracion ejecutable inmediatamente, no es comun que terminen con ;
function suma(a, b) {
    let c = a + b;
    return console.log(c);
}
suma(3,5);

// Una funcion tambien puede ser almacenada en una variable. UNA FUNCION PUEDE NO LLEVAR NOMBRE (ANONIMA)SI SE ALMACENA EN UNA VARIABLE, ya que sera llamada con la variable definida.
let x = function (a,b) {
    let c = a * b;
    return console.log(c);
}
x(5,5); //Se usa la funcion mediante la variable

//Function HOISTING, las declaraciones de funciones tambien son movidas al top del scope actual, hosting aplica a var y declaracion de funciones.
resta(5,2); //Se puede llamar a la funcion antes de ser declaradas debido a que TIENE HOISTING
// FUNCIONES DEFINIDAS USANDO UNA EXPRESION (VARIABLE) NO TIENEN HOISTING
function resta (a,b) {
    let c = a - b;
    return console.log(c);
}

// funciones AUTO INVOCADAS, una funcion auto invocada inicia automaticamente, sin ser llamada
(function () {
    console.log("Hola soy una funcion que se invoca sola")  // I will invoke myself
})();

// Las funciones pueden ser usadas como valores
let d = dividir(6,2);
function dividir(a,b) {
    let c = a / b;
    return console.log(c);
}

// Las funciones pueden ser usadas por las expresiones (variables).
function saludo() {
    return "Hola leandro sigue estudiando man...";
}
let z = saludo() + " Así seras exitoso";
console.log(z);

// Las funciones son como un objeto tienen propiedades y metodos.
// La propiedad arguments.length retorna el numero de argumentos recibidos cuando la funcion es invocada
miFuncion(3,3);
function miFuncion(a,b) {   
    return console.log(arguments.length);
}

// El metodo toString() retorna la funcion como un string
let txt = saludo.toString();
console.log(txt);

// FUNCIONES DE FLECHA, permiten una syntaxis mas corta.
// No se necesita la palabra function, return ni los brackets.
// Las funciones de flecha NO TIENEN THIS. No son adecuados para definir metodos de objetos.
// Las funciones  de flecha NO TIENEN HOSTING, deben ser definidas antes de ser usadas.
// Usar const es mas seguro que usar var, porque una expresion de funcion es siempre un valor constante.
// SOLO PUEDO OMITIR LA PALABRA CLAVE RETURN Y LOS CORCHETES SI LA FUNCION ES UNA SOLA LINEA. DEBIDO A ESTO, PUEDE SER UN BUEN HABITO MANTENERLOS SIEMPRE.
const r = (x, y) => {return x * y};
console.log(r(5,5));




// Los parametros son los nombres listados en la definicion de la funcion.
// Los argumentos son los valores reales recibidos por la funcion al invocarla.
// Las funciones no chequean el numero de argumentos recibidos, si se llama a una funcion y se entregan menos argumentos que los declarados, los argumentos no entregados serán UNDEFINED.
function probando(a, b = 2) {
    let c = a + b; 
    console.log(c.toString());
}
probando(5);

// Arguments, contiene un array de todos los argumentos usados al invocar la funcion
// En este ejemplo encuentro el argumento mayor
let p = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let i;
  let max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(p);

// Funcion para sumar todos los argumentos
let u = sumarArgumentos(100, 55, 30, 10);

function sumarArgumentos(){
    let i;
    // No uso sum = undefined por que no se puede sumar texto con numeros, como error imprime NaN.
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(u);



// Cuando una funcion no tiene propietario y es llamada, el valor de THIS sera el objeto global window, usar el objeto window como variable puede facilmente crashear mi programa.
x = myFuncion();            // x will be the window object

function myFuncion() {
  return this;
}
document.getElementById('demo').innerHTML = x;

// Funcion como METODO. En este caso la funcion pertenece al objeto myObject, por lo tanto THIS se refiere al objeto que posee el codigo (myObject).
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
document.getElementById('demo1').innerHTML = myObject.fullName();

// Creando un objeto con una funcion constructora, aqui la palabra clave this no tiene valor, el valor de this sera el nuevo objeto creado.
function myFunctionConstructora(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
// El nuevo objeto hereda las propiedades y metodos de el constructor
let h = new myFunctionConstructora('Aldo', 'Saavedra');
console.log(h.firstName + " " + h.lastName);