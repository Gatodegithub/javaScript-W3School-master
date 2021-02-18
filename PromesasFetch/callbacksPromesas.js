// function getSwDataCb(type, done) {
//     var request = new XMLHttpRequest();
//     request.open('get', `https://swapi.dev/api/${type}/?format=json`, false);
//     request.send(null);

//     if (request.status === 200) {
//         let res = JSON.parse(request.responseText);
//         done(null, res.results);
//     }else {
//         done('Error en la peticion', null);
//     }
// }

// getSwDataCb('planets', (err, items) => {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(items);
//     }
// })

function getSwDataPromise(type) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('get', `https://swapi.dev/api/${type}/?format=json`, false);
        request.send(null);

        if (request.status === 200) {
            let res = JSON.parse(request.responseText);
            resolve(res.results);
        } else {
            reject('Error en la petición');
        }
    })
}


// ESTO ES ASINCRONO, EL CONSOLE.LOG('FINAL') SE EJECUTA ANTES. ASI ME DOY CUENTA. No se queda pegada la ejecucion de nuestro script como lo haria con callbacks
// getSwDataPromise('planets')
//     .then((items) => {
//         return items.map(item => item.name); //No es necesario el return porq esta en una sola linea.
//     }).then((names) => {
//         console.log(names);
//     })
//     .catch((error) =>{
//         console.log(error);
//     });



// Para trabajar con async await necesito un metodo que devuelva una promesa. Con await vuelvo a la peticion sincrona. Para usar await tengo que estar dentro de un ambito sincrono por eso la funcion autoinvocada.
(async () => {
    let people = await getSwDataPromise('people');
    console.log(people);
})();

console.log('final');