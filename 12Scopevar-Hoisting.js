/* Scope de var: El scope determina la accesibilidad (visibilidad) de variables. Las variables globales pertenecen al objeto window.

        En js hay dos tipos de Scope: Local scope, Global scope.

    Javascript tiene un alcance de FUNCION. Cada funcion tiene un scope dentro de ella, Las variables definidas dentro de una FUNCION no son accesibles desde fuera de la funcion.

    En JavaScript, los objetos y las funciones también son variables.

    Con JavaScript, el alcance global es el ENTORNO COMPLETO de JavaScript.

    En HTML, el alcance global es el object window. Todas las variables globales pertenecen al object window.

    NO DEBO USAR VAR SI NO TENGO LA INTENCION DE QUE SEA GLOBAL (TODO JS, let no permite todo js), YA QUE ESTAN PUEDEN SER FACILMENTE SOBREESCRITAS.

    LOS ARGUMENTOS DE LAS FUNCIONES (PARAMETROS) TRABAJAN COMO VARIABLES LOCALES DENTRO DE LA FUNCION.

*/
//Local js variables. Las variables declaradas DENTRO DE UNA FUNCION SERAN LOCAL, estas variables tienen un scope tipo funcion, estas solamente pueden ser accedidas desde dentro de la funcion

// codigo de aca no puede usar carName.
function myFunction() {
    var carName = "Volvo";

    // El codigo de este bloque si puede usar carName.
}
//Desde que las variables locales son solo reconocidas dentro de las funciones, otras variables con el mismo nombre pueden ser usadas en diferentes funciones, las variables locales son creadas cuando una funcion empieza y son eliminadas cuando la funcion es completada.



//Global js variables: una variable declarada FUERA DE UNA FUNCION, SERA GLOBAL. Una variable global tiene un alcance global, O sea todo el script y funciones pueden acceder a la variable.

// Carname fuera de los bloques tambien puede ser usado
var carName = "Volvo";
function myFunction() {

  // carName dentro de este bloque tambien puede ser usado
}


//AUTOMATICAMENTE GLOBAL: Si a una variable le asigno un valor, sin que la variable haya sido declarada anteriormente, esta automaticamente sera UNA VARIABLE GLOBAL.
//Este ejemplo de codigo DECLARA UNA VARIABLE GLOBAL carName2, incluso si el valor es asignado dentro de una funcion.
//In "Strict Mode", undeclared variables are not automatically global.
myFunction2();
// El codigo de aqui para abajo puede usar carName2, ya que se SE DEBE LLAMAR A LA FUNCION PARA QUE SE CREE LA VARIABLE GLOBAL.
function myFunction2() {
  carName2 = "Volvo2";
}
console.log(carName2)



//Variables and constants declared with LET OR CONST ARE NOT HOISTED!
//JAVASCRIPT HOISTING: Es el COMPORTAMIENTO PREDETERMINADO que tiene javascript DE MOVER las DECLARACIONES (var y) A LA PARTE SUPERIOR. En js una variable (var) se puede declarar despues de que esta haya sido utilizada, en otras palabras; una variable se puede usar antes de que se haya declarado. LO RECOMENDABLE ES DECLARAR VARIABLES EN LA PARTE DE ARRIBA DEL CODIGO ANTES DEl SCOPE ACTUAL (a la parte superior del script actual o funcion actual). Para evitar errores,siempre declare todas las variables al comienzo de cada ámbito.

//Ejemplo 1 DA EL MISMO RESULTADO QUE EL EJEMPLO 2
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x y se queda con el valor 5 que ya se le dio

//Ejemplo2
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo2"); // Find an element
elem.innerHTML = x;                     // Display x in the element



//Las inicializaciones NO SON HOISTED (NO SE MUEVEN al top, solo declaraciones).
//Ejemplo1 - NO DA EL MISMO RESULTADO QUE EL EJEMPLO 2
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo3"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y 

//Ejemplo2 - z da undefined ya que SOLO LA DECLARACION (VAR Z), y NO LA INICIALIZACION (=7) SE MUEVE AL TOP (PRINCIPIO). EL HOISTING MUEVE LAS DECLARACIONES AL TOP PERO NO LA INCIALIZACION, POR LO QUE Y NO ESTA DEFINIDO.
var x = 5; // Initialize x

elem = document.getElementById("demo4"); // Find an element
elem.innerHTML = x + " " + z;           // Display x and y

var z = 7; // Initialize y - Queda undefined ya que al top solo se mueve la declaracion no el valor.

//Es lo mismo que escribir:
var x = 5; // Initialize x
var q;     // Declare y

elem = document.getElementById("demo5"); // Find an element
elem.innerHTML = x + " " + q;           // Display x and y

q = 7;    // Assign 7 to z