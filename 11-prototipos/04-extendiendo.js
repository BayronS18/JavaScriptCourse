// ==========================================
// EXTENDIENDO PROTOTIPOS NATIVOS
// ==========================================

// 1. ¿Qué es?
// Es la práctica de añadir métodos personalizados a los prototipos nativos de JS (Object, Array, String, etc.)
// para que todos los objetos creados tengan acceso a esa nueva funcionalidad.

Object.prototype.isEqual = function (obj) {
  // Lógica para comparar si 'this' es igual a 'obj'
  return JSON.stringify(this) === JSON.stringify(obj);
};

let x = { a: 1 };
console.log(x.isEqual({ a: 1 })); // true

// ------------------------------------------
// ⚠️ ¿POR QUÉ NO SE RECOMIENDA HACER ESTO? (Anti-patrón)
// ------------------------------------------

/*
 1. Colisión de nombres (Naming Collisions):
    Si en el futuro JavaScript (o una librería de terceros como Lodash) añade un método oficial 
    llamado .isEqual(), tu función personalizada lo sobrescribirá o romperá tu código.

 2. Contaminación de iteraciones:
    Al agregar propiedades a Object.prototype, estas aparecerán en todos los bucles `for...in` 
    de tu proyecto si no están filtradas con Object.hasOwn().

 3. Comportamiento impredecible:
    Modifica el comportamiento global del lenguaje para todo el equipo de trabajo.
*/

// ------------------------------------------
// ✅ MEJOR ALTERNATIVA (Funciones independientes / Utilitarios)
// ------------------------------------------

// En lugar de modificar el prototipo global, crea funciones auxiliares independientes:
function sonIguales(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(sonIguales(x, { a: 1 })); // true