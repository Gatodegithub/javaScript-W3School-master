/*[] <-- corchetes para arrays, que son objetos... pero mejor arrays     {}  <-- llaves para objetos

    JavaScript no admite arrays con índices con nombre. Los arrays con indices nombrados se denominan associative arrays o hashes. Nombre el indice de un array no sirve en js
    En JavaScript, los arrays siempre usan índices numerados.

    In JavaScript, arrays use numbered indexes.  
    In JavaScript, objects use named indexes.

    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.

    var points = new Array();     // Bad
    var points = [];              // Good 

    PARA HACER QUE UN ARRAY SE DEJE DE MOSTRAR COMO UN OBJETO CON TYPEOF LA SOLUCION ESTA EN W3SCHOOL, probablemente nunca lo use

    delete fruits[0]   <- una forma de deletear ya que es un objeto, mejor usar pop() o shift()

*/
var car = ["Saab", "Volvo", "BMW"];


//AVOID NEW ARRAY. USE [] INSTEAD
//Using the JavaScript Keyword new : NO ES NECESARIO CREAR UN ARRAY ASI, ES MEJOR CREARLO DIRECTAMENTE COMO EL ANTERIOR
var cars = new Array("Saab", "Volvo", "BMW");
var number = new Number("3.4") //CON LA PALABRA NEW CREO OBJETOS, LE ASIGNO MEMORIA. TAMBIEN PUEDO CREAR ARRAYS, YA QUE LOS ARRAYS SON OBJETOS
number.propiedad1 = 58 //creo la propiedad para el objeto number y le asigno valor
console.log(number)


//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
function myFunction() {
    let x = "hola"
}
var myArray = [Date.now(),myFunction, cars]//Un array con objetos, funciones y otro array
console.log(myArray)


//Array Properties and Methods. The length property is always one more than the highest array index.
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays. ordena
var first = cars[0] //Para sacar el primer elemento del array
var last = cars[cars.length - 1] //Para sacar el ultimo elemento de un array
console.log("Largo: " + x +"\n"+ "Array ordenado: " + y +"\n"+ "En el indice 0 esta: " + first +"\n"+ "En el ultimo indice esta: " + last )


//Recorriendo elementos de un array
//La forma mas segura para recorrer un array es usando el ciclo FOR
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>"; //Le doy como valor <ul>
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";//A la variable text le voy agregando la etiqueta li por cada elemento
}
text += "</ul>";// Cuando termina de recorrer el array se le agrega a la variable </ul>
console.log(text)// <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>   Esto se forma al agregarle

document.getElementById("demo").innerHTML = text;//Muestro la variable con el codigo en el html


//Tambien puedo usar la funcion foreach()
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
console.log(text)
document.getElementById("demo2").innerHTML = text;


//Añadiendo elementos a un Array
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Watermelon") //Añade al final
console.log(fruits)
fruits[fruits.length] = "Lemon"//AÑADO AL FINAL, [5] ,siempre es 1+ que el indice, asi que agrega en el indice superior
console.log(fruits)
fruits[7] = "Me los salte"//Creo un elemento en un indice que no continua al anterior
console.log(fruits) //Entre los vacios que cree se define como UNDEFINED


// How to Recognize an Array
console.log(typeof fruits) //Devuelve que es un objeto
console.log( fruits instanceof Array ) //el operador instanceof devuelve true cuando se usa en un array



//toString() : Convierte el array en una cadena string, separando los valores por comas 
document.getElementById("parrafin").innerHTML = fruits.toString();


//join() : Tambien une todos los elementos de un array en un string, pero adicionalmente puedes especificar el separador
document.getElementById("parrafin2").innerHTML = fruits.join("|");


//pop() : remueve el ultimo elemento de un array "popped out"
x = fruits.pop()
console.log(x) //imprimo el elemento que borre del array


