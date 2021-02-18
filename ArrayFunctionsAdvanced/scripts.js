const productos = [
    {nombre: 'Ordenador PC', precio: 699, departamento: 'Tecnologia'},
    {nombre: 'Sartenes Verdes', precio: 39, departamento: 'Hogar'},
    {nombre: 'Relog Calculadora', precio: 75, departamento: 'Tecnologia'},
    {nombre: 'Maquina Palomitas', precio: 33, departamento: 'Hogar'},
    {nombre: 'Mueble TV', precio: 120, departamento: 'Hogar'},
    {nombre: 'Tuppers', precio: 10, departamento: 'Hogar'}
];
// ESTOS METODOS RECIBEN UNA FUNCION ANONIMA LA CUAL SE EJECUTA POR CADA ELEMENTO DEL ARRAY. hay otras funciones que dejan de ejecutarse antes de recorrer todos los elementos del array.

// FIND(). Encuentra la PRIMERA aparicion de lo que estemos buscando dentro del array. El item representa cada elemento del array.
const muebleTV = productos.find(item => {
    // return item.nombre === "Mueble TV";
    return (/Mueble/g).test(item.nombre);
})
console.log(muebleTV);


// MAP(). Modifica el array antiguo, por lo que indico que quiero generar un nuevo objeto de esta forma el original queda tal cual.
const productosIva = productos.map(item => {
    let newPrecio = item.precio + item.precio * 0.21;
    // Creamos el nuevo objeto con todos los elementos de item ...item
    return { ...item, precio: newPrecio }
})
console.log(productosIva);


// FILTER(). Permite recuperar nuevo array con los elementos que cumplan con la condicion que especificamos.
const productosHogar = productos.filter(item => {
    return item.departamento === 'Hogar';
}) 
console.log(productosHogar);


// EVERY(). Permite aplicar una condicion a TODOS los elementos del array, y si TODOS cumplen con la condicion devuelve true si no false.
const check = productos.every(item => {
    return item.precio >= 100;
})
console.log(check);


// SOME(). Si ALGUN elemento cumple con la condicion devuelve true
const alguno = productos.some(item => {
    return item.precio >= 500;
})
console.log(alguno);


// REDUCE(). Permite realizar calculos en los elementos devuelve un unico valor. recibe como parametro la variable que ira acumulando el resultado la cual puedo indicar en que valor inicia.
const precioTotal = productos.reduce((total, item) => {
    return total + item.precio;
}, 0) //Valor inicial 0
console.log(precioTotal);