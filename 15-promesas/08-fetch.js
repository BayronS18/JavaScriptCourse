// 💡 CLASE: API FETCH
// Permite realizar peticiones HTTP (asíncronas) a servidores/APIs.

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// --- OPCIÓN 1: Con Promesas (.then / .catch) ---
fetch(url) // 1. Realiza la petición GET
  .then((response) => {
    // ⚠️ REGLA DE ORO: fetch NO cae en .catch() con errores 404 o 500.
    // Usamos 'response.ok' (true si el status está entre 200 y 299).
    if (response.ok) {
      // .json() transforma la respuesta a un objeto/array de JS (retorna una promesa)
      return response.json(); 
      
      // Si la respuesta fuera texto plano o HTML, usaríamos:
      // return response.text(); 
    }

    // Si 'response.ok' es false, forzamos la caída al .catch()
    return Promise.reject(`Error HTTP: ${response.status}`);
  })
  .then((data) => {
    // 2. Aquí recibimos los datos convertidos a JS
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    // Captura errores de red O los rechazados con Promise.reject()
    console.log("Error en la petición:", error);
  });


// --- OPCIÓN 2: La forma moderna con Async / Await (Mucho más limpia) ---
async function obtenerTodo() {
  try {
    const response = await fetch(url);

    // Validamos el estado de la respuesta
    if (!response.ok) {
      throw new Error(`Error HTTP Status: ${response.status}`);
    }

    // Esperamos la conversión a JSON
    const data = await response.json();
    console.log("Datos con Async/Await:", data);

  } catch (error) {
    console.log("Error atrapado:", error.message);
  }
}

obtenerTodo();