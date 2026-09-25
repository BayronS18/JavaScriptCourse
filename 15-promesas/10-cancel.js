// 💡 MANEJO DE ABORTCONTROLLER EN FETCH
// Permite cancelar peticiones HTTP en curso.

// 1. Declaramos el controlador y la señal AFUERA (Scope Global)
// De esta forma la variable existe en todo el archivo.
const controller = new AbortController();
const { signal } = controller;

async function getTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  try {
    console.log("1. Lanzando petición por la red...");

    // 2. Le pasamos 'signal' a la petición
    const response = await fetch(url, { signal });

    if (!response.ok) {
      throw new Error(`Error HTTP Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("2. Datos recibidos:", data);

  } catch (error) {
    // 3. Capturamos el error y verificamos si fue por abortar
    if (error.name === 'AbortError') {
      console.log("🛑 ¡ÉXITO! La petición fue abortada correctamente antes de responder.");
    } else {
      console.log("❌ Error en la petición:", error.message || error);
    }
  }
}

// ----------------------------------------------------
// PRUEBA DE EJECUCIÓN
// ----------------------------------------------------

// Paso A: Inicias la petición
getTodos();

// Paso B: Cancelas la petición a los 10 milisegundos (mientras viaja por la red)
setTimeout(() => {
  console.log("⚡ Cancelando petición...");
  controller.abort(); // ✅ Ahora la variable 'controller' SÍ existe aquí
}, 10);