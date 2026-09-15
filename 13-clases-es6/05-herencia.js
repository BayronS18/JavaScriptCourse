// ===================================================
// APUNTES: Herencia en Clases ES6 (extends y super)
// ===================================================

// 1. CLASE PADRE (Superclase)
// Define las propiedades y métodos comunes para cualquier entidad del sistema
class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {
    console.log(`💾 Guardando registro con ID ${this.id} en la Base de Datos...`);
  }
}

// 2. CLASE HIJA (Subclase)
// 'extends Entidad' establece la relación de herencia
class User extends Entidad {
  constructor(id, name) {
    // ⚠️ REGLA DE ORO DE SUPER:
    // Debe llamarse OBLIGATORIAMENTE antes de usar 'this'.
    // Ejecuta el constructor de Entidad, asignando this.id y this.created_at
    super(id); 

    this.name = name; // Propiedad propia y específica de User
  }

}

// ---------------------------------------------------
// USO Y VERIFICACIÓN
// ---------------------------------------------------

// Creamos un usuario pasando el ID dinámico y el Nombre
const usuario1 = new User(101, 'Bayron');

console.log(usuario1);
// Salida: User { id: 101, created_at: Date, name: 'Bayron' }

// Método heredado (y sobrescrito)
usuario1.save();
// Salida:
// 👤 Guardando usuario 'Bayron'...
// 💾 Guardando registro con ID 101 en la Base de Datos...

// Comprobación de tipos
console.log(usuario1 instanceof User);   // true
console.log(usuario1 instanceof Entidad); // true (Hereda de Entidad)