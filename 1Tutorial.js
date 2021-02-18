/*JavaScript Display Possibilities

    Javascript can "display" data in different ways:
        *Writing into an HTML element, using innerHTML.

        *Writing into the HTML output using document.write(). For testing purposes, it is convenient to use document.write(). Using document.write() after an HTML document is loaded, will delete all existing HTML. The document.write() method should only be used for testing.

        *Writing into an alert box, using window.alert(). You can use an alert box to display data

        *Writing into the browser console, using console.log(). For debugging purposes, you can use the console.log() method to display data.
*/
//innerHTML
document.getElementById("demo").innerHTML = 'Changing the innerHTML property of an HTML element is a common way to display data in HTML.'
/*document.write()
document.write(5 + 6)*/
//window.alert()
window.alert('Esta es una alerta')
//console.log()
console.log('Estoy escribiendo en la consola')

/* JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.
Here is a list of some of the keywords.

break              Terminates a switch or a loop
continue           Jumps out of a loop and starts at the top
debugger           Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while       Executes a block of statements, and repeats the block, while a condition is true
for                Marks a block of statements to be executed, as long as a condition is true
function           Declares a function
if ... else        Marks a block of statements to be executed, depending on a condition
return             Exits a function
switch             Marks a block of statements to be executed, depending on different cases
try ... catch      Implements error handling to a block of statements
var               Declares a variable
*/
//VARIABLES: In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).
/*All JavaScript identifiers are case sensitive.  
The general rules for constructing names for variables (unique identifiers) are:
    *Names can contain letters, digits, underscores, and dollar signs.
    *Names must begin with a letter
    *Names can also begin with $ and _ (but we will not use it in this tutorial)
    *Names are case sensitive (y and Y are different variables)
    *Reserved words (like JavaScript keywords) cannot be used as names
*/
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; } //Con continue, en el momento que i sea igual a 3 tomara el continue y empiezara nuevamente el ciclo (No pasara al siguiente codigo que es imprimir)
  text += "The number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text;
//You can declare many variables in one statement
var person = "John Doe", carName = "Volvo", price = 200, color//La variable color tiene como valor UNDEFINED

//JavaScript Arithmetic Operators
/* 
OPERADOR: Signo        OPERANDO: Los numeros 
    + 	Addition
    - 	Subtraction
    * 	Multiplication
    ** 	Exponentiation (ES2016) Ej: var x = 5, z = x ** 3      El resultado es 125 (5 * 5 *5)
                                    Esto produce el mismo resultado que Math.pow(x,3): 125
    / 	Division
    % 	Modulus (Division Remainder)
    ++ 	Increment
    -- 	Decrement
*/

//JavaScript Assignment Operators (uso no binario)
/*
    OPERATOR    EXAMPLE     SAME AS
        = 	     x = y 	     x = y
        += 	     x += y 	 x = x + y
        -= 	     x -= y 	 x = x - y
        *= 	     x *= y 	 x = x * y
        /= 	     x /= y 	 x = x / y
        %= 	     x %= y 	 x = x % y
        **= 	 x **= y 	 x = x ** y
*/

//JavaScript String Operators
/* 
    The + operator can also be used to add (concatenate) strings. When used on strings, the + operator is called the concatenation operator.

    var txt1 = "Aldo"
    var txt2 = "Leandro"
    var txt3 = txt1 + " " + txt2

    The += assignment operator can also be used to add (concatenate) strings:

    var txt1 = "What a very ";
    txt1 += "nice day"; 
    The result of txt1 will be: What a very nice day
*/

//Adding Strings and Numbers
/* 
    Adding two numbers, will return the sum, but adding a number and a string will return a string:

    var x = 5 + 5;
    var y = "5" + 5;
    var z = "Hello" + 5;
    The result of x, y, and z will be: 10, 55, hello5

    If you add a number and a string, the result will be a string!
*/

//JavaScript Comparison Operators
/*
OPERATOR    DESCRIPTION
    == 	     equal to
    === 	 equal value and equal type
    != 	     not equal
    !== 	 not equal value or not equal type
    > 	     greater than
    < 	     less than
    >= 	     greater than or equal to
    <= 	     less than or equal to
    ? 	     ternary operator
*/

