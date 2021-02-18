// JSON.stringify(). Cuando se enviar datos al servidor, los datos deben ser cadenas de texto. Para convertir objetos javascript en string con stringify()
var obj = { name: "John", age: 30, city: "New York" }; 
var myJSON = JSON.stringify(obj);
// Ahora que el objeto es un string, esta listo para mandarse al servidor
console.log(myJSON);

//Tambien se puede stringify un array.
var arr = ["John", "Peter", "Sally", "Jane"];
myJSON = JSON.stringify(arr);
console.log(myJSON);


// Exceptions. stringify dates no esta disponible. La funcion stringify() convertira cualquier date en string
obj = { name: "John", today: new Date(), city : "New York" };
myJSON = JSON.stringify(obj);
// Puedo convertir la cadena de nuevo en un objeto fecha en el receptor.
document.getElementById("demo").innerHTML = myJSON;


// Exceptions. stringify functions no esta disponible en json. La funcion stringify() removera toda funcion del objeto javascript, la propiedad y el valor.
obj = { name: "John", age: function () {return 30;}, city: "New York"};
myJSON = JSON.stringify(obj);
document.getElementById("demo1").innerHTML = myJSON;
// ESTO PUEDE SER OMITIDO SI CONVIERTO LA FUNCION EN STRING ANTES DE CORRER LA FUNCION JSON.stringify().
obj = { name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString();
myJSON = JSON.stringify(obj);
console.log(myJSON);
// Si envio funciones en json, la funcion pierde el scope, y para recibirla debo usar eval() para convertirla devuelta en funcion.





// Recorriendo las propiedades de un objeto (+= para concadenar)
myObj = {"name":"John","age":30,"car":null};
for(x in myObj){
    document.getElementById('demo2').innerHTML += `${x}: ${myObj[x]} <br>`;
    // Puedo usar los brackets para acceder al valor myObj["nombre"].
    console.log(myObj[x]);
    // Lo mismo que escribir console.log( myObj["nombre"] ). Ya que la x representa la propiedad.
}


// Valores en un objeto json pueden ser otro objeto json
let text = {
    "name":"John",
    "age":30,
    "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
    }
}
document.getElementById('demo3').innerHTML += text.cars.car1; + "<br>"
//  document.getElementById('demo3').innerHTML += text.cars["car1"];


// Modificando valores
text.name = "Aldo";
text.cars["car1"] = "Bugatti";

// Eliminando propiedades
delete text.age;
console.log(text);




// Arrays como objetos JSON. Los arrays en json son casi lo mismo que un array en javascript. En JSON los valores deben ser de tipo string, number, object, array, booleano o null. En javascript los valores del array pueden ser todos los anteriores, más cualquier otra expresion de javascript valida, incluidas las funciones, las fechas y undefined.
let objetito = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
}
x = objetito.cars[1];
console.log(x);
// Para recorrer UN ARRAY USO FOR IN.
let p = "";
for (i in objetito.cars){
    p += objetito.cars[i] + " ";
}
console.log(p);
// O puedo usar un ciclo for
let z = "";
for (i = 0; i<objetito.cars.length; i++){
    z += objetito.cars[i] + " ";
}
console.log(z);


// Objeto con propiedad con valor un array con 3 objetos
myObjeto = {
    "name":"John",
    "age":30,
    "cars": [
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
}
let stringify = JSON.stringify(myObjeto);
console.log(stringify)
let myObjetito = JSON.parse(stringify);
console.log(myObjetito);

let u = "";
for (i in myObjetito.cars){
    // h2 es un elemento de bloque, pro eso no es necesario especificar br
    u += "<h2>" + myObjetito.cars[i].name + "</h2>";
    
    for (j in myObjetito.cars[i].models){
        u += myObjetito.cars[i].models[j] + "<br>";
    }

    document.getElementById('demo4').innerHTML = u;
}
// Modificando valores de arrays
myObjetito.cars[0].name = "Hyundai";
console.log(myObjetito.cars[0].name);
// Deteleando item de un array
delete myObjetito.cars[0];
console.log(myObjetito.cars[0]);