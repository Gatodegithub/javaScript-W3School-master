/* JavaScript Numbers are Always 64-bit Floating Point

    The JavaScript interpreter works from left to right
    Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

    En javascript, un numero puede ser un valor primitivo (typeof = number) o un objeto (typeof = object).
    Javascript tiene seis tipos primitivos: Sin definir ( undefined ), Nulo ( null ), Lógicos ( boolean ), Numérico ( number ), Cadena ( string ), Símbolo ( symbol )

    https://www.w3schools.com/js/js_bitwise.asp <- Para mas informacion SOBRE LOS BITS de los num. 

*/

var x = 3.14
var y = 3

//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
x = 0.2 + 0.1
console.log(x)
// To resolve the problem above, it helps to multiply and divide
x = (0.2 * 10 + 0.1 * 10) / 10
console.log(x)


// Extra large or extra small numbers can be written with scientific (exponent) notation:
x = 123e5;    // 12300000
y = 123e-5;   // 0.00123


//Concadenacion y sumas
x = 10
y = 20
console.log("El resultado es: " + ( x + y )) //Son necesarios los parentesis para que se realize la suma


//Javascript will try to convert string to numbers in all numeric operations. This will work:
x = "100"
y = "10"
console.log(x / y) //Return a number
console.log(x * y) //Return a number
console.log(x - y) //Return a number
console.log(x + y) //This will not work, Js uses the + operator to concatenate the strings


//NaN : Not a number, trying to do arithmetic with a non-numeric string will result in NaN (Not a number)
x = 100 / "apple"
console.log(x)
//If the string contains a numeric value, the result will be a number
x = 100 / "10"
console.log(x)
//isNaN() puedo usar esta funcion global para saber si un valor es numerico
x = 100 / "apple"
console.log(isNaN(x))//Devuelve true porque x no es un numero
x = NaN
y = 5
z = x + y
console.log(z) //If you use NaN in a mathematical operation, the result WILL ALSO BE NaN
x = NaN
y = "5"
z = x + y
console.log(z) //Or the result might be a concatenation
console.log(typeof NaN) //NaN is a number: typeof Nan returns number


//Infinity or -Infinity : is the value Javascript will return if you calculate a number outside the largest possible number.
var myNumber = 9999999999999999
while (myNumber != Infinity) { //Mientras el numero no sea infinito
    myNumber = myNumber * myNumber
    console.log(myNumber)
} 
//Divisiones por 0 tambien generan infinitos
x = 2 / 0
y = -2 / 0
console.log("Division por 0 siempre da: " + x)
console.log("Division por 0 siempre da: " + y)
//Infinity is a number:
console.log(typeof Infinity) //Retorna number
//Hexadecimal : Never write a number with a leading zero (like 07), By default, js displays numbers as base 10 decimals, but you can use the toString() method to output numbers from base 2 to base 36. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
x = 0xff
console.log(x)
//Numbers Can Be Objects : NO crear numbers object, hace la ejecucion lenta y complica el codigo
y = new Number(123)
console.log(typeof y) //Retorna un objeto
x = 500
y = new Number(500)
console.log(x == y) //Devuelve true ya que tienen el mismo valor
console.log(x === y)//Devuelve false ya que su valor es el mismo pero son de distinto tipo (number y el otro objeto)
x = new Number(500)
y = new Number(500)
console.log(x == y)//Devuelve false por que OBJETOS NO PUEDEN SER COMPARADOS



/* NUMBERS METHODS

    Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects),
    Pero con javascript los metodos y las propiedades tambien estan disponibles para los valores primitivos, porque javascript trata los valores promitivos como objetos al ejecutar metodos y propiedades
*/

//toString() method retorna un numero como STRING
x = 123
console.log( )
console.log( x.toString() ) //Devuelve como string el valor de x como variable
console.log( (123).toString() ) //Retorna 123 de literal 123
console.log( (100 + 23).toString() )// Retorna 123 de la expresion


//toExponential() method retorna un string con un numero redondeado y escrito usando notacion exponencial, el parametro define el numero de caracteres detras del punto decimal
x = 9.656
console.log( )
console.log( x.toExponential(2) )
console.log( x.toExponential(4) )
console.log( x.toExponential(6) )


//toFixed() method retorna un string, con el numero escrito con un numero especifico de decimales
x = 9.656
console.log( )
console.log( x.toFixed(0) ) //sin decimales, asi que lo redondea al numero entero
console.log( x.toFixed(2) ) //Con dos decimales, se redondea el segundo decimal segun el tercer decimal, ESTO ES PERFECTO PARA TRABAJAR CON MONEDAS
console.log( x.toFixed(4) ) //Se le agrega un decimal 0
console.log( x.toFixed(6) )


