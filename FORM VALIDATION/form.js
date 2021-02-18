// Si un campo de formulario esta vacio, esta funcion alerta con un mensaje y devuelve false para evitar que se envie el formulario.
/* Si la funcion validateForm devuelve true, el formulario será enviado, si devuelve false no se envia.
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}*/

/*HTML constraint validation is based on:
    
    Constraint validation HTML Input Attributes
    Constraint validation CSS Pseudo Selectors
    Constraint validation DOM Properties and Methods

HTML Input Attributes:
disabled 	Specifies that the input element should be disabled
max 	    Specifies the maximum value of an input element
min 	    Specifies the minimum value of an input element
pattern 	Specifies the value pattern of an input element
required 	Specifies that the input field requires an element
type  	    Specifies the type of an input element

Validation CSS Pseudo Selectores:
:disabled 	Selects input elements with the "disabled" attribute specified
:invalid 	Selects input elements with invalid values
:optional 	Selects input elements with no "required" attribute specified
:required 	Selects input elements with the "required" attribute specified
:valid 	    Selects input elements with valid values
*/


//Seleccion del formulario
//Conociendo el id
let formulario = document.getElementById('miformulario');
let formulario2 = document.forms['miformulario'];

//Conociendo el numero de formulario que es en la pagina
let formulario3 = document.getElementsByTagName('form')[0];
let formulario4 = document.forms[0];

//Seleccionar elementos del formulario
//.elements[] Devuelve un array con todos los inputs del formulario
//getElementById('idelemento) Devuelve un elemento con un id determinado
//getElementsByTagName('etiqueta) Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName('nombre) Devuelve un array con elementos que tienen el mismo nombre (ejemplo radiobutton).

// window.load = iniciar; Llama a la funcion iniciar cuando la ventana se carge
window.addEventListener('load', () => iniciar());

function iniciar() {
  //Cuando le haga click al btn enviar  se activara la funcion validar
  document.getElementById('enviar').addEventListener('click', validar, false);
}

function validarNombre() {
  let elemento = document.getElementById('nombre');

  limpiarError(elemento);

  if(elemento.value == "") {
    alert("El campo nombre no puede ser vacio");
    error(elemento);
    return false;
  }

  return true;
}

function validarTelefono() {
  let elemento = document.getElementById('telefono');

  if(isNaN(elemento.value)) {
    alert("El campo telefono tiene que ser numerico");
    return false;
  }

  return true;
}

function validarFecha() {
  let dia = document.getElementById('dia').value;
  let mes = document.getElementById('mes').value;
  let ano = document.getElementById('ano').value;

  let fecha = new Date(ano, mes, dia);

  if(isNaN(fecha)) {
    alert("Los campos de la fecha son incorrectos");
    return false
  }

  return true;
}

function validarCheck() {
  let campoCheck = document.getElementById('mayor');

  if(!campoCheck.checked) {
    alert("Debe ser mayor de edad");
    return false;
  }

  return true;
}

// con este if llamo a cada funcion, y si todas devuelven true, se retorna true y el formulario se envia.
function validar(e) {
  if(validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
    return true;
  }else {
    e.preventDefault(); //Evitamos que el formulario vaya a la pagina procesar
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
}