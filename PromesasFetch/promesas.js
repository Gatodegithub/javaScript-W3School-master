// Las promesas las usamos para cuando tengamos algun proceso asincrono que tarde un tiempo determinado, y a nosotros no nos interese bloquear nuestro script.
// Para evitar el callback hells usamos las promesas
// Si la promesa se cumple (si la api es exitosa o se realiza el proceso que estemos haciendo) entonces se ejecutaria el resolve. si falla ejecutara el reject.

function cuadradoPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve() es como el return en caso de que la promesa se cumpla
            resolve({
                // Como la propiedad y el valor del objeto tienen el mismo nombre lo podemos simplificar
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}
// Cuando hay una funcion que devuelve una promesa tengo dos metodos para ir trabajando la asincronia, esta el metodo .then(): es el metodo que se ejecutara una vez que se cumpla la funcion. Podemos tener tantos metodos then como nosotros lo necesitemos.
// Al final de todos los then que yo necesite, tendre el metodo .catch(): Es el que capturara el error resultante del reject.
cuadradoPromise(0).then().catch();





// Si la promesa se resuelve de manera positiva llamamos al metodo resolve, si se resuelve de manera negativa llamamos al metodo reject.
// Las promesas tienen 2 estados diferentes una es PENDING mientras estamos esperando su resolucion, otro que es el estado de OKEY (resolve o reject)
function promesaConDelay(delay) {
    return new Promise((resolve, reject) => {
        // reject('Error en la promesa');
        setTimeout(() => {
            resolve(`Se resuelve despues de ${delay} milisegundos`);
        }, delay)
    })
}

promesaConDelay(500)
    .then((msg) => {
        console.log(msg);
        return 123;
    }).then((numero) => {
        console.log(numero);
        console.log('--------------------');
    })
    .catch((err) => {
        console.log(err);
    });

console.log('FINAL');

let prom1 = promesaConDelay(2000);
let prom2 = promesaConDelay(1000);
let prom3 = promesaConDelay(4000);
// Lanzar todas las promesas en paralelo y cuando termine la mas lenta obtener todos los resultados en un array. all() recibe un array de promesas
Promise.all([prom1, prom2, prom3])
    .then(messages => {
        console.log(messages)
    })

//Con race() se devuelve el mensaje de la primera que termina en ejecutarse o rechazarse. Para casos en los que yo quisiera recuperar el valor de la ejecucion mas rapida de todas las promesas.
Promise.race([prom1, prom2, prom3])
    .then(messages => {
        console.log(messages)
    })



let promise = Promise.resolve([2, 4, 6, 8]);

promise.then(response => {
        console.log(response);
        return response.map(element => {
            return element * 2;
        });
    })
    .then(response => {
        console.log(response);
        return response.filter(element => {
            return element > 10;
        })
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => alert(error));

console.log()


let primeraPromesa = Promise.resolve('Hola');
let segundaPromesa = primeraPromesa.then(response => {
    return response + ' Buen Dia';
})
segundaPromesa.then(response => {
    return response;
})
.then(response => {
    return response + ' !!';
})
.then(response => {
    return response.toUpperCase();
})
.then(response => {
    console.log(response);
})