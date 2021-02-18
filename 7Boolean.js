/* Un boolean en javascript representa uno de estos dos valores: True o False.
El valor booleano de una expresion es la base de todas las comparaciones y condiciones de javascript.
*Everything With a "Value" is True (x=100,x=2.14,x=-15,x="false",x="hola",x=7+1+3.14),
Everything Without a "Value" is False.
*Booleans pueden tambien ser definidos como objetos con la palabra clave NEW, NO SE RECOMIENDA.ç
*(x == y) is false because objects cannot be compared  */
'use strict'
//Puedo usar la funcion Boolean() para saber si una expresion o variable es true
Boolean(10 > 9)  //returns true
// o mas facil  (10 > 9) y 10 > 9 , also returns true


//Everything With a "Value" is True (x=100,x=2.14,x=-15,x="false",x="hola",x=7+1+3.14)
//Everything Without a "Value" is False
var x = 0
Boolean(x) //retorna false

x = -0
Boolean(x) //returns false 

x = "" //Valor de string vacio, es falso
Boolean(x) //returns false

var y //Valor de undefined es falso
Boolean(y) //return false

x = null //Valor de null, es falso
Boolean(x)

x = false //valor de false, es falso
Boolean(x) //return false

x = 10 / "h" //valor de NaN, es falso
Boolean(x) //return false



// Booleans can be object, (x == y) is TRUE because x and y have equal values, 
// (x === y) is FALSE because x and y have different types 
x = false;             
y = new Boolean(false);
if (x == y) console.log("Tienen los mismos valores, pero 'y' es un objeto Booleano")
console.log("Uno es: " + typeof x + " y el otro es: " + typeof y)