//toPrecision() method retorna un string, con un numero escrito con un largo especifico
x = 9.656
console.log( )
console.log( x.toPrecision() ) //retorna el mismo numero ya que no se especifico el largo como parametro
console.log( x.toPrecision(2) )//retorna solo 2 caracteres, se redondea.
console.log( x.toPrecision(3) )//retorna 3 caracteres
console.log( x.toPrecision(6) )//retorna 6 caracteres, se rellena con 0


//valueOf() method retorna un numero como numero, Este metodo se usa internamente en javascript para convertir objetos Number (Ej: x = new Number(100) ) en valores primitivos. NO SIGNIFICA QUE DEBA USAR NUMEROS COMO OBJETOS, NO HAY RAZON PARA USARLO EN MI CODIGO. TODOS LOS TIPOS DE DATOS TIENEN valueOf() Y toString() METHODS. 
x = 123
console.log( )
console.log( x.valueOf() )
console.log( (123).valueOf() )
console.log( (100 + 23).valueOf() )


/*Converting variables to numbers, There are 3 methods that can be used to convert variables to numbers.

Estos no son metodos de numeros, SON METODOS GLOBALES DE JAVASCRIPT

    Number() method: retorna un numero, convertido desde un argumento
    parseInt() method: retorna un numero entero
    parseFloat() method: retorna un numero flotante
*/
// Number() method : Can be used to convert js variables to numbers: (CONVIERTE STRING A NUMERO), si no puede convertir devuelve NaN
x = "133"
console.log( )
console.log( Number(true) ) //Devuelve 1 porque true es 1
console.log( Number(false) )//Devuelve 0 porque false es 0
console.log( Number("10") )
console.log( Number(" 10") )
console.log( Number("10 ") )
console.log( Number(x) ) //Convierte la variable string a NUMERO
console.log( Number("10.33") )
console.log( Number("10,33") )//NaN not a number
console.log( Number("10 33") )//NaN not a number
console.log( Number("Aldo") )//NaN not a number
//Number() methods used on dates
console.log( Number(new Date("2019-10-23")) ) //Devuelve el numero de milisegundos desde 1.1.1970


//parseInt() method : Analiza una cadena y RETORNA UN NUMERO ENTERO, se permiten espacios pero solo se devuelve el primer numero
console.log(  )
console.log( parseInt("10") ) //devuelve number 10
console.log( parseInt("10.33") ) //devuelve 10
console.log( parseInt("10 20 30") ) //devuelve 10
console.log( parseInt("10 years") ) // devuelve 10
console.log( parseInt("years 10") ) //Devuelve Nan
console.log( parseInt(x) )


//parseFloat() method : analiza una cadena y retorna un numero. incluye espacios. solo el primer numero es retornado
console.log(  )
console.log(parseFloat("10") );  // returns 10
console.log(parseFloat("10.33") );   // returns 10.33
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10 years"));  // returns 10
console.log(parseFloat("years 10"));  // returns NaN 


/*Number Properties . Propiedades de los numeros. Es un objeto nativo con propiedades

    Property 	                               Description
    
    MAX_VALUE 	                 Returns the largest number possible in JavaScript
    
    MIN_VALUE 	                Returns the smallest number possible in JavaScript
    
    POSITIVE_INFINITY 	              Represents infinity (returned on overflow)
    
    NEGATIVE_INFINITY 	              Represents negative infinity (returned on overflow)
    
    NaN 	                           Represents a "Not-a-Number" value
*/
console.log(  )
console.log( Number.MAX_VALUE )
console.log( Number.MIN_VALUE )
console.log( Number.POSITIVE_INFINITY )//Ocurre cuando divido 1/0 , da infinito , asi que es positive_infinity TRUE
console.log( Number.NEGATIVE_INFINITY )//Ocurre cuando divido -1/0 , da -infinito , asi que es negative_infinity TRUE
console.log( Number.NaN )//Indica Not a number


console.log()
// Number.isInteger() method devuelve true si el argumento es un entero.
let numr = 10;
console.log(Number.isInteger(numr)); //Devuelve true porque es entero



// Number.isSafeInteger() Method  <- RETORNA TRUE SI EL ARGUMENTO ES UN ENTERO SEGURO.



// isFinite() method <- este metodo global retorna falso si el argumento es infinito o NaN. En otro caso retornara true.
console.log()
console.log(isFinite(10/0)) // Retorna falso
console.log(isFinite(10/1)) // Retorna true


// isNaN() methods <- Este metodo global retorna true si el argumento es NaN. En otro caso retorna false.
console.log()
console.log(isNaN("Hello")) //Retorna true pork es Not a Number.