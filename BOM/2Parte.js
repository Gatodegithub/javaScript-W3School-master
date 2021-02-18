let cambio = document.getElementById('script2');
let src = cambio.src;
if(src.search("2Parte.js")){
    let botones = document.getElementsByTagName('button');
    for(let i = 0; i < botones.length; i++){
        botones[i].style.display = "none";
    }
}
/* Eventos de tiempo en javascript: El objeto window permite a js ejecutar codigo en un intervalo de tiempo especificado. Estos intervalos de tiempo son llamados eventos de tiempo.                                    Los dos metodos claves par usar con js son:

    setTimeOut(function, milliseconds) -> Ejecuta una funcion despues de esperar los milisegundos                                                 especificados.

    setInterval(function, milliseconds) -> Lo mismo que setTimeOut, PERO se repite la ejecucion de la                                              funcion continuamente.

Ambos metodos son del objeto window HTML DOM y se les puede OMITIR EL PREFIJO WINDOW.
*/
// setTimeout()
let input = document.getElementById('inputsito');
let input2 = document.getElementById('inputsito2');
input.onclick = alerta;

function alerta(){
    // Este evento click se creara cuando se llame a esta funcion. NO SE ELIMINARA DESPUES
    input2.addEventListener('click', () => {
        clearTimeout(timeOut);
        console.log("Evento time cancelado");
    })
    let timeOut = setTimeout(() => {
        alert("Presionaste el inputsito xd");
    }, 2000);
}


// setInterval(): Repite la funcion dada cada cierto periodo de tiempo.
let miLet = setInterval(myTimer, 100);

function myTimer(){
    let d = new Date();
    document.getElementById('primero').innerHTML = d.getMilliseconds();
}

document.getElementById('detener').addEventListener('click', () => {
    clearInterval(miLet);
    console.log("Se detuvo el evento time setInterval()");
})



/* Cookies: Permiten almacenar informacion del usuario en paginas webs.

    -Las cookies son datos, almacenados en pequeños archivos de texto, en su computadora.
    
    Cuando un servidor web enviada una pagina web a un navegador y este se cierra, tambien la conexion se cierra y el servidor olvida todo sobre el usuario.

    Las cookies se inventaron para resolver el problema "como recordar información sobre el usuario".

    Cuando un usuario ingresa a una pagina web, su nombre puede almacenarse en una cookie.
    La prox vez que el usuario visite la pagina, la cookie "recordara" su nombre.

    Las cookies se guardan en pares: username = John Doe

    Cuando un navegador solicita una pagina web de un servidor, las cookies que pertenecen a la pagina se agregan a la solicitud. De esta forma el servidor obtiene los datos necesarios para "recordar" informacion sobre los usuarios.

    Js puede crear, leer y deletear cookies con la propiedad document.cookie
*/
// ninguno de los ejemplos a continuación funcionará si el navegador tiene desactivada la compatibilidad con cookies locales.

//Crendo la cookie, tambien puedo añadir una fecha de expiracion, por default, la cookie es borrada cuando el navegador se cierra
// Con el parametro path (ruta), puedo decirle al navegador a que ruta pertenece la cookie. Por defecto, la cookie pertenece a la pagina actual.
document.cookie = "username=Aldo Saavedra; expires=20 Dec 2023 12:00:00 UTC; path=/";
document.cookie = "username=Canela Avellana; expires=24 Dec 2040 12:00:00 UTC;";


//Leer cookies, document.cookie retorna una cadena paredico a: cookie1=value, cookie2=value, cookie3=value;
let x = document.cookie;
console.log(x);

// Puedo modificar una cookie de la misma manera que la creo, la cookie antigua es sobreescrita
document.cookie = "username=Waldo Morales; expires=20 Dec 2023 12:00:00 UTC; path=/";
document.cookie = "username=Canelita Avellanita; expires=24 Dec 2040 12:00:00 UTC;";
console.log(document.cookie);

// Borrando cookie, es sencillo, no debo especificar un valor cuando quiera deletear una cookie, establezca el parametro expire en una fecha pasada. DEBO DEFINIR LA RUTA DE LA COOKIE PARA ASEGURARME DE ELIMINAR LA COOKIE CORRECTA, algunos navegadores no permitiran eliminar una cookie si no especifico la ruta.
document.cookie = "username=; expires=20 Dec 1930 12:00:00 UTC;";
console.log(`${document.cookie}, Se borro al usuario canelita`);


// La propiedad document.cookie se parece a una cadena de texto normal. Pero no lo es. Ejemplo: En el siguiente ejemplo crearemos una cookie para almacenar el nombre del visitante, la primera vez que un visitante llega a la pagina web, se le pedira que complete su nombre. El nombre se almacena en una cookie. La proxima vez que el visitante llegue a la misma pagina, recibira un mensaje de bienvenida. Crearemos 3 funciones, 1 funcion para establecer un valor de cookie, 1 funcion para obtener el valor de la cookie, 1 funcion para verificar el establecimiento de la cookie.

// Creamos la funcion para almacenar el nombre del visitante en una variable cookie, los parametros d ela funcion son el nombre de la cookie (cname), el valor de la cookie (cvalue) y el numero de dias hasta que la cookie caduque (exdays). La funcion establece una cookie al agregar el nombre de la cookie, el valor de la cookie y la cadena de caducidad.
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Creamos una funcion que retorne el valor de una cookie especifica. Toma el nombre de la cookie como parametro (cname). Crea una variable (nombre) con el texto a buscar (cname + "="). Decodifica la cadena de cookies para manejar cookies con caracteres especiales,  e.g. '$'. Divido document.cookie con punto y coma en una matriz llamada ca (ca = decodedCookie.split (';')). Recorro la matriz y leo cada valor, si se encuentra la cookie, devuelve el valor de la cookie, si no se encuentra la cookie, devuelve "".
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// Por ultimo creamos una funcion para verificar una cookie, Por ultimo creamos la funcion que comprueba si se establecio una cookie. Si la cookie esta configurada mostrara un saludo Si la cookie no está configurada, mostrará un cuadro de solicitud, solicitando el nombre del usuario, y almacena la cookie de nombre de usuario durante 365 días, llamando a la función setCookie:
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
}

window.onload = checkCookie;