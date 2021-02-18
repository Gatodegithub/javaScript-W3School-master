/* Json es un formato para almacenar y transportar datos.
-JAVASCRIPT TIENE UN OBJETO LLAMADO JSON QUE CONTIENE 2 PROPIEDADES. no tiene una funcionalidad interesante propia. 
-Json es a menudo usado cuando los datos se envian desde un servidor a una pagina web.
-Json significa Javascript Object Notation.
-Json es un formato de intercambio de datos ligero.
-Json es un lenguaje independiente.
-Json es autodescriptivo y facil de entender.
-La sintaxis de json se deriva de la sintaxis de notacion de objetos JavaScript, pero el formato json es solo texto. El codigo para leer y generar datos json se puede escribir en cualquier lenguaje de programacion.
*/
/* la sintaxis de json es derivada de la sintaxis de los objetos javascript 
-Datos son en nombre/valor.
-Datos son separados por comas.
-{} llaves contienen objetos.
-[] corchetes contienen matrices.
*/


// Convertir texto json a un objeto javascript. Un uso comun de json es leer datos de un servidor web y mostrar los datos en una pagina web. Para simplificar, esto se puede demostrar usando una variable.
// Array json.
var text = `{ "employees" : [
            {"firstName":"John" , "lastName":"Doe" },
            {"firstName":"Anna" , "lastName":"Smith" },
            {"firstName":"Peter" , "lastName":"Jones" } 
            ] }`;
console.log(text);

let obj = JSON.parse(text); //Convierto a objeto javascript el texto en formato json.
console.log(obj);
obj.employees[1].edad = 22; //Le asigno una nueva propiedad al objeto
let demo = document.getElementById('demo');
demo.innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName + " " + obj.employees[1].edad;


// Convertir un objeto js a texto JSON para enviarla al servidor
let myObj = {name: "Aldo", age: 22, city: "Puente Alto"};
// stringfy convierto a texto json el obj js
let myJson = JSON.stringify(myObj); console.log(myJson);
// parse convierto el texto en formato json a un objeto javascript
let myJsonObj = JSON.parse(myJson); console.log(myJsonObj);
// window.location = "demo_json.php?x=" + myJsonObj;


// Almacenando datos (Storing Data): Al almacenar datos, los datos deben tener un formato determinado y, independientemente de donde elija almacenarlos, el TEXTO SIEMPRE es uno de los formatos legales. ya que JSON hace posible almacenar objetos javascript COMO TEXTO.
localStorage.setItem("testJSON", myJson);
// Recuperando datos del local storage
let texto = localStorage.getItem("testJSON");
objeto = JSON.parse(texto);
document.querySelector('p:nth-child(2)').innerHTML = objeto.name;


/* SYNTAX - "name":"Jhon" en texto json las llaves son escritas entre comillas tambien, y los valores string deben ser escritos en doble comillas.

Numeros en json pueden ser enteros o decimales

En JSON, los valores pueden ser de los siguientes tipos:
-string
-number
-un objeto (json object)
-array
-boolean
-null

En javascript los valores pueden ser todos los anteriores, mas cualquier otra expresion de javascript valida, que incluye: Funcion, date, undefined.

En javascript los valores pueden ser escritos con comillas simples o dobles.

*/


/*JSON VS XML: Ambos pueden ser usados para recibir datos del servidor.

Los siguientes ejemplos definen un objeto employees con un array con 3 empleados.
JSON ejemplo:   {"employees":[
                { "firstName":"John", "lastName":"Doe" },
                { "firstName":"Anna", "lastName":"Smith" },
                { "firstName":"Peter", "lastName":"Jones" }
                ]}

XML ejemplo: <employees>

                <employee>
                    <firstName>John</firstName> <lastName>Doe</lastName>
                </employee>

                <employee>
                    <firstName>Anna</firstName> <lastName>Smith</lastName>
                </employee>

                <employee>
                    <firstName>Peter</firstName> <lastName>Jones</lastName>
                </employee>

             </employees>
            
JSON es como XMl por que:
-Ambos JSON y XML son humanamente redactables
-Ambos JSON y XML son jerarquicos (valores dentro de valores)
-Ambos JSON y XML pueden ser parseados y utilizados por muchos lenguajes de programacion
-Ambos JSON y XML se pueden recuperar con un XMLHttpRequest
-Ambos JSON y XML
-Ambos JSON y XML

JSON no se parece a XMl por que:
-Json no usa tag de termino
-Json es corto
-Json es mas rapido para leer y escribir
-Json puede ser usado en arrays.

La mayor diferencia es:
XML debe parsearse(analizarse) con un analizador XML. JSON puede ser analizado con metodos estandar de javascript en el objeto JSON que cuenta con dos propiedades.
*/


