// ===================================================
// APUNTES: Módulo 13 - Clases en ES6 (Sugar Syntax)
// ===================================================

// ---------------------------------------------------
// 1. DIVERGENCIA CON FUNCIONES CONSTRUCTORAS (Versión Antigua)
// ---------------------------------------------------
/*
function User(nombre) {
    this.nombre = nombre;
    this.instancia = function() {}; // Se duplica en CADA objeto
}

User.prototype.login = function () {
    console.log('Iniciando sesión...'); // En el prototipo (compartido)
}
*/

// ---------------------------------------------------
// 2. VERSIÓN MODERNA CON CLASS
// ---------------------------------------------------

// ❌ const usuario0 = new User('Pepe'); 
// ERROR: A diferencia de las funciones tradicionales, las clases NO tienen 'hoisting' completo.
// No puedes instanciar antes de la declaración.

class User {
  // El constructor se ejecuta automáticamente al usar 'new'
  constructor(nombre) {
    this.nombre = nombre;
    this.instancia = function () {}; // Método creado en CADA instancia (gasta más memoria)
  }

  // 🔹 Class Field (Propiedad de clase):
  // Se asigna como propiedad propia de la INSTANCIA, no del prototipo.
  activo = true;

  // 🔹 Métodos definidos como Arrow Functions:
  // VAN A LA INSTANCIA. Útil para mantener el 'this' amarrado a la instancia,
  // pero no se comparte a través de la cadena de prototipos.
  logout = () => {
    console.log('Cerrando sesión...');
  };

  // 🔹 Métodos concisos (Sintaxis Estándar de Clase):
  // VAN AUTOMÁTICAMENTE AL PROTOTIPO (User.prototype.login).
  // Es la forma más óptima en memoria para compartir comportamiento.
  login() {
    console.log(`Iniciando sesión como ${this.nombre}...`);
  }
}

// ---------------------------------------------------
// 3. INSTANCIACIÓN Y PRUEBAS
// ---------------------------------------------------

const usuario1 = new User('Bayron');

// ❌ const usuario2 = User('Miguel'); 
// ERROR: TypeError: Class constructor User cannot be invoked without 'new'.
// En clases, invocar sin 'new' está estrictamente prohibido por el motor de JS.

console.log(usuario1);
usuario1.login();  // Método heredado del prototipo
usuario1.logout(); // Método propio de la instancia