//push() : Añade un nuevo elemento al final del array, y retorna el nuevo largo (length)
fruits.push("volvi")
console.log(fruits)


//shift() : Es como pop() pero shift elimina el primer elemento del array no el ultimo como pop. Desplaza todos los elementos siguientes a un indice mas bajo obviamente
x = fruits.shift()
console.log(x) //retorna el primer elemento en este caso banana


//unshift() : Añade un nuevo elemento al principio del array y desplaza un indice a los demas
fruits.unshift("Sandia") //esto retorna le nuevo largo del array
console.log(fruits)


//splice( , ) : El primer parametro define la posicion donde los nuevos elementos se añadiran. El segundo parametro define cuantos elementos deberian ser removidos, el resto de parametros definen los nuevos elementos a añadir.
//splice MODIFICA EL ARRAY ORIGINAL 
var lenguajes = ["Html5", "Css3", "Javascript","Php","Python"]

x = lenguajes.splice(2,0,"Sass")//Splice retorna un array con los elementos eliminados
console.log(lenguajes)


//splice(0,1) : De esta forma puedo eliminar un elemento del array sin dejar un hueco indefinido
lenguajes.splice(2,1)
console.log(lenguajes)


//concat() : crea un nuevo array al concadenar con otro array
var myGirls = ["Aylin", "Keithlin"]
var myBoys = ["Hombre","Araña"]
var myChildren = myGirls.concat(myBoys) //Une los dos array, iniciando por el array myGirls
console.log(myChildren)


var todoJunto = lenguajes.concat(myGirls,myBoys)
console.log(todoJunto)

x = lenguajes.concat("Java","Android")//le añado tmb estos dos elementos de esta forma
console.log(x)


//slice(1) : Indico indice de donde quiero extraer los elementos del array para almacenarlos en otro array.
x = lenguajes.slice(1) //Crea un nuevo array que empieza desde el indice 1 del array objetivo
console.log(x)//Nuevo array
console.log(lenguajes)//Array original


//slice(1, 3) : Desde el indice 1 al indice 2, se extraeran esos elementos en un nuevo array
var p  = lenguajes.slice(1,3)//No se incluye el elemento en el indice 3
console.log(p)
console.log(lenguajes)


//Automatic toString() : ESTE METODO LO TIENEN TODOS LOS OBJETOS EN JS, CONVIERTE EL OBJETO A UNA CADENA STRING
var a = lenguajes.toString()
console.log(a)
a = lenguajes.join("|")
console.log(a)


//sort() : Ordena el array alfabeticamente, modifica
var arreglin = ["Leandro","Saavedra","Aldo", "Morales"]
console.log( arreglin.sort() )


//reverse() : devuelve el array en reversa, modifica
console.log( arreglin.reverse() )


//sort() : Por default ordena alfabeticamente, con numeros hay que realizar una funcion
var points = [100, 300, 150, 230, 410, 50]
console.log( points.sort(function(a, b){return a - b}) ) //Devuelve ordenado de menor a mayor
console.log( points.sort(function(a, b){return b - a}) ) //Devuelve ordenado de mayor a menor


//Sorting an Array in Random Order
console.log( points.sort(function(a, b) {return 0.5 - Math.random()}) )//De esta forma se ordenara de una forma RANDOM


//Find the highest (or lowest) Array Value  --  ESTA FORMA ES BASTANTE INEFICIENTE
console.log( points.sort(function(a, b){return a - b}) )//Ordeno para que el valor mas bajo este en indice 0 y el valor mas alto este en el ultimo indice
console.log( points[points.length-1] ) //Obtengo el valor mas alto que se encuentra en el ultimo indice del array
console.log( points[0] ) //Objeto el valor mas bajo que se encuentra en el primer indice del array


//Usar Math.max.apply para encontrar el valor mas alto en un array
function myArrayMax (arr) { //Esta funcion puedo usar para encontrar el mas alto en un array
    return Math.max.apply(null, arr)// Es equivalente a Math.max(1,2,3)
}

