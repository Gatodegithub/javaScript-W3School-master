/*Number() converts to a Number, String() converts to a String, Boolean() converts to a Boolean.

   -En javascript hay 5 tipos de datos diferentes que pueden contener valores.
    *String
    *Number
    *Boolean
    *Object
    *Function

   -Hay 6 tipos de Objetos.
    *Object
    *Date
    *Array
    *String
    *Number
    *Boolean

   -Y dos tipos de datos que no pueden contener valores.
    *Null
    *Undefined
*/

//typeof operator : Puedo usar el operador typeof para saber el tipo de dato de una variable en js.                 typeof operador no es una variable, es un operador (+-*/) no tiene ningun tipo de dato.                pero este operador siempre devuelve una cadena string que contine el tipo de dato.        
console.log( typeof "John" )                // Returns "string"
console.log( typeof 3.14 )                  // Returns "number"
console.log( typeof NaN )                   // Returns "number"
console.log( typeof false )                 // Returns "boolean"
console.log( typeof [1,2,3,4] )             // Returns "object"
console.log( typeof {name:'John', age:34} ) // Returns "object"
console.log( typeof new Date() )            // Returns "object"
console.log( typeof function () {} )        // Returns "function"
console.log( typeof myCar )                 // Returns "undefined"
console.log( typeof null )                  // Returns "object" 
// No puedo usar typeof para determinar si un objeto js es un array o un date

console.log("------------------------------------")

//The constructor Property : La propiedad constructor devuelve la funcion constructora para todas las variables de js
console.log( "Jhon".constructor )
console.log( (3.14).constructor )
console.log( false.constructor )
console.log( [1,2,3,4].constructor )
console.log( {name:'John',age:34}.constructor )
console.log( new Date().constructor )
console.log( function () {}.constructor )
//A esta funcion le paso como parametro un array y a ese array selecciono su constructor y veo si su constructor es la funcion Array. 
function isArray(myArray) {
    return myArray.constructor === Array;//Array es la funcion constructora de un objeto array
}
var marcas = ["Whetepeople", "Subrosa", "Merrit", "Eclat"]
console.log( isArray(marcas) )

function isDate(myDate) {
    return myDate.constructor === Date;
}
var fecha = new Date()
console.log( isDate(fecha) )//Si el constructor del objeto date es la funcion Date devolvera true

console.log("------------------------------------")

//Convirtiendo numeros a String, el METODO GLOBAL String() puede convertir numeros a string
var x = 1313;
var resultado = String(x);
console.log( resultado )//Lo devuelve en string

resultado = String(123);
console.log( resultado )//Lo devuelve en string

resultado = String(x + 2);
console.log( resultado )//Suma y lo devuelve en string

// El metodo toString() hace lo mismo. TODOS LOS OBJETOS TIENEN EL METODO toString()
console.log( x.toString() )
console.log( (123).toString() )
console.log( (x + 2).toString() )

/*A demas, tenemos estos metodos que estan en el capitulo 3Numbers.js detallados, que pueden ser usados para convertir numeros a string.

    *toExponencial() : retorna un string con un numero redondeado y escrito usando exponencial notacion
    *toFixed() : retorna un string con un numero redondeado y escrito con un especifico num de                      decimales.
    *toPrecision() : retorna un string, con un numero escrito con un largo especifico.
*/
console.log(  )


//Convertir Booleanos a Strings
x = false
console.log( String(x) )//devuelve "false" como cadena string
console.log( String(true) )//devuelve "true" como cadena string
//el metodo toString() hace lo mismo. TODOS LOS OBJETOS TIENEN EL METODO toString()
console.log( false.toString() )
console.log( true.toString() )
console.log()


//Convertir Dates a Strings, el metodo global String() puedo convertir fechas a string
console.log( String(Date()) ) // devuelve la fecha en cadena string 
//El metodo toString() hace lo mismo. TODOS LOS OBJETOS TIENEN EL METODO toString()
var fechita = new Date()
console.log( fechita.getDate().toString() )//saca el dia y convierte en string
console.log()


//Convertir Strings a numeros, El metodo global Number() puede convertir strings a numeros
console.log( Number("3.14") )   // returns 3.14
console.log( Number(" ") )      // returns 0
console.log( Number("") )       // returns 0
console.log( Number("99 88") )   // returns NaN
console.log()
/* En el capitulo 3Numbers.js hay mas metodos que pueden ser usados para convertir strings a numeros:

    parseFloat() : analiza una cadena y retorna un numero flotante
    parseInt() : analiza una cadena y retorna un entero
*/


//El operador unario + , puede ser usado para convertir una variable a numero, sigue las mismas reglas que el metodo global Number().
var y = "5";
var z = + y //con el operador unario + convierto el string a numero.
console.log( z )
y = "3str";
z = + y;
console.log( z )//Da NaN si no se puede convertir, pero recordar que tipo de dato de NaN es number.
console.log()


//Convertir Booleanos a Number
console.log( Number(false) ) //retorna 0
console.log( Number(true) ) //retorna 1
console.log()


//Convertir Dates a Number, El metodo global Number() puede ser usado para convertir fechas a number
d = new Date();
console.log( Number(d) )//Retorna el numero de milisegundos desde january 1, 1970
// El metodo getTime() hace lo mismo
console.log( d.getTime() )
console.log()


// Conversion automatica de tipos, Cuando js intenta operar con tipos de datos "INCORRECTOS", se intentara convertir el valor en un tipo de dato "correcto".
console.log( 5 + null  )  // returns 5        because null is converted to 0
console.log( "5" + null)  // returns "5null"  because null is converted to "null"
console.log( "5" + 2   )  // returns "52"     because 2 is converted to "2"
console.log( "5" - 2   )  // returns 3        because "5" is converted to 5
console.log( "5" * "2" )  // returns 10       because "5" and "2" are converted to 5 and 2


// Conversion automatica de cadenas string, js llama automaticamente a la funcion toString() de la variable cuando intenta "insertar" un objeto o una variable.
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false" 



// https://www.w3schools.com/js/js_type_conversion.asp   Tabla con los tipos de conversion.








