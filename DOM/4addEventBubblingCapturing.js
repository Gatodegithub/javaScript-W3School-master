// addEventListener(event, function, useCapture);
// El metodo addEventlistener() adjunta un controlador de eventos al elemento especificado, sin sobreescribir los controladores de eventos existentes.
// Puedo agregar muchos controladores de eventos a un elemento
// Puedo añadir controladores del mismo tipo a un elemento, es decir, dos eventos de "click"
// Con addEventListener PUEDO AGREGAR OYENTES DE EVENTOS A CUALQUIER OBJETO DOM, NO SOLO A ELEMENTOS HTML. ES DECIR, EL OBJETO DE LA VENTANA (WINDOW)
// PUEDO ELIMINAR FACILMENTE UN DETECTOR DE EVENTOS UTILIZANDO EL METODO removeEventListener().


// En resumen el Bubbling hace referencia al desencadenamiento de eventos en elementos anidados desde el más interno hasta el más externo al igual que una burbuja.
// Event capturing is the event starts from top element to the target element. It is the opposite of Event bubbling, which starts from target element to the top element.


let boton = document.getElementById('boton');
// El primer parametro es el tipo de evento, el segundo parametro es la funcion que llamamos cuando el evento ocurre, el tercer parametro es un valor boolean que especifica si se utiliza el burbujeo de eventos o la captura de eventos. Este parámetro es opcional.

// NOTA QUE CON ADDEVENTLISTENER SE USA CLICK NO SE PONE ANTES EL "ON" CON ESTE METODO.
boton.addEventListener('click', (event) => {
    // Los eventos SON OBJETOS, TIENEN PROPIEDADES.
    document.getElementById('demo1').innerHTML = event.type;
    console.log(event.target);
    event.target.style.backgroundColor = "yellow";
})


//addEventListener() permite añadir muchos eventos al mismo elemento, sin sobreescribir eventos existentes.
boton.addEventListener('click', (event) => {
    event.target.style.boxShadow = "3px 3px 5px black";
})

boton.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = "red";
})


// addEventListener() permite añadir eventos en cualquier objeto DOM HTML tal como elementos html, el documento html, el objeto window, o otros objetos que soportan eventos, como xmlhttprequest object.
// AÑADO EL EVENTO RESIZE AL OBJETO WINDOW.
// Para usar parametros puedo realizarlo de la sig forma.
window.addEventListener('resize', () => {
    let demo2 = document.getElementById('demo2');
    demo2.innerHTML = Math.random();
    let valor = demo2.innerText;
    // llamo a esta funcion y le paso los parametros
    myFuncion(valor);
})
function myFuncion(valor){
    console.log(`El numero random es: ${valor}`);
}


// Hay dos formas de propagacion de eventos en HTML DOM, burbujeante y captura. La propagación de eventos es una forma de definir el orden de los elementos cuando ocurre un evento. Si tiene un elemento <p> dentro de un elemento <div> y el usuario hace clic en el elemento <p>, ¿qué evento "clic" de elemento debe manejarse primero?.
// Bubbling (burbujeante), el evento del elemento más interno se maneja primero y luego el externo: el evento de clic del elemento <p> se maneja primero, luego el evento de clic del elemento <div>.
// Capturing (captura), el evento del elemento más externo se maneja primero y luego el interno: el evento de clic del elemento <div> se manejará primero, luego el evento de clic del elemento <p>.

// Con addEventListener(event, function, useCapture) puedo especificar el tipo de propagacion indicandolo en el tercer parametro useCapture. El valor por defecto es FALSE, se usara la propagacion burbujeante, cuando el valor se establece en TRUE, el evento utiliza la propagacion de captura.
document.getElementById("myP1").addEventListener("click", alerta, false);

// La funcion debe estar definida separada del addeventlistener para que pueda ser removida.
function alerta() {
    alert("You clicked the white element!");
}
  
document.getElementById("myDiv1").addEventListener("click", () => {
    alert("You clicked the orange element!");
}, false);
  
document.getElementById("myP2").addEventListener("click", () => {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", () => {
    alert("You clicked the orange element!");
}, true);


// removeEventListener() este metodo elimina los controladores de eventos que se han adjuntado con el metodo addEventListener()
let quitar = document.getElementById('quitar');

quitar.addEventListener('click', () => {
    // Remuevo el evento click de #myP1, el cual llama a la funcion alerta. Esta funcion debe estar fuera del addEventListener de #myP1.
    document.getElementById('myP1').removeEventListener('click', alerta);
    console.log("Quitaste el evento");
});


// Nota: addEventListener() y removeEventListener() no son soportados por IE 8  y versiones anteriores. Sin embargo, para estas versiones especificas, puedo usar el metodo attachEvent(), de esta forma adjunto un controlador de eventos al elemento, y el metodo detachEvent() para removerlo.
let demo2 = document.getElementById('demo2');
demo2.innerHTML = "Hazme click";

if(demo2.addEventListener){ //Si demo2.addEventListener da TRUE (quiere decir que si existe).
    demo2.addEventListener('click', () => {
        demo2.innerHTML = "Estas usando un navegador compatible con addEventListener";
    })
}else if(demo2.attachEvent) { //Si demo2.attachEvent existe significa que esta en un navegador no                                         compatible (IE 8) por lo cual le añado el evento con attachEvent.
    demo2.attachEvent('click', () => {
        demo2.innerHTML = "Estas usando un navegador no compatible con addEventListener";
    })
    // detachEvent() para remover el evento en un navegador no compatible
}