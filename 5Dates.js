/*By default, JavaScript will use the browser's time zone and display a date as a text string
Notas:
*Los objetos de fecha son estáticos. El tiempo de la computadora está corriendo, pero los objetos de fecha no.
*Javascript cuenta los meses del 0 al 11, Enero es 0. Diciembre es 11
*Las fechas pueden ser distintas por el horario de zona
*UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

Objetos Nativos: Son objetos proporcionados por una implementación de este estándar que son independientes del entorno. Eso quiere decir que cualquier lenguaje basado en ECMAScript y conforme a él debe implementarlos. Son: Array, Boolean, Date, Error, EvalError,Function,Number,String...

Objetos Incorporados: Son objetos a los cuales no hace falta crear una instancia para acceder a ellos, estos son: Math, Global.

var d = Date()   -    De esta forma capturo el string con la fecha actual desde el navegador
*/
'use strict'

var d = new Date()//Utilizo el objeto nativo tipo DATE, los objetos tienen metodos adicionales.
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
console.log(d)
document.querySelector("#demo").innerHTML = d.toDateString()//Formato de fecha mas legible

//ESTE ES EL ORDEN PARA CREAR UNA FECHA(SEGUIR EL ORDEN), PUEDO OMITIR TODOS MENOS EL AÑO Y EL MES
//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
d = new Date(2025, 11, 24, 10, 33, 30, 0)
document.querySelector("#demo2").innerHTML = d.toUTCString()//Formato de fecha distinto
///2 numbers specify year, montH:
d = new Date(2030, 0)
console.log(d)
//SI PROPORCIONO SOLO UN PARAMETRO, SE TRATARA COMO MILISEGUNDOS, ES COMPLICADO
d = new Date(2019)
console.log(d)
//Un año con uno o dos digitos sera interpretado como 19xx
d = new Date(99, 11, 24)
console.log(d)//Imprime como 1999
//new Date(dateString)
d = new Date("October 29, 2019 12:00:00")//Hay que escribir bien en ingles, para que funcione.
console.log(d)
//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated). Zero time is January 01, 1970 00:00:00 UTC.
d = new Date(1500000000000)//En milisegundos que han pasado a esta hora da la sig fecha
console.log(d)
d = new Date(-1500000000000)//Si pongo milisegundos en negativo mostrara fechas menores a 1970 (zero)
console.log(d)



//JavaScript Date Formats. ISO 8601 is the international standard for the representation of dates and times.
console.log( )
d = new Date("2015-03-25")
console.log(d)
//ISO dates pueden ser escritas sin especificar el dia
d = new Date("2015-03")
console.log(d)
//ISO dates pueden ser escritas sin el mes y dia
d = new Date("2019")
console.log(d)
//ISO dates pueden ser escritas con horas, minutos y segundos (YYYY-MM-DDTHH:MM:SSZ), fecha y tiempo son separados por la capital (T), UTC es definido con la capital Z. Omitting T or Z in a date-time string can give different results in different browsers.
d = new Date("2019-10-29T12:00:00Z")
console.log(d)
d = new Date("2015-03-25T12:00:00-06:00")//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
console.log(d)
//Javascript Short Dates are written with an "MM/DD/YYYY" syntax like this:
d = new Date("03/25/2015")
console.log(d)
//Javascript Long Dates are most often written with a "MMM DD YYYY" syntax like this:
d = new Date("Jan 25 2015")//El mes puede ser abreviado o nombre cumpleto (January)
console.log(d)
//Month and day can be in any order:
d = new Date("25 January 2015")//El mes puede ser abreviado o nombre completo (Jan)
console.log(d)
//Comas son ignoradas. Nombres son case insensitive
d = new Date("JANUARY, 25, 2015")
console.log(d)



//Date.parse() : If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds. Date.parse() returns the number of milliseconds between the date and January 1, 1970:
var msec = Date.parse("Oct 29, 2019");
document.getElementById("demo3").innerHTML = "Cantidad de milisegundos entre 1970 y actual: " + msec
//Ahora puedo usar los milisegundos para convertirlo en un objeto date
d = new Date(msec)
document.getElementById("demo4").innerHTML = "Milisegundos a objeto Date: " + d


console.log()
/*These methods can be used for getting information from a data object

    Method 	                      Description
getFullYear() 	      Get the year as a four digit number (yyyy)
getMonth() 	          Get the month as a number (0-11)
getDate() 	          Get the day as a number (1-31)
getHours() 	          Get the hour (0-23)
getMinutes() 	      Get the minute (0-59)
getSeconds() 	      Get the second (0-59)
getMilliseconds() 	  Get the millisecond (0-999)
getTime() 	          Get the time (milliseconds since January 1, 1970)
getDay() 	          Get the weekday as a number (0-6)
Date.now() 	          Get the time. ECMAScript 5.
*/

//getTime() : Retorna el numero de milisegundos desde january 1, 1970
d = new Date()
var resultado = d.getTime()
console.log("Los milisegundos transcurridos desde 1970 a actual son: " + resultado)


//getFullYear() : Retorna el año el año de la fecha como un numero de 4 digitos
resultado = d.getFullYear()
console.log("Este año es: " + resultado)


