// Sirve para recuperar propiedades en objetos muy complejos
var serie = {
    nombre: 'The big bang theory',
    director: 'Mark Cendrowski',
    finalizada: true,
    canal: {
        nombre: 'CBS',
        direccion: {
            calle: 'Calle 52 Oeste 51',
            ciudad: 'Nueva York'
        }
    }
};

var serie2 = {
    nombre: 'Los Serrano',
    director: 'Begoña Alvarez',
    temporadas: 8,
    finalizada: true,
    canal: {
        nombre: 'Telecinco',
        direccion: {
            calle: 'Carretera Fuencarral a Alcobendas 4',
            ciudad: 'Madrid'
        }
    }
};

var series = [serie, serie2];

// Entre llaves estoy creando dos variables (nombre y director), las cuales tomaran el valor de las propiedades con el mismo nombre desde el objeto que le indico.
var {nombre, director} = serie;
console.log(nombre, '-' , director);

// Valores por defecto, si la propiedad no existe, tomara el valor indicado por defecto.
var {finalizada = false} = serie;
console.log(finalizada);

// Alias, para que el nombre de la variable no sea el mismo a la propiedad
var {nombre: titulo} = serie;
console.log(titulo);

// Objetos complejos, le indico la propiedad objeto y entre {} pongo el nombre de la propiedad a recuperar de ese objeto
var {canal: {nombre}} = serie;
console.log(nombre);
// Con alias
var {canal: {nombre: nombreCanal}} = serie;
console.log(nombreCanal);

var {canal: {direccion: {calle: calleCanal}}} = serie;
console.log(calleCanal);

// Propiedades dinamicas
var propiedad = 'nombre';
var { [propiedad]: nombreSerie } = serie;
console.log(nombreSerie + "\n -----------");

// For of
for(let {nombre} of series) {
    console.log(nombre);
}

const arrNombres = series.map(({nombre}) => {
    return nombre;
})
console.log(arrNombres);