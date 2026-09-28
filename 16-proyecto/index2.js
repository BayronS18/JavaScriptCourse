//lo mas importante con lo que deberia quedarme

// URL base de la API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// 1. OBTENER USUARIOS (GET)
async function obtenerUsuarios() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Status error: ${response.status}`);
    
    const usuarios = await response.json();
    return usuarios; // Retorna la lista enviada por el servidor
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
  }
}

// 2. GUARDAR USUARIO (POST + VALIDACIÓN)
async function guardarUsuario(datosFormulario) {
  // A) Validación previa
  if (!datosFormulario.name || !datosFormulario.email) {
    console.warn("⚠️ Validación fallida: Los campos no pueden estar vacíos.");
    return;
  }

  // B) Petición a la API
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosFormulario)
    });

    if (!response.ok) throw new Error(`Status error: ${response.status}`);

    const usuarioCreado = await response.json();
    console.log("✅ Guardado en el servidor con éxito:", usuarioCreado);
    return usuarioCreado;

  } catch (error) {
    console.error("Error al guardar usuario:", error.message);
  }
}