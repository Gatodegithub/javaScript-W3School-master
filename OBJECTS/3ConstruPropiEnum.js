// Get property, se usa la propiedad lang para obtener el valor de la propiedad language
// Get tiene una syntaxis mas simplificada en lugar de metodos. Esa seria una diferencia
// Javascript puede asegurar una mejor calidad de datos cuando se usan getters y setters
// Get y set no son funciones por lo que se envia asi el parametro del set obj.subtract = 15;
// SOLO MODIFICAR MIS PROPIOS PROTOTYPOS, NUNCA MODIFICAR PROTOTYPOS DE OBJETOS ESTANDARD DE JS.
var persona = {
  firstName: "John",
  lastName : "Doe",
  language : "Ninguno",
  get lang() {
    return this.language.toUpperCase();
  },
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};
document.getElementById('demo').innerHTML = "¿Que idiomas hablas?"
document.getElementById('demo1').innerHTML = persona.language + ".";
persona.lang = "Ingles";
document.getElementById('demo1').innerHTML += " Bueno igual si sé algo de " + persona.language;

/* Porque usar getters y setters??

*Da una sintaxis mas simple
*Permite una sintaxis igual para propiedades y metodos
*Puede asegurar una mejor calidad de datos
*Es util para hacer cosas detras de escena
*/

// El metodo Object.defineProperty() tambien puede ser usado para añadir getters y setters:
var obj = {counter : 0};

Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});

Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});

Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

let c = console.log;

obj.reset;
obj.decrement;
c( obj.counter );
obj.increment;
obj.increment;
obj.increment;
c( obj.counter );
obj.add = 20;
c( obj.counter );
obj.subtract = 15;
c( obj.counter );

// FUNCION CONSTRUCTORA DE UN OBJETO(ECMA2015 SE USAN CLASes). Se considera una buena practica nombrar las funciones de constructor con una primera letra mayuscula.
// NO PUEDO AÑADIR UNA NUEVA PROPIEDAD A UNA FUNCION CONSTRUCTORA DE LA MISMA MANERA QUE AÑADIR UNA A UN OBJETO EXISTENTE (Estudiante.propiedadNueva = blabla). DEBO AÑADIRLA DIRECTAMENTE EN LA FUNCION.
function Estudiante(first, last, age, eye) {
  // En una funcion constructora THIS no tiene ningun valor, es un sustituto del nuevo objeto. El valor de this se convertira en el nuevo objeto cuando se cree el objeto.
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.changeName = function (name) {
    this.firstName = name.toUpperCase();
  };
}
var miHermana = new Estudiante('naty', 'saavedra', 29, 'brown');
// Uso el metodo de la funcion constructora para cambiar el nombre
miHermana.changeName("sohellete");

document.getElementById('demo2').innerHTML = miHermana.firstName + " " + miHermana.lastName;

// Añadir propiedades a un objeto, solo se añade la propiedad a miHermana
miHermana.floja = true;
// Añadir metodos a un objeto, solo se añade el metodo a miHermana
miHermana.estudiar = function () {
  return `Estoy estudiando, aprobecho de decir que tengo los ojos color ${this.eyeColor}`;
}
document.getElementById('demo3').innerHTML = miHermana.estudiar(); 
c(miHermana)

// No usar la palabra clave new, solo complica, mejor crear los objetos nativamente.
/* 
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object 
*/

/* Prototipos de los objetos de javascript. Todos los objetos js heredan propiedades y metodos de un prototipo.

Los objetos DATE heredan de Date.prototype
los objetos ARRAY heredan de Array.prototype
El objeto PERSON hereda de Person.prototype
*/
function Familia(integrantes, mujeres, hombres, unidos, faltantes, felices) {
  this.integrantes = integrantes;
  this.mujeres = mujeres;
  this.hombres = hombres;
  this.unidos = unidos;
  this.faltantes = faltantes;
  this.felices = felices;
}
c(Familia)
// Añado nuevo metodo al prototypo constructor
Familia.prototype.descripcion = function () {
  return `La familia tiene ${this.integrantes} integrantes,
de estos ${this.mujeres} son mujeres y solo ${this.hombres}
son hombres`;
}
// Añado en el prototypo del constructor Familia una nueva propiedad, está será heredada por los objetos contruidos por este constructor.
Familia.prototype.nacionalidad = "Chilena";
// Creo un objeto desde el prototypo constructor Familia 
let integrante = new Familia(5, 3, 2, true, 2, "Muy felices");
c(integrante);
c(integrante.nacionalidad); //Hereda del prototypo Familia la nacionalidad y metodo descripcion
c(integrante.descripcion());

