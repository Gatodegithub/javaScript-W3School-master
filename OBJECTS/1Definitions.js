// En js casi todo es un objeto. Booleans, Numbers y Strings PUEDEN SER objetos con la palabra clave NEW.       DATES, MATH, regular expressions, arrays, functions, objets SON SIEMPRE OBJETOS.

// Todos los valores de js excepto los primitivos, son objetos.
// Primitive values, es un valor que no tiene propiedades ni metodos. Un dato de tipo primitivo es un dato que tiene un valor primitivo.
// Js define 5 tipos de datos PRIMITIVOS: Strings, Number, Boolean, null, undefined.
// Los valores primitivos, son inmutables (estan codificados, y por lo tanto, no se pueden cambiar). El DATO PRIMITIVO si se puede cambiar, pero el VALOR PRIMITIVO DE TAL DATO no se puede cambiar.

// Las variables pueden ser objetos: var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; . Pero los objetos pueden contener muchos valores.

// Los objetos, tienen propiedades, las cuales tienen valores.
// Los objetos, tienen metodos (definicion de funcion)


/* Crear objetos, hay diferentes formas para crear un nuevo objeto:
    -Definir y crear un solo objeto, utilizando un objeto literal.

        var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
        };

    -Definir y crear un solo objeto, con la palabra clave NEW. (NO RECOMENDADO, USAR LA FORMA LITERAL)

        var person = new Object();
        person.firstName = "John";
        person.lastName = "Doe";
        person.age = 50;
        person.eyeColor = "blue";

    -Definir un constructor de objetos y luego crear objetos en base a ese constructor.


In ECMAScript 5, an object can also be created with the function Object.create().
*/


// LOS OBJETOS SON MUTABLES (a diferencia de los valores primitivos), los objetos se abordan por REFERENCIA, no por valor.
// X NO es una copia de person. X ES person. Ambos x y person SON el MISMO objeto. Cualquier cambio a X tambien cambiara en person, porque x y person son el mismo objeto.
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

let x = person;
x.age = 10;           // This will change both x.age and person.age, ya que son el mismo objeto.


