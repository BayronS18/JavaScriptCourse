// ===================================================
// APUNTES: Selectores en el DOM (Búsqueda de Nodos)
// ===================================================

// ---------------------------------------------------
// 1. SELECTORES DE UN SOLO ELEMENTO (Retornan HTMLElement o null)
// ---------------------------------------------------

// Busca por ID únicamente (Rápido, pero rígido)
const cuerpoPorId = document.getElementById('cuerpo');


// Busca usando sintaxis de selector CSS (Flexibilidad total)
// Retorna ÚNICAMENTE el primer elemento que coincida
const cuerpoPorCSS = document.querySelector('#cuerpo'); 
const primerBoton = document.querySelector('.btn-primary');


// ---------------------------------------------------
// 2. SELECTORES DE MÚLTIPLES ELEMENTOS (Colecciones)
// ---------------------------------------------------

// A) HTMLCollection (Colección VIVA / Live)
// Se actualiza en tiempo real si el DOM cambia dinámicamente.
const elementosRed = document.getElementsByClassName('red');
const parrafosTag = document.getElementsByTagName('p');

// B) NodeList (Colección ESTÁTICA / Static)
// Es una "fotografía" fija. No cambia aunque agregues elementos nuevos al DOM.
// Además, la NodeList SÍ permite usar .forEach() directamente.
const parrafosCSS = document.querySelectorAll('p');


// ---------------------------------------------------
// 3. DEMOSTRACIÓN PRÁCTICA: Live vs Static
// ---------------------------------------------------

const pLive = document.getElementsByTagName('p'); // HTMLCollection (Viva)
const pStatic = document.querySelectorAll('p');   // NodeList (Estática)

console.log('Antes de agregar elemento:');
console.log('Live (HTMLCollection):', pLive.length);   // Ej: 4
console.log('Static (NodeList):', pStatic.length);     // Ej: 4

// Creación e inserción de un nuevo elemento en el DOM
const nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log('Después de agregar elemento al DOM:');
console.log('Live (HTMLCollection):', pLive.length);   // Muestra 5 (¡Se actualizó solo!)
console.log('Static (NodeList):', pStatic.length);     // Muestra 4 (Mantiene la fotografía)