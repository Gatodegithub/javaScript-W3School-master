// REFERENCIA A EVENTOS https://www.w3schools.com/jsref/dom_obj_event.asp
// El objeto window representa la ventana que contiene un documento DOM; la propiedad document apunta al DOM document cargado en esa ventana. El objeto window al que pertenece un documento puede ser obtenido usando la propiedad document.defaultView
// Cuando la pagina carga, el navegador crea el DOM.
/*
 El HTML DOM ES la interfaz de programacion para HTML, esta define:
    
    *Los elementos html como objetos.
    *Las propiedades de todos los elementos html ( .innerHTML ).
    *Los metodos para acceder a todos los elementos html ( document.getElementById() ).
    *Los eventos para todos los elementos html.

In other words(literalmente): The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
*/
/*

                        The DOM Programming Interface

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).

*/

let parrafo = document.getElementById('demo');
parrafo.innerHTML = "Hola mundo";
// getElementById() es un metodo, mientras que innerHTML es una propiedad, esta es util para para obtener o reemplazar cualquier contenido de un elemento html, incluyendo <html> y <body>.


/* Encontrando elementos html

    document.getElementById(id)
    document.getElementsByTagName(name)
    document.getElementsByClassName(name)
*/

/* Cambiando elementos html

    .innerHTML = nuevo contenido
    .src = landscape.jpg      =  Cambia el atributo src
    parrafo.style.color = "red";      = Cambiando el estilo de un elemento html
    parrafo.setAttribute("data-texto", "Chao mundo");    = Cambia el valor de un atributo del elemento html    
*/
parrafo.innerHTML = "Hola mundoooo";
// Verifico que parrafo tenga el atributo data-texto
console.log(parrafo.hasAttribute("data-texto"));
// Obtengo el valor del atributo data-texto
console.log(parrafo.getAttribute("data-texto"));
// Cambio el valor del atributo data-texto
parrafo.setAttribute("data-texto", "Chao mundo");
// Obtengo el nuevo valor
console.log(parrafo.getAttribute("data-texto"));
parrafo.style.color = "red";

let demo1 = document.getElementById('demo1');
demo1.innerHTML = "Soy demo1";
// Modifique el valor del atributo title
demo1.title = "Cambie el valor del atributo title";


/*  Añadiendo y borrando elementos

    document.createElement(element) 	Create an HTML element
    document.removeChild(element) 	    Remove an HTML element
    document.appendChild(element) 	    Add an HTML element
    document.replaceChild(new, old) 	Replace an HTML element
    document.write(text) 	            Write into the HTML output stream

*/


// document.write se puede usar para escribir directamente en la secuencia de salida html
// NUNCA USAR DOCUMENT.WRITE() DESPUES DE QUE ES DOCUMENTO HAYA SIDO CARGADO, ESTO SOBREESCRIBIRA EL DOCUMENTO.
document.write("<hr>" + Date());


// Añadiendo controladores de eventos
parrafo.onclick = () =>{
    if(parrafo.style.color === "red"){
        parrafo.style.color = "green";
        return console.log("Parrafo en verde");
    }else {
        parrafo.style.color = "red"
        return console.log("Parrafo en rojo");
    }
}


/* Finding HTML Objects

    Property 	                            Description 	                                       DOM
document.anchors 	            Returns all <a> elements that have a name attribute 	            1
document.applets 	            Returns all <applet> elements (Deprecated in HTML5) 	            1
document.baseURI 	            Returns the absolute base URI of the document 	                    3
document.body 	                Returns the <body> element 	                                        1
document.cookie 	            Returns the document's cookie 	                                    1
document.doctype 	            Returns the document's doctype 	                                    3
document.documentElement 	    Returns the <html> element 	                                        3
document.documentMode 	        Returns the mode used by the browser 	                            3
document.documentURI 	        Returns the URI of the document 	                                3
document.domain 	            Returns the domain name of the document server 	                    1
document.domConfig 	            Obsolete. Returns the DOM configuration 	                        3
document.embeds 	            Returns all <embed> elements 	                                    3
document.forms 	                Returns all <form> elements 	                                    1
document.head 	                Returns the <head> element 	                                        3
document.images 	            Returns all <img> elements 	                                        1
document.implementation 	    Returns the DOM implementation 	                                    3
document.inputEncoding 	        Returns the document's encoding (character set) 	                3
document.lastModified 	        Returns the date and time the document was updated 	                3
document.links 	                Returns all <area> and <a> elements that have a href attribute 	    1
document.readyState 	        Returns the (loading) status of the document 	                    3
document.referrer 	            Returns the URI of the referrer (the linking document) 	            1
document.scripts 	            Returns all <script> elements 	                                    3
document.strictErrorChecking    Returns if error checking is enforced 	                            3
document.title 	                Returns the <title> element 	                                    1
document.URL 	                Returns the complete URL of the document 	                        1
*/