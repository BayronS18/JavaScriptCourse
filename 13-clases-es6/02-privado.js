// ===================================================
// APUNTES: Campos y Métodos Privados en ES6+ (#)
// ===================================================

// ---------------------------------------------------
// 1. VERSIÓN ANTIGUA (Uso de Closures / Funciones)
// ---------------------------------------------------
/* 
function User(a) {
  let name = a; // Variable privada por alcance (closure)
  this.getName = function() { return name; }; // Privilegiada (gasta memoria por objeto)
}

const usuario = new User('Bayron');
console.log(usuario.getName()); // 'Bayron'
console.log(usuario.name); // undefined (está oculta)
*/

// ---------------------------------------------------
// 2. VERSIÓN MODERNA (Private Fields con '#')
// ---------------------------------------------------

class User {
  // 🔒 DECLARACIÓN OBLIGATORIA: Los campos privados DEBEN declararse fuera del constructor
  #name;

  constructor(name) {
    this.#name = name; // Asignación de la propiedad privada
  }

  // 🔒 MÉTODOS PRIVADOS: Solo accesibles dentro de la misma clase
  // En las DevTools de Chrome aparece dentro del slot [[PrivateMethods]]
  #logger() {
    console.log('Registro interno: Leyendo el nombre privado...');
  }

  // 🔓 MÉTODO PÚBLICO: Expone el dato de forma controlada (Getter)
  getName() {
    this.#logger(); // Invocación interna permitida
    return this.#name;
  }
}

// ---------------------------------------------------
// 3. PRUEBAS DE ENCAPSULAMIENTO Y SEGURIDAD
// ---------------------------------------------------

const usuario2 = new User('Bayron');

console.log(usuario2.getName()); // ✅ Funciona: 'Bayron'

// ❌ Intentar acceder directamente genera un SyntaxError:
// console.log(usuario2.#name); 
// ERROR: Private field '#name' must be declared in an enclosing class

// ⚠️ Intentar "hackear" el acceso con corchetes:
console.log(usuario2['#name']); // undefined

// 💡 ¿Qué pasa si asignamos usuario2['#name'] = 'PePe'?
usuario2['#name'] = 'PePe';

// ¡No modifica la variable privada! 
// Simplemente creó una propiedad pública común llamada literal "#name".
console.log(usuario2.getName()); // Sigue devolviendo 'Bayron' (el dato real está a salvo)
console.log(usuario2);            // Muestra ambas cosas en consola: el #name privado y el "#name" público