// SOLO MODIFICAR MIS PROPIOS PROTOTYPOS, NUNCA MODIFICAR PROTOTYPOS DE OBJETOS ESTANDARD DE JS.


// ECMASCRIPT 5 AÑADIO UN MONTOS DE NUEVOS METODOS A LOS OBJETOS JS
let yo = {
  nombre : "Aldo",
  apellido : "Saavedra",
  edad : 22
}
// CAMBIAR EL VALOR DE UNA PROPIEDAD
Object.defineProperty(yo, "edad", {value: 40});
c(yo.edad);
// Agregar una propiedad a un objeto
Object.defineProperty(yo, 'navidad', {value:"SI"});
// Agregar get o tambien un set
Object.defineProperty(yo, "fullName", {
  get : function () {return this.nombre + "." + this.apellido;}
}); 
c(yo.fullName)
// Indico que la propiedad apellido no podra ser sobreescrito el valor
Object.defineProperty(yo, "apellido", {writable:false});
// LAS PRODIEDADES ENUMERABLES SE MUESTRAN CON FOR...IN O Object.key(objeto), LAS NO ENUMERABLES ps no.
Object.defineProperty(yo, "apellido", {enumerable:false});
yo.apellido = "Morales";
c(yo.apellido);
// Listar en un array todas las propiedades
let retornoProp = Object.getOwnPropertyNames(yo);
c(retornoProp);
// Object.keys(objeto) SOLO LISTA LAS PROPIEDADES ENUMERABLES, AL IGUAL QUE FOR o otro ciclo.
let retornoEnum = Object.keys(yo); //Devuelve un array con las propiedades enumerables.
c(retornoEnum);

// Forma para comprobar la existencia de una propiedad
if('apellido' in yo){
  console.log("Se encuentra la propiedad");
} else {
  console.log("No se encuentra la propiedad");
}

// Para verificar si la propiedad del objeto yo es enumerable o no
if (yo.propertyIsEnumerable('apellido')) {
  console.log("Si es enumerable");
} else {
  console.log("No es enumerable");
}

// Para conseguir una descripcion completa de las propiedades PROPIAS. indica el valor, si es writable, enumerable y configurable.
console.log(Object.getOwnPropertyDescriptor(yo, 'apellido'));

// Se comprueban las propiedades enumerables (propias y heredadas)
for (var prop in integrante) {
  console.log(prop);  // num
}
c(" ")

// Se comprueban las propiedades enumerables (propias)
Object.keys(integrante).forEach(function(prop) {
  console.log(prop);  // num
});
c(" ")

// Se comprueban las propiedades enumerables (propias)
Object.keys(yo).forEach(function(prop) {
  console.log(prop);  // num
});
c(" ")


// NUEVO CONSTRUCTOR, PROPIEDAD HEREDADA, DEFINEPROPERTIES Y CICLOS QUE INCLUYEN O NO LAS PROPIEDADES HEREDADAS
function Millonario(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// Le agrego una propiedad al prototipo del constructor, la cual se hereda 
Millonario.prototype.cantidad = 1000000;

let miObjeto = new Millonario('Aldo','Saavedra');

Object.defineProperties(miObjeto, {
  casas: {
    value: 2,
    writable: true,
    enumerable: true 
  },
  autos: {
    value: 3,
    writable: false,
    enumerable: true
  },
  hijos: {
    value: "Muchos",
    writable: true,
    enumerable: false
  }
})

// Recorre todas las propiedades enumerables, NO INCLUYE HEREDADAS.
Object.keys(miObjeto).forEach(function (prop){
  console.log(prop);
})
c(" ")

// Recorre todas las propiedades enumerables, INCLUYE HEREDADAS.
for (var prop in miObjeto) {
  console.log(prop);  // num
}