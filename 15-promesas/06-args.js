// 💡 CLASE 07: ARGUMENTOS Y PARÁMETROS EN PROMESAS
// Para pasarle datos a una promesa, la envolvemos dentro de una función.

// 1. Funciones que reciben un parámetro y retornan una Promesa
const buscarUsuario = (nombre) => new Promise((resolve, reject) => {
  // Simulamos que procesamos el parámetro 'nombre'
  resolve(nombre);
});

const agregarSaludo = (usuario) => new Promise((resolve, reject) => {
  // Recibe el resultado de la promesa anterior y lo transforma
  resolve(`${usuario}, Hola Mundo`);
});


// --- FORMA 1: Sintaxis Estándar (Flecha explícita) ---
buscarUsuario('Chanchito feliz')
  .then((user) => agregarSaludo(user))
  .then((data) => console.log("Forma 1:", data)) // "Chanchito feliz, Hola Mundo"
  .catch((err) => console.log("Error:", err));


// --- FORMA 2: Sintaxis Pro (Paso por referencia) ---
// Como el argumento que sale del primer .then pasa idéntico a la segunda función,
// podemos simplificar '.then(user => agregarSaludo(user))' a solo '.then(agregarSaludo)'
buscarUsuario('Chanchito feliz')
  .then(agregarSaludo)
  .then(console.log) // Incluso console.log recibe directo el valor
  .catch(console.error);