var maximo = myArrayMax(points)
console.log(maximo)


//Usar Math.min.apply para encontrar el valor mas bajo en un array
function myArrayMin (arr) { //USAR ESTA FUNCION PARA ENCONTRAR EL MINIMO EN UN ARRAY
    return Math.min.apply(null, arr)// Es equivalente a Math.min(1,2,3)
}

var minimo = myArrayMin(points)
console.log(minimo)


//Esta funcion recorre un Array que compara cada valor con el valor mas alto encontrado
//Ejemplo find Max
function myArrayMax2 (arr) {
    var len = arr.length //len tiene como valor el largo del array
    var max = -Infinity //max tiene como valor el menor numero posible
    while (len--) { //Mientras se pueda disminur en 1 el largo del arreglo se hara el ciclo, no deciende a menos que 0
        if (arr[len] > max) { //Si el array en el indice es mayor a -infinity se guardara en max, se ira analizando                            cada indice del array, y reemplazando si encuentra uno mayor al anterior
            max = arr[len]
        }
    }
    return max
}
maximo = myArrayMax2(points)
console.log(maximo)


//Esta funcion recorre un array que compara cada valor con el valor mas bajo encontrado
//Ejemplo find Min
function myArrayMin2 (arr) {
    var len = arr.length //len tiene como valor el largo del arreglo dado
    var min = Infinity //min tiene como valor el mayor numero posible
    while (len--) { //Disminuye el largo del arreglo dado hasta llegar a 0
        if (arr[len] < min) { //analiza cada indice del array y guardando en la variable min el valor minimo encontrado
            min = arr[len]
        }
    }
    return min
}
minimo = myArrayMin2(points)
console.log(minimo)



//ORDENANDO OBJETOS EN UN ARRAY , ocacionalmente los arrays guardan objetos.
var autos = [
    {type: "Volvo", year: 2017},
    {type: "Hyundai", year: 2019},
    {type: "Nissan", year: 2000}
]
var autos2 = [
    {type: "Volvo", year: 2017},
    {type: "Hyundai", year: 2019},
    {type: "Nissan", year: 2000}
]
// Con esta funcion ordeno los objetos del array por el año
var ordenadoAnio = autos.sort(function(a, b) {return a.year - b.year})
console.log(ordenadoAnio)

// Para ordenar objetos por un valor string se usa esta funcion
var ordenadoString = autos2.sort(function(a, b) {
    var x = a.type.toLowerCase()
    var y = b.type.toLowerCase()
    if (x < y) {return -1}
    if (x > y) {return 1}

    return 0
})
console.log(ordenadoString)



//Metodos de iteracion de array, estos operan en cada item del array
//Array.forEach() : Este metodo llama un callback una vez por cada item en el array. Esta funcion toma 3 argumentos, el valor del item, el index del item, la matriz en sí
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(miFuncion);

function miFuncion (value, index, array) {
    txt = txt + "Valor: " + value + " Como indice: " + index + " Del arreglo: " + array + "<br>";
    document.querySelector("#demo3").innerHTML = txt;
}



//Array.map() : CREA UN NUEVO ARRAY, al realizar una funcion en cada item del array, este metodo NO ejecuta la funcion para elementos del array sin valor, el metodo map no cambia la matriz original.
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(otraFuncion);//Creo un nuevo array

function otraFuncion (value, index, array) {//Cuando una funcion callback usa solamente el parametro value, los parametros del index y array pueden ser omitidos
    indice = index;
    if (value == 45) {
        return value/2
    }
    return value*4
};

console.log( numbers2 )



//Array.filter() : Crea un nuevo array con los item del array que pasaron el test
numbers1 = [45, 4, 9, 16, 25];
var over18 = numbers1.filter(filtrarArray);

