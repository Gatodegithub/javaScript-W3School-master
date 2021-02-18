//Functions
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//Cuando javascript alcanza una declaracion de retorno, la funcion parara de ejecutarse
//Las variables declaradas dentro de una función de JavaScript se vuelven LOCALES a la función, las variables locales pueden solamente ser accedidas desde dentro de la funcion.
//Local variables are created when a function starts, and deleted when the function is completed.
//Puedo usar variables con el mismo nombre que otras variables que estan dentro de otra funcion (ya que solo estan vivas dentro de su funcion y fuera de eso no existen)
//Remember: JavaScript counts positions from zero. First position is 0.
var x = function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
document.getElementById("demo").innerHTML = "The temperature is " + x(77) + " Celsius";; //Uso una funcion para insertar en el html, puedo concatenar las funciones para mostrar su resultado, de igual manera si pongo la x

/*Acceder a una función sin () devolverá la definición de la función en lugar del resultado de la función
document.getElementById("demo2").innerHTML = toCelsius;*/
document.getElementById("demo2").innerHTML = x;


//Objetos
var car = {type:"Fiat", model:"500", color:"white"};//Properties, objects can contain methods
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {
    return this.firstName + " " + this.lastName //this se refiere al PROPIETARIO (objeto) de la funcion
  }
};

console.log(person.eyeColor)//Puedo obtener el valor de una propiedad de esta forma
console.log(person["age"])//O de esta forma
console.log(person.fullName())
/*Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object: 

  var x = new String();        // Declares x as a String object
  var y = new Number();        // Declares y as a Number object
  var z = new Boolean();       // Declares z as a Boolean object

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
*/



/*EVENTS: Here is a list of some common HTML events:

  Event 	            Description
onchange 	    An HTML element has been changed
onclick 	    The user clicks an HTML element
onmouseover 	The user moves the mouse over an HTML element
onmouseout 	  The user moves the mouse away from an HTML element
onkeydown 	  The user pushes a keyboard key
onload 	      The browser has finished loading the page

The list is much longer:  https://www.w3schools.com/jsref/dom_obj_event.asp
*/



//STRINGS
/* var x = "We are the so-called "Vikings" from the north.";
The solution to avoid this problem, is to use the backslash escape character.

 Code 	 Result 	Description
  \' 	     ' 	    Single quote
  \" 	     " 	    Double quote
  \\ 	     \ 	     Backslash

Six other escape sequences are valid in JavaScript:

  \b 	  Backspace
  \f 	  Form Feed
  \n 	  New Line
  \r 	  Carriage Return
  \t 	  Horizontal Tabulator
  \v 	  Vertical Tabulator

The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

*/
var x = "We are the so-called \"Vikings\" from the north."//El backslash (\) convierte caracteres especiales en caracteres de cadena, soluciona el problema de compatibilidad con las comillas dobles y simples
console.log(x)

x = 'It\'s alright.'; // El caracter \ soluciona el problema de compatiblidad con las comillas dobles y simples
console.log(x)

x = "The character \\ is called \nbackslash."; // \n sirve para realizar un salto de linea
console.log(x)

/*document.getElementById("demo3").innerHTML = "Hello \
Dolly!";  El \ backslash de esta forma sirve para realizar SALTOS DE LINEA cuando el codigo se hace muy grande (ESTO NO ES RECOMENDABLE YA QUE PUEDE QUE NO TENGA SOPORTE EN TODOS LOS NAVEGADORES*/

document.getElementById("demo3").innerHTML = "Hello " +
"Dolly!"; //ESTA ES UNA FORMA SEGURA DE REALIZAR SALTOS DE LINEA CON STRINGS CUANDO EL CODIGO SE HACE MUY GRANDE

/*Strings can also be defined as objects with the keyword new:

  var firstName = new String("John");

  var x = "John";
  var y = new String("John");

  // typeof x will return string
  // typeof y will return object 

  Don't create strings as objects. It slows down execution speed.
  The NEW keyword complicates the code. This can produce some unexpected results:

  var x = "John";             
  var y = new String("John");
  (x == y) is true because x and y have equal values 

  var x = "John";             
  var y = new String("John");
  (x === y) is false because x and y have different types (string and object) 

  var x = new String("John");             
  var y = new String("John");
  (x == y) is false because oject cannot be compared

  var x = new String("John");             
  var y = new String("John");
  (x === y) is false because x and y are different objects
 */
var nombresito = new String("aldito")//nombresito sera un objeto y en cada indice almacenara un caracter del argumento
nombresito.apellido = "Saavedra" //Puedo añadir propiedades como a un objeto normal
console.log(nombresito)


/*STRING METHODS

  Todos los métodos de cadena devuelven una nueva cadena. No modifican la cadena original.
  Dicho formalmente: las cadenas son inmutables: las cadenas no se pueden cambiar, solo se pueden reemplazar.

*/
var txt = "ABCDEFGHIJKLMNÑOPQRSTUWXYZ"
console.log(txt.length) // Para saber la cantidad de caracteres que tiene el string, en caso que sea un array devuelve la cantidad de elementos

var str = "Please locate where 'locate' occurs!"
var pos = str.indexOf("locate")
console.log(pos)// Retorna el INDICE de la primera ocurrencia encontrada, si no encuentra retorna -1

pos = str.lastIndexOf("locate")// Retorna el indice de la ultima ocurrencia encontrada, si no encuentra retorna -1
console.log(pos)

//AMBOS METODOS (indexOf, lastIndexOf) ACEPTAN UN SEGUNDO PARAMETRO QUE INDICA EN QUE POSICION COMIENZA A BUSCAR
pos = str.indexOf("locate", 15) //con el segundo parametro opcional indico la posicion que empieze a buscar
console.log(pos)

