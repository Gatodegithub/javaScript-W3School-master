'use strict' //El modo estricto solo se reconoze al comienzo de un script o una funcion, al COMIENZO de un script hara efecto de forma global(todo el codigo se ejecutara en modo estricto). Declarado dentro de una funcion tiene alcance local (solo el codigo dentro de la funcion esta en modo estricto).

//NOT ALLOWED IN STRICT MODE
/* 
    x = 3.14;     <- Usar una variable sin habersido decladara no esta permitido.(Los objetos son variables tmb)

    x = {p1:10, p2:20};  <- Usar un objeto sin declararlo primero no esta permitido

    var x = 3.14;
    delete x;        <- Deletear una variable o un objeto no esta permitido

    function x(p1, p2) {};
    delete x                     <- Deletear una funcion no esta permitido.

    function x(p1, p1) {};      <- Duplicar el nombre de los parametros no esta permitido

    var x = 010;              <- No se permiten numericos octales.

    var x = "\010"            <- Los caracteres de escape octal no estan permitidos.

    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    obj.x = 3.14;            <- Escribir en una propiedad de solo lectura no está permitido

    var obj = {get x() {return 0} };
    obj.x = 3.14;            <- Escribir en una propiedad de solo obtencion no esta permitido

    delete Object.prototype;  <- No se permite eliminar una propiedad no recuperable.

    var eval = 3.14;          <- La palabra eval no puede ser usada como variable

    var arguments = 3.14;     <- la palabra arguments no puede ser usada como variable

    with (Math){x = cos(2)};  <- La declaracion with no esta permitida

    eval ("var x = 2");
    alert (x);                <- eval() no puede crear variables en el ambito desde el que se llamo.
*/

//la palabra clave THIS en funciones se comporta de manera diferente en modo estricto. La palabra clave THIS se refiere al objeto que llamo a la funcion. Si no se especifica el objeto, las funciones en modo estricto volverán indefinidas y las funciones en modo normal devolverán el objeto global (ventana):
function myFunction() {
    alert(this); // will alert "undefined"
}
myFunction();

/*  Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

    *   implements
    *   interface
    *   let
    *   package
    *   private
    *   protected
    *   public
    *   static
    *   yield
*/



//THIS KEYWORD
var person = {
    firstName: "Aldo",
    lastName : "Saavedra",
    age      : 22,
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    nameAge  : function () {
        return `${this.firstName} tiene ${this.age} años`
    } 
};
console.log(person.fullName());
/* ¿Que es THIS?: La pabra clave THIS se refiere al objeto al que pertenece. Esta tiene diferentes valores dependiendo de en donde esta siendo usada.

This tiene diferentes valores dependiendo de donde es utilizada.

    En un método, this se refiere al objeto propietario.
    Solo, this se refiere al objeto global (window).
    En una funcion, this se refiere al objeto global (window).
    En una funcion, con strict mode, this es undefined.
    En un evento, this se refiere al elemento que recibio el evento.
    Metodos como call(), y apply() pueden referir this a cualquier objeto.
*/


//this en un metodo. En un metodo de objeto, this se refiere al "obj propietario" del metodo.
console.log(person.nameAge());

//this solo. Cuando es usado solo, el propietario es el objeto global (window), entonces this se refiere al objeto global.
var x = this.innerHeight;
console.log(x)

//this en modo estricto, cuando se usa solo, this tambien se refiere al objeto global window.

//this en una funcion, SIN strict, se refiere al objeto global window de forma predeterminada.
function myFunction2() {
    return this;
}
console.log( myFunction2() );

//this en una funcion, CON strict, no se refiere de forma predeterminada a object window. Usada en una funcion con strict se refiere a undefined, si es que no la llama un objeto.

//this en controladores de EVENTOS, se refiere al elemento html que recibe el evento:
/*  <button onclick="this.style.display='none'">
        Click to Remove Me!
    </button>  
*/



//Los métodos call () y apply () son métodos JavaScript predefinidos. Ambos se pueden usar para llamar a un método de un objeto con otro objeto como argumento.
//En el siguiente ejemplo, cuando llamamos person1.fullName con person2 como argumento, THIS se referira a person2, incluso si este es un metodo de person1.
var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  var person2 = {
    firstName:"John",
    lastName: "Doe",
}
var y = person1.fullName.call(person2);  // Will return "John Doe" 
console.log(y)