/* El BOM permite a js "hablarle" al navegador.

-El objeto window es soportado por todos los navegadores. Este representa la ventana del navegador.
-Todos los objetos, funciones y variables globales se convierten automaticamente en miembros del objeto window.
-Variables globales son propiedades del objeto window.
-Funciones globales son metodos del objeto window.
-Incluso el objeto document (del html Dom) es una propiedad del objeto window:

window.document.getElementById("header"); <-- es lo mismo que --> document.getElementById("header"); 
*/


/* Window size: Dos propiedades pueden ser usadas para determinar el tamaño de la ventana del navegador
                ambas propiedades retornar el tamaño en pixeles.

                window.innerHeight - Altura interna de la ventana del navegador en pixeles
                window.innerWidth - Ancho interno de la ventana del navegador en pixeles
    
    For Internet Explorer 8, 7, 6, 5:

    document.documentElement.clientHeight
    document.documentElement.clientWidth
    or
    document.body.clientHeight
    document.body.clientWidth

    La ventana del navegador no incluye barras de herramientas ni barras de desplazamiento.


    Solucion practica para cubrir todos los navegadores:
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    
Algunos otros metodos:

        window.open() - Abre nueva ventana
        window.close() - Cierra la ventana presente
        window.moveTo()
        window.resizeTo()
*/


// Window Screen: El objeto window.screen contiene informacion sobre la pantalla del usuario, este objeto puede ser escrito sin el prefijo window.
let w = screen.width; //Devuelve en ancho de la PANTALLA del visitante
let h = screen.height; //Devuelve el alto de la PANTALLA del visitante
let aw = screen.availWidth; //Devuelve el ancho de la PANTALLA menos las caracteristicas de la interfaz                                 como la barra de tareas de window.
let ah = screen.availHeight;// Devuelve la altura de la PANTALLA menos las caracteristicas de la interfaz.
let cd = screen.colorDepth; // Devuelve el numero de bits utilizados para mostrar un color.
let pd = screen.pixelDepth; // Devuelve la profundidad de pixeles de la pantalla.

// PARA NAVEGADORES MODERLOS COLORDEPTH Y PIXELDEPTH SON IGUALES, HACEN LO MISMO.
console.log(`El ancho es: ${w}, el alto es: ${h}, el ancho disponible es: ${aw}, el alto disponible es: ${ah}, bits utilizados para mostrar un color: ${cd}, profundidad pixeles de pantalla: ${pd}`);


// Window Location: Este objeto puede ser usado para conseguir la url de la pagina actual y redireccionar al navegador a una nueva pagina. Este objeto puede ser escrito sin el prefijo window.
let lh = window.location.href; //Retorna el href (URL) de la pagina actual
let lhn = window.location.hostname; //Retorna el nombre de la web (dominio)
let lp = window.location.pathname; //Retorna la ruta y el nombre del archivo de la pagina actual
let lpl = window.location.protocol; //Retorna el protocolo usado en la web (http: o https:)
//let la = window.location.assign(); Carga un nuevo documento
console.log(`Url de la pagina: ${lh}
Dominio de la pagina web: ${lhn}
Ruta y nombre del archivo de la pagina actual: ${lp}
Protocolo usado por la pag: ${lpl}
Con window.location.assing() puedo cargar un nuevo documento indicando la ruta del documento como argumento`)


/* Window History: Este objeto contiene el historial de los navegadores, puede ser escrito sin el prefijo window. Para proteger la privacidad de los usuarios hay limitaciones de como js puede acceder a este objeto. Algunos metodos son:

    history.back()  ->  Lo mismo que la opcion volver atras del navegador
    history.forward()  ->  Lo mismo que clickear la opcion adelante del navegador
*/
function goBack(arg1){
    if(arg1 == atras){
        window.history.back();
        console.log("Me fui para atras");
    }else if(arg1 == adelante){
        window.history.forward();
        console.log("No se puede ir mas adelante");
    }
}

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
atras.addEventListener('click', () => {
    goBack(atras);
})
adelante.addEventListener('click', () => {
    goBack(adelante);
})


/* Window Navigator: Este objeto puede escribir sin el prefijo window.

    ¡¡¡PELIGRO!!! -> La informacion del objeto navigator a menudo puede ser engañosa y NO DEBE USARSE para detectar versiones del navegador porque:
        -Diferentes navegadores pueden usar el mismo nombre.
        -El propietario del navegador puede cambiar los datos del navegador.
        -Algunos navegadores se identifican erroneamente para evitar las pruebas del sitio.
        -Los navegadores no pueden informar sobre nuevos sistemas operativos, lanzados mas tarde que el navegador.

    navigator.appName -> Devuelve el nombre de la aplicacion del navegador, por extraño que paresca                             "netscape" es el nombre de la aplicacion para IE11, Chrome, Firefox y Safari.

    navigator.appCodeName -> Devuelve el nombre del codigo de la aplicacion del navegador. "Mozilla" es el                          nombre del codigo de la aplicacion para Chrome, Firefox, IE, Safari y Opera.

    navigator.platForm -> Devuelve la plataforma del navegador (sistema operativo)

    navigator.product -> Devuelve el nombre del producto del motor del navegador. NO CONFIES EN ESTO!, la                       mayoria de los navegadores devuelven "Gecko" como nombre del producto.

    navigator.appVersion -> Devuelve informacion sobre la version del navegador.

    navigator.userAgent -> Devuelve el encabezado de agente de usuario enviado por el navegador al servidor.

    navigator.cookieEnabled -> Devuelve true si las cookies estan habilitadas y false si no.

    navigator.language -> Devuelve el lenguaje del navegador

    navigator.onLine -> Devuelve true si el navegador esta online

    navigator.javaEnabled() -> Devuelve true si java esta habilitado.
*/
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.appName);
console.log(window.navigator.appCodeName);
console.log(window.navigator.product);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);
console.log(window.navigator.language);
console.log(window.navigator.onLine);
console.log(window.navigator.javaEnabled());


// Popup Alert: Js tiene tres tipos de popup boxes. Alert box, Confirm box, y Prompt box.
// A menudo se usa un alert box para asegurarse de que la informacion llegue al usuario. Se puede evitar el uso del prefijo window
window.alert('Hablaremos del BOM\n¡¡abre la consola!!');
// Confirm box: Se usa para que el usuario verifique o acepte algo. Si presiona "ok", el box retornara true, si presiona "cancel" el box retornara false.
let confirmacion = window.confirm("¿Estas listo?");
let primero = document.getElementById('primero');

if(confirmacion){
    primero.innerHTML = "A estudiar se ha dicho!";
}else {
    primero.innerHTML = "Estudia programador, no sea flojo :)";
}
// Prompt box: Se usa para que el usuario ingrese un valor antes de ingresar a una pagina. Si el usuario ingreso "ok", el box retornara el valor del input, si el usuario ingreso "cancel" el box retornara null
let person = prompt("Por favor ingrese su nombre", "Aldo");
let segundo = document.getElementById('segundo');
if(person == "" || person == null){
    segundo.innerHTML = "No ingresaste ningun nombre";
}else if(person){//Si da true significa que tiene algo.
    segundo.innerHTML = `Hola ${person}`;
}else {
    segundo.innerHTML = "No se que ingresaste, esto no deberia mostrarse nunca :O"
}
// Valores falsos comparando: NaN, 0, "", false, null, undefined.