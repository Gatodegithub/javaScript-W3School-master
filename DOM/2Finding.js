// La forma mas simple para almacenar un elemento html es con el ID, si es encontrado el elemento, el metodo retornara el elemento como un objeto.
let demo = document.getElementById('demo');


// Almacenar elemento html por TAG NAME, como hay varios p, uso corchetes para especificar a cual p me refiero
let demo1 = document.getElementsByTagName("p")[1];
demo1.innerHTML = "Soy el parrafo 1"


// Almanceno el elemento con id main
let main = document.getElementById('main');
// Almaceno los P que estan dentro del elemento main
let parrafos = main.getElementsByTagName('p');
// Selecciono el parrafo con el indice [0] y agrego contenido
parrafos[0].innerHTML = "Estoy dentro del main, soy demo3";


// Almancer elementos html por CLASS NAME
let clase = document.getElementsByClassName('ninguna');
clase[1].innerHTML = "Soy el demo5 y tengo la clase que buscas :)";


// Almacenar elementos html con SELECTORES CSS
let selectores = document.querySelectorAll('p.intro');
selectores[1].innerHTML = "Soy demo4 y me almacenaron con selector CSS";


// HTML OBJECT COLLECTION DOCUMENT.FORMS
function myFunction() {
    // De todos los formularios almaceno el que tiene el id frm1
    let formulario = document.forms['frm1'];
    let txt = "";
    for(i=0; i < formulario.length; i++){
        txt += formulario.elements[i].value + "<br>";
    }
    document.getElementById('demo2').innerHTML = txt;
}

alert(`El titulo de la pagina es: ${document.title}`);

/* Los siguientes HTML OBJECTS y object collection, tambien son accesibles.

    document.anchors
    document.body
    document.documentElement
    document.embeds
    document.forms
    document.head
    document.images
    document.links
    document.scripts
    document.title
*/
