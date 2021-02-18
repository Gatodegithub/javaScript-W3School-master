/* La declaracion Try permite probar un bloque de codigo en busca de errores.
La instruccion Catch permite manejar el error si ocurre uno en el bloque Try.
La instruccion Throw permite crear y errores personalizados.
La declaracion Finally permite ejecutar el codigo, despues del Try y Catch, independientemente del resultado. 

Cuando ocurre un error, javascript normalmente para y genera un mensaje de error, el termino tecnico para esto es: js lanzara una excepcion (lanza un error).

Js creara un objeto error con dos propiedades: nombre y mensaje.
*/

//En este ejemplo, hemos escrito alerta como adddlert para producir deliberadamente un error:
try {
    adddlert("Welcome guest!");
} catch (err) {
    document.getElementById("demo").innerHTML = err.message; //js detecta adddlert como un error y ejecuta el catch para manejarlo
}


//THROW STATEMENT, permite crear un error personalizado, tecnicamente puedo lanzar excepciones (lanzar errores). La excepcion puede ser un string, number, boolean o un objeto.
var message, boton, x;
boton = document.getElementById("boton1");
boton.addEventListener('click', () => {
    myFunction();
})
// En este ejemplo: Si el valor ingresado cumple alguna de las condiciones, se saldra en el error personalizado con THROW y el parametro err en el catch tomara el error personalizado (throw) y se lanzara finalmente el catch. el cual tomo el throw (error personalizado).
function myFunction() {
    message = document.getElementById("parrafin");
    message.innerHTML = "";
    x = document.getElementById("age").value;

    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        message.innerHTML = "Input is " + err;
    }
}



// FINALLY STATEMENT, La declaracion finally permite ejecutar codigo, despues del try y catch, independientemente del resultado:
var message, boton2, x;
boton2 = document.getElementById("boton2");
boton2.addEventListener('click', () => {
    myFunction2();
})

function myFunction2() {
    message = document.getElementById("parrafin2");
    message.innerHTML = "";
    x = document.getElementById("age").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    } catch (err) {
        message.innerHTML = "Error: " + err + ".";
    } finally { //Despues del try y el catch, independientemente del resultado se ejecutara este bloque
        document.getElementById("age").value = ""; //Borro el valor ingresado en el input
    }
}



/*EL OBJETO ERROR, js tiene un objeto de error incorporado que proporciona informacion de error cuando se produce un error. El objeto de error proporciona dos propiedades utiles: nombre y mensaje.

La propiedad name del error puede retornar 6 valores diferentes: 

     Error Name:	                Description:
    EvalError	            An error has occurred in the eval() function
    RangeError	            A number "out of range" has occurred
    ReferenceError	        An illegal reference has occurred
    SyntaxError	            A syntax error has occurred
    TypeError	            A type error has occurred
    URIError	            An error in encodeURI() has occurred

Los 6 diferentes valores son describidos debajo.
*/
//EvalError indica un error en la funcion eval(), LAS VERSIONES NUEVAS DE JAVASCRIPT NO ARROJAN EvalError, DEBO USAR SyntaxError EN SU LUGAR.


//Range error : Este error es lanzado si uso un numero fuera del rango de valores legales.
var num = 1;
try {
    num.toPrecision(500); // Un numero no puede tener 500 digitos.
} catch (err) {
    console.log(err.name); //Error de nombre RangeError.
}


//Reference Error : Este error es lanzado si una variable NO HA SIDO DECLARADA.
var x;
try {
    x = y + 1; // y no ha sido referenciada.
} catch (err) {
    console.log(err.name);
}


//Syntax Error : Este error es lanzado si se intenta EVALUAR el codigo con un error de sintaxis
try {
    eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
    console.log(err.name);
}


//Type Error : Este error es lanzado si hay algun error con los tipos de datos.
var num = 1;
try {
    num.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
    console.log(err.name);
}


//URI (Uniform Resource Identifier) Error: Este error es lanzado si se usa caracteres ilegales en una funcion URI.
try {
    decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
    console.log(err.name);
}



/*Mozilla and Microsoft defines some non-standard error object properties:

fileName (Mozilla)
lineNumber (Mozilla)
columnNumber (Mozilla)
stack (Mozilla)
description (Microsoft)
number (Microsoft)

Do not use these properties in public web sites. They will not work in all browsers.
*/