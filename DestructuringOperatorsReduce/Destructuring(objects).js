const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const last = 'saavedra';
// La variable se crea con el mismo nombre de la propiedad (no importa el orden de declaración)
const {city,last: shakeAndBake,first, zip, siblings:{sister: favoriteSibling} } = bob;
console.log(first,city,shakeAndBake, zip, favoriteSibling);

// puedo ponerle valores por defecto a estos parametros igual.
function printPerson({first, last, city, siblings:{sister}}){
  console.log(first, last, city, sister);
}

printPerson(bob);