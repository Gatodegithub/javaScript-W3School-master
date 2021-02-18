// Javascript fue inventado por Brendan Eich en 1995, y se convirtio en un estandar ECMA en 1997. ECMAScript es el nombre oficial del lenguaje. Desde 2015 ECMAScript se nombra por año (ECMAScript 2015). ECMAScript es a veces abreviado a ES.
'use strict'
/* Var , caracteristica #1: Podemos redeclarar variables, esto puede dar problemas en donde                                        re-declaremos sin darnos cuenta.  
                            var nombre = "Leandro"
                            var nombre = "Arturo"


let , caracteristica #1: No podemos redeclarar variables, no se puede acceder a una variable let                                declarada dentro de una funcion. Let tiene un scope de tipo bloque

Conts, caracteristica #1: No podemos cambiar la variable constante ni redeclararla. No se puede                                 acceder a una variable const creada dentro de una funcion. Const tiene un                              scope de tipo bloque. Const lo usamos cuando queremos que el valor de una                              variable nunca cambie.

scope: Nos permite proteger variables dentro de una FUNCION. No podemos acceder desde afuera del              codigo a variables creadas con let, var, const que estan dentro de una funcion.
*/
var nombre = "Leandro"
var nombre = "Arturo"
console.log(`Hola ${nombre}`)//Si se puede redeclarar


// let apellido = "Saavedra"
// let apellido = "Morales"   No se puede redeclarar


function saludo () {
    var nombre1 = "Carlos"
    return "hola " + nombre1
}
console.log(saludo())
// console.log(nombre1)  NO SE PUEDE ACCEDER


var edad = 18
if (edad >= 18) {//Lo que esta dentro de llaves {} es un bloque
    var esAdulto = true
}
console.log(esAdulto)//Se imprime ya que var no tiene un scope de tipo bloque.


let edad1 = 18
if (edad1 >= 18) {//Lo que esta dentro de llaves {} es un bloque
    let esAdulto1 = true
}
// console.log(esAdulto1)  Da error ya que let tiene un scope tipo bloque.


let edad2 = 18
if (edad2 >= 18) {//Lo que esta dentro de llaves {} es un bloque
    const esAdulto2 = true
}
// console.log(esAdulto2) Da error ya que const tiene un scope tipo bloque


//Un array definido como CONST no se le puede cambiar el valor, PERO SI ES EN UN ARRAY, SI PUEDO MODIFICARLO CON LOS METODOS.
const colores = ["rojo", "verde"]
// colores = "cadenatexto" NO PUEDO CAMBIAR VALOR
console.log(colores)
colores.splice(0,1,"amarillo")
console.log(colores)
colores.pop()
console.log(colores)




//TEMPLATE STRINGS ``
const nombresito = "Aldo Leandro"
const anios = 23
const pais = "Chile"
console.log(`La persona es ${nombresito} de ${pais}, tiene ${anios} años`)


//FUNCIONES TIPO FLECHA
const personas = ["Felipe", "Javier", "Matias", "Catalina"]
// si usara el return en el callback de .map, se devolvere un array. Si el callback es solo en una linea puedo evitar poner el return. Si tengo solo 1 parametro puedo sacarle el entre parentesis
const numero_caracteres = personas.map(value => `El nombre ${value} tiene ${nombre.length} caracteres`)

console.log(numero_caracteres)


//Parametros por defecto
function registrarUsuario (nombre, pais, correo = "No especificado", telefono = "98251283") {
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`
}
console.log(registrarUsuario("Aldo", "Chile", undefined, "13131313"))


//scripts js sin ningun atributo, lo que hara el navegador es interpretar el html, pausa para descargar el script, lo ejecuta y luego continua con la interpretacion de js
//con atributo ASYNC: reducimos el tiempo de pausa de la interpretacion de html. El navegador interpreta el html, a la misma vez descarga el script, y cuando empieza a ejecutar el script es cuando pausa la interpretacion del html, cuando acaba esa ejecucion seguira interpretando el html.
//con atributo Defer: no bloquiamos la interpretacion del html en toda la descarga de la web(dom), a diferencia del async la ejecucion se hace despues de la carga
/* 
    Definir una etiqueta < script > sin ningún atributo, lo que conlleva a la ejecución del script antes de que se reanude la interpretación del html.
    Utilizar el atributo <async>, en el que al tiempo que el navegador descarga el archivo script, interpreta el html de la página y, tan pronto finaliza la descarga, pausa la interpretación para ejecutar el script y, de inmediato, proseguir la interpretación.
    Emplear el atributo <defer>, lo que conlleva al aplazamiento de la ejecución del script una vez que ha finalizado la interpretación del html. En este caso, la descarga del script se realiza de forma asincrónica – como con Async -, pero con la ejecución de los scripts en el orden en el que aparecen en el documento.
 */