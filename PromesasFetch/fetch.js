// Una de las caracteristicas mas importantes de la API FETCH es que se utilizan promesas, devuelve un objeto con los metodos then y catch.
// Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(error => console.log(error));

// Verificar estado de respuesta
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }else {
//             return Promise.reject(response.status);
//         }
//     })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// Fetch puede aceptar un segundo parametro opcional, un objeto init para permitir controlar algunos ajustes
// let objetoInit = {
//     method: 'POST', //GET, PUT, DELETE
//     headers: new Headers(),
//     mode: 'cors', //Same-origin
//     body: {}
// }

// let objetoInit = {
//     method: 'PUT', //GET, PUT, DELETE
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     mode: 'cors', //Same-origin
//     body: JSON.stringify({
//         id: 1,
//         title: 'FETCH API',
//         body: 'Es bastante sencillo se supone...',
//         userId: 1
//     })
// }

// let objetoInit = {
//     method: 'GET', //GET, PUT, DELETE, GET NO LLEVA UN CUERPO
//     headers: new Headers(),
//     mode: 'cors', //Same-origin
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', objetoInit)
//     .then(response => {
//         return response.json()
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     })

const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    fetch('usuarios.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(respuesta => {
            respuesta.forEach(elemento => {
                let {company: {name: nombreCompañia}} = elemento;
                let {id, name, email} = elemento;
                
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${nombreCompañia}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();