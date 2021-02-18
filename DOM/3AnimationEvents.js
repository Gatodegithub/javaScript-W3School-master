// EL PRIMER PARAMETRO QUE RECIBE UN EVENTO REPRESENTA AL EVENTO QUE SE EJECUTARA.
// Animacion alternando las propiedades css.
let boton = document.getElementById('botonsito');
boton.onclick = myMove; //Al hacer click al elemento se lanzara la funcion myMove

function myMove() {
    boton.innerHTML = "Activaste la animacion";
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
            boton.innerHTML = "Activame denuevo :)"
            elem.style.top = "0";
            elem.style.left = "0";
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}


// Onload y onunload events, estos eventos son lanzados cuando el usuario entra o se va de la pagina, el evento onload puede ser usado para checar el tipo de navegador y la version, y asi cargar la version apropiada de la pagina web basandose en esa informacion. ESTOS EVENTOS SE PUEDEN USAR PARA MANEJAR COOKIES
let cuerpo = document.getElementById('body');
cuerpo.onload = checkCookies;

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    console.log(text);
}


// onchange event(Deseleccionar el elemento), este evento es ocasionalmente usado en combinacion con validaciones de campos input
let fname = document.getElementById('fname');
fname.onchange = myChange;

function myChange() {
    fname.value = fname.value.toUpperCase();
}


// onmouseover(raton entra al elemento) y onmouseout(raton sale del elemento) events
let contenedor = document.getElementById('contenedor');
contenedor.onmouseover = adentro;
contenedor.onmouseout = fuera;

function adentro(){
    this.innerHTML = "Estas dentro uff";
}

function fuera(){
    this.innerHTML = "Estas fuera :c";
    setTimeout(() => {
        this.innerHTML = "Vuelve a tocarme bebe";
        clearInterval();
    },2000);
}


// onmousedown(pulsar boton del raton y no soltarlo) y onmouseup(soltar el boton del raton)
let presioname = document.getElementById('contenedor2');
presioname.onmousedown = presionado;
presioname.onmouseup = levantado;

function presionado(event) {
    console.log(event);
    this.style.backgroundColor = "red";
    this.style.color = "black";
    this.innerHTML = "Sueltame";
}

function levantado(event) {
    console.log(event);
    this.style.backgroundColor = "black";
    this.style.color = "red";
    this.innerHTML = "Presioname"
}