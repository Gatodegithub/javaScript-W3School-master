/* DOM Nodes, con el html dom puedo navegar por el arbol de nodos utilizando relaciones de nodos. De acuerdo con el estandar W3C html dom, todo en un documento html es un nodo:

    -Todo el documento es un nodo de documento
    -Cada elemento html es un nodo de elemento
    -El texto dentro de los elementos html son nodos de texto
    -Cada atributo html es un nodo de atributo (en desuso)
    -Todos los comentarios son nodos de comentarios

Con html DOM todos los nodos en el arbol de nodos pueden ser accedidos por javascript
Nuevos nodos pueden ser creados, y todos los nodos pueden ser modificados o deleteados.

Los nodos en el arbol de nodos tienen una relacion jerarquica entre si.
Los terminos parent, child y sibling (hermano) se usan para describir las relaciones.

En un arbol de nodos, el nodo superior se llama raiz (o nodo raiz) cada nodo tiene exactamente un padre, excepto la raiz (que no tiene padre). Un nodo puede tener varios hijos. Los hermanos (o hermanas) son nodos con el mismo padre.

-------------------------------------------

<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>

-html es el nodo root
-html no tiene padres
-html es el padre de head y body
-head es el primer hijo
-body es el ultimo hijo

-head tiene un hijo titulo
-titulo tiene un hijo (un text node): "Dom tutorial"
-body tiene dos hijos h1 y p
-h1 tiene un hijo (text node): Dom lesson one
-p tiene un hijo (text node): Hello world!
-h1 y p son hermanos


Navegacion entre nodos: Puedo usar las siguientes propiedades de nodos para navegar entre los nodos con js

    parentNode
    childNodes[nodenumber]
    firstChild
    lastChild
    nextSibling
    previousSibling

*/

// Uso innerHTML para recuperar el contenido de un elemento html, sin embargo, aprender los siguientes métodos es útil para comprender la estructura de árbol y la navegación del DOM.

// nodeValue, esta propiedad especifica el valor de un nodo. nodeValue para los nodos de texto es el texto en si. nodeValue para los nodos de atributo es el valor del atributo. nodeValue para elementos nodos es null.
let primero = document.getElementById('primero').innerHTML;
console.log(primero);
// Con la propiedad innerHTML es lo mismo que acceder al nodeValue del primer hijo. 
primero = document.getElementById('primero').firstChild.nodeValue;
console.log(primero);
// Acceder al primer hijo tambien puede ser asi
primero = document.getElementById('primero').childNodes[0].nodeValue;
console.log(primero);


/* Hay dos propiedades especiales que permiten el acceso al documento completo:

    document.body - El body del documento
    document.documentElement - El documento completo
*/
console.log(document.body.innerHTML);
console.log("---------------------");
console.log(document.documentElement.innerHTML);


/* Propiedad nodeName: Especifica el nombre de un nodo. NOTA: nodeName siempre contiene el nombre del tag                          html en mayusculas

    -nodeName es de solo lectura
    -nodeName de un nodo de elemento es el mismo que el nombre de la etiqueta
    -nodeName de un nodo de atributo es el nombre del atributo
    -nodeName de un nodo de texto siempre es #text
    -nodeName del nodo del documento siempre es #document
*/
document.getElementById('segundo').innerHTML = document.getElementById('primero').nodeName;


// nodeType, esta propiedad es de solo lectura. Retorna el tipo del nodo.
document.getElementById('tercero').innerHTML = document.getElementById('primero').nodeType;



/* Añadiendo y eliminando nodos.
append es para posicionar el elemento al ultimo de todos (funciona con strings), prepend para posicionarlo primero, appendChild es lo mismo que append pero solo funciona con objetos.
*/
let parrafo = document.createElement('p');
let nodo = document.createTextNode('Este parrafo es un nodo creado');
parrafo.appendChild(nodo);

let div = document.getElementById('div1');
div.appendChild(parrafo);

