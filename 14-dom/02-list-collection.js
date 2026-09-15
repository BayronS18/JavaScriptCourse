// ===================================================
// APUNTES: HTMLCollection vs NodeList (Acceso e Iteración)
// ===================================================

const collection = document.getElementsByTagName('p'); // HTMLCollection (Viva)
const list = document.querySelectorAll('p');          // NodeList (Estática)

console.log('HTMLCollection:', collection);
console.log('NodeList:', list);


// ---------------------------------------------------
// 1. HTMLCOLLECTION
// ---------------------------------------------------
console.log('--- HTMLCollection ---');

// Métodos de Acceso:
const itemPorNombre = collection.namedItem('chanchito'); // Busca por atributo id o name
const itemPorIndice = collection.item(3);                // Por posición
const itemPorSintaxisArray = collection[3];              // La forma más común (corchetes)

// Formas de Iterar:
// ❌ NO se puede usar collection.forEach() directamente (dará error).

// ✅ Opción A: Usar 'for...of' directamente
for (const elemento of collection) {
  console.log(elemento);
}

// ✅ Opción B: Convertir a Array verdadero con Array.from()
Array.from(collection).forEach(elemento => console.log(elemento));

// ✅ Opción C: Convertir a Array verdadero con el operador Spread [...]
[...collection].forEach(elemento => console.log(elemento));


// ---------------------------------------------------
// 2. NODELIST
// ---------------------------------------------------
console.log('--- NodeList ---');

// Métodos de Acceso:
const itemNodoMetodo = list.item(3);
const itemNodoCorchetes = list[3];

// Formas de Iterar:
// ✅ Tiene .forEach() integrado de forma nativa:
list.forEach(elemento => console.log(elemento));

// Generadores de Iteradores (extra):
const entries = list.entries(); // [índice, elemento]
const keys = list.keys();       // Índices (0, 1, 2...)
const values = list.values();   // Los elementos HTML