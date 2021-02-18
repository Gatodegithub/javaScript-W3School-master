/* ¿Qué es una expresión regular?

Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda.

Cuando busca datos en un texto, puede usar este patrón de búsqueda para describir lo que está buscando.

Una expresión regular puede ser un solo carácter o un patrón más complicado.

Las expresiones regulares se pueden usar para realizar todo tipo de operaciones de búsqueda y reemplazo de texto.

Ejemplo explicado:

/ w3schools / i es una expresión regular.

w3schools es un patrón (para ser usado en una búsqueda).

i es un modificador (modifica la búsqueda para que no distinga entre mayúsculas y minúsculas).

*/

// Usando metodos. En js ocacionalmente las expresiones regulares se usan con dos metodos strings, search() y replace()
var str = "Visit W3SChools!";
var n = str.search("W3SChools");//Devuelve el indice de la primera coincidencia
console.log(n)

// Se uso la expresion regular para hacer case-insensitive el metodo search()
n = str.search(/w3school/i)
console.log(n)

// Usando metodo string replace()
str = "Visit Microsoft";
var res = str.replace("Microsoft", "My House")
console.log(res)

// Modifiers , Los modificadores se pueden usar para realizar busquedas más globales sin distincion entra mayusculas y minusculas.
// Usando la regular expresion para hacerlo case insensitive
res = res.replace(/my house/i, "My Bed");
console.log(res)

// El método de string, match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. DEVUELVE UN ARRAY CON LOS MATCHS
str = "Hola Programador En Proceso :)";
var patt1 = /programador/i;
var result = str.match(patt1);
console.log(result)



// /g Realiza un match global (encuentra todas las coincidencias, no se detiene en la primera)
str = "Is this all there is?";
patt1 = /is/g;
result = str.match(patt1);//match() devuelve un array
console.log(result)
// Reemplazo todos los is con la expresion regular /g, A demás los hize case insensitive. 
result2 = str.replace(/is/gi, "Are")
console.log(result2)



// /m para realizar una busqueda multilinea de "is" al COMIENZO (primera palabra) de cada linea en una cadena
str = "\nIs th\nis it (is)?"; //Regular expresion Metacharacters \n SIRVE PARA SALTOS DE LINEA
console.log(str)
patt1 = /^is/m;
result2 = str.match(patt1)
console.log(result2)



//PATRONES DE EXPRESION REGULAR, Brackets [], Metacharacters, Quantifiers.
// [h] Los corchetes son usados para encontrar una variedad de caracteres, encuentra cualquier caracter definido entre los corchetes.
str = "Is this all there is?";
patt1 = /[h]/g; //Encuentra los caracteres definidos entre los corchetes
result = str.match(patt1);
console.log(result)

// [] ENCUENTRA
// [1-4] , encuentra los numeros entre los corchetes y entre ellos.
// [a-z] , se permite letras de la A a la Z minusculas, [A-Z] , se permiten mayusculas , [a-zA-Z] , ambas
str = "123456789ajaja25";
patt1 = /[1-4]/g; //Encuentra todos los numeros entre los corchetes, incluye 1 y 4.
result = str.match(patt1);
console.log(result)

// (x|y) , encuentra cualquiera de las alternativas separadas por |
str = "re, green, red, green, gren, gr, blue, yellow";
patt1 = /(red|green)/g;
result = str.match(patt1);
console.log(result)

//Metacharacters \d , \s, \b , \uxxxx , ...
// \d , encuentra los digitos
str = "Give 100%!"; 
patt1 = /\d/g;
result = str.match(patt1); //devuelve un array con los digitos encontrados con \d
console.log(result)

// \s , Encuentra todos los espacios en blanco
str = "Is this all there is?";
patt1 = /\s/g;
result = str.match(patt1);
console.log(result)

// \b , Encuentra la coincidencia con la primera palabra que empieze con lo definido \bLO
str = "HELLO,\nLOOK AT LOYOU!"; 
patt1 = /\bLO/;
result = str.search(patt1);//Devuelve el indice de la primera palabra que empieze con LO
console.log(result)

str = "HELLO, LOOK AT YOULO!";
patt1 = /LO\b/; //Palabra que TERMINE con LO
result = str.search(patt1); //Devuelve el indice de la primera palabra que termine con LO 
console.log(result)

// \uxxxx , Encuentra el caracter UNICODE especificado por el numero hexadecimal xxxx
str = "Visit W3Schools. Hello World!"; 
patt1 = /\u0057/g; //Encuentra todos (/g) los caracteres con el unicode definido
result = str.match(patt1);
console.log(result)

//Quantifiers , los cuantificadores definen cantidades
// n+ , Coincide con cualquier palabra en la cadena de texto la cual contenga un caracter especificado.
str = "Hellooo World! Hello W3Schools!"; 
patt1 = /o+/g; //Busca el caracter definido en cada palabra de la cadena 
result = str.match(patt1);
console.log(result)

// n* , Coincide con cualquier palabra en la cadena de texto que contenga cero o más ocurrencias
str = "Helloooooo World! Hello W3Schools!";
patt1 = /lo*/g; //Devuelve las coincidencias letra "l" solita o palabra "lo" incluso "loooooo"
result = str.match(patt1);
console.log(result)

// n? , Conincide con cualquier palabra en la cadena de texto que contenga cero o una ocurrencia.
str = "Helloooooo World! Hello W3Schools!";
patt1 = /lo?/g; //Deuelve conincidendia letra "l" SOLITA o palabra "lo".
result = str.match(patt1);
console.log(result)



//Using test() : Es un metodo de expresion RegExp Object, Busca en una cadena un patron y devuelve TRUE O FALSE, segun el resultado.
var patt = /e/;
console.log(patt)
result = patt.test("The best things in life are free!"); //Como hay una "e" en la cadena la salida del codigo sera TRUE.
console.log(result)
result = /x/.test("The best things in life are free!"); //Como NO HAY una x, devuelve FALSE. No es necesario almacenar la expresion regular en una variable primero. Se puede acortar como lo hice aqui.
console.log(result)



//Using exec() Es un metodo de expresion RegExp Object, Busca en una cadena un patron especifico y devuelve la coincidencia (la primera) como un objeto array, Si no encuentra el patron devuelve un objeto null.
var ojb = /e/.exec("The best things in life are free!");
var ojb2 = `Se encontro la letra ${ojb[0]} en la posicion ${ojb.index} en el texto: ${ojb.input}`//Puedo usar las propiedades .index y .input ya que se devuelve un OBJETO ARRAY con sus propiedades, no es solo un array simple con solo la propiedad .length
console.log(ojb2);