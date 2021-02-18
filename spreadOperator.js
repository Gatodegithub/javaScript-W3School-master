function prueba(x, y, z) { console.log(x ,y ,z) };
var args = [0, 1, 2];
prueba.apply(null, args);
// Con el operador spread de ES6, el ejemplo anterior se puede rescribir como:
prueba(...args);
// otro ejemplo
function prueba2(v, w, x, y, z, p) { console.log(v ,w ,x, y, z, p) }
var args = [0, 1];
prueba2(-1, ...args, 2, ...[3], ...[4]); //Le mando con el operador spread el 4,se puede por que esta en un array.

// Se agregan los elementos de un array dentro de otro array existente.
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
document.write(lyrics);

// push suele usarse para agregar los elementos de un array al final de otro array existente. En ES5 esta tarea puede ser realizada de la siguiente manera:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Agregar todos los elementos de arr2 a arr1
arr1.push.apply(arr1, arr2);
console.log(arr1);

// Usando el operador de propagación spread de ES6, este sería el resultado:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);


/* Operador Rest
El operador Rest es exactamente igual a la sintaxis del operador de propagación, y se utiliza para desestructurar arrays y objetos. En cierto modo, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo.*/