/*Por que JSON es mejor que XML: 
-xml es mucho mas dificil analizar que JSON.
-JSON es analizado por un objeto javascript (JSON) listo para usar.

Para aplicaciones AJAX, JSON es mas rapido y facil que XML:
Usando XML:
-Busca un documento XML
-Usa el DOM XML para recorrer el documento
-Extraer valores y almacenar en variables

Usando JSON:
-Buscar una cadena json 
-JSON.parse la cadena json
*/


// JSON Objects, valores en json pueden ser objetos.
let textoJson = {"empleado":{"nombre":"Dylan","apellido":"Diaz","edad":20,"Casado":false}};


// Json Arrays, valores json pueden ser arrays, el objeto empleados tiene 3 elementos.
let textoJson2 = {"empleados":["Javier","Martin","Felipe"]};


// Json arrays con objetos json como elementos
let textoJson3 = {"empleados":[{"Nombre":"Javier","Edad":22},{"Nombre":"Diego","Edad":23}]};


//Json Booleans
let textoJsonBooleano = {"Productos":[{"Platos":20},{"Tazas":4},{"Cancelado":false}]};
console.log(textoJsonBooleano.Productos[2].Cancelado);


//JSON null, valores en json pueden ser nulos
let textoJsonNull = {"segundoNombre":null};




// JSON.parse() , cuando se recibe datos desde un servidor, los datos siempre son strings. Analizarlos con parse convertira este string a un objeto javascript nativo
let objetin = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
document.querySelector('p:nth-child(3)').innerHTML = `Nombre: ${objetin.name}, Edad: ${objetin.age}`;
// Puedo solicitar json desde el servidor utilizando una solicitud AJAX.
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "json_demo_array.json", true);//Puede ser archivo .txt o .json o otros
xmlhttp.send(); 

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
    document.getElementById("demo3").innerHTML = myObj.Datos[0].name;
    document.getElementById("demo4").innerHTML = `Mi mascota es: ${myObj.Datos[0].pets[0].animal} y se llama ${myObj.Datos[0].pets[0].name}`;
    console.log(myObj.Datos[1]);
    document.getElementById("demo5").innerHTML = `Mi auto es un: ${myObj.Datos[1].autos[0]}`;
  }
};

// Exceptions
// Parsing Dates, analizando fechas. Los objetos de fecha NO estan DISPONIBLES en JSON. si necesito incluir una fecha, debo escribirlo como un string, para convertirlo a objeto despues.
let textin = '{"name": "Aldo", "birth": "June 16, 1997 12:00:00", "city": "New York"}';
let objet = JSON.parse(textin);
objet.birth = new Date(objet.birth);
console.log(objet);
document.getElementById('demo6').innerHTML = `Soy ${objet.name} y naci en ${objet.birth}`;


// O puedo usar el segundo parametro de la funcion JSON.parse(), llamada reviver. Este parametro es una funcion que checkea cada propiedad(key), antes de retornar el valor.
let textin2 = '{"name": "Leandro", "birth": "June 11, 2013 12:00:00", "city": "Santiago"}';
let objet2 = JSON.parse(textin2, (key, value) =>{
    if(key == "birth"){
        return new Date(value);
    }else{
        return value;
    }
});
document.getElementById('demo7').innerHTML = `Nombre: ${objet2.name}, Cumple el: ${objet2.birth}`;


// Parsing functions, las funciones NO estan DISPONIBLES en JSON, si necesito incluir una, la escribo como string, para hacerla funcion despues.
let tex = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
let ob = JSON.parse(tex);
console.log(ob);
//Uso eval para evaluar la sentencia, si esta correcta le concadeno entre () para que se autoinvoque cada vez que se llame el metodo.
ob.age = eval("(" + ob.age + ")");
document.getElementById('demo8').innerHTML = `${ob.age()}`;
// DEBO EVITAR USAR FUNCIONES EN JSON, LAS FUNCIONES PIERDEN EL SCOPE Y TENDRIA QUE USAR EVAL() PARA CONVERTIRLAS EN FUNCIONES DENUEVO.