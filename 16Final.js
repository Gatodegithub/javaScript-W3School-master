// The debugger keyword : La palabla clave debugger detiene la ejecucion de js y llama (si esta disponible) a la funcion de depuracion. Debugger; tiene la misma funcion que establecer un punto de interrupcion en el depurador del navegador (el codigo se detendra en el script debugger; , como punto de interrupcion). Si no hay una herramienta de depuracion disponible , la declaracion debugger; no tiene efecto en el codigo, por lo tanto continuara ejecutandose sin detenerse. Con el depurador activado, debugger; detendra le ejecucion del codigo como punto de interrupcion.
let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = `Si se imprime el num, activa el depurador. ${x}`;



/* Guia de estilo. Declarar: let i;  Inicializar: i = 20 
Siempre usar la misma convencion de nomenclatura para todo mi codigo.

Best Practices
evitar variables globales, evitar new, evitar ==, evitar eval()

Evitar variables globales: Minimizar el uso de variables globales, esto incluye todos los tipo de datos, objetos y funciones.
Las variables globales y funciones pueden ser sobreescritas por otro scripts. Usar variables locales.

Siempre declarar las variables, o seran globales, aunque se encuentren dentro de una funcion (stric mode no lo permite).

Siempre poner las declaraciones al top de cada script o funcion. Esto permitira:
- Codigo limpio
- Proporciona un lugar unico para buscar variables locales
- Facilita evitar variables globales no deseadas(implicitas)
- Reduce la posibilidad de nuevas declaraciones no deseadas

Siempre tratar a los numeros, strings, booleanos como valores primitivos, no como objetos.

NO USAR LA PALABRA CLAVE NEW OBJECT().
    Use {}            instead of new Object()
    Use ""            instead of new String()
    Use 0             instead of new Number()
    Use false         instead of new Boolean()
    Use []            instead of new Array()
    Use /()/          instead of new RegExp()
    Use function(){}  instead of new Function()

    EJEMPLO:

    var x1 = {};           // new object
    var x2 = "";           // new primitive string
    var x3 = 0;            // new primitive number
    var x4 = false;        // new primitive boolean
    var x5 = [];           // new array object
    var x6 = /()/;         // new regexp object
    var x7 = function(){}; // new function object 

Usar siemper === como comparacion. Ya que compara el valor y el tipo de dato.

usar valores predeterminados de parametros. si se llama a una funcion con algun argumento faltante, el valor del argumento faltante se establecera como undefined. esto puede quebrar nuestro codigo. Es buen avito darle valores por defecto a los parametros. EJ: function (a=1, b=1){}

TERMINA LOS SWITCH CON DEFAULTS SIEMPREE, LOS SWITCH TRABAJAN CON COMPARACION ESTRICTA.

EVITAR USAR EVAL(): Esta funcion se usa para ejecutar texto como codigo. Debido a que permite utilizar codigo arbitrario, tambien representa un problema de seguridad.

NUNCA QUEBRAR UN RETURN. EJ: return    <- no se puede quebrar un return
                             "Hola"

EN js LOS ARRAYS USAN NUMEROS COMO INDICES.

En js LOS OBJETOS USAN NOMBRES COMO INDICES (propiedades).

Una variable solo declarada y sin valor asume implicitamente el valor UNDEFINED y su tipo es undefined

Una variable debe ser declarada explicitamente como NULL para señalar que si tiene valor, pero este es un valor VACIO. y el tipo de esa variable no es null si no object.

Pero es una convención que uses undefined para verificar si una variable o propiedad existe, y en cambio uses null si quieres vaciarla.
*/



/* Reducir la actividiad en un loop: cada declaracion dentro del ciclo, incluyendo la declaracion for es ejecutada por cada iteracion en el loop. Las declaraciones pueden ser escritas fueras del ciclo, esto hace al ciclo mas rapido

BUENO:
     var i;
     var l = arr.length;
     for (i = 0; i < l; i++) { 
*/


/*Reducir el acceso al DOM: Acceder al dom es muy lento comparado a otras declaraciones en js. Lo recomendable es esto:

var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";

Manipular el DOM lo minimo posible, y asignandolo a una variable.
*/


/*RETRASO DE CARGA DE JAVASCRIPT
Poner sus scripts en la parte inferior del cuerpo de la página permite que el navegador cargue la página primero.

Mientras se descarga un script, el navegador no iniciará ninguna otra descarga. Además, toda la actividad de análisis y representación puede estar bloqueada.

La especificación HTTP define que los navegadores no deben descargar más de dos componentes en paralelo.

Una alternativa es usar defer = "true" en la etiqueta del script. El atributo de aplazamiento especifica que el script debe ejecutarse después de que la página haya finalizado el análisis, pero solo funciona para scripts externos. 
*/


// EVITAR USAR LA PALABRA CLAVE WITH, Afecta negativamente en la velocidad. Tambien satura los ambitos de js. La palabra clave with no esta permitida con modo estricto

// HAY MUCHAS PALABRAS CLAVES LAS CUALES NO DEBERIA USAR COMO NOMBRES DE VARIABLES. (W3School estan).