//getMonth() : retorna el mes de una fecha como un numero del 0 al 11, In JavaScript, the first month (January) is month number 0, so December returns month number 11.
resultado = d.getMonth()
console.log("El numero del mes es: " + resultado)
// Puedo usar un array para que en vez de devolver el mes como numero se imprima el mes del array
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log( "Este mes es: " + months[d.getMonth()] )//getMonth retorna 11, ese indice se buscara en el array


//getDate() : retorna el dia de una fecha como numero del 1 al 31
resultado = d.getDate()
console.log("Este dia es: " + resultado)


//getHours() : retorna las horas de una fecha como numeros del 0 al 23
resultado = d.getHours()
console.log("Son las: " + resultado + " hrs.")


//getMinutes() : retorna los minutos de una fecha como numeros del 0 al 59
resultado = d.getMinutes()
console.log("Con " + resultado + " minutos")


//getSeconds() : retorna los segundos de una fecha como numeros del 0 al 59
resultado = d.getSeconds()
console.log("Con " + resultado + " segundos")


//getMilliseconds() : retorna los milisegundos de una fecha como numeros del 0 al 999
resultado = d.getMilliseconds()
console.log("Con " + resultado + " milisegundos")


//getDay() : retorna el dia de la semana de una fecha como numero del 0 al 6, Domingo:0,Lunes:1,Martes:2,miercoles:3,...
resultado = d.getDay()
console.log("Hoy es el dia numero: " + resultado + " de la semana")
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Ese numero representa el dia: " + days[d.getDay()] )


/*UTC Date Methods, UTC date methods are used for working with UTC dates (Universal Time Zone dates):

    Method 	                    Description
getUTCDate() 	        Same as getDate(), but returns the UTC date
getUTCDay() 	        Same as getDay(), but returns the UTC day
getUTCFullYear() 	    Same as getFullYear(), but returns the UTC year
getUTCHours() 	        Same as getHours(), but returns the UTC hour
getUTCMilliseconds() 	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes() 	    Same as getMinutes(), but returns the UTC minutes
getUTCMonth() 	        Same as getMonth(), but returns the UTC month
getUTCSeconds() 	    Same as getSeconds(), but returns the UTC seconds
*/
console.log( )



/*JavaScript Set Date Methods, Estos metodos permiten establecer valores de fecha para un objeto Date

    Method 	                Description
setDate() 	        Set the day as a number (1-31)
setFullYear() 	    Set the year (optionally month and day)
setHours() 	        Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	    Set the minutes (0-59)
setMonth() 	        Set the month (0-11)
setSeconds() 	    Set the seconds (0-59)
setTime() 	        Set the time (milliseconds since January 1, 1970)
*/

//setFullYear() : cambia el año de un objeto date, OPCIONALMENTE puedo pasar el mes y dia a cambiar
var a = new Date();
var cambioAnio = a.setFullYear(2030, 11, 3)//Me devuelve la fecha cambiada pero en milisegundos
a = new Date(cambioAnio)//Cambio los milisegundos por un objeto fecha
document.getElementById("parrafin").innerHTML = a//Imprime con la fecha cambiada


//setMonth() : cambia el mes de un objeto data (0 al 11)
a.setMonth(4)
console.log( a )//Le cambio el mes


//setDate() : cambia el dia de un objeto data (1 al 31), TAMBIEN PUEDE SER USADO PARA AÑADIR DIAS A UNA FECHA. si añado muchos dias, el objeto date manejara esos cambios automaticamente. (En meses, años)
a.setDate(a.getDate() + 4)//Al dia le sumo 5 dias más. Con el setDate cambio el dia
console.log(a)//Cambio el dia


//setHours() : cambia la hora de un objeto data (0 al 23)
a.setHours(22)
console.log(a)


//setMinutes() : cambia los minutos de un objeto data (0 al 59)
a.setMinutes(55)
console.log(a)


//setSeconds() : cambia los segundos de un objeto data (0 al 59)
a.setSeconds(55)
console.log(a)


//Compare Dates
var today, someday, text;
today = new Date();
someday = new Date();
var nuevaFecha = new Date(someday.setFullYear(2100, 0, 14)) //los milisegundos los traspaso a obj date
console.log(nuevaFecha)

if (nuevaFecha > today) {
  text = "nuevaFecha es una fecha superior a la actual.";
} else {
  text = "La fecha actual es superior a la definida.";
}
console.log(text)



/*TEMPLATE STRING (``) Una de las mejores características de las Template Strings es la interpolación de cadenas. En pocas palabras, la interpolación permite utilizar cualquier expresión válida de JavaScript (como por ejemplo la suma de dos variables) dentro de una cadena y obtener como resultado la cadena completa con la expresión evaluada. Las partes variables de una Template String se denominan placeholders y utilizan la sintaxis ${ } para diferenciarse del resto de la cadena. Ejemplo: */

var fecha = new Date()
var anio_ = fecha.getFullYear()
var mes_ = fecha.getMonth()
var dia_ = fecha.getDate()
var hora_ = fecha.getHours()
// `` Los template string son muy efectivos (utilizarlo más)
var textoHora = `El año es: ${anio_}
El mes es: ${mes_}
El dia es: ${dia_}
La hora es: ${hora_}
`

console.log(textoHora)
