/* 
"2" > "12" false : When comparing two strings, "2" will be greater than "12", because (alphabetically)                    1 is less than 2.
*/
'use strict'
/*JavaScript Operadores de comparacion 
                x = 5

    == equal to:        x == 8 false, x == 5 true, x == "5" true

    === equal value and equal type      x === 5 true, x === "5" false

    != not equal value         x != 8 true, x != "5" false

    !== not equal value or not equal type     x !== 5 false, x !== "5" true, x !== 8 true

    > greater than        x > 8 false

    < less than           x < 8 true
    
    >= greater than or equal to      x >= 8 false

    <= less than or equal to         x <= 8 true
*/

/*Javascript operadores logicos, x = 6, y = 3

    && and        (x < 10 && y > 1) is true

    || or        (x == 5 || y == 5) is false

    ! not        !(x == y) is true
*/



//operador ternario
var age, voteable
age = document.getElementById("age").value

voteable = (age < 18 || isNaN(age)) ?
    "Too young, o pon un numero y actualiza" //Si se cumple el operador ternario
    :
    "Old enough"; //No se cumple el operador ternario

console.log(voteable)


//SENTENCIA IF
var fecha = new Date()
var hora = fecha.getHours()

if (hora > 12 && hora < 19) { //Si la priemra condicion es falsa se va al else if
    console.log("Hola buenas tardes")
} else if (hora > 7 && hora < 12) {
    console.log("Hola buenos dias")
} else {
    console.log("Hola buenas noches")
}


/*SENTENCIA SWITCH : Use la instrucción switch para seleccionar uno de los muchos bloques de código que se ejecutarán. Si varios casos coinciden con la expresion del switch, EL PRIMER CASO SERA SELECCIONADO. Si ningun caso hace match, el programa continua al default. Si no se encuentra un default, el programa continua con la ejecucion del codigo fuera del switch.
Los switch usan comparacion estricta ( === ), Los valores deben ser del mismo valor y tipo para que haya coincidencia.

    *break : Cuando llega a break se termina la ejecucion del bloque, no es necesario poner un break en el ultimo case , debido a que como es el ultimo el codigo termina alli de todas maneras.
    Si omito BREAK, el siguiente caso se ejecutara incluso si la evaluacion no coincide con el caso.

    *Default: Si ningun caso coincide se aplica el Default. Podemos posicionar Default en cualquier lugar del bloque switch, Si default no es el ultimo caso en el switch RECORDAR SIEMPRE PONER DEFAULT, SOLO AL ULTIMO CASO ES POSIBLE OMITIR EL BREAK.
*/
var day
switch (new Date().getDay()) {
    default:
        console.log("Algo ha salido muy mal")
        break;
    case 0:
        day = "Sunday";
        console.log(day)
        break;
    case 1:
        day = "Monday";
        console.log(day)
        break;
    case 2:
        day = "Tuesday";
        console.log(day)
        break;
    case 3:
        day = "Wednesday";
        console.log(day)
        break;
    case 4:
        day = "Thursday";
        console.log(day)
        break;
    case 5:
        day = "Friday";
        console.log(day)
        break;
    case 6:
        day = "Saturday";
        console.log(day)
}


// Esta es otra forma de trabajar con switch. Como hay varios casos que coinciden con un mismo valor de retorno, pueden compartir el mismo bloque de codigo.
switch (new Date().getDay()) {
    case 3:
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
}


//Para hacer coincidencia tiene que ser del mismo valor y tipo, switch trabaja con ( === ) comparacion estricta
var x = "0";
var text
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)


//Bucle FOR : Los bucles son útiles, si desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente. Puedo omitir la primera declaracion, si esta la defino fuera del for. Tambien puedo omitir la segunda declaracion, si esta devuelve true el ciclo comenzara nuevamente, si devuelve falso, el ciclo finalizara. Si omito la declaracion 2, debo poner un break dentro del ciclo o nunca terminara. La declaracion 3 el incremento puede ser el que quiera ej: i-- | i++ | i = i + 15.
var texto = "";
var i = 0
for (; i < 5;) {
    // Le voy agregando a la variable texto en cada iteracion la linea de texto especificada
    texto += "The number is " + i + "<br>";
    // console.log(texto)
    i++
}
console.log(texto)
document.querySelector("#demo").innerHTML = texto



//for/in recorre las propiedades de un objeto
var person = {fname:"John", lname:"Doe", age:25}; 

texto = ""
var x;

for (x in person) {
    texto += person[x] + " "
}
console.log(texto)


//for/of permite recorrer estructuras de datos que son iterables, como arrays, cadenas, mapas, listas de nodos y mas.
var cars = ['BMW', 'Volvo', 'Mini'];

for (x of cars) {
  document.write("<br>"+ x);
} 


var txt1 = 'JavaScript';

for (x of txt1) {
  document.write("<br >" + x);
}



//While loop, pueden ejecutar un bloque de codigo siempre que una condicion especificada sea verdadera. Si olvido incrementar la variable en el bucle , el bucle no terminara nunca.
var texto2 = "";
var i = 5;
while (i < 11) {
    texto2 += "The number is " + i + "<br>";
    i++;
}
document.querySelector("#demo2").innerHTML = texto2

//do/while, ejecutara el codigo dentro del DO una vez, antes de verificar si la condicion es verdadera, luego repetira el bucle siempre que la condicion sea verdadera
var i = 11
var texto3 = "";
do {
    texto3 += "The number is " + i + "<br>";
    i++;
} while (i < 16); 
document.querySelector("#demo3").innerHTML = texto3


// COMPARANDO FOR Y WHILE, el ciclo while es muy similar a un ciclo for, con la declaracion 1 y 3 omitidas
var bmx = ["Puños", "Neumaticos", "Pedales"];
var i = 0;
var texto4 = "";
for (;bmx[i];) {//mientras haya indice sera true, cuando se acaba el indice dara false y acabara el bucle
    texto4 += bmx[i] + "<br>";
    i++;
}
document.querySelector("#parrafin").innerHTML = texto4


//con while es parecido
var i = 0;
var texto5 = "";
while (bmx[i]) {//mientras haya indice sera true, cuando se acaba el indice dara false y acabara el bucle
    texto5 += bmx[i] + "<br>";
    i++;
}
document.querySelector("#parrafin2").innerHTML = texto5


// Las declaraciones break y continue son las unicas declaraciones js que pueden "saltar" de un bloque de codigo.
// Break y Continue. Con break terminamos el bucle. Con continue salto una iteracion en el bucle y continuo con el codigo despues del ciclo (si lo hay)
var i;
var texto6 = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }//Si el indice es 3 con el break detengo y me salgo del bucle
    texto6 += "The number is " + i + "<br>";
}
console.log(texto6)


// continue
var i;
var texto7 = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }//Si ocurre la condicion se salta la iteracion y continua con la siguiente
    texto7 += "The number is " + i + "<br>";
}
console.log(texto7)//No muestra el the number is 3.



// JavaScript Labels, Con una referencia de etiqueta, la instruccion break se puede usar para salir del bloque
var familia = ["Leandro", "Natalia", "Jisslen", "Aldo", "Julia", "Emilia"]
var textoman = "";
list: {
    textoman += familia[0] + "<br>";
    textoman += familia[1] + "<br>";
    // break list;
    textoman += familia[2] + "<br>";
    textoman += familia[3] + "<br>";
}