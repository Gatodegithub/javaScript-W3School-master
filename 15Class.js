'use strict'
/* Una clase es un tipo de funcion, pero en lugar de usar la palabra clave function para iniciarla, usamos la palabra clave class y las propiedades se asignan dentro de un metodo constructor (). */
// Usa la palabra clave class para crear una clase y siempre agregue el metodo constructor ().            Se llama al metodo constructor cada vez que se inicializa el objeto clase.
class Car {
    constructor(brand) { //Esto es un metodo de la clase.
      this.carname = brand;
    }
}
// Ahora puedo crear objetos usando la clase Car:
let mycar = new Car("Ford"); //El metodo contructor es llamado automaticamente cuando el objeto es inicializado.
console.log(mycar);



/* METODOS
El metodo constructor es especial, aca es donde se instancian las propiedades, este metodo es llamado automaticamente cuando se inicializa una clase, y este tiene que tener exactamente el nombre "constructor", de hecho, si no se cuenta con un metodo constructor, javascript añadira un metodo constructor invisible y vacio.
Tambien soy libre de crear mis propios metodos, la sintaxis debe ser familiar:
*/
class Auto {
    constructor(marca, door) {
        this.marca = marca;
        this.puertas = door;
    }
    acelerar(km = 0) {
        return `Voy a ${km}km por hora`;
    }
}
let auto = new Auto("Kya", 4);
console.log(auto);
document.querySelector("#demo").innerHTML = auto.acelerar(20);
// Como puedo ver en el ejemplo anterior, puedo llamar al metodo haciendo referencia al nombre del metodo del objeto seguido de parentesis (cualquier parametro iria dentro del parentesis).



/* Metodos STATICOS
Los metodos estaticos se definen en la CLASE misma y no en el prototipo (instancia). Esto significa que no se puede llamar a un metodo estatico con un objeto instanciado, si no que con la misma clase debe ser llamado el metodo.
*/
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    static saludo() {
        return "Hola bro!!, Sigue así feliz y estudioso, ¡¡TRIUNFARAS!!.";
    }
}
let yo = new Persona("Aldo", 22);
//El metodo estatico solo puede ser llamada desde la clase, no desde el objeto instanciado.
document.querySelector("#demo2").innerHTML = Persona.saludo();
// Si quiero usar el objeto yo dentro del metodo estatico, puedo enviarlo como parametro. (NO ME FUNCIONO.)



/*HERENCIA - INHERITANCE
Para crear una herencia de clase, use la palabra clave extends. Una clase creada con una herencia de clase hereda todos los metodos de la otra clase.
La herencia es util para la reutilizacion del codigo: reutilice las propiedades y los metodos de una clase existente cuando cree una nueva clase.
*/
class Model extends Auto {
    constructor(marca, puertas, modelo) {
        super(marca, puertas); // Al llamar al metodo super() en el metodo constructor, llamamos al metodo constructor del padre y tenemos ACCESO A LAS PROPIEDADES Y METODOS DEL PADRE.
        this.modelo = modelo;
    }
    show(km) {
        return this.acelerar(km) + ", en el " + this.modelo;
    }
}
let auto2 = new Model("Hyunday", 4, "Accer"); //Si no quiero poner valor a las propiedades del padre, debo eliminar los parametros del super() que representa las propiedades del padre.
console.log(auto2)
document.querySelector("#demo3").innerHTML = auto2.show(10);



/*Getters and Setters
Las clases tambien permiten usar getters and setters.
Puede ser inteligente usar getters y setters para sus propiedades, especialmente si desea hacer algo especial con el valor antes de devolverlos o antes de configurarlos.
Para agregar captadores y definidores en la clase, use las palabras clave get y set
*/
class Animal {
    constructor(tipo, colita) {
        this._tipo = tipo;
        this._colita = colita;
    }
    // EL nombre de los metodos get y set NO PUEDE SER EL MISMO que el nombre de la propiedad, en este caso colita. Puedo definir con un _ antes de la propiedad para poder nombre el get y set bien.
    get colita() {
        return this._colita;
    }
    set colita(x) {
        this._colita = x;
    }
}
let canela = new Animal("Perra", "Cortada");
// Incluso aunque el get es un metodo, NO SE USA PARENTESIS cuando se desea obtener el valor de la propiedad.
document.querySelector("#demo4").innerHTML = canela.colita;

// PARA USAR UN SETTER, use la misma sintaxis que cuando establece una valor de propiedad, osea sin parentesis:
canela.colita = "Paradita";
document.querySelector("#demo5").innerHTML = canela.colita;
console.log(canela);



// HOISTING: A diferencia de las funciones y otras declaraciones de javascript, las declaraciones de clase no se elevan al top. Esto significa que se debe declarar una clase antes de poder usarla

//No puedo usar la clase camion aca.
//micamion = new Camion(4)
//La instancia anterior lanzaria un error.
class Camion {
    constructor(ruedas) {
      this.ruedas = ruedas;
    }
}

//Aca si se puede usar la clase Camion.
let micamion = new Camion(8);
console.log(micamion); 



// EN STRICT MODE obtendre un error si utilizo una variable sin declarar. 