// Las propiedades son la parte mas importante de cualquier objeto js.
// Las proiedades son valores asociados con un objeto js.
// Un objeto js es una coleccion de propiedades desordenadas.
// Las propiedades generalmente se pueden cambiar, agregar y eliminar, pero algunas son de solo lectura.

// Objeto
let estudiante = {nombre: "Aldo",
                apellido: "Saavedra",
                edad: 22,
                telefono: 99824893,
                presentacion: function() {
                    return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
                }};

// Acceder al objeto: 3 formas para acceder al objeto.
estudiante.apellido = "Morales";
estudiante["nombre"] = "Leandro";
let x = "edad"; // La variable debe ser el nombre de la propiedad.
estudiante[x] = 23;

// for...in recorre las propiedades de un objeto. El bloque de codigo dentro del for...in se ejecutara una vez para cada propiedad.
x = undefined;
let txt = "";
for (x in estudiante) {
    if(typeof(estudiante[x]) == "function") {
        txt += estudiante[x]() + "<br>";
    }else {
        txt += estudiante[x] + "<br>";
    }
}
document.getElementById('demo').innerHTML = txt + "<hr>";

// Añadiendo nuevas propiedades. Puedo agregar nuevas propiedades a un objeto existente simplemente dandole un valor.
estudiante.profesion = "Desarrollador Web";
estudiante.nacionalidad = "Chileno";
estudiante.pelo = "Liso";

x = undefined;
txt = "";
for(x in estudiante) {
    if(typeof(estudiante[x]) == "function") {
        txt += estudiante[x]() + "<br>";
    }else {
        txt += estudiante[x] + "<br>";
    }
}
document.getElementById('demo1').innerHTML = txt + "<hr>";

// Deleteando propiedades. La palabra clave DELETE elimina tanto el valor de la propiedad como la propiedad misma. Despues de la eliminacion la propiedad no se puede usar antes de volver agregarla.
// El operador DELETE esta diseñado para usarse en propiedades de objetos. No tiene efecto sobre variables o funciones.
// El operador DELETE NO debe usarse en propiedades de objetos js predefinidas. Puede bloquear su aplicacion.
delete estudiante["pelo"];

x = undefined;
txt = "";
for(x in estudiante) {
    if(typeof(estudiante[x]) == "function") {
        txt += estudiante[x]() + "<br>";
    }else {
        txt += estudiante[x] + "<br>";
    }
}
document.getElementById('demo2').innerHTML = txt + "<hr>";

// Atributos de propiedades
// Todas las propiedades tienen un nombre. Ademas tambien tienen un valor, el valor es uno de los atributos de la propiedad. Otros atributos son: enumerables, configurables y de escritura.
// Estos atributos definen como se puede acceder a la propiedad (¿es legible?, ¿se puede escribir?).
// En JavaScript, todos los atributos se pueden leer, pero solo se puede cambiar el atributo de valor (y solo si la propiedad se puede escribir).
// ( ECMAScript 5 has methods for both getting and setting all property attributes)

// Propiedades prototipo
// La palabra clave DELETE NO elimina las propiedades heredadas, pero si elimina una propiedad de prototipo, afectara a todos los objetos heredados del prototipo.

// METODOS, Son acciones que pueden ser realizadas por objetos. Los métodos son funciones almacenadas como propiedades de objeto.
// This palabra clave, en una funcion, this se refiere al propietario de la funcion.
let descripcion = estudiante.presentacion();
document.getElementById('demo3').innerHTML = descripcion + ".";

// Usando metodos incorporados de js, usaremos el metodo del objeto String toUpperCase(), para convertir un texto a mayusculas.
let message = "Hello world!".toUpperCase();

// Agregando metodos a un objeto
estudiante.mensaje = function() {
    return `Soy ${estudiante.nombre} y quiero ser desarrollador web.`;
}
document.getElementById('demo3').innerHTML += "<br> Mensaje: " + estudiante.mensaje(); //Uso += para agregarle al texto.