//JavaScript Logical Operators
/* 
 Operator    DESCRIPTION
    && 	     logical and
    || 	     logical or
    ! 	     logical not
*/

//JavaScript Type Operators
/* 
    Operator 	            Description
    typeof 	        Returns the type of a variable
    instanceof 	    Returns true if an object is an instance of an object type
*/
//El constructor es llamado en el momento de la creacion de la instancia(el momento en que se crea la instancia del objeto). El constructor es un metodo de la clase. En JavaScript, la función sirve como el constructor del objeto, por lo tanto, no hay necesidad de definir explícitamente un método constructor.
//El siguiente código crea un objeto del tipo Coche y una instancia de ese tipo de objeto, miCoche. El operador instanceof demuestra que el objeto miCoche es del tipo Coche y del tipo Object.
function Coche(fabricante, modelo, ejercicio) {
    this.fabricante = fabricante
    this.modelo = modelo
    this.ejercicio= ejercicio
 }
miCoche = new Coche("Honda", "Accord", 1998)
a = miCoche instanceof Coche // devuelve verdadero (true)
b = miCoche instanceof Object // devuelve verdadero (true)
console.log(a + " " + b)


//JavaScript Bitwise Operators: Any numeric operand in the operation is converted into a 32 bit number. 
/* 
 Su uso se limita muchas veces al ámbito exclusivamente matemático, al desarrollo de algoritmos complejos o al de los cálculos necesarios durante el desarrollo de videojuegos 3D.

 Una operación bit a bit (o Bitwise) opera sobre números binarios a nivel de bits individuales.
 Un detalle a tener en cuenta es que estos Bitwise son, en Javascript, operadores de 32-bits, lo que significa que en el manejo de valores binarios, un número como 0101 se procesa internamente como 00000000000000000000000000000101. Sin embargo, todos los ceros de la izquierda pueden despreciarse ya que, como en el caso de los números decimales, no tienen ningún significado o valor.
 Estos operadores están presente en la mayoría de lenguajes de programación (C#, PHP, Java, Ruby…) y son muy similares a los operadores lógicos que solemos manejar.
 

 Operator 	Description 	        Example 	  Same as 	    Result 	 Decimal
    & 	    AND 	                5 & 1 	    0101 & 0001 	 0001 	   1
    | 	    OR 	                    5 | 1 	    0101 | 0001 	 0101 	   5
    ~ 	    NOT 	                ~ 5 	    ~0101 	         1010 	   10
    ^ 	    XOR 	                5 ^ 1 	    0101 ^ 0001 	 0100 	   4
    << 	    Zero fill left shift 	5 << 1 	    0101 << 1 	     1010 	   10
    >> 	    Signed right shift 	    5 >> 1 	    0101 >> 1 	     0010 	   2
    >>> 	Zero fill right shift 	5 >>> 1 	0101 >>> 1 	     0010 	   2

The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
*/