let parrafo2 = document.createElement('p');
let nodo2 = document.createTextNode('Este parrafo lo posiciono antes que todos');
parrafo2.appendChild(nodo2);

// Metodo insertBefore, sirve para crear el elemento antes de un elemento determinado.
let test = document.getElementById('ptest');
div.insertBefore(parrafo2, test);

/* Removiendo elementos html existentes, remove(). Encontrando el elemento a eliminar*/
let elmt = document.getElementById('remover');
// elmt.remove(elmt);

/* El metodo remove() no sirve en navegadores viejos, puedo usar esto en su lugar. Encontrando al elemento padre y removiendo al hijo indicado*/
// div.removeChild(elmt);

// Puedo usar la propiedad parentNode para encontrar al elemento padre y usar removeChild. Encontrando al elemento hijo, busco a su padre y indico que remueva al hijo indicado.
let child = document.getElementById('remover');
child.parentNode.removeChild(child);

// Reemplazando elementos html
let reemplazar = document.getElementById('reemplazo');
let parrafo3 = document.createElement('p');
let nodo3 = document.createTextNode('Este parrafo lo use para reemplazar el que habia antes');
parrafo3.appendChild(nodo3);
// El primer argumento es el nuevo elemento y el segundo el elemento que quiero reemplazar
div.replaceChild(parrafo3, reemplazar);



// HTMLCollection Object, El metodo getElementsByTagName() retorna un objeto HTMLCollection. Esto se PARECE a un array con los elementos html.
let parrafos = document.getElementsByTagName('p');
// Los elementos de un HTMLC se pueden acceder con su indice, nombre o id.
console.log(parrafos['primero']);
// La propiedad .length retorna el numero de elementos en la coleccion. Esta propiedad es util cuando quieres recorrer mediante un ciclo los elementos en la coleccion.
console.log(parrafos.length);

let miColeccion = document.getElementsByTagName('p');

for(let i = 0; i < miColeccion.length; i++){
  miColeccion[i].style.color = "purple";
}
// HTMLCollection NO ES UN ARRAY!!!, Puede parecerse a un array pero no lo es. Puedo recorrer la coleccion con un ciclo y referirme a elementos mediante su indice (como un array). Sin embargo, NO PUEDO USAR METODOS DE ARRAYS COMO valueOF(), pop(), push(), or join() en una coleccion html.



/* NodeList Object, un objeto NodeList es una lista (coleccion) de nodos extraidos de un documento. Un objeto NodeList es casi lo mismo que un objeto HTMLCollection. Algunos navegadores viejos devuelven un objeto NodeList en lugar de una coleccion HTMLC para metodos como getElementsByClassName().

Todos los navegadores devuelven un NodeList object para la propiedad childNodes.
La mayoria de los navegadores devuelven un NodeList para el metodo querySelectorAll().
*/
let todosParrafos = document.querySelectorAll('p');
// Los elementos de un NodeList se pueden acceder solo con su indice.
console.log(todosParrafos[1]);
console.log(todosParrafos.length);


/* Diferencias entre HTMLCollecton y NodeList

  Un HTMLC es una coleccion de elementos HTML.
  Un NodeList es una coleccion de nodos del documento.
  Un NodeList y HTMLC son muy parecidos.
  Tanto un objeto HTMLC como un objeto NodeList son una coleccion de objetos similar a un array.
  Ambos tienen la propiedad .length.
  Ambos empiezan del indice 0, como un array.
  Se puede acceder a los elementos de la coleccion HTMLC por su nombre, id o numero de indice.
  Solo se puede acceder a los elementos de un NodeList por su numero de indice.
  Solo el objeto NodeList puede contenedor nodos de atributos y nodos de texto.

*/
let pruebas = document.querySelectorAll('#prueba');
let pruebas2 = document.getElementsByTagName('p');
console.log(pruebas);
console.log(pruebas2);

// NodeList NO es un array!, puedo recorrerlo con ciclos y referirme a los nodos como un array. Sin embargo, no puedo usar metodos de arrays.