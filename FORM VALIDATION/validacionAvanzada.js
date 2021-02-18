/* Hay muchas mas propiedades para validity en w3school sale todo

checkValidity() -> Devuelve true si el input contiene datos validos.

validationMessage -> Devuelve el mensaje por DEFECTO que mostrara un navegador cuando la validez sea                          falsa.

validityState (validity) -> Es una funcion que contiene propiedades booleanas relacionadas con la                                   validez de un elemento de entrada.

willValidate -> Indica si un elemento de entrada será validado

--------------------PROPIEDADES DE VALIDITY--------------------

    Property 	            Description
customError 	    Set to true, if a custom validity message is set.
patternMismatch 	Set to true, if an element's value does not match its pattern attribute.
rangeOverflow 	    Set to true, if an element's value is greater than its max attribute.
rangeUnderflow 	    Set to true, if an element's value is less than its min attribute.
stepMismatch 	    Set to true, if an element's value is invalid per its step attribute.
tooLong 	        Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch 	    Set to true, if an element's value is invalid per its type attribute.
valueMissing 	    Set to true, if an element (with a required attribute) has no value.
valid 	            Set to true, if an element's value is valid.

*/
window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validar, false);
}

function validaNombre() {
    let elemento = document.getElementById('nombre');
    // Si la validacion del html5 NO es correcta
    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre")
        }
        // El patron no cohincide
        if(elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        // error(elemento)
        return false;
    }

    return true;
}

function validaEdad() {
    let elemento = document.getElementById('edad');
    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad");
        }
        // Si sobrepasamos el rango
        if(elemento.validity.rangeOverflow) {
            error2(elemento, "El valor debe ser menor a 100");
        }

        if(elemento.validity.rangeUnderflow) {
            error2(elemento, "El valor debe ser mayor o igual que 18");
        }
        // error(elemento)
        return false;
    }

    return true;
}

function validaTelefono() {
    let elemento = document.getElementById('telefono');
    // Si la validacion del html5 NO es correcta
    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un telefono")
        }
        // El patron no cohincide
        if(elemento.validity.patternMismatch) {
            error2(elemento, "El telefono debe tener 9 numeros");
        }
        // error(elemento)
        return false;
    }

    return true;
}

function validar(e) {
    borrarError();
    if(validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si desea enviar el formulario")) {
        return true;
    }
    e.preventDefault();
    return false;
}

function error(elemento) {
    document.getElementById('mensajeError').innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById('mensajeError').innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    let formulario = document.forms[0];
    // .elements devuelve todos los input 
    for(var i = 0; i<formulario.elements.length; i++) {
        formulario.elements[i].className="";
    }
}