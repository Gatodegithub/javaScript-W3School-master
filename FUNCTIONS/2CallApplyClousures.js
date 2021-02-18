/*
    TODAS LAS FUNCIONES JAVASCRIPT SON METODOS DE OBJETOS.

    Si una funcion NO es un metodo de un objeto javascript, esta funcion es del objeto global de HTML 

*/
// call() : Este metodo permite que un objeto pueda usar un metodo que pertenece a otro objeto. Pasandole como argumento el objeto propietario.
const persona = {
    nombre : "Aldo",
    apellido : "Saavedra",
    nombreCompleto : function (pais="Chile", ciudad="Santiago") {
        return `Hola, soy ${this.nombre} ${this.apellido} de ${pais}, ${ciudad}`;
    }
}
console.log(persona.nombreCompleto());

const persona2 = {
    nombre : "Naty",
    apellido : "Saavedra",
}
// Tambien puedo usar argumentos.
console.log(persona.nombreCompleto.call(persona2, "España", "Barcelona"));


// apply() : Este metodo es similar a call() la diferencia es que apply() toma argumentos DESDE UN ARRAY, y call toma argumentos separadamente.
const gato = {
    nombre : "Avellana",
    peloColor : "Rubio",
    descripcion : function (arg1 = 2, arg2 = "orejas") {
        return this.nombre + ", pelo " + this.peloColor + " " + arg1 + " " + arg2;
    }
}

const perra = {
    nombre : "Canela",
    peloColor : "Negro"
}

console.log( gato.descripcion() );
console.log( gato.descripcion.apply(perra, ["4", "patas"])) ;

/* In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object. */




/* CLOSURES js.
    las variables pueden tener scope local o global.
    Las variables GLOBALES PUEDEN HACERSE LOCALES (privadas) con closures
*/
/* Funciones Anidadas

    -Todas las funciones tienen acceso al scope global.
    -En hecho, todas las funciones tienen acceso al scope anterior a ellas
    -Js soporta funciones anidadas. Estas tienen acceso al scope anterior a ellas.

*/
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();   
    return console.log(counter);
}
add();

// CLOSURES : Es una funcion que tiene acceso al scope principal, incluso despues de que la funcion principal se haya cerrado.
// La variable incrementar es asignada para retornar el valor de la funcion auto invocada.
// La funcion de auto invocacion solo se ejecuta una vez. Establece el contador en cero y devuelve una funcion, esta funcion que retorna la autoinvocada sera asignada a la expresion incrementar.
// De esta manera incrementar se convierte en una funcion. La parte maravillosa es que puede acceder al contador en el scope padre.
// Esto se llama js CLOSURE. Permite que una funcion tenga variables "privadas"
// El contador es protegido por el scope de la funcion anonima, y puede solamente ser cambiado usando la funcion incrementar.
let incrementar = (function () {
    // La funcion auto invocada se ejecutara solo 1 vez y devolvera (almacenara) la funcion que retorna en la expresion incrementar.
    let parrafin = document.getElementById('demo');
    var counter = 0;
    parrafin.innerHTML = counter;
    // Recien cuando llame a la funcion se va a retornar el contador aumentado.
    return function () { //Esta funcion retornada sera asignada a la expresion incrementar.
        counter += 1; 
        return parrafin.innerHTML = counter;
    }
})();