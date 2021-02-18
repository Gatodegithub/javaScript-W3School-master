// Precio
/^\d{0,8}(\.\d{1,2})?$/;
/* 
    / /  <- esto indica que es una expresion regular
    ^   <- Queremos que la expresion regular se encuentre al inicio del string
    $  <- Indica que la cadena de texto tiene que terminar de tal forma que mientrar existan estos dos caracteres(^ y $), lo que va a hacer es que validemos que todo el string cumpla con la exp regular, es decir, que no haya dentro de una cadena de texto una cantidad o  un precio por que esa se va a desechar.
    \d <- indica que solicitara un digito
    {0,8} <- indica que vamos a esperar que sea un digito entre 0 y 8 cifras.
    ()?  <- significa que este grupo puede aparecer una o ninguna vez. Con esto estamos validando que exista una cantidad que no lleva decimales o que si pueda llevar decimales
    \. <- Estamos buscando un punto.
    \d{1,2} <- Nuestro precio solo debe llevar entre 1 y 2 decimales.
*/


// Numeros enteros
/^\d+$/;
/* 
    ^ <- Queremos que la expresion regular se encuentre al inicio del string
    $ <- Tambien sea el final del string, es decir, SOLO SE VA A ACEPTAR CADENAS DE TEXTO EN LA CUAL SE CUMPLA EN TODA LA CADENA NUESTRA EXPRESION REGULAR.
    \d <- Mencionar que necesitamos un digito
    + <- indica que ese digito puede existir una o mas veces
*/


// Numeros decimales
/^\d*\.\d+$/;
/*
    ^ $ <- Con esto tanto al inicio como al final delimitamos que la expresion se aplique a toda la cadena de texto que resivamos
    \d* <- 0 o mas digitos, puede no existir o puede existir muchas veces.
    \. <- Se requiere un punto
    \d+ <- 1 o mas digitos
*/


// Numeros enteros y decimales
/^\d*(\.\d+)?$/;
/*
    \d+ <- 0 o mas digitos
    (\.\d+) <- Tiene que tener un punto y despues 1 o mas digitos
    ? <- 0 o 1 repeticion del grupo
*/


// Numeros enteros, positivos y negativos
/^-?\d*(\.\d+)?$/;
/* 
    -? <- - Simbolo para indicar que tenemos un numero negativo, luego el simbolo ? por que esperamos que no exista o que exista una vez.
*/


// Alfanumerico sin espacios, no esperamos que la cadena de texto tenga espacios en cualquier posicion
let text = /^[a-zA-Z0-9]*$/;
let resultado = text.test('Ald29');
console.log(resultado);
/*
    [] <- Opciones que hay dentro de los corchetes que podemos USAR
    * <- 0 o mas repeticiones
*/


// Alfanumero con espacios
text = /^[a-zA-Z0-9 ]*$/;
/* 
    Para que pueda aceptar espacios, tengo que dejar un espacio en blanco para que la exp sepa que es un caracter valido.
*/


// Correo electronico
text = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
resultado = text.test('');
console.log(resultado);
/*
    \+ <- le damos al usuario la opcion de que el correo tenga un operador de suma.
    \d <- Para un digito, entonces hay dos formas para poner un rango de numeros, puede ser 0-9 o \d es lo mismo.
*/


// Password fuerte, 1 minuscula, 1 mayuscula, 1 numero, 1 caracter especial, 8 caracteres de longitud.
/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(=?(.*[A-Z]))(?=(.*)).{8,}/;
/* 
    (?=(.*[0-9]) 
    ?= <- con esto indicamos que nuestro grupo este en cualquier parte de la cadena de texto.
    .* <- Puede exitir cualquiercaracter en esta expresion, con * indicamos que no puede haber ningun caracter o puede haber muchos 
*/


// Nombre de usuario
/^[a-z0-9_-]{3,16}$/;
/*
    [] <- Con corchetes indicamos que se puede usar las opciones dentro de el.
*/


// URL CON HTTP O HTTPS
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2, 256}\.[a-z]{2,6}\b([a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
/*
    https? <- Tiene que tener http y el s puede o no existir
    :\/\/ <- Cuando hay una diagonal invertida y luego un caracter estamos diciendo que quieres el caracter literal. Aqui requiere dos //
    (www\.)? <- Puede o no existir un www y un punto a fuerzas.
    \.[a-z]{2,6}\b <- Que haya un punto literal. Entre dos y seis caracteres de la a-z, \b nos dice que todo esto sea una palabra, a partir del punto todo sea una palabra y no haya espacios o algun otro caracter que parta el string.
*/


// Fecha formato YYYY-MM-dd
/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
/*
    [12]\d{3}-
    [12] <- Escoja entre 1 o dos,
    \d{3} <- pide un digito con 3 cifras
    - <- Para separar


    (0[1-9]|1[0-2])-
    Pide un cero, despues un rango del 0 al 9, utilizamos un OR | para que sea esa expresion o la de la derecha, la de la derecha tiene que tener un 1 con un digito rango entre 0 y 2, ya que hay un rango de 12 meses.
*/


// Hora HH:MM, 12 hrs, 0 opcional con AM y PM
/((1[0-2]|0?[1,9]):([0-5][0-9])?([AaPp][Mm]))/;


// Hora HH:MM, 24HRS, 0 no opcional.
/^(0[0,9]|1[0-9]|2[0-3]):[0-5][0-9]$/;