//JavaScript Operator Precedence Values: Tener mas importancia que otra
/* 

Value 	  Operator 	               Description 	                        Example
20 	        ( ) 	            Expression grouping 	                (3 + 4)
  	  	  	 
19 	        . 	                Member 	                                person.name
19 	        [] 	                Member 	                                person["name"]
19 	        () 	                Function call 	                        myFunction()
19 	        new 	            Create 	                                new Date()
  	  	  	 
17 	        ++ 	                Postfix Increment 	                    i++
17 	        -- 	                Postfix Decrement 	                    i--
  	  	  	 
16 	        ++ 	                Prefix Increment 	                    ++i
16 	        -- 	                Prefix Decrement 	                    --i
16 	        ! 	                Logical not 	                        !(x==y)
16 	        typeof 	            Type 	                                typeof x
  	  	  	 
15 	        ** 	                Exponentiation (ES2016) 	            10 ** 2  ECMAScript 2015 (ES6) or higher.         
  	  	  	 
14 	        * 	                Multiplication 	                        10 * 5
14 	        / 	                Division 	                            10 / 5
14 	        % 	                Division Remainder 	                    10 % 5
  	  	  	 
13 	        + 	                Addition 	                            10 + 5
13 	        - 	                Subtraction 	                        10 - 5
  	  	  	 
12 	        << 	                Shift left 	                            x << 2
12 	        >> 	                Shift right 	                        x >> 2
12 	        >>> 	            Shift right (unsigned) 	                x >>> 2
  	  	  	 
11 	        < 	                Less than 	                            x < y 
11 	        <= 	                Less than or equal 	                    x <= y
11 	        > 	                Greater than 	                        x > y
11 	        >= 	                Greater than or equal 	                x >= y
11 	        in 	                Property in Object 	             "PI" in Math       ECMAScript 2015 (ES6) or higher.
11 	        instanceof 	        Instance of Object 	             instanceof Array   ECMAScript 2015 (ES6) or higher.
  	  	  	 
10 	        == 	                Equal 	                                x == y
10 	        === 	            Strict equal 	                        x === y
10 	        != 	                Unequal 	                            x != y
10 	        !== 	            Strict unequal 	                        x !== y
  	  	  	 
9 	        & 	                Bitwise AND 	                        x & y
8 	        ^ 	                Bitwise XOR 	                        x ^ y
7 	        | 	                Bitwise OR 	                            x | y
6 	        && 	                Logical AND 	                        x && y
5 	        || 	                Logical OR 	                            x || y
4 	        ? : 	            Condition 	                            ? "Yes" : "No"
  	  	  	 
3 	        += 	                Assignment 	                            x += y
3 	        /= 	                Assignment 	                            x /= y
3 	        -= 	                Assignment 	                            x -= y
3 	        *= 	                Assignment 	                            x *= y
3 	        %= 	                Assignment 	                            x %= y

                               (uso binario todo el 3)

3 	        <<= 	            Assignment 	                            x <<= y
3 	        >>= 	            Assignment 	                            x >>= y
3 	        >>>= 	            Assignment 	                            x >>>= y
3 	        &= 	                Assignment 	                            x &= y
3 	        ^= 	                Assignment 	                            x ^= y
3 	        |= 	                Assignment 	                            x |= y
  	  	  	 
2 	        yield 	            Pause Function 	                        yield x    ECMAScript 2015 (ES6) or higher.
1 	        , 	                Comma 	                                5 , 6


The prefix increment returns the value of a variable after it has been incremented. ++i
The postfix increment returns the value of a variable before it has been incremented. i++
*/

/*Extra large or extra small numbers can be written with scientific (exponential) notation:
    
    var y = 123e5;      // 12300000
    var z = 123e-5;     // 0.00123 

*Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

    car = undefined;    // Value is undefined, type is undefined 

*Empty Values 

    Un valor vacio no tiene nada que ver con uno indefinido, una cadena vacia tiene
    un valor legal como un tipo.
    var car = "";    // The value is "", the typeof is "string" 

*Null

    En js null es nada, se supone que es algo que NO existe. En js el tipo de dato de null es OBJECT (bug, deberia ser null).
    Puedo vaciar un objeto cambiando su valor a null.
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null;    // Now value is null, but type is still an object.

    Tambien puedo vaciar un objeto cambiando su valor por undefined.
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = undefined;   // Now both value and type is undefined

*Difference Between Undefined and Null: undefined and null are equal in value but different in type:

    typeof undefined           // undefined
    typeof null                // object

    null === undefined         // false
    null == undefined          // true 


*Primitive Data

    Un valor primitivo es un unico valor sin propiedades adicionales ni metodos

    The TYPEOF operator can return one of these primitive types:
    string("aldo"), number(13), boolean(true or false), undefined(if has no value)


*Complex data

    The typeof operator can return one of two complex types:

    function
    object

    The typeof operator returns "object" for objects, arrays, and null.

    The typeof operator does not return "object" for functions.

    Objects return object, Arrays return object, null return object, myFunct(){} return function.


 */
