// ==========================================
// APUNTES: Herencia Prototípica en JavaScript
// ==========================================

// 1. Clases Padre / Madre (Constructores)
function Entidad() {}

// Métodos compartidos en el prototipo base
Entidad.prototype.save = function () {
  console.log(`Guardando... ${this.name}`);
};

Entidad.prototype.validate = function () {
  console.log(`Validando... ${this.name}`);
};


// 2. Clases Hijas
function User(name) {
  this.name = name || 'Usuario Anónimo';
}

function Product(name) {
  this.name = name || 'Producto Sin Nombre';
}


// ==========================================
// TRES FORMAS DE CONECTAR LA CADENA DE PROTOTIPOS:
// ==========================================

// ❌ FORMA 1 (INCORRECTA): Asignación directa
// User.prototype = Entidad.prototype; 
// Problema: Mutación cruzada. Todo lo que agregues a User se hereda en Entidad y Product.

// ⚠️ FORMA 2 (MODERNA / LENTA EN RENDIMIENTO): Object.setPrototypeOf
// Object.setPrototypeOf(User.prototype, Entidad.prototype);
// Ventaja: No pierde la propiedad .constructor.
// Desventaja: Impacta el rendimiento del motor JS al modificar objetos existentes.

// ✅ FORMA 3 (ESTÁNDAR CLÁSICO): Object.create()
// Crea un nuevo objeto cuyo prototipo (__proto__) apunta a Entidad.prototype
User.prototype = Object.create(Entidad.prototype);
User.prototype.constructor = User; // Es esencial restaurar la referencia del constructor

Product.prototype = Object.create(Entidad.prototype);
Product.prototype.constructor = Product;


// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================
const user = new User('Bayron');
const producto = new Product('Notebook');

// Métodos heredados de Entidad:
user.validate();  // Validando... Bayron
user.save();      // Guardando... Bayron

producto.validate(); // Validando... Notebook
producto.save();     // Guardando... Notebook

// Verificación de la Cadena de Protototipos
console.log(user instanceof User);    // true
console.log(user instanceof Entidad); // true (¡Herencia confirmada!)