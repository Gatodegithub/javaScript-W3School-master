/* Con ajax puedo:

    -Leer datos de un servidor web, despues que la pagina haya sido cargada.
    -Actualizar una pagina web sin volver a cargar la pagina.
    -Enviar datos a un servidor web en segundo plano.

*Ajax no es un lenguaje de programacion.
*Ajax es una tecnica para acceder a servidores web desde una pagina web
*Ajax significa: Asynchronous JavaScript And Xml

Ajax solo usa una combinacion de: 

    -Un objeto XMLHttpRequest integrado en el navegador (para solicitar datos de un servidor web).
    -Javascript y html DOM (para mostrar o usar los datos).

*Ajax es un nombre engañoso. Las aplicaciones AJAX pueden usar XML para transportar datos, pero es igualmente común transportar datos como texto sin formato o texto JSON.

AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con un servidor web detrás de escena. Esto significa que es posible actualizar partes de una página web, sin volver a cargar toda la página.


¿Como trabaja AJAX?

1. Un evento ocurre en la pagina web (la pagina carga, un boton es clickeado).
2. Un objeto XMLHttpRequest es creado por javascript.
3. El objeto XMLHttpRequest enviá una solicitud a un servidor web.
4. El servidor procesa la solicitud.
5. El servidor envía una respuesta a la pagina web.
6. La respuesta es leída por javascript.
7. La acción adecuada (como la actualización de la pagina) es realizada por javascript.
*/
// La clave de AJAX es el objeto XMLHttpRequest object, todos los navegadores modernos soportan este objeto. Este objeto puede ser usado para intercambiar datos con el servidor web detras de escena. Esto significa que es posible actualizar partes de una pagina web, sin recargar toda la pagina.
let xhttp = new XMLHttpRequest();

// Por razones de seguridad, los navegadores modernos no permiten el acceso a través de dominios. Esto significa que tanto la página web como el archivo XML que intenta cargar deben estar ubicados en el mismo servidor. Los ejemplos en W3Schools abren todos los archivos XML ubicados en el dominio W3Schools. Si deseo utilizar ejemplos debo ubicar los archivos XML que deseo cargar en mi propio servidor.

// Las versiones viejas de internet (IE5 Y IE6) usan un objeto ActiveX en lugar del objeto XMLHttpRequest:
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


// Enviar una peticion a un servidor, se usan los metodos open() y send() del objeto XMLHttpRequest
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send()
// El metodo open(method, url, async) especifica el tipo de peticion. method: tipo de peticion GET o POST, url: la localizacion del archivo en el servidor. async: true(asynchronous) o false(synchronous).
// EL metodo send() envia la peticion al servidor (usado para get).
// send(string) envia la peticion al servidor (usado para POST).


// GET O POST?. GET es mas simple y rapido que POST, y puede ser usado en más casos. Sin embargo, siempre usa peticion POST cuando: -Un archivo en cache no es una opcion (actualice un archivo o base de datos en el servidor). -Enviar una gran cantidad de datos al servidor (POST no tiene limitaciones de tamaño). -Al enviar la entrada del usuario (que puede contener caracteres desconocidos), POST es más robusto y seguro que GET.

// XMLHttpRequest síncrono (async = false) no se recomienda porque JavaScript dejará de ejecutarse hasta que la respuesta del servidor esté lista. Si el servidor está ocupado o lento, la aplicación se bloqueará o se detendrá.

// XMLHttpRequest síncrono está en proceso de ser eliminado del estándar web, pero este proceso puede llevar muchos años.



/* SERVER RESPONSE

    La propiedad onreadystatechange contiene el estado de XMLHttpRequest. Esta propiedad define la funcion que se ejecutara cuando readystate cambie.

    La propiedad status y la propiedad statusText contienen el estado del objeto XMLHttpRequest.


    Property 	Description

onreadystatechange - Defines a function to be called when the readyState property changes

readyState - Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status - 200: "OK"
        403: "Forbidden"
        404: "Page not found"

For a complete list go to the Http Messages Reference

statusText - Returns the status-text (e.g. "OK" or "Not Found")
*/
// Ajax puede usar datos de archivos txt, Xml...
// recuperar datos del servidor con archivos php, asp..
// Recuperar datos de la base de datos