function filtrarArray (value, index, array) {//toma 3 parametros, valor indice, array en si, que podrian ser omitidos
    return value > 18 //Solo los item que cumplan la condicion se almacenaran en el nuevo array
}
console.log(over18)


//Array.reduce(funcionReduce, 100) : Corre una funcion en cada item del array para producir un valor UNICO, NO REDUCE EL ARRAY ORIGINAL. REDUCE() PUEDE ACEPTAR UN VALOR INICIAL
/*  Esta funcion toma 4 argumentos.
        total -> Valor inicial, valor que sera devuelto previamente
        value, index, array -> el valor del item, el indice, el array en si
*/
numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(funcionReduce, 100); //Le entrego un valor inicial igual a 100

function funcionReduce (total, value, index, array) {
    return total + value;
}
console.log(sum)


//reduceRight() : corre una funcion en cada item del array para producir un valor UNICO, TRABAJA DE DERECHA A IZQUIERDA, este metodo no reduce el array original
numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(funcionReduce2, 200);

function funcionReduce2 (total, value) {//Puedo omitir los otros 2 parametros ya que no los usare
    return total += value
}
console.log(sum)


//Array.every() : chequea si TODOS los valores de un array pasan la prueba, RETORNA TRUE O FALSE dependiendo si pasaron la prueba o no. Acepta 3 argumentos, valor, index, array mismo
numbers1 = [45, 4, 9, 16, 25];
var allOver18 = numbers1.every(funcionTest);

function funcionTest (value, index, array) {
    return value > 18
}
console.log( "El array sometido al test, ¿Paso la prueba?: " + allOver18 )



//Array.some() : Verifica si algunos item del array pasan la prueba. Retorna true o false
numbers1 = [45, 4, 9, 16, 25];
var someOver18 = numbers1.some(funcionAlgunos);

function funcionAlgunos (value, index, array) {
    return value > 18//Retorna true si algunos items son mayores a 18
}
console.log(someOver18)



//Array.indexOf(item,start) : Este metodo busca en el array un valor especifico y retorna su posicion, retorna -1 si no encuentra el valor, si el valor se encuentra mas de una vez, se retorna la posicion de la primera ocurrencia
var frutas = ["sandia", "manzana", "pera", "sandia","melon","chirimoya"];
a = frutas.indexOf("pera") //Retorna el indice en el que se encuentra el valor buscado
console.log(a)

b = frutas.indexOf("sandia"); //retorna la primera ocurrencia
console.log(b)

b = frutas.indexOf("sandia", -3); //Con el valor negativo le indico que desde los ultimos 4 items finales del array empieze a comparar, y retornara el indice del valor si se encuentra, si no se encuentra devuelve -1  
console.log(b)



//Array.lastIndexOf() : Es lo mismo que indexOf() , pero este retorna la posicion de la ultima ocurrencia
frutas = ["sandia", "manzana", "pera", "sandia","melon","chirimoya"];
a = frutas.lastIndexOf("sandia") //Retorna el indice de la ultima ocurrencia encontrada
console.log(a)

b = frutas.lastIndexOf("sandia", -4)//De esta forma no cuento los ultimos 3 item del array, y devuelve indice 0 ya que sandia se encuentra en el indice 0, y poniendo -4 indico que no cuente los 3 ultimos item del array
console.log(b)


//Array.find() : Retorna el VALOR del primer item del array que pasa el test
numbers1 = [45, 4, 9, 16, 25];
var first = numbers1.find(funcionPrimero);

function funcionPrimero (value, index, array) {
    return value > 18//Retorna 45 ya que es el primer item del array que pasa la prueba
}
console.log(first)


//Array.findIndex() : Retorna el INDICE del primer item del array que pasa el test
numbers1 = [45, 4, 9, 16, 25];
first = numbers1.findIndex(funcionIndice);

function funcionIndice (value, index, array) {
    return value > 18; //Retorna el indice del primer item que pase el test
}
console.log(first)


