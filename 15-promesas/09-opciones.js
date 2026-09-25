// 💡 REST APIs Y OPCIONES DE FETCH (POST, PUT, DELETE)

/*
  ARQUITECTURA REST:
  - GET    /todos      -> Obtenemos la lista entera
  - GET    /todos/1    -> Obtenemos un recurso específico
  - POST   /todos      -> Creamos un nuevo recurso (+ body)
  - PUT    /todos/1    -> Reemplazamos el recurso 1 completo (+ body)
  - PATCH  /todos/1    -> Modificamos parcialmente el recurso 1 (+ body)
  - DELETE /todos/1    -> Eliminamos el recurso 1
*/

const url = 'https://jsonplaceholder.typicode.com/todos';

// Objeto que queremos guardar en el backend
const nuevoTodo = {
  title: 'Comprar repuestos de auto',
  completed: false
};

// Petición con opciones completas
fetch(url, {
  method: 'POST', // Verbo HTTP
  headers: {
    // Le indica al servidor que el body es un formato JSON
    'Content-Type': 'application/json',
    // Credenciales de acceso / Seguridad
    'Authorization': 'Bearer mi_token_super_secreto'
  },
  // Convertimos el objeto de JS a String en formato JSON
  body: JSON.stringify(nuevoTodo),
  
  // Opcional: Control del caché del navegador (no-cache, reload, force-cache)
  cache: 'no-cache'
})
  .then((response) => {
    // Validamos que el servidor haya respondido un status 200-299 (ej. 201 Created)
    if (!response.ok) {
      return Promise.reject(`Error HTTP Status: ${response.status}`);
    }
    return response.json(); // La API nos devuelve el recurso creado
  })
  .then((data) => console.log('Recurso creado con éxito:', data))
  .catch((error) => console.error('Error en la petición:', error));