pos = str.lastIndexOf("locate", 15) //La busqueda comienza desde el final en la posicion 15, y busca desde el comienzo de la cadena hasta el final (SIN CONTAR LOS ULTIMOS 15 CARACTERES)
console.log(pos)

pos = str.search("locate") //Busca en la cadena el valor especificado y retorna el indice de inicio
console.log(pos)

//El metodo search() NO PUEDE TOMAR UN SEGUNDO ARGUMENTO DE POSICION DE INICIO
//El metodo indexOf() NO PUEDE TOMAR VALORES DE BUSQUEDA POTENTES (EXPRESIONES REGULARES)



/*Extracting String Parts

  There are 3 methods for extracting a part of a string:

    slice(start, end)
    substring(start, end)
    substr(start, length)

*/
//Extrae los caracteres que estan ENTRE los indices indicados
//Si omito el segundo parametro, el metodo retornara el resto de la cadena
str = "Apple, Banana, Kiwi"
pos = str.slice(7, 13) // Extrae una parte de una cadena y devuelve la parte extraida en una nueva cadena, el metodo toma dos parametros: posicion de inicio, posicion final (final -1).
console.log(pos)
//Si un parametro es negativo, la posicion se cuenta desde el final de la cadena.
pos = str.slice(-12, -6)
console.log(pos)
//Devuelve el resto de la cadena
pos = str.slice(7)
console.log(pos)
//Empieza a contar desde el final, se posiciona en el indice 12 y devuelve el resto de la cadena (de la derecha)
pos = str.slice(-12)
console.log(pos)

//SUBSTRING()
//Es similar a slice la diferencia es que no puede aceptar indices negativos. 
pos = str.substring(7, 13)//Desde el indice 7 al indice 13-1, SI OMITO EL SEGUNDO ARGUMENTO devuelve el resto de la cadena
console.log(pos)

//SUBSTR()
//Es similar a slice la diferencia es que el segundo parametro especifica la cantidad de caracteres que retornara (6) desde el indice 7
pos = str.substr(7, 6);// SI OMITO EL SEGUNDO ARGUMENTO devuelve el resto de la cadena
console.log(pos)
//Si el primer argumento es negativo, la posicion cuenta desde el final de la cadena
pos = str.substr(-4)
console.log(pos)

//Replacing String Content
str2 = "Please visit Microsoft"
var n = str2.replace("Microsoft", "w3School") //Devuelve una nueva cadena, no cambia la original
console.log(n)
//POR DEFECTO REPLACE() REEMPLAZA SOLO LA PRIMERA COINCIDENCIA, TAMBIEN POR DEFECTO ES CASE SENSITIVE
str2 = "Please visit Microsoft and Microsoft!"
n = str2.replace("Microsoft", "W3School")
console.log(n)
//To replace case insensitive, use a regular expression with an /i flag (insensitive): Note that regular expressions are written without quotes.
str2 = "Please visit Microsoft"
n = str2.replace(/MICROSOFT/i, "W3School")//CON LA EXPRESION REGULAR /I IGNORO EL CASE SENSITIVE
console.log(n)
//PARA REEMPLAZAR TODAS LAS COINCIDENCIAS USO LA EXPRESION REGULAR /G FLAG (GLOBAL MATCH)
str2 = "Please visit Microsoft and Microsoft!"
n = str2.replace(/Microsoft/g, "W3School")
console.log(n)

// El método de string, match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. DEVUELVE UN ARRAY CON LOS MATCHS
var str_123 = "Hola Programador En Proceso :)";
var patt1 = /programador/i;
var resul_t = str_123.match(patt1);
console.log(resul_t)

//Convert To Upper And Lower Case
var text1 = "Hello World!";
var text2 = text1.toUpperCase();
console.log(text2)
text2 = text1.toLowerCase();
console.log(text2)

//The Concat() Method: Une dos o mas strings
text1 = "Hello"
text2 = "World!"
var text3 = text1.concat(" ", text2)
console.log(text3)
//El metodo concat() se puede utilizar en lugar del operador más. Estas dos lineas hacen lo mismo:
var texto = "Hello" + " " + "Mundo!"
var texto2 = "Hola".concat(" ", "Mundo!")
console.log(texto.concat(" - ", texto2))


//String.trim()
// The trim() method removes whitespace from both sides of a string
var stn = "   Hola mundo    "
console.log(stn.trim())
// If you need to support IE 8, you can use replace() with a regular expression instead:
console.log(stn.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))


// Extracting String Characters
/* Hay 3 metodos para extraer caracteres de un string 

  charAt(position), charCodeAt(position), Property access []
*/
stn = "Hola mama"
console.log(stn.charAt(0)) //Devuelve el caracter que se encuentre en el indice indicado
console.log(stn.charCodeAt(0)) //El método charCodeAt () devuelve el código unicode del carácter en un índice especificado de una cadena
console.log(stn[0])/* ECMAScript 5 (2009) allows property access [ ] on strings: 

    It does not work in Internet Explorer 7 or earlier
    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)
*/


//CONVERTIR UN STRING EN UN ARRAY split() method
var txtt = "a,b,c,d,e"
var txttarray = txtt.split("") //Devuelve un array, cada indice del array contendra un caracter de la cadena
console.log(txttarray)
txttarray = txtt.split(",") // En cada indice habra un caracter (SU SEPARADOR ES LA COMA, NO SE IMPRIME)
console.log(txttarray)
txttarray = txtt.split() // Se crea solo un indice que contiene toda la cadena
console.log(txttarray)